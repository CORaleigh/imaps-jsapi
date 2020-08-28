// styles
import './css/main.css';

// Map data
import { map } from './data/app';
// MapView
import MapView from 'esri/views/MapView';
import geometryEngine from 'esri/geometry/geometryEngine';
// widget utils
import { initWidgets, measurement, select, propertySearch, drawWidget } from './widgets';
/**
 * Initialize application
 */
const view = new MapView({
  container: 'viewDiv',
  map
});

const toggleAction = (action: string) => {
  document.querySelectorAll('.panel').forEach((panel: HTMLElement) => {
    if (panel.title != action) {
      panel.classList.add('hidden');
    } else {
      panel.removeAttribute('dismissed');
      debugger;
      if (window.outerWidth < 500) {
        panel.setAttribute('style', 'min-width: calc(100% - 50px)');
      } else {
        panel.setAttribute('style', 'min-width: 350px');
      }
      panel.classList.remove('hidden');
      if (panel.title != 'Measure') {
        //measurement.measurement.clear();
      } else {
        measurement.measureOpened();
      }
    }
  });
};

const actions: any = document.querySelectorAll('calcite-action');
actions?.forEach((action: any) => {
  action?.addEventListener('click', (e: any) => {
    toggleAction(e.target.text);
  });
});

view.when(() => {
  const propertyLayer = map.layers.find(layer => {
    return layer.title === 'Property';
  });
  view.on('hold', e => {
    propertySearch.geometry = e.mapPoint;
  });
  view.whenLayerView(propertyLayer).then(() => {
    propertySearch.propertyLayer = propertyLayer as __esri.FeatureLayer;
    select.viewModel.sketch.on('create', (ev: any) => {
      if (ev.state === 'complete') {
        debugger;
        if (select.viewModel?.bufferDistance > 0) {
          const g = geometryEngine.geodesicBuffer(ev.graphic.geometry, select.viewModel.bufferDistance, 'meters');
          propertySearch.geometry = g as __esri.Polygon;
        } else {
          propertySearch.geometry = ev.graphic.geometry;
        }
        toggleAction('Search');
      }
    });
  });
});

document.querySelectorAll('calcite-panel').forEach(item => {
  item.addEventListener('calcitePanelDismissedChange', event => {
    document.querySelectorAll('calcite-panel').forEach(item => {
      item.setAttribute('style', 'min-width: 0px');
      document.querySelectorAll('.maximize').forEach(item => {
        item.setAttribute('icon', 'maximize');
      });
    });
  });
});
document.querySelectorAll('.maximize').forEach(item => {
  item.addEventListener('click', event => {
    item.parentElement?.parentElement?.removeAttribute('dismissed');
    item.parentElement?.parentElement?.classList.remove('hidden');
    if (item.getAttribute('icon') === 'maximize') {
      item.setAttribute('icon', 'minimize');
      item.parentElement?.parentElement?.setAttribute('style', 'min-width: calc(100% - 50px)');
    } else if (item.getAttribute('icon') === 'minimize') {
      item.setAttribute('icon', 'maximize');
      item.parentElement?.parentElement?.setAttribute('style', 'min-width:350px');
    }
  });
});
window.onresize = event => {
  if (event.target.outerWidth >= 500) {
    document.querySelectorAll('calcite-panel').forEach(item => {
      debugger;
      if (item.querySelector('.maximize')?.getAttribute('icon') === 'minimize') {
        item.setAttribute('style', 'min-width: calc(100% - 50px)');
      } else {
        item.setAttribute('style', 'min-width: 350px');
      }
    });
  } else {
    document.querySelectorAll('calcite-panel').forEach(item => {
      if (item.getAttribute('dismissed')) {
        item.setAttribute('style', 'min-width: 0px');
      } else {
        item.setAttribute('style', 'min-width: calc(100% - 50px)');
      }
    });
  }
};
view.when(initWidgets);
debugger;

document.querySelectorAll('calcite-panel').forEach(item => {
  debugger;
  item?.shadowRoot?.querySelector('.content-container')?.setAttribute('style', 'height: 100%');
});
window.addEventListener('beforeunload', () => {
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
  // if (drawWidget.viewModel.graphics.graphics.length) {
  //   drawWidget.viewModel.graphics.graphics.removeMany(
  //     drawWidget.viewModel.graphics.graphics.filter(graphic => {
  //       return !graphic.geometry;
  //     })
  //   );
  //   window.localStorage.setItem('imaps_draw', JSON.stringify((drawWidget.viewModel.graphics.graphics as any).toJSON()));
  // }
});
