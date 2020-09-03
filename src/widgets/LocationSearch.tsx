import esri = __esri;

import { aliasOf, declared, property, subclass } from 'esri/core/accessorSupport/decorators';

import { renderable, tsx } from 'esri/widgets/support/widget';

import Widget from 'esri/widgets/Widget';

import LocationSearchViewModel from './LocationSearch/LocationSearchViewModel';

export interface LocationSearchProperties extends esri.WidgetProperties {
  name?: string;
  view?: esri.MapView | esri.SceneView;
}

const CSS = {
  base: 'esri-widget locationsearch-base'
};

@subclass('app.widgets.LocationSearch')
export default class LocationSearch extends declared(Widget) {
  @aliasOf('viewModel.view')
  view: esri.MapView | esri.SceneView;

  @aliasOf('viewModel.search')
  search: esri.widgetsSearch;

  @property({
    type: LocationSearchViewModel
  })
  @renderable()
  viewModel: LocationSearchViewModel = new LocationSearchViewModel();

  constructor(properties?: LocationSearchProperties) {
    super(properties);
  }

  _searchCreate = () => {
    if (this.search) {
      this.search.container = 'locationSearch';
    }
  };

  render() {
    return (
      <div class={CSS.base}>
        <div afterCreate={this._searchCreate} id="locationSearch"></div>
      </div>
    );
  }
}
