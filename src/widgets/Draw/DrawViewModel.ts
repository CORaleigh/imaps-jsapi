import esri = __esri;

import Accessor from 'esri/core/Accessor';

import { property, subclass } from 'esri/core/accessorSupport/decorators';
import Sketch from 'esri/widgets/Sketch';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import { whenDefinedOnce } from 'esri/core/watchUtils';
import Graphic from 'esri/Graphic';
import TextSymbol from 'esri/symbols/TextSymbol';

import Color from 'esri/Color';
import { measurement } from '../../widgets';

@subclass('app.widgets.Draw.DrawViewModel')
export default class DrawViewModel extends Accessor {
  @property() view: esri.MapView | esri.SceneView;
  @property() container: string;
  sketch: Sketch;
  graphics: GraphicsLayer;
  label: string;
  textColor: esri.Color;
  constructor(params?: any) {
    super(params);
    whenDefinedOnce(this, 'view', this.init.bind(this));
  }

  initDraw() {
    this.graphics = new GraphicsLayer({ listMode: 'hide' });
    this.view.map.add(this.graphics);

    this.sketch = new Sketch({ view: this.view, container: 'sketchDiv', layer: this.graphics, creationMode: 'single' });
    this.sketch.viewModel.pointSymbol.color = Color.fromHex('#FF0000');
    (this.sketch.viewModel.pointSymbol as any).outline.color = Color.fromHex('#FF0000');
    this.sketch.viewModel.polygonSymbol.color = new Color([[255, 0, 0, 0.5]]);
    (this.sketch.viewModel.polygonSymbol as any).outline.color = Color.fromHex('#FF0000');
    this.sketch.viewModel.polylineSymbol.color = Color.fromHex('#FF0000');

    this.sketch.watch('activeTool', tool => {
      if (tool != undefined) {
        measurement?.measurement?.clear();
      }
    });
    this.sketch.on('create', e => {
      if (e.state === 'start') {
        measurement?.measurement?.clear();
      }
      if (e.state === 'complete' && this.label?.length) {
        let labelPoint: esri.Geometry = e.graphic.geometry;
        if (e.graphic.geometry.type === 'polygon') {
          labelPoint = (e.graphic.geometry as esri.Polygon).centroid;
        }

        const g = new Graphic({
          geometry: labelPoint,
          symbol: new TextSymbol({
            text: this.label,
            color: this.textColor,
            haloColor: 'white',
            haloSize: 1,
            xoffset: '5px',
            yoffset: '5px',
            verticalAlignment: 'bottom',
            horizontalAlignment: 'right'
          })
        });
        this.graphics.add(g);
      }
    });
  }
  init(view: esri.MapView | esri.SceneView) {
    console.log(view.scale);
  }
}
