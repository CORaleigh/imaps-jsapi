export let theme = 'light';
const setTheme = (theme: string) => {
  document.querySelectorAll('calcite-panel').forEach(item => {
    item.setAttribute('theme', theme);
  });
  document.querySelectorAll('calcite-color').forEach(item => {
    item.setAttribute('theme', theme);
  });
  document.querySelectorAll('calcite-tip-manager').forEach(item => {
    item.setAttribute('theme', theme);
  });
  document.querySelectorAll('calcite-dropdown').forEach(item => {
    item.setAttribute('theme', theme);
  });
  document.querySelectorAll('calcite-alert').forEach(item => {
    item.setAttribute('theme', theme);
  });
  setTimeout(() => {
    document.querySelectorAll('calcite-action-bar').forEach(item => {
      item.setAttribute('theme', theme);
    });
  });

  document.querySelector('#arrowPath')?.setAttribute('stroke', theme === 'light' ? 'black' : 'white');

  document.querySelectorAll('link').forEach(link => {
    if (link.href.includes(theme === 'light' ? 'dark' : 'light')) {
      link.href = 'https://js.arcgis.com/4.16/esri/themes/' + theme + '/main.css';
    }
  });
};
export const initMenu = () => {
  document.querySelector('calcite-dropdown')?.addEventListener('calciteDropdownSelect', (e: any) => {
    e.target.querySelectorAll('calcite-dropdown-item').forEach((element: HTMLElement) => {
      if (element.hasAttribute('active')) {
        const value: string = element.getAttribute('value') as string;
        theme = value;
        setTheme(theme);
        window.localStorage.setItem('theme', theme);
      }
    });
  });
  if (window.localStorage.getItem('theme')) {
    let themeName: string = window.localStorage.getItem('theme') as string;
    setTheme(themeName);

    themeName = themeName === 'light' ? 'dark' : 'light';
    document.querySelectorAll('calcite-dropdown-item').forEach((element: HTMLElement) => {
      if (element.hasAttribute('active')) {
        if ((element.getAttribute('value') as string) != themeName) {
          element.removeAttribute('active');
        }
        const value: string = element.getAttribute('value') as string;
        theme = value;
      } else {
        if ((element.getAttribute('value') as string) === themeName) {
          element.setAttribute('active', '');
        }
      }
    });
  }
};
