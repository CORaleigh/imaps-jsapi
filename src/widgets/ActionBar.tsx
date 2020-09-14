import esri = __esri;

import { aliasOf, declared, property, subclass } from 'esri/core/accessorSupport/decorators';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { renderable, tsx } from 'esri/widgets/support/widget';

import Widget from 'esri/widgets/Widget';

import ActionBarViewModel from './ActionBar/ActionBarViewModel';

export interface ActionBarProperties extends esri.WidgetProperties {
  side?: string;
  view?: esri.MapView | esri.SceneView;
}

const CSS = {
  base: 'esri-widget actionbar-base'
};

@subclass('app.widgets.ActionBar')
export default class ActionBar extends declared(Widget) {
  @aliasOf('viewModel.view')
  view: esri.MapView | esri.SceneView;
  @aliasOf('viewModel.side')
  side: string;
  @aliasOf('viewModel.actions')
  actions: NodeListOf<Element>;
  @aliasOf('viewModel.toggleAction')
  toggleAction: Function;
  @aliasOf('viewModel.enableActionbar')
  enableActionbar: Function;
  @aliasOf('viewModel.initActions')
  initActions: Function;
  @property({
    type: ActionBarViewModel
  })
  @renderable()
  viewModel: ActionBarViewModel = new ActionBarViewModel();

  constructor(properties?: ActionBarProperties) {
    super(properties);
  }
  searchGroupCreated = (item: HTMLElement) => {
    if (this.side === 'left') {
      item.classList.add('hidden');
    }
    if (!this.actions.length) {
      this.initActions();
    }
  };
  toolGroupCreated = (item: HTMLElement) => {
    if (this.side === 'right') {
      if (window.innerWidth >= 1000) {
        item.classList.add('hidden');
      } else {
        document.querySelector('#leftActionbar')?.classList.add('hidden');
      }
    }
    if (!this.actions.length) {
      this.initActions();
    }
  };
  render() {
    return (
      <div class={CSS.base}>
        <calcite-action-bar expand="false">
          <calcite-action-group id="searchGroup" afterCreate={this.searchGroupCreated}>
            <calcite-action text="Search" icon="search" side="right" disabled></calcite-action>
            <calcite-action text="Location" icon="pin" side="right" disabled></calcite-action>
            <calcite-action text="Layers" icon="layers" side="right" disabled></calcite-action>
            <calcite-action text="Legend" icon="legend" side="right" disabled></calcite-action>
            <calcite-action text="Basemaps" icon="basemap" side="right" disabled></calcite-action>
          </calcite-action-group>

          <calcite-action-group id="toolGroup" afterCreate={this.toolGroupCreated}>
            <calcite-action text="Select" icon="selection" side="left" disabled></calcite-action>
            <calcite-action text="Measure" icon="measure" side="left" disabled></calcite-action>
            <calcite-action text="Draw" icon="pencil-mark" side="left" disabled></calcite-action>
            <calcite-action text="Bookmarks" icon="bookmark" side="left" disabled></calcite-action>
            <calcite-action text="Print" icon="print" side="left" disabled></calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
      </div>
    );
  }
}
