
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
              link.href = 'https://js.arcgis.com/4.16/esri/themes/' + theme + '/main.css';
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
          debugger;
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
                          var relationship = layer.relationships.find(function (r) {
                              return r.name === 'ADDRESSES';
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
          id: 'd3d02d5e35324b769469b99121c0e996'
      },
      spatialReference: { wkid: 102100 }
  });
  var condosTable = new FeatureLayer({
      portalItem: {
          id: 'd3d02d5e35324b769469b99121c0e996'
      },
      layerId: 1,
      spatialReference: { wkid: 102100 },
      popupTemplate: popupTemplate
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
                  debugger;
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
                          var actions_1 = document.querySelectorAll('calcite-action-bar calcite-action');
                          actions_1.forEach(function (action) {
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
                                  debugger;
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
  initPanels();
  watchUtils__default.watch(actionBar, 'actions', function (actions) {
      if (actions.length && !exports.view) {
          actionBar.enableActionbar();
          exports.view = new MapView({
              container: 'viewDiv',
              map: map
          });
          exports.view.when(function () {
              actionBar.view = exports.view;
              leftActionBar.view = exports.view;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FwcC50cyIsIi4uLy4uL3NyYy9tZW51LnRzIiwiLi4vLi4vc3JjL3RpcHMudHMiLCIuLi8uLi9zcmMvYWxlcnQudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaC9Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL1Byb3BlcnR5U2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUvTWVhc3VyZVZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUudHN4IiwiLi4vLi4vc3JjL2RhdGEvc2VhcmNoLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy9EcmF3Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9TZWxlY3QvU2VsZWN0Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvU2VsZWN0LnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL0Jhc2VNYXBzL0Jhc2VNYXBzVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQmFzZU1hcHMudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvTGF5ZXJzL0xheWVyc1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xheWVycy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaC9Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xvY2F0aW9uU2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL092ZXJ2aWV3TWFwL092ZXJ2aWV3TWFwVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvT3ZlcnZpZXdNYXAudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvQ2xlYXIvQ2xlYXJWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9DbGVhci50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy50cyIsIi4uLy4uL3NyYy9wYW5lbHMudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9BY3Rpb25CYXIvQWN0aW9uQmFyVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQWN0aW9uQmFyLnRzeCIsIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViTWFwIGZyb20gJ2VzcmkvV2ViTWFwJztcbmV4cG9ydCBsZXQgbWFwID0gbmV3IFdlYk1hcCgpO1xubWFwID0gbmV3IFdlYk1hcCh7IHBvcnRhbEl0ZW06IHsgaWQ6ICc5NTA5MjQyODc3NGM0YjFmYjZhM2I2ZjVmZWQ5ZmJjNCcgfSB9KTtcbi8vIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzJykpIHtcbi8vICAgbWFwID0gV2ViTWFwLmZyb21KU09OKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpIGFzIHN0cmluZykpO1xuLy8gfVxuIiwiZXhwb3J0IGxldCB0aGVtZSA9ICdsaWdodCc7XG5jb25zdCBzZXRUaGVtZSA9ICh0aGVtZTogc3RyaW5nKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtY29sb3InKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtdGlwLW1hbmFnZXInKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtZHJvcGRvd24nKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWxlcnQnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtbW9kYWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYmxvY2snKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGljay1saXN0JykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFjdGlvbi1iYXInKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgdGhlbWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyb3dQYXRoJyk/LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhlbWUgPT09ICdsaWdodCcgPyAnYmxhY2snIDogJ3doaXRlJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGluaycpLmZvckVhY2gobGluayA9PiB7XG4gICAgaWYgKGxpbmsuaHJlZi5pbmNsdWRlcyh0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpKSB7XG4gICAgICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMTYvZXNyaS90aGVtZXMvJyArIHRoZW1lICsgJy9tYWluLmNzcyc7XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgY29uc3QgaW5pdE1lbnUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtZHJvcGRvd24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZURyb3Bkb3duU2VsZWN0JywgKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBlLmN1cnJlbnRUYXJnZXQuc2VsZWN0ZWRJdGVtc1swXT8uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIHRoZW1lID0gdmFsdWU7XG4gICAgc2V0VGhlbWUodGhlbWUpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSB7XG4gICAgY29uc3QgdGhlbWVOYW1lOiBzdHJpbmcgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgYXMgc3RyaW5nO1xuICAgIHNldFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgICAgaWYgKChlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmcpICE9IHRoZW1lTmFtZSkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgc3RyaW5nO1xuICAgICAgICB0aGVtZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKChlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmcpID09PSB0aGVtZU5hbWUpIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSB7XG4gICAgc2V0VGhlbWUoJ2RhcmsnKTtcbiAgICBkZWJ1Z2dlcjtcbiAgfVxufTtcbiIsImltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi9tZW51JztcblxuY29uc3QgdGlwR3JvdXBzID0gW1xuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdzZWxlY3RUaXAnLFxuICAgICAgdGl0bGU6ICdTZWxlY3Rpb24nLFxuICAgICAgdGlwczogW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIGRyYXcgYSBjb250aW51b3VzIGxpbmUgb3IgcG9seWdvbiwgbG9uZyBwcmVzcyBhbmQgZHJhZyB5b3VyIGN1cnNvcicsXG4gICAgICAgICAgdGl0bGU6ICdGcmVlaGFuZCBEcmF3aW5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIGRyYXcgYSBjb250aW51b3VzIGxpbmUgb3IgcG9seWdvbiwgbG9uZyBwcmVzcyBhbmQgZHJhZyB5b3VyIGN1cnNvcicsXG4gICAgICAgICAgdGl0bGU6ICdGcmVlaGFuZCBEcmF3aW5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdwcm9wZXJ0eVNlYXJjaFRpcCcsXG4gICAgICB0aXRsZTogJ1Byb3BlcnR5IFNlYXJjaCcsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ1RvIHNlYXJjaCBieSBhIHBvcnRpb24gb2YgYW4gb3duZXIgbmFtZSBvciBhZGRyZXNzLCBoaXQgZW50ZXIgd2l0aG91dCBzZWxlY3RpbmcgZm9ybSB0aGUgbGlzdCBvZiBzdWdnZXN0aW9ucy4nLFxuICAgICAgICAgIHRpdGxlOiAnV2lsZGNhcmQgU2VhcmNoJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIHF1aWNrbHkgc2VsZWN0IGEgcHJvcGVydHkgZnJvbSB0aGUgbWFwLCBsb25nIHByZXNzIG9uIGEgcHJvcGVydHkgb24gdGhlIG1hcC4nLFxuICAgICAgICAgIHRpdGxlOiAnTG9uZyBQcmVzcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUbyBzZWxlY3QgYnkgYSBsb2NhdGlvbiB1c2UgdGhlIHByb3BlcnR5IHNlbGVjdGlvbiB0b29sLicsXG4gICAgICAgICAgdGl0bGU6ICdTZWxlY3QgQnkgTG9jYXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnUHJldmlvdXMgXCJ0YWJcIiBsYXlvdXQgaGFzIGJlZW4gY29uc29saWRhdGVkIGludG8gYSBzaW5nbGUgc2Nyb2xsYWJsZSBwYW5lbC4nLFxuICAgICAgICAgIHRpdGxlOiAnU2luZ2xlIERldGFpbHMgUGFuZWwnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwYW5lbDoge1xuICAgICAgbmFtZTogJ2Jhc2VtYXBUaXAnLFxuICAgICAgdGl0bGU6ICdCYXNlbWFwcycsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ1RoZSBpbWFnZXJ5IGFuZCBpbWFnZXJ5IGh5YnJpZCBiYXNlIG1hcHMgbGlzdGVkIHVuZGVyIHRoZSBtYXBzIHRhYiBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBsYXRlc3QgaW1hZ2VyeSBmcm9tIFJhbGVpZ2ggKDIwMTkpIGFuZCBmcm9tIHRoZSBTdGF0ZSBvZiBOb3J0aCBDYXJvbGluYSAoMjAxNykuJyxcbiAgICAgICAgICB0aXRsZTogJ0ltYWdlcnkgQmFzZW1hcHMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbl07XG5leHBvcnQgZnVuY3Rpb24gaW5pdFRpcHMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXAnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLXRpcC1tYW5hZ2VyJyk/LnJlbW92ZSgpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGNvbnN0IG1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcC1tYW5hZ2VyJyk7XG4gICAgICBtYW5hZ2VyLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gICAgICBjb25zdCB0aXBHcm91cCA9IHRpcEdyb3Vwcy5maW5kKGdyb3VwID0+IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnBhbmVsLm5hbWUgPT09IGl0ZW0uaWQ7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcC1ncm91cCcpO1xuICAgICAgZ3JvdXAuc2V0QXR0cmlidXRlKCd0ZXh0LWdyb3VwLXRpdGxlJywgKHRpcEdyb3VwIGFzIGFueSk/LnBhbmVsLnRpdGxlKTtcbiAgICAgIG1hbmFnZXIuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgICAgdGlwR3JvdXA/LnBhbmVsLnRpcHMuZm9yRWFjaCh0aXAgPT4ge1xuICAgICAgICBjb25zdCBjYWxjaXRlVGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAnKTtcbiAgICAgICAgY2FsY2l0ZVRpcC5zZXRBdHRyaWJ1dGUoJ2hlYWRpbmcnLCB0aXAudGl0bGUpO1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLmlubmVySFRNTCA9IHRpcC5tZXNzYWdlO1xuICAgICAgICBjYWxjaXRlVGlwLmFwcGVuZENoaWxkKHApO1xuICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjYWxjaXRlVGlwKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQ/LmJvZHk/LmFwcGVuZENoaWxkKG1hbmFnZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzaG93QWxlcnQodGV4dDogc3RyaW5nLCBjb2xvcjogc3RyaW5nKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtYWxlcnQnKT8ucmVtb3ZlKCk7XG4gIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1hbGVydCcpO1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdzbG90JywgJ2FsZXJ0LW1lc3NhZ2UnKTtcbiAgbWVzc2FnZS5pbm5lckhUTUwgPSB0ZXh0O1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgY29sb3IpO1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdpY29uJywgJycpO1xuXG4gIGFsZXJ0LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFsZXJ0KTtcbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoJztcbmltcG9ydCBGZWF0dXJlVGFibGUgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZSc7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XG5pbXBvcnQgTGF5ZXJTZWFyY2hTb3VyY2UgZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaC9MYXllclNlYXJjaFNvdXJjZSc7XG5pbXBvcnQgRmllbGRDb2x1bW5Db25maWcgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZS9GaWVsZENvbHVtbkNvbmZpZyc7XG5pbXBvcnQgTWVudUJ1dHRvbkl0ZW0gZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZS9HcmlkL3N1cHBvcnQvQnV0dG9uTWVudUl0ZW0nO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlLCB3aGVuRGVmaW5lZCB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBTZWFyY2hTb3VyY2UgZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaC9TZWFyY2hTb3VyY2UnO1xuaW1wb3J0IEZlYXR1cmVTZXQgZnJvbSAnZXNyaS90YXNrcy9zdXBwb3J0L0ZlYXR1cmVTZXQnO1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Qcm9wZXJ0eVNlYXJjaC5Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQHByb3BlcnR5KCkgYWRkcmVzc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQHByb3BlcnR5KCkgcHJvcGVydHlMYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG5cbiAgQHByb3BlcnR5KCkgc2VhcmNoV2lkZ2V0OiBlc3JpLndpZGdldHNTZWFyY2g7XG4gIEBwcm9wZXJ0eSgpIGZlYXR1cmVUYWJsZTogZXNyaS5GZWF0dXJlVGFibGU7XG4gIEBwcm9wZXJ0eSgpIGZlYXR1cmU6IGVzcmkuRmVhdHVyZTtcbiAgQHByb3BlcnR5KCkgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG5cbiAgY2x1c3RlclBvaW50czogRmVhdHVyZUxheWVyO1xuXG4gIGdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBpZDogJ3Byb3BlcnR5LXNlbGVjdCcsIGxpc3RNb2RlOiAnaGlkZScsIG1pblNjYWxlOiAxOTIwMCB9KTtcbiAgc2luZ2xlU3ltYm9sID0ge1xuICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgc3R5bGU6ICdub25lJyxcbiAgICBvdXRsaW5lOiB7IHdpZHRoOiAyLjUsIGNvbG9yOiBbMjU1LCA4MiwgODIsIDFdIH0sXG4gICAgY29sb3I6IFsyNTMsIDQ2LCA2NSwgMC4yNV1cbiAgfTtcbiAgbXVsdGlTeW1ib2wgPSB7XG4gICAgdHlwZTogJ3NpbXBsZS1maWxsJyxcbiAgICBzdHlsZTogJ25vbmUnLFxuICAgIG91dGxpbmU6IHsgd2lkdGg6IDIuNSwgY29sb3I6IFsyNDksIDI0MywgMCwgMV0gfSxcbiAgICBjb2xvcjogWzI1MywgNDYsIDY1LCAwLjI1XVxuICB9O1xuICBzZWxlY3RlZFByb3BlcnR5OiBlc3JpLkdyYXBoaWM7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAnY29uZG9zVGFibGUnLCB0aGlzLmluaXRTZWFyY2guYmluZCh0aGlzKSk7XG4gICAgd2hlbkRlZmluZWQodGhpcywgJ2dlb21ldHJ5JywgdGhpcy5zZWFyY2hCeUdlb21ldHJ5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc2VhcmNoQnlHZW9tZXRyeShnZW9tZXRyeTogZXNyaS5HZW9tZXRyeSkge1xuICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgLnF1ZXJ5RmVhdHVyZXMoeyBnZW9tZXRyeTogZ2VvbWV0cnksIHJldHVybkdlb21ldHJ5OiB0cnVlLCBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnLCAnUkVJRCddIH0pXG4gICAgICAudGhlbihwcm9wZXJ0eVJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMucHJvcGVydHlMYXllci5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0NPTkRPUyc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUxheWVyXG4gICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBsZXQgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQocmVzdWx0W2tleV0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBmZWF0dXJlc1swXS5nZW9tZXRyeSA9IHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzWzBdLmdlb21ldHJ5O1xuXG4gICAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZShmZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIFtmZWF0dXJlc1swXS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJyldKTtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVTZXQ6IEZlYXR1cmVTZXQgPSBuZXcgRmVhdHVyZVNldCh7IGZlYXR1cmVzOiBbXSB9KTtcbiAgICAgICAgICAgIHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICBmZWF0dXJlLnN5bWJvbCA9XG4gICAgICAgICAgICAgICAgcHJvcGVydHlSZXN1bHQuZmVhdHVyZXMubGVuZ3RoID4gMSA/ICh0aGlzLm11bHRpU3ltYm9sIGFzIGFueSkgOiAodGhpcy5zaW5nbGVTeW1ib2wgYXMgYW55KTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlSZXN1bHQuZmVhdHVyZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5nZW9tZXRyeSA9IHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzWzBdLmdlb21ldHJ5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgZmVhdHVyZXMpO1xuICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmFkZChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgZmVhdHVyZVNldC5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZENsdXN0ZXJHcmFwaGljcyhmZWF0dXJlU2V0KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIgPSAoZmllbGRzOiBlc3JpLkZpZWxkW10sIGZlYXR1cmVzOiBlc3JpLkdyYXBoaWNbXSkgPT4ge1xuICAgIHJldHVybiBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgc291cmNlOiBmZWF0dXJlcyxcbiAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnLFxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogdGhpcy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgICB9KTtcbiAgfTtcbiAgYWRkQ2x1c3RlckdyYXBoaWNzID0gKHJlc3VsdDogZXNyaS5GZWF0dXJlU2V0KSA9PiB7XG4gICAgY29uc3QgcG9pbnRzOiBHcmFwaGljW10gPSBbXTtcbiAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgIGNvbnN0IHB0ID0gZmVhdHVyZS5jbG9uZSgpO1xuICAgICAgcHQuZ2VvbWV0cnkgPSAocHQuZ2VvbWV0cnkgYXMgZXNyaS5Qb2x5Z29uKS5jZW50cm9pZDtcbiAgICAgIHBvaW50cy5wdXNoKHB0KTtcbiAgICB9KTtcbiAgICB0aGlzLmNsdXN0ZXJQb2ludHMucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiAnMT0xJywgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLCBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLmNsdXN0ZXJQb2ludHMuYXBwbHlFZGl0cyh7IGRlbGV0ZUZlYXR1cmVzOiByZXN1bHQuZmVhdHVyZXMgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY2x1c3RlclBvaW50cy5hcHBseUVkaXRzKHsgYWRkRmVhdHVyZXM6IHBvaW50cyB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsdXN0ZXJQb2ludHMucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBhZGRHcmFwaGljcyA9IChyZXN1bHQ6IGVzcmkuRmVhdHVyZVNldCkgPT4ge1xuICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG4gICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICBmZWF0dXJlLnN5bWJvbCA9IHJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxID8gKHRoaXMubXVsdGlTeW1ib2wgYXMgYW55KSA6ICh0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnkpO1xuICAgICAgdGhpcy5ncmFwaGljcy5hZGQoZmVhdHVyZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENsdXN0ZXJHcmFwaGljcyhyZXN1bHQpO1xuICB9O1xuXG4gIGdldFByb3BlcnR5ID0gKG9pZHM6IGFueVtdLCBzb3VyY2U/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmNvbmRvc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgIHJldHVybiByLm5hbWUgPT09ICdQUk9QRVJUWSc7XG4gICAgfSk7XG4gICAgdGhpcy5jb25kb3NUYWJsZVxuICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHtcbiAgICAgICAgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsXG4gICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZSxcbiAgICAgICAgICAgIG91dFNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5mZWF0dXJlPy5ncmFwaGljKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljLmdlb21ldHJ5ID0gcmVzdWx0Py5mZWF0dXJlc1swXS5nZW9tZXRyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmlldy5nb1RvKHJlc3VsdC5mZWF0dXJlcyk7XG5cbiAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkR3JhcGhpY3MocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHNlYXJjaENvbXBsZXRlID0gKGV2ZW50OiBlc3JpLlNlYXJjaFNlYXJjaENvbXBsZXRlRXZlbnQpID0+IHtcbiAgICBpZiAoIXRoaXMuc2VhcmNoV2lkZ2V0LnZpZXdNb2RlbC5zZWxlY3RlZFN1Z2dlc3Rpb24pIHtcbiAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG5cbiAgICAgIGxldCB3aGVyZSA9ICcnO1xuXG4gICAgICBpZiAoIXRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSkge1xuICAgICAgICB3aGVyZSA9IGBPV05FUiBsaWtlICcke2V2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKX0lJyBPUiBSRUlEIGxpa2UgJyR7ZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUnIE9SIFBJTl9OVU0gbGlrZSAnJHtldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCl9JSdgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCh0aGlzLnNlYXJjaFdpZGdldC5hY3RpdmVTb3VyY2UgYXMgYW55KT8uc2VhcmNoRmllbGRzLmluY2x1ZGVzKCdPV05FUicpKSB7XG4gICAgICAgICAgd2hlcmUgPSBgT1dORVIgbGlrZSAnJSR7ZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUnYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ1BJTl9OVU0nKSkge1xuICAgICAgICAgIHdoZXJlID0gYFBJTl9OVU0gbGlrZSAnJSR7ZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUnYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ1JFSUQnKSkge1xuICAgICAgICAgIHdoZXJlID0gXCJSRUlEIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdGFibGVGZWF0dXJlczogYW55W10gPSBbXTtcblxuICAgICAgdGhpcy5jb25kb3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6IHdoZXJlLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGFibGVGZWF0dXJlcyA9IHJlc3VsdC5mZWF0dXJlcztcbiAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIHx8XG4gICAgICAgICAgKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ0FERFJFU1MnKVxuICAgICAgICApIHtcbiAgICAgICAgICB3aGVyZSA9IGBBRERSRVNTIGxpa2UgJyUke2V2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKX0lJ2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2hlcmUgPSAnQUREUkVTUyBJUyBOVUxMJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogd2hlcmUsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuYWRkcmVzc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdBRERSRVNTRVMnO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGFkZHJPaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgYWRkck9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgJiYgYWRkck9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZVxuICAgICAgICAgICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwLmlkLCBvYmplY3RJZHM6IGFkZHJPaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVGZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgdGFibGVGZWF0dXJlcyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgICAgIGlmICh0YWJsZUZlYXR1cmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gbmV3IEdyYXBoaWMoKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgndGFibGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUucmVuZGVyTm93KCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCB0YWJsZUZlYXR1cmVzKTtcbiAgICAgICAgICAgIGlmICh0YWJsZUZlYXR1cmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBuZXcgR3JhcGhpYygpO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5yZW5kZXJOb3coKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChldmVudC5udW1SZXN1bHRzKSB7XG4gICAgICAgIGxldCBsYXllciA9IChldmVudC5yZXN1bHRzWzBdLnNvdXJjZSBhcyBMYXllclNlYXJjaFNvdXJjZSkubGF5ZXIgYXMgRmVhdHVyZUxheWVyO1xuICAgICAgICBpZiAoIWxheWVyICYmIGV2ZW50LnJlc3VsdHNbMF0uc291cmNlLm5hbWUgPT09ICdPd25lcicpIHtcbiAgICAgICAgICBsYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsYXllciAmJiBbJ1NpdGUgQWRkcmVzcycsICdTdHJlZXQgTmFtZSddLmluY2x1ZGVzKGV2ZW50LnJlc3VsdHNbMF0uc291cmNlLm5hbWUpKSB7XG4gICAgICAgICAgbGF5ZXIgPSB0aGlzLmFkZHJlc3NUYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBldmVudC5yZXN1bHRzWzBdLnJlc3VsdHMuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goci5mZWF0dXJlLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxheWVyLmxheWVySWQgPT09IDQpIHtcbiAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXAgPSBsYXllci5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgICByZXR1cm4gci5uYW1lID09PSAnQUREUkVTU0VTJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocmVsYXRpb25zaGlwICYmIG9pZHMpIHtcbiAgICAgICAgICAgIGxheWVyXG4gICAgICAgICAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXAuaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5sYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBuZXcgR3JhcGhpYygpO1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmUoZmVhdHVyZXNbMF0sIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsIFtdLCBvaWRzKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgZmVhdHVyZXMpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb25kb3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gbmV3IEdyYXBoaWMoKTtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKHJlc3VsdC5mZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgcmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc2V0RmVhdHVyZShmZWF0dXJlOiBlc3JpLkdyYXBoaWMsIHZpZXc6IGVzcmkuTWFwVmlldywgbWVkaWFJbmZvczogYW55W10sIG9pZHM6IGFueVtdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgncmVpZCcsIGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdSRUlEJykpO1xuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsIGAke2xvY2F0aW9uLnBhdGhuYW1lfT8ke3BhcmFtc31gKTtcbiAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmNvbmRvc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgIHJldHVybiByLm5hbWUgPT09ICdQSE9UT1MnO1xuICAgIH0pO1xuICAgIGNvbnN0IG9pZCA9IGZlYXR1cmUuZ2V0T2JqZWN0SWQoKTtcbiAgICBtZWRpYUluZm9zID0gW107XG4gICAgdGhpcy5jb25kb3NUYWJsZVxuICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICBtZWRpYUluZm9zLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICAgIGNhcHRpb246ICcnLFxuICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHNvdXJjZVVSTDogYGh0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9yZWFsZXN0YXRlL3Bob3Rvcy9tdmlkZW8vJHtmZWF0dXJlLmdldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAgICdJTUFHRURJUidcbiAgICAgICAgICAgICAgICApfS8ke2ZlYXR1cmUuZ2V0QXR0cmlidXRlKCdJTUFHRU5BTUUnKX1gXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lZGlhID0gKHRoaXMuY29uZG9zVGFibGUucG9wdXBUZW1wbGF0ZS5jb250ZW50IGFzIGVzcmkuQ29udGVudFtdKS5maW5kKChjb250ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gY29udGVudD8udHlwZSA9PT0gJ21lZGlhJztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgIChtZWRpYSBhcyBlc3JpLk1lZGlhQ29udGVudCkubWVkaWFJbmZvcyA9IG1lZGlhSW5mb3M7XG4gICAgICAgIH1cbiAgICAgICAgZmVhdHVyZS5sYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgIGZlYXR1cmUucG9wdXBUZW1wbGF0ZSA9IChmZWF0dXJlLmxheWVyIGFzIGVzcmkuRmVhdHVyZUxheWVyKS5wb3B1cFRlbXBsYXRlO1xuICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYyA9IGZlYXR1cmU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmVhdHVyZS5ncmFwaGljLmF0dHJpYnV0ZXMpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZURpdicpPy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYy5zeW1ib2wgPSB0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnk7XG4gICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljLnNldEF0dHJpYnV0ZSgnT0JKRUNUSUQnLCBvaWQpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MuZmluZChncmFwaGljID0+IHtcbiAgICAgICAgICByZXR1cm4gZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgPT09ICd0cnVlJztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgIHNlbGVjdGVkLnN5bWJvbCA9IHRoaXMubXVsdGlTeW1ib2wgYXMgYW55O1xuICAgICAgICAgIHNlbGVjdGVkLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmFwaGljID0gdGhpcy5ncmFwaGljcy5ncmFwaGljcy5maW5kKGdyYXBoaWMgPT4ge1xuICAgICAgICAgIHJldHVybiBncmFwaGljLmdldEF0dHJpYnV0ZSgnUkVJRCcpID09PSBmZWF0dXJlLmdldEF0dHJpYnV0ZSgnUkVJRCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGdyYXBoaWMpIHtcbiAgICAgICAgICBncmFwaGljLnN5bWJvbCA9IHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueTtcblxuICAgICAgICAgIGdyYXBoaWMuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgICAgdGhpcy5ncmFwaGljcy5ncmFwaGljcy5yZW9yZGVyKGdyYXBoaWMsIHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIGV4cG9ydFRhYmxlKCkge1xuICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyLnF1ZXJ5RmVhdHVyZXMoeyBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGxldCBjc3YgPSAnJztcbiAgICAgIHJlc3VsdC5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGNzdiArPSBgJHtmaWVsZC5hbGlhc30sYDtcbiAgICAgIH0pO1xuICAgICAgY3N2ICs9ICdcXHJcXG4nO1xuICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZlYXR1cmUuYXR0cmlidXRlcykge1xuICAgICAgICAgIGlmIChrZXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZGF0ZScpKSB7XG4gICAgICAgICAgICBjc3YgKz0gYFwiJHtuZXcgRGF0ZShmZWF0dXJlLmF0dHJpYnV0ZXNba2V5XSkudG9EYXRlU3RyaW5nKCl9XCIsYDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdhY3JlcycpKSB7XG4gICAgICAgICAgICBjc3YgKz0gYFwiJHtwYXJzZUZsb2F0KGZlYXR1cmUuYXR0cmlidXRlc1trZXldKS50b0ZpeGVkKDIpfVwiLGA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzdiArPSBgXCIke2ZlYXR1cmUuYXR0cmlidXRlc1trZXldfVwiLGA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNzdiArPSAnXFxyXFxuJztcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZXhwb3J0ZWRGaWxlbm1hZSA9ICdpbWFwc19leHBvcnQuY3N2JztcblxuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjc3ZdLCB7IHR5cGU6ICd0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04OycgfSk7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgaWYgKGxpbmsuZG93bmxvYWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBmZWF0dXJlIGRldGVjdGlvblxuICAgICAgICAvLyBCcm93c2VycyB0aGF0IHN1cHBvcnQgSFRNTDUgZG93bmxvYWQgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZXhwb3J0ZWRGaWxlbm1hZSk7XG4gICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGVja1NlYXJjaFBhcmFtcyA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcbiAgICBjb25zdCByZWlkID0gcGFyYW1zLmdldCgncmVpZCcpO1xuICAgIGNvbnN0IHBpbiA9IHBhcmFtcy5nZXQoJ3BpbicpO1xuICAgIGxldCB3aGVyZSA9ICcnO1xuICAgIGlmIChyZWlkIHx8IHBpbikge1xuICAgICAgaWYgKHJlaWQpIHtcbiAgICAgICAgd2hlcmUgPSBgUkVJRCBJTiAoJyR7cmVpZC5zcGxpdCgnLCcpLmpvaW4oXCInLCdcIil9JylgO1xuICAgICAgfSBlbHNlIGlmIChwaW4pIHtcbiAgICAgICAgd2hlcmUgPSBgUElOX05VTSA9ICcke3Bpbn0nYDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29uZG9zVGFibGUucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiB3aGVyZSwgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuXG4gICAgICAgIGlmIChyZXN1bHQuZmVhdHVyZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gbmV3IEdyYXBoaWMoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKHJlc3VsdC5mZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgcmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNzLCB2aWV3Lm1hcC5hbGxMYXllcnMubGVuZ3RoIC0gMSk7XG4gICAgdGhpcy5jbHVzdGVyUG9pbnRzID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICBzb3VyY2U6IFtdLFxuICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJyxcbiAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgIG1heFNjYWxlOiAxOTIwMSxcbiAgICAgIGxpc3RNb2RlOiAnaGlkZScsXG4gICAgICBsZWdlbmRFbmFibGVkOiBmYWxzZSxcbiAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgIHR5cGU6ICdzaW1wbGUnLFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsXG4gICAgICAgICAgc2l6ZTogNCxcbiAgICAgICAgICBjb2xvcjogJyM2OWRjZmYnLFxuICAgICAgICAgIG91dGxpbmU6IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCAxMzksIDE3NCwgMC41KScsXG4gICAgICAgICAgICB3aWR0aDogNVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBhcyBhbnksXG4gICAgICBmZWF0dXJlUmVkdWN0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdjbHVzdGVyJyxcbiAgICAgICAgbGFiZWxpbmdJbmZvOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gdHVybiBvZmYgZGVjb25mbGljdGlvbiB0byBlbnN1cmUgYWxsIGNsdXN0ZXJzIGFyZSBsYWJlbGVkXG4gICAgICAgICAgICBkZWNvbmZsaWN0aW9uU3RyYXRlZ3k6ICdub25lJyxcbiAgICAgICAgICAgIGxhYmVsRXhwcmVzc2lvbkluZm86IHtcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJUZXh0KCRmZWF0dXJlLmNsdXN0ZXJfY291bnQsICcjLCMjIycpXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDRhNWQnLFxuICAgICAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICAgICAgZmFtaWx5OiAnTm90byBTYW5zJyxcbiAgICAgICAgICAgICAgICBzaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBhcyBhbnksXG4gICAgICAgICAgICBsYWJlbFBsYWNlbWVudDogJ2NlbnRlci1jZW50ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogdGhpcy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcubWFwLmFkZCh0aGlzLmNsdXN0ZXJQb2ludHMpO1xuICAgIHRoaXMuY2hlY2tTZWFyY2hQYXJhbXMoKTtcbiAgfVxuXG4gIGdldFN1Z2dlc3Rpb25zID0gKFxuICAgIHBhcmFtczogYW55LFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBsYXllcjogZXNyaS5GZWF0dXJlTGF5ZXIsXG4gICAgb3V0RmllbGRzOiBzdHJpbmdbXSxcbiAgICBvcmRlckJ5RmllbGRzOiBzdHJpbmdbXSxcbiAgICBzZWFyY2hGaWVsZHM6IHN0cmluZ1tdLFxuICAgIHN0YXJ0c1dpdGg6IGJvb2xlYW5cbiAgKSA9PiB7XG4gICAgY29uc3Qgd2hlcmVBcnJheTogc3RyaW5nW10gPSBbXTtcbiAgICAvL3Rlc3RcbiAgICBzZWFyY2hGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBpZiAoc3RhcnRzV2l0aCkge1xuICAgICAgICB3aGVyZUFycmF5LnB1c2goYCR7ZmllbGR9IExJS0UgJyR7cGFyYW1zLnN1Z2dlc3RUZXJtLnRvVXBwZXJDYXNlKCl9JSdgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoZXJlQXJyYXkucHVzaChgJHtmaWVsZH0gTElLRSAnJSR7cGFyYW1zLnN1Z2dlc3RUZXJtLnRvVXBwZXJDYXNlKCl9JSdgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbGF5ZXJcbiAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgcmV0dXJuRGlzdGluY3RWYWx1ZXM6IHRydWUsXG4gICAgICAgIG91dEZpZWxkczogb3V0RmllbGRzLFxuICAgICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgICAgIG9yZGVyQnlGaWVsZHM6IG9yZGVyQnlGaWVsZHMsXG4gICAgICAgIHdoZXJlOiB3aGVyZUFycmF5LmpvaW4oJyBPUiAnKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleTogbmFtZSxcbiAgICAgICAgICAgIHRleHQ6IGZlYXR1cmUuZ2V0QXR0cmlidXRlKG91dEZpZWxkc1swXSksXG4gICAgICAgICAgICBzb3VyY2VJbmRleDogcGFyYW1zLnNvdXJjZUluZGV4XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcbiAgaW5pdFNlYXJjaCgpIHtcbiAgICBjb25zdCB0YWJsZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAgeyBuYW1lOiAnU0lURV9BRERSRVNTJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnQWRkcmVzcycgfSxcbiAgICAgICAgeyBuYW1lOiAnT1dORVInLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdPd25lcicgfSxcbiAgICAgICAgeyBuYW1lOiAnUElOX05VTScsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ1BJTicgfSxcbiAgICAgICAgeyBuYW1lOiAnUkVJRCcsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ1JFSUQnIH1cbiAgICAgIF0sXG4gICAgICBzb3VyY2U6IFtdLFxuICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCcsXG4gICAgICBzcGF0aWFsUmVmZXJlbmNlOiB0aGlzLnZpZXcuc3BhdGlhbFJlZmVyZW5jZVxuICAgIH0pO1xuICAgIHRoaXMuZmVhdHVyZSA9IG5ldyBGZWF0dXJlKHsgdmlldzogdGhpcy52aWV3IH0pO1xuXG4gICAgdGhpcy5mZWF0dXJlVGFibGUgPSBuZXcgRmVhdHVyZVRhYmxlKHtcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIGxheWVyOiB0YWJsZUxheWVyLFxuICAgICAgZmllbGRDb25maWdzOiBbXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1NJVEVfQUREUkVTUycsXG4gICAgICAgICAgbGFiZWw6ICdBZGRyZXNzJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ09XTkVSJyxcbiAgICAgICAgICBsYWJlbDogJ093bmVyJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1BJTl9OVU0nLFxuICAgICAgICAgIGxhYmVsOiAnUElOJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1JFSUQnLFxuICAgICAgICAgIGxhYmVsOiAnUkVJRCcsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgbWVudUNvbmZpZzoge1xuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICh7XG4gICAgICAgICAgICBsYWJlbDogJ0V4cG9ydCdcbiAgICAgICAgICB9IGFzIHVua25vd24pIGFzIE1lbnVCdXR0b25JdGVtXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBidXR0b246IE1lbnVCdXR0b25JdGVtID0gdGhpcy5mZWF0dXJlVGFibGU/Lm1lbnVDb25maWc/Lml0ZW1zPy5maW5kKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0ubGFiZWwgPT09ICdFeHBvcnQnO1xuICAgIH0pIGFzIE1lbnVCdXR0b25JdGVtO1xuICAgIGJ1dHRvbi5jbGlja0Z1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgdGhpcy5leHBvcnRUYWJsZSgpO1xuICAgIH07XG4gICAgYnV0dG9uLmNsaWNrRnVuY3Rpb24uYmluZCh0aGlzLmZlYXR1cmVUYWJsZSk7XG5cbiAgICB0aGlzLmZlYXR1cmVUYWJsZS5vbignc2VsZWN0aW9uLWNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICh0aGlzLmZlYXR1cmVUYWJsZSBhcyBhbnkpLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICBpZiAoZXZlbnQuYWRkZWQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZ2V0UHJvcGVydHkoW2V2ZW50LmFkZGVkWzBdLmZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpXSwgJ3RhYmxlJyk7XG4gICAgICAgIHRoaXMuc2V0RmVhdHVyZShcbiAgICAgICAgICBldmVudC5hZGRlZFswXS5mZWF0dXJlLFxuICAgICAgICAgIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsXG4gICAgICAgICAgW10sXG4gICAgICAgICAgW2V2ZW50LmFkZGVkWzBdLmZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpXVxuICAgICAgICApO1xuICAgICAgICBldmVudC5hZGRlZFswXS5mZWF0dXJlLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xuICAgICAgYWxsUGxhY2Vob2xkZXI6ICdBZGRyZXNzLCBvd25lciwgUElOLCBvciBSRUlEJyxcbiAgICAgIGluY2x1ZGVEZWZhdWx0U291cmNlczogZmFsc2UsXG4gICAgICBjb250YWluZXI6ICdzZWFyY2gnLFxuICAgICAgc291cmNlczogW1xuICAgICAgICAvLyBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAvLyAgIGxheWVyOiB0aGlzLmFkZHJlc3NUYWJsZSxcbiAgICAgICAgLy8gICBzZWFyY2hGaWVsZHM6IFsnQUREUkVTUycsICdBRERSRVNTX05PRElSJ10sXG4gICAgICAgIC8vICAgZGlzcGxheUZpZWxkOiAnQUREUkVTUycsXG4gICAgICAgIC8vICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgIC8vICAgb3V0RmllbGRzOiBbJ0FERFJFU1MnLCAnUkVBX1JFSUQnXSxcbiAgICAgICAgLy8gICBuYW1lOiAnU2l0ZSBBZGRyZXNzJyxcbiAgICAgICAgLy8gICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDIyMiBXIEhBUkdFVFQnXG4gICAgICAgIC8vIH0pLFxuICAgICAgICBuZXcgU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDIyMiBXIEhBUkdFVFQgU1QnLFxuICAgICAgICAgIG5hbWU6ICdTaXRlIEFkZHJlc3MnLFxuICAgICAgICAgIGdldFN1Z2dlc3Rpb25zOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1Z2dlc3Rpb25zKFxuICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgICdTaXRlIEFkZHJlc3MnLFxuICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZSxcbiAgICAgICAgICAgICAgWydBRERSRVNTJ10sXG4gICAgICAgICAgICAgIFsnQUREUkVTUyddLFxuICAgICAgICAgICAgICBbJ0FERFJFU1MnXSxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFJlc3VsdHM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkcmVzc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogYEFERFJFU1MgPSAnJHtwYXJhbXMuc3VnZ2VzdFJlc3VsdC50ZXh0LnRvVXBwZXJDYXNlKCl9J2AsXG4gICAgICAgICAgICAgICAgb3V0RmllbGRzOiBbJ0FERFJFU1MnLCAnUkVBX1JFSUQnLCAnT0JKRUNUSUQnXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlOiBmZWF0dXJlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQWRkcmVzcydcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pIGFzIGFueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYXMgYW55KSxcbiAgICAgICAgLy8gbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgLy8gICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgIC8vICAgc2VhcmNoRmllbGRzOiBbJ09XTkVSJ10sXG4gICAgICAgIC8vICAgZGlzcGxheUZpZWxkOiAnT1dORVInLFxuICAgICAgICAvLyAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAvLyAgIG91dEZpZWxkczogWydPV05FUicsICdSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgIC8vICAgbmFtZTogJ093bmVyJyxcbiAgICAgICAgLy8gICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IFNNSVRILCBKT0hOJ1xuICAgICAgICAvLyB9KSxcbiAgICAgICAgbmV3IFNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiBTTUlUSCwgSk9ITicsXG4gICAgICAgICAgbmFtZTogJ093bmVyJyxcbiAgICAgICAgICBnZXRTdWdnZXN0aW9uczogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWdnZXN0aW9ucyhwYXJhbXMsICdPd25lcicsIHRoaXMuY29uZG9zVGFibGUsIFsnT1dORVInXSwgWydPV05FUiddLCBbJ09XTkVSJ10sIGZhbHNlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFJlc3VsdHM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZG9zVGFibGVcbiAgICAgICAgICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiBgT1dORVIgPSAnJHtwYXJhbXMuc3VnZ2VzdFJlc3VsdC50ZXh0LnRvVXBwZXJDYXNlKCl9J2AsXG4gICAgICAgICAgICAgICAgb3V0RmllbGRzOiBbJ09XTkVSJywgJ09CSkVDVElEJ11cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZTogZmVhdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ093bmVyJ1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBhbnkpLFxuICAgICAgICAvLyBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAvLyAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgLy8gICBzZWFyY2hGaWVsZHM6IFsnUElOX05VTSddLFxuICAgICAgICAvLyAgIGRpc3BsYXlGaWVsZDogJ1BJTl9OVU0nLFxuICAgICAgICAvLyAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAvLyAgIG91dEZpZWxkczogWydQSU5fTlVNJywgJ1JFSUQnLCAnT0JKRUNUSUQnXSxcbiAgICAgICAgLy8gICBuYW1lOiAnUElOJyxcbiAgICAgICAgLy8gICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDA3MTIzNDU2NzgnXG4gICAgICAgIC8vIH0pLFxuICAgICAgICBuZXcgU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1BJTicsXG4gICAgICAgICAgbmFtZTogJ1BJTicsXG4gICAgICAgICAgZ2V0U3VnZ2VzdGlvbnM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3VnZ2VzdGlvbnMocGFyYW1zLCAnUElOJywgdGhpcy5jb25kb3NUYWJsZSwgWydQSU5fTlVNJ10sIFsnUElOX05VTSddLCBbJ1BJTl9OVU0nXSwgdHJ1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRSZXN1bHRzOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRvc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogYFBJTl9OVU0gPSAnJHtwYXJhbXMuc3VnZ2VzdFJlc3VsdC50ZXh0fSdgLFxuICAgICAgICAgICAgICAgIG91dEZpZWxkczogWydQSU5fTlVNJywgJ09CSkVDVElEJ11cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZTogZmVhdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1BJTidcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pIGFzIGFueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYXMgYW55KSxcbiAgICAgICAgLy8gbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgLy8gICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgIC8vICAgc2VhcmNoRmllbGRzOiBbJ1JFSUQnXSxcbiAgICAgICAgLy8gICBkaXNwbGF5RmllbGQ6ICdSRUlEJyxcbiAgICAgICAgLy8gICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgLy8gICBvdXRGaWVsZHM6IFsnUkVJRCcsICdPQkpFQ1RJRCddLFxuICAgICAgICAvLyAgIG5hbWU6ICdSRUlEJyxcbiAgICAgICAgLy8gICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDAxMjM0NTYnXG4gICAgICAgIC8vIH0pLFxuICAgICAgICBuZXcgU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1JFSUQnLFxuICAgICAgICAgIG5hbWU6ICdSRUlEJyxcbiAgICAgICAgICBnZXRTdWdnZXN0aW9uczogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWdnZXN0aW9ucyhwYXJhbXMsICdSRUlEJywgdGhpcy5jb25kb3NUYWJsZSwgWydSRUlEJ10sIFsnUkVJRCddLCBbJ1JFSUQnXSwgdHJ1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRSZXN1bHRzOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRvc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogYFJFSUQgPSAnJHtwYXJhbXMuc3VnZ2VzdFJlc3VsdC50ZXh0fSdgLFxuICAgICAgICAgICAgICAgIG91dEZpZWxkczogWydSRUlEJywgJ09CSkVDVElEJ11cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZTogZmVhdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1JFSUQnXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KSBhcyBhbnk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGFzIGFueSksXG4gICAgICAgIG5ldyBTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogVyBIQVJHRVRUIFNUJyxcbiAgICAgICAgICBuYW1lOiAnU3RyZWV0IE5hbWUnLFxuICAgICAgICAgIGdldFN1Z2dlc3Rpb25zOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1Z2dlc3Rpb25zKFxuICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgICdTdHJlZXQgTmFtZScsXG4gICAgICAgICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlLFxuICAgICAgICAgICAgICBbJ1NUUkVFVCcsICdBRERSX0xJU1QnXSxcbiAgICAgICAgICAgICAgWydTVFJFRVQnXSxcbiAgICAgICAgICAgICAgWydTVFJFRVQnLCAnU1RSRUVUX05PRElSJ10sXG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0UmVzdWx0czogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRyZXNzVGFibGVcbiAgICAgICAgICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiBgU1RSRUVUID0gJyR7cGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dC50b1VwcGVyQ2FzZSgpfSdgLFxuICAgICAgICAgICAgICAgIG91dEZpZWxkczogWydTVFJFRVQnLCAnUkVBX1JFSUQnLCAnT0JKRUNUSUQnXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlOiBmZWF0dXJlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU3RyZWV0IE5hbWUnXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KSBhcyBhbnk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIF1cbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldC52aWV3TW9kZWwud2F0Y2goJ3Jlc3VsdHMnLCBldmVudCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hXaWRnZXQub24oJ3NlYXJjaC1jb21wbGV0ZScsIHRoaXMuc2VhcmNoQ29tcGxldGUpO1xuICB9XG4gIHRvZ2dsZUNvbnRlbnQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gJ3RhYmxlJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmUnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmUnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZUl0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCBmcm9tICcuL1Byb3BlcnR5U2VhcmNoL1Byb3BlcnR5U2VhcmNoVmlld01vZGVsJztcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlTZWFyY2hQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBwcm9wZXJ0eUxheWVyPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIGNvbmRvc1RhYmxlPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIGFkZHJlc3NUYWJsZT86IGVzcmkuRmVhdHVyZUxheWVyO1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBwcm9wZXJ0eXNlYXJjaC1iYXNlJ1xufTtcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuUHJvcGVydHlTZWFyY2gnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlTZWFyY2ggZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5jb25kb3NUYWJsZScpXG4gIGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5hZGRyZXNzVGFibGUnKVxuICBhZGRyZXNzVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLnByb3BlcnR5TGF5ZXInKVxuICBwcm9wZXJ0eUxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5zZWFyY2hXaWRnZXQnKVxuICBzZWFyY2hXaWRnZXQ6IGVzcmkud2lkZ2V0c1NlYXJjaDtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5mZWF0dXJlVGFibGUnKVxuICBmZWF0dXJlVGFibGU6IGVzcmkuRmVhdHVyZVRhYmxlO1xuICBAYWxpYXNPZigndmlld01vZGVsLmZlYXR1cmUnKVxuICBmZWF0dXJlOiBlc3JpLkZlYXR1cmU7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZ2VvbWV0cnknKVxuICBnZW9tZXRyeTogZXNyaS5HZW9tZXRyeTtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IFByb3BlcnR5U2VhcmNoVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCA9IG5ldyBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBQcm9wZXJ0eVNlYXJjaFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIF9jcmVhdGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2VhcmNoV2lkZ2V0KSB7XG4gICAgICB0aGlzLnNlYXJjaFdpZGdldC5jb250YWluZXIgPSAnc2VhcmNoJztcbiAgICB9XG4gIH07XG4gIF9jcmVhdGVUYWJsZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5mZWF0dXJlVGFibGUpIHtcbiAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmNvbnRhaW5lciA9ICd0YWJsZSc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlRmVhdHVyZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5mZWF0dXJlKSB7XG4gICAgICB0aGlzLmZlYXR1cmUuY29udGFpbmVyID0gJ2ZlYXR1cmVEaXYnO1xuICAgIH1cbiAgfTtcblxuICBjdXJyZW50UmFkaW9CdXR0b24gPSAnbGlzdCc7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NpZGVEaXYgY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtJyk7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVSYWRpb0dyb3VwSXRlbUNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2FuIEkgZ2V0IGNoZWNrZWQgYW5kIHZhbHVlIGxpa2UgdGhpcz9cbiAgICAgICAgaWYgKGUudGFyZ2V0Py5jaGVja2VkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQ/LnZhbHVlKTtcbiAgICAgICAgICB0aGlzLnZpZXdNb2RlbC50b2dnbGVDb250ZW50KGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGZlYXREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZURpdicpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njcm9sbEFycm93Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmVhdERpdj8uc2Nyb2xsQnkoeyB0b3A6IGZlYXREaXYub2Zmc2V0SGVpZ2h0LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgdGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG4gICAgaWYgKHRoZW1lKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyb3dQYXRoJyk/LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhlbWUgPT09ICdsaWdodCcgPyAnYmxhY2snIDogJ3doaXRlJyk7XG4gICAgfVxuXG4gICAgZmVhdERpdj8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgaWYgKGZlYXREaXYuc2Nyb2xsVG9wID49IGZlYXREaXYuc2Nyb2xsSGVpZ2h0IC0gZmVhdERpdi5vZmZzZXRIZWlnaHQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njcm9sbEFycm93Jyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njcm9sbEFycm93Jyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZVNlYXJjaH0gaWQ9XCJzZWFyY2hcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlVGFibGV9IGlkPVwidGFibGVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImZlYXR1cmVcIiBjbGFzcz1cImhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJmZWF0dXJlRGl2XCIgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUZlYXR1cmV9PjwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGlkPVwic2Nyb2xsQXJyb3dcIlxuICAgICAgICAgICAgY2xhc3M9XCJob21lLXBhZ2VfX3Njcm9sbC1kb3duLWFycm93IGhvbWUtcGFnZV9fc2Nyb2xsLWRvd24tYXJyb3ctLWJsYWNrXCJcbiAgICAgICAgICAgIGRhdGEtZG9qby1hdHRhY2gtcG9pbnQ9XCJhcnJvd0NvbnRhaW5lclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgY2xhc3M9XCJpY29uLWlubGluZSAgXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJhcnJvd1BhdGhcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICBzdHJva2Utb3BhY2l0eT1cIjAuNVwiXG4gICAgICAgICAgICAgICAgZD1cIk0xNi41IDI3LjIwN2wtNC44NTQtNC44NTQuNzA3LS43MDdMMTYgMjUuMjkzVjVoMXYyMC4yOTNsMy42NDYtMy42NDYuNzA3LjcwN3pcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwIHdpZHRoPVwiZnVsbFwiPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gY2hlY2tlZCB2YWx1ZT1cInRhYmxlXCIgaWQ9XCJ0YWJsZUl0ZW1cIj5cbiAgICAgICAgICAgIExpc3RcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHZhbHVlPVwiZmVhdHVyZVwiIGlkPVwiZmVhdHVyZUl0ZW1cIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIERldGFpbHNcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgTWVhc3VyZW1lbnQgZnJvbSAnZXNyaS93aWRnZXRzL01lYXN1cmVtZW50JztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5NZWFzdXJlLk1lYXN1cmVWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZVZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cbiAgbWVhc3VyZW1lbnQ6IGVzcmkuTWVhc3VyZW1lbnQ7XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICB0aGlzLm1lYXN1cmVtZW50ID0gbmV3IE1lYXN1cmVtZW50KHsgdmlldywgYXJlYVVuaXQ6ICdzcXVhcmUtZmVldCcsIGxpbmVhclVuaXQ6ICdmZWV0JyB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5pbXBvcnQgTWVhc3VyZVZpZXdNb2RlbCBmcm9tICcuL01lYXN1cmUvTWVhc3VyZVZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVhc3VyZVByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IG1lYXN1cmUtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTWVhc3VyZScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWFzdXJlIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubWVhc3VyZW1lbnQnKVxuICBtZWFzdXJlbWVudDogZXNyaS5NZWFzdXJlbWVudDtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IE1lYXN1cmVWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IE1lYXN1cmVWaWV3TW9kZWwgPSBuZXcgTWVhc3VyZVZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBNZWFzdXJlUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX21lYXN1cmVDcmVhdGVkID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLm1lYXN1cmVtZW50KSB7XG4gICAgICB0aGlzLm1lYXN1cmVtZW50LmNvbnRhaW5lciA9ICdtZWFzdXJlV2lkZ2V0JztcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21lYXN1cmVEaXYgY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtJyk7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVSYWRpb0dyb3VwSXRlbUNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgIGlmIChlLnRhcmdldD8udGl0bGUgPT09ICdjbGVhcicpIHtcbiAgICAgICAgICAgIHRoaXMubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudC5hY3RpdmVUb29sID0gZS50YXJnZXQ/LnRpdGxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB0aXRsZT1cImRpc3RhbmNlXCIgdmFsdWU9XCJkaXN0YW5jZVwiIGlkPVwidGFibGVJdGVtXCIgaWNvbj1cIm1lYXN1cmVcIj5cbiAgICAgICAgICAgIERpc3RhbmNlXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB0aXRsZT1cImFyZWFcIiB2YWx1ZT1cImFyZWFcIiBpZD1cImZlYXR1cmVJdGVtXCIgaWNvbj1cIm1lYXN1cmUtYXJlYVwiPlxuICAgICAgICAgICAgQXJlYVxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdGl0bGU9XCJjbGVhclwiIHZhbHVlPVwiY2xlYXJcIiBpZD1cImZlYXR1cmVJdGVtXCIgaWNvbj1cInRyYXNoXCI+XG4gICAgICAgICAgICBDbGVhclxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXA+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX21lYXN1cmVDcmVhdGVkfSBpZD1cIm1lYXN1cmVXaWRnZXRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCBQb3B1cFRlbXBsYXRlIGZyb20gJ2VzcmkvUG9wdXBUZW1wbGF0ZSc7XG5pbXBvcnQgRXhwcmVzc2lvbkluZm8gZnJvbSAnZXNyaS9wb3B1cC9FeHByZXNzaW9uSW5mbyc7XG5pbXBvcnQgQ3VzdG9tQ29udGVudCBmcm9tICdlc3JpL3BvcHVwL2NvbnRlbnQvQ3VzdG9tQ29udGVudCc7XG5pbXBvcnQgTG9jYXRvciBmcm9tICdlc3JpL3Rhc2tzL0xvY2F0b3InO1xuaW1wb3J0IGdlb2Rlc2ljVXRpbHMgZnJvbSAnZXNyaS9nZW9tZXRyeS9zdXBwb3J0L2dlb2Rlc2ljVXRpbHMnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmUnO1xuaW1wb3J0IHsgdmlldyB9IGZyb20gJy4uJztcbmNvbnN0IGFyY2FkZUV4cHJlc3Npb25JbmZvcyA9IFtcbiAge1xuICAgIG5hbWU6ICdtYWlsaW5nLWFkZHJlc3MnLFxuICAgIHRpdGxlOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1doZW4oSXNFbXB0eSgkZmVhdHVyZS5BRERSMyksJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIsJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjMpJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ3Byb3BlcnR5LXZhbHVlcycsXG4gICAgdGl0bGU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgIGV4cHJlc3Npb246XG4gICAgICAnXCJCdWlsZGluZyBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuQkxER19WQUwrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkxhbmQgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkxBTkRfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3RhbCBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuVE9UQUxfVkFMVUVfQVNTRCdcbiAgfSxcblxuICB7XG4gICAgbmFtZTogJ3BpbicsXG4gICAgdGl0bGU6ICdQSU4nLFxuICAgIGV4cHJlc3Npb246IFwidmFyIG51bSA9ICRmZWF0dXJlLlBJTl9OVU07dmFyIGV4dCA9ICRmZWF0dXJlLlBJTl9FWFQ7cmV0dXJuIFdoZW4oZXh0ID09ICcwMDAnLG51bSxudW0rJyAnK2V4dCk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdidWlsZF92YWwnLFxuICAgIHRpdGxlOiAnQnVpbGRpbmcgVmFsdWUnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHZhbHVlID0gJGZlYXR1cmUuQkxER19WQUw7V2hlbihJc0VtcHR5KHZhbHVlKSwnLS0nLCAnJCcrVGV4dCh2YWx1ZSwgJyMsIyMjJykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbGFuZF92YWwnLFxuICAgIHRpdGxlOiAnTGFuZCBWYWx1ZScsXG4gICAgZXhwcmVzc2lvbjogXCJ2YXIgdmFsdWUgPSAkZmVhdHVyZS5MQU5EX1ZBTDtXaGVuKElzRW1wdHkodmFsdWUpLCctLScsICckJytUZXh0KHZhbHVlLCAnIywjIyMnKSk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd0b3RhbF92YWwnLFxuICAgIHRpdGxlOiAnVG90YWwgVmFsdWUnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHZhbHVlID0gJGZlYXR1cmUuVE9UQUxfVkFMVUVfQVNTRDtXaGVuKElzRW1wdHkodmFsdWUpLCctLScsICckJytUZXh0KHZhbHVlLCAnIywjIyMnKSk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdzYWxlX3ByaWNlJyxcbiAgICB0aXRsZTogJ1NhbGUgUHJpY2UnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHZhbHVlID0gJGZlYXR1cmUuVE9UU0FMUFJJQ0U7V2hlbihJc0VtcHR5KHZhbHVlKSwnLS0nLCAnJCcrVGV4dCh2YWx1ZSwgJyMsIyMjJykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnY2l0eScsXG4gICAgdGl0bGU6ICdDaXR5JyxcbiAgICBleHByZXNzaW9uOiBcInZhciBjaXR5ID0gJGZlYXR1cmUuQ0lUWV9ERUNPREU7V2hlbihJc0VtcHR5KGNpdHkpLCdVbmluY29ycG9yYXRlZCcsIFByb3BlcihjaXR5KSk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd0b3duc2hpcCcsXG4gICAgdGl0bGU6ICdUb3duc2hpcCcsXG4gICAgZXhwcmVzc2lvbjogXCJ2YXIgdHMgPSAkZmVhdHVyZS5UT1dOU0hJUF9ERUNPREU7V2hlbihJc0VtcHR5KHRzKSwnTm9uZScsIFByb3Blcih0cykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnanVyaXNkaWN0aW9uJyxcbiAgICB0aXRsZTogJ0p1cmlzZGljdGlvbicsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICd2YXIganVyaXMgPSAkZmVhdHVyZS5QTEFOTklOR19KVVJJU0RJQ1RJT047V2hlbignICtcbiAgICAgIFwianVyaXMgPT0gJ1JBJywgJ1JhbGVpZ2gnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0NBJywgJ0NhcnknLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0FQJywgJ0FwZXgnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0FOJywgJ0FuZ2llcicsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnQ0wnLCAnQ2xheXRvbicsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnRFUnLCAnRHVyaGFtJyxcIiArXG4gICAgICBcImp1cmlzID09ICdGVicsICdGdXF1YXktVmFyaW5hJyxcIiArXG4gICAgICBcImp1cmlzID09ICdHQScsICdHYXJuZXInLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0hTJywgJ0hvbGx5IFNwcmluZ3MnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0tOJywgJ0tuaWdodGRhbGUnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ01PJywgJ01vcnJpc3ZpbGxlJyxcIiArXG4gICAgICBcImp1cmlzID09ICdSTycsICdSb2xlc3ZpbGxlJyxcIiArXG4gICAgICBcImp1cmlzID09ICdXRicsICdXYWtlIEZvcmVzdCcsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnV0UnLCAnV2VuZGVsbCcsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnWkInLCAnWmVidWxvbicsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnV0MnLCAnV2FrZSBDb3VudHknLFwiICtcbiAgICAgIFwiICdXYWtlIENvdW50eScpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZ2VuZXJhbCcsXG4gICAgdGl0bGU6ICdnZW5lcmFsJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1wiUElOXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5QSU5fTlVNK1wiIFwiKyRmZWF0dXJlLlBJTl9FWFQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICdcIlJFSURcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKyRmZWF0dXJlLlJFSUQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkNpdHlcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgJ1Byb3BlcigkZmVhdHVyZS5DSVRZX0RFQ09ERSkrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkp1cmlzZGljdGlvblwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAnJGZlYXR1cmUuUExBTk5JTkdfSlVSSVNESUNUSU9OK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3duc2hpcFwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrUHJvcGVyKCRmZWF0dXJlLlRPV05TSElQX0RFQ09ERSknXG4gIH1cbl0gYXMgRXhwcmVzc2lvbkluZm9bXTtcbmNvbnN0IHNlcnZpY2VzOiBhbnlbXSA9IFtcbiAge1xuICAgIGdyb3VwOiB7XG4gICAgICB0aXRsZTogJ0VsZWN0b3JhbCcsXG4gICAgICBsYXllcnM6IFtcbiAgICAgICAgJ1ByZWNpbmN0cycsXG4gICAgICAgICdDb25ncmVzc2lvbmFsIERpc3RyaWN0cycsXG4gICAgICAgICdOQyBIb3VzZSBvZiBSZXByZXNlbnRhdGl2ZXMgRGlzdHJpY3RzJyxcbiAgICAgICAgJ05DIFNlbmF0ZSBEaXN0cmljdHMnLFxuICAgICAgICAnU2Nob29sIEJvYXJkIERpc3RyaWN0cycsXG4gICAgICAgICdCb2FyZCBvZiBDb21taXNzaW9uZXJzIERpc3RyaWN0cycsXG4gICAgICAgICdTdXBlcmlvciBDb3VydCBEaXN0cmljdHMnLFxuICAgICAgICAnUmFsZWlnaCBDaXR5IENvdW5jaWwnLFxuICAgICAgICAnTW9ycmlzdmlsbGUgVG93biBDb3VuY2lsIERpc3RyaWN0cydcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBncm91cDoge1xuICAgICAgdGl0bGU6ICdFbnZpcm9ubWVudGFsJyxcbiAgICAgIGxheWVyczogW1xuICAgICAgICAnU3BlY2lhbCBGbG9vZCBIYXphcmQgQXJlYXMgLSBGbG9vZFBsYWluIC0gRmxvb2RwbGFpbicsXG4gICAgICAgICdTb2lscycsXG4gICAgICAgICdDcml0aWNhbCBXYXRlcnNoZWRzJyxcbiAgICAgICAgJ1dhdGVyIFN1cHBseSBXYXRlcnNoZWRzJ1xuICAgICAgXVxuICAgIH1cbiAgfVxuXTtcblxuY29uc3Qgc2Nyb2xsVG9TZXJ2aWNlID0gKGU6IGFueSkgPT4ge1xuICBjb25zdCByZWN0ID0gKGUuZGV0YWlsLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW0gYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZURpdicpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkaXY/LnNjcm9sbFRvKHsgdG9wOiByZWN0LnRvcCArIGRpdi5zY3JvbGxUb3AgLSAxNTUsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfSwgNTAwKTtcbn07XG5jb25zdCBzZXJ2aWNlQ2hhbmdlZCA9IChncmFwaGljOiBfX2VzcmkuR3JhcGhpYywgZTogYW55KSA9PiB7XG4gIGlmIChcbiAgICAhZS5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbS5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpICYmXG4gICAgZS5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMFxuICApIHtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWxvYWRlcicpO1xuICAgIGxvYWRlci5zZXRBdHRyaWJ1dGUoJ2lubGluZScsICcnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWhlYWRlcicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGhlYWRlci5pbnNlcnRCZWZvcmUobG9hZGVyLCBoZWFkZXIuY2hpbGROb2Rlc1sxXSk7XG4gICAgY29uc3Qgc2VydmljZUdyb3VwOiBhbnkgPSBzZXJ2aWNlcy5maW5kKHNlcnZpY2UgPT4ge1xuICAgICAgcmV0dXJuIHNlcnZpY2UuZ3JvdXAudGl0bGUgPT09IGUuZGV0YWlsLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW0uZ2V0QXR0cmlidXRlKCdpdGVtLXRpdGxlJyk7XG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8X19lc3JpLkZlYXR1cmVTZXQ+W10gPSBbXTtcblxuICAgIGlmIChzZXJ2aWNlR3JvdXApIHtcbiAgICAgIGNvbnN0IGxheWVycyA9IHZpZXcubWFwLmFsbExheWVycy5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICByZXR1cm4gc2VydmljZUdyb3VwLmdyb3VwLmxheWVycy5pbmNsdWRlcyhsYXllci50aXRsZSk7XG4gICAgICB9KTtcbiAgICAgIGxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAobGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllcikucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICBnZW9tZXRyeTogZ3JhcGhpYy5nZW9tZXRyeSxcbiAgICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHByb21pc2VzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICByZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0LmZlYXR1cmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IF9fZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtLmFwcGVuZChkaXYpO1xuICAgICAgICAgICAgICBuZXcgRmVhdHVyZSh7IGNvbnRhaW5lcjogZGl2LCBncmFwaGljOiBmZWF0dXJlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2Nyb2xsVG9TZXJ2aWNlKGUpO1xuICAgICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQobG9hZGVyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQobG9hZGVyKTtcbiAgICAgIHJldHVybiAnTm8gc2VydmljZXMgZm91bmQuJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2Nyb2xsVG9TZXJ2aWNlKGUpO1xuICB9XG59O1xuY29uc3QgZGVlZENyZWF0b3IgPSAoZTogYW55KSA9PiB7XG4gIHJldHVybiAoZS5ncmFwaGljLmxheWVyIGFzIEZlYXR1cmVMYXllcilcbiAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoe1xuICAgICAgcmVsYXRpb25zaGlwSWQ6IChlLmdyYXBoaWMubGF5ZXIgYXMgRmVhdHVyZUxheWVyKS5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgIHJldHVybiByLm5hbWUgPT09ICdCT09LUyc7XG4gICAgICB9KT8uaWQsXG4gICAgICBvYmplY3RJZHM6IFtlLmdyYXBoaWMuZ2V0T2JqZWN0SWQoKV0sXG4gICAgICBvdXRGaWVsZHM6IFsnQk9NX0RPQ19OVU0nLCAnREVFRF9ET0NfTlVNJ11cbiAgICB9KVxuICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBjb25zdCBkZWVkID0gcmVzdWx0W2UuZ3JhcGhpYy5nZXRPYmplY3RJZCgpXS5mZWF0dXJlc1swXS5nZXRBdHRyaWJ1dGUoJ0RFRURfRE9DX05VTScpO1xuICAgICAgY29uc3QgYm9tID0gcmVzdWx0W2UuZ3JhcGhpYy5nZXRPYmplY3RJZCgpXS5mZWF0dXJlc1swXS5nZXRBdHRyaWJ1dGUoJ0JPTV9ET0NfTlVNJyk7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdzsnKTtcbiAgICAgIGlmIChkZWVkKSB7XG4gICAgICAgIGNvbnN0IGRlZWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWJ1dHRvbicpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZSgnc2NhbGUnLCAncycpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZSgncm91bmQnLCAnJyk7XG4gICAgICAgIGRlZWRCdG4uc2V0QXR0cmlidXRlKCdpY29uLXN0YXJ0JywgJ2ZpbGUtdGV4dCcpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnaHJlZicsXG4gICAgICAgICAgJ2h0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9ib29rc3dlYi9wZGZ2aWV3LmFzcHg/ZG9jaWQ9JyArIGRlZWQgKyAnJlJlY29yZERhdGU9J1xuICAgICAgICApO1xuXG4gICAgICAgIGRlZWRCdG4udGV4dENvbnRlbnQgPSAnRGVlZCc7XG4gICAgICAgIGRpdi5hcHBlbmQoZGVlZEJ0bik7XG4gICAgICB9XG4gICAgICBpZiAoYm9tKSB7XG4gICAgICAgIGNvbnN0IGJvbWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYnV0dG9uJyk7XG4gICAgICAgIGJvbWJ0bi5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgJ3MnKTtcbiAgICAgICAgYm9tYnRuLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICBib21idG4uc2V0QXR0cmlidXRlKCdyb3VuZCcsICcnKTtcbiAgICAgICAgYm9tYnRuLnNldEF0dHJpYnV0ZSgnaWNvbi1zdGFydCcsICdtYXAnKTtcbiAgICAgICAgYm9tYnRuLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPScgKyBib20gKyAnJlJlY29yZERhdGU9Jyk7XG4gICAgICAgIGJvbWJ0bi50ZXh0Q29udGVudCA9ICdCb29rIG9mIE1hcHMnO1xuICAgICAgICBkaXYuYXBwZW5kKGJvbWJ0bik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXY7XG4gICAgfSk7XG59O1xuY29uc3QgcG9wdXBUZW1wbGF0ZSA9IG5ldyBQb3B1cFRlbXBsYXRlKHtcbiAgZXhwcmVzc2lvbkluZm9zOiBhcmNhZGVFeHByZXNzaW9uSW5mb3MsXG4gIC8vIGNvbnRlbnQ6IChldmVudDogYW55KSA9PiB7XG4gIC8vICAgY29uc3QgZ3JhcGhpYyA9IGV2ZW50LmdyYXBoaWM7XG4gIC8vICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RleHQtZ3JlZW4nKTtcbiAgLy8gICBjb250YWluZXIuYXBwZW5kKGRpdik7XG4gIC8vICAgZGl2LnRleHRDb250ZW50ID0gZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ1NJVEVfQUREUkVTUycpO1xuICAvLyAgIHJldHVybiBjb250YWluZXI7XG4gIC8vIH0sXG4gIGNvbnRlbnQ6IFtcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgxPntTSVRFX0FERFJFU1N9PC9oMT4nXG4gICAgfSxcbiAgICBuZXcgQ3VzdG9tQ29udGVudCh7XG4gICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgY3JlYXRvcjogKGU6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IExvY2F0b3Ioe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWFwcy5yYWxlaWdobmMuZ292L2FyY2dpcy9yZXN0L3NlcnZpY2VzL0xvY2F0b3JzL0NvbXBvc2l0ZUxvY2F0b3IvR2VvY29kZVNlcnZlcicsXG4gICAgICAgICAgb3V0U3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH1cbiAgICAgICAgfSlcbiAgICAgICAgICAuYWRkcmVzc1RvTG9jYXRpb25zKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHsgc2luZ2xlTGluZTogZS5ncmFwaGljLmdldEF0dHJpYnV0ZSgnU0lURV9BRERSRVNTJykgfSxcbiAgICAgICAgICAgIG91dEZpZWxkczogWycqJ11cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChjYW5kaWRhdGVzOiBfX2VzcmkuQWRkcmVzc0NhbmRpZGF0ZVtdKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuZGlkYXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gY2FuZGlkYXRlcy5maW5kKGNhbmRpZGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZS5hdHRyaWJ1dGVzWydMb2NfbmFtZSddID09PSAnV2FrZVN0cmVldHMnO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBnZW9kZXNpY1V0aWxzLmdlb2Rlc2ljRGlzdGFuY2UoY2FuZGlkYXRlLmxvY2F0aW9uLCB7XG4gICAgICAgICAgICAgICAgICB4OiAoZS5ncmFwaGljLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZC5sb25naXR1ZGUsXG4gICAgICAgICAgICAgICAgICB5OiAoZS5ncmFwaGljLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZC5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IGFzIGFueVxuICAgICAgICAgICAgICAgIH0gYXMgYW55KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXN0LmRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXN0LmF6aW11dGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNibGwgPVxuICAgICAgICAgICAgICAgICAgKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWQubGF0aXR1ZGUgK1xuICAgICAgICAgICAgICAgICAgJywnICtcbiAgICAgICAgICAgICAgICAgIChlLmdyYXBoaWMuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlnb24pLmNlbnRyb2lkLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICAvL2NvbnN0IGNibGwgPSBjYW5kaWRhdGVzWzBdLmxvY2F0aW9uLnkudG9TdHJpbmcoKSArICcsJyArIGNhbmRpZGF0ZXNbMF0ubG9jYXRpb24ueC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbWFwcy5nb29nbGUuY29tP2xheWVyPWMmY2JsbD0nICsgY2JsbCArICcmY2JwPTAsJyArIGRpc3QuYXppbXV0aD8udG9TdHJpbmcoKSArICcsMCwwLDAnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cub3BlbihcbiAgICAgICAgICAgICAgICAvLyAgICdodHRwczovL21hcHMuZ29vZ2xlLmNvbT9sYXllcj1jJmNibGw9JyArIGNibGwgKyAnJmNicD0wLCcgKyBkaXN0LmF6aW11dGg/LnRvU3RyaW5nKCkgKyAnLDAsMCwwJ1xuICAgICAgICAgICAgICAgIC8vICk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogcm93OycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnc2NhbGUnLCAncycpO1xuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdyb3VuZCcsICcnKTtcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpY29uLXN0YXJ0JywgJ3BlcnNvbicpO1xuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAnaHJlZicsXG4gICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20/bGF5ZXI9YyZjYmxsPScgKyBjYmxsICsgJyZjYnA9MCwnICsgZGlzdC5hemltdXRoPy50b1N0cmluZygpICsgJywwLDAsMCdcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ1N0cmVldCBWaWV3JztcblxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmQoYnRuKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRheC5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgJ3MnKTtcbiAgICAgICAgICAgICAgICB0YXguc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgICAgdGF4LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAgICdocmVmJyxcbiAgICAgICAgICAgICAgICAgICdodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vcmVhbGVzdGF0ZS9BY2NvdW50LmFzcD9pZD0nICsgZS5ncmFwaGljLmdldEF0dHJpYnV0ZSgnUkVJRCcpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0YXguc2V0QXR0cmlidXRlKCdyb3VuZCcsICcnKTtcbiAgICAgICAgICAgICAgICB0YXguc2V0QXR0cmlidXRlKCdpY29uLXN0YXJ0JywgJ2xvY2F0b3InKTtcbiAgICAgICAgICAgICAgICB0YXgudGV4dENvbnRlbnQgPSAnVGF4IFBhZ2UnO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmQodGF4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSksXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMj5HZW5lcmFsPC9oMT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnZmllbGRzJyxcbiAgICAgIGZpZWxkSW5mb3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vcGluJyxcbiAgICAgICAgICBsYWJlbDogJ1BJTidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ1JFSUQnLFxuICAgICAgICAgIGxhYmVsOiAnUkVJRCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vY2l0eScsXG4gICAgICAgICAgbGFiZWw6ICdDaXR5J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi9qdXJpc2RpY3Rpb24nLFxuICAgICAgICAgIGxhYmVsOiAnSnVyaXNkaWN0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi90b3duc2hpcCcsXG4gICAgICAgICAgbGFiZWw6ICdUb3duc2hpcCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG5cbiAgICAvLyB7XG4gICAgLy8gICB0eXBlOiAnY3VzdG9tJyxcbiAgICAvLyAgIHRleHQ6ICc8Y2FsY2l0ZS1idXR0b24gc2NhbGU9XCJzXCIgaHJlZj1cIiNcIiBjbGFzcz1cInN0cmVldFZpZXdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TdHJlZXQgVmlldzwvY2FsY2l0ZS1idXR0b24+J1xuICAgIC8vIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMj5Pd25lcjwvaDE+J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDpcbiAgICAgICAgLy8gJzxoMSBjbGFzcz1cInRleHQtZ3JlZW5cIj57U0lURV9BRERSRVNTfTwvaDE+JyArXG4gICAgICAgIC8vICc8aDI+R2VuZXJhbDwvaDI+e2V4cHJlc3Npb24vZ2VuZXJhbH0nICtcbiAgICAgICAgJ3tPV05FUn08YnIvPntleHByZXNzaW9uL21haWxpbmctYWRkcmVzc30nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPlZhbHVhdGlvbjwvaDE+J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICBmaWVsZEluZm9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL2J1aWxkX3ZhbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vbGFuZF92YWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL3RvdGFsX3ZhbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ0JJTExJTkdfQ0xBU1NfREVDT0RFJyxcbiAgICAgICAgICBsYWJlbDogJ0JpbGxpbmcgQ2xhc3MnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDI+TGFzdCBTYWxlPC9oMT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnZmllbGRzJyxcbiAgICAgIGZpZWxkSW5mb3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ1NBTEVfREFURScsXG4gICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICBkYXRlRm9ybWF0OiAnc2hvcnQtZGF0ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsOiAnRGF0ZSBTb2xkJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi9zYWxlX3ByaWNlJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPkRlZWRzPC9oMT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnZmllbGRzJyxcbiAgICAgIGZpZWxkSW5mb3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ0RFRURfQk9PSycsXG4gICAgICAgICAgbGFiZWw6ICdCb29rJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnREVFRF9QQUdFJyxcbiAgICAgICAgICBsYWJlbDogJ1BhZ2UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdERUVEX0RBVEUnLFxuICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgZGF0ZUZvcm1hdDogJ3Nob3J0LWRhdGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbDogJ0RlZWQgRGF0ZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ0RFRURfQUNSRVMnLFxuICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgcGxhY2VzOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbDogJ0RlZWQgQWNyZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdQUk9QREVTQycsXG4gICAgICAgICAgbGFiZWw6ICdMZWdhbCBEZXNjcmlwdGlvbidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG5cbiAgICBuZXcgQ3VzdG9tQ29udGVudCh7XG4gICAgICBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnLCAnUkVJRCddLFxuICAgICAgY3JlYXRvcjogZGVlZENyZWF0b3JcbiAgICB9KSxcbiAgICAvLyB7XG4gICAgLy8gICB0eXBlOiAndGV4dCcsXG4gICAgLy8gICB0ZXh0OlxuICAgIC8vICc8aDEgY2xhc3M9XCJ0ZXh0LWdyZWVuXCI+e1NJVEVfQUREUkVTU308L2gxPicgK1xuICAgIC8vICc8aDI+R2VuZXJhbDwvaDI+e2V4cHJlc3Npb24vZ2VuZXJhbH0nICtcbiAgICAvLyAnPGgyPk93bmVyPC9oMj57T1dORVJ9PGJyLz57ZXhwcmVzc2lvbi9tYWlsaW5nLWFkZHJlc3N9JyArXG4gICAgLy8gJzxoMj5WYWx1YXRpb248L2gyPntleHByZXNzaW9uL3Byb3BlcnR5LXZhbHVlc30nICtcbiAgICAvLyAnPGgyPlNhbGUgSW5mb3JtYXRpb248L2gyPntUT1RTQUxQUklDRX08YnIvPntTQUxFX0RBVEV9JyArXG4gICAgLy8gJzxoMj5EZWVkczwvaDI+e2V4cHJlc3Npb24vZGVlZC1ib29rLXBhZ2V9JyArXG4gICAgLy8gJzxici8+PHN0cm9uZz5EZWVkIERhdGU8L3N0cm9uZz48YnIvPntERUVEX0RBVEV9PGJyLz4nICtcbiAgICAvLyAnPGJyLz5MZWdhbCBEZXNjcmlwdGlvbjxici8+e1BST1BERVNDfTxici8+JyArXG4gICAgLy8gJzxhIGhyZWY9XCJodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPXtleHByZXNzaW9uL2JvbS1kb2MtbnVtfSZSZWNvcmREYXRlPVwiIHRhcmdldD1cIl9ibGFua1wiPkJvb2sgb2YgTWFwczwvYT48YnIvPjxhIGhyZWY9XCJodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPXtleHByZXNzaW9uL2RlZWQtZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EZWVkPC9hPidcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDI+QnVpbGRpbmc8L2gxPidcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdmaWVsZHMnLFxuICAgICAgZmllbGRJbmZvczogW1xuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnSEVBVEVEQVJFQScsXG4gICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICBkaWdpdFNlcGFyYXRvcjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6ICdIZWF0ZWQgQXJlYSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ1lFQVJfQlVJTFQnLFxuICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgZGlnaXRTZXBhcmF0b3I6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbDogJ1llYXIgQnVpbHQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdERVNJR05fU1RZTEVfREVDT0RFJyxcbiAgICAgICAgICBsYWJlbDogJ0Rlc2lnbi9TdHlsZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ1RPVFNUUlVDVFMnLFxuICAgICAgICAgIGxhYmVsOiAnVG90YWwgU3RydWN0dXJlcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ1RPVFVOSVRTJyxcbiAgICAgICAgICBsYWJlbDogJ1RvdGFsIFVuaXRzJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnbWVkaWEnLFxuICAgICAgbWVkaWFJbmZvczogW11cbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDI+U2VydmljZXM8L2gxPidcbiAgICB9LFxuICAgIG5ldyBDdXN0b21Db250ZW50KHtcbiAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICBjcmVhdG9yOiAoZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGFjY29yZGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYWNjb3JkaW9uJyk7XG4gICAgICAgIGFjY29yZGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGlvbi1tb2RlJywgJ3NpbmdsZScpO1xuXG4gICAgICAgIHNlcnZpY2VzLmZvckVhY2goc2VydmljZSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYWNjb3JkaW9uLWl0ZW0nKTtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaXRlbS10aXRsZScsIHNlcnZpY2UuZ3JvdXAudGl0bGUpO1xuICAgICAgICAgIGFjY29yZGlvbi5hcHBlbmQoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvL2NvbnN0IGYgPSBzZXJ2aWNlQ2hhbmdlZC5iaW5kKGUuR3JhcGhpYyk7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoZiwgMTAwMCk7XG4gICAgICAgIGNvbnN0IGdyYXBoaWMgPSBlLmdyYXBoaWM7XG4gICAgICAgIGFjY29yZGlvbi5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlQWNjb3JkaW9uQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgIHNlcnZpY2VDaGFuZ2VkKGdyYXBoaWMsIGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjY29yZGlvbjtcbiAgICAgIH1cbiAgICB9KVxuICBdXG59KTtcblxuZXhwb3J0IGNvbnN0IGZlYXR1cmVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICBwb3J0YWxJdGVtOiB7XG4gICAgaWQ6ICdkM2QwMmQ1ZTM1MzI0Yjc2OTQ2OWI5OTEyMWMwZTk5NidcbiAgfSxcbiAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBjb25kb3NUYWJsZSA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICBwb3J0YWxJdGVtOiB7XG4gICAgaWQ6ICdkM2QwMmQ1ZTM1MzI0Yjc2OTQ2OWI5OTEyMWMwZTk5NidcbiAgfSxcbiAgbGF5ZXJJZDogMSxcbiAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfSxcbiAgcG9wdXBUZW1wbGF0ZTogcG9wdXBUZW1wbGF0ZVxufSk7XG5jb25kb3NUYWJsZS5sb2FkKCk7XG5leHBvcnQgY29uc3QgYWRkcmVzc1RhYmxlID0gbmV3IEZlYXR1cmVMYXllcih7XG4gIHBvcnRhbEl0ZW06IHtcbiAgICBpZDogJ2QzZDAyZDVlMzUzMjRiNzY5NDY5Yjk5MTIxYzBlOTk2J1xuICB9LFxuICBsYXllcklkOiA0LFxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9XG59KTtcbmFkZHJlc3NUYWJsZS5sb2FkKCk7XG5leHBvcnQgKiBmcm9tICcuL2FwcCc7XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5pbXBvcnQgU2tldGNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gnO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnO1xuaW1wb3J0IFRleHRTeW1ib2wgZnJvbSAnZXNyaS9zeW1ib2xzL1RleHRTeW1ib2wnO1xuXG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5pbXBvcnQgeyBtZWFzdXJlbWVudCB9IGZyb20gJy4uLy4uL3dpZGdldHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkRyYXcuRHJhd1ZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3Vmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQHByb3BlcnR5KCkgY29udGFpbmVyOiBzdHJpbmc7XG4gIHNrZXRjaDogU2tldGNoO1xuICBncmFwaGljczogR3JhcGhpY3NMYXllcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgdGV4dENvbG9yOiBlc3JpLkNvbG9yO1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGluaXREcmF3KCkge1xuICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiAnaGlkZScgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljcyk7XG5cbiAgICB0aGlzLnNrZXRjaCA9IG5ldyBTa2V0Y2goeyB2aWV3OiB0aGlzLnZpZXcsIGNvbnRhaW5lcjogJ3NrZXRjaERpdicsIGxheWVyOiB0aGlzLmdyYXBoaWNzLCBjcmVhdGlvbk1vZGU6ICdzaW5nbGUnIH0pO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcbiAgICAodGhpcy5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sIGFzIGFueSkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbC5jb2xvciA9IG5ldyBDb2xvcihbWzI1NSwgMCwgMCwgMC41XV0pO1xuICAgICh0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBhbnkpLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnBvbHlsaW5lU3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuXG4gICAgdGhpcy5za2V0Y2gud2F0Y2goJ2FjdGl2ZVRvb2wnLCB0b29sID0+IHtcbiAgICAgIGlmICh0b29sICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBtZWFzdXJlbWVudD8ubWVhc3VyZW1lbnQ/LmNsZWFyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5za2V0Y2gub24oJ2NyZWF0ZScsIGUgPT4ge1xuICAgICAgaWYgKGUuc3RhdGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgICAgaWYgKGUuc3RhdGUgPT09ICdjb21wbGV0ZScgJiYgdGhpcy5sYWJlbD8ubGVuZ3RoKSB7XG4gICAgICAgIGxldCBsYWJlbFBvaW50OiBlc3JpLkdlb21ldHJ5ID0gZS5ncmFwaGljLmdlb21ldHJ5O1xuICAgICAgICBpZiAoZS5ncmFwaGljLmdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJykge1xuICAgICAgICAgIGxhYmVsUG9pbnQgPSAoZS5ncmFwaGljLmdlb21ldHJ5IGFzIGVzcmkuUG9seWdvbikuY2VudHJvaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnID0gbmV3IEdyYXBoaWMoe1xuICAgICAgICAgIGdlb21ldHJ5OiBsYWJlbFBvaW50LFxuICAgICAgICAgIHN5bWJvbDogbmV3IFRleHRTeW1ib2woe1xuICAgICAgICAgICAgdGV4dDogdGhpcy5sYWJlbCxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnRleHRDb2xvcixcbiAgICAgICAgICAgIGhhbG9Db2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIGhhbG9TaXplOiAxLFxuICAgICAgICAgICAgeG9mZnNldDogJzVweCcsXG4gICAgICAgICAgICB5b2Zmc2V0OiAnNXB4JyxcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiAnYm90dG9tJyxcbiAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdyaWdodCdcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5hZGQoZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnNvbGUubG9nKHZpZXcuc2NhbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5pbXBvcnQgRHJhd1ZpZXdNb2RlbCBmcm9tICcuL0RyYXcvRHJhd1ZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd1Byb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGRyYXctYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuRHJhdycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3IGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubGFiZWwnKVxuICBsYWJlbDogc3RyaW5nO1xuICBAYWxpYXNPZigndmlld01vZGVsLnRleHRDb2xvcicpXG4gIHRleHRDb2xvcjogQ29sb3I7XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogRHJhd1ZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogRHJhd1ZpZXdNb2RlbCA9IG5ldyBEcmF3Vmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IERyYXdQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfZHJhd1VwZGF0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnZpZXdNb2RlbC5za2V0Y2gpIHtcbiAgICAgIHRoaXMudmlld01vZGVsLmluaXREcmF3KCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGwnKTtcbiAgICBmaWxsPy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJyNmZjAwMDAnKTtcbiAgICBmaWxsPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlQ29sb3JDaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCBoZXg6IHN0cmluZyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICB9KTtcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpbmUnKTtcbiAgICBsaW5lPy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJyNmZjAwMDAnKTtcbiAgICBsaW5lPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlQ29sb3JDaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCBoZXg6IHN0cmluZyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sIGFzIGVzcmkuU2ltcGxlTWFya2VyU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgfSk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGFjaXR5Jyk7XG4gICAgb3BhY2l0eT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVNsaWRlclVwZGF0ZScsIChlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbC5jb2xvci5hID0gZS50YXJnZXQudmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3Qgd2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lkdGgnKTtcbiAgICB3aWR0aD8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVNsaWRlclVwZGF0ZScsIChlOiBhbnkpID0+IHtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlsaW5lU3ltYm9sIGFzIGVzcmkuU2ltcGxlTGluZVN5bWJvbCkud2lkdGggPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sIGFzIGVzcmkuU2ltcGxlTWFya2VyU3ltYm9sKS5vdXRsaW5lLndpZHRoID0gcGFyc2VGbG9hdChcbiAgICAgICAgZS50YXJnZXQudmFsdWVcbiAgICAgICk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS53aWR0aCA9IHBhcnNlRmxvYXQoXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsJyk7XG4gICAgbGFiZWw/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVJbnB1dEJsdXInLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldCgnbGFiZWwnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG4gICAgY29uc3QgdGV4dENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRDb2xvcicpO1xuICAgIHRleHRDb2xvcj8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgdGV4dENvbG9yPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlQ29sb3JDaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldCgndGV4dENvbG9yJywgQ29sb3IuZnJvbUhleChlLnRhcmdldC52YWx1ZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJVcGRhdGU9e3RoaXMuX2RyYXdVcGRhdGVkfSBpZD1cInNrZXRjaERpdlwiPjwvZGl2PlxuICAgICAgICA8Y2FsY2l0ZS1ibG9jayBoZWFkaW5nPVwiU2V0dGluZ3NcIiBvcGVuIGNvbGxhcHNpYmxlPlxuICAgICAgICAgIDxjYWxjaXRlLWJsb2NrLXNlY3Rpb24gdGV4dD1cIkNvbG9yXCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgRmlsbCBDb2xvciA8Y2FsY2l0ZS1jb2xvciBpZD1cImZpbGxcIiBoaWRlQ2hhbm5lbHMgaGlkZVNhdmVkIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgc2NhbGU9XCJzXCI+PC9jYWxjaXRlLWNvbG9yPlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIExpbmUgQ29sb3IgPGNhbGNpdGUtY29sb3IgaWQ9XCJsaW5lXCIgaGlkZUNoYW5uZWxzIGhpZGVTYXZlZCBhcHBlYXJhbmNlPVwibWluaW1hbFwiIHNjYWxlPVwic1wiPjwvY2FsY2l0ZS1jb2xvcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJGaWxsIE9wYWNpdHlcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBPcGFjaXR5PGNhbGNpdGUtc2xpZGVyIHNjYWxlPVwic1wiIGlkPVwib3BhY2l0eVwiIG1heD1cIjFcIiBtaW49XCIwXCIgdmFsdWU9XCIwLjVcIiBzdGVwPVwiMC4xXCI+PC9jYWxjaXRlLXNsaWRlcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJPdXRsaW5lXCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgV2lkdGggPGNhbGNpdGUtc2xpZGVyIGlkPVwid2lkdGhcIiBtYXg9XCIxMFwiIG1pbj1cIjBcIiB2YWx1ZT1cIjFcIiBzdGVwPVwiMC41XCI+PC9jYWxjaXRlLXNsaWRlcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJMYWJlbGluZ1wiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIExhYmVsIDxjYWxjaXRlLWlucHV0IHNjYWxlPVwic1wiIGlkPVwibGFiZWxcIiB0eXBlPVwidGV4dGFyZWFcIj48L2NhbGNpdGUtaW5wdXQ+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgVGV4dCBDb2xvclxuICAgICAgICAgICAgICA8Y2FsY2l0ZS1jb2xvciBpZD1cInRleHRDb2xvclwiIGhpZGVDaGFubmVscyBoaWRlU2F2ZWQgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBzY2FsZT1cInNcIj48L2NhbGNpdGUtY29sb3I+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgIDwvY2FsY2l0ZS1ibG9jaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcbmltcG9ydCBTa2V0Y2ggZnJvbSAnZXNyaS93aWRnZXRzL1NrZXRjaCc7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IHsgbWVhc3VyZW1lbnQgfSBmcm9tICcuLi8uLi93aWRnZXRzJztcbmltcG9ydCBnZW9tZXRyeUVuZ2luZSBmcm9tICdlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lJztcbmltcG9ydCBDb2xvciBmcm9tICdlc3JpL0NvbG9yJztcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuU2VsZWN0LlNlbGVjdFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBsYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICdza2V0Y2gnLCB0aGlzLmluaXRTa2V0Y2guYmluZCh0aGlzKSk7XG4gIH1cbiAgc2tldGNoOiBlc3JpLlNrZXRjaDtcbiAgYnVmZmVyRGlzdGFuY2U6IG51bWJlcjtcbiAgZ3JhcGhpY3M6IEdyYXBoaWNzTGF5ZXI7XG5cbiAgQHByb3BlcnR5KCkgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG4gIGluaXRTa2V0Y2goKSB7XG4gICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJyB9KTtcbiAgICB0aGlzLnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNzKTtcbiAgICB0aGlzLnNrZXRjaCA9IG5ldyBTa2V0Y2goe1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgY29udGFpbmVyOiAnc2VsZWN0V2lkZ2V0JyxcbiAgICAgIGxheWVyOiB0aGlzLmdyYXBoaWNzLFxuICAgICAgY3JlYXRpb25Nb2RlOiAnc2luZ2xlJ1xuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC51cGRhdGVPbkdyYXBoaWNDbGljayA9IGZhbHNlO1xuICAgIHRoaXMuc2tldGNoLm9uKCdjcmVhdGUnLCBldiA9PiB7XG4gICAgICBpZiAoZXYuc3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyRGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgY29uc3QgZyA9IGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljQnVmZmVyKGV2LmdyYXBoaWMuZ2VvbWV0cnksIHRoaXMuYnVmZmVyRGlzdGFuY2UsICdmZWV0Jyk7XG4gICAgICAgICAgLy9wcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGcgYXMgX19lc3JpLlBvbHlnb247XG4gICAgICAgICAgZXYuZ3JhcGhpYy5nZW9tZXRyeSA9IGcgYXMgX19lc3JpLlBvbHlnb247XG4gICAgICAgICAgdGhpcy5ncmFwaGljcy5hZGQoZXYuZ3JhcGhpYyk7XG4gICAgICAgICAgZXYuZ3JhcGhpYy5zeW1ib2wgPSB7XG4gICAgICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgICAgICAgICAgc3R5bGU6ICdub25lJyxcbiAgICAgICAgICAgIG91dGxpbmU6IHsgc3R5bGU6ICdzaG9ydC1kYXNoJywgd2lkdGg6IDIuNSwgY29sb3I6IFsyMjEsIDIyMSwgMjIxLCAxXSB9LFxuICAgICAgICAgICAgY29sb3I6IG5ldyBDb2xvcihbMjU1LCAyNDMsIDEzLCAwLjI1XSlcbiAgICAgICAgICB9IGFzIGFueTtcbiAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gZXYuZ3JhcGhpYy5nZW9tZXRyeSBhcyBlc3JpLkdlb21ldHJ5O1xuICAgICAgICAgIHRoaXMudmlldy5nb1RvKGV2LmdyYXBoaWMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBldi5ncmFwaGljLmdlb21ldHJ5IGFzIGVzcmkuR2VvbWV0cnk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChldi5zdGF0ZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICBtZWFzdXJlbWVudD8ubWVhc3VyZW1lbnQ/LmNsZWFyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5za2V0Y2gud2F0Y2goJ2FjdGl2ZVRvb2wnLCB0b29sID0+IHtcbiAgICAgIGlmICh0b29sICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBtZWFzdXJlbWVudD8ubWVhc3VyZW1lbnQ/LmNsZWFyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnNvbGUubG9nKHZpZXcuc2NhbGUpO1xuICAgIHRoaXMuc2V0KCdidWZmZXJEaXN0YW5jZScsIDApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBTZWxlY3RWaWV3TW9kZWwgZnJvbSAnLi9TZWxlY3QvU2VsZWN0Vmlld01vZGVsJztcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0UHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgbGF5ZXI/OiBlc3JpLkZlYXR1cmVMYXllcjtcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgc2VsZWN0LWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLlNlbGVjdCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5sYXllcicpXG4gIGxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5za2V0Y2gnKVxuICBza2V0Y2g6IGVzcmkuU2tldGNoO1xuICBAYWxpYXNPZigndmlld01vZGVsLmJ1ZmZlckRpc3RhbmNlJylcbiAgYnVmZmVyRGlzdGFuY2U6IG51bWJlcjtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBTZWxlY3RWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IFNlbGVjdFZpZXdNb2RlbCA9IG5ldyBTZWxlY3RWaWV3TW9kZWwoKTtcbiAgX3NrZXRjaENyZWF0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnZpZXdNb2RlbC5za2V0Y2gpIHtcbiAgICAgIHRoaXMudmlld01vZGVsLmluaXRTa2V0Y2goKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBTZWxlY3RQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXY6IGFueSkge1xuICAgIHRoaXMuc2V0KCdidWZmZXJEaXN0YW5jZScsIHBhcnNlSW50KGV2LnRhcmdldC52YWx1ZSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0RGl2IGNhbGNpdGUtaW5wdXQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUlucHV0Qmx1cicsIChldjogYW55KSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZShldik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyVXBkYXRlPXt0aGlzLl9za2V0Y2hDcmVhdGVkfSBpZD1cInNlbGVjdFdpZGdldFwiPjwvZGl2PlxuICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICBCdWZmZXIgRGlzdGFuY2UgKGZlZXQpXG4gICAgICAgICAgPGNhbGNpdGUtaW5wdXRcbiAgICAgICAgICAgIHNjYWxlPVwic1wiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgbWF4PVwiMjAwMFwiXG4gICAgICAgICAgICBzdGVwPVwiNTBcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMudmlld01vZGVsLmJ1ZmZlckRpc3RhbmNlfVxuICAgICAgICAgID48L2NhbGNpdGUtaW5wdXQ+XG4gICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCBDb2xvciBmcm9tICdlc3JpL0NvbG9yJztcbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5pbXBvcnQgQmFzZU1hcEdhbGxlcnkgZnJvbSAnZXNyaS93aWRnZXRzL0Jhc2VtYXBHYWxsZXJ5JztcbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5CYXNlTWFwcy5CYXNlTWFwc1ZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTWFwc1ZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIGJhc2VtYXBzOiBCYXNlTWFwR2FsbGVyeTtcbiAgaW1hZ2VzOiBCYXNlTWFwR2FsbGVyeTtcblxuICBhY3RpdmVCYXNlbWFwOiBlc3JpLkJhc2VtYXA7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2hhbmdlUHJvcGVydHlMaW5lcyA9IChiYXNlbWFwOiBlc3JpLkJhc2VtYXApID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eUxheWVyOiBGZWF0dXJlTGF5ZXIgPSB0aGlzLnZpZXcubWFwLmFsbExheWVycy5maW5kKGxheWVyID0+IHtcbiAgICAgIHJldHVybiBsYXllci50eXBlID09PSAnZmVhdHVyZScgJiYgbGF5ZXIudGl0bGUgPT09ICdQcm9wZXJ0eSc7XG4gICAgfSkgYXMgRmVhdHVyZUxheWVyO1xuICAgIGNvbnN0IG5ld1JlbmRlcmVyOiBlc3JpLlNpbXBsZVJlbmRlcmVyID0gKHByb3BlcnR5TGF5ZXIucmVuZGVyZXIgYXMgZXNyaS5TaW1wbGVSZW5kZXJlcikuY2xvbmUoKSBhcyBlc3JpLlNpbXBsZVJlbmRlcmVyO1xuICAgIGlmIChcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZGFyaycpIHx8XG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ25pZ2h0JykgfHxcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZGFyaycpIHx8XG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnMjAnKSB8fFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJzE5JylcbiAgICApIHtcbiAgICAgIChuZXdSZW5kZXJlci5zeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gbmV3IENvbG9yKFsyNTUsIDI1NSwgMjU1LCAwLjVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKG5ld1JlbmRlcmVyLnN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUuY29sb3IgPSBuZXcgQ29sb3IoWzAsIDAsIDAsIDAuNV0pO1xuICAgIH1cbiAgICBwcm9wZXJ0eUxheWVyLnJlbmRlcmVyID0gbmV3UmVuZGVyZXI7XG4gIH07XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHRoaXMuYmFzZW1hcHMgPSBuZXcgQmFzZU1hcEdhbGxlcnkoeyB2aWV3OiB0aGlzLnZpZXcgfSk7XG4gICAgdGhpcy52aWV3LndoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VQcm9wZXJ0eUxpbmVzKHRoaXMudmlldy5tYXAuYmFzZW1hcCk7XG4gICAgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC53YXRjaCgnYmFzZW1hcCcsIChiYXNlbWFwOiBlc3JpLkJhc2VtYXApID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlUHJvcGVydHlMaW5lcyhiYXNlbWFwKTtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzJyk/LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xuICAgICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY3RpdmVCYXNlbWFwID0gdGhpcy52aWV3Lm1hcC5iYXNlbWFwO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTd2l0Y2gnKT8ucmVtb3ZlQXR0cmlidXRlKCdzd2l0Y2hlZCcpO1xuICAgICAgfVxuICAgICAgY29uc3QgYm0gPSB0aGlzLmltYWdlcy52aWV3TW9kZWwuaXRlbXMuZmluZChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uYmFzZW1hcC50aXRsZSA9PT0gdGhpcy52aWV3Lm1hcC5iYXNlbWFwLnRpdGxlO1xuICAgICAgfSk7XG4gICAgICBpZiAoYm0gJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU3dpdGNoJyk/Lmhhc0F0dHJpYnV0ZSgnc3dpdGNoZWQnKSkge1xuICAgICAgICB0aGlzLnZpZXcubWFwLmFkZE1hbnkodGhpcy5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMudG9BcnJheSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKTtcbiAgICAgICAgICB0aGlzLnZpZXcubWFwLnJlbW92ZSh0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5hY3RpdmVCYXNlbWFwID0gdGhpcy52aWV3Lm1hcC5iYXNlbWFwO1xuICAgIHRoaXMuaW1hZ2VzID0gbmV3IEJhc2VNYXBHYWxsZXJ5KHtcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIHNvdXJjZToge1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIGlkOiAnNDkyMzg2NzU5ZDI2NGQ0OTk0OGJmN2Y4Mzk1N2RkYjknXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xuICAgICAgICB0aGlzLnZpZXcubWFwLnJlbW92ZSh0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QganNvbiA9ICh2aWV3Lm1hcCBhcyBhbnkpLnRvSlNPTigpO1xuICAgICAganNvbi5pbml0aWFsU3RhdGUudmlld3BvaW50LnRhcmdldEdlb21ldHJ5ID0gdmlldy5leHRlbnQ7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ltYXBzJywgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuICAgIH0pO1xuICB9XG4gIHRvZ2dsZUNvbnRlbnQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gJ21hcHMnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwcycpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXMnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwc0l0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlc0l0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmQnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTbGlkZXInKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXMnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwcycpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXNJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuXG5pbXBvcnQgQmFzZU1hcHNWaWV3TW9kZWwgZnJvbSAnLi9CYXNlTWFwcy9CYXNlTWFwc1ZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZU1hcHNQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBiYXNlbWFwcy1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5CYXNlTWFwcycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTWFwcyBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYmFzZW1hcHMnKVxuICBiYXNlbWFwczogZXNyaS5CYXNlbWFwR2FsbGVyeTtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5pbWFnZXMnKVxuICBpbWFnZXM6IGVzcmkuQmFzZW1hcEdhbGxlcnk7XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogQmFzZU1hcHNWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IEJhc2VNYXBzVmlld01vZGVsID0gbmV3IEJhc2VNYXBzVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IEJhc2VNYXBzUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG4gIF9jcmVhdGVNYXBzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmJhc2VtYXBzKSB7XG4gICAgICB0aGlzLmJhc2VtYXBzLmNvbnRhaW5lciA9ICdtYXBzJztcbiAgICB9XG4gIH07XG4gIF9jcmVhdGVJbWFnZXMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuaW1hZ2VzKSB7XG4gICAgICB0aGlzLmltYWdlcy5jb250YWluZXIgPSAnaW1hZ2VzJztcbiAgICB9XG4gIH07XG4gIGhhbmRsZVN3aXRjaENoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdzd2l0Y2hlZCcpICE9ICcnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTbGlkZXInKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBjb25zb2xlLmxvZygnYWRkJyk7XG4gICAgICB0aGlzLnZpZXcubWFwLmFkZE1hbnkodGhpcy52aWV3TW9kZWwuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLnRvQXJyYXkoKSwgMCk7XG4gICAgICB0aGlzLnZpZXcubWFwLmJhc2VtYXAucmVmZXJlbmNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBsYXllci52aXNpYmxlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudmlldy5tYXAubGF5ZXJzXG4gICAgICAgIC5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnZpZXdNb2RlbC5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuaW5jbHVkZXMobGF5ZXIpO1xuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgbGF5ZXIub3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICBsYXllci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHRoaXMudmlldy5tYXAuYmFzZW1hcC5yZWZlcmVuY2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIGxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKTtcbiAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGhhbmRsZVNsaWRlckNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCBsYXllcnMgPSB0aGlzLnZpZXcubWFwLmxheWVyc1xuICAgICAgLmZpbHRlcihsYXllciA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdNb2RlbC5hY3RpdmVCYXNlbWFwPy5iYXNlTGF5ZXJzLmluY2x1ZGVzKGxheWVyKTtcbiAgICAgIH0pXG4gICAgICAudG9BcnJheSgpO1xuICAgIGxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgIGxheWVyLm9wYWNpdHkgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3NsaWRlckNyZWF0ZWQgPSAoZTogYW55KSA9PiB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTbGlkZXInKVxuICAgICAgPy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2FsY2l0ZVNsaWRlclVwZGF0ZScsXG4gICAgICAgIHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlLmJpbmQoeyBiYXNlbWFwOiB0aGlzLmJhc2VtYXBzLCB2aWV3OiB0aGlzLnZpZXcgfSlcbiAgICAgICk7XG4gIH07XG4gIF9ibGVuZENyZWF0ZWQgPSAoZTogYW55KSA9PiB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTd2l0Y2gnKVxuICAgICAgPy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2FsY2l0ZVN3aXRjaENoYW5nZScsXG4gICAgICAgIHRoaXMuaGFuZGxlU3dpdGNoQ2hhbmdlLmJpbmQoeyBiYXNlbWFwOiB0aGlzLmJhc2VtYXBzLCB2aWV3OiB0aGlzLnZpZXcgfSlcbiAgICAgICk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmQnKT8ucmVtb3ZlQXR0cmlidXRlKCdzd2l0Y2hlZCcpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNiYXNlbWFwRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUmFkaW9Hcm91cEl0ZW1DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgIC8vIGNhbiBJIGdldCBjaGVja2VkIGFuZCB2YWx1ZSBsaWtlIHRoaXM/XG4gICAgICAgIGlmIChlLnRhcmdldD8uY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMudmlld01vZGVsLnRvZ2dsZUNvbnRlbnQoZS50YXJnZXQ/LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJoaWRkZW5cIiBpZD1cImJsZW5kXCI+XG4gICAgICAgICAgPGNhbGNpdGUtc3dpdGNoIGFmdGVyQ3JlYXRlPXt0aGlzLl9ibGVuZENyZWF0ZWR9IGlkPVwiYmxlbmRTd2l0Y2hcIj48L2NhbGNpdGUtc3dpdGNoPiBCbGVuZFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8Y2FsY2l0ZS1zbGlkZXJcbiAgICAgICAgICBhZnRlckNyZWF0ZT17dGhpcy5fc2xpZGVyQ3JlYXRlZH1cbiAgICAgICAgICBjbGFzcz1cImhpZGRlblwiXG4gICAgICAgICAgaWQ9XCJibGVuZFNsaWRlclwiXG4gICAgICAgICAgdmFsdWU9XCIwLjVcIlxuICAgICAgICAgIG1heD1cIjFcIlxuICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgIHN0ZXA9XCIwLjFcIlxuICAgICAgICA+PC9jYWxjaXRlLXNsaWRlcj5cblxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVNYXBzfSBpZD1cIm1hcHNcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlSW1hZ2VzfSBpZD1cImltYWdlc1wiIGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+XG4gICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwIHdpZHRoPVwiZnVsbFwiPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gY2hlY2tlZCB2YWx1ZT1cIm1hcHNcIiBpZD1cIm1hcHNJdGVtXCI+XG4gICAgICAgICAgICBNYXBzXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB2YWx1ZT1cImltYWdlc1wiIGlkPVwiaW1hZ2VzSXRlbVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgSW1hZ2VyeVxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBMYXllckxpc3QgZnJvbSAnZXNyaS93aWRnZXRzL0xheWVyTGlzdCc7XG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxheWVycy5MYXllcnNWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXJzVmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgbGF5ZXJMaXN0OiBlc3JpLkxheWVyTGlzdDtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgICB0aGlzLmxheWVyTGlzdCA9IG5ldyBMYXllckxpc3Qoe1xuICAgICAgdmlldyxcbiAgICAgIGNvbnRhaW5lcjogJ2xheWVyRGl2JyxcbiAgICAgIGxpc3RJdGVtQ3JlYXRlZEZ1bmN0aW9uOiBldmVudCA9PiB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBjb25zdCBpdGVtID0gZXZlbnQuaXRlbTtcbiAgICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSAhPSAnZ3JvdXAnKSB7XG4gICAgICAgICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1zbGlkZXInKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtaW4nLCAnMCcpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21heCcsICcxMDAnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtaW4tbGFiZWwnLCAnMCUnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtYXgtbGFiZWwnLCAnMTAwJScpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2xhYmVsLWhhbmRsZXMnLCAnJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAoaXRlbT8ubGF5ZXIub3BhY2l0eSAqIDEwMCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnZGF0YScsIGl0ZW0ubGF5ZXIuaWQpO1xuICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlU2xpZGVyVXBkYXRlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdmlldy5tYXAuZmluZExheWVyQnlJZCgoZXZlbnQudGFyZ2V0IGFzIGFueSkuZ2V0QXR0cmlidXRlKCdkYXRhJykpLm9wYWNpdHkgPVxuICAgICAgICAgICAgICBwYXJzZUludCgoZXZlbnQ/LnRhcmdldCBhcyBhbnkpPy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpIC8gMTAwO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGl0ZW0ucGFuZWwgPSB7XG4gICAgICAgICAgICBjb250ZW50OiBbc2xpZGVyLCAnbGVnZW5kJ10sXG4gICAgICAgICAgICBvcGVuOiBpdGVtLmxheWVyLnZpc2libGVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpdGVtLmxheWVyLnRpdGxlID09PSAnUHJvcGVydHknKSB7XG4gICAgICAgICAgICBpdGVtLmFjdGlvbnNTZWN0aW9ucyA9IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2hvdyBMYWJlbHMnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3RvZ2dsZScsXG4gICAgICAgICAgICAgICAgICBpZDogJ3Byb3BlcnR5LWxhYmVscycsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5sYXllci5sYWJlbHNWaXNpYmxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubGF5ZXJMaXN0Lm9uKCd0cmlnZ2VyLWFjdGlvbicsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5hY3Rpb24uaWQgPT09ICdwcm9wZXJ0eS1sYWJlbHMnKSB7XG4gICAgICAgIChldmVudC5pdGVtLmxheWVyIGFzIGVzcmkuRmVhdHVyZUxheWVyKS5sYWJlbHNWaXNpYmxlID0gKGV2ZW50LmFjdGlvbiBhcyBlc3JpLkFjdGlvblRvZ2dsZSkudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IExheWVyc1ZpZXdNb2RlbCBmcm9tICcuL0xheWVycy9MYXllcnNWaWV3TW9kZWwnO1xuaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5ZXJzUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbGF5ZXJzLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxheWVycycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllcnMgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5sYXllckxpc3QnKVxuICBsYXllckxpc3Q6IGVzcmkuTGF5ZXJMaXN0O1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTGF5ZXJzVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBMYXllcnNWaWV3TW9kZWwgPSBuZXcgTGF5ZXJzVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IExheWVyc1Byb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuICBmaWx0ZXJMYXllcnMgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHRoaXMubGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMuZm9yRWFjaCgoaXRlbTogZXNyaS5MaXN0SXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICBsZXQgb3BlbiA9IGZhbHNlO1xuICAgICAgICAoaXRlbS5sYXllciBhcyBlc3JpLkdyb3VwTGF5ZXIpLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBpZiAobGF5ZXIudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgbGF5ZXIubGlzdE1vZGUgPSAnc2hvdyc7XG4gICAgICAgICAgICBvcGVuID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGF5ZXIubGlzdE1vZGUgPSAnaGlkZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICBpdGVtLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCNsYXllckRpdl8keyhpdGVtIGFzIGFueSkudWlkfV9fdGl0bGVgKVxuICAgICAgICAgICAgPy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIGlmICghb3Blbikge1xuICAgICAgICAgIGl0ZW0ub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgI2xheWVyRGl2XyR7KGl0ZW0gYXMgYW55KS51aWR9X190aXRsZWApXG4gICAgICAgICAgICA/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0ub3BlbiA9IHRydWU7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjbGF5ZXJEaXZfJHsoaXRlbSBhcyBhbnkpLnVpZH1fX3RpdGxlYClcbiAgICAgICAgICAgID8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgX2NyZWF0ZUxheWVycyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5sYXllckxpc3QpIHtcbiAgICAgIHRoaXMubGF5ZXJMaXN0LmNvbnRhaW5lciA9ICdsYXllcldpZGdldCc7XG4gICAgfVxuICB9O1xuICBjbGVhckNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuZmlsdGVyTGF5ZXJzKCcnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXllclNlYXJjaCAuY2FsY2l0ZS1pbnB1dC1jbGVhci1idXR0b24nKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsZWFyQ2xpY2spO1xuICB9O1xuICBfY3JlYXRlU2VhcmNoID0gKGlucHV0OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5maWx0ZXJMYXllcnMoZS50YXJnZXQudmFsdWUpO1xuICAgICAgaW5wdXQucXVlcnlTZWxlY3RvcignLmNhbGNpdGUtaW5wdXQtY2xlYXItYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGVhckNsaWNrKTtcbiAgICB9KTtcbiAgfTtcbiAgX3Jlc2V0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgbmV3IFdlYk1hcCh7IHBvcnRhbEl0ZW06ICh0aGlzLnZpZXcubWFwIGFzIGVzcmkuV2ViTWFwKS5wb3J0YWxJdGVtLmNsb25lKCkgfSkubG9hZCgpLnRoZW4oKG1hcDogV2ViTWFwKSA9PiB7XG4gICAgICAgIG1hcC5hbGxMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgdGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKS52aXNpYmxlID0gbGF5ZXIudmlzaWJsZTtcbiAgICAgICAgICBpZiAobGF5ZXIudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgICAgKGxheWVyIGFzIGVzcmkuR3JvdXBMYXllcikubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpLnZpc2libGUgPSBsYXllci52aXNpYmxlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHN0aWNreVwiPlxuICAgICAgICAgIDxjYWxjaXRlLWlucHV0XG4gICAgICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyIGJ5IGxheWVyIG5hbWVcIlxuICAgICAgICAgICAgc2NhbGU9XCJzXCJcbiAgICAgICAgICAgIGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVTZWFyY2h9XG4gICAgICAgICAgICBpZD1cImxheWVyU2VhcmNoXCJcbiAgICAgICAgICA+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICAgIDxjYWxjaXRlLWJ1dHRvbiBpY29uLXN0YXJ0PVwidmlld0hpZGVcIiBzY2FsZT1cInNcIiBjb2xvcj1cImxpZ2h0XCIgb25jbGljaz17dGhpcy5fcmVzZXR9PjwvY2FsY2l0ZS1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUxheWVyc30gaWQ9XCJsYXllcldpZGdldFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxvY2F0aW9uU2VhcmNoLkxvY2F0aW9uU2VhcmNoVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uU2VhcmNoVmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBzZWFyY2g6IFNlYXJjaDtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdGhpcy5zZWFyY2ggPSBuZXcgU2VhcmNoKHsgdmlldzogdmlldywgbWF4U3VnZ2VzdGlvbnM6IDMwLCBzZWFyY2hBbGxFbmFibGVkOiBmYWxzZSB9KTtcbiAgICB0aGlzLnNlYXJjaC5hbGxTb3VyY2VzLm9uKCdhZnRlci1hZGQnLCBlID0+IHtcbiAgICAgIGlmICgoZS5pdGVtIGFzIGFueSkubGF5ZXIpIHtcbiAgICAgICAgZS5pdGVtLm5hbWUgPSAoZS5pdGVtIGFzIGFueSkubGF5ZXIudGl0bGU7XG4gICAgICAgIGUuaXRlbS5wbGFjZWhvbGRlciA9IChlLml0ZW0gYXMgYW55KS5sYXllci50aXRsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IExvY2F0aW9uU2VhcmNoVmlld01vZGVsIGZyb20gJy4vTG9jYXRpb25TZWFyY2gvTG9jYXRpb25TZWFyY2hWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uU2VhcmNoUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbG9jYXRpb25zZWFyY2gtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTG9jYXRpb25TZWFyY2gnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25TZWFyY2ggZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBAYWxpYXNPZigndmlld01vZGVsLnNlYXJjaCcpXG4gIHNlYXJjaDogZXNyaS53aWRnZXRzU2VhcmNoO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTG9jYXRpb25TZWFyY2hWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IExvY2F0aW9uU2VhcmNoVmlld01vZGVsID0gbmV3IExvY2F0aW9uU2VhcmNoVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IExvY2F0aW9uU2VhcmNoUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX3NlYXJjaENyZWF0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgIHRoaXMuc2VhcmNoLmNvbnRhaW5lciA9ICdsb2NhdGlvblNlYXJjaCc7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9zZWFyY2hDcmVhdGV9IGlkPVwibG9jYXRpb25TZWFyY2hcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuaW1wb3J0IE1hcFZpZXcgZnJvbSAnZXNyaS92aWV3cy9NYXBWaWV3JztcbmltcG9ydCBNYXAgZnJvbSAnZXNyaS9NYXAnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IHdhdGNoVXRpbHMgZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLk92ZXJ2aWV3TWFwLk92ZXJ2aWV3TWFwVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJ2aWV3TWFwVmlld01vZGVsIGV4dGVuZHMgZGVjbGFyZWQoQWNjZXNzb3IpIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgb3ZlcnZpZXdNYXBWaWV3OiBlc3JpLk1hcFZpZXc7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cbiAgc3RvcEV2dFByb3BhZ2F0aW9uID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICBkaXNhYmxlWm9vbWluZyA9ICh2aWV3OiBhbnkpID0+IHtcbiAgICB2aWV3LnBvcHVwLmRvY2tFbmFibGVkID0gdHJ1ZTtcblxuICAgIC8vIFJlbW92ZXMgdGhlIHpvb20gYWN0aW9uIG9uIHRoZSBwb3B1cFxuICAgIHZpZXcucG9wdXAuYWN0aW9ucyA9IFtdO1xuXG4gICAgLy8gc3RvcHMgcHJvcGFnYXRpb24gb2YgZGVmYXVsdCBiZWhhdmlvciB3aGVuIGFuIGV2ZW50IGZpcmVzXG5cbiAgICAvLyBleGx1ZGUgdGhlIHpvb20gd2lkZ2V0IGZyb20gdGhlIGRlZmF1bHQgVUlcbiAgICB2aWV3LnVpLmNvbXBvbmVudHMgPSBbJ2F0dHJpYnV0aW9uJ107XG5cbiAgICAvLyBkaXNhYmxlIG1vdXNlIHdoZWVsIHNjcm9sbCB6b29taW5nIG9uIHRoZSB2aWV3XG4gICAgdmlldy5vbignbW91c2Utd2hlZWwnLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG5cbiAgICAvLyBkaXNhYmxlIHpvb21pbmcgdmlhIGRvdWJsZS1jbGljayBvbiB0aGUgdmlld1xuICAgIHZpZXcub24oJ2RvdWJsZS1jbGljaycsIHRoaXMuc3RvcEV2dFByb3BhZ2F0aW9uKTtcblxuICAgIC8vIGRpc2FibGUgem9vbWluZyBvdXQgdmlhIGRvdWJsZS1jbGljayArIENvbnRyb2wgb24gdGhlIHZpZXdcbiAgICB2aWV3Lm9uKCdkb3VibGUtY2xpY2snLCBbJ0NvbnRyb2wnXSwgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuXG4gICAgLy8gZGlzYWJsZXMgcGluY2gtem9vbSBhbmQgcGFubmluZyBvbiB0aGUgdmlld1xuICAgIHZpZXcub24oJ2RyYWcnLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG5cbiAgICAvLyBkaXNhYmxlIHRoZSB2aWV3J3Mgem9vbSBib3ggdG8gcHJldmVudCB0aGUgU2hpZnQgKyBkcmFnXG4gICAgLy8gYW5kIFNoaWZ0ICsgQ29udHJvbCArIGRyYWcgem9vbSBnZXN0dXJlcy5cbiAgICB2aWV3Lm9uKCdkcmFnJywgWydTaGlmdCddLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG4gICAgdmlldy5vbignZHJhZycsIFsnU2hpZnQnLCAnQ29udHJvbCddLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG5cbiAgICAvLyBwcmV2ZW50cyB6b29taW5nIHdpdGggdGhlICsgYW5kIC0ga2V5c1xuICAgIHZpZXcub24oJ2tleS1kb3duJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHByb2hpYml0ZWRLZXlzID0gWycrJywgJy0nLCAnU2hpZnQnLCAnXycsICc9J107XG4gICAgICBjb25zdCBrZXlQcmVzc2VkID0gZXZlbnQua2V5O1xuICAgICAgaWYgKHByb2hpYml0ZWRLZXlzLmluZGV4T2Yoa2V5UHJlc3NlZCkgIT09IC0xKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpZXc7XG4gIH07XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoeyBiYXNlbWFwOiAnc3RyZWV0cy1uYXZpZ2F0aW9uLXZlY3RvcicgfSk7XG4gICAgdGhpcy5vdmVydmlld01hcFZpZXcgPSBuZXcgTWFwVmlldyh7IG1hcDogbWFwLCBleHRlbnQ6IHZpZXcuZXh0ZW50IH0pO1xuICAgIHRoaXMuZGlzYWJsZVpvb21pbmcodGhpcy5vdmVydmlld01hcFZpZXcpO1xuICAgIHRoaXMub3ZlcnZpZXdNYXBWaWV3LnVpLnJlbW92ZSgnem9vbScpO1xuXG4gICAgY29uc3QgZ3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcbiAgICAgIGdlb21ldHJ5OiBudWxsLFxuICAgICAgc3ltYm9sOiB7XG4gICAgICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMC41XSxcbiAgICAgICAgb3V0bGluZTogbnVsbFxuICAgICAgfVxuICAgIH0gYXMgYW55KTtcbiAgICB0aGlzLm92ZXJ2aWV3TWFwVmlldy5ncmFwaGljcy5hZGQoZ3JhcGhpYyk7XG4gICAgd2F0Y2hVdGlscy5pbml0KHZpZXcsICdleHRlbnQnLCAoKSA9PiB7XG4gICAgICBncmFwaGljLmdlb21ldHJ5ID0gdmlldy5leHRlbnQ7XG4gICAgfSk7XG5cbiAgICB3YXRjaFV0aWxzLmluaXQodmlldywgJ3N0YXRpb25hcnknLCAoKSA9PiB7XG4gICAgICBpZiAodmlldy5zdGF0aW9uYXJ5KSB7XG4gICAgICAgIHRoaXMub3ZlcnZpZXdNYXBWaWV3XG4gICAgICAgICAgLmdvVG8oe1xuICAgICAgICAgICAgY2VudGVyOiB2aWV3LmNlbnRlcixcbiAgICAgICAgICAgIHNjYWxlOlxuICAgICAgICAgICAgICB2aWV3LnNjYWxlICpcbiAgICAgICAgICAgICAgMiAqXG4gICAgICAgICAgICAgIE1hdGgubWF4KHZpZXcud2lkdGggLyB0aGlzLm92ZXJ2aWV3TWFwVmlldy53aWR0aCwgdmlldy5oZWlnaHQgLyB0aGlzLm92ZXJ2aWV3TWFwVmlldy5oZWlnaHQpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZSBnb3RvLWludGVycnVwdGVkIGVycm9yc1xuICAgICAgICAgICAgaWYgKGVycm9yLm5hbWUgIT0gJ3ZpZXc6Z290by1pbnRlcnJ1cHRlZCcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IE92ZXJ2aWV3TWFwVmlld01vZGVsIGZyb20gJy4vT3ZlcnZpZXdNYXAvT3ZlcnZpZXdNYXBWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJ2aWV3TWFwUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgb3ZlcnZpZXdtYXAtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuT3ZlcnZpZXdNYXAnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcnZpZXdNYXAgZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwub3ZlcnZpZXdNYXBWaWV3JylcbiAgb3ZlcnZpZXdNYXBWaWV3OiBlc3JpLk1hcFZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubmFtZScpXG4gIEByZW5kZXJhYmxlKClcbiAgbmFtZSA9ICcnO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogT3ZlcnZpZXdNYXBWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IE92ZXJ2aWV3TWFwVmlld01vZGVsID0gbmV3IE92ZXJ2aWV3TWFwVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IE92ZXJ2aWV3TWFwUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG4gIG92ZXJ2aWV3Q3JlYXRlZCA9IChkaXY6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgaWYgKHRoaXMub3ZlcnZpZXdNYXBWaWV3KSB7XG4gICAgICB0aGlzLm92ZXJ2aWV3TWFwVmlldy5jb250YWluZXIgPSBkaXY7XG4gICAgfVxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5vdmVydmlld0NyZWF0ZWR9IGlkPVwib3ZlcnZpZXdEaXZcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5DbGVhci5DbGVhclZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGVhclZpZXdNb2RlbCBleHRlbmRzIGRlY2xhcmVkKEFjY2Vzc29yKSB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuXG5pbXBvcnQgQ2xlYXJWaWV3TW9kZWwgZnJvbSAnLi9DbGVhci9DbGVhclZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xlYXJQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldC0tYnV0dG9uIGVzcmktd2lkZ2V0JyxcbiAgdGV4dDogJ2VzcmktaWNvbi1mb250LWZhbGxiYWNrLXRleHQnLFxuICB0cmFzaEljb246ICdlc3JpLWljb24gZXNyaS1pY29uLXRyYXNoJyxcbiAgbG9hZGluZ0ljb246ICdlc3JpLWljb24tbG9hZGluZy1pbmRpY2F0b3InLFxuICByb3RhdGluZ0ljb246ICdlc3JpLXJvdGF0aW5nJyxcbiAgd2lkZ2V0SWNvbjogJ2VzcmktaWNvbi10cmFzaCcsXG5cbiAgLy8gY29tbW9uXG4gIGRpc2FibGVkOiAnZXNyaS1kaXNhYmxlZCdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQ2xlYXInKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXIgZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBDbGVhclZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogQ2xlYXJWaWV3TW9kZWwgPSBuZXcgQ2xlYXJWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogQ2xlYXJQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgY2xlYXJUaXRsZSA9ICdDbGVhcic7XG4gIHJlbmRlckljb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPXt0aGlzLmNsYXNzZXMoQ1NTLnRyYXNoSWNvbil9IC8+O1xuICB9O1xuICBfY2xlYXIgPSAoKSA9PiB7XG4gICAgdGhpcy52aWV3Lm1hcC5hbGxMYXllcnNcbiAgICAgIC5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICByZXR1cm4gbGF5ZXIudHlwZSA9PT0gJ2dyYXBoaWNzJztcbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIChsYXllciBhcyBlc3JpLkdyYXBoaWNzTGF5ZXIpLnJlbW92ZUFsbCgpO1xuICAgICAgfSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBiaW5kPXt0aGlzfVxuICAgICAgICBjbGFzcz17dGhpcy5jbGFzc2VzKENTUy5iYXNlKX1cbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIG9uY2xpY2s9e3RoaXMuX2NsZWFyfVxuICAgICAgICBvbmtleWRvd249e3RoaXMuX2NsZWFyfVxuICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLmNsZWFyVGl0bGV9XG4gICAgICAgIHRpdGxlPXt0aGlzLmNsZWFyVGl0bGV9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnJlbmRlckljb24oKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIFdpZGdldHNcbmltcG9ydCBMZWdlbmQgZnJvbSAnZXNyaS93aWRnZXRzL0xlZ2VuZCc7XG5pbXBvcnQgUHJpbnQgZnJvbSAnZXNyaS93aWRnZXRzL1ByaW50JztcbmltcG9ydCBCb29rbWFya3MgZnJvbSAnZXNyaS93aWRnZXRzL0Jvb2ttYXJrcyc7XG5pbXBvcnQgUHJvcGVydHlTZWFyY2ggZnJvbSAnLi93aWRnZXRzL1Byb3BlcnR5U2VhcmNoJztcbmltcG9ydCBDb29yZGluYXRlQ29udmVyc2lvbiBmcm9tICdlc3JpL3dpZGdldHMvQ29vcmRpbmF0ZUNvbnZlcnNpb24nO1xuaW1wb3J0IEV4cGFuZCBmcm9tICdlc3JpL3dpZGdldHMvRXhwYW5kJztcbmltcG9ydCBNZWFzdXJlIGZyb20gJy4vd2lkZ2V0cy9NZWFzdXJlJztcbmltcG9ydCBDb21wYXNzIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Db21wYXNzJztcbmltcG9ydCBMb2NhdGUgZnJvbSAnZXNyaS93aWRnZXRzL0xvY2F0ZSc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnZXNyaS93aWRnZXRzL1RyYWNrJztcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GdWxsc2NyZWVuJztcblxuaW1wb3J0IHsgY29uZG9zVGFibGUsIGFkZHJlc3NUYWJsZSwgZmVhdHVyZUxheWVyIH0gZnJvbSAnLi9kYXRhL3NlYXJjaCc7XG5pbXBvcnQgZXNyaSA9IF9fZXNyaTtcbmltcG9ydCBEcmF3IGZyb20gJy4vd2lkZ2V0cy9EcmF3JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi93aWRnZXRzL1NlbGVjdCc7XG5pbXBvcnQgQmFzZU1hcHMgZnJvbSAnLi93aWRnZXRzL0Jhc2VNYXBzJztcbmltcG9ydCBMYXllcnMgZnJvbSAnLi93aWRnZXRzL0xheWVycyc7XG5pbXBvcnQgTG9jYXRpb25TZWFyY2ggZnJvbSAnLi93aWRnZXRzL0xvY2F0aW9uU2VhcmNoJztcbmltcG9ydCBPdmVydmlld01hcCBmcm9tICcuL3dpZGdldHMvT3ZlcnZpZXdNYXAnO1xuaW1wb3J0IENsZWFyIGZyb20gJy4vd2lkZ2V0cy9DbGVhcic7XG4vL2ltcG9ydCBMYXllclNlbGVjdCBmcm9tICcuL3dpZGdldHMvTGF5ZXJTZWxlY3QnO1xuXG5leHBvcnQgbGV0IG1lYXN1cmVtZW50OiBNZWFzdXJlO1xuZXhwb3J0IGNvbnN0IHNlbGVjdDogU2VsZWN0ID0gbmV3IFNlbGVjdCgpO1xuZXhwb3J0IGxldCBsYXllcnM6IExheWVycztcbmV4cG9ydCBsZXQgbGVnZW5kOiBMZWdlbmQ7XG5leHBvcnQgbGV0IGJhc2VtYXBzOiBCYXNlTWFwcztcbmV4cG9ydCBsZXQgYm9va21hcmtzOiBCb29rbWFya3M7XG5leHBvcnQgbGV0IGxvY2F0aW9uU2VhcmNoOiBMb2NhdGlvblNlYXJjaDtcbmV4cG9ydCBsZXQgZHJhd1dpZGdldDogRHJhdztcbmV4cG9ydCBsZXQgcHJpbnRXaWRnZXQ6IFByaW50O1xuZXhwb3J0IGxldCBwcm9wZXJ0eVNlYXJjaDogUHJvcGVydHlTZWFyY2g7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0V2lkZ2V0KG5hbWU6IHN0cmluZywgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgaWYgKG5hbWUgPT09ICdTZWFyY2gnICYmICFwcm9wZXJ0eVNlYXJjaCkge1xuICAgIHByb3BlcnR5U2VhcmNoID0gbmV3IFByb3BlcnR5U2VhcmNoKHtcbiAgICAgIHZpZXc6IHZpZXcsXG4gICAgICBjb25kb3NUYWJsZTogY29uZG9zVGFibGUsXG4gICAgICBhZGRyZXNzVGFibGU6IGFkZHJlc3NUYWJsZSxcbiAgICAgIHByb3BlcnR5TGF5ZXI6IGZlYXR1cmVMYXllcixcbiAgICAgIGNvbnRhaW5lcjogJ3NpZGVEaXYnXG4gICAgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdMYXllcnMnICYmICFsYXllcnMpIHtcbiAgICBsYXllcnMgPSBuZXcgTGF5ZXJzKHsgdmlldywgY29udGFpbmVyOiAnbGF5ZXJEaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnTGVnZW5kJyAmJiAhbGVnZW5kKSB7XG4gICAgbGVnZW5kID0gbmV3IExlZ2VuZCh7IHZpZXcsIGNvbnRhaW5lcjogJ2xlZ2VuZERpdicgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdQcmludCcgJiYgIXByaW50V2lkZ2V0KSB7XG4gICAgcHJpbnRXaWRnZXQgPSBuZXcgUHJpbnQoe1xuICAgICAgdmlldyxcbiAgICAgIGNvbnRhaW5lcjogJ3ByaW50RGl2JyxcbiAgICAgIHByaW50U2VydmljZVVybDpcbiAgICAgICAgJ2h0dHBzOi8vdXRpbGl0eS5hcmNnaXNvbmxpbmUuY29tL2FyY2dpcy9yZXN0L3NlcnZpY2VzL1V0aWxpdGllcy9QcmludGluZ1Rvb2xzL0dQU2VydmVyL0V4cG9ydCUyMFdlYiUyME1hcCUyMFRhc2snXG4gICAgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdCb29rbWFya3MnICYmICFib29rbWFya3MpIHtcbiAgICBib29rbWFya3MgPSBuZXcgQm9va21hcmtzKHsgdmlldywgY29udGFpbmVyOiAnYm9va21hcmtEaXYnLCBlZGl0aW5nRW5hYmxlZDogdHJ1ZSB9KTtcbiAgfVxuXG4gIGlmIChuYW1lID09PSAnQmFzZW1hcHMnICYmICFiYXNlbWFwcykge1xuICAgIGJhc2VtYXBzID0gbmV3IEJhc2VNYXBzKHsgdmlldywgY29udGFpbmVyOiAnYmFzZW1hcERpdicgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdMb2NhdGlvbicgJiYgIWxvY2F0aW9uU2VhcmNoKSB7XG4gICAgbG9jYXRpb25TZWFyY2ggPSBuZXcgTG9jYXRpb25TZWFyY2goeyB2aWV3LCBjb250YWluZXI6ICdsb2NhdGlvbkRpdicgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdNZWFzdXJlJyAmJiAhbWVhc3VyZW1lbnQpIHtcbiAgICBtZWFzdXJlbWVudCA9IG5ldyBNZWFzdXJlKHsgdmlldywgY29udGFpbmVyOiAnbWVhc3VyZURpdicgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdEcmF3JyAmJiAhZHJhd1dpZGdldCkge1xuICAgIGRyYXdXaWRnZXQgPSBuZXcgRHJhdyh7IHZpZXcsIGNvbnRhaW5lcjogJ2RyYXdEaXYnIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaW5pdFdpZGdldHModmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgLy9jb25zdCBsYXllclNlbGVjdCA9IG5ldyBMYXllclNlbGVjdCh7IHZpZXc6IHZpZXcsIGNvbnRhaW5lcjogJ2xheWVyU2VsZWN0Q29udGVudCcgfSk7XG5cbiAgY29uc3QgY29vcmRpbmF0ZXM6IGVzcmkuQ29vcmRpbmF0ZUNvbnZlcnNpb24gPSBuZXcgQ29vcmRpbmF0ZUNvbnZlcnNpb24oeyB2aWV3IH0pO1xuICBjb25zdCBjb29yZGluYXRlc0V4cGFuZDogRXhwYW5kID0gbmV3IEV4cGFuZCh7XG4gICAgY29udGVudDogY29vcmRpbmF0ZXMsXG4gICAgbW9kZTogJ2Zsb2F0aW5nJyxcbiAgICBleHBhbmRJY29uQ2xhc3M6ICdlc3JpLWljb24tcGFuMidcbiAgfSk7XG4gIHZpZXcudWkuYWRkKGNvb3JkaW5hdGVzRXhwYW5kLCAnYm90dG9tLWxlZnQnKTtcblxuICB2aWV3LnVpLmFkZChuZXcgQ29tcGFzcyh7IHZpZXc6IHZpZXcgfSksICd0b3AtbGVmdCcpO1xuICBjb25zdCBsb2NhdGU6IExvY2F0ZSA9IG5ldyBMb2NhdGUoeyB2aWV3OiB2aWV3IH0pO1xuICBsb2NhdGUub24oJ2xvY2F0ZS1lcnJvcicsIChldmVudDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9KTtcbiAgdmlldy51aS5hZGQobG9jYXRlLCAndG9wLWxlZnQnKTtcblxuICBjb25zdCB0cmFjazogVHJhY2sgPSBuZXcgVHJhY2soeyB2aWV3OiB2aWV3IH0pO1xuICB0cmFjay5vbigndHJhY2stZXJyb3InLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfSk7XG4gIHZpZXcudWkuYWRkKHRyYWNrLCAndG9wLWxlZnQnKTtcbiAgdmlldy51aS5hZGQobmV3IEZ1bGxzY3JlZW4oeyB2aWV3IH0pLCAndG9wLWxlZnQnKTtcbiAgdmlldy51aS5hZGQobmV3IENsZWFyKHsgdmlldyB9KSwgJ3RvcC1sZWZ0Jyk7XG5cbiAgY29uc3Qgb3ZlcnZpZXdNYXAgPSBuZXcgT3ZlcnZpZXdNYXAoeyB2aWV3IH0pO1xuICBjb25zdCBvdmVydmlld0V4cGFuZDogRXhwYW5kID0gbmV3IEV4cGFuZCh7XG4gICAgY29udGVudDogb3ZlcnZpZXdNYXAsXG4gICAgbW9kZTogJ2Zsb2F0aW5nJyxcbiAgICBleHBhbmRJY29uQ2xhc3M6ICdlc3JpLWljb24tb3ZlcnZpZXctYXJyb3ctdG9wLWxlZnQnXG4gIH0pO1xuICBvdmVydmlld0V4cGFuZC53YXRjaCgnZXhwYW5kZWQnLCBleHBhbmRlZCA9PiB7XG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBvdmVydmlld01hcC52aWV3TW9kZWwub3ZlcnZpZXdNYXBWaWV3LmdvVG8oe1xuICAgICAgICBjZW50ZXI6IHZpZXcuY2VudGVyLFxuICAgICAgICBzY2FsZTpcbiAgICAgICAgICB2aWV3LnNjYWxlICpcbiAgICAgICAgICAyICpcbiAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgIHZpZXcud2lkdGggLyBvdmVydmlld01hcC52aWV3TW9kZWwub3ZlcnZpZXdNYXBWaWV3LndpZHRoLFxuICAgICAgICAgICAgdmlldy5oZWlnaHQgLyBvdmVydmlld01hcC52aWV3TW9kZWwub3ZlcnZpZXdNYXBWaWV3LmhlaWdodFxuICAgICAgICAgIClcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHZpZXcudWkuYWRkKG92ZXJ2aWV3RXhwYW5kLCAnYm90dG9tLXJpZ2h0Jyk7XG5cbiAgc2VsZWN0LmNvbnRhaW5lciA9ICdzZWxlY3REaXYnO1xuICBzZWxlY3QudmlldyA9IHZpZXc7XG4gIHNlbGVjdC5sYXllciA9IGZlYXR1cmVMYXllcjtcbiAgcmV0dXJuIHZpZXc7XG59XG4iLCJleHBvcnQgY29uc3QgaW5pdFBhbmVsSGVhZGVycyA9ICgpID0+IHtcbiAgLy9vdmVycmlkZSBDU1MgZm9yIGNhbGNpdGUgcGFuZWwgaGVhZGVyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwgZGl2JykuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgaWYgKHBhbmVsLnNsb3QgPT09ICdoZWFkZXItdHJhaWxpbmctY29udGVudCcpIHtcbiAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsnKTtcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cub25yZXNpemUgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGlmICgoZXZlbnQ/LnRhcmdldCBhcyBhbnkpPy5pbm5lcldpZHRoID49IDUwMCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmICghaXRlbS5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgaWYgKGl0ZW0ucXVlcnlTZWxlY3RvcignLm1heGltaXplJyk/LmdldEF0dHJpYnV0ZSgnaWNvbicpID09PSAnbWluaW1pemUnKSB7XG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiAzNTBweCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNDhweCknKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVBhbmVsRGlzbWlzc2VkQ2hhbmdlJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goKCkgPT4ge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiAwcHgnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgLy9oYW5kbGUgcGFuZWwgbWF4aW1pemUvbWluaW1pemVcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1heGltaXplJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaWNvbicpID09PSAnbWF4aW1pemUnKSB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpY29uJywgJ21pbmltaXplJyk7XG4gICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LmFkZCgnbWF4aW1pemVkJyk7IC8vLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA5NnB4KScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsLmxlZnQ6bm90KC5oaWRkZW4pJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkaXNtaXNzZWQnLCAnJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLWFjdGlvbltzaWRlPVwibGVmdFwiXVthY3RpdmVdJyk/LnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdpY29uJykgPT09ICdtaW5pbWl6ZScpIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAnbWF4aW1pemUnKTtcbiAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdtYXhpbWl6ZWQnKTtcbiAgICAgICAgLy9pdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOjM1MHB4Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRQYW5lbHMgPSAoYWN0aW9uczogYW55KSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGNvbnN0IGk6IEhUTUxFbGVtZW50ID0gaXRlbT8uc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGkpIHtcbiAgICAgIGkuaW5uZXJIVE1MICs9XG4gICAgICAgICc8c3R5bGU+LmNvbnRlbnQtY29udGFpbmVyIHsgaGVpZ2h0OiAxMDAlOyB9IC5jb250YWluZXI6Zm9jdXMsIC5jb250ZW50LWNvbnRhaW5lcjpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IH08L3N0eWxlPic7XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IGZhbHNlLCBzdWJ0cmVlOiBmYWxzZSB9O1xuICAgIGNvbnN0IGNhbGxiYWNrID0gKG11dGF0aW9uc0xpc3Q6IGFueVtdKSA9PiB7XG4gICAgICAvLyBVc2UgdHJhZGl0aW9uYWwgJ2ZvciBsb29wcycgZm9yIElFIDExXG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGlzbWlzc2VkJykge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uczogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1hY3Rpb24tYmFyIGNhbGNpdGUtYWN0aW9uJyk7XG5cbiAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFjdGlvbi50ZXh0ID09PSAobXV0YXRpb24udGFyZ2V0IGFzIGFueSkudGl0bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoKG11dGF0aW9uLnRhcmdldCBhcyBhbnkpLmhhc0F0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgICAgICAgICAgIGFjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb24uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1MDApIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgaWYgKChtdXRhdGlvbi50YXJnZXQgYXMgYW55KS5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygobXV0YXRpb24udGFyZ2V0IGFzIGFueSkudGl0bGUsICdkaXNtaXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3RGl2Jyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2JlbG93Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKChtdXRhdGlvbi50YXJnZXQgYXMgYW55KS50aXRsZSwgJ25vdCBkaXNtaXNzZWQnKTtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3RGl2Jyk/LmNsYXNzTGlzdC5hZGQoJ2JlbG93Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoaXRlbSwgY29uZmlnKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IHsgaW5pdFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkFjdGlvbkJhci5BY3Rpb25CYXJWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQmFyVmlld01vZGVsIGV4dGVuZHMgZGVjbGFyZWQoQWNjZXNzb3IpIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIHNpZGU6IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcmVhZHkgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgYWN0aW9uczogTm9kZUxpc3RPZjxFbGVtZW50PjtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3NpZGUnLCB0aGlzLnNpZGVTZXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICByZW9yZGVyUGFuZWxzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnZpZXcpIHtcbiAgICAgIC8vdGhpcy5hY3Rpb25zLmZvckVhY2goKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsLmxlZnQnKS5mb3JFYWNoKChwYW5lbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMDApIHtcbiAgICAgICAgICBwYW5lbC5wYXJlbnRFbGVtZW50Py5pbnNlcnRCZWZvcmUocGFuZWwsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3RGl2JykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhbmVsLnBhcmVudEVsZW1lbnQ/Lmluc2VydEJlZm9yZShwYW5lbCwgZG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3RGl2Jyk/Lm5leHRFbGVtZW50U2libGluZyBhcyBhbnkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vfSk7XG4gICAgfVxuICB9O1xuXG4gIGluaXRBY3Rpb25zID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1hY3Rpb24tYmFyIGNhbGNpdGUtYWN0aW9uJyk7XG4gICAgICB0aGlzLmFjdGlvbnM/LmZvckVhY2goKGFjdGlvbjogRWxlbWVudCkgPT4ge1xuICAgICAgICBhY3Rpb24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQWN0aW9uKGUudGFyZ2V0KTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGluaXRXaWRnZXQoZS50YXJnZXQudGV4dCwgdGhpcy52aWV3KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaCgoYTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoYS50ZXh0ICE9IGUudGFyZ2V0LnRleHQpIHtcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMDApIHtcbiAgICAgICAgICAgICAgICBpZiAoYS5nZXRBdHRyaWJ1dGUoJ3NpZGUnKSA9PT0gYWN0aW9uLmdldEF0dHJpYnV0ZSgnc2lkZScpKSB7XG4gICAgICAgICAgICAgICAgICBhLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGEucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFjdGlvbi5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA1MDApIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1hY3Rpb25bdGV4dD1cIlNlYXJjaFwiJyk/LnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICB0b2dnbGVBY3Rpb24gPSAoYWN0aW9uOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGFuZWwuJHthY3Rpb24uZ2V0QXR0cmlidXRlKCdzaWRlJykgYXMgc3RyaW5nfWApLmZvckVhY2goKHBhbmVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAocGFuZWwudGl0bGUgIT0gKGFjdGlvbiBhcyBhbnkpLnRleHQpIHtcbiAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYW5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgICAgIGlmICghcGFuZWwuaGFzQXR0cmlidXRlKCdkaXNtaXNzZWQnKSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNTAwKSB7XG4gICAgICAgICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDM1MHB4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAnTWVhc3VyZScpIHtcbiAgICAgICAgICAgICAgLy9tZWFzdXJlbWVudC5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy9tZWFzdXJlbWVudC5tZWFzdXJlT3BlbmVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsJykuZm9yRWFjaCgocGFuZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAoYWN0aW9uIGFzIGFueSkudGV4dCkge1xuICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHBhbmVsKTtcbiAgICAgICAgICBwYW5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHBhbmVsKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhwYW5lbC50aXRsZSk7XG4gICAgICAgICAgaWYgKCFwYW5lbC5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA1MDApIHtcbiAgICAgICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMzUwcHgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgaWYgKHBhbmVsLnRpdGxlICE9ICdNZWFzdXJlJykge1xuICAgICAgICAgICAgICAvL21lYXN1cmVtZW50Lm1lYXN1cmVtZW50LmNsZWFyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvL21lYXN1cmVtZW50Lm1lYXN1cmVPcGVuZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgZW5hYmxlQWN0aW9uYmFyID0gKCkgPT4ge1xuICAgIHRoaXMucmVvcmRlclBhbmVscygpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFjdGlvbi1iYXIgY2FsY2l0ZS1hY3Rpb24nKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgIH0pO1xuICAgIH0sIDEwMDApO1xuXG4gICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gIH07XG4gIHNpZGVTZXQoc2lkZTogc3RyaW5nKSB7XG4gICAgaWYgKHNpZGUgPT09ICdyaWdodCcpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b29sR3JvdXAnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICAgIGlmIChzaWRlID09PSAnbGVmdCcpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hHcm91cCcpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgdGhpcy5hY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1hY3Rpb24tYmFyIGNhbGNpdGUtYWN0aW9uJyk7XG4gICAgLy8gdGhpcy5hY3Rpb25zPy5mb3JFYWNoKChhY3Rpb246IEVsZW1lbnQpID0+IHtcbiAgICAvLyAgIGFjdGlvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XG4gICAgLy8gICAgIGRlYnVnZ2VyO1xuXG4gICAgLy8gICAgIHRoaXMudG9nZ2xlQWN0aW9uKGUudGFyZ2V0KTtcbiAgICAvLyAgICAgaW5pdFdpZGdldChlLnRhcmdldC50ZXh0LCB0aGlzLnZpZXcpO1xuICAgIC8vICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaCgoYTogYW55KSA9PiB7XG4gICAgLy8gICAgICAgaWYgKGEudGV4dCAhPSBlLnRhcmdldC50ZXh0KSB7XG4gICAgLy8gICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAwMCkge1xuICAgIC8vICAgICAgICAgICBpZiAoYS5nZXRBdHRyaWJ1dGUoJ3NpZGUnKSA9PT0gYWN0aW9uLmdldEF0dHJpYnV0ZSgnc2lkZScpKSB7XG4gICAgLy8gICAgICAgICAgICAgYS5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgIC8vICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgYWN0aW9uLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG4gIH1cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnNvbGUubG9nKHZpZXcuc2NhbGUpO1xuICAgIGluaXRXaWRnZXQoJ1NlYXJjaCcsIHRoaXMudmlldyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAwMCkge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0QWN0aW9uYmFyJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI2xlZnRBY3Rpb25iYXInKVxuICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCcjdG9vbEdyb3VwJylcbiAgICAgICAgICAgID8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYWN0aW9uQmFyJylcbiAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignI3Rvb2xHcm91cCcpXG4gICAgICAgICAgICA/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0QWN0aW9uYmFyJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI2FjdGlvbkJhcicpXG4gICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJyN0b29sR3JvdXAnKVxuICAgICAgICAgICAgPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWwubGVmdCcpLmZvckVhY2gocGFuZWwgPT4ge1xuICAgICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdkaXNtaXNzZWQnLCAnJyk7XG4gICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlb3JkZXJQYW5lbHMoKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBBY3Rpb25CYXJWaWV3TW9kZWwgZnJvbSAnLi9BY3Rpb25CYXIvQWN0aW9uQmFyVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25CYXJQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgc2lkZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBhY3Rpb25iYXItYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQWN0aW9uQmFyJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbkJhciBleHRlbmRzIGRlY2xhcmVkKFdpZGdldCkge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5zaWRlJylcbiAgc2lkZTogc3RyaW5nO1xuICBAcHJvcGVydHkoKVxuICBAYWxpYXNPZigndmlld01vZGVsLnJlYWR5JylcbiAgcmVhZHk6IGJvb2xlYW47XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYWN0aW9ucycpXG4gIGFjdGlvbnM6IE5vZGVMaXN0T2Y8RWxlbWVudD47XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudG9nZ2xlQWN0aW9uJylcbiAgdG9nZ2xlQWN0aW9uOiBGdW5jdGlvbjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5lbmFibGVBY3Rpb25iYXInKVxuICBlbmFibGVBY3Rpb25iYXI6IEZ1bmN0aW9uO1xuICBAYWxpYXNPZigndmlld01vZGVsLmluaXRBY3Rpb25zJylcbiAgaW5pdEFjdGlvbnM6IEZ1bmN0aW9uO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IEFjdGlvbkJhclZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogQWN0aW9uQmFyVmlld01vZGVsID0gbmV3IEFjdGlvbkJhclZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBBY3Rpb25CYXJQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgc2VhcmNoR3JvdXBDcmVhdGVkID0gKGl0ZW06IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuc2lkZSA9PT0gJ2xlZnQnKSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5pdEFjdGlvbnMoKTtcbiAgICB9XG4gIH07XG4gIHRvb2xHcm91cENyZWF0ZWQgPSAoaXRlbTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAodGhpcy5zaWRlID09PSAncmlnaHQnKSB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAwMCkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnRBY3Rpb25iYXInKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5hY3Rpb25zLmxlbmd0aCkge1xuICAgICAgdGhpcy5pbml0QWN0aW9ucygpO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxjYWxjaXRlLWFjdGlvbi1iYXIgZXhwYW5kPVwiZmFsc2VcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24tZ3JvdXAgaWQ9XCJzZWFyY2hHcm91cFwiIGFmdGVyQ3JlYXRlPXt0aGlzLnNlYXJjaEdyb3VwQ3JlYXRlZH0+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIlNlYXJjaFwiIGljb249XCJzZWFyY2hcIiBzaWRlPVwicmlnaHRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJMb2NhdGlvblwiIGljb249XCJwaW5cIiBzaWRlPVwicmlnaHRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJMYXllcnNcIiBpY29uPVwibGF5ZXJzXCIgc2lkZT1cInJpZ2h0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiTGVnZW5kXCIgaWNvbj1cImxlZ2VuZFwiIHNpZGU9XCJyaWdodFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIkJhc2VtYXBzXCIgaWNvbj1cImJhc2VtYXBcIiBzaWRlPVwicmlnaHRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgIDwvY2FsY2l0ZS1hY3Rpb24tZ3JvdXA+XG5cbiAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24tZ3JvdXAgaWQ9XCJ0b29sR3JvdXBcIiBhZnRlckNyZWF0ZT17dGhpcy50b29sR3JvdXBDcmVhdGVkfT5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiU2VsZWN0XCIgaWNvbj1cInNlbGVjdGlvblwiIHNpZGU9XCJsZWZ0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiTWVhc3VyZVwiIGljb249XCJtZWFzdXJlXCIgc2lkZT1cImxlZnRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJEcmF3XCIgaWNvbj1cInBlbmNpbC1tYXJrXCIgc2lkZT1cImxlZnRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJCb29rbWFya3NcIiBpY29uPVwiYm9va21hcmtcIiBzaWRlPVwibGVmdFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIlByaW50XCIgaWNvbj1cInByaW50XCIgc2lkZT1cImxlZnRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgIDwvY2FsY2l0ZS1hY3Rpb24tZ3JvdXA+XG4gICAgICAgIDwvY2FsY2l0ZS1hY3Rpb24tYmFyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuL2Nzcy9tYWluLmNzcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL2RhdGEvYXBwJztcbmltcG9ydCB7IGluaXRUaXBzIH0gZnJvbSAnLi90aXBzJztcbmltcG9ydCB7IHNob3dBbGVydCB9IGZyb20gJy4vYWxlcnQnO1xuLy9pbXBvcnQgeyB0b2dnbGVBY3Rpb24sIGVuYWJsZUFjdGlvbmJhciB9IGZyb20gJy4vYWN0aW9uYmFyJztcbmltcG9ydCBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldyc7XG5cbmltcG9ydCBXZWJNYXAgZnJvbSAnZXNyaS9XZWJNYXAnO1xuLy8gd2lkZ2V0IHV0aWxzXG5pbXBvcnQgeyBpbml0V2lkZ2V0cywgc2VsZWN0LCBwcm9wZXJ0eVNlYXJjaCwgbGF5ZXJzIH0gZnJvbSAnLi93aWRnZXRzJztcbmltcG9ydCB7IGluaXRQYW5lbHMsIGluaXRQYW5lbEhlYWRlcnMgfSBmcm9tICcuL3BhbmVscyc7XG5pbXBvcnQgeyBpbml0TWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQWN0aW9uQmFyIGZyb20gJy4vd2lkZ2V0cy9BY3Rpb25CYXInO1xuaW1wb3J0IHdhdGNoVXRpbHMgZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuY29uc3QgYWN0aW9uQmFyID0gbmV3IEFjdGlvbkJhcih7IHNpZGU6ICdyaWdodCcsIGNvbnRhaW5lcjogJ2FjdGlvbkJhcicgfSk7XG5cbmNvbnN0IGxlZnRBY3Rpb25CYXIgPSBuZXcgQWN0aW9uQmFyKHsgc2lkZTogJ2xlZnQnLCBjb250YWluZXI6ICdsZWZ0QWN0aW9uYmFyJyB9KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBsZXQgdmlldzogTWFwVmlldztcblxuZnVuY3Rpb24gY2hlY2tMb2NhbFN0b3JhZ2UodmlldzogTWFwVmlldykge1xuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpKSB7XG4gICAgY29uc3Qgd2VibWFwOiBXZWJNYXAgPSBXZWJNYXAuZnJvbUpTT04oSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzJykgYXMgc3RyaW5nKSk7XG4gICAgd2VibWFwLmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgIHZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgY29uc3QgbHlyID0gd2VibWFwLmFsbExheWVycy5maW5kKGwgPT4ge1xuICAgICAgICAgIHJldHVybiBsYXllci5pZCA9PT0gbC5pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGxheWVyLnZpc2libGUgPSBseXI/LnZpc2libGU7XG4gICAgICAgIGxheWVyLm9wYWNpdHkgPSBseXI/Lm9wYWNpdHk7XG4gICAgICB9KTtcbiAgICAgIHZpZXcubWFwLmJhc2VtYXAgPSB3ZWJtYXAuYmFzZW1hcDtcbiAgICAgIHZpZXcuZXh0ZW50ID0gd2VibWFwLmluaXRpYWxWaWV3UHJvcGVydGllcy52aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkuZXh0ZW50O1xuICAgIH0pO1xuICB9XG59XG4vL2hhbmRsZSB3aGVuIHZpZXcgaXMgcmVhZHlcblxuLy9zYXZlIHdlYiBtYXAgdG8gbG9jYWwgc3RvcmFnZSBvbiBwYWdlaGlkZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xuICB2aWV3Lm1hcC5yZW1vdmVNYW55KFxuICAgIHZpZXcubWFwLmFsbExheWVyc1xuICAgICAgLmZpbHRlcihsYXllciA9PiB7XG4gICAgICAgIHJldHVybiBsYXllci50eXBlID09PSAnZ3JvdXAnICYmICEobGF5ZXIgYXMgX19lc3JpLkdyb3VwTGF5ZXIpLmxheWVycy5sZW5ndGg7XG4gICAgICB9KVxuICAgICAgLnRvQXJyYXkoKVxuICApO1xuICBjb25zdCBqc29uID0gKHZpZXcubWFwIGFzIGFueSkudG9KU09OKCk7XG4gIGpzb24uaW5pdGlhbFN0YXRlLnZpZXdwb2ludC50YXJnZXRHZW9tZXRyeSA9IHZpZXcuZXh0ZW50O1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ltYXBzJywgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xufSk7XG5cbi8vc2hvdyBmaXJzdCBwYW5lbCBvbiBkZXZpY2VzIHdpZGVyIHRoYW4gNTAwcHggYnkgZGVmYXVsdFxuaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDUwMCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLXBhbmVsLnJpZ2h0Jyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLXBhbmVsLnJpZ2h0Jyk/LnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG59XG5cbi8vbW9kaWZ5IERPTSBhZnRlciBtYXAgdmlldyBsb2Fkc1xuLy92aWV3LndoZW4oKCkgPT4ge1xuLy9hY3Rpb25CYXIuaW5pdEFjdGlvbnMoKTtcblxuaW5pdFBhbmVscyhhY3Rpb25CYXIuYWN0aW9ucyk7XG4vL2FjdGlvbkJhci52aWV3ID0gdmlldztcbi8vfSk7XG5cbndhdGNoVXRpbHMud2F0Y2goYWN0aW9uQmFyLCAnYWN0aW9ucycsIGFjdGlvbnMgPT4ge1xuICBpZiAoYWN0aW9ucy5sZW5ndGggJiYgIXZpZXcpIHtcbiAgICBhY3Rpb25CYXIuZW5hYmxlQWN0aW9uYmFyKCk7XG5cbiAgICB2aWV3ID0gbmV3IE1hcFZpZXcoe1xuICAgICAgY29udGFpbmVyOiAndmlld0RpdicsXG4gICAgICBtYXBcbiAgICB9KTtcbiAgICB2aWV3LndoZW4oKCkgPT4ge1xuICAgICAgYWN0aW9uQmFyLnZpZXcgPSB2aWV3O1xuICAgICAgbGVmdEFjdGlvbkJhci52aWV3ID0gdmlldztcbiAgICAgIGNoZWNrTG9jYWxTdG9yYWdlKHZpZXcpO1xuICAgICAgdmlldy5tYXAud2F0Y2goJ2xheWVycycsICgpID0+IHtcbiAgICAgICAgdmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgIGlmIChsYXllci50eXBlICE9ICdncm91cCcpIHtcbiAgICAgICAgICAgIGxheWVyLndhdGNoKCd2aXNpYmxlJywgdmlzaWJsZSA9PiB7XG4gICAgICAgICAgICAgIGxheWVycz8ubGF5ZXJMaXN0Py5vcGVyYXRpb25hbEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBpdGVtLmNoaWxkcmVuLmZpbmQoaSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpLmxheWVyID09PSBsYXllcjtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhbmVsLm9wZW4gPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGF5ZXIud2F0Y2goJ3Zpc2libGUnLCB2aXNpYmxlID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBsYXllcnM/LmxheWVyTGlzdC5vcGVyYXRpb25hbEl0ZW1zLmZpbmQoaSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkubGF5ZXIgPT09IGxheWVyO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAub3BlbiA9IHZpc2libGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcHJvcGVydHlMYXllciA9IG1hcC5hbGxMYXllcnMuZmluZChsYXllciA9PiB7XG4gICAgICAgIHJldHVybiBsYXllci50aXRsZSA9PT0gJ1Byb3BlcnR5JyAmJiBsYXllci50eXBlID09PSAnZmVhdHVyZSc7XG4gICAgICB9KTtcbiAgICAgIHZpZXcub24oJ2hvbGQnLCBlID0+IHtcbiAgICAgICAgcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBlLm1hcFBvaW50O1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvL3RvZ2dsZUFjdGlvbignU2VhcmNoJyk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSk7XG4gICAgICB2aWV3XG4gICAgICAgIC53aGVuTGF5ZXJWaWV3KHByb3BlcnR5TGF5ZXIpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwTG9hZGVyJyk/LnRvZ2dsZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgcHJvcGVydHlTZWFyY2gucHJvcGVydHlMYXllciA9IHByb3BlcnR5TGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgICAgICAgICAvL3NlYXJjaCBieSBnZW9tZXRyeSBhZnRlciBza2V0Y2ggY3JlYXRpb24gaW4gc2VsZWN0IHdpZGdldFxuICAgICAgICAgIHNlbGVjdC52aWV3TW9kZWwud2F0Y2goJ2dlb21ldHJ5JywgZ2VvbWV0cnkgPT4ge1xuICAgICAgICAgICAgcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICAgICAgICAgIGFjdGlvbkJhci5hY3Rpb25zLmZvckVhY2goKGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhY3Rpb24udGV4dCA9PT0gJ1NlYXJjaCcpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25CYXIudG9nZ2xlQWN0aW9uKGFjdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbjogYW55KSA9PiB7XG4gICAgICAgICAgLy9vbiBlcnJvciBsb2FkaW5nIHByb3BlcnR5IGxheWVyLCBkaXNwbGF5IGFsZXJ0XG4gICAgICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcbiAgICAgICAgICBzaG93QWxlcnQoJ1Byb3BlcnR5IGxheWVyIGRpZCBub3QgbG9hZC4gUGxlYXNlIGNvbnRhY3QgaU1BUFMgSGVscCBEZXNrLicsICdyZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmlldy53aGVuKGluaXRXaWRnZXRzKTtcbiAgICB2aWV3LndoZW4oaW5pdFRpcHMpO1xuICB9XG59KTtcblxuaW5pdFBhbmVsSGVhZGVycygpO1xuaW5pdE1lbnUoKTtcbiJdLCJuYW1lcyI6WyJ3aGVuRGVmaW5lZE9uY2UiLCJ3aGVuRGVmaW5lZCIsInByb3BlcnR5Iiwic3ViY2xhc3MiLCJ0c3giLCJhbGlhc09mIiwicmVuZGVyYWJsZSIsIkNTUyIsInZpZXciLCJ3YXRjaFV0aWxzIiwiZGVjbGFyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFDTyxJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0VBQzlCLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxrQ0FBa0MsRUFBRSxFQUFFLENBQUMsQ0FBQzs7O0VDRnRFLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQztFQUMzQixJQUFNLFFBQVEsR0FBRyxVQUFDLEtBQWE7O01BQzdCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1VBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ25DLENBQUMsQ0FBQztNQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1VBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ25DLENBQUMsQ0FBQztNQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7VUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7T0FDbkMsQ0FBQyxDQUFDO01BQ0gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFD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
