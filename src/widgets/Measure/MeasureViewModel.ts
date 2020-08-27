import esri = __esri;

import Accessor from 'esri/core/Accessor';

import { declared, property, subclass } from 'esri/core/accessorSupport/decorators';

import { whenDefinedOnce } from 'esri/core/watchUtils';
import Measurement from 'esri/widgets/Measurement';

@subclass('app.widgets.Measure.MeasureViewModel')
export default class MeasureViewModel extends declared(Accessor) {
  @property() view: esri.MapView | esri.SceneView;

  constructor(params?: any) {
    super(params);
    whenDefinedOnce(this, 'view', this.init.bind(this));
  }
  measurement: esri.Measurement;
  init(view: esri.MapView | esri.SceneView) {
    console.log(view.scale);
  }
  measureOpened() {
    const selected = (document.querySelector('#measureDiv calcite-radio-group') as any).selectedItem.title;
    if (selected != 'clear') {
      this.measurement.activeTool = selected;
    } else {
      this.measurement.clear();
    }
  }
  initMeasure() {
    this.measurement = new Measurement({ view: this.view, container: 'measureWidget' });
  }
}
