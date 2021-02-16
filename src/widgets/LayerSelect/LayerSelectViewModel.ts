import esri = __esri;

import Accessor from 'esri/core/Accessor';
import Portal from 'esri/portal/Portal';
import PortalGroup from 'esri/portal/PortalGroup';
import PortalItem from 'esri/portal/PortalItem';

import { property, subclass } from 'esri/core/accessorSupport/decorators';

import { whenDefinedOnce } from 'esri/core/watchUtils';

@subclass('app.widgets.LayerSelect.LayerSelectViewModel')
export default class LayerSelectViewModel extends Accessor {
  @property() view: esri.MapView | esri.SceneView;
  groups: any[] = [];
  portal: Portal;

  constructor(params?: any) {
    super(params);
    whenDefinedOnce(this, 'view', this.init.bind(this));
  }

  init() {
    this.portal = new Portal();
    this.portal.load().then(() => {
      this.portal
        .queryGroups({ query: '948de991c27d4a32aa59f22c81c3a0b2', sortField: 'title', sortOrder: 'asc' })
        .then(result => {
          result.results.forEach(result => {
            const portalGroup = result as PortalGroup;

            const accitem = document.createElement('calcite-accordion-item');
            accitem.setAttribute('item-title', portalGroup.title);

            (result as PortalGroup).queryItems({ sortField: 'title', sortOrder: 'asc' }).then(result => {
              //group.items = result.results as any;
              result.results.forEach((item: PortalItem) => {
                if (item?.groupCategories?.length) {
                  const cats = item.groupCategories[0].split('/');
                  const cat1 = this.groups.find(group => {
                    return group.title === cats[2];
                  });

                  if (cat1) {
                    if (cats.length > 3) {
                      const cat2 = cat1.categories.find((cat: any) => {
                        return cat.title === cats[3];
                      });
                      cat2.items.push(item);
                    } else {
                      cat1.items.push(item);
                    }
                  } else {
                    const g = { title: cats[2], categories: [] as any, items: [] as PortalItem[] };
                    if (cats.length > 3) {
                      g.categories.push({ title: cats[3], items: [item] });
                    } else {
                      g.items = [item];
                    }
                    this.groups.push(g);
                  }
                }
              });
            });
            // this.groups.push(group);
          });
        });
    });
  }
}
