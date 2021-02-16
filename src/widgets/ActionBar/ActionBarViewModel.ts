import esri = __esri;

import Accessor from 'esri/core/Accessor';

import { property, subclass } from 'esri/core/accessorSupport/decorators';

import { whenDefinedOnce } from 'esri/core/watchUtils';
import { initWidget } from '../../widgets';

@subclass('app.widgets.ActionBar.ActionBarViewModel')
export default class ActionBarViewModel extends Accessor {
  @property() view: esri.MapView | esri.SceneView;
  @property() side: string;
  @property() ready = false;
  @property() actions: NodeListOf<Element>;

  constructor(params?: any) {
    super(params);
    whenDefinedOnce(this, 'view', this.init.bind(this));
    whenDefinedOnce(this, 'side', this.sideSet.bind(this));
  }

  reorderPanels = () => {
    if (this.view) {
      //this.actions.forEach(() => {

      document.querySelectorAll('.panel.left').forEach((panel: HTMLElement) => {
        if (window.innerWidth >= 1000) {
          panel.parentElement?.insertBefore(panel, document.querySelector('#viewDiv'));
        } else {
          panel.parentElement?.insertBefore(panel, document?.querySelector('#viewDiv')?.nextElementSibling as any);
        }
      });
      //});
    }
  };

  initActions = () => {
    setTimeout(() => {
      const actions: NodeListOf<any> = document.querySelectorAll('calcite-action-bar calcite-action');
      if (actions.length) {
        this.actions = actions;

        this.actions?.forEach((action: Element) => {
          action?.addEventListener('click', (e: any) => {
            this.toggleAction(e.target);
            setTimeout(() => {
              initWidget(e.target.text, this.view);
            });
            this.actions.forEach((a: any) => {
              if (a.text != e.target.text) {
                if (window.innerWidth >= 1000) {
                  if (a.getAttribute('side') === action.getAttribute('side')) {
                    a.removeAttribute('active');
                  }
                } else {
                  a.removeAttribute('active');
                }
              }
            });
            action.setAttribute('active', '');
          });
        });
      }
      if (window.innerWidth >= 500) {
        document.querySelector('calcite-action[text="Search"')?.setAttribute('active', '');
      }
    });
  };
  toggleAction = (action: HTMLElement) => {
    if (window.innerWidth >= 1000) {
      document.querySelectorAll(`.panel.${action.getAttribute('side') as string}`).forEach((panel: HTMLElement) => {
        if (panel.title != (action as any).text) {
          panel.classList.add('hidden');
        } else {
          panel.removeAttribute('dismissed');
          if (!panel.hasAttribute('dismissed')) {
            if (window.innerWidth < 500) {
              panel.setAttribute('style', 'min-width: calc(100% - 48px)');
            } else {
              panel.setAttribute('style', 'min-width: 0px');
            }
            panel.classList.remove('hidden');
            if (panel.title != 'Measure') {
              //measurement.measurement.clear();
            } else {
              //measurement.measureOpened();
            }
          }
        }
      });
    } else {
      document.querySelectorAll('.panel').forEach((panel: HTMLElement) => {
        if (panel.title != (action as any).text) {
          panel.classList.add('hidden');
        } else {
          panel.removeAttribute('dismissed');
          if (!panel.hasAttribute('dismissed')) {
            if (window.innerWidth < 500) {
              panel.setAttribute('style', 'min-width: calc(100% - 48px)');
            } else {
              panel.setAttribute('style', 'min-width: 0px');
            }
            panel.classList.remove('hidden');
            if (panel.title != 'Measure') {
              //measurement.measurement.clear();
            } else {
              //measurement.measureOpened();
            }
          }
        }
      });
    }
  };
  enableActionbar = () => {
    this.reorderPanels();

    setTimeout(() => {
      document.querySelectorAll('calcite-action-bar calcite-action').forEach(item => {
        item.removeAttribute('disabled');
      });
    }, 1000);

    this.ready = true;
  };
  sideSet(side: string) {
    if (side === 'right') {
      document.querySelector('#toolGroup')?.classList.add('hidden');
    }
    if (side === 'left') {
      document.querySelector('#searchGroup')?.classList.add('hidden');
    }
    const actions: NodeListOf<any> = document.querySelectorAll('calcite-action-bar calcite-action');
    if (actions.length) {
      this.actions = actions;
    }
    // this.actions?.forEach((action: Element) => {
    //   action?.addEventListener('click', (e: any) => {
    //

    //     this.toggleAction(e.target);
    //     initWidget(e.target.text, this.view);
    //     this.actions.forEach((a: any) => {
    //       if (a.text != e.target.text) {
    //         if (window.innerWidth >= 1000) {
    //           if (a.getAttribute('side') === action.getAttribute('side')) {
    //             a.removeAttribute('active');
    //           }
    //         }
    //       }
    //     });
    //     action.setAttribute('active', '');
    //   });
    // });
  }
  init(view: esri.MapView | esri.SceneView) {
    console.log(view.scale);
    initWidget('Search', this.view);
    window.addEventListener('resize', () => {
      setTimeout(() => {
        if (window.innerWidth >= 1000) {
          document.querySelector('#leftActionbar')?.classList.remove('hidden');
          document
            .querySelector('#leftActionbar')
            ?.querySelector('#toolGroup')
            ?.classList.remove('hidden');
          document
            .querySelector('#actionBar')
            ?.querySelector('#toolGroup')
            ?.classList.add('hidden');
        } else {
          document.querySelector('#leftActionbar')?.classList.add('hidden');
          document
            .querySelector('#actionBar')
            ?.querySelector('#toolGroup')
            ?.classList.remove('hidden');
          document.querySelectorAll('.panel.left').forEach(panel => {
            panel.setAttribute('dismissed', '');
            panel.classList.add('hidden');
          });
        }
        this.reorderPanels();
      }, 1000);
    });
  }
}
