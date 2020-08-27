import esri = __esri;

import { aliasOf, declared, property, subclass } from 'esri/core/accessorSupport/decorators';

import { renderable, tsx } from 'esri/widgets/support/widget';

import Widget from 'esri/widgets/Widget';

import SelectViewModel from './Select/SelectViewModel';

export interface SelectProperties extends esri.WidgetProperties {
  name?: string;
  view?: esri.MapView | esri.SceneView;
  layer?: esri.FeatureLayer;
}

const CSS = {
  base: 'esri-widget select-base'
};

@subclass('app.widgets.Select')
export default class Select extends declared(Widget) {
  @aliasOf('viewModel.view')
  view: esri.MapView | esri.SceneView;
  @aliasOf('viewModel.layer')
  layer: esri.FeatureLayer;
  @aliasOf('viewModel.sketch')
  sketch: esri.FeatureLayer;
  @aliasOf('viewModel.bufferDistance')
  bufferDistance: number;
  @property({
    type: SelectViewModel
  })
  @renderable()
  viewModel: SelectViewModel = new SelectViewModel();
  _sketchCreated = () => {
    if (!this.viewModel.sketch) {
      this.viewModel.initSketch();
    }
  };
  constructor(properties?: SelectProperties) {
    super(properties);
  }

  handleChange(ev: any) {
    this.set('bufferDistance', parseInt(ev.target.value));
  }
  render() {
    document.querySelector('#selectDiv calcite-input')?.addEventListener('change', (ev: any) => {
      this.handleChange(ev);
    });

    return (
      <div class={CSS.base}>
        <div afterUpdate={this._sketchCreated} id="selectWidget"></div>
        <calcite-label>Buffer Distance (feet) </calcite-label>
        <calcite-input type="number" min="0" max="2000" step="50" value={this.bufferDistance}></calcite-input>
      </div>
    );
  }
}
