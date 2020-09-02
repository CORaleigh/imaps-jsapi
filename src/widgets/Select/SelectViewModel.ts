import esri = __esri;

import Accessor from 'esri/core/Accessor';
import Sketch from 'esri/widgets/Sketch';
import GraphicsLayer from 'esri/layers/GraphicsLayer';

import { declared, property, subclass } from 'esri/core/accessorSupport/decorators';

import { whenDefinedOnce } from 'esri/core/watchUtils';
import { measurement } from '../../widgets';

@subclass('app.widgets.Select.SelectViewModel')
export default class SelectViewModel extends declared(Accessor) {
  @property() view: esri.MapView | esri.SceneView;
  @property() layer: esri.FeatureLayer;

  constructor(params?: any) {
    super(params);
    whenDefinedOnce(this, 'view', this.init.bind(this));
  }
  sketch: esri.Sketch;
  bufferDistance: number;
  graphics: GraphicsLayer;

  initSketch() {
    this.graphics = new GraphicsLayer({ listMode: 'hide' });
    this.view.map.add(this.graphics);
    this.sketch = new Sketch({
      view: this.view,
      container: 'selectWidget',
      layer: this.graphics,
      creationMode: 'single'
    });
    this.sketch.viewModel.updateOnGraphicClick = false;
    this.sketch.on('create', ev => {
      if (ev.state === 'complete') {
        this.graphics.removeAll();
      }
      if (ev.state === 'start') {
        measurement?.measurement?.clear();
      }
    });
    this.sketch.watch('activeTool', tool => {
      if (tool != undefined) {
        measurement?.measurement?.clear();
      }
    });
  }
  init(view: esri.MapView | esri.SceneView) {
    console.log(view.scale);
    this.set('bufferDistance', 0);
  }
}
