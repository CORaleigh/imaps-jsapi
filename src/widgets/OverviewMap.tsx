import esri = __esri;

import { aliasOf, declared, property, subclass } from 'esri/core/accessorSupport/decorators';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { renderable, tsx } from 'esri/widgets/support/widget';

import Widget from 'esri/widgets/Widget';

import OverviewMapViewModel from './OverviewMap/OverviewMapViewModel';

export interface OverviewMapProperties extends esri.WidgetProperties {
  name?: string;
  view?: esri.MapView | esri.SceneView;
}

const CSS = {
  base: 'esri-widget overviewmap-base'
};

@subclass('app.widgets.OverviewMap')
export default class OverviewMap extends declared(Widget) {
  @aliasOf('viewModel.view')
  view: esri.MapView | esri.SceneView;
  @aliasOf('viewModel.overviewMapView')
  overviewMapView: esri.MapView;
  @aliasOf('viewModel.name')
  @renderable()
  name = '';

  @property({
    type: OverviewMapViewModel
  })
  @renderable()
  viewModel: OverviewMapViewModel = new OverviewMapViewModel();

  constructor(properties?: OverviewMapProperties) {
    super(properties);
  }
  overviewCreated = (div: HTMLDivElement) => {
    if (this.overviewMapView) {
      this.overviewMapView.container = div;
    }
  };
  render() {
    return (
      <div class={CSS.base}>
        <div afterCreate={this.overviewCreated} id="overviewDiv"></div>
      </div>
    );
  }
}
