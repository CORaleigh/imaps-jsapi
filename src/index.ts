import './css/main.css';
import { map } from './data/app';
import { initTips } from './tips';
import { showAlert } from './alert';
//import { toggleAction, enableActionbar } from './actionbar';
import MapView from 'esri/views/MapView';

import WebMap from 'esri/WebMap';
// widget utils
import { initWidgets, select, propertySearch, layers } from './widgets';
import { initPanels, initPanelHeaders } from './panels';
import { initMenu } from './menu';
import ActionBar from './widgets/ActionBar';
import watchUtils from 'esri/core/watchUtils';
const actionBar = new ActionBar({ side: 'right', container: 'actionBar' });

const leftActionBar = new ActionBar({ side: 'left', container: 'leftActionbar' });

/**
 * Initialize application
 */
export let view: MapView;

function checkLocalStorage(view: MapView) {
  if (window.localStorage.getItem('imaps')) {
    const webmap: WebMap = WebMap.fromJSON(JSON.parse(window.localStorage.getItem('imaps') as string));
    webmap.load().then(() => {
      view.map.allLayers.forEach(layer => {
        const lyr = webmap.allLayers.find(l => {
          return layer.id === l.id;
        });
        layer.visible = lyr?.visible;
        layer.opacity = lyr?.opacity;
      });
      view.map.basemap = webmap.basemap;
      view.extent = webmap.initialViewProperties.viewpoint.targetGeometry.extent;
    });
  }
}
//handle when view is ready

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
if (window.innerWidth >= 500) {
  document.querySelector('calcite-panel.right')?.classList.remove('hidden');
  document.querySelector('calcite-panel.right')?.removeAttribute('dismissed');
}

//modify DOM after map view loads
//view.when(() => {
//actionBar.initActions();

initPanels(actionBar.actions);
//actionBar.view = view;
//});

watchUtils.watch(actionBar, 'actions', actions => {
  if (actions.length && !view) {
    actionBar.enableActionbar();

    view = new MapView({
      container: 'viewDiv',
      map
    });
    view.when(() => {
      actionBar.view = view;
      leftActionBar.view = view;
      checkLocalStorage(view);
      view.map.watch('layers', () => {
        view.map.allLayers.forEach(layer => {
          if (layer.type != 'group') {
            layer.watch('visible', visible => {
              layers?.layerList?.operationalItems.forEach(item => {
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
              const group = layers?.layerList.operationalItems.find(i => {
                return i.layer === layer;
              });
              if (group) {
                group.open = visible;
              }
            });
          }
        });
      });

      const propertyLayer = map.allLayers.find(layer => {
        return layer.title === 'Property' && layer.type === 'feature';
      });
      view.on('hold', e => {
        propertySearch.geometry = e.mapPoint;
        setTimeout(() => {
          //toggleAction('Search');
        }, 1000);
      });
      view
        .whenLayerView(propertyLayer)
        .then(() => {
          document.querySelector('#mapLoader')?.toggleAttribute('active');
          propertySearch.propertyLayer = propertyLayer as __esri.FeatureLayer;
          //search by geometry after sketch creation in select widget
          select.viewModel.watch('geometry', geometry => {
            propertySearch.geometry = geometry;
            actionBar.actions.forEach((action: any) => {
              if (action.text === 'Search') {
                actionBar.toggleAction(action);
              }
            });
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
  }
});

initPanelHeaders();
initMenu();
