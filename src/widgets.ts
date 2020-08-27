// Widgets
import LayerList from 'esri/widgets/LayerList';
import Legend from 'esri/widgets/Legend';
import Print from 'esri/widgets/Print';
import Bookmarks from 'esri/widgets/Bookmarks';
import BasemapGallery from 'esri/widgets/BasemapGallery';
//import Measurement from 'esri/widgets/Measurement';
import PropertySearch from './widgets/PropertySearch';
import CoordinateConversion from 'esri/widgets/CoordinateConversion';
import Measure from './widgets/Measure';

import { condosTable, addressTable, featureLayer } from './data/search';
import esri = __esri;
import Draw from './widgets/Draw';
import Select from './widgets/Select';
export const measurement: Measure = new Measure();
export const select: Select = new Select();
export const propertySearch: PropertySearch = new PropertySearch();
export const drawWidget: Draw = new Draw();
export function initWidgets(view: esri.MapView | esri.SceneView) {
  new Legend({ view, container: 'legendDiv' });
  new LayerList({ view, container: 'layerDiv' });
  new Print({
    view,
    container: 'printDiv',
    printServiceUrl:
      'https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task'
  });
  new Bookmarks({ view, container: 'bookmarkDiv', editingEnabled: true });

  new BasemapGallery({ view, container: 'basemapDiv' });

  const coordinates: esri.CoordinateConversion = new CoordinateConversion({ view });
  view.ui.add(coordinates, 'bottom-left');
  measurement.view = view;
  measurement.container = 'measureDiv';
  drawWidget.view = view;
  drawWidget.container = 'drawDiv';
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
