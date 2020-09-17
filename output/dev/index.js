
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
define(['exports', 'esri/WebMap', 'esri/views/MapView', 'esri/widgets/Legend', 'esri/widgets/Print', 'esri/widgets/Bookmarks', 'esri/core/accessorSupport/decorators', 'esri/widgets/support/widget', 'esri/widgets/Widget', 'esri/core/Accessor', 'esri/widgets/Search', 'esri/widgets/FeatureTable', 'esri/layers/FeatureLayer', 'esri/layers/GraphicsLayer', 'esri/widgets/Feature', 'esri/Graphic', 'esri/widgets/Search/LayerSearchSource', 'esri/widgets/FeatureTable/FieldColumnConfig', 'esri/core/watchUtils', 'esri/widgets/Search/SearchSource', 'esri/tasks/support/FeatureSet', 'esri/widgets/CoordinateConversion', 'esri/widgets/Expand', 'esri/widgets/Measurement', 'esri/widgets/Compass', 'esri/widgets/Locate', 'esri/widgets/Track', 'esri/widgets/Fullscreen', 'esri/PopupTemplate', 'esri/popup/content/CustomContent', 'esri/tasks/Locator', 'esri/geometry/support/geodesicUtils', 'esri/Color', 'esri/widgets/Sketch', 'esri/symbols/TextSymbol', 'esri/geometry/geometryEngine', 'esri/widgets/BasemapGallery', 'esri/widgets/LayerList', 'esri/Map'], function (exports, WebMap, MapView, Legend, Print, Bookmarks, decorators, widget, Widget, Accessor, Search, FeatureTable, FeatureLayer, GraphicsLayer, Feature, Graphic, LayerSearchSource, FieldColumnConfig, watchUtils, SearchSource, FeatureSet, CoordinateConversion, Expand, Measurement, Compass, Locate, Track, Fullscreen, PopupTemplate, CustomContent, Locator, geodesicUtils, Color, Sketch, TextSymbol, geometryEngine, BaseMapGallery, LayerList, Map) { 'use strict';

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
  LayerSearchSource = LayerSearchSource && Object.prototype.hasOwnProperty.call(LayerSearchSource, 'default') ? LayerSearchSource['default'] : LayerSearchSource;
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
  map = new WebMap({ portalItem: { id: '46f2598e43674678a4390f860a3cec1c' } });
  //# sourceMappingURL=app.js.map

  var theme = 'light';
  var setTheme = function (theme) {
      var _a, _b, _c;
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
      setTimeout(function () {
          document.querySelectorAll('calcite-action-bar').forEach(function (item) {
              item.setAttribute('theme', theme);
          });
      });
      (_a = document.querySelector('#arrowPath')) === null || _a === void 0 ? void 0 : _a.setAttribute('stroke', theme === 'light' ? 'black' : 'white');
      document.querySelectorAll('link').forEach(function (link) {
          if (link.href.includes(theme === 'light' ? 'dark' : 'light')) {
              link.href = 'https://js.arcgis.com/4.16/esri/themes/' + theme + '/main.css';
          }
      });
      (_b = document
          .querySelector("calcite-dropdown-item[value=\"" + (theme === 'light' ? 'dark' : 'light') + "\"]")) === null || _b === void 0 ? void 0 : _b.setAttribute('active', '');
      (_c = document
          .querySelector("calcite-dropdown-item[value=\"" + (theme === 'light' ? 'light' : 'dark') + "\"]")) === null || _c === void 0 ? void 0 : _c.removeAttribute('active');
  };
  var initMenu = function () {
      var _a;
      (_a = document.querySelector('calcite-dropdown')) === null || _a === void 0 ? void 0 : _a.addEventListener('calciteDropdownSelect', function (e) {
          e.target.querySelectorAll('calcite-dropdown-item').forEach(function (element) {
              if (element.hasAttribute('active')) {
                  var value = element.getAttribute('value');
                  theme = value;
                  setTheme(theme);
                  window.localStorage.setItem('theme', theme);
              }
          });
      });
      if (window.localStorage.getItem('theme')) {
          var themeName_1 = window.localStorage.getItem('theme');
          setTheme(themeName_1);
          themeName_1 = themeName_1 === 'light' ? 'dark' : 'light';
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
                  return r.name === 'CONDO_PROPERTY';
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
              debugger;
              if (!_this.searchWidget.viewModel.selectedSuggestion) {
                  var oids_1 = [];
                  var where_1 = '';
                  if (!_this.searchWidget.activeSource) {
                      where_1 = "OWNER like '" + event.searchTerm.toUpperCase() + "%' OR REID like '" + event.searchTerm.toUpperCase() + "%' OR PIN_NUM like '" + event.searchTerm.toUpperCase() + "%'";
                  }
                  else {
                      if ((_a = _this.searchWidget.activeSource) === null || _a === void 0 ? void 0 : _a.searchFields.includes('OWNER')) {
                          where_1 = "OWNER like '%" + event.searchTerm.toUpperCase() + "%'";
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
                              return r.name === 'ADDRESSES_CONDO';
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
                          var relationship = layer.relationships.find(function (r) {
                              return r.name === 'ADDRESSES_CONDO';
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
                  return results.features
                      .filter(function (feature) {
                      return !outFields.includes('ADDR_LIST') || feature.getAttribute('ADDR_LIST') === 'Yes';
                  })
                      .map(function (feature) {
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
                  return r.name === 'PROPERTY_CONDO';
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
              return r.name === 'CONDO_PHOTOS';
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
                              sourceURL: "http://services.wakegov.com/realestate/photos/mvideo/" + feature.getAttribute('IMAGEDIR') + "/" + feature.getAttribute('IMAGENAME')
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
      PropertySearchViewModel.prototype.initSearch = function (condosTable) {
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
                          return _this.getSuggestions(params, 'Site Address', _this.addressTable, ['ADDRESS', 'ADDR_LIST'], ['ADDRESS'], ['ADDRESS', 'ADDRESS_NODIR'], true);
                      },
                      getResults: function (params) {
                          debugger;
                          return _this.addressTable
                              .queryFeatures({
                              where: "ADDRESS = '" + params.suggestResult.text.toUpperCase() + "'",
                              outFields: ['ADDRESS', 'REA_REID', 'OBJECTID']
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
                          debugger;
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
                  new LayerSearchSource({
                      layer: condosTable,
                      searchFields: ['PIN_NUM'],
                      displayField: 'PIN_NUM',
                      exactMatch: false,
                      outFields: ['PIN_NUM', 'REID', 'OBJECTID'],
                      name: 'PIN',
                      placeholder: 'example: 0712345678'
                  }),
                  new LayerSearchSource({
                      layer: condosTable,
                      searchFields: ['REID'],
                      displayField: 'REID',
                      exactMatch: false,
                      outFields: ['REID', 'OBJECTID'],
                      name: 'REID',
                      placeholder: 'example: 0123456'
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
                              outFields: ['STREET', 'REA_REID', 'OBJECTID']
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
                  widget.tsx("calcite-radio-group-item", { title: "distance", value: "distance", id: "tableItem", icon: "measure" }, "Distance"),
                  widget.tsx("calcite-radio-group-item", { title: "area", value: "area", id: "featureItem", icon: "measure-area" }, "Area"),
                  widget.tsx("calcite-radio-group-item", { title: "clear", value: "clear", id: "featureItem", icon: "trash" }, "Clear")),
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
  var serviceChanged = function (graphic, e) {
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
              var layers = exports.view.map.allLayers.filter(function (layer) {
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
              return r.name === 'CONDO_BOOKS';
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
                      serviceChanged(graphic, e);
                  });
                  return accordion;
              }
          })
      ]
  });
  var featureLayer = new FeatureLayer({
      portalItem: {
          id: 'e4664ff500574789b28e30977bd02f5a'
      },
      spatialReference: { wkid: 102100 }
  });
  var condosTable = new FeatureLayer({
      portalItem: {
          id: 'e4664ff500574789b28e30977bd02f5a'
      },
      layerId: 3,
      spatialReference: { wkid: 102100 },
      popupTemplate: popupTemplate
  });
  condosTable.load();
  var addressTable = new FeatureLayer({
      portalItem: {
          id: 'e4664ff500574789b28e30977bd02f5a'
      },
      layerId: 1,
      spatialReference: { wkid: 102100 }
  });
  addressTable.load();
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
          this.sketch = new Sketch({ view: this.view, container: 'sketchDiv', layer: this.graphics, creationMode: 'single' });
          this.sketch.viewModel.pointSymbol.color = Color.fromHex('#FF0000');
          this.sketch.viewModel.pointSymbol.outline.color = Color.fromHex('#FF0000');
          this.sketch.viewModel.polygonSymbol.color = new Color([[255, 0, 0, 0.5]]);
          this.sketch.viewModel.polygonSymbol.outline.color = Color.fromHex('#FF0000');
          this.sketch.viewModel.polylineSymbol.color = Color.fromHex('#FF0000');
          this.sketch.watch('activeTool', function (tool) {
              var _a;
              if (tool != undefined) {
                  (_a = measurement === null || measurement === void 0 ? void 0 : measurement.measurement) === null || _a === void 0 ? void 0 : _a.clear();
              }
          });
          this.sketch.on('create', function (e) {
              var _a, _b;
              if (e.state === 'start') {
                  (_a = measurement === null || measurement === void 0 ? void 0 : measurement.measurement) === null || _a === void 0 ? void 0 : _a.clear();
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
  //# sourceMappingURL=DrawViewModel.js.map

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
              creationMode: 'single'
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
                  (_a = measurement === null || measurement === void 0 ? void 0 : measurement.measurement) === null || _a === void 0 ? void 0 : _a.clear();
              }
          });
          this.sketch.watch('activeTool', function (tool) {
              var _a;
              if (tool != undefined) {
                  (_a = measurement === null || measurement === void 0 ? void 0 : measurement.measurement) === null || _a === void 0 ? void 0 : _a.clear();
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
      }
      if (name === 'Draw' && !drawWidget) {
          drawWidget = new Draw({ view: view, container: 'drawDiv' });
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
          if (panel.slot === 'header-trailing-content') {
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
                          item.setAttribute('style', 'min-width: 350px');
                      }
                  }
              });
          }
          else {
              document.querySelectorAll('calcite-panel').forEach(function (item) {
                  if (item.getAttribute('dismissed')) {
                      item.setAttribute('style', 'min-width: 0px');
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
                  item.setAttribute('style', 'min-width: 0px');
              });
          });
      });
      document.querySelectorAll('.maximize').forEach(function (item) {
          item.addEventListener('click', function () {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j;
              (_b = (_a = item.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.removeAttribute('dismissed');
              (_d = (_c = item.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.classList.remove('hidden');
              if (item.getAttribute('icon') === 'maximize') {
                  item.setAttribute('icon', 'minimize');
                  (_f = (_e = item.parentElement) === null || _e === void 0 ? void 0 : _e.parentElement) === null || _f === void 0 ? void 0 : _f.classList.add('maximized');
                  document.querySelectorAll('calcite-panel.left:not(.hidden)').forEach(function (item) {
                      item.classList.add('hidden');
                      item.setAttribute('dismissed', '');
                  });
                  (_g = document.querySelector('calcite-action[side="left"][active]')) === null || _g === void 0 ? void 0 : _g.removeAttribute('active');
              }
              else if (item.getAttribute('icon') === 'minimize') {
                  item.setAttribute('icon', 'maximize');
                  (_j = (_h = item.parentElement) === null || _h === void 0 ? void 0 : _h.parentElement) === null || _j === void 0 ? void 0 : _j.classList.remove('maximized');
              }
          });
      });
  };
  var initPanels = function (actions) {
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
                          console.log(mutation);
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
              var _a, _b;
              _this.actions = document.querySelectorAll('calcite-action-bar calcite-action');
              (_a = _this.actions) === null || _a === void 0 ? void 0 : _a.forEach(function (action) {
                  action === null || action === void 0 ? void 0 : action.addEventListener('click', function (e) {
                      _this.toggleAction(e.target);
                      setTimeout(function () {
                          debugger;
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
              if (window.innerWidth >= 500) {
                  (_b = document.querySelector('calcite-action[text="Search"')) === null || _b === void 0 ? void 0 : _b.setAttribute('active', '');
              }
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
                                  panel.setAttribute('style', 'min-width: 350px');
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
                                  panel.setAttribute('style', 'min-width: 350px');
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
          this.actions = document.querySelectorAll('calcite-action-bar calcite-action');
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
              if (!_this.actions.length) {
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
              if (!_this.actions.length) {
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
  actionBar.initActions();
  initPanels(actionBar.actions);
  watchUtils__default.watch(actionBar, 'actions', function (actions) {
      if (actions.length) {
          actionBar.enableActionbar();
          exports.view = new MapView({
              container: 'viewDiv',
              map: map
          });
          exports.view.when(function () {
              actionBar.view = exports.view;
              leftActionBar.view = exports.view;
              checkLocalStorage(exports.view);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FwcC50cyIsIi4uLy4uL3NyYy9tZW51LnRzIiwiLi4vLi4vc3JjL3RpcHMudHMiLCIuLi8uLi9zcmMvYWxlcnQudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaC9Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL1Byb3BlcnR5U2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUvTWVhc3VyZVZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUudHN4IiwiLi4vLi4vc3JjL2RhdGEvc2VhcmNoLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy9EcmF3Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9TZWxlY3QvU2VsZWN0Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvU2VsZWN0LnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL0Jhc2VNYXBzL0Jhc2VNYXBzVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQmFzZU1hcHMudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvTGF5ZXJzL0xheWVyc1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xheWVycy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaC9Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xvY2F0aW9uU2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL092ZXJ2aWV3TWFwL092ZXJ2aWV3TWFwVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvT3ZlcnZpZXdNYXAudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvQ2xlYXIvQ2xlYXJWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9DbGVhci50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy50cyIsIi4uLy4uL3NyYy9wYW5lbHMudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9BY3Rpb25CYXIvQWN0aW9uQmFyVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQWN0aW9uQmFyLnRzeCIsIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViTWFwIGZyb20gJ2VzcmkvV2ViTWFwJztcbmV4cG9ydCBsZXQgbWFwID0gbmV3IFdlYk1hcCgpO1xubWFwID0gbmV3IFdlYk1hcCh7IHBvcnRhbEl0ZW06IHsgaWQ6ICc0NmYyNTk4ZTQzNjc0Njc4YTQzOTBmODYwYTNjZWMxYycgfSB9KTtcbi8vIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzJykpIHtcbi8vICAgbWFwID0gV2ViTWFwLmZyb21KU09OKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpIGFzIHN0cmluZykpO1xuLy8gfVxuIiwiZXhwb3J0IGxldCB0aGVtZSA9ICdsaWdodCc7XG5jb25zdCBzZXRUaGVtZSA9ICh0aGVtZTogc3RyaW5nKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtY29sb3InKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtdGlwLW1hbmFnZXInKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtZHJvcGRvd24nKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWxlcnQnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWN0aW9uLWJhcicpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcnJvd1BhdGgnKT8uc2V0QXR0cmlidXRlKCdzdHJva2UnLCB0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdibGFjaycgOiAnd2hpdGUnKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rJykuZm9yRWFjaChsaW5rID0+IHtcbiAgICBpZiAobGluay5ocmVmLmluY2x1ZGVzKHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JykpIHtcbiAgICAgIGxpbmsuaHJlZiA9ICdodHRwczovL2pzLmFyY2dpcy5jb20vNC4xNi9lc3JpL3RoZW1lcy8nICsgdGhlbWUgKyAnL21haW4uY3NzJztcbiAgICB9XG4gIH0pO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKGBjYWxjaXRlLWRyb3Bkb3duLWl0ZW1bdmFsdWU9XCIke3RoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0J31cIl1gKVxuICAgID8uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoYGNhbGNpdGUtZHJvcGRvd24taXRlbVt2YWx1ZT1cIiR7dGhlbWUgPT09ICdsaWdodCcgPyAnbGlnaHQnIDogJ2RhcmsnfVwiXWApXG4gICAgPy5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xufTtcbmV4cG9ydCBjb25zdCBpbml0TWVudSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1kcm9wZG93bicpPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlRHJvcGRvd25TZWxlY3QnLCAoZTogYW55KSA9PiB7XG4gICAgZS50YXJnZXQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpIGFzIHN0cmluZztcbiAgICAgICAgdGhlbWUgPSB2YWx1ZTtcbiAgICAgICAgc2V0VGhlbWUodGhlbWUpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkge1xuICAgIGxldCB0aGVtZU5hbWU6IHN0cmluZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSBhcyBzdHJpbmc7XG4gICAgc2V0VGhlbWUodGhlbWVOYW1lKTtcblxuICAgIHRoZW1lTmFtZSA9IHRoZW1lTmFtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgICAgaWYgKChlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmcpICE9IHRoZW1lTmFtZSkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgc3RyaW5nO1xuICAgICAgICB0aGVtZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKChlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmcpID09PSB0aGVtZU5hbWUpIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSB7XG4gICAgc2V0VGhlbWUoJ2RhcmsnKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi9tZW51JztcblxuY29uc3QgdGlwR3JvdXBzID0gW1xuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdzZWxlY3RUaXAnLFxuICAgICAgdGl0bGU6ICdTZWxlY3Rpb24nLFxuICAgICAgdGlwczogW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIGRyYXcgYSBjb250aW51b3VzIGxpbmUgb3IgcG9seWdvbiwgbG9uZyBwcmVzcyBhbmQgZHJhZyB5b3VyIGN1cnNvcicsXG4gICAgICAgICAgdGl0bGU6ICdGcmVlaGFuZCBEcmF3aW5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIGRyYXcgYSBjb250aW51b3VzIGxpbmUgb3IgcG9seWdvbiwgbG9uZyBwcmVzcyBhbmQgZHJhZyB5b3VyIGN1cnNvcicsXG4gICAgICAgICAgdGl0bGU6ICdGcmVlaGFuZCBEcmF3aW5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdwcm9wZXJ0eVNlYXJjaFRpcCcsXG4gICAgICB0aXRsZTogJ1Byb3BlcnR5IFNlYXJjaCcsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ1RvIHNlYXJjaCBieSBhIHBvcnRpb24gb2YgYW4gb3duZXIgbmFtZSBvciBhZGRyZXNzLCBoaXQgZW50ZXIgd2l0aG91dCBzZWxlY3RpbmcgZm9ybSB0aGUgbGlzdCBvZiBzdWdnZXN0aW9ucy4nLFxuICAgICAgICAgIHRpdGxlOiAnV2lsZGNhcmQgU2VhcmNoJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIHF1aWNrbHkgc2VsZWN0IGEgcHJvcGVydHkgZnJvbSB0aGUgbWFwLCBsb25nIHByZXNzIG9uIGEgcHJvcGVydHkgb24gdGhlIG1hcC4nLFxuICAgICAgICAgIHRpdGxlOiAnTG9uZyBQcmVzcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUbyBzZWxlY3QgYnkgYSBsb2NhdGlvbiB1c2UgdGhlIHByb3BlcnR5IHNlbGVjdGlvbiB0b29sLicsXG4gICAgICAgICAgdGl0bGU6ICdTZWxlY3QgQnkgTG9jYXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnUHJldmlvdXMgXCJ0YWJcIiBsYXlvdXQgaGFzIGJlZW4gY29uc29saWRhdGVkIGludG8gYSBzaW5nbGUgc2Nyb2xsYWJsZSBwYW5lbC4nLFxuICAgICAgICAgIHRpdGxlOiAnU2luZ2xlIERldGFpbHMgUGFuZWwnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwYW5lbDoge1xuICAgICAgbmFtZTogJ2Jhc2VtYXBUaXAnLFxuICAgICAgdGl0bGU6ICdCYXNlbWFwcycsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ1RoZSBpbWFnZXJ5IGFuZCBpbWFnZXJ5IGh5YnJpZCBiYXNlIG1hcHMgbGlzdGVkIHVuZGVyIHRoZSBtYXBzIHRhYiBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBsYXRlc3QgaW1hZ2VyeSBmcm9tIFJhbGVpZ2ggKDIwMTkpIGFuZCBmcm9tIHRoZSBTdGF0ZSBvZiBOb3J0aCBDYXJvbGluYSAoMjAxNykuJyxcbiAgICAgICAgICB0aXRsZTogJ0ltYWdlcnkgQmFzZW1hcHMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbl07XG5leHBvcnQgZnVuY3Rpb24gaW5pdFRpcHMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXAnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLXRpcC1tYW5hZ2VyJyk/LnJlbW92ZSgpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGNvbnN0IG1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcC1tYW5hZ2VyJyk7XG4gICAgICBtYW5hZ2VyLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gICAgICBjb25zdCB0aXBHcm91cCA9IHRpcEdyb3Vwcy5maW5kKGdyb3VwID0+IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnBhbmVsLm5hbWUgPT09IGl0ZW0uaWQ7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcC1ncm91cCcpO1xuICAgICAgZ3JvdXAuc2V0QXR0cmlidXRlKCd0ZXh0LWdyb3VwLXRpdGxlJywgKHRpcEdyb3VwIGFzIGFueSk/LnBhbmVsLnRpdGxlKTtcbiAgICAgIG1hbmFnZXIuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgICAgdGlwR3JvdXA/LnBhbmVsLnRpcHMuZm9yRWFjaCh0aXAgPT4ge1xuICAgICAgICBjb25zdCBjYWxjaXRlVGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAnKTtcbiAgICAgICAgY2FsY2l0ZVRpcC5zZXRBdHRyaWJ1dGUoJ2hlYWRpbmcnLCB0aXAudGl0bGUpO1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLmlubmVySFRNTCA9IHRpcC5tZXNzYWdlO1xuICAgICAgICBjYWxjaXRlVGlwLmFwcGVuZENoaWxkKHApO1xuICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjYWxjaXRlVGlwKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQ/LmJvZHk/LmFwcGVuZENoaWxkKG1hbmFnZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzaG93QWxlcnQodGV4dDogc3RyaW5nLCBjb2xvcjogc3RyaW5nKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtYWxlcnQnKT8ucmVtb3ZlKCk7XG4gIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1hbGVydCcpO1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdzbG90JywgJ2FsZXJ0LW1lc3NhZ2UnKTtcbiAgbWVzc2FnZS5pbm5lckhUTUwgPSB0ZXh0O1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgY29sb3IpO1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdpY29uJywgJycpO1xuXG4gIGFsZXJ0LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFsZXJ0KTtcbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoJztcbmltcG9ydCBGZWF0dXJlVGFibGUgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZSc7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XG5pbXBvcnQgTGF5ZXJTZWFyY2hTb3VyY2UgZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaC9MYXllclNlYXJjaFNvdXJjZSc7XG5pbXBvcnQgRmllbGRDb2x1bW5Db25maWcgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZS9GaWVsZENvbHVtbkNvbmZpZyc7XG5pbXBvcnQgTWVudUJ1dHRvbkl0ZW0gZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZS9HcmlkL3N1cHBvcnQvQnV0dG9uTWVudUl0ZW0nO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlLCB3aGVuRGVmaW5lZCB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBTZWFyY2hTb3VyY2UgZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaC9TZWFyY2hTb3VyY2UnO1xuaW1wb3J0IEZlYXR1cmVTZXQgZnJvbSAnZXNyaS90YXNrcy9zdXBwb3J0L0ZlYXR1cmVTZXQnO1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Qcm9wZXJ0eVNlYXJjaC5Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQHByb3BlcnR5KCkgYWRkcmVzc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQHByb3BlcnR5KCkgcHJvcGVydHlMYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG5cbiAgQHByb3BlcnR5KCkgc2VhcmNoV2lkZ2V0OiBlc3JpLndpZGdldHNTZWFyY2g7XG4gIEBwcm9wZXJ0eSgpIGZlYXR1cmVUYWJsZTogZXNyaS5GZWF0dXJlVGFibGU7XG4gIEBwcm9wZXJ0eSgpIGZlYXR1cmU6IGVzcmkuRmVhdHVyZTtcbiAgQHByb3BlcnR5KCkgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG5cbiAgY2x1c3RlclBvaW50czogRmVhdHVyZUxheWVyO1xuXG4gIGdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBpZDogJ3Byb3BlcnR5LXNlbGVjdCcsIGxpc3RNb2RlOiAnaGlkZScsIG1pblNjYWxlOiAxOTIwMCB9KTtcbiAgc2luZ2xlU3ltYm9sID0ge1xuICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgc3R5bGU6ICdub25lJyxcbiAgICBvdXRsaW5lOiB7IHdpZHRoOiAyLjUsIGNvbG9yOiBbMjU1LCA4MiwgODIsIDFdIH0sXG4gICAgY29sb3I6IFsyNTMsIDQ2LCA2NSwgMC4yNV1cbiAgfTtcbiAgbXVsdGlTeW1ib2wgPSB7XG4gICAgdHlwZTogJ3NpbXBsZS1maWxsJyxcbiAgICBzdHlsZTogJ25vbmUnLFxuICAgIG91dGxpbmU6IHsgd2lkdGg6IDIuNSwgY29sb3I6IFsyNDksIDI0MywgMCwgMV0gfSxcbiAgICBjb2xvcjogWzI1MywgNDYsIDY1LCAwLjI1XVxuICB9O1xuICBzZWxlY3RlZFByb3BlcnR5OiBlc3JpLkdyYXBoaWM7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAnY29uZG9zVGFibGUnLCB0aGlzLmluaXRTZWFyY2guYmluZCh0aGlzKSk7XG4gICAgd2hlbkRlZmluZWQodGhpcywgJ2dlb21ldHJ5JywgdGhpcy5zZWFyY2hCeUdlb21ldHJ5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc2VhcmNoQnlHZW9tZXRyeShnZW9tZXRyeTogZXNyaS5HZW9tZXRyeSkge1xuICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgLnF1ZXJ5RmVhdHVyZXMoeyBnZW9tZXRyeTogZ2VvbWV0cnksIHJldHVybkdlb21ldHJ5OiB0cnVlLCBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnLCAnUkVJRCddIH0pXG4gICAgICAudGhlbihwcm9wZXJ0eVJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMucHJvcGVydHlMYXllci5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ1BST1BFUlRZX0NPTkRPJztcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BlcnR5TGF5ZXJcbiAgICAgICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwPy5pZCwgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxldCBmZWF0dXJlczogYW55W10gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzLmNvbmNhdChyZXN1bHRba2V5XS5mZWF0dXJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGZlYXR1cmVzWzBdLmdlb21ldHJ5ID0gcHJvcGVydHlSZXN1bHQuZmVhdHVyZXNbMF0uZ2VvbWV0cnk7XG5cbiAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKGZlYXR1cmVzWzBdLCB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LCBbXSwgW2ZlYXR1cmVzWzBdLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKV0pO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgndGFibGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcblxuICAgICAgICAgICAgY29uc3QgZmVhdHVyZVNldDogRmVhdHVyZVNldCA9IG5ldyBGZWF0dXJlU2V0KHsgZmVhdHVyZXM6IFtdIH0pO1xuICAgICAgICAgICAgcHJvcGVydHlSZXN1bHQuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICAgIGZlYXR1cmUuc3ltYm9sID1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxID8gKHRoaXMubXVsdGlTeW1ib2wgYXMgYW55KSA6ICh0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnkpO1xuXG4gICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlLmdlb21ldHJ5ID0gcHJvcGVydHlSZXN1bHQuZmVhdHVyZXNbMF0uZ2VvbWV0cnk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCBmZWF0dXJlcyk7XG4gICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGZlYXR1cmUpO1xuICAgICAgICAgICAgICBmZWF0dXJlU2V0LmZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2x1c3RlckdyYXBoaWNzKGZlYXR1cmVTZXQpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBjcmVhdGVGZWF0dXJlVGFibGVMYXllciA9IChmaWVsZHM6IGVzcmkuRmllbGRbXSwgZmVhdHVyZXM6IGVzcmkuR3JhcGhpY1tdKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBzb3VyY2U6IGZlYXR1cmVzLFxuICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCcsXG4gICAgICBzcGF0aWFsUmVmZXJlbmNlOiB0aGlzLnZpZXcuc3BhdGlhbFJlZmVyZW5jZVxuICAgIH0pO1xuICB9O1xuICBhZGRDbHVzdGVyR3JhcGhpY3MgPSAocmVzdWx0OiBlc3JpLkZlYXR1cmVTZXQpID0+IHtcbiAgICBjb25zdCBwb2ludHM6IEdyYXBoaWNbXSA9IFtdO1xuICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xuICAgICAgY29uc3QgcHQgPSBmZWF0dXJlLmNsb25lKCk7XG4gICAgICBwdC5nZW9tZXRyeSA9IChwdC5nZW9tZXRyeSBhcyBlc3JpLlBvbHlnb24pLmNlbnRyb2lkO1xuICAgICAgcG9pbnRzLnB1c2gocHQpO1xuICAgIH0pO1xuICAgIHRoaXMuY2x1c3RlclBvaW50cy5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6ICcxPTEnLCByZXR1cm5HZW9tZXRyeTogZmFsc2UsIG91dEZpZWxkczogWydPQkpFQ1RJRCddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMuY2x1c3RlclBvaW50cy5hcHBseUVkaXRzKHsgZGVsZXRlRmVhdHVyZXM6IHJlc3VsdC5mZWF0dXJlcyB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbHVzdGVyUG9pbnRzLmFwcGx5RWRpdHMoeyBhZGRGZWF0dXJlczogcG9pbnRzIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2x1c3RlclBvaW50cy5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIGFkZEdyYXBoaWNzID0gKHJlc3VsdDogZXNyaS5GZWF0dXJlU2V0KSA9PiB7XG4gICAgdGhpcy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcbiAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgIGZlYXR1cmUuc3ltYm9sID0gcmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA+IDEgPyAodGhpcy5tdWx0aVN5bWJvbCBhcyBhbnkpIDogKHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueSk7XG4gICAgICB0aGlzLmdyYXBoaWNzLmFkZChmZWF0dXJlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ2x1c3RlckdyYXBoaWNzKHJlc3VsdCk7XG4gIH07XG5cbiAgZ2V0UHJvcGVydHkgPSAob2lkczogYW55W10sIHNvdXJjZT86IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuY29uZG9zVGFibGUucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0NPTkRPX1BST1BFUlRZJztcbiAgICB9KTtcbiAgICB0aGlzLmNvbmRvc1RhYmxlXG4gICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoe1xuICAgICAgICByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwPy5pZCxcbiAgICAgICAgb2JqZWN0SWRzOiBvaWRzLFxuICAgICAgICBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnLCAnUkVJRCddLFxuICAgICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2VcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wZXJ0eUxheWVyXG4gICAgICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgb2JqZWN0SWRzOiBvaWRzLFxuICAgICAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlLFxuICAgICAgICAgICAgb3V0U3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmU/LmdyYXBoaWMpIHtcbiAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMuZ2VvbWV0cnkgPSByZXN1bHQ/LmZlYXR1cmVzWzBdLmdlb21ldHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52aWV3LmdvVG8ocmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkR3JhcGhpY3MocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHNlYXJjaENvbXBsZXRlID0gKGV2ZW50OiBlc3JpLlNlYXJjaFNlYXJjaENvbXBsZXRlRXZlbnQpID0+IHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBpZiAoIXRoaXMuc2VhcmNoV2lkZ2V0LnZpZXdNb2RlbC5zZWxlY3RlZFN1Z2dlc3Rpb24pIHtcbiAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG5cbiAgICAgIGxldCB3aGVyZSA9ICcnO1xuXG4gICAgICBpZiAoIXRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSkge1xuICAgICAgICB3aGVyZSA9IGBPV05FUiBsaWtlICcke2V2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKX0lJyBPUiBSRUlEIGxpa2UgJyR7ZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUnIE9SIFBJTl9OVU0gbGlrZSAnJHtldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCl9JSdgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCh0aGlzLnNlYXJjaFdpZGdldC5hY3RpdmVTb3VyY2UgYXMgYW55KT8uc2VhcmNoRmllbGRzLmluY2x1ZGVzKCdPV05FUicpKSB7XG4gICAgICAgICAgd2hlcmUgPSBgT1dORVIgbGlrZSAnJSR7ZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUnYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ1BJTl9OVU0nKSkge1xuICAgICAgICAgIHdoZXJlID0gYFBJTl9OVU0gbGlrZSAnJSR7ZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUnYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ1JFSUQnKSkge1xuICAgICAgICAgIHdoZXJlID0gXCJSRUlEIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdGFibGVGZWF0dXJlczogYW55W10gPSBbXTtcblxuICAgICAgdGhpcy5jb25kb3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6IHdoZXJlLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGFibGVGZWF0dXJlcyA9IHJlc3VsdC5mZWF0dXJlcztcbiAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIHx8XG4gICAgICAgICAgKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ0FERFJFU1MnKVxuICAgICAgICApIHtcbiAgICAgICAgICB3aGVyZSA9IGBBRERSRVNTIGxpa2UgJyUke2V2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKX0lJ2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2hlcmUgPSAnQUREUkVTUyBJUyBOVUxMJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogd2hlcmUsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuYWRkcmVzc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdBRERSRVNTRVNfQ09ORE8nO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGFkZHJPaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgYWRkck9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgJiYgYWRkck9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZVxuICAgICAgICAgICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwLmlkLCBvYmplY3RJZHM6IGFkZHJPaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVGZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgdGFibGVGZWF0dXJlcyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgICAgIGlmICh0YWJsZUZlYXR1cmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gbmV3IEdyYXBoaWMoKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgndGFibGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUucmVuZGVyTm93KCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCB0YWJsZUZlYXR1cmVzKTtcbiAgICAgICAgICAgIGlmICh0YWJsZUZlYXR1cmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBuZXcgR3JhcGhpYygpO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5yZW5kZXJOb3coKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChldmVudC5udW1SZXN1bHRzKSB7XG4gICAgICAgIGxldCBsYXllciA9IChldmVudC5yZXN1bHRzWzBdLnNvdXJjZSBhcyBMYXllclNlYXJjaFNvdXJjZSkubGF5ZXIgYXMgRmVhdHVyZUxheWVyO1xuICAgICAgICBpZiAoIWxheWVyICYmIGV2ZW50LnJlc3VsdHNbMF0uc291cmNlLm5hbWUgPT09ICdPd25lcicpIHtcbiAgICAgICAgICBsYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsYXllciAmJiBbJ1NpdGUgQWRkcmVzcycsICdTdHJlZXQgTmFtZSddLmluY2x1ZGVzKGV2ZW50LnJlc3VsdHNbMF0uc291cmNlLm5hbWUpKSB7XG4gICAgICAgICAgbGF5ZXIgPSB0aGlzLmFkZHJlc3NUYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBldmVudC5yZXN1bHRzWzBdLnJlc3VsdHMuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goci5mZWF0dXJlLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxheWVyLmxheWVySWQgPT09IDQpIHtcbiAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXAgPSBsYXllci5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgICByZXR1cm4gci5uYW1lID09PSAnQUREUkVTU0VTX0NPTkRPJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocmVsYXRpb25zaGlwICYmIG9pZHMpIHtcbiAgICAgICAgICAgIGxheWVyXG4gICAgICAgICAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXAuaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5sYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBuZXcgR3JhcGhpYygpO1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmUoZmVhdHVyZXNbMF0sIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsIFtdLCBvaWRzKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgZmVhdHVyZXMpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb25kb3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gbmV3IEdyYXBoaWMoKTtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKHJlc3VsdC5mZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgcmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc2V0RmVhdHVyZShmZWF0dXJlOiBlc3JpLkdyYXBoaWMsIHZpZXc6IGVzcmkuTWFwVmlldywgbWVkaWFJbmZvczogYW55W10sIG9pZHM6IGFueVtdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgncmVpZCcsIGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdSRUlEJykpO1xuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsIGAke2xvY2F0aW9uLnBhdGhuYW1lfT8ke3BhcmFtc31gKTtcbiAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmNvbmRvc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgIHJldHVybiByLm5hbWUgPT09ICdDT05ET19QSE9UT1MnO1xuICAgIH0pO1xuICAgIGNvbnN0IG9pZCA9IGZlYXR1cmUuZ2V0T2JqZWN0SWQoKTtcbiAgICBtZWRpYUluZm9zID0gW107XG4gICAgdGhpcy5jb25kb3NUYWJsZVxuICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICBtZWRpYUluZm9zLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICAgIGNhcHRpb246ICcnLFxuICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHNvdXJjZVVSTDogYGh0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9yZWFsZXN0YXRlL3Bob3Rvcy9tdmlkZW8vJHtmZWF0dXJlLmdldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAgICdJTUFHRURJUidcbiAgICAgICAgICAgICAgICApfS8ke2ZlYXR1cmUuZ2V0QXR0cmlidXRlKCdJTUFHRU5BTUUnKX1gXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lZGlhID0gKHRoaXMuY29uZG9zVGFibGUucG9wdXBUZW1wbGF0ZS5jb250ZW50IGFzIGVzcmkuQ29udGVudFtdKS5maW5kKChjb250ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29udGVudD8udHlwZSA9PT0gJ21lZGlhJztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgIChtZWRpYSBhcyBlc3JpLk1lZGlhQ29udGVudCkubWVkaWFJbmZvcyA9IG1lZGlhSW5mb3M7XG4gICAgICAgIH1cbiAgICAgICAgZmVhdHVyZS5sYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgIGZlYXR1cmUucG9wdXBUZW1wbGF0ZSA9IChmZWF0dXJlLmxheWVyIGFzIGVzcmkuRmVhdHVyZUxheWVyKS5wb3B1cFRlbXBsYXRlO1xuICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYyA9IGZlYXR1cmU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmVhdHVyZS5ncmFwaGljLmF0dHJpYnV0ZXMpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZURpdicpPy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYy5zeW1ib2wgPSB0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnk7XG4gICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljLnNldEF0dHJpYnV0ZSgnT0JKRUNUSUQnLCBvaWQpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MuZmluZChncmFwaGljID0+IHtcbiAgICAgICAgICByZXR1cm4gZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgPT09ICd0cnVlJztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgIHNlbGVjdGVkLnN5bWJvbCA9IHRoaXMubXVsdGlTeW1ib2wgYXMgYW55O1xuICAgICAgICAgIHNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmFwaGljID0gdGhpcy5ncmFwaGljcy5ncmFwaGljcy5maW5kKGdyYXBoaWMgPT4ge1xuICAgICAgICAgIHJldHVybiBncmFwaGljLmdldEF0dHJpYnV0ZSgnUkVJRCcpID09PSBmZWF0dXJlLmdldEF0dHJpYnV0ZSgnUkVJRCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGdyYXBoaWMpIHtcbiAgICAgICAgICBncmFwaGljLnN5bWJvbCA9IHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueTtcblxuICAgICAgICAgIGdyYXBoaWMuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgICAgdGhpcy5ncmFwaGljcy5ncmFwaGljcy5yZW9yZGVyKGdyYXBoaWMsIHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIGV4cG9ydFRhYmxlKCkge1xuICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyLnF1ZXJ5RmVhdHVyZXMoeyBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGxldCBjc3YgPSAnJztcbiAgICAgIHJlc3VsdC5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGNzdiArPSBgJHtmaWVsZC5hbGlhc30sYDtcbiAgICAgIH0pO1xuICAgICAgY3N2ICs9ICdcXHJcXG4nO1xuICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZlYXR1cmUuYXR0cmlidXRlcykge1xuICAgICAgICAgIGlmIChrZXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZGF0ZScpKSB7XG4gICAgICAgICAgICBjc3YgKz0gYFwiJHtuZXcgRGF0ZShmZWF0dXJlLmF0dHJpYnV0ZXNba2V5XSkudG9EYXRlU3RyaW5nKCl9XCIsYDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdhY3JlcycpKSB7XG4gICAgICAgICAgICBjc3YgKz0gYFwiJHtwYXJzZUZsb2F0KGZlYXR1cmUuYXR0cmlidXRlc1trZXldKS50b0ZpeGVkKDIpfVwiLGA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzdiArPSBgXCIke2ZlYXR1cmUuYXR0cmlidXRlc1trZXldfVwiLGA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNzdiArPSAnXFxyXFxuJztcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZXhwb3J0ZWRGaWxlbm1hZSA9ICdpbWFwc19leHBvcnQuY3N2JztcblxuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjc3ZdLCB7IHR5cGU6ICd0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04OycgfSk7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgaWYgKGxpbmsuZG93bmxvYWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBmZWF0dXJlIGRldGVjdGlvblxuICAgICAgICAvLyBCcm93c2VycyB0aGF0IHN1cHBvcnQgSFRNTDUgZG93bmxvYWQgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZXhwb3J0ZWRGaWxlbm1hZSk7XG4gICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGVja1NlYXJjaFBhcmFtcyA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcbiAgICBjb25zdCByZWlkID0gcGFyYW1zLmdldCgncmVpZCcpO1xuICAgIGNvbnN0IHBpbiA9IHBhcmFtcy5nZXQoJ3BpbicpO1xuICAgIGxldCB3aGVyZSA9ICcnO1xuICAgIGlmIChyZWlkIHx8IHBpbikge1xuICAgICAgaWYgKHJlaWQpIHtcbiAgICAgICAgd2hlcmUgPSBgUkVJRCBJTiAoJyR7cmVpZC5zcGxpdCgnLCcpLmpvaW4oXCInLCdcIil9JylgO1xuICAgICAgfSBlbHNlIGlmIChwaW4pIHtcbiAgICAgICAgd2hlcmUgPSBgUElOX05VTSA9ICcke3Bpbn0nYDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29uZG9zVGFibGUucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiB3aGVyZSwgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuXG4gICAgICAgIGlmIChyZXN1bHQuZmVhdHVyZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gbmV3IEdyYXBoaWMoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKHJlc3VsdC5mZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgcmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNzLCB2aWV3Lm1hcC5hbGxMYXllcnMubGVuZ3RoIC0gMSk7XG4gICAgdGhpcy5jbHVzdGVyUG9pbnRzID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICBzb3VyY2U6IFtdLFxuICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJyxcbiAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgIG1heFNjYWxlOiAxOTIwMSxcbiAgICAgIGxpc3RNb2RlOiAnaGlkZScsXG4gICAgICBsZWdlbmRFbmFibGVkOiBmYWxzZSxcbiAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgIHR5cGU6ICdzaW1wbGUnLFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsXG4gICAgICAgICAgc2l6ZTogNCxcbiAgICAgICAgICBjb2xvcjogJyM2OWRjZmYnLFxuICAgICAgICAgIG91dGxpbmU6IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCAxMzksIDE3NCwgMC41KScsXG4gICAgICAgICAgICB3aWR0aDogNVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBhcyBhbnksXG4gICAgICBmZWF0dXJlUmVkdWN0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdjbHVzdGVyJyxcbiAgICAgICAgbGFiZWxpbmdJbmZvOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gdHVybiBvZmYgZGVjb25mbGljdGlvbiB0byBlbnN1cmUgYWxsIGNsdXN0ZXJzIGFyZSBsYWJlbGVkXG4gICAgICAgICAgICBkZWNvbmZsaWN0aW9uU3RyYXRlZ3k6ICdub25lJyxcbiAgICAgICAgICAgIGxhYmVsRXhwcmVzc2lvbkluZm86IHtcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJUZXh0KCRmZWF0dXJlLmNsdXN0ZXJfY291bnQsICcjLCMjIycpXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDRhNWQnLFxuICAgICAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICAgICAgZmFtaWx5OiAnTm90byBTYW5zJyxcbiAgICAgICAgICAgICAgICBzaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBhcyBhbnksXG4gICAgICAgICAgICBsYWJlbFBsYWNlbWVudDogJ2NlbnRlci1jZW50ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogdGhpcy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcubWFwLmFkZCh0aGlzLmNsdXN0ZXJQb2ludHMpO1xuICAgIHRoaXMuY2hlY2tTZWFyY2hQYXJhbXMoKTtcbiAgfVxuXG4gIGdldFN1Z2dlc3Rpb25zID0gKFxuICAgIHBhcmFtczogYW55LFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBsYXllcjogZXNyaS5GZWF0dXJlTGF5ZXIsXG4gICAgb3V0RmllbGRzOiBzdHJpbmdbXSxcbiAgICBvcmRlckJ5RmllbGRzOiBzdHJpbmdbXSxcbiAgICBzZWFyY2hGaWVsZHM6IHN0cmluZ1tdLFxuICAgIHN0YXJ0c1dpdGg6IGJvb2xlYW5cbiAgKSA9PiB7XG4gICAgY29uc3Qgd2hlcmVBcnJheTogc3RyaW5nW10gPSBbXTtcbiAgICBzZWFyY2hGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBpZiAoc3RhcnRzV2l0aCkge1xuICAgICAgICB3aGVyZUFycmF5LnB1c2goYCR7ZmllbGR9IExJS0UgJyR7cGFyYW1zLnN1Z2dlc3RUZXJtLnRvVXBwZXJDYXNlKCl9JSdgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoZXJlQXJyYXkucHVzaChgJHtmaWVsZH0gTElLRSAnJSR7cGFyYW1zLnN1Z2dlc3RUZXJtLnRvVXBwZXJDYXNlKCl9JSdgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbGF5ZXJcbiAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgcmV0dXJuRGlzdGluY3RWYWx1ZXM6IHRydWUsXG4gICAgICAgIG91dEZpZWxkczogb3V0RmllbGRzLFxuICAgICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgICAgIG9yZGVyQnlGaWVsZHM6IG9yZGVyQnlGaWVsZHMsXG4gICAgICAgIHdoZXJlOiB3aGVyZUFycmF5LmpvaW4oJyBPUiAnKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5mZWF0dXJlc1xuICAgICAgICAgIC5maWx0ZXIoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIW91dEZpZWxkcy5pbmNsdWRlcygnQUREUl9MSVNUJykgfHwgZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ0FERFJfTElTVCcpID09PSAnWWVzJztcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBrZXk6IG5hbWUsXG4gICAgICAgICAgICAgIHRleHQ6IGZlYXR1cmUuZ2V0QXR0cmlidXRlKG91dEZpZWxkc1swXSksXG4gICAgICAgICAgICAgIHNvdXJjZUluZGV4OiBwYXJhbXMuc291cmNlSW5kZXhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcbiAgaW5pdFNlYXJjaChjb25kb3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXIpIHtcbiAgICBjb25zdCB0YWJsZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAgeyBuYW1lOiAnU0lURV9BRERSRVNTJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnQWRkcmVzcycgfSxcbiAgICAgICAgeyBuYW1lOiAnT1dORVInLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdPd25lcicgfSxcbiAgICAgICAgeyBuYW1lOiAnUElOX05VTScsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ1BJTicgfSxcbiAgICAgICAgeyBuYW1lOiAnUkVJRCcsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ1JFSUQnIH1cbiAgICAgIF0sXG4gICAgICBzb3VyY2U6IFtdLFxuICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCcsXG4gICAgICBzcGF0aWFsUmVmZXJlbmNlOiB0aGlzLnZpZXcuc3BhdGlhbFJlZmVyZW5jZVxuICAgIH0pO1xuICAgIHRoaXMuZmVhdHVyZSA9IG5ldyBGZWF0dXJlKHsgdmlldzogdGhpcy52aWV3IH0pO1xuXG4gICAgdGhpcy5mZWF0dXJlVGFibGUgPSBuZXcgRmVhdHVyZVRhYmxlKHtcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIGxheWVyOiB0YWJsZUxheWVyLFxuICAgICAgZmllbGRDb25maWdzOiBbXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1NJVEVfQUREUkVTUycsXG4gICAgICAgICAgbGFiZWw6ICdBZGRyZXNzJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ09XTkVSJyxcbiAgICAgICAgICBsYWJlbDogJ093bmVyJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1BJTl9OVU0nLFxuICAgICAgICAgIGxhYmVsOiAnUElOJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1JFSUQnLFxuICAgICAgICAgIGxhYmVsOiAnUkVJRCcsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgbWVudUNvbmZpZzoge1xuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICh7XG4gICAgICAgICAgICBsYWJlbDogJ0V4cG9ydCdcbiAgICAgICAgICB9IGFzIHVua25vd24pIGFzIE1lbnVCdXR0b25JdGVtXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBidXR0b246IE1lbnVCdXR0b25JdGVtID0gdGhpcy5mZWF0dXJlVGFibGU/Lm1lbnVDb25maWc/Lml0ZW1zPy5maW5kKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0ubGFiZWwgPT09ICdFeHBvcnQnO1xuICAgIH0pIGFzIE1lbnVCdXR0b25JdGVtO1xuICAgIGJ1dHRvbi5jbGlja0Z1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgdGhpcy5leHBvcnRUYWJsZSgpO1xuICAgIH07XG4gICAgYnV0dG9uLmNsaWNrRnVuY3Rpb24uYmluZCh0aGlzLmZlYXR1cmVUYWJsZSk7XG5cbiAgICB0aGlzLmZlYXR1cmVUYWJsZS5vbignc2VsZWN0aW9uLWNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICh0aGlzLmZlYXR1cmVUYWJsZSBhcyBhbnkpLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICBpZiAoZXZlbnQuYWRkZWQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZ2V0UHJvcGVydHkoW2V2ZW50LmFkZGVkWzBdLmZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpXSwgJ3RhYmxlJyk7XG4gICAgICAgIHRoaXMuc2V0RmVhdHVyZShcbiAgICAgICAgICBldmVudC5hZGRlZFswXS5mZWF0dXJlLFxuICAgICAgICAgIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsXG4gICAgICAgICAgW10sXG4gICAgICAgICAgW2V2ZW50LmFkZGVkWzBdLmZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpXVxuICAgICAgICApO1xuICAgICAgICBldmVudC5hZGRlZFswXS5mZWF0dXJlLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xuICAgICAgYWxsUGxhY2Vob2xkZXI6ICdBZGRyZXNzLCBvd25lciwgUElOLCBvciBSRUlEJyxcbiAgICAgIGluY2x1ZGVEZWZhdWx0U291cmNlczogZmFsc2UsXG4gICAgICBjb250YWluZXI6ICdzZWFyY2gnLFxuICAgICAgc291cmNlczogW1xuICAgICAgICAvLyBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAvLyAgIGxheWVyOiB0aGlzLmFkZHJlc3NUYWJsZSxcbiAgICAgICAgLy8gICBzZWFyY2hGaWVsZHM6IFsnQUREUkVTUycsICdBRERSRVNTX05PRElSJ10sXG4gICAgICAgIC8vICAgZGlzcGxheUZpZWxkOiAnQUREUkVTUycsXG4gICAgICAgIC8vICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgIC8vICAgb3V0RmllbGRzOiBbJ0FERFJFU1MnLCAnUkVBX1JFSUQnXSxcbiAgICAgICAgLy8gICBuYW1lOiAnU2l0ZSBBZGRyZXNzJyxcbiAgICAgICAgLy8gICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDIyMiBXIEhBUkdFVFQnXG4gICAgICAgIC8vIH0pLFxuICAgICAgICBuZXcgU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDIyMiBXIEhBUkdFVFQgU1QnLFxuICAgICAgICAgIG5hbWU6ICdTaXRlIEFkZHJlc3MnLFxuICAgICAgICAgIGdldFN1Z2dlc3Rpb25zOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1Z2dlc3Rpb25zKFxuICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgICdTaXRlIEFkZHJlc3MnLFxuICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZSxcbiAgICAgICAgICAgICAgWydBRERSRVNTJywgJ0FERFJfTElTVCddLFxuICAgICAgICAgICAgICBbJ0FERFJFU1MnXSxcbiAgICAgICAgICAgICAgWydBRERSRVNTJywgJ0FERFJFU1NfTk9ESVInXSxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFJlc3VsdHM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRyZXNzVGFibGVcbiAgICAgICAgICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiBgQUREUkVTUyA9ICcke3BhcmFtcy5zdWdnZXN0UmVzdWx0LnRleHQudG9VcHBlckNhc2UoKX0nYCxcbiAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFsnQUREUkVTUycsICdSRUFfUkVJRCcsICdPQkpFQ1RJRCddXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGZlYXR1cmUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdBZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBhbnkpLFxuICAgICAgICAvLyBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAvLyAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgLy8gICBzZWFyY2hGaWVsZHM6IFsnT1dORVInXSxcbiAgICAgICAgLy8gICBkaXNwbGF5RmllbGQ6ICdPV05FUicsXG4gICAgICAgIC8vICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgIC8vICAgb3V0RmllbGRzOiBbJ09XTkVSJywgJ1JFSUQnLCAnT0JKRUNUSUQnXSxcbiAgICAgICAgLy8gICBuYW1lOiAnT3duZXInLFxuICAgICAgICAvLyAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogU01JVEgsIEpPSE4nXG4gICAgICAgIC8vIH0pLFxuICAgICAgICBuZXcgU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IFNNSVRILCBKT0hOJyxcbiAgICAgICAgICBuYW1lOiAnT3duZXInLFxuICAgICAgICAgIGdldFN1Z2dlc3Rpb25zOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1Z2dlc3Rpb25zKHBhcmFtcywgJ093bmVyJywgdGhpcy5jb25kb3NUYWJsZSwgWydPV05FUiddLCBbJ09XTkVSJ10sIFsnT1dORVInXSwgZmFsc2UpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0UmVzdWx0czogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRvc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogYE9XTkVSID0gJyR7cGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dC50b1VwcGVyQ2FzZSgpfSdgLFxuICAgICAgICAgICAgICAgIG91dEZpZWxkczogWydPV05FUicsICdPQkpFQ1RJRCddXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGZlYXR1cmUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdPd25lcidcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pIGFzIGFueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYXMgYW55KSxcbiAgICAgICAgbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgICAgc2VhcmNoRmllbGRzOiBbJ1BJTl9OVU0nXSxcbiAgICAgICAgICBkaXNwbGF5RmllbGQ6ICdQSU5fTlVNJyxcbiAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnUElOX05VTScsICdSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgICAgbmFtZTogJ1BJTicsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiAwNzEyMzQ1Njc4J1xuICAgICAgICB9KSxcbiAgICAgICAgbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgICAgc2VhcmNoRmllbGRzOiBbJ1JFSUQnXSxcbiAgICAgICAgICBkaXNwbGF5RmllbGQ6ICdSRUlEJyxcbiAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnUkVJRCcsICdPQkpFQ1RJRCddLFxuICAgICAgICAgIG5hbWU6ICdSRUlEJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDAxMjM0NTYnXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IFcgSEFSR0VUVCBTVCcsXG4gICAgICAgICAgbmFtZTogJ1N0cmVldCBOYW1lJyxcbiAgICAgICAgICBnZXRTdWdnZXN0aW9uczogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWdnZXN0aW9ucyhcbiAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICAnU3RyZWV0IE5hbWUnLFxuICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZSxcbiAgICAgICAgICAgICAgWydTVFJFRVQnLCAnQUREUl9MSVNUJ10sXG4gICAgICAgICAgICAgIFsnU1RSRUVUJ10sXG4gICAgICAgICAgICAgIFsnU1RSRUVUJywgJ1NUUkVFVF9OT0RJUiddLFxuICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFJlc3VsdHM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkcmVzc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogYFNUUkVFVCA9ICcke3BhcmFtcy5zdWdnZXN0UmVzdWx0LnRleHQudG9VcHBlckNhc2UoKX0nYCxcbiAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFsnU1RSRUVUJywgJ1JFQV9SRUlEJywgJ09CSkVDVElEJ11cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZTogZmVhdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1N0cmVldCBOYW1lJ1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICBdXG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hXaWRnZXQudmlld01vZGVsLndhdGNoKCdyZXN1bHRzJywgZXZlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VhcmNoV2lkZ2V0Lm9uKCdzZWFyY2gtY29tcGxldGUnLCB0aGlzLnNlYXJjaENvbXBsZXRlKTtcbiAgfVxuICB0b2dnbGVDb250ZW50ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgPT09ICd0YWJsZScpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZUl0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZUl0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5pbXBvcnQgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgZnJvbSAnLi9Qcm9wZXJ0eVNlYXJjaC9Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCc7XG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5U2VhcmNoUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgcHJvcGVydHlMYXllcj86IGVzcmkuRmVhdHVyZUxheWVyO1xuICBjb25kb3NUYWJsZT86IGVzcmkuRmVhdHVyZUxheWVyO1xuICBhZGRyZXNzVGFibGU/OiBlc3JpLkZlYXR1cmVMYXllcjtcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgcHJvcGVydHlzZWFyY2gtYmFzZSdcbn07XG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLlByb3BlcnR5U2VhcmNoJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnR5U2VhcmNoIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuY29uZG9zVGFibGUnKVxuICBjb25kb3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYWRkcmVzc1RhYmxlJylcbiAgYWRkcmVzc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5wcm9wZXJ0eUxheWVyJylcbiAgcHJvcGVydHlMYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuc2VhcmNoV2lkZ2V0JylcbiAgc2VhcmNoV2lkZ2V0OiBlc3JpLndpZGdldHNTZWFyY2g7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZmVhdHVyZVRhYmxlJylcbiAgZmVhdHVyZVRhYmxlOiBlc3JpLkZlYXR1cmVUYWJsZTtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5mZWF0dXJlJylcbiAgZmVhdHVyZTogZXNyaS5GZWF0dXJlO1xuICBAYWxpYXNPZigndmlld01vZGVsLmdlb21ldHJ5JylcbiAgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgPSBuZXcgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogUHJvcGVydHlTZWFyY2hQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfY3JlYXRlU2VhcmNoID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNlYXJjaFdpZGdldCkge1xuICAgICAgdGhpcy5zZWFyY2hXaWRnZXQuY29udGFpbmVyID0gJ3NlYXJjaCc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlVGFibGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZVRhYmxlKSB7XG4gICAgICB0aGlzLmZlYXR1cmVUYWJsZS5jb250YWluZXIgPSAndGFibGUnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZUZlYXR1cmUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZSkge1xuICAgICAgdGhpcy5mZWF0dXJlLmNvbnRhaW5lciA9ICdmZWF0dXJlRGl2JztcbiAgICB9XG4gIH07XG5cbiAgY3VycmVudFJhZGlvQnV0dG9uID0gJ2xpc3QnO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaWRlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUmFkaW9Hcm91cEl0ZW1DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgIC8vIGNhbiBJIGdldCBjaGVja2VkIGFuZCB2YWx1ZSBsaWtlIHRoaXM/XG4gICAgICAgIGlmIChlLnRhcmdldD8uY2hlY2tlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgICAgdGhpcy52aWV3TW9kZWwudG9nZ2xlQ29udGVudChlLnRhcmdldD8udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zdCBmZWF0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVEaXYnKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JvbGxBcnJvdycpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGZlYXREaXY/LnNjcm9sbEJ5KHsgdG9wOiBmZWF0RGl2Lm9mZnNldEhlaWdodCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IHRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xuICAgIGlmICh0aGVtZSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fycm93UGF0aCcpPy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoZW1lID09PSAnbGlnaHQnID8gJ2JsYWNrJyA6ICd3aGl0ZScpO1xuICAgIH1cblxuICAgIGZlYXREaXY/LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIGlmIChmZWF0RGl2LnNjcm9sbFRvcCA+PSBmZWF0RGl2LnNjcm9sbEhlaWdodCAtIGZlYXREaXYub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JvbGxBcnJvdycpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JvbGxBcnJvdycpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVTZWFyY2h9IGlkPVwic2VhcmNoXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZVRhYmxlfSBpZD1cInRhYmxlXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJmZWF0dXJlXCIgY2xhc3M9XCJoaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiZmVhdHVyZURpdlwiIGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVGZWF0dXJlfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBpZD1cInNjcm9sbEFycm93XCJcbiAgICAgICAgICAgIGNsYXNzPVwiaG9tZS1wYWdlX19zY3JvbGwtZG93bi1hcnJvdyBob21lLXBhZ2VfX3Njcm9sbC1kb3duLWFycm93LS1ibGFja1wiXG4gICAgICAgICAgICBkYXRhLWRvam8tYXR0YWNoLXBvaW50PVwiYXJyb3dDb250YWluZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAzMiAzMlwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIGNsYXNzPVwiaWNvbi1pbmxpbmUgIFwiPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiYXJyb3dQYXRoXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgc3Ryb2tlLW9wYWNpdHk9XCIwLjVcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuNSAyNy4yMDdsLTQuODU0LTQuODU0LjcwNy0uNzA3TDE2IDI1LjI5M1Y1aDF2MjAuMjkzbDMuNjQ2LTMuNjQ2LjcwNy43MDd6XCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdmFsdWU9XCJ0YWJsZVwiIGlkPVwidGFibGVJdGVtXCI+XG4gICAgICAgICAgICBMaXN0XG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB2YWx1ZT1cImZlYXR1cmVcIiBpZD1cImZlYXR1cmVJdGVtXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICBEZXRhaWxzXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IE1lYXN1cmVtZW50IGZyb20gJ2Vzcmkvd2lkZ2V0cy9NZWFzdXJlbWVudCc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTWVhc3VyZS5NZWFzdXJlVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmVWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG4gIG1lYXN1cmVtZW50OiBlc3JpLk1lYXN1cmVtZW50O1xuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdGhpcy5tZWFzdXJlbWVudCA9IG5ldyBNZWFzdXJlbWVudCh7IHZpZXcsIGFyZWFVbml0OiAnc3F1YXJlLWZlZXQnLCBsaW5lYXJVbml0OiAnZmVldCcgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IE1lYXN1cmVWaWV3TW9kZWwgZnJvbSAnLi9NZWFzdXJlL01lYXN1cmVWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lYXN1cmVQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBtZWFzdXJlLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLk1lYXN1cmUnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZSBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLm1lYXN1cmVtZW50JylcbiAgbWVhc3VyZW1lbnQ6IGVzcmkuTWVhc3VyZW1lbnQ7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBNZWFzdXJlVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBNZWFzdXJlVmlld01vZGVsID0gbmV3IE1lYXN1cmVWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogTWVhc3VyZVByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIF9tZWFzdXJlQ3JlYXRlZCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5tZWFzdXJlbWVudCkge1xuICAgICAgdGhpcy5tZWFzdXJlbWVudC5jb250YWluZXIgPSAnbWVhc3VyZVdpZGdldCc7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZWFzdXJlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUmFkaW9Hcm91cEl0ZW1DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgIGlmICghZS50YXJnZXQuaGFzQXR0cmlidXRlKCdjaGVja2VkJykpIHtcbiAgICAgICAgICBpZiAoZS50YXJnZXQ/LnRpdGxlID09PSAnY2xlYXInKSB7XG4gICAgICAgICAgICB0aGlzLm1lYXN1cmVtZW50LmNsZWFyKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVhc3VyZW1lbnQuYWN0aXZlVG9vbCA9IGUudGFyZ2V0Py50aXRsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwIHdpZHRoPVwiZnVsbFwiPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdGl0bGU9XCJkaXN0YW5jZVwiIHZhbHVlPVwiZGlzdGFuY2VcIiBpZD1cInRhYmxlSXRlbVwiIGljb249XCJtZWFzdXJlXCI+XG4gICAgICAgICAgICBEaXN0YW5jZVxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdGl0bGU9XCJhcmVhXCIgdmFsdWU9XCJhcmVhXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGljb249XCJtZWFzdXJlLWFyZWFcIj5cbiAgICAgICAgICAgIEFyZWFcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHRpdGxlPVwiY2xlYXJcIiB2YWx1ZT1cImNsZWFyXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGljb249XCJ0cmFzaFwiPlxuICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9tZWFzdXJlQ3JlYXRlZH0gaWQ9XCJtZWFzdXJlV2lkZ2V0XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgUG9wdXBUZW1wbGF0ZSBmcm9tICdlc3JpL1BvcHVwVGVtcGxhdGUnO1xuaW1wb3J0IEV4cHJlc3Npb25JbmZvIGZyb20gJ2VzcmkvcG9wdXAvRXhwcmVzc2lvbkluZm8nO1xuaW1wb3J0IEN1c3RvbUNvbnRlbnQgZnJvbSAnZXNyaS9wb3B1cC9jb250ZW50L0N1c3RvbUNvbnRlbnQnO1xuaW1wb3J0IExvY2F0b3IgZnJvbSAnZXNyaS90YXNrcy9Mb2NhdG9yJztcbmltcG9ydCBnZW9kZXNpY1V0aWxzIGZyb20gJ2VzcmkvZ2VvbWV0cnkvc3VwcG9ydC9nZW9kZXNpY1V0aWxzJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlJztcbmltcG9ydCB7IHZpZXcgfSBmcm9tICcuLic7XG5jb25zdCBhcmNhZGVFeHByZXNzaW9uSW5mb3MgPSBbXG4gIHtcbiAgICBuYW1lOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICB0aXRsZTogJ21haWxpbmctYWRkcmVzcycsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdXaGVuKElzRW1wdHkoJGZlYXR1cmUuQUREUjMpLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIzKSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgIHRpdGxlOiAncHJvcGVydHktdmFsdWVzJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1wiQnVpbGRpbmcgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkJMREdfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJMYW5kIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5MQU5EX1ZBTCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG90YWwgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLlRPVEFMX1ZBTFVFX0FTU0QnXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6ICdwaW4nLFxuICAgIHRpdGxlOiAnUElOJyxcbiAgICBleHByZXNzaW9uOiBcInZhciBudW0gPSAkZmVhdHVyZS5QSU5fTlVNO3ZhciBleHQgPSAkZmVhdHVyZS5QSU5fRVhUO3JldHVybiBXaGVuKGV4dCA9PSAnMDAwJyxudW0sbnVtKycgJytleHQpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYnVpbGRfdmFsJyxcbiAgICB0aXRsZTogJ0J1aWxkaW5nIFZhbHVlJyxcbiAgICBleHByZXNzaW9uOiBcInZhciB2YWx1ZSA9ICRmZWF0dXJlLkJMREdfVkFMO1doZW4oSXNFbXB0eSh2YWx1ZSksJy0tJywgJyQnK1RleHQodmFsdWUsICcjLCMjIycpKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ2xhbmRfdmFsJyxcbiAgICB0aXRsZTogJ0xhbmQgVmFsdWUnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHZhbHVlID0gJGZlYXR1cmUuTEFORF9WQUw7V2hlbihJc0VtcHR5KHZhbHVlKSwnLS0nLCAnJCcrVGV4dCh2YWx1ZSwgJyMsIyMjJykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndG90YWxfdmFsJyxcbiAgICB0aXRsZTogJ1RvdGFsIFZhbHVlJyxcbiAgICBleHByZXNzaW9uOiBcInZhciB2YWx1ZSA9ICRmZWF0dXJlLlRPVEFMX1ZBTFVFX0FTU0Q7V2hlbihJc0VtcHR5KHZhbHVlKSwnLS0nLCAnJCcrVGV4dCh2YWx1ZSwgJyMsIyMjJykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnc2FsZV9wcmljZScsXG4gICAgdGl0bGU6ICdTYWxlIFByaWNlJyxcbiAgICBleHByZXNzaW9uOiBcInZhciB2YWx1ZSA9ICRmZWF0dXJlLlRPVFNBTFBSSUNFO1doZW4oSXNFbXB0eSh2YWx1ZSksJy0tJywgJyQnK1RleHQodmFsdWUsICcjLCMjIycpKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ2NpdHknLFxuICAgIHRpdGxlOiAnQ2l0eScsXG4gICAgZXhwcmVzc2lvbjogXCJ2YXIgY2l0eSA9ICRmZWF0dXJlLkNJVFlfREVDT0RFO1doZW4oSXNFbXB0eShjaXR5KSwnVW5pbmNvcnBvcmF0ZWQnLCBQcm9wZXIoY2l0eSkpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndG93bnNoaXAnLFxuICAgIHRpdGxlOiAnVG93bnNoaXAnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHRzID0gJGZlYXR1cmUuVE9XTlNISVBfREVDT0RFO1doZW4oSXNFbXB0eSh0cyksJ05vbmUnLCBQcm9wZXIodHMpKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ2p1cmlzZGljdGlvbicsXG4gICAgdGl0bGU6ICdKdXJpc2RpY3Rpb24nLFxuICAgIGV4cHJlc3Npb246XG4gICAgICAndmFyIGp1cmlzID0gJGZlYXR1cmUuUExBTk5JTkdfSlVSSVNESUNUSU9OO1doZW4oJyArXG4gICAgICBcImp1cmlzID09ICdSQScsICdSYWxlaWdoJyxcIiArXG4gICAgICBcImp1cmlzID09ICdDQScsICdDYXJ5JyxcIiArXG4gICAgICBcImp1cmlzID09ICdBUCcsICdBcGV4JyxcIiArXG4gICAgICBcImp1cmlzID09ICdBTicsICdBbmdpZXInLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0NMJywgJ0NsYXl0b24nLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0RVJywgJ0R1cmhhbScsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnRlYnLCAnRnVxdWF5LVZhcmluYScsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnR0EnLCAnR2FybmVyJyxcIiArXG4gICAgICBcImp1cmlzID09ICdIUycsICdIb2xseSBTcHJpbmdzJyxcIiArXG4gICAgICBcImp1cmlzID09ICdLTicsICdLbmlnaHRkYWxlJyxcIiArXG4gICAgICBcImp1cmlzID09ICdNTycsICdNb3JyaXN2aWxsZScsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnUk8nLCAnUm9sZXN2aWxsZScsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnV0YnLCAnV2FrZSBGb3Jlc3QnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ1dFJywgJ1dlbmRlbGwnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ1pCJywgJ1plYnVsb24nLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ1dDJywgJ1dha2UgQ291bnR5JyxcIiArXG4gICAgICBcIiAnV2FrZSBDb3VudHknKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ2dlbmVyYWwnLFxuICAgIHRpdGxlOiAnZ2VuZXJhbCcsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdcIlBJTlwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJGZlYXR1cmUuUElOX05VTStcIiBcIiskZmVhdHVyZS5QSU5fRVhUK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAnXCJSRUlEXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5SRUlEK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJDaXR5XCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICdQcm9wZXIoJGZlYXR1cmUuQ0lUWV9ERUNPREUpK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJKdXJpc2RpY3Rpb25cIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgJyRmZWF0dXJlLlBMQU5OSU5HX0pVUklTRElDVElPTitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG93bnNoaXBcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1Byb3BlcigkZmVhdHVyZS5UT1dOU0hJUF9ERUNPREUpJ1xuICB9XG5dIGFzIEV4cHJlc3Npb25JbmZvW107XG5jb25zdCBzZXJ2aWNlczogYW55W10gPSBbXG4gIHtcbiAgICBncm91cDoge1xuICAgICAgdGl0bGU6ICdFbGVjdG9yYWwnLFxuICAgICAgbGF5ZXJzOiBbXG4gICAgICAgICdQcmVjaW5jdHMnLFxuICAgICAgICAnQ29uZ3Jlc3Npb25hbCBEaXN0cmljdHMnLFxuICAgICAgICAnTkMgSG91c2Ugb2YgUmVwcmVzZW50YXRpdmVzIERpc3RyaWN0cycsXG4gICAgICAgICdOQyBTZW5hdGUgRGlzdHJpY3RzJyxcbiAgICAgICAgJ1NjaG9vbCBCb2FyZCBEaXN0cmljdHMnLFxuICAgICAgICAnQm9hcmQgb2YgQ29tbWlzc2lvbmVycyBEaXN0cmljdHMnLFxuICAgICAgICAnU3VwZXJpb3IgQ291cnQgRGlzdHJpY3RzJyxcbiAgICAgICAgJ1JhbGVpZ2ggQ2l0eSBDb3VuY2lsJyxcbiAgICAgICAgJ01vcnJpc3ZpbGxlIFRvd24gQ291bmNpbCBEaXN0cmljdHMnXG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgZ3JvdXA6IHtcbiAgICAgIHRpdGxlOiAnRW52aXJvbm1lbnRhbCcsXG4gICAgICBsYXllcnM6IFtcbiAgICAgICAgJ1NwZWNpYWwgRmxvb2QgSGF6YXJkIEFyZWFzIC0gRmxvb2RQbGFpbiAtIEZsb29kcGxhaW4nLFxuICAgICAgICAnU29pbHMnLFxuICAgICAgICAnQ3JpdGljYWwgV2F0ZXJzaGVkcycsXG4gICAgICAgICdXYXRlciBTdXBwbHkgV2F0ZXJzaGVkcydcbiAgICAgIF1cbiAgICB9XG4gIH1cbl07XG5cbmNvbnN0IHNjcm9sbFRvU2VydmljZSA9IChlOiBhbnkpID0+IHtcbiAgY29uc3QgcmVjdCA9IChlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtIGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVEaXYnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZGl2Py5zY3JvbGxUbyh7IHRvcDogcmVjdC50b3AgKyBkaXYuc2Nyb2xsVG9wIC0gMTU1LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gIH0sIDUwMCk7XG59O1xuY29uc3Qgc2VydmljZUNoYW5nZWQgPSAoZ3JhcGhpYzogX19lc3JpLkdyYXBoaWMsIGU6IGFueSkgPT4ge1xuICBpZiAoXG4gICAgIWUuZGV0YWlsLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW0uaGFzQXR0cmlidXRlKCdhY3RpdmUnKSAmJlxuICAgIGUuZGV0YWlsLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW0uY2hpbGRFbGVtZW50Q291bnQgPT09IDBcbiAgKSB7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1sb2FkZXInKTtcbiAgICBsb2FkZXIuc2V0QXR0cmlidXRlKCdpbmxpbmUnLCAnJyk7XG4gICAgY29uc3QgaGVhZGVyID0gZS5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1oZWFkZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICBoZWFkZXIuaW5zZXJ0QmVmb3JlKGxvYWRlciwgaGVhZGVyLmNoaWxkTm9kZXNbMV0pO1xuICAgIGNvbnN0IHNlcnZpY2VHcm91cDogYW55ID0gc2VydmljZXMuZmluZChzZXJ2aWNlID0+IHtcbiAgICAgIHJldHVybiBzZXJ2aWNlLmdyb3VwLnRpdGxlID09PSBlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtLmdldEF0dHJpYnV0ZSgnaXRlbS10aXRsZScpO1xuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPF9fZXNyaS5GZWF0dXJlU2V0PltdID0gW107XG5cbiAgICBpZiAoc2VydmljZUdyb3VwKSB7XG4gICAgICBjb25zdCBsYXllcnMgPSB2aWV3Lm1hcC5hbGxMYXllcnMuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VHcm91cC5ncm91cC5sYXllcnMuaW5jbHVkZXMobGF5ZXIudGl0bGUpO1xuICAgICAgfSk7XG4gICAgICBsYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIHByb21pc2VzLnB1c2goXG4gICAgICAgICAgKGxheWVyIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXIpLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgZ2VvbWV0cnk6IGdyYXBoaWMuZ2VvbWV0cnksXG4gICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKHJlc3VsdCA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5mZWF0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBfX2VzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgZS5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbS5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgbmV3IEZlYXR1cmUoeyBjb250YWluZXI6IGRpdiwgZ3JhcGhpYzogZmVhdHVyZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNjcm9sbFRvU2VydmljZShlKTtcbiAgICAgICAgaGVhZGVyLnJlbW92ZUNoaWxkKGxvYWRlcik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyLnJlbW92ZUNoaWxkKGxvYWRlcik7XG4gICAgICByZXR1cm4gJ05vIHNlcnZpY2VzIGZvdW5kLic7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNjcm9sbFRvU2VydmljZShlKTtcbiAgfVxufTtcbmNvbnN0IGRlZWRDcmVhdG9yID0gKGU6IGFueSkgPT4ge1xuICByZXR1cm4gKGUuZ3JhcGhpYy5sYXllciBhcyBGZWF0dXJlTGF5ZXIpXG4gICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHtcbiAgICAgIHJlbGF0aW9uc2hpcElkOiAoZS5ncmFwaGljLmxheWVyIGFzIEZlYXR1cmVMYXllcikucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgICByZXR1cm4gci5uYW1lID09PSAnQ09ORE9fQk9PS1MnO1xuICAgICAgfSk/LmlkLFxuICAgICAgb2JqZWN0SWRzOiBbZS5ncmFwaGljLmdldE9iamVjdElkKCldLFxuICAgICAgb3V0RmllbGRzOiBbJ0JPTV9ET0NfTlVNJywgJ0RFRURfRE9DX05VTSddXG4gICAgfSlcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgY29uc3QgZGVlZCA9IHJlc3VsdFtlLmdyYXBoaWMuZ2V0T2JqZWN0SWQoKV0uZmVhdHVyZXNbMF0uZ2V0QXR0cmlidXRlKCdERUVEX0RPQ19OVU0nKTtcbiAgICAgIGNvbnN0IGJvbSA9IHJlc3VsdFtlLmdyYXBoaWMuZ2V0T2JqZWN0SWQoKV0uZmVhdHVyZXNbMF0uZ2V0QXR0cmlidXRlKCdCT01fRE9DX05VTScpO1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7Jyk7XG4gICAgICBpZiAoZGVlZCkge1xuICAgICAgICBjb25zdCBkZWVkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1idXR0b24nKTtcbiAgICAgICAgZGVlZEJ0bi5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgJ3MnKTtcbiAgICAgICAgZGVlZEJ0bi5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgICAgZGVlZEJ0bi5zZXRBdHRyaWJ1dGUoJ3JvdW5kJywgJycpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZSgnaWNvbi1zdGFydCcsICdmaWxlLXRleHQnKTtcbiAgICAgICAgZGVlZEJ0bi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICdodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPScgKyBkZWVkICsgJyZSZWNvcmREYXRlPSdcbiAgICAgICAgKTtcblxuICAgICAgICBkZWVkQnRuLnRleHRDb250ZW50ID0gJ0RlZWQnO1xuICAgICAgICBkaXYuYXBwZW5kKGRlZWRCdG4pO1xuICAgICAgfVxuICAgICAgaWYgKGJvbSkge1xuICAgICAgICBjb25zdCBib21idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWJ1dHRvbicpO1xuICAgICAgICBib21idG4uc2V0QXR0cmlidXRlKCdzY2FsZScsICdzJyk7XG4gICAgICAgIGJvbWJ0bi5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgICAgYm9tYnRuLnNldEF0dHJpYnV0ZSgncm91bmQnLCAnJyk7XG4gICAgICAgIGJvbWJ0bi5zZXRBdHRyaWJ1dGUoJ2ljb24tc3RhcnQnLCAnbWFwJyk7XG4gICAgICAgIGJvbWJ0bi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD0nICsgYm9tICsgJyZSZWNvcmREYXRlPScpO1xuICAgICAgICBib21idG4udGV4dENvbnRlbnQgPSAnQm9vayBvZiBNYXBzJztcbiAgICAgICAgZGl2LmFwcGVuZChib21idG4pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGl2O1xuICAgIH0pO1xufTtcbmNvbnN0IHBvcHVwVGVtcGxhdGUgPSBuZXcgUG9wdXBUZW1wbGF0ZSh7XG4gIGV4cHJlc3Npb25JbmZvczogYXJjYWRlRXhwcmVzc2lvbkluZm9zLFxuICAvLyBjb250ZW50OiAoZXZlbnQ6IGFueSkgPT4ge1xuICAvLyAgIGNvbnN0IGdyYXBoaWMgPSBldmVudC5ncmFwaGljO1xuICAvLyAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWdyZWVuJyk7XG4gIC8vICAgY29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAvLyAgIGRpdi50ZXh0Q29udGVudCA9IGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdTSVRFX0FERFJFU1MnKTtcbiAgLy8gICByZXR1cm4gY29udGFpbmVyO1xuICAvLyB9LFxuICBjb250ZW50OiBbXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMT57U0lURV9BRERSRVNTfTwvaDE+J1xuICAgIH0sXG4gICAgbmV3IEN1c3RvbUNvbnRlbnQoe1xuICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgIGNyZWF0b3I6IChlOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBMb2NhdG9yKHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL21hcHMucmFsZWlnaG5jLmdvdi9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9Mb2NhdG9ycy9Db21wb3NpdGVMb2NhdG9yL0dlb2NvZGVTZXJ2ZXInLFxuICAgICAgICAgIG91dFNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9XG4gICAgICAgIH0pXG4gICAgICAgICAgLmFkZHJlc3NUb0xvY2F0aW9ucyh7XG4gICAgICAgICAgICBhZGRyZXNzOiB7IHNpbmdsZUxpbmU6IGUuZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ1NJVEVfQUREUkVTUycpIH0sXG4gICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoY2FuZGlkYXRlczogX19lc3JpLkFkZHJlc3NDYW5kaWRhdGVbXSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXMuZmluZChjYW5kaWRhdGUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGUuYXR0cmlidXRlc1snTG9jX25hbWUnXSA9PT0gJ1dha2VTdHJlZXRzJztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChjYW5kaWRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0ID0gZ2VvZGVzaWNVdGlscy5nZW9kZXNpY0Rpc3RhbmNlKGNhbmRpZGF0ZS5sb2NhdGlvbiwge1xuICAgICAgICAgICAgICAgICAgeDogKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWQubG9uZ2l0dWRlLFxuICAgICAgICAgICAgICAgICAgeTogKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWQubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSBhcyBhbnlcbiAgICAgICAgICAgICAgICB9IGFzIGFueSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGlzdC5kaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGlzdC5hemltdXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYmxsID1cbiAgICAgICAgICAgICAgICAgIChlLmdyYXBoaWMuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlnb24pLmNlbnRyb2lkLmxhdGl0dWRlICtcbiAgICAgICAgICAgICAgICAgICcsJyArXG4gICAgICAgICAgICAgICAgICAoZS5ncmFwaGljLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZC5sb25naXR1ZGU7XG4gICAgICAgICAgICAgICAgLy9jb25zdCBjYmxsID0gY2FuZGlkYXRlc1swXS5sb2NhdGlvbi55LnRvU3RyaW5nKCkgKyAnLCcgKyBjYW5kaWRhdGVzWzBdLmxvY2F0aW9uLngudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICdodHRwczovL21hcHMuZ29vZ2xlLmNvbT9sYXllcj1jJmNibGw9JyArIGNibGwgKyAnJmNicD0wLCcgKyBkaXN0LmF6aW11dGg/LnRvU3RyaW5nKCkgKyAnLDAsMCwwJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93Lm9wZW4oXG4gICAgICAgICAgICAgICAgLy8gICAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20/bGF5ZXI9YyZjYmxsPScgKyBjYmxsICsgJyZjYnA9MCwnICsgZGlzdC5hemltdXRoPy50b1N0cmluZygpICsgJywwLDAsMCdcbiAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdzsnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgJ3MnKTtcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgncm91bmQnLCAnJyk7XG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnaWNvbi1zdGFydCcsICdwZXJzb24nKTtcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbWFwcy5nb29nbGUuY29tP2xheWVyPWMmY2JsbD0nICsgY2JsbCArICcmY2JwPTAsJyArIGRpc3QuYXppbXV0aD8udG9TdHJpbmcoKSArICcsMCwwLDAnXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICdTdHJlZXQgVmlldyc7XG5cbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKGJ0bik7XG4gICAgICAgICAgICAgICAgY29uc3QgdGF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICB0YXguc2V0QXR0cmlidXRlKCdzY2FsZScsICdzJyk7XG4gICAgICAgICAgICAgICAgdGF4LnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICAgICAgICAgIHRheC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAnaHJlZicsXG4gICAgICAgICAgICAgICAgICAnaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL3JlYWxlc3RhdGUvQWNjb3VudC5hc3A/aWQ9JyArIGUuZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ1JFSUQnKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGF4LnNldEF0dHJpYnV0ZSgncm91bmQnLCAnJyk7XG4gICAgICAgICAgICAgICAgdGF4LnNldEF0dHJpYnV0ZSgnaWNvbi1zdGFydCcsICdsb2NhdG9yJyk7XG4gICAgICAgICAgICAgICAgdGF4LnRleHRDb250ZW50ID0gJ1RheCBQYWdlJztcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKHRheCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pLFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDI+R2VuZXJhbDwvaDE+J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICBmaWVsZEluZm9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL3BpbicsXG4gICAgICAgICAgbGFiZWw6ICdQSU4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdSRUlEJyxcbiAgICAgICAgICBsYWJlbDogJ1JFSUQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL2NpdHknLFxuICAgICAgICAgIGxhYmVsOiAnQ2l0eSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vanVyaXNkaWN0aW9uJyxcbiAgICAgICAgICBsYWJlbDogJ0p1cmlzZGljdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vdG93bnNoaXAnLFxuICAgICAgICAgIGxhYmVsOiAnVG93bnNoaXAnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAgLy8ge1xuICAgIC8vICAgdHlwZTogJ2N1c3RvbScsXG4gICAgLy8gICB0ZXh0OiAnPGNhbGNpdGUtYnV0dG9uIHNjYWxlPVwic1wiIGhyZWY9XCIjXCIgY2xhc3M9XCJzdHJlZXRWaWV3XCIgdGFyZ2V0PVwiX2JsYW5rXCI+U3RyZWV0IFZpZXc8L2NhbGNpdGUtYnV0dG9uPidcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDI+T3duZXI8L2gxPidcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6XG4gICAgICAgIC8vICc8aDEgY2xhc3M9XCJ0ZXh0LWdyZWVuXCI+e1NJVEVfQUREUkVTU308L2gxPicgK1xuICAgICAgICAvLyAnPGgyPkdlbmVyYWw8L2gyPntleHByZXNzaW9uL2dlbmVyYWx9JyArXG4gICAgICAgICd7T1dORVJ9PGJyLz57ZXhwcmVzc2lvbi9tYWlsaW5nLWFkZHJlc3N9J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMj5WYWx1YXRpb248L2gxPidcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdmaWVsZHMnLFxuICAgICAgZmllbGRJbmZvczogW1xuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi9idWlsZF92YWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL2xhbmRfdmFsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi90b3RhbF92YWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdCSUxMSU5HX0NMQVNTX0RFQ09ERScsXG4gICAgICAgICAgbGFiZWw6ICdCaWxsaW5nIENsYXNzJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPkxhc3QgU2FsZTwvaDE+J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICBmaWVsZEluZm9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdTQUxFX0RBVEUnLFxuICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgZGF0ZUZvcm1hdDogJ3Nob3J0LWRhdGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbDogJ0RhdGUgU29sZCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vc2FsZV9wcmljZSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMj5EZWVkczwvaDE+J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICBmaWVsZEluZm9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdERUVEX0JPT0snLFxuICAgICAgICAgIGxhYmVsOiAnQm9vaydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ0RFRURfUEFHRScsXG4gICAgICAgICAgbGFiZWw6ICdQYWdlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnREVFRF9EQVRFJyxcbiAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6ICdzaG9ydC1kYXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6ICdEZWVkIERhdGUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdERUVEX0FDUkVTJyxcbiAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgIHBsYWNlczogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6ICdEZWVkIEFjcmVzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnUFJPUERFU0MnLFxuICAgICAgICAgIGxhYmVsOiAnTGVnYWwgRGVzY3JpcHRpb24nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAgbmV3IEN1c3RvbUNvbnRlbnQoe1xuICAgICAgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSxcbiAgICAgIGNyZWF0b3I6IGRlZWRDcmVhdG9yXG4gICAgfSksXG4gICAgLy8ge1xuICAgIC8vICAgdHlwZTogJ3RleHQnLFxuICAgIC8vICAgdGV4dDpcbiAgICAvLyAnPGgxIGNsYXNzPVwidGV4dC1ncmVlblwiPntTSVRFX0FERFJFU1N9PC9oMT4nICtcbiAgICAvLyAnPGgyPkdlbmVyYWw8L2gyPntleHByZXNzaW9uL2dlbmVyYWx9JyArXG4gICAgLy8gJzxoMj5Pd25lcjwvaDI+e09XTkVSfTxici8+e2V4cHJlc3Npb24vbWFpbGluZy1hZGRyZXNzfScgK1xuICAgIC8vICc8aDI+VmFsdWF0aW9uPC9oMj57ZXhwcmVzc2lvbi9wcm9wZXJ0eS12YWx1ZXN9JyArXG4gICAgLy8gJzxoMj5TYWxlIEluZm9ybWF0aW9uPC9oMj57VE9UU0FMUFJJQ0V9PGJyLz57U0FMRV9EQVRFfScgK1xuICAgIC8vICc8aDI+RGVlZHM8L2gyPntleHByZXNzaW9uL2RlZWQtYm9vay1wYWdlfScgK1xuICAgIC8vICc8YnIvPjxzdHJvbmc+RGVlZCBEYXRlPC9zdHJvbmc+PGJyLz57REVFRF9EQVRFfTxici8+JyArXG4gICAgLy8gJzxici8+TGVnYWwgRGVzY3JpcHRpb248YnIvPntQUk9QREVTQ308YnIvPicgK1xuICAgIC8vICc8YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9ib20tZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Cb29rIG9mIE1hcHM8L2E+PGJyLz48YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9kZWVkLWRvYy1udW19JlJlY29yZERhdGU9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGVlZDwvYT4nXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPkJ1aWxkaW5nPC9oMT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnZmllbGRzJyxcbiAgICAgIGZpZWxkSW5mb3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ0hFQVRFREFSRUEnLFxuICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgZGlnaXRTZXBhcmF0b3I6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsOiAnSGVhdGVkIEFyZWEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdZRUFSX0JVSUxUJyxcbiAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgIGRpZ2l0U2VwYXJhdG9yOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6ICdZZWFyIEJ1aWx0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnREVTSUdOX1NUWUxFX0RFQ09ERScsXG4gICAgICAgICAgbGFiZWw6ICdEZXNpZ24vU3R5bGUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdUT1RTVFJVQ1RTJyxcbiAgICAgICAgICBsYWJlbDogJ1RvdGFsIFN0cnVjdHVyZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdUT1RVTklUUycsXG4gICAgICAgICAgbGFiZWw6ICdUb3RhbCBVbml0cydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ21lZGlhJyxcbiAgICAgIG1lZGlhSW5mb3M6IFtdXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPlNlcnZpY2VzPC9oMT4nXG4gICAgfSxcbiAgICBuZXcgQ3VzdG9tQ29udGVudCh7XG4gICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgY3JlYXRvcjogKGU6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBhY2NvcmRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWFjY29yZGlvbicpO1xuICAgICAgICBhY2NvcmRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3Rpb24tbW9kZScsICdzaW5nbGUnKTtcblxuICAgICAgICBzZXJ2aWNlcy5mb3JFYWNoKHNlcnZpY2UgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWFjY29yZGlvbi1pdGVtJyk7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2l0ZW0tdGl0bGUnLCBzZXJ2aWNlLmdyb3VwLnRpdGxlKTtcbiAgICAgICAgICBhY2NvcmRpb24uYXBwZW5kKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy9jb25zdCBmID0gc2VydmljZUNoYW5nZWQuYmluZChlLkdyYXBoaWMpO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KGYsIDEwMDApO1xuICAgICAgICBjb25zdCBncmFwaGljID0gZS5ncmFwaGljO1xuICAgICAgICBhY2NvcmRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUFjY29yZGlvbkNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICBzZXJ2aWNlQ2hhbmdlZChncmFwaGljLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2NvcmRpb247XG4gICAgICB9XG4gICAgfSlcbiAgXVxufSk7XG5cbmV4cG9ydCBjb25zdCBmZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnZTQ2NjRmZjUwMDU3NDc4OWIyOGUzMDk3N2JkMDJmNWEnXG4gIH0sXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgY29uZG9zVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnZTQ2NjRmZjUwMDU3NDc4OWIyOGUzMDk3N2JkMDJmNWEnXG4gIH0sXG4gIGxheWVySWQ6IDMsXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH0sXG4gIHBvcHVwVGVtcGxhdGU6IHBvcHVwVGVtcGxhdGVcbn0pO1xuY29uZG9zVGFibGUubG9hZCgpO1xuZXhwb3J0IGNvbnN0IGFkZHJlc3NUYWJsZSA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICBwb3J0YWxJdGVtOiB7XG4gICAgaWQ6ICdlNDY2NGZmNTAwNTc0Nzg5YjI4ZTMwOTc3YmQwMmY1YSdcbiAgfSxcbiAgbGF5ZXJJZDogMSxcbiAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfVxufSk7XG5hZGRyZXNzVGFibGUubG9hZCgpO1xuZXhwb3J0ICogZnJvbSAnLi9hcHAnO1xuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuaW1wb3J0IFNrZXRjaCBmcm9tICdlc3JpL3dpZGdldHMvU2tldGNoJztcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcbmltcG9ydCBUZXh0U3ltYm9sIGZyb20gJ2Vzcmkvc3ltYm9scy9UZXh0U3ltYm9sJztcblxuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IHsgbWVhc3VyZW1lbnQgfSBmcm9tICcuLi8uLi93aWRnZXRzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5EcmF3LkRyYXdWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd1ZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICBza2V0Y2g6IFNrZXRjaDtcbiAgZ3JhcGhpY3M6IEdyYXBoaWNzTGF5ZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRleHRDb2xvcjogZXNyaS5Db2xvcjtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0RHJhdygpIHtcbiAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnIH0pO1xuICAgIHRoaXMudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MpO1xuXG4gICAgdGhpcy5za2V0Y2ggPSBuZXcgU2tldGNoKHsgdmlldzogdGhpcy52aWV3LCBjb250YWluZXI6ICdza2V0Y2hEaXYnLCBsYXllcjogdGhpcy5ncmFwaGljcywgY3JlYXRpb25Nb2RlOiAnc2luZ2xlJyB9KTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG4gICAgKHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBhbnkpLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoW1syNTUsIDAsIDAsIDAuNV1dKTtcbiAgICAodGhpcy5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wgYXMgYW55KS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcblxuICAgIHRoaXMuc2tldGNoLndhdGNoKCdhY3RpdmVUb29sJywgdG9vbCA9PiB7XG4gICAgICBpZiAodG9vbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLm9uKCdjcmVhdGUnLCBlID0+IHtcbiAgICAgIGlmIChlLnN0YXRlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICAgIGlmIChlLnN0YXRlID09PSAnY29tcGxldGUnICYmIHRoaXMubGFiZWw/Lmxlbmd0aCkge1xuICAgICAgICBsZXQgbGFiZWxQb2ludDogZXNyaS5HZW9tZXRyeSA9IGUuZ3JhcGhpYy5nZW9tZXRyeTtcbiAgICAgICAgaWYgKGUuZ3JhcGhpYy5nZW9tZXRyeS50eXBlID09PSAncG9seWdvbicpIHtcbiAgICAgICAgICBsYWJlbFBvaW50ID0gKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBlc3JpLlBvbHlnb24pLmNlbnRyb2lkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZyA9IG5ldyBHcmFwaGljKHtcbiAgICAgICAgICBnZW9tZXRyeTogbGFiZWxQb2ludCxcbiAgICAgICAgICBzeW1ib2w6IG5ldyBUZXh0U3ltYm9sKHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMubGFiZWwsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgICAgICBoYWxvQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBoYWxvU2l6ZTogMSxcbiAgICAgICAgICAgIHhvZmZzZXQ6ICc1cHgnLFxuICAgICAgICAgICAgeW9mZnNldDogJzVweCcsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAncmlnaHQnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IERyYXdWaWV3TW9kZWwgZnJvbSAnLi9EcmF3L0RyYXdWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBkcmF3LWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkRyYXcnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxhYmVsJylcbiAgbGFiZWw6IHN0cmluZztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC50ZXh0Q29sb3InKVxuICB0ZXh0Q29sb3I6IENvbG9yO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IERyYXdWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IERyYXdWaWV3TW9kZWwgPSBuZXcgRHJhd1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBEcmF3UHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX2RyYXdVcGRhdGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy52aWV3TW9kZWwuc2tldGNoKSB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5pbml0RHJhdygpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxsJyk7XG4gICAgZmlsbD8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgZmlsbD8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgfSk7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaW5lJyk7XG4gICAgbGluZT8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgbGluZT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWxpbmVTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9wYWNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BhY2l0eScpO1xuICAgIG9wYWNpdHk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IuYSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpZHRoJyk7XG4gICAgd2lkdGg/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbCBhcyBlc3JpLlNpbXBsZUxpbmVTeW1ib2wpLndpZHRoID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS53aWR0aCA9IHBhcnNlRmxvYXQoXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUud2lkdGggPSBwYXJzZUZsb2F0KFxuICAgICAgICBlLnRhcmdldC52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbCcpO1xuICAgIGxhYmVsPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ2xhYmVsJywgZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRleHRDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0Q29sb3InKTtcbiAgICB0ZXh0Q29sb3I/LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnI2ZmMDAwMCcpO1xuICAgIHRleHRDb2xvcj8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ3RleHRDb2xvcicsIENvbG9yLmZyb21IZXgoZS50YXJnZXQudmFsdWUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyVXBkYXRlPXt0aGlzLl9kcmF3VXBkYXRlZH0gaWQ9XCJza2V0Y2hEaXZcIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtYmxvY2sgaGVhZGluZz1cIlNldHRpbmdzXCIgb3BlbiBjb2xsYXBzaWJsZT5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJDb2xvclwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIEZpbGwgQ29sb3IgPGNhbGNpdGUtY29sb3IgaWQ9XCJmaWxsXCIgaGlkZUNoYW5uZWxzIGhpZGVTYXZlZCBhcHBlYXJhbmNlPVwibWluaW1hbFwiIHNjYWxlPVwic1wiPjwvY2FsY2l0ZS1jb2xvcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBMaW5lIENvbG9yIDxjYWxjaXRlLWNvbG9yIGlkPVwibGluZVwiIGhpZGVDaGFubmVscyBoaWRlU2F2ZWQgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBzY2FsZT1cInNcIj48L2NhbGNpdGUtY29sb3I+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiRmlsbCBPcGFjaXR5XCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgT3BhY2l0eTxjYWxjaXRlLXNsaWRlciBzY2FsZT1cInNcIiBpZD1cIm9wYWNpdHlcIiBtYXg9XCIxXCIgbWluPVwiMFwiIHZhbHVlPVwiMC41XCIgc3RlcD1cIjAuMVwiPjwvY2FsY2l0ZS1zbGlkZXI+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiT3V0bGluZVwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIFdpZHRoIDxjYWxjaXRlLXNsaWRlciBpZD1cIndpZHRoXCIgbWF4PVwiMTBcIiBtaW49XCIwXCIgdmFsdWU9XCIxXCIgc3RlcD1cIjAuNVwiPjwvY2FsY2l0ZS1zbGlkZXI+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiTGFiZWxpbmdcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBMYWJlbCA8Y2FsY2l0ZS1pbnB1dCBzY2FsZT1cInNcIiBpZD1cImxhYmVsXCIgdHlwZT1cInRleHRhcmVhXCI+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIFRleHQgQ29sb3JcbiAgICAgICAgICAgICAgPGNhbGNpdGUtY29sb3IgaWQ9XCJ0ZXh0Q29sb3JcIiBoaWRlQ2hhbm5lbHMgaGlkZVNhdmVkIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgc2NhbGU9XCJzXCI+PC9jYWxjaXRlLWNvbG9yPlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgIDwvY2FsY2l0ZS1ibG9jay1zZWN0aW9uPlxuICAgICAgICA8L2NhbGNpdGUtYmxvY2s+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgU2tldGNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gnO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5cbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCB7IG1lYXN1cmVtZW50IH0gZnJvbSAnLi4vLi4vd2lkZ2V0cyc7XG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLlNlbGVjdC5TZWxlY3RWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0Vmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQHByb3BlcnR5KCkgbGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAnc2tldGNoJywgdGhpcy5pbml0U2tldGNoLmJpbmQodGhpcykpO1xuICB9XG4gIHNrZXRjaDogZXNyaS5Ta2V0Y2g7XG4gIGJ1ZmZlckRpc3RhbmNlOiBudW1iZXI7XG4gIGdyYXBoaWNzOiBHcmFwaGljc0xheWVyO1xuXG4gIEBwcm9wZXJ0eSgpIGdlb21ldHJ5OiBlc3JpLkdlb21ldHJ5O1xuICBpbml0U2tldGNoKCkge1xuICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiAnaGlkZScgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljcyk7XG4gICAgdGhpcy5za2V0Y2ggPSBuZXcgU2tldGNoKHtcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIGNvbnRhaW5lcjogJ3NlbGVjdFdpZGdldCcsXG4gICAgICBsYXllcjogdGhpcy5ncmFwaGljcyxcbiAgICAgIGNyZWF0aW9uTW9kZTogJ3NpbmdsZSdcbiAgICB9KTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwudXBkYXRlT25HcmFwaGljQ2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLnNrZXRjaC5vbignY3JlYXRlJywgZXYgPT4ge1xuICAgICAgaWYgKGV2LnN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlckRpc3RhbmNlID4gMCkge1xuICAgICAgICAgIGNvbnN0IGcgPSBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0J1ZmZlcihldi5ncmFwaGljLmdlb21ldHJ5LCB0aGlzLmJ1ZmZlckRpc3RhbmNlLCAnZmVldCcpO1xuICAgICAgICAgIC8vcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBnIGFzIF9fZXNyaS5Qb2x5Z29uO1xuICAgICAgICAgIGV2LmdyYXBoaWMuZ2VvbWV0cnkgPSBnIGFzIF9fZXNyaS5Qb2x5Z29uO1xuICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGV2LmdyYXBoaWMpO1xuICAgICAgICAgIGV2LmdyYXBoaWMuc3ltYm9sID0ge1xuICAgICAgICAgICAgdHlwZTogJ3NpbXBsZS1maWxsJyxcbiAgICAgICAgICAgIHN0eWxlOiAnbm9uZScsXG4gICAgICAgICAgICBvdXRsaW5lOiB7IHN0eWxlOiAnc2hvcnQtZGFzaCcsIHdpZHRoOiAyLjUsIGNvbG9yOiBbMjIxLCAyMjEsIDIyMSwgMV0gfSxcbiAgICAgICAgICAgIGNvbG9yOiBuZXcgQ29sb3IoWzI1NSwgMjQzLCAxMywgMC4yNV0pXG4gICAgICAgICAgfSBhcyBhbnk7XG4gICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IGV2LmdyYXBoaWMuZ2VvbWV0cnkgYXMgZXNyaS5HZW9tZXRyeTtcbiAgICAgICAgICB0aGlzLnZpZXcuZ29Ubyhldi5ncmFwaGljKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gZXYuZ3JhcGhpYy5nZW9tZXRyeSBhcyBlc3JpLkdlb21ldHJ5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXYuc3RhdGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLndhdGNoKCdhY3RpdmVUb29sJywgdG9vbCA9PiB7XG4gICAgICBpZiAodG9vbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgICB0aGlzLnNldCgnYnVmZmVyRGlzdGFuY2UnLCAwKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuXG5pbXBvcnQgU2VsZWN0Vmlld01vZGVsIGZyb20gJy4vU2VsZWN0L1NlbGVjdFZpZXdNb2RlbCc7XG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIGxheWVyPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IHNlbGVjdC1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5TZWxlY3QnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubGF5ZXInKVxuICBsYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuc2tldGNoJylcbiAgc2tldGNoOiBlc3JpLlNrZXRjaDtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5idWZmZXJEaXN0YW5jZScpXG4gIGJ1ZmZlckRpc3RhbmNlOiBudW1iZXI7XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogU2VsZWN0Vmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBTZWxlY3RWaWV3TW9kZWwgPSBuZXcgU2VsZWN0Vmlld01vZGVsKCk7XG4gIF9za2V0Y2hDcmVhdGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy52aWV3TW9kZWwuc2tldGNoKSB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5pbml0U2tldGNoKCk7XG4gICAgfVxuICB9O1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogU2VsZWN0UHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2OiBhbnkpIHtcbiAgICB0aGlzLnNldCgnYnVmZmVyRGlzdGFuY2UnLCBwYXJzZUludChldi50YXJnZXQudmFsdWUpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdERpdiBjYWxjaXRlLWlucHV0Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVJbnB1dEJsdXInLCAoZXY6IGFueSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoZXYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlclVwZGF0ZT17dGhpcy5fc2tldGNoQ3JlYXRlZH0gaWQ9XCJzZWxlY3RXaWRnZXRcIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgQnVmZmVyIERpc3RhbmNlIChmZWV0KVxuICAgICAgICAgIDxjYWxjaXRlLWlucHV0XG4gICAgICAgICAgICBzY2FsZT1cInNcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjIwMDBcIlxuICAgICAgICAgICAgc3RlcD1cIjUwXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnZpZXdNb2RlbC5idWZmZXJEaXN0YW5jZX1cbiAgICAgICAgICA+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuaW1wb3J0IEJhc2VNYXBHYWxsZXJ5IGZyb20gJ2Vzcmkvd2lkZ2V0cy9CYXNlbWFwR2FsbGVyeSc7XG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQmFzZU1hcHMuQmFzZU1hcHNWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1hcHNWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBiYXNlbWFwczogQmFzZU1hcEdhbGxlcnk7XG4gIGltYWdlczogQmFzZU1hcEdhbGxlcnk7XG5cbiAgYWN0aXZlQmFzZW1hcDogZXNyaS5CYXNlbWFwO1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNoYW5nZVByb3BlcnR5TGluZXMgPSAoYmFzZW1hcDogZXNyaS5CYXNlbWFwKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlMYXllcjogRmVhdHVyZUxheWVyID0gdGhpcy52aWV3Lm1hcC5hbGxMYXllcnMuZmluZChsYXllciA9PiB7XG4gICAgICByZXR1cm4gbGF5ZXIudHlwZSA9PT0gJ2ZlYXR1cmUnICYmIGxheWVyLnRpdGxlID09PSAnUHJvcGVydHknO1xuICAgIH0pIGFzIEZlYXR1cmVMYXllcjtcbiAgICBjb25zdCBuZXdSZW5kZXJlcjogZXNyaS5TaW1wbGVSZW5kZXJlciA9IChwcm9wZXJ0eUxheWVyLnJlbmRlcmVyIGFzIGVzcmkuU2ltcGxlUmVuZGVyZXIpLmNsb25lKCkgYXMgZXNyaS5TaW1wbGVSZW5kZXJlcjtcbiAgICBpZiAoXG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2RhcmsnKSB8fFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCduaWdodCcpIHx8XG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2RhcmsnKSB8fFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJzIwJykgfHxcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCcxOScpXG4gICAgKSB7XG4gICAgICAobmV3UmVuZGVyZXIuc3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS5jb2xvciA9IG5ldyBDb2xvcihbMjU1LCAyNTUsIDI1NSwgMC41XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIChuZXdSZW5kZXJlci5zeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gbmV3IENvbG9yKFswLCAwLCAwLCAwLjVdKTtcbiAgICB9XG4gICAgcHJvcGVydHlMYXllci5yZW5kZXJlciA9IG5ld1JlbmRlcmVyO1xuICB9O1xuXG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICB0aGlzLmJhc2VtYXBzID0gbmV3IEJhc2VNYXBHYWxsZXJ5KHsgdmlldzogdGhpcy52aWV3IH0pO1xuICAgIHRoaXMudmlldy53aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlUHJvcGVydHlMaW5lcyh0aGlzLnZpZXcubWFwLmJhc2VtYXApO1xuICAgIH0pO1xuICAgIHRoaXMudmlldy5tYXAud2F0Y2goJ2Jhc2VtYXAnLCAoYmFzZW1hcDogZXNyaS5CYXNlbWFwKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVByb3BlcnR5TGluZXMoYmFzZW1hcCk7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpPy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKTtcbiAgICAgICAgICB0aGlzLnZpZXcubWFwLnJlbW92ZSh0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcCA9IHRoaXMudmlldy5tYXAuYmFzZW1hcDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU3dpdGNoJyk/LnJlbW92ZUF0dHJpYnV0ZSgnc3dpdGNoZWQnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJtID0gdGhpcy5pbWFnZXMudmlld01vZGVsLml0ZW1zLmZpbmQoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLmJhc2VtYXAudGl0bGUgPT09IHRoaXMudmlldy5tYXAuYmFzZW1hcC50aXRsZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGJtICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFN3aXRjaCcpPy5oYXNBdHRyaWJ1dGUoJ3N3aXRjaGVkJykpIHtcbiAgICAgICAgdGhpcy52aWV3Lm1hcC5hZGRNYW55KHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLnRvQXJyYXkoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYWN0aXZlQmFzZW1hcCA9IHRoaXMudmlldy5tYXAuYmFzZW1hcDtcbiAgICB0aGlzLmltYWdlcyA9IG5ldyBCYXNlTWFwR2FsbGVyeSh7XG4gICAgICB2aWV3OiB0aGlzLnZpZXcsXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBpZDogJzQ5MjM4Njc1OWQyNjRkNDk5NDhiZjdmODM5NTdkZGI5J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKTtcbiAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGpzb24gPSAodmlldy5tYXAgYXMgYW55KS50b0pTT04oKTtcbiAgICAgIGpzb24uaW5pdGlhbFN0YXRlLnZpZXdwb2ludC50YXJnZXRHZW9tZXRyeSA9IHZpZXcuZXh0ZW50O1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbWFwcycsIEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbiAgICB9KTtcbiAgfVxuICB0b2dnbGVDb250ZW50ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgPT09ICdtYXBzJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHMnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHNJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXNJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHMnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwc0l0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IEJhc2VNYXBzVmlld01vZGVsIGZyb20gJy4vQmFzZU1hcHMvQmFzZU1hcHNWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VNYXBzUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgYmFzZW1hcHMtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQmFzZU1hcHMnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1hcHMgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBAYWxpYXNPZigndmlld01vZGVsLmJhc2VtYXBzJylcbiAgYmFzZW1hcHM6IGVzcmkuQmFzZW1hcEdhbGxlcnk7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuaW1hZ2VzJylcbiAgaW1hZ2VzOiBlc3JpLkJhc2VtYXBHYWxsZXJ5O1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IEJhc2VNYXBzVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBCYXNlTWFwc1ZpZXdNb2RlbCA9IG5ldyBCYXNlTWFwc1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBCYXNlTWFwc1Byb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuICBfY3JlYXRlTWFwcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5iYXNlbWFwcykge1xuICAgICAgdGhpcy5iYXNlbWFwcy5jb250YWluZXIgPSAnbWFwcyc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlSW1hZ2VzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgdGhpcy5pbWFnZXMuY29udGFpbmVyID0gJ2ltYWdlcyc7XG4gICAgfVxuICB9O1xuICBoYW5kbGVTd2l0Y2hDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnc3dpdGNoZWQnKSAhPSAnJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgY29uc29sZS5sb2coJ2FkZCcpO1xuICAgICAgdGhpcy52aWV3Lm1hcC5hZGRNYW55KHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy50b0FycmF5KCksIDApO1xuICAgICAgdGhpcy52aWV3Lm1hcC5iYXNlbWFwLnJlZmVyZW5jZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgbGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnZpZXcubWFwLmxheWVyc1xuICAgICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy52aWV3TW9kZWwuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmluY2x1ZGVzKGxheWVyKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgIGxheWVyLm9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgbGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTbGlkZXInKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB0aGlzLnZpZXcubWFwLmJhc2VtYXAucmVmZXJlbmNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBsYXllci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy52aWV3TW9kZWwuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBoYW5kbGVTbGlkZXJDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgbGF5ZXJzID0gdGhpcy52aWV3Lm1hcC5sYXllcnNcbiAgICAgIC5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3TW9kZWwuYWN0aXZlQmFzZW1hcD8uYmFzZUxheWVycy5pbmNsdWRlcyhsYXllcik7XG4gICAgICB9KVxuICAgICAgLnRvQXJyYXkoKTtcbiAgICBsYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICBsYXllci5vcGFjaXR5ID0gcGFyc2VGbG9hdChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9zbGlkZXJDcmVhdGVkID0gKGU6IGFueSkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJylcbiAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLFxuICAgICAgICB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZS5iaW5kKHsgYmFzZW1hcDogdGhpcy5iYXNlbWFwcywgdmlldzogdGhpcy52aWV3IH0pXG4gICAgICApO1xuICB9O1xuICBfYmxlbmRDcmVhdGVkID0gKGU6IGFueSkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignI2JsZW5kU3dpdGNoJylcbiAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NhbGNpdGVTd2l0Y2hDaGFuZ2UnLFxuICAgICAgICB0aGlzLmhhbmRsZVN3aXRjaENoYW5nZS5iaW5kKHsgYmFzZW1hcDogdGhpcy5iYXNlbWFwcywgdmlldzogdGhpcy52aWV3IH0pXG4gICAgICApO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kJyk/LnJlbW92ZUF0dHJpYnV0ZSgnc3dpdGNoZWQnKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYmFzZW1hcERpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAvLyBjYW4gSSBnZXQgY2hlY2tlZCBhbmQgdmFsdWUgbGlrZSB0aGlzP1xuICAgICAgICBpZiAoZS50YXJnZXQ/LmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLnZpZXdNb2RlbC50b2dnbGVDb250ZW50KGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiaGlkZGVuXCIgaWQ9XCJibGVuZFwiPlxuICAgICAgICAgIDxjYWxjaXRlLXN3aXRjaCBhZnRlckNyZWF0ZT17dGhpcy5fYmxlbmRDcmVhdGVkfSBpZD1cImJsZW5kU3dpdGNoXCI+PC9jYWxjaXRlLXN3aXRjaD4gQmxlbmRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGNhbGNpdGUtc2xpZGVyXG4gICAgICAgICAgYWZ0ZXJDcmVhdGU9e3RoaXMuX3NsaWRlckNyZWF0ZWR9XG4gICAgICAgICAgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgICAgIGlkPVwiYmxlbmRTbGlkZXJcIlxuICAgICAgICAgIHZhbHVlPVwiMC41XCJcbiAgICAgICAgICBtYXg9XCIxXCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBzdGVwPVwiMC4xXCJcbiAgICAgICAgPjwvY2FsY2l0ZS1zbGlkZXI+XG5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlTWFwc30gaWQ9XCJtYXBzXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUltYWdlc30gaWQ9XCJpbWFnZXNcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdmFsdWU9XCJtYXBzXCIgaWQ9XCJtYXBzSXRlbVwiPlxuICAgICAgICAgICAgTWFwc1xuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdmFsdWU9XCJpbWFnZXNcIiBpZD1cImltYWdlc0l0ZW1cIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIEltYWdlcnlcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgTGF5ZXJMaXN0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9MYXllckxpc3QnO1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5MYXllcnMuTGF5ZXJzVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyc1ZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIGxheWVyTGlzdDogZXNyaS5MYXllckxpc3Q7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gICAgdGhpcy5sYXllckxpc3QgPSBuZXcgTGF5ZXJMaXN0KHtcbiAgICAgIHZpZXcsXG4gICAgICBjb250YWluZXI6ICdsYXllckRpdicsXG4gICAgICBsaXN0SXRlbUNyZWF0ZWRGdW5jdGlvbjogZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZXZlbnQuaXRlbTtcbiAgICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSAhPSAnZ3JvdXAnKSB7XG4gICAgICAgICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1zbGlkZXInKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtaW4nLCAnMCcpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21heCcsICcxMDAnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtaW4tbGFiZWwnLCAnMCUnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtYXgtbGFiZWwnLCAnMTAwJScpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2xhYmVsLWhhbmRsZXMnLCAnJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAoaXRlbT8ubGF5ZXIub3BhY2l0eSAqIDEwMCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnZGF0YScsIGl0ZW0ubGF5ZXIuaWQpO1xuICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlU2xpZGVyVXBkYXRlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdmlldy5tYXAuZmluZExheWVyQnlJZCgoZXZlbnQudGFyZ2V0IGFzIGFueSkuZ2V0QXR0cmlidXRlKCdkYXRhJykpLm9wYWNpdHkgPVxuICAgICAgICAgICAgICBwYXJzZUludCgoZXZlbnQ/LnRhcmdldCBhcyBhbnkpPy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpIC8gMTAwO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGl0ZW0ucGFuZWwgPSB7XG4gICAgICAgICAgICBjb250ZW50OiBbc2xpZGVyLCAnbGVnZW5kJ10sXG4gICAgICAgICAgICBvcGVuOiBpdGVtLmxheWVyLnZpc2libGVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpdGVtLmxheWVyLnRpdGxlID09PSAnUHJvcGVydHknKSB7XG4gICAgICAgICAgICBpdGVtLmFjdGlvbnNTZWN0aW9ucyA9IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2hvdyBMYWJlbHMnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3RvZ2dsZScsXG4gICAgICAgICAgICAgICAgICBpZDogJ3Byb3BlcnR5LWxhYmVscycsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5sYXllci5sYWJlbHNWaXNpYmxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubGF5ZXJMaXN0Lm9uKCd0cmlnZ2VyLWFjdGlvbicsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5hY3Rpb24uaWQgPT09ICdwcm9wZXJ0eS1sYWJlbHMnKSB7XG4gICAgICAgIChldmVudC5pdGVtLmxheWVyIGFzIGVzcmkuRmVhdHVyZUxheWVyKS5sYWJlbHNWaXNpYmxlID0gKGV2ZW50LmFjdGlvbiBhcyBlc3JpLkFjdGlvblRvZ2dsZSkudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IExheWVyc1ZpZXdNb2RlbCBmcm9tICcuL0xheWVycy9MYXllcnNWaWV3TW9kZWwnO1xuaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5ZXJzUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbGF5ZXJzLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxheWVycycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllcnMgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5sYXllckxpc3QnKVxuICBsYXllckxpc3Q6IGVzcmkuTGF5ZXJMaXN0O1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTGF5ZXJzVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBMYXllcnNWaWV3TW9kZWwgPSBuZXcgTGF5ZXJzVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IExheWVyc1Byb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuICBmaWx0ZXJMYXllcnMgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHRoaXMubGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMuZm9yRWFjaCgoaXRlbTogZXNyaS5MaXN0SXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICBsZXQgb3BlbiA9IGZhbHNlO1xuICAgICAgICAoaXRlbS5sYXllciBhcyBlc3JpLkdyb3VwTGF5ZXIpLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBpZiAobGF5ZXIudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgbGF5ZXIubGlzdE1vZGUgPSAnc2hvdyc7XG4gICAgICAgICAgICBvcGVuID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGF5ZXIubGlzdE1vZGUgPSAnaGlkZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICBpdGVtLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCNsYXllckRpdl8keyhpdGVtIGFzIGFueSkudWlkfV9fdGl0bGVgKVxuICAgICAgICAgICAgPy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIGlmICghb3Blbikge1xuICAgICAgICAgIGl0ZW0ub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgI2xheWVyRGl2XyR7KGl0ZW0gYXMgYW55KS51aWR9X190aXRsZWApXG4gICAgICAgICAgICA/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0ub3BlbiA9IHRydWU7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjbGF5ZXJEaXZfJHsoaXRlbSBhcyBhbnkpLnVpZH1fX3RpdGxlYClcbiAgICAgICAgICAgID8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgX2NyZWF0ZUxheWVycyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5sYXllckxpc3QpIHtcbiAgICAgIHRoaXMubGF5ZXJMaXN0LmNvbnRhaW5lciA9ICdsYXllcldpZGdldCc7XG4gICAgfVxuICB9O1xuICBjbGVhckNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuZmlsdGVyTGF5ZXJzKCcnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXllclNlYXJjaCAuY2FsY2l0ZS1pbnB1dC1jbGVhci1idXR0b24nKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsZWFyQ2xpY2spO1xuICB9O1xuICBfY3JlYXRlU2VhcmNoID0gKGlucHV0OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5maWx0ZXJMYXllcnMoZS50YXJnZXQudmFsdWUpO1xuICAgICAgaW5wdXQucXVlcnlTZWxlY3RvcignLmNhbGNpdGUtaW5wdXQtY2xlYXItYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGVhckNsaWNrKTtcbiAgICB9KTtcbiAgfTtcbiAgX3Jlc2V0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgbmV3IFdlYk1hcCh7IHBvcnRhbEl0ZW06ICh0aGlzLnZpZXcubWFwIGFzIGVzcmkuV2ViTWFwKS5wb3J0YWxJdGVtLmNsb25lKCkgfSkubG9hZCgpLnRoZW4oKG1hcDogV2ViTWFwKSA9PiB7XG4gICAgICAgIG1hcC5hbGxMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgdGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKS52aXNpYmxlID0gbGF5ZXIudmlzaWJsZTtcbiAgICAgICAgICBpZiAobGF5ZXIudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgICAgKGxheWVyIGFzIGVzcmkuR3JvdXBMYXllcikubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpLnZpc2libGUgPSBsYXllci52aXNpYmxlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHN0aWNreVwiPlxuICAgICAgICAgIDxjYWxjaXRlLWlucHV0XG4gICAgICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyIGJ5IGxheWVyIG5hbWVcIlxuICAgICAgICAgICAgc2NhbGU9XCJzXCJcbiAgICAgICAgICAgIGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVTZWFyY2h9XG4gICAgICAgICAgICBpZD1cImxheWVyU2VhcmNoXCJcbiAgICAgICAgICA+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICAgIDxjYWxjaXRlLWJ1dHRvbiBpY29uLXN0YXJ0PVwidmlld0hpZGVcIiBzY2FsZT1cInNcIiBjb2xvcj1cImxpZ2h0XCIgb25jbGljaz17dGhpcy5fcmVzZXR9PjwvY2FsY2l0ZS1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUxheWVyc30gaWQ9XCJsYXllcldpZGdldFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxvY2F0aW9uU2VhcmNoLkxvY2F0aW9uU2VhcmNoVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uU2VhcmNoVmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBzZWFyY2g6IFNlYXJjaDtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdGhpcy5zZWFyY2ggPSBuZXcgU2VhcmNoKHsgdmlldzogdmlldywgbWF4U3VnZ2VzdGlvbnM6IDMwLCBzZWFyY2hBbGxFbmFibGVkOiBmYWxzZSB9KTtcbiAgICB0aGlzLnNlYXJjaC5hbGxTb3VyY2VzLm9uKCdhZnRlci1hZGQnLCBlID0+IHtcbiAgICAgIGlmICgoZS5pdGVtIGFzIGFueSkubGF5ZXIpIHtcbiAgICAgICAgZS5pdGVtLm5hbWUgPSAoZS5pdGVtIGFzIGFueSkubGF5ZXIudGl0bGU7XG4gICAgICAgIGUuaXRlbS5wbGFjZWhvbGRlciA9IChlLml0ZW0gYXMgYW55KS5sYXllci50aXRsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IExvY2F0aW9uU2VhcmNoVmlld01vZGVsIGZyb20gJy4vTG9jYXRpb25TZWFyY2gvTG9jYXRpb25TZWFyY2hWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uU2VhcmNoUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbG9jYXRpb25zZWFyY2gtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTG9jYXRpb25TZWFyY2gnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25TZWFyY2ggZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBAYWxpYXNPZigndmlld01vZGVsLnNlYXJjaCcpXG4gIHNlYXJjaDogZXNyaS53aWRnZXRzU2VhcmNoO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTG9jYXRpb25TZWFyY2hWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IExvY2F0aW9uU2VhcmNoVmlld01vZGVsID0gbmV3IExvY2F0aW9uU2VhcmNoVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IExvY2F0aW9uU2VhcmNoUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX3NlYXJjaENyZWF0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgIHRoaXMuc2VhcmNoLmNvbnRhaW5lciA9ICdsb2NhdGlvblNlYXJjaCc7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9zZWFyY2hDcmVhdGV9IGlkPVwibG9jYXRpb25TZWFyY2hcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuaW1wb3J0IE1hcFZpZXcgZnJvbSAnZXNyaS92aWV3cy9NYXBWaWV3JztcbmltcG9ydCBNYXAgZnJvbSAnZXNyaS9NYXAnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IHdhdGNoVXRpbHMgZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLk92ZXJ2aWV3TWFwLk92ZXJ2aWV3TWFwVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJ2aWV3TWFwVmlld01vZGVsIGV4dGVuZHMgZGVjbGFyZWQoQWNjZXNzb3IpIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgb3ZlcnZpZXdNYXBWaWV3OiBlc3JpLk1hcFZpZXc7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cbiAgc3RvcEV2dFByb3BhZ2F0aW9uID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICBkaXNhYmxlWm9vbWluZyA9ICh2aWV3OiBhbnkpID0+IHtcbiAgICB2aWV3LnBvcHVwLmRvY2tFbmFibGVkID0gdHJ1ZTtcblxuICAgIC8vIFJlbW92ZXMgdGhlIHpvb20gYWN0aW9uIG9uIHRoZSBwb3B1cFxuICAgIHZpZXcucG9wdXAuYWN0aW9ucyA9IFtdO1xuXG4gICAgLy8gc3RvcHMgcHJvcGFnYXRpb24gb2YgZGVmYXVsdCBiZWhhdmlvciB3aGVuIGFuIGV2ZW50IGZpcmVzXG5cbiAgICAvLyBleGx1ZGUgdGhlIHpvb20gd2lkZ2V0IGZyb20gdGhlIGRlZmF1bHQgVUlcbiAgICB2aWV3LnVpLmNvbXBvbmVudHMgPSBbJ2F0dHJpYnV0aW9uJ107XG5cbiAgICAvLyBkaXNhYmxlIG1vdXNlIHdoZWVsIHNjcm9sbCB6b29taW5nIG9uIHRoZSB2aWV3XG4gICAgdmlldy5vbignbW91c2Utd2hlZWwnLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG5cbiAgICAvLyBkaXNhYmxlIHpvb21pbmcgdmlhIGRvdWJsZS1jbGljayBvbiB0aGUgdmlld1xuICAgIHZpZXcub24oJ2RvdWJsZS1jbGljaycsIHRoaXMuc3RvcEV2dFByb3BhZ2F0aW9uKTtcblxuICAgIC8vIGRpc2FibGUgem9vbWluZyBvdXQgdmlhIGRvdWJsZS1jbGljayArIENvbnRyb2wgb24gdGhlIHZpZXdcbiAgICB2aWV3Lm9uKCdkb3VibGUtY2xpY2snLCBbJ0NvbnRyb2wnXSwgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuXG4gICAgLy8gZGlzYWJsZXMgcGluY2gtem9vbSBhbmQgcGFubmluZyBvbiB0aGUgdmlld1xuICAgIHZpZXcub24oJ2RyYWcnLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG5cbiAgICAvLyBkaXNhYmxlIHRoZSB2aWV3J3Mgem9vbSBib3ggdG8gcHJldmVudCB0aGUgU2hpZnQgKyBkcmFnXG4gICAgLy8gYW5kIFNoaWZ0ICsgQ29udHJvbCArIGRyYWcgem9vbSBnZXN0dXJlcy5cbiAgICB2aWV3Lm9uKCdkcmFnJywgWydTaGlmdCddLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG4gICAgdmlldy5vbignZHJhZycsIFsnU2hpZnQnLCAnQ29udHJvbCddLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG5cbiAgICAvLyBwcmV2ZW50cyB6b29taW5nIHdpdGggdGhlICsgYW5kIC0ga2V5c1xuICAgIHZpZXcub24oJ2tleS1kb3duJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHByb2hpYml0ZWRLZXlzID0gWycrJywgJy0nLCAnU2hpZnQnLCAnXycsICc9J107XG4gICAgICBjb25zdCBrZXlQcmVzc2VkID0gZXZlbnQua2V5O1xuICAgICAgaWYgKHByb2hpYml0ZWRLZXlzLmluZGV4T2Yoa2V5UHJlc3NlZCkgIT09IC0xKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpZXc7XG4gIH07XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoeyBiYXNlbWFwOiAnc3RyZWV0cy1uYXZpZ2F0aW9uLXZlY3RvcicgfSk7XG4gICAgdGhpcy5vdmVydmlld01hcFZpZXcgPSBuZXcgTWFwVmlldyh7IG1hcDogbWFwLCBleHRlbnQ6IHZpZXcuZXh0ZW50IH0pO1xuICAgIHRoaXMuZGlzYWJsZVpvb21pbmcodGhpcy5vdmVydmlld01hcFZpZXcpO1xuICAgIHRoaXMub3ZlcnZpZXdNYXBWaWV3LnVpLnJlbW92ZSgnem9vbScpO1xuXG4gICAgY29uc3QgZ3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcbiAgICAgIGdlb21ldHJ5OiBudWxsLFxuICAgICAgc3ltYm9sOiB7XG4gICAgICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMC41XSxcbiAgICAgICAgb3V0bGluZTogbnVsbFxuICAgICAgfVxuICAgIH0gYXMgYW55KTtcbiAgICB0aGlzLm92ZXJ2aWV3TWFwVmlldy5ncmFwaGljcy5hZGQoZ3JhcGhpYyk7XG4gICAgd2F0Y2hVdGlscy5pbml0KHZpZXcsICdleHRlbnQnLCAoKSA9PiB7XG4gICAgICBncmFwaGljLmdlb21ldHJ5ID0gdmlldy5leHRlbnQ7XG4gICAgfSk7XG5cbiAgICB3YXRjaFV0aWxzLmluaXQodmlldywgJ3N0YXRpb25hcnknLCAoKSA9PiB7XG4gICAgICBpZiAodmlldy5zdGF0aW9uYXJ5KSB7XG4gICAgICAgIHRoaXMub3ZlcnZpZXdNYXBWaWV3XG4gICAgICAgICAgLmdvVG8oe1xuICAgICAgICAgICAgY2VudGVyOiB2aWV3LmNlbnRlcixcbiAgICAgICAgICAgIHNjYWxlOlxuICAgICAgICAgICAgICB2aWV3LnNjYWxlICpcbiAgICAgICAgICAgICAgMiAqXG4gICAgICAgICAgICAgIE1hdGgubWF4KHZpZXcud2lkdGggLyB0aGlzLm92ZXJ2aWV3TWFwVmlldy53aWR0aCwgdmlldy5oZWlnaHQgLyB0aGlzLm92ZXJ2aWV3TWFwVmlldy5oZWlnaHQpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZSBnb3RvLWludGVycnVwdGVkIGVycm9yc1xuICAgICAgICAgICAgaWYgKGVycm9yLm5hbWUgIT0gJ3ZpZXc6Z290by1pbnRlcnJ1cHRlZCcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IE92ZXJ2aWV3TWFwVmlld01vZGVsIGZyb20gJy4vT3ZlcnZpZXdNYXAvT3ZlcnZpZXdNYXBWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJ2aWV3TWFwUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgb3ZlcnZpZXdtYXAtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuT3ZlcnZpZXdNYXAnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcnZpZXdNYXAgZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwub3ZlcnZpZXdNYXBWaWV3JylcbiAgb3ZlcnZpZXdNYXBWaWV3OiBlc3JpLk1hcFZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubmFtZScpXG4gIEByZW5kZXJhYmxlKClcbiAgbmFtZSA9ICcnO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogT3ZlcnZpZXdNYXBWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IE92ZXJ2aWV3TWFwVmlld01vZGVsID0gbmV3IE92ZXJ2aWV3TWFwVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IE92ZXJ2aWV3TWFwUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG4gIG92ZXJ2aWV3Q3JlYXRlZCA9IChkaXY6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgaWYgKHRoaXMub3ZlcnZpZXdNYXBWaWV3KSB7XG4gICAgICB0aGlzLm92ZXJ2aWV3TWFwVmlldy5jb250YWluZXIgPSBkaXY7XG4gICAgfVxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5vdmVydmlld0NyZWF0ZWR9IGlkPVwib3ZlcnZpZXdEaXZcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5DbGVhci5DbGVhclZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGVhclZpZXdNb2RlbCBleHRlbmRzIGRlY2xhcmVkKEFjY2Vzc29yKSB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuXG5pbXBvcnQgQ2xlYXJWaWV3TW9kZWwgZnJvbSAnLi9DbGVhci9DbGVhclZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xlYXJQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldC0tYnV0dG9uIGVzcmktd2lkZ2V0JyxcbiAgdGV4dDogJ2VzcmktaWNvbi1mb250LWZhbGxiYWNrLXRleHQnLFxuICB0cmFzaEljb246ICdlc3JpLWljb24gZXNyaS1pY29uLXRyYXNoJyxcbiAgbG9hZGluZ0ljb246ICdlc3JpLWljb24tbG9hZGluZy1pbmRpY2F0b3InLFxuICByb3RhdGluZ0ljb246ICdlc3JpLXJvdGF0aW5nJyxcbiAgd2lkZ2V0SWNvbjogJ2VzcmktaWNvbi10cmFzaCcsXG5cbiAgLy8gY29tbW9uXG4gIGRpc2FibGVkOiAnZXNyaS1kaXNhYmxlZCdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQ2xlYXInKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXIgZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBDbGVhclZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogQ2xlYXJWaWV3TW9kZWwgPSBuZXcgQ2xlYXJWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogQ2xlYXJQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgY2xlYXJUaXRsZSA9ICdDbGVhcic7XG4gIHJlbmRlckljb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPXt0aGlzLmNsYXNzZXMoQ1NTLnRyYXNoSWNvbil9IC8+O1xuICB9O1xuICBfY2xlYXIgPSAoKSA9PiB7XG4gICAgdGhpcy52aWV3Lm1hcC5hbGxMYXllcnNcbiAgICAgIC5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICByZXR1cm4gbGF5ZXIudHlwZSA9PT0gJ2dyYXBoaWNzJztcbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIChsYXllciBhcyBlc3JpLkdyYXBoaWNzTGF5ZXIpLnJlbW92ZUFsbCgpO1xuICAgICAgfSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBiaW5kPXt0aGlzfVxuICAgICAgICBjbGFzcz17dGhpcy5jbGFzc2VzKENTUy5iYXNlKX1cbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIG9uY2xpY2s9e3RoaXMuX2NsZWFyfVxuICAgICAgICBvbmtleWRvd249e3RoaXMuX2NsZWFyfVxuICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLmNsZWFyVGl0bGV9XG4gICAgICAgIHRpdGxlPXt0aGlzLmNsZWFyVGl0bGV9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnJlbmRlckljb24oKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIFdpZGdldHNcbmltcG9ydCBMZWdlbmQgZnJvbSAnZXNyaS93aWRnZXRzL0xlZ2VuZCc7XG5pbXBvcnQgUHJpbnQgZnJvbSAnZXNyaS93aWRnZXRzL1ByaW50JztcbmltcG9ydCBCb29rbWFya3MgZnJvbSAnZXNyaS93aWRnZXRzL0Jvb2ttYXJrcyc7XG5pbXBvcnQgUHJvcGVydHlTZWFyY2ggZnJvbSAnLi93aWRnZXRzL1Byb3BlcnR5U2VhcmNoJztcbmltcG9ydCBDb29yZGluYXRlQ29udmVyc2lvbiBmcm9tICdlc3JpL3dpZGdldHMvQ29vcmRpbmF0ZUNvbnZlcnNpb24nO1xuaW1wb3J0IEV4cGFuZCBmcm9tICdlc3JpL3dpZGdldHMvRXhwYW5kJztcbmltcG9ydCBNZWFzdXJlIGZyb20gJy4vd2lkZ2V0cy9NZWFzdXJlJztcbmltcG9ydCBDb21wYXNzIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Db21wYXNzJztcbmltcG9ydCBMb2NhdGUgZnJvbSAnZXNyaS93aWRnZXRzL0xvY2F0ZSc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnZXNyaS93aWRnZXRzL1RyYWNrJztcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GdWxsc2NyZWVuJztcblxuaW1wb3J0IHsgY29uZG9zVGFibGUsIGFkZHJlc3NUYWJsZSwgZmVhdHVyZUxheWVyIH0gZnJvbSAnLi9kYXRhL3NlYXJjaCc7XG5pbXBvcnQgZXNyaSA9IF9fZXNyaTtcbmltcG9ydCBEcmF3IGZyb20gJy4vd2lkZ2V0cy9EcmF3JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi93aWRnZXRzL1NlbGVjdCc7XG5pbXBvcnQgQmFzZU1hcHMgZnJvbSAnLi93aWRnZXRzL0Jhc2VNYXBzJztcbmltcG9ydCBMYXllcnMgZnJvbSAnLi93aWRnZXRzL0xheWVycyc7XG5pbXBvcnQgTG9jYXRpb25TZWFyY2ggZnJvbSAnLi93aWRnZXRzL0xvY2F0aW9uU2VhcmNoJztcbmltcG9ydCBPdmVydmlld01hcCBmcm9tICcuL3dpZGdldHMvT3ZlcnZpZXdNYXAnO1xuaW1wb3J0IENsZWFyIGZyb20gJy4vd2lkZ2V0cy9DbGVhcic7XG5cbmV4cG9ydCBsZXQgbWVhc3VyZW1lbnQ6IE1lYXN1cmU7XG5leHBvcnQgY29uc3Qgc2VsZWN0OiBTZWxlY3QgPSBuZXcgU2VsZWN0KCk7XG5leHBvcnQgbGV0IGxheWVyczogTGF5ZXJzO1xuZXhwb3J0IGxldCBsZWdlbmQ6IExlZ2VuZDtcbmV4cG9ydCBsZXQgYmFzZW1hcHM6IEJhc2VNYXBzO1xuZXhwb3J0IGxldCBib29rbWFya3M6IEJvb2ttYXJrcztcbmV4cG9ydCBsZXQgbG9jYXRpb25TZWFyY2g6IExvY2F0aW9uU2VhcmNoO1xuZXhwb3J0IGxldCBkcmF3V2lkZ2V0OiBEcmF3O1xuZXhwb3J0IGxldCBwcmludFdpZGdldDogUHJpbnQ7XG5leHBvcnQgbGV0IHByb3BlcnR5U2VhcmNoOiBQcm9wZXJ0eVNlYXJjaDtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRXaWRnZXQobmFtZTogc3RyaW5nLCB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICBpZiAobmFtZSA9PT0gJ1NlYXJjaCcgJiYgIXByb3BlcnR5U2VhcmNoKSB7XG4gICAgcHJvcGVydHlTZWFyY2ggPSBuZXcgUHJvcGVydHlTZWFyY2goe1xuICAgICAgdmlldzogdmlldyxcbiAgICAgIGNvbmRvc1RhYmxlOiBjb25kb3NUYWJsZSxcbiAgICAgIGFkZHJlc3NUYWJsZTogYWRkcmVzc1RhYmxlLFxuICAgICAgcHJvcGVydHlMYXllcjogZmVhdHVyZUxheWVyLFxuICAgICAgY29udGFpbmVyOiAnc2lkZURpdidcbiAgICB9KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ0xheWVycycgJiYgIWxheWVycykge1xuICAgIGxheWVycyA9IG5ldyBMYXllcnMoeyB2aWV3LCBjb250YWluZXI6ICdsYXllckRpdicgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdMZWdlbmQnICYmICFsZWdlbmQpIHtcbiAgICBsZWdlbmQgPSBuZXcgTGVnZW5kKHsgdmlldywgY29udGFpbmVyOiAnbGVnZW5kRGl2JyB9KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ1ByaW50JyAmJiAhcHJpbnRXaWRnZXQpIHtcbiAgICBwcmludFdpZGdldCA9IG5ldyBQcmludCh7XG4gICAgICB2aWV3LFxuICAgICAgY29udGFpbmVyOiAncHJpbnREaXYnLFxuICAgICAgcHJpbnRTZXJ2aWNlVXJsOlxuICAgICAgICAnaHR0cHM6Ly91dGlsaXR5LmFyY2dpc29ubGluZS5jb20vYXJjZ2lzL3Jlc3Qvc2VydmljZXMvVXRpbGl0aWVzL1ByaW50aW5nVG9vbHMvR1BTZXJ2ZXIvRXhwb3J0JTIwV2ViJTIwTWFwJTIwVGFzaydcbiAgICB9KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ0Jvb2ttYXJrcycgJiYgIWJvb2ttYXJrcykge1xuICAgIGJvb2ttYXJrcyA9IG5ldyBCb29rbWFya3MoeyB2aWV3LCBjb250YWluZXI6ICdib29rbWFya0RpdicsIGVkaXRpbmdFbmFibGVkOiB0cnVlIH0pO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09ICdCYXNlbWFwcycgJiYgIWJhc2VtYXBzKSB7XG4gICAgYmFzZW1hcHMgPSBuZXcgQmFzZU1hcHMoeyB2aWV3LCBjb250YWluZXI6ICdiYXNlbWFwRGl2JyB9KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ0xvY2F0aW9uJyAmJiAhbG9jYXRpb25TZWFyY2gpIHtcbiAgICBsb2NhdGlvblNlYXJjaCA9IG5ldyBMb2NhdGlvblNlYXJjaCh7IHZpZXcsIGNvbnRhaW5lcjogJ2xvY2F0aW9uRGl2JyB9KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ01lYXN1cmUnICYmICFtZWFzdXJlbWVudCkge1xuICAgIG1lYXN1cmVtZW50ID0gbmV3IE1lYXN1cmUoeyB2aWV3LCBjb250YWluZXI6ICdtZWFzdXJlRGl2JyB9KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ0RyYXcnICYmICFkcmF3V2lkZ2V0KSB7XG4gICAgZHJhd1dpZGdldCA9IG5ldyBEcmF3KHsgdmlldywgY29udGFpbmVyOiAnZHJhd0RpdicgfSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpbml0V2lkZ2V0cyh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICBjb25zdCBjb29yZGluYXRlczogZXNyaS5Db29yZGluYXRlQ29udmVyc2lvbiA9IG5ldyBDb29yZGluYXRlQ29udmVyc2lvbih7IHZpZXcgfSk7XG4gIGNvbnN0IGNvb3JkaW5hdGVzRXhwYW5kOiBFeHBhbmQgPSBuZXcgRXhwYW5kKHtcbiAgICBjb250ZW50OiBjb29yZGluYXRlcyxcbiAgICBtb2RlOiAnZmxvYXRpbmcnLFxuICAgIGV4cGFuZEljb25DbGFzczogJ2VzcmktaWNvbi1wYW4yJ1xuICB9KTtcbiAgdmlldy51aS5hZGQoY29vcmRpbmF0ZXNFeHBhbmQsICdib3R0b20tbGVmdCcpO1xuXG4gIHZpZXcudWkuYWRkKG5ldyBDb21wYXNzKHsgdmlldzogdmlldyB9KSwgJ3RvcC1sZWZ0Jyk7XG4gIGNvbnN0IGxvY2F0ZTogTG9jYXRlID0gbmV3IExvY2F0ZSh7IHZpZXc6IHZpZXcgfSk7XG4gIGxvY2F0ZS5vbignbG9jYXRlLWVycm9yJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gIH0pO1xuICB2aWV3LnVpLmFkZChsb2NhdGUsICd0b3AtbGVmdCcpO1xuXG4gIGNvbnN0IHRyYWNrOiBUcmFjayA9IG5ldyBUcmFjayh7IHZpZXc6IHZpZXcgfSk7XG4gIHRyYWNrLm9uKCd0cmFjay1lcnJvcicsIChldmVudDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9KTtcbiAgdmlldy51aS5hZGQodHJhY2ssICd0b3AtbGVmdCcpO1xuICB2aWV3LnVpLmFkZChuZXcgRnVsbHNjcmVlbih7IHZpZXcgfSksICd0b3AtbGVmdCcpO1xuICB2aWV3LnVpLmFkZChuZXcgQ2xlYXIoeyB2aWV3IH0pLCAndG9wLWxlZnQnKTtcblxuICBjb25zdCBvdmVydmlld01hcCA9IG5ldyBPdmVydmlld01hcCh7IHZpZXcgfSk7XG4gIGNvbnN0IG92ZXJ2aWV3RXhwYW5kOiBFeHBhbmQgPSBuZXcgRXhwYW5kKHtcbiAgICBjb250ZW50OiBvdmVydmlld01hcCxcbiAgICBtb2RlOiAnZmxvYXRpbmcnLFxuICAgIGV4cGFuZEljb25DbGFzczogJ2VzcmktaWNvbi1vdmVydmlldy1hcnJvdy10b3AtbGVmdCdcbiAgfSk7XG4gIG92ZXJ2aWV3RXhwYW5kLndhdGNoKCdleHBhbmRlZCcsIGV4cGFuZGVkID0+IHtcbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIG92ZXJ2aWV3TWFwLnZpZXdNb2RlbC5vdmVydmlld01hcFZpZXcuZ29Ubyh7XG4gICAgICAgIGNlbnRlcjogdmlldy5jZW50ZXIsXG4gICAgICAgIHNjYWxlOlxuICAgICAgICAgIHZpZXcuc2NhbGUgKlxuICAgICAgICAgIDIgKlxuICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgdmlldy53aWR0aCAvIG92ZXJ2aWV3TWFwLnZpZXdNb2RlbC5vdmVydmlld01hcFZpZXcud2lkdGgsXG4gICAgICAgICAgICB2aWV3LmhlaWdodCAvIG92ZXJ2aWV3TWFwLnZpZXdNb2RlbC5vdmVydmlld01hcFZpZXcuaGVpZ2h0XG4gICAgICAgICAgKVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgdmlldy51aS5hZGQob3ZlcnZpZXdFeHBhbmQsICdib3R0b20tcmlnaHQnKTtcblxuICBzZWxlY3QuY29udGFpbmVyID0gJ3NlbGVjdERpdic7XG4gIHNlbGVjdC52aWV3ID0gdmlldztcbiAgc2VsZWN0LmxheWVyID0gZmVhdHVyZUxheWVyO1xuICByZXR1cm4gdmlldztcbn1cbiIsImV4cG9ydCBjb25zdCBpbml0UGFuZWxIZWFkZXJzID0gKCkgPT4ge1xuICAvL292ZXJyaWRlIENTUyBmb3IgY2FsY2l0ZSBwYW5lbCBoZWFkZXJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCBkaXYnKS5mb3JFYWNoKHBhbmVsID0+IHtcbiAgICBpZiAocGFuZWwuc2xvdCA9PT0gJ2hlYWRlci10cmFpbGluZy1jb250ZW50Jykge1xuICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93OycpO1xuICAgIH1cbiAgfSk7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKChldmVudD8udGFyZ2V0IGFzIGFueSk/LmlubmVyV2lkdGggPj0gNTAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKCFpdGVtLmhhc0F0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgICBpZiAoaXRlbS5xdWVyeVNlbGVjdG9yKCcubWF4aW1pemUnKT8uZ2V0QXR0cmlidXRlKCdpY29uJykgPT09ICdtaW5pbWl6ZScpIHtcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDM1MHB4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiAwcHgnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUGFuZWxEaXNtaXNzZWRDaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDBweCcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICAvL2hhbmRsZSBwYW5lbCBtYXhpbWl6ZS9taW5pbWl6ZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF4aW1pemUnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdpY29uJykgPT09ICdtYXhpbWl6ZScpIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAnbWluaW1pemUnKTtcbiAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdtYXhpbWl6ZWQnKTsgLy8uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDk2cHgpJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwubGVmdDpub3QoLmhpZGRlbiknKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcsICcnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtYWN0aW9uW3NpZGU9XCJsZWZ0XCJdW2FjdGl2ZV0nKT8ucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21pbmltaXplJykge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtYXhpbWl6ZScpO1xuICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ21heGltaXplZCcpO1xuICAgICAgICAvL2l0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6MzUwcHgnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGluaXRQYW5lbHMgPSAoYWN0aW9uczogYW55KSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGNvbnN0IGk6IEhUTUxFbGVtZW50ID0gaXRlbT8uc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGkpIHtcbiAgICAgIGkuaW5uZXJIVE1MICs9XG4gICAgICAgICc8c3R5bGU+LmNvbnRlbnQtY29udGFpbmVyIHsgaGVpZ2h0OiAxMDAlOyB9IC5jb250YWluZXI6Zm9jdXMsIC5jb250ZW50LWNvbnRhaW5lcjpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IH08L3N0eWxlPic7XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IGZhbHNlLCBzdWJ0cmVlOiBmYWxzZSB9O1xuICAgIGNvbnN0IGNhbGxiYWNrID0gKG11dGF0aW9uc0xpc3Q6IGFueVtdKSA9PiB7XG4gICAgICAvLyBVc2UgdHJhZGl0aW9uYWwgJ2ZvciBsb29wcycgZm9yIElFIDExXG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGlzbWlzc2VkJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobXV0YXRpb24pO1xuICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKChhY3Rpb246IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoYWN0aW9uLnRleHQgPT09IChtdXRhdGlvbi50YXJnZXQgYXMgYW55KS50aXRsZSkge1xuICAgICAgICAgICAgICAgIGlmICgobXV0YXRpb24udGFyZ2V0IGFzIGFueSkuaGFzQXR0cmlidXRlKCdkaXNtaXNzZWQnKSkge1xuICAgICAgICAgICAgICAgICAgYWN0aW9uLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGFjdGlvbi5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDUwMCkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoKG11dGF0aW9uLnRhcmdldCBhcyBhbnkpLmhhc0F0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKChtdXRhdGlvbi50YXJnZXQgYXMgYW55KS50aXRsZSwgJ2Rpc21pc3NlZCcpO1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXdEaXYnKT8uY2xhc3NMaXN0LnJlbW92ZSgnYmVsb3cnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKG11dGF0aW9uLnRhcmdldCBhcyBhbnkpLnRpdGxlLCAnbm90IGRpc21pc3NlZCcpO1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXdEaXYnKT8uY2xhc3NMaXN0LmFkZCgnYmVsb3cnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtLCBjb25maWcpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgeyBpbml0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0cyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQWN0aW9uQmFyLkFjdGlvbkJhclZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25CYXJWaWV3TW9kZWwgZXh0ZW5kcyBkZWNsYXJlZChBY2Nlc3Nvcikge1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQHByb3BlcnR5KCkgc2lkZTogc3RyaW5nO1xuICBAcHJvcGVydHkoKSByZWFkeSA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBhY3Rpb25zOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAnc2lkZScsIHRoaXMuc2lkZVNldC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHJlb3JkZXJQYW5lbHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudmlldykge1xuICAgICAgLy90aGlzLmFjdGlvbnMuZm9yRWFjaCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWwubGVmdCcpLmZvckVhY2goKHBhbmVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAwMCkge1xuICAgICAgICAgIHBhbmVsLnBhcmVudEVsZW1lbnQ/Lmluc2VydEJlZm9yZShwYW5lbCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXdEaXYnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFuZWwucGFyZW50RWxlbWVudD8uaW5zZXJ0QmVmb3JlKHBhbmVsLCBkb2N1bWVudD8ucXVlcnlTZWxlY3RvcignI3ZpZXdEaXYnKT8ubmV4dEVsZW1lbnRTaWJsaW5nIGFzIGFueSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy99KTtcbiAgICB9XG4gIH07XG5cbiAgaW5pdEFjdGlvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5hY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1hY3Rpb24tYmFyIGNhbGNpdGUtYWN0aW9uJyk7XG4gICAgdGhpcy5hY3Rpb25zPy5mb3JFYWNoKChhY3Rpb246IEVsZW1lbnQpID0+IHtcbiAgICAgIGFjdGlvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQWN0aW9uKGUudGFyZ2V0KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgaW5pdFdpZGdldChlLnRhcmdldC50ZXh0LCB0aGlzLnZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goKGE6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChhLnRleHQgIT0gZS50YXJnZXQudGV4dCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMDApIHtcbiAgICAgICAgICAgICAgaWYgKGEuZ2V0QXR0cmlidXRlKCdzaWRlJykgPT09IGFjdGlvbi5nZXRBdHRyaWJ1dGUoJ3NpZGUnKSkge1xuICAgICAgICAgICAgICAgIGEucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYS5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGFjdGlvbi5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA1MDApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtYWN0aW9uW3RleHQ9XCJTZWFyY2hcIicpPy5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgICB9XG4gIH07XG4gIHRvZ2dsZUFjdGlvbiA9IChhY3Rpb246IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMDApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wYW5lbC4ke2FjdGlvbi5nZXRBdHRyaWJ1dGUoJ3NpZGUnKSBhcyBzdHJpbmd9YCkuZm9yRWFjaCgocGFuZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAoYWN0aW9uIGFzIGFueSkudGV4dCkge1xuICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhbmVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgICAgICAgaWYgKCFwYW5lbC5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA1MDApIHtcbiAgICAgICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMzUwcHgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgaWYgKHBhbmVsLnRpdGxlICE9ICdNZWFzdXJlJykge1xuICAgICAgICAgICAgICAvL21lYXN1cmVtZW50Lm1lYXN1cmVtZW50LmNsZWFyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvL21lYXN1cmVtZW50Lm1lYXN1cmVPcGVuZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWwnKS5mb3JFYWNoKChwYW5lbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKHBhbmVsLnRpdGxlICE9IChhY3Rpb24gYXMgYW55KS50ZXh0KSB7XG4gICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocGFuZWwpO1xuICAgICAgICAgIHBhbmVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgICAgICAgY29uc29sZS5sb2cocGFuZWwpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHBhbmVsLnRpdGxlKTtcbiAgICAgICAgICBpZiAoIXBhbmVsLmhhc0F0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDUwMCkge1xuICAgICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNDhweCknKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiAzNTBweCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBpZiAocGFuZWwudGl0bGUgIT0gJ01lYXN1cmUnKSB7XG4gICAgICAgICAgICAgIC8vbWVhc3VyZW1lbnQubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vbWVhc3VyZW1lbnQubWVhc3VyZU9wZW5lZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBlbmFibGVBY3Rpb25iYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5yZW9yZGVyUGFuZWxzKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWN0aW9uLWJhciBjYWxjaXRlLWFjdGlvbicpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgfSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgfTtcbiAgc2lkZVNldChzaWRlOiBzdHJpbmcpIHtcbiAgICBpZiAoc2lkZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rvb2xHcm91cCcpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgaWYgKHNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEdyb3VwJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICB0aGlzLmFjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFjdGlvbi1iYXIgY2FsY2l0ZS1hY3Rpb24nKTtcbiAgICAvLyB0aGlzLmFjdGlvbnM/LmZvckVhY2goKGFjdGlvbjogRWxlbWVudCkgPT4ge1xuICAgIC8vICAgYWN0aW9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcbiAgICAvLyAgICAgZGVidWdnZXI7XG5cbiAgICAvLyAgICAgdGhpcy50b2dnbGVBY3Rpb24oZS50YXJnZXQpO1xuICAgIC8vICAgICBpbml0V2lkZ2V0KGUudGFyZ2V0LnRleHQsIHRoaXMudmlldyk7XG4gICAgLy8gICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKChhOiBhbnkpID0+IHtcbiAgICAvLyAgICAgICBpZiAoYS50ZXh0ICE9IGUudGFyZ2V0LnRleHQpIHtcbiAgICAvLyAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDAwKSB7XG4gICAgLy8gICAgICAgICAgIGlmIChhLmdldEF0dHJpYnV0ZSgnc2lkZScpID09PSBhY3Rpb24uZ2V0QXR0cmlidXRlKCdzaWRlJykpIHtcbiAgICAvLyAgICAgICAgICAgICBhLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgLy8gICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICBhY3Rpb24uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gICAgaW5pdFdpZGdldCgnU2VhcmNoJywgdGhpcy52aWV3KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDAwKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnRBY3Rpb25iYXInKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjbGVmdEFjdGlvbmJhcicpXG4gICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJyN0b29sR3JvdXAnKVxuICAgICAgICAgICAgPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNhY3Rpb25CYXInKVxuICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCcjdG9vbEdyb3VwJylcbiAgICAgICAgICAgID8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnRBY3Rpb25iYXInKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYWN0aW9uQmFyJylcbiAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignI3Rvb2xHcm91cCcpXG4gICAgICAgICAgICA/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYW5lbC5sZWZ0JykuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcsICcnKTtcbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVvcmRlclBhbmVscygpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IEFjdGlvbkJhclZpZXdNb2RlbCBmcm9tICcuL0FjdGlvbkJhci9BY3Rpb25CYXJWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkJhclByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBzaWRlPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGFjdGlvbmJhci1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5BY3Rpb25CYXInKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQmFyIGV4dGVuZHMgZGVjbGFyZWQoV2lkZ2V0KSB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLnNpZGUnKVxuICBzaWRlOiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpXG4gIEBhbGlhc09mKCd2aWV3TW9kZWwucmVhZHknKVxuICByZWFkeTogYm9vbGVhbjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5hY3Rpb25zJylcbiAgYWN0aW9uczogTm9kZUxpc3RPZjxFbGVtZW50PjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC50b2dnbGVBY3Rpb24nKVxuICB0b2dnbGVBY3Rpb246IEZ1bmN0aW9uO1xuICBAYWxpYXNPZigndmlld01vZGVsLmVuYWJsZUFjdGlvbmJhcicpXG4gIGVuYWJsZUFjdGlvbmJhcjogRnVuY3Rpb247XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuaW5pdEFjdGlvbnMnKVxuICBpbml0QWN0aW9uczogRnVuY3Rpb247XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogQWN0aW9uQmFyVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBBY3Rpb25CYXJWaWV3TW9kZWwgPSBuZXcgQWN0aW9uQmFyVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IEFjdGlvbkJhclByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuICBzZWFyY2hHcm91cENyZWF0ZWQgPSAoaXRlbTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAodGhpcy5zaWRlID09PSAnbGVmdCcpIHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5hY3Rpb25zLmxlbmd0aCkge1xuICAgICAgdGhpcy5pbml0QWN0aW9ucygpO1xuICAgIH1cbiAgfTtcbiAgdG9vbEdyb3VwQ3JlYXRlZCA9IChpdGVtOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmICh0aGlzLnNpZGUgPT09ICdyaWdodCcpIHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDAwKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdEFjdGlvbmJhcicpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLmFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmluaXRBY3Rpb25zKCk7XG4gICAgfVxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGNhbGNpdGUtYWN0aW9uLWJhciBleHBhbmQ9XCJmYWxzZVwiPlxuICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbi1ncm91cCBpZD1cInNlYXJjaEdyb3VwXCIgYWZ0ZXJDcmVhdGU9e3RoaXMuc2VhcmNoR3JvdXBDcmVhdGVkfT5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiU2VhcmNoXCIgaWNvbj1cInNlYXJjaFwiIHNpZGU9XCJyaWdodFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIkxvY2F0aW9uXCIgaWNvbj1cInBpblwiIHNpZGU9XCJyaWdodFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIkxheWVyc1wiIGljb249XCJsYXllcnNcIiBzaWRlPVwicmlnaHRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJMZWdlbmRcIiBpY29uPVwibGVnZW5kXCIgc2lkZT1cInJpZ2h0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiQmFzZW1hcHNcIiBpY29uPVwiYmFzZW1hcFwiIHNpZGU9XCJyaWdodFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgPC9jYWxjaXRlLWFjdGlvbi1ncm91cD5cblxuICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbi1ncm91cCBpZD1cInRvb2xHcm91cFwiIGFmdGVyQ3JlYXRlPXt0aGlzLnRvb2xHcm91cENyZWF0ZWR9PlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJTZWxlY3RcIiBpY29uPVwic2VsZWN0aW9uXCIgc2lkZT1cImxlZnRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJNZWFzdXJlXCIgaWNvbj1cIm1lYXN1cmVcIiBzaWRlPVwibGVmdFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIkRyYXdcIiBpY29uPVwicGVuY2lsLW1hcmtcIiBzaWRlPVwibGVmdFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIkJvb2ttYXJrc1wiIGljb249XCJib29rbWFya1wiIHNpZGU9XCJsZWZ0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiUHJpbnRcIiBpY29uPVwicHJpbnRcIiBzaWRlPVwibGVmdFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgPC9jYWxjaXRlLWFjdGlvbi1ncm91cD5cbiAgICAgICAgPC9jYWxjaXRlLWFjdGlvbi1iYXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgJy4vY3NzL21haW4uY3NzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4vZGF0YS9hcHAnO1xuaW1wb3J0IHsgaW5pdFRpcHMgfSBmcm9tICcuL3RpcHMnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0IH0gZnJvbSAnLi9hbGVydCc7XG4vL2ltcG9ydCB7IHRvZ2dsZUFjdGlvbiwgZW5hYmxlQWN0aW9uYmFyIH0gZnJvbSAnLi9hY3Rpb25iYXInO1xuaW1wb3J0IE1hcFZpZXcgZnJvbSAnZXNyaS92aWV3cy9NYXBWaWV3JztcblxuaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG4vLyB3aWRnZXQgdXRpbHNcbmltcG9ydCB7IGluaXRXaWRnZXRzLCBzZWxlY3QsIHByb3BlcnR5U2VhcmNoLCBsYXllcnMgfSBmcm9tICcuL3dpZGdldHMnO1xuaW1wb3J0IHsgaW5pdFBhbmVscywgaW5pdFBhbmVsSGVhZGVycyB9IGZyb20gJy4vcGFuZWxzJztcbmltcG9ydCB7IGluaXRNZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCBBY3Rpb25CYXIgZnJvbSAnLi93aWRnZXRzL0FjdGlvbkJhcic7XG5pbXBvcnQgd2F0Y2hVdGlscyBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5jb25zdCBhY3Rpb25CYXIgPSBuZXcgQWN0aW9uQmFyKHsgc2lkZTogJ3JpZ2h0JywgY29udGFpbmVyOiAnYWN0aW9uQmFyJyB9KTtcblxuY29uc3QgbGVmdEFjdGlvbkJhciA9IG5ldyBBY3Rpb25CYXIoeyBzaWRlOiAnbGVmdCcsIGNvbnRhaW5lcjogJ2xlZnRBY3Rpb25iYXInIH0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGxldCB2aWV3OiBNYXBWaWV3O1xuXG5mdW5jdGlvbiBjaGVja0xvY2FsU3RvcmFnZSh2aWV3OiBNYXBWaWV3KSB7XG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzJykpIHtcbiAgICBjb25zdCB3ZWJtYXA6IFdlYk1hcCA9IFdlYk1hcC5mcm9tSlNPTihKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hcHMnKSBhcyBzdHJpbmcpKTtcbiAgICB3ZWJtYXAubG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgdmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBjb25zdCBseXIgPSB3ZWJtYXAuYWxsTGF5ZXJzLmZpbmQobCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGxheWVyLmlkID09PSBsLmlkO1xuICAgICAgICB9KTtcbiAgICAgICAgbGF5ZXIudmlzaWJsZSA9IGx5cj8udmlzaWJsZTtcbiAgICAgICAgbGF5ZXIub3BhY2l0eSA9IGx5cj8ub3BhY2l0eTtcbiAgICAgIH0pO1xuICAgICAgdmlldy5tYXAuYmFzZW1hcCA9IHdlYm1hcC5iYXNlbWFwO1xuICAgICAgdmlldy5leHRlbnQgPSB3ZWJtYXAuaW5pdGlhbFZpZXdQcm9wZXJ0aWVzLnZpZXdwb2ludC50YXJnZXRHZW9tZXRyeS5leHRlbnQ7XG4gICAgfSk7XG4gIH1cbn1cbi8vaGFuZGxlIHdoZW4gdmlldyBpcyByZWFkeVxuXG4vL3NhdmUgd2ViIG1hcCB0byBsb2NhbCBzdG9yYWdlIG9uIHBhZ2VoaWRlXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCAoKSA9PiB7XG4gIHZpZXcubWFwLnJlbW92ZU1hbnkoXG4gICAgdmlldy5tYXAuYWxsTGF5ZXJzXG4gICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIGxheWVyLnR5cGUgPT09ICdncm91cCcgJiYgIShsYXllciBhcyBfX2VzcmkuR3JvdXBMYXllcikubGF5ZXJzLmxlbmd0aDtcbiAgICAgIH0pXG4gICAgICAudG9BcnJheSgpXG4gICk7XG4gIGNvbnN0IGpzb24gPSAodmlldy5tYXAgYXMgYW55KS50b0pTT04oKTtcbiAganNvbi5pbml0aWFsU3RhdGUudmlld3BvaW50LnRhcmdldEdlb21ldHJ5ID0gdmlldy5leHRlbnQ7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hcHMnLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XG59KTtcblxuLy9zaG93IGZpcnN0IHBhbmVsIG9uIGRldmljZXMgd2lkZXIgdGhhbiA1MDBweCBieSBkZWZhdWx0XG5pZiAod2luZG93LmlubmVyV2lkdGggPj0gNTAwKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtcGFuZWwucmlnaHQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtcGFuZWwucmlnaHQnKT8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbn1cblxuLy9tb2RpZnkgRE9NIGFmdGVyIG1hcCB2aWV3IGxvYWRzXG4vL3ZpZXcud2hlbigoKSA9PiB7XG5hY3Rpb25CYXIuaW5pdEFjdGlvbnMoKTtcblxuaW5pdFBhbmVscyhhY3Rpb25CYXIuYWN0aW9ucyk7XG4vL2FjdGlvbkJhci52aWV3ID0gdmlldztcbi8vfSk7XG5cbndhdGNoVXRpbHMud2F0Y2goYWN0aW9uQmFyLCAnYWN0aW9ucycsIGFjdGlvbnMgPT4ge1xuICBpZiAoYWN0aW9ucy5sZW5ndGgpIHtcbiAgICBhY3Rpb25CYXIuZW5hYmxlQWN0aW9uYmFyKCk7XG5cbiAgICB2aWV3ID0gbmV3IE1hcFZpZXcoe1xuICAgICAgY29udGFpbmVyOiAndmlld0RpdicsXG4gICAgICBtYXBcbiAgICB9KTtcbiAgICB2aWV3LndoZW4oKCkgPT4ge1xuICAgICAgYWN0aW9uQmFyLnZpZXcgPSB2aWV3O1xuICAgICAgbGVmdEFjdGlvbkJhci52aWV3ID0gdmlldztcbiAgICAgIGNoZWNrTG9jYWxTdG9yYWdlKHZpZXcpO1xuICAgICAgdmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBpZiAobGF5ZXIudHlwZSAhPSAnZ3JvdXAnKSB7XG4gICAgICAgICAgbGF5ZXIud2F0Y2goJ3Zpc2libGUnLCB2aXNpYmxlID0+IHtcbiAgICAgICAgICAgIGxheWVycz8ubGF5ZXJMaXN0Py5vcGVyYXRpb25hbEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpdGVtLmxheWVyLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IGl0ZW0uY2hpbGRyZW4uZmluZChpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpLmxheWVyID09PSBsYXllcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgIGNoaWxkLnBhbmVsLm9wZW4gPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGF5ZXIud2F0Y2goJ3Zpc2libGUnLCB2aXNpYmxlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gbGF5ZXJzPy5sYXllckxpc3Qub3BlcmF0aW9uYWxJdGVtcy5maW5kKGkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaS5sYXllciA9PT0gbGF5ZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgICBncm91cC5vcGVuID0gdmlzaWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBwcm9wZXJ0eUxheWVyID0gbWFwLmFsbExheWVycy5maW5kKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIGxheWVyLnRpdGxlID09PSAnUHJvcGVydHknICYmIGxheWVyLnR5cGUgPT09ICdmZWF0dXJlJztcbiAgICAgIH0pO1xuICAgICAgdmlldy5vbignaG9sZCcsIGUgPT4ge1xuICAgICAgICBwcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGUubWFwUG9pbnQ7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIC8vdG9nZ2xlQWN0aW9uKCdTZWFyY2gnKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9KTtcbiAgICAgIHZpZXdcbiAgICAgICAgLndoZW5MYXllclZpZXcocHJvcGVydHlMYXllcilcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBMb2FkZXInKT8udG9nZ2xlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgICBwcm9wZXJ0eVNlYXJjaC5wcm9wZXJ0eUxheWVyID0gcHJvcGVydHlMYXllciBhcyBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICAgICAgICAgIC8vc2VhcmNoIGJ5IGdlb21ldHJ5IGFmdGVyIHNrZXRjaCBjcmVhdGlvbiBpbiBzZWxlY3Qgd2lkZ2V0XG4gICAgICAgICAgc2VsZWN0LnZpZXdNb2RlbC53YXRjaCgnZ2VvbWV0cnknLCBnZW9tZXRyeSA9PiB7XG4gICAgICAgICAgICBwcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgICAgICAgICAgYWN0aW9uQmFyLmFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFjdGlvbi50ZXh0ID09PSAnU2VhcmNoJykge1xuICAgICAgICAgICAgICAgIGFjdGlvbkJhci50b2dnbGVBY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uOiBhbnkpID0+IHtcbiAgICAgICAgICAvL29uIGVycm9yIGxvYWRpbmcgcHJvcGVydHkgbGF5ZXIsIGRpc3BsYXkgYWxlcnRcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZWFzb24pO1xuICAgICAgICAgIHNob3dBbGVydCgnUHJvcGVydHkgbGF5ZXIgZGlkIG5vdCBsb2FkLiBQbGVhc2UgY29udGFjdCBpTUFQUyBIZWxwIERlc2suJywgJ3JlZCcpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICB2aWV3LndoZW4oaW5pdFdpZGdldHMpO1xuICAgIHZpZXcud2hlbihpbml0VGlwcyk7XG4gIH1cbn0pO1xuXG5pbml0UGFuZWxIZWFkZXJzKCk7XG5pbml0TWVudSgpO1xuIl0sIm5hbWVzIjpbIndoZW5EZWZpbmVkT25jZSIsIndoZW5EZWZpbmVkIiwicHJvcGVydHkiLCJzdWJjbGFzcyIsInRzeCIsImFsaWFzT2YiLCJyZW5kZXJhYmxlIiwiQ1NTIiwidmlldyIsIndhdGNoVXRpbHMiLCJkZWNsYXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFDTyxJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0VBQzlCLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxrQ0FBa0MsRUFBRSxFQUFFLENBQUMsQ0FBQzs7O0VDRnRFLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQztFQUMzQixJQUFNLFFBQVEsR0FBRyxVQUFDLEtBQWE7O01BQzdCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1VBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ25DLENBQUMsQ0FBQztNQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1VBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ25DLENBQUMsQ0FBQztNQUNI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
