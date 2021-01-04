
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
define(['exports', 'esri/WebMap', 'esri/views/MapView', 'esri/widgets/Legend', 'esri/widgets/Print', 'esri/widgets/Bookmarks', 'esri/core/accessorSupport/decorators', 'esri/widgets/support/widget', 'esri/widgets/Widget', 'esri/core/Accessor', 'esri/widgets/Search', 'esri/widgets/FeatureTable', 'esri/layers/FeatureLayer', 'esri/layers/GraphicsLayer', 'esri/widgets/Feature', 'esri/Graphic', 'esri/widgets/FeatureTable/FieldColumnConfig', 'esri/core/watchUtils', 'esri/widgets/Search/SearchSource', 'esri/tasks/support/FeatureSet', 'esri/widgets/CoordinateConversion', 'esri/widgets/Expand', 'esri/widgets/Measurement', 'esri/widgets/Compass', 'esri/widgets/Locate', 'esri/widgets/Track', 'esri/widgets/Fullscreen', 'esri/PopupTemplate', 'esri/popup/content/CustomContent', 'esri/tasks/Locator', 'esri/geometry/support/geodesicUtils', 'esri/Color', 'esri/widgets/Sketch', 'esri/symbols/TextSymbol', 'esri/geometry/geometryEngine', 'esri/widgets/BasemapGallery', 'esri/widgets/LayerList', 'esri/Map'], function (exports, WebMap, MapView, Legend, Print, Bookmarks, decorators, widget, Widget, Accessor, Search, FeatureTable, FeatureLayer, GraphicsLayer, Feature, Graphic, FieldColumnConfig, watchUtils, SearchSource, FeatureSet, CoordinateConversion, Expand, Measurement, Compass, Locate, Track, Fullscreen, PopupTemplate, CustomContent, Locator, geodesicUtils, Color, Sketch, TextSymbol, geometryEngine, BaseMapGallery, LayerList, Map) { 'use strict';

  WebMap = WebMap && Object.prototype.hasOwnProperty.call(WebMap, 'default') ? WebMap['default'] : WebMap;
  MapView = MapView && Object.prototype.hasOwnProperty.call(MapView, 'default') ? MapView['default'] : MapView;
  Legend = Legend && Object.prototype.hasOwnProperty.call(Legend, 'default') ? Legend['default'] : Legend;
  Print = Print && Object.prototype.hasOwnProperty.call(Print, 'default') ? Print['default'] : Print;
  Bookmarks = Bookmarks && Object.prototype.hasOwnProperty.call(Bookmarks, 'default') ? Bookmarks['default'] : Bookmarks;
  Widget = Widget && Object.prototype.hasOwnProperty.call(Widget, 'default') ? Widget['default'] : Widget;
  Accessor = Accessor && Object.prototype.hasOwnProperty.call(Accessor, 'default') ? Accessor['default'] : Accessor;
  Search = Search && Object.prototype.hasOwnProperty.call(Search, 'default') ? Search['default'] : Search;
  FeatureTable = FeatureTable && Object.prototype.hasOwnProperty.call(FeatureTable, 'default') ? FeatureTable['default'] : FeatureTable;
  FeatureLayer = FeatureLayer && Object.prototype.hasOwnProperty.call(FeatureLayer, 'default') ? FeatureLayer['default'] : FeatureLayer;
  GraphicsLayer = GraphicsLayer && Object.prototype.hasOwnProperty.call(GraphicsLayer, 'default') ? GraphicsLayer['default'] : GraphicsLayer;
  Feature = Feature && Object.prototype.hasOwnProperty.call(Feature, 'default') ? Feature['default'] : Feature;
  Graphic = Graphic && Object.prototype.hasOwnProperty.call(Graphic, 'default') ? Graphic['default'] : Graphic;
  FieldColumnConfig = FieldColumnConfig && Object.prototype.hasOwnProperty.call(FieldColumnConfig, 'default') ? FieldColumnConfig['default'] : FieldColumnConfig;
  var watchUtils__default = 'default' in watchUtils ? watchUtils['default'] : watchUtils;
  SearchSource = SearchSource && Object.prototype.hasOwnProperty.call(SearchSource, 'default') ? SearchSource['default'] : SearchSource;
  FeatureSet = FeatureSet && Object.prototype.hasOwnProperty.call(FeatureSet, 'default') ? FeatureSet['default'] : FeatureSet;
  CoordinateConversion = CoordinateConversion && Object.prototype.hasOwnProperty.call(CoordinateConversion, 'default') ? CoordinateConversion['default'] : CoordinateConversion;
  Expand = Expand && Object.prototype.hasOwnProperty.call(Expand, 'default') ? Expand['default'] : Expand;
  Measurement = Measurement && Object.prototype.hasOwnProperty.call(Measurement, 'default') ? Measurement['default'] : Measurement;
  Compass = Compass && Object.prototype.hasOwnProperty.call(Compass, 'default') ? Compass['default'] : Compass;
  Locate = Locate && Object.prototype.hasOwnProperty.call(Locate, 'default') ? Locate['default'] : Locate;
  Track = Track && Object.prototype.hasOwnProperty.call(Track, 'default') ? Track['default'] : Track;
  Fullscreen = Fullscreen && Object.prototype.hasOwnProperty.call(Fullscreen, 'default') ? Fullscreen['default'] : Fullscreen;
  PopupTemplate = PopupTemplate && Object.prototype.hasOwnProperty.call(PopupTemplate, 'default') ? PopupTemplate['default'] : PopupTemplate;
  CustomContent = CustomContent && Object.prototype.hasOwnProperty.call(CustomContent, 'default') ? CustomContent['default'] : CustomContent;
  Locator = Locator && Object.prototype.hasOwnProperty.call(Locator, 'default') ? Locator['default'] : Locator;
  geodesicUtils = geodesicUtils && Object.prototype.hasOwnProperty.call(geodesicUtils, 'default') ? geodesicUtils['default'] : geodesicUtils;
  Color = Color && Object.prototype.hasOwnProperty.call(Color, 'default') ? Color['default'] : Color;
  Sketch = Sketch && Object.prototype.hasOwnProperty.call(Sketch, 'default') ? Sketch['default'] : Sketch;
  TextSymbol = TextSymbol && Object.prototype.hasOwnProperty.call(TextSymbol, 'default') ? TextSymbol['default'] : TextSymbol;
  geometryEngine = geometryEngine && Object.prototype.hasOwnProperty.call(geometryEngine, 'default') ? geometryEngine['default'] : geometryEngine;
  BaseMapGallery = BaseMapGallery && Object.prototype.hasOwnProperty.call(BaseMapGallery, 'default') ? BaseMapGallery['default'] : BaseMapGallery;
  LayerList = LayerList && Object.prototype.hasOwnProperty.call(LayerList, 'default') ? LayerList['default'] : LayerList;
  Map = Map && Object.prototype.hasOwnProperty.call(Map, 'default') ? Map['default'] : Map;

  var map = new WebMap();
  map = new WebMap({ portalItem: { id: '95092428774c4b1fb6a3b6f5fed9fbc4' } });
  //# sourceMappingURL=app.js.map

  var theme = 'light';
  var setTheme = function (theme) {
      var _a;
      document.querySelectorAll('calcite-panel').forEach(function (item) {
          item.setAttribute('theme', theme);
      });
      document.querySelectorAll('calcite-color').forEach(function (item) {
          item.setAttribute('theme', theme);
      });
      document.querySelectorAll('calcite-tip-manager').forEach(function (item) {
          item.setAttribute('theme', theme);
      });
      document.querySelectorAll('calcite-dropdown').forEach(function (item) {
          item.setAttribute('theme', theme);
      });
      document.querySelectorAll('calcite-alert').forEach(function (item) {
          item.setAttribute('theme', theme);
      });
      document.querySelectorAll('calcite-modal').forEach(function (item) {
          item.setAttribute('theme', theme);
      });
      document.querySelectorAll('calcite-block').forEach(function (item) {
          item.setAttribute('theme', theme);
      });
      document.querySelectorAll('calcite-pick-list').forEach(function (item) {
          item.setAttribute('theme', theme);
      });
      setTimeout(function () {
          document.querySelectorAll('calcite-action-bar').forEach(function (item) {
              item.setAttribute('theme', theme);
          });
      });
      (_a = document.querySelector('#arrowPath')) === null || _a === void 0 ? void 0 : _a.setAttribute('stroke', theme === 'light' ? 'black' : 'white');
      document.querySelectorAll('link').forEach(function (link) {
          if (link.href.includes(theme === 'light' ? 'dark' : 'light')) {
              link.href = 'https://js.arcgis.com/4.18/esri/themes/' + theme + '/main.css';
          }
      });
  };
  var initMenu = function () {
      var _a;
      (_a = document.querySelector('calcite-dropdown')) === null || _a === void 0 ? void 0 : _a.addEventListener('calciteDropdownSelect', function (e) {
          var _a;
          var value = (_a = e.currentTarget.selectedItems[0]) === null || _a === void 0 ? void 0 : _a.getAttribute('value');
          theme = value;
          setTheme(theme);
          window.localStorage.setItem('theme', theme);
      });
      if (window.localStorage.getItem('theme')) {
          var themeName_1 = window.localStorage.getItem('theme');
          setTheme(themeName_1);
          document.querySelectorAll('calcite-dropdown-item').forEach(function (element) {
              if (element.hasAttribute('active')) {
                  if (element.getAttribute('value') != themeName_1) {
                      element.removeAttribute('active');
                  }
                  var value = element.getAttribute('value');
                  theme = value;
              }
              else {
                  if (element.getAttribute('value') === themeName_1) {
                      element.setAttribute('active', '');
                  }
              }
          });
      }
      else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setTheme('dark');
      }
  };
  //# sourceMappingURL=menu.js.map

  var tipGroups = [
      {
          panel: {
              name: 'selectTip',
              title: 'Selection',
              tips: [
                  {
                      message: 'To draw a continuous line or polygon, long press and drag your cursor',
                      title: 'Freehand Drawing'
                  },
                  {
                      message: 'To draw a continuous line or polygon, long press and drag your cursor',
                      title: 'Freehand Drawing'
                  }
              ]
          }
      },
      {
          panel: {
              name: 'propertySearchTip',
              title: 'Property Search',
              tips: [
                  {
                      message: 'To search by a portion of an owner name or address, hit enter without selecting form the list of suggestions.',
                      title: 'Wildcard Search'
                  },
                  {
                      message: 'To quickly select a property from the map, long press on a property on the map.',
                      title: 'Long Press'
                  },
                  {
                      message: 'To select by a location use the property selection tool.',
                      title: 'Select By Location'
                  },
                  {
                      message: 'Previous "tab" layout has been consolidated into a single scrollable panel.',
                      title: 'Single Details Panel'
                  }
              ]
          }
      },
      {
          panel: {
              name: 'basemapTip',
              title: 'Basemaps',
              tips: [
                  {
                      message: 'The imagery and imagery hybrid base maps listed under the maps tab is a combination of the latest imagery from Raleigh (2019) and from the State of North Carolina (2017).',
                      title: 'Imagery Basemaps'
                  }
              ]
          }
      }
  ];
  function initTips() {
      document.querySelectorAll('.tip').forEach(function (item) {
          item.addEventListener('click', function () {
              var _a, _b, _c, _d, _e, _f, _g;
              (_a = document.querySelector('calcite-tip-manager')) === null || _a === void 0 ? void 0 : _a.remove();
              (_c = (_b = item.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.removeAttribute('dismissed');
              (_e = (_d = item.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.classList.remove('hidden');
              var manager = document.createElement('calcite-tip-manager');
              manager.setAttribute('theme', theme);
              var tipGroup = tipGroups.find(function (group) {
                  return group.panel.name === item.id;
              });
              var group = document.createElement('calcite-tip-group');
              group.setAttribute('text-group-title', (_f = tipGroup) === null || _f === void 0 ? void 0 : _f.panel.title);
              manager.appendChild(group);
              tipGroup === null || tipGroup === void 0 ? void 0 : tipGroup.panel.tips.forEach(function (tip) {
                  var calciteTip = document.createElement('calcite-tip');
                  calciteTip.setAttribute('heading', tip.title);
                  var p = document.createElement('p');
                  p.innerHTML = tip.message;
                  calciteTip.appendChild(p);
                  group.appendChild(calciteTip);
              });
              (_g = document === null || document === void 0 ? void 0 : document.body) === null || _g === void 0 ? void 0 : _g.appendChild(manager);
          });
      });
  }
  //# sourceMappingURL=tips.js.map

  function showAlert(text, color) {
      var _a;
      (_a = document.querySelector('calcite-alert')) === null || _a === void 0 ? void 0 : _a.remove();
      var alert = document.createElement('calcite-alert');
      var message = document.createElement('div');
      message.setAttribute('slot', 'alert-message');
      message.innerHTML = text;
      alert.setAttribute('color', color);
      alert.setAttribute('active', '');
      alert.setAttribute('icon', '');
      alert.appendChild(message);
      document.body.appendChild(alert);
  }
  //# sourceMappingURL=alert.js.map

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  var PropertySearchViewModel = (function (_super) {
      __extends(PropertySearchViewModel, _super);
      function PropertySearchViewModel(params) {
          var _this = _super.call(this, params) || this;
          _this.graphics = new GraphicsLayer({ id: 'property-select', listMode: 'hide', minScale: 19200 });
          _this.singleSymbol = {
              type: 'simple-fill',
              style: 'none',
              outline: { width: 2.5, color: [255, 82, 82, 1] },
              color: [253, 46, 65, 0.25]
          };
          _this.multiSymbol = {
              type: 'simple-fill',
              style: 'none',
              outline: { width: 2.5, color: [249, 243, 0, 1] },
              color: [253, 46, 65, 0.25]
          };
          _this.createFeatureTableLayer = function (fields, features) {
              return new FeatureLayer({
                  fields: fields,
                  source: features,
                  title: 'Selected properties',
                  geometryType: 'point',
                  objectIdField: 'OBJECTID',
                  spatialReference: _this.view.spatialReference
              });
          };
          _this.addClusterGraphics = function (result) {
              var points = [];
              result.features.forEach(function (feature) {
                  var pt = feature.clone();
                  pt.geometry = pt.geometry.centroid;
                  points.push(pt);
              });
              _this.clusterPoints.queryFeatures({ where: '1=1', returnGeometry: false, outFields: ['OBJECTID'] }).then(function (result) {
                  _this.clusterPoints.applyEdits({ deleteFeatures: result.features }).then(function () {
                      _this.clusterPoints.applyEdits({ addFeatures: points }).then(function () {
                          _this.clusterPoints.refresh();
                      });
                  });
              });
          };
          _this.addGraphics = function (result) {
              _this.graphics.removeAll();
              result.features.forEach(function (feature) {
                  feature.symbol = result.features.length > 1 ? _this.multiSymbol : _this.singleSymbol;
                  _this.graphics.add(feature);
              });
              _this.addClusterGraphics(result);
          };
          _this.getProperty = function (oids, source) {
              var relationship = _this.condosTable.relationships.find(function (r) {
                  return r.name === 'PROPERTY';
              });
              _this.condosTable
                  .queryRelatedFeatures({
                  relationshipId: relationship === null || relationship === void 0 ? void 0 : relationship.id,
                  objectIds: oids,
                  outFields: ['OBJECTID', 'REID'],
                  returnGeometry: false
              })
                  .then(function (result) {
                  var oids = [];
                  for (var key in result) {
                      result[key].features.forEach(function (feature) {
                          oids.push(feature.getAttribute('OBJECTID'));
                      });
                  }
                  _this.propertyLayer
                      .queryFeatures({
                      objectIds: oids,
                      outFields: ['*'],
                      returnGeometry: true,
                      outSpatialReference: { wkid: 102100 }
                  })
                      .then(function (result) {
                      var _a;
                      if ((_a = _this.feature) === null || _a === void 0 ? void 0 : _a.graphic) {
                          _this.feature.graphic.geometry = result === null || result === void 0 ? void 0 : result.features[0].geometry;
                      }
                      _this.view.goTo(result.features);
                      if (!source) {
                          _this.addGraphics(result);
                      }
                  });
              });
          };
          _this.searchComplete = function (event) {
              var _a, _b, _c;
              if (!_this.searchWidget.viewModel.selectedSuggestion) {
                  var oids_1 = [];
                  var where_1 = '';
                  if (!_this.searchWidget.activeSource) {
                      where_1 = "OWNER like '_" + event.searchTerm.toUpperCase() + "%' OR REID like '" + event.searchTerm.toUpperCase() + "%' OR PIN_NUM like '" + event.searchTerm.toUpperCase() + "%'";
                  }
                  else {
                      if ((_a = _this.searchWidget.activeSource) === null || _a === void 0 ? void 0 : _a.searchFields.includes('OWNER')) {
                          where_1 = "OWNER like '_%" + event.searchTerm.toUpperCase() + "%'";
                      }
                      if ((_b = _this.searchWidget.activeSource) === null || _b === void 0 ? void 0 : _b.searchFields.includes('PIN_NUM')) {
                          where_1 = "PIN_NUM like '%" + event.searchTerm.toUpperCase() + "%'";
                      }
                      if ((_c = _this.searchWidget.activeSource) === null || _c === void 0 ? void 0 : _c.searchFields.includes('REID')) {
                          where_1 = "REID like '%" + event.searchTerm.toUpperCase() + "%'";
                      }
                  }
                  var tableFeatures_1 = [];
                  _this.condosTable.queryFeatures({ where: where_1, outFields: ['*'] }).then(function (result) {
                      var _a;
                      tableFeatures_1 = result.features;
                      result.features.forEach(function (f) {
                          oids_1.push(f.getObjectId());
                      });
                      if (!_this.searchWidget.activeSource || ((_a = _this.searchWidget.activeSource) === null || _a === void 0 ? void 0 : _a.searchFields.includes('ADDRESS'))) {
                          where_1 = "ADDRESS like '%" + event.searchTerm.toUpperCase() + "%'";
                      }
                      else {
                          where_1 = 'ADDRESS IS NULL';
                      }
                      _this.addressTable.queryFeatures({ where: where_1, outFields: ['*'] }).then(function (result) {
                          var relationship = _this.addressTable.relationships.find(function (r) {
                              return r.name === 'ADDRESSES';
                          });
                          var addrOids = [];
                          result.features.forEach(function (f) {
                              addrOids.push(f.getObjectId());
                          });
                          if (relationship && addrOids.length) {
                              _this.addressTable
                                  .queryRelatedFeatures({ relationshipId: relationship.id, objectIds: addrOids, outFields: ['*'] })
                                  .then(function (result) {
                                  for (var key in result) {
                                      result[key].features.forEach(function (feature) {
                                          oids_1.push(feature.getAttribute('OBJECTID'));
                                          tableFeatures_1.push(feature);
                                      });
                                  }
                                  _this.featureTable.layer = _this.createFeatureTableLayer(_this.condosTable.fields, tableFeatures_1);
                                  _this.getProperty(oids_1);
                                  if (tableFeatures_1.length > 1) {
                                      _this.feature.graphic = new Graphic();
                                      _this.toggleContent('table');
                                  }
                                  _this.featureTable.renderNow();
                              });
                          }
                          else {
                              _this.getProperty(oids_1);
                              _this.featureTable.layer = _this.createFeatureTableLayer(_this.condosTable.fields, tableFeatures_1);
                              if (tableFeatures_1.length > 1) {
                                  _this.feature.graphic = new Graphic();
                                  _this.toggleContent('table');
                              }
                              _this.featureTable.renderNow();
                          }
                      });
                  });
              }
              else {
                  if (event.numResults) {
                      var layer = event.results[0].source.layer;
                      if (!layer && event.results[0].source.name === 'Owner') {
                          layer = _this.condosTable;
                      }
                      if (!layer && ['Site Address', 'Street Name'].includes(event.results[0].source.name)) {
                          layer = _this.addressTable;
                      }
                      var oids_2 = [];
                      event.results[0].results.forEach(function (r) {
                          oids_2.push(r.feature.getObjectId());
                      });
                      if (layer.layerId === 4) {
                          debugger;
                          var relationship = layer.relationships.find(function (r) {
                              return r.name === 'CONDOS';
                          });
                          if (relationship && oids_2) {
                              layer
                                  .queryRelatedFeatures({ relationshipId: relationship.id, objectIds: oids_2, outFields: ['*'] })
                                  .then(function (result) {
                                  var oids = [];
                                  var features = [];
                                  for (var key in result) {
                                      result[key].features.forEach(function (feature) {
                                          oids.push(feature.getAttribute('OBJECTID'));
                                          features.push(feature);
                                          feature.layer = _this.condosTable;
                                      });
                                  }
                                  _this.getProperty(oids);
                                  if (features.length > 1) {
                                      _this.feature.graphic = new Graphic();
                                      _this.toggleContent('table');
                                  }
                                  else {
                                      _this.setFeature(features[0], _this.view, [], oids);
                                      _this.toggleContent('feature');
                                  }
                                  _this.featureTable.layer = _this.createFeatureTableLayer(_this.condosTable.fields, features);
                              });
                          }
                      }
                      else {
                          _this.condosTable.queryFeatures({ objectIds: oids_2, outFields: ['*'] }).then(function (result) {
                              var oids = [];
                              result.features.forEach(function (feature) {
                                  oids.push(feature.getAttribute('OBJECTID'));
                              });
                              _this.getProperty(oids);
                              if (result.features.length > 1) {
                                  _this.feature.graphic = new Graphic();
                                  _this.toggleContent('table');
                              }
                              else {
                                  _this.setFeature(result.features[0], _this.view, [], oids);
                                  _this.toggleContent('feature');
                              }
                              _this.featureTable.layer = _this.createFeatureTableLayer(_this.condosTable.fields, result.features);
                          });
                      }
                  }
              }
          };
          _this.checkSearchParams = function () {
              var params = new URL(document.location.href).searchParams;
              var reid = params.get('reid');
              var pin = params.get('pin');
              var where = '';
              if (reid || pin) {
                  if (reid) {
                      where = "REID IN ('" + reid.split(',').join("','") + "')";
                  }
                  else if (pin) {
                      where = "PIN_NUM = '" + pin + "'";
                  }
                  _this.condosTable.queryFeatures({ where: where, outFields: ['*'] }).then(function (result) {
                      var oids = [];
                      result.features.forEach(function (feature) {
                          oids.push(feature.getAttribute('OBJECTID'));
                      });
                      _this.getProperty(oids);
                      if (result.features.length > 1) {
                          _this.feature.graphic = new Graphic();
                          _this.toggleContent('table');
                      }
                      else {
                          _this.setFeature(result.features[0], _this.view, [], oids);
                          _this.toggleContent('feature');
                      }
                      _this.featureTable.layer = _this.createFeatureTableLayer(_this.condosTable.fields, result.features);
                  });
              }
          };
          _this.getSuggestions = function (params, name, layer, outFields, orderByFields, searchFields, startsWith) {
              var whereArray = [];
              searchFields.forEach(function (field) {
                  if (startsWith) {
                      whereArray.push(field + " LIKE '" + params.suggestTerm.toUpperCase() + "%'");
                  }
                  else {
                      whereArray.push(field + " LIKE '%" + params.suggestTerm.toUpperCase() + "%'");
                  }
              });
              return layer
                  .queryFeatures({
                  returnDistinctValues: true,
                  outFields: outFields,
                  returnGeometry: false,
                  orderByFields: orderByFields,
                  where: whereArray.join(' OR ')
              })
                  .then(function (results) {
                  return results.features.map(function (feature) {
                      return {
                          key: name,
                          text: feature.getAttribute(outFields[0]),
                          sourceIndex: params.sourceIndex
                      };
                  });
              });
          };
          _this.toggleContent = function (value) {
              var _a, _b, _c, _d, _e, _f, _g, _h;
              if (value === 'table') {
                  (_a = document.querySelector('#table')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
                  (_b = document.querySelector('#feature')) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
                  (_c = document.querySelector('#tableItem')) === null || _c === void 0 ? void 0 : _c.setAttribute('checked', '');
                  (_d = document.querySelector('#featureItem')) === null || _d === void 0 ? void 0 : _d.removeAttribute('checked');
              }
              else {
                  (_e = document.querySelector('#feature')) === null || _e === void 0 ? void 0 : _e.classList.remove('hidden');
                  (_f = document.querySelector('#table')) === null || _f === void 0 ? void 0 : _f.classList.add('hidden');
                  (_g = document.querySelector('#featureItem')) === null || _g === void 0 ? void 0 : _g.setAttribute('checked', '');
                  (_h = document.querySelector('#tableItem')) === null || _h === void 0 ? void 0 : _h.removeAttribute('checked');
              }
          };
          watchUtils.whenDefinedOnce(_this, 'view', _this.init.bind(_this));
          watchUtils.whenDefinedOnce(_this, 'condosTable', _this.initSearch.bind(_this));
          watchUtils.whenDefined(_this, 'geometry', _this.searchByGeometry.bind(_this));
          return _this;
      }
      PropertySearchViewModel.prototype.searchByGeometry = function (geometry) {
          var _this = this;
          this.propertyLayer
              .queryFeatures({ geometry: geometry, returnGeometry: true, outFields: ['OBJECTID', 'REID'] })
              .then(function (propertyResult) {
              var relationship = _this.propertyLayer.relationships.find(function (r) {
                  return r.name === 'CONDOS';
              });
              var oids = [];
              propertyResult.features.forEach(function (f) {
                  oids.push(f.getObjectId());
              });
              _this.propertyLayer
                  .queryRelatedFeatures({ relationshipId: relationship === null || relationship === void 0 ? void 0 : relationship.id, objectIds: oids, outFields: ['*'] })
                  .then(function (result) {
                  var features = [];
                  for (var key in result) {
                      features = features.concat(result[key].features);
                  }
                  if (features.length === 1) {
                      features[0].geometry = propertyResult.features[0].geometry;
                      _this.setFeature(features[0], _this.view, [], [features[0].getAttribute('OBJECTID')]);
                      _this.toggleContent('feature');
                  }
                  else {
                      _this.toggleContent('table');
                  }
                  _this.graphics.removeAll();
                  var featureSet = new FeatureSet({ features: [] });
                  propertyResult.features.forEach(function (feature) {
                      feature.symbol =
                          propertyResult.features.length > 1 ? _this.multiSymbol : _this.singleSymbol;
                      if (propertyResult.features.length === 1) {
                          feature.geometry = propertyResult.features[0].geometry;
                      }
                      _this.featureTable.layer = _this.createFeatureTableLayer(_this.condosTable.fields, features);
                      _this.graphics.add(feature);
                      featureSet.features.push(feature);
                  });
                  _this.addClusterGraphics(featureSet);
              });
          });
      };
      PropertySearchViewModel.prototype.setFeature = function (feature, view, mediaInfos, oids) {
          var _this = this;
          var params = new URL(document.location.href).searchParams;
          params.set('reid', feature.getAttribute('REID'));
          window.history.replaceState({}, '', location.pathname + "?" + params);
          var relationship = this.condosTable.relationships.find(function (r) {
              return r.name === 'PHOTOS';
          });
          var oid = feature.getObjectId();
          mediaInfos = [];
          this.condosTable
              .queryRelatedFeatures({ relationshipId: relationship === null || relationship === void 0 ? void 0 : relationship.id, objectIds: oids, outFields: ['*'] })
              .then(function (result) {
              var _a;
              for (var key in result) {
                  result[key].features.forEach(function (feature) {
                      mediaInfos.push({
                          title: '',
                          type: 'image',
                          caption: '',
                          value: {
                              sourceURL: "http://services.wakegov.com/realestate/photos/mvideo/" + feature.getAttribute('PHOTO')
                          }
                      });
                  });
              }
              var media = _this.condosTable.popupTemplate.content.find(function (content) {
                  return (content === null || content === void 0 ? void 0 : content.type) === 'media';
              });
              if (media) {
                  media.mediaInfos = mediaInfos;
              }
              feature.layer = _this.condosTable;
              feature.popupTemplate = feature.layer.popupTemplate;
              _this.feature.graphic = feature;
              console.log(_this.feature.graphic.attributes);
              (_a = document.querySelector('#featureDiv')) === null || _a === void 0 ? void 0 : _a.scrollTo({ top: 0, behavior: 'smooth' });
              _this.feature.graphic.symbol = _this.singleSymbol;
              _this.feature.graphic.setAttribute('OBJECTID', oid);
              var selected = _this.graphics.graphics.find(function (graphic) {
                  return graphic.getAttribute('selected') === 'true';
              });
              if (selected) {
                  selected.symbol = _this.multiSymbol;
                  selected.setAttribute('selected', 'false');
              }
              var graphic = _this.graphics.graphics.find(function (graphic) {
                  return graphic.getAttribute('REID') === feature.getAttribute('REID');
              });
              if (graphic) {
                  graphic.symbol = _this.singleSymbol;
                  graphic.setAttribute('selected', 'true');
                  _this.graphics.graphics.reorder(graphic, _this.graphics.graphics.length - 1);
              }
          });
      };
      PropertySearchViewModel.prototype.exportTable = function () {
          this.featureTable.layer.queryFeatures({ outFields: ['*'] }).then(function (result) {
              var csv = '';
              result.fields.forEach(function (field) {
                  csv += field.alias + ",";
              });
              csv += '\r\n';
              result.features.forEach(function (feature) {
                  for (var key in feature.attributes) {
                      if (key.toLowerCase().includes('date')) {
                          csv += "\"" + new Date(feature.attributes[key]).toDateString() + "\",";
                      }
                      else if (key.toLowerCase().includes('acres')) {
                          csv += "\"" + parseFloat(feature.attributes[key]).toFixed(2) + "\",";
                      }
                      else {
                          csv += "\"" + feature.attributes[key] + "\",";
                      }
                  }
                  csv += '\r\n';
              });
              var exportedFilenmae = 'imaps_export.csv';
              var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
              var link = document.createElement('a');
              if (link.download !== undefined) {
                  var url = URL.createObjectURL(blob);
                  link.setAttribute('href', url);
                  link.setAttribute('download', exportedFilenmae);
                  link.style.visibility = 'hidden';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
              }
          });
      };
      PropertySearchViewModel.prototype.init = function (view) {
          view.map.add(this.graphics, view.map.allLayers.length - 1);
          this.clusterPoints = new FeatureLayer({
              source: [],
              objectIdField: 'OBJECTID',
              geometryType: 'point',
              maxScale: 19201,
              listMode: 'hide',
              legendEnabled: false,
              renderer: {
                  type: 'simple',
                  symbol: {
                      type: 'simple-marker',
                      size: 4,
                      color: '#69dcff',
                      outline: {
                          color: 'rgba(0, 139, 174, 0.5)',
                          width: 5
                      }
                  }
              },
              featureReduction: {
                  type: 'cluster',
                  labelingInfo: [
                      {
                          deconflictionStrategy: 'none',
                          labelExpressionInfo: {
                              expression: "Text($feature.cluster_count, '#,###')"
                          },
                          symbol: {
                              type: 'text',
                              color: '#004a5d',
                              font: {
                                  weight: 'bold',
                                  family: 'Noto Sans',
                                  size: '12px'
                              }
                          },
                          labelPlacement: 'center-center'
                      }
                  ]
              },
              spatialReference: this.view.spatialReference
          });
          this.view.map.add(this.clusterPoints);
          this.checkSearchParams();
      };
      PropertySearchViewModel.prototype.initSearch = function () {
          var _this = this;
          var _a, _b, _c;
          var tableLayer = new FeatureLayer({
              fields: [
                  { name: 'SITE_ADDRESS', type: 'string', alias: 'Address' },
                  { name: 'OWNER', type: 'string', alias: 'Owner' },
                  { name: 'PIN_NUM', type: 'string', alias: 'PIN' },
                  { name: 'REID', type: 'string', alias: 'REID' }
              ],
              source: [],
              title: 'Selected properties',
              geometryType: 'point',
              objectIdField: 'OBJECTID',
              spatialReference: this.view.spatialReference
          });
          this.feature = new Feature({ view: this.view });
          this.featureTable = new FeatureTable({
              view: this.view,
              layer: tableLayer,
              fieldConfigs: [
                  new FieldColumnConfig({
                      name: 'SITE_ADDRESS',
                      label: 'Address',
                      editable: false,
                      required: true
                  }),
                  new FieldColumnConfig({
                      name: 'OWNER',
                      label: 'Owner',
                      editable: false,
                      required: true
                  }),
                  new FieldColumnConfig({
                      name: 'PIN_NUM',
                      label: 'PIN',
                      editable: false,
                      required: true
                  }),
                  new FieldColumnConfig({
                      name: 'REID',
                      label: 'REID',
                      editable: false,
                      required: true
                  })
              ],
              menuConfig: {
                  items: [
                      {
                          label: 'Export'
                      }
                  ]
              }
          });
          this.featureTable.watch('viewModel.state', function (state) {
              var _a, _b;
              if (state === 'ready') {
                  var style = document.createElement('style');
                  style.append(document.createTextNode('td, th, table { background-color: #353535 !important;color: #fff;} td[role="gridcell"],th[role="columnheader"]{border-color: white !important;}'));
                  (_b = (_a = document === null || document === void 0 ? void 0 : document.querySelector('.esri-feature-table .esri-grid__grid')) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.append(style);
              }
          });
          var button = (_c = (_b = (_a = this.featureTable) === null || _a === void 0 ? void 0 : _a.menuConfig) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.find(function (item) {
              return item.label === 'Export';
          });
          button.clickFunction = function () {
              _this.exportTable();
          };
          button.clickFunction.bind(this.featureTable);
          this.featureTable.on('selection-change', function (event) {
              _this.featureTable.clearSelection();
              if (event.added.length) {
                  _this.getProperty([event.added[0].feature.getAttribute('OBJECTID')], 'table');
                  _this.setFeature(event.added[0].feature, _this.view, [], [event.added[0].feature.getAttribute('OBJECTID')]);
                  event.added[0].feature.setAttribute('selected', 'true');
                  _this.toggleContent('feature');
              }
          });
          this.searchWidget = new Search({
              allPlaceholder: 'Address, owner, PIN, or REID',
              includeDefaultSources: false,
              container: 'search',
              sources: [
                  new SearchSource({
                      placeholder: 'example: 222 W HARGETT ST',
                      name: 'Site Address',
                      getSuggestions: function (params) {
                          return _this.getSuggestions(params, 'Site Address', _this.addressTable, ['ADDRESS'], ['ADDRESS'], ['ADDRESS'], true);
                      },
                      getResults: function (params) {
                          return _this.addressTable
                              .queryFeatures({
                              where: "ADDRESS = '" + params.suggestResult.text.toUpperCase() + "'",
                              outFields: ['ADDRESS', 'REID', 'OBJECTID']
                          })
                              .then(function (results) {
                              return results.features.map(function (feature) {
                                  return {
                                      feature: feature,
                                      name: 'Address'
                                  };
                              });
                          });
                      }
                  }),
                  new SearchSource({
                      placeholder: 'example: SMITH, JOHN',
                      name: 'Owner',
                      getSuggestions: function (params) {
                          return _this.getSuggestions(params, 'Owner', _this.condosTable, ['OWNER'], ['OWNER'], ['OWNER'], false);
                      },
                      getResults: function (params) {
                          return _this.condosTable
                              .queryFeatures({
                              where: "OWNER = '" + params.suggestResult.text.toUpperCase() + "'",
                              outFields: ['OWNER', 'OBJECTID']
                          })
                              .then(function (results) {
                              return results.features.map(function (feature) {
                                  return {
                                      feature: feature,
                                      name: 'Owner'
                                  };
                              });
                          });
                      }
                  }),
                  new SearchSource({
                      placeholder: 'PIN',
                      name: 'PIN',
                      getSuggestions: function (params) {
                          return _this.getSuggestions(params, 'PIN', _this.condosTable, ['PIN_NUM'], ['PIN_NUM'], ['PIN_NUM'], true);
                      },
                      getResults: function (params) {
                          return _this.condosTable
                              .queryFeatures({
                              where: "PIN_NUM = '" + params.suggestResult.text + "'",
                              outFields: ['PIN_NUM', 'OBJECTID']
                          })
                              .then(function (results) {
                              return results.features.map(function (feature) {
                                  return {
                                      feature: feature,
                                      name: 'PIN'
                                  };
                              });
                          });
                      }
                  }),
                  new SearchSource({
                      placeholder: 'REID',
                      name: 'REID',
                      getSuggestions: function (params) {
                          return _this.getSuggestions(params, 'REID', _this.condosTable, ['REID'], ['REID'], ['REID'], true);
                      },
                      getResults: function (params) {
                          return _this.condosTable
                              .queryFeatures({
                              where: "REID = '" + params.suggestResult.text + "'",
                              outFields: ['REID', 'OBJECTID']
                          })
                              .then(function (results) {
                              return results.features.map(function (feature) {
                                  return {
                                      feature: feature,
                                      name: 'REID'
                                  };
                              });
                          });
                      }
                  }),
                  new SearchSource({
                      placeholder: 'example: W HARGETT ST',
                      name: 'Street Name',
                      getSuggestions: function (params) {
                          return _this.getSuggestions(params, 'Street Name', _this.addressTable, ['STREET', 'ADDR_LIST'], ['STREET'], ['STREET', 'STREET_NODIR'], false);
                      },
                      getResults: function (params) {
                          return _this.addressTable
                              .queryFeatures({
                              where: "STREET = '" + params.suggestResult.text.toUpperCase() + "'",
                              outFields: ['STREET', 'REID', 'OBJECTID']
                          })
                              .then(function (results) {
                              return results.features.map(function (feature) {
                                  return {
                                      feature: feature,
                                      name: 'Street Name'
                                  };
                              });
                          });
                      }
                  })
              ]
          });
          this.searchWidget.viewModel.watch('results', function (event) {
              console.log(event);
          });
          this.searchWidget.on('search-complete', this.searchComplete);
      };
      __decorate([
          decorators.property()
      ], PropertySearchViewModel.prototype, "view", void 0);
      __decorate([
          decorators.property()
      ], PropertySearchViewModel.prototype, "condosTable", void 0);
      __decorate([
          decorators.property()
      ], PropertySearchViewModel.prototype, "addressTable", void 0);
      __decorate([
          decorators.property()
      ], PropertySearchViewModel.prototype, "propertyLayer", void 0);
      __decorate([
          decorators.property()
      ], PropertySearchViewModel.prototype, "searchWidget", void 0);
      __decorate([
          decorators.property()
      ], PropertySearchViewModel.prototype, "featureTable", void 0);
      __decorate([
          decorators.property()
      ], PropertySearchViewModel.prototype, "feature", void 0);
      __decorate([
          decorators.property()
      ], PropertySearchViewModel.prototype, "geometry", void 0);
      PropertySearchViewModel = __decorate([
          decorators.subclass('app.widgets.PropertySearch.PropertySearchViewModel')
      ], PropertySearchViewModel);
      return PropertySearchViewModel;
  }(Accessor));
  //# sourceMappingURL=PropertySearchViewModel.js.map

  var CSS = {
      base: 'esri-widget propertysearch-base'
  };
  var PropertySearch = (function (_super) {
      __extends(PropertySearch, _super);
      function PropertySearch(properties) {
          var _this = _super.call(this, properties) || this;
          _this.viewModel = new PropertySearchViewModel();
          _this._createSearch = function () {
              if (_this.searchWidget) {
                  _this.searchWidget.container = 'search';
              }
          };
          _this._createTable = function () {
              if (_this.featureTable) {
                  _this.featureTable.container = 'table';
              }
          };
          _this._createFeature = function () {
              if (_this.feature) {
                  _this.feature.container = 'featureDiv';
              }
          };
          _this.currentRadioButton = 'list';
          return _this;
      }
      PropertySearch.prototype.render = function () {
          var _this = this;
          var _a, _b;
          var items = document.querySelectorAll('#sideDiv calcite-radio-group-item');
          items.forEach(function (item) {
              item === null || item === void 0 ? void 0 : item.addEventListener('calciteRadioGroupItemChange', function (e) {
                  var _a, _b, _c;
                  if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.checked) {
                      console.log((_b = e.target) === null || _b === void 0 ? void 0 : _b.value);
                      _this.viewModel.toggleContent((_c = e.target) === null || _c === void 0 ? void 0 : _c.value);
                  }
              });
          });
          var featDiv = document.querySelector('#featureDiv');
          (_a = document.querySelector('#scrollArrow')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
              featDiv === null || featDiv === void 0 ? void 0 : featDiv.scrollBy({ top: featDiv.offsetHeight, behavior: 'smooth' });
          });
          var theme = window.localStorage.getItem('theme');
          if (theme) {
              (_b = document.querySelector('#arrowPath')) === null || _b === void 0 ? void 0 : _b.setAttribute('stroke', theme === 'light' ? 'black' : 'white');
          }
          featDiv === null || featDiv === void 0 ? void 0 : featDiv.addEventListener('scroll', function () {
              var _a, _b;
              if (featDiv.scrollTop >= featDiv.scrollHeight - featDiv.offsetHeight) {
                  (_a = document.querySelector('#scrollArrow')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
              }
              else {
                  (_b = document.querySelector('#scrollArrow')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
              }
          });
          return (widget.tsx("div", { class: CSS.base },
              widget.tsx("div", { afterCreate: this._createSearch, id: "search" }),
              widget.tsx("div", { afterCreate: this._createTable, id: "table" }),
              widget.tsx("div", { id: "feature", class: "hidden" },
                  widget.tsx("div", { id: "featureDiv", afterCreate: this._createFeature }),
                  widget.tsx("div", { id: "scrollArrow", class: "home-page__scroll-down-arrow home-page__scroll-down-arrow--black", "data-dojo-attach-point": "arrowContainer" },
                      widget.tsx("svg", { viewBox: "0 0 32 32", width: "32", height: "32", class: "icon-inline  " },
                          widget.tsx("path", { id: "arrowPath", stroke: "black", "stroke-opacity": "0.5", d: "M16.5 27.207l-4.854-4.854.707-.707L16 25.293V5h1v20.293l3.646-3.646.707.707z" })))),
              widget.tsx("calcite-radio-group", { width: "full" },
                  widget.tsx("calcite-radio-group-item", { checked: true, value: "table", id: "tableItem" }, "List"),
                  widget.tsx("calcite-radio-group-item", { value: "feature", id: "featureItem", disabled: true }, "Details"))));
      };
      __decorate([
          decorators.aliasOf('viewModel.view')
      ], PropertySearch.prototype, "view", void 0);
      __decorate([
          decorators.aliasOf('viewModel.condosTable')
      ], PropertySearch.prototype, "condosTable", void 0);
      __decorate([
          decorators.aliasOf('viewModel.addressTable')
      ], PropertySearch.prototype, "addressTable", void 0);
      __decorate([
          decorators.aliasOf('viewModel.propertyLayer')
      ], PropertySearch.prototype, "propertyLayer", void 0);
      __decorate([
          decorators.aliasOf('viewModel.searchWidget')
      ], PropertySearch.prototype, "searchWidget", void 0);
      __decorate([
          decorators.aliasOf('viewModel.featureTable')
      ], PropertySearch.prototype, "featureTable", void 0);
      __decorate([
          decorators.aliasOf('viewModel.feature')
      ], PropertySearch.prototype, "feature", void 0);
      __decorate([
          decorators.aliasOf('viewModel.geometry')
      ], PropertySearch.prototype, "geometry", void 0);
      __decorate([
          decorators.property({
              type: PropertySearchViewModel
          }),
          widget.renderable()
      ], PropertySearch.prototype, "viewModel", void 0);
      PropertySearch = __decorate([
          decorators.subclass('app.widgets.PropertySearch')
      ], PropertySearch);
      return PropertySearch;
  }(Widget));
  //# sourceMappingURL=PropertySearch.js.map

  var MeasureViewModel = (function (_super) {
      __extends(MeasureViewModel, _super);
      function MeasureViewModel(params) {
          var _this = _super.call(this, params) || this;
          watchUtils.whenDefinedOnce(_this, 'view', _this.init.bind(_this));
          return _this;
      }
      MeasureViewModel.prototype.init = function (view) {
          this.measurement = new Measurement({ view: view, areaUnit: 'square-feet', linearUnit: 'feet' });
          this.measurement.watch('activeTool', function (activeTool) {
              if (!activeTool) {
                  document.querySelectorAll('.measure-base calcite-radio-group-item').forEach(function (item) {
                      if (item.value === 'clear') {
                          item.setAttribute('checked', '');
                      }
                      else {
                          item.removeAttribute('checked');
                      }
                  });
              }
          });
      };
      __decorate([
          decorators.property()
      ], MeasureViewModel.prototype, "view", void 0);
      MeasureViewModel = __decorate([
          decorators.subclass('app.widgets.Measure.MeasureViewModel')
      ], MeasureViewModel);
      return MeasureViewModel;
  }(Accessor));
  //# sourceMappingURL=MeasureViewModel.js.map

  var CSS$1 = {
      base: 'esri-widget measure-base'
  };
  var Measure = (function (_super) {
      __extends(Measure, _super);
      function Measure(properties) {
          var _this = _super.call(this, properties) || this;
          _this.viewModel = new MeasureViewModel();
          _this._measureCreated = function () {
              if (_this.measurement) {
                  _this.measurement.container = 'measureWidget';
              }
          };
          return _this;
      }
      Measure.prototype.render = function () {
          var _this = this;
          var items = document.querySelectorAll('#measureDiv calcite-radio-group-item');
          items.forEach(function (item) {
              item === null || item === void 0 ? void 0 : item.addEventListener('calciteRadioGroupItemChange', function (e) {
                  var _a, _b;
                  if (!e.target.hasAttribute('checked')) {
                      if (((_a = e.target) === null || _a === void 0 ? void 0 : _a.title) === 'clear') {
                          _this.measurement.clear();
                      }
                      else {
                          _this.measurement.activeTool = (_b = e.target) === null || _b === void 0 ? void 0 : _b.title;
                      }
                  }
              });
          });
          return (widget.tsx("div", { class: CSS$1.base },
              widget.tsx("calcite-radio-group", { width: "full" },
                  widget.tsx("calcite-radio-group-item", { title: "distance", value: "distance", id: "distanceItem", icon: "measure" }, "Distance"),
                  widget.tsx("calcite-radio-group-item", { title: "area", value: "area", id: "areaItem", icon: "measure-area" }, "Area"),
                  widget.tsx("calcite-radio-group-item", { title: "clear", value: "clear", id: "clearItem", icon: "trash" }, "Clear")),
              widget.tsx("div", { afterCreate: this._measureCreated, id: "measureWidget" })));
      };
      __decorate([
          decorators.aliasOf('viewModel.view')
      ], Measure.prototype, "view", void 0);
      __decorate([
          decorators.aliasOf('viewModel.measurement')
      ], Measure.prototype, "measurement", void 0);
      __decorate([
          decorators.property({
              type: MeasureViewModel
          }),
          widget.renderable()
      ], Measure.prototype, "viewModel", void 0);
      Measure = __decorate([
          decorators.subclass('app.widgets.Measure')
      ], Measure);
      return Measure;
  }(Widget));
  //# sourceMappingURL=Measure.js.map

  var arcadeExpressionInfos = [
      {
          name: 'mailing-address',
          title: 'mailing-address',
          expression: 'When(IsEmpty($feature.ADDR3),$feature.ADDR1 + TextFormatting.NewLine + $feature.ADDR2,$feature.ADDR1 + TextFormatting.NewLine + $feature.ADDR2 + TextFormatting.NewLine + $feature.ADDR3)'
      },
      {
          name: 'property-values',
          title: 'property-values',
          expression: '"Building Value"+TextFormatting.NewLine+"$"+$feature.BLDG_VAL+TextFormatting.NewLine+"Land Value"+TextFormatting.NewLine+"$"+$feature.LAND_VAL+TextFormatting.NewLine+"Total Value"+TextFormatting.NewLine+"$"+$feature.TOTAL_VALUE_ASSD'
      },
      {
          name: 'pin',
          title: 'PIN',
          expression: "var num = $feature.PIN_NUM;var ext = $feature.PIN_EXT;return When(ext == '000',num,num+' '+ext);"
      },
      {
          name: 'build_val',
          title: 'Building Value',
          expression: "var value = $feature.BLDG_VAL;When(IsEmpty(value),'--', '$'+Text(value, '#,###'));"
      },
      {
          name: 'land_val',
          title: 'Land Value',
          expression: "var value = $feature.LAND_VAL;When(IsEmpty(value),'--', '$'+Text(value, '#,###'));"
      },
      {
          name: 'total_val',
          title: 'Total Value',
          expression: "var value = $feature.TOTAL_VALUE_ASSD;When(IsEmpty(value),'--', '$'+Text(value, '#,###'));"
      },
      {
          name: 'sale_price',
          title: 'Sale Price',
          expression: "var value = $feature.TOTSALPRICE;When(IsEmpty(value),'--', '$'+Text(value, '#,###'));"
      },
      {
          name: 'city',
          title: 'City',
          expression: "var city = $feature.CITY_DECODE;When(IsEmpty(city),'Unincorporated', Proper(city));"
      },
      {
          name: 'township',
          title: 'Township',
          expression: "var ts = $feature.TOWNSHIP_DECODE;When(IsEmpty(ts),'None', Proper(ts));"
      },
      {
          name: 'jurisdiction',
          title: 'Jurisdiction',
          expression: 'var juris = $feature.PLANNING_JURISDICTION;When(' +
              "juris == 'RA', 'Raleigh'," +
              "juris == 'CA', 'Cary'," +
              "juris == 'AP', 'Apex'," +
              "juris == 'AN', 'Angier'," +
              "juris == 'CL', 'Clayton'," +
              "juris == 'DU', 'Durham'," +
              "juris == 'FV', 'Fuquay-Varina'," +
              "juris == 'GA', 'Garner'," +
              "juris == 'HS', 'Holly Springs'," +
              "juris == 'KN', 'Knightdale'," +
              "juris == 'MO', 'Morrisville'," +
              "juris == 'RO', 'Rolesville'," +
              "juris == 'WF', 'Wake Forest'," +
              "juris == 'WE', 'Wendell'," +
              "juris == 'ZB', 'Zebulon'," +
              "juris == 'WC', 'Wake County'," +
              " 'Wake County');"
      },
      {
          name: 'general',
          title: 'general',
          expression: '"PIN"+TextFormatting.NewLine+$feature.PIN_NUM+" "+$feature.PIN_EXT+TextFormatting.NewLine+' +
              '"REID"+TextFormatting.NewLine+$feature.REID+TextFormatting.NewLine+"City"+TextFormatting.NewLine+' +
              'Proper($feature.CITY_DECODE)+TextFormatting.NewLine+"Jurisdiction"+TextFormatting.NewLine+' +
              '$feature.PLANNING_JURISDICTION+TextFormatting.NewLine+"Township"+TextFormatting.NewLine+Proper($feature.TOWNSHIP_DECODE)'
      }
  ];
  var services = [
      {
          group: {
              title: 'Electoral',
              layers: [
                  'Precincts',
                  'Congressional Districts',
                  'NC House of Representatives Districts',
                  'NC Senate Districts',
                  'School Board Districts',
                  'Board of Commissioners Districts',
                  'Superior Court Districts',
                  'Raleigh City Council',
                  'Morrisville Town Council Districts'
              ]
          }
      },
      {
          group: {
              title: 'Environmental',
              layers: [
                  'Special Flood Hazard Areas - FloodPlain - Floodplain',
                  'Soils',
                  'Critical Watersheds',
                  'Water Supply Watersheds'
              ]
          }
      }
  ];
  var scrollToService = function (e) {
      var rect = e.detail.requestedAccordionItem.getBoundingClientRect();
      var div = document.querySelector('#featureDiv');
      setTimeout(function () {
          div === null || div === void 0 ? void 0 : div.scrollTo({ top: rect.top + div.scrollTop - 155, behavior: 'smooth' });
      }, 500);
  };
  var serviceChanged = function (graphic, view, e) {
      if (!e.detail.requestedAccordionItem.hasAttribute('active') &&
          e.detail.requestedAccordionItem.childElementCount === 0) {
          var loader_1 = document.createElement('calcite-loader');
          loader_1.setAttribute('inline', '');
          var header_1 = e.detail.requestedAccordionItem.shadowRoot.querySelector('.accordion-item-header');
          header_1.insertBefore(loader_1, header_1.childNodes[1]);
          var serviceGroup_1 = services.find(function (service) {
              return service.group.title === e.detail.requestedAccordionItem.getAttribute('item-title');
          });
          var promises_1 = [];
          if (serviceGroup_1) {
              var layers = view.map.allLayers.filter(function (layer) {
                  return serviceGroup_1.group.layers.includes(layer.title);
              });
              layers.forEach(function (layer) {
                  promises_1.push(layer.queryFeatures({
                      geometry: graphic.geometry,
                      outFields: ['*'],
                      returnGeometry: true
                  }));
              });
          }
          if (promises_1.length) {
              return Promise.all(promises_1).then(function (results) {
                  results.forEach(function (result) {
                      if (result.features.length) {
                          result.features.forEach(function (feature) {
                              var div = document.createElement('div');
                              e.detail.requestedAccordionItem.append(div);
                              new Feature({ container: div, graphic: feature });
                          });
                      }
                  });
                  scrollToService(e);
                  header_1.removeChild(loader_1);
              });
          }
          else {
              header_1.removeChild(loader_1);
              return 'No services found.';
          }
      }
      else {
          scrollToService(e);
      }
  };
  var deedCreator = function (e) {
      var _a;
      return e.graphic.layer
          .queryRelatedFeatures({
          relationshipId: (_a = e.graphic.layer.relationships.find(function (r) {
              return r.name === 'BOOKS';
          })) === null || _a === void 0 ? void 0 : _a.id,
          objectIds: [e.graphic.getObjectId()],
          outFields: ['BOM_DOC_NUM', 'DEED_DOC_NUM']
      })
          .then(function (result) {
          var deed = result[e.graphic.getObjectId()].features[0].getAttribute('DEED_DOC_NUM');
          var bom = result[e.graphic.getObjectId()].features[0].getAttribute('BOM_DOC_NUM');
          var div = document.createElement('div');
          div.setAttribute('style', 'display: flex;flex-direction: row;');
          if (deed) {
              var deedBtn = document.createElement('calcite-button');
              deedBtn.setAttribute('scale', 's');
              deedBtn.setAttribute('target', '_blank');
              deedBtn.setAttribute('round', '');
              deedBtn.setAttribute('icon-start', 'file-text');
              deedBtn.setAttribute('href', 'http://services.wakegov.com/booksweb/pdfview.aspx?docid=' + deed + '&RecordDate=');
              deedBtn.textContent = 'Deed';
              div.append(deedBtn);
          }
          if (bom) {
              var bombtn = document.createElement('calcite-button');
              bombtn.setAttribute('scale', 's');
              bombtn.setAttribute('target', '_blank');
              bombtn.setAttribute('round', '');
              bombtn.setAttribute('icon-start', 'map');
              bombtn.setAttribute('href', 'http://services.wakegov.com/booksweb/pdfview.aspx?docid=' + bom + '&RecordDate=');
              bombtn.textContent = 'Book of Maps';
              div.append(bombtn);
          }
          return div;
      });
  };
  var featureLayer = new FeatureLayer({
      portalItem: {
          id: 'd3d02d5e35324b769469b99121c0e996'
      },
      spatialReference: { wkid: 102100 }
  });
  var condosTable = new FeatureLayer({
      portalItem: {
          id: 'd3d02d5e35324b769469b99121c0e996'
      },
      layerId: 1,
      spatialReference: { wkid: 102100 }
  });
  condosTable.load();
  var addressTable = new FeatureLayer({
      portalItem: {
          id: 'd3d02d5e35324b769469b99121c0e996'
      },
      layerId: 4,
      spatialReference: { wkid: 102100 }
  });
  addressTable.load();
  var createTemplate = function (view) {
      var popupTemplate = new PopupTemplate({
          expressionInfos: arcadeExpressionInfos,
          content: [
              {
                  type: 'text',
                  text: '<h1>{SITE_ADDRESS}</h1>'
              },
              new CustomContent({
                  outFields: ['*'],
                  creator: function (e) {
                      return new Locator({
                          url: 'https://maps.raleighnc.gov/arcgis/rest/services/Locators/CompositeLocator/GeocodeServer',
                          outSpatialReference: { wkid: 4326 }
                      })
                          .addressToLocations({
                          address: { singleLine: e.graphic.getAttribute('SITE_ADDRESS') },
                          outFields: ['*']
                      })
                          .then(function (candidates) {
                          var _a, _b;
                          if (candidates.length) {
                              var candidate = candidates.find(function (candidate) {
                                  return candidate.attributes['Loc_name'] === 'WakeStreets';
                              });
                              if (candidate) {
                                  var dist = geodesicUtils.geodesicDistance(candidate.location, {
                                      x: e.graphic.geometry.centroid.longitude,
                                      y: e.graphic.geometry.centroid.latitude,
                                      spatialReference: { wkid: 4326 }
                                  });
                                  console.log(dist.distance);
                                  console.log(dist.azimuth);
                                  var cbll = e.graphic.geometry.centroid.latitude +
                                      ',' +
                                      e.graphic.geometry.centroid.longitude;
                                  console.log('https://maps.google.com?layer=c&cbll=' + cbll + '&cbp=0,' + ((_a = dist.azimuth) === null || _a === void 0 ? void 0 : _a.toString()) + ',0,0,0');
                                  var div = document.createElement('div');
                                  div.setAttribute('style', 'display: flex;flex-direction: row;');
                                  var btn = document.createElement('calcite-button');
                                  btn.setAttribute('scale', 's');
                                  btn.setAttribute('target', '_blank');
                                  btn.setAttribute('round', '');
                                  btn.setAttribute('icon-start', 'person');
                                  btn.setAttribute('href', 'https://maps.google.com?layer=c&cbll=' + cbll + '&cbp=0,' + ((_b = dist.azimuth) === null || _b === void 0 ? void 0 : _b.toString()) + ',0,0,0');
                                  btn.textContent = 'Street View';
                                  div.append(btn);
                                  var tax = document.createElement('calcite-button');
                                  tax.setAttribute('scale', 's');
                                  tax.setAttribute('target', '_blank');
                                  tax.setAttribute('href', 'http://services.wakegov.com/realestate/Account.asp?id=' + e.graphic.getAttribute('REID'));
                                  tax.setAttribute('round', '');
                                  tax.setAttribute('icon-start', 'locator');
                                  tax.textContent = 'Tax Page';
                                  div.append(tax);
                                  return div;
                              }
                          }
                      });
                  }
              }),
              {
                  type: 'text',
                  text: '<h2>General</h1>'
              },
              {
                  type: 'fields',
                  fieldInfos: [
                      {
                          fieldName: 'expression/pin',
                          label: 'PIN'
                      },
                      {
                          fieldName: 'REID',
                          label: 'REID'
                      },
                      {
                          fieldName: 'expression/city',
                          label: 'City'
                      },
                      {
                          fieldName: 'expression/jurisdiction',
                          label: 'Jurisdiction'
                      },
                      {
                          fieldName: 'expression/township',
                          label: 'Township'
                      }
                  ]
              },
              {
                  type: 'text',
                  text: '<h2>Owner</h1>'
              },
              {
                  type: 'text',
                  text: '{OWNER}<br/>{expression/mailing-address}'
              },
              {
                  type: 'text',
                  text: '<h2>Valuation</h1>'
              },
              {
                  type: 'fields',
                  fieldInfos: [
                      {
                          fieldName: 'expression/build_val'
                      },
                      {
                          fieldName: 'expression/land_val'
                      },
                      {
                          fieldName: 'expression/total_val'
                      },
                      {
                          fieldName: 'BILLING_CLASS_DECODE',
                          label: 'Billing Class'
                      }
                  ]
              },
              {
                  type: 'text',
                  text: '<h2>Last Sale</h1>'
              },
              {
                  type: 'fields',
                  fieldInfos: [
                      {
                          fieldName: 'SALE_DATE',
                          format: {
                              dateFormat: 'short-date'
                          },
                          label: 'Date Sold'
                      },
                      {
                          fieldName: 'expression/sale_price'
                      }
                  ]
              },
              {
                  type: 'text',
                  text: '<h2>Deeds</h1>'
              },
              {
                  type: 'fields',
                  fieldInfos: [
                      {
                          fieldName: 'DEED_BOOK',
                          label: 'Book'
                      },
                      {
                          fieldName: 'DEED_PAGE',
                          label: 'Page'
                      },
                      {
                          fieldName: 'DEED_DATE',
                          format: {
                              dateFormat: 'short-date'
                          },
                          label: 'Deed Date'
                      },
                      {
                          fieldName: 'DEED_ACRES',
                          format: {
                              places: 2
                          },
                          label: 'Deed Acres'
                      },
                      {
                          fieldName: 'PROPDESC',
                          label: 'Legal Description'
                      }
                  ]
              },
              new CustomContent({
                  outFields: ['OBJECTID', 'REID'],
                  creator: deedCreator
              }),
              {
                  type: 'text',
                  text: '<h2>Building</h1>'
              },
              {
                  type: 'fields',
                  fieldInfos: [
                      {
                          fieldName: 'HEATEDAREA',
                          format: {
                              digitSeparator: true
                          },
                          label: 'Heated Area'
                      },
                      {
                          fieldName: 'YEAR_BUILT',
                          format: {
                              digitSeparator: false
                          },
                          label: 'Year Built'
                      },
                      {
                          fieldName: 'DESIGN_STYLE_DECODE',
                          label: 'Design/Style'
                      },
                      {
                          fieldName: 'TOTSTRUCTS',
                          label: 'Total Structures'
                      },
                      {
                          fieldName: 'TOTUNITS',
                          label: 'Total Units'
                      }
                  ]
              },
              {
                  type: 'media',
                  mediaInfos: []
              },
              {
                  type: 'text',
                  text: '<h2>Services</h1>'
              },
              new CustomContent({
                  outFields: ['*'],
                  creator: function (e) {
                      var accordion = document.createElement('calcite-accordion');
                      accordion.setAttribute('selection-mode', 'single');
                      services.forEach(function (service) {
                          var item = document.createElement('calcite-accordion-item');
                          item.setAttribute('item-title', service.group.title);
                          accordion.append(item);
                      });
                      var graphic = e.graphic;
                      accordion.addEventListener('calciteAccordionChange', function (e) {
                          serviceChanged(graphic, view, e);
                      });
                      return accordion;
                  }
              })
          ]
      });
      condosTable.popupTemplate = popupTemplate;
  };
  //# sourceMappingURL=search.js.map

  var DrawViewModel = (function (_super) {
      __extends(DrawViewModel, _super);
      function DrawViewModel(params) {
          var _this = _super.call(this, params) || this;
          watchUtils.whenDefinedOnce(_this, 'view', _this.init.bind(_this));
          return _this;
      }
      DrawViewModel.prototype.initDraw = function () {
          var _this = this;
          this.graphics = new GraphicsLayer({ listMode: 'hide' });
          this.view.map.add(this.graphics);
          this.sketch = new Sketch({
              view: this.view,
              container: 'sketchDiv',
              layer: this.graphics,
              creationMode: 'single',
              defaultCreateOptions: {
                  mode: 'hybrid'
              }
          });
          this.sketch.viewModel.pointSymbol.color = Color.fromHex('#FF0000');
          this.sketch.viewModel.pointSymbol.outline.color = Color.fromHex('#FF0000');
          this.sketch.viewModel.polygonSymbol.color = new Color([[255, 0, 0, 0.5]]);
          this.sketch.viewModel.polygonSymbol.outline.color = Color.fromHex('#FF0000');
          this.sketch.viewModel.polylineSymbol.color = Color.fromHex('#FF0000');
          this.sketch.watch('activeTool', function (tool) {
              var _a;
              if (tool != undefined) {
                  (_a = _this.measurement) === null || _a === void 0 ? void 0 : _a.clear();
              }
          });
          this.sketch.on('create', function (e) {
              var _a, _b;
              if (e.state === 'start') {
                  (_a = _this.measurement) === null || _a === void 0 ? void 0 : _a.clear();
              }
              if (e.state === 'complete' && ((_b = _this.label) === null || _b === void 0 ? void 0 : _b.length)) {
                  var labelPoint = e.graphic.geometry;
                  if (e.graphic.geometry.type === 'polygon') {
                      labelPoint = e.graphic.geometry.centroid;
                  }
                  var g = new Graphic({
                      geometry: labelPoint,
                      symbol: new TextSymbol({
                          text: _this.label,
                          color: _this.textColor,
                          haloColor: 'white',
                          haloSize: 1,
                          xoffset: '5px',
                          yoffset: '5px',
                          verticalAlignment: 'bottom',
                          horizontalAlignment: 'right'
                      })
                  });
                  _this.graphics.add(g);
              }
          });
      };
      DrawViewModel.prototype.init = function (view) {
          console.log(view.scale);
      };
      __decorate([
          decorators.property()
      ], DrawViewModel.prototype, "view", void 0);
      __decorate([
          decorators.property()
      ], DrawViewModel.prototype, "container", void 0);
      DrawViewModel = __decorate([
          decorators.subclass('app.widgets.Draw.DrawViewModel')
      ], DrawViewModel);
      return DrawViewModel;
  }(Accessor));

  var CSS$2 = {
      base: 'esri-widget draw-base'
  };
  var Draw = (function (_super) {
      __extends(Draw, _super);
      function Draw(properties) {
          var _this = _super.call(this, properties) || this;
          _this.viewModel = new DrawViewModel();
          _this._drawUpdated = function () {
              if (!_this.viewModel.sketch) {
                  _this.viewModel.initDraw();
              }
          };
          return _this;
      }
      Draw.prototype.render = function () {
          var _this = this;
          var fill = document.querySelector('#fill');
          fill === null || fill === void 0 ? void 0 : fill.setAttribute('value', '#ff0000');
          fill === null || fill === void 0 ? void 0 : fill.addEventListener('calciteColorChange', function (e) {
              var hex = e.target.value;
              _this.viewModel.sketch.viewModel.pointSymbol.color = Color.fromHex(hex);
              _this.viewModel.sketch.viewModel.polygonSymbol.color = Color.fromHex(hex);
          });
          var line = document.querySelector('#line');
          line === null || line === void 0 ? void 0 : line.setAttribute('value', '#ff0000');
          line === null || line === void 0 ? void 0 : line.addEventListener('calciteColorChange', function (e) {
              var hex = e.target.value;
              _this.viewModel.sketch.viewModel.polylineSymbol.color = Color.fromHex(hex);
              _this.viewModel.sketch.viewModel.pointSymbol.outline.color = Color.fromHex(hex);
              _this.viewModel.sketch.viewModel.polygonSymbol.outline.color = Color.fromHex(hex);
          });
          var opacity = document.querySelector('#opacity');
          opacity === null || opacity === void 0 ? void 0 : opacity.addEventListener('calciteSliderUpdate', function (e) {
              _this.viewModel.sketch.viewModel.polygonSymbol.color.a = e.target.value;
          });
          var width = document.querySelector('#width');
          width === null || width === void 0 ? void 0 : width.addEventListener('calciteSliderUpdate', function (e) {
              _this.viewModel.sketch.viewModel.polylineSymbol.width = parseFloat(e.target.value);
              _this.viewModel.sketch.viewModel.pointSymbol.outline.width = parseFloat(e.target.value);
              _this.viewModel.sketch.viewModel.polygonSymbol.outline.width = parseFloat(e.target.value);
          });
          var label = document.querySelector('#label');
          label === null || label === void 0 ? void 0 : label.addEventListener('calciteInputBlur', function (e) {
              _this.set('label', e.target.value);
          });
          var textColor = document.querySelector('#textColor');
          textColor === null || textColor === void 0 ? void 0 : textColor.setAttribute('value', '#ff0000');
          textColor === null || textColor === void 0 ? void 0 : textColor.addEventListener('calciteColorChange', function (e) {
              _this.set('textColor', Color.fromHex(e.target.value));
          });
          return (widget.tsx("div", { class: CSS$2.base },
              widget.tsx("div", { afterUpdate: this._drawUpdated, id: "sketchDiv" }),
              widget.tsx("calcite-block", { heading: "Settings", open: true, collapsible: true },
                  widget.tsx("calcite-block-section", { text: "Color" },
                      widget.tsx("calcite-label", { scale: "s" },
                          "Fill Color ",
                          widget.tsx("calcite-color", { id: "fill", hideChannels: true, hideSaved: true, appearance: "minimal", scale: "s" })),
                      widget.tsx("calcite-label", { scale: "s" },
                          "Line Color ",
                          widget.tsx("calcite-color", { id: "line", hideChannels: true, hideSaved: true, appearance: "minimal", scale: "s" }))),
                  widget.tsx("calcite-block-section", { text: "Fill Opacity" },
                      widget.tsx("calcite-label", { scale: "s" },
                          "Opacity",
                          widget.tsx("calcite-slider", { scale: "s", id: "opacity", max: "1", min: "0", value: "0.5", step: "0.1" }))),
                  widget.tsx("calcite-block-section", { text: "Outline" },
                      widget.tsx("calcite-label", { scale: "s" },
                          "Width ",
                          widget.tsx("calcite-slider", { id: "width", max: "10", min: "0", value: "1", step: "0.5" }))),
                  widget.tsx("calcite-block-section", { text: "Labeling" },
                      widget.tsx("calcite-label", { scale: "s" },
                          "Label ",
                          widget.tsx("calcite-input", { scale: "s", id: "label", type: "textarea" })),
                      widget.tsx("calcite-label", { scale: "s" },
                          "Text Color",
                          widget.tsx("calcite-color", { id: "textColor", hideChannels: true, hideSaved: true, appearance: "minimal", scale: "s" }))))));
      };
      __decorate([
          decorators.aliasOf('viewModel.view')
      ], Draw.prototype, "view", void 0);
      __decorate([
          decorators.aliasOf('viewModel.label')
      ], Draw.prototype, "label", void 0);
      __decorate([
          decorators.aliasOf('viewModel.textColor')
      ], Draw.prototype, "textColor", void 0);
      __decorate([
          decorators.aliasOf('viewModel.measurement')
      ], Draw.prototype, "measurement", void 0);
      __decorate([
          decorators.property({
              type: DrawViewModel
          }),
          widget.renderable()
      ], Draw.prototype, "viewModel", void 0);
      Draw = __decorate([
          decorators.subclass('app.widgets.Draw')
      ], Draw);
      return Draw;
  }(Widget));
  //# sourceMappingURL=Draw.js.map

  var SelectViewModel = (function (_super) {
      __extends(SelectViewModel, _super);
      function SelectViewModel(params) {
          var _this = _super.call(this, params) || this;
          watchUtils.whenDefinedOnce(_this, 'view', _this.init.bind(_this));
          watchUtils.whenDefinedOnce(_this, 'sketch', _this.initSketch.bind(_this));
          return _this;
      }
      SelectViewModel.prototype.initSketch = function () {
          var _this = this;
          this.graphics = new GraphicsLayer({ listMode: 'hide' });
          this.view.map.add(this.graphics);
          this.sketch = new Sketch({
              view: this.view,
              container: 'selectWidget',
              layer: this.graphics,
              creationMode: 'single',
              defaultCreateOptions: {
                  mode: 'hybrid'
              }
          });
          this.sketch.viewModel.updateOnGraphicClick = false;
          this.sketch.on('create', function (ev) {
              var _a;
              if (ev.state === 'complete') {
                  _this.graphics.removeAll();
                  if (_this.bufferDistance > 0) {
                      var g = geometryEngine.geodesicBuffer(ev.graphic.geometry, _this.bufferDistance, 'feet');
                      ev.graphic.geometry = g;
                      _this.graphics.add(ev.graphic);
                      ev.graphic.symbol = {
                          type: 'simple-fill',
                          style: 'none',
                          outline: { style: 'short-dash', width: 2.5, color: [221, 221, 221, 1] },
                          color: new Color([255, 243, 13, 0.25])
                      };
                      _this.geometry = ev.graphic.geometry;
                      _this.view.goTo(ev.graphic);
                  }
                  else {
                      _this.geometry = ev.graphic.geometry;
                  }
              }
              if (ev.state === 'start') {
                  (_a = _this.measurement) === null || _a === void 0 ? void 0 : _a.clear();
              }
          });
          this.sketch.watch('activeTool', function (tool) {
              var _a;
              if (tool != undefined) {
                  (_a = _this.measurement) === null || _a === void 0 ? void 0 : _a.clear();
              }
          });
      };
      SelectViewModel.prototype.init = function (view) {
          console.log(view.scale);
          this.set('bufferDistance', 0);
      };
      __decorate([
          decorators.property()
      ], SelectViewModel.prototype, "view", void 0);
      __decorate([
          decorators.property()
      ], SelectViewModel.prototype, "layer", void 0);
      __decorate([
          decorators.property()
      ], SelectViewModel.prototype, "geometry", void 0);
      SelectViewModel = __decorate([
          decorators.subclass('app.widgets.Select.SelectViewModel')
      ], SelectViewModel);
      return SelectViewModel;
  }(Accessor));
  //# sourceMappingURL=SelectViewModel.js.map

  var CSS$3 = {
      base: 'esri-widget select-base'
  };
  var Select = (function (_super) {
      __extends(Select, _super);
      function Select(properties) {
          var _this = _super.call(this, properties) || this;
          _this.viewModel = new SelectViewModel();
          _this._sketchCreated = function () {
              if (!_this.viewModel.sketch) {
                  _this.viewModel.initSketch();
              }
          };
          return _this;
      }
      Select.prototype.handleChange = function (ev) {
          this.set('bufferDistance', parseInt(ev.target.value));
      };
      Select.prototype.render = function () {
          var _this = this;
          var _a;
          (_a = document.querySelector('#selectDiv calcite-input')) === null || _a === void 0 ? void 0 : _a.addEventListener('calciteInputBlur', function (ev) {
              _this.handleChange(ev);
          });
          return (widget.tsx("div", { class: CSS$3.base },
              widget.tsx("div", { afterUpdate: this._sketchCreated, id: "selectWidget" }),
              widget.tsx("calcite-label", { scale: "s" },
                  "Buffer Distance (feet)",
                  widget.tsx("calcite-input", { scale: "s", type: "number", min: "0", max: "2000", step: "50", value: this.viewModel.bufferDistance }))));
      };
      __decorate([
          decorators.aliasOf('viewModel.view')
      ], Select.prototype, "view", void 0);
      __decorate([
          decorators.aliasOf('viewModel.layer')
      ], Select.prototype, "layer", void 0);
      __decorate([
          decorators.aliasOf('viewModel.sketch')
      ], Select.prototype, "sketch", void 0);
      __decorate([
          decorators.aliasOf('viewModel.bufferDistance')
      ], Select.prototype, "bufferDistance", void 0);
      __decorate([
          decorators.aliasOf('viewModel.measurement')
      ], Select.prototype, "measurement", void 0);
      __decorate([
          decorators.property({
              type: SelectViewModel
          }),
          widget.renderable()
      ], Select.prototype, "viewModel", void 0);
      Select = __decorate([
          decorators.subclass('app.widgets.Select')
      ], Select);
      return Select;
  }(Widget));
  //# sourceMappingURL=Select.js.map

  var BaseMapsViewModel = (function (_super) {
      __extends(BaseMapsViewModel, _super);
      function BaseMapsViewModel(params) {
          var _this = _super.call(this, params) || this;
          _this.changePropertyLines = function (basemap) {
              var propertyLayer = _this.view.map.allLayers.find(function (layer) {
                  return layer.type === 'feature' && layer.title === 'Property';
              });
              var newRenderer = propertyLayer.renderer.clone();
              if (basemap.title.toLowerCase().includes('dark') ||
                  basemap.title.toLowerCase().includes('night') ||
                  basemap.title.toLowerCase().includes('dark') ||
                  basemap.title.toLowerCase().startsWith('20') ||
                  basemap.title.toLowerCase().startsWith('19')) {
                  newRenderer.symbol.outline.color = new Color([255, 255, 255, 0.5]);
              }
              else {
                  newRenderer.symbol.outline.color = new Color([0, 0, 0, 0.5]);
              }
              propertyLayer.renderer = newRenderer;
          };
          _this.toggleContent = function (value) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
              if (value === 'maps') {
                  (_a = document.querySelector('#maps')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
                  (_b = document.querySelector('#images')) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
                  (_c = document.querySelector('#mapsItem')) === null || _c === void 0 ? void 0 : _c.setAttribute('checked', '');
                  (_d = document.querySelector('#imagesItem')) === null || _d === void 0 ? void 0 : _d.removeAttribute('checked');
                  (_e = document.querySelector('#blend')) === null || _e === void 0 ? void 0 : _e.classList.add('hidden');
                  (_f = document.querySelector('#blendSlider')) === null || _f === void 0 ? void 0 : _f.classList.add('hidden');
              }
              else {
                  (_g = document.querySelector('#images')) === null || _g === void 0 ? void 0 : _g.classList.remove('hidden');
                  (_h = document.querySelector('#maps')) === null || _h === void 0 ? void 0 : _h.classList.add('hidden');
                  (_j = document.querySelector('#imagesItem')) === null || _j === void 0 ? void 0 : _j.setAttribute('checked', '');
                  (_k = document.querySelector('#mapsItem')) === null || _k === void 0 ? void 0 : _k.removeAttribute('checked');
                  (_l = document.querySelector('#blend')) === null || _l === void 0 ? void 0 : _l.classList.remove('hidden');
              }
          };
          watchUtils.whenDefinedOnce(_this, 'view', _this.init.bind(_this));
          return _this;
      }
      BaseMapsViewModel.prototype.init = function (view) {
          var _this = this;
          this.basemaps = new BaseMapGallery({ view: this.view });
          this.view.when(function () {
              _this.changePropertyLines(_this.view.map.basemap);
          });
          this.view.map.watch('basemap', function (basemap) {
              var _a, _b, _c;
              _this.changePropertyLines(basemap);
              if ((_a = document.querySelector('#images')) === null || _a === void 0 ? void 0 : _a.classList.contains('hidden')) {
                  _this.activeBasemap.baseLayers.forEach(function (layer) {
                      console.log('remove');
                      _this.view.map.remove(_this.view.map.findLayerById(layer.id));
                  });
                  _this.activeBasemap = _this.view.map.basemap;
                  (_b = document.querySelector('#blendSwitch')) === null || _b === void 0 ? void 0 : _b.removeAttribute('switched');
              }
              var bm = _this.images.viewModel.items.find(function (item) {
                  return item.basemap.title === _this.view.map.basemap.title;
              });
              if (bm && ((_c = document.querySelector('#blendSwitch')) === null || _c === void 0 ? void 0 : _c.hasAttribute('switched'))) {
                  _this.view.map.addMany(_this.activeBasemap.baseLayers.toArray());
              }
              else {
                  _this.activeBasemap.baseLayers.forEach(function (layer) {
                      console.log('remove');
                      _this.view.map.remove(_this.view.map.findLayerById(layer.id));
                  });
              }
          });
          this.activeBasemap = this.view.map.basemap;
          this.images = new BaseMapGallery({
              view: this.view,
              source: {
                  query: {
                      id: '492386759d264d49948bf7f83957ddb9'
                  }
              }
          });
          window.addEventListener('pagehide', function () {
              _this.activeBasemap.baseLayers.forEach(function (layer) {
                  console.log('remove');
                  _this.view.map.remove(_this.view.map.findLayerById(layer.id));
              });
              var json = view.map.toJSON();
              json.initialState.viewpoint.targetGeometry = view.extent;
              window.localStorage.setItem('imaps', JSON.stringify(json));
          });
      };
      __decorate([
          decorators.property()
      ], BaseMapsViewModel.prototype, "view", void 0);
      BaseMapsViewModel = __decorate([
          decorators.subclass('app.widgets.BaseMaps.BaseMapsViewModel')
      ], BaseMapsViewModel);
      return BaseMapsViewModel;
  }(Accessor));
  //# sourceMappingURL=BaseMapsViewModel.js.map

  var CSS$4 = {
      base: 'esri-widget basemaps-base'
  };
  var BaseMaps = (function (_super) {
      __extends(BaseMaps, _super);
      function BaseMaps(properties) {
          var _this = _super.call(this, properties) || this;
          _this.viewModel = new BaseMapsViewModel();
          _this._createMaps = function () {
              if (_this.basemaps) {
                  _this.basemaps.container = 'maps';
              }
          };
          _this._createImages = function () {
              if (_this.images) {
                  _this.images.container = 'images';
              }
          };
          _this.handleSwitchChange = function (e) {
              var _a, _b;
              if (e.target.getAttribute('switched') != '') {
                  (_a = document.querySelector('#blendSlider')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
                  console.log('add');
                  _this.view.map.addMany(_this.viewModel.activeBasemap.baseLayers.toArray(), 0);
                  _this.view.map.basemap.referenceLayers.forEach(function (layer) {
                      layer.visible = false;
                  });
                  _this.view.map.layers
                      .filter(function (layer) {
                      return _this.viewModel.activeBasemap.baseLayers.includes(layer);
                  })
                      .forEach(function (layer) {
                      layer.opacity = 0.5;
                      layer.visible = true;
                  });
              }
              else {
                  (_b = document.querySelector('#blendSlider')) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
                  _this.view.map.basemap.referenceLayers.forEach(function (layer) {
                      layer.visible = true;
                  });
                  _this.viewModel.activeBasemap.baseLayers.forEach(function (layer) {
                      console.log('remove');
                      _this.view.map.remove(_this.view.map.findLayerById(layer.id));
                  });
              }
          };
          _this.handleSliderChange = function (e) {
              var layers = _this.view.map.layers
                  .filter(function (layer) {
                  var _a;
                  return (_a = _this.viewModel.activeBasemap) === null || _a === void 0 ? void 0 : _a.baseLayers.includes(layer);
              })
                  .toArray();
              layers.forEach(function (layer) {
                  layer.opacity = parseFloat(e.target.getAttribute('value'));
              });
          };
          _this._sliderCreated = function (e) {
              var _a;
              (_a = document
                  .querySelector('#blendSlider')) === null || _a === void 0 ? void 0 : _a.addEventListener('calciteSliderUpdate', _this.handleSliderChange.bind({ basemap: _this.basemaps, view: _this.view }));
          };
          _this._blendCreated = function (e) {
              var _a, _b;
              (_a = document
                  .querySelector('#blendSwitch')) === null || _a === void 0 ? void 0 : _a.addEventListener('calciteSwitchChange', _this.handleSwitchChange.bind({ basemap: _this.basemaps, view: _this.view }));
              (_b = document.querySelector('#blend')) === null || _b === void 0 ? void 0 : _b.removeAttribute('switched');
          };
          return _this;
      }
      BaseMaps.prototype.render = function () {
          var _this = this;
          var items = document.querySelectorAll('#basemapDiv calcite-radio-group-item');
          items.forEach(function (item) {
              item === null || item === void 0 ? void 0 : item.addEventListener('calciteRadioGroupItemChange', function (e) {
                  var _a, _b;
                  if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.checked) {
                      _this.viewModel.toggleContent((_b = e.target) === null || _b === void 0 ? void 0 : _b.value);
                  }
              });
          });
          return (widget.tsx("div", { class: CSS$4.base },
              widget.tsx("label", { class: "hidden", id: "blend" },
                  widget.tsx("calcite-switch", { afterCreate: this._blendCreated, id: "blendSwitch" }),
                  " Blend"),
              widget.tsx("calcite-slider", { afterCreate: this._sliderCreated, class: "hidden", id: "blendSlider", value: "0.5", max: "1", min: "0", step: "0.1" }),
              widget.tsx("div", { afterCreate: this._createMaps, id: "maps" }),
              widget.tsx("div", { afterCreate: this._createImages, id: "images", class: "hidden" }),
              widget.tsx("calcite-radio-group", { width: "full" },
                  widget.tsx("calcite-radio-group-item", { checked: true, value: "maps", id: "mapsItem" }, "Maps"),
                  widget.tsx("calcite-radio-group-item", { value: "images", id: "imagesItem", disabled: true }, "Imagery"))));
      };
      __decorate([
          decorators.aliasOf('viewModel.view')
      ], BaseMaps.prototype, "view", void 0);
      __decorate([
          decorators.aliasOf('viewModel.basemaps')
      ], BaseMaps.prototype, "basemaps", void 0);
      __decorate([
          decorators.aliasOf('viewModel.images')
      ], BaseMaps.prototype, "images", void 0);
      __decorate([
          decorators.property({
              type: BaseMapsViewModel
          }),
          widget.renderable()
      ], BaseMaps.prototype, "viewModel", void 0);
      BaseMaps = __decorate([
          decorators.subclass('app.widgets.BaseMaps')
      ], BaseMaps);
      return BaseMaps;
  }(Widget));
  //# sourceMappingURL=BaseMaps.js.map

  var LayersViewModel = (function (_super) {
      __extends(LayersViewModel, _super);
      function LayersViewModel(params) {
          var _this = _super.call(this, params) || this;
          watchUtils.whenDefinedOnce(_this, 'view', _this.init.bind(_this));
          return _this;
      }
      LayersViewModel.prototype.init = function (view) {
          console.log(view.scale);
          this.layerList = new LayerList({
              view: view,
              container: 'layerDiv',
              listItemCreatedFunction: function (event) {
                  var item = event.item;
                  if (item.layer.type != 'group') {
                      var slider = document.createElement('calcite-slider');
                      slider.setAttribute('min', '0');
                      slider.setAttribute('max', '100');
                      slider.setAttribute('min-label', '0%');
                      slider.setAttribute('max-label', '100%');
                      slider.setAttribute('label-handles', '');
                      slider.setAttribute('value', ((item === null || item === void 0 ? void 0 : item.layer.opacity) * 100).toString());
                      slider.setAttribute('data', item.layer.id);
                      slider.addEventListener('calciteSliderUpdate', function (event) {
                          var _a;
                          view.map.findLayerById(event.target.getAttribute('data')).opacity =
                              parseInt((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.getAttribute('value')) / 100;
                      });
                      item.panel = {
                          content: [slider, 'legend'],
                          open: item.layer.visible
                      };
                      if (item.layer.title === 'Property') {
                          item.actionsSections = [
                              [
                                  {
                                      title: 'Show Labels',
                                      type: 'toggle',
                                      id: 'property-labels',
                                      value: item.layer.labelsVisible
                                  }
                              ]
                          ];
                      }
                  }
              }
          });
          this.layerList.on('trigger-action', function (event) {
              if (event.action.id === 'property-labels') {
                  event.item.layer.labelsVisible = event.action.value;
              }
          });
      };
      __decorate([
          decorators.property()
      ], LayersViewModel.prototype, "view", void 0);
      LayersViewModel = __decorate([
          decorators.subclass('app.widgets.Layers.LayersViewModel')
      ], LayersViewModel);
      return LayersViewModel;
  }(Accessor));
  //# sourceMappingURL=LayersViewModel.js.map

  var CSS$5 = {
      base: 'esri-widget layers-base'
  };
  var Layers = (function (_super) {
      __extends(Layers, _super);
      function Layers(properties) {
          var _this = _super.call(this, properties) || this;
          _this.viewModel = new LayersViewModel();
          _this.filterLayers = function (value) {
              _this.layerList.operationalItems.forEach(function (item) {
                  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                  if (item.layer.type === 'group') {
                      var open_1 = false;
                      item.layer.layers.forEach(function (layer) {
                          if (layer.title.toLowerCase().includes(value.toLowerCase())) {
                              layer.listMode = 'show';
                              open_1 = true;
                          }
                          else {
                              layer.listMode = 'hide';
                          }
                      });
                      if (!value.length) {
                          item.open = false;
                          (_d = (_c = (_b = (_a = document
                              .querySelector("#layerDiv_" + item.uid + "__title")) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.classList.remove('hidden');
                      }
                      else if (!open_1) {
                          item.open = false;
                          (_h = (_g = (_f = (_e = document
                              .querySelector("#layerDiv_" + item.uid + "__title")) === null || _e === void 0 ? void 0 : _e.parentElement) === null || _f === void 0 ? void 0 : _f.parentElement) === null || _g === void 0 ? void 0 : _g.parentElement) === null || _h === void 0 ? void 0 : _h.classList.add('hidden');
                      }
                      else {
                          item.open = true;
                          (_m = (_l = (_k = (_j = document
                              .querySelector("#layerDiv_" + item.uid + "__title")) === null || _j === void 0 ? void 0 : _j.parentElement) === null || _k === void 0 ? void 0 : _k.parentElement) === null || _l === void 0 ? void 0 : _l.parentElement) === null || _m === void 0 ? void 0 : _m.classList.remove('hidden');
                      }
                  }
              });
          };
          _this._createLayers = function () {
              if (_this.layerList) {
                  _this.layerList.container = 'layerWidget';
              }
          };
          _this.clearClick = function () {
              var _a;
              _this.filterLayers('');
              (_a = document.querySelector('#layerSearch .calcite-input-clear-button')) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', _this.clearClick);
          };
          _this._createSearch = function (input) {
              input.addEventListener('input', function (e) {
                  var _a;
                  _this.filterLayers(e.target.value);
                  (_a = input.querySelector('.calcite-input-clear-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', _this.clearClick);
              });
          };
          _this._reset = function () {
              console.log(new WebMap({ portalItem: _this.view.map.portalItem.clone() }).load().then(function (map) {
                  map.allLayers.forEach(function (layer) {
                      _this.view.map.findLayerById(layer.id).visible = layer.visible;
                      if (layer.type === 'group') {
                          layer.layers.forEach(function (layer) {
                              _this.view.map.findLayerById(layer.id).visible = layer.visible;
                          });
                      }
                  });
              }));
          };
          return _this;
      }
      Layers.prototype.render = function () {
          return (widget.tsx("div", { class: CSS$5.base },
              widget.tsx("div", { class: "flex sticky" },
                  widget.tsx("calcite-input", { clearable: true, placeholder: "Filter by layer name", scale: "s", afterCreate: this._createSearch, id: "layerSearch" }),
                  widget.tsx("calcite-button", { "icon-start": "viewHide", scale: "s", color: "light", onclick: this._reset })),
              widget.tsx("div", { afterCreate: this._createLayers, id: "layerWidget" })));
      };
      __decorate([
          decorators.aliasOf('viewModel.view')
      ], Layers.prototype, "view", void 0);
      __decorate([
          decorators.aliasOf('viewModel.layerList')
      ], Layers.prototype, "layerList", void 0);
      __decorate([
          decorators.property({
              type: LayersViewModel
          }),
          widget.renderable()
      ], Layers.prototype, "viewModel", void 0);
      Layers = __decorate([
          decorators.subclass('app.widgets.Layers')
      ], Layers);
      return Layers;
  }(Widget));
  //# sourceMappingURL=Layers.js.map

  var LocationSearchViewModel = (function (_super) {
      __extends(LocationSearchViewModel, _super);
      function LocationSearchViewModel(params) {
          var _this = _super.call(this, params) || this;
          watchUtils.whenDefinedOnce(_this, 'view', _this.init.bind(_this));
          return _this;
      }
      LocationSearchViewModel.prototype.init = function (view) {
          this.search = new Search({ view: view, maxSuggestions: 30, searchAllEnabled: false });
          this.search.allSources.on('after-add', function (e) {
              if (e.item.layer) {
                  e.item.name = e.item.layer.title;
                  e.item.placeholder = e.item.layer.title;
              }
          });
      };
      __decorate([
          decorators.property()
      ], LocationSearchViewModel.prototype, "view", void 0);
      LocationSearchViewModel = __decorate([
          decorators.subclass('app.widgets.LocationSearch.LocationSearchViewModel')
      ], LocationSearchViewModel);
      return LocationSearchViewModel;
  }(Accessor));
  //# sourceMappingURL=LocationSearchViewModel.js.map

  var CSS$6 = {
      base: 'esri-widget locationsearch-base'
  };
  var LocationSearch = (function (_super) {
      __extends(LocationSearch, _super);
      function LocationSearch(properties) {
          var _this = _super.call(this, properties) || this;
          _this.viewModel = new LocationSearchViewModel();
          _this._searchCreate = function () {
              if (_this.search) {
                  _this.search.container = 'locationSearch';
              }
          };
          return _this;
      }
      LocationSearch.prototype.render = function () {
          return (widget.tsx("div", { class: CSS$6.base },
              widget.tsx("div", { afterCreate: this._searchCreate, id: "locationSearch" })));
      };
      __decorate([
          decorators.aliasOf('viewModel.view')
      ], LocationSearch.prototype, "view", void 0);
      __decorate([
          decorators.aliasOf('viewModel.search')
      ], LocationSearch.prototype, "search", void 0);
      __decorate([
          decorators.property({
              type: LocationSearchViewModel
          }),
          widget.renderable()
      ], LocationSearch.prototype, "viewModel", void 0);
      LocationSearch = __decorate([
          decorators.subclass('app.widgets.LocationSearch')
      ], LocationSearch);
      return LocationSearch;
  }(Widget));
  //# sourceMappingURL=LocationSearch.js.map

  var OverviewMapViewModel = (function (_super) {
      __extends(OverviewMapViewModel, _super);
      function OverviewMapViewModel(params) {
          var _this = _super.call(this, params) || this;
          _this.stopEvtPropagation = function (event) {
              event.stopPropagation();
          };
          _this.disableZooming = function (view) {
              view.popup.dockEnabled = true;
              view.popup.actions = [];
              view.ui.components = ['attribution'];
              view.on('mouse-wheel', _this.stopEvtPropagation);
              view.on('double-click', _this.stopEvtPropagation);
              view.on('double-click', ['Control'], _this.stopEvtPropagation);
              view.on('drag', _this.stopEvtPropagation);
              view.on('drag', ['Shift'], _this.stopEvtPropagation);
              view.on('drag', ['Shift', 'Control'], _this.stopEvtPropagation);
              view.on('key-down', function (event) {
                  var prohibitedKeys = ['+', '-', 'Shift', '_', '='];
                  var keyPressed = event.key;
                  if (prohibitedKeys.indexOf(keyPressed) !== -1) {
                      event.stopPropagation();
                  }
              });
              return view;
          };
          watchUtils.whenDefinedOnce(_this, 'view', _this.init.bind(_this));
          return _this;
      }
      OverviewMapViewModel.prototype.init = function (view) {
          var _this = this;
          var map = new Map({ basemap: 'streets-navigation-vector' });
          this.overviewMapView = new MapView({ map: map, extent: view.extent });
          this.disableZooming(this.overviewMapView);
          this.overviewMapView.ui.remove('zoom');
          var graphic = new Graphic({
              geometry: null,
              symbol: {
                  type: 'simple-fill',
                  color: [0, 0, 0, 0.5],
                  outline: null
              }
          });
          this.overviewMapView.graphics.add(graphic);
          watchUtils__default.init(view, 'extent', function () {
              graphic.geometry = view.extent;
          });
          watchUtils__default.init(view, 'stationary', function () {
              if (view.stationary) {
                  _this.overviewMapView
                      .goTo({
                      center: view.center,
                      scale: view.scale *
                          2 *
                          Math.max(view.width / _this.overviewMapView.width, view.height / _this.overviewMapView.height)
                  })
                      .catch(function (error) {
                      if (error.name != 'view:goto-interrupted') {
                          console.error(error);
                      }
                  });
              }
          });
      };
      __decorate([
          decorators.property()
      ], OverviewMapViewModel.prototype, "view", void 0);
      OverviewMapViewModel = __decorate([
          decorators.subclass('app.widgets.OverviewMap.OverviewMapViewModel')
      ], OverviewMapViewModel);
      return OverviewMapViewModel;
  }(decorators.declared(Accessor)));
  //# sourceMappingURL=OverviewMapViewModel.js.map

  var CSS$7 = {
      base: 'esri-widget overviewmap-base'
  };
  var OverviewMap = (function (_super) {
      __extends(OverviewMap, _super);
      function OverviewMap(properties) {
          var _this = _super.call(this, properties) || this;
          _this.name = '';
          _this.viewModel = new OverviewMapViewModel();
          _this.overviewCreated = function (div) {
              if (_this.overviewMapView) {
                  _this.overviewMapView.container = div;
              }
          };
          return _this;
      }
      OverviewMap.prototype.render = function () {
          return (widget.tsx("div", { class: CSS$7.base },
              widget.tsx("div", { afterCreate: this.overviewCreated, id: "overviewDiv" })));
      };
      __decorate([
          decorators.aliasOf('viewModel.view')
      ], OverviewMap.prototype, "view", void 0);
      __decorate([
          decorators.aliasOf('viewModel.overviewMapView')
      ], OverviewMap.prototype, "overviewMapView", void 0);
      __decorate([
          decorators.aliasOf('viewModel.name'),
          widget.renderable()
      ], OverviewMap.prototype, "name", void 0);
      __decorate([
          decorators.property({
              type: OverviewMapViewModel
          }),
          widget.renderable()
      ], OverviewMap.prototype, "viewModel", void 0);
      OverviewMap = __decorate([
          decorators.subclass('app.widgets.OverviewMap')
      ], OverviewMap);
      return OverviewMap;
  }(decorators.declared(Widget)));
  //# sourceMappingURL=OverviewMap.js.map

  var ClearViewModel = (function (_super) {
      __extends(ClearViewModel, _super);
      function ClearViewModel(params) {
          var _this = _super.call(this, params) || this;
          watchUtils.whenDefinedOnce(_this, 'view', _this.init.bind(_this));
          return _this;
      }
      ClearViewModel.prototype.init = function (view) {
          console.log(view.scale);
      };
      __decorate([
          decorators.property()
      ], ClearViewModel.prototype, "view", void 0);
      ClearViewModel = __decorate([
          decorators.subclass('app.widgets.Clear.ClearViewModel')
      ], ClearViewModel);
      return ClearViewModel;
  }(decorators.declared(Accessor)));
  //# sourceMappingURL=ClearViewModel.js.map

  var CSS$8 = {
      base: 'esri-widget--button esri-widget',
      text: 'esri-icon-font-fallback-text',
      trashIcon: 'esri-icon esri-icon-trash',
      loadingIcon: 'esri-icon-loading-indicator',
      rotatingIcon: 'esri-rotating',
      widgetIcon: 'esri-icon-trash',
      disabled: 'esri-disabled'
  };
  var Clear = (function (_super) {
      __extends(Clear, _super);
      function Clear(properties) {
          var _this = _super.call(this, properties) || this;
          _this.viewModel = new ClearViewModel();
          _this.clearTitle = 'Clear';
          _this.renderIcon = function () {
              return widget.tsx("span", { "aria-hidden": "true", class: _this.classes(CSS$8.trashIcon) });
          };
          _this._clear = function () {
              _this.view.map.allLayers
                  .filter(function (layer) {
                  return layer.type === 'graphics';
              })
                  .forEach(function (layer) {
                  layer.removeAll();
              });
          };
          return _this;
      }
      Clear.prototype.render = function () {
          return (widget.tsx("div", { bind: this, class: this.classes(CSS$8.base), role: "button", onclick: this._clear, onkeydown: this._clear, "aria-label": this.clearTitle, title: this.clearTitle }, this.renderIcon()));
      };
      __decorate([
          decorators.aliasOf('viewModel.view')
      ], Clear.prototype, "view", void 0);
      __decorate([
          decorators.property({
              type: ClearViewModel
          }),
          widget.renderable()
      ], Clear.prototype, "viewModel", void 0);
      Clear = __decorate([
          decorators.subclass('app.widgets.Clear')
      ], Clear);
      return Clear;
  }(decorators.declared(Widget)));
  //# sourceMappingURL=Clear.js.map

  var measurement;
  var select = new Select();
  var layers;
  var legend;
  var basemaps;
  var bookmarks;
  var locationSearch;
  var drawWidget;
  var printWidget;
  var propertySearch;
  function initWidget(name, view) {
      if (name === 'Search' && !propertySearch) {
          propertySearch = new PropertySearch({
              view: view,
              condosTable: condosTable,
              addressTable: addressTable,
              propertyLayer: featureLayer,
              container: 'sideDiv'
          });
          createTemplate(view);
      }
      if (name === 'Layers' && !layers) {
          layers = new Layers({ view: view, container: 'layerDiv' });
      }
      if (name === 'Legend' && !legend) {
          legend = new Legend({ view: view, container: 'legendDiv' });
      }
      if (name === 'Print' && !printWidget) {
          printWidget = new Print({
              view: view,
              container: 'printDiv',
              printServiceUrl: 'https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task'
          });
      }
      if (name === 'Bookmarks' && !bookmarks) {
          bookmarks = new Bookmarks({ view: view, container: 'bookmarkDiv', editingEnabled: true });
      }
      if (name === 'Basemaps' && !basemaps) {
          basemaps = new BaseMaps({ view: view, container: 'basemapDiv' });
      }
      if (name === 'Location' && !locationSearch) {
          locationSearch = new LocationSearch({ view: view, container: 'locationDiv' });
      }
      if (name === 'Measure' && !measurement) {
          measurement = new Measure({ view: view, container: 'measureDiv' });
          measurement.postInitialize = function () {
              if (drawWidget) {
                  drawWidget.measurement = measurement.viewModel.measurement;
              }
              if (select) {
                  select.measurement = measurement.viewModel.measurement;
              }
          };
      }
      if (name === 'Draw' && !drawWidget) {
          drawWidget = new Draw({ view: view, container: 'drawDiv' });
          if (measurement) {
              drawWidget.measurement = measurement.viewModel.measurement;
          }
      }
  }
  function initWidgets(view) {
      var coordinates = new CoordinateConversion({ view: view });
      var coordinatesExpand = new Expand({
          content: coordinates,
          mode: 'floating',
          expandIconClass: 'esri-icon-pan2'
      });
      view.ui.add(coordinatesExpand, 'bottom-left');
      view.ui.add(new Compass({ view: view }), 'top-left');
      var locate = new Locate({ view: view });
      locate.on('locate-error', function (event) {
          console.log(event);
      });
      view.ui.add(locate, 'top-left');
      var track = new Track({ view: view });
      track.on('track-error', function (event) {
          console.log(event);
      });
      view.ui.add(track, 'top-left');
      view.ui.add(new Fullscreen({ view: view }), 'top-left');
      view.ui.add(new Clear({ view: view }), 'top-left');
      var overviewMap = new OverviewMap({ view: view });
      var overviewExpand = new Expand({
          content: overviewMap,
          mode: 'floating',
          expandIconClass: 'esri-icon-overview-arrow-top-left'
      });
      overviewExpand.watch('expanded', function (expanded) {
          if (expanded) {
              overviewMap.viewModel.overviewMapView.goTo({
                  center: view.center,
                  scale: view.scale *
                      2 *
                      Math.max(view.width / overviewMap.viewModel.overviewMapView.width, view.height / overviewMap.viewModel.overviewMapView.height)
              });
          }
      });
      view.ui.add(overviewExpand, 'bottom-right');
      select.container = 'selectDiv';
      select.view = view;
      select.layer = featureLayer;
      return view;
  }
  //# sourceMappingURL=widgets.js.map

  var initPanelHeaders = function () {
      document.querySelectorAll('calcite-panel div').forEach(function (panel) {
          if (panel.slot === 'header-actions-end') {
              panel.setAttribute('style', 'display: flex; flex-direction: row;');
          }
      });
      window.onresize = function (event) {
          var _a;
          if (((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.innerWidth) >= 500) {
              document.querySelectorAll('calcite-panel').forEach(function (item) {
                  var _a;
                  if (!item.hasAttribute('dismissed')) {
                      if (((_a = item.querySelector('.maximize')) === null || _a === void 0 ? void 0 : _a.getAttribute('icon')) === 'minimize') {
                          item.setAttribute('style', 'min-width: calc(100% - 48px)');
                      }
                      else {
                          item.setAttribute('style', 'min-width: 0px');
                      }
                  }
              });
          }
          else {
              document.querySelectorAll('calcite-panel').forEach(function (item) {
                  if (item.getAttribute('dismissed')) {
                      item.setAttribute('style', 'width: 0px');
                  }
                  else {
                      item.setAttribute('style', 'min-width: calc(100% - 48px)');
                  }
              });
          }
      };
      document.querySelectorAll('calcite-panel').forEach(function (item) {
          item.addEventListener('calcitePanelDismissedChange', function () {
              document.querySelectorAll('calcite-panel').forEach(function () {
                  item.setAttribute('style', 'width: 0px');
              });
          });
      });
      document.querySelectorAll('.maximize').forEach(function (item) {
          item.addEventListener('click', function () {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j;
              (_b = (_a = item.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.removeAttribute('dismissed');
              (_d = (_c = item.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.classList.remove('hidden');
              if (item.getAttribute('icon') === 'left-edge') {
                  item.setAttribute('icon', 'right-edge');
                  (_f = (_e = item.parentElement) === null || _e === void 0 ? void 0 : _e.parentElement) === null || _f === void 0 ? void 0 : _f.classList.add('maximized');
                  document.querySelectorAll('calcite-panel.left:not(.hidden)').forEach(function (item) {
                      item.classList.add('hidden');
                      item.setAttribute('dismissed', '');
                  });
                  (_g = document.querySelector('calcite-action[side="left"][active]')) === null || _g === void 0 ? void 0 : _g.removeAttribute('active');
              }
              else if (item.getAttribute('icon') === 'right-edge') {
                  item.setAttribute('icon', 'left-edge');
                  (_j = (_h = item.parentElement) === null || _h === void 0 ? void 0 : _h.parentElement) === null || _j === void 0 ? void 0 : _j.classList.remove('maximized');
              }
          });
      });
  };
  var initPanels = function () {
      document.querySelectorAll('calcite-panel').forEach(function (item) {
          var _a;
          var i = (_a = item === null || item === void 0 ? void 0 : item.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.content-container');
          if (i) {
              i.innerHTML +=
                  '<style>.content-container { height: 100%; } .container:focus, .content-container:focus { outline: none; }</style>';
          }
          var config = { attributes: true, childList: false, subtree: false };
          var callback = function (mutationsList) {
              var _loop_1 = function (mutation) {
                  if (mutation.type === 'attributes') {
                      if (mutation.attributeName === 'dismissed') {
                          var actions = document.querySelectorAll('calcite-action-bar calcite-action');
                          actions.forEach(function (action) {
                              if (action.text === mutation.target.title) {
                                  if (mutation.target.hasAttribute('dismissed')) {
                                      action.removeAttribute('active');
                                  }
                                  else {
                                      action.setAttribute('active', '');
                                  }
                              }
                          });
                          if (window.innerWidth <= 500) {
                              setTimeout(function () {
                                  var _a, _b;
                                  if (mutation.target.hasAttribute('dismissed')) {
                                      console.log(mutation.target.title, 'dismissed');
                                      (_a = document.querySelector('#viewDiv')) === null || _a === void 0 ? void 0 : _a.classList.remove('below');
                                  }
                                  else {
                                      console.log(mutation.target.title, 'not dismissed');
                                      (_b = document.querySelector('#viewDiv')) === null || _b === void 0 ? void 0 : _b.classList.add('below');
                                  }
                              });
                          }
                      }
                  }
              };
              for (var _i = 0, mutationsList_1 = mutationsList; _i < mutationsList_1.length; _i++) {
                  var mutation = mutationsList_1[_i];
                  _loop_1(mutation);
              }
          };
          var observer = new MutationObserver(callback);
          observer.observe(item, config);
      });
  };
  //# sourceMappingURL=panels.js.map

  var ActionBarViewModel = (function (_super) {
      __extends(ActionBarViewModel, _super);
      function ActionBarViewModel(params) {
          var _this = _super.call(this, params) || this;
          _this.ready = false;
          _this.reorderPanels = function () {
              if (_this.view) {
                  document.querySelectorAll('.panel.left').forEach(function (panel) {
                      var _a, _b, _c;
                      if (window.innerWidth >= 1000) {
                          (_a = panel.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(panel, document.querySelector('#viewDiv'));
                      }
                      else {
                          (_b = panel.parentElement) === null || _b === void 0 ? void 0 : _b.insertBefore(panel, (_c = document === null || document === void 0 ? void 0 : document.querySelector('#viewDiv')) === null || _c === void 0 ? void 0 : _c.nextElementSibling);
                      }
                  });
              }
          };
          _this.initActions = function () {
              setTimeout(function () {
                  var _a, _b;
                  var actions = document.querySelectorAll('calcite-action-bar calcite-action');
                  if (actions.length) {
                      _this.actions = actions;
                      (_a = _this.actions) === null || _a === void 0 ? void 0 : _a.forEach(function (action) {
                          action === null || action === void 0 ? void 0 : action.addEventListener('click', function (e) {
                              _this.toggleAction(e.target);
                              setTimeout(function () {
                                  initWidget(e.target.text, _this.view);
                              });
                              _this.actions.forEach(function (a) {
                                  if (a.text != e.target.text) {
                                      if (window.innerWidth >= 1000) {
                                          if (a.getAttribute('side') === action.getAttribute('side')) {
                                              a.removeAttribute('active');
                                          }
                                      }
                                      else {
                                          a.removeAttribute('active');
                                      }
                                  }
                              });
                              action.setAttribute('active', '');
                          });
                      });
                  }
                  if (window.innerWidth >= 500) {
                      (_b = document.querySelector('calcite-action[text="Search"')) === null || _b === void 0 ? void 0 : _b.setAttribute('active', '');
                  }
              });
          };
          _this.toggleAction = function (action) {
              if (window.innerWidth >= 1000) {
                  document.querySelectorAll(".panel." + action.getAttribute('side')).forEach(function (panel) {
                      if (panel.title != action.text) {
                          panel.classList.add('hidden');
                      }
                      else {
                          panel.removeAttribute('dismissed');
                          if (!panel.hasAttribute('dismissed')) {
                              if (window.innerWidth < 500) {
                                  panel.setAttribute('style', 'min-width: calc(100% - 48px)');
                              }
                              else {
                                  panel.setAttribute('style', 'min-width: 0px');
                              }
                              panel.classList.remove('hidden');
                              if (panel.title != 'Measure') ;
                          }
                      }
                  });
              }
              else {
                  document.querySelectorAll('.panel').forEach(function (panel) {
                      if (panel.title != action.text) {
                          panel.classList.add('hidden');
                      }
                      else {
                          console.log(panel);
                          panel.removeAttribute('dismissed');
                          console.log(panel);
                          console.log(panel.title);
                          if (!panel.hasAttribute('dismissed')) {
                              if (window.innerWidth < 500) {
                                  panel.setAttribute('style', 'min-width: calc(100% - 48px)');
                              }
                              else {
                                  panel.setAttribute('style', 'min-width: 0px');
                              }
                              panel.classList.remove('hidden');
                              if (panel.title != 'Measure') ;
                          }
                      }
                  });
              }
          };
          _this.enableActionbar = function () {
              _this.reorderPanels();
              setTimeout(function () {
                  document.querySelectorAll('calcite-action-bar calcite-action').forEach(function (item) {
                      item.removeAttribute('disabled');
                  });
              }, 1000);
              _this.ready = true;
          };
          watchUtils.whenDefinedOnce(_this, 'view', _this.init.bind(_this));
          watchUtils.whenDefinedOnce(_this, 'side', _this.sideSet.bind(_this));
          return _this;
      }
      ActionBarViewModel.prototype.sideSet = function (side) {
          var _a, _b;
          if (side === 'right') {
              (_a = document.querySelector('#toolGroup')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
          }
          if (side === 'left') {
              (_b = document.querySelector('#searchGroup')) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
          }
          var actions = document.querySelectorAll('calcite-action-bar calcite-action');
          if (actions.length) {
              this.actions = actions;
          }
      };
      ActionBarViewModel.prototype.init = function (view) {
          var _this = this;
          console.log(view.scale);
          initWidget('Search', this.view);
          window.addEventListener('resize', function () {
              setTimeout(function () {
                  var _a, _b, _c, _d, _e, _f, _g, _h;
                  if (window.innerWidth >= 1000) {
                      (_a = document.querySelector('#leftActionbar')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
                      (_c = (_b = document
                          .querySelector('#leftActionbar')) === null || _b === void 0 ? void 0 : _b.querySelector('#toolGroup')) === null || _c === void 0 ? void 0 : _c.classList.remove('hidden');
                      (_e = (_d = document
                          .querySelector('#actionBar')) === null || _d === void 0 ? void 0 : _d.querySelector('#toolGroup')) === null || _e === void 0 ? void 0 : _e.classList.add('hidden');
                  }
                  else {
                      (_f = document.querySelector('#leftActionbar')) === null || _f === void 0 ? void 0 : _f.classList.add('hidden');
                      (_h = (_g = document
                          .querySelector('#actionBar')) === null || _g === void 0 ? void 0 : _g.querySelector('#toolGroup')) === null || _h === void 0 ? void 0 : _h.classList.remove('hidden');
                      document.querySelectorAll('.panel.left').forEach(function (panel) {
                          panel.setAttribute('dismissed', '');
                          panel.classList.add('hidden');
                      });
                  }
                  _this.reorderPanels();
              }, 1000);
          });
      };
      __decorate([
          decorators.property()
      ], ActionBarViewModel.prototype, "view", void 0);
      __decorate([
          decorators.property()
      ], ActionBarViewModel.prototype, "side", void 0);
      __decorate([
          decorators.property()
      ], ActionBarViewModel.prototype, "ready", void 0);
      __decorate([
          decorators.property()
      ], ActionBarViewModel.prototype, "actions", void 0);
      ActionBarViewModel = __decorate([
          decorators.subclass('app.widgets.ActionBar.ActionBarViewModel')
      ], ActionBarViewModel);
      return ActionBarViewModel;
  }(decorators.declared(Accessor)));
  //# sourceMappingURL=ActionBarViewModel.js.map

  var CSS$9 = {
      base: 'esri-widget actionbar-base'
  };
  var ActionBar = (function (_super) {
      __extends(ActionBar, _super);
      function ActionBar(properties) {
          var _this = _super.call(this, properties) || this;
          _this.viewModel = new ActionBarViewModel();
          _this.searchGroupCreated = function (item) {
              if (_this.side === 'left') {
                  item.classList.add('hidden');
              }
              if (!_this.actions) {
                  _this.initActions();
              }
          };
          _this.toolGroupCreated = function (item) {
              var _a;
              if (_this.side === 'right') {
                  if (window.innerWidth >= 1000) {
                      item.classList.add('hidden');
                  }
                  else {
                      (_a = document.querySelector('#leftActionbar')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
                  }
              }
              if (!_this.actions) {
                  _this.initActions();
              }
          };
          return _this;
      }
      ActionBar.prototype.render = function () {
          return (widget.tsx("div", { class: CSS$9.base },
              widget.tsx("calcite-action-bar", { expand: "false" },
                  widget.tsx("calcite-action-group", { id: "searchGroup", afterCreate: this.searchGroupCreated },
                      widget.tsx("calcite-action", { text: "Search", icon: "search", side: "right", disabled: true }),
                      widget.tsx("calcite-action", { text: "Location", icon: "pin", side: "right", disabled: true }),
                      widget.tsx("calcite-action", { text: "Layers", icon: "layers", side: "right", disabled: true }),
                      widget.tsx("calcite-action", { text: "Legend", icon: "legend", side: "right", disabled: true }),
                      widget.tsx("calcite-action", { text: "Basemaps", icon: "basemap", side: "right", disabled: true })),
                  widget.tsx("calcite-action-group", { id: "toolGroup", afterCreate: this.toolGroupCreated },
                      widget.tsx("calcite-action", { text: "Select", icon: "selection", side: "left", disabled: true }),
                      widget.tsx("calcite-action", { text: "Measure", icon: "measure", side: "left", disabled: true }),
                      widget.tsx("calcite-action", { text: "Draw", icon: "pencil-mark", side: "left", disabled: true }),
                      widget.tsx("calcite-action", { text: "Bookmarks", icon: "bookmark", side: "left", disabled: true }),
                      widget.tsx("calcite-action", { text: "Print", icon: "print", side: "left", disabled: true })))));
      };
      __decorate([
          decorators.aliasOf('viewModel.view')
      ], ActionBar.prototype, "view", void 0);
      __decorate([
          decorators.aliasOf('viewModel.side')
      ], ActionBar.prototype, "side", void 0);
      __decorate([
          decorators.property(),
          decorators.aliasOf('viewModel.ready')
      ], ActionBar.prototype, "ready", void 0);
      __decorate([
          decorators.aliasOf('viewModel.actions')
      ], ActionBar.prototype, "actions", void 0);
      __decorate([
          decorators.aliasOf('viewModel.toggleAction')
      ], ActionBar.prototype, "toggleAction", void 0);
      __decorate([
          decorators.aliasOf('viewModel.enableActionbar')
      ], ActionBar.prototype, "enableActionbar", void 0);
      __decorate([
          decorators.aliasOf('viewModel.initActions')
      ], ActionBar.prototype, "initActions", void 0);
      __decorate([
          decorators.property({
              type: ActionBarViewModel
          }),
          widget.renderable()
      ], ActionBar.prototype, "viewModel", void 0);
      ActionBar = __decorate([
          decorators.subclass('app.widgets.ActionBar')
      ], ActionBar);
      return ActionBar;
  }(decorators.declared(Widget)));
  //# sourceMappingURL=ActionBar.js.map

  var _a, _b;
  var actionBar = new ActionBar({ side: 'right', container: 'actionBar' });
  var leftActionBar = new ActionBar({ side: 'left', container: 'leftActionbar' });
  function checkLocalStorage(view) {
      if (window.localStorage.getItem('imaps')) {
          var webmap_1 = WebMap.fromJSON(JSON.parse(window.localStorage.getItem('imaps')));
          webmap_1.load().then(function () {
              view.map.allLayers.forEach(function (layer) {
                  var lyr = webmap_1.allLayers.find(function (l) {
                      return layer.id === l.id;
                  });
                  layer.visible = lyr === null || lyr === void 0 ? void 0 : lyr.visible;
                  layer.opacity = lyr === null || lyr === void 0 ? void 0 : lyr.opacity;
              });
              view.map.basemap = webmap_1.basemap;
              view.extent = webmap_1.initialViewProperties.viewpoint.targetGeometry.extent;
          });
      }
  }
  window.addEventListener('pagehide', function () {
      exports.view.map.removeMany(exports.view.map.allLayers
          .filter(function (layer) {
          return layer.type === 'group' && !layer.layers.length;
      })
          .toArray());
      var json = exports.view.map.toJSON();
      json.initialState.viewpoint.targetGeometry = exports.view.extent;
      window.localStorage.setItem('imaps', JSON.stringify(json));
  });
  if (window.innerWidth >= 500) {
      (_a = document.querySelector('calcite-panel.right')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
      (_b = document.querySelector('calcite-panel.right')) === null || _b === void 0 ? void 0 : _b.removeAttribute('dismissed');
  }
  initPanels();
  watchUtils__default.whenDefinedOnce(actionBar, 'actions', function (actions) {
      if (actions.length && !exports.view) {
          exports.view = new MapView({
              container: 'viewDiv',
              map: map
          });
          exports.view.when(function () {
              actionBar.view = exports.view;
              leftActionBar.view = exports.view;
              actionBar.enableActionbar();
              checkLocalStorage(exports.view);
              exports.view.map.watch('layers', function () {
                  exports.view.map.allLayers.forEach(function (layer) {
                      if (layer.type != 'group') {
                          layer.watch('visible', function (visible) {
                              var _a;
                              (_a = layers === null || layers === void 0 ? void 0 : layers.layerList) === null || _a === void 0 ? void 0 : _a.operationalItems.forEach(function (item) {
                                  if (item.layer.type === 'group') {
                                      var child = item.children.find(function (i) {
                                          return i.layer === layer;
                                      });
                                      if (child) {
                                          child.panel.open = visible;
                                      }
                                  }
                              });
                          });
                      }
                      else {
                          layer.watch('visible', function (visible) {
                              var group = layers === null || layers === void 0 ? void 0 : layers.layerList.operationalItems.find(function (i) {
                                  return i.layer === layer;
                              });
                              if (group) {
                                  group.open = visible;
                              }
                          });
                      }
                  });
              });
              var propertyLayer = map.allLayers.find(function (layer) {
                  return layer.title === 'Property' && layer.type === 'feature';
              });
              exports.view.on('hold', function (e) {
                  propertySearch.geometry = e.mapPoint;
                  setTimeout(function () {
                  }, 1000);
              });
              exports.view
                  .whenLayerView(propertyLayer)
                  .then(function () {
                  var _a;
                  (_a = document.querySelector('#mapLoader')) === null || _a === void 0 ? void 0 : _a.toggleAttribute('active');
                  propertySearch.propertyLayer = propertyLayer;
                  select.viewModel.watch('geometry', function (geometry) {
                      propertySearch.geometry = geometry;
                      actionBar.actions.forEach(function (action) {
                          if (action.text === 'Search') {
                              actionBar.toggleAction(action);
                          }
                      });
                  });
              })
                  .catch(function (reason) {
                  console.log(reason);
                  showAlert('Property layer did not load. Please contact iMAPS Help Desk.', 'red');
              });
          });
          exports.view.when(initWidgets);
          exports.view.when(initTips);
      }
  });
  initPanelHeaders();
  initMenu();
  //# sourceMappingURL=index.js.map

  Object.defineProperty(exports, '__esModule', { value: true });

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FwcC50cyIsIi4uLy4uL3NyYy9tZW51LnRzIiwiLi4vLi4vc3JjL3RpcHMudHMiLCIuLi8uLi9zcmMvYWxlcnQudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaC9Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL1Byb3BlcnR5U2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUvTWVhc3VyZVZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUudHN4IiwiLi4vLi4vc3JjL2RhdGEvc2VhcmNoLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy9EcmF3Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9TZWxlY3QvU2VsZWN0Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvU2VsZWN0LnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL0Jhc2VNYXBzL0Jhc2VNYXBzVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQmFzZU1hcHMudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvTGF5ZXJzL0xheWVyc1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xheWVycy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaC9Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xvY2F0aW9uU2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL092ZXJ2aWV3TWFwL092ZXJ2aWV3TWFwVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvT3ZlcnZpZXdNYXAudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvQ2xlYXIvQ2xlYXJWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9DbGVhci50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy50cyIsIi4uLy4uL3NyYy9wYW5lbHMudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9BY3Rpb25CYXIvQWN0aW9uQmFyVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQWN0aW9uQmFyLnRzeCIsIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViTWFwIGZyb20gJ2VzcmkvV2ViTWFwJztcbmV4cG9ydCBsZXQgbWFwID0gbmV3IFdlYk1hcCgpO1xubWFwID0gbmV3IFdlYk1hcCh7IHBvcnRhbEl0ZW06IHsgaWQ6ICc5NTA5MjQyODc3NGM0YjFmYjZhM2I2ZjVmZWQ5ZmJjNCcgfSB9KTtcbi8vIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzJykpIHtcbi8vICAgbWFwID0gV2ViTWFwLmZyb21KU09OKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpIGFzIHN0cmluZykpO1xuLy8gfVxuIiwiZXhwb3J0IGxldCB0aGVtZSA9ICdsaWdodCc7XG5jb25zdCBzZXRUaGVtZSA9ICh0aGVtZTogc3RyaW5nKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtY29sb3InKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtdGlwLW1hbmFnZXInKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtZHJvcGRvd24nKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWxlcnQnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtbW9kYWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYmxvY2snKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGljay1saXN0JykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFjdGlvbi1iYXInKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgdGhlbWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyb3dQYXRoJyk/LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhlbWUgPT09ICdsaWdodCcgPyAnYmxhY2snIDogJ3doaXRlJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGluaycpLmZvckVhY2gobGluayA9PiB7XG4gICAgaWYgKGxpbmsuaHJlZi5pbmNsdWRlcyh0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpKSB7XG4gICAgICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMTgvZXNyaS90aGVtZXMvJyArIHRoZW1lICsgJy9tYWluLmNzcyc7XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgY29uc3QgaW5pdE1lbnUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtZHJvcGRvd24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZURyb3Bkb3duU2VsZWN0JywgKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBlLmN1cnJlbnRUYXJnZXQuc2VsZWN0ZWRJdGVtc1swXT8uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIHRoZW1lID0gdmFsdWU7XG4gICAgc2V0VGhlbWUodGhlbWUpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSB7XG4gICAgY29uc3QgdGhlbWVOYW1lOiBzdHJpbmcgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgYXMgc3RyaW5nO1xuICAgIHNldFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgICAgaWYgKChlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmcpICE9IHRoZW1lTmFtZSkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgc3RyaW5nO1xuICAgICAgICB0aGVtZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKChlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmcpID09PSB0aGVtZU5hbWUpIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSB7XG4gICAgc2V0VGhlbWUoJ2RhcmsnKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi9tZW51JztcblxuY29uc3QgdGlwR3JvdXBzID0gW1xuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdzZWxlY3RUaXAnLFxuICAgICAgdGl0bGU6ICdTZWxlY3Rpb24nLFxuICAgICAgdGlwczogW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIGRyYXcgYSBjb250aW51b3VzIGxpbmUgb3IgcG9seWdvbiwgbG9uZyBwcmVzcyBhbmQgZHJhZyB5b3VyIGN1cnNvcicsXG4gICAgICAgICAgdGl0bGU6ICdGcmVlaGFuZCBEcmF3aW5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIGRyYXcgYSBjb250aW51b3VzIGxpbmUgb3IgcG9seWdvbiwgbG9uZyBwcmVzcyBhbmQgZHJhZyB5b3VyIGN1cnNvcicsXG4gICAgICAgICAgdGl0bGU6ICdGcmVlaGFuZCBEcmF3aW5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdwcm9wZXJ0eVNlYXJjaFRpcCcsXG4gICAgICB0aXRsZTogJ1Byb3BlcnR5IFNlYXJjaCcsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ1RvIHNlYXJjaCBieSBhIHBvcnRpb24gb2YgYW4gb3duZXIgbmFtZSBvciBhZGRyZXNzLCBoaXQgZW50ZXIgd2l0aG91dCBzZWxlY3RpbmcgZm9ybSB0aGUgbGlzdCBvZiBzdWdnZXN0aW9ucy4nLFxuICAgICAgICAgIHRpdGxlOiAnV2lsZGNhcmQgU2VhcmNoJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIHF1aWNrbHkgc2VsZWN0IGEgcHJvcGVydHkgZnJvbSB0aGUgbWFwLCBsb25nIHByZXNzIG9uIGEgcHJvcGVydHkgb24gdGhlIG1hcC4nLFxuICAgICAgICAgIHRpdGxlOiAnTG9uZyBQcmVzcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUbyBzZWxlY3QgYnkgYSBsb2NhdGlvbiB1c2UgdGhlIHByb3BlcnR5IHNlbGVjdGlvbiB0b29sLicsXG4gICAgICAgICAgdGl0bGU6ICdTZWxlY3QgQnkgTG9jYXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnUHJldmlvdXMgXCJ0YWJcIiBsYXlvdXQgaGFzIGJlZW4gY29uc29saWRhdGVkIGludG8gYSBzaW5nbGUgc2Nyb2xsYWJsZSBwYW5lbC4nLFxuICAgICAgICAgIHRpdGxlOiAnU2luZ2xlIERldGFpbHMgUGFuZWwnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwYW5lbDoge1xuICAgICAgbmFtZTogJ2Jhc2VtYXBUaXAnLFxuICAgICAgdGl0bGU6ICdCYXNlbWFwcycsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ1RoZSBpbWFnZXJ5IGFuZCBpbWFnZXJ5IGh5YnJpZCBiYXNlIG1hcHMgbGlzdGVkIHVuZGVyIHRoZSBtYXBzIHRhYiBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBsYXRlc3QgaW1hZ2VyeSBmcm9tIFJhbGVpZ2ggKDIwMTkpIGFuZCBmcm9tIHRoZSBTdGF0ZSBvZiBOb3J0aCBDYXJvbGluYSAoMjAxNykuJyxcbiAgICAgICAgICB0aXRsZTogJ0ltYWdlcnkgQmFzZW1hcHMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbl07XG5leHBvcnQgZnVuY3Rpb24gaW5pdFRpcHMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXAnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLXRpcC1tYW5hZ2VyJyk/LnJlbW92ZSgpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGNvbnN0IG1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcC1tYW5hZ2VyJyk7XG4gICAgICBtYW5hZ2VyLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gICAgICBjb25zdCB0aXBHcm91cCA9IHRpcEdyb3Vwcy5maW5kKGdyb3VwID0+IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnBhbmVsLm5hbWUgPT09IGl0ZW0uaWQ7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcC1ncm91cCcpO1xuICAgICAgZ3JvdXAuc2V0QXR0cmlidXRlKCd0ZXh0LWdyb3VwLXRpdGxlJywgKHRpcEdyb3VwIGFzIGFueSk/LnBhbmVsLnRpdGxlKTtcbiAgICAgIG1hbmFnZXIuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgICAgdGlwR3JvdXA/LnBhbmVsLnRpcHMuZm9yRWFjaCh0aXAgPT4ge1xuICAgICAgICBjb25zdCBjYWxjaXRlVGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAnKTtcbiAgICAgICAgY2FsY2l0ZVRpcC5zZXRBdHRyaWJ1dGUoJ2hlYWRpbmcnLCB0aXAudGl0bGUpO1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLmlubmVySFRNTCA9IHRpcC5tZXNzYWdlO1xuICAgICAgICBjYWxjaXRlVGlwLmFwcGVuZENoaWxkKHApO1xuICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjYWxjaXRlVGlwKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQ/LmJvZHk/LmFwcGVuZENoaWxkKG1hbmFnZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzaG93QWxlcnQodGV4dDogc3RyaW5nLCBjb2xvcjogc3RyaW5nKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtYWxlcnQnKT8ucmVtb3ZlKCk7XG4gIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1hbGVydCcpO1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdzbG90JywgJ2FsZXJ0LW1lc3NhZ2UnKTtcbiAgbWVzc2FnZS5pbm5lckhUTUwgPSB0ZXh0O1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgY29sb3IpO1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdpY29uJywgJycpO1xuXG4gIGFsZXJ0LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFsZXJ0KTtcbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoJztcbmltcG9ydCBGZWF0dXJlVGFibGUgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZSc7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XG5pbXBvcnQgTGF5ZXJTZWFyY2hTb3VyY2UgZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaC9MYXllclNlYXJjaFNvdXJjZSc7XG5pbXBvcnQgRmllbGRDb2x1bW5Db25maWcgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZS9GaWVsZENvbHVtbkNvbmZpZyc7XG5pbXBvcnQgTWVudUJ1dHRvbkl0ZW0gZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZS9HcmlkL3N1cHBvcnQvQnV0dG9uTWVudUl0ZW0nO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlLCB3aGVuRGVmaW5lZCB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBTZWFyY2hTb3VyY2UgZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaC9TZWFyY2hTb3VyY2UnO1xuaW1wb3J0IEZlYXR1cmVTZXQgZnJvbSAnZXNyaS90YXNrcy9zdXBwb3J0L0ZlYXR1cmVTZXQnO1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Qcm9wZXJ0eVNlYXJjaC5Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQHByb3BlcnR5KCkgYWRkcmVzc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQHByb3BlcnR5KCkgcHJvcGVydHlMYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG5cbiAgQHByb3BlcnR5KCkgc2VhcmNoV2lkZ2V0OiBlc3JpLndpZGdldHNTZWFyY2g7XG4gIEBwcm9wZXJ0eSgpIGZlYXR1cmVUYWJsZTogZXNyaS5GZWF0dXJlVGFibGU7XG4gIEBwcm9wZXJ0eSgpIGZlYXR1cmU6IGVzcmkuRmVhdHVyZTtcbiAgQHByb3BlcnR5KCkgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG5cbiAgY2x1c3RlclBvaW50czogRmVhdHVyZUxheWVyO1xuXG4gIGdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBpZDogJ3Byb3BlcnR5LXNlbGVjdCcsIGxpc3RNb2RlOiAnaGlkZScsIG1pblNjYWxlOiAxOTIwMCB9KTtcbiAgc2luZ2xlU3ltYm9sID0ge1xuICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgc3R5bGU6ICdub25lJyxcbiAgICBvdXRsaW5lOiB7IHdpZHRoOiAyLjUsIGNvbG9yOiBbMjU1LCA4MiwgODIsIDFdIH0sXG4gICAgY29sb3I6IFsyNTMsIDQ2LCA2NSwgMC4yNV1cbiAgfTtcbiAgbXVsdGlTeW1ib2wgPSB7XG4gICAgdHlwZTogJ3NpbXBsZS1maWxsJyxcbiAgICBzdHlsZTogJ25vbmUnLFxuICAgIG91dGxpbmU6IHsgd2lkdGg6IDIuNSwgY29sb3I6IFsyNDksIDI0MywgMCwgMV0gfSxcbiAgICBjb2xvcjogWzI1MywgNDYsIDY1LCAwLjI1XVxuICB9O1xuICBzZWxlY3RlZFByb3BlcnR5OiBlc3JpLkdyYXBoaWM7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAnY29uZG9zVGFibGUnLCB0aGlzLmluaXRTZWFyY2guYmluZCh0aGlzKSk7XG4gICAgd2hlbkRlZmluZWQodGhpcywgJ2dlb21ldHJ5JywgdGhpcy5zZWFyY2hCeUdlb21ldHJ5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc2VhcmNoQnlHZW9tZXRyeShnZW9tZXRyeTogZXNyaS5HZW9tZXRyeSkge1xuICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgLnF1ZXJ5RmVhdHVyZXMoeyBnZW9tZXRyeTogZ2VvbWV0cnksIHJldHVybkdlb21ldHJ5OiB0cnVlLCBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnLCAnUkVJRCddIH0pXG4gICAgICAudGhlbihwcm9wZXJ0eVJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMucHJvcGVydHlMYXllci5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0NPTkRPUyc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUxheWVyXG4gICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBsZXQgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQocmVzdWx0W2tleV0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBmZWF0dXJlc1swXS5nZW9tZXRyeSA9IHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzWzBdLmdlb21ldHJ5O1xuXG4gICAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZShmZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIFtmZWF0dXJlc1swXS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJyldKTtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVTZXQ6IEZlYXR1cmVTZXQgPSBuZXcgRmVhdHVyZVNldCh7IGZlYXR1cmVzOiBbXSB9KTtcbiAgICAgICAgICAgIHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICBmZWF0dXJlLnN5bWJvbCA9XG4gICAgICAgICAgICAgICAgcHJvcGVydHlSZXN1bHQuZmVhdHVyZXMubGVuZ3RoID4gMSA/ICh0aGlzLm11bHRpU3ltYm9sIGFzIGFueSkgOiAodGhpcy5zaW5nbGVTeW1ib2wgYXMgYW55KTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlSZXN1bHQuZmVhdHVyZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5nZW9tZXRyeSA9IHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzWzBdLmdlb21ldHJ5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgZmVhdHVyZXMpO1xuICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmFkZChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgZmVhdHVyZVNldC5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZENsdXN0ZXJHcmFwaGljcyhmZWF0dXJlU2V0KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIgPSAoZmllbGRzOiBlc3JpLkZpZWxkW10sIGZlYXR1cmVzOiBlc3JpLkdyYXBoaWNbXSkgPT4ge1xuICAgIHJldHVybiBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgc291cmNlOiBmZWF0dXJlcyxcbiAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnLFxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogdGhpcy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgICB9KTtcbiAgfTtcbiAgYWRkQ2x1c3RlckdyYXBoaWNzID0gKHJlc3VsdDogZXNyaS5GZWF0dXJlU2V0KSA9PiB7XG4gICAgY29uc3QgcG9pbnRzOiBHcmFwaGljW10gPSBbXTtcbiAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgIGNvbnN0IHB0ID0gZmVhdHVyZS5jbG9uZSgpO1xuICAgICAgcHQuZ2VvbWV0cnkgPSAocHQuZ2VvbWV0cnkgYXMgZXNyaS5Qb2x5Z29uKS5jZW50cm9pZDtcbiAgICAgIHBvaW50cy5wdXNoKHB0KTtcbiAgICB9KTtcbiAgICB0aGlzLmNsdXN0ZXJQb2ludHMucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiAnMT0xJywgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLCBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLmNsdXN0ZXJQb2ludHMuYXBwbHlFZGl0cyh7IGRlbGV0ZUZlYXR1cmVzOiByZXN1bHQuZmVhdHVyZXMgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY2x1c3RlclBvaW50cy5hcHBseUVkaXRzKHsgYWRkRmVhdHVyZXM6IHBvaW50cyB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsdXN0ZXJQb2ludHMucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBhZGRHcmFwaGljcyA9IChyZXN1bHQ6IGVzcmkuRmVhdHVyZVNldCkgPT4ge1xuICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG4gICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICBmZWF0dXJlLnN5bWJvbCA9IHJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxID8gKHRoaXMubXVsdGlTeW1ib2wgYXMgYW55KSA6ICh0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnkpO1xuICAgICAgdGhpcy5ncmFwaGljcy5hZGQoZmVhdHVyZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENsdXN0ZXJHcmFwaGljcyhyZXN1bHQpO1xuICB9O1xuXG4gIGdldFByb3BlcnR5ID0gKG9pZHM6IGFueVtdLCBzb3VyY2U/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmNvbmRvc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgIHJldHVybiByLm5hbWUgPT09ICdQUk9QRVJUWSc7XG4gICAgfSk7XG4gICAgdGhpcy5jb25kb3NUYWJsZVxuICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHtcbiAgICAgICAgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsXG4gICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZSxcbiAgICAgICAgICAgIG91dFNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5mZWF0dXJlPy5ncmFwaGljKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljLmdlb21ldHJ5ID0gcmVzdWx0Py5mZWF0dXJlc1swXS5nZW9tZXRyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmlldy5nb1RvKHJlc3VsdC5mZWF0dXJlcyk7XG5cbiAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkR3JhcGhpY3MocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHNlYXJjaENvbXBsZXRlID0gKGV2ZW50OiBlc3JpLlNlYXJjaFNlYXJjaENvbXBsZXRlRXZlbnQpID0+IHtcbiAgICBpZiAoIXRoaXMuc2VhcmNoV2lkZ2V0LnZpZXdNb2RlbC5zZWxlY3RlZFN1Z2dlc3Rpb24pIHtcbiAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG5cbiAgICAgIGxldCB3aGVyZSA9ICcnO1xuXG4gICAgICBpZiAoIXRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSkge1xuICAgICAgICB3aGVyZSA9IGBPV05FUiBsaWtlICdfJHtldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCl9JScgT1IgUkVJRCBsaWtlICcke2V2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKX0lJyBPUiBQSU5fTlVNIGxpa2UgJyR7ZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUnYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgodGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIGFzIGFueSk/LnNlYXJjaEZpZWxkcy5pbmNsdWRlcygnT1dORVInKSkge1xuICAgICAgICAgIHdoZXJlID0gYE9XTkVSIGxpa2UgJ18lJHtldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCl9JSdgO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIGFzIGFueSk/LnNlYXJjaEZpZWxkcy5pbmNsdWRlcygnUElOX05VTScpKSB7XG4gICAgICAgICAgd2hlcmUgPSBgUElOX05VTSBsaWtlICclJHtldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCl9JSdgO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIGFzIGFueSk/LnNlYXJjaEZpZWxkcy5pbmNsdWRlcygnUkVJRCcpKSB7XG4gICAgICAgICAgd2hlcmUgPSBcIlJFSUQgbGlrZSAnJVwiICsgZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpICsgXCIlJ1wiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCB0YWJsZUZlYXR1cmVzOiBhbnlbXSA9IFtdO1xuXG4gICAgICB0aGlzLmNvbmRvc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogd2hlcmUsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0YWJsZUZlYXR1cmVzID0gcmVzdWx0LmZlYXR1cmVzO1xuICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goZi5nZXRPYmplY3RJZCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICF0aGlzLnNlYXJjaFdpZGdldC5hY3RpdmVTb3VyY2UgfHxcbiAgICAgICAgICAodGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIGFzIGFueSk/LnNlYXJjaEZpZWxkcy5pbmNsdWRlcygnQUREUkVTUycpXG4gICAgICAgICkge1xuICAgICAgICAgIHdoZXJlID0gYEFERFJFU1MgbGlrZSAnJSR7ZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUnYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aGVyZSA9ICdBRERSRVNTIElTIE5VTEwnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRyZXNzVGFibGUucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiB3aGVyZSwgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwID0gdGhpcy5hZGRyZXNzVGFibGUucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0FERFJFU1NFUyc7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgYWRkck9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICBhZGRyT2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcCAmJiBhZGRyT2lkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXAuaWQsIG9iamVjdElkczogYWRkck9pZHMsIG91dEZpZWxkczogWycqJ10gfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCB0YWJsZUZlYXR1cmVzKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvcGVydHkob2lkcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRhYmxlRmVhdHVyZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBuZXcgR3JhcGhpYygpO1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5yZW5kZXJOb3coKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJvcGVydHkob2lkcyk7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IHRoaXMuY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIodGhpcy5jb25kb3NUYWJsZS5maWVsZHMsIHRhYmxlRmVhdHVyZXMpO1xuICAgICAgICAgICAgaWYgKHRhYmxlRmVhdHVyZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYyA9IG5ldyBHcmFwaGljKCk7XG4gICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgndGFibGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLnJlbmRlck5vdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGV2ZW50Lm51bVJlc3VsdHMpIHtcbiAgICAgICAgbGV0IGxheWVyID0gKGV2ZW50LnJlc3VsdHNbMF0uc291cmNlIGFzIExheWVyU2VhcmNoU291cmNlKS5sYXllciBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgICAgIGlmICghbGF5ZXIgJiYgZXZlbnQucmVzdWx0c1swXS5zb3VyY2UubmFtZSA9PT0gJ093bmVyJykge1xuICAgICAgICAgIGxheWVyID0gdGhpcy5jb25kb3NUYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxheWVyICYmIFsnU2l0ZSBBZGRyZXNzJywgJ1N0cmVldCBOYW1lJ10uaW5jbHVkZXMoZXZlbnQucmVzdWx0c1swXS5zb3VyY2UubmFtZSkpIHtcbiAgICAgICAgICBsYXllciA9IHRoaXMuYWRkcmVzc1RhYmxlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIGV2ZW50LnJlc3VsdHNbMF0ucmVzdWx0cy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChyLmZlYXR1cmUuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGF5ZXIubGF5ZXJJZCA9PT0gNCkge1xuICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IGxheWVyLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdDT05ET1MnO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgJiYgb2lkcykge1xuICAgICAgICAgICAgbGF5ZXJcbiAgICAgICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcC5pZCwgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlczogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlLmxheWVyID0gdGhpcy5jb25kb3NUYWJsZTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYyA9IG5ldyBHcmFwaGljKCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZShmZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCBmZWF0dXJlcyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvbmRvc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyBvYmplY3RJZHM6IG9pZHMsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBuZXcgR3JhcGhpYygpO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmUocmVzdWx0LmZlYXR1cmVzWzBdLCB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LCBbXSwgb2lkcyk7XG4gICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCByZXN1bHQuZmVhdHVyZXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBzZXRGZWF0dXJlKGZlYXR1cmU6IGVzcmkuR3JhcGhpYywgdmlldzogZXNyaS5NYXBWaWV3LCBtZWRpYUluZm9zOiBhbnlbXSwgb2lkczogYW55W10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdyZWlkJywgZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ1JFSUQnKSk7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgYCR7bG9jYXRpb24ucGF0aG5hbWV9PyR7cGFyYW1zfWApO1xuICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuY29uZG9zVGFibGUucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ1BIT1RPUyc7XG4gICAgfSk7XG4gICAgY29uc3Qgb2lkID0gZmVhdHVyZS5nZXRPYmplY3RJZCgpO1xuICAgIG1lZGlhSW5mb3MgPSBbXTtcbiAgICB0aGlzLmNvbmRvc1RhYmxlXG4gICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwPy5pZCwgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgIG1lZGlhSW5mb3MucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgICAgY2FwdGlvbjogJycsXG4gICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgc291cmNlVVJMOiBgaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL3JlYWxlc3RhdGUvcGhvdG9zL212aWRlby8ke2ZlYXR1cmUuZ2V0QXR0cmlidXRlKCdQSE9UTycpfWBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVkaWEgPSAodGhpcy5jb25kb3NUYWJsZS5wb3B1cFRlbXBsYXRlLmNvbnRlbnQgYXMgZXNyaS5Db250ZW50W10pLmZpbmQoKGNvbnRlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb250ZW50Py50eXBlID09PSAnbWVkaWEnO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgKG1lZGlhIGFzIGVzcmkuTWVkaWFDb250ZW50KS5tZWRpYUluZm9zID0gbWVkaWFJbmZvcztcbiAgICAgICAgfVxuICAgICAgICBmZWF0dXJlLmxheWVyID0gdGhpcy5jb25kb3NUYWJsZTtcbiAgICAgICAgZmVhdHVyZS5wb3B1cFRlbXBsYXRlID0gKGZlYXR1cmUubGF5ZXIgYXMgZXNyaS5GZWF0dXJlTGF5ZXIpLnBvcHVwVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gZmVhdHVyZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mZWF0dXJlLmdyYXBoaWMuYXR0cmlidXRlcyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlRGl2Jyk/LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljLnN5bWJvbCA9IHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueTtcbiAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMuc2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcsIG9pZCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5ncmFwaGljcy5ncmFwaGljcy5maW5kKGdyYXBoaWMgPT4ge1xuICAgICAgICAgIHJldHVybiBncmFwaGljLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSA9PT0gJ3RydWUnO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgc2VsZWN0ZWQuc3ltYm9sID0gdGhpcy5tdWx0aVN5bWJvbCBhcyBhbnk7XG4gICAgICAgICAgc2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWMgPSB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLmZpbmQoZ3JhcGhpYyA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdSRUlEJykgPT09IGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdSRUlEJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZ3JhcGhpYykge1xuICAgICAgICAgIGdyYXBoaWMuc3ltYm9sID0gdGhpcy5zaW5nbGVTeW1ib2wgYXMgYW55O1xuXG4gICAgICAgICAgZ3JhcGhpYy5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgICB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLnJlb3JkZXIoZ3JhcGhpYywgdGhpcy5ncmFwaGljcy5ncmFwaGljcy5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbiAgZXhwb3J0VGFibGUoKSB7XG4gICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIucXVlcnlGZWF0dXJlcyh7IG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgbGV0IGNzdiA9ICcnO1xuICAgICAgcmVzdWx0LmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgY3N2ICs9IGAke2ZpZWxkLmFsaWFzfSxgO1xuICAgICAgfSk7XG4gICAgICBjc3YgKz0gJ1xcclxcbic7XG4gICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmVhdHVyZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaWYgKGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkYXRlJykpIHtcbiAgICAgICAgICAgIGNzdiArPSBgXCIke25ldyBEYXRlKGZlYXR1cmUuYXR0cmlidXRlc1trZXldKS50b0RhdGVTdHJpbmcoKX1cIixgO1xuICAgICAgICAgIH0gZWxzZSBpZiAoa2V5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2FjcmVzJykpIHtcbiAgICAgICAgICAgIGNzdiArPSBgXCIke3BhcnNlRmxvYXQoZmVhdHVyZS5hdHRyaWJ1dGVzW2tleV0pLnRvRml4ZWQoMil9XCIsYDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3N2ICs9IGBcIiR7ZmVhdHVyZS5hdHRyaWJ1dGVzW2tleV19XCIsYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3N2ICs9ICdcXHJcXG4nO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBleHBvcnRlZEZpbGVubWFlID0gJ2ltYXBzX2V4cG9ydC5jc3YnO1xuXG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2Nzdl0sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBpZiAobGluay5kb3dubG9hZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGZlYXR1cmUgZGV0ZWN0aW9uXG4gICAgICAgIC8vIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCBIVE1MNSBkb3dubG9hZCBhdHRyaWJ1dGVcbiAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBleHBvcnRlZEZpbGVubWFlKTtcbiAgICAgICAgbGluay5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrU2VhcmNoUGFyYW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zO1xuICAgIGNvbnN0IHJlaWQgPSBwYXJhbXMuZ2V0KCdyZWlkJyk7XG4gICAgY29uc3QgcGluID0gcGFyYW1zLmdldCgncGluJyk7XG4gICAgbGV0IHdoZXJlID0gJyc7XG4gICAgaWYgKHJlaWQgfHwgcGluKSB7XG4gICAgICBpZiAocmVpZCkge1xuICAgICAgICB3aGVyZSA9IGBSRUlEIElOICgnJHtyZWlkLnNwbGl0KCcsJykuam9pbihcIicsJ1wiKX0nKWA7XG4gICAgICB9IGVsc2UgaWYgKHBpbikge1xuICAgICAgICB3aGVyZSA9IGBQSU5fTlVNID0gJyR7cGlufSdgO1xuICAgICAgfVxuICAgICAgdGhpcy5jb25kb3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6IHdoZXJlLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2V0UHJvcGVydHkob2lkcyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBuZXcgR3JhcGhpYygpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgndGFibGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldEZlYXR1cmUocmVzdWx0LmZlYXR1cmVzWzBdLCB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LCBbXSwgb2lkcyk7XG4gICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCByZXN1bHQuZmVhdHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MsIHZpZXcubWFwLmFsbExheWVycy5sZW5ndGggLSAxKTtcbiAgICB0aGlzLmNsdXN0ZXJQb2ludHMgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgIHNvdXJjZTogW10sXG4gICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnLFxuICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgbWF4U2NhbGU6IDE5MjAxLFxuICAgICAgbGlzdE1vZGU6ICdoaWRlJyxcbiAgICAgIGxlZ2VuZEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcmVuZGVyZXI6IHtcbiAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJyxcbiAgICAgICAgICBzaXplOiA0LFxuICAgICAgICAgIGNvbG9yOiAnIzY5ZGNmZicsXG4gICAgICAgICAgb3V0bGluZToge1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDAsIDEzOSwgMTc0LCAwLjUpJyxcbiAgICAgICAgICAgIHdpZHRoOiA1XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGFzIGFueSxcbiAgICAgIGZlYXR1cmVSZWR1Y3Rpb246IHtcbiAgICAgICAgdHlwZTogJ2NsdXN0ZXInLFxuICAgICAgICBsYWJlbGluZ0luZm86IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyB0dXJuIG9mZiBkZWNvbmZsaWN0aW9uIHRvIGVuc3VyZSBhbGwgY2x1c3RlcnMgYXJlIGxhYmVsZWRcbiAgICAgICAgICAgIGRlY29uZmxpY3Rpb25TdHJhdGVneTogJ25vbmUnLFxuICAgICAgICAgICAgbGFiZWxFeHByZXNzaW9uSW5mbzoge1xuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlRleHQoJGZlYXR1cmUuY2x1c3Rlcl9jb3VudCwgJyMsIyMjJylcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwNGE1ZCcsXG4gICAgICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgICAgICBmYW1pbHk6ICdOb3RvIFNhbnMnLFxuICAgICAgICAgICAgICAgIHNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGFzIGFueSxcbiAgICAgICAgICAgIGxhYmVsUGxhY2VtZW50OiAnY2VudGVyLWNlbnRlcidcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBzcGF0aWFsUmVmZXJlbmNlOiB0aGlzLnZpZXcuc3BhdGlhbFJlZmVyZW5jZVxuICAgIH0pO1xuICAgIHRoaXMudmlldy5tYXAuYWRkKHRoaXMuY2x1c3RlclBvaW50cyk7XG4gICAgdGhpcy5jaGVja1NlYXJjaFBhcmFtcygpO1xuICB9XG5cbiAgZ2V0U3VnZ2VzdGlvbnMgPSAoXG4gICAgcGFyYW1zOiBhbnksXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGxheWVyOiBlc3JpLkZlYXR1cmVMYXllcixcbiAgICBvdXRGaWVsZHM6IHN0cmluZ1tdLFxuICAgIG9yZGVyQnlGaWVsZHM6IHN0cmluZ1tdLFxuICAgIHNlYXJjaEZpZWxkczogc3RyaW5nW10sXG4gICAgc3RhcnRzV2l0aDogYm9vbGVhblxuICApID0+IHtcbiAgICBjb25zdCB3aGVyZUFycmF5OiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vdGVzdFxuICAgIHNlYXJjaEZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGlmIChzdGFydHNXaXRoKSB7XG4gICAgICAgIHdoZXJlQXJyYXkucHVzaChgJHtmaWVsZH0gTElLRSAnJHtwYXJhbXMuc3VnZ2VzdFRlcm0udG9VcHBlckNhc2UoKX0lJ2ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hlcmVBcnJheS5wdXNoKGAke2ZpZWxkfSBMSUtFICclJHtwYXJhbXMuc3VnZ2VzdFRlcm0udG9VcHBlckNhc2UoKX0lJ2ApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsYXllclxuICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICByZXR1cm5EaXN0aW5jdFZhbHVlczogdHJ1ZSxcbiAgICAgICAgb3V0RmllbGRzOiBvdXRGaWVsZHMsXG4gICAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgICAgICAgb3JkZXJCeUZpZWxkczogb3JkZXJCeUZpZWxkcyxcbiAgICAgICAgd2hlcmU6IHdoZXJlQXJyYXkuam9pbignIE9SICcpXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBuYW1lLFxuICAgICAgICAgICAgdGV4dDogZmVhdHVyZS5nZXRBdHRyaWJ1dGUob3V0RmllbGRzWzBdKSxcbiAgICAgICAgICAgIHNvdXJjZUluZGV4OiBwYXJhbXMuc291cmNlSW5kZXhcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuICBpbml0U2VhcmNoKCkge1xuICAgIGNvbnN0IHRhYmxlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgIGZpZWxkczogW1xuICAgICAgICB7IG5hbWU6ICdTSVRFX0FERFJFU1MnLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdBZGRyZXNzJyB9LFxuICAgICAgICB7IG5hbWU6ICdPV05FUicsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ093bmVyJyB9LFxuICAgICAgICB7IG5hbWU6ICdQSU5fTlVNJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnUElOJyB9LFxuICAgICAgICB7IG5hbWU6ICdSRUlEJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnUkVJRCcgfVxuICAgICAgXSxcbiAgICAgIHNvdXJjZTogW10sXG4gICAgICB0aXRsZTogJ1NlbGVjdGVkIHByb3BlcnRpZXMnLFxuICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJyxcbiAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHRoaXMudmlldy5zcGF0aWFsUmVmZXJlbmNlXG4gICAgfSk7XG4gICAgdGhpcy5mZWF0dXJlID0gbmV3IEZlYXR1cmUoeyB2aWV3OiB0aGlzLnZpZXcgfSk7XG5cbiAgICB0aGlzLmZlYXR1cmVUYWJsZSA9IG5ldyBGZWF0dXJlVGFibGUoe1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgbGF5ZXI6IHRhYmxlTGF5ZXIsXG4gICAgICBmaWVsZENvbmZpZ3M6IFtcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnU0lURV9BRERSRVNTJyxcbiAgICAgICAgICBsYWJlbDogJ0FkZHJlc3MnLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnT1dORVInLFxuICAgICAgICAgIGxhYmVsOiAnT3duZXInLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnUElOX05VTScsXG4gICAgICAgICAgbGFiZWw6ICdQSU4nLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnUkVJRCcsXG4gICAgICAgICAgbGFiZWw6ICdSRUlEJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICBtZW51Q29uZmlnOiB7XG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgKHtcbiAgICAgICAgICAgIGxhYmVsOiAnRXhwb3J0J1xuICAgICAgICAgIH0gYXMgdW5rbm93bikgYXMgTWVudUJ1dHRvbkl0ZW1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZmVhdHVyZVRhYmxlLndhdGNoKCd2aWV3TW9kZWwuc3RhdGUnLCAoc3RhdGU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHN0YXRlID09PSAncmVhZHknKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlOiBIVE1MU3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGUuYXBwZW5kKFxuICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICAgICAgJ3RkLCB0aCwgdGFibGUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1ICFpbXBvcnRhbnQ7Y29sb3I6ICNmZmY7fSB0ZFtyb2xlPVwiZ3JpZGNlbGxcIl0sdGhbcm9sZT1cImNvbHVtbmhlYWRlclwiXXtib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7fSdcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKCcuZXNyaS1mZWF0dXJlLXRhYmxlIC5lc3JpLWdyaWRfX2dyaWQnKT8uc2hhZG93Um9vdD8uYXBwZW5kKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBidXR0b246IE1lbnVCdXR0b25JdGVtID0gdGhpcy5mZWF0dXJlVGFibGU/Lm1lbnVDb25maWc/Lml0ZW1zPy5maW5kKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0ubGFiZWwgPT09ICdFeHBvcnQnO1xuICAgIH0pIGFzIE1lbnVCdXR0b25JdGVtO1xuICAgIGJ1dHRvbi5jbGlja0Z1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgdGhpcy5leHBvcnRUYWJsZSgpO1xuICAgIH07XG4gICAgYnV0dG9uLmNsaWNrRnVuY3Rpb24uYmluZCh0aGlzLmZlYXR1cmVUYWJsZSk7XG5cbiAgICB0aGlzLmZlYXR1cmVUYWJsZS5vbignc2VsZWN0aW9uLWNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICh0aGlzLmZlYXR1cmVUYWJsZSBhcyBhbnkpLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICBpZiAoZXZlbnQuYWRkZWQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZ2V0UHJvcGVydHkoW2V2ZW50LmFkZGVkWzBdLmZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpXSwgJ3RhYmxlJyk7XG4gICAgICAgIHRoaXMuc2V0RmVhdHVyZShcbiAgICAgICAgICBldmVudC5hZGRlZFswXS5mZWF0dXJlLFxuICAgICAgICAgIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsXG4gICAgICAgICAgW10sXG4gICAgICAgICAgW2V2ZW50LmFkZGVkWzBdLmZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpXVxuICAgICAgICApO1xuICAgICAgICBldmVudC5hZGRlZFswXS5mZWF0dXJlLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xuICAgICAgYWxsUGxhY2Vob2xkZXI6ICdBZGRyZXNzLCBvd25lciwgUElOLCBvciBSRUlEJyxcbiAgICAgIGluY2x1ZGVEZWZhdWx0U291cmNlczogZmFsc2UsXG4gICAgICBjb250YWluZXI6ICdzZWFyY2gnLFxuICAgICAgc291cmNlczogW1xuICAgICAgICAvLyBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAvLyAgIGxheWVyOiB0aGlzLmFkZHJlc3NUYWJsZSxcbiAgICAgICAgLy8gICBzZWFyY2hGaWVsZHM6IFsnQUREUkVTUycsICdBRERSRVNTX05PRElSJ10sXG4gICAgICAgIC8vICAgZGlzcGxheUZpZWxkOiAnQUREUkVTUycsXG4gICAgICAgIC8vICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgIC8vICAgb3V0RmllbGRzOiBbJ0FERFJFU1MnLCAnUkVJRCddLFxuICAgICAgICAvLyAgIG5hbWU6ICdTaXRlIEFkZHJlc3MnLFxuICAgICAgICAvLyAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMjIyIFcgSEFSR0VUVCdcbiAgICAgICAgLy8gfSksXG4gICAgICAgIG5ldyBTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMjIyIFcgSEFSR0VUVCBTVCcsXG4gICAgICAgICAgbmFtZTogJ1NpdGUgQWRkcmVzcycsXG4gICAgICAgICAgZ2V0U3VnZ2VzdGlvbnM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3VnZ2VzdGlvbnMoXG4gICAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgICAgJ1NpdGUgQWRkcmVzcycsXG4gICAgICAgICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlLFxuICAgICAgICAgICAgICBbJ0FERFJFU1MnXSxcbiAgICAgICAgICAgICAgWydBRERSRVNTJ10sXG4gICAgICAgICAgICAgIFsnQUREUkVTUyddLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0UmVzdWx0czogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRyZXNzVGFibGVcbiAgICAgICAgICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiBgQUREUkVTUyA9ICcke3BhcmFtcy5zdWdnZXN0UmVzdWx0LnRleHQudG9VcHBlckNhc2UoKX0nYCxcbiAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFsnQUREUkVTUycsICdSRUlEJywgJ09CSkVDVElEJ11cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZTogZmVhdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0FkZHJlc3MnXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KSBhcyBhbnk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGFzIGFueSksXG4gICAgICAgIC8vIG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgIC8vICAgbGF5ZXI6IGNvbmRvc1RhYmxlLFxuICAgICAgICAvLyAgIHNlYXJjaEZpZWxkczogWydPV05FUiddLFxuICAgICAgICAvLyAgIGRpc3BsYXlGaWVsZDogJ09XTkVSJyxcbiAgICAgICAgLy8gICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgLy8gICBvdXRGaWVsZHM6IFsnT1dORVInLCAnUkVJRCcsICdPQkpFQ1RJRCddLFxuICAgICAgICAvLyAgIG5hbWU6ICdPd25lcicsXG4gICAgICAgIC8vICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiBTTUlUSCwgSk9ITidcbiAgICAgICAgLy8gfSksXG4gICAgICAgIG5ldyBTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogU01JVEgsIEpPSE4nLFxuICAgICAgICAgIG5hbWU6ICdPd25lcicsXG4gICAgICAgICAgZ2V0U3VnZ2VzdGlvbnM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3VnZ2VzdGlvbnMocGFyYW1zLCAnT3duZXInLCB0aGlzLmNvbmRvc1RhYmxlLCBbJ09XTkVSJ10sIFsnT1dORVInXSwgWydPV05FUiddLCBmYWxzZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRSZXN1bHRzOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRvc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogYE9XTkVSID0gJyR7cGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dC50b1VwcGVyQ2FzZSgpfSdgLFxuICAgICAgICAgICAgICAgIG91dEZpZWxkczogWydPV05FUicsICdPQkpFQ1RJRCddXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGZlYXR1cmUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdPd25lcidcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pIGFzIGFueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYXMgYW55KSxcbiAgICAgICAgLy8gbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgLy8gICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgIC8vICAgc2VhcmNoRmllbGRzOiBbJ1BJTl9OVU0nXSxcbiAgICAgICAgLy8gICBkaXNwbGF5RmllbGQ6ICdQSU5fTlVNJyxcbiAgICAgICAgLy8gICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgLy8gICBvdXRGaWVsZHM6IFsnUElOX05VTScsICdSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgIC8vICAgbmFtZTogJ1BJTicsXG4gICAgICAgIC8vICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiAwNzEyMzQ1Njc4J1xuICAgICAgICAvLyB9KSxcbiAgICAgICAgbmV3IFNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdQSU4nLFxuICAgICAgICAgIG5hbWU6ICdQSU4nLFxuICAgICAgICAgIGdldFN1Z2dlc3Rpb25zOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1Z2dlc3Rpb25zKHBhcmFtcywgJ1BJTicsIHRoaXMuY29uZG9zVGFibGUsIFsnUElOX05VTSddLCBbJ1BJTl9OVU0nXSwgWydQSU5fTlVNJ10sIHRydWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0UmVzdWx0czogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kb3NUYWJsZVxuICAgICAgICAgICAgICAucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IGBQSU5fTlVNID0gJyR7cGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dH0nYCxcbiAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFsnUElOX05VTScsICdPQkpFQ1RJRCddXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGZlYXR1cmUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdQSU4nXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KSBhcyBhbnk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGFzIGFueSksXG4gICAgICAgIC8vIG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgIC8vICAgbGF5ZXI6IGNvbmRvc1RhYmxlLFxuICAgICAgICAvLyAgIHNlYXJjaEZpZWxkczogWydSRUlEJ10sXG4gICAgICAgIC8vICAgZGlzcGxheUZpZWxkOiAnUkVJRCcsXG4gICAgICAgIC8vICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgIC8vICAgb3V0RmllbGRzOiBbJ1JFSUQnLCAnT0JKRUNUSUQnXSxcbiAgICAgICAgLy8gICBuYW1lOiAnUkVJRCcsXG4gICAgICAgIC8vICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiAwMTIzNDU2J1xuICAgICAgICAvLyB9KSxcbiAgICAgICAgbmV3IFNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdSRUlEJyxcbiAgICAgICAgICBuYW1lOiAnUkVJRCcsXG4gICAgICAgICAgZ2V0U3VnZ2VzdGlvbnM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3VnZ2VzdGlvbnMocGFyYW1zLCAnUkVJRCcsIHRoaXMuY29uZG9zVGFibGUsIFsnUkVJRCddLCBbJ1JFSUQnXSwgWydSRUlEJ10sIHRydWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0UmVzdWx0czogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kb3NUYWJsZVxuICAgICAgICAgICAgICAucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IGBSRUlEID0gJyR7cGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dH0nYCxcbiAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFsnUkVJRCcsICdPQkpFQ1RJRCddXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGZlYXR1cmUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdSRUlEJ1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBhbnkpLFxuICAgICAgICBuZXcgU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IFcgSEFSR0VUVCBTVCcsXG4gICAgICAgICAgbmFtZTogJ1N0cmVldCBOYW1lJyxcbiAgICAgICAgICBnZXRTdWdnZXN0aW9uczogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWdnZXN0aW9ucyhcbiAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICAnU3RyZWV0IE5hbWUnLFxuICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZSxcbiAgICAgICAgICAgICAgWydTVFJFRVQnLCAnQUREUl9MSVNUJ10sXG4gICAgICAgICAgICAgIFsnU1RSRUVUJ10sXG4gICAgICAgICAgICAgIFsnU1RSRUVUJywgJ1NUUkVFVF9OT0RJUiddLFxuICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFJlc3VsdHM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkcmVzc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogYFNUUkVFVCA9ICcke3BhcmFtcy5zdWdnZXN0UmVzdWx0LnRleHQudG9VcHBlckNhc2UoKX0nYCxcbiAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFsnU1RSRUVUJywgJ1JFSUQnLCAnT0JKRUNUSUQnXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlOiBmZWF0dXJlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU3RyZWV0IE5hbWUnXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KSBhcyBhbnk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIF1cbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldC52aWV3TW9kZWwud2F0Y2goJ3Jlc3VsdHMnLCBldmVudCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hXaWRnZXQub24oJ3NlYXJjaC1jb21wbGV0ZScsIHRoaXMuc2VhcmNoQ29tcGxldGUpO1xuICB9XG5cbiAgdG9nZ2xlQ29udGVudCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSAndGFibGUnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZScpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZUl0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IFByb3BlcnR5U2VhcmNoVmlld01vZGVsIGZyb20gJy4vUHJvcGVydHlTZWFyY2gvUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwnO1xuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eVNlYXJjaFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIHByb3BlcnR5TGF5ZXI/OiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgY29uZG9zVGFibGU/OiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgYWRkcmVzc1RhYmxlPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IHByb3BlcnR5c2VhcmNoLWJhc2UnXG59O1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Qcm9wZXJ0eVNlYXJjaCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eVNlYXJjaCBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmNvbmRvc1RhYmxlJylcbiAgY29uZG9zVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLmFkZHJlc3NUYWJsZScpXG4gIGFkZHJlc3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwucHJvcGVydHlMYXllcicpXG4gIHByb3BlcnR5TGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLnNlYXJjaFdpZGdldCcpXG4gIHNlYXJjaFdpZGdldDogZXNyaS53aWRnZXRzU2VhcmNoO1xuICBAYWxpYXNPZigndmlld01vZGVsLmZlYXR1cmVUYWJsZScpXG4gIGZlYXR1cmVUYWJsZTogZXNyaS5GZWF0dXJlVGFibGU7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZmVhdHVyZScpXG4gIGZlYXR1cmU6IGVzcmkuRmVhdHVyZTtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5nZW9tZXRyeScpXG4gIGdlb21ldHJ5OiBlc3JpLkdlb21ldHJ5O1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogUHJvcGVydHlTZWFyY2hWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IFByb3BlcnR5U2VhcmNoVmlld01vZGVsID0gbmV3IFByb3BlcnR5U2VhcmNoVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IFByb3BlcnR5U2VhcmNoUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX2NyZWF0ZVNlYXJjaCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zZWFyY2hXaWRnZXQpIHtcbiAgICAgIHRoaXMuc2VhcmNoV2lkZ2V0LmNvbnRhaW5lciA9ICdzZWFyY2gnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZVRhYmxlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmZlYXR1cmVUYWJsZSkge1xuICAgICAgdGhpcy5mZWF0dXJlVGFibGUuY29udGFpbmVyID0gJ3RhYmxlJztcbiAgICB9XG4gIH07XG4gIF9jcmVhdGVGZWF0dXJlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmZlYXR1cmUpIHtcbiAgICAgIHRoaXMuZmVhdHVyZS5jb250YWluZXIgPSAnZmVhdHVyZURpdic7XG4gICAgfVxuICB9O1xuXG4gIGN1cnJlbnRSYWRpb0J1dHRvbiA9ICdsaXN0JztcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2lkZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAvLyBjYW4gSSBnZXQgY2hlY2tlZCBhbmQgdmFsdWUgbGlrZSB0aGlzP1xuICAgICAgICBpZiAoZS50YXJnZXQ/LmNoZWNrZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldD8udmFsdWUpO1xuICAgICAgICAgIHRoaXMudmlld01vZGVsLnRvZ2dsZUNvbnRlbnQoZS50YXJnZXQ/LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgZmVhdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlRGl2JykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Nyb2xsQXJyb3cnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBmZWF0RGl2Py5zY3JvbGxCeSh7IHRvcDogZmVhdERpdi5vZmZzZXRIZWlnaHQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICB9KTtcbiAgICBjb25zdCB0aGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICBpZiAodGhlbWUpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcnJvd1BhdGgnKT8uc2V0QXR0cmlidXRlKCdzdHJva2UnLCB0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdibGFjaycgOiAnd2hpdGUnKTtcbiAgICB9XG5cbiAgICBmZWF0RGl2Py5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBpZiAoZmVhdERpdi5zY3JvbGxUb3AgPj0gZmVhdERpdi5zY3JvbGxIZWlnaHQgLSBmZWF0RGl2Lm9mZnNldEhlaWdodCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Nyb2xsQXJyb3cnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Nyb2xsQXJyb3cnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlU2VhcmNofSBpZD1cInNlYXJjaFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVUYWJsZX0gaWQ9XCJ0YWJsZVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZmVhdHVyZVwiIGNsYXNzPVwiaGlkZGVuXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImZlYXR1cmVEaXZcIiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlRmVhdHVyZX0+PC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9XCJzY3JvbGxBcnJvd1wiXG4gICAgICAgICAgICBjbGFzcz1cImhvbWUtcGFnZV9fc2Nyb2xsLWRvd24tYXJyb3cgaG9tZS1wYWdlX19zY3JvbGwtZG93bi1hcnJvdy0tYmxhY2tcIlxuICAgICAgICAgICAgZGF0YS1kb2pvLWF0dGFjaC1wb2ludD1cImFycm93Q29udGFpbmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiBjbGFzcz1cImljb24taW5saW5lICBcIj5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cImFycm93UGF0aFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgIHN0cm9rZS1vcGFjaXR5PVwiMC41XCJcbiAgICAgICAgICAgICAgICBkPVwiTTE2LjUgMjcuMjA3bC00Ljg1NC00Ljg1NC43MDctLjcwN0wxNiAyNS4yOTNWNWgxdjIwLjI5M2wzLjY0Ni0zLjY0Ni43MDcuNzA3elwiXG4gICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSBjaGVja2VkIHZhbHVlPVwidGFibGVcIiBpZD1cInRhYmxlSXRlbVwiPlxuICAgICAgICAgICAgTGlzdFxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdmFsdWU9XCJmZWF0dXJlXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgRGV0YWlsc1xuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBNZWFzdXJlbWVudCBmcm9tICdlc3JpL3dpZGdldHMvTWVhc3VyZW1lbnQnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLk1lYXN1cmUuTWVhc3VyZVZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWFzdXJlVmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuICBtZWFzdXJlbWVudDogZXNyaS5NZWFzdXJlbWVudDtcbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHRoaXMubWVhc3VyZW1lbnQgPSBuZXcgTWVhc3VyZW1lbnQoeyB2aWV3LCBhcmVhVW5pdDogJ3NxdWFyZS1mZWV0JywgbGluZWFyVW5pdDogJ2ZlZXQnIH0pO1xuICAgIHRoaXMubWVhc3VyZW1lbnQud2F0Y2goJ2FjdGl2ZVRvb2wnLCBhY3RpdmVUb29sID0+IHtcbiAgICAgIGlmICghYWN0aXZlVG9vbCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVhc3VyZS1iYXNlIGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09PSAnY2xlYXInKSB7XG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBNZWFzdXJlVmlld01vZGVsIGZyb20gJy4vTWVhc3VyZS9NZWFzdXJlVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBNZWFzdXJlUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbWVhc3VyZS1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5NZWFzdXJlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmUgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5tZWFzdXJlbWVudCcpXG4gIG1lYXN1cmVtZW50OiBlc3JpLk1lYXN1cmVtZW50O1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTWVhc3VyZVZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogTWVhc3VyZVZpZXdNb2RlbCA9IG5ldyBNZWFzdXJlVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IE1lYXN1cmVQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfbWVhc3VyZUNyZWF0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubWVhc3VyZW1lbnQpIHtcbiAgICAgIHRoaXMubWVhc3VyZW1lbnQuY29udGFpbmVyID0gJ21lYXN1cmVXaWRnZXQnO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVhc3VyZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0Py50aXRsZSA9PT0gJ2NsZWFyJykge1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lYXN1cmVtZW50LmFjdGl2ZVRvb2wgPSBlLnRhcmdldD8udGl0bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHRpdGxlPVwiZGlzdGFuY2VcIiB2YWx1ZT1cImRpc3RhbmNlXCIgaWQ9XCJkaXN0YW5jZUl0ZW1cIiBpY29uPVwibWVhc3VyZVwiPlxuICAgICAgICAgICAgRGlzdGFuY2VcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHRpdGxlPVwiYXJlYVwiIHZhbHVlPVwiYXJlYVwiIGlkPVwiYXJlYUl0ZW1cIiBpY29uPVwibWVhc3VyZS1hcmVhXCI+XG4gICAgICAgICAgICBBcmVhXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB0aXRsZT1cImNsZWFyXCIgdmFsdWU9XCJjbGVhclwiIGlkPVwiY2xlYXJJdGVtXCIgaWNvbj1cInRyYXNoXCI+XG4gICAgICAgICAgICBDbGVhclxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXA+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX21lYXN1cmVDcmVhdGVkfSBpZD1cIm1lYXN1cmVXaWRnZXRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCBQb3B1cFRlbXBsYXRlIGZyb20gJ2VzcmkvUG9wdXBUZW1wbGF0ZSc7XG5pbXBvcnQgRXhwcmVzc2lvbkluZm8gZnJvbSAnZXNyaS9wb3B1cC9FeHByZXNzaW9uSW5mbyc7XG5pbXBvcnQgQ3VzdG9tQ29udGVudCBmcm9tICdlc3JpL3BvcHVwL2NvbnRlbnQvQ3VzdG9tQ29udGVudCc7XG5pbXBvcnQgTG9jYXRvciBmcm9tICdlc3JpL3Rhc2tzL0xvY2F0b3InO1xuaW1wb3J0IGdlb2Rlc2ljVXRpbHMgZnJvbSAnZXNyaS9nZW9tZXRyeS9zdXBwb3J0L2dlb2Rlc2ljVXRpbHMnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmUnO1xuXG5jb25zdCBhcmNhZGVFeHByZXNzaW9uSW5mb3MgPSBbXG4gIHtcbiAgICBuYW1lOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICB0aXRsZTogJ21haWxpbmctYWRkcmVzcycsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdXaGVuKElzRW1wdHkoJGZlYXR1cmUuQUREUjMpLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIzKSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgIHRpdGxlOiAncHJvcGVydHktdmFsdWVzJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1wiQnVpbGRpbmcgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkJMREdfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJMYW5kIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5MQU5EX1ZBTCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG90YWwgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLlRPVEFMX1ZBTFVFX0FTU0QnXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6ICdwaW4nLFxuICAgIHRpdGxlOiAnUElOJyxcbiAgICBleHByZXNzaW9uOiBcInZhciBudW0gPSAkZmVhdHVyZS5QSU5fTlVNO3ZhciBleHQgPSAkZmVhdHVyZS5QSU5fRVhUO3JldHVybiBXaGVuKGV4dCA9PSAnMDAwJyxudW0sbnVtKycgJytleHQpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYnVpbGRfdmFsJyxcbiAgICB0aXRsZTogJ0J1aWxkaW5nIFZhbHVlJyxcbiAgICBleHByZXNzaW9uOiBcInZhciB2YWx1ZSA9ICRmZWF0dXJlLkJMREdfVkFMO1doZW4oSXNFbXB0eSh2YWx1ZSksJy0tJywgJyQnK1RleHQodmFsdWUsICcjLCMjIycpKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ2xhbmRfdmFsJyxcbiAgICB0aXRsZTogJ0xhbmQgVmFsdWUnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHZhbHVlID0gJGZlYXR1cmUuTEFORF9WQUw7V2hlbihJc0VtcHR5KHZhbHVlKSwnLS0nLCAnJCcrVGV4dCh2YWx1ZSwgJyMsIyMjJykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndG90YWxfdmFsJyxcbiAgICB0aXRsZTogJ1RvdGFsIFZhbHVlJyxcbiAgICBleHByZXNzaW9uOiBcInZhciB2YWx1ZSA9ICRmZWF0dXJlLlRPVEFMX1ZBTFVFX0FTU0Q7V2hlbihJc0VtcHR5KHZhbHVlKSwnLS0nLCAnJCcrVGV4dCh2YWx1ZSwgJyMsIyMjJykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnc2FsZV9wcmljZScsXG4gICAgdGl0bGU6ICdTYWxlIFByaWNlJyxcbiAgICBleHByZXNzaW9uOiBcInZhciB2YWx1ZSA9ICRmZWF0dXJlLlRPVFNBTFBSSUNFO1doZW4oSXNFbXB0eSh2YWx1ZSksJy0tJywgJyQnK1RleHQodmFsdWUsICcjLCMjIycpKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ2NpdHknLFxuICAgIHRpdGxlOiAnQ2l0eScsXG4gICAgZXhwcmVzc2lvbjogXCJ2YXIgY2l0eSA9ICRmZWF0dXJlLkNJVFlfREVDT0RFO1doZW4oSXNFbXB0eShjaXR5KSwnVW5pbmNvcnBvcmF0ZWQnLCBQcm9wZXIoY2l0eSkpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndG93bnNoaXAnLFxuICAgIHRpdGxlOiAnVG93bnNoaXAnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHRzID0gJGZlYXR1cmUuVE9XTlNISVBfREVDT0RFO1doZW4oSXNFbXB0eSh0cyksJ05vbmUnLCBQcm9wZXIodHMpKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ2p1cmlzZGljdGlvbicsXG4gICAgdGl0bGU6ICdKdXJpc2RpY3Rpb24nLFxuICAgIGV4cHJlc3Npb246XG4gICAgICAndmFyIGp1cmlzID0gJGZlYXR1cmUuUExBTk5JTkdfSlVSSVNESUNUSU9OO1doZW4oJyArXG4gICAgICBcImp1cmlzID09ICdSQScsICdSYWxlaWdoJyxcIiArXG4gICAgICBcImp1cmlzID09ICdDQScsICdDYXJ5JyxcIiArXG4gICAgICBcImp1cmlzID09ICdBUCcsICdBcGV4JyxcIiArXG4gICAgICBcImp1cmlzID09ICdBTicsICdBbmdpZXInLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0NMJywgJ0NsYXl0b24nLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0RVJywgJ0R1cmhhbScsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnRlYnLCAnRnVxdWF5LVZhcmluYScsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnR0EnLCAnR2FybmVyJyxcIiArXG4gICAgICBcImp1cmlzID09ICdIUycsICdIb2xseSBTcHJpbmdzJyxcIiArXG4gICAgICBcImp1cmlzID09ICdLTicsICdLbmlnaHRkYWxlJyxcIiArXG4gICAgICBcImp1cmlzID09ICdNTycsICdNb3JyaXN2aWxsZScsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnUk8nLCAnUm9sZXN2aWxsZScsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnV0YnLCAnV2FrZSBGb3Jlc3QnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ1dFJywgJ1dlbmRlbGwnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ1pCJywgJ1plYnVsb24nLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ1dDJywgJ1dha2UgQ291bnR5JyxcIiArXG4gICAgICBcIiAnV2FrZSBDb3VudHknKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ2dlbmVyYWwnLFxuICAgIHRpdGxlOiAnZ2VuZXJhbCcsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdcIlBJTlwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJGZlYXR1cmUuUElOX05VTStcIiBcIiskZmVhdHVyZS5QSU5fRVhUK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAnXCJSRUlEXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5SRUlEK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJDaXR5XCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICdQcm9wZXIoJGZlYXR1cmUuQ0lUWV9ERUNPREUpK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJKdXJpc2RpY3Rpb25cIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgJyRmZWF0dXJlLlBMQU5OSU5HX0pVUklTRElDVElPTitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG93bnNoaXBcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1Byb3BlcigkZmVhdHVyZS5UT1dOU0hJUF9ERUNPREUpJ1xuICB9XG5dIGFzIEV4cHJlc3Npb25JbmZvW107XG5jb25zdCBzZXJ2aWNlczogYW55W10gPSBbXG4gIHtcbiAgICBncm91cDoge1xuICAgICAgdGl0bGU6ICdFbGVjdG9yYWwnLFxuICAgICAgbGF5ZXJzOiBbXG4gICAgICAgICdQcmVjaW5jdHMnLFxuICAgICAgICAnQ29uZ3Jlc3Npb25hbCBEaXN0cmljdHMnLFxuICAgICAgICAnTkMgSG91c2Ugb2YgUmVwcmVzZW50YXRpdmVzIERpc3RyaWN0cycsXG4gICAgICAgICdOQyBTZW5hdGUgRGlzdHJpY3RzJyxcbiAgICAgICAgJ1NjaG9vbCBCb2FyZCBEaXN0cmljdHMnLFxuICAgICAgICAnQm9hcmQgb2YgQ29tbWlzc2lvbmVycyBEaXN0cmljdHMnLFxuICAgICAgICAnU3VwZXJpb3IgQ291cnQgRGlzdHJpY3RzJyxcbiAgICAgICAgJ1JhbGVpZ2ggQ2l0eSBDb3VuY2lsJyxcbiAgICAgICAgJ01vcnJpc3ZpbGxlIFRvd24gQ291bmNpbCBEaXN0cmljdHMnXG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgZ3JvdXA6IHtcbiAgICAgIHRpdGxlOiAnRW52aXJvbm1lbnRhbCcsXG4gICAgICBsYXllcnM6IFtcbiAgICAgICAgJ1NwZWNpYWwgRmxvb2QgSGF6YXJkIEFyZWFzIC0gRmxvb2RQbGFpbiAtIEZsb29kcGxhaW4nLFxuICAgICAgICAnU29pbHMnLFxuICAgICAgICAnQ3JpdGljYWwgV2F0ZXJzaGVkcycsXG4gICAgICAgICdXYXRlciBTdXBwbHkgV2F0ZXJzaGVkcydcbiAgICAgIF1cbiAgICB9XG4gIH1cbl07XG5cbmNvbnN0IHNjcm9sbFRvU2VydmljZSA9IChlOiBhbnkpID0+IHtcbiAgY29uc3QgcmVjdCA9IChlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtIGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVEaXYnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZGl2Py5zY3JvbGxUbyh7IHRvcDogcmVjdC50b3AgKyBkaXYuc2Nyb2xsVG9wIC0gMTU1LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gIH0sIDUwMCk7XG59O1xuY29uc3Qgc2VydmljZUNoYW5nZWQgPSAoZ3JhcGhpYzogX19lc3JpLkdyYXBoaWMsIHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgZTogYW55KSA9PiB7XG4gIGlmIChcbiAgICAhZS5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbS5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpICYmXG4gICAgZS5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMFxuICApIHtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWxvYWRlcicpO1xuICAgIGxvYWRlci5zZXRBdHRyaWJ1dGUoJ2lubGluZScsICcnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWhlYWRlcicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGhlYWRlci5pbnNlcnRCZWZvcmUobG9hZGVyLCBoZWFkZXIuY2hpbGROb2Rlc1sxXSk7XG4gICAgY29uc3Qgc2VydmljZUdyb3VwOiBhbnkgPSBzZXJ2aWNlcy5maW5kKHNlcnZpY2UgPT4ge1xuICAgICAgcmV0dXJuIHNlcnZpY2UuZ3JvdXAudGl0bGUgPT09IGUuZGV0YWlsLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW0uZ2V0QXR0cmlidXRlKCdpdGVtLXRpdGxlJyk7XG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8X19lc3JpLkZlYXR1cmVTZXQ+W10gPSBbXTtcblxuICAgIGlmIChzZXJ2aWNlR3JvdXApIHtcbiAgICAgIGNvbnN0IGxheWVycyA9IHZpZXcubWFwLmFsbExheWVycy5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICByZXR1cm4gc2VydmljZUdyb3VwLmdyb3VwLmxheWVycy5pbmNsdWRlcyhsYXllci50aXRsZSk7XG4gICAgICB9KTtcbiAgICAgIGxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAobGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllcikucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICBnZW9tZXRyeTogZ3JhcGhpYy5nZW9tZXRyeSxcbiAgICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHByb21pc2VzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICByZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0LmZlYXR1cmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IF9fZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtLmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICBuZXcgRmVhdHVyZSh7IGNvbnRhaW5lcjogZGl2LCBncmFwaGljOiBmZWF0dXJlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2Nyb2xsVG9TZXJ2aWNlKGUpO1xuICAgICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQobG9hZGVyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQobG9hZGVyKTtcbiAgICAgIHJldHVybiAnTm8gc2VydmljZXMgZm91bmQuJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2Nyb2xsVG9TZXJ2aWNlKGUpO1xuICB9XG59O1xuY29uc3QgZGVlZENyZWF0b3IgPSAoZTogYW55KSA9PiB7XG4gIHJldHVybiAoZS5ncmFwaGljLmxheWVyIGFzIEZlYXR1cmVMYXllcilcbiAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoe1xuICAgICAgcmVsYXRpb25zaGlwSWQ6IChlLmdyYXBoaWMubGF5ZXIgYXMgRmVhdHVyZUxheWVyKS5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgIHJldHVybiByLm5hbWUgPT09ICdCT09LUyc7XG4gICAgICB9KT8uaWQsXG4gICAgICBvYmplY3RJZHM6IFtlLmdyYXBoaWMuZ2V0T2JqZWN0SWQoKV0sXG4gICAgICBvdXRGaWVsZHM6IFsnQk9NX0RPQ19OVU0nLCAnREVFRF9ET0NfTlVNJ11cbiAgICB9KVxuICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBjb25zdCBkZWVkID0gcmVzdWx0W2UuZ3JhcGhpYy5nZXRPYmplY3RJZCgpXS5mZWF0dXJlc1swXS5nZXRBdHRyaWJ1dGUoJ0RFRURfRE9DX05VTScpO1xuICAgICAgY29uc3QgYm9tID0gcmVzdWx0W2UuZ3JhcGhpYy5nZXRPYmplY3RJZCgpXS5mZWF0dXJlc1swXS5nZXRBdHRyaWJ1dGUoJ0JPTV9ET0NfTlVNJyk7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdzsnKTtcbiAgICAgIGlmIChkZWVkKSB7XG4gICAgICAgIGNvbnN0IGRlZWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWJ1dHRvbicpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZSgnc2NhbGUnLCAncycpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZSgncm91bmQnLCAnJyk7XG4gICAgICAgIGRlZWRCdG4uc2V0QXR0cmlidXRlKCdpY29uLXN0YXJ0JywgJ2ZpbGUtdGV4dCcpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnaHJlZicsXG4gICAgICAgICAgJ2h0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9ib29rc3dlYi9wZGZ2aWV3LmFzcHg/ZG9jaWQ9JyArIGRlZWQgKyAnJlJlY29yZERhdGU9J1xuICAgICAgICApO1xuXG4gICAgICAgIGRlZWRCdG4udGV4dENvbnRlbnQgPSAnRGVlZCc7XG4gICAgICAgIGRpdi5hcHBlbmQoZGVlZEJ0bik7XG4gICAgICB9XG4gICAgICBpZiAoYm9tKSB7XG4gICAgICAgIGNvbnN0IGJvbWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYnV0dG9uJyk7XG4gICAgICAgIGJvbWJ0bi5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgJ3MnKTtcbiAgICAgICAgYm9tYnRuLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICBib21idG4uc2V0QXR0cmlidXRlKCdyb3VuZCcsICcnKTtcbiAgICAgICAgYm9tYnRuLnNldEF0dHJpYnV0ZSgnaWNvbi1zdGFydCcsICdtYXAnKTtcbiAgICAgICAgYm9tYnRuLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPScgKyBib20gKyAnJlJlY29yZERhdGU9Jyk7XG4gICAgICAgIGJvbWJ0bi50ZXh0Q29udGVudCA9ICdCb29rIG9mIE1hcHMnO1xuICAgICAgICBkaXYuYXBwZW5kKGJvbWJ0bik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXY7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gIHBvcnRhbEl0ZW06IHtcbiAgICBpZDogJ2QzZDAyZDVlMzUzMjRiNzY5NDY5Yjk5MTIxYzBlOTk2J1xuICB9LFxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9XG59KTtcblxuZXhwb3J0IGNvbnN0IGNvbmRvc1RhYmxlID0gbmV3IEZlYXR1cmVMYXllcih7XG4gIHBvcnRhbEl0ZW06IHtcbiAgICBpZDogJ2QzZDAyZDVlMzUzMjRiNzY5NDY5Yjk5MTIxYzBlOTk2J1xuICB9LFxuICBsYXllcklkOiAxLFxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9XG59KTtcbmNvbmRvc1RhYmxlLmxvYWQoKTtcbmV4cG9ydCBjb25zdCBhZGRyZXNzVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnZDNkMDJkNWUzNTMyNGI3Njk0NjliOTkxMjFjMGU5OTYnXG4gIH0sXG4gIGxheWVySWQ6IDQsXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbn0pO1xuYWRkcmVzc1RhYmxlLmxvYWQoKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRlbXBsYXRlID0gKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldykgPT4ge1xuICBjb25zdCBwb3B1cFRlbXBsYXRlID0gbmV3IFBvcHVwVGVtcGxhdGUoe1xuICAgIGV4cHJlc3Npb25JbmZvczogYXJjYWRlRXhwcmVzc2lvbkluZm9zLFxuICAgIGNvbnRlbnQ6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB0ZXh0OiAnPGgxPntTSVRFX0FERFJFU1N9PC9oMT4nXG4gICAgICB9LFxuICAgICAgbmV3IEN1c3RvbUNvbnRlbnQoe1xuICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgICBjcmVhdG9yOiAoZTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBMb2NhdG9yKHtcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWFwcy5yYWxlaWdobmMuZ292L2FyY2dpcy9yZXN0L3NlcnZpY2VzL0xvY2F0b3JzL0NvbXBvc2l0ZUxvY2F0b3IvR2VvY29kZVNlcnZlcicsXG4gICAgICAgICAgICBvdXRTcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkcmVzc1RvTG9jYXRpb25zKHtcbiAgICAgICAgICAgICAgYWRkcmVzczogeyBzaW5nbGVMaW5lOiBlLmdyYXBoaWMuZ2V0QXR0cmlidXRlKCdTSVRFX0FERFJFU1MnKSB9LFxuICAgICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGNhbmRpZGF0ZXM6IF9fZXNyaS5BZGRyZXNzQ2FuZGlkYXRlW10pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gY2FuZGlkYXRlcy5maW5kKGNhbmRpZGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlLmF0dHJpYnV0ZXNbJ0xvY19uYW1lJ10gPT09ICdXYWtlU3RyZWV0cyc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGlzdCA9IGdlb2Rlc2ljVXRpbHMuZ2VvZGVzaWNEaXN0YW5jZShjYW5kaWRhdGUubG9jYXRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgeDogKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWQubG9uZ2l0dWRlLFxuICAgICAgICAgICAgICAgICAgICB5OiAoZS5ncmFwaGljLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZC5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gYXMgYW55XG4gICAgICAgICAgICAgICAgICB9IGFzIGFueSk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXN0LmRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpc3QuYXppbXV0aCk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjYmxsID1cbiAgICAgICAgICAgICAgICAgICAgKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWQubGF0aXR1ZGUgK1xuICAgICAgICAgICAgICAgICAgICAnLCcgK1xuICAgICAgICAgICAgICAgICAgICAoZS5ncmFwaGljLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZC5sb25naXR1ZGU7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbWFwcy5nb29nbGUuY29tP2xheWVyPWMmY2JsbD0nICsgY2JsbCArICcmY2JwPTAsJyArIGRpc3QuYXppbXV0aD8udG9TdHJpbmcoKSArICcsMCwwLDAnXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7Jyk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnc2NhbGUnLCAncycpO1xuICAgICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgncm91bmQnLCAnJyk7XG4gICAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpY29uLXN0YXJ0JywgJ3BlcnNvbicpO1xuICAgICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20/bGF5ZXI9YyZjYmxsPScgKyBjYmxsICsgJyZjYnA9MCwnICsgZGlzdC5hemltdXRoPy50b1N0cmluZygpICsgJywwLDAsMCdcbiAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICdTdHJlZXQgVmlldyc7XG5cbiAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmQoYnRuKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRheCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICB0YXguc2V0QXR0cmlidXRlKCdzY2FsZScsICdzJyk7XG4gICAgICAgICAgICAgICAgICB0YXguc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgICAgICB0YXguc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgICAgICAnaHJlZicsXG4gICAgICAgICAgICAgICAgICAgICdodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vcmVhbGVzdGF0ZS9BY2NvdW50LmFzcD9pZD0nICsgZS5ncmFwaGljLmdldEF0dHJpYnV0ZSgnUkVJRCcpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgdGF4LnNldEF0dHJpYnV0ZSgncm91bmQnLCAnJyk7XG4gICAgICAgICAgICAgICAgICB0YXguc2V0QXR0cmlidXRlKCdpY29uLXN0YXJ0JywgJ2xvY2F0b3InKTtcbiAgICAgICAgICAgICAgICAgIHRheC50ZXh0Q29udGVudCA9ICdUYXggUGFnZSc7XG4gICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKHRheCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHRleHQ6ICc8aDI+R2VuZXJhbDwvaDE+J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICAgIGZpZWxkSW5mb3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL3BpbicsXG4gICAgICAgICAgICBsYWJlbDogJ1BJTidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZTogJ1JFSUQnLFxuICAgICAgICAgICAgbGFiZWw6ICdSRUlEJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi9jaXR5JyxcbiAgICAgICAgICAgIGxhYmVsOiAnQ2l0eSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vanVyaXNkaWN0aW9uJyxcbiAgICAgICAgICAgIGxhYmVsOiAnSnVyaXNkaWN0aW9uJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi90b3duc2hpcCcsXG4gICAgICAgICAgICBsYWJlbDogJ1Rvd25zaGlwJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcblxuICAgICAgLy8ge1xuICAgICAgLy8gICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgIC8vICAgdGV4dDogJzxjYWxjaXRlLWJ1dHRvbiBzY2FsZT1cInNcIiBocmVmPVwiI1wiIGNsYXNzPVwic3RyZWV0Vmlld1wiIHRhcmdldD1cIl9ibGFua1wiPlN0cmVldCBWaWV3PC9jYWxjaXRlLWJ1dHRvbj4nXG4gICAgICAvLyB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHRleHQ6ICc8aDI+T3duZXI8L2gxPidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgdGV4dDpcbiAgICAgICAgICAvLyAnPGgxIGNsYXNzPVwidGV4dC1ncmVlblwiPntTSVRFX0FERFJFU1N9PC9oMT4nICtcbiAgICAgICAgICAvLyAnPGgyPkdlbmVyYWw8L2gyPntleHByZXNzaW9uL2dlbmVyYWx9JyArXG4gICAgICAgICAgJ3tPV05FUn08YnIvPntleHByZXNzaW9uL21haWxpbmctYWRkcmVzc30nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHRleHQ6ICc8aDI+VmFsdWF0aW9uPC9oMT4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnZmllbGRzJyxcbiAgICAgICAgZmllbGRJbmZvczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vYnVpbGRfdmFsJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi9sYW5kX3ZhbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vdG90YWxfdmFsJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmllbGROYW1lOiAnQklMTElOR19DTEFTU19ERUNPREUnLFxuICAgICAgICAgICAgbGFiZWw6ICdCaWxsaW5nIENsYXNzJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB0ZXh0OiAnPGgyPkxhc3QgU2FsZTwvaDE+J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICAgIGZpZWxkSW5mb3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZE5hbWU6ICdTQUxFX0RBVEUnLFxuICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgIGRhdGVGb3JtYXQ6ICdzaG9ydC1kYXRlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsOiAnRGF0ZSBTb2xkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi9zYWxlX3ByaWNlJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB0ZXh0OiAnPGgyPkRlZWRzPC9oMT4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnZmllbGRzJyxcbiAgICAgICAgZmllbGRJbmZvczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZTogJ0RFRURfQk9PSycsXG4gICAgICAgICAgICBsYWJlbDogJ0Jvb2snXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZE5hbWU6ICdERUVEX1BBR0UnLFxuICAgICAgICAgICAgbGFiZWw6ICdQYWdlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmllbGROYW1lOiAnREVFRF9EQVRFJyxcbiAgICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgICBkYXRlRm9ybWF0OiAnc2hvcnQtZGF0ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYWJlbDogJ0RlZWQgRGF0ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZTogJ0RFRURfQUNSRVMnLFxuICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgIHBsYWNlczogMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsOiAnRGVlZCBBY3JlcydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZTogJ1BST1BERVNDJyxcbiAgICAgICAgICAgIGxhYmVsOiAnTGVnYWwgRGVzY3JpcHRpb24nXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuXG4gICAgICBuZXcgQ3VzdG9tQ29udGVudCh7XG4gICAgICAgIG91dEZpZWxkczogWydPQkpFQ1RJRCcsICdSRUlEJ10sXG4gICAgICAgIGNyZWF0b3I6IGRlZWRDcmVhdG9yXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB0ZXh0OiAnPGgyPkJ1aWxkaW5nPC9oMT4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnZmllbGRzJyxcbiAgICAgICAgZmllbGRJbmZvczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZTogJ0hFQVRFREFSRUEnLFxuICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgIGRpZ2l0U2VwYXJhdG9yOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFiZWw6ICdIZWF0ZWQgQXJlYSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZTogJ1lFQVJfQlVJTFQnLFxuICAgICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICAgIGRpZ2l0U2VwYXJhdG9yOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsOiAnWWVhciBCdWlsdCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZTogJ0RFU0lHTl9TVFlMRV9ERUNPREUnLFxuICAgICAgICAgICAgbGFiZWw6ICdEZXNpZ24vU3R5bGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWVsZE5hbWU6ICdUT1RTVFJVQ1RTJyxcbiAgICAgICAgICAgIGxhYmVsOiAnVG90YWwgU3RydWN0dXJlcydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZTogJ1RPVFVOSVRTJyxcbiAgICAgICAgICAgIGxhYmVsOiAnVG90YWwgVW5pdHMnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbWVkaWEnLFxuICAgICAgICBtZWRpYUluZm9zOiBbXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB0ZXh0OiAnPGgyPlNlcnZpY2VzPC9oMT4nXG4gICAgICB9LFxuICAgICAgbmV3IEN1c3RvbUNvbnRlbnQoe1xuICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgICBjcmVhdG9yOiAoZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgYWNjb3JkaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1hY2NvcmRpb24nKTtcbiAgICAgICAgICBhY2NvcmRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3Rpb24tbW9kZScsICdzaW5nbGUnKTtcblxuICAgICAgICAgIHNlcnZpY2VzLmZvckVhY2goc2VydmljZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1hY2NvcmRpb24taXRlbScpO1xuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2l0ZW0tdGl0bGUnLCBzZXJ2aWNlLmdyb3VwLnRpdGxlKTtcbiAgICAgICAgICAgIGFjY29yZGlvbi5hcHBlbmQoaXRlbSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy9jb25zdCBmID0gc2VydmljZUNoYW5nZWQuYmluZChlLkdyYXBoaWMpO1xuICAgICAgICAgIC8vIHNldFRpbWVvdXQoZiwgMTAwMCk7XG4gICAgICAgICAgY29uc3QgZ3JhcGhpYyA9IGUuZ3JhcGhpYztcbiAgICAgICAgICBhY2NvcmRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUFjY29yZGlvbkNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHNlcnZpY2VDaGFuZ2VkKGdyYXBoaWMsIHZpZXcsIGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBhY2NvcmRpb247XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXVxuICB9KTtcbiAgY29uZG9zVGFibGUucG9wdXBUZW1wbGF0ZSA9IHBvcHVwVGVtcGxhdGU7XG59O1xuXG5leHBvcnQgKiBmcm9tICcuL2FwcCc7XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5pbXBvcnQgU2tldGNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gnO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnO1xuaW1wb3J0IFRleHRTeW1ib2wgZnJvbSAnZXNyaS9zeW1ib2xzL1RleHRTeW1ib2wnO1xuXG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5pbXBvcnQgTWVhc3VyZW1lbnQgZnJvbSAnZXNyaS93aWRnZXRzL01lYXN1cmVtZW50Jztcbi8vaW1wb3J0IHsgbWVhc3VyZW1lbnQgfSBmcm9tICcuLi8uLi93aWRnZXRzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5EcmF3LkRyYXdWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd1ZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICBtZWFzdXJlbWVudDogTWVhc3VyZW1lbnQ7XG4gIHNrZXRjaDogU2tldGNoO1xuICBncmFwaGljczogR3JhcGhpY3NMYXllcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgdGV4dENvbG9yOiBlc3JpLkNvbG9yO1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGluaXREcmF3KCkge1xuICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiAnaGlkZScgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljcyk7XG5cbiAgICB0aGlzLnNrZXRjaCA9IG5ldyBTa2V0Y2goe1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgY29udGFpbmVyOiAnc2tldGNoRGl2JyxcbiAgICAgIGxheWVyOiB0aGlzLmdyYXBoaWNzLFxuICAgICAgY3JlYXRpb25Nb2RlOiAnc2luZ2xlJyxcbiAgICAgIGRlZmF1bHRDcmVhdGVPcHRpb25zOiB7XG4gICAgICAgIG1vZGU6ICdoeWJyaWQnXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuICAgICh0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wgYXMgYW55KS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sLmNvbG9yID0gbmV3IENvbG9yKFtbMjU1LCAwLCAwLCAwLjVdXSk7XG4gICAgKHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sIGFzIGFueSkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9seWxpbmVTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG5cbiAgICB0aGlzLnNrZXRjaC53YXRjaCgnYWN0aXZlVG9vbCcsIHRvb2wgPT4ge1xuICAgICAgaWYgKHRvb2wgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZW1lbnQ/LmNsZWFyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5za2V0Y2gub24oJ2NyZWF0ZScsIGUgPT4ge1xuICAgICAgaWYgKGUuc3RhdGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgdGhpcy5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICAgIGlmIChlLnN0YXRlID09PSAnY29tcGxldGUnICYmIHRoaXMubGFiZWw/Lmxlbmd0aCkge1xuICAgICAgICBsZXQgbGFiZWxQb2ludDogZXNyaS5HZW9tZXRyeSA9IGUuZ3JhcGhpYy5nZW9tZXRyeTtcbiAgICAgICAgaWYgKGUuZ3JhcGhpYy5nZW9tZXRyeS50eXBlID09PSAncG9seWdvbicpIHtcbiAgICAgICAgICBsYWJlbFBvaW50ID0gKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBlc3JpLlBvbHlnb24pLmNlbnRyb2lkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZyA9IG5ldyBHcmFwaGljKHtcbiAgICAgICAgICBnZW9tZXRyeTogbGFiZWxQb2ludCxcbiAgICAgICAgICBzeW1ib2w6IG5ldyBUZXh0U3ltYm9sKHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMubGFiZWwsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgICAgICBoYWxvQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBoYWxvU2l6ZTogMSxcbiAgICAgICAgICAgIHhvZmZzZXQ6ICc1cHgnLFxuICAgICAgICAgICAgeW9mZnNldDogJzVweCcsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAncmlnaHQnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IERyYXdWaWV3TW9kZWwgZnJvbSAnLi9EcmF3L0RyYXdWaWV3TW9kZWwnO1xuaW1wb3J0IE1lYXN1cmVtZW50IGZyb20gJ2Vzcmkvd2lkZ2V0cy9NZWFzdXJlbWVudCc7XG5leHBvcnQgaW50ZXJmYWNlIERyYXdQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBkcmF3LWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkRyYXcnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxhYmVsJylcbiAgbGFiZWw6IHN0cmluZztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC50ZXh0Q29sb3InKVxuICB0ZXh0Q29sb3I6IENvbG9yO1xuICBAYWxpYXNPZigndmlld01vZGVsLm1lYXN1cmVtZW50JylcbiAgbWVhc3VyZW1lbnQ6IE1lYXN1cmVtZW50O1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IERyYXdWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IERyYXdWaWV3TW9kZWwgPSBuZXcgRHJhd1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBEcmF3UHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX2RyYXdVcGRhdGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy52aWV3TW9kZWwuc2tldGNoKSB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5pbml0RHJhdygpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxsJyk7XG4gICAgZmlsbD8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgZmlsbD8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgfSk7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaW5lJyk7XG4gICAgbGluZT8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgbGluZT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWxpbmVTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9wYWNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BhY2l0eScpO1xuICAgIG9wYWNpdHk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IuYSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpZHRoJyk7XG4gICAgd2lkdGg/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbCBhcyBlc3JpLlNpbXBsZUxpbmVTeW1ib2wpLndpZHRoID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS53aWR0aCA9IHBhcnNlRmxvYXQoXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUud2lkdGggPSBwYXJzZUZsb2F0KFxuICAgICAgICBlLnRhcmdldC52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbCcpO1xuICAgIGxhYmVsPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ2xhYmVsJywgZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRleHRDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0Q29sb3InKTtcbiAgICB0ZXh0Q29sb3I/LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnI2ZmMDAwMCcpO1xuICAgIHRleHRDb2xvcj8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ3RleHRDb2xvcicsIENvbG9yLmZyb21IZXgoZS50YXJnZXQudmFsdWUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyVXBkYXRlPXt0aGlzLl9kcmF3VXBkYXRlZH0gaWQ9XCJza2V0Y2hEaXZcIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtYmxvY2sgaGVhZGluZz1cIlNldHRpbmdzXCIgb3BlbiBjb2xsYXBzaWJsZT5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJDb2xvclwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIEZpbGwgQ29sb3IgPGNhbGNpdGUtY29sb3IgaWQ9XCJmaWxsXCIgaGlkZUNoYW5uZWxzIGhpZGVTYXZlZCBhcHBlYXJhbmNlPVwibWluaW1hbFwiIHNjYWxlPVwic1wiPjwvY2FsY2l0ZS1jb2xvcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBMaW5lIENvbG9yIDxjYWxjaXRlLWNvbG9yIGlkPVwibGluZVwiIGhpZGVDaGFubmVscyBoaWRlU2F2ZWQgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBzY2FsZT1cInNcIj48L2NhbGNpdGUtY29sb3I+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiRmlsbCBPcGFjaXR5XCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgT3BhY2l0eTxjYWxjaXRlLXNsaWRlciBzY2FsZT1cInNcIiBpZD1cIm9wYWNpdHlcIiBtYXg9XCIxXCIgbWluPVwiMFwiIHZhbHVlPVwiMC41XCIgc3RlcD1cIjAuMVwiPjwvY2FsY2l0ZS1zbGlkZXI+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiT3V0bGluZVwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIFdpZHRoIDxjYWxjaXRlLXNsaWRlciBpZD1cIndpZHRoXCIgbWF4PVwiMTBcIiBtaW49XCIwXCIgdmFsdWU9XCIxXCIgc3RlcD1cIjAuNVwiPjwvY2FsY2l0ZS1zbGlkZXI+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiTGFiZWxpbmdcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBMYWJlbCA8Y2FsY2l0ZS1pbnB1dCBzY2FsZT1cInNcIiBpZD1cImxhYmVsXCIgdHlwZT1cInRleHRhcmVhXCI+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIFRleHQgQ29sb3JcbiAgICAgICAgICAgICAgPGNhbGNpdGUtY29sb3IgaWQ9XCJ0ZXh0Q29sb3JcIiBoaWRlQ2hhbm5lbHMgaGlkZVNhdmVkIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgc2NhbGU9XCJzXCI+PC9jYWxjaXRlLWNvbG9yPlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgIDwvY2FsY2l0ZS1ibG9jay1zZWN0aW9uPlxuICAgICAgICA8L2NhbGNpdGUtYmxvY2s+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgU2tldGNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gnO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5cbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBNZWFzdXJlbWVudCBmcm9tICdlc3JpL3dpZGdldHMvTWVhc3VyZW1lbnQnO1xuaW1wb3J0IGdlb21ldHJ5RW5naW5lIGZyb20gJ2VzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmUnO1xuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5TZWxlY3QuU2VsZWN0Vmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdFZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3NrZXRjaCcsIHRoaXMuaW5pdFNrZXRjaC5iaW5kKHRoaXMpKTtcbiAgfVxuICBza2V0Y2g6IGVzcmkuU2tldGNoO1xuICBidWZmZXJEaXN0YW5jZTogbnVtYmVyO1xuICBncmFwaGljczogR3JhcGhpY3NMYXllcjtcbiAgbWVhc3VyZW1lbnQ6IE1lYXN1cmVtZW50O1xuXG4gIEBwcm9wZXJ0eSgpIGdlb21ldHJ5OiBlc3JpLkdlb21ldHJ5O1xuICBpbml0U2tldGNoKCkge1xuICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiAnaGlkZScgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljcyk7XG4gICAgdGhpcy5za2V0Y2ggPSBuZXcgU2tldGNoKHtcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIGNvbnRhaW5lcjogJ3NlbGVjdFdpZGdldCcsXG4gICAgICBsYXllcjogdGhpcy5ncmFwaGljcyxcbiAgICAgIGNyZWF0aW9uTW9kZTogJ3NpbmdsZScsXG4gICAgICBkZWZhdWx0Q3JlYXRlT3B0aW9uczoge1xuICAgICAgICBtb2RlOiAnaHlicmlkJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC51cGRhdGVPbkdyYXBoaWNDbGljayA9IGZhbHNlO1xuICAgIHRoaXMuc2tldGNoLm9uKCdjcmVhdGUnLCBldiA9PiB7XG4gICAgICBpZiAoZXYuc3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyRGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgY29uc3QgZyA9IGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljQnVmZmVyKGV2LmdyYXBoaWMuZ2VvbWV0cnksIHRoaXMuYnVmZmVyRGlzdGFuY2UsICdmZWV0Jyk7XG4gICAgICAgICAgLy9wcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGcgYXMgX19lc3JpLlBvbHlnb247XG4gICAgICAgICAgZXYuZ3JhcGhpYy5nZW9tZXRyeSA9IGcgYXMgX19lc3JpLlBvbHlnb247XG4gICAgICAgICAgdGhpcy5ncmFwaGljcy5hZGQoZXYuZ3JhcGhpYyk7XG4gICAgICAgICAgZXYuZ3JhcGhpYy5zeW1ib2wgPSB7XG4gICAgICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgICAgICAgICAgc3R5bGU6ICdub25lJyxcbiAgICAgICAgICAgIG91dGxpbmU6IHsgc3R5bGU6ICdzaG9ydC1kYXNoJywgd2lkdGg6IDIuNSwgY29sb3I6IFsyMjEsIDIyMSwgMjIxLCAxXSB9LFxuICAgICAgICAgICAgY29sb3I6IG5ldyBDb2xvcihbMjU1LCAyNDMsIDEzLCAwLjI1XSlcbiAgICAgICAgICB9IGFzIGFueTtcbiAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gZXYuZ3JhcGhpYy5nZW9tZXRyeSBhcyBlc3JpLkdlb21ldHJ5O1xuICAgICAgICAgIHRoaXMudmlldy5nb1RvKGV2LmdyYXBoaWMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBldi5ncmFwaGljLmdlb21ldHJ5IGFzIGVzcmkuR2VvbWV0cnk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChldi5zdGF0ZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICB0aGlzLm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLndhdGNoKCdhY3RpdmVUb29sJywgdG9vbCA9PiB7XG4gICAgICBpZiAodG9vbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gICAgdGhpcy5zZXQoJ2J1ZmZlckRpc3RhbmNlJywgMCk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBNZWFzdXJlbWVudCBmcm9tICdlc3JpL3dpZGdldHMvTWVhc3VyZW1lbnQnO1xuXG5pbXBvcnQgU2VsZWN0Vmlld01vZGVsIGZyb20gJy4vU2VsZWN0L1NlbGVjdFZpZXdNb2RlbCc7XG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIGxheWVyPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IHNlbGVjdC1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5TZWxlY3QnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubGF5ZXInKVxuICBsYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuc2tldGNoJylcbiAgc2tldGNoOiBlc3JpLlNrZXRjaDtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5idWZmZXJEaXN0YW5jZScpXG4gIGJ1ZmZlckRpc3RhbmNlOiBudW1iZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubWVhc3VyZW1lbnQnKVxuICBtZWFzdXJlbWVudDogTWVhc3VyZW1lbnQ7XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogU2VsZWN0Vmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBTZWxlY3RWaWV3TW9kZWwgPSBuZXcgU2VsZWN0Vmlld01vZGVsKCk7XG4gIF9za2V0Y2hDcmVhdGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy52aWV3TW9kZWwuc2tldGNoKSB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5pbml0U2tldGNoKCk7XG4gICAgfVxuICB9O1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogU2VsZWN0UHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2OiBhbnkpIHtcbiAgICB0aGlzLnNldCgnYnVmZmVyRGlzdGFuY2UnLCBwYXJzZUludChldi50YXJnZXQudmFsdWUpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdERpdiBjYWxjaXRlLWlucHV0Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVJbnB1dEJsdXInLCAoZXY6IGFueSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoZXYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlclVwZGF0ZT17dGhpcy5fc2tldGNoQ3JlYXRlZH0gaWQ9XCJzZWxlY3RXaWRnZXRcIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgQnVmZmVyIERpc3RhbmNlIChmZWV0KVxuICAgICAgICAgIDxjYWxjaXRlLWlucHV0XG4gICAgICAgICAgICBzY2FsZT1cInNcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjIwMDBcIlxuICAgICAgICAgICAgc3RlcD1cIjUwXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnZpZXdNb2RlbC5idWZmZXJEaXN0YW5jZX1cbiAgICAgICAgICA+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuaW1wb3J0IEJhc2VNYXBHYWxsZXJ5IGZyb20gJ2Vzcmkvd2lkZ2V0cy9CYXNlbWFwR2FsbGVyeSc7XG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQmFzZU1hcHMuQmFzZU1hcHNWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1hcHNWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBiYXNlbWFwczogQmFzZU1hcEdhbGxlcnk7XG4gIGltYWdlczogQmFzZU1hcEdhbGxlcnk7XG5cbiAgYWN0aXZlQmFzZW1hcDogZXNyaS5CYXNlbWFwO1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNoYW5nZVByb3BlcnR5TGluZXMgPSAoYmFzZW1hcDogZXNyaS5CYXNlbWFwKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlMYXllcjogRmVhdHVyZUxheWVyID0gdGhpcy52aWV3Lm1hcC5hbGxMYXllcnMuZmluZChsYXllciA9PiB7XG4gICAgICByZXR1cm4gbGF5ZXIudHlwZSA9PT0gJ2ZlYXR1cmUnICYmIGxheWVyLnRpdGxlID09PSAnUHJvcGVydHknO1xuICAgIH0pIGFzIEZlYXR1cmVMYXllcjtcbiAgICBjb25zdCBuZXdSZW5kZXJlcjogZXNyaS5TaW1wbGVSZW5kZXJlciA9IChwcm9wZXJ0eUxheWVyLnJlbmRlcmVyIGFzIGVzcmkuU2ltcGxlUmVuZGVyZXIpLmNsb25lKCkgYXMgZXNyaS5TaW1wbGVSZW5kZXJlcjtcbiAgICBpZiAoXG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2RhcmsnKSB8fFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCduaWdodCcpIHx8XG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2RhcmsnKSB8fFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJzIwJykgfHxcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCcxOScpXG4gICAgKSB7XG4gICAgICAobmV3UmVuZGVyZXIuc3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS5jb2xvciA9IG5ldyBDb2xvcihbMjU1LCAyNTUsIDI1NSwgMC41XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIChuZXdSZW5kZXJlci5zeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gbmV3IENvbG9yKFswLCAwLCAwLCAwLjVdKTtcbiAgICB9XG4gICAgcHJvcGVydHlMYXllci5yZW5kZXJlciA9IG5ld1JlbmRlcmVyO1xuICB9O1xuXG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICB0aGlzLmJhc2VtYXBzID0gbmV3IEJhc2VNYXBHYWxsZXJ5KHsgdmlldzogdGhpcy52aWV3IH0pO1xuICAgIHRoaXMudmlldy53aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlUHJvcGVydHlMaW5lcyh0aGlzLnZpZXcubWFwLmJhc2VtYXApO1xuICAgIH0pO1xuICAgIHRoaXMudmlldy5tYXAud2F0Y2goJ2Jhc2VtYXAnLCAoYmFzZW1hcDogZXNyaS5CYXNlbWFwKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVByb3BlcnR5TGluZXMoYmFzZW1hcCk7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpPy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKTtcbiAgICAgICAgICB0aGlzLnZpZXcubWFwLnJlbW92ZSh0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcCA9IHRoaXMudmlldy5tYXAuYmFzZW1hcDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU3dpdGNoJyk/LnJlbW92ZUF0dHJpYnV0ZSgnc3dpdGNoZWQnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJtID0gdGhpcy5pbWFnZXMudmlld01vZGVsLml0ZW1zLmZpbmQoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLmJhc2VtYXAudGl0bGUgPT09IHRoaXMudmlldy5tYXAuYmFzZW1hcC50aXRsZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGJtICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFN3aXRjaCcpPy5oYXNBdHRyaWJ1dGUoJ3N3aXRjaGVkJykpIHtcbiAgICAgICAgdGhpcy52aWV3Lm1hcC5hZGRNYW55KHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLnRvQXJyYXkoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYWN0aXZlQmFzZW1hcCA9IHRoaXMudmlldy5tYXAuYmFzZW1hcDtcbiAgICB0aGlzLmltYWdlcyA9IG5ldyBCYXNlTWFwR2FsbGVyeSh7XG4gICAgICB2aWV3OiB0aGlzLnZpZXcsXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBpZDogJzQ5MjM4Njc1OWQyNjRkNDk5NDhiZjdmODM5NTdkZGI5J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKTtcbiAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGpzb24gPSAodmlldy5tYXAgYXMgYW55KS50b0pTT04oKTtcbiAgICAgIGpzb24uaW5pdGlhbFN0YXRlLnZpZXdwb2ludC50YXJnZXRHZW9tZXRyeSA9IHZpZXcuZXh0ZW50O1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbWFwcycsIEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbiAgICB9KTtcbiAgfVxuICB0b2dnbGVDb250ZW50ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgPT09ICdtYXBzJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHMnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHNJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXNJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHMnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwc0l0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IEJhc2VNYXBzVmlld01vZGVsIGZyb20gJy4vQmFzZU1hcHMvQmFzZU1hcHNWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VNYXBzUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgYmFzZW1hcHMtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQmFzZU1hcHMnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1hcHMgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBAYWxpYXNPZigndmlld01vZGVsLmJhc2VtYXBzJylcbiAgYmFzZW1hcHM6IGVzcmkuQmFzZW1hcEdhbGxlcnk7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuaW1hZ2VzJylcbiAgaW1hZ2VzOiBlc3JpLkJhc2VtYXBHYWxsZXJ5O1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IEJhc2VNYXBzVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBCYXNlTWFwc1ZpZXdNb2RlbCA9IG5ldyBCYXNlTWFwc1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBCYXNlTWFwc1Byb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuICBfY3JlYXRlTWFwcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5iYXNlbWFwcykge1xuICAgICAgdGhpcy5iYXNlbWFwcy5jb250YWluZXIgPSAnbWFwcyc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlSW1hZ2VzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgdGhpcy5pbWFnZXMuY29udGFpbmVyID0gJ2ltYWdlcyc7XG4gICAgfVxuICB9O1xuICBoYW5kbGVTd2l0Y2hDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnc3dpdGNoZWQnKSAhPSAnJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgY29uc29sZS5sb2coJ2FkZCcpO1xuICAgICAgdGhpcy52aWV3Lm1hcC5hZGRNYW55KHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy50b0FycmF5KCksIDApO1xuICAgICAgdGhpcy52aWV3Lm1hcC5iYXNlbWFwLnJlZmVyZW5jZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgbGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnZpZXcubWFwLmxheWVyc1xuICAgICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy52aWV3TW9kZWwuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmluY2x1ZGVzKGxheWVyKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgIGxheWVyLm9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgbGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTbGlkZXInKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB0aGlzLnZpZXcubWFwLmJhc2VtYXAucmVmZXJlbmNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBsYXllci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy52aWV3TW9kZWwuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBoYW5kbGVTbGlkZXJDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgbGF5ZXJzID0gdGhpcy52aWV3Lm1hcC5sYXllcnNcbiAgICAgIC5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3TW9kZWwuYWN0aXZlQmFzZW1hcD8uYmFzZUxheWVycy5pbmNsdWRlcyhsYXllcik7XG4gICAgICB9KVxuICAgICAgLnRvQXJyYXkoKTtcbiAgICBsYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICBsYXllci5vcGFjaXR5ID0gcGFyc2VGbG9hdChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9zbGlkZXJDcmVhdGVkID0gKGU6IGFueSkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJylcbiAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLFxuICAgICAgICB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZS5iaW5kKHsgYmFzZW1hcDogdGhpcy5iYXNlbWFwcywgdmlldzogdGhpcy52aWV3IH0pXG4gICAgICApO1xuICB9O1xuICBfYmxlbmRDcmVhdGVkID0gKGU6IGFueSkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignI2JsZW5kU3dpdGNoJylcbiAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NhbGNpdGVTd2l0Y2hDaGFuZ2UnLFxuICAgICAgICB0aGlzLmhhbmRsZVN3aXRjaENoYW5nZS5iaW5kKHsgYmFzZW1hcDogdGhpcy5iYXNlbWFwcywgdmlldzogdGhpcy52aWV3IH0pXG4gICAgICApO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kJyk/LnJlbW92ZUF0dHJpYnV0ZSgnc3dpdGNoZWQnKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYmFzZW1hcERpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAvLyBjYW4gSSBnZXQgY2hlY2tlZCBhbmQgdmFsdWUgbGlrZSB0aGlzP1xuICAgICAgICBpZiAoZS50YXJnZXQ/LmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLnZpZXdNb2RlbC50b2dnbGVDb250ZW50KGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiaGlkZGVuXCIgaWQ9XCJibGVuZFwiPlxuICAgICAgICAgIDxjYWxjaXRlLXN3aXRjaCBhZnRlckNyZWF0ZT17dGhpcy5fYmxlbmRDcmVhdGVkfSBpZD1cImJsZW5kU3dpdGNoXCI+PC9jYWxjaXRlLXN3aXRjaD4gQmxlbmRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGNhbGNpdGUtc2xpZGVyXG4gICAgICAgICAgYWZ0ZXJDcmVhdGU9e3RoaXMuX3NsaWRlckNyZWF0ZWR9XG4gICAgICAgICAgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgICAgIGlkPVwiYmxlbmRTbGlkZXJcIlxuICAgICAgICAgIHZhbHVlPVwiMC41XCJcbiAgICAgICAgICBtYXg9XCIxXCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBzdGVwPVwiMC4xXCJcbiAgICAgICAgPjwvY2FsY2l0ZS1zbGlkZXI+XG5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlTWFwc30gaWQ9XCJtYXBzXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUltYWdlc30gaWQ9XCJpbWFnZXNcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdmFsdWU9XCJtYXBzXCIgaWQ9XCJtYXBzSXRlbVwiPlxuICAgICAgICAgICAgTWFwc1xuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdmFsdWU9XCJpbWFnZXNcIiBpZD1cImltYWdlc0l0ZW1cIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIEltYWdlcnlcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgTGF5ZXJMaXN0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9MYXllckxpc3QnO1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5MYXllcnMuTGF5ZXJzVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyc1ZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIGxheWVyTGlzdDogZXNyaS5MYXllckxpc3Q7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gICAgdGhpcy5sYXllckxpc3QgPSBuZXcgTGF5ZXJMaXN0KHtcbiAgICAgIHZpZXcsXG4gICAgICBjb250YWluZXI6ICdsYXllckRpdicsXG4gICAgICBsaXN0SXRlbUNyZWF0ZWRGdW5jdGlvbjogZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZXZlbnQuaXRlbTtcbiAgICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSAhPSAnZ3JvdXAnKSB7XG4gICAgICAgICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1zbGlkZXInKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtaW4nLCAnMCcpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21heCcsICcxMDAnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtaW4tbGFiZWwnLCAnMCUnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtYXgtbGFiZWwnLCAnMTAwJScpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2xhYmVsLWhhbmRsZXMnLCAnJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAoaXRlbT8ubGF5ZXIub3BhY2l0eSAqIDEwMCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnZGF0YScsIGl0ZW0ubGF5ZXIuaWQpO1xuICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlU2xpZGVyVXBkYXRlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdmlldy5tYXAuZmluZExheWVyQnlJZCgoZXZlbnQudGFyZ2V0IGFzIGFueSkuZ2V0QXR0cmlidXRlKCdkYXRhJykpLm9wYWNpdHkgPVxuICAgICAgICAgICAgICBwYXJzZUludCgoZXZlbnQ/LnRhcmdldCBhcyBhbnkpPy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpIC8gMTAwO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGl0ZW0ucGFuZWwgPSB7XG4gICAgICAgICAgICBjb250ZW50OiBbc2xpZGVyLCAnbGVnZW5kJ10sXG4gICAgICAgICAgICBvcGVuOiBpdGVtLmxheWVyLnZpc2libGVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpdGVtLmxheWVyLnRpdGxlID09PSAnUHJvcGVydHknKSB7XG4gICAgICAgICAgICBpdGVtLmFjdGlvbnNTZWN0aW9ucyA9IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2hvdyBMYWJlbHMnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3RvZ2dsZScsXG4gICAgICAgICAgICAgICAgICBpZDogJ3Byb3BlcnR5LWxhYmVscycsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5sYXllci5sYWJlbHNWaXNpYmxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubGF5ZXJMaXN0Lm9uKCd0cmlnZ2VyLWFjdGlvbicsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5hY3Rpb24uaWQgPT09ICdwcm9wZXJ0eS1sYWJlbHMnKSB7XG4gICAgICAgIChldmVudC5pdGVtLmxheWVyIGFzIGVzcmkuRmVhdHVyZUxheWVyKS5sYWJlbHNWaXNpYmxlID0gKGV2ZW50LmFjdGlvbiBhcyBlc3JpLkFjdGlvblRvZ2dsZSkudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IExheWVyc1ZpZXdNb2RlbCBmcm9tICcuL0xheWVycy9MYXllcnNWaWV3TW9kZWwnO1xuaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5ZXJzUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbGF5ZXJzLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxheWVycycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllcnMgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5sYXllckxpc3QnKVxuICBsYXllckxpc3Q6IGVzcmkuTGF5ZXJMaXN0O1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTGF5ZXJzVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBMYXllcnNWaWV3TW9kZWwgPSBuZXcgTGF5ZXJzVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IExheWVyc1Byb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuICBmaWx0ZXJMYXllcnMgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHRoaXMubGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMuZm9yRWFjaCgoaXRlbTogZXNyaS5MaXN0SXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICBsZXQgb3BlbiA9IGZhbHNlO1xuICAgICAgICAoaXRlbS5sYXllciBhcyBlc3JpLkdyb3VwTGF5ZXIpLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBpZiAobGF5ZXIudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgbGF5ZXIubGlzdE1vZGUgPSAnc2hvdyc7XG4gICAgICAgICAgICBvcGVuID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGF5ZXIubGlzdE1vZGUgPSAnaGlkZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICBpdGVtLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCNsYXllckRpdl8keyhpdGVtIGFzIGFueSkudWlkfV9fdGl0bGVgKVxuICAgICAgICAgICAgPy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIGlmICghb3Blbikge1xuICAgICAgICAgIGl0ZW0ub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgI2xheWVyRGl2XyR7KGl0ZW0gYXMgYW55KS51aWR9X190aXRsZWApXG4gICAgICAgICAgICA/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0ub3BlbiA9IHRydWU7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjbGF5ZXJEaXZfJHsoaXRlbSBhcyBhbnkpLnVpZH1fX3RpdGxlYClcbiAgICAgICAgICAgID8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgX2NyZWF0ZUxheWVycyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5sYXllckxpc3QpIHtcbiAgICAgIHRoaXMubGF5ZXJMaXN0LmNvbnRhaW5lciA9ICdsYXllcldpZGdldCc7XG4gICAgfVxuICB9O1xuICBjbGVhckNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuZmlsdGVyTGF5ZXJzKCcnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXllclNlYXJjaCAuY2FsY2l0ZS1pbnB1dC1jbGVhci1idXR0b24nKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsZWFyQ2xpY2spO1xuICB9O1xuICBfY3JlYXRlU2VhcmNoID0gKGlucHV0OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5maWx0ZXJMYXllcnMoZS50YXJnZXQudmFsdWUpO1xuICAgICAgaW5wdXQucXVlcnlTZWxlY3RvcignLmNhbGNpdGUtaW5wdXQtY2xlYXItYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGVhckNsaWNrKTtcbiAgICB9KTtcbiAgfTtcbiAgX3Jlc2V0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgbmV3IFdlYk1hcCh7IHBvcnRhbEl0ZW06ICh0aGlzLnZpZXcubWFwIGFzIGVzcmkuV2ViTWFwKS5wb3J0YWxJdGVtLmNsb25lKCkgfSkubG9hZCgpLnRoZW4oKG1hcDogV2ViTWFwKSA9PiB7XG4gICAgICAgIG1hcC5hbGxMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgdGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKS52aXNpYmxlID0gbGF5ZXIudmlzaWJsZTtcbiAgICAgICAgICBpZiAobGF5ZXIudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgICAgKGxheWVyIGFzIGVzcmkuR3JvdXBMYXllcikubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpLnZpc2libGUgPSBsYXllci52aXNpYmxlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHN0aWNreVwiPlxuICAgICAgICAgIDxjYWxjaXRlLWlucHV0XG4gICAgICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyIGJ5IGxheWVyIG5hbWVcIlxuICAgICAgICAgICAgc2NhbGU9XCJzXCJcbiAgICAgICAgICAgIGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVTZWFyY2h9XG4gICAgICAgICAgICBpZD1cImxheWVyU2VhcmNoXCJcbiAgICAgICAgICA+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICAgIDxjYWxjaXRlLWJ1dHRvbiBpY29uLXN0YXJ0PVwidmlld0hpZGVcIiBzY2FsZT1cInNcIiBjb2xvcj1cImxpZ2h0XCIgb25jbGljaz17dGhpcy5fcmVzZXR9PjwvY2FsY2l0ZS1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUxheWVyc30gaWQ9XCJsYXllcldpZGdldFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxvY2F0aW9uU2VhcmNoLkxvY2F0aW9uU2VhcmNoVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uU2VhcmNoVmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBzZWFyY2g6IFNlYXJjaDtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdGhpcy5zZWFyY2ggPSBuZXcgU2VhcmNoKHsgdmlldzogdmlldywgbWF4U3VnZ2VzdGlvbnM6IDMwLCBzZWFyY2hBbGxFbmFibGVkOiBmYWxzZSB9KTtcbiAgICB0aGlzLnNlYXJjaC5hbGxTb3VyY2VzLm9uKCdhZnRlci1hZGQnLCBlID0+IHtcbiAgICAgIGlmICgoZS5pdGVtIGFzIGFueSkubGF5ZXIpIHtcbiAgICAgICAgZS5pdGVtLm5hbWUgPSAoZS5pdGVtIGFzIGFueSkubGF5ZXIudGl0bGU7XG4gICAgICAgIGUuaXRlbS5wbGFjZWhvbGRlciA9IChlLml0ZW0gYXMgYW55KS5sYXllci50aXRsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IExvY2F0aW9uU2VhcmNoVmlld01vZGVsIGZyb20gJy4vTG9jYXRpb25TZWFyY2gvTG9jYXRpb25TZWFyY2hWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uU2VhcmNoUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbG9jYXRpb25zZWFyY2gtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTG9jYXRpb25TZWFyY2gnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25TZWFyY2ggZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBAYWxpYXNPZigndmlld01vZGVsLnNlYXJjaCcpXG4gIHNlYXJjaDogZXNyaS53aWRnZXRzU2VhcmNoO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTG9jYXRpb25TZWFyY2hWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IExvY2F0aW9uU2VhcmNoVmlld01vZGVsID0gbmV3IExvY2F0aW9uU2VhcmNoVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IExvY2F0aW9uU2VhcmNoUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX3NlYXJjaENyZWF0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgIHRoaXMuc2VhcmNoLmNvbnRhaW5lciA9ICdsb2NhdGlvblNlYXJjaCc7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9zZWFyY2hDcmVhdGV9IGlkPVwibG9jYXRpb25TZWFyY2hcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuaW1wb3J0IE1hcFZpZXcgZnJvbSAnZXNyaS92aWV3cy9NYXBWaWV3JztcbmltcG9ydCBNYXAgZnJvbSAnZXNyaS9NYXAnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IHdhdGNoVXRpbHMgZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLk92ZXJ2aWV3TWFwLk92ZXJ2aWV3TWFwVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJ2aWV3TWFwVmlld01vZGVsIGV4dGVuZHMgZGVjbGFyZWQoQWNjZXNzb3IpIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgb3ZlcnZpZXdNYXBWaWV3OiBlc3JpLk1hcFZpZXc7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cbiAgc3RvcEV2dFByb3BhZ2F0aW9uID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICBkaXNhYmxlWm9vbWluZyA9ICh2aWV3OiBhbnkpID0+IHtcbiAgICB2aWV3LnBvcHVwLmRvY2tFbmFibGVkID0gdHJ1ZTtcblxuICAgIC8vIFJlbW92ZXMgdGhlIHpvb20gYWN0aW9uIG9uIHRoZSBwb3B1cFxuICAgIHZpZXcucG9wdXAuYWN0aW9ucyA9IFtdO1xuXG4gICAgLy8gc3RvcHMgcHJvcGFnYXRpb24gb2YgZGVmYXVsdCBiZWhhdmlvciB3aGVuIGFuIGV2ZW50IGZpcmVzXG5cbiAgICAvLyBleGx1ZGUgdGhlIHpvb20gd2lkZ2V0IGZyb20gdGhlIGRlZmF1bHQgVUlcbiAgICB2aWV3LnVpLmNvbXBvbmVudHMgPSBbJ2F0dHJpYnV0aW9uJ107XG5cbiAgICAvLyBkaXNhYmxlIG1vdXNlIHdoZWVsIHNjcm9sbCB6b29taW5nIG9uIHRoZSB2aWV3XG4gICAgdmlldy5vbignbW91c2Utd2hlZWwnLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG5cbiAgICAvLyBkaXNhYmxlIHpvb21pbmcgdmlhIGRvdWJsZS1jbGljayBvbiB0aGUgdmlld1xuICAgIHZpZXcub24oJ2RvdWJsZS1jbGljaycsIHRoaXMuc3RvcEV2dFByb3BhZ2F0aW9uKTtcblxuICAgIC8vIGRpc2FibGUgem9vbWluZyBvdXQgdmlhIGRvdWJsZS1jbGljayArIENvbnRyb2wgb24gdGhlIHZpZXdcbiAgICB2aWV3Lm9uKCdkb3VibGUtY2xpY2snLCBbJ0NvbnRyb2wnXSwgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuXG4gICAgLy8gZGlzYWJsZXMgcGluY2gtem9vbSBhbmQgcGFubmluZyBvbiB0aGUgdmlld1xuICAgIHZpZXcub24oJ2RyYWcnLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG5cbiAgICAvLyBkaXNhYmxlIHRoZSB2aWV3J3Mgem9vbSBib3ggdG8gcHJldmVudCB0aGUgU2hpZnQgKyBkcmFnXG4gICAgLy8gYW5kIFNoaWZ0ICsgQ29udHJvbCArIGRyYWcgem9vbSBnZXN0dXJlcy5cbiAgICB2aWV3Lm9uKCdkcmFnJywgWydTaGlmdCddLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG4gICAgdmlldy5vbignZHJhZycsIFsnU2hpZnQnLCAnQ29udHJvbCddLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG5cbiAgICAvLyBwcmV2ZW50cyB6b29taW5nIHdpdGggdGhlICsgYW5kIC0ga2V5c1xuICAgIHZpZXcub24oJ2tleS1kb3duJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHByb2hpYml0ZWRLZXlzID0gWycrJywgJy0nLCAnU2hpZnQnLCAnXycsICc9J107XG4gICAgICBjb25zdCBrZXlQcmVzc2VkID0gZXZlbnQua2V5O1xuICAgICAgaWYgKHByb2hpYml0ZWRLZXlzLmluZGV4T2Yoa2V5UHJlc3NlZCkgIT09IC0xKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpZXc7XG4gIH07XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoeyBiYXNlbWFwOiAnc3RyZWV0cy1uYXZpZ2F0aW9uLXZlY3RvcicgfSk7XG4gICAgdGhpcy5vdmVydmlld01hcFZpZXcgPSBuZXcgTWFwVmlldyh7IG1hcDogbWFwLCBleHRlbnQ6IHZpZXcuZXh0ZW50IH0pO1xuICAgIHRoaXMuZGlzYWJsZVpvb21pbmcodGhpcy5vdmVydmlld01hcFZpZXcpO1xuICAgIHRoaXMub3ZlcnZpZXdNYXBWaWV3LnVpLnJlbW92ZSgnem9vbScpO1xuXG4gICAgY29uc3QgZ3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcbiAgICAgIGdlb21ldHJ5OiBudWxsLFxuICAgICAgc3ltYm9sOiB7XG4gICAgICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMC41XSxcbiAgICAgICAgb3V0bGluZTogbnVsbFxuICAgICAgfVxuICAgIH0gYXMgYW55KTtcbiAgICB0aGlzLm92ZXJ2aWV3TWFwVmlldy5ncmFwaGljcy5hZGQoZ3JhcGhpYyk7XG4gICAgd2F0Y2hVdGlscy5pbml0KHZpZXcsICdleHRlbnQnLCAoKSA9PiB7XG4gICAgICBncmFwaGljLmdlb21ldHJ5ID0gdmlldy5leHRlbnQ7XG4gICAgfSk7XG5cbiAgICB3YXRjaFV0aWxzLmluaXQodmlldywgJ3N0YXRpb25hcnknLCAoKSA9PiB7XG4gICAgICBpZiAodmlldy5zdGF0aW9uYXJ5KSB7XG4gICAgICAgIHRoaXMub3ZlcnZpZXdNYXBWaWV3XG4gICAgICAgICAgLmdvVG8oe1xuICAgICAgICAgICAgY2VudGVyOiB2aWV3LmNlbnRlcixcbiAgICAgICAgICAgIHNjYWxlOlxuICAgICAgICAgICAgICB2aWV3LnNjYWxlICpcbiAgICAgICAgICAgICAgMiAqXG4gICAgICAgICAgICAgIE1hdGgubWF4KHZpZXcud2lkdGggLyB0aGlzLm92ZXJ2aWV3TWFwVmlldy53aWR0aCwgdmlldy5oZWlnaHQgLyB0aGlzLm92ZXJ2aWV3TWFwVmlldy5oZWlnaHQpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZSBnb3RvLWludGVycnVwdGVkIGVycm9yc1xuICAgICAgICAgICAgaWYgKGVycm9yLm5hbWUgIT0gJ3ZpZXc6Z290by1pbnRlcnJ1cHRlZCcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IE92ZXJ2aWV3TWFwVmlld01vZGVsIGZyb20gJy4vT3ZlcnZpZXdNYXAvT3ZlcnZpZXdNYXBWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJ2aWV3TWFwUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgb3ZlcnZpZXdtYXAtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuT3ZlcnZpZXdNYXAnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcnZpZXdNYXAgZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwub3ZlcnZpZXdNYXBWaWV3JylcbiAgb3ZlcnZpZXdNYXBWaWV3OiBlc3JpLk1hcFZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubmFtZScpXG4gIEByZW5kZXJhYmxlKClcbiAgbmFtZSA9ICcnO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogT3ZlcnZpZXdNYXBWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IE92ZXJ2aWV3TWFwVmlld01vZGVsID0gbmV3IE92ZXJ2aWV3TWFwVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IE92ZXJ2aWV3TWFwUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG4gIG92ZXJ2aWV3Q3JlYXRlZCA9IChkaXY6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgaWYgKHRoaXMub3ZlcnZpZXdNYXBWaWV3KSB7XG4gICAgICB0aGlzLm92ZXJ2aWV3TWFwVmlldy5jb250YWluZXIgPSBkaXY7XG4gICAgfVxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5vdmVydmlld0NyZWF0ZWR9IGlkPVwib3ZlcnZpZXdEaXZcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5DbGVhci5DbGVhclZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGVhclZpZXdNb2RlbCBleHRlbmRzIGRlY2xhcmVkKEFjY2Vzc29yKSB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuXG5pbXBvcnQgQ2xlYXJWaWV3TW9kZWwgZnJvbSAnLi9DbGVhci9DbGVhclZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xlYXJQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldC0tYnV0dG9uIGVzcmktd2lkZ2V0JyxcbiAgdGV4dDogJ2VzcmktaWNvbi1mb250LWZhbGxiYWNrLXRleHQnLFxuICB0cmFzaEljb246ICdlc3JpLWljb24gZXNyaS1pY29uLXRyYXNoJyxcbiAgbG9hZGluZ0ljb246ICdlc3JpLWljb24tbG9hZGluZy1pbmRpY2F0b3InLFxuICByb3RhdGluZ0ljb246ICdlc3JpLXJvdGF0aW5nJyxcbiAgd2lkZ2V0SWNvbjogJ2VzcmktaWNvbi10cmFzaCcsXG5cbiAgLy8gY29tbW9uXG4gIGRpc2FibGVkOiAnZXNyaS1kaXNhYmxlZCdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQ2xlYXInKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXIgZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBDbGVhclZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogQ2xlYXJWaWV3TW9kZWwgPSBuZXcgQ2xlYXJWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogQ2xlYXJQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgY2xlYXJUaXRsZSA9ICdDbGVhcic7XG4gIHJlbmRlckljb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPXt0aGlzLmNsYXNzZXMoQ1NTLnRyYXNoSWNvbil9IC8+O1xuICB9O1xuICBfY2xlYXIgPSAoKSA9PiB7XG4gICAgdGhpcy52aWV3Lm1hcC5hbGxMYXllcnNcbiAgICAgIC5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICByZXR1cm4gbGF5ZXIudHlwZSA9PT0gJ2dyYXBoaWNzJztcbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIChsYXllciBhcyBlc3JpLkdyYXBoaWNzTGF5ZXIpLnJlbW92ZUFsbCgpO1xuICAgICAgfSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBiaW5kPXt0aGlzfVxuICAgICAgICBjbGFzcz17dGhpcy5jbGFzc2VzKENTUy5iYXNlKX1cbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIG9uY2xpY2s9e3RoaXMuX2NsZWFyfVxuICAgICAgICBvbmtleWRvd249e3RoaXMuX2NsZWFyfVxuICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLmNsZWFyVGl0bGV9XG4gICAgICAgIHRpdGxlPXt0aGlzLmNsZWFyVGl0bGV9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnJlbmRlckljb24oKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIFdpZGdldHNcbmltcG9ydCBMZWdlbmQgZnJvbSAnZXNyaS93aWRnZXRzL0xlZ2VuZCc7XG5pbXBvcnQgUHJpbnQgZnJvbSAnZXNyaS93aWRnZXRzL1ByaW50JztcbmltcG9ydCBCb29rbWFya3MgZnJvbSAnZXNyaS93aWRnZXRzL0Jvb2ttYXJrcyc7XG5pbXBvcnQgUHJvcGVydHlTZWFyY2ggZnJvbSAnLi93aWRnZXRzL1Byb3BlcnR5U2VhcmNoJztcbmltcG9ydCBDb29yZGluYXRlQ29udmVyc2lvbiBmcm9tICdlc3JpL3dpZGdldHMvQ29vcmRpbmF0ZUNvbnZlcnNpb24nO1xuaW1wb3J0IEV4cGFuZCBmcm9tICdlc3JpL3dpZGdldHMvRXhwYW5kJztcbmltcG9ydCBNZWFzdXJlIGZyb20gJy4vd2lkZ2V0cy9NZWFzdXJlJztcbmltcG9ydCBDb21wYXNzIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Db21wYXNzJztcbmltcG9ydCBMb2NhdGUgZnJvbSAnZXNyaS93aWRnZXRzL0xvY2F0ZSc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnZXNyaS93aWRnZXRzL1RyYWNrJztcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GdWxsc2NyZWVuJztcblxuaW1wb3J0IHsgY29uZG9zVGFibGUsIGFkZHJlc3NUYWJsZSwgZmVhdHVyZUxheWVyLCBjcmVhdGVUZW1wbGF0ZSB9IGZyb20gJy4vZGF0YS9zZWFyY2gnO1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5pbXBvcnQgRHJhdyBmcm9tICcuL3dpZGdldHMvRHJhdyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vd2lkZ2V0cy9TZWxlY3QnO1xuaW1wb3J0IEJhc2VNYXBzIGZyb20gJy4vd2lkZ2V0cy9CYXNlTWFwcyc7XG5pbXBvcnQgTGF5ZXJzIGZyb20gJy4vd2lkZ2V0cy9MYXllcnMnO1xuaW1wb3J0IExvY2F0aW9uU2VhcmNoIGZyb20gJy4vd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaCc7XG5pbXBvcnQgT3ZlcnZpZXdNYXAgZnJvbSAnLi93aWRnZXRzL092ZXJ2aWV3TWFwJztcbmltcG9ydCBDbGVhciBmcm9tICcuL3dpZGdldHMvQ2xlYXInO1xuLy9pbXBvcnQgTGF5ZXJTZWxlY3QgZnJvbSAnLi93aWRnZXRzL0xheWVyU2VsZWN0JztcblxuZXhwb3J0IGxldCBtZWFzdXJlbWVudDogTWVhc3VyZTtcbmV4cG9ydCBjb25zdCBzZWxlY3Q6IFNlbGVjdCA9IG5ldyBTZWxlY3QoKTtcbmV4cG9ydCBsZXQgbGF5ZXJzOiBMYXllcnM7XG5leHBvcnQgbGV0IGxlZ2VuZDogTGVnZW5kO1xuZXhwb3J0IGxldCBiYXNlbWFwczogQmFzZU1hcHM7XG5leHBvcnQgbGV0IGJvb2ttYXJrczogQm9va21hcmtzO1xuZXhwb3J0IGxldCBsb2NhdGlvblNlYXJjaDogTG9jYXRpb25TZWFyY2g7XG5leHBvcnQgbGV0IGRyYXdXaWRnZXQ6IERyYXc7XG5leHBvcnQgbGV0IHByaW50V2lkZ2V0OiBQcmludDtcbmV4cG9ydCBsZXQgcHJvcGVydHlTZWFyY2g6IFByb3BlcnR5U2VhcmNoO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFdpZGdldChuYW1lOiBzdHJpbmcsIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gIGlmIChuYW1lID09PSAnU2VhcmNoJyAmJiAhcHJvcGVydHlTZWFyY2gpIHtcbiAgICBwcm9wZXJ0eVNlYXJjaCA9IG5ldyBQcm9wZXJ0eVNlYXJjaCh7XG4gICAgICB2aWV3OiB2aWV3LFxuICAgICAgY29uZG9zVGFibGU6IGNvbmRvc1RhYmxlLFxuICAgICAgYWRkcmVzc1RhYmxlOiBhZGRyZXNzVGFibGUsXG4gICAgICBwcm9wZXJ0eUxheWVyOiBmZWF0dXJlTGF5ZXIsXG4gICAgICBjb250YWluZXI6ICdzaWRlRGl2J1xuICAgIH0pO1xuICAgIGNyZWF0ZVRlbXBsYXRlKHZpZXcpO1xuICB9XG4gIGlmIChuYW1lID09PSAnTGF5ZXJzJyAmJiAhbGF5ZXJzKSB7XG4gICAgbGF5ZXJzID0gbmV3IExheWVycyh7IHZpZXcsIGNvbnRhaW5lcjogJ2xheWVyRGl2JyB9KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ0xlZ2VuZCcgJiYgIWxlZ2VuZCkge1xuICAgIGxlZ2VuZCA9IG5ldyBMZWdlbmQoeyB2aWV3LCBjb250YWluZXI6ICdsZWdlbmREaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnUHJpbnQnICYmICFwcmludFdpZGdldCkge1xuICAgIHByaW50V2lkZ2V0ID0gbmV3IFByaW50KHtcbiAgICAgIHZpZXcsXG4gICAgICBjb250YWluZXI6ICdwcmludERpdicsXG4gICAgICBwcmludFNlcnZpY2VVcmw6XG4gICAgICAgICdodHRwczovL3V0aWxpdHkuYXJjZ2lzb25saW5lLmNvbS9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9VdGlsaXRpZXMvUHJpbnRpbmdUb29scy9HUFNlcnZlci9FeHBvcnQlMjBXZWIlMjBNYXAlMjBUYXNrJ1xuICAgIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnQm9va21hcmtzJyAmJiAhYm9va21hcmtzKSB7XG4gICAgYm9va21hcmtzID0gbmV3IEJvb2ttYXJrcyh7IHZpZXcsIGNvbnRhaW5lcjogJ2Jvb2ttYXJrRGl2JywgZWRpdGluZ0VuYWJsZWQ6IHRydWUgfSk7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gJ0Jhc2VtYXBzJyAmJiAhYmFzZW1hcHMpIHtcbiAgICBiYXNlbWFwcyA9IG5ldyBCYXNlTWFwcyh7IHZpZXcsIGNvbnRhaW5lcjogJ2Jhc2VtYXBEaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnTG9jYXRpb24nICYmICFsb2NhdGlvblNlYXJjaCkge1xuICAgIGxvY2F0aW9uU2VhcmNoID0gbmV3IExvY2F0aW9uU2VhcmNoKHsgdmlldywgY29udGFpbmVyOiAnbG9jYXRpb25EaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnTWVhc3VyZScgJiYgIW1lYXN1cmVtZW50KSB7XG4gICAgbWVhc3VyZW1lbnQgPSBuZXcgTWVhc3VyZSh7IHZpZXcsIGNvbnRhaW5lcjogJ21lYXN1cmVEaXYnIH0pO1xuICAgIG1lYXN1cmVtZW50LnBvc3RJbml0aWFsaXplID0gKCkgPT4ge1xuICAgICAgaWYgKGRyYXdXaWRnZXQpIHtcbiAgICAgICAgZHJhd1dpZGdldC5tZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50LnZpZXdNb2RlbC5tZWFzdXJlbWVudDtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxlY3QpIHtcbiAgICAgICAgc2VsZWN0Lm1lYXN1cmVtZW50ID0gbWVhc3VyZW1lbnQudmlld01vZGVsLm1lYXN1cmVtZW50O1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdEcmF3JyAmJiAhZHJhd1dpZGdldCkge1xuICAgIGRyYXdXaWRnZXQgPSBuZXcgRHJhdyh7IHZpZXcsIGNvbnRhaW5lcjogJ2RyYXdEaXYnIH0pO1xuICAgIGlmIChtZWFzdXJlbWVudCkge1xuICAgICAgZHJhd1dpZGdldC5tZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50LnZpZXdNb2RlbC5tZWFzdXJlbWVudDtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpbml0V2lkZ2V0cyh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAvL2NvbnN0IGxheWVyU2VsZWN0ID0gbmV3IExheWVyU2VsZWN0KHsgdmlldzogdmlldywgY29udGFpbmVyOiAnbGF5ZXJTZWxlY3RDb250ZW50JyB9KTtcblxuICBjb25zdCBjb29yZGluYXRlczogZXNyaS5Db29yZGluYXRlQ29udmVyc2lvbiA9IG5ldyBDb29yZGluYXRlQ29udmVyc2lvbih7IHZpZXcgfSk7XG4gIGNvbnN0IGNvb3JkaW5hdGVzRXhwYW5kOiBFeHBhbmQgPSBuZXcgRXhwYW5kKHtcbiAgICBjb250ZW50OiBjb29yZGluYXRlcyxcbiAgICBtb2RlOiAnZmxvYXRpbmcnLFxuICAgIGV4cGFuZEljb25DbGFzczogJ2VzcmktaWNvbi1wYW4yJ1xuICB9KTtcbiAgdmlldy51aS5hZGQoY29vcmRpbmF0ZXNFeHBhbmQsICdib3R0b20tbGVmdCcpO1xuXG4gIHZpZXcudWkuYWRkKG5ldyBDb21wYXNzKHsgdmlldzogdmlldyB9KSwgJ3RvcC1sZWZ0Jyk7XG4gIGNvbnN0IGxvY2F0ZTogTG9jYXRlID0gbmV3IExvY2F0ZSh7IHZpZXc6IHZpZXcgfSk7XG4gIGxvY2F0ZS5vbignbG9jYXRlLWVycm9yJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gIH0pO1xuICB2aWV3LnVpLmFkZChsb2NhdGUsICd0b3AtbGVmdCcpO1xuXG4gIGNvbnN0IHRyYWNrOiBUcmFjayA9IG5ldyBUcmFjayh7IHZpZXc6IHZpZXcgfSk7XG4gIHRyYWNrLm9uKCd0cmFjay1lcnJvcicsIChldmVudDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9KTtcbiAgdmlldy51aS5hZGQodHJhY2ssICd0b3AtbGVmdCcpO1xuICB2aWV3LnVpLmFkZChuZXcgRnVsbHNjcmVlbih7IHZpZXcgfSksICd0b3AtbGVmdCcpO1xuICB2aWV3LnVpLmFkZChuZXcgQ2xlYXIoeyB2aWV3IH0pLCAndG9wLWxlZnQnKTtcblxuICBjb25zdCBvdmVydmlld01hcCA9IG5ldyBPdmVydmlld01hcCh7IHZpZXcgfSk7XG4gIGNvbnN0IG92ZXJ2aWV3RXhwYW5kOiBFeHBhbmQgPSBuZXcgRXhwYW5kKHtcbiAgICBjb250ZW50OiBvdmVydmlld01hcCxcbiAgICBtb2RlOiAnZmxvYXRpbmcnLFxuICAgIGV4cGFuZEljb25DbGFzczogJ2VzcmktaWNvbi1vdmVydmlldy1hcnJvdy10b3AtbGVmdCdcbiAgfSk7XG4gIG92ZXJ2aWV3RXhwYW5kLndhdGNoKCdleHBhbmRlZCcsIGV4cGFuZGVkID0+IHtcbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIG92ZXJ2aWV3TWFwLnZpZXdNb2RlbC5vdmVydmlld01hcFZpZXcuZ29Ubyh7XG4gICAgICAgIGNlbnRlcjogdmlldy5jZW50ZXIsXG4gICAgICAgIHNjYWxlOlxuICAgICAgICAgIHZpZXcuc2NhbGUgKlxuICAgICAgICAgIDIgKlxuICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgdmlldy53aWR0aCAvIG92ZXJ2aWV3TWFwLnZpZXdNb2RlbC5vdmVydmlld01hcFZpZXcud2lkdGgsXG4gICAgICAgICAgICB2aWV3LmhlaWdodCAvIG92ZXJ2aWV3TWFwLnZpZXdNb2RlbC5vdmVydmlld01hcFZpZXcuaGVpZ2h0XG4gICAgICAgICAgKVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgdmlldy51aS5hZGQob3ZlcnZpZXdFeHBhbmQsICdib3R0b20tcmlnaHQnKTtcblxuICBzZWxlY3QuY29udGFpbmVyID0gJ3NlbGVjdERpdic7XG4gIHNlbGVjdC52aWV3ID0gdmlldztcbiAgc2VsZWN0LmxheWVyID0gZmVhdHVyZUxheWVyO1xuXG4gIHJldHVybiB2aWV3O1xufVxuIiwiZXhwb3J0IGNvbnN0IGluaXRQYW5lbEhlYWRlcnMgPSAoKSA9PiB7XG4gIC8vb3ZlcnJpZGUgQ1NTIGZvciBjYWxjaXRlIHBhbmVsIGhlYWRlclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsIGRpdicpLmZvckVhY2gocGFuZWwgPT4ge1xuICAgIGlmIChwYW5lbC5zbG90ID09PSAnaGVhZGVyLWFjdGlvbnMtZW5kJykge1xuICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93OycpO1xuICAgIH1cbiAgfSk7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKChldmVudD8udGFyZ2V0IGFzIGFueSk/LmlubmVyV2lkdGggPj0gNTAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKCFpdGVtLmhhc0F0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgICBpZiAoaXRlbS5xdWVyeVNlbGVjdG9yKCcubWF4aW1pemUnKT8uZ2V0QXR0cmlidXRlKCdpY29uJykgPT09ICdtaW5pbWl6ZScpIHtcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDBweCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiAwcHgnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUGFuZWxEaXNtaXNzZWRDaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogMHB4Jyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIC8vaGFuZGxlIHBhbmVsIG1heGltaXplL21pbmltaXplXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXhpbWl6ZScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ2xlZnQtZWRnZScpIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAncmlnaHQtZWRnZScpO1xuICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ21heGltaXplZCcpOyAvLy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gOTZweCknKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbC5sZWZ0Om5vdCguaGlkZGVuKScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGlzbWlzc2VkJywgJycpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1hY3Rpb25bc2lkZT1cImxlZnRcIl1bYWN0aXZlXScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaWNvbicpID09PSAncmlnaHQtZWRnZScpIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAnbGVmdC1lZGdlJyk7XG4gICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnbWF4aW1pemVkJyk7XG4gICAgICAgIC8vaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDozNTBweCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0UGFuZWxzID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBjb25zdCBpOiBIVE1MRWxlbWVudCA9IGl0ZW0/LnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChpKSB7XG4gICAgICBpLmlubmVySFRNTCArPVxuICAgICAgICAnPHN0eWxlPi5jb250ZW50LWNvbnRhaW5lciB7IGhlaWdodDogMTAwJTsgfSAuY29udGFpbmVyOmZvY3VzLCAuY29udGVudC1jb250YWluZXI6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9PC9zdHlsZT4nO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiBmYWxzZSwgc3VidHJlZTogZmFsc2UgfTtcbiAgICBjb25zdCBjYWxsYmFjayA9IChtdXRhdGlvbnNMaXN0OiBhbnlbXSkgPT4ge1xuICAgICAgLy8gVXNlIHRyYWRpdGlvbmFsICdmb3IgbG9vcHMnIGZvciBJRSAxMVxuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG4gICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2Rpc21pc3NlZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWN0aW9uLWJhciBjYWxjaXRlLWFjdGlvbicpO1xuXG4gICAgICAgICAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhY3Rpb24udGV4dCA9PT0gKG11dGF0aW9uLnRhcmdldCBhcyBhbnkpLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKChtdXRhdGlvbi50YXJnZXQgYXMgYW55KS5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYWN0aW9uLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNTAwKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgobXV0YXRpb24udGFyZ2V0IGFzIGFueSkuaGFzQXR0cmlidXRlKCdkaXNtaXNzZWQnKSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKG11dGF0aW9uLnRhcmdldCBhcyBhbnkpLnRpdGxlLCAnZGlzbWlzc2VkJyk7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0RpdicpPy5jbGFzc0xpc3QucmVtb3ZlKCdiZWxvdycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygobXV0YXRpb24udGFyZ2V0IGFzIGFueSkudGl0bGUsICdub3QgZGlzbWlzc2VkJyk7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0RpdicpPy5jbGFzc0xpc3QuYWRkKCdiZWxvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGl0ZW0sIGNvbmZpZyk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCB7IGluaXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXRzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5BY3Rpb25CYXIuQWN0aW9uQmFyVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbkJhclZpZXdNb2RlbCBleHRlbmRzIGRlY2xhcmVkKEFjY2Vzc29yKSB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBzaWRlOiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHJlYWR5ID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIGFjdGlvbnM6IE5vZGVMaXN0T2Y8RWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICdzaWRlJywgdGhpcy5zaWRlU2V0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVvcmRlclBhbmVscyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy52aWV3KSB7XG4gICAgICAvL3RoaXMuYWN0aW9ucy5mb3JFYWNoKCgpID0+IHtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsLmxlZnQnKS5mb3JFYWNoKChwYW5lbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMDApIHtcbiAgICAgICAgICBwYW5lbC5wYXJlbnRFbGVtZW50Py5pbnNlcnRCZWZvcmUocGFuZWwsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3RGl2JykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhbmVsLnBhcmVudEVsZW1lbnQ/Lmluc2VydEJlZm9yZShwYW5lbCwgZG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3RGl2Jyk/Lm5leHRFbGVtZW50U2libGluZyBhcyBhbnkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vfSk7XG4gICAgfVxuICB9O1xuXG4gIGluaXRBY3Rpb25zID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uczogTm9kZUxpc3RPZjxhbnk+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1hY3Rpb24tYmFyIGNhbGNpdGUtYWN0aW9uJyk7XG4gICAgICBpZiAoYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcblxuICAgICAgICB0aGlzLmFjdGlvbnM/LmZvckVhY2goKGFjdGlvbjogRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGFjdGlvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUFjdGlvbihlLnRhcmdldCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaW5pdFdpZGdldChlLnRhcmdldC50ZXh0LCB0aGlzLnZpZXcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaCgoYTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhLnRleHQgIT0gZS50YXJnZXQudGV4dCkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDAwKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYS5nZXRBdHRyaWJ1dGUoJ3NpZGUnKSA9PT0gYWN0aW9uLmdldEF0dHJpYnV0ZSgnc2lkZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGEucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYS5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhY3Rpb24uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDUwMCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLWFjdGlvblt0ZXh0PVwiU2VhcmNoXCInKT8uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIHRvZ2dsZUFjdGlvbiA9IChhY3Rpb246IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMDApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wYW5lbC4ke2FjdGlvbi5nZXRBdHRyaWJ1dGUoJ3NpZGUnKSBhcyBzdHJpbmd9YCkuZm9yRWFjaCgocGFuZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAoYWN0aW9uIGFzIGFueSkudGV4dCkge1xuICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhbmVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgICAgICAgaWYgKCFwYW5lbC5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA1MDApIHtcbiAgICAgICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAnTWVhc3VyZScpIHtcbiAgICAgICAgICAgICAgLy9tZWFzdXJlbWVudC5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy9tZWFzdXJlbWVudC5tZWFzdXJlT3BlbmVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsJykuZm9yRWFjaCgocGFuZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAoYWN0aW9uIGFzIGFueSkudGV4dCkge1xuICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHBhbmVsKTtcbiAgICAgICAgICBwYW5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHBhbmVsKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhwYW5lbC50aXRsZSk7XG4gICAgICAgICAgaWYgKCFwYW5lbC5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA1MDApIHtcbiAgICAgICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAnTWVhc3VyZScpIHtcbiAgICAgICAgICAgICAgLy9tZWFzdXJlbWVudC5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy9tZWFzdXJlbWVudC5tZWFzdXJlT3BlbmVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGVuYWJsZUFjdGlvbmJhciA9ICgpID0+IHtcbiAgICB0aGlzLnJlb3JkZXJQYW5lbHMoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1hY3Rpb24tYmFyIGNhbGNpdGUtYWN0aW9uJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9KTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICB9O1xuICBzaWRlU2V0KHNpZGU6IHN0cmluZykge1xuICAgIGlmIChzaWRlID09PSAncmlnaHQnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9vbEdyb3VwJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICBpZiAoc2lkZSA9PT0gJ2xlZnQnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoR3JvdXAnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICAgIGNvbnN0IGFjdGlvbnM6IE5vZGVMaXN0T2Y8YW55PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWN0aW9uLWJhciBjYWxjaXRlLWFjdGlvbicpO1xuICAgIGlmIChhY3Rpb25zLmxlbmd0aCkge1xuICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICB9XG4gICAgLy8gdGhpcy5hY3Rpb25zPy5mb3JFYWNoKChhY3Rpb246IEVsZW1lbnQpID0+IHtcbiAgICAvLyAgIGFjdGlvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XG4gICAgLy9cblxuICAgIC8vICAgICB0aGlzLnRvZ2dsZUFjdGlvbihlLnRhcmdldCk7XG4gICAgLy8gICAgIGluaXRXaWRnZXQoZS50YXJnZXQudGV4dCwgdGhpcy52aWV3KTtcbiAgICAvLyAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goKGE6IGFueSkgPT4ge1xuICAgIC8vICAgICAgIGlmIChhLnRleHQgIT0gZS50YXJnZXQudGV4dCkge1xuICAgIC8vICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMDApIHtcbiAgICAvLyAgICAgICAgICAgaWYgKGEuZ2V0QXR0cmlidXRlKCdzaWRlJykgPT09IGFjdGlvbi5nZXRBdHRyaWJ1dGUoJ3NpZGUnKSkge1xuICAgIC8vICAgICAgICAgICAgIGEucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIGFjdGlvbi5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0pO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgICBpbml0V2lkZ2V0KCdTZWFyY2gnLCB0aGlzLnZpZXcpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMDApIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdEFjdGlvbmJhcicpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0QWN0aW9uYmFyJylcbiAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignI3Rvb2xHcm91cCcpXG4gICAgICAgICAgICA/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI2FjdGlvbkJhcicpXG4gICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJyN0b29sR3JvdXAnKVxuICAgICAgICAgICAgPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdEFjdGlvbmJhcicpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNhY3Rpb25CYXInKVxuICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCcjdG9vbEdyb3VwJylcbiAgICAgICAgICAgID8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsLmxlZnQnKS5mb3JFYWNoKHBhbmVsID0+IHtcbiAgICAgICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnZGlzbWlzc2VkJywgJycpO1xuICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW9yZGVyUGFuZWxzKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuXG5pbXBvcnQgQWN0aW9uQmFyVmlld01vZGVsIGZyb20gJy4vQWN0aW9uQmFyL0FjdGlvbkJhclZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQmFyUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIHNpZGU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgYWN0aW9uYmFyLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkFjdGlvbkJhcicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25CYXIgZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuc2lkZScpXG4gIHNpZGU6IHN0cmluZztcbiAgQHByb3BlcnR5KClcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5yZWFkeScpXG4gIHJlYWR5OiBib29sZWFuO1xuICBAYWxpYXNPZigndmlld01vZGVsLmFjdGlvbnMnKVxuICBhY3Rpb25zOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xuICBAYWxpYXNPZigndmlld01vZGVsLnRvZ2dsZUFjdGlvbicpXG4gIHRvZ2dsZUFjdGlvbjogRnVuY3Rpb247XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZW5hYmxlQWN0aW9uYmFyJylcbiAgZW5hYmxlQWN0aW9uYmFyOiBGdW5jdGlvbjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5pbml0QWN0aW9ucycpXG4gIGluaXRBY3Rpb25zOiBGdW5jdGlvbjtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBBY3Rpb25CYXJWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IEFjdGlvbkJhclZpZXdNb2RlbCA9IG5ldyBBY3Rpb25CYXJWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogQWN0aW9uQmFyUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG4gIHNlYXJjaEdyb3VwQ3JlYXRlZCA9IChpdGVtOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmICh0aGlzLnNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmFjdGlvbnMpIHtcbiAgICAgIHRoaXMuaW5pdEFjdGlvbnMoKTtcbiAgICB9XG4gIH07XG4gIHRvb2xHcm91cENyZWF0ZWQgPSAoaXRlbTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAodGhpcy5zaWRlID09PSAncmlnaHQnKSB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAwMCkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnRBY3Rpb25iYXInKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5hY3Rpb25zKSB7XG4gICAgICB0aGlzLmluaXRBY3Rpb25zKCk7XG4gICAgfVxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGNhbGNpdGUtYWN0aW9uLWJhciBleHBhbmQ9XCJmYWxzZVwiPlxuICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbi1ncm91cCBpZD1cInNlYXJjaEdyb3VwXCIgYWZ0ZXJDcmVhdGU9e3RoaXMuc2VhcmNoR3JvdXBDcmVhdGVkfT5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiU2VhcmNoXCIgaWNvbj1cInNlYXJjaFwiIHNpZGU9XCJyaWdodFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIkxvY2F0aW9uXCIgaWNvbj1cInBpblwiIHNpZGU9XCJyaWdodFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIkxheWVyc1wiIGljb249XCJsYXllcnNcIiBzaWRlPVwicmlnaHRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJMZWdlbmRcIiBpY29uPVwibGVnZW5kXCIgc2lkZT1cInJpZ2h0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiQmFzZW1hcHNcIiBpY29uPVwiYmFzZW1hcFwiIHNpZGU9XCJyaWdodFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgPC9jYWxjaXRlLWFjdGlvbi1ncm91cD5cblxuICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbi1ncm91cCBpZD1cInRvb2xHcm91cFwiIGFmdGVyQ3JlYXRlPXt0aGlzLnRvb2xHcm91cENyZWF0ZWR9PlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJTZWxlY3RcIiBpY29uPVwic2VsZWN0aW9uXCIgc2lkZT1cImxlZnRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJNZWFzdXJlXCIgaWNvbj1cIm1lYXN1cmVcIiBzaWRlPVwibGVmdFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIkRyYXdcIiBpY29uPVwicGVuY2lsLW1hcmtcIiBzaWRlPVwibGVmdFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIkJvb2ttYXJrc1wiIGljb249XCJib29rbWFya1wiIHNpZGU9XCJsZWZ0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiUHJpbnRcIiBpY29uPVwicHJpbnRcIiBzaWRlPVwibGVmdFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgPC9jYWxjaXRlLWFjdGlvbi1ncm91cD5cbiAgICAgICAgPC9jYWxjaXRlLWFjdGlvbi1iYXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgJy4vY3NzL21haW4uY3NzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4vZGF0YS9hcHAnO1xuaW1wb3J0IHsgaW5pdFRpcHMgfSBmcm9tICcuL3RpcHMnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0IH0gZnJvbSAnLi9hbGVydCc7XG4vL2ltcG9ydCB7IHRvZ2dsZUFjdGlvbiwgZW5hYmxlQWN0aW9uYmFyIH0gZnJvbSAnLi9hY3Rpb25iYXInO1xuaW1wb3J0IE1hcFZpZXcgZnJvbSAnZXNyaS92aWV3cy9NYXBWaWV3JztcblxuaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG4vLyB3aWRnZXQgdXRpbHNcbmltcG9ydCB7IGluaXRXaWRnZXRzLCBzZWxlY3QsIHByb3BlcnR5U2VhcmNoLCBsYXllcnMgfSBmcm9tICcuL3dpZGdldHMnO1xuaW1wb3J0IHsgaW5pdFBhbmVscywgaW5pdFBhbmVsSGVhZGVycyB9IGZyb20gJy4vcGFuZWxzJztcbmltcG9ydCB7IGluaXRNZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCBBY3Rpb25CYXIgZnJvbSAnLi93aWRnZXRzL0FjdGlvbkJhcic7XG5pbXBvcnQgd2F0Y2hVdGlscyBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5jb25zdCBhY3Rpb25CYXIgPSBuZXcgQWN0aW9uQmFyKHsgc2lkZTogJ3JpZ2h0JywgY29udGFpbmVyOiAnYWN0aW9uQmFyJyB9KTtcblxuY29uc3QgbGVmdEFjdGlvbkJhciA9IG5ldyBBY3Rpb25CYXIoeyBzaWRlOiAnbGVmdCcsIGNvbnRhaW5lcjogJ2xlZnRBY3Rpb25iYXInIH0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGxldCB2aWV3OiBNYXBWaWV3O1xuXG5mdW5jdGlvbiBjaGVja0xvY2FsU3RvcmFnZSh2aWV3OiBNYXBWaWV3KSB7XG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzJykpIHtcbiAgICBjb25zdCB3ZWJtYXA6IFdlYk1hcCA9IFdlYk1hcC5mcm9tSlNPTihKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hcHMnKSBhcyBzdHJpbmcpKTtcbiAgICB3ZWJtYXAubG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgdmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBjb25zdCBseXIgPSB3ZWJtYXAuYWxsTGF5ZXJzLmZpbmQobCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGxheWVyLmlkID09PSBsLmlkO1xuICAgICAgICB9KTtcbiAgICAgICAgbGF5ZXIudmlzaWJsZSA9IGx5cj8udmlzaWJsZTtcbiAgICAgICAgbGF5ZXIub3BhY2l0eSA9IGx5cj8ub3BhY2l0eTtcbiAgICAgIH0pO1xuICAgICAgdmlldy5tYXAuYmFzZW1hcCA9IHdlYm1hcC5iYXNlbWFwO1xuICAgICAgdmlldy5leHRlbnQgPSB3ZWJtYXAuaW5pdGlhbFZpZXdQcm9wZXJ0aWVzLnZpZXdwb2ludC50YXJnZXRHZW9tZXRyeS5leHRlbnQ7XG4gICAgfSk7XG4gIH1cbn1cbi8vaGFuZGxlIHdoZW4gdmlldyBpcyByZWFkeVxuXG4vL3NhdmUgd2ViIG1hcCB0byBsb2NhbCBzdG9yYWdlIG9uIHBhZ2VoaWRlXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCAoKSA9PiB7XG4gIHZpZXcubWFwLnJlbW92ZU1hbnkoXG4gICAgdmlldy5tYXAuYWxsTGF5ZXJzXG4gICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIGxheWVyLnR5cGUgPT09ICdncm91cCcgJiYgIShsYXllciBhcyBfX2VzcmkuR3JvdXBMYXllcikubGF5ZXJzLmxlbmd0aDtcbiAgICAgIH0pXG4gICAgICAudG9BcnJheSgpXG4gICk7XG4gIGNvbnN0IGpzb24gPSAodmlldy5tYXAgYXMgYW55KS50b0pTT04oKTtcbiAganNvbi5pbml0aWFsU3RhdGUudmlld3BvaW50LnRhcmdldEdlb21ldHJ5ID0gdmlldy5leHRlbnQ7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hcHMnLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XG59KTtcblxuLy9zaG93IGZpcnN0IHBhbmVsIG9uIGRldmljZXMgd2lkZXIgdGhhbiA1MDBweCBieSBkZWZhdWx0XG5pZiAod2luZG93LmlubmVyV2lkdGggPj0gNTAwKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtcGFuZWwucmlnaHQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtcGFuZWwucmlnaHQnKT8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbn1cblxuLy9tb2RpZnkgRE9NIGFmdGVyIG1hcCB2aWV3IGxvYWRzXG4vL3ZpZXcud2hlbigoKSA9PiB7XG4vL2FjdGlvbkJhci5pbml0QWN0aW9ucygpO1xuXG5pbml0UGFuZWxzKCk7XG4vL2FjdGlvbkJhci52aWV3ID0gdmlldztcbi8vfSk7XG53YXRjaFV0aWxzLndoZW5EZWZpbmVkT25jZShhY3Rpb25CYXIsICdhY3Rpb25zJywgYWN0aW9ucyA9PiB7XG4gIGlmIChhY3Rpb25zLmxlbmd0aCAmJiAhdmlldykge1xuICAgIHZpZXcgPSBuZXcgTWFwVmlldyh7XG4gICAgICBjb250YWluZXI6ICd2aWV3RGl2JyxcbiAgICAgIG1hcFxuICAgIH0pO1xuXG4gICAgdmlldy53aGVuKCgpID0+IHtcbiAgICAgIGFjdGlvbkJhci52aWV3ID0gdmlldztcbiAgICAgIGxlZnRBY3Rpb25CYXIudmlldyA9IHZpZXc7XG4gICAgICBhY3Rpb25CYXIuZW5hYmxlQWN0aW9uYmFyKCk7XG5cbiAgICAgIGNoZWNrTG9jYWxTdG9yYWdlKHZpZXcpO1xuICAgICAgdmlldy5tYXAud2F0Y2goJ2xheWVycycsICgpID0+IHtcbiAgICAgICAgdmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgIGlmIChsYXllci50eXBlICE9ICdncm91cCcpIHtcbiAgICAgICAgICAgIGxheWVyLndhdGNoKCd2aXNpYmxlJywgdmlzaWJsZSA9PiB7XG4gICAgICAgICAgICAgIGxheWVycz8ubGF5ZXJMaXN0Py5vcGVyYXRpb25hbEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBpdGVtLmNoaWxkcmVuLmZpbmQoaSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpLmxheWVyID09PSBsYXllcjtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhbmVsLm9wZW4gPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGF5ZXIud2F0Y2goJ3Zpc2libGUnLCB2aXNpYmxlID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBsYXllcnM/LmxheWVyTGlzdC5vcGVyYXRpb25hbEl0ZW1zLmZpbmQoaSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkubGF5ZXIgPT09IGxheWVyO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAub3BlbiA9IHZpc2libGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcHJvcGVydHlMYXllciA9IG1hcC5hbGxMYXllcnMuZmluZChsYXllciA9PiB7XG4gICAgICAgIHJldHVybiBsYXllci50aXRsZSA9PT0gJ1Byb3BlcnR5JyAmJiBsYXllci50eXBlID09PSAnZmVhdHVyZSc7XG4gICAgICB9KTtcbiAgICAgIHZpZXcub24oJ2hvbGQnLCBlID0+IHtcbiAgICAgICAgcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBlLm1hcFBvaW50O1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvL3RvZ2dsZUFjdGlvbignU2VhcmNoJyk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSk7XG4gICAgICB2aWV3XG4gICAgICAgIC53aGVuTGF5ZXJWaWV3KHByb3BlcnR5TGF5ZXIpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwTG9hZGVyJyk/LnRvZ2dsZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgcHJvcGVydHlTZWFyY2gucHJvcGVydHlMYXllciA9IHByb3BlcnR5TGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgICAgICAgICAvL3NlYXJjaCBieSBnZW9tZXRyeSBhZnRlciBza2V0Y2ggY3JlYXRpb24gaW4gc2VsZWN0IHdpZGdldFxuICAgICAgICAgIHNlbGVjdC52aWV3TW9kZWwud2F0Y2goJ2dlb21ldHJ5JywgZ2VvbWV0cnkgPT4ge1xuICAgICAgICAgICAgcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICAgICAgICAgIGFjdGlvbkJhci5hY3Rpb25zLmZvckVhY2goKGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhY3Rpb24udGV4dCA9PT0gJ1NlYXJjaCcpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25CYXIudG9nZ2xlQWN0aW9uKGFjdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbjogYW55KSA9PiB7XG4gICAgICAgICAgLy9vbiBlcnJvciBsb2FkaW5nIHByb3BlcnR5IGxheWVyLCBkaXNwbGF5IGFsZXJ0XG4gICAgICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcbiAgICAgICAgICBzaG93QWxlcnQoJ1Byb3BlcnR5IGxheWVyIGRpZCBub3QgbG9hZC4gUGxlYXNlIGNvbnRhY3QgaU1BUFMgSGVscCBEZXNrLicsICdyZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmlldy53aGVuKGluaXRXaWRnZXRzKTtcbiAgICB2aWV3LndoZW4oaW5pdFRpcHMpO1xuICB9XG59KTtcblxuaW5pdFBhbmVsSGVhZGVycygpO1xuaW5pdE1lbnUoKTtcbiJdLCJuYW1lcyI6WyJ3aGVuRGVmaW5lZE9uY2UiLCJ3aGVuRGVmaW5lZCIsInByb3BlcnR5Iiwic3ViY2xhc3MiLCJ0c3giLCJhbGlhc09mIiwicmVuZGVyYWJsZSIsIkNTUyIsIndhdGNoVXRpbHMiLCJkZWNsYXJlZCIsInZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFDTyxJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0VBQzlCLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxrQ0FBa0MsRUFBRSxFQUFFLENBQUMsQ0FBQzs7O0VDRnRFLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQztFQUMzQixJQUFNLFFBQVEsR0FBRyxVQUFDLEtBQWE7O01BQzdCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1VBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ25DLENBQUMsQ0FBQztNQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1VBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ25DLENBQUMsQ0FBQztNQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7VUFDM0QsSUFBSSxDQUFDLFlB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
