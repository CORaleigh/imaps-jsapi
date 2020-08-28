import esri = __esri;

import { aliasOf, declared, property, subclass } from 'esri/core/accessorSupport/decorators';

import { renderable, tsx } from 'esri/widgets/support/widget';

import Widget from 'esri/widgets/Widget';

import LayersViewModel from './Layers/LayersViewModel';

export interface LayersProperties extends esri.WidgetProperties {
  name?: string;
  view?: esri.MapView | esri.SceneView;
}

const CSS = {
  base: 'esri-widget layers-base'
};

@subclass('app.widgets.Layers')
export default class Layers extends declared(Widget) {

  @aliasOf('viewModel.view')
  view: esri.MapView | esri.SceneView;

  @aliasOf('viewModel.name')
  @renderable()
  name = '';

  @property({
    type: LayersViewModel
  })
  @renderable()
  viewModel: LayersViewModel = new LayersViewModel();

  constructor(properties?: LayersProperties) {
    super(properties);
  }

  render() {
    return (
      <div class={CSS.base}>
        <p>Welcome {this.name}!</p>
      </div>
    );
  }

}
