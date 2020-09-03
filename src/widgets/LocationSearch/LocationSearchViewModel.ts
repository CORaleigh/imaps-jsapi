import esri = __esri;

import Accessor from 'esri/core/Accessor';

import { declared, property, subclass } from 'esri/core/accessorSupport/decorators';

import { whenDefinedOnce } from 'esri/core/watchUtils';
import Search from 'esri/widgets/Search';

@subclass('app.widgets.LocationSearch.LocationSearchViewModel')
export default class LocationSearchViewModel extends declared(Accessor) {
  @property() view: esri.MapView | esri.SceneView;

  search: Search;
  constructor(params?: any) {
    super(params);
    whenDefinedOnce(this, 'view', this.init.bind(this));
  }

  init(view: esri.MapView | esri.SceneView) {
    this.search = new Search({ view: view, maxSuggestions: 30, searchAllEnabled: false });
    this.search.allSources.on('after-add', e => {
      if ((e.item as any).layer) {
        e.item.name = (e.item as any).layer.title;
        e.item.placeholder = (e.item as any).layer.title;
      }
    });
  }
}
