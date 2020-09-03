// Widgets
import LayerList from 'esri/widgets/LayerList';
import Legend from 'esri/widgets/Legend';
import Print from 'esri/widgets/Print';
import Bookmarks from 'esri/widgets/Bookmarks';
import BasemapGallery from 'esri/widgets/BasemapGallery';
//import Measurement from 'esri/widgets/Measurement';
import PropertySearch from './widgets/PropertySearch';
import CoordinateConversion from 'esri/widgets/CoordinateConversion';
import Expand from 'esri/widgets/Expand';
import Measure from './widgets/Measure';
import Compass from 'esri/widgets/Compass';
import Locate from 'esri/widgets/Locate';
import Track from 'esri/widgets/Track';

import { condosTable, addressTable, featureLayer } from './data/search';
import esri = __esri;
import Draw from './widgets/Draw';
import Select from './widgets/Select';
import BaseMaps from './widgets/BaseMaps';
import Layers from './widgets/Layers';
import LocationSearch from './widgets/LocationSearch';
export const measurement: Measure = new Measure();
export const select: Select = new Select();
export let layerList: LayerList;
export const propertySearch: PropertySearch = new PropertySearch();
export const drawWidget: Draw = new Draw();
export function initWidgets(view: esri.MapView | esri.SceneView) {
  new Legend({ view, container: 'legendDiv' });
  new Layers({ view, container: 'layersDiv' });
  new Print({
    view,
    container: 'printDiv',
    printServiceUrl:
      'https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task'
  });
  new Bookmarks({ view, container: 'bookmarkDiv', editingEnabled: true });

  //new BasemapGallery({ view, container: 'basemapDiv' });
  new BaseMaps({ view, container: 'basemapDiv' });

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

  measurement.view = view;
  measurement.container = 'measureDiv';
  drawWidget.view = view;
  drawWidget.container = 'drawDiv';

  new LocationSearch({ view, container: 'locationDiv' });

  //view.ui.add(measurement, 'top-right');

  // propertySearch = new PropertySearch({
  //   view: view,
  //   condosTable: condosTable,
  //   addressTable: addressTable,
  //   propertyLayer: featureLayer,
  //   container: 'sideDiv'
  // });
  propertySearch.view = view;
  propertySearch.condosTable = condosTable;
  propertySearch.addressTable = addressTable;
  propertySearch.propertyLayer = featureLayer;
  propertySearch.container = 'sideDiv';
  //view.ui.add(legend, 'bottom-left');
  //view.ui.add(layerList, 'top-right');
  select.container = 'selectDiv';
  select.view = view;
  select.layer = featureLayer;
  return view;
}
