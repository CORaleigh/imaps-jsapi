import esri = __esri;

import Accessor from 'esri/core/Accessor';
import Sketch from 'esri/widgets/Sketch';
import GraphicsLayer from 'esri/layers/GraphicsLayer';

import { property, subclass } from 'esri/core/accessorSupport/decorators';

import { whenDefinedOnce } from 'esri/core/watchUtils';
import Measurement from 'esri/widgets/Measurement';
import geometryEngine from 'esri/geometry/geometryEngine';
import Color from 'esri/Color';
@subclass('app.widgets.Select.SelectViewModel')
export default class SelectViewModel extends Accessor {
  @property() view: esri.MapView | esri.SceneView;
  @property() layer: esri.FeatureLayer;

  constructor(params?: any) {
    super(params);
    whenDefinedOnce(this, 'view', this.init.bind(this));
    whenDefinedOnce(this, 'sketch', this.initSketch.bind(this));
  }
  sketch: esri.Sketch;
  bufferDistance: number;
  graphics: GraphicsLayer;
  measurement: Measurement;

  @property() geometry: esri.Geometry;
  initSketch() {
    this.graphics = new GraphicsLayer({ listMode: 'hide' });
    this.view.map.add(this.graphics);
    this.sketch = new Sketch({
      view: this.view,
      container: 'selectWidget',
      layer: this.graphics,
      creationMode: 'single',
      defaultCreateOptions: {
        mode: 'hybrid'
      }
    });
    this.sketch.viewModel.updateOnGraphicClick = false;
    this.sketch.on('create', ev => {
      if (ev.state === 'complete') {
        this.graphics.removeAll();
        if (this.bufferDistance > 0) {
          const g = geometryEngine.geodesicBuffer(ev.graphic.geometry, this.bufferDistance, 'feet');
          //propertySearch.geometry = g as __esri.Polygon;
          ev.graphic.geometry = g as __esri.Polygon;
          this.graphics.add(ev.graphic);
          ev.graphic.symbol = {
            type: 'simple-fill',
            style: 'none',
            outline: { style: 'short-dash', width: 2.5, color: [221, 221, 221, 1] },
            color: new Color([255, 243, 13, 0.25])
          } as any;
          this.geometry = ev.graphic.geometry as esri.Geometry;
          this.view.goTo(ev.graphic);
        } else {
          this.geometry = ev.graphic.geometry as esri.Geometry;
        }
      }
      if (ev.state === 'start') {
        this.measurement?.clear();
      }
    });
    this.sketch.watch('activeTool', tool => {
      if (tool != undefined) {
        this.measurement?.clear();
      }
    });
  }
  init() {
    this.set('bufferDistance', 0);
  }
}
