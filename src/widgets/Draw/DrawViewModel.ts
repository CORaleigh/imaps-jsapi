import esri = __esri;

import Accessor from 'esri/core/Accessor';

import { declared, property, subclass } from 'esri/core/accessorSupport/decorators';
import Sketch from 'esri/widgets/Sketch';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import { whenDefinedOnce } from 'esri/core/watchUtils';
import Graphic from 'esri/Graphic';
import TextSymbol from 'esri/symbols/TextSymbol';

@subclass('app.widgets.Draw.DrawViewModel')
export default class DrawViewModel extends declared(Accessor) {
  @property() view: esri.MapView | esri.SceneView;
  @property() container: string;
  @property() name = 'Slagathor';
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

    // this.view.whenLayerView(this.graphics).then(() => {
    //   if (window.localStorage.getItem('imaps_draw')) {
    //
    //     this.graphics.graphics.addMany(JSON.parse(window.localStorage.getItem('imaps_draw') as string));
    //   }
    // });

    this.sketch = new Sketch({ view: this.view, container: 'sketchDiv', layer: this.graphics });
    this.sketch.on('create', e => {
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
            verticalAlignment: 'top',
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
