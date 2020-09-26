
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FwcC50cyIsIi4uLy4uL3NyYy9tZW51LnRzIiwiLi4vLi4vc3JjL3RpcHMudHMiLCIuLi8uLi9zcmMvYWxlcnQudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaC9Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL1Byb3BlcnR5U2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUvTWVhc3VyZVZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUudHN4IiwiLi4vLi4vc3JjL2RhdGEvc2VhcmNoLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy9EcmF3Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9TZWxlY3QvU2VsZWN0Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvU2VsZWN0LnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL0Jhc2VNYXBzL0Jhc2VNYXBzVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQmFzZU1hcHMudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvTGF5ZXJzL0xheWVyc1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xheWVycy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaC9Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xvY2F0aW9uU2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL092ZXJ2aWV3TWFwL092ZXJ2aWV3TWFwVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvT3ZlcnZpZXdNYXAudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvQ2xlYXIvQ2xlYXJWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9DbGVhci50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy50cyIsIi4uLy4uL3NyYy9wYW5lbHMudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9BY3Rpb25CYXIvQWN0aW9uQmFyVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQWN0aW9uQmFyLnRzeCIsIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViTWFwIGZyb20gJ2VzcmkvV2ViTWFwJztcbmV4cG9ydCBsZXQgbWFwID0gbmV3IFdlYk1hcCgpO1xubWFwID0gbmV3IFdlYk1hcCh7IHBvcnRhbEl0ZW06IHsgaWQ6ICc5NTA5MjQyODc3NGM0YjFmYjZhM2I2ZjVmZWQ5ZmJjNCcgfSB9KTtcbi8vIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzJykpIHtcbi8vICAgbWFwID0gV2ViTWFwLmZyb21KU09OKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpIGFzIHN0cmluZykpO1xuLy8gfVxuIiwiZXhwb3J0IGxldCB0aGVtZSA9ICdsaWdodCc7XG5jb25zdCBzZXRUaGVtZSA9ICh0aGVtZTogc3RyaW5nKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtY29sb3InKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtdGlwLW1hbmFnZXInKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtZHJvcGRvd24nKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWxlcnQnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtbW9kYWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYmxvY2snKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGljay1saXN0JykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFjdGlvbi1iYXInKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgdGhlbWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyb3dQYXRoJyk/LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhlbWUgPT09ICdsaWdodCcgPyAnYmxhY2snIDogJ3doaXRlJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGluaycpLmZvckVhY2gobGluayA9PiB7XG4gICAgaWYgKGxpbmsuaHJlZi5pbmNsdWRlcyh0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpKSB7XG4gICAgICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMTYvZXNyaS90aGVtZXMvJyArIHRoZW1lICsgJy9tYWluLmNzcyc7XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgY29uc3QgaW5pdE1lbnUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtZHJvcGRvd24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZURyb3Bkb3duU2VsZWN0JywgKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBlLmN1cnJlbnRUYXJnZXQuc2VsZWN0ZWRJdGVtc1swXT8uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIHRoZW1lID0gdmFsdWU7XG4gICAgc2V0VGhlbWUodGhlbWUpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSB7XG4gICAgY29uc3QgdGhlbWVOYW1lOiBzdHJpbmcgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgYXMgc3RyaW5nO1xuICAgIHNldFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgICAgaWYgKChlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmcpICE9IHRoZW1lTmFtZSkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgc3RyaW5nO1xuICAgICAgICB0aGVtZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKChlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmcpID09PSB0aGVtZU5hbWUpIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSB7XG4gICAgc2V0VGhlbWUoJ2RhcmsnKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi9tZW51JztcblxuY29uc3QgdGlwR3JvdXBzID0gW1xuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdzZWxlY3RUaXAnLFxuICAgICAgdGl0bGU6ICdTZWxlY3Rpb24nLFxuICAgICAgdGlwczogW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIGRyYXcgYSBjb250aW51b3VzIGxpbmUgb3IgcG9seWdvbiwgbG9uZyBwcmVzcyBhbmQgZHJhZyB5b3VyIGN1cnNvcicsXG4gICAgICAgICAgdGl0bGU6ICdGcmVlaGFuZCBEcmF3aW5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIGRyYXcgYSBjb250aW51b3VzIGxpbmUgb3IgcG9seWdvbiwgbG9uZyBwcmVzcyBhbmQgZHJhZyB5b3VyIGN1cnNvcicsXG4gICAgICAgICAgdGl0bGU6ICdGcmVlaGFuZCBEcmF3aW5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdwcm9wZXJ0eVNlYXJjaFRpcCcsXG4gICAgICB0aXRsZTogJ1Byb3BlcnR5IFNlYXJjaCcsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ1RvIHNlYXJjaCBieSBhIHBvcnRpb24gb2YgYW4gb3duZXIgbmFtZSBvciBhZGRyZXNzLCBoaXQgZW50ZXIgd2l0aG91dCBzZWxlY3RpbmcgZm9ybSB0aGUgbGlzdCBvZiBzdWdnZXN0aW9ucy4nLFxuICAgICAgICAgIHRpdGxlOiAnV2lsZGNhcmQgU2VhcmNoJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIHF1aWNrbHkgc2VsZWN0IGEgcHJvcGVydHkgZnJvbSB0aGUgbWFwLCBsb25nIHByZXNzIG9uIGEgcHJvcGVydHkgb24gdGhlIG1hcC4nLFxuICAgICAgICAgIHRpdGxlOiAnTG9uZyBQcmVzcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUbyBzZWxlY3QgYnkgYSBsb2NhdGlvbiB1c2UgdGhlIHByb3BlcnR5IHNlbGVjdGlvbiB0b29sLicsXG4gICAgICAgICAgdGl0bGU6ICdTZWxlY3QgQnkgTG9jYXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnUHJldmlvdXMgXCJ0YWJcIiBsYXlvdXQgaGFzIGJlZW4gY29uc29saWRhdGVkIGludG8gYSBzaW5nbGUgc2Nyb2xsYWJsZSBwYW5lbC4nLFxuICAgICAgICAgIHRpdGxlOiAnU2luZ2xlIERldGFpbHMgUGFuZWwnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwYW5lbDoge1xuICAgICAgbmFtZTogJ2Jhc2VtYXBUaXAnLFxuICAgICAgdGl0bGU6ICdCYXNlbWFwcycsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ1RoZSBpbWFnZXJ5IGFuZCBpbWFnZXJ5IGh5YnJpZCBiYXNlIG1hcHMgbGlzdGVkIHVuZGVyIHRoZSBtYXBzIHRhYiBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBsYXRlc3QgaW1hZ2VyeSBmcm9tIFJhbGVpZ2ggKDIwMTkpIGFuZCBmcm9tIHRoZSBTdGF0ZSBvZiBOb3J0aCBDYXJvbGluYSAoMjAxNykuJyxcbiAgICAgICAgICB0aXRsZTogJ0ltYWdlcnkgQmFzZW1hcHMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbl07XG5leHBvcnQgZnVuY3Rpb24gaW5pdFRpcHMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXAnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLXRpcC1tYW5hZ2VyJyk/LnJlbW92ZSgpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGNvbnN0IG1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcC1tYW5hZ2VyJyk7XG4gICAgICBtYW5hZ2VyLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gICAgICBjb25zdCB0aXBHcm91cCA9IHRpcEdyb3Vwcy5maW5kKGdyb3VwID0+IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnBhbmVsLm5hbWUgPT09IGl0ZW0uaWQ7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcC1ncm91cCcpO1xuICAgICAgZ3JvdXAuc2V0QXR0cmlidXRlKCd0ZXh0LWdyb3VwLXRpdGxlJywgKHRpcEdyb3VwIGFzIGFueSk/LnBhbmVsLnRpdGxlKTtcbiAgICAgIG1hbmFnZXIuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgICAgdGlwR3JvdXA/LnBhbmVsLnRpcHMuZm9yRWFjaCh0aXAgPT4ge1xuICAgICAgICBjb25zdCBjYWxjaXRlVGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAnKTtcbiAgICAgICAgY2FsY2l0ZVRpcC5zZXRBdHRyaWJ1dGUoJ2hlYWRpbmcnLCB0aXAudGl0bGUpO1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLmlubmVySFRNTCA9IHRpcC5tZXNzYWdlO1xuICAgICAgICBjYWxjaXRlVGlwLmFwcGVuZENoaWxkKHApO1xuICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjYWxjaXRlVGlwKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQ/LmJvZHk/LmFwcGVuZENoaWxkKG1hbmFnZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzaG93QWxlcnQodGV4dDogc3RyaW5nLCBjb2xvcjogc3RyaW5nKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtYWxlcnQnKT8ucmVtb3ZlKCk7XG4gIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1hbGVydCcpO1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdzbG90JywgJ2FsZXJ0LW1lc3NhZ2UnKTtcbiAgbWVzc2FnZS5pbm5lckhUTUwgPSB0ZXh0O1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgY29sb3IpO1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdpY29uJywgJycpO1xuXG4gIGFsZXJ0LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFsZXJ0KTtcbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoJztcbmltcG9ydCBGZWF0dXJlVGFibGUgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZSc7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XG5pbXBvcnQgTGF5ZXJTZWFyY2hTb3VyY2UgZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaC9MYXllclNlYXJjaFNvdXJjZSc7XG5pbXBvcnQgRmllbGRDb2x1bW5Db25maWcgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZS9GaWVsZENvbHVtbkNvbmZpZyc7XG5pbXBvcnQgTWVudUJ1dHRvbkl0ZW0gZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZS9HcmlkL3N1cHBvcnQvQnV0dG9uTWVudUl0ZW0nO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlLCB3aGVuRGVmaW5lZCB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBTZWFyY2hTb3VyY2UgZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaC9TZWFyY2hTb3VyY2UnO1xuaW1wb3J0IEZlYXR1cmVTZXQgZnJvbSAnZXNyaS90YXNrcy9zdXBwb3J0L0ZlYXR1cmVTZXQnO1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Qcm9wZXJ0eVNlYXJjaC5Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQHByb3BlcnR5KCkgYWRkcmVzc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQHByb3BlcnR5KCkgcHJvcGVydHlMYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG5cbiAgQHByb3BlcnR5KCkgc2VhcmNoV2lkZ2V0OiBlc3JpLndpZGdldHNTZWFyY2g7XG4gIEBwcm9wZXJ0eSgpIGZlYXR1cmVUYWJsZTogZXNyaS5GZWF0dXJlVGFibGU7XG4gIEBwcm9wZXJ0eSgpIGZlYXR1cmU6IGVzcmkuRmVhdHVyZTtcbiAgQHByb3BlcnR5KCkgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG5cbiAgY2x1c3RlclBvaW50czogRmVhdHVyZUxheWVyO1xuXG4gIGdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBpZDogJ3Byb3BlcnR5LXNlbGVjdCcsIGxpc3RNb2RlOiAnaGlkZScsIG1pblNjYWxlOiAxOTIwMCB9KTtcbiAgc2luZ2xlU3ltYm9sID0ge1xuICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgc3R5bGU6ICdub25lJyxcbiAgICBvdXRsaW5lOiB7IHdpZHRoOiAyLjUsIGNvbG9yOiBbMjU1LCA4MiwgODIsIDFdIH0sXG4gICAgY29sb3I6IFsyNTMsIDQ2LCA2NSwgMC4yNV1cbiAgfTtcbiAgbXVsdGlTeW1ib2wgPSB7XG4gICAgdHlwZTogJ3NpbXBsZS1maWxsJyxcbiAgICBzdHlsZTogJ25vbmUnLFxuICAgIG91dGxpbmU6IHsgd2lkdGg6IDIuNSwgY29sb3I6IFsyNDksIDI0MywgMCwgMV0gfSxcbiAgICBjb2xvcjogWzI1MywgNDYsIDY1LCAwLjI1XVxuICB9O1xuICBzZWxlY3RlZFByb3BlcnR5OiBlc3JpLkdyYXBoaWM7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAnY29uZG9zVGFibGUnLCB0aGlzLmluaXRTZWFyY2guYmluZCh0aGlzKSk7XG4gICAgd2hlbkRlZmluZWQodGhpcywgJ2dlb21ldHJ5JywgdGhpcy5zZWFyY2hCeUdlb21ldHJ5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc2VhcmNoQnlHZW9tZXRyeShnZW9tZXRyeTogZXNyaS5HZW9tZXRyeSkge1xuICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgLnF1ZXJ5RmVhdHVyZXMoeyBnZW9tZXRyeTogZ2VvbWV0cnksIHJldHVybkdlb21ldHJ5OiB0cnVlLCBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnLCAnUkVJRCddIH0pXG4gICAgICAudGhlbihwcm9wZXJ0eVJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMucHJvcGVydHlMYXllci5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0NPTkRPUyc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUxheWVyXG4gICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBsZXQgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQocmVzdWx0W2tleV0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBmZWF0dXJlc1swXS5nZW9tZXRyeSA9IHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzWzBdLmdlb21ldHJ5O1xuXG4gICAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZShmZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIFtmZWF0dXJlc1swXS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJyldKTtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVTZXQ6IEZlYXR1cmVTZXQgPSBuZXcgRmVhdHVyZVNldCh7IGZlYXR1cmVzOiBbXSB9KTtcbiAgICAgICAgICAgIHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICBmZWF0dXJlLnN5bWJvbCA9XG4gICAgICAgICAgICAgICAgcHJvcGVydHlSZXN1bHQuZmVhdHVyZXMubGVuZ3RoID4gMSA/ICh0aGlzLm11bHRpU3ltYm9sIGFzIGFueSkgOiAodGhpcy5zaW5nbGVTeW1ib2wgYXMgYW55KTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlSZXN1bHQuZmVhdHVyZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5nZW9tZXRyeSA9IHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzWzBdLmdlb21ldHJ5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgZmVhdHVyZXMpO1xuICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmFkZChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgZmVhdHVyZVNldC5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZENsdXN0ZXJHcmFwaGljcyhmZWF0dXJlU2V0KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIgPSAoZmllbGRzOiBlc3JpLkZpZWxkW10sIGZlYXR1cmVzOiBlc3JpLkdyYXBoaWNbXSkgPT4ge1xuICAgIHJldHVybiBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgc291cmNlOiBmZWF0dXJlcyxcbiAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnLFxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogdGhpcy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgICB9KTtcbiAgfTtcbiAgYWRkQ2x1c3RlckdyYXBoaWNzID0gKHJlc3VsdDogZXNyaS5GZWF0dXJlU2V0KSA9PiB7XG4gICAgY29uc3QgcG9pbnRzOiBHcmFwaGljW10gPSBbXTtcbiAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgIGNvbnN0IHB0ID0gZmVhdHVyZS5jbG9uZSgpO1xuICAgICAgcHQuZ2VvbWV0cnkgPSAocHQuZ2VvbWV0cnkgYXMgZXNyaS5Qb2x5Z29uKS5jZW50cm9pZDtcbiAgICAgIHBvaW50cy5wdXNoKHB0KTtcbiAgICB9KTtcbiAgICB0aGlzLmNsdXN0ZXJQb2ludHMucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiAnMT0xJywgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLCBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLmNsdXN0ZXJQb2ludHMuYXBwbHlFZGl0cyh7IGRlbGV0ZUZlYXR1cmVzOiByZXN1bHQuZmVhdHVyZXMgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY2x1c3RlclBvaW50cy5hcHBseUVkaXRzKHsgYWRkRmVhdHVyZXM6IHBvaW50cyB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsdXN0ZXJQb2ludHMucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBhZGRHcmFwaGljcyA9IChyZXN1bHQ6IGVzcmkuRmVhdHVyZVNldCkgPT4ge1xuICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG4gICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICBmZWF0dXJlLnN5bWJvbCA9IHJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxID8gKHRoaXMubXVsdGlTeW1ib2wgYXMgYW55KSA6ICh0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnkpO1xuICAgICAgdGhpcy5ncmFwaGljcy5hZGQoZmVhdHVyZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENsdXN0ZXJHcmFwaGljcyhyZXN1bHQpO1xuICB9O1xuXG4gIGdldFByb3BlcnR5ID0gKG9pZHM6IGFueVtdLCBzb3VyY2U/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmNvbmRvc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgIHJldHVybiByLm5hbWUgPT09ICdQUk9QRVJUWSc7XG4gICAgfSk7XG4gICAgdGhpcy5jb25kb3NUYWJsZVxuICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHtcbiAgICAgICAgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsXG4gICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZSxcbiAgICAgICAgICAgIG91dFNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5mZWF0dXJlPy5ncmFwaGljKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljLmdlb21ldHJ5ID0gcmVzdWx0Py5mZWF0dXJlc1swXS5nZW9tZXRyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmlldy5nb1RvKHJlc3VsdC5mZWF0dXJlcyk7XG5cbiAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkR3JhcGhpY3MocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHNlYXJjaENvbXBsZXRlID0gKGV2ZW50OiBlc3JpLlNlYXJjaFNlYXJjaENvbXBsZXRlRXZlbnQpID0+IHtcbiAgICBpZiAoIXRoaXMuc2VhcmNoV2lkZ2V0LnZpZXdNb2RlbC5zZWxlY3RlZFN1Z2dlc3Rpb24pIHtcbiAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG5cbiAgICAgIGxldCB3aGVyZSA9ICcnO1xuXG4gICAgICBpZiAoIXRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSkge1xuICAgICAgICB3aGVyZSA9IGBPV05FUiBsaWtlICdfJHtldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCl9JScgT1IgUkVJRCBsaWtlICcke2V2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKX0lJyBPUiBQSU5fTlVNIGxpa2UgJyR7ZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUnYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgodGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIGFzIGFueSk/LnNlYXJjaEZpZWxkcy5pbmNsdWRlcygnT1dORVInKSkge1xuICAgICAgICAgIHdoZXJlID0gYE9XTkVSIGxpa2UgJ18lJHtldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCl9JSdgO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIGFzIGFueSk/LnNlYXJjaEZpZWxkcy5pbmNsdWRlcygnUElOX05VTScpKSB7XG4gICAgICAgICAgd2hlcmUgPSBgUElOX05VTSBsaWtlICclJHtldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCl9JSdgO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIGFzIGFueSk/LnNlYXJjaEZpZWxkcy5pbmNsdWRlcygnUkVJRCcpKSB7XG4gICAgICAgICAgd2hlcmUgPSBcIlJFSUQgbGlrZSAnJVwiICsgZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpICsgXCIlJ1wiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCB0YWJsZUZlYXR1cmVzOiBhbnlbXSA9IFtdO1xuXG4gICAgICB0aGlzLmNvbmRvc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogd2hlcmUsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0YWJsZUZlYXR1cmVzID0gcmVzdWx0LmZlYXR1cmVzO1xuICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goZi5nZXRPYmplY3RJZCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICF0aGlzLnNlYXJjaFdpZGdldC5hY3RpdmVTb3VyY2UgfHxcbiAgICAgICAgICAodGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIGFzIGFueSk/LnNlYXJjaEZpZWxkcy5pbmNsdWRlcygnQUREUkVTUycpXG4gICAgICAgICkge1xuICAgICAgICAgIHdoZXJlID0gYEFERFJFU1MgbGlrZSAnJSR7ZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUnYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aGVyZSA9ICdBRERSRVNTIElTIE5VTEwnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRyZXNzVGFibGUucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiB3aGVyZSwgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwID0gdGhpcy5hZGRyZXNzVGFibGUucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0FERFJFU1NFUyc7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgYWRkck9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICBhZGRyT2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcCAmJiBhZGRyT2lkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXAuaWQsIG9iamVjdElkczogYWRkck9pZHMsIG91dEZpZWxkczogWycqJ10gfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCB0YWJsZUZlYXR1cmVzKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvcGVydHkob2lkcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRhYmxlRmVhdHVyZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBuZXcgR3JhcGhpYygpO1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5yZW5kZXJOb3coKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJvcGVydHkob2lkcyk7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IHRoaXMuY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIodGhpcy5jb25kb3NUYWJsZS5maWVsZHMsIHRhYmxlRmVhdHVyZXMpO1xuICAgICAgICAgICAgaWYgKHRhYmxlRmVhdHVyZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYyA9IG5ldyBHcmFwaGljKCk7XG4gICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgndGFibGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLnJlbmRlck5vdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGV2ZW50Lm51bVJlc3VsdHMpIHtcbiAgICAgICAgbGV0IGxheWVyID0gKGV2ZW50LnJlc3VsdHNbMF0uc291cmNlIGFzIExheWVyU2VhcmNoU291cmNlKS5sYXllciBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgICAgIGlmICghbGF5ZXIgJiYgZXZlbnQucmVzdWx0c1swXS5zb3VyY2UubmFtZSA9PT0gJ093bmVyJykge1xuICAgICAgICAgIGxheWVyID0gdGhpcy5jb25kb3NUYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxheWVyICYmIFsnU2l0ZSBBZGRyZXNzJywgJ1N0cmVldCBOYW1lJ10uaW5jbHVkZXMoZXZlbnQucmVzdWx0c1swXS5zb3VyY2UubmFtZSkpIHtcbiAgICAgICAgICBsYXllciA9IHRoaXMuYWRkcmVzc1RhYmxlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIGV2ZW50LnJlc3VsdHNbMF0ucmVzdWx0cy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChyLmZlYXR1cmUuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGF5ZXIubGF5ZXJJZCA9PT0gNCkge1xuICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IGxheWVyLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdBRERSRVNTRVMnO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgJiYgb2lkcykge1xuICAgICAgICAgICAgbGF5ZXJcbiAgICAgICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcC5pZCwgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlczogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlLmxheWVyID0gdGhpcy5jb25kb3NUYWJsZTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYyA9IG5ldyBHcmFwaGljKCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZShmZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCBmZWF0dXJlcyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvbmRvc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyBvYmplY3RJZHM6IG9pZHMsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBuZXcgR3JhcGhpYygpO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmUocmVzdWx0LmZlYXR1cmVzWzBdLCB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LCBbXSwgb2lkcyk7XG4gICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCByZXN1bHQuZmVhdHVyZXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBzZXRGZWF0dXJlKGZlYXR1cmU6IGVzcmkuR3JhcGhpYywgdmlldzogZXNyaS5NYXBWaWV3LCBtZWRpYUluZm9zOiBhbnlbXSwgb2lkczogYW55W10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdyZWlkJywgZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ1JFSUQnKSk7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgYCR7bG9jYXRpb24ucGF0aG5hbWV9PyR7cGFyYW1zfWApO1xuICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuY29uZG9zVGFibGUucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ1BIT1RPUyc7XG4gICAgfSk7XG4gICAgY29uc3Qgb2lkID0gZmVhdHVyZS5nZXRPYmplY3RJZCgpO1xuICAgIG1lZGlhSW5mb3MgPSBbXTtcbiAgICB0aGlzLmNvbmRvc1RhYmxlXG4gICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwPy5pZCwgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgIG1lZGlhSW5mb3MucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgICAgY2FwdGlvbjogJycsXG4gICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgc291cmNlVVJMOiBgaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL3JlYWxlc3RhdGUvcGhvdG9zL212aWRlby8ke2ZlYXR1cmUuZ2V0QXR0cmlidXRlKCdQSE9UTycpfWBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVkaWEgPSAodGhpcy5jb25kb3NUYWJsZS5wb3B1cFRlbXBsYXRlLmNvbnRlbnQgYXMgZXNyaS5Db250ZW50W10pLmZpbmQoKGNvbnRlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb250ZW50Py50eXBlID09PSAnbWVkaWEnO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgKG1lZGlhIGFzIGVzcmkuTWVkaWFDb250ZW50KS5tZWRpYUluZm9zID0gbWVkaWFJbmZvcztcbiAgICAgICAgfVxuICAgICAgICBmZWF0dXJlLmxheWVyID0gdGhpcy5jb25kb3NUYWJsZTtcbiAgICAgICAgZmVhdHVyZS5wb3B1cFRlbXBsYXRlID0gKGZlYXR1cmUubGF5ZXIgYXMgZXNyaS5GZWF0dXJlTGF5ZXIpLnBvcHVwVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gZmVhdHVyZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mZWF0dXJlLmdyYXBoaWMuYXR0cmlidXRlcyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlRGl2Jyk/LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljLnN5bWJvbCA9IHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueTtcbiAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMuc2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcsIG9pZCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5ncmFwaGljcy5ncmFwaGljcy5maW5kKGdyYXBoaWMgPT4ge1xuICAgICAgICAgIHJldHVybiBncmFwaGljLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSA9PT0gJ3RydWUnO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgc2VsZWN0ZWQuc3ltYm9sID0gdGhpcy5tdWx0aVN5bWJvbCBhcyBhbnk7XG4gICAgICAgICAgc2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWMgPSB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLmZpbmQoZ3JhcGhpYyA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdSRUlEJykgPT09IGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdSRUlEJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZ3JhcGhpYykge1xuICAgICAgICAgIGdyYXBoaWMuc3ltYm9sID0gdGhpcy5zaW5nbGVTeW1ib2wgYXMgYW55O1xuXG4gICAgICAgICAgZ3JhcGhpYy5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgICB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLnJlb3JkZXIoZ3JhcGhpYywgdGhpcy5ncmFwaGljcy5ncmFwaGljcy5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbiAgZXhwb3J0VGFibGUoKSB7XG4gICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIucXVlcnlGZWF0dXJlcyh7IG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgbGV0IGNzdiA9ICcnO1xuICAgICAgcmVzdWx0LmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgY3N2ICs9IGAke2ZpZWxkLmFsaWFzfSxgO1xuICAgICAgfSk7XG4gICAgICBjc3YgKz0gJ1xcclxcbic7XG4gICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmVhdHVyZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaWYgKGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkYXRlJykpIHtcbiAgICAgICAgICAgIGNzdiArPSBgXCIke25ldyBEYXRlKGZlYXR1cmUuYXR0cmlidXRlc1trZXldKS50b0RhdGVTdHJpbmcoKX1cIixgO1xuICAgICAgICAgIH0gZWxzZSBpZiAoa2V5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2FjcmVzJykpIHtcbiAgICAgICAgICAgIGNzdiArPSBgXCIke3BhcnNlRmxvYXQoZmVhdHVyZS5hdHRyaWJ1dGVzW2tleV0pLnRvRml4ZWQoMil9XCIsYDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3N2ICs9IGBcIiR7ZmVhdHVyZS5hdHRyaWJ1dGVzW2tleV19XCIsYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3N2ICs9ICdcXHJcXG4nO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBleHBvcnRlZEZpbGVubWFlID0gJ2ltYXBzX2V4cG9ydC5jc3YnO1xuXG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2Nzdl0sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBpZiAobGluay5kb3dubG9hZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGZlYXR1cmUgZGV0ZWN0aW9uXG4gICAgICAgIC8vIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCBIVE1MNSBkb3dubG9hZCBhdHRyaWJ1dGVcbiAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBleHBvcnRlZEZpbGVubWFlKTtcbiAgICAgICAgbGluay5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrU2VhcmNoUGFyYW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zO1xuICAgIGNvbnN0IHJlaWQgPSBwYXJhbXMuZ2V0KCdyZWlkJyk7XG4gICAgY29uc3QgcGluID0gcGFyYW1zLmdldCgncGluJyk7XG4gICAgbGV0IHdoZXJlID0gJyc7XG4gICAgaWYgKHJlaWQgfHwgcGluKSB7XG4gICAgICBpZiAocmVpZCkge1xuICAgICAgICB3aGVyZSA9IGBSRUlEIElOICgnJHtyZWlkLnNwbGl0KCcsJykuam9pbihcIicsJ1wiKX0nKWA7XG4gICAgICB9IGVsc2UgaWYgKHBpbikge1xuICAgICAgICB3aGVyZSA9IGBQSU5fTlVNID0gJyR7cGlufSdgO1xuICAgICAgfVxuICAgICAgdGhpcy5jb25kb3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6IHdoZXJlLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2V0UHJvcGVydHkob2lkcyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBuZXcgR3JhcGhpYygpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgndGFibGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldEZlYXR1cmUocmVzdWx0LmZlYXR1cmVzWzBdLCB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LCBbXSwgb2lkcyk7XG4gICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCByZXN1bHQuZmVhdHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MsIHZpZXcubWFwLmFsbExheWVycy5sZW5ndGggLSAxKTtcbiAgICB0aGlzLmNsdXN0ZXJQb2ludHMgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgIHNvdXJjZTogW10sXG4gICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnLFxuICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgbWF4U2NhbGU6IDE5MjAxLFxuICAgICAgbGlzdE1vZGU6ICdoaWRlJyxcbiAgICAgIGxlZ2VuZEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcmVuZGVyZXI6IHtcbiAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJyxcbiAgICAgICAgICBzaXplOiA0LFxuICAgICAgICAgIGNvbG9yOiAnIzY5ZGNmZicsXG4gICAgICAgICAgb3V0bGluZToge1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDAsIDEzOSwgMTc0LCAwLjUpJyxcbiAgICAgICAgICAgIHdpZHRoOiA1XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGFzIGFueSxcbiAgICAgIGZlYXR1cmVSZWR1Y3Rpb246IHtcbiAgICAgICAgdHlwZTogJ2NsdXN0ZXInLFxuICAgICAgICBsYWJlbGluZ0luZm86IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyB0dXJuIG9mZiBkZWNvbmZsaWN0aW9uIHRvIGVuc3VyZSBhbGwgY2x1c3RlcnMgYXJlIGxhYmVsZWRcbiAgICAgICAgICAgIGRlY29uZmxpY3Rpb25TdHJhdGVneTogJ25vbmUnLFxuICAgICAgICAgICAgbGFiZWxFeHByZXNzaW9uSW5mbzoge1xuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlRleHQoJGZlYXR1cmUuY2x1c3Rlcl9jb3VudCwgJyMsIyMjJylcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwNGE1ZCcsXG4gICAgICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgICAgICBmYW1pbHk6ICdOb3RvIFNhbnMnLFxuICAgICAgICAgICAgICAgIHNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGFzIGFueSxcbiAgICAgICAgICAgIGxhYmVsUGxhY2VtZW50OiAnY2VudGVyLWNlbnRlcidcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBzcGF0aWFsUmVmZXJlbmNlOiB0aGlzLnZpZXcuc3BhdGlhbFJlZmVyZW5jZVxuICAgIH0pO1xuICAgIHRoaXMudmlldy5tYXAuYWRkKHRoaXMuY2x1c3RlclBvaW50cyk7XG4gICAgdGhpcy5jaGVja1NlYXJjaFBhcmFtcygpO1xuICB9XG5cbiAgZ2V0U3VnZ2VzdGlvbnMgPSAoXG4gICAgcGFyYW1zOiBhbnksXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGxheWVyOiBlc3JpLkZlYXR1cmVMYXllcixcbiAgICBvdXRGaWVsZHM6IHN0cmluZ1tdLFxuICAgIG9yZGVyQnlGaWVsZHM6IHN0cmluZ1tdLFxuICAgIHNlYXJjaEZpZWxkczogc3RyaW5nW10sXG4gICAgc3RhcnRzV2l0aDogYm9vbGVhblxuICApID0+IHtcbiAgICBjb25zdCB3aGVyZUFycmF5OiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vdGVzdFxuICAgIHNlYXJjaEZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGlmIChzdGFydHNXaXRoKSB7XG4gICAgICAgIHdoZXJlQXJyYXkucHVzaChgJHtmaWVsZH0gTElLRSAnJHtwYXJhbXMuc3VnZ2VzdFRlcm0udG9VcHBlckNhc2UoKX0lJ2ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hlcmVBcnJheS5wdXNoKGAke2ZpZWxkfSBMSUtFICclJHtwYXJhbXMuc3VnZ2VzdFRlcm0udG9VcHBlckNhc2UoKX0lJ2ApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsYXllclxuICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICByZXR1cm5EaXN0aW5jdFZhbHVlczogdHJ1ZSxcbiAgICAgICAgb3V0RmllbGRzOiBvdXRGaWVsZHMsXG4gICAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgICAgICAgb3JkZXJCeUZpZWxkczogb3JkZXJCeUZpZWxkcyxcbiAgICAgICAgd2hlcmU6IHdoZXJlQXJyYXkuam9pbignIE9SICcpXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBuYW1lLFxuICAgICAgICAgICAgdGV4dDogZmVhdHVyZS5nZXRBdHRyaWJ1dGUob3V0RmllbGRzWzBdKSxcbiAgICAgICAgICAgIHNvdXJjZUluZGV4OiBwYXJhbXMuc291cmNlSW5kZXhcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuICBpbml0U2VhcmNoKCkge1xuICAgIGNvbnN0IHRhYmxlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgIGZpZWxkczogW1xuICAgICAgICB7IG5hbWU6ICdTSVRFX0FERFJFU1MnLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdBZGRyZXNzJyB9LFxuICAgICAgICB7IG5hbWU6ICdPV05FUicsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ093bmVyJyB9LFxuICAgICAgICB7IG5hbWU6ICdQSU5fTlVNJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnUElOJyB9LFxuICAgICAgICB7IG5hbWU6ICdSRUlEJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnUkVJRCcgfVxuICAgICAgXSxcbiAgICAgIHNvdXJjZTogW10sXG4gICAgICB0aXRsZTogJ1NlbGVjdGVkIHByb3BlcnRpZXMnLFxuICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJyxcbiAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHRoaXMudmlldy5zcGF0aWFsUmVmZXJlbmNlXG4gICAgfSk7XG4gICAgdGhpcy5mZWF0dXJlID0gbmV3IEZlYXR1cmUoeyB2aWV3OiB0aGlzLnZpZXcgfSk7XG5cbiAgICB0aGlzLmZlYXR1cmVUYWJsZSA9IG5ldyBGZWF0dXJlVGFibGUoe1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgbGF5ZXI6IHRhYmxlTGF5ZXIsXG4gICAgICBmaWVsZENvbmZpZ3M6IFtcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnU0lURV9BRERSRVNTJyxcbiAgICAgICAgICBsYWJlbDogJ0FkZHJlc3MnLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnT1dORVInLFxuICAgICAgICAgIGxhYmVsOiAnT3duZXInLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnUElOX05VTScsXG4gICAgICAgICAgbGFiZWw6ICdQSU4nLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnUkVJRCcsXG4gICAgICAgICAgbGFiZWw6ICdSRUlEJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICBtZW51Q29uZmlnOiB7XG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgKHtcbiAgICAgICAgICAgIGxhYmVsOiAnRXhwb3J0J1xuICAgICAgICAgIH0gYXMgdW5rbm93bikgYXMgTWVudUJ1dHRvbkl0ZW1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGJ1dHRvbjogTWVudUJ1dHRvbkl0ZW0gPSB0aGlzLmZlYXR1cmVUYWJsZT8ubWVudUNvbmZpZz8uaXRlbXM/LmZpbmQoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5sYWJlbCA9PT0gJ0V4cG9ydCc7XG4gICAgfSkgYXMgTWVudUJ1dHRvbkl0ZW07XG4gICAgYnV0dG9uLmNsaWNrRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICB0aGlzLmV4cG9ydFRhYmxlKCk7XG4gICAgfTtcbiAgICBidXR0b24uY2xpY2tGdW5jdGlvbi5iaW5kKHRoaXMuZmVhdHVyZVRhYmxlKTtcblxuICAgIHRoaXMuZmVhdHVyZVRhYmxlLm9uKCdzZWxlY3Rpb24tY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgKHRoaXMuZmVhdHVyZVRhYmxlIGFzIGFueSkuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIGlmIChldmVudC5hZGRlZC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShbZXZlbnQuYWRkZWRbMF0uZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJyldLCAndGFibGUnKTtcbiAgICAgICAgdGhpcy5zZXRGZWF0dXJlKFxuICAgICAgICAgIGV2ZW50LmFkZGVkWzBdLmZlYXR1cmUsXG4gICAgICAgICAgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldyxcbiAgICAgICAgICBbXSxcbiAgICAgICAgICBbZXZlbnQuYWRkZWRbMF0uZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJyldXG4gICAgICAgICk7XG4gICAgICAgIGV2ZW50LmFkZGVkWzBdLmZlYXR1cmUuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2VhcmNoV2lkZ2V0ID0gbmV3IFNlYXJjaCh7XG4gICAgICBhbGxQbGFjZWhvbGRlcjogJ0FkZHJlc3MsIG93bmVyLCBQSU4sIG9yIFJFSUQnLFxuICAgICAgaW5jbHVkZURlZmF1bHRTb3VyY2VzOiBmYWxzZSxcbiAgICAgIGNvbnRhaW5lcjogJ3NlYXJjaCcsXG4gICAgICBzb3VyY2VzOiBbXG4gICAgICAgIC8vIG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgIC8vICAgbGF5ZXI6IHRoaXMuYWRkcmVzc1RhYmxlLFxuICAgICAgICAvLyAgIHNlYXJjaEZpZWxkczogWydBRERSRVNTJywgJ0FERFJFU1NfTk9ESVInXSxcbiAgICAgICAgLy8gICBkaXNwbGF5RmllbGQ6ICdBRERSRVNTJyxcbiAgICAgICAgLy8gICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgLy8gICBvdXRGaWVsZHM6IFsnQUREUkVTUycsICdSRUFfUkVJRCddLFxuICAgICAgICAvLyAgIG5hbWU6ICdTaXRlIEFkZHJlc3MnLFxuICAgICAgICAvLyAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMjIyIFcgSEFSR0VUVCdcbiAgICAgICAgLy8gfSksXG4gICAgICAgIG5ldyBTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMjIyIFcgSEFSR0VUVCBTVCcsXG4gICAgICAgICAgbmFtZTogJ1NpdGUgQWRkcmVzcycsXG4gICAgICAgICAgZ2V0U3VnZ2VzdGlvbnM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3VnZ2VzdGlvbnMoXG4gICAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgICAgJ1NpdGUgQWRkcmVzcycsXG4gICAgICAgICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlLFxuICAgICAgICAgICAgICBbJ0FERFJFU1MnXSxcbiAgICAgICAgICAgICAgWydBRERSRVNTJ10sXG4gICAgICAgICAgICAgIFsnQUREUkVTUyddLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0UmVzdWx0czogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRyZXNzVGFibGVcbiAgICAgICAgICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiBgQUREUkVTUyA9ICcke3BhcmFtcy5zdWdnZXN0UmVzdWx0LnRleHQudG9VcHBlckNhc2UoKX0nYCxcbiAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFsnQUREUkVTUycsICdSRUFfUkVJRCcsICdPQkpFQ1RJRCddXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGZlYXR1cmUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdBZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBhbnkpLFxuICAgICAgICAvLyBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAvLyAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgLy8gICBzZWFyY2hGaWVsZHM6IFsnT1dORVInXSxcbiAgICAgICAgLy8gICBkaXNwbGF5RmllbGQ6ICdPV05FUicsXG4gICAgICAgIC8vICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgIC8vICAgb3V0RmllbGRzOiBbJ09XTkVSJywgJ1JFSUQnLCAnT0JKRUNUSUQnXSxcbiAgICAgICAgLy8gICBuYW1lOiAnT3duZXInLFxuICAgICAgICAvLyAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogU01JVEgsIEpPSE4nXG4gICAgICAgIC8vIH0pLFxuICAgICAgICBuZXcgU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IFNNSVRILCBKT0hOJyxcbiAgICAgICAgICBuYW1lOiAnT3duZXInLFxuICAgICAgICAgIGdldFN1Z2dlc3Rpb25zOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1Z2dlc3Rpb25zKHBhcmFtcywgJ093bmVyJywgdGhpcy5jb25kb3NUYWJsZSwgWydPV05FUiddLCBbJ09XTkVSJ10sIFsnT1dORVInXSwgZmFsc2UpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0UmVzdWx0czogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kb3NUYWJsZVxuICAgICAgICAgICAgICAucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IGBPV05FUiA9ICcke3BhcmFtcy5zdWdnZXN0UmVzdWx0LnRleHQudG9VcHBlckNhc2UoKX0nYCxcbiAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFsnT1dORVInLCAnT0JKRUNUSUQnXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlOiBmZWF0dXJlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnT3duZXInXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KSBhcyBhbnk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGFzIGFueSksXG4gICAgICAgIC8vIG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgIC8vICAgbGF5ZXI6IGNvbmRvc1RhYmxlLFxuICAgICAgICAvLyAgIHNlYXJjaEZpZWxkczogWydQSU5fTlVNJ10sXG4gICAgICAgIC8vICAgZGlzcGxheUZpZWxkOiAnUElOX05VTScsXG4gICAgICAgIC8vICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgIC8vICAgb3V0RmllbGRzOiBbJ1BJTl9OVU0nLCAnUkVJRCcsICdPQkpFQ1RJRCddLFxuICAgICAgICAvLyAgIG5hbWU6ICdQSU4nLFxuICAgICAgICAvLyAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMDcxMjM0NTY3OCdcbiAgICAgICAgLy8gfSksXG4gICAgICAgIG5ldyBTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUElOJyxcbiAgICAgICAgICBuYW1lOiAnUElOJyxcbiAgICAgICAgICBnZXRTdWdnZXN0aW9uczogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWdnZXN0aW9ucyhwYXJhbXMsICdQSU4nLCB0aGlzLmNvbmRvc1RhYmxlLCBbJ1BJTl9OVU0nXSwgWydQSU5fTlVNJ10sIFsnUElOX05VTSddLCB0cnVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFJlc3VsdHM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZG9zVGFibGVcbiAgICAgICAgICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiBgUElOX05VTSA9ICcke3BhcmFtcy5zdWdnZXN0UmVzdWx0LnRleHR9J2AsXG4gICAgICAgICAgICAgICAgb3V0RmllbGRzOiBbJ1BJTl9OVU0nLCAnT0JKRUNUSUQnXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlOiBmZWF0dXJlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnUElOJ1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBhbnkpLFxuICAgICAgICAvLyBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAvLyAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgLy8gICBzZWFyY2hGaWVsZHM6IFsnUkVJRCddLFxuICAgICAgICAvLyAgIGRpc3BsYXlGaWVsZDogJ1JFSUQnLFxuICAgICAgICAvLyAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAvLyAgIG91dEZpZWxkczogWydSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgIC8vICAgbmFtZTogJ1JFSUQnLFxuICAgICAgICAvLyAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMDEyMzQ1NidcbiAgICAgICAgLy8gfSksXG4gICAgICAgIG5ldyBTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUkVJRCcsXG4gICAgICAgICAgbmFtZTogJ1JFSUQnLFxuICAgICAgICAgIGdldFN1Z2dlc3Rpb25zOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1Z2dlc3Rpb25zKHBhcmFtcywgJ1JFSUQnLCB0aGlzLmNvbmRvc1RhYmxlLCBbJ1JFSUQnXSwgWydSRUlEJ10sIFsnUkVJRCddLCB0cnVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFJlc3VsdHM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZG9zVGFibGVcbiAgICAgICAgICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiBgUkVJRCA9ICcke3BhcmFtcy5zdWdnZXN0UmVzdWx0LnRleHR9J2AsXG4gICAgICAgICAgICAgICAgb3V0RmllbGRzOiBbJ1JFSUQnLCAnT0JKRUNUSUQnXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlOiBmZWF0dXJlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnUkVJRCdcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pIGFzIGFueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYXMgYW55KSxcbiAgICAgICAgbmV3IFNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiBXIEhBUkdFVFQgU1QnLFxuICAgICAgICAgIG5hbWU6ICdTdHJlZXQgTmFtZScsXG4gICAgICAgICAgZ2V0U3VnZ2VzdGlvbnM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3VnZ2VzdGlvbnMoXG4gICAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgICAgJ1N0cmVldCBOYW1lJyxcbiAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzVGFibGUsXG4gICAgICAgICAgICAgIFsnU1RSRUVUJywgJ0FERFJfTElTVCddLFxuICAgICAgICAgICAgICBbJ1NUUkVFVCddLFxuICAgICAgICAgICAgICBbJ1NUUkVFVCcsICdTVFJFRVRfTk9ESVInXSxcbiAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRSZXN1bHRzOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZHJlc3NUYWJsZVxuICAgICAgICAgICAgICAucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IGBTVFJFRVQgPSAnJHtwYXJhbXMuc3VnZ2VzdFJlc3VsdC50ZXh0LnRvVXBwZXJDYXNlKCl9J2AsXG4gICAgICAgICAgICAgICAgb3V0RmllbGRzOiBbJ1NUUkVFVCcsICdSRUFfUkVJRCcsICdPQkpFQ1RJRCddXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGZlYXR1cmUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTdHJlZXQgTmFtZSdcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pIGFzIGFueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgXVxuICAgIH0pO1xuICAgIHRoaXMuc2VhcmNoV2lkZ2V0LnZpZXdNb2RlbC53YXRjaCgncmVzdWx0cycsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldC5vbignc2VhcmNoLWNvbXBsZXRlJywgdGhpcy5zZWFyY2hDb21wbGV0ZSk7XG4gIH1cbiAgdG9nZ2xlQ29udGVudCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSAndGFibGUnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZScpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZUl0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IFByb3BlcnR5U2VhcmNoVmlld01vZGVsIGZyb20gJy4vUHJvcGVydHlTZWFyY2gvUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwnO1xuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eVNlYXJjaFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIHByb3BlcnR5TGF5ZXI/OiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgY29uZG9zVGFibGU/OiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgYWRkcmVzc1RhYmxlPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IHByb3BlcnR5c2VhcmNoLWJhc2UnXG59O1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Qcm9wZXJ0eVNlYXJjaCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eVNlYXJjaCBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmNvbmRvc1RhYmxlJylcbiAgY29uZG9zVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLmFkZHJlc3NUYWJsZScpXG4gIGFkZHJlc3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwucHJvcGVydHlMYXllcicpXG4gIHByb3BlcnR5TGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLnNlYXJjaFdpZGdldCcpXG4gIHNlYXJjaFdpZGdldDogZXNyaS53aWRnZXRzU2VhcmNoO1xuICBAYWxpYXNPZigndmlld01vZGVsLmZlYXR1cmVUYWJsZScpXG4gIGZlYXR1cmVUYWJsZTogZXNyaS5GZWF0dXJlVGFibGU7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZmVhdHVyZScpXG4gIGZlYXR1cmU6IGVzcmkuRmVhdHVyZTtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5nZW9tZXRyeScpXG4gIGdlb21ldHJ5OiBlc3JpLkdlb21ldHJ5O1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogUHJvcGVydHlTZWFyY2hWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IFByb3BlcnR5U2VhcmNoVmlld01vZGVsID0gbmV3IFByb3BlcnR5U2VhcmNoVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IFByb3BlcnR5U2VhcmNoUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX2NyZWF0ZVNlYXJjaCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zZWFyY2hXaWRnZXQpIHtcbiAgICAgIHRoaXMuc2VhcmNoV2lkZ2V0LmNvbnRhaW5lciA9ICdzZWFyY2gnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZVRhYmxlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmZlYXR1cmVUYWJsZSkge1xuICAgICAgdGhpcy5mZWF0dXJlVGFibGUuY29udGFpbmVyID0gJ3RhYmxlJztcbiAgICB9XG4gIH07XG4gIF9jcmVhdGVGZWF0dXJlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmZlYXR1cmUpIHtcbiAgICAgIHRoaXMuZmVhdHVyZS5jb250YWluZXIgPSAnZmVhdHVyZURpdic7XG4gICAgfVxuICB9O1xuXG4gIGN1cnJlbnRSYWRpb0J1dHRvbiA9ICdsaXN0JztcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2lkZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAvLyBjYW4gSSBnZXQgY2hlY2tlZCBhbmQgdmFsdWUgbGlrZSB0aGlzP1xuICAgICAgICBpZiAoZS50YXJnZXQ/LmNoZWNrZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldD8udmFsdWUpO1xuICAgICAgICAgIHRoaXMudmlld01vZGVsLnRvZ2dsZUNvbnRlbnQoZS50YXJnZXQ/LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgZmVhdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlRGl2JykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Nyb2xsQXJyb3cnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBmZWF0RGl2Py5zY3JvbGxCeSh7IHRvcDogZmVhdERpdi5vZmZzZXRIZWlnaHQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICB9KTtcbiAgICBjb25zdCB0aGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICBpZiAodGhlbWUpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcnJvd1BhdGgnKT8uc2V0QXR0cmlidXRlKCdzdHJva2UnLCB0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdibGFjaycgOiAnd2hpdGUnKTtcbiAgICB9XG5cbiAgICBmZWF0RGl2Py5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBpZiAoZmVhdERpdi5zY3JvbGxUb3AgPj0gZmVhdERpdi5zY3JvbGxIZWlnaHQgLSBmZWF0RGl2Lm9mZnNldEhlaWdodCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Nyb2xsQXJyb3cnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Nyb2xsQXJyb3cnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlU2VhcmNofSBpZD1cInNlYXJjaFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVUYWJsZX0gaWQ9XCJ0YWJsZVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZmVhdHVyZVwiIGNsYXNzPVwiaGlkZGVuXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImZlYXR1cmVEaXZcIiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlRmVhdHVyZX0+PC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9XCJzY3JvbGxBcnJvd1wiXG4gICAgICAgICAgICBjbGFzcz1cImhvbWUtcGFnZV9fc2Nyb2xsLWRvd24tYXJyb3cgaG9tZS1wYWdlX19zY3JvbGwtZG93bi1hcnJvdy0tYmxhY2tcIlxuICAgICAgICAgICAgZGF0YS1kb2pvLWF0dGFjaC1wb2ludD1cImFycm93Q29udGFpbmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiBjbGFzcz1cImljb24taW5saW5lICBcIj5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cImFycm93UGF0aFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgIHN0cm9rZS1vcGFjaXR5PVwiMC41XCJcbiAgICAgICAgICAgICAgICBkPVwiTTE2LjUgMjcuMjA3bC00Ljg1NC00Ljg1NC43MDctLjcwN0wxNiAyNS4yOTNWNWgxdjIwLjI5M2wzLjY0Ni0zLjY0Ni43MDcuNzA3elwiXG4gICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSBjaGVja2VkIHZhbHVlPVwidGFibGVcIiBpZD1cInRhYmxlSXRlbVwiPlxuICAgICAgICAgICAgTGlzdFxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdmFsdWU9XCJmZWF0dXJlXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgRGV0YWlsc1xuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBNZWFzdXJlbWVudCBmcm9tICdlc3JpL3dpZGdldHMvTWVhc3VyZW1lbnQnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLk1lYXN1cmUuTWVhc3VyZVZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWFzdXJlVmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuICBtZWFzdXJlbWVudDogZXNyaS5NZWFzdXJlbWVudDtcbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHRoaXMubWVhc3VyZW1lbnQgPSBuZXcgTWVhc3VyZW1lbnQoeyB2aWV3LCBhcmVhVW5pdDogJ3NxdWFyZS1mZWV0JywgbGluZWFyVW5pdDogJ2ZlZXQnIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBNZWFzdXJlVmlld01vZGVsIGZyb20gJy4vTWVhc3VyZS9NZWFzdXJlVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBNZWFzdXJlUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbWVhc3VyZS1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5NZWFzdXJlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmUgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5tZWFzdXJlbWVudCcpXG4gIG1lYXN1cmVtZW50OiBlc3JpLk1lYXN1cmVtZW50O1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTWVhc3VyZVZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogTWVhc3VyZVZpZXdNb2RlbCA9IG5ldyBNZWFzdXJlVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IE1lYXN1cmVQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfbWVhc3VyZUNyZWF0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubWVhc3VyZW1lbnQpIHtcbiAgICAgIHRoaXMubWVhc3VyZW1lbnQuY29udGFpbmVyID0gJ21lYXN1cmVXaWRnZXQnO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVhc3VyZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0Py50aXRsZSA9PT0gJ2NsZWFyJykge1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lYXN1cmVtZW50LmFjdGl2ZVRvb2wgPSBlLnRhcmdldD8udGl0bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHRpdGxlPVwiZGlzdGFuY2VcIiB2YWx1ZT1cImRpc3RhbmNlXCIgaWQ9XCJ0YWJsZUl0ZW1cIiBpY29uPVwibWVhc3VyZVwiPlxuICAgICAgICAgICAgRGlzdGFuY2VcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHRpdGxlPVwiYXJlYVwiIHZhbHVlPVwiYXJlYVwiIGlkPVwiZmVhdHVyZUl0ZW1cIiBpY29uPVwibWVhc3VyZS1hcmVhXCI+XG4gICAgICAgICAgICBBcmVhXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB0aXRsZT1cImNsZWFyXCIgdmFsdWU9XCJjbGVhclwiIGlkPVwiZmVhdHVyZUl0ZW1cIiBpY29uPVwidHJhc2hcIj5cbiAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cD5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fbWVhc3VyZUNyZWF0ZWR9IGlkPVwibWVhc3VyZVdpZGdldFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInO1xuaW1wb3J0IFBvcHVwVGVtcGxhdGUgZnJvbSAnZXNyaS9Qb3B1cFRlbXBsYXRlJztcbmltcG9ydCBFeHByZXNzaW9uSW5mbyBmcm9tICdlc3JpL3BvcHVwL0V4cHJlc3Npb25JbmZvJztcbmltcG9ydCBDdXN0b21Db250ZW50IGZyb20gJ2VzcmkvcG9wdXAvY29udGVudC9DdXN0b21Db250ZW50JztcbmltcG9ydCBMb2NhdG9yIGZyb20gJ2VzcmkvdGFza3MvTG9jYXRvcic7XG5pbXBvcnQgZ2VvZGVzaWNVdGlscyBmcm9tICdlc3JpL2dlb21ldHJ5L3N1cHBvcnQvZ2VvZGVzaWNVdGlscyc7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZSc7XG5pbXBvcnQgeyB2aWV3IH0gZnJvbSAnLi4nO1xuY29uc3QgYXJjYWRlRXhwcmVzc2lvbkluZm9zID0gW1xuICB7XG4gICAgbmFtZTogJ21haWxpbmctYWRkcmVzcycsXG4gICAgdGl0bGU6ICdtYWlsaW5nLWFkZHJlc3MnLFxuICAgIGV4cHJlc3Npb246XG4gICAgICAnV2hlbihJc0VtcHR5KCRmZWF0dXJlLkFERFIzKSwkZmVhdHVyZS5BRERSMSArIFRleHRGb3JtYXR0aW5nLk5ld0xpbmUgKyAkZmVhdHVyZS5BRERSMiwkZmVhdHVyZS5BRERSMSArIFRleHRGb3JtYXR0aW5nLk5ld0xpbmUgKyAkZmVhdHVyZS5BRERSMiArIFRleHRGb3JtYXR0aW5nLk5ld0xpbmUgKyAkZmVhdHVyZS5BRERSMyknXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAncHJvcGVydHktdmFsdWVzJyxcbiAgICB0aXRsZTogJ3Byb3BlcnR5LXZhbHVlcycsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdcIkJ1aWxkaW5nIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5CTERHX1ZBTCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiTGFuZCBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuTEFORF9WQUwrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIlRvdGFsIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5UT1RBTF9WQUxVRV9BU1NEJ1xuICB9LFxuXG4gIHtcbiAgICBuYW1lOiAncGluJyxcbiAgICB0aXRsZTogJ1BJTicsXG4gICAgZXhwcmVzc2lvbjogXCJ2YXIgbnVtID0gJGZlYXR1cmUuUElOX05VTTt2YXIgZXh0ID0gJGZlYXR1cmUuUElOX0VYVDtyZXR1cm4gV2hlbihleHQgPT0gJzAwMCcsbnVtLG51bSsnICcrZXh0KTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ2J1aWxkX3ZhbCcsXG4gICAgdGl0bGU6ICdCdWlsZGluZyBWYWx1ZScsXG4gICAgZXhwcmVzc2lvbjogXCJ2YXIgdmFsdWUgPSAkZmVhdHVyZS5CTERHX1ZBTDtXaGVuKElzRW1wdHkodmFsdWUpLCctLScsICckJytUZXh0KHZhbHVlLCAnIywjIyMnKSk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdsYW5kX3ZhbCcsXG4gICAgdGl0bGU6ICdMYW5kIFZhbHVlJyxcbiAgICBleHByZXNzaW9uOiBcInZhciB2YWx1ZSA9ICRmZWF0dXJlLkxBTkRfVkFMO1doZW4oSXNFbXB0eSh2YWx1ZSksJy0tJywgJyQnK1RleHQodmFsdWUsICcjLCMjIycpKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ3RvdGFsX3ZhbCcsXG4gICAgdGl0bGU6ICdUb3RhbCBWYWx1ZScsXG4gICAgZXhwcmVzc2lvbjogXCJ2YXIgdmFsdWUgPSAkZmVhdHVyZS5UT1RBTF9WQUxVRV9BU1NEO1doZW4oSXNFbXB0eSh2YWx1ZSksJy0tJywgJyQnK1RleHQodmFsdWUsICcjLCMjIycpKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ3NhbGVfcHJpY2UnLFxuICAgIHRpdGxlOiAnU2FsZSBQcmljZScsXG4gICAgZXhwcmVzc2lvbjogXCJ2YXIgdmFsdWUgPSAkZmVhdHVyZS5UT1RTQUxQUklDRTtXaGVuKElzRW1wdHkodmFsdWUpLCctLScsICckJytUZXh0KHZhbHVlLCAnIywjIyMnKSk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdjaXR5JyxcbiAgICB0aXRsZTogJ0NpdHknLFxuICAgIGV4cHJlc3Npb246IFwidmFyIGNpdHkgPSAkZmVhdHVyZS5DSVRZX0RFQ09ERTtXaGVuKElzRW1wdHkoY2l0eSksJ1VuaW5jb3Jwb3JhdGVkJywgUHJvcGVyKGNpdHkpKTtcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ3Rvd25zaGlwJyxcbiAgICB0aXRsZTogJ1Rvd25zaGlwJyxcbiAgICBleHByZXNzaW9uOiBcInZhciB0cyA9ICRmZWF0dXJlLlRPV05TSElQX0RFQ09ERTtXaGVuKElzRW1wdHkodHMpLCdOb25lJywgUHJvcGVyKHRzKSk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdqdXJpc2RpY3Rpb24nLFxuICAgIHRpdGxlOiAnSnVyaXNkaWN0aW9uJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ3ZhciBqdXJpcyA9ICRmZWF0dXJlLlBMQU5OSU5HX0pVUklTRElDVElPTjtXaGVuKCcgK1xuICAgICAgXCJqdXJpcyA9PSAnUkEnLCAnUmFsZWlnaCcsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnQ0EnLCAnQ2FyeScsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnQVAnLCAnQXBleCcsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnQU4nLCAnQW5naWVyJyxcIiArXG4gICAgICBcImp1cmlzID09ICdDTCcsICdDbGF5dG9uJyxcIiArXG4gICAgICBcImp1cmlzID09ICdEVScsICdEdXJoYW0nLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0ZWJywgJ0Z1cXVheS1WYXJpbmEnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0dBJywgJ0dhcm5lcicsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnSFMnLCAnSG9sbHkgU3ByaW5ncycsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnS04nLCAnS25pZ2h0ZGFsZScsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnTU8nLCAnTW9ycmlzdmlsbGUnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ1JPJywgJ1JvbGVzdmlsbGUnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ1dGJywgJ1dha2UgRm9yZXN0JyxcIiArXG4gICAgICBcImp1cmlzID09ICdXRScsICdXZW5kZWxsJyxcIiArXG4gICAgICBcImp1cmlzID09ICdaQicsICdaZWJ1bG9uJyxcIiArXG4gICAgICBcImp1cmlzID09ICdXQycsICdXYWtlIENvdW50eScsXCIgK1xuICAgICAgXCIgJ1dha2UgQ291bnR5Jyk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdnZW5lcmFsJyxcbiAgICB0aXRsZTogJ2dlbmVyYWwnLFxuICAgIGV4cHJlc3Npb246XG4gICAgICAnXCJQSU5cIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKyRmZWF0dXJlLlBJTl9OVU0rXCIgXCIrJGZlYXR1cmUuUElOX0VYVCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgJ1wiUkVJRFwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJGZlYXR1cmUuUkVJRCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiQ2l0eVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAnUHJvcGVyKCRmZWF0dXJlLkNJVFlfREVDT0RFKStUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiSnVyaXNkaWN0aW9uXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICckZmVhdHVyZS5QTEFOTklOR19KVVJJU0RJQ1RJT04rVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIlRvd25zaGlwXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStQcm9wZXIoJGZlYXR1cmUuVE9XTlNISVBfREVDT0RFKSdcbiAgfVxuXSBhcyBFeHByZXNzaW9uSW5mb1tdO1xuY29uc3Qgc2VydmljZXM6IGFueVtdID0gW1xuICB7XG4gICAgZ3JvdXA6IHtcbiAgICAgIHRpdGxlOiAnRWxlY3RvcmFsJyxcbiAgICAgIGxheWVyczogW1xuICAgICAgICAnUHJlY2luY3RzJyxcbiAgICAgICAgJ0NvbmdyZXNzaW9uYWwgRGlzdHJpY3RzJyxcbiAgICAgICAgJ05DIEhvdXNlIG9mIFJlcHJlc2VudGF0aXZlcyBEaXN0cmljdHMnLFxuICAgICAgICAnTkMgU2VuYXRlIERpc3RyaWN0cycsXG4gICAgICAgICdTY2hvb2wgQm9hcmQgRGlzdHJpY3RzJyxcbiAgICAgICAgJ0JvYXJkIG9mIENvbW1pc3Npb25lcnMgRGlzdHJpY3RzJyxcbiAgICAgICAgJ1N1cGVyaW9yIENvdXJ0IERpc3RyaWN0cycsXG4gICAgICAgICdSYWxlaWdoIENpdHkgQ291bmNpbCcsXG4gICAgICAgICdNb3JyaXN2aWxsZSBUb3duIENvdW5jaWwgRGlzdHJpY3RzJ1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGdyb3VwOiB7XG4gICAgICB0aXRsZTogJ0Vudmlyb25tZW50YWwnLFxuICAgICAgbGF5ZXJzOiBbXG4gICAgICAgICdTcGVjaWFsIEZsb29kIEhhemFyZCBBcmVhcyAtIEZsb29kUGxhaW4gLSBGbG9vZHBsYWluJyxcbiAgICAgICAgJ1NvaWxzJyxcbiAgICAgICAgJ0NyaXRpY2FsIFdhdGVyc2hlZHMnLFxuICAgICAgICAnV2F0ZXIgU3VwcGx5IFdhdGVyc2hlZHMnXG4gICAgICBdXG4gICAgfVxuICB9XG5dO1xuXG5jb25zdCBzY3JvbGxUb1NlcnZpY2UgPSAoZTogYW55KSA9PiB7XG4gIGNvbnN0IHJlY3QgPSAoZS5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbSBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlRGl2Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRpdj8uc2Nyb2xsVG8oeyB0b3A6IHJlY3QudG9wICsgZGl2LnNjcm9sbFRvcCAtIDE1NSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICB9LCA1MDApO1xufTtcbmNvbnN0IHNlcnZpY2VDaGFuZ2VkID0gKGdyYXBoaWM6IF9fZXNyaS5HcmFwaGljLCBlOiBhbnkpID0+IHtcbiAgaWYgKFxuICAgICFlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtLmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykgJiZcbiAgICBlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtLmNoaWxkRWxlbWVudENvdW50ID09PSAwXG4gICkge1xuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtbG9hZGVyJyk7XG4gICAgbG9hZGVyLnNldEF0dHJpYnV0ZSgnaW5saW5lJywgJycpO1xuICAgIGNvbnN0IGhlYWRlciA9IGUuZGV0YWlsLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW0uc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0taGVhZGVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaGVhZGVyLmluc2VydEJlZm9yZShsb2FkZXIsIGhlYWRlci5jaGlsZE5vZGVzWzFdKTtcbiAgICBjb25zdCBzZXJ2aWNlR3JvdXA6IGFueSA9IHNlcnZpY2VzLmZpbmQoc2VydmljZSA9PiB7XG4gICAgICByZXR1cm4gc2VydmljZS5ncm91cC50aXRsZSA9PT0gZS5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbS5nZXRBdHRyaWJ1dGUoJ2l0ZW0tdGl0bGUnKTtcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxfX2VzcmkuRmVhdHVyZVNldD5bXSA9IFtdO1xuXG4gICAgaWYgKHNlcnZpY2VHcm91cCkge1xuICAgICAgY29uc3QgbGF5ZXJzID0gdmlldy5tYXAuYWxsTGF5ZXJzLmZpbHRlcihsYXllciA9PiB7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlR3JvdXAuZ3JvdXAubGF5ZXJzLmluY2x1ZGVzKGxheWVyLnRpdGxlKTtcbiAgICAgIH0pO1xuICAgICAgbGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICAgIChsYXllciBhcyBfX2VzcmkuRmVhdHVyZUxheWVyKS5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIGdlb21ldHJ5OiBncmFwaGljLmdlb21ldHJ5LFxuICAgICAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocHJvbWlzZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaChyZXN1bHQgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQuZmVhdHVyZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogX19lc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIGUuZGV0YWlsLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW0uYXBwZW5kKGRpdik7XG4gICAgICAgICAgICAgIG5ldyBGZWF0dXJlKHsgY29udGFpbmVyOiBkaXYsIGdyYXBoaWM6IGZlYXR1cmUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzY3JvbGxUb1NlcnZpY2UoZSk7XG4gICAgICAgIGhlYWRlci5yZW1vdmVDaGlsZChsb2FkZXIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlci5yZW1vdmVDaGlsZChsb2FkZXIpO1xuICAgICAgcmV0dXJuICdObyBzZXJ2aWNlcyBmb3VuZC4nO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzY3JvbGxUb1NlcnZpY2UoZSk7XG4gIH1cbn07XG5jb25zdCBkZWVkQ3JlYXRvciA9IChlOiBhbnkpID0+IHtcbiAgcmV0dXJuIChlLmdyYXBoaWMubGF5ZXIgYXMgRmVhdHVyZUxheWVyKVxuICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7XG4gICAgICByZWxhdGlvbnNoaXBJZDogKGUuZ3JhcGhpYy5sYXllciBhcyBGZWF0dXJlTGF5ZXIpLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0JPT0tTJztcbiAgICAgIH0pPy5pZCxcbiAgICAgIG9iamVjdElkczogW2UuZ3JhcGhpYy5nZXRPYmplY3RJZCgpXSxcbiAgICAgIG91dEZpZWxkczogWydCT01fRE9DX05VTScsICdERUVEX0RPQ19OVU0nXVxuICAgIH0pXG4gICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGNvbnN0IGRlZWQgPSByZXN1bHRbZS5ncmFwaGljLmdldE9iamVjdElkKCldLmZlYXR1cmVzWzBdLmdldEF0dHJpYnV0ZSgnREVFRF9ET0NfTlVNJyk7XG4gICAgICBjb25zdCBib20gPSByZXN1bHRbZS5ncmFwaGljLmdldE9iamVjdElkKCldLmZlYXR1cmVzWzBdLmdldEF0dHJpYnV0ZSgnQk9NX0RPQ19OVU0nKTtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogcm93OycpO1xuICAgICAgaWYgKGRlZWQpIHtcbiAgICAgICAgY29uc3QgZGVlZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYnV0dG9uJyk7XG4gICAgICAgIGRlZWRCdG4uc2V0QXR0cmlidXRlKCdzY2FsZScsICdzJyk7XG4gICAgICAgIGRlZWRCdG4uc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgICAgIGRlZWRCdG4uc2V0QXR0cmlidXRlKCdyb3VuZCcsICcnKTtcbiAgICAgICAgZGVlZEJ0bi5zZXRBdHRyaWJ1dGUoJ2ljb24tc3RhcnQnLCAnZmlsZS10ZXh0Jyk7XG4gICAgICAgIGRlZWRCdG4uc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdocmVmJyxcbiAgICAgICAgICAnaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD0nICsgZGVlZCArICcmUmVjb3JkRGF0ZT0nXG4gICAgICAgICk7XG5cbiAgICAgICAgZGVlZEJ0bi50ZXh0Q29udGVudCA9ICdEZWVkJztcbiAgICAgICAgZGl2LmFwcGVuZChkZWVkQnRuKTtcbiAgICAgIH1cbiAgICAgIGlmIChib20pIHtcbiAgICAgICAgY29uc3QgYm9tYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1idXR0b24nKTtcbiAgICAgICAgYm9tYnRuLnNldEF0dHJpYnV0ZSgnc2NhbGUnLCAncycpO1xuICAgICAgICBib21idG4uc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgICAgIGJvbWJ0bi5zZXRBdHRyaWJ1dGUoJ3JvdW5kJywgJycpO1xuICAgICAgICBib21idG4uc2V0QXR0cmlidXRlKCdpY29uLXN0YXJ0JywgJ21hcCcpO1xuICAgICAgICBib21idG4uc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9ib29rc3dlYi9wZGZ2aWV3LmFzcHg/ZG9jaWQ9JyArIGJvbSArICcmUmVjb3JkRGF0ZT0nKTtcbiAgICAgICAgYm9tYnRuLnRleHRDb250ZW50ID0gJ0Jvb2sgb2YgTWFwcyc7XG4gICAgICAgIGRpdi5hcHBlbmQoYm9tYnRuKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpdjtcbiAgICB9KTtcbn07XG5jb25zdCBwb3B1cFRlbXBsYXRlID0gbmV3IFBvcHVwVGVtcGxhdGUoe1xuICBleHByZXNzaW9uSW5mb3M6IGFyY2FkZUV4cHJlc3Npb25JbmZvcyxcbiAgLy8gY29udGVudDogKGV2ZW50OiBhbnkpID0+IHtcbiAgLy8gICBjb25zdCBncmFwaGljID0gZXZlbnQuZ3JhcGhpYztcbiAgLy8gICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gICBkaXYuY2xhc3NMaXN0LmFkZCgndGV4dC1ncmVlbicpO1xuICAvLyAgIGNvbnRhaW5lci5hcHBlbmQoZGl2KTtcbiAgLy8gICBkaXYudGV4dENvbnRlbnQgPSBncmFwaGljLmdldEF0dHJpYnV0ZSgnU0lURV9BRERSRVNTJyk7XG4gIC8vICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgLy8gfSxcbiAgY29udGVudDogW1xuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDE+e1NJVEVfQUREUkVTU308L2gxPidcbiAgICB9LFxuICAgIG5ldyBDdXN0b21Db250ZW50KHtcbiAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICBjcmVhdG9yOiAoZTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgTG9jYXRvcih7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9tYXBzLnJhbGVpZ2huYy5nb3YvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvTG9jYXRvcnMvQ29tcG9zaXRlTG9jYXRvci9HZW9jb2RlU2VydmVyJyxcbiAgICAgICAgICBvdXRTcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfVxuICAgICAgICB9KVxuICAgICAgICAgIC5hZGRyZXNzVG9Mb2NhdGlvbnMoe1xuICAgICAgICAgICAgYWRkcmVzczogeyBzaW5nbGVMaW5lOiBlLmdyYXBoaWMuZ2V0QXR0cmlidXRlKCdTSVRFX0FERFJFU1MnKSB9LFxuICAgICAgICAgICAgb3V0RmllbGRzOiBbJyonXVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKGNhbmRpZGF0ZXM6IF9fZXNyaS5BZGRyZXNzQ2FuZGlkYXRlW10pID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5kaWRhdGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBjb25zdCBjYW5kaWRhdGUgPSBjYW5kaWRhdGVzLmZpbmQoY2FuZGlkYXRlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlLmF0dHJpYnV0ZXNbJ0xvY19uYW1lJ10gPT09ICdXYWtlU3RyZWV0cyc7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoY2FuZGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdCA9IGdlb2Rlc2ljVXRpbHMuZ2VvZGVzaWNEaXN0YW5jZShjYW5kaWRhdGUubG9jYXRpb24sIHtcbiAgICAgICAgICAgICAgICAgIHg6IChlLmdyYXBoaWMuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlnb24pLmNlbnRyb2lkLmxvbmdpdHVkZSxcbiAgICAgICAgICAgICAgICAgIHk6IChlLmdyYXBoaWMuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlnb24pLmNlbnRyb2lkLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gYXMgYW55XG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpc3QuZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpc3QuYXppbXV0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2JsbCA9XG4gICAgICAgICAgICAgICAgICAoZS5ncmFwaGljLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZC5sYXRpdHVkZSArXG4gICAgICAgICAgICAgICAgICAnLCcgK1xuICAgICAgICAgICAgICAgICAgKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWQubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgIC8vY29uc3QgY2JsbCA9IGNhbmRpZGF0ZXNbMF0ubG9jYXRpb24ueS50b1N0cmluZygpICsgJywnICsgY2FuZGlkYXRlc1swXS5sb2NhdGlvbi54LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20/bGF5ZXI9YyZjYmxsPScgKyBjYmxsICsgJyZjYnA9MCwnICsgZGlzdC5hemltdXRoPy50b1N0cmluZygpICsgJywwLDAsMCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgICAgIC8vICAgJ2h0dHBzOi8vbWFwcy5nb29nbGUuY29tP2xheWVyPWMmY2JsbD0nICsgY2JsbCArICcmY2JwPTAsJyArIGRpc3QuYXppbXV0aD8udG9TdHJpbmcoKSArICcsMCwwLDAnXG4gICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdzY2FsZScsICdzJyk7XG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3JvdW5kJywgJycpO1xuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2ljb24tc3RhcnQnLCAncGVyc29uJyk7XG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAgICdocmVmJyxcbiAgICAgICAgICAgICAgICAgICdodHRwczovL21hcHMuZ29vZ2xlLmNvbT9sYXllcj1jJmNibGw9JyArIGNibGwgKyAnJmNicD0wLCcgKyBkaXN0LmF6aW11dGg/LnRvU3RyaW5nKCkgKyAnLDAsMCwwJ1xuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnU3RyZWV0IFZpZXcnO1xuXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZChidG4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRheCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGF4LnNldEF0dHJpYnV0ZSgnc2NhbGUnLCAncycpO1xuICAgICAgICAgICAgICAgIHRheC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgICAgICAgICAgICB0YXguc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICAgICAgICAgJ2h0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9yZWFsZXN0YXRlL0FjY291bnQuYXNwP2lkPScgKyBlLmdyYXBoaWMuZ2V0QXR0cmlidXRlKCdSRUlEJylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRheC5zZXRBdHRyaWJ1dGUoJ3JvdW5kJywgJycpO1xuICAgICAgICAgICAgICAgIHRheC5zZXRBdHRyaWJ1dGUoJ2ljb24tc3RhcnQnLCAnbG9jYXRvcicpO1xuICAgICAgICAgICAgICAgIHRheC50ZXh0Q29udGVudCA9ICdUYXggUGFnZSc7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZCh0YXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkaXY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPkdlbmVyYWw8L2gxPidcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdmaWVsZHMnLFxuICAgICAgZmllbGRJbmZvczogW1xuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi9waW4nLFxuICAgICAgICAgIGxhYmVsOiAnUElOJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnUkVJRCcsXG4gICAgICAgICAgbGFiZWw6ICdSRUlEJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi9jaXR5JyxcbiAgICAgICAgICBsYWJlbDogJ0NpdHknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL2p1cmlzZGljdGlvbicsXG4gICAgICAgICAgbGFiZWw6ICdKdXJpc2RpY3Rpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL3Rvd25zaGlwJyxcbiAgICAgICAgICBsYWJlbDogJ1Rvd25zaGlwJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcblxuICAgIC8vIHtcbiAgICAvLyAgIHR5cGU6ICdjdXN0b20nLFxuICAgIC8vICAgdGV4dDogJzxjYWxjaXRlLWJ1dHRvbiBzY2FsZT1cInNcIiBocmVmPVwiI1wiIGNsYXNzPVwic3RyZWV0Vmlld1wiIHRhcmdldD1cIl9ibGFua1wiPlN0cmVldCBWaWV3PC9jYWxjaXRlLWJ1dHRvbj4nXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPk93bmVyPC9oMT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OlxuICAgICAgICAvLyAnPGgxIGNsYXNzPVwidGV4dC1ncmVlblwiPntTSVRFX0FERFJFU1N9PC9oMT4nICtcbiAgICAgICAgLy8gJzxoMj5HZW5lcmFsPC9oMj57ZXhwcmVzc2lvbi9nZW5lcmFsfScgK1xuICAgICAgICAne09XTkVSfTxici8+e2V4cHJlc3Npb24vbWFpbGluZy1hZGRyZXNzfSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDI+VmFsdWF0aW9uPC9oMT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnZmllbGRzJyxcbiAgICAgIGZpZWxkSW5mb3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vYnVpbGRfdmFsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi9sYW5kX3ZhbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vdG90YWxfdmFsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnQklMTElOR19DTEFTU19ERUNPREUnLFxuICAgICAgICAgIGxhYmVsOiAnQmlsbGluZyBDbGFzcydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMj5MYXN0IFNhbGU8L2gxPidcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdmaWVsZHMnLFxuICAgICAgZmllbGRJbmZvczogW1xuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnU0FMRV9EQVRFJyxcbiAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6ICdzaG9ydC1kYXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6ICdEYXRlIFNvbGQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL3NhbGVfcHJpY2UnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDI+RGVlZHM8L2gxPidcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdmaWVsZHMnLFxuICAgICAgZmllbGRJbmZvczogW1xuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnREVFRF9CT09LJyxcbiAgICAgICAgICBsYWJlbDogJ0Jvb2snXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdERUVEX1BBR0UnLFxuICAgICAgICAgIGxhYmVsOiAnUGFnZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ0RFRURfREFURScsXG4gICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICBkYXRlRm9ybWF0OiAnc2hvcnQtZGF0ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsOiAnRGVlZCBEYXRlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnREVFRF9BQ1JFUycsXG4gICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICBwbGFjZXM6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsOiAnRGVlZCBBY3JlcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ1BST1BERVNDJyxcbiAgICAgICAgICBsYWJlbDogJ0xlZ2FsIERlc2NyaXB0aW9uJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcblxuICAgIG5ldyBDdXN0b21Db250ZW50KHtcbiAgICAgIG91dEZpZWxkczogWydPQkpFQ1RJRCcsICdSRUlEJ10sXG4gICAgICBjcmVhdG9yOiBkZWVkQ3JlYXRvclxuICAgIH0pLFxuICAgIC8vIHtcbiAgICAvLyAgIHR5cGU6ICd0ZXh0JyxcbiAgICAvLyAgIHRleHQ6XG4gICAgLy8gJzxoMSBjbGFzcz1cInRleHQtZ3JlZW5cIj57U0lURV9BRERSRVNTfTwvaDE+JyArXG4gICAgLy8gJzxoMj5HZW5lcmFsPC9oMj57ZXhwcmVzc2lvbi9nZW5lcmFsfScgK1xuICAgIC8vICc8aDI+T3duZXI8L2gyPntPV05FUn08YnIvPntleHByZXNzaW9uL21haWxpbmctYWRkcmVzc30nICtcbiAgICAvLyAnPGgyPlZhbHVhdGlvbjwvaDI+e2V4cHJlc3Npb24vcHJvcGVydHktdmFsdWVzfScgK1xuICAgIC8vICc8aDI+U2FsZSBJbmZvcm1hdGlvbjwvaDI+e1RPVFNBTFBSSUNFfTxici8+e1NBTEVfREFURX0nICtcbiAgICAvLyAnPGgyPkRlZWRzPC9oMj57ZXhwcmVzc2lvbi9kZWVkLWJvb2stcGFnZX0nICtcbiAgICAvLyAnPGJyLz48c3Ryb25nPkRlZWQgRGF0ZTwvc3Ryb25nPjxici8+e0RFRURfREFURX08YnIvPicgK1xuICAgIC8vICc8YnIvPkxlZ2FsIERlc2NyaXB0aW9uPGJyLz57UFJPUERFU0N9PGJyLz4nICtcbiAgICAvLyAnPGEgaHJlZj1cImh0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9ib29rc3dlYi9wZGZ2aWV3LmFzcHg/ZG9jaWQ9e2V4cHJlc3Npb24vYm9tLWRvYy1udW19JlJlY29yZERhdGU9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+Qm9vayBvZiBNYXBzPC9hPjxici8+PGEgaHJlZj1cImh0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9ib29rc3dlYi9wZGZ2aWV3LmFzcHg/ZG9jaWQ9e2V4cHJlc3Npb24vZGVlZC1kb2MtbnVtfSZSZWNvcmREYXRlPVwiIHRhcmdldD1cIl9ibGFua1wiPkRlZWQ8L2E+J1xuICAgIC8vIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMj5CdWlsZGluZzwvaDE+J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICBmaWVsZEluZm9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdIRUFURURBUkVBJyxcbiAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgIGRpZ2l0U2VwYXJhdG9yOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbDogJ0hlYXRlZCBBcmVhJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnWUVBUl9CVUlMVCcsXG4gICAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICBkaWdpdFNlcGFyYXRvcjogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsOiAnWWVhciBCdWlsdCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ0RFU0lHTl9TVFlMRV9ERUNPREUnLFxuICAgICAgICAgIGxhYmVsOiAnRGVzaWduL1N0eWxlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnVE9UU1RSVUNUUycsXG4gICAgICAgICAgbGFiZWw6ICdUb3RhbCBTdHJ1Y3R1cmVzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnVE9UVU5JVFMnLFxuICAgICAgICAgIGxhYmVsOiAnVG90YWwgVW5pdHMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtZWRpYScsXG4gICAgICBtZWRpYUluZm9zOiBbXVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMj5TZXJ2aWNlczwvaDE+J1xuICAgIH0sXG4gICAgbmV3IEN1c3RvbUNvbnRlbnQoe1xuICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgIGNyZWF0b3I6IChlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgYWNjb3JkaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1hY2NvcmRpb24nKTtcbiAgICAgICAgYWNjb3JkaW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0aW9uLW1vZGUnLCAnc2luZ2xlJyk7XG5cbiAgICAgICAgc2VydmljZXMuZm9yRWFjaChzZXJ2aWNlID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1hY2NvcmRpb24taXRlbScpO1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpdGVtLXRpdGxlJywgc2VydmljZS5ncm91cC50aXRsZSk7XG4gICAgICAgICAgYWNjb3JkaW9uLmFwcGVuZChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vY29uc3QgZiA9IHNlcnZpY2VDaGFuZ2VkLmJpbmQoZS5HcmFwaGljKTtcbiAgICAgICAgLy8gc2V0VGltZW91dChmLCAxMDAwKTtcbiAgICAgICAgY29uc3QgZ3JhcGhpYyA9IGUuZ3JhcGhpYztcbiAgICAgICAgYWNjb3JkaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVBY2NvcmRpb25DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgICAgc2VydmljZUNoYW5nZWQoZ3JhcGhpYywgZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjb3JkaW9uO1xuICAgICAgfVxuICAgIH0pXG4gIF1cbn0pO1xuXG5leHBvcnQgY29uc3QgZmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gIHBvcnRhbEl0ZW06IHtcbiAgICBpZDogJ2QzZDAyZDVlMzUzMjRiNzY5NDY5Yjk5MTIxYzBlOTk2J1xuICB9LFxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9XG59KTtcblxuZXhwb3J0IGNvbnN0IGNvbmRvc1RhYmxlID0gbmV3IEZlYXR1cmVMYXllcih7XG4gIHBvcnRhbEl0ZW06IHtcbiAgICBpZDogJ2QzZDAyZDVlMzUzMjRiNzY5NDY5Yjk5MTIxYzBlOTk2J1xuICB9LFxuICBsYXllcklkOiAxLFxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9LFxuICBwb3B1cFRlbXBsYXRlOiBwb3B1cFRlbXBsYXRlXG59KTtcbmNvbmRvc1RhYmxlLmxvYWQoKTtcbmV4cG9ydCBjb25zdCBhZGRyZXNzVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnZDNkMDJkNWUzNTMyNGI3Njk0NjliOTkxMjFjMGU5OTYnXG4gIH0sXG4gIGxheWVySWQ6IDQsXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbn0pO1xuYWRkcmVzc1RhYmxlLmxvYWQoKTtcbmV4cG9ydCAqIGZyb20gJy4vYXBwJztcbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbmltcG9ydCBTa2V0Y2ggZnJvbSAnZXNyaS93aWRnZXRzL1NrZXRjaCc7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJztcbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XG5pbXBvcnQgVGV4dFN5bWJvbCBmcm9tICdlc3JpL3N5bWJvbHMvVGV4dFN5bWJvbCc7XG5cbmltcG9ydCBDb2xvciBmcm9tICdlc3JpL0NvbG9yJztcbmltcG9ydCB7IG1lYXN1cmVtZW50IH0gZnJvbSAnLi4vLi4vd2lkZ2V0cyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuRHJhdy5EcmF3Vmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBjb250YWluZXI6IHN0cmluZztcbiAgc2tldGNoOiBTa2V0Y2g7XG4gIGdyYXBoaWNzOiBHcmFwaGljc0xheWVyO1xuICBsYWJlbDogc3RyaW5nO1xuICB0ZXh0Q29sb3I6IGVzcmkuQ29sb3I7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdERyYXcoKSB7XG4gICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJyB9KTtcbiAgICB0aGlzLnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNzKTtcblxuICAgIHRoaXMuc2tldGNoID0gbmV3IFNrZXRjaCh7IHZpZXc6IHRoaXMudmlldywgY29udGFpbmVyOiAnc2tldGNoRGl2JywgbGF5ZXI6IHRoaXMuZ3JhcGhpY3MsIGNyZWF0aW9uTW9kZTogJ3NpbmdsZScgfSk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuICAgICh0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wgYXMgYW55KS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sLmNvbG9yID0gbmV3IENvbG9yKFtbMjU1LCAwLCAwLCAwLjVdXSk7XG4gICAgKHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sIGFzIGFueSkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9seWxpbmVTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG5cbiAgICB0aGlzLnNrZXRjaC53YXRjaCgnYWN0aXZlVG9vbCcsIHRvb2wgPT4ge1xuICAgICAgaWYgKHRvb2wgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNrZXRjaC5vbignY3JlYXRlJywgZSA9PiB7XG4gICAgICBpZiAoZS5zdGF0ZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICBtZWFzdXJlbWVudD8ubWVhc3VyZW1lbnQ/LmNsZWFyKCk7XG4gICAgICB9XG4gICAgICBpZiAoZS5zdGF0ZSA9PT0gJ2NvbXBsZXRlJyAmJiB0aGlzLmxhYmVsPy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGxhYmVsUG9pbnQ6IGVzcmkuR2VvbWV0cnkgPSBlLmdyYXBoaWMuZ2VvbWV0cnk7XG4gICAgICAgIGlmIChlLmdyYXBoaWMuZ2VvbWV0cnkudHlwZSA9PT0gJ3BvbHlnb24nKSB7XG4gICAgICAgICAgbGFiZWxQb2ludCA9IChlLmdyYXBoaWMuZ2VvbWV0cnkgYXMgZXNyaS5Qb2x5Z29uKS5jZW50cm9pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGcgPSBuZXcgR3JhcGhpYyh7XG4gICAgICAgICAgZ2VvbWV0cnk6IGxhYmVsUG9pbnQsXG4gICAgICAgICAgc3ltYm9sOiBuZXcgVGV4dFN5bWJvbCh7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLmxhYmVsLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMudGV4dENvbG9yLFxuICAgICAgICAgICAgaGFsb0NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgaGFsb1NpemU6IDEsXG4gICAgICAgICAgICB4b2Zmc2V0OiAnNXB4JyxcbiAgICAgICAgICAgIHlvZmZzZXQ6ICc1cHgnLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogJ3JpZ2h0J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmFkZChnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBDb2xvciBmcm9tICdlc3JpL0NvbG9yJztcbmltcG9ydCBEcmF3Vmlld01vZGVsIGZyb20gJy4vRHJhdy9EcmF3Vmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBEcmF3UHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgZHJhdy1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5EcmF3JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXcgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5sYWJlbCcpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudGV4dENvbG9yJylcbiAgdGV4dENvbG9yOiBDb2xvcjtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBEcmF3Vmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBEcmF3Vmlld01vZGVsID0gbmV3IERyYXdWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogRHJhd1Byb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIF9kcmF3VXBkYXRlZCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMudmlld01vZGVsLnNrZXRjaCkge1xuICAgICAgdGhpcy52aWV3TW9kZWwuaW5pdERyYXcoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGZpbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsbCcpO1xuICAgIGZpbGw/LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnI2ZmMDAwMCcpO1xuICAgIGZpbGw/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVDb2xvckNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGhleDogc3RyaW5nID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgICAgdGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgIH0pO1xuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGluZScpO1xuICAgIGxpbmU/LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnI2ZmMDAwMCcpO1xuICAgIGxpbmU/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVDb2xvckNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGhleDogc3RyaW5nID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlsaW5lU3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wgYXMgZXNyaS5TaW1wbGVNYXJrZXJTeW1ib2wpLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICB9KTtcbiAgICBjb25zdCBvcGFjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wYWNpdHknKTtcbiAgICBvcGFjaXR5Py5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlU2xpZGVyVXBkYXRlJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sLmNvbG9yLmEgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9KTtcbiAgICBjb25zdCB3aWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aWR0aCcpO1xuICAgIHdpZHRoPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlU2xpZGVyVXBkYXRlJywgKGU6IGFueSkgPT4ge1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWxpbmVTeW1ib2wgYXMgZXNyaS5TaW1wbGVMaW5lU3ltYm9sKS53aWR0aCA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wgYXMgZXNyaS5TaW1wbGVNYXJrZXJTeW1ib2wpLm91dGxpbmUud2lkdGggPSBwYXJzZUZsb2F0KFxuICAgICAgICBlLnRhcmdldC52YWx1ZVxuICAgICAgKTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLndpZHRoID0gcGFyc2VGbG9hdChcbiAgICAgICAgZS50YXJnZXQudmFsdWVcbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWwnKTtcbiAgICBsYWJlbD8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUlucHV0Qmx1cicsIChlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0KCdsYWJlbCcsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcbiAgICBjb25zdCB0ZXh0Q29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dENvbG9yJyk7XG4gICAgdGV4dENvbG9yPy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJyNmZjAwMDAnKTtcbiAgICB0ZXh0Q29sb3I/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVDb2xvckNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0KCd0ZXh0Q29sb3InLCBDb2xvci5mcm9tSGV4KGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlclVwZGF0ZT17dGhpcy5fZHJhd1VwZGF0ZWR9IGlkPVwic2tldGNoRGl2XCI+PC9kaXY+XG4gICAgICAgIDxjYWxjaXRlLWJsb2NrIGhlYWRpbmc9XCJTZXR0aW5nc1wiIG9wZW4gY29sbGFwc2libGU+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiQ29sb3JcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBGaWxsIENvbG9yIDxjYWxjaXRlLWNvbG9yIGlkPVwiZmlsbFwiIGhpZGVDaGFubmVscyBoaWRlU2F2ZWQgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBzY2FsZT1cInNcIj48L2NhbGNpdGUtY29sb3I+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgTGluZSBDb2xvciA8Y2FsY2l0ZS1jb2xvciBpZD1cImxpbmVcIiBoaWRlQ2hhbm5lbHMgaGlkZVNhdmVkIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgc2NhbGU9XCJzXCI+PC9jYWxjaXRlLWNvbG9yPlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgIDwvY2FsY2l0ZS1ibG9jay1zZWN0aW9uPlxuICAgICAgICAgIDxjYWxjaXRlLWJsb2NrLXNlY3Rpb24gdGV4dD1cIkZpbGwgT3BhY2l0eVwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIE9wYWNpdHk8Y2FsY2l0ZS1zbGlkZXIgc2NhbGU9XCJzXCIgaWQ9XCJvcGFjaXR5XCIgbWF4PVwiMVwiIG1pbj1cIjBcIiB2YWx1ZT1cIjAuNVwiIHN0ZXA9XCIwLjFcIj48L2NhbGNpdGUtc2xpZGVyPlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgIDwvY2FsY2l0ZS1ibG9jay1zZWN0aW9uPlxuICAgICAgICAgIDxjYWxjaXRlLWJsb2NrLXNlY3Rpb24gdGV4dD1cIk91dGxpbmVcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBXaWR0aCA8Y2FsY2l0ZS1zbGlkZXIgaWQ9XCJ3aWR0aFwiIG1heD1cIjEwXCIgbWluPVwiMFwiIHZhbHVlPVwiMVwiIHN0ZXA9XCIwLjVcIj48L2NhbGNpdGUtc2xpZGVyPlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgIDwvY2FsY2l0ZS1ibG9jay1zZWN0aW9uPlxuICAgICAgICAgIDxjYWxjaXRlLWJsb2NrLXNlY3Rpb24gdGV4dD1cIkxhYmVsaW5nXCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgTGFiZWwgPGNhbGNpdGUtaW5wdXQgc2NhbGU9XCJzXCIgaWQ9XCJsYWJlbFwiIHR5cGU9XCJ0ZXh0YXJlYVwiPjwvY2FsY2l0ZS1pbnB1dD5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBUZXh0IENvbG9yXG4gICAgICAgICAgICAgIDxjYWxjaXRlLWNvbG9yIGlkPVwidGV4dENvbG9yXCIgaGlkZUNoYW5uZWxzIGhpZGVTYXZlZCBhcHBlYXJhbmNlPVwibWluaW1hbFwiIHNjYWxlPVwic1wiPjwvY2FsY2l0ZS1jb2xvcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgPC9jYWxjaXRlLWJsb2NrPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuaW1wb3J0IFNrZXRjaCBmcm9tICdlc3JpL3dpZGdldHMvU2tldGNoJztcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgeyBtZWFzdXJlbWVudCB9IGZyb20gJy4uLy4uL3dpZGdldHMnO1xuaW1wb3J0IGdlb21ldHJ5RW5naW5lIGZyb20gJ2VzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmUnO1xuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5TZWxlY3QuU2VsZWN0Vmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdFZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3NrZXRjaCcsIHRoaXMuaW5pdFNrZXRjaC5iaW5kKHRoaXMpKTtcbiAgfVxuICBza2V0Y2g6IGVzcmkuU2tldGNoO1xuICBidWZmZXJEaXN0YW5jZTogbnVtYmVyO1xuICBncmFwaGljczogR3JhcGhpY3NMYXllcjtcblxuICBAcHJvcGVydHkoKSBnZW9tZXRyeTogZXNyaS5HZW9tZXRyeTtcbiAgaW5pdFNrZXRjaCgpIHtcbiAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnIH0pO1xuICAgIHRoaXMudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MpO1xuICAgIHRoaXMuc2tldGNoID0gbmV3IFNrZXRjaCh7XG4gICAgICB2aWV3OiB0aGlzLnZpZXcsXG4gICAgICBjb250YWluZXI6ICdzZWxlY3RXaWRnZXQnLFxuICAgICAgbGF5ZXI6IHRoaXMuZ3JhcGhpY3MsXG4gICAgICBjcmVhdGlvbk1vZGU6ICdzaW5nbGUnXG4gICAgfSk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnVwZGF0ZU9uR3JhcGhpY0NsaWNrID0gZmFsc2U7XG4gICAgdGhpcy5za2V0Y2gub24oJ2NyZWF0ZScsIGV2ID0+IHtcbiAgICAgIGlmIChldi5zdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB0aGlzLmdyYXBoaWNzLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAodGhpcy5idWZmZXJEaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICBjb25zdCBnID0gZ2VvbWV0cnlFbmdpbmUuZ2VvZGVzaWNCdWZmZXIoZXYuZ3JhcGhpYy5nZW9tZXRyeSwgdGhpcy5idWZmZXJEaXN0YW5jZSwgJ2ZlZXQnKTtcbiAgICAgICAgICAvL3Byb3BlcnR5U2VhcmNoLmdlb21ldHJ5ID0gZyBhcyBfX2VzcmkuUG9seWdvbjtcbiAgICAgICAgICBldi5ncmFwaGljLmdlb21ldHJ5ID0gZyBhcyBfX2VzcmkuUG9seWdvbjtcbiAgICAgICAgICB0aGlzLmdyYXBoaWNzLmFkZChldi5ncmFwaGljKTtcbiAgICAgICAgICBldi5ncmFwaGljLnN5bWJvbCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgICAgICAgICBzdHlsZTogJ25vbmUnLFxuICAgICAgICAgICAgb3V0bGluZTogeyBzdHlsZTogJ3Nob3J0LWRhc2gnLCB3aWR0aDogMi41LCBjb2xvcjogWzIyMSwgMjIxLCAyMjEsIDFdIH0sXG4gICAgICAgICAgICBjb2xvcjogbmV3IENvbG9yKFsyNTUsIDI0MywgMTMsIDAuMjVdKVxuICAgICAgICAgIH0gYXMgYW55O1xuICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBldi5ncmFwaGljLmdlb21ldHJ5IGFzIGVzcmkuR2VvbWV0cnk7XG4gICAgICAgICAgdGhpcy52aWV3LmdvVG8oZXYuZ3JhcGhpYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IGV2LmdyYXBoaWMuZ2VvbWV0cnkgYXMgZXNyaS5HZW9tZXRyeTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2LnN0YXRlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNrZXRjaC53YXRjaCgnYWN0aXZlVG9vbCcsIHRvb2wgPT4ge1xuICAgICAgaWYgKHRvb2wgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gICAgdGhpcy5zZXQoJ2J1ZmZlckRpc3RhbmNlJywgMCk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IFNlbGVjdFZpZXdNb2RlbCBmcm9tICcuL1NlbGVjdC9TZWxlY3RWaWV3TW9kZWwnO1xuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBsYXllcj86IGVzcmkuRmVhdHVyZUxheWVyO1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBzZWxlY3QtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuU2VsZWN0JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxheWVyJylcbiAgbGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLnNrZXRjaCcpXG4gIHNrZXRjaDogZXNyaS5Ta2V0Y2g7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2UnKVxuICBidWZmZXJEaXN0YW5jZTogbnVtYmVyO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IFNlbGVjdFZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogU2VsZWN0Vmlld01vZGVsID0gbmV3IFNlbGVjdFZpZXdNb2RlbCgpO1xuICBfc2tldGNoQ3JlYXRlZCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMudmlld01vZGVsLnNrZXRjaCkge1xuICAgICAgdGhpcy52aWV3TW9kZWwuaW5pdFNrZXRjaCgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IFNlbGVjdFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldjogYW55KSB7XG4gICAgdGhpcy5zZXQoJ2J1ZmZlckRpc3RhbmNlJywgcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3REaXYgY2FsY2l0ZS1pbnB1dCcpPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGV2OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGV2KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJVcGRhdGU9e3RoaXMuX3NrZXRjaENyZWF0ZWR9IGlkPVwic2VsZWN0V2lkZ2V0XCI+PC9kaXY+XG4gICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgIEJ1ZmZlciBEaXN0YW5jZSAoZmVldClcbiAgICAgICAgICA8Y2FsY2l0ZS1pbnB1dFxuICAgICAgICAgICAgc2NhbGU9XCJzXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICBtYXg9XCIyMDAwXCJcbiAgICAgICAgICAgIHN0ZXA9XCI1MFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy52aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2V9XG4gICAgICAgICAgPjwvY2FsY2l0ZS1pbnB1dD5cbiAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInO1xuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbmltcG9ydCBCYXNlTWFwR2FsbGVyeSBmcm9tICdlc3JpL3dpZGdldHMvQmFzZW1hcEdhbGxlcnknO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkJhc2VNYXBzLkJhc2VNYXBzVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNYXBzVmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgYmFzZW1hcHM6IEJhc2VNYXBHYWxsZXJ5O1xuICBpbWFnZXM6IEJhc2VNYXBHYWxsZXJ5O1xuXG4gIGFjdGl2ZUJhc2VtYXA6IGVzcmkuQmFzZW1hcDtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjaGFuZ2VQcm9wZXJ0eUxpbmVzID0gKGJhc2VtYXA6IGVzcmkuQmFzZW1hcCkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5TGF5ZXI6IEZlYXR1cmVMYXllciA9IHRoaXMudmlldy5tYXAuYWxsTGF5ZXJzLmZpbmQobGF5ZXIgPT4ge1xuICAgICAgcmV0dXJuIGxheWVyLnR5cGUgPT09ICdmZWF0dXJlJyAmJiBsYXllci50aXRsZSA9PT0gJ1Byb3BlcnR5JztcbiAgICB9KSBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgY29uc3QgbmV3UmVuZGVyZXI6IGVzcmkuU2ltcGxlUmVuZGVyZXIgPSAocHJvcGVydHlMYXllci5yZW5kZXJlciBhcyBlc3JpLlNpbXBsZVJlbmRlcmVyKS5jbG9uZSgpIGFzIGVzcmkuU2ltcGxlUmVuZGVyZXI7XG4gICAgaWYgKFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkYXJrJykgfHxcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbmlnaHQnKSB8fFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkYXJrJykgfHxcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCcyMCcpIHx8XG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnMTknKVxuICAgICkge1xuICAgICAgKG5ld1JlbmRlcmVyLnN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUuY29sb3IgPSBuZXcgQ29sb3IoWzI1NSwgMjU1LCAyNTUsIDAuNV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAobmV3UmVuZGVyZXIuc3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS5jb2xvciA9IG5ldyBDb2xvcihbMCwgMCwgMCwgMC41XSk7XG4gICAgfVxuICAgIHByb3BlcnR5TGF5ZXIucmVuZGVyZXIgPSBuZXdSZW5kZXJlcjtcbiAgfTtcblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdGhpcy5iYXNlbWFwcyA9IG5ldyBCYXNlTWFwR2FsbGVyeSh7IHZpZXc6IHRoaXMudmlldyB9KTtcbiAgICB0aGlzLnZpZXcud2hlbigoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVByb3BlcnR5TGluZXModGhpcy52aWV3Lm1hcC5iYXNlbWFwKTtcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcubWFwLndhdGNoKCdiYXNlbWFwJywgKGJhc2VtYXA6IGVzcmkuQmFzZW1hcCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VQcm9wZXJ0eUxpbmVzKGJhc2VtYXApO1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXMnKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAgPSB0aGlzLnZpZXcubWFwLmJhc2VtYXA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFN3aXRjaCcpPy5yZW1vdmVBdHRyaWJ1dGUoJ3N3aXRjaGVkJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBibSA9IHRoaXMuaW1hZ2VzLnZpZXdNb2RlbC5pdGVtcy5maW5kKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5iYXNlbWFwLnRpdGxlID09PSB0aGlzLnZpZXcubWFwLmJhc2VtYXAudGl0bGU7XG4gICAgICB9KTtcbiAgICAgIGlmIChibSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTd2l0Y2gnKT8uaGFzQXR0cmlidXRlKCdzd2l0Y2hlZCcpKSB7XG4gICAgICAgIHRoaXMudmlldy5tYXAuYWRkTWFueSh0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy50b0FycmF5KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xuICAgICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFjdGl2ZUJhc2VtYXAgPSB0aGlzLnZpZXcubWFwLmJhc2VtYXA7XG4gICAgdGhpcy5pbWFnZXMgPSBuZXcgQmFzZU1hcEdhbGxlcnkoe1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgc291cmNlOiB7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgaWQ6ICc0OTIzODY3NTlkMjY0ZDQ5OTQ4YmY3ZjgzOTU3ZGRiOSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlaGlkZScsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBqc29uID0gKHZpZXcubWFwIGFzIGFueSkudG9KU09OKCk7XG4gICAgICBqc29uLmluaXRpYWxTdGF0ZS52aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkgPSB2aWV3LmV4dGVudDtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hcHMnLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XG4gICAgfSk7XG4gIH1cbiAgdG9nZ2xlQ29udGVudCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSAnbWFwcycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZCcpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlc0l0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHNJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBCYXNlTWFwc1ZpZXdNb2RlbCBmcm9tICcuL0Jhc2VNYXBzL0Jhc2VNYXBzVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXNlTWFwc1Byb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGJhc2VtYXBzLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkJhc2VNYXBzJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNYXBzIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5iYXNlbWFwcycpXG4gIGJhc2VtYXBzOiBlc3JpLkJhc2VtYXBHYWxsZXJ5O1xuICBAYWxpYXNPZigndmlld01vZGVsLmltYWdlcycpXG4gIGltYWdlczogZXNyaS5CYXNlbWFwR2FsbGVyeTtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBCYXNlTWFwc1ZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogQmFzZU1hcHNWaWV3TW9kZWwgPSBuZXcgQmFzZU1hcHNWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogQmFzZU1hcHNQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgX2NyZWF0ZU1hcHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuYmFzZW1hcHMpIHtcbiAgICAgIHRoaXMuYmFzZW1hcHMuY29udGFpbmVyID0gJ21hcHMnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZUltYWdlcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgIHRoaXMuaW1hZ2VzLmNvbnRhaW5lciA9ICdpbWFnZXMnO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlU3dpdGNoQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3N3aXRjaGVkJykgIT0gJycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGNvbnNvbGUubG9nKCdhZGQnKTtcbiAgICAgIHRoaXMudmlldy5tYXAuYWRkTWFueSh0aGlzLnZpZXdNb2RlbC5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMudG9BcnJheSgpLCAwKTtcbiAgICAgIHRoaXMudmlldy5tYXAuYmFzZW1hcC5yZWZlcmVuY2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIGxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy52aWV3Lm1hcC5sYXllcnNcbiAgICAgICAgLmZpbHRlcihsYXllciA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5pbmNsdWRlcyhsYXllcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBsYXllci5vcGFjaXR5ID0gMC41O1xuICAgICAgICAgIGxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgdGhpcy52aWV3Lm1hcC5iYXNlbWFwLnJlZmVyZW5jZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgbGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xuICAgICAgICB0aGlzLnZpZXcubWFwLnJlbW92ZSh0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlU2xpZGVyQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IGxheWVycyA9IHRoaXMudmlldy5tYXAubGF5ZXJzXG4gICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXA/LmJhc2VMYXllcnMuaW5jbHVkZXMobGF5ZXIpO1xuICAgICAgfSlcbiAgICAgIC50b0FycmF5KCk7XG4gICAgbGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgbGF5ZXIub3BhY2l0eSA9IHBhcnNlRmxvYXQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcbiAgICB9KTtcbiAgfTtcblxuICBfc2xpZGVyQ3JlYXRlZCA9IChlOiBhbnkpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpXG4gICAgICA/LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjYWxjaXRlU2xpZGVyVXBkYXRlJyxcbiAgICAgICAgdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2UuYmluZCh7IGJhc2VtYXA6IHRoaXMuYmFzZW1hcHMsIHZpZXc6IHRoaXMudmlldyB9KVxuICAgICAgKTtcbiAgfTtcbiAgX2JsZW5kQ3JlYXRlZCA9IChlOiBhbnkpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFN3aXRjaCcpXG4gICAgICA/LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjYWxjaXRlU3dpdGNoQ2hhbmdlJyxcbiAgICAgICAgdGhpcy5oYW5kbGVTd2l0Y2hDaGFuZ2UuYmluZCh7IGJhc2VtYXA6IHRoaXMuYmFzZW1hcHMsIHZpZXc6IHRoaXMudmlldyB9KVxuICAgICAgKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZCcpPy5yZW1vdmVBdHRyaWJ1dGUoJ3N3aXRjaGVkJyk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jhc2VtYXBEaXYgY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtJyk7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVSYWRpb0dyb3VwSXRlbUNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2FuIEkgZ2V0IGNoZWNrZWQgYW5kIHZhbHVlIGxpa2UgdGhpcz9cbiAgICAgICAgaWYgKGUudGFyZ2V0Py5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy52aWV3TW9kZWwudG9nZ2xlQ29udGVudChlLnRhcmdldD8udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImhpZGRlblwiIGlkPVwiYmxlbmRcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1zd2l0Y2ggYWZ0ZXJDcmVhdGU9e3RoaXMuX2JsZW5kQ3JlYXRlZH0gaWQ9XCJibGVuZFN3aXRjaFwiPjwvY2FsY2l0ZS1zd2l0Y2g+IEJsZW5kXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxjYWxjaXRlLXNsaWRlclxuICAgICAgICAgIGFmdGVyQ3JlYXRlPXt0aGlzLl9zbGlkZXJDcmVhdGVkfVxuICAgICAgICAgIGNsYXNzPVwiaGlkZGVuXCJcbiAgICAgICAgICBpZD1cImJsZW5kU2xpZGVyXCJcbiAgICAgICAgICB2YWx1ZT1cIjAuNVwiXG4gICAgICAgICAgbWF4PVwiMVwiXG4gICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgc3RlcD1cIjAuMVwiXG4gICAgICAgID48L2NhbGNpdGUtc2xpZGVyPlxuXG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZU1hcHN9IGlkPVwibWFwc1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVJbWFnZXN9IGlkPVwiaW1hZ2VzXCIgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSBjaGVja2VkIHZhbHVlPVwibWFwc1wiIGlkPVwibWFwc0l0ZW1cIj5cbiAgICAgICAgICAgIE1hcHNcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHZhbHVlPVwiaW1hZ2VzXCIgaWQ9XCJpbWFnZXNJdGVtXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICBJbWFnZXJ5XG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IExheWVyTGlzdCBmcm9tICdlc3JpL3dpZGdldHMvTGF5ZXJMaXN0JztcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTGF5ZXJzLkxheWVyc1ZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllcnNWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBsYXllckxpc3Q6IGVzcmkuTGF5ZXJMaXN0O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnNvbGUubG9nKHZpZXcuc2NhbGUpO1xuICAgIHRoaXMubGF5ZXJMaXN0ID0gbmV3IExheWVyTGlzdCh7XG4gICAgICB2aWV3LFxuICAgICAgY29udGFpbmVyOiAnbGF5ZXJEaXYnLFxuICAgICAgbGlzdEl0ZW1DcmVhdGVkRnVuY3Rpb246IGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGV2ZW50Lml0ZW07XG4gICAgICAgIGlmIChpdGVtLmxheWVyLnR5cGUgIT0gJ2dyb3VwJykge1xuICAgICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtc2xpZGVyJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWluJywgJzAnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtYXgnLCAnMTAwJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWluLWxhYmVsJywgJzAlJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWF4LWxhYmVsJywgJzEwMCUnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdsYWJlbC1oYW5kbGVzJywgJycpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgKGl0ZW0/LmxheWVyLm9wYWNpdHkgKiAxMDApLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpdGVtLmxheWVyLmlkKTtcbiAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVNsaWRlclVwZGF0ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHZpZXcubWFwLmZpbmRMYXllckJ5SWQoKGV2ZW50LnRhcmdldCBhcyBhbnkpLmdldEF0dHJpYnV0ZSgnZGF0YScpKS5vcGFjaXR5ID1cbiAgICAgICAgICAgICAgcGFyc2VJbnQoKGV2ZW50Py50YXJnZXQgYXMgYW55KT8uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKSAvIDEwMDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpdGVtLnBhbmVsID0ge1xuICAgICAgICAgICAgY29udGVudDogW3NsaWRlciwgJ2xlZ2VuZCddLFxuICAgICAgICAgICAgb3BlbjogaXRlbS5sYXllci52aXNpYmxlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXRlbS5sYXllci50aXRsZSA9PT0gJ1Byb3BlcnR5Jykge1xuICAgICAgICAgICAgaXRlbS5hY3Rpb25zU2VjdGlvbnMgPSBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ1Nob3cgTGFiZWxzJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICd0b2dnbGUnLFxuICAgICAgICAgICAgICAgICAgaWQ6ICdwcm9wZXJ0eS1sYWJlbHMnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ubGF5ZXIubGFiZWxzVmlzaWJsZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxheWVyTGlzdC5vbigndHJpZ2dlci1hY3Rpb24nLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQuYWN0aW9uLmlkID09PSAncHJvcGVydHktbGFiZWxzJykge1xuICAgICAgICAoZXZlbnQuaXRlbS5sYXllciBhcyBlc3JpLkZlYXR1cmVMYXllcikubGFiZWxzVmlzaWJsZSA9IChldmVudC5hY3Rpb24gYXMgZXNyaS5BY3Rpb25Ub2dnbGUpLnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBMYXllcnNWaWV3TW9kZWwgZnJvbSAnLi9MYXllcnMvTGF5ZXJzVmlld01vZGVsJztcbmltcG9ydCBXZWJNYXAgZnJvbSAnZXNyaS9XZWJNYXAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExheWVyc1Byb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGxheWVycy1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5MYXllcnMnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXJzIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubGF5ZXJMaXN0JylcbiAgbGF5ZXJMaXN0OiBlc3JpLkxheWVyTGlzdDtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IExheWVyc1ZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogTGF5ZXJzVmlld01vZGVsID0gbmV3IExheWVyc1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBMYXllcnNQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgZmlsdGVyTGF5ZXJzID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLmxheWVyTGlzdC5vcGVyYXRpb25hbEl0ZW1zLmZvckVhY2goKGl0ZW06IGVzcmkuTGlzdEl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLmxheWVyLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgbGV0IG9wZW4gPSBmYWxzZTtcbiAgICAgICAgKGl0ZW0ubGF5ZXIgYXMgZXNyaS5Hcm91cExheWVyKS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgaWYgKGxheWVyLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGxheWVyLmxpc3RNb2RlID0gJ3Nob3cnO1xuICAgICAgICAgICAgb3BlbiA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheWVyLmxpc3RNb2RlID0gJ2hpZGUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgaXRlbS5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjbGF5ZXJEaXZfJHsoaXRlbSBhcyBhbnkpLnVpZH1fX3RpdGxlYClcbiAgICAgICAgICAgID8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW9wZW4pIHtcbiAgICAgICAgICBpdGVtLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCNsYXllckRpdl8keyhpdGVtIGFzIGFueSkudWlkfV9fdGl0bGVgKVxuICAgICAgICAgICAgPy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLm9wZW4gPSB0cnVlO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgI2xheWVyRGl2XyR7KGl0ZW0gYXMgYW55KS51aWR9X190aXRsZWApXG4gICAgICAgICAgICA/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIF9jcmVhdGVMYXllcnMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGF5ZXJMaXN0KSB7XG4gICAgICB0aGlzLmxheWVyTGlzdC5jb250YWluZXIgPSAnbGF5ZXJXaWRnZXQnO1xuICAgIH1cbiAgfTtcbiAgY2xlYXJDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLmZpbHRlckxheWVycygnJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGF5ZXJTZWFyY2ggLmNhbGNpdGUtaW5wdXQtY2xlYXItYnV0dG9uJyk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGVhckNsaWNrKTtcbiAgfTtcbiAgX2NyZWF0ZVNlYXJjaCA9IChpbnB1dDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyTGF5ZXJzKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlucHV0LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjaXRlLWlucHV0LWNsZWFyLWJ1dHRvbicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xlYXJDbGljayk7XG4gICAgfSk7XG4gIH07XG4gIF9yZXNldCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIG5ldyBXZWJNYXAoeyBwb3J0YWxJdGVtOiAodGhpcy52aWV3Lm1hcCBhcyBlc3JpLldlYk1hcCkucG9ydGFsSXRlbS5jbG9uZSgpIH0pLmxvYWQoKS50aGVuKChtYXA6IFdlYk1hcCkgPT4ge1xuICAgICAgICBtYXAuYWxsTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgIHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkudmlzaWJsZSA9IGxheWVyLnZpc2libGU7XG4gICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgIChsYXllciBhcyBlc3JpLkdyb3VwTGF5ZXIpLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgICAgdGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKS52aXNpYmxlID0gbGF5ZXIudmlzaWJsZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBzdGlja3lcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1pbnB1dFxuICAgICAgICAgICAgY2xlYXJhYmxlXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbHRlciBieSBsYXllciBuYW1lXCJcbiAgICAgICAgICAgIHNjYWxlPVwic1wiXG4gICAgICAgICAgICBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlU2VhcmNofVxuICAgICAgICAgICAgaWQ9XCJsYXllclNlYXJjaFwiXG4gICAgICAgICAgPjwvY2FsY2l0ZS1pbnB1dD5cbiAgICAgICAgICA8Y2FsY2l0ZS1idXR0b24gaWNvbi1zdGFydD1cInZpZXdIaWRlXCIgc2NhbGU9XCJzXCIgY29sb3I9XCJsaWdodFwiIG9uY2xpY2s9e3RoaXMuX3Jlc2V0fT48L2NhbGNpdGUtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVMYXllcnN9IGlkPVwibGF5ZXJXaWRnZXRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Mb2NhdGlvblNlYXJjaC5Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgc2VhcmNoOiBTZWFyY2g7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHRoaXMuc2VhcmNoID0gbmV3IFNlYXJjaCh7IHZpZXc6IHZpZXcsIG1heFN1Z2dlc3Rpb25zOiAzMCwgc2VhcmNoQWxsRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgdGhpcy5zZWFyY2guYWxsU291cmNlcy5vbignYWZ0ZXItYWRkJywgZSA9PiB7XG4gICAgICBpZiAoKGUuaXRlbSBhcyBhbnkpLmxheWVyKSB7XG4gICAgICAgIGUuaXRlbS5uYW1lID0gKGUuaXRlbSBhcyBhbnkpLmxheWVyLnRpdGxlO1xuICAgICAgICBlLml0ZW0ucGxhY2Vob2xkZXIgPSAoZS5pdGVtIGFzIGFueSkubGF5ZXIudGl0bGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCBmcm9tICcuL0xvY2F0aW9uU2VhcmNoL0xvY2F0aW9uU2VhcmNoVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblNlYXJjaFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGxvY2F0aW9uc2VhcmNoLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxvY2F0aW9uU2VhcmNoJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uU2VhcmNoIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5zZWFyY2gnKVxuICBzZWFyY2g6IGVzcmkud2lkZ2V0c1NlYXJjaDtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IExvY2F0aW9uU2VhcmNoVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCA9IG5ldyBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBMb2NhdGlvblNlYXJjaFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIF9zZWFyY2hDcmVhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2VhcmNoKSB7XG4gICAgICB0aGlzLnNlYXJjaC5jb250YWluZXIgPSAnbG9jYXRpb25TZWFyY2gnO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fc2VhcmNoQ3JlYXRlfSBpZD1cImxvY2F0aW9uU2VhcmNoXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcbmltcG9ydCBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldyc7XG5pbXBvcnQgTWFwIGZyb20gJ2VzcmkvTWFwJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCB3YXRjaFV0aWxzIGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5PdmVydmlld01hcC5PdmVydmlld01hcFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVydmlld01hcFZpZXdNb2RlbCBleHRlbmRzIGRlY2xhcmVkKEFjY2Vzc29yKSB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIG92ZXJ2aWV3TWFwVmlldzogZXNyaS5NYXBWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG4gIHN0b3BFdnRQcm9wYWdhdGlvbiA9IChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgZGlzYWJsZVpvb21pbmcgPSAodmlldzogYW55KSA9PiB7XG4gICAgdmlldy5wb3B1cC5kb2NrRW5hYmxlZCA9IHRydWU7XG5cbiAgICAvLyBSZW1vdmVzIHRoZSB6b29tIGFjdGlvbiBvbiB0aGUgcG9wdXBcbiAgICB2aWV3LnBvcHVwLmFjdGlvbnMgPSBbXTtcblxuICAgIC8vIHN0b3BzIHByb3BhZ2F0aW9uIG9mIGRlZmF1bHQgYmVoYXZpb3Igd2hlbiBhbiBldmVudCBmaXJlc1xuXG4gICAgLy8gZXhsdWRlIHRoZSB6b29tIHdpZGdldCBmcm9tIHRoZSBkZWZhdWx0IFVJXG4gICAgdmlldy51aS5jb21wb25lbnRzID0gWydhdHRyaWJ1dGlvbiddO1xuXG4gICAgLy8gZGlzYWJsZSBtb3VzZSB3aGVlbCBzY3JvbGwgem9vbWluZyBvbiB0aGUgdmlld1xuICAgIHZpZXcub24oJ21vdXNlLXdoZWVsJywgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuXG4gICAgLy8gZGlzYWJsZSB6b29taW5nIHZpYSBkb3VibGUtY2xpY2sgb24gdGhlIHZpZXdcbiAgICB2aWV3Lm9uKCdkb3VibGUtY2xpY2snLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG5cbiAgICAvLyBkaXNhYmxlIHpvb21pbmcgb3V0IHZpYSBkb3VibGUtY2xpY2sgKyBDb250cm9sIG9uIHRoZSB2aWV3XG4gICAgdmlldy5vbignZG91YmxlLWNsaWNrJywgWydDb250cm9sJ10sIHRoaXMuc3RvcEV2dFByb3BhZ2F0aW9uKTtcblxuICAgIC8vIGRpc2FibGVzIHBpbmNoLXpvb20gYW5kIHBhbm5pbmcgb24gdGhlIHZpZXdcbiAgICB2aWV3Lm9uKCdkcmFnJywgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuXG4gICAgLy8gZGlzYWJsZSB0aGUgdmlldydzIHpvb20gYm94IHRvIHByZXZlbnQgdGhlIFNoaWZ0ICsgZHJhZ1xuICAgIC8vIGFuZCBTaGlmdCArIENvbnRyb2wgKyBkcmFnIHpvb20gZ2VzdHVyZXMuXG4gICAgdmlldy5vbignZHJhZycsIFsnU2hpZnQnXSwgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuICAgIHZpZXcub24oJ2RyYWcnLCBbJ1NoaWZ0JywgJ0NvbnRyb2wnXSwgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuXG4gICAgLy8gcHJldmVudHMgem9vbWluZyB3aXRoIHRoZSArIGFuZCAtIGtleXNcbiAgICB2aWV3Lm9uKCdrZXktZG93bicsIChldmVudDogYW55KSA9PiB7XG4gICAgICBjb25zdCBwcm9oaWJpdGVkS2V5cyA9IFsnKycsICctJywgJ1NoaWZ0JywgJ18nLCAnPSddO1xuICAgICAgY29uc3Qga2V5UHJlc3NlZCA9IGV2ZW50LmtleTtcbiAgICAgIGlmIChwcm9oaWJpdGVkS2V5cy5pbmRleE9mKGtleVByZXNzZWQpICE9PSAtMSkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aWV3O1xuICB9O1xuXG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKHsgYmFzZW1hcDogJ3N0cmVldHMtbmF2aWdhdGlvbi12ZWN0b3InIH0pO1xuICAgIHRoaXMub3ZlcnZpZXdNYXBWaWV3ID0gbmV3IE1hcFZpZXcoeyBtYXA6IG1hcCwgZXh0ZW50OiB2aWV3LmV4dGVudCB9KTtcbiAgICB0aGlzLmRpc2FibGVab29taW5nKHRoaXMub3ZlcnZpZXdNYXBWaWV3KTtcbiAgICB0aGlzLm92ZXJ2aWV3TWFwVmlldy51aS5yZW1vdmUoJ3pvb20nKTtcblxuICAgIGNvbnN0IGdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7XG4gICAgICBnZW9tZXRyeTogbnVsbCxcbiAgICAgIHN5bWJvbDoge1xuICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDAuNV0sXG4gICAgICAgIG91dGxpbmU6IG51bGxcbiAgICAgIH1cbiAgICB9IGFzIGFueSk7XG4gICAgdGhpcy5vdmVydmlld01hcFZpZXcuZ3JhcGhpY3MuYWRkKGdyYXBoaWMpO1xuICAgIHdhdGNoVXRpbHMuaW5pdCh2aWV3LCAnZXh0ZW50JywgKCkgPT4ge1xuICAgICAgZ3JhcGhpYy5nZW9tZXRyeSA9IHZpZXcuZXh0ZW50O1xuICAgIH0pO1xuXG4gICAgd2F0Y2hVdGlscy5pbml0KHZpZXcsICdzdGF0aW9uYXJ5JywgKCkgPT4ge1xuICAgICAgaWYgKHZpZXcuc3RhdGlvbmFyeSkge1xuICAgICAgICB0aGlzLm92ZXJ2aWV3TWFwVmlld1xuICAgICAgICAgIC5nb1RvKHtcbiAgICAgICAgICAgIGNlbnRlcjogdmlldy5jZW50ZXIsXG4gICAgICAgICAgICBzY2FsZTpcbiAgICAgICAgICAgICAgdmlldy5zY2FsZSAqXG4gICAgICAgICAgICAgIDIgKlxuICAgICAgICAgICAgICBNYXRoLm1heCh2aWV3LndpZHRoIC8gdGhpcy5vdmVydmlld01hcFZpZXcud2lkdGgsIHZpZXcuaGVpZ2h0IC8gdGhpcy5vdmVydmlld01hcFZpZXcuaGVpZ2h0KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmUgZ290by1pbnRlcnJ1cHRlZCBlcnJvcnNcbiAgICAgICAgICAgIGlmIChlcnJvci5uYW1lICE9ICd2aWV3OmdvdG8taW50ZXJydXB0ZWQnKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBPdmVydmlld01hcFZpZXdNb2RlbCBmcm9tICcuL092ZXJ2aWV3TWFwL092ZXJ2aWV3TWFwVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBPdmVydmlld01hcFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IG92ZXJ2aWV3bWFwLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLk92ZXJ2aWV3TWFwJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJ2aWV3TWFwIGV4dGVuZHMgZGVjbGFyZWQoV2lkZ2V0KSB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldycpXG4gIG92ZXJ2aWV3TWFwVmlldzogZXNyaS5NYXBWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLm5hbWUnKVxuICBAcmVuZGVyYWJsZSgpXG4gIG5hbWUgPSAnJztcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IE92ZXJ2aWV3TWFwVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBPdmVydmlld01hcFZpZXdNb2RlbCA9IG5ldyBPdmVydmlld01hcFZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBPdmVydmlld01hcFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuICBvdmVydmlld0NyZWF0ZWQgPSAoZGl2OiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIGlmICh0aGlzLm92ZXJ2aWV3TWFwVmlldykge1xuICAgICAgdGhpcy5vdmVydmlld01hcFZpZXcuY29udGFpbmVyID0gZGl2O1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMub3ZlcnZpZXdDcmVhdGVkfSBpZD1cIm92ZXJ2aWV3RGl2XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQ2xlYXIuQ2xlYXJWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXJWaWV3TW9kZWwgZXh0ZW5kcyBkZWNsYXJlZChBY2Nlc3Nvcikge1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IENsZWFyVmlld01vZGVsIGZyb20gJy4vQ2xlYXIvQ2xlYXJWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFyUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQtLWJ1dHRvbiBlc3JpLXdpZGdldCcsXG4gIHRleHQ6ICdlc3JpLWljb24tZm9udC1mYWxsYmFjay10ZXh0JyxcbiAgdHJhc2hJY29uOiAnZXNyaS1pY29uIGVzcmktaWNvbi10cmFzaCcsXG4gIGxvYWRpbmdJY29uOiAnZXNyaS1pY29uLWxvYWRpbmctaW5kaWNhdG9yJyxcbiAgcm90YXRpbmdJY29uOiAnZXNyaS1yb3RhdGluZycsXG4gIHdpZGdldEljb246ICdlc3JpLWljb24tdHJhc2gnLFxuXG4gIC8vIGNvbW1vblxuICBkaXNhYmxlZDogJ2VzcmktZGlzYWJsZWQnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkNsZWFyJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsZWFyIGV4dGVuZHMgZGVjbGFyZWQoV2lkZ2V0KSB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogQ2xlYXJWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IENsZWFyVmlld01vZGVsID0gbmV3IENsZWFyVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IENsZWFyUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG4gIGNsZWFyVGl0bGUgPSAnQ2xlYXInO1xuICByZW5kZXJJY29uID0gKCkgPT4ge1xuICAgIHJldHVybiA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz17dGhpcy5jbGFzc2VzKENTUy50cmFzaEljb24pfSAvPjtcbiAgfTtcbiAgX2NsZWFyID0gKCkgPT4ge1xuICAgIHRoaXMudmlldy5tYXAuYWxsTGF5ZXJzXG4gICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIGxheWVyLnR5cGUgPT09ICdncmFwaGljcyc7XG4gICAgICB9KVxuICAgICAgLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAobGF5ZXIgYXMgZXNyaS5HcmFwaGljc0xheWVyKS5yZW1vdmVBbGwoKTtcbiAgICAgIH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgYmluZD17dGhpc31cbiAgICAgICAgY2xhc3M9e3RoaXMuY2xhc3NlcyhDU1MuYmFzZSl9XG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICBvbmNsaWNrPXt0aGlzLl9jbGVhcn1cbiAgICAgICAgb25rZXlkb3duPXt0aGlzLl9jbGVhcn1cbiAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5jbGVhclRpdGxlfVxuICAgICAgICB0aXRsZT17dGhpcy5jbGVhclRpdGxlfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5yZW5kZXJJY29uKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCIvLyBXaWRnZXRzXG5pbXBvcnQgTGVnZW5kIGZyb20gJ2Vzcmkvd2lkZ2V0cy9MZWdlbmQnO1xuaW1wb3J0IFByaW50IGZyb20gJ2Vzcmkvd2lkZ2V0cy9QcmludCc7XG5pbXBvcnQgQm9va21hcmtzIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Cb29rbWFya3MnO1xuaW1wb3J0IFByb3BlcnR5U2VhcmNoIGZyb20gJy4vd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaCc7XG5pbXBvcnQgQ29vcmRpbmF0ZUNvbnZlcnNpb24gZnJvbSAnZXNyaS93aWRnZXRzL0Nvb3JkaW5hdGVDb252ZXJzaW9uJztcbmltcG9ydCBFeHBhbmQgZnJvbSAnZXNyaS93aWRnZXRzL0V4cGFuZCc7XG5pbXBvcnQgTWVhc3VyZSBmcm9tICcuL3dpZGdldHMvTWVhc3VyZSc7XG5pbXBvcnQgQ29tcGFzcyBmcm9tICdlc3JpL3dpZGdldHMvQ29tcGFzcyc7XG5pbXBvcnQgTG9jYXRlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Mb2NhdGUnO1xuaW1wb3J0IFRyYWNrIGZyb20gJ2Vzcmkvd2lkZ2V0cy9UcmFjayc7XG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICdlc3JpL3dpZGdldHMvRnVsbHNjcmVlbic7XG5cbmltcG9ydCB7IGNvbmRvc1RhYmxlLCBhZGRyZXNzVGFibGUsIGZlYXR1cmVMYXllciB9IGZyb20gJy4vZGF0YS9zZWFyY2gnO1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5pbXBvcnQgRHJhdyBmcm9tICcuL3dpZGdldHMvRHJhdyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vd2lkZ2V0cy9TZWxlY3QnO1xuaW1wb3J0IEJhc2VNYXBzIGZyb20gJy4vd2lkZ2V0cy9CYXNlTWFwcyc7XG5pbXBvcnQgTGF5ZXJzIGZyb20gJy4vd2lkZ2V0cy9MYXllcnMnO1xuaW1wb3J0IExvY2F0aW9uU2VhcmNoIGZyb20gJy4vd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaCc7XG5pbXBvcnQgT3ZlcnZpZXdNYXAgZnJvbSAnLi93aWRnZXRzL092ZXJ2aWV3TWFwJztcbmltcG9ydCBDbGVhciBmcm9tICcuL3dpZGdldHMvQ2xlYXInO1xuLy9pbXBvcnQgTGF5ZXJTZWxlY3QgZnJvbSAnLi93aWRnZXRzL0xheWVyU2VsZWN0JztcblxuZXhwb3J0IGxldCBtZWFzdXJlbWVudDogTWVhc3VyZTtcbmV4cG9ydCBjb25zdCBzZWxlY3Q6IFNlbGVjdCA9IG5ldyBTZWxlY3QoKTtcbmV4cG9ydCBsZXQgbGF5ZXJzOiBMYXllcnM7XG5leHBvcnQgbGV0IGxlZ2VuZDogTGVnZW5kO1xuZXhwb3J0IGxldCBiYXNlbWFwczogQmFzZU1hcHM7XG5leHBvcnQgbGV0IGJvb2ttYXJrczogQm9va21hcmtzO1xuZXhwb3J0IGxldCBsb2NhdGlvblNlYXJjaDogTG9jYXRpb25TZWFyY2g7XG5leHBvcnQgbGV0IGRyYXdXaWRnZXQ6IERyYXc7XG5leHBvcnQgbGV0IHByaW50V2lkZ2V0OiBQcmludDtcbmV4cG9ydCBsZXQgcHJvcGVydHlTZWFyY2g6IFByb3BlcnR5U2VhcmNoO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFdpZGdldChuYW1lOiBzdHJpbmcsIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gIGlmIChuYW1lID09PSAnU2VhcmNoJyAmJiAhcHJvcGVydHlTZWFyY2gpIHtcbiAgICBwcm9wZXJ0eVNlYXJjaCA9IG5ldyBQcm9wZXJ0eVNlYXJjaCh7XG4gICAgICB2aWV3OiB2aWV3LFxuICAgICAgY29uZG9zVGFibGU6IGNvbmRvc1RhYmxlLFxuICAgICAgYWRkcmVzc1RhYmxlOiBhZGRyZXNzVGFibGUsXG4gICAgICBwcm9wZXJ0eUxheWVyOiBmZWF0dXJlTGF5ZXIsXG4gICAgICBjb250YWluZXI6ICdzaWRlRGl2J1xuICAgIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnTGF5ZXJzJyAmJiAhbGF5ZXJzKSB7XG4gICAgbGF5ZXJzID0gbmV3IExheWVycyh7IHZpZXcsIGNvbnRhaW5lcjogJ2xheWVyRGl2JyB9KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ0xlZ2VuZCcgJiYgIWxlZ2VuZCkge1xuICAgIGxlZ2VuZCA9IG5ldyBMZWdlbmQoeyB2aWV3LCBjb250YWluZXI6ICdsZWdlbmREaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnUHJpbnQnICYmICFwcmludFdpZGdldCkge1xuICAgIHByaW50V2lkZ2V0ID0gbmV3IFByaW50KHtcbiAgICAgIHZpZXcsXG4gICAgICBjb250YWluZXI6ICdwcmludERpdicsXG4gICAgICBwcmludFNlcnZpY2VVcmw6XG4gICAgICAgICdodHRwczovL3V0aWxpdHkuYXJjZ2lzb25saW5lLmNvbS9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9VdGlsaXRpZXMvUHJpbnRpbmdUb29scy9HUFNlcnZlci9FeHBvcnQlMjBXZWIlMjBNYXAlMjBUYXNrJ1xuICAgIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnQm9va21hcmtzJyAmJiAhYm9va21hcmtzKSB7XG4gICAgYm9va21hcmtzID0gbmV3IEJvb2ttYXJrcyh7IHZpZXcsIGNvbnRhaW5lcjogJ2Jvb2ttYXJrRGl2JywgZWRpdGluZ0VuYWJsZWQ6IHRydWUgfSk7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gJ0Jhc2VtYXBzJyAmJiAhYmFzZW1hcHMpIHtcbiAgICBiYXNlbWFwcyA9IG5ldyBCYXNlTWFwcyh7IHZpZXcsIGNvbnRhaW5lcjogJ2Jhc2VtYXBEaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnTG9jYXRpb24nICYmICFsb2NhdGlvblNlYXJjaCkge1xuICAgIGxvY2F0aW9uU2VhcmNoID0gbmV3IExvY2F0aW9uU2VhcmNoKHsgdmlldywgY29udGFpbmVyOiAnbG9jYXRpb25EaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnTWVhc3VyZScgJiYgIW1lYXN1cmVtZW50KSB7XG4gICAgbWVhc3VyZW1lbnQgPSBuZXcgTWVhc3VyZSh7IHZpZXcsIGNvbnRhaW5lcjogJ21lYXN1cmVEaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnRHJhdycgJiYgIWRyYXdXaWRnZXQpIHtcbiAgICBkcmF3V2lkZ2V0ID0gbmV3IERyYXcoeyB2aWV3LCBjb250YWluZXI6ICdkcmF3RGl2JyB9KTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRXaWRnZXRzKHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gIC8vY29uc3QgbGF5ZXJTZWxlY3QgPSBuZXcgTGF5ZXJTZWxlY3QoeyB2aWV3OiB2aWV3LCBjb250YWluZXI6ICdsYXllclNlbGVjdENvbnRlbnQnIH0pO1xuXG4gIGNvbnN0IGNvb3JkaW5hdGVzOiBlc3JpLkNvb3JkaW5hdGVDb252ZXJzaW9uID0gbmV3IENvb3JkaW5hdGVDb252ZXJzaW9uKHsgdmlldyB9KTtcbiAgY29uc3QgY29vcmRpbmF0ZXNFeHBhbmQ6IEV4cGFuZCA9IG5ldyBFeHBhbmQoe1xuICAgIGNvbnRlbnQ6IGNvb3JkaW5hdGVzLFxuICAgIG1vZGU6ICdmbG9hdGluZycsXG4gICAgZXhwYW5kSWNvbkNsYXNzOiAnZXNyaS1pY29uLXBhbjInXG4gIH0pO1xuICB2aWV3LnVpLmFkZChjb29yZGluYXRlc0V4cGFuZCwgJ2JvdHRvbS1sZWZ0Jyk7XG5cbiAgdmlldy51aS5hZGQobmV3IENvbXBhc3MoeyB2aWV3OiB2aWV3IH0pLCAndG9wLWxlZnQnKTtcbiAgY29uc3QgbG9jYXRlOiBMb2NhdGUgPSBuZXcgTG9jYXRlKHsgdmlldzogdmlldyB9KTtcbiAgbG9jYXRlLm9uKCdsb2NhdGUtZXJyb3InLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfSk7XG4gIHZpZXcudWkuYWRkKGxvY2F0ZSwgJ3RvcC1sZWZ0Jyk7XG5cbiAgY29uc3QgdHJhY2s6IFRyYWNrID0gbmV3IFRyYWNrKHsgdmlldzogdmlldyB9KTtcbiAgdHJhY2sub24oJ3RyYWNrLWVycm9yJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gIH0pO1xuICB2aWV3LnVpLmFkZCh0cmFjaywgJ3RvcC1sZWZ0Jyk7XG4gIHZpZXcudWkuYWRkKG5ldyBGdWxsc2NyZWVuKHsgdmlldyB9KSwgJ3RvcC1sZWZ0Jyk7XG4gIHZpZXcudWkuYWRkKG5ldyBDbGVhcih7IHZpZXcgfSksICd0b3AtbGVmdCcpO1xuXG4gIGNvbnN0IG92ZXJ2aWV3TWFwID0gbmV3IE92ZXJ2aWV3TWFwKHsgdmlldyB9KTtcbiAgY29uc3Qgb3ZlcnZpZXdFeHBhbmQ6IEV4cGFuZCA9IG5ldyBFeHBhbmQoe1xuICAgIGNvbnRlbnQ6IG92ZXJ2aWV3TWFwLFxuICAgIG1vZGU6ICdmbG9hdGluZycsXG4gICAgZXhwYW5kSWNvbkNsYXNzOiAnZXNyaS1pY29uLW92ZXJ2aWV3LWFycm93LXRvcC1sZWZ0J1xuICB9KTtcbiAgb3ZlcnZpZXdFeHBhbmQud2F0Y2goJ2V4cGFuZGVkJywgZXhwYW5kZWQgPT4ge1xuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgb3ZlcnZpZXdNYXAudmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldy5nb1RvKHtcbiAgICAgICAgY2VudGVyOiB2aWV3LmNlbnRlcixcbiAgICAgICAgc2NhbGU6XG4gICAgICAgICAgdmlldy5zY2FsZSAqXG4gICAgICAgICAgMiAqXG4gICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICB2aWV3LndpZHRoIC8gb3ZlcnZpZXdNYXAudmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldy53aWR0aCxcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0IC8gb3ZlcnZpZXdNYXAudmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldy5oZWlnaHRcbiAgICAgICAgICApXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICB2aWV3LnVpLmFkZChvdmVydmlld0V4cGFuZCwgJ2JvdHRvbS1yaWdodCcpO1xuXG4gIHNlbGVjdC5jb250YWluZXIgPSAnc2VsZWN0RGl2JztcbiAgc2VsZWN0LnZpZXcgPSB2aWV3O1xuICBzZWxlY3QubGF5ZXIgPSBmZWF0dXJlTGF5ZXI7XG4gIHJldHVybiB2aWV3O1xufVxuIiwiZXhwb3J0IGNvbnN0IGluaXRQYW5lbEhlYWRlcnMgPSAoKSA9PiB7XG4gIC8vb3ZlcnJpZGUgQ1NTIGZvciBjYWxjaXRlIHBhbmVsIGhlYWRlclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsIGRpdicpLmZvckVhY2gocGFuZWwgPT4ge1xuICAgIGlmIChwYW5lbC5zbG90ID09PSAnaGVhZGVyLXRyYWlsaW5nLWNvbnRlbnQnKSB7XG4gICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3c7Jyk7XG4gICAgfVxuICB9KTtcbiAgd2luZG93Lm9ucmVzaXplID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBpZiAoKGV2ZW50Py50YXJnZXQgYXMgYW55KT8uaW5uZXJXaWR0aCA+PSA1MDApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIWl0ZW0uaGFzQXR0cmlidXRlKCdkaXNtaXNzZWQnKSkge1xuICAgICAgICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5tYXhpbWl6ZScpPy5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21pbmltaXplJykge1xuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNDhweCknKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMzUwcHgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdkaXNtaXNzZWQnKSkge1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDBweCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVQYW5lbERpc21pc3NlZENoYW5nZScsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIC8vaGFuZGxlIHBhbmVsIG1heGltaXplL21pbmltaXplXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXhpbWl6ZScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21heGltaXplJykge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtaW5pbWl6ZScpO1xuICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ21heGltaXplZCcpOyAvLy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gOTZweCknKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbC5sZWZ0Om5vdCguaGlkZGVuKScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnZGlzbWlzc2VkJywgJycpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1hY3Rpb25bc2lkZT1cImxlZnRcIl1bYWN0aXZlXScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaWNvbicpID09PSAnbWluaW1pemUnKSB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpY29uJywgJ21heGltaXplJyk7XG4gICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnbWF4aW1pemVkJyk7XG4gICAgICAgIC8vaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDozNTBweCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0UGFuZWxzID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBjb25zdCBpOiBIVE1MRWxlbWVudCA9IGl0ZW0/LnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChpKSB7XG4gICAgICBpLmlubmVySFRNTCArPVxuICAgICAgICAnPHN0eWxlPi5jb250ZW50LWNvbnRhaW5lciB7IGhlaWdodDogMTAwJTsgfSAuY29udGFpbmVyOmZvY3VzLCAuY29udGVudC1jb250YWluZXI6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9PC9zdHlsZT4nO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiBmYWxzZSwgc3VidHJlZTogZmFsc2UgfTtcbiAgICBjb25zdCBjYWxsYmFjayA9IChtdXRhdGlvbnNMaXN0OiBhbnlbXSkgPT4ge1xuICAgICAgLy8gVXNlIHRyYWRpdGlvbmFsICdmb3IgbG9vcHMnIGZvciBJRSAxMVxuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG4gICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2Rpc21pc3NlZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWN0aW9uLWJhciBjYWxjaXRlLWFjdGlvbicpO1xuXG4gICAgICAgICAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhY3Rpb24udGV4dCA9PT0gKG11dGF0aW9uLnRhcmdldCBhcyBhbnkpLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKChtdXRhdGlvbi50YXJnZXQgYXMgYW55KS5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYWN0aW9uLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNTAwKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgobXV0YXRpb24udGFyZ2V0IGFzIGFueSkuaGFzQXR0cmlidXRlKCdkaXNtaXNzZWQnKSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKG11dGF0aW9uLnRhcmdldCBhcyBhbnkpLnRpdGxlLCAnZGlzbWlzc2VkJyk7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0RpdicpPy5jbGFzc0xpc3QucmVtb3ZlKCdiZWxvdycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygobXV0YXRpb24udGFyZ2V0IGFzIGFueSkudGl0bGUsICdub3QgZGlzbWlzc2VkJyk7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0RpdicpPy5jbGFzc0xpc3QuYWRkKCdiZWxvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGl0ZW0sIGNvbmZpZyk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCB7IGluaXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXRzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5BY3Rpb25CYXIuQWN0aW9uQmFyVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbkJhclZpZXdNb2RlbCBleHRlbmRzIGRlY2xhcmVkKEFjY2Vzc29yKSB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBzaWRlOiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHJlYWR5ID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIGFjdGlvbnM6IE5vZGVMaXN0T2Y8RWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICdzaWRlJywgdGhpcy5zaWRlU2V0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVvcmRlclBhbmVscyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy52aWV3KSB7XG4gICAgICAvL3RoaXMuYWN0aW9ucy5mb3JFYWNoKCgpID0+IHtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsLmxlZnQnKS5mb3JFYWNoKChwYW5lbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMDApIHtcbiAgICAgICAgICBwYW5lbC5wYXJlbnRFbGVtZW50Py5pbnNlcnRCZWZvcmUocGFuZWwsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3RGl2JykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhbmVsLnBhcmVudEVsZW1lbnQ/Lmluc2VydEJlZm9yZShwYW5lbCwgZG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3RGl2Jyk/Lm5leHRFbGVtZW50U2libGluZyBhcyBhbnkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vfSk7XG4gICAgfVxuICB9O1xuXG4gIGluaXRBY3Rpb25zID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uczogTm9kZUxpc3RPZjxhbnk+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1hY3Rpb24tYmFyIGNhbGNpdGUtYWN0aW9uJyk7XG4gICAgICBpZiAoYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcblxuICAgICAgICB0aGlzLmFjdGlvbnM/LmZvckVhY2goKGFjdGlvbjogRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGFjdGlvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUFjdGlvbihlLnRhcmdldCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaW5pdFdpZGdldChlLnRhcmdldC50ZXh0LCB0aGlzLnZpZXcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaCgoYTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhLnRleHQgIT0gZS50YXJnZXQudGV4dCkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDAwKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYS5nZXRBdHRyaWJ1dGUoJ3NpZGUnKSA9PT0gYWN0aW9uLmdldEF0dHJpYnV0ZSgnc2lkZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGEucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYS5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhY3Rpb24uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDUwMCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLWFjdGlvblt0ZXh0PVwiU2VhcmNoXCInKT8uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIHRvZ2dsZUFjdGlvbiA9IChhY3Rpb246IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMDApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wYW5lbC4ke2FjdGlvbi5nZXRBdHRyaWJ1dGUoJ3NpZGUnKSBhcyBzdHJpbmd9YCkuZm9yRWFjaCgocGFuZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAoYWN0aW9uIGFzIGFueSkudGV4dCkge1xuICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhbmVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgICAgICAgaWYgKCFwYW5lbC5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA1MDApIHtcbiAgICAgICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMzUwcHgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgaWYgKHBhbmVsLnRpdGxlICE9ICdNZWFzdXJlJykge1xuICAgICAgICAgICAgICAvL21lYXN1cmVtZW50Lm1lYXN1cmVtZW50LmNsZWFyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvL21lYXN1cmVtZW50Lm1lYXN1cmVPcGVuZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWwnKS5mb3JFYWNoKChwYW5lbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKHBhbmVsLnRpdGxlICE9IChhY3Rpb24gYXMgYW55KS50ZXh0KSB7XG4gICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocGFuZWwpO1xuICAgICAgICAgIHBhbmVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgICAgICAgY29uc29sZS5sb2cocGFuZWwpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHBhbmVsLnRpdGxlKTtcbiAgICAgICAgICBpZiAoIXBhbmVsLmhhc0F0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDUwMCkge1xuICAgICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNDhweCknKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiAzNTBweCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBpZiAocGFuZWwudGl0bGUgIT0gJ01lYXN1cmUnKSB7XG4gICAgICAgICAgICAgIC8vbWVhc3VyZW1lbnQubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vbWVhc3VyZW1lbnQubWVhc3VyZU9wZW5lZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBlbmFibGVBY3Rpb25iYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5yZW9yZGVyUGFuZWxzKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWN0aW9uLWJhciBjYWxjaXRlLWFjdGlvbicpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgfSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgfTtcbiAgc2lkZVNldChzaWRlOiBzdHJpbmcpIHtcbiAgICBpZiAoc2lkZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rvb2xHcm91cCcpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgaWYgKHNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEdyb3VwJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICBjb25zdCBhY3Rpb25zOiBOb2RlTGlzdE9mPGFueT4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFjdGlvbi1iYXIgY2FsY2l0ZS1hY3Rpb24nKTtcbiAgICBpZiAoYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgfVxuICAgIC8vIHRoaXMuYWN0aW9ucz8uZm9yRWFjaCgoYWN0aW9uOiBFbGVtZW50KSA9PiB7XG4gICAgLy8gICBhY3Rpb24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IGFueSkgPT4ge1xuICAgIC8vXG5cbiAgICAvLyAgICAgdGhpcy50b2dnbGVBY3Rpb24oZS50YXJnZXQpO1xuICAgIC8vICAgICBpbml0V2lkZ2V0KGUudGFyZ2V0LnRleHQsIHRoaXMudmlldyk7XG4gICAgLy8gICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKChhOiBhbnkpID0+IHtcbiAgICAvLyAgICAgICBpZiAoYS50ZXh0ICE9IGUudGFyZ2V0LnRleHQpIHtcbiAgICAvLyAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDAwKSB7XG4gICAgLy8gICAgICAgICAgIGlmIChhLmdldEF0dHJpYnV0ZSgnc2lkZScpID09PSBhY3Rpb24uZ2V0QXR0cmlidXRlKCdzaWRlJykpIHtcbiAgICAvLyAgICAgICAgICAgICBhLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgLy8gICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICBhY3Rpb24uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gICAgaW5pdFdpZGdldCgnU2VhcmNoJywgdGhpcy52aWV3KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDAwKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnRBY3Rpb25iYXInKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjbGVmdEFjdGlvbmJhcicpXG4gICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJyN0b29sR3JvdXAnKVxuICAgICAgICAgICAgPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNhY3Rpb25CYXInKVxuICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCcjdG9vbEdyb3VwJylcbiAgICAgICAgICAgID8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnRBY3Rpb25iYXInKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYWN0aW9uQmFyJylcbiAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignI3Rvb2xHcm91cCcpXG4gICAgICAgICAgICA/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYW5lbC5sZWZ0JykuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcsICcnKTtcbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVvcmRlclBhbmVscygpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IEFjdGlvbkJhclZpZXdNb2RlbCBmcm9tICcuL0FjdGlvbkJhci9BY3Rpb25CYXJWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkJhclByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBzaWRlPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGFjdGlvbmJhci1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5BY3Rpb25CYXInKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQmFyIGV4dGVuZHMgZGVjbGFyZWQoV2lkZ2V0KSB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLnNpZGUnKVxuICBzaWRlOiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpXG4gIEBhbGlhc09mKCd2aWV3TW9kZWwucmVhZHknKVxuICByZWFkeTogYm9vbGVhbjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5hY3Rpb25zJylcbiAgYWN0aW9uczogTm9kZUxpc3RPZjxFbGVtZW50PjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC50b2dnbGVBY3Rpb24nKVxuICB0b2dnbGVBY3Rpb246IEZ1bmN0aW9uO1xuICBAYWxpYXNPZigndmlld01vZGVsLmVuYWJsZUFjdGlvbmJhcicpXG4gIGVuYWJsZUFjdGlvbmJhcjogRnVuY3Rpb247XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuaW5pdEFjdGlvbnMnKVxuICBpbml0QWN0aW9uczogRnVuY3Rpb247XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogQWN0aW9uQmFyVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBBY3Rpb25CYXJWaWV3TW9kZWwgPSBuZXcgQWN0aW9uQmFyVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IEFjdGlvbkJhclByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuICBzZWFyY2hHcm91cENyZWF0ZWQgPSAoaXRlbTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAodGhpcy5zaWRlID09PSAnbGVmdCcpIHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5hY3Rpb25zKSB7XG4gICAgICB0aGlzLmluaXRBY3Rpb25zKCk7XG4gICAgfVxuICB9O1xuICB0b29sR3JvdXBDcmVhdGVkID0gKGl0ZW06IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuc2lkZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMDApIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0QWN0aW9uYmFyJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuYWN0aW9ucykge1xuICAgICAgdGhpcy5pbml0QWN0aW9ucygpO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxjYWxjaXRlLWFjdGlvbi1iYXIgZXhwYW5kPVwiZmFsc2VcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24tZ3JvdXAgaWQ9XCJzZWFyY2hHcm91cFwiIGFmdGVyQ3JlYXRlPXt0aGlzLnNlYXJjaEdyb3VwQ3JlYXRlZH0+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIlNlYXJjaFwiIGljb249XCJzZWFyY2hcIiBzaWRlPVwicmlnaHRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJMb2NhdGlvblwiIGljb249XCJwaW5cIiBzaWRlPVwicmlnaHRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJMYXllcnNcIiBpY29uPVwibGF5ZXJzXCIgc2lkZT1cInJpZ2h0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiTGVnZW5kXCIgaWNvbj1cImxlZ2VuZFwiIHNpZGU9XCJyaWdodFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIkJhc2VtYXBzXCIgaWNvbj1cImJhc2VtYXBcIiBzaWRlPVwicmlnaHRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgIDwvY2FsY2l0ZS1hY3Rpb24tZ3JvdXA+XG5cbiAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24tZ3JvdXAgaWQ9XCJ0b29sR3JvdXBcIiBhZnRlckNyZWF0ZT17dGhpcy50b29sR3JvdXBDcmVhdGVkfT5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiU2VsZWN0XCIgaWNvbj1cInNlbGVjdGlvblwiIHNpZGU9XCJsZWZ0XCIgZGlzYWJsZWQ+PC9jYWxjaXRlLWFjdGlvbj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWFjdGlvbiB0ZXh0PVwiTWVhc3VyZVwiIGljb249XCJtZWFzdXJlXCIgc2lkZT1cImxlZnRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJEcmF3XCIgaWNvbj1cInBlbmNpbC1tYXJrXCIgc2lkZT1cImxlZnRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgICAgPGNhbGNpdGUtYWN0aW9uIHRleHQ9XCJCb29rbWFya3NcIiBpY29uPVwiYm9va21hcmtcIiBzaWRlPVwibGVmdFwiIGRpc2FibGVkPjwvY2FsY2l0ZS1hY3Rpb24+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1hY3Rpb24gdGV4dD1cIlByaW50XCIgaWNvbj1cInByaW50XCIgc2lkZT1cImxlZnRcIiBkaXNhYmxlZD48L2NhbGNpdGUtYWN0aW9uPlxuICAgICAgICAgIDwvY2FsY2l0ZS1hY3Rpb24tZ3JvdXA+XG4gICAgICAgIDwvY2FsY2l0ZS1hY3Rpb24tYmFyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuL2Nzcy9tYWluLmNzcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL2RhdGEvYXBwJztcbmltcG9ydCB7IGluaXRUaXBzIH0gZnJvbSAnLi90aXBzJztcbmltcG9ydCB7IHNob3dBbGVydCB9IGZyb20gJy4vYWxlcnQnO1xuLy9pbXBvcnQgeyB0b2dnbGVBY3Rpb24sIGVuYWJsZUFjdGlvbmJhciB9IGZyb20gJy4vYWN0aW9uYmFyJztcbmltcG9ydCBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldyc7XG5cbmltcG9ydCBXZWJNYXAgZnJvbSAnZXNyaS9XZWJNYXAnO1xuLy8gd2lkZ2V0IHV0aWxzXG5pbXBvcnQgeyBpbml0V2lkZ2V0cywgc2VsZWN0LCBwcm9wZXJ0eVNlYXJjaCwgbGF5ZXJzIH0gZnJvbSAnLi93aWRnZXRzJztcbmltcG9ydCB7IGluaXRQYW5lbHMsIGluaXRQYW5lbEhlYWRlcnMgfSBmcm9tICcuL3BhbmVscyc7XG5pbXBvcnQgeyBpbml0TWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQWN0aW9uQmFyIGZyb20gJy4vd2lkZ2V0cy9BY3Rpb25CYXInO1xuaW1wb3J0IHdhdGNoVXRpbHMgZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuY29uc3QgYWN0aW9uQmFyID0gbmV3IEFjdGlvbkJhcih7IHNpZGU6ICdyaWdodCcsIGNvbnRhaW5lcjogJ2FjdGlvbkJhcicgfSk7XG5cbmNvbnN0IGxlZnRBY3Rpb25CYXIgPSBuZXcgQWN0aW9uQmFyKHsgc2lkZTogJ2xlZnQnLCBjb250YWluZXI6ICdsZWZ0QWN0aW9uYmFyJyB9KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBsZXQgdmlldzogTWFwVmlldztcblxuZnVuY3Rpb24gY2hlY2tMb2NhbFN0b3JhZ2UodmlldzogTWFwVmlldykge1xuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpKSB7XG4gICAgY29uc3Qgd2VibWFwOiBXZWJNYXAgPSBXZWJNYXAuZnJvbUpTT04oSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzJykgYXMgc3RyaW5nKSk7XG4gICAgd2VibWFwLmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgIHZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgY29uc3QgbHlyID0gd2VibWFwLmFsbExheWVycy5maW5kKGwgPT4ge1xuICAgICAgICAgIHJldHVybiBsYXllci5pZCA9PT0gbC5pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGxheWVyLnZpc2libGUgPSBseXI/LnZpc2libGU7XG4gICAgICAgIGxheWVyLm9wYWNpdHkgPSBseXI/Lm9wYWNpdHk7XG4gICAgICB9KTtcbiAgICAgIHZpZXcubWFwLmJhc2VtYXAgPSB3ZWJtYXAuYmFzZW1hcDtcbiAgICAgIHZpZXcuZXh0ZW50ID0gd2VibWFwLmluaXRpYWxWaWV3UHJvcGVydGllcy52aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkuZXh0ZW50O1xuICAgIH0pO1xuICB9XG59XG4vL2hhbmRsZSB3aGVuIHZpZXcgaXMgcmVhZHlcblxuLy9zYXZlIHdlYiBtYXAgdG8gbG9jYWwgc3RvcmFnZSBvbiBwYWdlaGlkZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xuICB2aWV3Lm1hcC5yZW1vdmVNYW55KFxuICAgIHZpZXcubWFwLmFsbExheWVyc1xuICAgICAgLmZpbHRlcihsYXllciA9PiB7XG4gICAgICAgIHJldHVybiBsYXllci50eXBlID09PSAnZ3JvdXAnICYmICEobGF5ZXIgYXMgX19lc3JpLkdyb3VwTGF5ZXIpLmxheWVycy5sZW5ndGg7XG4gICAgICB9KVxuICAgICAgLnRvQXJyYXkoKVxuICApO1xuICBjb25zdCBqc29uID0gKHZpZXcubWFwIGFzIGFueSkudG9KU09OKCk7XG4gIGpzb24uaW5pdGlhbFN0YXRlLnZpZXdwb2ludC50YXJnZXRHZW9tZXRyeSA9IHZpZXcuZXh0ZW50O1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ltYXBzJywgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xufSk7XG5cbi8vc2hvdyBmaXJzdCBwYW5lbCBvbiBkZXZpY2VzIHdpZGVyIHRoYW4gNTAwcHggYnkgZGVmYXVsdFxuaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDUwMCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLXBhbmVsLnJpZ2h0Jyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLXBhbmVsLnJpZ2h0Jyk/LnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG59XG5cbi8vbW9kaWZ5IERPTSBhZnRlciBtYXAgdmlldyBsb2Fkc1xuLy92aWV3LndoZW4oKCkgPT4ge1xuLy9hY3Rpb25CYXIuaW5pdEFjdGlvbnMoKTtcblxuaW5pdFBhbmVscygpO1xuLy9hY3Rpb25CYXIudmlldyA9IHZpZXc7XG4vL30pO1xud2F0Y2hVdGlscy53aGVuRGVmaW5lZE9uY2UoYWN0aW9uQmFyLCAnYWN0aW9ucycsIGFjdGlvbnMgPT4ge1xuICBpZiAoYWN0aW9ucy5sZW5ndGggJiYgIXZpZXcpIHtcbiAgICB2aWV3ID0gbmV3IE1hcFZpZXcoe1xuICAgICAgY29udGFpbmVyOiAndmlld0RpdicsXG4gICAgICBtYXBcbiAgICB9KTtcblxuICAgIHZpZXcud2hlbigoKSA9PiB7XG4gICAgICBhY3Rpb25CYXIudmlldyA9IHZpZXc7XG4gICAgICBsZWZ0QWN0aW9uQmFyLnZpZXcgPSB2aWV3O1xuICAgICAgYWN0aW9uQmFyLmVuYWJsZUFjdGlvbmJhcigpO1xuXG4gICAgICBjaGVja0xvY2FsU3RvcmFnZSh2aWV3KTtcbiAgICAgIHZpZXcubWFwLndhdGNoKCdsYXllcnMnLCAoKSA9PiB7XG4gICAgICAgIHZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBpZiAobGF5ZXIudHlwZSAhPSAnZ3JvdXAnKSB7XG4gICAgICAgICAgICBsYXllci53YXRjaCgndmlzaWJsZScsIHZpc2libGUgPT4ge1xuICAgICAgICAgICAgICBsYXllcnM/LmxheWVyTGlzdD8ub3BlcmF0aW9uYWxJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmxheWVyLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gaXRlbS5jaGlsZHJlbi5maW5kKGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaS5sYXllciA9PT0gbGF5ZXI7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5wYW5lbC5vcGVuID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheWVyLndhdGNoKCd2aXNpYmxlJywgdmlzaWJsZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gbGF5ZXJzPy5sYXllckxpc3Qub3BlcmF0aW9uYWxJdGVtcy5maW5kKGkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpLmxheWVyID09PSBsYXllcjtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgICAgIGdyb3VwLm9wZW4gPSB2aXNpYmxlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TGF5ZXIgPSBtYXAuYWxsTGF5ZXJzLmZpbmQobGF5ZXIgPT4ge1xuICAgICAgICByZXR1cm4gbGF5ZXIudGl0bGUgPT09ICdQcm9wZXJ0eScgJiYgbGF5ZXIudHlwZSA9PT0gJ2ZlYXR1cmUnO1xuICAgICAgfSk7XG4gICAgICB2aWV3Lm9uKCdob2xkJywgZSA9PiB7XG4gICAgICAgIHByb3BlcnR5U2VhcmNoLmdlb21ldHJ5ID0gZS5tYXBQb2ludDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy90b2dnbGVBY3Rpb24oJ1NlYXJjaCcpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgICAgdmlld1xuICAgICAgICAud2hlbkxheWVyVmlldyhwcm9wZXJ0eUxheWVyKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcExvYWRlcicpPy50b2dnbGVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgICAgICAgIHByb3BlcnR5U2VhcmNoLnByb3BlcnR5TGF5ZXIgPSBwcm9wZXJ0eUxheWVyIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XG4gICAgICAgICAgLy9zZWFyY2ggYnkgZ2VvbWV0cnkgYWZ0ZXIgc2tldGNoIGNyZWF0aW9uIGluIHNlbGVjdCB3aWRnZXRcbiAgICAgICAgICBzZWxlY3Qudmlld01vZGVsLndhdGNoKCdnZW9tZXRyeScsIGdlb21ldHJ5ID0+IHtcbiAgICAgICAgICAgIHByb3BlcnR5U2VhcmNoLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgICAgICAgICBhY3Rpb25CYXIuYWN0aW9ucy5mb3JFYWNoKChhY3Rpb246IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoYWN0aW9uLnRleHQgPT09ICdTZWFyY2gnKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uQmFyLnRvZ2dsZUFjdGlvbihhY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4ge1xuICAgICAgICAgIC8vb24gZXJyb3IgbG9hZGluZyBwcm9wZXJ0eSBsYXllciwgZGlzcGxheSBhbGVydFxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlYXNvbik7XG4gICAgICAgICAgc2hvd0FsZXJ0KCdQcm9wZXJ0eSBsYXllciBkaWQgbm90IGxvYWQuIFBsZWFzZSBjb250YWN0IGlNQVBTIEhlbHAgRGVzay4nLCAncmVkJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZpZXcud2hlbihpbml0V2lkZ2V0cyk7XG4gICAgdmlldy53aGVuKGluaXRUaXBzKTtcbiAgfVxufSk7XG5cbmluaXRQYW5lbEhlYWRlcnMoKTtcbmluaXRNZW51KCk7XG4iXSwibmFtZXMiOlsid2hlbkRlZmluZWRPbmNlIiwid2hlbkRlZmluZWQiLCJwcm9wZXJ0eSIsInN1YmNsYXNzIiwidHN4IiwiYWxpYXNPZiIsInJlbmRlcmFibGUiLCJDU1MiLCJ2aWV3Iiwid2F0Y2hVdGlscyIsImRlY2xhcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ08sSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztFQUM5QixHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsa0NBQWtDLEVBQUUsRUFBRSxDQUFDLENBQUM7OztFQ0Z0RSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUM7RUFDM0IsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFhOztNQUM3QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtVQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztPQUNuQyxDQUFDLENBQUM7TUFDSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtVQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztPQUNuQyxDQUFDLENBQUM7TUFDSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1VBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ25DLENBQUMsQ0FBQztNQUNILFFBQVEsQ0FBQyxnQkFB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
