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
      panel.classList.remove('hidden');
      if (panel.title != 'Measure') {
        measurement.measurement.clear();
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

view.when(initWidgets);
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
