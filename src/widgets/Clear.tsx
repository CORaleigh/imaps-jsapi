import esri = __esri;

import { aliasOf, declared, property, subclass } from 'esri/core/accessorSupport/decorators';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { renderable, tsx } from 'esri/widgets/support/widget';

import Widget from 'esri/widgets/Widget';

import ClearViewModel from './Clear/ClearViewModel';

export interface ClearProperties extends esri.WidgetProperties {
  name?: string;
  view?: esri.MapView | esri.SceneView;
}

const CSS = {
  base: 'esri-widget--button esri-widget',
  text: 'esri-icon-font-fallback-text',
  trashIcon: 'esri-icon esri-icon-trash',
  loadingIcon: 'esri-icon-loading-indicator',
  rotatingIcon: 'esri-rotating',
  widgetIcon: 'esri-icon-trash',

  // common
  disabled: 'esri-disabled'
};

@subclass('app.widgets.Clear')
export default class Clear extends declared(Widget) {
  @aliasOf('viewModel.view')
  view: esri.MapView | esri.SceneView;

  @property({
    type: ClearViewModel
  })
  @renderable()
  viewModel: ClearViewModel = new ClearViewModel();

  constructor(properties?: ClearProperties) {
    super(properties);
  }
  clearTitle = 'Clear';
  renderIcon = () => {
    return <span aria-hidden="true" class={this.classes(CSS.trashIcon)} />;
  };
  _clear = () => {
    this.view.map.allLayers
      .filter(layer => {
        return layer.type === 'graphics';
      })
      .forEach(layer => {
        (layer as esri.GraphicsLayer).removeAll();
      });
  };
  render() {
    return (
      <div
        bind={this}
        class={this.classes(CSS.base)}
        role="button"
        onclick={this._clear}
        onkeydown={this._clear}
        aria-label={this.clearTitle}
        title={this.clearTitle}
      >
        {this.renderIcon()}
      </div>
    );
  }
}
