import esri = __esri;

import Accessor from 'esri/core/Accessor';

import { property, subclass } from 'esri/core/accessorSupport/decorators';

import { whenDefinedOnce } from 'esri/core/watchUtils';
import Measurement from 'esri/widgets/Measurement';

@subclass('app.widgets.Measure.MeasureViewModel')
export default class MeasureViewModel extends Accessor {
  @property() view: esri.MapView | esri.SceneView;

  constructor(params?: any) {
    super(params);
    whenDefinedOnce(this, 'view', this.init.bind(this));
  }
  measurement: esri.Measurement;
  init(view: esri.MapView | esri.SceneView) {
    this.measurement = new Measurement({ view, areaUnit: 'square-feet', linearUnit: 'feet' });
  }
}
