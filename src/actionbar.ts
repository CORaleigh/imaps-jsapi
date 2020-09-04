import { measurement, initWidget } from './widgets';
import { view } from './index';
//handle action bar toggle
export const toggleAction = (action: string) => {
  document.querySelectorAll('.panel').forEach((panel: HTMLElement) => {
    if (panel.title != action) {
      panel.classList.add('hidden');
    } else {
      panel.removeAttribute('dismissed');
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
  });
};

export const actions: NodeListOf<Element> = document.querySelectorAll('calcite-action');
actions?.forEach((action: Element) => {
  action?.addEventListener('click', (e: any) => {
    toggleAction(e.target.text);
    initWidget(e.target.text, view);
    actions.forEach((action: any) => {
      action.removeAttribute('active');
    });
    action.toggleAttribute('active');
  });
});

export const enableActionbar = () => {
  initWidget('Search', view);
  document.querySelectorAll('calcite-action').forEach(item => {
    item.removeAttribute('disabled');
  });
};
