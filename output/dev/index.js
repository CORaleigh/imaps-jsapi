
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
          console.log(view.scale);
      };
      MeasureViewModel.prototype.measureOpened = function () {
          var selected = document.querySelector('#measureDiv calcite-radio-group').selectedItem.title;
          if (selected != 'clear') {
              this.measurement.activeTool = selected;
          }
          else {
              this.measurement.clear();
          }
      };
      MeasureViewModel.prototype.initMeasure = function () {
          this.measurement = new Measurement({ view: this.view, container: 'measureWidget' });
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
              _this.initMeasure();
          };
          return _this;
      }
      Measure.prototype.render = function () {
          var _this = this;
          var items = document.querySelectorAll('#measureDiv calcite-radio-group-item');
          items.forEach(function (item) {
              item === null || item === void 0 ? void 0 : item.addEventListener('calciteRadioGroupItemChange', function (e) {
                  var _a, _b, _c, _d;
                  if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.checked) {
                      console.log((_b = e.target) === null || _b === void 0 ? void 0 : _b.title);
                      if (((_c = e.target) === null || _c === void 0 ? void 0 : _c.title) === 'clear') {
                          _this.measurement.clear();
                      }
                      else {
                          _this.measurement.activeTool = (_d = e.target) === null || _d === void 0 ? void 0 : _d.title;
                      }
                  }
              });
          });
          return (widget.tsx("div", { class: CSS$1.base },
              widget.tsx("calcite-radio-group", { width: "full" },
                  widget.tsx("calcite-radio-group-item", { checked: true, title: "distance", value: "distance", id: "tableItem", icon: "measure" }, "Line"),
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
          decorators.aliasOf('viewModel.initMeasure')
      ], Measure.prototype, "initMeasure", void 0);
      __decorate([
          decorators.aliasOf('viewModel.measureOpened')
      ], Measure.prototype, "measureOpened", void 0);
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
          id: '08050bf067bb4b20adea4b0b4f0a39e3'
      },
      spatialReference: { wkid: 102100 }
  });
  var condosTable = new FeatureLayer({
      portalItem: {
          id: '08050bf067bb4b20adea4b0b4f0a39e3'
      },
      layerId: 1,
      spatialReference: { wkid: 102100 },
      popupTemplate: popupTemplate
  });
  condosTable.load();
  var addressTable = new FeatureLayer({
      portalItem: {
          id: '08050bf067bb4b20adea4b0b4f0a39e3'
      },
      layerId: 4,
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
              widget.tsx("div", { class: "flex" },
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

  var measurement = new Measure();
  var select = new Select();
  var layers;
  var legend;
  var basemaps;
  var bookmarks;
  var locationSearch;
  var printWidget;
  var propertySearch;
  var drawWidget = new Draw();
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
      measurement.view = view;
      measurement.container = 'measureDiv';
      drawWidget.view = view;
      drawWidget.container = 'drawDiv';
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
              initWidget('Search', _this.view);
              _this.reorderPanels();
              document.querySelectorAll('calcite-action-bar calcite-action').forEach(function (item) {
                  item.removeAttribute('disabled');
              });
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
      ActionBarViewModel = __decorate([
          decorators.subclass('app.widgets.ActionBar.ActionBarViewModel')
      ], ActionBarViewModel);
      return ActionBarViewModel;
  }(decorators.declared(Accessor)));

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
  new ActionBar({ side: 'left', container: 'leftActionbar' });
  var view = new MapView({
      container: 'viewDiv',
      map: map
  });
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
  view.when(function () {
      checkLocalStorage(view);
      view.map.allLayers.forEach(function (layer) {
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
      view.on('hold', function (e) {
          propertySearch.geometry = e.mapPoint;
          setTimeout(function () {
          }, 1000);
      });
      view
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
  view.when(initWidgets);
  view.when(initTips);
  window.addEventListener('pagehide', function () {
      view.map.removeMany(view.map.allLayers
          .filter(function (layer) {
          return layer.type === 'group' && !layer.layers.length;
      })
          .toArray());
      var json = view.map.toJSON();
      json.initialState.viewpoint.targetGeometry = view.extent;
      window.localStorage.setItem('imaps', JSON.stringify(json));
  });
  if (window.innerWidth >= 500) {
      (_a = document.querySelector('calcite-panel.right')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
      (_b = document.querySelector('calcite-panel.right')) === null || _b === void 0 ? void 0 : _b.removeAttribute('dismissed');
  }
  view.when(function () {
      initPanels(actionBar.actions);
      actionBar.view = view;
      actionBar.enableActionbar();
  });
  initPanelHeaders();
  initMenu();
  //# sourceMappingURL=index.js.map

  exports.view = view;

  Object.defineProperty(exports, '__esModule', { value: true });

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FwcC50cyIsIi4uLy4uL3NyYy9tZW51LnRzIiwiLi4vLi4vc3JjL3RpcHMudHMiLCIuLi8uLi9zcmMvYWxlcnQudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaC9Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL1Byb3BlcnR5U2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUvTWVhc3VyZVZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUudHN4IiwiLi4vLi4vc3JjL2RhdGEvc2VhcmNoLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy9EcmF3Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9TZWxlY3QvU2VsZWN0Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvU2VsZWN0LnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL0Jhc2VNYXBzL0Jhc2VNYXBzVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQmFzZU1hcHMudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvTGF5ZXJzL0xheWVyc1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xheWVycy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaC9Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xvY2F0aW9uU2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL092ZXJ2aWV3TWFwL092ZXJ2aWV3TWFwVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvT3ZlcnZpZXdNYXAudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvQ2xlYXIvQ2xlYXJWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9DbGVhci50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy50cyIsIi4uLy4uL3NyYy9wYW5lbHMudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9BY3Rpb25CYXIvQWN0aW9uQmFyVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQWN0aW9uQmFyLnRzeCIsIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViTWFwIGZyb20gJ2VzcmkvV2ViTWFwJztcbmV4cG9ydCBsZXQgbWFwID0gbmV3IFdlYk1hcCgpO1xubWFwID0gbmV3IFdlYk1hcCh7IHBvcnRhbEl0ZW06IHsgaWQ6ICc5NTA5MjQyODc3NGM0YjFmYjZhM2I2ZjVmZWQ5ZmJjNCcgfSB9KTtcbi8vIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzJykpIHtcbi8vICAgbWFwID0gV2ViTWFwLmZyb21KU09OKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpIGFzIHN0cmluZykpO1xuLy8gfVxuIiwiZXhwb3J0IGxldCB0aGVtZSA9ICdsaWdodCc7XG5jb25zdCBzZXRUaGVtZSA9ICh0aGVtZTogc3RyaW5nKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtY29sb3InKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtdGlwLW1hbmFnZXInKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtZHJvcGRvd24nKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWxlcnQnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWN0aW9uLWJhcicpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcnJvd1BhdGgnKT8uc2V0QXR0cmlidXRlKCdzdHJva2UnLCB0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdibGFjaycgOiAnd2hpdGUnKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rJykuZm9yRWFjaChsaW5rID0+IHtcbiAgICBpZiAobGluay5ocmVmLmluY2x1ZGVzKHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JykpIHtcbiAgICAgIGxpbmsuaHJlZiA9ICdodHRwczovL2pzLmFyY2dpcy5jb20vNC4xNi9lc3JpL3RoZW1lcy8nICsgdGhlbWUgKyAnL21haW4uY3NzJztcbiAgICB9XG4gIH0pO1xufTtcbmV4cG9ydCBjb25zdCBpbml0TWVudSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1kcm9wZG93bicpPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlRHJvcGRvd25TZWxlY3QnLCAoZTogYW55KSA9PiB7XG4gICAgZS50YXJnZXQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpIGFzIHN0cmluZztcbiAgICAgICAgdGhlbWUgPSB2YWx1ZTtcbiAgICAgICAgc2V0VGhlbWUodGhlbWUpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkge1xuICAgIGxldCB0aGVtZU5hbWU6IHN0cmluZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSBhcyBzdHJpbmc7XG4gICAgc2V0VGhlbWUodGhlbWVOYW1lKTtcblxuICAgIHRoZW1lTmFtZSA9IHRoZW1lTmFtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgICAgaWYgKChlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmcpICE9IHRoZW1lTmFtZSkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgc3RyaW5nO1xuICAgICAgICB0aGVtZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKChlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmcpID09PSB0aGVtZU5hbWUpIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vbWVudSc7XG5cbmNvbnN0IHRpcEdyb3VwcyA9IFtcbiAge1xuICAgIHBhbmVsOiB7XG4gICAgICBuYW1lOiAnc2VsZWN0VGlwJyxcbiAgICAgIHRpdGxlOiAnU2VsZWN0aW9uJyxcbiAgICAgIHRpcHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUbyBkcmF3IGEgY29udGludW91cyBsaW5lIG9yIHBvbHlnb24sIGxvbmcgcHJlc3MgYW5kIGRyYWcgeW91ciBjdXJzb3InLFxuICAgICAgICAgIHRpdGxlOiAnRnJlZWhhbmQgRHJhd2luZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUbyBkcmF3IGEgY29udGludW91cyBsaW5lIG9yIHBvbHlnb24sIGxvbmcgcHJlc3MgYW5kIGRyYWcgeW91ciBjdXJzb3InLFxuICAgICAgICAgIHRpdGxlOiAnRnJlZWhhbmQgRHJhd2luZydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIHBhbmVsOiB7XG4gICAgICBuYW1lOiAncHJvcGVydHlTZWFyY2hUaXAnLFxuICAgICAgdGl0bGU6ICdQcm9wZXJ0eSBTZWFyY2gnLFxuICAgICAgdGlwczogW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICdUbyBzZWFyY2ggYnkgYSBwb3J0aW9uIG9mIGFuIG93bmVyIG5hbWUgb3IgYWRkcmVzcywgaGl0IGVudGVyIHdpdGhvdXQgc2VsZWN0aW5nIGZvcm0gdGhlIGxpc3Qgb2Ygc3VnZ2VzdGlvbnMuJyxcbiAgICAgICAgICB0aXRsZTogJ1dpbGRjYXJkIFNlYXJjaCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUbyBxdWlja2x5IHNlbGVjdCBhIHByb3BlcnR5IGZyb20gdGhlIG1hcCwgbG9uZyBwcmVzcyBvbiBhIHByb3BlcnR5IG9uIHRoZSBtYXAuJyxcbiAgICAgICAgICB0aXRsZTogJ0xvbmcgUHJlc3MnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnVG8gc2VsZWN0IGJ5IGEgbG9jYXRpb24gdXNlIHRoZSBwcm9wZXJ0eSBzZWxlY3Rpb24gdG9vbC4nLFxuICAgICAgICAgIHRpdGxlOiAnU2VsZWN0IEJ5IExvY2F0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1ByZXZpb3VzIFwidGFiXCIgbGF5b3V0IGhhcyBiZWVuIGNvbnNvbGlkYXRlZCBpbnRvIGEgc2luZ2xlIHNjcm9sbGFibGUgcGFuZWwuJyxcbiAgICAgICAgICB0aXRsZTogJ1NpbmdsZSBEZXRhaWxzIFBhbmVsJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdiYXNlbWFwVGlwJyxcbiAgICAgIHRpdGxlOiAnQmFzZW1hcHMnLFxuICAgICAgdGlwczogW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICdUaGUgaW1hZ2VyeSBhbmQgaW1hZ2VyeSBoeWJyaWQgYmFzZSBtYXBzIGxpc3RlZCB1bmRlciB0aGUgbWFwcyB0YWIgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgbGF0ZXN0IGltYWdlcnkgZnJvbSBSYWxlaWdoICgyMDE5KSBhbmQgZnJvbSB0aGUgU3RhdGUgb2YgTm9ydGggQ2Fyb2xpbmEgKDIwMTcpLicsXG4gICAgICAgICAgdGl0bGU6ICdJbWFnZXJ5IEJhc2VtYXBzJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG5dO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaXBzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlwJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS10aXAtbWFuYWdlcicpPy5yZW1vdmUoKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBjb25zdCBtYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAtbWFuYWdlcicpO1xuICAgICAgbWFuYWdlci5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgdGhlbWUpO1xuICAgICAgY29uc3QgdGlwR3JvdXAgPSB0aXBHcm91cHMuZmluZChncm91cCA9PiB7XG4gICAgICAgIHJldHVybiBncm91cC5wYW5lbC5uYW1lID09PSBpdGVtLmlkO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAtZ3JvdXAnKTtcbiAgICAgIGdyb3VwLnNldEF0dHJpYnV0ZSgndGV4dC1ncm91cC10aXRsZScsICh0aXBHcm91cCBhcyBhbnkpPy5wYW5lbC50aXRsZSk7XG4gICAgICBtYW5hZ2VyLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICAgIHRpcEdyb3VwPy5wYW5lbC50aXBzLmZvckVhY2godGlwID0+IHtcbiAgICAgICAgY29uc3QgY2FsY2l0ZVRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtdGlwJyk7XG4gICAgICAgIGNhbGNpdGVUaXAuc2V0QXR0cmlidXRlKCdoZWFkaW5nJywgdGlwLnRpdGxlKTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC5pbm5lckhUTUwgPSB0aXAubWVzc2FnZTtcbiAgICAgICAgY2FsY2l0ZVRpcC5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQoY2FsY2l0ZVRpcCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50Py5ib2R5Py5hcHBlbmRDaGlsZChtYW5hZ2VyKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2hvd0FsZXJ0KHRleHQ6IHN0cmluZywgY29sb3I6IHN0cmluZykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLWFsZXJ0Jyk/LnJlbW92ZSgpO1xuICBjb25zdCBhbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYWxlcnQnKTtcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZXNzYWdlLnNldEF0dHJpYnV0ZSgnc2xvdCcsICdhbGVydC1tZXNzYWdlJyk7XG4gIG1lc3NhZ2UuaW5uZXJIVE1MID0gdGV4dDtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdjb2xvcicsIGNvbG9yKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gIGFsZXJ0LnNldEF0dHJpYnV0ZSgnaWNvbicsICcnKTtcblxuICBhbGVydC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbGVydCk7XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaCc7XG5pbXBvcnQgRmVhdHVyZVRhYmxlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlVGFibGUnO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZSc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnO1xuaW1wb3J0IExheWVyU2VhcmNoU291cmNlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gvTGF5ZXJTZWFyY2hTb3VyY2UnO1xuaW1wb3J0IEZpZWxkQ29sdW1uQ29uZmlnIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlVGFibGUvRmllbGRDb2x1bW5Db25maWcnO1xuaW1wb3J0IE1lbnVCdXR0b25JdGVtIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlVGFibGUvR3JpZC9zdXBwb3J0L0J1dHRvbk1lbnVJdGVtJztcbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSwgd2hlbkRlZmluZWQgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgU2VhcmNoU291cmNlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gvU2VhcmNoU291cmNlJztcbmltcG9ydCBGZWF0dXJlU2V0IGZyb20gJ2VzcmkvdGFza3Mvc3VwcG9ydC9GZWF0dXJlU2V0JztcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuUHJvcGVydHlTZWFyY2guUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBjb25kb3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBwcm9wZXJ0eSgpIGFkZHJlc3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBwcm9wZXJ0eSgpIHByb3BlcnR5TGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuXG4gIEBwcm9wZXJ0eSgpIHNlYXJjaFdpZGdldDogZXNyaS53aWRnZXRzU2VhcmNoO1xuICBAcHJvcGVydHkoKSBmZWF0dXJlVGFibGU6IGVzcmkuRmVhdHVyZVRhYmxlO1xuICBAcHJvcGVydHkoKSBmZWF0dXJlOiBlc3JpLkZlYXR1cmU7XG4gIEBwcm9wZXJ0eSgpIGdlb21ldHJ5OiBlc3JpLkdlb21ldHJ5O1xuXG4gIGNsdXN0ZXJQb2ludHM6IEZlYXR1cmVMYXllcjtcblxuICBncmFwaGljcyA9IG5ldyBHcmFwaGljc0xheWVyKHsgaWQ6ICdwcm9wZXJ0eS1zZWxlY3QnLCBsaXN0TW9kZTogJ2hpZGUnLCBtaW5TY2FsZTogMTkyMDAgfSk7XG4gIHNpbmdsZVN5bWJvbCA9IHtcbiAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgIHN0eWxlOiAnbm9uZScsXG4gICAgb3V0bGluZTogeyB3aWR0aDogMi41LCBjb2xvcjogWzI1NSwgODIsIDgyLCAxXSB9LFxuICAgIGNvbG9yOiBbMjUzLCA0NiwgNjUsIDAuMjVdXG4gIH07XG4gIG11bHRpU3ltYm9sID0ge1xuICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgc3R5bGU6ICdub25lJyxcbiAgICBvdXRsaW5lOiB7IHdpZHRoOiAyLjUsIGNvbG9yOiBbMjQ5LCAyNDMsIDAsIDFdIH0sXG4gICAgY29sb3I6IFsyNTMsIDQ2LCA2NSwgMC4yNV1cbiAgfTtcbiAgc2VsZWN0ZWRQcm9wZXJ0eTogZXNyaS5HcmFwaGljO1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ2NvbmRvc1RhYmxlJywgdGhpcy5pbml0U2VhcmNoLmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkKHRoaXMsICdnZW9tZXRyeScsIHRoaXMuc2VhcmNoQnlHZW9tZXRyeS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHNlYXJjaEJ5R2VvbWV0cnkoZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnkpIHtcbiAgICB0aGlzLnByb3BlcnR5TGF5ZXJcbiAgICAgIC5xdWVyeUZlYXR1cmVzKHsgZ2VvbWV0cnk6IGdlb21ldHJ5LCByZXR1cm5HZW9tZXRyeTogdHJ1ZSwgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSB9KVxuICAgICAgLnRoZW4ocHJvcGVydHlSZXN1bHQgPT4ge1xuICAgICAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLnByb3BlcnR5TGF5ZXIucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdQUk9QRVJUWV9DT05ETyc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUxheWVyXG4gICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBsZXQgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQocmVzdWx0W2tleV0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBmZWF0dXJlc1swXS5nZW9tZXRyeSA9IHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzWzBdLmdlb21ldHJ5O1xuXG4gICAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZShmZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIFtmZWF0dXJlc1swXS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJyldKTtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVTZXQ6IEZlYXR1cmVTZXQgPSBuZXcgRmVhdHVyZVNldCh7IGZlYXR1cmVzOiBbXSB9KTtcbiAgICAgICAgICAgIHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICBmZWF0dXJlLnN5bWJvbCA9XG4gICAgICAgICAgICAgICAgcHJvcGVydHlSZXN1bHQuZmVhdHVyZXMubGVuZ3RoID4gMSA/ICh0aGlzLm11bHRpU3ltYm9sIGFzIGFueSkgOiAodGhpcy5zaW5nbGVTeW1ib2wgYXMgYW55KTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlSZXN1bHQuZmVhdHVyZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5nZW9tZXRyeSA9IHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzWzBdLmdlb21ldHJ5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgZmVhdHVyZXMpO1xuICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmFkZChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgZmVhdHVyZVNldC5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZENsdXN0ZXJHcmFwaGljcyhmZWF0dXJlU2V0KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIgPSAoZmllbGRzOiBlc3JpLkZpZWxkW10sIGZlYXR1cmVzOiBlc3JpLkdyYXBoaWNbXSkgPT4ge1xuICAgIHJldHVybiBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgc291cmNlOiBmZWF0dXJlcyxcbiAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnLFxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogdGhpcy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgICB9KTtcbiAgfTtcbiAgYWRkQ2x1c3RlckdyYXBoaWNzID0gKHJlc3VsdDogZXNyaS5GZWF0dXJlU2V0KSA9PiB7XG4gICAgY29uc3QgcG9pbnRzOiBHcmFwaGljW10gPSBbXTtcbiAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgIGNvbnN0IHB0ID0gZmVhdHVyZS5jbG9uZSgpO1xuICAgICAgcHQuZ2VvbWV0cnkgPSAocHQuZ2VvbWV0cnkgYXMgZXNyaS5Qb2x5Z29uKS5jZW50cm9pZDtcbiAgICAgIHBvaW50cy5wdXNoKHB0KTtcbiAgICB9KTtcbiAgICB0aGlzLmNsdXN0ZXJQb2ludHMucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiAnMT0xJywgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLCBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLmNsdXN0ZXJQb2ludHMuYXBwbHlFZGl0cyh7IGRlbGV0ZUZlYXR1cmVzOiByZXN1bHQuZmVhdHVyZXMgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY2x1c3RlclBvaW50cy5hcHBseUVkaXRzKHsgYWRkRmVhdHVyZXM6IHBvaW50cyB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsdXN0ZXJQb2ludHMucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBhZGRHcmFwaGljcyA9IChyZXN1bHQ6IGVzcmkuRmVhdHVyZVNldCkgPT4ge1xuICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG4gICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICBmZWF0dXJlLnN5bWJvbCA9IHJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxID8gKHRoaXMubXVsdGlTeW1ib2wgYXMgYW55KSA6ICh0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnkpO1xuICAgICAgdGhpcy5ncmFwaGljcy5hZGQoZmVhdHVyZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENsdXN0ZXJHcmFwaGljcyhyZXN1bHQpO1xuICB9O1xuXG4gIGdldFByb3BlcnR5ID0gKG9pZHM6IGFueVtdLCBzb3VyY2U/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmNvbmRvc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgIHJldHVybiByLm5hbWUgPT09ICdDT05ET19QUk9QRVJUWSc7XG4gICAgfSk7XG4gICAgdGhpcy5jb25kb3NUYWJsZVxuICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHtcbiAgICAgICAgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsXG4gICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZSxcbiAgICAgICAgICAgIG91dFNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5mZWF0dXJlPy5ncmFwaGljKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljLmdlb21ldHJ5ID0gcmVzdWx0Py5mZWF0dXJlc1swXS5nZW9tZXRyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmlldy5nb1RvKHJlc3VsdC5mZWF0dXJlcyk7XG5cbiAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkR3JhcGhpY3MocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHNlYXJjaENvbXBsZXRlID0gKGV2ZW50OiBlc3JpLlNlYXJjaFNlYXJjaENvbXBsZXRlRXZlbnQpID0+IHtcbiAgICBpZiAoIXRoaXMuc2VhcmNoV2lkZ2V0LnZpZXdNb2RlbC5zZWxlY3RlZFN1Z2dlc3Rpb24pIHtcbiAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG5cbiAgICAgIGxldCB3aGVyZSA9ICcnO1xuXG4gICAgICBpZiAoIXRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSkge1xuICAgICAgICB3aGVyZSA9IGBPV05FUiBsaWtlICcke2V2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKX0lJyBPUiBSRUlEIGxpa2UgJyR7ZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUnIE9SIFBJTl9OVU0gbGlrZSAnJHtldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCl9JSdgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCh0aGlzLnNlYXJjaFdpZGdldC5hY3RpdmVTb3VyY2UgYXMgYW55KT8uc2VhcmNoRmllbGRzLmluY2x1ZGVzKCdPV05FUicpKSB7XG4gICAgICAgICAgd2hlcmUgPSBgT1dORVIgbGlrZSAnJSR7ZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUnYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ1BJTl9OVU0nKSkge1xuICAgICAgICAgIHdoZXJlID0gYFBJTl9OVU0gbGlrZSAnJSR7ZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUnYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ1JFSUQnKSkge1xuICAgICAgICAgIHdoZXJlID0gXCJSRUlEIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdGFibGVGZWF0dXJlczogYW55W10gPSBbXTtcblxuICAgICAgdGhpcy5jb25kb3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6IHdoZXJlLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGFibGVGZWF0dXJlcyA9IHJlc3VsdC5mZWF0dXJlcztcbiAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIHx8XG4gICAgICAgICAgKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ0FERFJFU1MnKVxuICAgICAgICApIHtcbiAgICAgICAgICB3aGVyZSA9IGBBRERSRVNTIGxpa2UgJyUke2V2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKX0lJ2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2hlcmUgPSAnQUREUkVTUyBJUyBOVUxMJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogd2hlcmUsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuYWRkcmVzc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdBRERSRVNTRVNfQ09ORE8nO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGFkZHJPaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgYWRkck9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgJiYgYWRkck9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZVxuICAgICAgICAgICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwLmlkLCBvYmplY3RJZHM6IGFkZHJPaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVGZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgdGFibGVGZWF0dXJlcyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgICAgIGlmICh0YWJsZUZlYXR1cmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gbmV3IEdyYXBoaWMoKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgndGFibGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUucmVuZGVyTm93KCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCB0YWJsZUZlYXR1cmVzKTtcbiAgICAgICAgICAgIGlmICh0YWJsZUZlYXR1cmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBuZXcgR3JhcGhpYygpO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5yZW5kZXJOb3coKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChldmVudC5udW1SZXN1bHRzKSB7XG4gICAgICAgIGxldCBsYXllciA9IChldmVudC5yZXN1bHRzWzBdLnNvdXJjZSBhcyBMYXllclNlYXJjaFNvdXJjZSkubGF5ZXIgYXMgRmVhdHVyZUxheWVyO1xuICAgICAgICBpZiAoIWxheWVyICYmIGV2ZW50LnJlc3VsdHNbMF0uc291cmNlLm5hbWUgPT09ICdPd25lcicpIHtcbiAgICAgICAgICBsYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsYXllciAmJiBbJ1NpdGUgQWRkcmVzcycsICdTdHJlZXQgTmFtZSddLmluY2x1ZGVzKGV2ZW50LnJlc3VsdHNbMF0uc291cmNlLm5hbWUpKSB7XG4gICAgICAgICAgbGF5ZXIgPSB0aGlzLmFkZHJlc3NUYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBldmVudC5yZXN1bHRzWzBdLnJlc3VsdHMuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goci5mZWF0dXJlLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxheWVyLmxheWVySWQgPT09IDQpIHtcbiAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXAgPSBsYXllci5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgICByZXR1cm4gci5uYW1lID09PSAnQUREUkVTU0VTX0NPTkRPJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocmVsYXRpb25zaGlwICYmIG9pZHMpIHtcbiAgICAgICAgICAgIGxheWVyXG4gICAgICAgICAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXAuaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5sYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBuZXcgR3JhcGhpYygpO1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmUoZmVhdHVyZXNbMF0sIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsIFtdLCBvaWRzKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgZmVhdHVyZXMpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb25kb3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gbmV3IEdyYXBoaWMoKTtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKHJlc3VsdC5mZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgcmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc2V0RmVhdHVyZShmZWF0dXJlOiBlc3JpLkdyYXBoaWMsIHZpZXc6IGVzcmkuTWFwVmlldywgbWVkaWFJbmZvczogYW55W10sIG9pZHM6IGFueVtdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgncmVpZCcsIGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdSRUlEJykpO1xuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsIGAke2xvY2F0aW9uLnBhdGhuYW1lfT8ke3BhcmFtc31gKTtcbiAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmNvbmRvc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgIHJldHVybiByLm5hbWUgPT09ICdDT05ET19QSE9UT1MnO1xuICAgIH0pO1xuICAgIGNvbnN0IG9pZCA9IGZlYXR1cmUuZ2V0T2JqZWN0SWQoKTtcbiAgICBtZWRpYUluZm9zID0gW107XG4gICAgdGhpcy5jb25kb3NUYWJsZVxuICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICBtZWRpYUluZm9zLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICAgIGNhcHRpb246ICcnLFxuICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHNvdXJjZVVSTDogYGh0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9yZWFsZXN0YXRlL3Bob3Rvcy9tdmlkZW8vJHtmZWF0dXJlLmdldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAgICdJTUFHRURJUidcbiAgICAgICAgICAgICAgICApfS8ke2ZlYXR1cmUuZ2V0QXR0cmlidXRlKCdJTUFHRU5BTUUnKX1gXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lZGlhID0gKHRoaXMuY29uZG9zVGFibGUucG9wdXBUZW1wbGF0ZS5jb250ZW50IGFzIGVzcmkuQ29udGVudFtdKS5maW5kKChjb250ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29udGVudD8udHlwZSA9PT0gJ21lZGlhJztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgIChtZWRpYSBhcyBlc3JpLk1lZGlhQ29udGVudCkubWVkaWFJbmZvcyA9IG1lZGlhSW5mb3M7XG4gICAgICAgIH1cbiAgICAgICAgZmVhdHVyZS5sYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgIGZlYXR1cmUucG9wdXBUZW1wbGF0ZSA9IChmZWF0dXJlLmxheWVyIGFzIGVzcmkuRmVhdHVyZUxheWVyKS5wb3B1cFRlbXBsYXRlO1xuICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYyA9IGZlYXR1cmU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmVhdHVyZS5ncmFwaGljLmF0dHJpYnV0ZXMpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZURpdicpPy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYy5zeW1ib2wgPSB0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnk7XG4gICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljLnNldEF0dHJpYnV0ZSgnT0JKRUNUSUQnLCBvaWQpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MuZmluZChncmFwaGljID0+IHtcbiAgICAgICAgICByZXR1cm4gZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgPT09ICd0cnVlJztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgIHNlbGVjdGVkLnN5bWJvbCA9IHRoaXMubXVsdGlTeW1ib2wgYXMgYW55O1xuICAgICAgICAgIHNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmFwaGljID0gdGhpcy5ncmFwaGljcy5ncmFwaGljcy5maW5kKGdyYXBoaWMgPT4ge1xuICAgICAgICAgIHJldHVybiBncmFwaGljLmdldEF0dHJpYnV0ZSgnUkVJRCcpID09PSBmZWF0dXJlLmdldEF0dHJpYnV0ZSgnUkVJRCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGdyYXBoaWMpIHtcbiAgICAgICAgICBncmFwaGljLnN5bWJvbCA9IHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueTtcblxuICAgICAgICAgIGdyYXBoaWMuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgICAgdGhpcy5ncmFwaGljcy5ncmFwaGljcy5yZW9yZGVyKGdyYXBoaWMsIHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIGV4cG9ydFRhYmxlKCkge1xuICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyLnF1ZXJ5RmVhdHVyZXMoeyBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGxldCBjc3YgPSAnJztcbiAgICAgIHJlc3VsdC5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGNzdiArPSBgJHtmaWVsZC5hbGlhc30sYDtcbiAgICAgIH0pO1xuICAgICAgY3N2ICs9ICdcXHJcXG4nO1xuICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZlYXR1cmUuYXR0cmlidXRlcykge1xuICAgICAgICAgIGlmIChrZXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZGF0ZScpKSB7XG4gICAgICAgICAgICBjc3YgKz0gYFwiJHtuZXcgRGF0ZShmZWF0dXJlLmF0dHJpYnV0ZXNba2V5XSkudG9EYXRlU3RyaW5nKCl9XCIsYDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdhY3JlcycpKSB7XG4gICAgICAgICAgICBjc3YgKz0gYFwiJHtwYXJzZUZsb2F0KGZlYXR1cmUuYXR0cmlidXRlc1trZXldKS50b0ZpeGVkKDIpfVwiLGA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzdiArPSBgXCIke2ZlYXR1cmUuYXR0cmlidXRlc1trZXldfVwiLGA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNzdiArPSAnXFxyXFxuJztcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZXhwb3J0ZWRGaWxlbm1hZSA9ICdpbWFwc19leHBvcnQuY3N2JztcblxuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjc3ZdLCB7IHR5cGU6ICd0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04OycgfSk7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgaWYgKGxpbmsuZG93bmxvYWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBmZWF0dXJlIGRldGVjdGlvblxuICAgICAgICAvLyBCcm93c2VycyB0aGF0IHN1cHBvcnQgSFRNTDUgZG93bmxvYWQgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZXhwb3J0ZWRGaWxlbm1hZSk7XG4gICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGVja1NlYXJjaFBhcmFtcyA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcbiAgICBjb25zdCByZWlkID0gcGFyYW1zLmdldCgncmVpZCcpO1xuICAgIGNvbnN0IHBpbiA9IHBhcmFtcy5nZXQoJ3BpbicpO1xuICAgIGxldCB3aGVyZSA9ICcnO1xuICAgIGlmIChyZWlkIHx8IHBpbikge1xuICAgICAgaWYgKHJlaWQpIHtcbiAgICAgICAgd2hlcmUgPSBgUkVJRCBJTiAoJyR7cmVpZC5zcGxpdCgnLCcpLmpvaW4oXCInLCdcIil9JylgO1xuICAgICAgfSBlbHNlIGlmIChwaW4pIHtcbiAgICAgICAgd2hlcmUgPSBgUElOX05VTSA9ICcke3Bpbn0nYDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29uZG9zVGFibGUucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiB3aGVyZSwgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuXG4gICAgICAgIGlmIChyZXN1bHQuZmVhdHVyZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gbmV3IEdyYXBoaWMoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKHJlc3VsdC5mZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgcmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNzLCB2aWV3Lm1hcC5hbGxMYXllcnMubGVuZ3RoIC0gMSk7XG4gICAgdGhpcy5jbHVzdGVyUG9pbnRzID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICBzb3VyY2U6IFtdLFxuICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJyxcbiAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgIG1heFNjYWxlOiAxOTIwMSxcbiAgICAgIGxpc3RNb2RlOiAnaGlkZScsXG4gICAgICBsZWdlbmRFbmFibGVkOiBmYWxzZSxcbiAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgIHR5cGU6ICdzaW1wbGUnLFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsXG4gICAgICAgICAgc2l6ZTogNCxcbiAgICAgICAgICBjb2xvcjogJyM2OWRjZmYnLFxuICAgICAgICAgIG91dGxpbmU6IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCAxMzksIDE3NCwgMC41KScsXG4gICAgICAgICAgICB3aWR0aDogNVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBhcyBhbnksXG4gICAgICBmZWF0dXJlUmVkdWN0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdjbHVzdGVyJyxcbiAgICAgICAgbGFiZWxpbmdJbmZvOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gdHVybiBvZmYgZGVjb25mbGljdGlvbiB0byBlbnN1cmUgYWxsIGNsdXN0ZXJzIGFyZSBsYWJlbGVkXG4gICAgICAgICAgICBkZWNvbmZsaWN0aW9uU3RyYXRlZ3k6ICdub25lJyxcbiAgICAgICAgICAgIGxhYmVsRXhwcmVzc2lvbkluZm86IHtcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJUZXh0KCRmZWF0dXJlLmNsdXN0ZXJfY291bnQsICcjLCMjIycpXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDRhNWQnLFxuICAgICAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICAgICAgZmFtaWx5OiAnTm90byBTYW5zJyxcbiAgICAgICAgICAgICAgICBzaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBhcyBhbnksXG4gICAgICAgICAgICBsYWJlbFBsYWNlbWVudDogJ2NlbnRlci1jZW50ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogdGhpcy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcubWFwLmFkZCh0aGlzLmNsdXN0ZXJQb2ludHMpO1xuICAgIHRoaXMuY2hlY2tTZWFyY2hQYXJhbXMoKTtcbiAgfVxuXG4gIGdldFN1Z2dlc3Rpb25zID0gKFxuICAgIHBhcmFtczogYW55LFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBsYXllcjogZXNyaS5GZWF0dXJlTGF5ZXIsXG4gICAgb3V0RmllbGRzOiBzdHJpbmdbXSxcbiAgICBvcmRlckJ5RmllbGRzOiBzdHJpbmdbXSxcbiAgICBzZWFyY2hGaWVsZHM6IHN0cmluZ1tdLFxuICAgIHN0YXJ0c1dpdGg6IGJvb2xlYW5cbiAgKSA9PiB7XG4gICAgY29uc3Qgd2hlcmVBcnJheTogc3RyaW5nW10gPSBbXTtcbiAgICBzZWFyY2hGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBpZiAoc3RhcnRzV2l0aCkge1xuICAgICAgICB3aGVyZUFycmF5LnB1c2goYCR7ZmllbGR9IExJS0UgJyR7cGFyYW1zLnN1Z2dlc3RUZXJtLnRvVXBwZXJDYXNlKCl9JSdgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoZXJlQXJyYXkucHVzaChgJHtmaWVsZH0gTElLRSAnJSR7cGFyYW1zLnN1Z2dlc3RUZXJtLnRvVXBwZXJDYXNlKCl9JSdgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbGF5ZXJcbiAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgcmV0dXJuRGlzdGluY3RWYWx1ZXM6IHRydWUsXG4gICAgICAgIG91dEZpZWxkczogb3V0RmllbGRzLFxuICAgICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgICAgIG9yZGVyQnlGaWVsZHM6IG9yZGVyQnlGaWVsZHMsXG4gICAgICAgIHdoZXJlOiB3aGVyZUFycmF5LmpvaW4oJyBPUiAnKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5mZWF0dXJlc1xuICAgICAgICAgIC5maWx0ZXIoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIW91dEZpZWxkcy5pbmNsdWRlcygnQUREUl9MSVNUJykgfHwgZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ0FERFJfTElTVCcpID09PSAnWWVzJztcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBrZXk6IG5hbWUsXG4gICAgICAgICAgICAgIHRleHQ6IGZlYXR1cmUuZ2V0QXR0cmlidXRlKG91dEZpZWxkc1swXSksXG4gICAgICAgICAgICAgIHNvdXJjZUluZGV4OiBwYXJhbXMuc291cmNlSW5kZXhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcbiAgaW5pdFNlYXJjaChjb25kb3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXIpIHtcbiAgICBjb25zdCB0YWJsZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAgeyBuYW1lOiAnU0lURV9BRERSRVNTJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnQWRkcmVzcycgfSxcbiAgICAgICAgeyBuYW1lOiAnT1dORVInLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdPd25lcicgfSxcbiAgICAgICAgeyBuYW1lOiAnUElOX05VTScsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ1BJTicgfSxcbiAgICAgICAgeyBuYW1lOiAnUkVJRCcsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ1JFSUQnIH1cbiAgICAgIF0sXG4gICAgICBzb3VyY2U6IFtdLFxuICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCcsXG4gICAgICBzcGF0aWFsUmVmZXJlbmNlOiB0aGlzLnZpZXcuc3BhdGlhbFJlZmVyZW5jZVxuICAgIH0pO1xuICAgIHRoaXMuZmVhdHVyZSA9IG5ldyBGZWF0dXJlKHsgdmlldzogdGhpcy52aWV3IH0pO1xuXG4gICAgdGhpcy5mZWF0dXJlVGFibGUgPSBuZXcgRmVhdHVyZVRhYmxlKHtcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIGxheWVyOiB0YWJsZUxheWVyLFxuICAgICAgZmllbGRDb25maWdzOiBbXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1NJVEVfQUREUkVTUycsXG4gICAgICAgICAgbGFiZWw6ICdBZGRyZXNzJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ09XTkVSJyxcbiAgICAgICAgICBsYWJlbDogJ093bmVyJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1BJTl9OVU0nLFxuICAgICAgICAgIGxhYmVsOiAnUElOJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1JFSUQnLFxuICAgICAgICAgIGxhYmVsOiAnUkVJRCcsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgbWVudUNvbmZpZzoge1xuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICh7XG4gICAgICAgICAgICBsYWJlbDogJ0V4cG9ydCdcbiAgICAgICAgICB9IGFzIHVua25vd24pIGFzIE1lbnVCdXR0b25JdGVtXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBidXR0b246IE1lbnVCdXR0b25JdGVtID0gdGhpcy5mZWF0dXJlVGFibGU/Lm1lbnVDb25maWc/Lml0ZW1zPy5maW5kKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0ubGFiZWwgPT09ICdFeHBvcnQnO1xuICAgIH0pIGFzIE1lbnVCdXR0b25JdGVtO1xuICAgIGJ1dHRvbi5jbGlja0Z1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgdGhpcy5leHBvcnRUYWJsZSgpO1xuICAgIH07XG4gICAgYnV0dG9uLmNsaWNrRnVuY3Rpb24uYmluZCh0aGlzLmZlYXR1cmVUYWJsZSk7XG5cbiAgICB0aGlzLmZlYXR1cmVUYWJsZS5vbignc2VsZWN0aW9uLWNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICh0aGlzLmZlYXR1cmVUYWJsZSBhcyBhbnkpLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICBpZiAoZXZlbnQuYWRkZWQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZ2V0UHJvcGVydHkoW2V2ZW50LmFkZGVkWzBdLmZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpXSwgJ3RhYmxlJyk7XG4gICAgICAgIHRoaXMuc2V0RmVhdHVyZShcbiAgICAgICAgICBldmVudC5hZGRlZFswXS5mZWF0dXJlLFxuICAgICAgICAgIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsXG4gICAgICAgICAgW10sXG4gICAgICAgICAgW2V2ZW50LmFkZGVkWzBdLmZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpXVxuICAgICAgICApO1xuICAgICAgICBldmVudC5hZGRlZFswXS5mZWF0dXJlLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xuICAgICAgYWxsUGxhY2Vob2xkZXI6ICdBZGRyZXNzLCBvd25lciwgUElOLCBvciBSRUlEJyxcbiAgICAgIGluY2x1ZGVEZWZhdWx0U291cmNlczogZmFsc2UsXG4gICAgICBjb250YWluZXI6ICdzZWFyY2gnLFxuICAgICAgc291cmNlczogW1xuICAgICAgICAvLyBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAvLyAgIGxheWVyOiB0aGlzLmFkZHJlc3NUYWJsZSxcbiAgICAgICAgLy8gICBzZWFyY2hGaWVsZHM6IFsnQUREUkVTUycsICdBRERSRVNTX05PRElSJ10sXG4gICAgICAgIC8vICAgZGlzcGxheUZpZWxkOiAnQUREUkVTUycsXG4gICAgICAgIC8vICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgIC8vICAgb3V0RmllbGRzOiBbJ0FERFJFU1MnLCAnUkVBX1JFSUQnXSxcbiAgICAgICAgLy8gICBuYW1lOiAnU2l0ZSBBZGRyZXNzJyxcbiAgICAgICAgLy8gICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDIyMiBXIEhBUkdFVFQnXG4gICAgICAgIC8vIH0pLFxuICAgICAgICBuZXcgU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDIyMiBXIEhBUkdFVFQgU1QnLFxuICAgICAgICAgIG5hbWU6ICdTaXRlIEFkZHJlc3MnLFxuICAgICAgICAgIGdldFN1Z2dlc3Rpb25zOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1Z2dlc3Rpb25zKFxuICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgICdTaXRlIEFkZHJlc3MnLFxuICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZSxcbiAgICAgICAgICAgICAgWydBRERSRVNTJywgJ0FERFJfTElTVCddLFxuICAgICAgICAgICAgICBbJ0FERFJFU1MnXSxcbiAgICAgICAgICAgICAgWydBRERSRVNTJywgJ0FERFJFU1NfTk9ESVInXSxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFJlc3VsdHM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkcmVzc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogYEFERFJFU1MgPSAnJHtwYXJhbXMuc3VnZ2VzdFJlc3VsdC50ZXh0LnRvVXBwZXJDYXNlKCl9J2AsXG4gICAgICAgICAgICAgICAgb3V0RmllbGRzOiBbJ0FERFJFU1MnLCAnUkVBX1JFSUQnLCAnT0JKRUNUSUQnXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlOiBmZWF0dXJlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQWRkcmVzcydcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pIGFzIGFueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYXMgYW55KSxcbiAgICAgICAgLy8gbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgLy8gICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgIC8vICAgc2VhcmNoRmllbGRzOiBbJ09XTkVSJ10sXG4gICAgICAgIC8vICAgZGlzcGxheUZpZWxkOiAnT1dORVInLFxuICAgICAgICAvLyAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAvLyAgIG91dEZpZWxkczogWydPV05FUicsICdSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgIC8vICAgbmFtZTogJ093bmVyJyxcbiAgICAgICAgLy8gICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IFNNSVRILCBKT0hOJ1xuICAgICAgICAvLyB9KSxcbiAgICAgICAgbmV3IFNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiBTTUlUSCwgSk9ITicsXG4gICAgICAgICAgbmFtZTogJ093bmVyJyxcbiAgICAgICAgICBnZXRTdWdnZXN0aW9uczogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWdnZXN0aW9ucyhwYXJhbXMsICdPd25lcicsIHRoaXMuY29uZG9zVGFibGUsIFsnT1dORVInXSwgWydPV05FUiddLCBbJ09XTkVSJ10sIGZhbHNlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFJlc3VsdHM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZG9zVGFibGVcbiAgICAgICAgICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiBgT1dORVIgPSAnJHtwYXJhbXMuc3VnZ2VzdFJlc3VsdC50ZXh0LnRvVXBwZXJDYXNlKCl9J2AsXG4gICAgICAgICAgICAgICAgb3V0RmllbGRzOiBbJ09XTkVSJywgJ09CSkVDVElEJ11cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZTogZmVhdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ093bmVyJ1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBhbnkpLFxuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnUElOX05VTSddLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ1BJTl9OVU0nLFxuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgIG91dEZpZWxkczogWydQSU5fTlVNJywgJ1JFSUQnLCAnT0JKRUNUSUQnXSxcbiAgICAgICAgICBuYW1lOiAnUElOJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDA3MTIzNDU2NzgnXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnUkVJRCddLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ1JFSUQnLFxuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgIG91dEZpZWxkczogWydSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgICAgbmFtZTogJ1JFSUQnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMDEyMzQ1NidcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogVyBIQVJHRVRUIFNUJyxcbiAgICAgICAgICBuYW1lOiAnU3RyZWV0IE5hbWUnLFxuICAgICAgICAgIGdldFN1Z2dlc3Rpb25zOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1Z2dlc3Rpb25zKFxuICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgICdTdHJlZXQgTmFtZScsXG4gICAgICAgICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlLFxuICAgICAgICAgICAgICBbJ1NUUkVFVCcsICdBRERSX0xJU1QnXSxcbiAgICAgICAgICAgICAgWydTVFJFRVQnXSxcbiAgICAgICAgICAgICAgWydTVFJFRVQnLCAnU1RSRUVUX05PRElSJ10sXG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0UmVzdWx0czogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRyZXNzVGFibGVcbiAgICAgICAgICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiBgU1RSRUVUID0gJyR7cGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dC50b1VwcGVyQ2FzZSgpfSdgLFxuICAgICAgICAgICAgICAgIG91dEZpZWxkczogWydTVFJFRVQnLCAnUkVBX1JFSUQnLCAnT0JKRUNUSUQnXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlOiBmZWF0dXJlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU3RyZWV0IE5hbWUnXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KSBhcyBhbnk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIF1cbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldC52aWV3TW9kZWwud2F0Y2goJ3Jlc3VsdHMnLCBldmVudCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hXaWRnZXQub24oJ3NlYXJjaC1jb21wbGV0ZScsIHRoaXMuc2VhcmNoQ29tcGxldGUpO1xuICB9XG4gIHRvZ2dsZUNvbnRlbnQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gJ3RhYmxlJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmUnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmUnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZUl0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCBmcm9tICcuL1Byb3BlcnR5U2VhcmNoL1Byb3BlcnR5U2VhcmNoVmlld01vZGVsJztcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlTZWFyY2hQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBwcm9wZXJ0eUxheWVyPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIGNvbmRvc1RhYmxlPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIGFkZHJlc3NUYWJsZT86IGVzcmkuRmVhdHVyZUxheWVyO1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBwcm9wZXJ0eXNlYXJjaC1iYXNlJ1xufTtcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuUHJvcGVydHlTZWFyY2gnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlTZWFyY2ggZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5jb25kb3NUYWJsZScpXG4gIGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5hZGRyZXNzVGFibGUnKVxuICBhZGRyZXNzVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLnByb3BlcnR5TGF5ZXInKVxuICBwcm9wZXJ0eUxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5zZWFyY2hXaWRnZXQnKVxuICBzZWFyY2hXaWRnZXQ6IGVzcmkud2lkZ2V0c1NlYXJjaDtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5mZWF0dXJlVGFibGUnKVxuICBmZWF0dXJlVGFibGU6IGVzcmkuRmVhdHVyZVRhYmxlO1xuICBAYWxpYXNPZigndmlld01vZGVsLmZlYXR1cmUnKVxuICBmZWF0dXJlOiBlc3JpLkZlYXR1cmU7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZ2VvbWV0cnknKVxuICBnZW9tZXRyeTogZXNyaS5HZW9tZXRyeTtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IFByb3BlcnR5U2VhcmNoVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCA9IG5ldyBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBQcm9wZXJ0eVNlYXJjaFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIF9jcmVhdGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2VhcmNoV2lkZ2V0KSB7XG4gICAgICB0aGlzLnNlYXJjaFdpZGdldC5jb250YWluZXIgPSAnc2VhcmNoJztcbiAgICB9XG4gIH07XG4gIF9jcmVhdGVUYWJsZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5mZWF0dXJlVGFibGUpIHtcbiAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmNvbnRhaW5lciA9ICd0YWJsZSc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlRmVhdHVyZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5mZWF0dXJlKSB7XG4gICAgICB0aGlzLmZlYXR1cmUuY29udGFpbmVyID0gJ2ZlYXR1cmVEaXYnO1xuICAgIH1cbiAgfTtcblxuICBjdXJyZW50UmFkaW9CdXR0b24gPSAnbGlzdCc7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NpZGVEaXYgY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtJyk7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVSYWRpb0dyb3VwSXRlbUNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2FuIEkgZ2V0IGNoZWNrZWQgYW5kIHZhbHVlIGxpa2UgdGhpcz9cbiAgICAgICAgaWYgKGUudGFyZ2V0Py5jaGVja2VkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQ/LnZhbHVlKTtcbiAgICAgICAgICB0aGlzLnZpZXdNb2RlbC50b2dnbGVDb250ZW50KGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGZlYXREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZURpdicpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njcm9sbEFycm93Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmVhdERpdj8uc2Nyb2xsQnkoeyB0b3A6IGZlYXREaXYub2Zmc2V0SGVpZ2h0LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgdGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG4gICAgaWYgKHRoZW1lKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyb3dQYXRoJyk/LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhlbWUgPT09ICdsaWdodCcgPyAnYmxhY2snIDogJ3doaXRlJyk7XG4gICAgfVxuXG4gICAgZmVhdERpdj8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgaWYgKGZlYXREaXYuc2Nyb2xsVG9wID49IGZlYXREaXYuc2Nyb2xsSGVpZ2h0IC0gZmVhdERpdi5vZmZzZXRIZWlnaHQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njcm9sbEFycm93Jyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njcm9sbEFycm93Jyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZVNlYXJjaH0gaWQ9XCJzZWFyY2hcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlVGFibGV9IGlkPVwidGFibGVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImZlYXR1cmVcIiBjbGFzcz1cImhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJmZWF0dXJlRGl2XCIgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUZlYXR1cmV9PjwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGlkPVwic2Nyb2xsQXJyb3dcIlxuICAgICAgICAgICAgY2xhc3M9XCJob21lLXBhZ2VfX3Njcm9sbC1kb3duLWFycm93IGhvbWUtcGFnZV9fc2Nyb2xsLWRvd24tYXJyb3ctLWJsYWNrXCJcbiAgICAgICAgICAgIGRhdGEtZG9qby1hdHRhY2gtcG9pbnQ9XCJhcnJvd0NvbnRhaW5lclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgY2xhc3M9XCJpY29uLWlubGluZSAgXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJhcnJvd1BhdGhcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICBzdHJva2Utb3BhY2l0eT1cIjAuNVwiXG4gICAgICAgICAgICAgICAgZD1cIk0xNi41IDI3LjIwN2wtNC44NTQtNC44NTQuNzA3LS43MDdMMTYgMjUuMjkzVjVoMXYyMC4yOTNsMy42NDYtMy42NDYuNzA3LjcwN3pcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwIHdpZHRoPVwiZnVsbFwiPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gY2hlY2tlZCB2YWx1ZT1cInRhYmxlXCIgaWQ9XCJ0YWJsZUl0ZW1cIj5cbiAgICAgICAgICAgIExpc3RcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHZhbHVlPVwiZmVhdHVyZVwiIGlkPVwiZmVhdHVyZUl0ZW1cIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIERldGFpbHNcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgTWVhc3VyZW1lbnQgZnJvbSAnZXNyaS93aWRnZXRzL01lYXN1cmVtZW50JztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5NZWFzdXJlLk1lYXN1cmVWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZVZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cbiAgbWVhc3VyZW1lbnQ6IGVzcmkuTWVhc3VyZW1lbnQ7XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxuICBtZWFzdXJlT3BlbmVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZWFzdXJlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAnKSBhcyBhbnkpLnNlbGVjdGVkSXRlbS50aXRsZTtcbiAgICBpZiAoc2VsZWN0ZWQgIT0gJ2NsZWFyJykge1xuICAgICAgdGhpcy5tZWFzdXJlbWVudC5hY3RpdmVUb29sID0gc2VsZWN0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICB9XG4gIH1cbiAgaW5pdE1lYXN1cmUoKSB7XG4gICAgdGhpcy5tZWFzdXJlbWVudCA9IG5ldyBNZWFzdXJlbWVudCh7IHZpZXc6IHRoaXMudmlldywgY29udGFpbmVyOiAnbWVhc3VyZVdpZGdldCcgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IE1lYXN1cmVWaWV3TW9kZWwgZnJvbSAnLi9NZWFzdXJlL01lYXN1cmVWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lYXN1cmVQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBtZWFzdXJlLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLk1lYXN1cmUnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZSBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLm1lYXN1cmVtZW50JylcbiAgbWVhc3VyZW1lbnQ6IGVzcmkuTWVhc3VyZW1lbnQ7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuaW5pdE1lYXN1cmUnKVxuICBpbml0TWVhc3VyZTogRnVuY3Rpb247XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubWVhc3VyZU9wZW5lZCcpXG4gIG1lYXN1cmVPcGVuZWQ6IEZ1bmN0aW9uO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTWVhc3VyZVZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogTWVhc3VyZVZpZXdNb2RlbCA9IG5ldyBNZWFzdXJlVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IE1lYXN1cmVQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfbWVhc3VyZUNyZWF0ZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5pbml0TWVhc3VyZSgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZWFzdXJlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUmFkaW9Hcm91cEl0ZW1DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldD8uY2hlY2tlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Py50aXRsZSk7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0Py50aXRsZSA9PT0gJ2NsZWFyJykge1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lYXN1cmVtZW50LmFjdGl2ZVRvb2wgPSBlLnRhcmdldD8udGl0bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdGl0bGU9XCJkaXN0YW5jZVwiIHZhbHVlPVwiZGlzdGFuY2VcIiBpZD1cInRhYmxlSXRlbVwiIGljb249XCJtZWFzdXJlXCI+XG4gICAgICAgICAgICBMaW5lXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB0aXRsZT1cImFyZWFcIiB2YWx1ZT1cImFyZWFcIiBpZD1cImZlYXR1cmVJdGVtXCIgaWNvbj1cIm1lYXN1cmUtYXJlYVwiPlxuICAgICAgICAgICAgQXJlYVxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdGl0bGU9XCJjbGVhclwiIHZhbHVlPVwiY2xlYXJcIiBpZD1cImZlYXR1cmVJdGVtXCIgaWNvbj1cInRyYXNoXCI+XG4gICAgICAgICAgICBDbGVhclxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXA+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX21lYXN1cmVDcmVhdGVkfSBpZD1cIm1lYXN1cmVXaWRnZXRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCBQb3B1cFRlbXBsYXRlIGZyb20gJ2VzcmkvUG9wdXBUZW1wbGF0ZSc7XG5pbXBvcnQgRXhwcmVzc2lvbkluZm8gZnJvbSAnZXNyaS9wb3B1cC9FeHByZXNzaW9uSW5mbyc7XG5pbXBvcnQgQ3VzdG9tQ29udGVudCBmcm9tICdlc3JpL3BvcHVwL2NvbnRlbnQvQ3VzdG9tQ29udGVudCc7XG5pbXBvcnQgTG9jYXRvciBmcm9tICdlc3JpL3Rhc2tzL0xvY2F0b3InO1xuaW1wb3J0IGdlb2Rlc2ljVXRpbHMgZnJvbSAnZXNyaS9nZW9tZXRyeS9zdXBwb3J0L2dlb2Rlc2ljVXRpbHMnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmUnO1xuaW1wb3J0IHsgdmlldyB9IGZyb20gJy4uJztcbmNvbnN0IGFyY2FkZUV4cHJlc3Npb25JbmZvcyA9IFtcbiAge1xuICAgIG5hbWU6ICdtYWlsaW5nLWFkZHJlc3MnLFxuICAgIHRpdGxlOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1doZW4oSXNFbXB0eSgkZmVhdHVyZS5BRERSMyksJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIsJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjMpJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ3Byb3BlcnR5LXZhbHVlcycsXG4gICAgdGl0bGU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgIGV4cHJlc3Npb246XG4gICAgICAnXCJCdWlsZGluZyBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuQkxER19WQUwrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkxhbmQgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkxBTkRfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3RhbCBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuVE9UQUxfVkFMVUVfQVNTRCdcbiAgfSxcblxuICB7XG4gICAgbmFtZTogJ3BpbicsXG4gICAgdGl0bGU6ICdQSU4nLFxuICAgIGV4cHJlc3Npb246IFwidmFyIG51bSA9ICRmZWF0dXJlLlBJTl9OVU07dmFyIGV4dCA9ICRmZWF0dXJlLlBJTl9FWFQ7cmV0dXJuIFdoZW4oZXh0ID09ICcwMDAnLG51bSxudW0rJyAnK2V4dCk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdidWlsZF92YWwnLFxuICAgIHRpdGxlOiAnQnVpbGRpbmcgVmFsdWUnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHZhbHVlID0gJGZlYXR1cmUuQkxER19WQUw7V2hlbihJc0VtcHR5KHZhbHVlKSwnLS0nLCAnJCcrVGV4dCh2YWx1ZSwgJyMsIyMjJykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbGFuZF92YWwnLFxuICAgIHRpdGxlOiAnTGFuZCBWYWx1ZScsXG4gICAgZXhwcmVzc2lvbjogXCJ2YXIgdmFsdWUgPSAkZmVhdHVyZS5MQU5EX1ZBTDtXaGVuKElzRW1wdHkodmFsdWUpLCctLScsICckJytUZXh0KHZhbHVlLCAnIywjIyMnKSk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd0b3RhbF92YWwnLFxuICAgIHRpdGxlOiAnVG90YWwgVmFsdWUnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHZhbHVlID0gJGZlYXR1cmUuVE9UQUxfVkFMVUVfQVNTRDtXaGVuKElzRW1wdHkodmFsdWUpLCctLScsICckJytUZXh0KHZhbHVlLCAnIywjIyMnKSk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdzYWxlX3ByaWNlJyxcbiAgICB0aXRsZTogJ1NhbGUgUHJpY2UnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHZhbHVlID0gJGZlYXR1cmUuVE9UU0FMUFJJQ0U7V2hlbihJc0VtcHR5KHZhbHVlKSwnLS0nLCAnJCcrVGV4dCh2YWx1ZSwgJyMsIyMjJykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnY2l0eScsXG4gICAgdGl0bGU6ICdDaXR5JyxcbiAgICBleHByZXNzaW9uOiBcInZhciBjaXR5ID0gJGZlYXR1cmUuQ0lUWV9ERUNPREU7V2hlbihJc0VtcHR5KGNpdHkpLCdVbmluY29ycG9yYXRlZCcsIFByb3BlcihjaXR5KSk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd0b3duc2hpcCcsXG4gICAgdGl0bGU6ICdUb3duc2hpcCcsXG4gICAgZXhwcmVzc2lvbjogXCJ2YXIgdHMgPSAkZmVhdHVyZS5UT1dOU0hJUF9ERUNPREU7V2hlbihJc0VtcHR5KHRzKSwnTm9uZScsIFByb3Blcih0cykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnanVyaXNkaWN0aW9uJyxcbiAgICB0aXRsZTogJ0p1cmlzZGljdGlvbicsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICd2YXIganVyaXMgPSAkZmVhdHVyZS5QTEFOTklOR19KVVJJU0RJQ1RJT047V2hlbignICtcbiAgICAgIFwianVyaXMgPT0gJ1JBJywgJ1JhbGVpZ2gnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0NBJywgJ0NhcnknLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0FQJywgJ0FwZXgnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0FOJywgJ0FuZ2llcicsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnQ0wnLCAnQ2xheXRvbicsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnRFUnLCAnRHVyaGFtJyxcIiArXG4gICAgICBcImp1cmlzID09ICdGVicsICdGdXF1YXktVmFyaW5hJyxcIiArXG4gICAgICBcImp1cmlzID09ICdHQScsICdHYXJuZXInLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0hTJywgJ0hvbGx5IFNwcmluZ3MnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0tOJywgJ0tuaWdodGRhbGUnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ01PJywgJ01vcnJpc3ZpbGxlJyxcIiArXG4gICAgICBcImp1cmlzID09ICdSTycsICdSb2xlc3ZpbGxlJyxcIiArXG4gICAgICBcImp1cmlzID09ICdXRicsICdXYWtlIEZvcmVzdCcsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnV0UnLCAnV2VuZGVsbCcsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnWkInLCAnWmVidWxvbicsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnV0MnLCAnV2FrZSBDb3VudHknLFwiICtcbiAgICAgIFwiICdXYWtlIENvdW50eScpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZ2VuZXJhbCcsXG4gICAgdGl0bGU6ICdnZW5lcmFsJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1wiUElOXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5QSU5fTlVNK1wiIFwiKyRmZWF0dXJlLlBJTl9FWFQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICdcIlJFSURcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKyRmZWF0dXJlLlJFSUQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkNpdHlcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgJ1Byb3BlcigkZmVhdHVyZS5DSVRZX0RFQ09ERSkrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkp1cmlzZGljdGlvblwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAnJGZlYXR1cmUuUExBTk5JTkdfSlVSSVNESUNUSU9OK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3duc2hpcFwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrUHJvcGVyKCRmZWF0dXJlLlRPV05TSElQX0RFQ09ERSknXG4gIH1cbl0gYXMgRXhwcmVzc2lvbkluZm9bXTtcbmNvbnN0IHNlcnZpY2VzOiBhbnlbXSA9IFtcbiAge1xuICAgIGdyb3VwOiB7XG4gICAgICB0aXRsZTogJ0VsZWN0b3JhbCcsXG4gICAgICBsYXllcnM6IFtcbiAgICAgICAgJ1ByZWNpbmN0cycsXG4gICAgICAgICdDb25ncmVzc2lvbmFsIERpc3RyaWN0cycsXG4gICAgICAgICdOQyBIb3VzZSBvZiBSZXByZXNlbnRhdGl2ZXMgRGlzdHJpY3RzJyxcbiAgICAgICAgJ05DIFNlbmF0ZSBEaXN0cmljdHMnLFxuICAgICAgICAnU2Nob29sIEJvYXJkIERpc3RyaWN0cycsXG4gICAgICAgICdCb2FyZCBvZiBDb21taXNzaW9uZXJzIERpc3RyaWN0cycsXG4gICAgICAgICdTdXBlcmlvciBDb3VydCBEaXN0cmljdHMnLFxuICAgICAgICAnUmFsZWlnaCBDaXR5IENvdW5jaWwnLFxuICAgICAgICAnTW9ycmlzdmlsbGUgVG93biBDb3VuY2lsIERpc3RyaWN0cydcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBncm91cDoge1xuICAgICAgdGl0bGU6ICdFbnZpcm9ubWVudGFsJyxcbiAgICAgIGxheWVyczogW1xuICAgICAgICAnU3BlY2lhbCBGbG9vZCBIYXphcmQgQXJlYXMgLSBGbG9vZFBsYWluIC0gRmxvb2RwbGFpbicsXG4gICAgICAgICdTb2lscycsXG4gICAgICAgICdDcml0aWNhbCBXYXRlcnNoZWRzJyxcbiAgICAgICAgJ1dhdGVyIFN1cHBseSBXYXRlcnNoZWRzJ1xuICAgICAgXVxuICAgIH1cbiAgfVxuXTtcblxuY29uc3Qgc2Nyb2xsVG9TZXJ2aWNlID0gKGU6IGFueSkgPT4ge1xuICBjb25zdCByZWN0ID0gKGUuZGV0YWlsLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW0gYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZURpdicpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkaXY/LnNjcm9sbFRvKHsgdG9wOiByZWN0LnRvcCArIGRpdi5zY3JvbGxUb3AgLSAxNTUsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfSwgNTAwKTtcbn07XG5jb25zdCBzZXJ2aWNlQ2hhbmdlZCA9IChncmFwaGljOiBfX2VzcmkuR3JhcGhpYywgZTogYW55KSA9PiB7XG4gIGlmIChcbiAgICAhZS5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbS5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpICYmXG4gICAgZS5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMFxuICApIHtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWxvYWRlcicpO1xuICAgIGxvYWRlci5zZXRBdHRyaWJ1dGUoJ2lubGluZScsICcnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWhlYWRlcicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGhlYWRlci5pbnNlcnRCZWZvcmUobG9hZGVyLCBoZWFkZXIuY2hpbGROb2Rlc1sxXSk7XG4gICAgY29uc3Qgc2VydmljZUdyb3VwOiBhbnkgPSBzZXJ2aWNlcy5maW5kKHNlcnZpY2UgPT4ge1xuICAgICAgcmV0dXJuIHNlcnZpY2UuZ3JvdXAudGl0bGUgPT09IGUuZGV0YWlsLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW0uZ2V0QXR0cmlidXRlKCdpdGVtLXRpdGxlJyk7XG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8X19lc3JpLkZlYXR1cmVTZXQ+W10gPSBbXTtcblxuICAgIGlmIChzZXJ2aWNlR3JvdXApIHtcbiAgICAgIGNvbnN0IGxheWVycyA9IHZpZXcubWFwLmFsbExheWVycy5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICByZXR1cm4gc2VydmljZUdyb3VwLmdyb3VwLmxheWVycy5pbmNsdWRlcyhsYXllci50aXRsZSk7XG4gICAgICB9KTtcbiAgICAgIGxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAobGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllcikucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICBnZW9tZXRyeTogZ3JhcGhpYy5nZW9tZXRyeSxcbiAgICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHByb21pc2VzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICByZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0LmZlYXR1cmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IF9fZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtLmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICBuZXcgRmVhdHVyZSh7IGNvbnRhaW5lcjogZGl2LCBncmFwaGljOiBmZWF0dXJlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2Nyb2xsVG9TZXJ2aWNlKGUpO1xuICAgICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQobG9hZGVyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQobG9hZGVyKTtcbiAgICAgIHJldHVybiAnTm8gc2VydmljZXMgZm91bmQuJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2Nyb2xsVG9TZXJ2aWNlKGUpO1xuICB9XG59O1xuY29uc3QgZGVlZENyZWF0b3IgPSAoZTogYW55KSA9PiB7XG4gIHJldHVybiAoZS5ncmFwaGljLmxheWVyIGFzIEZlYXR1cmVMYXllcilcbiAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoe1xuICAgICAgcmVsYXRpb25zaGlwSWQ6IChlLmdyYXBoaWMubGF5ZXIgYXMgRmVhdHVyZUxheWVyKS5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgIHJldHVybiByLm5hbWUgPT09ICdDT05ET19CT09LUyc7XG4gICAgICB9KT8uaWQsXG4gICAgICBvYmplY3RJZHM6IFtlLmdyYXBoaWMuZ2V0T2JqZWN0SWQoKV0sXG4gICAgICBvdXRGaWVsZHM6IFsnQk9NX0RPQ19OVU0nLCAnREVFRF9ET0NfTlVNJ11cbiAgICB9KVxuICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBjb25zdCBkZWVkID0gcmVzdWx0W2UuZ3JhcGhpYy5nZXRPYmplY3RJZCgpXS5mZWF0dXJlc1swXS5nZXRBdHRyaWJ1dGUoJ0RFRURfRE9DX05VTScpO1xuICAgICAgY29uc3QgYm9tID0gcmVzdWx0W2UuZ3JhcGhpYy5nZXRPYmplY3RJZCgpXS5mZWF0dXJlc1swXS5nZXRBdHRyaWJ1dGUoJ0JPTV9ET0NfTlVNJyk7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdzsnKTtcbiAgICAgIGlmIChkZWVkKSB7XG4gICAgICAgIGNvbnN0IGRlZWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWJ1dHRvbicpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZSgnc2NhbGUnLCAncycpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZSgncm91bmQnLCAnJyk7XG4gICAgICAgIGRlZWRCdG4uc2V0QXR0cmlidXRlKCdpY29uLXN0YXJ0JywgJ2ZpbGUtdGV4dCcpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnaHJlZicsXG4gICAgICAgICAgJ2h0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9ib29rc3dlYi9wZGZ2aWV3LmFzcHg/ZG9jaWQ9JyArIGRlZWQgKyAnJlJlY29yZERhdGU9J1xuICAgICAgICApO1xuXG4gICAgICAgIGRlZWRCdG4udGV4dENvbnRlbnQgPSAnRGVlZCc7XG4gICAgICAgIGRpdi5hcHBlbmQoZGVlZEJ0bik7XG4gICAgICB9XG4gICAgICBpZiAoYm9tKSB7XG4gICAgICAgIGNvbnN0IGJvbWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYnV0dG9uJyk7XG4gICAgICAgIGJvbWJ0bi5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgJ3MnKTtcbiAgICAgICAgYm9tYnRuLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICBib21idG4uc2V0QXR0cmlidXRlKCdyb3VuZCcsICcnKTtcbiAgICAgICAgYm9tYnRuLnNldEF0dHJpYnV0ZSgnaWNvbi1zdGFydCcsICdtYXAnKTtcbiAgICAgICAgYm9tYnRuLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPScgKyBib20gKyAnJlJlY29yZERhdGU9Jyk7XG4gICAgICAgIGJvbWJ0bi50ZXh0Q29udGVudCA9ICdCb29rIG9mIE1hcHMnO1xuICAgICAgICBkaXYuYXBwZW5kKGJvbWJ0bik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXY7XG4gICAgfSk7XG59O1xuY29uc3QgcG9wdXBUZW1wbGF0ZSA9IG5ldyBQb3B1cFRlbXBsYXRlKHtcbiAgZXhwcmVzc2lvbkluZm9zOiBhcmNhZGVFeHByZXNzaW9uSW5mb3MsXG4gIC8vIGNvbnRlbnQ6IChldmVudDogYW55KSA9PiB7XG4gIC8vICAgY29uc3QgZ3JhcGhpYyA9IGV2ZW50LmdyYXBoaWM7XG4gIC8vICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RleHQtZ3JlZW4nKTtcbiAgLy8gICBjb250YWluZXIuYXBwZW5kKGRpdik7XG4gIC8vICAgZGl2LnRleHRDb250ZW50ID0gZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ1NJVEVfQUREUkVTUycpO1xuICAvLyAgIHJldHVybiBjb250YWluZXI7XG4gIC8vIH0sXG4gIGNvbnRlbnQ6IFtcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgxPntTSVRFX0FERFJFU1N9PC9oMT4nXG4gICAgfSxcbiAgICBuZXcgQ3VzdG9tQ29udGVudCh7XG4gICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgY3JlYXRvcjogKGU6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IExvY2F0b3Ioe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWFwcy5yYWxlaWdobmMuZ292L2FyY2dpcy9yZXN0L3NlcnZpY2VzL0xvY2F0b3JzL0NvbXBvc2l0ZUxvY2F0b3IvR2VvY29kZVNlcnZlcicsXG4gICAgICAgICAgb3V0U3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH1cbiAgICAgICAgfSlcbiAgICAgICAgICAuYWRkcmVzc1RvTG9jYXRpb25zKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHsgc2luZ2xlTGluZTogZS5ncmFwaGljLmdldEF0dHJpYnV0ZSgnU0lURV9BRERSRVNTJykgfSxcbiAgICAgICAgICAgIG91dEZpZWxkczogWycqJ11cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChjYW5kaWRhdGVzOiBfX2VzcmkuQWRkcmVzc0NhbmRpZGF0ZVtdKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuZGlkYXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gY2FuZGlkYXRlcy5maW5kKGNhbmRpZGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZS5hdHRyaWJ1dGVzWydMb2NfbmFtZSddID09PSAnV2FrZVN0cmVldHMnO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBnZW9kZXNpY1V0aWxzLmdlb2Rlc2ljRGlzdGFuY2UoY2FuZGlkYXRlLmxvY2F0aW9uLCB7XG4gICAgICAgICAgICAgICAgICB4OiAoZS5ncmFwaGljLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZC5sb25naXR1ZGUsXG4gICAgICAgICAgICAgICAgICB5OiAoZS5ncmFwaGljLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZC5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IGFzIGFueVxuICAgICAgICAgICAgICAgIH0gYXMgYW55KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXN0LmRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXN0LmF6aW11dGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNibGwgPVxuICAgICAgICAgICAgICAgICAgKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWQubGF0aXR1ZGUgK1xuICAgICAgICAgICAgICAgICAgJywnICtcbiAgICAgICAgICAgICAgICAgIChlLmdyYXBoaWMuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlnb24pLmNlbnRyb2lkLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICAvL2NvbnN0IGNibGwgPSBjYW5kaWRhdGVzWzBdLmxvY2F0aW9uLnkudG9TdHJpbmcoKSArICcsJyArIGNhbmRpZGF0ZXNbMF0ubG9jYXRpb24ueC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbWFwcy5nb29nbGUuY29tP2xheWVyPWMmY2JsbD0nICsgY2JsbCArICcmY2JwPTAsJyArIGRpc3QuYXppbXV0aD8udG9TdHJpbmcoKSArICcsMCwwLDAnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cub3BlbihcbiAgICAgICAgICAgICAgICAvLyAgICdodHRwczovL21hcHMuZ29vZ2xlLmNvbT9sYXllcj1jJmNibGw9JyArIGNibGwgKyAnJmNicD0wLCcgKyBkaXN0LmF6aW11dGg/LnRvU3RyaW5nKCkgKyAnLDAsMCwwJ1xuICAgICAgICAgICAgICAgIC8vICk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogcm93OycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnc2NhbGUnLCAncycpO1xuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdyb3VuZCcsICcnKTtcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpY29uLXN0YXJ0JywgJ3BlcnNvbicpO1xuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAnaHJlZicsXG4gICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20/bGF5ZXI9YyZjYmxsPScgKyBjYmxsICsgJyZjYnA9MCwnICsgZGlzdC5hemltdXRoPy50b1N0cmluZygpICsgJywwLDAsMCdcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ1N0cmVldCBWaWV3JztcblxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmQoYnRuKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRheC5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgJ3MnKTtcbiAgICAgICAgICAgICAgICB0YXguc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgICAgdGF4LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAgICdocmVmJyxcbiAgICAgICAgICAgICAgICAgICdodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vcmVhbGVzdGF0ZS9BY2NvdW50LmFzcD9pZD0nICsgZS5ncmFwaGljLmdldEF0dHJpYnV0ZSgnUkVJRCcpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0YXguc2V0QXR0cmlidXRlKCdyb3VuZCcsICcnKTtcbiAgICAgICAgICAgICAgICB0YXguc2V0QXR0cmlidXRlKCdpY29uLXN0YXJ0JywgJ2xvY2F0b3InKTtcbiAgICAgICAgICAgICAgICB0YXgudGV4dENvbnRlbnQgPSAnVGF4IFBhZ2UnO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmQodGF4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSksXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMj5HZW5lcmFsPC9oMT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnZmllbGRzJyxcbiAgICAgIGZpZWxkSW5mb3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vcGluJyxcbiAgICAgICAgICBsYWJlbDogJ1BJTidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ1JFSUQnLFxuICAgICAgICAgIGxhYmVsOiAnUkVJRCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vY2l0eScsXG4gICAgICAgICAgbGFiZWw6ICdDaXR5J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi9qdXJpc2RpY3Rpb24nLFxuICAgICAgICAgIGxhYmVsOiAnSnVyaXNkaWN0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi90b3duc2hpcCcsXG4gICAgICAgICAgbGFiZWw6ICdUb3duc2hpcCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG5cbiAgICAvLyB7XG4gICAgLy8gICB0eXBlOiAnY3VzdG9tJyxcbiAgICAvLyAgIHRleHQ6ICc8Y2FsY2l0ZS1idXR0b24gc2NhbGU9XCJzXCIgaHJlZj1cIiNcIiBjbGFzcz1cInN0cmVldFZpZXdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TdHJlZXQgVmlldzwvY2FsY2l0ZS1idXR0b24+J1xuICAgIC8vIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMj5Pd25lcjwvaDE+J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDpcbiAgICAgICAgLy8gJzxoMSBjbGFzcz1cInRleHQtZ3JlZW5cIj57U0lURV9BRERSRVNTfTwvaDE+JyArXG4gICAgICAgIC8vICc8aDI+R2VuZXJhbDwvaDI+e2V4cHJlc3Npb24vZ2VuZXJhbH0nICtcbiAgICAgICAgJ3tPV05FUn08YnIvPntleHByZXNzaW9uL21haWxpbmctYWRkcmVzc30nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPlZhbHVhdGlvbjwvaDE+J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICBmaWVsZEluZm9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL2J1aWxkX3ZhbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vbGFuZF92YWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL3RvdGFsX3ZhbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ0JJTExJTkdfQ0xBU1NfREVDT0RFJyxcbiAgICAgICAgICBsYWJlbDogJ0JpbGxpbmcgQ2xhc3MnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDI+TGFzdCBTYWxlPC9oMT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnZmllbGRzJyxcbiAgICAgIGZpZWxkSW5mb3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ1NBTEVfREFURScsXG4gICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICBkYXRlRm9ybWF0OiAnc2hvcnQtZGF0ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsOiAnRGF0ZSBTb2xkJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi9zYWxlX3ByaWNlJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPkRlZWRzPC9oMT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnZmllbGRzJyxcbiAgICAgIGZpZWxkSW5mb3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ0RFRURfQk9PSycsXG4gICAgICAgICAgbGFiZWw6ICdCb29rJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnREVFRF9QQUdFJyxcbiAgICAgICAgICBsYWJlbDogJ1BhZ2UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdERUVEX0RBVEUnLFxuICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgZGF0ZUZvcm1hdDogJ3Nob3J0LWRhdGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbDogJ0RlZWQgRGF0ZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ0RFRURfQUNSRVMnLFxuICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgcGxhY2VzOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbDogJ0RlZWQgQWNyZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdQUk9QREVTQycsXG4gICAgICAgICAgbGFiZWw6ICdMZWdhbCBEZXNjcmlwdGlvbidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG5cbiAgICBuZXcgQ3VzdG9tQ29udGVudCh7XG4gICAgICBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnLCAnUkVJRCddLFxuICAgICAgY3JlYXRvcjogZGVlZENyZWF0b3JcbiAgICB9KSxcbiAgICAvLyB7XG4gICAgLy8gICB0eXBlOiAndGV4dCcsXG4gICAgLy8gICB0ZXh0OlxuICAgIC8vICc8aDEgY2xhc3M9XCJ0ZXh0LWdyZWVuXCI+e1NJVEVfQUREUkVTU308L2gxPicgK1xuICAgIC8vICc8aDI+R2VuZXJhbDwvaDI+e2V4cHJlc3Npb24vZ2VuZXJhbH0nICtcbiAgICAvLyAnPGgyPk93bmVyPC9oMj57T1dORVJ9PGJyLz57ZXhwcmVzc2lvbi9tYWlsaW5nLWFkZHJlc3N9JyArXG4gICAgLy8gJzxoMj5WYWx1YXRpb248L2gyPntleHByZXNzaW9uL3Byb3BlcnR5LXZhbHVlc30nICtcbiAgICAvLyAnPGgyPlNhbGUgSW5mb3JtYXRpb248L2gyPntUT1RTQUxQUklDRX08YnIvPntTQUxFX0RBVEV9JyArXG4gICAgLy8gJzxoMj5EZWVkczwvaDI+e2V4cHJlc3Npb24vZGVlZC1ib29rLXBhZ2V9JyArXG4gICAgLy8gJzxici8+PHN0cm9uZz5EZWVkIERhdGU8L3N0cm9uZz48YnIvPntERUVEX0RBVEV9PGJyLz4nICtcbiAgICAvLyAnPGJyLz5MZWdhbCBEZXNjcmlwdGlvbjxici8+e1BST1BERVNDfTxici8+JyArXG4gICAgLy8gJzxhIGhyZWY9XCJodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPXtleHByZXNzaW9uL2JvbS1kb2MtbnVtfSZSZWNvcmREYXRlPVwiIHRhcmdldD1cIl9ibGFua1wiPkJvb2sgb2YgTWFwczwvYT48YnIvPjxhIGhyZWY9XCJodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPXtleHByZXNzaW9uL2RlZWQtZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EZWVkPC9hPidcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDI+QnVpbGRpbmc8L2gxPidcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdmaWVsZHMnLFxuICAgICAgZmllbGRJbmZvczogW1xuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnSEVBVEVEQVJFQScsXG4gICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICBkaWdpdFNlcGFyYXRvcjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6ICdIZWF0ZWQgQXJlYSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ1lFQVJfQlVJTFQnLFxuICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgZGlnaXRTZXBhcmF0b3I6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbDogJ1llYXIgQnVpbHQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdERVNJR05fU1RZTEVfREVDT0RFJyxcbiAgICAgICAgICBsYWJlbDogJ0Rlc2lnbi9TdHlsZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ1RPVFNUUlVDVFMnLFxuICAgICAgICAgIGxhYmVsOiAnVG90YWwgU3RydWN0dXJlcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ1RPVFVOSVRTJyxcbiAgICAgICAgICBsYWJlbDogJ1RvdGFsIFVuaXRzJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnbWVkaWEnLFxuICAgICAgbWVkaWFJbmZvczogW11cbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDI+U2VydmljZXM8L2gxPidcbiAgICB9LFxuICAgIG5ldyBDdXN0b21Db250ZW50KHtcbiAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICBjcmVhdG9yOiAoZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGFjY29yZGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYWNjb3JkaW9uJyk7XG4gICAgICAgIGFjY29yZGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGlvbi1tb2RlJywgJ3NpbmdsZScpO1xuXG4gICAgICAgIHNlcnZpY2VzLmZvckVhY2goc2VydmljZSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYWNjb3JkaW9uLWl0ZW0nKTtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaXRlbS10aXRsZScsIHNlcnZpY2UuZ3JvdXAudGl0bGUpO1xuICAgICAgICAgIGFjY29yZGlvbi5hcHBlbmQoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvL2NvbnN0IGYgPSBzZXJ2aWNlQ2hhbmdlZC5iaW5kKGUuR3JhcGhpYyk7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoZiwgMTAwMCk7XG4gICAgICAgIGNvbnN0IGdyYXBoaWMgPSBlLmdyYXBoaWM7XG4gICAgICAgIGFjY29yZGlvbi5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlQWNjb3JkaW9uQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgIHNlcnZpY2VDaGFuZ2VkKGdyYXBoaWMsIGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjY29yZGlvbjtcbiAgICAgIH1cbiAgICB9KVxuICBdXG59KTtcblxuZXhwb3J0IGNvbnN0IGZlYXR1cmVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICBwb3J0YWxJdGVtOiB7XG4gICAgaWQ6ICcwODA1MGJmMDY3YmI0YjIwYWRlYTRiMGI0ZjBhMzllMydcbiAgfSxcbiAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBjb25kb3NUYWJsZSA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICBwb3J0YWxJdGVtOiB7XG4gICAgaWQ6ICcwODA1MGJmMDY3YmI0YjIwYWRlYTRiMGI0ZjBhMzllMydcbiAgfSxcbiAgbGF5ZXJJZDogMSxcbiAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfSxcbiAgcG9wdXBUZW1wbGF0ZTogcG9wdXBUZW1wbGF0ZVxufSk7XG5jb25kb3NUYWJsZS5sb2FkKCk7XG5leHBvcnQgY29uc3QgYWRkcmVzc1RhYmxlID0gbmV3IEZlYXR1cmVMYXllcih7XG4gIHBvcnRhbEl0ZW06IHtcbiAgICBpZDogJzA4MDUwYmYwNjdiYjRiMjBhZGVhNGIwYjRmMGEzOWUzJ1xuICB9LFxuICBsYXllcklkOiA0LFxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9XG59KTtcbmFkZHJlc3NUYWJsZS5sb2FkKCk7XG5leHBvcnQgKiBmcm9tICcuL2FwcCc7XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5pbXBvcnQgU2tldGNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gnO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnO1xuaW1wb3J0IFRleHRTeW1ib2wgZnJvbSAnZXNyaS9zeW1ib2xzL1RleHRTeW1ib2wnO1xuXG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5pbXBvcnQgeyBtZWFzdXJlbWVudCB9IGZyb20gJy4uLy4uL3dpZGdldHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkRyYXcuRHJhd1ZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3Vmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQHByb3BlcnR5KCkgY29udGFpbmVyOiBzdHJpbmc7XG4gIHNrZXRjaDogU2tldGNoO1xuICBncmFwaGljczogR3JhcGhpY3NMYXllcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgdGV4dENvbG9yOiBlc3JpLkNvbG9yO1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGluaXREcmF3KCkge1xuICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiAnaGlkZScgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljcyk7XG5cbiAgICB0aGlzLnNrZXRjaCA9IG5ldyBTa2V0Y2goeyB2aWV3OiB0aGlzLnZpZXcsIGNvbnRhaW5lcjogJ3NrZXRjaERpdicsIGxheWVyOiB0aGlzLmdyYXBoaWNzLCBjcmVhdGlvbk1vZGU6ICdzaW5nbGUnIH0pO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcbiAgICAodGhpcy5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sIGFzIGFueSkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbC5jb2xvciA9IG5ldyBDb2xvcihbWzI1NSwgMCwgMCwgMC41XV0pO1xuICAgICh0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBhbnkpLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnBvbHlsaW5lU3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuXG4gICAgdGhpcy5za2V0Y2gud2F0Y2goJ2FjdGl2ZVRvb2wnLCB0b29sID0+IHtcbiAgICAgIGlmICh0b29sICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBtZWFzdXJlbWVudD8ubWVhc3VyZW1lbnQ/LmNsZWFyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5za2V0Y2gub24oJ2NyZWF0ZScsIGUgPT4ge1xuICAgICAgaWYgKGUuc3RhdGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgICAgaWYgKGUuc3RhdGUgPT09ICdjb21wbGV0ZScgJiYgdGhpcy5sYWJlbD8ubGVuZ3RoKSB7XG4gICAgICAgIGxldCBsYWJlbFBvaW50OiBlc3JpLkdlb21ldHJ5ID0gZS5ncmFwaGljLmdlb21ldHJ5O1xuICAgICAgICBpZiAoZS5ncmFwaGljLmdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJykge1xuICAgICAgICAgIGxhYmVsUG9pbnQgPSAoZS5ncmFwaGljLmdlb21ldHJ5IGFzIGVzcmkuUG9seWdvbikuY2VudHJvaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnID0gbmV3IEdyYXBoaWMoe1xuICAgICAgICAgIGdlb21ldHJ5OiBsYWJlbFBvaW50LFxuICAgICAgICAgIHN5bWJvbDogbmV3IFRleHRTeW1ib2woe1xuICAgICAgICAgICAgdGV4dDogdGhpcy5sYWJlbCxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnRleHRDb2xvcixcbiAgICAgICAgICAgIGhhbG9Db2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIGhhbG9TaXplOiAxLFxuICAgICAgICAgICAgeG9mZnNldDogJzVweCcsXG4gICAgICAgICAgICB5b2Zmc2V0OiAnNXB4JyxcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiAnYm90dG9tJyxcbiAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdyaWdodCdcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5hZGQoZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnNvbGUubG9nKHZpZXcuc2NhbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5pbXBvcnQgRHJhd1ZpZXdNb2RlbCBmcm9tICcuL0RyYXcvRHJhd1ZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd1Byb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGRyYXctYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuRHJhdycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3IGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubGFiZWwnKVxuICBsYWJlbDogc3RyaW5nO1xuICBAYWxpYXNPZigndmlld01vZGVsLnRleHRDb2xvcicpXG4gIHRleHRDb2xvcjogQ29sb3I7XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogRHJhd1ZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogRHJhd1ZpZXdNb2RlbCA9IG5ldyBEcmF3Vmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IERyYXdQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfZHJhd1VwZGF0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnZpZXdNb2RlbC5za2V0Y2gpIHtcbiAgICAgIHRoaXMudmlld01vZGVsLmluaXREcmF3KCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGwnKTtcbiAgICBmaWxsPy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJyNmZjAwMDAnKTtcbiAgICBmaWxsPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlQ29sb3JDaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCBoZXg6IHN0cmluZyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICB9KTtcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpbmUnKTtcbiAgICBsaW5lPy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJyNmZjAwMDAnKTtcbiAgICBsaW5lPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlQ29sb3JDaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCBoZXg6IHN0cmluZyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sIGFzIGVzcmkuU2ltcGxlTWFya2VyU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgfSk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGFjaXR5Jyk7XG4gICAgb3BhY2l0eT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVNsaWRlclVwZGF0ZScsIChlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbC5jb2xvci5hID0gZS50YXJnZXQudmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3Qgd2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lkdGgnKTtcbiAgICB3aWR0aD8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVNsaWRlclVwZGF0ZScsIChlOiBhbnkpID0+IHtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlsaW5lU3ltYm9sIGFzIGVzcmkuU2ltcGxlTGluZVN5bWJvbCkud2lkdGggPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sIGFzIGVzcmkuU2ltcGxlTWFya2VyU3ltYm9sKS5vdXRsaW5lLndpZHRoID0gcGFyc2VGbG9hdChcbiAgICAgICAgZS50YXJnZXQudmFsdWVcbiAgICAgICk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS53aWR0aCA9IHBhcnNlRmxvYXQoXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsJyk7XG4gICAgbGFiZWw/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVJbnB1dEJsdXInLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldCgnbGFiZWwnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG4gICAgY29uc3QgdGV4dENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRDb2xvcicpO1xuICAgIHRleHRDb2xvcj8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgdGV4dENvbG9yPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlQ29sb3JDaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldCgndGV4dENvbG9yJywgQ29sb3IuZnJvbUhleChlLnRhcmdldC52YWx1ZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJVcGRhdGU9e3RoaXMuX2RyYXdVcGRhdGVkfSBpZD1cInNrZXRjaERpdlwiPjwvZGl2PlxuICAgICAgICA8Y2FsY2l0ZS1ibG9jayBoZWFkaW5nPVwiU2V0dGluZ3NcIiBvcGVuIGNvbGxhcHNpYmxlPlxuICAgICAgICAgIDxjYWxjaXRlLWJsb2NrLXNlY3Rpb24gdGV4dD1cIkNvbG9yXCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgRmlsbCBDb2xvciA8Y2FsY2l0ZS1jb2xvciBpZD1cImZpbGxcIiBoaWRlQ2hhbm5lbHMgaGlkZVNhdmVkIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgc2NhbGU9XCJzXCI+PC9jYWxjaXRlLWNvbG9yPlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIExpbmUgQ29sb3IgPGNhbGNpdGUtY29sb3IgaWQ9XCJsaW5lXCIgaGlkZUNoYW5uZWxzIGhpZGVTYXZlZCBhcHBlYXJhbmNlPVwibWluaW1hbFwiIHNjYWxlPVwic1wiPjwvY2FsY2l0ZS1jb2xvcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJGaWxsIE9wYWNpdHlcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBPcGFjaXR5PGNhbGNpdGUtc2xpZGVyIHNjYWxlPVwic1wiIGlkPVwib3BhY2l0eVwiIG1heD1cIjFcIiBtaW49XCIwXCIgdmFsdWU9XCIwLjVcIiBzdGVwPVwiMC4xXCI+PC9jYWxjaXRlLXNsaWRlcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJPdXRsaW5lXCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgV2lkdGggPGNhbGNpdGUtc2xpZGVyIGlkPVwid2lkdGhcIiBtYXg9XCIxMFwiIG1pbj1cIjBcIiB2YWx1ZT1cIjFcIiBzdGVwPVwiMC41XCI+PC9jYWxjaXRlLXNsaWRlcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJMYWJlbGluZ1wiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIExhYmVsIDxjYWxjaXRlLWlucHV0IHNjYWxlPVwic1wiIGlkPVwibGFiZWxcIiB0eXBlPVwidGV4dGFyZWFcIj48L2NhbGNpdGUtaW5wdXQ+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgVGV4dCBDb2xvclxuICAgICAgICAgICAgICA8Y2FsY2l0ZS1jb2xvciBpZD1cInRleHRDb2xvclwiIGhpZGVDaGFubmVscyBoaWRlU2F2ZWQgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBzY2FsZT1cInNcIj48L2NhbGNpdGUtY29sb3I+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgIDwvY2FsY2l0ZS1ibG9jaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcbmltcG9ydCBTa2V0Y2ggZnJvbSAnZXNyaS93aWRnZXRzL1NrZXRjaCc7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IHsgbWVhc3VyZW1lbnQgfSBmcm9tICcuLi8uLi93aWRnZXRzJztcbmltcG9ydCBnZW9tZXRyeUVuZ2luZSBmcm9tICdlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lJztcbmltcG9ydCBDb2xvciBmcm9tICdlc3JpL0NvbG9yJztcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuU2VsZWN0LlNlbGVjdFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBsYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICdza2V0Y2gnLCB0aGlzLmluaXRTa2V0Y2guYmluZCh0aGlzKSk7XG4gIH1cbiAgc2tldGNoOiBlc3JpLlNrZXRjaDtcbiAgYnVmZmVyRGlzdGFuY2U6IG51bWJlcjtcbiAgZ3JhcGhpY3M6IEdyYXBoaWNzTGF5ZXI7XG5cbiAgQHByb3BlcnR5KCkgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG4gIGluaXRTa2V0Y2goKSB7XG4gICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJyB9KTtcbiAgICB0aGlzLnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNzKTtcbiAgICB0aGlzLnNrZXRjaCA9IG5ldyBTa2V0Y2goe1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgY29udGFpbmVyOiAnc2VsZWN0V2lkZ2V0JyxcbiAgICAgIGxheWVyOiB0aGlzLmdyYXBoaWNzLFxuICAgICAgY3JlYXRpb25Nb2RlOiAnc2luZ2xlJ1xuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC51cGRhdGVPbkdyYXBoaWNDbGljayA9IGZhbHNlO1xuICAgIHRoaXMuc2tldGNoLm9uKCdjcmVhdGUnLCBldiA9PiB7XG4gICAgICBpZiAoZXYuc3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyRGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgY29uc3QgZyA9IGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljQnVmZmVyKGV2LmdyYXBoaWMuZ2VvbWV0cnksIHRoaXMuYnVmZmVyRGlzdGFuY2UsICdmZWV0Jyk7XG4gICAgICAgICAgLy9wcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGcgYXMgX19lc3JpLlBvbHlnb247XG4gICAgICAgICAgZXYuZ3JhcGhpYy5nZW9tZXRyeSA9IGcgYXMgX19lc3JpLlBvbHlnb247XG4gICAgICAgICAgdGhpcy5ncmFwaGljcy5hZGQoZXYuZ3JhcGhpYyk7XG4gICAgICAgICAgZXYuZ3JhcGhpYy5zeW1ib2wgPSB7XG4gICAgICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgICAgICAgICAgc3R5bGU6ICdub25lJyxcbiAgICAgICAgICAgIG91dGxpbmU6IHsgc3R5bGU6ICdzaG9ydC1kYXNoJywgd2lkdGg6IDIuNSwgY29sb3I6IFsyMjEsIDIyMSwgMjIxLCAxXSB9LFxuICAgICAgICAgICAgY29sb3I6IG5ldyBDb2xvcihbMjU1LCAyNDMsIDEzLCAwLjI1XSlcbiAgICAgICAgICB9IGFzIGFueTtcbiAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gZXYuZ3JhcGhpYy5nZW9tZXRyeSBhcyBlc3JpLkdlb21ldHJ5O1xuICAgICAgICAgIHRoaXMudmlldy5nb1RvKGV2LmdyYXBoaWMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBldi5ncmFwaGljLmdlb21ldHJ5IGFzIGVzcmkuR2VvbWV0cnk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChldi5zdGF0ZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICBtZWFzdXJlbWVudD8ubWVhc3VyZW1lbnQ/LmNsZWFyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5za2V0Y2gud2F0Y2goJ2FjdGl2ZVRvb2wnLCB0b29sID0+IHtcbiAgICAgIGlmICh0b29sICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBtZWFzdXJlbWVudD8ubWVhc3VyZW1lbnQ/LmNsZWFyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnNvbGUubG9nKHZpZXcuc2NhbGUpO1xuICAgIHRoaXMuc2V0KCdidWZmZXJEaXN0YW5jZScsIDApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBTZWxlY3RWaWV3TW9kZWwgZnJvbSAnLi9TZWxlY3QvU2VsZWN0Vmlld01vZGVsJztcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0UHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgbGF5ZXI/OiBlc3JpLkZlYXR1cmVMYXllcjtcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgc2VsZWN0LWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLlNlbGVjdCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5sYXllcicpXG4gIGxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5za2V0Y2gnKVxuICBza2V0Y2g6IGVzcmkuU2tldGNoO1xuICBAYWxpYXNPZigndmlld01vZGVsLmJ1ZmZlckRpc3RhbmNlJylcbiAgYnVmZmVyRGlzdGFuY2U6IG51bWJlcjtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBTZWxlY3RWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IFNlbGVjdFZpZXdNb2RlbCA9IG5ldyBTZWxlY3RWaWV3TW9kZWwoKTtcbiAgX3NrZXRjaENyZWF0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnZpZXdNb2RlbC5za2V0Y2gpIHtcbiAgICAgIHRoaXMudmlld01vZGVsLmluaXRTa2V0Y2goKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBTZWxlY3RQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXY6IGFueSkge1xuICAgIHRoaXMuc2V0KCdidWZmZXJEaXN0YW5jZScsIHBhcnNlSW50KGV2LnRhcmdldC52YWx1ZSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0RGl2IGNhbGNpdGUtaW5wdXQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUlucHV0Qmx1cicsIChldjogYW55KSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZShldik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyVXBkYXRlPXt0aGlzLl9za2V0Y2hDcmVhdGVkfSBpZD1cInNlbGVjdFdpZGdldFwiPjwvZGl2PlxuICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICBCdWZmZXIgRGlzdGFuY2UgKGZlZXQpXG4gICAgICAgICAgPGNhbGNpdGUtaW5wdXRcbiAgICAgICAgICAgIHNjYWxlPVwic1wiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgbWF4PVwiMjAwMFwiXG4gICAgICAgICAgICBzdGVwPVwiNTBcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMudmlld01vZGVsLmJ1ZmZlckRpc3RhbmNlfVxuICAgICAgICAgID48L2NhbGNpdGUtaW5wdXQ+XG4gICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCBDb2xvciBmcm9tICdlc3JpL0NvbG9yJztcbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5pbXBvcnQgQmFzZU1hcEdhbGxlcnkgZnJvbSAnZXNyaS93aWRnZXRzL0Jhc2VtYXBHYWxsZXJ5JztcbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5CYXNlTWFwcy5CYXNlTWFwc1ZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTWFwc1ZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIGJhc2VtYXBzOiBCYXNlTWFwR2FsbGVyeTtcbiAgaW1hZ2VzOiBCYXNlTWFwR2FsbGVyeTtcblxuICBhY3RpdmVCYXNlbWFwOiBlc3JpLkJhc2VtYXA7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2hhbmdlUHJvcGVydHlMaW5lcyA9IChiYXNlbWFwOiBlc3JpLkJhc2VtYXApID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eUxheWVyOiBGZWF0dXJlTGF5ZXIgPSB0aGlzLnZpZXcubWFwLmFsbExheWVycy5maW5kKGxheWVyID0+IHtcbiAgICAgIHJldHVybiBsYXllci50eXBlID09PSAnZmVhdHVyZScgJiYgbGF5ZXIudGl0bGUgPT09ICdQcm9wZXJ0eSc7XG4gICAgfSkgYXMgRmVhdHVyZUxheWVyO1xuICAgIGNvbnN0IG5ld1JlbmRlcmVyOiBlc3JpLlNpbXBsZVJlbmRlcmVyID0gKHByb3BlcnR5TGF5ZXIucmVuZGVyZXIgYXMgZXNyaS5TaW1wbGVSZW5kZXJlcikuY2xvbmUoKSBhcyBlc3JpLlNpbXBsZVJlbmRlcmVyO1xuICAgIGlmIChcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZGFyaycpIHx8XG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ25pZ2h0JykgfHxcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZGFyaycpIHx8XG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnMjAnKSB8fFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJzE5JylcbiAgICApIHtcbiAgICAgIChuZXdSZW5kZXJlci5zeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gbmV3IENvbG9yKFsyNTUsIDI1NSwgMjU1LCAwLjVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKG5ld1JlbmRlcmVyLnN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUuY29sb3IgPSBuZXcgQ29sb3IoWzAsIDAsIDAsIDAuNV0pO1xuICAgIH1cbiAgICBwcm9wZXJ0eUxheWVyLnJlbmRlcmVyID0gbmV3UmVuZGVyZXI7XG4gIH07XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHRoaXMuYmFzZW1hcHMgPSBuZXcgQmFzZU1hcEdhbGxlcnkoeyB2aWV3OiB0aGlzLnZpZXcgfSk7XG4gICAgdGhpcy52aWV3LndoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VQcm9wZXJ0eUxpbmVzKHRoaXMudmlldy5tYXAuYmFzZW1hcCk7XG4gICAgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC53YXRjaCgnYmFzZW1hcCcsIChiYXNlbWFwOiBlc3JpLkJhc2VtYXApID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlUHJvcGVydHlMaW5lcyhiYXNlbWFwKTtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzJyk/LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xuICAgICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY3RpdmVCYXNlbWFwID0gdGhpcy52aWV3Lm1hcC5iYXNlbWFwO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTd2l0Y2gnKT8ucmVtb3ZlQXR0cmlidXRlKCdzd2l0Y2hlZCcpO1xuICAgICAgfVxuICAgICAgY29uc3QgYm0gPSB0aGlzLmltYWdlcy52aWV3TW9kZWwuaXRlbXMuZmluZChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uYmFzZW1hcC50aXRsZSA9PT0gdGhpcy52aWV3Lm1hcC5iYXNlbWFwLnRpdGxlO1xuICAgICAgfSk7XG4gICAgICBpZiAoYm0gJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU3dpdGNoJyk/Lmhhc0F0dHJpYnV0ZSgnc3dpdGNoZWQnKSkge1xuICAgICAgICB0aGlzLnZpZXcubWFwLmFkZE1hbnkodGhpcy5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMudG9BcnJheSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKTtcbiAgICAgICAgICB0aGlzLnZpZXcubWFwLnJlbW92ZSh0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5hY3RpdmVCYXNlbWFwID0gdGhpcy52aWV3Lm1hcC5iYXNlbWFwO1xuICAgIHRoaXMuaW1hZ2VzID0gbmV3IEJhc2VNYXBHYWxsZXJ5KHtcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIHNvdXJjZToge1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIGlkOiAnNDkyMzg2NzU5ZDI2NGQ0OTk0OGJmN2Y4Mzk1N2RkYjknXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xuICAgICAgICB0aGlzLnZpZXcubWFwLnJlbW92ZSh0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QganNvbiA9ICh2aWV3Lm1hcCBhcyBhbnkpLnRvSlNPTigpO1xuICAgICAganNvbi5pbml0aWFsU3RhdGUudmlld3BvaW50LnRhcmdldEdlb21ldHJ5ID0gdmlldy5leHRlbnQ7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ltYXBzJywgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuICAgIH0pO1xuICB9XG4gIHRvZ2dsZUNvbnRlbnQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gJ21hcHMnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwcycpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXMnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwc0l0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlc0l0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmQnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTbGlkZXInKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXMnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwcycpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXNJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuXG5pbXBvcnQgQmFzZU1hcHNWaWV3TW9kZWwgZnJvbSAnLi9CYXNlTWFwcy9CYXNlTWFwc1ZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZU1hcHNQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBiYXNlbWFwcy1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5CYXNlTWFwcycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTWFwcyBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYmFzZW1hcHMnKVxuICBiYXNlbWFwczogZXNyaS5CYXNlbWFwR2FsbGVyeTtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5pbWFnZXMnKVxuICBpbWFnZXM6IGVzcmkuQmFzZW1hcEdhbGxlcnk7XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogQmFzZU1hcHNWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IEJhc2VNYXBzVmlld01vZGVsID0gbmV3IEJhc2VNYXBzVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IEJhc2VNYXBzUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG4gIF9jcmVhdGVNYXBzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmJhc2VtYXBzKSB7XG4gICAgICB0aGlzLmJhc2VtYXBzLmNvbnRhaW5lciA9ICdtYXBzJztcbiAgICB9XG4gIH07XG4gIF9jcmVhdGVJbWFnZXMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuaW1hZ2VzKSB7XG4gICAgICB0aGlzLmltYWdlcy5jb250YWluZXIgPSAnaW1hZ2VzJztcbiAgICB9XG4gIH07XG4gIGhhbmRsZVN3aXRjaENoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdzd2l0Y2hlZCcpICE9ICcnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTbGlkZXInKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBjb25zb2xlLmxvZygnYWRkJyk7XG4gICAgICB0aGlzLnZpZXcubWFwLmFkZE1hbnkodGhpcy52aWV3TW9kZWwuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLnRvQXJyYXkoKSwgMCk7XG4gICAgICB0aGlzLnZpZXcubWFwLmJhc2VtYXAucmVmZXJlbmNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBsYXllci52aXNpYmxlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudmlldy5tYXAubGF5ZXJzXG4gICAgICAgIC5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnZpZXdNb2RlbC5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuaW5jbHVkZXMobGF5ZXIpO1xuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgbGF5ZXIub3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICBsYXllci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHRoaXMudmlldy5tYXAuYmFzZW1hcC5yZWZlcmVuY2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIGxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKTtcbiAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGhhbmRsZVNsaWRlckNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCBsYXllcnMgPSB0aGlzLnZpZXcubWFwLmxheWVyc1xuICAgICAgLmZpbHRlcihsYXllciA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdNb2RlbC5hY3RpdmVCYXNlbWFwPy5iYXNlTGF5ZXJzLmluY2x1ZGVzKGxheWVyKTtcbiAgICAgIH0pXG4gICAgICAudG9BcnJheSgpO1xuICAgIGxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgIGxheWVyLm9wYWNpdHkgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3NsaWRlckNyZWF0ZWQgPSAoZTogYW55KSA9PiB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTbGlkZXInKVxuICAgICAgPy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2FsY2l0ZVNsaWRlclVwZGF0ZScsXG4gICAgICAgIHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlLmJpbmQoeyBiYXNlbWFwOiB0aGlzLmJhc2VtYXBzLCB2aWV3OiB0aGlzLnZpZXcgfSlcbiAgICAgICk7XG4gIH07XG4gIF9ibGVuZENyZWF0ZWQgPSAoZTogYW55KSA9PiB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTd2l0Y2gnKVxuICAgICAgPy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2FsY2l0ZVN3aXRjaENoYW5nZScsXG4gICAgICAgIHRoaXMuaGFuZGxlU3dpdGNoQ2hhbmdlLmJpbmQoeyBiYXNlbWFwOiB0aGlzLmJhc2VtYXBzLCB2aWV3OiB0aGlzLnZpZXcgfSlcbiAgICAgICk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmQnKT8ucmVtb3ZlQXR0cmlidXRlKCdzd2l0Y2hlZCcpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNiYXNlbWFwRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUmFkaW9Hcm91cEl0ZW1DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgIC8vIGNhbiBJIGdldCBjaGVja2VkIGFuZCB2YWx1ZSBsaWtlIHRoaXM/XG4gICAgICAgIGlmIChlLnRhcmdldD8uY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMudmlld01vZGVsLnRvZ2dsZUNvbnRlbnQoZS50YXJnZXQ/LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJoaWRkZW5cIiBpZD1cImJsZW5kXCI+XG4gICAgICAgICAgPGNhbGNpdGUtc3dpdGNoIGFmdGVyQ3JlYXRlPXt0aGlzLl9ibGVuZENyZWF0ZWR9IGlkPVwiYmxlbmRTd2l0Y2hcIj48L2NhbGNpdGUtc3dpdGNoPiBCbGVuZFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8Y2FsY2l0ZS1zbGlkZXJcbiAgICAgICAgICBhZnRlckNyZWF0ZT17dGhpcy5fc2xpZGVyQ3JlYXRlZH1cbiAgICAgICAgICBjbGFzcz1cImhpZGRlblwiXG4gICAgICAgICAgaWQ9XCJibGVuZFNsaWRlclwiXG4gICAgICAgICAgdmFsdWU9XCIwLjVcIlxuICAgICAgICAgIG1heD1cIjFcIlxuICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgIHN0ZXA9XCIwLjFcIlxuICAgICAgICA+PC9jYWxjaXRlLXNsaWRlcj5cblxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVNYXBzfSBpZD1cIm1hcHNcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlSW1hZ2VzfSBpZD1cImltYWdlc1wiIGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+XG4gICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwIHdpZHRoPVwiZnVsbFwiPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gY2hlY2tlZCB2YWx1ZT1cIm1hcHNcIiBpZD1cIm1hcHNJdGVtXCI+XG4gICAgICAgICAgICBNYXBzXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB2YWx1ZT1cImltYWdlc1wiIGlkPVwiaW1hZ2VzSXRlbVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgSW1hZ2VyeVxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBMYXllckxpc3QgZnJvbSAnZXNyaS93aWRnZXRzL0xheWVyTGlzdCc7XG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxheWVycy5MYXllcnNWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXJzVmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgbGF5ZXJMaXN0OiBlc3JpLkxheWVyTGlzdDtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgICB0aGlzLmxheWVyTGlzdCA9IG5ldyBMYXllckxpc3Qoe1xuICAgICAgdmlldyxcbiAgICAgIGNvbnRhaW5lcjogJ2xheWVyRGl2JyxcbiAgICAgIGxpc3RJdGVtQ3JlYXRlZEZ1bmN0aW9uOiBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBldmVudC5pdGVtO1xuICAgICAgICBpZiAoaXRlbS5sYXllci50eXBlICE9ICdncm91cCcpIHtcbiAgICAgICAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXNsaWRlcicpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWF4JywgJzEwMCcpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21pbi1sYWJlbCcsICcwJScpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21heC1sYWJlbCcsICcxMDAlJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbGFiZWwtaGFuZGxlcycsICcnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIChpdGVtPy5sYXllci5vcGFjaXR5ICogMTAwKS50b1N0cmluZygpKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdkYXRhJywgaXRlbS5sYXllci5pZCk7XG4gICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB2aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKChldmVudC50YXJnZXQgYXMgYW55KS5nZXRBdHRyaWJ1dGUoJ2RhdGEnKSkub3BhY2l0eSA9XG4gICAgICAgICAgICAgIHBhcnNlSW50KChldmVudD8udGFyZ2V0IGFzIGFueSk/LmdldEF0dHJpYnV0ZSgndmFsdWUnKSkgLyAxMDA7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaXRlbS5wYW5lbCA9IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtzbGlkZXIsICdsZWdlbmQnXSxcbiAgICAgICAgICAgIG9wZW46IGl0ZW0ubGF5ZXIudmlzaWJsZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGl0ZW0ubGF5ZXIudGl0bGUgPT09ICdQcm9wZXJ0eScpIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aW9uc1NlY3Rpb25zID0gW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTaG93IExhYmVscycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAndG9nZ2xlJyxcbiAgICAgICAgICAgICAgICAgIGlkOiAncHJvcGVydHktbGFiZWxzJyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLmxheWVyLmxhYmVsc1Zpc2libGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5sYXllckxpc3Qub24oJ3RyaWdnZXItYWN0aW9uJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmFjdGlvbi5pZCA9PT0gJ3Byb3BlcnR5LWxhYmVscycpIHtcbiAgICAgICAgKGV2ZW50Lml0ZW0ubGF5ZXIgYXMgZXNyaS5GZWF0dXJlTGF5ZXIpLmxhYmVsc1Zpc2libGUgPSAoZXZlbnQuYWN0aW9uIGFzIGVzcmkuQWN0aW9uVG9nZ2xlKS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuXG5pbXBvcnQgTGF5ZXJzVmlld01vZGVsIGZyb20gJy4vTGF5ZXJzL0xheWVyc1ZpZXdNb2RlbCc7XG5pbXBvcnQgV2ViTWFwIGZyb20gJ2VzcmkvV2ViTWFwJztcblxuZXhwb3J0IGludGVyZmFjZSBMYXllcnNQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBsYXllcnMtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTGF5ZXJzJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVycyBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxheWVyTGlzdCcpXG4gIGxheWVyTGlzdDogZXNyaS5MYXllckxpc3Q7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBMYXllcnNWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IExheWVyc1ZpZXdNb2RlbCA9IG5ldyBMYXllcnNWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogTGF5ZXJzUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG4gIGZpbHRlckxheWVycyA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5sYXllckxpc3Qub3BlcmF0aW9uYWxJdGVtcy5mb3JFYWNoKChpdGVtOiBlc3JpLkxpc3RJdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5sYXllci50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgIGxldCBvcGVuID0gZmFsc2U7XG4gICAgICAgIChpdGVtLmxheWVyIGFzIGVzcmkuR3JvdXBMYXllcikubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgIGlmIChsYXllci50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICBsYXllci5saXN0TW9kZSA9ICdzaG93JztcbiAgICAgICAgICAgIG9wZW4gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXllci5saXN0TW9kZSA9ICdoaWRlJztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIGl0ZW0ub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgI2xheWVyRGl2XyR7KGl0ZW0gYXMgYW55KS51aWR9X190aXRsZWApXG4gICAgICAgICAgICA/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2UgaWYgKCFvcGVuKSB7XG4gICAgICAgICAgaXRlbS5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjbGF5ZXJEaXZfJHsoaXRlbSBhcyBhbnkpLnVpZH1fX3RpdGxlYClcbiAgICAgICAgICAgID8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCNsYXllckRpdl8keyhpdGVtIGFzIGFueSkudWlkfV9fdGl0bGVgKVxuICAgICAgICAgICAgPy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBfY3JlYXRlTGF5ZXJzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmxheWVyTGlzdCkge1xuICAgICAgdGhpcy5sYXllckxpc3QuY29udGFpbmVyID0gJ2xheWVyV2lkZ2V0JztcbiAgICB9XG4gIH07XG4gIGNsZWFyQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5maWx0ZXJMYXllcnMoJycpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xheWVyU2VhcmNoIC5jYWxjaXRlLWlucHV0LWNsZWFyLWJ1dHRvbicpPy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xlYXJDbGljayk7XG4gIH07XG4gIF9jcmVhdGVTZWFyY2ggPSAoaW5wdXQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmZpbHRlckxheWVycyhlLnRhcmdldC52YWx1ZSk7XG4gICAgICBpbnB1dC5xdWVyeVNlbGVjdG9yKCcuY2FsY2l0ZS1pbnB1dC1jbGVhci1idXR0b24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsZWFyQ2xpY2spO1xuICAgIH0pO1xuICB9O1xuICBfcmVzZXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBuZXcgV2ViTWFwKHsgcG9ydGFsSXRlbTogKHRoaXMudmlldy5tYXAgYXMgZXNyaS5XZWJNYXApLnBvcnRhbEl0ZW0uY2xvbmUoKSB9KS5sb2FkKCkudGhlbigobWFwOiBXZWJNYXApID0+IHtcbiAgICAgICAgbWFwLmFsbExheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICB0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpLnZpc2libGUgPSBsYXllci52aXNpYmxlO1xuICAgICAgICAgIGlmIChsYXllci50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgICAobGF5ZXIgYXMgZXNyaS5Hcm91cExheWVyKS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICAgIHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkudmlzaWJsZSA9IGxheWVyLnZpc2libGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1pbnB1dFxuICAgICAgICAgICAgY2xlYXJhYmxlXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbHRlciBieSBsYXllciBuYW1lXCJcbiAgICAgICAgICAgIHNjYWxlPVwic1wiXG4gICAgICAgICAgICBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlU2VhcmNofVxuICAgICAgICAgICAgaWQ9XCJsYXllclNlYXJjaFwiXG4gICAgICAgICAgPjwvY2FsY2l0ZS1pbnB1dD5cbiAgICAgICAgICA8Y2FsY2l0ZS1idXR0b24gaWNvbi1zdGFydD1cInZpZXdIaWRlXCIgc2NhbGU9XCJzXCIgY29sb3I9XCJsaWdodFwiIG9uY2xpY2s9e3RoaXMuX3Jlc2V0fT48L2NhbGNpdGUtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVMYXllcnN9IGlkPVwibGF5ZXJXaWRnZXRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Mb2NhdGlvblNlYXJjaC5Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgc2VhcmNoOiBTZWFyY2g7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHRoaXMuc2VhcmNoID0gbmV3IFNlYXJjaCh7IHZpZXc6IHZpZXcsIG1heFN1Z2dlc3Rpb25zOiAzMCwgc2VhcmNoQWxsRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgdGhpcy5zZWFyY2guYWxsU291cmNlcy5vbignYWZ0ZXItYWRkJywgZSA9PiB7XG4gICAgICBpZiAoKGUuaXRlbSBhcyBhbnkpLmxheWVyKSB7XG4gICAgICAgIGUuaXRlbS5uYW1lID0gKGUuaXRlbSBhcyBhbnkpLmxheWVyLnRpdGxlO1xuICAgICAgICBlLml0ZW0ucGxhY2Vob2xkZXIgPSAoZS5pdGVtIGFzIGFueSkubGF5ZXIudGl0bGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCBmcm9tICcuL0xvY2F0aW9uU2VhcmNoL0xvY2F0aW9uU2VhcmNoVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblNlYXJjaFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGxvY2F0aW9uc2VhcmNoLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxvY2F0aW9uU2VhcmNoJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uU2VhcmNoIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5zZWFyY2gnKVxuICBzZWFyY2g6IGVzcmkud2lkZ2V0c1NlYXJjaDtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IExvY2F0aW9uU2VhcmNoVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCA9IG5ldyBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBMb2NhdGlvblNlYXJjaFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIF9zZWFyY2hDcmVhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2VhcmNoKSB7XG4gICAgICB0aGlzLnNlYXJjaC5jb250YWluZXIgPSAnbG9jYXRpb25TZWFyY2gnO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fc2VhcmNoQ3JlYXRlfSBpZD1cImxvY2F0aW9uU2VhcmNoXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcbmltcG9ydCBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldyc7XG5pbXBvcnQgTWFwIGZyb20gJ2VzcmkvTWFwJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCB3YXRjaFV0aWxzIGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5PdmVydmlld01hcC5PdmVydmlld01hcFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVydmlld01hcFZpZXdNb2RlbCBleHRlbmRzIGRlY2xhcmVkKEFjY2Vzc29yKSB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIG92ZXJ2aWV3TWFwVmlldzogZXNyaS5NYXBWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG4gIHN0b3BFdnRQcm9wYWdhdGlvbiA9IChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgZGlzYWJsZVpvb21pbmcgPSAodmlldzogYW55KSA9PiB7XG4gICAgdmlldy5wb3B1cC5kb2NrRW5hYmxlZCA9IHRydWU7XG5cbiAgICAvLyBSZW1vdmVzIHRoZSB6b29tIGFjdGlvbiBvbiB0aGUgcG9wdXBcbiAgICB2aWV3LnBvcHVwLmFjdGlvbnMgPSBbXTtcblxuICAgIC8vIHN0b3BzIHByb3BhZ2F0aW9uIG9mIGRlZmF1bHQgYmVoYXZpb3Igd2hlbiBhbiBldmVudCBmaXJlc1xuXG4gICAgLy8gZXhsdWRlIHRoZSB6b29tIHdpZGdldCBmcm9tIHRoZSBkZWZhdWx0IFVJXG4gICAgdmlldy51aS5jb21wb25lbnRzID0gWydhdHRyaWJ1dGlvbiddO1xuXG4gICAgLy8gZGlzYWJsZSBtb3VzZSB3aGVlbCBzY3JvbGwgem9vbWluZyBvbiB0aGUgdmlld1xuICAgIHZpZXcub24oJ21vdXNlLXdoZWVsJywgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuXG4gICAgLy8gZGlzYWJsZSB6b29taW5nIHZpYSBkb3VibGUtY2xpY2sgb24gdGhlIHZpZXdcbiAgICB2aWV3Lm9uKCdkb3VibGUtY2xpY2snLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG5cbiAgICAvLyBkaXNhYmxlIHpvb21pbmcgb3V0IHZpYSBkb3VibGUtY2xpY2sgKyBDb250cm9sIG9uIHRoZSB2aWV3XG4gICAgdmlldy5vbignZG91YmxlLWNsaWNrJywgWydDb250cm9sJ10sIHRoaXMuc3RvcEV2dFByb3BhZ2F0aW9uKTtcblxuICAgIC8vIGRpc2FibGVzIHBpbmNoLXpvb20gYW5kIHBhbm5pbmcgb24gdGhlIHZpZXdcbiAgICB2aWV3Lm9uKCdkcmFnJywgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuXG4gICAgLy8gZGlzYWJsZSB0aGUgdmlldydzIHpvb20gYm94IHRvIHByZXZlbnQgdGhlIFNoaWZ0ICsgZHJhZ1xuICAgIC8vIGFuZCBTaGlmdCArIENvbnRyb2wgKyBkcmFnIHpvb20gZ2VzdHVyZXMuXG4gICAgdmlldy5vbignZHJhZycsIFsnU2hpZnQnXSwgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuICAgIHZpZXcub24oJ2RyYWcnLCBbJ1NoaWZ0JywgJ0NvbnRyb2wnXSwgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuXG4gICAgLy8gcHJldmVudHMgem9vbWluZyB3aXRoIHRoZSArIGFuZCAtIGtleXNcbiAgICB2aWV3Lm9uKCdrZXktZG93bicsIChldmVudDogYW55KSA9PiB7XG4gICAgICBjb25zdCBwcm9oaWJpdGVkS2V5cyA9IFsnKycsICctJywgJ1NoaWZ0JywgJ18nLCAnPSddO1xuICAgICAgY29uc3Qga2V5UHJlc3NlZCA9IGV2ZW50LmtleTtcbiAgICAgIGlmIChwcm9oaWJpdGVkS2V5cy5pbmRleE9mKGtleVByZXNzZWQpICE9PSAtMSkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aWV3O1xuICB9O1xuXG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKHsgYmFzZW1hcDogJ3N0cmVldHMtbmF2aWdhdGlvbi12ZWN0b3InIH0pO1xuICAgIHRoaXMub3ZlcnZpZXdNYXBWaWV3ID0gbmV3IE1hcFZpZXcoeyBtYXA6IG1hcCwgZXh0ZW50OiB2aWV3LmV4dGVudCB9KTtcbiAgICB0aGlzLmRpc2FibGVab29taW5nKHRoaXMub3ZlcnZpZXdNYXBWaWV3KTtcbiAgICB0aGlzLm92ZXJ2aWV3TWFwVmlldy51aS5yZW1vdmUoJ3pvb20nKTtcblxuICAgIGNvbnN0IGdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7XG4gICAgICBnZW9tZXRyeTogbnVsbCxcbiAgICAgIHN5bWJvbDoge1xuICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDAuNV0sXG4gICAgICAgIG91dGxpbmU6IG51bGxcbiAgICAgIH1cbiAgICB9IGFzIGFueSk7XG4gICAgdGhpcy5vdmVydmlld01hcFZpZXcuZ3JhcGhpY3MuYWRkKGdyYXBoaWMpO1xuICAgIHdhdGNoVXRpbHMuaW5pdCh2aWV3LCAnZXh0ZW50JywgKCkgPT4ge1xuICAgICAgZ3JhcGhpYy5nZW9tZXRyeSA9IHZpZXcuZXh0ZW50O1xuICAgIH0pO1xuXG4gICAgd2F0Y2hVdGlscy5pbml0KHZpZXcsICdzdGF0aW9uYXJ5JywgKCkgPT4ge1xuICAgICAgaWYgKHZpZXcuc3RhdGlvbmFyeSkge1xuICAgICAgICB0aGlzLm92ZXJ2aWV3TWFwVmlld1xuICAgICAgICAgIC5nb1RvKHtcbiAgICAgICAgICAgIGNlbnRlcjogdmlldy5jZW50ZXIsXG4gICAgICAgICAgICBzY2FsZTpcbiAgICAgICAgICAgICAgdmlldy5zY2FsZSAqXG4gICAgICAgICAgICAgIDIgKlxuICAgICAgICAgICAgICBNYXRoLm1heCh2aWV3LndpZHRoIC8gdGhpcy5vdmVydmlld01hcFZpZXcud2lkdGgsIHZpZXcuaGVpZ2h0IC8gdGhpcy5vdmVydmlld01hcFZpZXcuaGVpZ2h0KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmUgZ290by1pbnRlcnJ1cHRlZCBlcnJvcnNcbiAgICAgICAgICAgIGlmIChlcnJvci5uYW1lICE9ICd2aWV3OmdvdG8taW50ZXJydXB0ZWQnKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBPdmVydmlld01hcFZpZXdNb2RlbCBmcm9tICcuL092ZXJ2aWV3TWFwL092ZXJ2aWV3TWFwVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBPdmVydmlld01hcFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IG92ZXJ2aWV3bWFwLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLk92ZXJ2aWV3TWFwJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJ2aWV3TWFwIGV4dGVuZHMgZGVjbGFyZWQoV2lkZ2V0KSB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldycpXG4gIG92ZXJ2aWV3TWFwVmlldzogZXNyaS5NYXBWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLm5hbWUnKVxuICBAcmVuZGVyYWJsZSgpXG4gIG5hbWUgPSAnJztcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IE92ZXJ2aWV3TWFwVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBPdmVydmlld01hcFZpZXdNb2RlbCA9IG5ldyBPdmVydmlld01hcFZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBPdmVydmlld01hcFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuICBvdmVydmlld0NyZWF0ZWQgPSAoZGl2OiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIGlmICh0aGlzLm92ZXJ2aWV3TWFwVmlldykge1xuICAgICAgdGhpcy5vdmVydmlld01hcFZpZXcuY29udGFpbmVyID0gZGl2O1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMub3ZlcnZpZXdDcmVhdGVkfSBpZD1cIm92ZXJ2aWV3RGl2XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQ2xlYXIuQ2xlYXJWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXJWaWV3TW9kZWwgZXh0ZW5kcyBkZWNsYXJlZChBY2Nlc3Nvcikge1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IENsZWFyVmlld01vZGVsIGZyb20gJy4vQ2xlYXIvQ2xlYXJWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFyUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQtLWJ1dHRvbiBlc3JpLXdpZGdldCcsXG4gIHRleHQ6ICdlc3JpLWljb24tZm9udC1mYWxsYmFjay10ZXh0JyxcbiAgdHJhc2hJY29uOiAnZXNyaS1pY29uIGVzcmktaWNvbi10cmFzaCcsXG4gIGxvYWRpbmdJY29uOiAnZXNyaS1pY29uLWxvYWRpbmctaW5kaWNhdG9yJyxcbiAgcm90YXRpbmdJY29uOiAnZXNyaS1yb3RhdGluZycsXG4gIHdpZGdldEljb246ICdlc3JpLWljb24tdHJhc2gnLFxuXG4gIC8vIGNvbW1vblxuICBkaXNhYmxlZDogJ2VzcmktZGlzYWJsZWQnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkNsZWFyJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsZWFyIGV4dGVuZHMgZGVjbGFyZWQoV2lkZ2V0KSB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogQ2xlYXJWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IENsZWFyVmlld01vZGVsID0gbmV3IENsZWFyVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IENsZWFyUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG4gIGNsZWFyVGl0bGUgPSAnQ2xlYXInO1xuICByZW5kZXJJY29uID0gKCkgPT4ge1xuICAgIHJldHVybiA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz17dGhpcy5jbGFzc2VzKENTUy50cmFzaEljb24pfSAvPjtcbiAgfTtcbiAgX2NsZWFyID0gKCkgPT4ge1xuICAgIHRoaXMudmlldy5tYXAuYWxsTGF5ZXJzXG4gICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIGxheWVyLnR5cGUgPT09ICdncmFwaGljcyc7XG4gICAgICB9KVxuICAgICAgLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAobGF5ZXIgYXMgZXNyaS5HcmFwaGljc0xheWVyKS5yZW1vdmVBbGwoKTtcbiAgICAgIH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgYmluZD17dGhpc31cbiAgICAgICAgY2xhc3M9e3RoaXMuY2xhc3NlcyhDU1MuYmFzZSl9XG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICBvbmNsaWNrPXt0aGlzLl9jbGVhcn1cbiAgICAgICAgb25rZXlkb3duPXt0aGlzLl9jbGVhcn1cbiAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5jbGVhclRpdGxlfVxuICAgICAgICB0aXRsZT17dGhpcy5jbGVhclRpdGxlfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5yZW5kZXJJY29uKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCIvLyBXaWRnZXRzXG5pbXBvcnQgTGVnZW5kIGZyb20gJ2Vzcmkvd2lkZ2V0cy9MZWdlbmQnO1xuaW1wb3J0IFByaW50IGZyb20gJ2Vzcmkvd2lkZ2V0cy9QcmludCc7XG5pbXBvcnQgQm9va21hcmtzIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Cb29rbWFya3MnO1xuaW1wb3J0IFByb3BlcnR5U2VhcmNoIGZyb20gJy4vd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaCc7XG5pbXBvcnQgQ29vcmRpbmF0ZUNvbnZlcnNpb24gZnJvbSAnZXNyaS93aWRnZXRzL0Nvb3JkaW5hdGVDb252ZXJzaW9uJztcbmltcG9ydCBFeHBhbmQgZnJvbSAnZXNyaS93aWRnZXRzL0V4cGFuZCc7XG5pbXBvcnQgTWVhc3VyZSBmcm9tICcuL3dpZGdldHMvTWVhc3VyZSc7XG5pbXBvcnQgQ29tcGFzcyBmcm9tICdlc3JpL3dpZGdldHMvQ29tcGFzcyc7XG5pbXBvcnQgTG9jYXRlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Mb2NhdGUnO1xuaW1wb3J0IFRyYWNrIGZyb20gJ2Vzcmkvd2lkZ2V0cy9UcmFjayc7XG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICdlc3JpL3dpZGdldHMvRnVsbHNjcmVlbic7XG5cbmltcG9ydCB7IGNvbmRvc1RhYmxlLCBhZGRyZXNzVGFibGUsIGZlYXR1cmVMYXllciB9IGZyb20gJy4vZGF0YS9zZWFyY2gnO1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5pbXBvcnQgRHJhdyBmcm9tICcuL3dpZGdldHMvRHJhdyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vd2lkZ2V0cy9TZWxlY3QnO1xuaW1wb3J0IEJhc2VNYXBzIGZyb20gJy4vd2lkZ2V0cy9CYXNlTWFwcyc7XG5pbXBvcnQgTGF5ZXJzIGZyb20gJy4vd2lkZ2V0cy9MYXllcnMnO1xuaW1wb3J0IExvY2F0aW9uU2VhcmNoIGZyb20gJy4vd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaCc7XG5pbXBvcnQgT3ZlcnZpZXdNYXAgZnJvbSAnLi93aWRnZXRzL092ZXJ2aWV3TWFwJztcbmltcG9ydCBDbGVhciBmcm9tICcuL3dpZGdldHMvQ2xlYXInO1xuXG5leHBvcnQgY29uc3QgbWVhc3VyZW1lbnQ6IE1lYXN1cmUgPSBuZXcgTWVhc3VyZSgpO1xuZXhwb3J0IGNvbnN0IHNlbGVjdDogU2VsZWN0ID0gbmV3IFNlbGVjdCgpO1xuZXhwb3J0IGxldCBsYXllcnM6IExheWVycztcbmV4cG9ydCBsZXQgbGVnZW5kOiBMZWdlbmQ7XG5leHBvcnQgbGV0IGJhc2VtYXBzOiBCYXNlTWFwcztcbmV4cG9ydCBsZXQgYm9va21hcmtzOiBCb29rbWFya3M7XG5leHBvcnQgbGV0IGxvY2F0aW9uU2VhcmNoOiBMb2NhdGlvblNlYXJjaDtcblxuZXhwb3J0IGxldCBwcmludFdpZGdldDogUHJpbnQ7XG5leHBvcnQgbGV0IHByb3BlcnR5U2VhcmNoOiBQcm9wZXJ0eVNlYXJjaDtcbmV4cG9ydCBjb25zdCBkcmF3V2lkZ2V0OiBEcmF3ID0gbmV3IERyYXcoKTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0V2lkZ2V0KG5hbWU6IHN0cmluZywgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgaWYgKG5hbWUgPT09ICdTZWFyY2gnICYmICFwcm9wZXJ0eVNlYXJjaCkge1xuICAgIHByb3BlcnR5U2VhcmNoID0gbmV3IFByb3BlcnR5U2VhcmNoKHtcbiAgICAgIHZpZXc6IHZpZXcsXG4gICAgICBjb25kb3NUYWJsZTogY29uZG9zVGFibGUsXG4gICAgICBhZGRyZXNzVGFibGU6IGFkZHJlc3NUYWJsZSxcbiAgICAgIHByb3BlcnR5TGF5ZXI6IGZlYXR1cmVMYXllcixcbiAgICAgIGNvbnRhaW5lcjogJ3NpZGVEaXYnXG4gICAgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdMYXllcnMnICYmICFsYXllcnMpIHtcbiAgICBsYXllcnMgPSBuZXcgTGF5ZXJzKHsgdmlldywgY29udGFpbmVyOiAnbGF5ZXJEaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnTGVnZW5kJyAmJiAhbGVnZW5kKSB7XG4gICAgbGVnZW5kID0gbmV3IExlZ2VuZCh7IHZpZXcsIGNvbnRhaW5lcjogJ2xlZ2VuZERpdicgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdQcmludCcgJiYgIXByaW50V2lkZ2V0KSB7XG4gICAgcHJpbnRXaWRnZXQgPSBuZXcgUHJpbnQoe1xuICAgICAgdmlldyxcbiAgICAgIGNvbnRhaW5lcjogJ3ByaW50RGl2JyxcbiAgICAgIHByaW50U2VydmljZVVybDpcbiAgICAgICAgJ2h0dHBzOi8vdXRpbGl0eS5hcmNnaXNvbmxpbmUuY29tL2FyY2dpcy9yZXN0L3NlcnZpY2VzL1V0aWxpdGllcy9QcmludGluZ1Rvb2xzL0dQU2VydmVyL0V4cG9ydCUyMFdlYiUyME1hcCUyMFRhc2snXG4gICAgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdCb29rbWFya3MnICYmICFib29rbWFya3MpIHtcbiAgICBib29rbWFya3MgPSBuZXcgQm9va21hcmtzKHsgdmlldywgY29udGFpbmVyOiAnYm9va21hcmtEaXYnLCBlZGl0aW5nRW5hYmxlZDogdHJ1ZSB9KTtcbiAgfVxuXG4gIGlmIChuYW1lID09PSAnQmFzZW1hcHMnICYmICFiYXNlbWFwcykge1xuICAgIGJhc2VtYXBzID0gbmV3IEJhc2VNYXBzKHsgdmlldywgY29udGFpbmVyOiAnYmFzZW1hcERpdicgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdMb2NhdGlvbicgJiYgIWxvY2F0aW9uU2VhcmNoKSB7XG4gICAgbG9jYXRpb25TZWFyY2ggPSBuZXcgTG9jYXRpb25TZWFyY2goeyB2aWV3LCBjb250YWluZXI6ICdsb2NhdGlvbkRpdicgfSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpbml0V2lkZ2V0cyh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICBjb25zdCBjb29yZGluYXRlczogZXNyaS5Db29yZGluYXRlQ29udmVyc2lvbiA9IG5ldyBDb29yZGluYXRlQ29udmVyc2lvbih7IHZpZXcgfSk7XG4gIGNvbnN0IGNvb3JkaW5hdGVzRXhwYW5kOiBFeHBhbmQgPSBuZXcgRXhwYW5kKHtcbiAgICBjb250ZW50OiBjb29yZGluYXRlcyxcbiAgICBtb2RlOiAnZmxvYXRpbmcnLFxuICAgIGV4cGFuZEljb25DbGFzczogJ2VzcmktaWNvbi1wYW4yJ1xuICB9KTtcbiAgdmlldy51aS5hZGQoY29vcmRpbmF0ZXNFeHBhbmQsICdib3R0b20tbGVmdCcpO1xuXG4gIHZpZXcudWkuYWRkKG5ldyBDb21wYXNzKHsgdmlldzogdmlldyB9KSwgJ3RvcC1sZWZ0Jyk7XG4gIGNvbnN0IGxvY2F0ZTogTG9jYXRlID0gbmV3IExvY2F0ZSh7IHZpZXc6IHZpZXcgfSk7XG4gIGxvY2F0ZS5vbignbG9jYXRlLWVycm9yJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gIH0pO1xuICB2aWV3LnVpLmFkZChsb2NhdGUsICd0b3AtbGVmdCcpO1xuXG4gIGNvbnN0IHRyYWNrOiBUcmFjayA9IG5ldyBUcmFjayh7IHZpZXc6IHZpZXcgfSk7XG4gIHRyYWNrLm9uKCd0cmFjay1lcnJvcicsIChldmVudDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9KTtcbiAgdmlldy51aS5hZGQodHJhY2ssICd0b3AtbGVmdCcpO1xuICB2aWV3LnVpLmFkZChuZXcgRnVsbHNjcmVlbih7IHZpZXcgfSksICd0b3AtbGVmdCcpO1xuICB2aWV3LnVpLmFkZChuZXcgQ2xlYXIoeyB2aWV3IH0pLCAndG9wLWxlZnQnKTtcbiAgbWVhc3VyZW1lbnQudmlldyA9IHZpZXc7XG4gIG1lYXN1cmVtZW50LmNvbnRhaW5lciA9ICdtZWFzdXJlRGl2JztcbiAgZHJhd1dpZGdldC52aWV3ID0gdmlldztcbiAgZHJhd1dpZGdldC5jb250YWluZXIgPSAnZHJhd0Rpdic7XG4gIGNvbnN0IG92ZXJ2aWV3TWFwID0gbmV3IE92ZXJ2aWV3TWFwKHsgdmlldyB9KTtcbiAgY29uc3Qgb3ZlcnZpZXdFeHBhbmQ6IEV4cGFuZCA9IG5ldyBFeHBhbmQoe1xuICAgIGNvbnRlbnQ6IG92ZXJ2aWV3TWFwLFxuICAgIG1vZGU6ICdmbG9hdGluZycsXG4gICAgZXhwYW5kSWNvbkNsYXNzOiAnZXNyaS1pY29uLW92ZXJ2aWV3LWFycm93LXRvcC1sZWZ0J1xuICB9KTtcbiAgb3ZlcnZpZXdFeHBhbmQud2F0Y2goJ2V4cGFuZGVkJywgZXhwYW5kZWQgPT4ge1xuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgb3ZlcnZpZXdNYXAudmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldy5nb1RvKHtcbiAgICAgICAgY2VudGVyOiB2aWV3LmNlbnRlcixcbiAgICAgICAgc2NhbGU6XG4gICAgICAgICAgdmlldy5zY2FsZSAqXG4gICAgICAgICAgMiAqXG4gICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICB2aWV3LndpZHRoIC8gb3ZlcnZpZXdNYXAudmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldy53aWR0aCxcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0IC8gb3ZlcnZpZXdNYXAudmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldy5oZWlnaHRcbiAgICAgICAgICApXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICB2aWV3LnVpLmFkZChvdmVydmlld0V4cGFuZCwgJ2JvdHRvbS1yaWdodCcpO1xuXG4gIHNlbGVjdC5jb250YWluZXIgPSAnc2VsZWN0RGl2JztcbiAgc2VsZWN0LnZpZXcgPSB2aWV3O1xuICBzZWxlY3QubGF5ZXIgPSBmZWF0dXJlTGF5ZXI7XG4gIHJldHVybiB2aWV3O1xufVxuIiwiZXhwb3J0IGNvbnN0IGluaXRQYW5lbEhlYWRlcnMgPSAoKSA9PiB7XG4gIC8vb3ZlcnJpZGUgQ1NTIGZvciBjYWxjaXRlIHBhbmVsIGhlYWRlclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsIGRpdicpLmZvckVhY2gocGFuZWwgPT4ge1xuICAgIGlmIChwYW5lbC5zbG90ID09PSAnaGVhZGVyLXRyYWlsaW5nLWNvbnRlbnQnKSB7XG4gICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3c7Jyk7XG4gICAgfVxuICB9KTtcbiAgd2luZG93Lm9ucmVzaXplID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBpZiAoKGV2ZW50Py50YXJnZXQgYXMgYW55KT8uaW5uZXJXaWR0aCA+PSA1MDApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW0uaGFzQXR0cmlidXRlKCdkaXNtaXNzZWQnKSkge1xuICAgICAgICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5tYXhpbWl6ZScpPy5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21pbmltaXplJykge1xuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNDhweCknKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMzUwcHgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdkaXNtaXNzZWQnKSkge1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDBweCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVQYW5lbERpc21pc3NlZENoYW5nZScsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIC8vaGFuZGxlIHBhbmVsIG1heGltaXplL21pbmltaXplXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXhpbWl6ZScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21heGltaXplJykge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtaW5pbWl6ZScpO1xuICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ21heGltaXplZCcpOyAvLy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gOTZweCknKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbC5sZWZ0Om5vdCguaGlkZGVuKScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGlzbWlzc2VkJywgJycpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1hY3Rpb25bc2lkZT1cImxlZnRcIl1bYWN0aXZlXScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaWNvbicpID09PSAnbWluaW1pemUnKSB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpY29uJywgJ21heGltaXplJyk7XG4gICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnbWF4aW1pemVkJyk7XG4gICAgICAgIC8vaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDozNTBweCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5leHBvcnQgY29uc3QgaW5pdFBhbmVscyA9IChhY3Rpb25zOiBhbnkpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgY29uc3QgaTogSFRNTEVsZW1lbnQgPSBpdGVtPy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoaSkge1xuICAgICAgaS5pbm5lckhUTUwgKz1cbiAgICAgICAgJzxzdHlsZT4uY29udGVudC1jb250YWluZXIgeyBoZWlnaHQ6IDEwMCU7IH0gLmNvbnRhaW5lcjpmb2N1cywgLmNvbnRlbnQtY29udGFpbmVyOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgfTwvc3R5bGU+JztcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogZmFsc2UsIHN1YnRyZWU6IGZhbHNlIH07XG4gICAgY29uc3QgY2FsbGJhY2sgPSAobXV0YXRpb25zTGlzdDogYW55W10pID0+IHtcbiAgICAgIC8vIFVzZSB0cmFkaXRpb25hbCAnZm9yIGxvb3BzJyBmb3IgSUUgMTFcbiAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zTGlzdCkge1xuICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNtaXNzZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtdXRhdGlvbik7XG4gICAgICAgICAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhY3Rpb24udGV4dCA9PT0gKG11dGF0aW9uLnRhcmdldCBhcyBhbnkpLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKChtdXRhdGlvbi50YXJnZXQgYXMgYW55KS5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYWN0aW9uLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNTAwKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgobXV0YXRpb24udGFyZ2V0IGFzIGFueSkuaGFzQXR0cmlidXRlKCdkaXNtaXNzZWQnKSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKG11dGF0aW9uLnRhcmdldCBhcyBhbnkpLnRpdGxlLCAnZGlzbWlzc2VkJyk7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0RpdicpPy5jbGFzc0xpc3QucmVtb3ZlKCdiZWxvdycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygobXV0YXRpb24udGFyZ2V0IGFzIGFueSkudGl0bGUsICdub3QgZGlzbWlzc2VkJyk7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0RpdicpPy5jbGFzc0xpc3QuYWRkKCdiZWxvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGl0ZW0sIGNvbmZpZyk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCB7IGluaXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXRzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5BY3Rpb25CYXIuQWN0aW9uQmFyVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbkJhclZpZXdNb2RlbCBleHRlbmRzIGRlY2xhcmVkKEFjY2Vzc29yKSB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBzaWRlOiBzdHJpbmc7XG4gIGFjdGlvbnM6IE5vZGVMaXN0T2Y8RWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICdzaWRlJywgdGhpcy5zaWRlU2V0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVvcmRlclBhbmVscyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy52aWV3KSB7XG4gICAgICAvL3RoaXMuYWN0aW9ucy5mb3JFYWNoKCgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYW5lbC5sZWZ0JykuZm9yRWFjaCgocGFuZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDAwKSB7XG4gICAgICAgICAgcGFuZWwucGFyZW50RWxlbWVudD8uaW5zZXJ0QmVmb3JlKHBhbmVsLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0RpdicpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYW5lbC5wYXJlbnRFbGVtZW50Py5pbnNlcnRCZWZvcmUocGFuZWwsIGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKCcjdmlld0RpdicpPy5uZXh0RWxlbWVudFNpYmxpbmcgYXMgYW55KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvL30pO1xuICAgIH1cbiAgfTtcblxuICBpbml0QWN0aW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLmFjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFjdGlvbi1iYXIgY2FsY2l0ZS1hY3Rpb24nKTtcbiAgICB0aGlzLmFjdGlvbnM/LmZvckVhY2goKGFjdGlvbjogRWxlbWVudCkgPT4ge1xuICAgICAgYWN0aW9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVBY3Rpb24oZS50YXJnZXQpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpbml0V2lkZ2V0KGUudGFyZ2V0LnRleHQsIHRoaXMudmlldyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaCgoYTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGEudGV4dCAhPSBlLnRhcmdldC50ZXh0KSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAwMCkge1xuICAgICAgICAgICAgICBpZiAoYS5nZXRBdHRyaWJ1dGUoJ3NpZGUnKSA9PT0gYWN0aW9uLmdldEF0dHJpYnV0ZSgnc2lkZScpKSB7XG4gICAgICAgICAgICAgICAgYS5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYWN0aW9uLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDUwMCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1hY3Rpb25bdGV4dD1cIlNlYXJjaFwiJyk/LnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgIH1cbiAgfTtcbiAgdG9nZ2xlQWN0aW9uID0gKGFjdGlvbjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAwMCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnBhbmVsLiR7YWN0aW9uLmdldEF0dHJpYnV0ZSgnc2lkZScpIGFzIHN0cmluZ31gKS5mb3JFYWNoKChwYW5lbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKHBhbmVsLnRpdGxlICE9IChhY3Rpb24gYXMgYW55KS50ZXh0KSB7XG4gICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFuZWwucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgICAgICBpZiAoIXBhbmVsLmhhc0F0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDUwMCkge1xuICAgICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNDhweCknKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiAzNTBweCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBpZiAocGFuZWwudGl0bGUgIT0gJ01lYXN1cmUnKSB7XG4gICAgICAgICAgICAgIC8vbWVhc3VyZW1lbnQubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vbWVhc3VyZW1lbnQubWVhc3VyZU9wZW5lZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYW5lbCcpLmZvckVhY2goKHBhbmVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAocGFuZWwudGl0bGUgIT0gKGFjdGlvbiBhcyBhbnkpLnRleHQpIHtcbiAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhwYW5lbCk7XG4gICAgICAgICAgcGFuZWwucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhwYW5lbCk7XG4gICAgICAgICAgY29uc29sZS5sb2cocGFuZWwudGl0bGUpO1xuICAgICAgICAgIGlmICghcGFuZWwuaGFzQXR0cmlidXRlKCdkaXNtaXNzZWQnKSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNTAwKSB7XG4gICAgICAgICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDM1MHB4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAnTWVhc3VyZScpIHtcbiAgICAgICAgICAgICAgLy9tZWFzdXJlbWVudC5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy9tZWFzdXJlbWVudC5tZWFzdXJlT3BlbmVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGVuYWJsZUFjdGlvbmJhciA9ICgpID0+IHtcbiAgICBpbml0V2lkZ2V0KCdTZWFyY2gnLCB0aGlzLnZpZXcpO1xuICAgIHRoaXMucmVvcmRlclBhbmVscygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWN0aW9uLWJhciBjYWxjaXRlLWFjdGlvbicpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9KTtcbiAgfTtcbiAgc2lkZVNldChzaWRlOiBzdHJpbmcpIHtcbiAgICBpZiAoc2lkZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rvb2xHcm91cCcpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgaWYgKHNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEdyb3VwJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICB0aGlzLmFjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFjdGlvbi1iYXIgY2FsY2l0ZS1hY3Rpb24nKTtcbiAgICAvLyB0aGlzLmFjdGlvbnM/LmZvckVhY2goKGFjdGlvbjogRWxlbWVudCkgPT4ge1xuICAgIC8vICAgYWN0aW9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcbiAgICAvLyAgICAgZGVidWdnZXI7XG5cbiAgICAvLyAgICAgdGhpcy50b2dnbGVBY3Rpb24oZS50YXJnZXQpO1xuICAgIC8vICAgICBpbml0V2lkZ2V0KGUudGFyZ2V0LnRleHQsIHRoaXMudmlldyk7XG4gICAgLy8gICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKChhOiBhbnkpID0+IHtcbiAgICAvLyAgICAgICBpZiAoYS50ZXh0ICE9IGUudGFyZ2V0LnRleHQpIHtcbiAgICAvLyAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDAwKSB7XG4gICAgLy8gICAgICAgICAgIGlmIChhLmdldEF0dHJpYnV0ZSgnc2lkZScpID09PSBhY3Rpb24uZ2V0QXR0cmlidXRlKCdzaWRlJykpIHtcbiAgICAvLyAgICAgICAgICAgICBhLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgLy8gICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICBhY3Rpb24uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAwMCkge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0QWN0aW9uYmFyJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI2xlZnRBY3Rpb25iYXInKVxuICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCcjdG9vbEdyb3VwJylcbiAgICAgICAgICAgID8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYWN0aW9uQmFyJylcbiAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignI3Rvb2xHcm91cCcpXG4gICAgICAgICAgICA/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0QWN0aW9uYmFyJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI2FjdGlvbkJhcicpXG4gICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJyN0b29sR3JvdXAnKVxuICAgICAgICAgICAgPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWwubGVmdCcpLmZvckVhY2gocGFuZWwgPT4ge1xuICAgICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdkaXNtaXNzZWQnLCAnJyk7XG4gICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlb3JkZXJQYW5lbHMoKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBBY3Rpb25CYXJWaWV3TW9kZWwgZnJvbSAnLi9BY3Rpb25CYXIvQWN0aW9uQmFyVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25CYXJQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgc2lkZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBhY3Rpb25iYXItYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQWN0aW9uQmFyJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbkJhciBleHRlbmRzIGRlY2xhcmVkKFdpZGdldCkge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5zaWRlJylcbiAgc2lkZTogc3RyaW5nO1xuICBAYWxpYXNPZigndmlld01vZGVsLmFjdGlvbnMnKVxuICBhY3Rpb25zOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xuICBAYWxpYXNPZigndmlld01vZGVsLnRvZ2dsZUFjdGlvbicpXG4gIHRvZ2dsZUFjdGlvbjogRnVuY3Rpb247XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZW5hYmxlQWN0aW9uYmFyJylcbiAgZW5hYmxlQWN0aW9uYmFyOiBGdW5jdGlvbjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5pbml0QWN0aW9ucycpXG4gIGluaXRBY3Rpb25zOiBGdW5jdGlvbjtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBBY3Rpb25CYXJWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IEFjdGlvbkJhclZpZXdNb2RlbCA9IG5ldyBBY3Rpb25CYXJWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogQWN0aW9uQmFyUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG4gIHNlYXJjaEdyb3VwQ3JlYXRlZCA9IChpdGVtOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmICh0aGlzLnNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmluaXRBY3Rpb25zKCk7XG4gICAgfVxuICB9O1xuICB0b29sR3JvdXBDcmVhdGVkID0gKGl0ZW06IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuc2lkZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMDApIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0QWN0aW9uYmFyJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5pdEFjdGlvbnMoKTtcbiAgICB9XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24tYmFyIGV4cGFuZD1cImZhbHNlXCI+XG4gICAgICAgICAgPGNhbGNpdGUtYWN0aW9uLWdyb3VwIGlkPVwic2VhcmNoR3JvdXBcIiBhZnRlckNyZWF0ZT17dGhpcy5zZWFyY2hHcm91cENyZWF0ZWR9PlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJTZWFyY2hcIiBpY29uPVwic2VhcmNoXCIgc2lkZT1cInJpZ2h0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiTG9jYXRpb25cIiBpY29uPVwicGluXCIgc2lkZT1cInJpZ2h0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiTGF5ZXJzXCIgaWNvbj1cImxheWVyc1wiIHNpZGU9XCJyaWdodFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIkxlZ2VuZFwiIGljb249XCJsZWdlbmRcIiBzaWRlPVwicmlnaHRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJCYXNlbWFwc1wiIGljb249XCJiYXNlbWFwXCIgc2lkZT1cInJpZ2h0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICA8L2NhbGNpdGUtYWN0aW9uLWdyb3VwPlxuXG4gICAgICAgICAgPGNhbGNpdGUtYWN0aW9uLWdyb3VwIGlkPVwidG9vbEdyb3VwXCIgYWZ0ZXJDcmVhdGU9e3RoaXMudG9vbEdyb3VwQ3JlYXRlZH0+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIlNlbGVjdFwiIGljb249XCJzZWxlY3Rpb25cIiBzaWRlPVwibGVmdFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIk1lYXN1cmVcIiBpY29uPVwibWVhc3VyZVwiIHNpZGU9XCJsZWZ0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiRHJhd1wiIGljb249XCJwZW5jaWwtbWFya1wiIHNpZGU9XCJsZWZ0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiQm9va21hcmtzXCIgaWNvbj1cImJvb2ttYXJrXCIgc2lkZT1cImxlZnRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJQcmludFwiIGljb249XCJwcmludFwiIHNpZGU9XCJsZWZ0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICA8L2NhbGNpdGUtYWN0aW9uLWdyb3VwPlxuICAgICAgICA8L2NhbGNpdGUtYWN0aW9uLWJhcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCAnLi9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9kYXRhL2FwcCc7XG5pbXBvcnQgeyBpbml0VGlwcyB9IGZyb20gJy4vdGlwcyc7XG5pbXBvcnQgeyBzaG93QWxlcnQgfSBmcm9tICcuL2FsZXJ0Jztcbi8vaW1wb3J0IHsgdG9nZ2xlQWN0aW9uLCBlbmFibGVBY3Rpb25iYXIgfSBmcm9tICcuL2FjdGlvbmJhcic7XG5pbXBvcnQgTWFwVmlldyBmcm9tICdlc3JpL3ZpZXdzL01hcFZpZXcnO1xuXG5pbXBvcnQgV2ViTWFwIGZyb20gJ2VzcmkvV2ViTWFwJztcbi8vIHdpZGdldCB1dGlsc1xuaW1wb3J0IHsgaW5pdFdpZGdldHMsIHNlbGVjdCwgcHJvcGVydHlTZWFyY2gsIGxheWVycyB9IGZyb20gJy4vd2lkZ2V0cyc7XG5pbXBvcnQgeyBpbml0UGFuZWxzLCBpbml0UGFuZWxIZWFkZXJzIH0gZnJvbSAnLi9wYW5lbHMnO1xuaW1wb3J0IHsgaW5pdE1lbnUgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IEFjdGlvbkJhciBmcm9tICcuL3dpZGdldHMvQWN0aW9uQmFyJztcbmNvbnN0IGFjdGlvbkJhciA9IG5ldyBBY3Rpb25CYXIoeyBzaWRlOiAncmlnaHQnLCBjb250YWluZXI6ICdhY3Rpb25CYXInIH0pO1xuXG5uZXcgQWN0aW9uQmFyKHsgc2lkZTogJ2xlZnQnLCBjb250YWluZXI6ICdsZWZ0QWN0aW9uYmFyJyB9KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB2aWV3ID0gbmV3IE1hcFZpZXcoe1xuICBjb250YWluZXI6ICd2aWV3RGl2JyxcbiAgbWFwXG59KTtcblxuZnVuY3Rpb24gY2hlY2tMb2NhbFN0b3JhZ2UodmlldzogTWFwVmlldykge1xuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpKSB7XG4gICAgY29uc3Qgd2VibWFwOiBXZWJNYXAgPSBXZWJNYXAuZnJvbUpTT04oSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzJykgYXMgc3RyaW5nKSk7XG4gICAgd2VibWFwLmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgIHZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgY29uc3QgbHlyID0gd2VibWFwLmFsbExheWVycy5maW5kKGwgPT4ge1xuICAgICAgICAgIHJldHVybiBsYXllci5pZCA9PT0gbC5pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGxheWVyLnZpc2libGUgPSBseXI/LnZpc2libGU7XG4gICAgICAgIGxheWVyLm9wYWNpdHkgPSBseXI/Lm9wYWNpdHk7XG4gICAgICB9KTtcbiAgICAgIHZpZXcubWFwLmJhc2VtYXAgPSB3ZWJtYXAuYmFzZW1hcDtcbiAgICAgIHZpZXcuZXh0ZW50ID0gd2VibWFwLmluaXRpYWxWaWV3UHJvcGVydGllcy52aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkuZXh0ZW50O1xuICAgIH0pO1xuICB9XG59XG4vL2hhbmRsZSB3aGVuIHZpZXcgaXMgcmVhZHlcbnZpZXcud2hlbigoKSA9PiB7XG4gIGNoZWNrTG9jYWxTdG9yYWdlKHZpZXcpO1xuICB2aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgaWYgKGxheWVyLnR5cGUgIT0gJ2dyb3VwJykge1xuICAgICAgbGF5ZXIud2F0Y2goJ3Zpc2libGUnLCB2aXNpYmxlID0+IHtcbiAgICAgICAgbGF5ZXJzPy5sYXllckxpc3Q/Lm9wZXJhdGlvbmFsSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5sYXllci50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGl0ZW0uY2hpbGRyZW4uZmluZChpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGkubGF5ZXIgPT09IGxheWVyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgY2hpbGQucGFuZWwub3BlbiA9IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXllci53YXRjaCgndmlzaWJsZScsIHZpc2libGUgPT4ge1xuICAgICAgICBjb25zdCBncm91cCA9IGxheWVycz8ubGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMuZmluZChpID0+IHtcbiAgICAgICAgICByZXR1cm4gaS5sYXllciA9PT0gbGF5ZXI7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgICBncm91cC5vcGVuID0gdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgcHJvcGVydHlMYXllciA9IG1hcC5hbGxMYXllcnMuZmluZChsYXllciA9PiB7XG4gICAgcmV0dXJuIGxheWVyLnRpdGxlID09PSAnUHJvcGVydHknICYmIGxheWVyLnR5cGUgPT09ICdmZWF0dXJlJztcbiAgfSk7XG4gIHZpZXcub24oJ2hvbGQnLCBlID0+IHtcbiAgICBwcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGUubWFwUG9pbnQ7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvL3RvZ2dsZUFjdGlvbignU2VhcmNoJyk7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xuICB2aWV3XG4gICAgLndoZW5MYXllclZpZXcocHJvcGVydHlMYXllcilcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwTG9hZGVyJyk/LnRvZ2dsZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgICBwcm9wZXJ0eVNlYXJjaC5wcm9wZXJ0eUxheWVyID0gcHJvcGVydHlMYXllciBhcyBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICAgICAgLy9zZWFyY2ggYnkgZ2VvbWV0cnkgYWZ0ZXIgc2tldGNoIGNyZWF0aW9uIGluIHNlbGVjdCB3aWRnZXRcbiAgICAgIHNlbGVjdC52aWV3TW9kZWwud2F0Y2goJ2dlb21ldHJ5JywgZ2VvbWV0cnkgPT4ge1xuICAgICAgICBwcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgICAgICBhY3Rpb25CYXIuYWN0aW9ucy5mb3JFYWNoKChhY3Rpb246IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChhY3Rpb24udGV4dCA9PT0gJ1NlYXJjaCcpIHtcbiAgICAgICAgICAgIGFjdGlvbkJhci50b2dnbGVBY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKHJlYXNvbjogYW55KSA9PiB7XG4gICAgICAvL29uIGVycm9yIGxvYWRpbmcgcHJvcGVydHkgbGF5ZXIsIGRpc3BsYXkgYWxlcnRcbiAgICAgIGNvbnNvbGUubG9nKHJlYXNvbik7XG4gICAgICBzaG93QWxlcnQoJ1Byb3BlcnR5IGxheWVyIGRpZCBub3QgbG9hZC4gUGxlYXNlIGNvbnRhY3QgaU1BUFMgSGVscCBEZXNrLicsICdyZWQnKTtcbiAgICB9KTtcbn0pO1xudmlldy53aGVuKGluaXRXaWRnZXRzKTtcbnZpZXcud2hlbihpbml0VGlwcyk7XG4vL3NhdmUgd2ViIG1hcCB0byBsb2NhbCBzdG9yYWdlIG9uIHBhZ2VoaWRlXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCAoKSA9PiB7XG4gIHZpZXcubWFwLnJlbW92ZU1hbnkoXG4gICAgdmlldy5tYXAuYWxsTGF5ZXJzXG4gICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIGxheWVyLnR5cGUgPT09ICdncm91cCcgJiYgIShsYXllciBhcyBfX2VzcmkuR3JvdXBMYXllcikubGF5ZXJzLmxlbmd0aDtcbiAgICAgIH0pXG4gICAgICAudG9BcnJheSgpXG4gICk7XG4gIGNvbnN0IGpzb24gPSAodmlldy5tYXAgYXMgYW55KS50b0pTT04oKTtcbiAganNvbi5pbml0aWFsU3RhdGUudmlld3BvaW50LnRhcmdldEdlb21ldHJ5ID0gdmlldy5leHRlbnQ7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hcHMnLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XG59KTtcblxuLy9zaG93IGZpcnN0IHBhbmVsIG9uIGRldmljZXMgd2lkZXIgdGhhbiA1MDBweCBieSBkZWZhdWx0XG5pZiAod2luZG93LmlubmVyV2lkdGggPj0gNTAwKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtcGFuZWwucmlnaHQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtcGFuZWwucmlnaHQnKT8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbn1cblxuLy9tb2RpZnkgRE9NIGFmdGVyIG1hcCB2aWV3IGxvYWRzXG52aWV3LndoZW4oKCkgPT4ge1xuICBpbml0UGFuZWxzKGFjdGlvbkJhci5hY3Rpb25zKTtcbiAgYWN0aW9uQmFyLnZpZXcgPSB2aWV3O1xuICBhY3Rpb25CYXIuZW5hYmxlQWN0aW9uYmFyKCk7XG59KTtcblxuaW5pdFBhbmVsSGVhZGVycygpO1xuaW5pdE1lbnUoKTtcbiJdLCJuYW1lcyI6WyJ3aGVuRGVmaW5lZE9uY2UiLCJ3aGVuRGVmaW5lZCIsInByb3BlcnR5Iiwic3ViY2xhc3MiLCJ0c3giLCJhbGlhc09mIiwicmVuZGVyYWJsZSIsIkNTUyIsIndhdGNoVXRpbHMiLCJkZWNsYXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFDTyxJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0VBQzlCLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxrQ0FBa0MsRUFBRSxFQUFFLENBQUMsQ0FBQzs7O0VDRnRFLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQztFQUMzQixJQUFNLFFBQVEsR0FBRyxVQUFDLEtBQWE7O01BQzdCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1VBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ25DLENBQUMsQ0FBQztNQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1VBQ3JELElBQUksQ0FBQyxZQUFZLENB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
