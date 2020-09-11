import esri = __esri;
import MapView from 'esri/views/MapView';
import Map from 'esri/Map';
import Graphic from 'esri/Graphic';
import Accessor from 'esri/core/Accessor';

import { declared, property, subclass } from 'esri/core/accessorSupport/decorators';

import { whenDefinedOnce } from 'esri/core/watchUtils';
import watchUtils from 'esri/core/watchUtils';

@subclass('app.widgets.OverviewMap.OverviewMapViewModel')
export default class OverviewMapViewModel extends declared(Accessor) {
  @property() view: esri.MapView | esri.SceneView;

  overviewMapView: esri.MapView;

  constructor(params?: any) {
    super(params);
    whenDefinedOnce(this, 'view', this.init.bind(this));
  }
  stopEvtPropagation = (event: any) => {
    event.stopPropagation();
  };

  disableZooming = (view: any) => {
    view.popup.dockEnabled = true;

    // Removes the zoom action on the popup
    view.popup.actions = [];

    // stops propagation of default behavior when an event fires

    // exlude the zoom widget from the default UI
    view.ui.components = ['attribution'];

    // disable mouse wheel scroll zooming on the view
    view.on('mouse-wheel', this.stopEvtPropagation);

    // disable zooming via double-click on the view
    view.on('double-click', this.stopEvtPropagation);

    // disable zooming out via double-click + Control on the view
    view.on('double-click', ['Control'], this.stopEvtPropagation);

    // disables pinch-zoom and panning on the view
    view.on('drag', this.stopEvtPropagation);

    // disable the view's zoom box to prevent the Shift + drag
    // and Shift + Control + drag zoom gestures.
    view.on('drag', ['Shift'], this.stopEvtPropagation);
    view.on('drag', ['Shift', 'Control'], this.stopEvtPropagation);

    // prevents zooming with the + and - keys
    view.on('key-down', (event: any) => {
      const prohibitedKeys = ['+', '-', 'Shift', '_', '='];
      const keyPressed = event.key;
      if (prohibitedKeys.indexOf(keyPressed) !== -1) {
        event.stopPropagation();
      }
    });

    return view;
  };

  init(view: esri.MapView | esri.SceneView) {
    const map = new Map({ basemap: 'streets-navigation-vector' });
    this.overviewMapView = new MapView({ map: map, extent: view.extent });
    this.disableZooming(this.overviewMapView);
    this.overviewMapView.ui.remove('zoom');

    const graphic = new Graphic({
      geometry: null,
      symbol: {
        type: 'simple-fill',
        color: [0, 0, 0, 0.5],
        outline: null
      }
    } as any);
    this.overviewMapView.graphics.add(graphic);
    watchUtils.init(view, 'extent', () => {
      graphic.geometry = view.extent;
    });

    watchUtils.init(view, 'stationary', () => {
      if (view.stationary) {
        this.overviewMapView
          .goTo({
            center: view.center,
            scale:
              view.scale *
              2 *
              Math.max(view.width / this.overviewMapView.width, view.height / this.overviewMapView.height)
          })
          .catch(function(error) {
            // ignore goto-interrupted errors
            if (error.name != 'view:goto-interrupted') {
              console.error(error);
            }
          });
      }
    });
  }
}
