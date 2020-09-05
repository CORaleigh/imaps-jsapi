import './css/main.css';
import { map } from './data/app';
import { initTips } from './tips';
import { showAlert } from './alert';
import { toggleAction, enableActionbar } from './actionbar';
import MapView from 'esri/views/MapView';
import geometryEngine from 'esri/geometry/geometryEngine';
// widget utils
import { initWidgets, select, propertySearch, layers } from './widgets';
import { initPanels, initPanelHeaders } from './panels';
import { initMenu } from './menu';
/**
 * Initialize application
 */
export const view = new MapView({
  container: 'viewDiv',
  map
});

//handle when view is ready
view.when(() => {
  view.map.allLayers.forEach(layer => {
    if (layer.type != 'group') {
      layer.watch('visible', visible => {
        layers.layerList?.operationalItems.forEach(item => {
          if (item.layer.type === 'group') {
            const child = item.children.find(i => {
              return i.layer === layer;
            });
            if (child) {
              child.panel.open = visible;
            }
          }
        });
      });
    } else {
      layer.watch('visible', visible => {
        const group = layers.layerList.operationalItems.find(i => {
          return i.layer === layer;
        });
        if (group) {
          group.open = visible;
        }
      });
    }
  });
  const propertyLayer = map.allLayers.find(layer => {
    return layer.title === 'Property' && layer.type === 'feature';
  });
  view.on('hold', e => {
    propertySearch.geometry = e.mapPoint;
    setTimeout(() => {
      toggleAction('Search');
    }, 1000);
  });
  view
    .whenLayerView(propertyLayer)
    .then(() => {
      document.querySelector('#mapLoader')?.toggleAttribute('active');
      propertySearch.propertyLayer = propertyLayer as __esri.FeatureLayer;
      //search by geometry after sketch creation in select widget
      select.viewModel.sketch.on('create', (ev: any) => {
        if (ev.state === 'complete') {
          if (select.viewModel?.bufferDistance > 0) {
            const g = geometryEngine.geodesicBuffer(ev.graphic.geometry, select.viewModel.bufferDistance, 'feet');
            propertySearch.geometry = g as __esri.Polygon;
            ev.graphic.geometry = g;
            select.viewModel.graphics.add(ev.graphic);
            ev.graphic.symbol = {
              type: 'simple-fill',
              style: 'none',
              outline: { style: 'short-dash', width: 2.5, color: [221, 221, 221, 1] },
              color: [255, 243, 13, 0.25]
            };
            view.goTo(ev.graphic);
          } else {
            propertySearch.geometry = ev.graphic.geometry;
          }
          toggleAction('Search');
        }
      });
    })
    .catch((reason: any) => {
      //on error loading property layer, display alert
      console.log(reason);
      showAlert('Property layer did not load. Please contact iMAPS Help Desk.', 'red');
    });
});
view.when(initWidgets);
view.when(initTips);
//save web map to local storage on pagehide
window.addEventListener('pagehide', () => {
  view.map.removeMany(
    view.map.allLayers
      .filter(layer => {
        return layer.type === 'group' && !(layer as __esri.GroupLayer).layers.length;
      })
      .toArray()
  );
  const json = (view.map as any).toJSON();
  json.initialState.viewpoint.targetGeometry = view.extent;
  window.localStorage.setItem('imaps', JSON.stringify(json));
});

//show first panel on devices wider than 500px by default
if (window.outerWidth >= 500) {
  document.querySelector('calcite-panel')?.classList.remove('hidden');
  document.querySelector('calcite-panel')?.removeAttribute('dismissed');
  document.querySelector('calcite-action-bar calcite-action')?.toggleAttribute('active');
}

//modify DOM after map view loads
view.when(() => {
  initPanels();
  enableActionbar();
});

initPanelHeaders();
initMenu();
