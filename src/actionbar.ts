import { measurement, initWidget } from './widgets';
import { view } from './index';
//handle action bar toggle
export const toggleAction = (action: string) => {
  document.querySelectorAll('.panel').forEach((panel: HTMLElement) => {
    if (panel.title != action) {
      panel.classList.add('hidden');
    } else {
      console.log(panel);
      panel.removeAttribute('dismissed');
      console.log(panel);
      console.log(panel.title);
      if (!panel.hasAttribute('dismissed')) {
        if (window.outerWidth < 500) {
          panel.setAttribute('style', 'min-width: calc(100% - 50px)');
        } else {
          panel.setAttribute('style', 'min-width: 350px');
        }
        panel.classList.remove('hidden');
        if (panel.title != 'Measure') {
          //measurement.measurement.clear();
        } else {
          measurement.measureOpened();
        }
      }
    }
  });
};

export const actions: NodeListOf<Element> = document.querySelectorAll('calcite-action-bar calcite-action');
actions?.forEach((action: Element) => {
  action?.addEventListener('click', (e: any) => {
    console.log(e.target.text);
    toggleAction(e.target.text);
    initWidget(e.target.text, view);
    actions.forEach((a: any) => {
      if (a.text != e.target.text) {
        a.removeAttribute('active');
      }
    });
    action.setAttribute('active', '');
  });
});

export const enableActionbar = () => {
  initWidget('Search', view);
  document.querySelectorAll('calcite-action-bar calcite-action').forEach(item => {
    item.removeAttribute('disabled');
  });
};
