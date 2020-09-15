// Widgets
import Legend from 'esri/widgets/Legend';
import Print from 'esri/widgets/Print';
import Bookmarks from 'esri/widgets/Bookmarks';
import PropertySearch from './widgets/PropertySearch';
import CoordinateConversion from 'esri/widgets/CoordinateConversion';
import Expand from 'esri/widgets/Expand';
import Measure from './widgets/Measure';
import Compass from 'esri/widgets/Compass';
import Locate from 'esri/widgets/Locate';
import Track from 'esri/widgets/Track';
import Fullscreen from 'esri/widgets/Fullscreen';

import { condosTable, addressTable, featureLayer } from './data/search';
import esri = __esri;
import Draw from './widgets/Draw';
import Select from './widgets/Select';
import BaseMaps from './widgets/BaseMaps';
import Layers from './widgets/Layers';
import LocationSearch from './widgets/LocationSearch';
import OverviewMap from './widgets/OverviewMap';
import Clear from './widgets/Clear';

export const measurement: Measure = new Measure();
export const select: Select = new Select();
export let layers: Layers;
export let legend: Legend;
export let basemaps: BaseMaps;
export let bookmarks: Bookmarks;
export let locationSearch: LocationSearch;

export let printWidget: Print;
export let propertySearch: PropertySearch;
export const drawWidget: Draw = new Draw();
export function initWidget(name: string, view: esri.MapView | esri.SceneView) {
  if (name === 'Search' && !propertySearch) {
    propertySearch = new PropertySearch({
      view: view,
      condosTable: condosTable,
      addressTable: addressTable,
      propertyLayer: featureLayer,
      container: 'sideDiv'
    });
  }
  if (name === 'Layers' && !layers) {
    layers = new Layers({ view, container: 'layerDiv' });
  }
  if (name === 'Legend' && !legend) {
    legend = new Legend({ view, container: 'legendDiv' });
  }
  if (name === 'Print' && !printWidget) {
    printWidget = new Print({
      view,
      container: 'printDiv',
      printServiceUrl:
        'https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task'
    });
  }
  if (name === 'Bookmarks' && !bookmarks) {
    bookmarks = new Bookmarks({ view, container: 'bookmarkDiv', editingEnabled: true });
  }

  if (name === 'Basemaps' && !basemaps) {
    basemaps = new BaseMaps({ view, container: 'basemapDiv' });
  }
  if (name === 'Location' && !locationSearch) {
    locationSearch = new LocationSearch({ view, container: 'locationDiv' });
  }
}
export function initWidgets(view: esri.MapView | esri.SceneView) {
  const coordinates: esri.CoordinateConversion = new CoordinateConversion({ view });
  const coordinatesExpand: Expand = new Expand({
    content: coordinates,
    mode: 'floating',
    expandIconClass: 'esri-icon-pan2'
  });
  view.ui.add(coordinatesExpand, 'bottom-left');

  view.ui.add(new Compass({ view: view }), 'top-left');
  const locate: Locate = new Locate({ view: view });
  locate.on('locate-error', (event: any) => {
    console.log(event);
  });
  view.ui.add(locate, 'top-left');

  const track: Track = new Track({ view: view });
  track.on('track-error', (event: any) => {
    console.log(event);
  });
  view.ui.add(track, 'top-left');
  view.ui.add(new Fullscreen({ view }), 'top-left');
  view.ui.add(new Clear({ view }), 'top-left');
  measurement.view = view;
  measurement.container = 'measureDiv';
  drawWidget.view = view;
  drawWidget.container = 'drawDiv';
  const overviewMap = new OverviewMap({ view });
  const overviewExpand: Expand = new Expand({
    content: overviewMap,
    mode: 'floating',
    expandIconClass: 'esri-icon-overview-arrow-top-left'
  });
  overviewExpand.watch('expanded', expanded => {
    if (expanded) {
      overviewMap.viewModel.overviewMapView.goTo({
        center: view.center,
        scale:
          view.scale *
          2 *
          Math.max(
            view.width / overviewMap.viewModel.overviewMapView.width,
            view.height / overviewMap.viewModel.overviewMapView.height
          )
      });
    }
  });
  view.ui.add(overviewExpand, 'bottom-right');

  select.container = 'selectDiv';
  select.view = view;
  select.layer = featureLayer;
  return view;
}
