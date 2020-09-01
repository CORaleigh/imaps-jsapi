// styles
import './css/main.css';

// Map data
import { map } from './data/app';
import { initTips } from './tips';
import { showAlert } from './alert';
// MapView
import MapView from 'esri/views/MapView';
import geometryEngine from 'esri/geometry/geometryEngine';
// widget utils
import { initWidgets, measurement, select, propertySearch, layerList } from './widgets';
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
  view.map.allLayers.forEach(layer => {
    if (layer.type != 'group') {
      layer.watch('visible', visible => {
        layerList.operationalItems.forEach(item => {
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
    }
  });
  const propertyLayer = map.allLayers.find(layer => {
    return layer.title === 'Property' && layer.type === 'feature';
  });
  view.on('hold', e => {
    propertySearch.geometry = e.mapPoint;
  });
  view
    .whenLayerView(propertyLayer)
    .then(() => {
      propertySearch.propertyLayer = propertyLayer as __esri.FeatureLayer;
      select.viewModel.sketch.on('create', (ev: any) => {
        if (ev.state === 'complete') {
          if (select.viewModel?.bufferDistance > 0) {
            const g = geometryEngine.geodesicBuffer(ev.graphic.geometry, select.viewModel.bufferDistance, 'meters');
            propertySearch.geometry = g as __esri.Polygon;
          } else {
            propertySearch.geometry = ev.graphic.geometry;
          }
          toggleAction('Search');
        }
      });
    })
    .catch((reason: any) => {
      console.log(reason);
      showAlert('Property layer did not load. Please contact iMAPS Help Desk.', 'red');
    });
});

if (window.outerWidth >= 500) {
  document.querySelector('calcite-panel')?.classList.remove('hidden');
}

document.querySelectorAll('calcite-panel').forEach(item => {
  item.addEventListener('calcitePanelDismissedChange', () => {
    document.querySelectorAll('calcite-panel').forEach(item => {
      item.setAttribute('style', 'min-width: 0px');
      document.querySelectorAll('.maximize').forEach(item => {
        item.setAttribute('icon', 'maximize');
      });
    });
  });
});
document.querySelectorAll('.maximize').forEach(item => {
  item.addEventListener('click', () => {
    debugger;
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
window.onresize = () => {
  if ((event?.target as any)?.outerWidth >= 500) {
    document.querySelectorAll('calcite-panel').forEach(item => {
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
        item.setAttribute('style', 'min-width: calc(100% src)');
      }
    });
  }
};
view.when(initWidgets);

view.when(initTips);

//document.querySelectorAll('calcite-panel').forEach(item => {
//item?.shadowRoot?.innerHTML.querySelector('.content-container')?.setAttribute('style', 'height: 100%');
// (item.shadowRoot as any).innerHTML += '<style>.content-container { height: 100%; } </style>';
//});
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
  // if (drawWidget.viewModel.graphics.graphics.length) {
  //   drawWidget.viewModel.graphics.graphics.removeMany(
  //     drawWidget.viewModel.graphics.graphics.filter(graphic => {
  //       return !graphic.geometry;
  //     })
  //   );
  //   window.localStorage.setItem('imaps_draw', JSON.stringify((drawWidget.viewModel.graphics.graphics as any).toJSON()));
  // }
});

document.querySelectorAll('calcite-panel div').forEach(panel => {
  if (panel.slot === 'header-trailing-content') {
    panel.setAttribute('style', 'display: flex; flex-direction: row;');
  }
});
