//import TileLayer from 'esri/layers/TileLayer';
//import VectorTileLayer from 'esri/layers/VectorTileLayer';
//import ArcGISMap from 'esri/Map';
//import { featureLayer } from './search';
import WebMap from 'esri/WebMap';
export let map = new WebMap();
if (window.localStorage.getItem('imaps')) {
  map = WebMap.fromJSON(JSON.parse(window.localStorage.getItem('imaps') as string));
} else {
  map = new WebMap({ portalItem: { id: '95092428774c4b1fb6a3b6f5fed9fbc4' } });
}

// export const map = new ArcGISMap({
//   basemap: {
//     baseLayers: [
//       new TileLayer({
//         portalItem: {
//           // world hillshade
//           id: '1b243539f4514b6ba35e7d995890db1d'
//         }
//       }),
//       new VectorTileLayer({
//         portalItem: {
//           // topographic
//           id: '7dc6cea0b1764a1f9af2e679f642f0f5'
//         }
//       })
//     ]
//   },
//   layers: [featureLayer]
// });
