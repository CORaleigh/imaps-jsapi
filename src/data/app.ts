import WebMap from 'esri/WebMap';
export let map = new WebMap();
map = new WebMap({ portalItem: { id: '95092428774c4b1fb6a3b6f5fed9fbc4' } });
if (window.localStorage.getItem('imaps')) {
  map = WebMap.fromJSON(JSON.parse(window.localStorage.getItem('imaps') as string));
}
