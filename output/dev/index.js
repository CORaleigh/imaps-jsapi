
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
          _this._createLayers = function () {
              if (_this.layerList) {
                  _this.layerList.container = 'layerWidget';
              }
          };
          _this._createSearch = function (input) {
              input.addEventListener('input', function (e) {
                  _this.layerList.operationalItems.forEach(function (item) {
                      if (item.layer.type === 'group') {
                          item.layer.layers.forEach(function (layer) {
                              if (layer.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                                  layer.listMode = 'show';
                                  item.open = true;
                              }
                              else {
                                  layer.listMode = 'hide';
                                  item.open = false;
                              }
                          });
                          if (!e.target.value.length) {
                              item.open = false;
                          }
                      }
                  });
              });
          };
          return _this;
      }
      Layers.prototype.render = function () {
          return (widget.tsx("div", { class: CSS$5.base },
              widget.tsx("calcite-input", { placeholder: "Filter by layer name", scale: "s", afterCreate: this._createSearch, id: "layerSearch" }),
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
              i.innerHTML += '<style>.content-container { height: 100%; } </style>';
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
                  _this.actions.forEach(function () {
                      document.querySelectorAll('.panel.left').forEach(function (panel) {
                          var _a, _b, _c;
                          if (window.innerWidth >= 1000) {
                              (_a = panel.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(panel, document.querySelector('#viewDiv'));
                          }
                          else {
                              (_b = panel.parentElement) === null || _b === void 0 ? void 0 : _b.insertBefore(panel, (_c = document === null || document === void 0 ? void 0 : document.querySelector('#viewDiv')) === null || _c === void 0 ? void 0 : _c.nextElementSibling);
                          }
                      });
                  });
              }
          };
          _this.initActions = function () {
              var _a, _b;
              _this.actions = document.querySelectorAll('calcite-action-bar calcite-action');
              (_a = _this.actions) === null || _a === void 0 ? void 0 : _a.forEach(function (action) {
                  action === null || action === void 0 ? void 0 : action.addEventListener('click', function (e) {
                      _this.toggleAction(e.target);
                      initWidget(e.target.text, _this.view);
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
              _this.reorderPanels();
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
  //# sourceMappingURL=ActionBarViewModel.js.map

  var CSS$8 = {
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
          return (widget.tsx("div", { class: CSS$8.base },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FwcC50cyIsIi4uLy4uL3NyYy9tZW51LnRzIiwiLi4vLi4vc3JjL3RpcHMudHMiLCIuLi8uLi9zcmMvYWxlcnQudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaC9Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL1Byb3BlcnR5U2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUvTWVhc3VyZVZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUudHN4IiwiLi4vLi4vc3JjL2RhdGEvc2VhcmNoLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy9EcmF3Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9TZWxlY3QvU2VsZWN0Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvU2VsZWN0LnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL0Jhc2VNYXBzL0Jhc2VNYXBzVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQmFzZU1hcHMudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvTGF5ZXJzL0xheWVyc1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xheWVycy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaC9Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xvY2F0aW9uU2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL092ZXJ2aWV3TWFwL092ZXJ2aWV3TWFwVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvT3ZlcnZpZXdNYXAudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMudHMiLCIuLi8uLi9zcmMvcGFuZWxzLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQWN0aW9uQmFyL0FjdGlvbkJhclZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0FjdGlvbkJhci50c3giLCIuLi8uLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG5leHBvcnQgbGV0IG1hcCA9IG5ldyBXZWJNYXAoKTtcbm1hcCA9IG5ldyBXZWJNYXAoeyBwb3J0YWxJdGVtOiB7IGlkOiAnOTUwOTI0Mjg3NzRjNGIxZmI2YTNiNmY1ZmVkOWZiYzQnIH0gfSk7XG4vLyBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpKSB7XG4vLyAgIG1hcCA9IFdlYk1hcC5mcm9tSlNPTihKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hcHMnKSBhcyBzdHJpbmcpKTtcbi8vIH1cbiIsImV4cG9ydCBsZXQgdGhlbWUgPSAnbGlnaHQnO1xuY29uc3Qgc2V0VGhlbWUgPSAodGhlbWU6IHN0cmluZykgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWNvbG9yJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXRpcC1tYW5hZ2VyJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWRyb3Bkb3duJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFsZXJ0JykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFjdGlvbi1iYXInKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgdGhlbWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyb3dQYXRoJyk/LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhlbWUgPT09ICdsaWdodCcgPyAnYmxhY2snIDogJ3doaXRlJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGluaycpLmZvckVhY2gobGluayA9PiB7XG4gICAgaWYgKGxpbmsuaHJlZi5pbmNsdWRlcyh0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpKSB7XG4gICAgICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMTYvZXNyaS90aGVtZXMvJyArIHRoZW1lICsgJy9tYWluLmNzcyc7XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgY29uc3QgaW5pdE1lbnUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtZHJvcGRvd24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZURyb3Bkb3duU2VsZWN0JywgKGU6IGFueSkgPT4ge1xuICAgIGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtZHJvcGRvd24taXRlbScpLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmc7XG4gICAgICAgIHRoZW1lID0gdmFsdWU7XG4gICAgICAgIHNldFRoZW1lKHRoZW1lKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpIHtcbiAgICBsZXQgdGhlbWVOYW1lOiBzdHJpbmcgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgYXMgc3RyaW5nO1xuICAgIHNldFRoZW1lKHRoZW1lTmFtZSk7XG5cbiAgICB0aGVtZU5hbWUgPSB0aGVtZU5hbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtZHJvcGRvd24taXRlbScpLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGlmICgoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgc3RyaW5nKSAhPSB0aGVtZU5hbWUpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpIGFzIHN0cmluZztcbiAgICAgICAgdGhlbWUgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgc3RyaW5nKSA9PT0gdGhlbWVOYW1lKSB7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL21lbnUnO1xuXG5jb25zdCB0aXBHcm91cHMgPSBbXG4gIHtcbiAgICBwYW5lbDoge1xuICAgICAgbmFtZTogJ3NlbGVjdFRpcCcsXG4gICAgICB0aXRsZTogJ1NlbGVjdGlvbicsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnVG8gZHJhdyBhIGNvbnRpbnVvdXMgbGluZSBvciBwb2x5Z29uLCBsb25nIHByZXNzIGFuZCBkcmFnIHlvdXIgY3Vyc29yJyxcbiAgICAgICAgICB0aXRsZTogJ0ZyZWVoYW5kIERyYXdpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnVG8gZHJhdyBhIGNvbnRpbnVvdXMgbGluZSBvciBwb2x5Z29uLCBsb25nIHByZXNzIGFuZCBkcmFnIHlvdXIgY3Vyc29yJyxcbiAgICAgICAgICB0aXRsZTogJ0ZyZWVoYW5kIERyYXdpbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwYW5lbDoge1xuICAgICAgbmFtZTogJ3Byb3BlcnR5U2VhcmNoVGlwJyxcbiAgICAgIHRpdGxlOiAnUHJvcGVydHkgU2VhcmNoJyxcbiAgICAgIHRpcHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAnVG8gc2VhcmNoIGJ5IGEgcG9ydGlvbiBvZiBhbiBvd25lciBuYW1lIG9yIGFkZHJlc3MsIGhpdCBlbnRlciB3aXRob3V0IHNlbGVjdGluZyBmb3JtIHRoZSBsaXN0IG9mIHN1Z2dlc3Rpb25zLicsXG4gICAgICAgICAgdGl0bGU6ICdXaWxkY2FyZCBTZWFyY2gnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnVG8gcXVpY2tseSBzZWxlY3QgYSBwcm9wZXJ0eSBmcm9tIHRoZSBtYXAsIGxvbmcgcHJlc3Mgb24gYSBwcm9wZXJ0eSBvbiB0aGUgbWFwLicsXG4gICAgICAgICAgdGl0bGU6ICdMb25nIFByZXNzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIHNlbGVjdCBieSBhIGxvY2F0aW9uIHVzZSB0aGUgcHJvcGVydHkgc2VsZWN0aW9uIHRvb2wuJyxcbiAgICAgICAgICB0aXRsZTogJ1NlbGVjdCBCeSBMb2NhdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdQcmV2aW91cyBcInRhYlwiIGxheW91dCBoYXMgYmVlbiBjb25zb2xpZGF0ZWQgaW50byBhIHNpbmdsZSBzY3JvbGxhYmxlIHBhbmVsLicsXG4gICAgICAgICAgdGl0bGU6ICdTaW5nbGUgRGV0YWlscyBQYW5lbCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIHBhbmVsOiB7XG4gICAgICBuYW1lOiAnYmFzZW1hcFRpcCcsXG4gICAgICB0aXRsZTogJ0Jhc2VtYXBzJyxcbiAgICAgIHRpcHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAnVGhlIGltYWdlcnkgYW5kIGltYWdlcnkgaHlicmlkIGJhc2UgbWFwcyBsaXN0ZWQgdW5kZXIgdGhlIG1hcHMgdGFiIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIGxhdGVzdCBpbWFnZXJ5IGZyb20gUmFsZWlnaCAoMjAxOSkgYW5kIGZyb20gdGhlIFN0YXRlIG9mIE5vcnRoIENhcm9saW5hICgyMDE3KS4nLFxuICAgICAgICAgIHRpdGxlOiAnSW1hZ2VyeSBCYXNlbWFwcydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0VGlwcygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpcCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtdGlwLW1hbmFnZXInKT8ucmVtb3ZlKCk7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgY29uc3QgbWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtdGlwLW1hbmFnZXInKTtcbiAgICAgIG1hbmFnZXIuc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgICAgIGNvbnN0IHRpcEdyb3VwID0gdGlwR3JvdXBzLmZpbmQoZ3JvdXAgPT4ge1xuICAgICAgICByZXR1cm4gZ3JvdXAucGFuZWwubmFtZSA9PT0gaXRlbS5pZDtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtdGlwLWdyb3VwJyk7XG4gICAgICBncm91cC5zZXRBdHRyaWJ1dGUoJ3RleHQtZ3JvdXAtdGl0bGUnLCAodGlwR3JvdXAgYXMgYW55KT8ucGFuZWwudGl0bGUpO1xuICAgICAgbWFuYWdlci5hcHBlbmRDaGlsZChncm91cCk7XG4gICAgICB0aXBHcm91cD8ucGFuZWwudGlwcy5mb3JFYWNoKHRpcCA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGNpdGVUaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcCcpO1xuICAgICAgICBjYWxjaXRlVGlwLnNldEF0dHJpYnV0ZSgnaGVhZGluZycsIHRpcC50aXRsZSk7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAuaW5uZXJIVE1MID0gdGlwLm1lc3NhZ2U7XG4gICAgICAgIGNhbGNpdGVUaXAuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGNhbGNpdGVUaXApO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudD8uYm9keT8uYXBwZW5kQ2hpbGQobWFuYWdlcik7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGVydCh0ZXh0OiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1hbGVydCcpPy5yZW1vdmUoKTtcbiAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWFsZXJ0Jyk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ3Nsb3QnLCAnYWxlcnQtbWVzc2FnZScpO1xuICBtZXNzYWdlLmlubmVySFRNTCA9IHRleHQ7XG4gIGFsZXJ0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBjb2xvcik7XG4gIGFsZXJ0LnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAnJyk7XG5cbiAgYWxlcnQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWxlcnQpO1xufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gnO1xuaW1wb3J0IEZlYXR1cmVUYWJsZSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZVRhYmxlJztcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmUnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcbmltcG9ydCBMYXllclNlYXJjaFNvdXJjZSBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoL0xheWVyU2VhcmNoU291cmNlJztcbmltcG9ydCBGaWVsZENvbHVtbkNvbmZpZyBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZVRhYmxlL0ZpZWxkQ29sdW1uQ29uZmlnJztcbmltcG9ydCBNZW51QnV0dG9uSXRlbSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZVRhYmxlL0dyaWQvc3VwcG9ydC9CdXR0b25NZW51SXRlbSc7XG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UsIHdoZW5EZWZpbmVkIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IFNlYXJjaFNvdXJjZSBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoL1NlYXJjaFNvdXJjZSc7XG5pbXBvcnQgRmVhdHVyZVNldCBmcm9tICdlc3JpL3Rhc2tzL3N1cHBvcnQvRmVhdHVyZVNldCc7XG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLlByb3BlcnR5U2VhcmNoLlByb3BlcnR5U2VhcmNoVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnR5U2VhcmNoVmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQHByb3BlcnR5KCkgY29uZG9zVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAcHJvcGVydHkoKSBhZGRyZXNzVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAcHJvcGVydHkoKSBwcm9wZXJ0eUxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcblxuICBAcHJvcGVydHkoKSBzZWFyY2hXaWRnZXQ6IGVzcmkud2lkZ2V0c1NlYXJjaDtcbiAgQHByb3BlcnR5KCkgZmVhdHVyZVRhYmxlOiBlc3JpLkZlYXR1cmVUYWJsZTtcbiAgQHByb3BlcnR5KCkgZmVhdHVyZTogZXNyaS5GZWF0dXJlO1xuICBAcHJvcGVydHkoKSBnZW9tZXRyeTogZXNyaS5HZW9tZXRyeTtcblxuICBjbHVzdGVyUG9pbnRzOiBGZWF0dXJlTGF5ZXI7XG5cbiAgZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3NMYXllcih7IGlkOiAncHJvcGVydHktc2VsZWN0JywgbGlzdE1vZGU6ICdoaWRlJywgbWluU2NhbGU6IDE5MjAwIH0pO1xuICBzaW5nbGVTeW1ib2wgPSB7XG4gICAgdHlwZTogJ3NpbXBsZS1maWxsJyxcbiAgICBzdHlsZTogJ25vbmUnLFxuICAgIG91dGxpbmU6IHsgd2lkdGg6IDIuNSwgY29sb3I6IFsyNTUsIDgyLCA4MiwgMV0gfSxcbiAgICBjb2xvcjogWzI1MywgNDYsIDY1LCAwLjI1XVxuICB9O1xuICBtdWx0aVN5bWJvbCA9IHtcbiAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgIHN0eWxlOiAnbm9uZScsXG4gICAgb3V0bGluZTogeyB3aWR0aDogMi41LCBjb2xvcjogWzI0OSwgMjQzLCAwLCAxXSB9LFxuICAgIGNvbG9yOiBbMjUzLCA0NiwgNjUsIDAuMjVdXG4gIH07XG4gIHNlbGVjdGVkUHJvcGVydHk6IGVzcmkuR3JhcGhpYztcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICdjb25kb3NUYWJsZScsIHRoaXMuaW5pdFNlYXJjaC5iaW5kKHRoaXMpKTtcbiAgICB3aGVuRGVmaW5lZCh0aGlzLCAnZ2VvbWV0cnknLCB0aGlzLnNlYXJjaEJ5R2VvbWV0cnkuYmluZCh0aGlzKSk7XG4gIH1cblxuICBzZWFyY2hCeUdlb21ldHJ5KGdlb21ldHJ5OiBlc3JpLkdlb21ldHJ5KSB7XG4gICAgdGhpcy5wcm9wZXJ0eUxheWVyXG4gICAgICAucXVlcnlGZWF0dXJlcyh7IGdlb21ldHJ5OiBnZW9tZXRyeSwgcmV0dXJuR2VvbWV0cnk6IHRydWUsIG91dEZpZWxkczogWydPQkpFQ1RJRCcsICdSRUlEJ10gfSlcbiAgICAgIC50aGVuKHByb3BlcnR5UmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwID0gdGhpcy5wcm9wZXJ0eUxheWVyLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICByZXR1cm4gci5uYW1lID09PSAnUFJPUEVSVFlfQ09ORE8nO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgcHJvcGVydHlSZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goZi5nZXRPYmplY3RJZCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXA/LmlkLCBvYmplY3RJZHM6IG9pZHMsIG91dEZpZWxkczogWycqJ10gfSlcbiAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgbGV0IGZlYXR1cmVzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgIGZlYXR1cmVzID0gZmVhdHVyZXMuY29uY2F0KHJlc3VsdFtrZXldLmZlYXR1cmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgZmVhdHVyZXNbMF0uZ2VvbWV0cnkgPSBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlc1swXS5nZW9tZXRyeTtcblxuICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmUoZmVhdHVyZXNbMF0sIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsIFtdLCBbZmVhdHVyZXNbMF0uZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpXSk7XG4gICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnJlbW92ZUFsbCgpO1xuXG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlU2V0OiBGZWF0dXJlU2V0ID0gbmV3IEZlYXR1cmVTZXQoeyBmZWF0dXJlczogW10gfSk7XG4gICAgICAgICAgICBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgZmVhdHVyZS5zeW1ib2wgPVxuICAgICAgICAgICAgICAgIHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA+IDEgPyAodGhpcy5tdWx0aVN5bWJvbCBhcyBhbnkpIDogKHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueSk7XG5cbiAgICAgICAgICAgICAgaWYgKHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2VvbWV0cnkgPSBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlc1swXS5nZW9tZXRyeTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IHRoaXMuY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIodGhpcy5jb25kb3NUYWJsZS5maWVsZHMsIGZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5hZGQoZmVhdHVyZSk7XG4gICAgICAgICAgICAgIGZlYXR1cmVTZXQuZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hZGRDbHVzdGVyR3JhcGhpY3MoZmVhdHVyZVNldCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyID0gKGZpZWxkczogZXNyaS5GaWVsZFtdLCBmZWF0dXJlczogZXNyaS5HcmFwaGljW10pID0+IHtcbiAgICByZXR1cm4gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICAgIHNvdXJjZTogZmVhdHVyZXMsXG4gICAgICB0aXRsZTogJ1NlbGVjdGVkIHByb3BlcnRpZXMnLFxuICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJyxcbiAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHRoaXMudmlldy5zcGF0aWFsUmVmZXJlbmNlXG4gICAgfSk7XG4gIH07XG4gIGFkZENsdXN0ZXJHcmFwaGljcyA9IChyZXN1bHQ6IGVzcmkuRmVhdHVyZVNldCkgPT4ge1xuICAgIGNvbnN0IHBvaW50czogR3JhcGhpY1tdID0gW107XG4gICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICBjb25zdCBwdCA9IGZlYXR1cmUuY2xvbmUoKTtcbiAgICAgIHB0Lmdlb21ldHJ5ID0gKHB0Lmdlb21ldHJ5IGFzIGVzcmkuUG9seWdvbikuY2VudHJvaWQ7XG4gICAgICBwb2ludHMucHVzaChwdCk7XG4gICAgfSk7XG4gICAgdGhpcy5jbHVzdGVyUG9pbnRzLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogJzE9MScsIHJldHVybkdlb21ldHJ5OiBmYWxzZSwgb3V0RmllbGRzOiBbJ09CSkVDVElEJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5jbHVzdGVyUG9pbnRzLmFwcGx5RWRpdHMoeyBkZWxldGVGZWF0dXJlczogcmVzdWx0LmZlYXR1cmVzIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmNsdXN0ZXJQb2ludHMuYXBwbHlFZGl0cyh7IGFkZEZlYXR1cmVzOiBwb2ludHMgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbHVzdGVyUG9pbnRzLnJlZnJlc2goKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgYWRkR3JhcGhpY3MgPSAocmVzdWx0OiBlc3JpLkZlYXR1cmVTZXQpID0+IHtcbiAgICB0aGlzLmdyYXBoaWNzLnJlbW92ZUFsbCgpO1xuICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xuICAgICAgZmVhdHVyZS5zeW1ib2wgPSByZXN1bHQuZmVhdHVyZXMubGVuZ3RoID4gMSA/ICh0aGlzLm11bHRpU3ltYm9sIGFzIGFueSkgOiAodGhpcy5zaW5nbGVTeW1ib2wgYXMgYW55KTtcbiAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGZlYXR1cmUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDbHVzdGVyR3JhcGhpY3MocmVzdWx0KTtcbiAgfTtcblxuICBnZXRQcm9wZXJ0eSA9IChvaWRzOiBhbnlbXSwgc291cmNlPzogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVsYXRpb25zaGlwID0gdGhpcy5jb25kb3NUYWJsZS5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICByZXR1cm4gci5uYW1lID09PSAnQ09ORE9fUFJPUEVSVFknO1xuICAgIH0pO1xuICAgIHRoaXMuY29uZG9zVGFibGVcbiAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7XG4gICAgICAgIHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXA/LmlkLFxuICAgICAgICBvYmplY3RJZHM6IG9pZHMsXG4gICAgICAgIG91dEZpZWxkczogWydPQkpFQ1RJRCcsICdSRUlEJ10sXG4gICAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BlcnR5TGF5ZXJcbiAgICAgICAgICAucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICBvYmplY3RJZHM6IG9pZHMsXG4gICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWUsXG4gICAgICAgICAgICBvdXRTcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmVhdHVyZT8uZ3JhcGhpYykge1xuICAgICAgICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYy5nZW9tZXRyeSA9IHJlc3VsdD8uZmVhdHVyZXNbMF0uZ2VvbWV0cnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ29UbyhyZXN1bHQuZmVhdHVyZXMpO1xuXG4gICAgICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgICB0aGlzLmFkZEdyYXBoaWNzKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBzZWFyY2hDb21wbGV0ZSA9IChldmVudDogZXNyaS5TZWFyY2hTZWFyY2hDb21wbGV0ZUV2ZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaFdpZGdldC52aWV3TW9kZWwuc2VsZWN0ZWRTdWdnZXN0aW9uKSB7XG4gICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuXG4gICAgICBsZXQgd2hlcmUgPSAnJztcblxuICAgICAgaWYgKCF0aGlzLnNlYXJjaFdpZGdldC5hY3RpdmVTb3VyY2UpIHtcbiAgICAgICAgd2hlcmUgPSBgT1dORVIgbGlrZSAnJHtldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCl9JScgT1IgUkVJRCBsaWtlICcke2V2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKX0lJyBPUiBQSU5fTlVNIGxpa2UgJyR7ZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUnYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgodGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIGFzIGFueSk/LnNlYXJjaEZpZWxkcy5pbmNsdWRlcygnT1dORVInKSkge1xuICAgICAgICAgIHdoZXJlID0gYE9XTkVSIGxpa2UgJyUke2V2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKX0lJ2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0aGlzLnNlYXJjaFdpZGdldC5hY3RpdmVTb3VyY2UgYXMgYW55KT8uc2VhcmNoRmllbGRzLmluY2x1ZGVzKCdQSU5fTlVNJykpIHtcbiAgICAgICAgICB3aGVyZSA9IGBQSU5fTlVNIGxpa2UgJyUke2V2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKX0lJ2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0aGlzLnNlYXJjaFdpZGdldC5hY3RpdmVTb3VyY2UgYXMgYW55KT8uc2VhcmNoRmllbGRzLmluY2x1ZGVzKCdSRUlEJykpIHtcbiAgICAgICAgICB3aGVyZSA9IFwiUkVJRCBsaWtlICclXCIgKyBldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkgKyBcIiUnXCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHRhYmxlRmVhdHVyZXM6IGFueVtdID0gW107XG5cbiAgICAgIHRoaXMuY29uZG9zVGFibGUucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiB3aGVyZSwgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHRhYmxlRmVhdHVyZXMgPSByZXN1bHQuZmVhdHVyZXM7XG4gICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSB8fFxuICAgICAgICAgICh0aGlzLnNlYXJjaFdpZGdldC5hY3RpdmVTb3VyY2UgYXMgYW55KT8uc2VhcmNoRmllbGRzLmluY2x1ZGVzKCdBRERSRVNTJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgd2hlcmUgPSBgQUREUkVTUyBsaWtlICclJHtldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCl9JSdgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdoZXJlID0gJ0FERFJFU1MgSVMgTlVMTCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6IHdoZXJlLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmFkZHJlc3NUYWJsZS5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgICByZXR1cm4gci5uYW1lID09PSAnQUREUkVTU0VTX0NPTkRPJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBhZGRyT2lkczogYW55W10gPSBbXTtcbiAgICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgIGFkZHJPaWRzLnB1c2goZi5nZXRPYmplY3RJZCgpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocmVsYXRpb25zaGlwICYmIGFkZHJPaWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hZGRyZXNzVGFibGVcbiAgICAgICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcC5pZCwgb2JqZWN0SWRzOiBhZGRyT2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlRmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IHRoaXMuY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIodGhpcy5jb25kb3NUYWJsZS5maWVsZHMsIHRhYmxlRmVhdHVyZXMpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcbiAgICAgICAgICAgICAgICBpZiAodGFibGVGZWF0dXJlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYyA9IG5ldyBHcmFwaGljKCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLnJlbmRlck5vdygpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgdGFibGVGZWF0dXJlcyk7XG4gICAgICAgICAgICBpZiAodGFibGVGZWF0dXJlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gbmV3IEdyYXBoaWMoKTtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUucmVuZGVyTm93KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZXZlbnQubnVtUmVzdWx0cykge1xuICAgICAgICBsZXQgbGF5ZXIgPSAoZXZlbnQucmVzdWx0c1swXS5zb3VyY2UgYXMgTGF5ZXJTZWFyY2hTb3VyY2UpLmxheWVyIGFzIEZlYXR1cmVMYXllcjtcbiAgICAgICAgaWYgKCFsYXllciAmJiBldmVudC5yZXN1bHRzWzBdLnNvdXJjZS5uYW1lID09PSAnT3duZXInKSB7XG4gICAgICAgICAgbGF5ZXIgPSB0aGlzLmNvbmRvc1RhYmxlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGF5ZXIgJiYgWydTaXRlIEFkZHJlc3MnLCAnU3RyZWV0IE5hbWUnXS5pbmNsdWRlcyhldmVudC5yZXN1bHRzWzBdLnNvdXJjZS5uYW1lKSkge1xuICAgICAgICAgIGxheWVyID0gdGhpcy5hZGRyZXNzVGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgZXZlbnQucmVzdWx0c1swXS5yZXN1bHRzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKHIuZmVhdHVyZS5nZXRPYmplY3RJZCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsYXllci5sYXllcklkID09PSA0KSB7XG4gICAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwID0gbGF5ZXIucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0FERFJFU1NFU19DT05ETyc7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcCAmJiBvaWRzKSB7XG4gICAgICAgICAgICBsYXllclxuICAgICAgICAgICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwLmlkLCBvYmplY3RJZHM6IG9pZHMsIG91dEZpZWxkczogWycqJ10gfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmUubGF5ZXIgPSB0aGlzLmNvbmRvc1RhYmxlO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvcGVydHkob2lkcyk7XG4gICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gbmV3IEdyYXBoaWMoKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgndGFibGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKGZlYXR1cmVzWzBdLCB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LCBbXSwgb2lkcyk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IHRoaXMuY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIodGhpcy5jb25kb3NUYWJsZS5maWVsZHMsIGZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29uZG9zVGFibGUucXVlcnlGZWF0dXJlcyh7IG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0UHJvcGVydHkob2lkcyk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuZmVhdHVyZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYyA9IG5ldyBHcmFwaGljKCk7XG4gICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgndGFibGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZShyZXN1bHQuZmVhdHVyZXNbMF0sIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsIFtdLCBvaWRzKTtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IHRoaXMuY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIodGhpcy5jb25kb3NUYWJsZS5maWVsZHMsIHJlc3VsdC5mZWF0dXJlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHNldEZlYXR1cmUoZmVhdHVyZTogZXNyaS5HcmFwaGljLCB2aWV3OiBlc3JpLk1hcFZpZXcsIG1lZGlhSW5mb3M6IGFueVtdLCBvaWRzOiBhbnlbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ3JlaWQnLCBmZWF0dXJlLmdldEF0dHJpYnV0ZSgnUkVJRCcpKTtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCBgJHtsb2NhdGlvbi5wYXRobmFtZX0/JHtwYXJhbXN9YCk7XG4gICAgY29uc3QgcmVsYXRpb25zaGlwID0gdGhpcy5jb25kb3NUYWJsZS5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICByZXR1cm4gci5uYW1lID09PSAnQ09ORE9fUEhPVE9TJztcbiAgICB9KTtcbiAgICBjb25zdCBvaWQgPSBmZWF0dXJlLmdldE9iamVjdElkKCk7XG4gICAgbWVkaWFJbmZvcyA9IFtdO1xuICAgIHRoaXMuY29uZG9zVGFibGVcbiAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXA/LmlkLCBvYmplY3RJZHM6IG9pZHMsIG91dEZpZWxkczogWycqJ10gfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgbWVkaWFJbmZvcy5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgICBjYXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBzb3VyY2VVUkw6IGBodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vcmVhbGVzdGF0ZS9waG90b3MvbXZpZGVvLyR7ZmVhdHVyZS5nZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAnSU1BR0VESVInXG4gICAgICAgICAgICAgICAgKX0vJHtmZWF0dXJlLmdldEF0dHJpYnV0ZSgnSU1BR0VOQU1FJyl9YFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZWRpYSA9ICh0aGlzLmNvbmRvc1RhYmxlLnBvcHVwVGVtcGxhdGUuY29udGVudCBhcyBlc3JpLkNvbnRlbnRbXSkuZmluZCgoY29udGVudDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRlbnQ/LnR5cGUgPT09ICdtZWRpYSc7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAobWVkaWEgYXMgZXNyaS5NZWRpYUNvbnRlbnQpLm1lZGlhSW5mb3MgPSBtZWRpYUluZm9zO1xuICAgICAgICB9XG4gICAgICAgIGZlYXR1cmUubGF5ZXIgPSB0aGlzLmNvbmRvc1RhYmxlO1xuICAgICAgICBmZWF0dXJlLnBvcHVwVGVtcGxhdGUgPSAoZmVhdHVyZS5sYXllciBhcyBlc3JpLkZlYXR1cmVMYXllcikucG9wdXBUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBmZWF0dXJlO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZlYXR1cmUuZ3JhcGhpYy5hdHRyaWJ1dGVzKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVEaXYnKT8uc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMuc3ltYm9sID0gdGhpcy5zaW5nbGVTeW1ib2wgYXMgYW55O1xuICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYy5zZXRBdHRyaWJ1dGUoJ09CSkVDVElEJywgb2lkKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLmZpbmQoZ3JhcGhpYyA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdzZWxlY3RlZCcpID09PSAndHJ1ZSc7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICBzZWxlY3RlZC5zeW1ib2wgPSB0aGlzLm11bHRpU3ltYm9sIGFzIGFueTtcbiAgICAgICAgICBzZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JhcGhpYyA9IHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MuZmluZChncmFwaGljID0+IHtcbiAgICAgICAgICByZXR1cm4gZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ1JFSUQnKSA9PT0gZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ1JFSUQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChncmFwaGljKSB7XG4gICAgICAgICAgZ3JhcGhpYy5zeW1ib2wgPSB0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnk7XG5cbiAgICAgICAgICBncmFwaGljLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MucmVvcmRlcihncmFwaGljLCB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuICBleHBvcnRUYWJsZSgpIHtcbiAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllci5xdWVyeUZlYXR1cmVzKHsgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBsZXQgY3N2ID0gJyc7XG4gICAgICByZXN1bHQuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICBjc3YgKz0gYCR7ZmllbGQuYWxpYXN9LGA7XG4gICAgICB9KTtcbiAgICAgIGNzdiArPSAnXFxyXFxuJztcbiAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmZWF0dXJlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBpZiAoa2V5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2RhdGUnKSkge1xuICAgICAgICAgICAgY3N2ICs9IGBcIiR7bmV3IERhdGUoZmVhdHVyZS5hdHRyaWJ1dGVzW2tleV0pLnRvRGF0ZVN0cmluZygpfVwiLGA7XG4gICAgICAgICAgfSBlbHNlIGlmIChrZXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnYWNyZXMnKSkge1xuICAgICAgICAgICAgY3N2ICs9IGBcIiR7cGFyc2VGbG9hdChmZWF0dXJlLmF0dHJpYnV0ZXNba2V5XSkudG9GaXhlZCgyKX1cIixgO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc3YgKz0gYFwiJHtmZWF0dXJlLmF0dHJpYnV0ZXNba2V5XX1cIixgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjc3YgKz0gJ1xcclxcbic7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGV4cG9ydGVkRmlsZW5tYWUgPSAnaW1hcHNfZXhwb3J0LmNzdic7XG5cbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY3N2XSwgeyB0eXBlOiAndGV4dC9jc3Y7Y2hhcnNldD11dGYtODsnIH0pO1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGlmIChsaW5rLmRvd25sb2FkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gZmVhdHVyZSBkZXRlY3Rpb25cbiAgICAgICAgLy8gQnJvd3NlcnMgdGhhdCBzdXBwb3J0IEhUTUw1IGRvd25sb2FkIGF0dHJpYnV0ZVxuICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGV4cG9ydGVkRmlsZW5tYWUpO1xuICAgICAgICBsaW5rLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2hlY2tTZWFyY2hQYXJhbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG4gICAgY29uc3QgcmVpZCA9IHBhcmFtcy5nZXQoJ3JlaWQnKTtcbiAgICBjb25zdCBwaW4gPSBwYXJhbXMuZ2V0KCdwaW4nKTtcbiAgICBsZXQgd2hlcmUgPSAnJztcbiAgICBpZiAocmVpZCB8fCBwaW4pIHtcbiAgICAgIGlmIChyZWlkKSB7XG4gICAgICAgIHdoZXJlID0gYFJFSUQgSU4gKCcke3JlaWQuc3BsaXQoJywnKS5qb2luKFwiJywnXCIpfScpYDtcbiAgICAgIH0gZWxzZSBpZiAocGluKSB7XG4gICAgICAgIHdoZXJlID0gYFBJTl9OVU0gPSAnJHtwaW59J2A7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbmRvc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogd2hlcmUsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcblxuICAgICAgICBpZiAocmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYyA9IG5ldyBHcmFwaGljKCk7XG4gICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZShyZXN1bHQuZmVhdHVyZXNbMF0sIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsIFtdLCBvaWRzKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IHRoaXMuY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIodGhpcy5jb25kb3NUYWJsZS5maWVsZHMsIHJlc3VsdC5mZWF0dXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICB2aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljcywgdmlldy5tYXAuYWxsTGF5ZXJzLmxlbmd0aCAtIDEpO1xuICAgIHRoaXMuY2x1c3RlclBvaW50cyA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgc291cmNlOiBbXSxcbiAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCcsXG4gICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICBtYXhTY2FsZTogMTkyMDEsXG4gICAgICBsaXN0TW9kZTogJ2hpZGUnLFxuICAgICAgbGVnZW5kRW5hYmxlZDogZmFsc2UsXG4gICAgICByZW5kZXJlcjoge1xuICAgICAgICB0eXBlOiAnc2ltcGxlJyxcbiAgICAgICAgc3ltYm9sOiB7XG4gICAgICAgICAgdHlwZTogJ3NpbXBsZS1tYXJrZXInLFxuICAgICAgICAgIHNpemU6IDQsXG4gICAgICAgICAgY29sb3I6ICcjNjlkY2ZmJyxcbiAgICAgICAgICBvdXRsaW5lOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwgMTM5LCAxNzQsIDAuNSknLFxuICAgICAgICAgICAgd2lkdGg6IDVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gYXMgYW55LFxuICAgICAgZmVhdHVyZVJlZHVjdGlvbjoge1xuICAgICAgICB0eXBlOiAnY2x1c3RlcicsXG4gICAgICAgIGxhYmVsaW5nSW5mbzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIHR1cm4gb2ZmIGRlY29uZmxpY3Rpb24gdG8gZW5zdXJlIGFsbCBjbHVzdGVycyBhcmUgbGFiZWxlZFxuICAgICAgICAgICAgZGVjb25mbGljdGlvblN0cmF0ZWd5OiAnbm9uZScsXG4gICAgICAgICAgICBsYWJlbEV4cHJlc3Npb25JbmZvOiB7XG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiVGV4dCgkZmVhdHVyZS5jbHVzdGVyX2NvdW50LCAnIywjIyMnKVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3ltYm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDA0YTVkJyxcbiAgICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICAgIHdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgICAgIGZhbWlseTogJ05vdG8gU2FucycsXG4gICAgICAgICAgICAgICAgc2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gYXMgYW55LFxuICAgICAgICAgICAgbGFiZWxQbGFjZW1lbnQ6ICdjZW50ZXItY2VudGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHRoaXMudmlldy5zcGF0aWFsUmVmZXJlbmNlXG4gICAgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC5hZGQodGhpcy5jbHVzdGVyUG9pbnRzKTtcbiAgICB0aGlzLmNoZWNrU2VhcmNoUGFyYW1zKCk7XG4gIH1cblxuICBnZXRTdWdnZXN0aW9ucyA9IChcbiAgICBwYXJhbXM6IGFueSxcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgbGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyLFxuICAgIG91dEZpZWxkczogc3RyaW5nW10sXG4gICAgb3JkZXJCeUZpZWxkczogc3RyaW5nW10sXG4gICAgc2VhcmNoRmllbGRzOiBzdHJpbmdbXSxcbiAgICBzdGFydHNXaXRoOiBib29sZWFuXG4gICkgPT4ge1xuICAgIGNvbnN0IHdoZXJlQXJyYXk6IHN0cmluZ1tdID0gW107XG4gICAgc2VhcmNoRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgaWYgKHN0YXJ0c1dpdGgpIHtcbiAgICAgICAgd2hlcmVBcnJheS5wdXNoKGAke2ZpZWxkfSBMSUtFICcke3BhcmFtcy5zdWdnZXN0VGVybS50b1VwcGVyQ2FzZSgpfSUnYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGVyZUFycmF5LnB1c2goYCR7ZmllbGR9IExJS0UgJyUke3BhcmFtcy5zdWdnZXN0VGVybS50b1VwcGVyQ2FzZSgpfSUnYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxheWVyXG4gICAgICAucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgIHJldHVybkRpc3RpbmN0VmFsdWVzOiB0cnVlLFxuICAgICAgICBvdXRGaWVsZHM6IG91dEZpZWxkcyxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICAgICAgICBvcmRlckJ5RmllbGRzOiBvcmRlckJ5RmllbGRzLFxuICAgICAgICB3aGVyZTogd2hlcmVBcnJheS5qb2luKCcgT1IgJylcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMuZmVhdHVyZXNcbiAgICAgICAgICAuZmlsdGVyKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFvdXRGaWVsZHMuaW5jbHVkZXMoJ0FERFJfTElTVCcpIHx8IGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdBRERSX0xJU1QnKSA9PT0gJ1llcyc7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAubWFwKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2V5OiBuYW1lLFxuICAgICAgICAgICAgICB0ZXh0OiBmZWF0dXJlLmdldEF0dHJpYnV0ZShvdXRGaWVsZHNbMF0pLFxuICAgICAgICAgICAgICBzb3VyY2VJbmRleDogcGFyYW1zLnNvdXJjZUluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG4gIGluaXRTZWFyY2goY29uZG9zVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyKSB7XG4gICAgY29uc3QgdGFibGVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgZmllbGRzOiBbXG4gICAgICAgIHsgbmFtZTogJ1NJVEVfQUREUkVTUycsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ0FkZHJlc3MnIH0sXG4gICAgICAgIHsgbmFtZTogJ09XTkVSJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnT3duZXInIH0sXG4gICAgICAgIHsgbmFtZTogJ1BJTl9OVU0nLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdQSU4nIH0sXG4gICAgICAgIHsgbmFtZTogJ1JFSUQnLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdSRUlEJyB9XG4gICAgICBdLFxuICAgICAgc291cmNlOiBbXSxcbiAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnLFxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogdGhpcy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgICB9KTtcbiAgICB0aGlzLmZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7IHZpZXc6IHRoaXMudmlldyB9KTtcblxuICAgIHRoaXMuZmVhdHVyZVRhYmxlID0gbmV3IEZlYXR1cmVUYWJsZSh7XG4gICAgICB2aWV3OiB0aGlzLnZpZXcsXG4gICAgICBsYXllcjogdGFibGVMYXllcixcbiAgICAgIGZpZWxkQ29uZmlnczogW1xuICAgICAgICBuZXcgRmllbGRDb2x1bW5Db25maWcoe1xuICAgICAgICAgIG5hbWU6ICdTSVRFX0FERFJFU1MnLFxuICAgICAgICAgIGxhYmVsOiAnQWRkcmVzcycsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgRmllbGRDb2x1bW5Db25maWcoe1xuICAgICAgICAgIG5hbWU6ICdPV05FUicsXG4gICAgICAgICAgbGFiZWw6ICdPd25lcicsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgRmllbGRDb2x1bW5Db25maWcoe1xuICAgICAgICAgIG5hbWU6ICdQSU5fTlVNJyxcbiAgICAgICAgICBsYWJlbDogJ1BJTicsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgRmllbGRDb2x1bW5Db25maWcoe1xuICAgICAgICAgIG5hbWU6ICdSRUlEJyxcbiAgICAgICAgICBsYWJlbDogJ1JFSUQnLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIG1lbnVDb25maWc6IHtcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAoe1xuICAgICAgICAgICAgbGFiZWw6ICdFeHBvcnQnXG4gICAgICAgICAgfSBhcyB1bmtub3duKSBhcyBNZW51QnV0dG9uSXRlbVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgYnV0dG9uOiBNZW51QnV0dG9uSXRlbSA9IHRoaXMuZmVhdHVyZVRhYmxlPy5tZW51Q29uZmlnPy5pdGVtcz8uZmluZChpdGVtID0+IHtcbiAgICAgIHJldHVybiBpdGVtLmxhYmVsID09PSAnRXhwb3J0JztcbiAgICB9KSBhcyBNZW51QnV0dG9uSXRlbTtcbiAgICBidXR0b24uY2xpY2tGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgIHRoaXMuZXhwb3J0VGFibGUoKTtcbiAgICB9O1xuICAgIGJ1dHRvbi5jbGlja0Z1bmN0aW9uLmJpbmQodGhpcy5mZWF0dXJlVGFibGUpO1xuXG4gICAgdGhpcy5mZWF0dXJlVGFibGUub24oJ3NlbGVjdGlvbi1jaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAodGhpcy5mZWF0dXJlVGFibGUgYXMgYW55KS5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgaWYgKGV2ZW50LmFkZGVkLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmdldFByb3BlcnR5KFtldmVudC5hZGRlZFswXS5mZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKV0sICd0YWJsZScpO1xuICAgICAgICB0aGlzLnNldEZlYXR1cmUoXG4gICAgICAgICAgZXZlbnQuYWRkZWRbMF0uZmVhdHVyZSxcbiAgICAgICAgICB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LFxuICAgICAgICAgIFtdLFxuICAgICAgICAgIFtldmVudC5hZGRlZFswXS5mZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKV1cbiAgICAgICAgKTtcbiAgICAgICAgZXZlbnQuYWRkZWRbMF0uZmVhdHVyZS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hXaWRnZXQgPSBuZXcgU2VhcmNoKHtcbiAgICAgIGFsbFBsYWNlaG9sZGVyOiAnQWRkcmVzcywgb3duZXIsIFBJTiwgb3IgUkVJRCcsXG4gICAgICBpbmNsdWRlRGVmYXVsdFNvdXJjZXM6IGZhbHNlLFxuICAgICAgY29udGFpbmVyOiAnc2VhcmNoJyxcbiAgICAgIHNvdXJjZXM6IFtcbiAgICAgICAgLy8gbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgLy8gICBsYXllcjogdGhpcy5hZGRyZXNzVGFibGUsXG4gICAgICAgIC8vICAgc2VhcmNoRmllbGRzOiBbJ0FERFJFU1MnLCAnQUREUkVTU19OT0RJUiddLFxuICAgICAgICAvLyAgIGRpc3BsYXlGaWVsZDogJ0FERFJFU1MnLFxuICAgICAgICAvLyAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAvLyAgIG91dEZpZWxkczogWydBRERSRVNTJywgJ1JFQV9SRUlEJ10sXG4gICAgICAgIC8vICAgbmFtZTogJ1NpdGUgQWRkcmVzcycsXG4gICAgICAgIC8vICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiAyMjIgVyBIQVJHRVRUJ1xuICAgICAgICAvLyB9KSxcbiAgICAgICAgbmV3IFNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiAyMjIgVyBIQVJHRVRUIFNUJyxcbiAgICAgICAgICBuYW1lOiAnU2l0ZSBBZGRyZXNzJyxcbiAgICAgICAgICBnZXRTdWdnZXN0aW9uczogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWdnZXN0aW9ucyhcbiAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICAnU2l0ZSBBZGRyZXNzJyxcbiAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzVGFibGUsXG4gICAgICAgICAgICAgIFsnQUREUkVTUycsICdBRERSX0xJU1QnXSxcbiAgICAgICAgICAgICAgWydBRERSRVNTJ10sXG4gICAgICAgICAgICAgIFsnQUREUkVTUycsICdBRERSRVNTX05PRElSJ10sXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRSZXN1bHRzOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZHJlc3NUYWJsZVxuICAgICAgICAgICAgICAucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IGBBRERSRVNTID0gJyR7cGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dC50b1VwcGVyQ2FzZSgpfSdgLFxuICAgICAgICAgICAgICAgIG91dEZpZWxkczogWydBRERSRVNTJywgJ1JFQV9SRUlEJywgJ09CSkVDVElEJ11cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZTogZmVhdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0FkZHJlc3MnXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KSBhcyBhbnk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGFzIGFueSksXG4gICAgICAgIC8vIG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgIC8vICAgbGF5ZXI6IGNvbmRvc1RhYmxlLFxuICAgICAgICAvLyAgIHNlYXJjaEZpZWxkczogWydPV05FUiddLFxuICAgICAgICAvLyAgIGRpc3BsYXlGaWVsZDogJ09XTkVSJyxcbiAgICAgICAgLy8gICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgLy8gICBvdXRGaWVsZHM6IFsnT1dORVInLCAnUkVJRCcsICdPQkpFQ1RJRCddLFxuICAgICAgICAvLyAgIG5hbWU6ICdPd25lcicsXG4gICAgICAgIC8vICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiBTTUlUSCwgSk9ITidcbiAgICAgICAgLy8gfSksXG4gICAgICAgIG5ldyBTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogU01JVEgsIEpPSE4nLFxuICAgICAgICAgIG5hbWU6ICdPd25lcicsXG4gICAgICAgICAgZ2V0U3VnZ2VzdGlvbnM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3VnZ2VzdGlvbnMocGFyYW1zLCAnT3duZXInLCB0aGlzLmNvbmRvc1RhYmxlLCBbJ09XTkVSJ10sIFsnT1dORVInXSwgWydPV05FUiddLCBmYWxzZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRSZXN1bHRzOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRvc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogYE9XTkVSID0gJyR7cGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dC50b1VwcGVyQ2FzZSgpfSdgLFxuICAgICAgICAgICAgICAgIG91dEZpZWxkczogWydPV05FUicsICdPQkpFQ1RJRCddXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGZlYXR1cmUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdPd25lcidcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pIGFzIGFueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYXMgYW55KSxcbiAgICAgICAgbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgICAgc2VhcmNoRmllbGRzOiBbJ1BJTl9OVU0nXSxcbiAgICAgICAgICBkaXNwbGF5RmllbGQ6ICdQSU5fTlVNJyxcbiAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnUElOX05VTScsICdSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgICAgbmFtZTogJ1BJTicsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiAwNzEyMzQ1Njc4J1xuICAgICAgICB9KSxcbiAgICAgICAgbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgICAgc2VhcmNoRmllbGRzOiBbJ1JFSUQnXSxcbiAgICAgICAgICBkaXNwbGF5RmllbGQ6ICdSRUlEJyxcbiAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnUkVJRCcsICdPQkpFQ1RJRCddLFxuICAgICAgICAgIG5hbWU6ICdSRUlEJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDAxMjM0NTYnXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IFcgSEFSR0VUVCBTVCcsXG4gICAgICAgICAgbmFtZTogJ1N0cmVldCBOYW1lJyxcbiAgICAgICAgICBnZXRTdWdnZXN0aW9uczogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWdnZXN0aW9ucyhcbiAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICAnU3RyZWV0IE5hbWUnLFxuICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZSxcbiAgICAgICAgICAgICAgWydTVFJFRVQnLCAnQUREUl9MSVNUJ10sXG4gICAgICAgICAgICAgIFsnU1RSRUVUJ10sXG4gICAgICAgICAgICAgIFsnU1RSRUVUJywgJ1NUUkVFVF9OT0RJUiddLFxuICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFJlc3VsdHM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkcmVzc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogYFNUUkVFVCA9ICcke3BhcmFtcy5zdWdnZXN0UmVzdWx0LnRleHQudG9VcHBlckNhc2UoKX0nYCxcbiAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFsnU1RSRUVUJywgJ1JFQV9SRUlEJywgJ09CSkVDVElEJ11cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZTogZmVhdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1N0cmVldCBOYW1lJ1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICBdXG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hXaWRnZXQudmlld01vZGVsLndhdGNoKCdyZXN1bHRzJywgZXZlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VhcmNoV2lkZ2V0Lm9uKCdzZWFyY2gtY29tcGxldGUnLCB0aGlzLnNlYXJjaENvbXBsZXRlKTtcbiAgfVxuICB0b2dnbGVDb250ZW50ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgPT09ICd0YWJsZScpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZUl0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZUl0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5pbXBvcnQgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgZnJvbSAnLi9Qcm9wZXJ0eVNlYXJjaC9Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCc7XG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5U2VhcmNoUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgcHJvcGVydHlMYXllcj86IGVzcmkuRmVhdHVyZUxheWVyO1xuICBjb25kb3NUYWJsZT86IGVzcmkuRmVhdHVyZUxheWVyO1xuICBhZGRyZXNzVGFibGU/OiBlc3JpLkZlYXR1cmVMYXllcjtcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgcHJvcGVydHlzZWFyY2gtYmFzZSdcbn07XG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLlByb3BlcnR5U2VhcmNoJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnR5U2VhcmNoIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuY29uZG9zVGFibGUnKVxuICBjb25kb3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYWRkcmVzc1RhYmxlJylcbiAgYWRkcmVzc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5wcm9wZXJ0eUxheWVyJylcbiAgcHJvcGVydHlMYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuc2VhcmNoV2lkZ2V0JylcbiAgc2VhcmNoV2lkZ2V0OiBlc3JpLndpZGdldHNTZWFyY2g7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZmVhdHVyZVRhYmxlJylcbiAgZmVhdHVyZVRhYmxlOiBlc3JpLkZlYXR1cmVUYWJsZTtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5mZWF0dXJlJylcbiAgZmVhdHVyZTogZXNyaS5GZWF0dXJlO1xuICBAYWxpYXNPZigndmlld01vZGVsLmdlb21ldHJ5JylcbiAgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgPSBuZXcgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogUHJvcGVydHlTZWFyY2hQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfY3JlYXRlU2VhcmNoID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNlYXJjaFdpZGdldCkge1xuICAgICAgdGhpcy5zZWFyY2hXaWRnZXQuY29udGFpbmVyID0gJ3NlYXJjaCc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlVGFibGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZVRhYmxlKSB7XG4gICAgICB0aGlzLmZlYXR1cmVUYWJsZS5jb250YWluZXIgPSAndGFibGUnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZUZlYXR1cmUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZSkge1xuICAgICAgdGhpcy5mZWF0dXJlLmNvbnRhaW5lciA9ICdmZWF0dXJlRGl2JztcbiAgICB9XG4gIH07XG5cbiAgY3VycmVudFJhZGlvQnV0dG9uID0gJ2xpc3QnO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaWRlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUmFkaW9Hcm91cEl0ZW1DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgIC8vIGNhbiBJIGdldCBjaGVja2VkIGFuZCB2YWx1ZSBsaWtlIHRoaXM/XG4gICAgICAgIGlmIChlLnRhcmdldD8uY2hlY2tlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgICAgdGhpcy52aWV3TW9kZWwudG9nZ2xlQ29udGVudChlLnRhcmdldD8udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zdCBmZWF0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVEaXYnKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JvbGxBcnJvdycpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGZlYXREaXY/LnNjcm9sbEJ5KHsgdG9wOiBmZWF0RGl2Lm9mZnNldEhlaWdodCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IHRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xuICAgIGlmICh0aGVtZSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fycm93UGF0aCcpPy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHRoZW1lID09PSAnbGlnaHQnID8gJ2JsYWNrJyA6ICd3aGl0ZScpO1xuICAgIH1cblxuICAgIGZlYXREaXY/LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIGlmIChmZWF0RGl2LnNjcm9sbFRvcCA+PSBmZWF0RGl2LnNjcm9sbEhlaWdodCAtIGZlYXREaXYub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JvbGxBcnJvdycpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JvbGxBcnJvdycpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVTZWFyY2h9IGlkPVwic2VhcmNoXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZVRhYmxlfSBpZD1cInRhYmxlXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJmZWF0dXJlXCIgY2xhc3M9XCJoaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiZmVhdHVyZURpdlwiIGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVGZWF0dXJlfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBpZD1cInNjcm9sbEFycm93XCJcbiAgICAgICAgICAgIGNsYXNzPVwiaG9tZS1wYWdlX19zY3JvbGwtZG93bi1hcnJvdyBob21lLXBhZ2VfX3Njcm9sbC1kb3duLWFycm93LS1ibGFja1wiXG4gICAgICAgICAgICBkYXRhLWRvam8tYXR0YWNoLXBvaW50PVwiYXJyb3dDb250YWluZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAzMiAzMlwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIGNsYXNzPVwiaWNvbi1pbmxpbmUgIFwiPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiYXJyb3dQYXRoXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgc3Ryb2tlLW9wYWNpdHk9XCIwLjVcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMTYuNSAyNy4yMDdsLTQuODU0LTQuODU0LjcwNy0uNzA3TDE2IDI1LjI5M1Y1aDF2MjAuMjkzbDMuNjQ2LTMuNjQ2LjcwNy43MDd6XCJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdmFsdWU9XCJ0YWJsZVwiIGlkPVwidGFibGVJdGVtXCI+XG4gICAgICAgICAgICBMaXN0XG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB2YWx1ZT1cImZlYXR1cmVcIiBpZD1cImZlYXR1cmVJdGVtXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICBEZXRhaWxzXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IE1lYXN1cmVtZW50IGZyb20gJ2Vzcmkvd2lkZ2V0cy9NZWFzdXJlbWVudCc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTWVhc3VyZS5NZWFzdXJlVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmVWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG4gIG1lYXN1cmVtZW50OiBlc3JpLk1lYXN1cmVtZW50O1xuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gIH1cbiAgbWVhc3VyZU9wZW5lZCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVhc3VyZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwJykgYXMgYW55KS5zZWxlY3RlZEl0ZW0udGl0bGU7XG4gICAgaWYgKHNlbGVjdGVkICE9ICdjbGVhcicpIHtcbiAgICAgIHRoaXMubWVhc3VyZW1lbnQuYWN0aXZlVG9vbCA9IHNlbGVjdGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lYXN1cmVtZW50LmNsZWFyKCk7XG4gICAgfVxuICB9XG4gIGluaXRNZWFzdXJlKCkge1xuICAgIHRoaXMubWVhc3VyZW1lbnQgPSBuZXcgTWVhc3VyZW1lbnQoeyB2aWV3OiB0aGlzLnZpZXcsIGNvbnRhaW5lcjogJ21lYXN1cmVXaWRnZXQnIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBNZWFzdXJlVmlld01vZGVsIGZyb20gJy4vTWVhc3VyZS9NZWFzdXJlVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBNZWFzdXJlUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbWVhc3VyZS1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5NZWFzdXJlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmUgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5tZWFzdXJlbWVudCcpXG4gIG1lYXN1cmVtZW50OiBlc3JpLk1lYXN1cmVtZW50O1xuICBAYWxpYXNPZigndmlld01vZGVsLmluaXRNZWFzdXJlJylcbiAgaW5pdE1lYXN1cmU6IEZ1bmN0aW9uO1xuICBAYWxpYXNPZigndmlld01vZGVsLm1lYXN1cmVPcGVuZWQnKVxuICBtZWFzdXJlT3BlbmVkOiBGdW5jdGlvbjtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IE1lYXN1cmVWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IE1lYXN1cmVWaWV3TW9kZWwgPSBuZXcgTWVhc3VyZVZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBNZWFzdXJlUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX21lYXN1cmVDcmVhdGVkID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdE1lYXN1cmUoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVhc3VyZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQ/LmNoZWNrZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldD8udGl0bGUpO1xuICAgICAgICAgIGlmIChlLnRhcmdldD8udGl0bGUgPT09ICdjbGVhcicpIHtcbiAgICAgICAgICAgIHRoaXMubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudC5hY3RpdmVUb29sID0gZS50YXJnZXQ/LnRpdGxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSBjaGVja2VkIHRpdGxlPVwiZGlzdGFuY2VcIiB2YWx1ZT1cImRpc3RhbmNlXCIgaWQ9XCJ0YWJsZUl0ZW1cIiBpY29uPVwibWVhc3VyZVwiPlxuICAgICAgICAgICAgTGluZVxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdGl0bGU9XCJhcmVhXCIgdmFsdWU9XCJhcmVhXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGljb249XCJtZWFzdXJlLWFyZWFcIj5cbiAgICAgICAgICAgIEFyZWFcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHRpdGxlPVwiY2xlYXJcIiB2YWx1ZT1cImNsZWFyXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGljb249XCJ0cmFzaFwiPlxuICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9tZWFzdXJlQ3JlYXRlZH0gaWQ9XCJtZWFzdXJlV2lkZ2V0XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgUG9wdXBUZW1wbGF0ZSBmcm9tICdlc3JpL1BvcHVwVGVtcGxhdGUnO1xuaW1wb3J0IEV4cHJlc3Npb25JbmZvIGZyb20gJ2VzcmkvcG9wdXAvRXhwcmVzc2lvbkluZm8nO1xuaW1wb3J0IEN1c3RvbUNvbnRlbnQgZnJvbSAnZXNyaS9wb3B1cC9jb250ZW50L0N1c3RvbUNvbnRlbnQnO1xuaW1wb3J0IExvY2F0b3IgZnJvbSAnZXNyaS90YXNrcy9Mb2NhdG9yJztcbmltcG9ydCBnZW9kZXNpY1V0aWxzIGZyb20gJ2VzcmkvZ2VvbWV0cnkvc3VwcG9ydC9nZW9kZXNpY1V0aWxzJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlJztcbmltcG9ydCB7IHZpZXcgfSBmcm9tICcuLic7XG5jb25zdCBhcmNhZGVFeHByZXNzaW9uSW5mb3MgPSBbXG4gIHtcbiAgICBuYW1lOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICB0aXRsZTogJ21haWxpbmctYWRkcmVzcycsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdXaGVuKElzRW1wdHkoJGZlYXR1cmUuQUREUjMpLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIzKSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgIHRpdGxlOiAncHJvcGVydHktdmFsdWVzJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1wiQnVpbGRpbmcgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkJMREdfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJMYW5kIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5MQU5EX1ZBTCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG90YWwgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLlRPVEFMX1ZBTFVFX0FTU0QnXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6ICdwaW4nLFxuICAgIHRpdGxlOiAnUElOJyxcbiAgICBleHByZXNzaW9uOiBcInZhciBudW0gPSAkZmVhdHVyZS5QSU5fTlVNO3ZhciBleHQgPSAkZmVhdHVyZS5QSU5fRVhUO3JldHVybiBXaGVuKGV4dCA9PSAnMDAwJyxudW0sbnVtKycgJytleHQpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYnVpbGRfdmFsJyxcbiAgICB0aXRsZTogJ0J1aWxkaW5nIFZhbHVlJyxcbiAgICBleHByZXNzaW9uOiBcInZhciB2YWx1ZSA9ICRmZWF0dXJlLkJMREdfVkFMO1doZW4oSXNFbXB0eSh2YWx1ZSksJy0tJywgJyQnK1RleHQodmFsdWUsICcjLCMjIycpKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ2xhbmRfdmFsJyxcbiAgICB0aXRsZTogJ0xhbmQgVmFsdWUnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHZhbHVlID0gJGZlYXR1cmUuTEFORF9WQUw7V2hlbihJc0VtcHR5KHZhbHVlKSwnLS0nLCAnJCcrVGV4dCh2YWx1ZSwgJyMsIyMjJykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndG90YWxfdmFsJyxcbiAgICB0aXRsZTogJ1RvdGFsIFZhbHVlJyxcbiAgICBleHByZXNzaW9uOiBcInZhciB2YWx1ZSA9ICRmZWF0dXJlLlRPVEFMX1ZBTFVFX0FTU0Q7V2hlbihJc0VtcHR5KHZhbHVlKSwnLS0nLCAnJCcrVGV4dCh2YWx1ZSwgJyMsIyMjJykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnc2FsZV9wcmljZScsXG4gICAgdGl0bGU6ICdTYWxlIFByaWNlJyxcbiAgICBleHByZXNzaW9uOiBcInZhciB2YWx1ZSA9ICRmZWF0dXJlLlRPVFNBTFBSSUNFO1doZW4oSXNFbXB0eSh2YWx1ZSksJy0tJywgJyQnK1RleHQodmFsdWUsICcjLCMjIycpKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ2NpdHknLFxuICAgIHRpdGxlOiAnQ2l0eScsXG4gICAgZXhwcmVzc2lvbjogXCJ2YXIgY2l0eSA9ICRmZWF0dXJlLkNJVFlfREVDT0RFO1doZW4oSXNFbXB0eShjaXR5KSwnVW5pbmNvcnBvcmF0ZWQnLCBQcm9wZXIoY2l0eSkpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndG93bnNoaXAnLFxuICAgIHRpdGxlOiAnVG93bnNoaXAnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHRzID0gJGZlYXR1cmUuVE9XTlNISVBfREVDT0RFO1doZW4oSXNFbXB0eSh0cyksJ05vbmUnLCBQcm9wZXIodHMpKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ2p1cmlzZGljdGlvbicsXG4gICAgdGl0bGU6ICdKdXJpc2RpY3Rpb24nLFxuICAgIGV4cHJlc3Npb246XG4gICAgICAndmFyIGp1cmlzID0gJGZlYXR1cmUuUExBTk5JTkdfSlVSSVNESUNUSU9OO1doZW4oJyArXG4gICAgICBcImp1cmlzID09ICdSQScsICdSYWxlaWdoJyxcIiArXG4gICAgICBcImp1cmlzID09ICdDQScsICdDYXJ5JyxcIiArXG4gICAgICBcImp1cmlzID09ICdBUCcsICdBcGV4JyxcIiArXG4gICAgICBcImp1cmlzID09ICdBTicsICdBbmdpZXInLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0NMJywgJ0NsYXl0b24nLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0RVJywgJ0R1cmhhbScsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnRlYnLCAnRnVxdWF5LVZhcmluYScsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnR0EnLCAnR2FybmVyJyxcIiArXG4gICAgICBcImp1cmlzID09ICdIUycsICdIb2xseSBTcHJpbmdzJyxcIiArXG4gICAgICBcImp1cmlzID09ICdLTicsICdLbmlnaHRkYWxlJyxcIiArXG4gICAgICBcImp1cmlzID09ICdNTycsICdNb3JyaXN2aWxsZScsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnUk8nLCAnUm9sZXN2aWxsZScsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnV0YnLCAnV2FrZSBGb3Jlc3QnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ1dFJywgJ1dlbmRlbGwnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ1pCJywgJ1plYnVsb24nLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ1dDJywgJ1dha2UgQ291bnR5JyxcIiArXG4gICAgICBcIiAnV2FrZSBDb3VudHknKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ2dlbmVyYWwnLFxuICAgIHRpdGxlOiAnZ2VuZXJhbCcsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdcIlBJTlwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJGZlYXR1cmUuUElOX05VTStcIiBcIiskZmVhdHVyZS5QSU5fRVhUK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAnXCJSRUlEXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5SRUlEK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJDaXR5XCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICdQcm9wZXIoJGZlYXR1cmUuQ0lUWV9ERUNPREUpK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJKdXJpc2RpY3Rpb25cIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgJyRmZWF0dXJlLlBMQU5OSU5HX0pVUklTRElDVElPTitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG93bnNoaXBcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1Byb3BlcigkZmVhdHVyZS5UT1dOU0hJUF9ERUNPREUpJ1xuICB9XG5dIGFzIEV4cHJlc3Npb25JbmZvW107XG5jb25zdCBzZXJ2aWNlczogYW55W10gPSBbXG4gIHtcbiAgICBncm91cDoge1xuICAgICAgdGl0bGU6ICdFbGVjdG9yYWwnLFxuICAgICAgbGF5ZXJzOiBbXG4gICAgICAgICdQcmVjaW5jdHMnLFxuICAgICAgICAnQ29uZ3Jlc3Npb25hbCBEaXN0cmljdHMnLFxuICAgICAgICAnTkMgSG91c2Ugb2YgUmVwcmVzZW50YXRpdmVzIERpc3RyaWN0cycsXG4gICAgICAgICdOQyBTZW5hdGUgRGlzdHJpY3RzJyxcbiAgICAgICAgJ1NjaG9vbCBCb2FyZCBEaXN0cmljdHMnLFxuICAgICAgICAnQm9hcmQgb2YgQ29tbWlzc2lvbmVycyBEaXN0cmljdHMnLFxuICAgICAgICAnU3VwZXJpb3IgQ291cnQgRGlzdHJpY3RzJyxcbiAgICAgICAgJ1JhbGVpZ2ggQ2l0eSBDb3VuY2lsJyxcbiAgICAgICAgJ01vcnJpc3ZpbGxlIFRvd24gQ291bmNpbCBEaXN0cmljdHMnXG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgZ3JvdXA6IHtcbiAgICAgIHRpdGxlOiAnRW52aXJvbm1lbnRhbCcsXG4gICAgICBsYXllcnM6IFtcbiAgICAgICAgJ1NwZWNpYWwgRmxvb2QgSGF6YXJkIEFyZWFzIC0gRmxvb2RQbGFpbiAtIEZsb29kcGxhaW4nLFxuICAgICAgICAnU29pbHMnLFxuICAgICAgICAnQ3JpdGljYWwgV2F0ZXJzaGVkcycsXG4gICAgICAgICdXYXRlciBTdXBwbHkgV2F0ZXJzaGVkcydcbiAgICAgIF1cbiAgICB9XG4gIH1cbl07XG5cbmNvbnN0IHNjcm9sbFRvU2VydmljZSA9IChlOiBhbnkpID0+IHtcbiAgY29uc3QgcmVjdCA9IChlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtIGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVEaXYnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZGl2Py5zY3JvbGxUbyh7IHRvcDogcmVjdC50b3AgKyBkaXYuc2Nyb2xsVG9wIC0gMTU1LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gIH0sIDUwMCk7XG59O1xuY29uc3Qgc2VydmljZUNoYW5nZWQgPSAoZ3JhcGhpYzogX19lc3JpLkdyYXBoaWMsIGU6IGFueSkgPT4ge1xuICBpZiAoXG4gICAgIWUuZGV0YWlsLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW0uaGFzQXR0cmlidXRlKCdhY3RpdmUnKSAmJlxuICAgIGUuZGV0YWlsLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW0uY2hpbGRFbGVtZW50Q291bnQgPT09IDBcbiAgKSB7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1sb2FkZXInKTtcbiAgICBsb2FkZXIuc2V0QXR0cmlidXRlKCdpbmxpbmUnLCAnJyk7XG4gICAgY29uc3QgaGVhZGVyID0gZS5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1oZWFkZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICBoZWFkZXIuaW5zZXJ0QmVmb3JlKGxvYWRlciwgaGVhZGVyLmNoaWxkTm9kZXNbMV0pO1xuICAgIGNvbnN0IHNlcnZpY2VHcm91cDogYW55ID0gc2VydmljZXMuZmluZChzZXJ2aWNlID0+IHtcbiAgICAgIHJldHVybiBzZXJ2aWNlLmdyb3VwLnRpdGxlID09PSBlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtLmdldEF0dHJpYnV0ZSgnaXRlbS10aXRsZScpO1xuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPF9fZXNyaS5GZWF0dXJlU2V0PltdID0gW107XG5cbiAgICBpZiAoc2VydmljZUdyb3VwKSB7XG4gICAgICBjb25zdCBsYXllcnMgPSB2aWV3Lm1hcC5hbGxMYXllcnMuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VHcm91cC5ncm91cC5sYXllcnMuaW5jbHVkZXMobGF5ZXIudGl0bGUpO1xuICAgICAgfSk7XG4gICAgICBsYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIHByb21pc2VzLnB1c2goXG4gICAgICAgICAgKGxheWVyIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXIpLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgZ2VvbWV0cnk6IGdyYXBoaWMuZ2VvbWV0cnksXG4gICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKHJlc3VsdCA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5mZWF0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBfX2VzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgZS5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbS5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgbmV3IEZlYXR1cmUoeyBjb250YWluZXI6IGRpdiwgZ3JhcGhpYzogZmVhdHVyZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNjcm9sbFRvU2VydmljZShlKTtcbiAgICAgICAgaGVhZGVyLnJlbW92ZUNoaWxkKGxvYWRlcik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyLnJlbW92ZUNoaWxkKGxvYWRlcik7XG4gICAgICByZXR1cm4gJ05vIHNlcnZpY2VzIGZvdW5kLic7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNjcm9sbFRvU2VydmljZShlKTtcbiAgfVxufTtcbmNvbnN0IGRlZWRDcmVhdG9yID0gKGU6IGFueSkgPT4ge1xuICByZXR1cm4gKGUuZ3JhcGhpYy5sYXllciBhcyBGZWF0dXJlTGF5ZXIpXG4gICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHtcbiAgICAgIHJlbGF0aW9uc2hpcElkOiAoZS5ncmFwaGljLmxheWVyIGFzIEZlYXR1cmVMYXllcikucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgICByZXR1cm4gci5uYW1lID09PSAnQ09ORE9fQk9PS1MnO1xuICAgICAgfSk/LmlkLFxuICAgICAgb2JqZWN0SWRzOiBbZS5ncmFwaGljLmdldE9iamVjdElkKCldLFxuICAgICAgb3V0RmllbGRzOiBbJ0JPTV9ET0NfTlVNJywgJ0RFRURfRE9DX05VTSddXG4gICAgfSlcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgY29uc3QgZGVlZCA9IHJlc3VsdFtlLmdyYXBoaWMuZ2V0T2JqZWN0SWQoKV0uZmVhdHVyZXNbMF0uZ2V0QXR0cmlidXRlKCdERUVEX0RPQ19OVU0nKTtcbiAgICAgIGNvbnN0IGJvbSA9IHJlc3VsdFtlLmdyYXBoaWMuZ2V0T2JqZWN0SWQoKV0uZmVhdHVyZXNbMF0uZ2V0QXR0cmlidXRlKCdCT01fRE9DX05VTScpO1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7Jyk7XG4gICAgICBpZiAoZGVlZCkge1xuICAgICAgICBjb25zdCBkZWVkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1idXR0b24nKTtcbiAgICAgICAgZGVlZEJ0bi5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgJ3MnKTtcbiAgICAgICAgZGVlZEJ0bi5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgICAgZGVlZEJ0bi5zZXRBdHRyaWJ1dGUoJ3JvdW5kJywgJycpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZSgnaWNvbi1zdGFydCcsICdmaWxlLXRleHQnKTtcbiAgICAgICAgZGVlZEJ0bi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICdodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPScgKyBkZWVkICsgJyZSZWNvcmREYXRlPSdcbiAgICAgICAgKTtcblxuICAgICAgICBkZWVkQnRuLnRleHRDb250ZW50ID0gJ0RlZWQnO1xuICAgICAgICBkaXYuYXBwZW5kKGRlZWRCdG4pO1xuICAgICAgfVxuICAgICAgaWYgKGJvbSkge1xuICAgICAgICBjb25zdCBib21idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWJ1dHRvbicpO1xuICAgICAgICBib21idG4uc2V0QXR0cmlidXRlKCdzY2FsZScsICdzJyk7XG4gICAgICAgIGJvbWJ0bi5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgICAgYm9tYnRuLnNldEF0dHJpYnV0ZSgncm91bmQnLCAnJyk7XG4gICAgICAgIGJvbWJ0bi5zZXRBdHRyaWJ1dGUoJ2ljb24tc3RhcnQnLCAnbWFwJyk7XG4gICAgICAgIGJvbWJ0bi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD0nICsgYm9tICsgJyZSZWNvcmREYXRlPScpO1xuICAgICAgICBib21idG4udGV4dENvbnRlbnQgPSAnQm9vayBvZiBNYXBzJztcbiAgICAgICAgZGl2LmFwcGVuZChib21idG4pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGl2O1xuICAgIH0pO1xufTtcbmNvbnN0IHBvcHVwVGVtcGxhdGUgPSBuZXcgUG9wdXBUZW1wbGF0ZSh7XG4gIGV4cHJlc3Npb25JbmZvczogYXJjYWRlRXhwcmVzc2lvbkluZm9zLFxuICAvLyBjb250ZW50OiAoZXZlbnQ6IGFueSkgPT4ge1xuICAvLyAgIGNvbnN0IGdyYXBoaWMgPSBldmVudC5ncmFwaGljO1xuICAvLyAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWdyZWVuJyk7XG4gIC8vICAgY29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAvLyAgIGRpdi50ZXh0Q29udGVudCA9IGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdTSVRFX0FERFJFU1MnKTtcbiAgLy8gICByZXR1cm4gY29udGFpbmVyO1xuICAvLyB9LFxuICBjb250ZW50OiBbXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMT57U0lURV9BRERSRVNTfTwvaDE+J1xuICAgIH0sXG4gICAgbmV3IEN1c3RvbUNvbnRlbnQoe1xuICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgIGNyZWF0b3I6IChlOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBMb2NhdG9yKHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL21hcHMucmFsZWlnaG5jLmdvdi9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9Mb2NhdG9ycy9Db21wb3NpdGVMb2NhdG9yL0dlb2NvZGVTZXJ2ZXInLFxuICAgICAgICAgIG91dFNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9XG4gICAgICAgIH0pXG4gICAgICAgICAgLmFkZHJlc3NUb0xvY2F0aW9ucyh7XG4gICAgICAgICAgICBhZGRyZXNzOiB7IHNpbmdsZUxpbmU6IGUuZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ1NJVEVfQUREUkVTUycpIH0sXG4gICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoY2FuZGlkYXRlczogX19lc3JpLkFkZHJlc3NDYW5kaWRhdGVbXSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXMuZmluZChjYW5kaWRhdGUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGUuYXR0cmlidXRlc1snTG9jX25hbWUnXSA9PT0gJ1dha2VTdHJlZXRzJztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChjYW5kaWRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0ID0gZ2VvZGVzaWNVdGlscy5nZW9kZXNpY0Rpc3RhbmNlKGNhbmRpZGF0ZS5sb2NhdGlvbiwge1xuICAgICAgICAgICAgICAgICAgeDogKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWQubG9uZ2l0dWRlLFxuICAgICAgICAgICAgICAgICAgeTogKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWQubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSBhcyBhbnlcbiAgICAgICAgICAgICAgICB9IGFzIGFueSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGlzdC5kaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGlzdC5hemltdXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYmxsID1cbiAgICAgICAgICAgICAgICAgIChlLmdyYXBoaWMuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlnb24pLmNlbnRyb2lkLmxhdGl0dWRlICtcbiAgICAgICAgICAgICAgICAgICcsJyArXG4gICAgICAgICAgICAgICAgICAoZS5ncmFwaGljLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZC5sb25naXR1ZGU7XG4gICAgICAgICAgICAgICAgLy9jb25zdCBjYmxsID0gY2FuZGlkYXRlc1swXS5sb2NhdGlvbi55LnRvU3RyaW5nKCkgKyAnLCcgKyBjYW5kaWRhdGVzWzBdLmxvY2F0aW9uLngudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICdodHRwczovL21hcHMuZ29vZ2xlLmNvbT9sYXllcj1jJmNibGw9JyArIGNibGwgKyAnJmNicD0wLCcgKyBkaXN0LmF6aW11dGg/LnRvU3RyaW5nKCkgKyAnLDAsMCwwJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93Lm9wZW4oXG4gICAgICAgICAgICAgICAgLy8gICAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20/bGF5ZXI9YyZjYmxsPScgKyBjYmxsICsgJyZjYnA9MCwnICsgZGlzdC5hemltdXRoPy50b1N0cmluZygpICsgJywwLDAsMCdcbiAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdzsnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgJ3MnKTtcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgncm91bmQnLCAnJyk7XG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnaWNvbi1zdGFydCcsICdwZXJzb24nKTtcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbWFwcy5nb29nbGUuY29tP2xheWVyPWMmY2JsbD0nICsgY2JsbCArICcmY2JwPTAsJyArIGRpc3QuYXppbXV0aD8udG9TdHJpbmcoKSArICcsMCwwLDAnXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICdTdHJlZXQgVmlldyc7XG5cbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKGJ0bik7XG4gICAgICAgICAgICAgICAgY29uc3QgdGF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICB0YXguc2V0QXR0cmlidXRlKCdzY2FsZScsICdzJyk7XG4gICAgICAgICAgICAgICAgdGF4LnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICAgICAgICAgIHRheC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAnaHJlZicsXG4gICAgICAgICAgICAgICAgICAnaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL3JlYWxlc3RhdGUvQWNjb3VudC5hc3A/aWQ9JyArIGUuZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ1JFSUQnKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGF4LnNldEF0dHJpYnV0ZSgncm91bmQnLCAnJyk7XG4gICAgICAgICAgICAgICAgdGF4LnNldEF0dHJpYnV0ZSgnaWNvbi1zdGFydCcsICdsb2NhdG9yJyk7XG4gICAgICAgICAgICAgICAgdGF4LnRleHRDb250ZW50ID0gJ1RheCBQYWdlJztcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKHRheCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pLFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDI+R2VuZXJhbDwvaDE+J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICBmaWVsZEluZm9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL3BpbicsXG4gICAgICAgICAgbGFiZWw6ICdQSU4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdSRUlEJyxcbiAgICAgICAgICBsYWJlbDogJ1JFSUQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL2NpdHknLFxuICAgICAgICAgIGxhYmVsOiAnQ2l0eSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vanVyaXNkaWN0aW9uJyxcbiAgICAgICAgICBsYWJlbDogJ0p1cmlzZGljdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vdG93bnNoaXAnLFxuICAgICAgICAgIGxhYmVsOiAnVG93bnNoaXAnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAgLy8ge1xuICAgIC8vICAgdHlwZTogJ2N1c3RvbScsXG4gICAgLy8gICB0ZXh0OiAnPGNhbGNpdGUtYnV0dG9uIHNjYWxlPVwic1wiIGhyZWY9XCIjXCIgY2xhc3M9XCJzdHJlZXRWaWV3XCIgdGFyZ2V0PVwiX2JsYW5rXCI+U3RyZWV0IFZpZXc8L2NhbGNpdGUtYnV0dG9uPidcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDI+T3duZXI8L2gxPidcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6XG4gICAgICAgIC8vICc8aDEgY2xhc3M9XCJ0ZXh0LWdyZWVuXCI+e1NJVEVfQUREUkVTU308L2gxPicgK1xuICAgICAgICAvLyAnPGgyPkdlbmVyYWw8L2gyPntleHByZXNzaW9uL2dlbmVyYWx9JyArXG4gICAgICAgICd7T1dORVJ9PGJyLz57ZXhwcmVzc2lvbi9tYWlsaW5nLWFkZHJlc3N9J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMj5WYWx1YXRpb248L2gxPidcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdmaWVsZHMnLFxuICAgICAgZmllbGRJbmZvczogW1xuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi9idWlsZF92YWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL2xhbmRfdmFsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi90b3RhbF92YWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdCSUxMSU5HX0NMQVNTX0RFQ09ERScsXG4gICAgICAgICAgbGFiZWw6ICdCaWxsaW5nIENsYXNzJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPkxhc3QgU2FsZTwvaDE+J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICBmaWVsZEluZm9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdTQUxFX0RBVEUnLFxuICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgZGF0ZUZvcm1hdDogJ3Nob3J0LWRhdGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbDogJ0RhdGUgU29sZCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vc2FsZV9wcmljZSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMj5EZWVkczwvaDE+J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICBmaWVsZEluZm9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdERUVEX0JPT0snLFxuICAgICAgICAgIGxhYmVsOiAnQm9vaydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ0RFRURfUEFHRScsXG4gICAgICAgICAgbGFiZWw6ICdQYWdlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnREVFRF9EQVRFJyxcbiAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6ICdzaG9ydC1kYXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6ICdEZWVkIERhdGUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdERUVEX0FDUkVTJyxcbiAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgIHBsYWNlczogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6ICdEZWVkIEFjcmVzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnUFJPUERFU0MnLFxuICAgICAgICAgIGxhYmVsOiAnTGVnYWwgRGVzY3JpcHRpb24nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAgbmV3IEN1c3RvbUNvbnRlbnQoe1xuICAgICAgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSxcbiAgICAgIGNyZWF0b3I6IGRlZWRDcmVhdG9yXG4gICAgfSksXG4gICAgLy8ge1xuICAgIC8vICAgdHlwZTogJ3RleHQnLFxuICAgIC8vICAgdGV4dDpcbiAgICAvLyAnPGgxIGNsYXNzPVwidGV4dC1ncmVlblwiPntTSVRFX0FERFJFU1N9PC9oMT4nICtcbiAgICAvLyAnPGgyPkdlbmVyYWw8L2gyPntleHByZXNzaW9uL2dlbmVyYWx9JyArXG4gICAgLy8gJzxoMj5Pd25lcjwvaDI+e09XTkVSfTxici8+e2V4cHJlc3Npb24vbWFpbGluZy1hZGRyZXNzfScgK1xuICAgIC8vICc8aDI+VmFsdWF0aW9uPC9oMj57ZXhwcmVzc2lvbi9wcm9wZXJ0eS12YWx1ZXN9JyArXG4gICAgLy8gJzxoMj5TYWxlIEluZm9ybWF0aW9uPC9oMj57VE9UU0FMUFJJQ0V9PGJyLz57U0FMRV9EQVRFfScgK1xuICAgIC8vICc8aDI+RGVlZHM8L2gyPntleHByZXNzaW9uL2RlZWQtYm9vay1wYWdlfScgK1xuICAgIC8vICc8YnIvPjxzdHJvbmc+RGVlZCBEYXRlPC9zdHJvbmc+PGJyLz57REVFRF9EQVRFfTxici8+JyArXG4gICAgLy8gJzxici8+TGVnYWwgRGVzY3JpcHRpb248YnIvPntQUk9QREVTQ308YnIvPicgK1xuICAgIC8vICc8YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9ib20tZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Cb29rIG9mIE1hcHM8L2E+PGJyLz48YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9kZWVkLWRvYy1udW19JlJlY29yZERhdGU9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGVlZDwvYT4nXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPkJ1aWxkaW5nPC9oMT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnZmllbGRzJyxcbiAgICAgIGZpZWxkSW5mb3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ0hFQVRFREFSRUEnLFxuICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgZGlnaXRTZXBhcmF0b3I6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsOiAnSGVhdGVkIEFyZWEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdZRUFSX0JVSUxUJyxcbiAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgIGRpZ2l0U2VwYXJhdG9yOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6ICdZZWFyIEJ1aWx0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnREVTSUdOX1NUWUxFX0RFQ09ERScsXG4gICAgICAgICAgbGFiZWw6ICdEZXNpZ24vU3R5bGUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdUT1RTVFJVQ1RTJyxcbiAgICAgICAgICBsYWJlbDogJ1RvdGFsIFN0cnVjdHVyZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdUT1RVTklUUycsXG4gICAgICAgICAgbGFiZWw6ICdUb3RhbCBVbml0cydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ21lZGlhJyxcbiAgICAgIG1lZGlhSW5mb3M6IFtdXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPlNlcnZpY2VzPC9oMT4nXG4gICAgfSxcbiAgICBuZXcgQ3VzdG9tQ29udGVudCh7XG4gICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgY3JlYXRvcjogKGU6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBhY2NvcmRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWFjY29yZGlvbicpO1xuICAgICAgICBhY2NvcmRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3Rpb24tbW9kZScsICdzaW5nbGUnKTtcblxuICAgICAgICBzZXJ2aWNlcy5mb3JFYWNoKHNlcnZpY2UgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWFjY29yZGlvbi1pdGVtJyk7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2l0ZW0tdGl0bGUnLCBzZXJ2aWNlLmdyb3VwLnRpdGxlKTtcbiAgICAgICAgICBhY2NvcmRpb24uYXBwZW5kKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy9jb25zdCBmID0gc2VydmljZUNoYW5nZWQuYmluZChlLkdyYXBoaWMpO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KGYsIDEwMDApO1xuICAgICAgICBjb25zdCBncmFwaGljID0gZS5ncmFwaGljO1xuICAgICAgICBhY2NvcmRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUFjY29yZGlvbkNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICBzZXJ2aWNlQ2hhbmdlZChncmFwaGljLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2NvcmRpb247XG4gICAgICB9XG4gICAgfSlcbiAgXVxufSk7XG5cbmV4cG9ydCBjb25zdCBmZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnMDgwNTBiZjA2N2JiNGIyMGFkZWE0YjBiNGYwYTM5ZTMnXG4gIH0sXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgY29uZG9zVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnMDgwNTBiZjA2N2JiNGIyMGFkZWE0YjBiNGYwYTM5ZTMnXG4gIH0sXG4gIGxheWVySWQ6IDEsXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH0sXG4gIHBvcHVwVGVtcGxhdGU6IHBvcHVwVGVtcGxhdGVcbn0pO1xuY29uZG9zVGFibGUubG9hZCgpO1xuZXhwb3J0IGNvbnN0IGFkZHJlc3NUYWJsZSA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICBwb3J0YWxJdGVtOiB7XG4gICAgaWQ6ICcwODA1MGJmMDY3YmI0YjIwYWRlYTRiMGI0ZjBhMzllMydcbiAgfSxcbiAgbGF5ZXJJZDogNCxcbiAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfVxufSk7XG5hZGRyZXNzVGFibGUubG9hZCgpO1xuZXhwb3J0ICogZnJvbSAnLi9hcHAnO1xuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuaW1wb3J0IFNrZXRjaCBmcm9tICdlc3JpL3dpZGdldHMvU2tldGNoJztcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcbmltcG9ydCBUZXh0U3ltYm9sIGZyb20gJ2Vzcmkvc3ltYm9scy9UZXh0U3ltYm9sJztcblxuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IHsgbWVhc3VyZW1lbnQgfSBmcm9tICcuLi8uLi93aWRnZXRzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5EcmF3LkRyYXdWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd1ZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICBza2V0Y2g6IFNrZXRjaDtcbiAgZ3JhcGhpY3M6IEdyYXBoaWNzTGF5ZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRleHRDb2xvcjogZXNyaS5Db2xvcjtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0RHJhdygpIHtcbiAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnIH0pO1xuICAgIHRoaXMudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MpO1xuXG4gICAgdGhpcy5za2V0Y2ggPSBuZXcgU2tldGNoKHsgdmlldzogdGhpcy52aWV3LCBjb250YWluZXI6ICdza2V0Y2hEaXYnLCBsYXllcjogdGhpcy5ncmFwaGljcywgY3JlYXRpb25Nb2RlOiAnc2luZ2xlJyB9KTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG4gICAgKHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBhbnkpLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoW1syNTUsIDAsIDAsIDAuNV1dKTtcbiAgICAodGhpcy5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wgYXMgYW55KS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcblxuICAgIHRoaXMuc2tldGNoLndhdGNoKCdhY3RpdmVUb29sJywgdG9vbCA9PiB7XG4gICAgICBpZiAodG9vbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLm9uKCdjcmVhdGUnLCBlID0+IHtcbiAgICAgIGlmIChlLnN0YXRlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICAgIGlmIChlLnN0YXRlID09PSAnY29tcGxldGUnICYmIHRoaXMubGFiZWw/Lmxlbmd0aCkge1xuICAgICAgICBsZXQgbGFiZWxQb2ludDogZXNyaS5HZW9tZXRyeSA9IGUuZ3JhcGhpYy5nZW9tZXRyeTtcbiAgICAgICAgaWYgKGUuZ3JhcGhpYy5nZW9tZXRyeS50eXBlID09PSAncG9seWdvbicpIHtcbiAgICAgICAgICBsYWJlbFBvaW50ID0gKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBlc3JpLlBvbHlnb24pLmNlbnRyb2lkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZyA9IG5ldyBHcmFwaGljKHtcbiAgICAgICAgICBnZW9tZXRyeTogbGFiZWxQb2ludCxcbiAgICAgICAgICBzeW1ib2w6IG5ldyBUZXh0U3ltYm9sKHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMubGFiZWwsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgICAgICBoYWxvQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBoYWxvU2l6ZTogMSxcbiAgICAgICAgICAgIHhvZmZzZXQ6ICc1cHgnLFxuICAgICAgICAgICAgeW9mZnNldDogJzVweCcsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAncmlnaHQnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IERyYXdWaWV3TW9kZWwgZnJvbSAnLi9EcmF3L0RyYXdWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBkcmF3LWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkRyYXcnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxhYmVsJylcbiAgbGFiZWw6IHN0cmluZztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC50ZXh0Q29sb3InKVxuICB0ZXh0Q29sb3I6IENvbG9yO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IERyYXdWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IERyYXdWaWV3TW9kZWwgPSBuZXcgRHJhd1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBEcmF3UHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX2RyYXdVcGRhdGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy52aWV3TW9kZWwuc2tldGNoKSB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5pbml0RHJhdygpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxsJyk7XG4gICAgZmlsbD8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgZmlsbD8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgfSk7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaW5lJyk7XG4gICAgbGluZT8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgbGluZT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWxpbmVTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9wYWNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BhY2l0eScpO1xuICAgIG9wYWNpdHk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IuYSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpZHRoJyk7XG4gICAgd2lkdGg/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbCBhcyBlc3JpLlNpbXBsZUxpbmVTeW1ib2wpLndpZHRoID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS53aWR0aCA9IHBhcnNlRmxvYXQoXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUud2lkdGggPSBwYXJzZUZsb2F0KFxuICAgICAgICBlLnRhcmdldC52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbCcpO1xuICAgIGxhYmVsPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ2xhYmVsJywgZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRleHRDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0Q29sb3InKTtcbiAgICB0ZXh0Q29sb3I/LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnI2ZmMDAwMCcpO1xuICAgIHRleHRDb2xvcj8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ3RleHRDb2xvcicsIENvbG9yLmZyb21IZXgoZS50YXJnZXQudmFsdWUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyVXBkYXRlPXt0aGlzLl9kcmF3VXBkYXRlZH0gaWQ9XCJza2V0Y2hEaXZcIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtYmxvY2sgaGVhZGluZz1cIlNldHRpbmdzXCIgb3BlbiBjb2xsYXBzaWJsZT5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJDb2xvclwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIEZpbGwgQ29sb3IgPGNhbGNpdGUtY29sb3IgaWQ9XCJmaWxsXCIgaGlkZUNoYW5uZWxzIGhpZGVTYXZlZCBhcHBlYXJhbmNlPVwibWluaW1hbFwiIHNjYWxlPVwic1wiPjwvY2FsY2l0ZS1jb2xvcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBMaW5lIENvbG9yIDxjYWxjaXRlLWNvbG9yIGlkPVwibGluZVwiIGhpZGVDaGFubmVscyBoaWRlU2F2ZWQgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBzY2FsZT1cInNcIj48L2NhbGNpdGUtY29sb3I+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiRmlsbCBPcGFjaXR5XCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgT3BhY2l0eTxjYWxjaXRlLXNsaWRlciBzY2FsZT1cInNcIiBpZD1cIm9wYWNpdHlcIiBtYXg9XCIxXCIgbWluPVwiMFwiIHZhbHVlPVwiMC41XCIgc3RlcD1cIjAuMVwiPjwvY2FsY2l0ZS1zbGlkZXI+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiT3V0bGluZVwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIFdpZHRoIDxjYWxjaXRlLXNsaWRlciBpZD1cIndpZHRoXCIgbWF4PVwiMTBcIiBtaW49XCIwXCIgdmFsdWU9XCIxXCIgc3RlcD1cIjAuNVwiPjwvY2FsY2l0ZS1zbGlkZXI+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiTGFiZWxpbmdcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBMYWJlbCA8Y2FsY2l0ZS1pbnB1dCBzY2FsZT1cInNcIiBpZD1cImxhYmVsXCIgdHlwZT1cInRleHRhcmVhXCI+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIFRleHQgQ29sb3JcbiAgICAgICAgICAgICAgPGNhbGNpdGUtY29sb3IgaWQ9XCJ0ZXh0Q29sb3JcIiBoaWRlQ2hhbm5lbHMgaGlkZVNhdmVkIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgc2NhbGU9XCJzXCI+PC9jYWxjaXRlLWNvbG9yPlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgIDwvY2FsY2l0ZS1ibG9jay1zZWN0aW9uPlxuICAgICAgICA8L2NhbGNpdGUtYmxvY2s+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgU2tldGNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gnO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5cbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCB7IG1lYXN1cmVtZW50IH0gZnJvbSAnLi4vLi4vd2lkZ2V0cyc7XG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLlNlbGVjdC5TZWxlY3RWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0Vmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQHByb3BlcnR5KCkgbGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAnc2tldGNoJywgdGhpcy5pbml0U2tldGNoLmJpbmQodGhpcykpO1xuICB9XG4gIHNrZXRjaDogZXNyaS5Ta2V0Y2g7XG4gIGJ1ZmZlckRpc3RhbmNlOiBudW1iZXI7XG4gIGdyYXBoaWNzOiBHcmFwaGljc0xheWVyO1xuXG4gIEBwcm9wZXJ0eSgpIGdlb21ldHJ5OiBlc3JpLkdlb21ldHJ5O1xuICBpbml0U2tldGNoKCkge1xuICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiAnaGlkZScgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljcyk7XG4gICAgdGhpcy5za2V0Y2ggPSBuZXcgU2tldGNoKHtcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIGNvbnRhaW5lcjogJ3NlbGVjdFdpZGdldCcsXG4gICAgICBsYXllcjogdGhpcy5ncmFwaGljcyxcbiAgICAgIGNyZWF0aW9uTW9kZTogJ3NpbmdsZSdcbiAgICB9KTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwudXBkYXRlT25HcmFwaGljQ2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLnNrZXRjaC5vbignY3JlYXRlJywgZXYgPT4ge1xuICAgICAgaWYgKGV2LnN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlckRpc3RhbmNlID4gMCkge1xuICAgICAgICAgIGNvbnN0IGcgPSBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0J1ZmZlcihldi5ncmFwaGljLmdlb21ldHJ5LCB0aGlzLmJ1ZmZlckRpc3RhbmNlLCAnZmVldCcpO1xuICAgICAgICAgIC8vcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBnIGFzIF9fZXNyaS5Qb2x5Z29uO1xuICAgICAgICAgIGV2LmdyYXBoaWMuZ2VvbWV0cnkgPSBnIGFzIF9fZXNyaS5Qb2x5Z29uO1xuICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGV2LmdyYXBoaWMpO1xuICAgICAgICAgIGV2LmdyYXBoaWMuc3ltYm9sID0ge1xuICAgICAgICAgICAgdHlwZTogJ3NpbXBsZS1maWxsJyxcbiAgICAgICAgICAgIHN0eWxlOiAnbm9uZScsXG4gICAgICAgICAgICBvdXRsaW5lOiB7IHN0eWxlOiAnc2hvcnQtZGFzaCcsIHdpZHRoOiAyLjUsIGNvbG9yOiBbMjIxLCAyMjEsIDIyMSwgMV0gfSxcbiAgICAgICAgICAgIGNvbG9yOiBuZXcgQ29sb3IoWzI1NSwgMjQzLCAxMywgMC4yNV0pXG4gICAgICAgICAgfSBhcyBhbnk7XG4gICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IGV2LmdyYXBoaWMuZ2VvbWV0cnkgYXMgZXNyaS5HZW9tZXRyeTtcbiAgICAgICAgICB0aGlzLnZpZXcuZ29Ubyhldi5ncmFwaGljKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gZXYuZ3JhcGhpYy5nZW9tZXRyeSBhcyBlc3JpLkdlb21ldHJ5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXYuc3RhdGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLndhdGNoKCdhY3RpdmVUb29sJywgdG9vbCA9PiB7XG4gICAgICBpZiAodG9vbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgICB0aGlzLnNldCgnYnVmZmVyRGlzdGFuY2UnLCAwKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuXG5pbXBvcnQgU2VsZWN0Vmlld01vZGVsIGZyb20gJy4vU2VsZWN0L1NlbGVjdFZpZXdNb2RlbCc7XG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIGxheWVyPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IHNlbGVjdC1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5TZWxlY3QnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubGF5ZXInKVxuICBsYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuc2tldGNoJylcbiAgc2tldGNoOiBlc3JpLlNrZXRjaDtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5idWZmZXJEaXN0YW5jZScpXG4gIGJ1ZmZlckRpc3RhbmNlOiBudW1iZXI7XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogU2VsZWN0Vmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBTZWxlY3RWaWV3TW9kZWwgPSBuZXcgU2VsZWN0Vmlld01vZGVsKCk7XG4gIF9za2V0Y2hDcmVhdGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy52aWV3TW9kZWwuc2tldGNoKSB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5pbml0U2tldGNoKCk7XG4gICAgfVxuICB9O1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogU2VsZWN0UHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2OiBhbnkpIHtcbiAgICB0aGlzLnNldCgnYnVmZmVyRGlzdGFuY2UnLCBwYXJzZUludChldi50YXJnZXQudmFsdWUpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdERpdiBjYWxjaXRlLWlucHV0Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVJbnB1dEJsdXInLCAoZXY6IGFueSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoZXYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlclVwZGF0ZT17dGhpcy5fc2tldGNoQ3JlYXRlZH0gaWQ9XCJzZWxlY3RXaWRnZXRcIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgQnVmZmVyIERpc3RhbmNlIChmZWV0KVxuICAgICAgICAgIDxjYWxjaXRlLWlucHV0XG4gICAgICAgICAgICBzY2FsZT1cInNcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjIwMDBcIlxuICAgICAgICAgICAgc3RlcD1cIjUwXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnZpZXdNb2RlbC5idWZmZXJEaXN0YW5jZX1cbiAgICAgICAgICA+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuaW1wb3J0IEJhc2VNYXBHYWxsZXJ5IGZyb20gJ2Vzcmkvd2lkZ2V0cy9CYXNlbWFwR2FsbGVyeSc7XG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQmFzZU1hcHMuQmFzZU1hcHNWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1hcHNWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBiYXNlbWFwczogQmFzZU1hcEdhbGxlcnk7XG4gIGltYWdlczogQmFzZU1hcEdhbGxlcnk7XG5cbiAgYWN0aXZlQmFzZW1hcDogZXNyaS5CYXNlbWFwO1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNoYW5nZVByb3BlcnR5TGluZXMgPSAoYmFzZW1hcDogZXNyaS5CYXNlbWFwKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlMYXllcjogRmVhdHVyZUxheWVyID0gdGhpcy52aWV3Lm1hcC5hbGxMYXllcnMuZmluZChsYXllciA9PiB7XG4gICAgICByZXR1cm4gbGF5ZXIudHlwZSA9PT0gJ2ZlYXR1cmUnICYmIGxheWVyLnRpdGxlID09PSAnUHJvcGVydHknO1xuICAgIH0pIGFzIEZlYXR1cmVMYXllcjtcbiAgICBjb25zdCBuZXdSZW5kZXJlcjogZXNyaS5TaW1wbGVSZW5kZXJlciA9IChwcm9wZXJ0eUxheWVyLnJlbmRlcmVyIGFzIGVzcmkuU2ltcGxlUmVuZGVyZXIpLmNsb25lKCkgYXMgZXNyaS5TaW1wbGVSZW5kZXJlcjtcbiAgICBpZiAoXG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2RhcmsnKSB8fFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCduaWdodCcpIHx8XG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2RhcmsnKSB8fFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJzIwJykgfHxcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCcxOScpXG4gICAgKSB7XG4gICAgICAobmV3UmVuZGVyZXIuc3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS5jb2xvciA9IG5ldyBDb2xvcihbMjU1LCAyNTUsIDI1NSwgMC41XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIChuZXdSZW5kZXJlci5zeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gbmV3IENvbG9yKFswLCAwLCAwLCAwLjVdKTtcbiAgICB9XG4gICAgcHJvcGVydHlMYXllci5yZW5kZXJlciA9IG5ld1JlbmRlcmVyO1xuICB9O1xuXG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICB0aGlzLmJhc2VtYXBzID0gbmV3IEJhc2VNYXBHYWxsZXJ5KHsgdmlldzogdGhpcy52aWV3IH0pO1xuICAgIHRoaXMudmlldy53aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlUHJvcGVydHlMaW5lcyh0aGlzLnZpZXcubWFwLmJhc2VtYXApO1xuICAgIH0pO1xuICAgIHRoaXMudmlldy5tYXAud2F0Y2goJ2Jhc2VtYXAnLCAoYmFzZW1hcDogZXNyaS5CYXNlbWFwKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVByb3BlcnR5TGluZXMoYmFzZW1hcCk7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpPy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKTtcbiAgICAgICAgICB0aGlzLnZpZXcubWFwLnJlbW92ZSh0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcCA9IHRoaXMudmlldy5tYXAuYmFzZW1hcDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU3dpdGNoJyk/LnJlbW92ZUF0dHJpYnV0ZSgnc3dpdGNoZWQnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJtID0gdGhpcy5pbWFnZXMudmlld01vZGVsLml0ZW1zLmZpbmQoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLmJhc2VtYXAudGl0bGUgPT09IHRoaXMudmlldy5tYXAuYmFzZW1hcC50aXRsZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGJtICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFN3aXRjaCcpPy5oYXNBdHRyaWJ1dGUoJ3N3aXRjaGVkJykpIHtcbiAgICAgICAgdGhpcy52aWV3Lm1hcC5hZGRNYW55KHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLnRvQXJyYXkoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYWN0aXZlQmFzZW1hcCA9IHRoaXMudmlldy5tYXAuYmFzZW1hcDtcbiAgICB0aGlzLmltYWdlcyA9IG5ldyBCYXNlTWFwR2FsbGVyeSh7XG4gICAgICB2aWV3OiB0aGlzLnZpZXcsXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBpZDogJzQ5MjM4Njc1OWQyNjRkNDk5NDhiZjdmODM5NTdkZGI5J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKTtcbiAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGpzb24gPSAodmlldy5tYXAgYXMgYW55KS50b0pTT04oKTtcbiAgICAgIGpzb24uaW5pdGlhbFN0YXRlLnZpZXdwb2ludC50YXJnZXRHZW9tZXRyeSA9IHZpZXcuZXh0ZW50O1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbWFwcycsIEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbiAgICB9KTtcbiAgfVxuICB0b2dnbGVDb250ZW50ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgPT09ICdtYXBzJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHMnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHNJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXNJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHMnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwc0l0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IEJhc2VNYXBzVmlld01vZGVsIGZyb20gJy4vQmFzZU1hcHMvQmFzZU1hcHNWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VNYXBzUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgYmFzZW1hcHMtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQmFzZU1hcHMnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1hcHMgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBAYWxpYXNPZigndmlld01vZGVsLmJhc2VtYXBzJylcbiAgYmFzZW1hcHM6IGVzcmkuQmFzZW1hcEdhbGxlcnk7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuaW1hZ2VzJylcbiAgaW1hZ2VzOiBlc3JpLkJhc2VtYXBHYWxsZXJ5O1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IEJhc2VNYXBzVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBCYXNlTWFwc1ZpZXdNb2RlbCA9IG5ldyBCYXNlTWFwc1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBCYXNlTWFwc1Byb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuICBfY3JlYXRlTWFwcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5iYXNlbWFwcykge1xuICAgICAgdGhpcy5iYXNlbWFwcy5jb250YWluZXIgPSAnbWFwcyc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlSW1hZ2VzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgdGhpcy5pbWFnZXMuY29udGFpbmVyID0gJ2ltYWdlcyc7XG4gICAgfVxuICB9O1xuICBoYW5kbGVTd2l0Y2hDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnc3dpdGNoZWQnKSAhPSAnJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgY29uc29sZS5sb2coJ2FkZCcpO1xuICAgICAgdGhpcy52aWV3Lm1hcC5hZGRNYW55KHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy50b0FycmF5KCksIDApO1xuICAgICAgdGhpcy52aWV3Lm1hcC5iYXNlbWFwLnJlZmVyZW5jZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgbGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnZpZXcubWFwLmxheWVyc1xuICAgICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy52aWV3TW9kZWwuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmluY2x1ZGVzKGxheWVyKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgIGxheWVyLm9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgbGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTbGlkZXInKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB0aGlzLnZpZXcubWFwLmJhc2VtYXAucmVmZXJlbmNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBsYXllci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy52aWV3TW9kZWwuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBoYW5kbGVTbGlkZXJDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgbGF5ZXJzID0gdGhpcy52aWV3Lm1hcC5sYXllcnNcbiAgICAgIC5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3TW9kZWwuYWN0aXZlQmFzZW1hcD8uYmFzZUxheWVycy5pbmNsdWRlcyhsYXllcik7XG4gICAgICB9KVxuICAgICAgLnRvQXJyYXkoKTtcbiAgICBsYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICBsYXllci5vcGFjaXR5ID0gcGFyc2VGbG9hdChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9zbGlkZXJDcmVhdGVkID0gKGU6IGFueSkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJylcbiAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLFxuICAgICAgICB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZS5iaW5kKHsgYmFzZW1hcDogdGhpcy5iYXNlbWFwcywgdmlldzogdGhpcy52aWV3IH0pXG4gICAgICApO1xuICB9O1xuICBfYmxlbmRDcmVhdGVkID0gKGU6IGFueSkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignI2JsZW5kU3dpdGNoJylcbiAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NhbGNpdGVTd2l0Y2hDaGFuZ2UnLFxuICAgICAgICB0aGlzLmhhbmRsZVN3aXRjaENoYW5nZS5iaW5kKHsgYmFzZW1hcDogdGhpcy5iYXNlbWFwcywgdmlldzogdGhpcy52aWV3IH0pXG4gICAgICApO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kJyk/LnJlbW92ZUF0dHJpYnV0ZSgnc3dpdGNoZWQnKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYmFzZW1hcERpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAvLyBjYW4gSSBnZXQgY2hlY2tlZCBhbmQgdmFsdWUgbGlrZSB0aGlzP1xuICAgICAgICBpZiAoZS50YXJnZXQ/LmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLnZpZXdNb2RlbC50b2dnbGVDb250ZW50KGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiaGlkZGVuXCIgaWQ9XCJibGVuZFwiPlxuICAgICAgICAgIDxjYWxjaXRlLXN3aXRjaCBhZnRlckNyZWF0ZT17dGhpcy5fYmxlbmRDcmVhdGVkfSBpZD1cImJsZW5kU3dpdGNoXCI+PC9jYWxjaXRlLXN3aXRjaD4gQmxlbmRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGNhbGNpdGUtc2xpZGVyXG4gICAgICAgICAgYWZ0ZXJDcmVhdGU9e3RoaXMuX3NsaWRlckNyZWF0ZWR9XG4gICAgICAgICAgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgICAgIGlkPVwiYmxlbmRTbGlkZXJcIlxuICAgICAgICAgIHZhbHVlPVwiMC41XCJcbiAgICAgICAgICBtYXg9XCIxXCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBzdGVwPVwiMC4xXCJcbiAgICAgICAgPjwvY2FsY2l0ZS1zbGlkZXI+XG5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlTWFwc30gaWQ9XCJtYXBzXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUltYWdlc30gaWQ9XCJpbWFnZXNcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdmFsdWU9XCJtYXBzXCIgaWQ9XCJtYXBzSXRlbVwiPlxuICAgICAgICAgICAgTWFwc1xuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdmFsdWU9XCJpbWFnZXNcIiBpZD1cImltYWdlc0l0ZW1cIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIEltYWdlcnlcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgTGF5ZXJMaXN0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9MYXllckxpc3QnO1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5MYXllcnMuTGF5ZXJzVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyc1ZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIGxheWVyTGlzdDogZXNyaS5MYXllckxpc3Q7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gICAgdGhpcy5sYXllckxpc3QgPSBuZXcgTGF5ZXJMaXN0KHtcbiAgICAgIHZpZXcsXG4gICAgICBjb250YWluZXI6ICdsYXllckRpdicsXG4gICAgICBsaXN0SXRlbUNyZWF0ZWRGdW5jdGlvbjogZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZXZlbnQuaXRlbTtcbiAgICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSAhPSAnZ3JvdXAnKSB7XG4gICAgICAgICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1zbGlkZXInKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtaW4nLCAnMCcpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21heCcsICcxMDAnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtaW4tbGFiZWwnLCAnMCUnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtYXgtbGFiZWwnLCAnMTAwJScpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2xhYmVsLWhhbmRsZXMnLCAnJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAoaXRlbT8ubGF5ZXIub3BhY2l0eSAqIDEwMCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnZGF0YScsIGl0ZW0ubGF5ZXIuaWQpO1xuICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlU2xpZGVyVXBkYXRlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdmlldy5tYXAuZmluZExheWVyQnlJZCgoZXZlbnQudGFyZ2V0IGFzIGFueSkuZ2V0QXR0cmlidXRlKCdkYXRhJykpLm9wYWNpdHkgPVxuICAgICAgICAgICAgICBwYXJzZUludCgoZXZlbnQ/LnRhcmdldCBhcyBhbnkpPy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpIC8gMTAwO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGl0ZW0ucGFuZWwgPSB7XG4gICAgICAgICAgICBjb250ZW50OiBbc2xpZGVyLCAnbGVnZW5kJ10sXG4gICAgICAgICAgICBvcGVuOiBpdGVtLmxheWVyLnZpc2libGVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpdGVtLmxheWVyLnRpdGxlID09PSAnUHJvcGVydHknKSB7XG4gICAgICAgICAgICBpdGVtLmFjdGlvbnNTZWN0aW9ucyA9IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2hvdyBMYWJlbHMnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3RvZ2dsZScsXG4gICAgICAgICAgICAgICAgICBpZDogJ3Byb3BlcnR5LWxhYmVscycsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5sYXllci5sYWJlbHNWaXNpYmxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubGF5ZXJMaXN0Lm9uKCd0cmlnZ2VyLWFjdGlvbicsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5hY3Rpb24uaWQgPT09ICdwcm9wZXJ0eS1sYWJlbHMnKSB7XG4gICAgICAgIChldmVudC5pdGVtLmxheWVyIGFzIGVzcmkuRmVhdHVyZUxheWVyKS5sYWJlbHNWaXNpYmxlID0gKGV2ZW50LmFjdGlvbiBhcyBlc3JpLkFjdGlvblRvZ2dsZSkudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IExheWVyc1ZpZXdNb2RlbCBmcm9tICcuL0xheWVycy9MYXllcnNWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExheWVyc1Byb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGxheWVycy1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5MYXllcnMnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXJzIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubGF5ZXJMaXN0JylcbiAgbGF5ZXJMaXN0OiBlc3JpLkxheWVyTGlzdDtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IExheWVyc1ZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogTGF5ZXJzVmlld01vZGVsID0gbmV3IExheWVyc1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBMYXllcnNQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgX2NyZWF0ZUxheWVycyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5sYXllckxpc3QpIHtcbiAgICAgIHRoaXMubGF5ZXJMaXN0LmNvbnRhaW5lciA9ICdsYXllcldpZGdldCc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlU2VhcmNoID0gKGlucHV0OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XG4gICAgICB0aGlzLmxheWVyTGlzdC5vcGVyYXRpb25hbEl0ZW1zLmZvckVhY2goKGl0ZW06IGVzcmkuTGlzdEl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgIChpdGVtLmxheWVyIGFzIGVzcmkuR3JvdXBMYXllcikubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGxheWVyLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgIGxheWVyLmxpc3RNb2RlID0gJ3Nob3cnO1xuICAgICAgICAgICAgICBpdGVtLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGF5ZXIubGlzdE1vZGUgPSAnaGlkZSc7XG4gICAgICAgICAgICAgIGl0ZW0ub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICghKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgaXRlbS5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxjYWxjaXRlLWlucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaWx0ZXIgYnkgbGF5ZXIgbmFtZVwiXG4gICAgICAgICAgc2NhbGU9XCJzXCJcbiAgICAgICAgICBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlU2VhcmNofVxuICAgICAgICAgIGlkPVwibGF5ZXJTZWFyY2hcIlxuICAgICAgICA+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVMYXllcnN9IGlkPVwibGF5ZXJXaWRnZXRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Mb2NhdGlvblNlYXJjaC5Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgc2VhcmNoOiBTZWFyY2g7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHRoaXMuc2VhcmNoID0gbmV3IFNlYXJjaCh7IHZpZXc6IHZpZXcsIG1heFN1Z2dlc3Rpb25zOiAzMCwgc2VhcmNoQWxsRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgdGhpcy5zZWFyY2guYWxsU291cmNlcy5vbignYWZ0ZXItYWRkJywgZSA9PiB7XG4gICAgICBpZiAoKGUuaXRlbSBhcyBhbnkpLmxheWVyKSB7XG4gICAgICAgIGUuaXRlbS5uYW1lID0gKGUuaXRlbSBhcyBhbnkpLmxheWVyLnRpdGxlO1xuICAgICAgICBlLml0ZW0ucGxhY2Vob2xkZXIgPSAoZS5pdGVtIGFzIGFueSkubGF5ZXIudGl0bGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCBmcm9tICcuL0xvY2F0aW9uU2VhcmNoL0xvY2F0aW9uU2VhcmNoVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblNlYXJjaFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGxvY2F0aW9uc2VhcmNoLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxvY2F0aW9uU2VhcmNoJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uU2VhcmNoIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5zZWFyY2gnKVxuICBzZWFyY2g6IGVzcmkud2lkZ2V0c1NlYXJjaDtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IExvY2F0aW9uU2VhcmNoVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCA9IG5ldyBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBMb2NhdGlvblNlYXJjaFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIF9zZWFyY2hDcmVhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2VhcmNoKSB7XG4gICAgICB0aGlzLnNlYXJjaC5jb250YWluZXIgPSAnbG9jYXRpb25TZWFyY2gnO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fc2VhcmNoQ3JlYXRlfSBpZD1cImxvY2F0aW9uU2VhcmNoXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcbmltcG9ydCBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldyc7XG5pbXBvcnQgTWFwIGZyb20gJ2VzcmkvTWFwJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCB3YXRjaFV0aWxzIGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5PdmVydmlld01hcC5PdmVydmlld01hcFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVydmlld01hcFZpZXdNb2RlbCBleHRlbmRzIGRlY2xhcmVkKEFjY2Vzc29yKSB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIG92ZXJ2aWV3TWFwVmlldzogZXNyaS5NYXBWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG4gIHN0b3BFdnRQcm9wYWdhdGlvbiA9IChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgZGlzYWJsZVpvb21pbmcgPSAodmlldzogYW55KSA9PiB7XG4gICAgdmlldy5wb3B1cC5kb2NrRW5hYmxlZCA9IHRydWU7XG5cbiAgICAvLyBSZW1vdmVzIHRoZSB6b29tIGFjdGlvbiBvbiB0aGUgcG9wdXBcbiAgICB2aWV3LnBvcHVwLmFjdGlvbnMgPSBbXTtcblxuICAgIC8vIHN0b3BzIHByb3BhZ2F0aW9uIG9mIGRlZmF1bHQgYmVoYXZpb3Igd2hlbiBhbiBldmVudCBmaXJlc1xuXG4gICAgLy8gZXhsdWRlIHRoZSB6b29tIHdpZGdldCBmcm9tIHRoZSBkZWZhdWx0IFVJXG4gICAgdmlldy51aS5jb21wb25lbnRzID0gWydhdHRyaWJ1dGlvbiddO1xuXG4gICAgLy8gZGlzYWJsZSBtb3VzZSB3aGVlbCBzY3JvbGwgem9vbWluZyBvbiB0aGUgdmlld1xuICAgIHZpZXcub24oJ21vdXNlLXdoZWVsJywgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuXG4gICAgLy8gZGlzYWJsZSB6b29taW5nIHZpYSBkb3VibGUtY2xpY2sgb24gdGhlIHZpZXdcbiAgICB2aWV3Lm9uKCdkb3VibGUtY2xpY2snLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG5cbiAgICAvLyBkaXNhYmxlIHpvb21pbmcgb3V0IHZpYSBkb3VibGUtY2xpY2sgKyBDb250cm9sIG9uIHRoZSB2aWV3XG4gICAgdmlldy5vbignZG91YmxlLWNsaWNrJywgWydDb250cm9sJ10sIHRoaXMuc3RvcEV2dFByb3BhZ2F0aW9uKTtcblxuICAgIC8vIGRpc2FibGVzIHBpbmNoLXpvb20gYW5kIHBhbm5pbmcgb24gdGhlIHZpZXdcbiAgICB2aWV3Lm9uKCdkcmFnJywgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuXG4gICAgLy8gZGlzYWJsZSB0aGUgdmlldydzIHpvb20gYm94IHRvIHByZXZlbnQgdGhlIFNoaWZ0ICsgZHJhZ1xuICAgIC8vIGFuZCBTaGlmdCArIENvbnRyb2wgKyBkcmFnIHpvb20gZ2VzdHVyZXMuXG4gICAgdmlldy5vbignZHJhZycsIFsnU2hpZnQnXSwgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuICAgIHZpZXcub24oJ2RyYWcnLCBbJ1NoaWZ0JywgJ0NvbnRyb2wnXSwgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuXG4gICAgLy8gcHJldmVudHMgem9vbWluZyB3aXRoIHRoZSArIGFuZCAtIGtleXNcbiAgICB2aWV3Lm9uKCdrZXktZG93bicsIChldmVudDogYW55KSA9PiB7XG4gICAgICBjb25zdCBwcm9oaWJpdGVkS2V5cyA9IFsnKycsICctJywgJ1NoaWZ0JywgJ18nLCAnPSddO1xuICAgICAgY29uc3Qga2V5UHJlc3NlZCA9IGV2ZW50LmtleTtcbiAgICAgIGlmIChwcm9oaWJpdGVkS2V5cy5pbmRleE9mKGtleVByZXNzZWQpICE9PSAtMSkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aWV3O1xuICB9O1xuXG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKHsgYmFzZW1hcDogJ3N0cmVldHMtbmF2aWdhdGlvbi12ZWN0b3InIH0pO1xuICAgIHRoaXMub3ZlcnZpZXdNYXBWaWV3ID0gbmV3IE1hcFZpZXcoeyBtYXA6IG1hcCwgZXh0ZW50OiB2aWV3LmV4dGVudCB9KTtcbiAgICB0aGlzLmRpc2FibGVab29taW5nKHRoaXMub3ZlcnZpZXdNYXBWaWV3KTtcbiAgICB0aGlzLm92ZXJ2aWV3TWFwVmlldy51aS5yZW1vdmUoJ3pvb20nKTtcblxuICAgIGNvbnN0IGdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7XG4gICAgICBnZW9tZXRyeTogbnVsbCxcbiAgICAgIHN5bWJvbDoge1xuICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDAuNV0sXG4gICAgICAgIG91dGxpbmU6IG51bGxcbiAgICAgIH1cbiAgICB9IGFzIGFueSk7XG4gICAgdGhpcy5vdmVydmlld01hcFZpZXcuZ3JhcGhpY3MuYWRkKGdyYXBoaWMpO1xuICAgIHdhdGNoVXRpbHMuaW5pdCh2aWV3LCAnZXh0ZW50JywgKCkgPT4ge1xuICAgICAgZ3JhcGhpYy5nZW9tZXRyeSA9IHZpZXcuZXh0ZW50O1xuICAgIH0pO1xuXG4gICAgd2F0Y2hVdGlscy5pbml0KHZpZXcsICdzdGF0aW9uYXJ5JywgKCkgPT4ge1xuICAgICAgaWYgKHZpZXcuc3RhdGlvbmFyeSkge1xuICAgICAgICB0aGlzLm92ZXJ2aWV3TWFwVmlld1xuICAgICAgICAgIC5nb1RvKHtcbiAgICAgICAgICAgIGNlbnRlcjogdmlldy5jZW50ZXIsXG4gICAgICAgICAgICBzY2FsZTpcbiAgICAgICAgICAgICAgdmlldy5zY2FsZSAqXG4gICAgICAgICAgICAgIDIgKlxuICAgICAgICAgICAgICBNYXRoLm1heCh2aWV3LndpZHRoIC8gdGhpcy5vdmVydmlld01hcFZpZXcud2lkdGgsIHZpZXcuaGVpZ2h0IC8gdGhpcy5vdmVydmlld01hcFZpZXcuaGVpZ2h0KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmUgZ290by1pbnRlcnJ1cHRlZCBlcnJvcnNcbiAgICAgICAgICAgIGlmIChlcnJvci5uYW1lICE9ICd2aWV3OmdvdG8taW50ZXJydXB0ZWQnKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBPdmVydmlld01hcFZpZXdNb2RlbCBmcm9tICcuL092ZXJ2aWV3TWFwL092ZXJ2aWV3TWFwVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBPdmVydmlld01hcFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IG92ZXJ2aWV3bWFwLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLk92ZXJ2aWV3TWFwJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJ2aWV3TWFwIGV4dGVuZHMgZGVjbGFyZWQoV2lkZ2V0KSB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldycpXG4gIG92ZXJ2aWV3TWFwVmlldzogZXNyaS5NYXBWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLm5hbWUnKVxuICBAcmVuZGVyYWJsZSgpXG4gIG5hbWUgPSAnJztcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IE92ZXJ2aWV3TWFwVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBPdmVydmlld01hcFZpZXdNb2RlbCA9IG5ldyBPdmVydmlld01hcFZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBPdmVydmlld01hcFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuICBvdmVydmlld0NyZWF0ZWQgPSAoZGl2OiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIGlmICh0aGlzLm92ZXJ2aWV3TWFwVmlldykge1xuICAgICAgdGhpcy5vdmVydmlld01hcFZpZXcuY29udGFpbmVyID0gZGl2O1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMub3ZlcnZpZXdDcmVhdGVkfSBpZD1cIm92ZXJ2aWV3RGl2XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCIvLyBXaWRnZXRzXG5pbXBvcnQgTGVnZW5kIGZyb20gJ2Vzcmkvd2lkZ2V0cy9MZWdlbmQnO1xuaW1wb3J0IFByaW50IGZyb20gJ2Vzcmkvd2lkZ2V0cy9QcmludCc7XG5pbXBvcnQgQm9va21hcmtzIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Cb29rbWFya3MnO1xuaW1wb3J0IFByb3BlcnR5U2VhcmNoIGZyb20gJy4vd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaCc7XG5pbXBvcnQgQ29vcmRpbmF0ZUNvbnZlcnNpb24gZnJvbSAnZXNyaS93aWRnZXRzL0Nvb3JkaW5hdGVDb252ZXJzaW9uJztcbmltcG9ydCBFeHBhbmQgZnJvbSAnZXNyaS93aWRnZXRzL0V4cGFuZCc7XG5pbXBvcnQgTWVhc3VyZSBmcm9tICcuL3dpZGdldHMvTWVhc3VyZSc7XG5pbXBvcnQgQ29tcGFzcyBmcm9tICdlc3JpL3dpZGdldHMvQ29tcGFzcyc7XG5pbXBvcnQgTG9jYXRlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Mb2NhdGUnO1xuaW1wb3J0IFRyYWNrIGZyb20gJ2Vzcmkvd2lkZ2V0cy9UcmFjayc7XG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICdlc3JpL3dpZGdldHMvRnVsbHNjcmVlbic7XG5cbmltcG9ydCB7IGNvbmRvc1RhYmxlLCBhZGRyZXNzVGFibGUsIGZlYXR1cmVMYXllciB9IGZyb20gJy4vZGF0YS9zZWFyY2gnO1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5pbXBvcnQgRHJhdyBmcm9tICcuL3dpZGdldHMvRHJhdyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vd2lkZ2V0cy9TZWxlY3QnO1xuaW1wb3J0IEJhc2VNYXBzIGZyb20gJy4vd2lkZ2V0cy9CYXNlTWFwcyc7XG5pbXBvcnQgTGF5ZXJzIGZyb20gJy4vd2lkZ2V0cy9MYXllcnMnO1xuaW1wb3J0IExvY2F0aW9uU2VhcmNoIGZyb20gJy4vd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaCc7XG5pbXBvcnQgT3ZlcnZpZXdNYXAgZnJvbSAnLi93aWRnZXRzL092ZXJ2aWV3TWFwJztcblxuZXhwb3J0IGNvbnN0IG1lYXN1cmVtZW50OiBNZWFzdXJlID0gbmV3IE1lYXN1cmUoKTtcbmV4cG9ydCBjb25zdCBzZWxlY3Q6IFNlbGVjdCA9IG5ldyBTZWxlY3QoKTtcbmV4cG9ydCBsZXQgbGF5ZXJzOiBMYXllcnM7XG5leHBvcnQgbGV0IGxlZ2VuZDogTGVnZW5kO1xuZXhwb3J0IGxldCBiYXNlbWFwczogQmFzZU1hcHM7XG5leHBvcnQgbGV0IGJvb2ttYXJrczogQm9va21hcmtzO1xuZXhwb3J0IGxldCBsb2NhdGlvblNlYXJjaDogTG9jYXRpb25TZWFyY2g7XG5cbmV4cG9ydCBsZXQgcHJpbnRXaWRnZXQ6IFByaW50O1xuZXhwb3J0IGxldCBwcm9wZXJ0eVNlYXJjaDogUHJvcGVydHlTZWFyY2g7XG5leHBvcnQgY29uc3QgZHJhd1dpZGdldDogRHJhdyA9IG5ldyBEcmF3KCk7XG5leHBvcnQgZnVuY3Rpb24gaW5pdFdpZGdldChuYW1lOiBzdHJpbmcsIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gIGlmIChuYW1lID09PSAnU2VhcmNoJyAmJiAhcHJvcGVydHlTZWFyY2gpIHtcbiAgICBwcm9wZXJ0eVNlYXJjaCA9IG5ldyBQcm9wZXJ0eVNlYXJjaCh7XG4gICAgICB2aWV3OiB2aWV3LFxuICAgICAgY29uZG9zVGFibGU6IGNvbmRvc1RhYmxlLFxuICAgICAgYWRkcmVzc1RhYmxlOiBhZGRyZXNzVGFibGUsXG4gICAgICBwcm9wZXJ0eUxheWVyOiBmZWF0dXJlTGF5ZXIsXG4gICAgICBjb250YWluZXI6ICdzaWRlRGl2J1xuICAgIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnTGF5ZXJzJyAmJiAhbGF5ZXJzKSB7XG4gICAgbGF5ZXJzID0gbmV3IExheWVycyh7IHZpZXcsIGNvbnRhaW5lcjogJ2xheWVyRGl2JyB9KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ0xlZ2VuZCcgJiYgIWxlZ2VuZCkge1xuICAgIGxlZ2VuZCA9IG5ldyBMZWdlbmQoeyB2aWV3LCBjb250YWluZXI6ICdsZWdlbmREaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnUHJpbnQnICYmICFwcmludFdpZGdldCkge1xuICAgIHByaW50V2lkZ2V0ID0gbmV3IFByaW50KHtcbiAgICAgIHZpZXcsXG4gICAgICBjb250YWluZXI6ICdwcmludERpdicsXG4gICAgICBwcmludFNlcnZpY2VVcmw6XG4gICAgICAgICdodHRwczovL3V0aWxpdHkuYXJjZ2lzb25saW5lLmNvbS9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9VdGlsaXRpZXMvUHJpbnRpbmdUb29scy9HUFNlcnZlci9FeHBvcnQlMjBXZWIlMjBNYXAlMjBUYXNrJ1xuICAgIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnQm9va21hcmtzJyAmJiAhYm9va21hcmtzKSB7XG4gICAgYm9va21hcmtzID0gbmV3IEJvb2ttYXJrcyh7IHZpZXcsIGNvbnRhaW5lcjogJ2Jvb2ttYXJrRGl2JywgZWRpdGluZ0VuYWJsZWQ6IHRydWUgfSk7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gJ0Jhc2VtYXBzJyAmJiAhYmFzZW1hcHMpIHtcbiAgICBiYXNlbWFwcyA9IG5ldyBCYXNlTWFwcyh7IHZpZXcsIGNvbnRhaW5lcjogJ2Jhc2VtYXBEaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnTG9jYXRpb24nICYmICFsb2NhdGlvblNlYXJjaCkge1xuICAgIGxvY2F0aW9uU2VhcmNoID0gbmV3IExvY2F0aW9uU2VhcmNoKHsgdmlldywgY29udGFpbmVyOiAnbG9jYXRpb25EaXYnIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaW5pdFdpZGdldHModmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgY29uc3QgY29vcmRpbmF0ZXM6IGVzcmkuQ29vcmRpbmF0ZUNvbnZlcnNpb24gPSBuZXcgQ29vcmRpbmF0ZUNvbnZlcnNpb24oeyB2aWV3IH0pO1xuICBjb25zdCBjb29yZGluYXRlc0V4cGFuZDogRXhwYW5kID0gbmV3IEV4cGFuZCh7XG4gICAgY29udGVudDogY29vcmRpbmF0ZXMsXG4gICAgbW9kZTogJ2Zsb2F0aW5nJyxcbiAgICBleHBhbmRJY29uQ2xhc3M6ICdlc3JpLWljb24tcGFuMidcbiAgfSk7XG4gIHZpZXcudWkuYWRkKGNvb3JkaW5hdGVzRXhwYW5kLCAnYm90dG9tLWxlZnQnKTtcblxuICB2aWV3LnVpLmFkZChuZXcgQ29tcGFzcyh7IHZpZXc6IHZpZXcgfSksICd0b3AtbGVmdCcpO1xuICBjb25zdCBsb2NhdGU6IExvY2F0ZSA9IG5ldyBMb2NhdGUoeyB2aWV3OiB2aWV3IH0pO1xuICBsb2NhdGUub24oJ2xvY2F0ZS1lcnJvcicsIChldmVudDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9KTtcbiAgdmlldy51aS5hZGQobG9jYXRlLCAndG9wLWxlZnQnKTtcblxuICBjb25zdCB0cmFjazogVHJhY2sgPSBuZXcgVHJhY2soeyB2aWV3OiB2aWV3IH0pO1xuICB0cmFjay5vbigndHJhY2stZXJyb3InLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfSk7XG4gIHZpZXcudWkuYWRkKHRyYWNrLCAndG9wLWxlZnQnKTtcbiAgdmlldy51aS5hZGQobmV3IEZ1bGxzY3JlZW4oeyB2aWV3IH0pLCAndG9wLWxlZnQnKTtcbiAgbWVhc3VyZW1lbnQudmlldyA9IHZpZXc7XG4gIG1lYXN1cmVtZW50LmNvbnRhaW5lciA9ICdtZWFzdXJlRGl2JztcbiAgZHJhd1dpZGdldC52aWV3ID0gdmlldztcbiAgZHJhd1dpZGdldC5jb250YWluZXIgPSAnZHJhd0Rpdic7XG4gIGNvbnN0IG92ZXJ2aWV3TWFwID0gbmV3IE92ZXJ2aWV3TWFwKHsgdmlldyB9KTtcbiAgY29uc3Qgb3ZlcnZpZXdFeHBhbmQ6IEV4cGFuZCA9IG5ldyBFeHBhbmQoe1xuICAgIGNvbnRlbnQ6IG92ZXJ2aWV3TWFwLFxuICAgIG1vZGU6ICdmbG9hdGluZycsXG4gICAgZXhwYW5kSWNvbkNsYXNzOiAnZXNyaS1pY29uLW92ZXJ2aWV3LWFycm93LXRvcC1sZWZ0J1xuICB9KTtcbiAgb3ZlcnZpZXdFeHBhbmQud2F0Y2goJ2V4cGFuZGVkJywgZXhwYW5kZWQgPT4ge1xuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgb3ZlcnZpZXdNYXAudmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldy5nb1RvKHtcbiAgICAgICAgY2VudGVyOiB2aWV3LmNlbnRlcixcbiAgICAgICAgc2NhbGU6XG4gICAgICAgICAgdmlldy5zY2FsZSAqXG4gICAgICAgICAgMiAqXG4gICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICB2aWV3LndpZHRoIC8gb3ZlcnZpZXdNYXAudmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldy53aWR0aCxcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0IC8gb3ZlcnZpZXdNYXAudmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldy5oZWlnaHRcbiAgICAgICAgICApXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICB2aWV3LnVpLmFkZChvdmVydmlld0V4cGFuZCwgJ2JvdHRvbS1yaWdodCcpO1xuXG4gIHNlbGVjdC5jb250YWluZXIgPSAnc2VsZWN0RGl2JztcbiAgc2VsZWN0LnZpZXcgPSB2aWV3O1xuICBzZWxlY3QubGF5ZXIgPSBmZWF0dXJlTGF5ZXI7XG4gIHJldHVybiB2aWV3O1xufVxuIiwiZXhwb3J0IGNvbnN0IGluaXRQYW5lbEhlYWRlcnMgPSAoKSA9PiB7XG4gIC8vb3ZlcnJpZGUgQ1NTIGZvciBjYWxjaXRlIHBhbmVsIGhlYWRlclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsIGRpdicpLmZvckVhY2gocGFuZWwgPT4ge1xuICAgIGlmIChwYW5lbC5zbG90ID09PSAnaGVhZGVyLXRyYWlsaW5nLWNvbnRlbnQnKSB7XG4gICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3c7Jyk7XG4gICAgfVxuICB9KTtcbiAgd2luZG93Lm9ucmVzaXplID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBpZiAoKGV2ZW50Py50YXJnZXQgYXMgYW55KT8uaW5uZXJXaWR0aCA+PSA1MDApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW0uaGFzQXR0cmlidXRlKCdkaXNtaXNzZWQnKSkge1xuICAgICAgICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5tYXhpbWl6ZScpPy5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21pbmltaXplJykge1xuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNDhweCknKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMzUwcHgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdkaXNtaXNzZWQnKSkge1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDBweCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVQYW5lbERpc21pc3NlZENoYW5nZScsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIC8vaGFuZGxlIHBhbmVsIG1heGltaXplL21pbmltaXplXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXhpbWl6ZScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21heGltaXplJykge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtaW5pbWl6ZScpO1xuICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ21heGltaXplZCcpOyAvLy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gOTZweCknKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbC5sZWZ0Om5vdCguaGlkZGVuKScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGlzbWlzc2VkJywgJycpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1hY3Rpb25bc2lkZT1cImxlZnRcIl1bYWN0aXZlXScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaWNvbicpID09PSAnbWluaW1pemUnKSB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpY29uJywgJ21heGltaXplJyk7XG4gICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnbWF4aW1pemVkJyk7XG4gICAgICAgIC8vaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDozNTBweCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5leHBvcnQgY29uc3QgaW5pdFBhbmVscyA9IChhY3Rpb25zOiBhbnkpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgY29uc3QgaTogSFRNTEVsZW1lbnQgPSBpdGVtPy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoaSkge1xuICAgICAgaS5pbm5lckhUTUwgKz0gJzxzdHlsZT4uY29udGVudC1jb250YWluZXIgeyBoZWlnaHQ6IDEwMCU7IH0gPC9zdHlsZT4nO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiBmYWxzZSwgc3VidHJlZTogZmFsc2UgfTtcbiAgICBjb25zdCBjYWxsYmFjayA9IChtdXRhdGlvbnNMaXN0OiBhbnlbXSkgPT4ge1xuICAgICAgLy8gVXNlIHRyYWRpdGlvbmFsICdmb3IgbG9vcHMnIGZvciBJRSAxMVxuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG4gICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2Rpc21pc3NlZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG11dGF0aW9uKTtcbiAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFjdGlvbi50ZXh0ID09PSAobXV0YXRpb24udGFyZ2V0IGFzIGFueSkudGl0bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoKG11dGF0aW9uLnRhcmdldCBhcyBhbnkpLmhhc0F0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgICAgICAgICAgIGFjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb24uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1MDApIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKChtdXRhdGlvbi50YXJnZXQgYXMgYW55KS5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygobXV0YXRpb24udGFyZ2V0IGFzIGFueSkudGl0bGUsICdkaXNtaXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3RGl2Jyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2JlbG93Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKChtdXRhdGlvbi50YXJnZXQgYXMgYW55KS50aXRsZSwgJ25vdCBkaXNtaXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3RGl2Jyk/LmNsYXNzTGlzdC5hZGQoJ2JlbG93Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoaXRlbSwgY29uZmlnKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IHsgaW5pdFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkFjdGlvbkJhci5BY3Rpb25CYXJWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQmFyVmlld01vZGVsIGV4dGVuZHMgZGVjbGFyZWQoQWNjZXNzb3IpIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIHNpZGU6IHN0cmluZztcbiAgYWN0aW9uczogTm9kZUxpc3RPZjxFbGVtZW50PjtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3NpZGUnLCB0aGlzLnNpZGVTZXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICByZW9yZGVyUGFuZWxzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnZpZXcpIHtcbiAgICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsLmxlZnQnKS5mb3JFYWNoKChwYW5lbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAwMCkge1xuICAgICAgICAgICAgcGFuZWwucGFyZW50RWxlbWVudD8uaW5zZXJ0QmVmb3JlKHBhbmVsLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0RpdicpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFuZWwucGFyZW50RWxlbWVudD8uaW5zZXJ0QmVmb3JlKHBhbmVsLCBkb2N1bWVudD8ucXVlcnlTZWxlY3RvcignI3ZpZXdEaXYnKT8ubmV4dEVsZW1lbnRTaWJsaW5nIGFzIGFueSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBpbml0QWN0aW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLmFjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFjdGlvbi1iYXIgY2FsY2l0ZS1hY3Rpb24nKTtcbiAgICB0aGlzLmFjdGlvbnM/LmZvckVhY2goKGFjdGlvbjogRWxlbWVudCkgPT4ge1xuICAgICAgYWN0aW9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVBY3Rpb24oZS50YXJnZXQpO1xuICAgICAgICBpbml0V2lkZ2V0KGUudGFyZ2V0LnRleHQsIHRoaXMudmlldyk7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKChhOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoYS50ZXh0ICE9IGUudGFyZ2V0LnRleHQpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDAwKSB7XG4gICAgICAgICAgICAgIGlmIChhLmdldEF0dHJpYnV0ZSgnc2lkZScpID09PSBhY3Rpb24uZ2V0QXR0cmlidXRlKCdzaWRlJykpIHtcbiAgICAgICAgICAgICAgICBhLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGEucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhY3Rpb24uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gNTAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLWFjdGlvblt0ZXh0PVwiU2VhcmNoXCInKT8uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gICAgfVxuICAgIHRoaXMucmVvcmRlclBhbmVscygpO1xuICB9O1xuICB0b2dnbGVBY3Rpb24gPSAoYWN0aW9uOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGFuZWwuJHthY3Rpb24uZ2V0QXR0cmlidXRlKCdzaWRlJykgYXMgc3RyaW5nfWApLmZvckVhY2goKHBhbmVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAocGFuZWwudGl0bGUgIT0gKGFjdGlvbiBhcyBhbnkpLnRleHQpIHtcbiAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYW5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgICAgIGlmICghcGFuZWwuaGFzQXR0cmlidXRlKCdkaXNtaXNzZWQnKSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNTAwKSB7XG4gICAgICAgICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDM1MHB4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAnTWVhc3VyZScpIHtcbiAgICAgICAgICAgICAgLy9tZWFzdXJlbWVudC5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy9tZWFzdXJlbWVudC5tZWFzdXJlT3BlbmVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsJykuZm9yRWFjaCgocGFuZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAoYWN0aW9uIGFzIGFueSkudGV4dCkge1xuICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHBhbmVsKTtcbiAgICAgICAgICBwYW5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHBhbmVsKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhwYW5lbC50aXRsZSk7XG4gICAgICAgICAgaWYgKCFwYW5lbC5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA1MDApIHtcbiAgICAgICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMzUwcHgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgaWYgKHBhbmVsLnRpdGxlICE9ICdNZWFzdXJlJykge1xuICAgICAgICAgICAgICAvL21lYXN1cmVtZW50Lm1lYXN1cmVtZW50LmNsZWFyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvL21lYXN1cmVtZW50Lm1lYXN1cmVPcGVuZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgZW5hYmxlQWN0aW9uYmFyID0gKCkgPT4ge1xuICAgIGluaXRXaWRnZXQoJ1NlYXJjaCcsIHRoaXMudmlldyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1hY3Rpb24tYmFyIGNhbGNpdGUtYWN0aW9uJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIH0pO1xuICB9O1xuICBzaWRlU2V0KHNpZGU6IHN0cmluZykge1xuICAgIGlmIChzaWRlID09PSAncmlnaHQnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9vbEdyb3VwJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICBpZiAoc2lkZSA9PT0gJ2xlZnQnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoR3JvdXAnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICAgIHRoaXMuYWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWN0aW9uLWJhciBjYWxjaXRlLWFjdGlvbicpO1xuICAgIC8vIHRoaXMuYWN0aW9ucz8uZm9yRWFjaCgoYWN0aW9uOiBFbGVtZW50KSA9PiB7XG4gICAgLy8gICBhY3Rpb24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IGFueSkgPT4ge1xuICAgIC8vICAgICBkZWJ1Z2dlcjtcblxuICAgIC8vICAgICB0aGlzLnRvZ2dsZUFjdGlvbihlLnRhcmdldCk7XG4gICAgLy8gICAgIGluaXRXaWRnZXQoZS50YXJnZXQudGV4dCwgdGhpcy52aWV3KTtcbiAgICAvLyAgICAgdGhpcy5hY3Rpb25zLmZvckVhY2goKGE6IGFueSkgPT4ge1xuICAgIC8vICAgICAgIGlmIChhLnRleHQgIT0gZS50YXJnZXQudGV4dCkge1xuICAgIC8vICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMDApIHtcbiAgICAvLyAgICAgICAgICAgaWYgKGEuZ2V0QXR0cmlidXRlKCdzaWRlJykgPT09IGFjdGlvbi5nZXRBdHRyaWJ1dGUoJ3NpZGUnKSkge1xuICAgIC8vICAgICAgICAgICAgIGEucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIGFjdGlvbi5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0pO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDAwKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnRBY3Rpb25iYXInKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjbGVmdEFjdGlvbmJhcicpXG4gICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJyN0b29sR3JvdXAnKVxuICAgICAgICAgICAgPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNhY3Rpb25CYXInKVxuICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCcjdG9vbEdyb3VwJylcbiAgICAgICAgICAgID8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnRBY3Rpb25iYXInKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYWN0aW9uQmFyJylcbiAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignI3Rvb2xHcm91cCcpXG4gICAgICAgICAgICA/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYW5lbC5sZWZ0JykuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcsICcnKTtcbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVvcmRlclBhbmVscygpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IEFjdGlvbkJhclZpZXdNb2RlbCBmcm9tICcuL0FjdGlvbkJhci9BY3Rpb25CYXJWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkJhclByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBzaWRlPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGFjdGlvbmJhci1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5BY3Rpb25CYXInKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQmFyIGV4dGVuZHMgZGVjbGFyZWQoV2lkZ2V0KSB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLnNpZGUnKVxuICBzaWRlOiBzdHJpbmc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYWN0aW9ucycpXG4gIGFjdGlvbnM6IE5vZGVMaXN0T2Y8RWxlbWVudD47XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudG9nZ2xlQWN0aW9uJylcbiAgdG9nZ2xlQWN0aW9uOiBGdW5jdGlvbjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5lbmFibGVBY3Rpb25iYXInKVxuICBlbmFibGVBY3Rpb25iYXI6IEZ1bmN0aW9uO1xuICBAYWxpYXNPZigndmlld01vZGVsLmluaXRBY3Rpb25zJylcbiAgaW5pdEFjdGlvbnM6IEZ1bmN0aW9uO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IEFjdGlvbkJhclZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogQWN0aW9uQmFyVmlld01vZGVsID0gbmV3IEFjdGlvbkJhclZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBBY3Rpb25CYXJQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgc2VhcmNoR3JvdXBDcmVhdGVkID0gKGl0ZW06IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuc2lkZSA9PT0gJ2xlZnQnKSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5pdEFjdGlvbnMoKTtcbiAgICB9XG4gIH07XG4gIHRvb2xHcm91cENyZWF0ZWQgPSAoaXRlbTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAodGhpcy5zaWRlID09PSAncmlnaHQnKSB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAwMCkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnRBY3Rpb25iYXInKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5hY3Rpb25zLmxlbmd0aCkge1xuICAgICAgdGhpcy5pbml0QWN0aW9ucygpO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxjYWxjaXRlLWFjdGlvbi1iYXIgZXhwYW5kPVwiZmFsc2VcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24tZ3JvdXAgaWQ9XCJzZWFyY2hHcm91cFwiIGFmdGVyQ3JlYXRlPXt0aGlzLnNlYXJjaEdyb3VwQ3JlYXRlZH0+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIlNlYXJjaFwiIGljb249XCJzZWFyY2hcIiBzaWRlPVwicmlnaHRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJMb2NhdGlvblwiIGljb249XCJwaW5cIiBzaWRlPVwicmlnaHRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJMYXllcnNcIiBpY29uPVwibGF5ZXJzXCIgc2lkZT1cInJpZ2h0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiTGVnZW5kXCIgaWNvbj1cImxlZ2VuZFwiIHNpZGU9XCJyaWdodFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIkJhc2VtYXBzXCIgaWNvbj1cImJhc2VtYXBcIiBzaWRlPVwicmlnaHRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgIDwvY2FsY2l0ZS1hY3Rpb24tZ3JvdXA+XG5cbiAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24tZ3JvdXAgaWQ9XCJ0b29sR3JvdXBcIiBhZnRlckNyZWF0ZT17dGhpcy50b29sR3JvdXBDcmVhdGVkfT5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiU2VsZWN0XCIgaWNvbj1cInNlbGVjdGlvblwiIHNpZGU9XCJsZWZ0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiTWVhc3VyZVwiIGljb249XCJtZWFzdXJlXCIgc2lkZT1cImxlZnRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJEcmF3XCIgaWNvbj1cInBlbmNpbC1tYXJrXCIgc2lkZT1cImxlZnRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJCb29rbWFya3NcIiBpY29uPVwiYm9va21hcmtcIiBzaWRlPVwibGVmdFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIlByaW50XCIgaWNvbj1cInByaW50XCIgc2lkZT1cImxlZnRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgIDwvY2FsY2l0ZS1hY3Rpb24tZ3JvdXA+XG4gICAgICAgIDwvY2FsY2l0ZS1hY3Rpb24tYmFyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuL2Nzcy9tYWluLmNzcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL2RhdGEvYXBwJztcbmltcG9ydCB7IGluaXRUaXBzIH0gZnJvbSAnLi90aXBzJztcbmltcG9ydCB7IHNob3dBbGVydCB9IGZyb20gJy4vYWxlcnQnO1xuLy9pbXBvcnQgeyB0b2dnbGVBY3Rpb24sIGVuYWJsZUFjdGlvbmJhciB9IGZyb20gJy4vYWN0aW9uYmFyJztcbmltcG9ydCBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldyc7XG5cbmltcG9ydCBXZWJNYXAgZnJvbSAnZXNyaS9XZWJNYXAnO1xuLy8gd2lkZ2V0IHV0aWxzXG5pbXBvcnQgeyBpbml0V2lkZ2V0cywgc2VsZWN0LCBwcm9wZXJ0eVNlYXJjaCwgbGF5ZXJzIH0gZnJvbSAnLi93aWRnZXRzJztcbmltcG9ydCB7IGluaXRQYW5lbHMsIGluaXRQYW5lbEhlYWRlcnMgfSBmcm9tICcuL3BhbmVscyc7XG5pbXBvcnQgeyBpbml0TWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQWN0aW9uQmFyIGZyb20gJy4vd2lkZ2V0cy9BY3Rpb25CYXInO1xuY29uc3QgYWN0aW9uQmFyID0gbmV3IEFjdGlvbkJhcih7IHNpZGU6ICdyaWdodCcsIGNvbnRhaW5lcjogJ2FjdGlvbkJhcicgfSk7XG5cbm5ldyBBY3Rpb25CYXIoeyBzaWRlOiAnbGVmdCcsIGNvbnRhaW5lcjogJ2xlZnRBY3Rpb25iYXInIH0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHZpZXcgPSBuZXcgTWFwVmlldyh7XG4gIGNvbnRhaW5lcjogJ3ZpZXdEaXYnLFxuICBtYXBcbn0pO1xuXG5mdW5jdGlvbiBjaGVja0xvY2FsU3RvcmFnZSh2aWV3OiBNYXBWaWV3KSB7XG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzJykpIHtcbiAgICBjb25zdCB3ZWJtYXA6IFdlYk1hcCA9IFdlYk1hcC5mcm9tSlNPTihKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hcHMnKSBhcyBzdHJpbmcpKTtcbiAgICB3ZWJtYXAubG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgdmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBjb25zdCBseXIgPSB3ZWJtYXAuYWxsTGF5ZXJzLmZpbmQobCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGxheWVyLmlkID09PSBsLmlkO1xuICAgICAgICB9KTtcbiAgICAgICAgbGF5ZXIudmlzaWJsZSA9IGx5cj8udmlzaWJsZTtcbiAgICAgICAgbGF5ZXIub3BhY2l0eSA9IGx5cj8ub3BhY2l0eTtcbiAgICAgIH0pO1xuICAgICAgdmlldy5tYXAuYmFzZW1hcCA9IHdlYm1hcC5iYXNlbWFwO1xuICAgICAgdmlldy5leHRlbnQgPSB3ZWJtYXAuaW5pdGlhbFZpZXdQcm9wZXJ0aWVzLnZpZXdwb2ludC50YXJnZXRHZW9tZXRyeS5leHRlbnQ7XG4gICAgfSk7XG4gIH1cbn1cbi8vaGFuZGxlIHdoZW4gdmlldyBpcyByZWFkeVxudmlldy53aGVuKCgpID0+IHtcbiAgY2hlY2tMb2NhbFN0b3JhZ2Uodmlldyk7XG4gIHZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICBpZiAobGF5ZXIudHlwZSAhPSAnZ3JvdXAnKSB7XG4gICAgICBsYXllci53YXRjaCgndmlzaWJsZScsIHZpc2libGUgPT4ge1xuICAgICAgICBsYXllcnM/LmxheWVyTGlzdD8ub3BlcmF0aW9uYWxJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmxheWVyLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gaXRlbS5jaGlsZHJlbi5maW5kKGkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaS5sYXllciA9PT0gbGF5ZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICBjaGlsZC5wYW5lbC5vcGVuID0gdmlzaWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxheWVyLndhdGNoKCd2aXNpYmxlJywgdmlzaWJsZSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gbGF5ZXJzPy5sYXllckxpc3Qub3BlcmF0aW9uYWxJdGVtcy5maW5kKGkgPT4ge1xuICAgICAgICAgIHJldHVybiBpLmxheWVyID09PSBsYXllcjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgIGdyb3VwLm9wZW4gPSB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBwcm9wZXJ0eUxheWVyID0gbWFwLmFsbExheWVycy5maW5kKGxheWVyID0+IHtcbiAgICByZXR1cm4gbGF5ZXIudGl0bGUgPT09ICdQcm9wZXJ0eScgJiYgbGF5ZXIudHlwZSA9PT0gJ2ZlYXR1cmUnO1xuICB9KTtcbiAgdmlldy5vbignaG9sZCcsIGUgPT4ge1xuICAgIHByb3BlcnR5U2VhcmNoLmdlb21ldHJ5ID0gZS5tYXBQb2ludDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vdG9nZ2xlQWN0aW9uKCdTZWFyY2gnKTtcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG4gIHZpZXdcbiAgICAud2hlbkxheWVyVmlldyhwcm9wZXJ0eUxheWVyKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBMb2FkZXInKT8udG9nZ2xlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgIHByb3BlcnR5U2VhcmNoLnByb3BlcnR5TGF5ZXIgPSBwcm9wZXJ0eUxheWVyIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XG4gICAgICAvL3NlYXJjaCBieSBnZW9tZXRyeSBhZnRlciBza2V0Y2ggY3JlYXRpb24gaW4gc2VsZWN0IHdpZGdldFxuICAgICAgc2VsZWN0LnZpZXdNb2RlbC53YXRjaCgnZ2VvbWV0cnknLCBnZW9tZXRyeSA9PiB7XG4gICAgICAgIHByb3BlcnR5U2VhcmNoLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgICAgIGFjdGlvbkJhci5hY3Rpb25zLmZvckVhY2goKGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGFjdGlvbi50ZXh0ID09PSAnU2VhcmNoJykge1xuICAgICAgICAgICAgYWN0aW9uQmFyLnRvZ2dsZUFjdGlvbihhY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgocmVhc29uOiBhbnkpID0+IHtcbiAgICAgIC8vb24gZXJyb3IgbG9hZGluZyBwcm9wZXJ0eSBsYXllciwgZGlzcGxheSBhbGVydFxuICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcbiAgICAgIHNob3dBbGVydCgnUHJvcGVydHkgbGF5ZXIgZGlkIG5vdCBsb2FkLiBQbGVhc2UgY29udGFjdCBpTUFQUyBIZWxwIERlc2suJywgJ3JlZCcpO1xuICAgIH0pO1xufSk7XG52aWV3LndoZW4oaW5pdFdpZGdldHMpO1xudmlldy53aGVuKGluaXRUaXBzKTtcbi8vc2F2ZSB3ZWIgbWFwIHRvIGxvY2FsIHN0b3JhZ2Ugb24gcGFnZWhpZGVcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlaGlkZScsICgpID0+IHtcbiAgdmlldy5tYXAucmVtb3ZlTWFueShcbiAgICB2aWV3Lm1hcC5hbGxMYXllcnNcbiAgICAgIC5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICByZXR1cm4gbGF5ZXIudHlwZSA9PT0gJ2dyb3VwJyAmJiAhKGxheWVyIGFzIF9fZXNyaS5Hcm91cExheWVyKS5sYXllcnMubGVuZ3RoO1xuICAgICAgfSlcbiAgICAgIC50b0FycmF5KClcbiAgKTtcbiAgY29uc3QganNvbiA9ICh2aWV3Lm1hcCBhcyBhbnkpLnRvSlNPTigpO1xuICBqc29uLmluaXRpYWxTdGF0ZS52aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkgPSB2aWV3LmV4dGVudDtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbWFwcycsIEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbn0pO1xuXG4vL3Nob3cgZmlyc3QgcGFuZWwgb24gZGV2aWNlcyB3aWRlciB0aGFuIDUwMHB4IGJ5IGRlZmF1bHRcbmlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA1MDApIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1wYW5lbC5yaWdodCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1wYW5lbC5yaWdodCcpPy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xufVxuXG4vL21vZGlmeSBET00gYWZ0ZXIgbWFwIHZpZXcgbG9hZHNcbnZpZXcud2hlbigoKSA9PiB7XG4gIGluaXRQYW5lbHMoYWN0aW9uQmFyLmFjdGlvbnMpO1xuICBhY3Rpb25CYXIudmlldyA9IHZpZXc7XG4gIGFjdGlvbkJhci5lbmFibGVBY3Rpb25iYXIoKTtcbn0pO1xuXG5pbml0UGFuZWxIZWFkZXJzKCk7XG5pbml0TWVudSgpO1xuIl0sIm5hbWVzIjpbIndoZW5EZWZpbmVkT25jZSIsIndoZW5EZWZpbmVkIiwicHJvcGVydHkiLCJzdWJjbGFzcyIsInRzeCIsImFsaWFzT2YiLCJyZW5kZXJhYmxlIiwiQ1NTIiwid2F0Y2hVdGlscyIsImRlY2xhcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUNPLElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7RUFDOUIsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLGtDQUFrQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOzs7RUNGdEUsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDO0VBQzNCLElBQU0sUUFBUSxHQUFHLFVBQUMsS0FBYTs7TUFDN0IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7VUFD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
