export const initPanelHeaders = () => {
  //override CSS for calcite panel header
  document.querySelectorAll('calcite-panel div').forEach(panel => {
    if (panel.slot === 'header-actions-end') {
      panel.setAttribute('style', 'display: flex; flex-direction: row;');
    }
  });
  window.onresize = (event: any) => {
    if ((event?.target as any)?.innerWidth >= 500) {
      document.querySelectorAll('calcite-panel').forEach(item => {
        if (!item.hasAttribute('dismissed')) {
          if (item.querySelector('.maximize')?.getAttribute('icon') === 'minimize') {
            item.setAttribute('style', 'min-width: calc(100% - 48px)');
          } else {
            item.setAttribute('style', 'min-width: 0px');
          }
        }
      });
    } else {
      document.querySelectorAll('calcite-panel').forEach(item => {
        if (item.getAttribute('dismissed')) {
          item.setAttribute('style', 'width: 0px');
        } else {
          item.setAttribute('style', 'min-width: calc(100% - 48px)');
        }
      });
    }
  };

  document.querySelectorAll('calcite-panel').forEach(item => {
    item.addEventListener('calcitePanelDismissedChange', () => {
      document.querySelectorAll('calcite-panel').forEach(() => {
        item.setAttribute('style', 'width: 0px');
      });
    });
  });
  //handle panel maximize/minimize
  document.querySelectorAll('.maximize').forEach(item => {
    item.addEventListener('click', () => {
      item.parentElement?.parentElement?.removeAttribute('dismissed');
      item.parentElement?.parentElement?.classList.remove('hidden');
      if (item.getAttribute('icon') === 'left-edge') {
        item.setAttribute('icon', 'right-edge');
        item.parentElement?.parentElement?.classList.add('maximized');
        item.parentElement?.parentElement?.setAttribute('style', 'min-width: calc(100% - 96px)');
        document.querySelectorAll('calcite-panel.left:not(.hidden)').forEach(item => {
          item.classList.add('hidden');
          item.setAttribute('dismissed', '');
        });
        document.querySelector('calcite-action[side="left"][active]')?.removeAttribute('active');
      } else if (item.getAttribute('icon') === 'right-edge') {
        item.setAttribute('icon', 'left-edge');
        item.parentElement?.parentElement?.classList.remove('maximized');
        item.parentElement?.parentElement?.setAttribute('style', 'min-width:350px');
      }
    });
  });
};

export const initPanels = () => {
  document.querySelectorAll('calcite-panel').forEach(item => {
    const i: HTMLElement = item?.shadowRoot?.querySelector('.content-container') as HTMLElement;
    if (i) {
      i.innerHTML +=
        '<style>.content-container { height: 100%; } .container:focus, .content-container:focus { outline: none; }</style>';
    }

    const config = { attributes: true, childList: false, subtree: false };
    const callback = (mutationsList: any[]) => {
      // Use traditional 'for loops' for IE 11
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          if (mutation.attributeName === 'dismissed') {
            const actions: any = document.querySelectorAll('calcite-action-bar calcite-action');
            actions.forEach((action: any) => {
              if (action.text === (mutation.target as any).title) {
                if ((mutation.target as any).hasAttribute('dismissed')) {
                  mutation.target.classList.remove('maximized');
                  mutation.target.querySelector('.maximize').setAttribute('icon', 'left-edge');
                  action.removeAttribute('active');
                } else {
                  action.setAttribute('active', '');
                }
              }
            });
            if (window.innerWidth <= 500) {
              setTimeout(() => {
                if ((mutation.target as any).hasAttribute('dismissed')) {
                  document.querySelector('#viewDiv')?.classList.remove('below');
                } else {
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
