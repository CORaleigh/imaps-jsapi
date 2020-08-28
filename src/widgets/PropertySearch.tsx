import esri = __esri;

import { aliasOf, declared, property, subclass } from 'esri/core/accessorSupport/decorators';

import { renderable, tsx } from 'esri/widgets/support/widget';

import Widget from 'esri/widgets/Widget';
import PropertySearchViewModel from './PropertySearch/PropertySearchViewModel';
export interface PropertySearchProperties extends esri.WidgetProperties {
  name?: string;
  view?: esri.MapView | esri.SceneView;
  propertyLayer?: esri.FeatureLayer;
  condosTable?: esri.FeatureLayer;
  addressTable?: esri.FeatureLayer;
}

const CSS = {
  base: 'esri-widget propertysearch-base'
};
@subclass('app.widgets.PropertySearch')
export default class PropertySearch extends declared(Widget) {
  @aliasOf('viewModel.view')
  view: esri.MapView | esri.SceneView;
  @aliasOf('viewModel.condosTable')
  condosTable: esri.FeatureLayer;
  @aliasOf('viewModel.addressTable')
  addressTable: esri.FeatureLayer;
  @aliasOf('viewModel.propertyLayer')
  propertyLayer: esri.FeatureLayer;
  @aliasOf('viewModel.searchWidget')
  searchWidget: esri.widgetsSearch;
  @aliasOf('viewModel.featureTable')
  featureTable: esri.FeatureTable;
  @aliasOf('viewModel.feature')
  feature: esri.Feature;
  @aliasOf('viewModel.geometry')
  geometry: esri.Geometry;
  @aliasOf('viewModel.name')
  @renderable()
  name = '';

  @property({
    type: PropertySearchViewModel
  })
  @renderable()
  viewModel: PropertySearchViewModel = new PropertySearchViewModel();

  constructor(properties?: PropertySearchProperties) {
    super(properties);
  }

  _createSearch = () => {
    if (this.searchWidget) {
      this.searchWidget.container = 'search';
    }
  };
  _createTable = () => {
    if (this.featureTable) {
      this.featureTable.container = 'table';
    }
  };
  _createFeature = () => {
    if (this.feature) {
      this.feature.container = 'featureDiv';
    }
  };

  currentRadioButton = 'list';

  render() {
    const items = document.querySelectorAll('#sideDiv calcite-radio-group-item');
    items.forEach(item => {
      item?.addEventListener('calciteRadioGroupItemChange', (e: any) => {
        // can I get checked and value like this?
        if (e.target?.checked) {
          console.log(e.target?.value);
          this.viewModel.toggleContent(e.target?.value);
        }
      });
    });

    return (
      <div class={CSS.base}>
        <div afterCreate={this._createSearch} id="search"></div>
        <div afterCreate={this._createTable} id="table"></div>
        <div id="feature" class="hidden">
          <div id="featureDiv" afterCreate={this._createFeature}></div>
        </div>

        <calcite-radio-group width="full">
          <calcite-radio-group-item checked value="table" id="tableItem">
            List
          </calcite-radio-group-item>
          <calcite-radio-group-item value="feature" id="featureItem" disabled>
            Details
          </calcite-radio-group-item>
        </calcite-radio-group>
      </div>
    );
  }
}
