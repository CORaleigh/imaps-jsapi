import esri = __esri;

import { aliasOf, property, subclass } from 'esri/core/accessorSupport/decorators';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { renderable, tsx } from 'esri/widgets/support/widget';

import Widget from 'esri/widgets/Widget';
import MeasureViewModel from './Measure/MeasureViewModel';

export interface MeasureProperties extends esri.WidgetProperties {
  name?: string;
  view?: esri.MapView | esri.SceneView;
}

const CSS = {
  base: 'esri-widget measure-base'
};

@subclass('app.widgets.Measure')
export default class Measure extends Widget {
  @aliasOf('viewModel.view')
  view: esri.MapView | esri.SceneView;
  @aliasOf('viewModel.measurement')
  measurement: esri.Measurement;
  @aliasOf('viewModel.initMeasure')
  initMeasure: Function;
  @aliasOf('viewModel.measureOpened')
  measureOpened: Function;

  @property({
    type: MeasureViewModel
  })
  @renderable()
  viewModel: MeasureViewModel = new MeasureViewModel();

  constructor(properties?: MeasureProperties) {
    super(properties);
  }

  _measureCreated = () => {
    this.initMeasure();
  };

  render() {
    const items = document.querySelectorAll('#measureDiv calcite-radio-group-item');
    items.forEach(item => {
      item?.addEventListener('calciteRadioGroupItemChange', (e: any) => {
        if (e.target?.checked) {
          console.log(e.target?.title);
          if (e.target?.title === 'clear') {
            this.measurement.clear();
          } else {
            this.measurement.activeTool = e.target?.title;
          }
        }
      });
    });
    return (
      <div class={CSS.base}>
        <calcite-radio-group width="full">
          <calcite-radio-group-item checked title="distance" value="distance" id="tableItem" icon="measure">
            Line
          </calcite-radio-group-item>
          <calcite-radio-group-item title="area" value="area" id="featureItem" icon="measure-area">
            Area
          </calcite-radio-group-item>
          <calcite-radio-group-item title="clear" value="clear" id="featureItem" icon="trash">
            Clear
          </calcite-radio-group-item>
        </calcite-radio-group>
        <div afterCreate={this._measureCreated} id="measureWidget"></div>
      </div>
    );
  }
}
