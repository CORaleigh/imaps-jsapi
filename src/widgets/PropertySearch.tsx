import esri = __esri;

import { aliasOf, property, subclass } from 'esri/core/accessorSupport/decorators';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
export default class PropertySearch extends Widget {
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
    const featDiv = document.querySelector('#featureDiv') as HTMLElement;

    document.querySelector('#scrollArrow')?.addEventListener('click', () => {
      featDiv?.scrollBy({ top: featDiv.offsetHeight, behavior: 'smooth' });
    });
    const theme = window.localStorage.getItem('theme');
    if (theme) {
      document.querySelector('#arrowPath')?.setAttribute('stroke', theme === 'light' ? 'black' : 'white');
    }

    featDiv?.addEventListener('scroll', () => {
      if (featDiv.scrollTop >= featDiv.scrollHeight - featDiv.offsetHeight) {
        document.querySelector('#scrollArrow')?.classList.add('hidden');
      } else {
        document.querySelector('#scrollArrow')?.classList.remove('hidden');
      }
    });
    return (
      <div class={CSS.base}>
        <div afterCreate={this._createSearch} id="search"></div>
        <div afterCreate={this._createTable} id="table"></div>
        <div id="feature" class="hidden">
          <div id="featureDiv" afterCreate={this._createFeature}></div>
          <div
            id="scrollArrow"
            class="home-page__scroll-down-arrow home-page__scroll-down-arrow--black"
            data-dojo-attach-point="arrowContainer"
          >
            <svg viewBox="0 0 32 32" width="32" height="32" class="icon-inline  ">
              <path
                id="arrowPath"
                stroke="black"
                stroke-opacity="0.5"
                d="M16.5 27.207l-4.854-4.854.707-.707L16 25.293V5h1v20.293l3.646-3.646.707.707z"
              ></path>
            </svg>
          </div>
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
