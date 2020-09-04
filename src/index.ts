import './css/main.css';
import { map } from './data/app';
import { initTips } from './tips';
import { showAlert } from './alert';
import MapView from 'esri/views/MapView';
import geometryEngine from 'esri/geometry/geometryEngine';
// widget utils
import { initWidgets, measurement, select, propertySearch, layers } from './widgets';
/**
 * Initialize application
 */
const view = new MapView({
  container: 'viewDiv',
  map
});

//handle action bar toggle
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

const actions: NodeListOf<Element> = document.querySelectorAll('calcite-action');
actions?.forEach((action: Element) => {
  action?.addEventListener('click', (e: any) => {
    toggleAction(e.target.text);
    actions.forEach((action: any) => {
      action.removeAttribute('active');
    });
    action.toggleAttribute('active');
  });
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
    toggleAction('Search');
  });
  view
    .whenLayerView(propertyLayer)
    .then(() => {
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

//handle panel maximize/minimize
document.querySelectorAll('.maximize').forEach(item => {
  item.addEventListener('click', () => {
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

//handle when device changes sizes
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

//modify DOM after map view loads
view.when(() => {
  document.querySelectorAll('calcite-panel').forEach(item => {
    const i: HTMLElement = item?.shadowRoot?.querySelector('.content-container') as HTMLElement;
    i.innerHTML += '<style>.content-container { height: 100%; } </style>';
    item.addEventListener('calcitePanelDismissedChange', e => {
      if (window.outerWidth <= 500) {
        if ((e.target as any).dismissed) {
          document.querySelector('#viewDiv')?.classList.remove('below');
        } else {
          document.querySelector('#viewDiv')?.classList.add('below');
        }
      }
      if ((e.target as any).dismissed) {
        actions.forEach((action: any) => {
          action.removeAttribute('active');
        });
      }
    });
  });
  document.querySelectorAll('calcite-action').forEach(item => {
    item.removeAttribute('disabled');
  });
});

//override CSS for calcite panel header
document.querySelectorAll('calcite-panel div').forEach(panel => {
  if (panel.slot === 'header-trailing-content') {
    panel.setAttribute('style', 'display: flex; flex-direction: row;');
  }
});
