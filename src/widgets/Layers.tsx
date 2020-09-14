import esri = __esri;

import { aliasOf, property, subclass } from 'esri/core/accessorSupport/decorators';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
export default class Layers extends Widget {
  @aliasOf('viewModel.view')
  view: esri.MapView | esri.SceneView;
  @aliasOf('viewModel.layerList')
  layerList: esri.LayerList;

  @property({
    type: LayersViewModel
  })
  @renderable()
  viewModel: LayersViewModel = new LayersViewModel();

  constructor(properties?: LayersProperties) {
    super(properties);
  }
  _createLayers = () => {
    if (this.layerList) {
      this.layerList.container = 'layerWidget';
    }
  };
  _createSearch = (input: HTMLElement) => {
    input.addEventListener('input', e => {
      this.layerList.operationalItems.forEach((item: esri.ListItem) => {
        if (item.layer.type === 'group') {
          (item.layer as esri.GroupLayer).layers.forEach(layer => {
            if (layer.title.toLowerCase().includes((e.target as HTMLInputElement).value.toLowerCase())) {
              layer.listMode = 'show';
              item.open = true;
            } else {
              layer.listMode = 'hide';
              item.open = false;
            }
          });
          if (!(e.target as HTMLInputElement).value.length) {
            item.open = false;
          }
        }
      });
    });
  };
  render() {
    return (
      <div class={CSS.base}>
        <calcite-input
          placeholder="Filter by layer name"
          scale="s"
          afterCreate={this._createSearch}
          id="layerSearch"
        ></calcite-input>
        <div afterCreate={this._createLayers} id="layerWidget"></div>
      </div>
    );
  }
}
