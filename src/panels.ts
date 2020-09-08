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
    if (i) {
      i.innerHTML += '<style>.content-container { height: 100%; } </style>';
    }

    const config = { attributes: true, childList: false, subtree: false };
    const callback = (mutationsList: any[]) => {
      // Use traditional 'for loops' for IE 11
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          if (mutation.attributeName === 'dismissed') {
            console.log(mutation);
            actions.forEach((action: any) => {
              if (action.text === (mutation.target as any).title) {
                if ((mutation.target as any).hasAttribute('dismissed')) {
                  action.removeAttribute('active');
                } else {
                  action.setAttribute('active', '');
                }
              }
            });
            if (window.outerWidth <= 500) {
              setTimeout(() => {
                if ((mutation.target as any).hasAttribute('dismissed')) {
                  console.log((mutation.target as any).title, 'dismissed');
                  document.querySelector('#viewDiv')?.classList.remove('below');
                } else {
                  console.log((mutation.target as any).title, 'not dismissed');
                  document.querySelector('#viewDiv')?.classList.add('below');
                }
              });
            }
          }
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(item, config);
  });
};
