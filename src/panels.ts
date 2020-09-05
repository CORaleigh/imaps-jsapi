import { actions } from './actionbar';

export const initPanelHeaders = () => {
  //override CSS for calcite panel header
  document.querySelectorAll('calcite-panel div').forEach(panel => {
    if (panel.slot === 'header-trailing-content') {
      panel.setAttribute('style', 'display: flex; flex-direction: row;');
    }
  });
  window.onresize = () => {
    if ((event?.target as any)?.outerWidth >= 500) {
      document.querySelectorAll('calcite-panel').forEach(item => {
        if (item.querySelector('.maximize')?.getAttribute('icon') === 'minimize') {
          item.setAttribute('style', 'min-width: calc(100% - 50px)');
        } else {
          item.setAttribute('style', 'min-width: 350px');
        }
      });
    } else {
      document.querySelectorAll('calcite-panel').forEach(item => {
        if (item.getAttribute('dismissed')) {
          item.setAttribute('style', 'min-width: 0px');
        } else {
          item.setAttribute('style', 'min-width: calc(100% - 50px)');
        }
      });
    }
  };

  document.querySelectorAll('calcite-panel').forEach(item => {
    item.addEventListener('calcitePanelDismissedChange', () => {
      document.querySelectorAll('calcite-panel').forEach(item => {
        item.setAttribute('style', 'min-width: 0px');
        document.querySelectorAll('.maximize').forEach(item => {
          item.setAttribute('icon', 'maximize');
        });
      });
    });
  });
  //handle panel maximize/minimize
  document.querySelectorAll('.maximize').forEach(item => {
    item.addEventListener('click', () => {
      item.parentElement?.parentElement?.removeAttribute('dismissed');
      item.parentElement?.parentElement?.classList.remove('hidden');
      if (item.getAttribute('icon') === 'maximize') {
        item.setAttribute('icon', 'minimize');
        item.parentElement?.parentElement?.setAttribute('style', 'min-width: calc(100% - 50px)');
      } else if (item.getAttribute('icon') === 'minimize') {
        item.setAttribute('icon', 'maximize');
        item.parentElement?.parentElement?.setAttribute('style', 'min-width:350px');
      }
    });
  });
};
export const initPanels = () => {
  document.querySelectorAll('calcite-panel').forEach(item => {
    const i: HTMLElement = item?.shadowRoot?.querySelector('.content-container') as HTMLElement;
    i.innerHTML += '<style>.content-container { height: 100%; } </style>';
    item.addEventListener('calcitePanelDismissedChange', e => {
      if (window.outerWidth <= 500) {
        debugger;
        if ((e.target as any).hasAttribute('dismissed')) {
          document.querySelector('#viewDiv')?.classList.remove('below');
        } else {
          document.querySelector('#viewDiv')?.classList.add('below');
        }
      }
      if ((e.target as any).dismissed) {
        actions.forEach((action: any) => {
          action.removeAttribute('active');
        });
      }
    });
  });
};
