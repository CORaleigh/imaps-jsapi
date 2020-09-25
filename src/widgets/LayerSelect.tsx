import esri = __esri;
import { aliasOf, declared, property, subclass } from 'esri/core/accessorSupport/decorators';
import { layers } from '../widgets';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { renderable, tsx } from 'esri/widgets/support/widget';
import { theme } from '../menu';
import Widget from 'esri/widgets/Widget';
import Layer from 'esri/layers/Layer';
import LayerSelectViewModel from './LayerSelect/LayerSelectViewModel';
import PortalItem from 'esri/portal/PortalItem';
import GroupLayer from 'esri/layers/GroupLayer';

export interface LayerSelectProperties extends esri.WidgetProperties {
  name?: string;
  view?: esri.MapView | esri.SceneView;
}

const CSS = {
  base: 'esri-widget layerselect-base'
};

@subclass('app.widgets.LayerSelect')
export default class LayerSelect extends declared(Widget) {
  @aliasOf('viewModel.view')
  view: esri.MapView | esri.SceneView;
  @aliasOf('viewModel.groups')
  groups: any[];
  @aliasOf('viewModel.layerSelected')
  layerSelected = Function;

  @property({
    type: LayerSelectViewModel
  })
  @renderable()
  viewModel: LayerSelectViewModel = new LayerSelectViewModel();

  constructor(properties?: LayerSelectProperties) {
    super(properties);
  }

  pickListCreated = () => {
    //document.querySelectorAll('calcite-pick-list').forEach((list: any) => {
    // list.addEventListener('calciteListChange', event => {
    //   console.log(event);
    //   const item = event.detail.keys().next();
    //   if (item.value) {
    //     const portalItem: PortalItem = item.value as PortalItem;
    //     const layer: any = Layer.fromPortalItem({ portalItem: item.value });
    //     const groups = portalItem.groupCategories[0].split('/').filter((item, i) => {
    //       return i > 1;
    //     });
    //     let groupLayer: GroupLayer;
    //     groups.forEach(group => {
    //       let gLayer = this.view.map.allLayers.find(layer => {
    //         return layer.title === group && layer.type === 'group';
    //       });
    //       if (!gLayer) {
    //         gLayer = new GroupLayer({ title: group, visible: false });
    //       }
    //       if (groupLayer) {
    //         gLayer.add(layer);
    //         groupLayer.add(gLayer);
    //       } else {
    //         gLayer.add(layer);
    //         groupLayer = gLayer;
    //       }
    //     });
    //     layer.visible = false;
    //     if (groupLayer) {
    //       this.view.map.add(groupLayer);
    //     } else {
    //       this.view.map.add(layer);
    //     }
    //   } else {
    //   }
    // });
    // list.getSelectedItems().then(items => {
    //   items.forEach((item: any) => {
    //     const portalItem: PortalItem = item.value as PortalItem;
    //     const layer: any = Layer.fromPortalItem({ portalItem: item.value });
    //     const groups = portalItem.groupCategories[0].split('/').filter((item, i) => {
    //       return i > 1;
    //     });
    //     let groupLayer: GroupLayer;
    //     debugger;
    //     groups.forEach(group => {
    //       let gLayer = this.view.map.allLayers.find(layer => {
    //         return layer.title === group && layer.type === 'group';
    //       });
    //       if (!gLayer) {
    //         gLayer = new GroupLayer({ title: group, visible: false });
    //       }
    //       if (groupLayer) {
    //         gLayer.add(layer);
    //         groupLayer.add(gLayer);
    //       } else {
    //         gLayer.add(layer);
    //         groupLayer = gLayer;
    //       }
    //     });
    //     layer.visible = false;
    //     if (groupLayer) {
    //       this.view.map.add(groupLayer);
    //     } else {
    //       this.view.map.add(layer);
    //     }
    //   });
    // });
    //});
  };
  addLayers = () => {
    document.querySelector('calcite-modal')?.removeAttribute('is-active');
  };

  itemClicked = (e: any) => {
    setTimeout(() => {
      //console.log(e);
      const item = e.target;
      if (item.hasAttribute('selected')) {
        //const item = event.detail.keys().next();

        if (item.value) {
          const portalItem: PortalItem = item.value as PortalItem;
          const layer: any = Layer.fromPortalItem({ portalItem: item.value });

          const groups = portalItem.groupCategories[0].split('/').filter((item, i) => {
            return i > 1;
          }); 
          let groupLayer: GroupLayer;
 
          groups.forEach(group => {
            let gLayer: GroupLayer = this.view.map.allLayers.find(layer => {
              return layer.title === group && layer.type === 'group';
            }) as GroupLayer;
            if (!gLayer) {
              gLayer = new GroupLayer({ title: group, visible: false });
            }
            if (groupLayer) {
              gLayer.add(layer);
              groupLayer.add(gLayer);
            } else {
              gLayer.add(layer);
              groupLayer = gLayer;
            }
          });
          layer.visible = false;
          // if (groupLayer) {
          //   this.view.map.add(groupLayer);
          // } else {
          //   this.view.map.add(layer);
          // }
        } else {
        }
      } else {
        const layer: any = this.view.map.allLayers.find(layer => {
          return layer.title === item.value.title;
        });
        if (layer.parent) {
          let group = layer.parent;
          group.remove(layer);
          if (!group.layers.length) {
            if (group.parent) {
              group = group.parent;
              group.remove(group);
            }
          }
        } else {
          this.view.map.remove(layer);
        }
        debugger;
        layers.layerList.emit('listItemCreatedFunction');
      }
    }, 500);
  };

  render() {
    return (
      <div class={CSS.base}>
        <calcite-modal
          active
          id="layerSelect"
          aria-labelledby="modal-title"
          theme={theme === 'light' ? 'dark' : 'light'}
        >
          <h3 slot="header" id="modal-title">
            Select Layers
          </h3>

          <div slot="content">
            {this.viewModel.groups.map(group => (
              <calcite-block
                key={group.title}
                heading={group.title}
                open
                collapible
                theme={theme === 'light' ? 'dark' : 'light'}
              >
                {group.categories.map((category: any) => (
                  <calcite-block-section key={category.title} text={category.title}>
                    <calcite-pick-list
                      theme={theme === 'light' ? 'dark' : 'light'}
                      afterCreate={this.pickListCreated}
                      multiple
                    >
                      {category.items.map((item: any) => (
                        <calcite-pick-list-item
                          onclick={this.itemClicked}
                          text-label={item.title}
                          value={item}
                        ></calcite-pick-list-item>
                      ))}
                    </calcite-pick-list>
                  </calcite-block-section>
                ))}
                {group.items.map((item: any) => (
                  <calcite-block-section key={item.title} text={item.title}>
                    <calcite-pick-list
                      afterCreate={this.pickListCreated}
                      theme={theme === 'light' ? 'dark' : 'light'}
                      multiple
                    >
                      <calcite-pick-list-item
                        onclick={this.itemClicked}
                        text-label={item.title}
                        value={item}
                      ></calcite-pick-list-item>
                    </calcite-pick-list>
                  </calcite-block-section>
                ))}
              </calcite-block>
            ))}
          </div>

          <calcite-button onclick={this.addLayers} slot="primary" width="full">
            Apply
          </calcite-button>
        </calcite-modal>
      </div>
    );
  }
}
