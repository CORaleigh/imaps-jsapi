
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
define(['exports', 'esri/WebMap', 'esri/widgets/Legend', 'esri/widgets/Print', 'esri/widgets/Bookmarks', 'esri/core/accessorSupport/decorators', 'esri/widgets/support/widget', 'esri/widgets/Widget', 'esri/core/Accessor', 'esri/widgets/Search', 'esri/widgets/FeatureTable', 'esri/layers/FeatureLayer', 'esri/layers/GraphicsLayer', 'esri/widgets/Feature', 'esri/Graphic', 'esri/widgets/Search/LayerSearchSource', 'esri/widgets/FeatureTable/FieldColumnConfig', 'esri/core/watchUtils', 'esri/widgets/Search/SearchSource', 'esri/widgets/CoordinateConversion', 'esri/widgets/Expand', 'esri/widgets/Measurement', 'esri/widgets/Compass', 'esri/widgets/Locate', 'esri/widgets/Track', 'esri/widgets/Fullscreen', 'esri/PopupTemplate', 'esri/popup/content/CustomContent', 'esri/tasks/Locator', 'esri/geometry/support/geodesicUtils', 'esri/Color', 'esri/widgets/Sketch', 'esri/symbols/TextSymbol', 'esri/widgets/BasemapGallery', 'esri/widgets/LayerList', 'esri/views/MapView', 'esri/Map', 'esri/geometry/geometryEngine'], function (exports, WebMap, Legend, Print, Bookmarks, decorators, widget, Widget, Accessor, Search, FeatureTable, FeatureLayer, GraphicsLayer, Feature, Graphic, LayerSearchSource, FieldColumnConfig, watchUtils, SearchSource, CoordinateConversion, Expand, Measurement, Compass, Locate, Track, Fullscreen, PopupTemplate, CustomContent, Locator, geodesicUtils, Color, Sketch, TextSymbol, BaseMapGallery, LayerList, MapView, Map, geometryEngine) { 'use strict';

  WebMap = WebMap && Object.prototype.hasOwnProperty.call(WebMap, 'default') ? WebMap['default'] : WebMap;
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
  BaseMapGallery = BaseMapGallery && Object.prototype.hasOwnProperty.call(BaseMapGallery, 'default') ? BaseMapGallery['default'] : BaseMapGallery;
  LayerList = LayerList && Object.prototype.hasOwnProperty.call(LayerList, 'default') ? LayerList['default'] : LayerList;
  MapView = MapView && Object.prototype.hasOwnProperty.call(MapView, 'default') ? MapView['default'] : MapView;
  Map = Map && Object.prototype.hasOwnProperty.call(Map, 'default') ? Map['default'] : Map;
  geometryEngine = geometryEngine && Object.prototype.hasOwnProperty.call(geometryEngine, 'default') ? geometryEngine['default'] : geometryEngine;

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
          _this.addGraphics = function (result) {
              _this.graphics.removeAll();
              result.features.forEach(function (feature) {
                  feature.symbol = result.features.length > 1 ? _this.multiSymbol : _this.singleSymbol;
                  _this.graphics.add(feature);
              });
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
                          var points_1 = [];
                          result.features.forEach(function (feature) {
                              var pt = feature.clone();
                              pt.geometry = pt.geometry.centroid;
                              points_1.push(pt);
                          });
                          _this.clusterPoints
                              .queryFeatures({ where: '1=1', returnGeometry: false, outFields: ['OBJECTID'] })
                              .then(function (result) {
                              _this.clusterPoints.applyEdits({ deleteFeatures: result.features }).then(function () {
                                  _this.clusterPoints.applyEdits({ addFeatures: points_1 }).then(function () {
                                      _this.clusterPoints.refresh();
                                  });
                              });
                          });
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
                      where_1 =
                          "OWNER like '" +
                              event.searchTerm.toUpperCase() +
                              "%' OR REID like '" +
                              event.searchTerm.toUpperCase() +
                              "%' OR PIN_NUM like '" +
                              event.searchTerm.toUpperCase() +
                              "%'";
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
                  _this.featureTable.layer = _this.createFeatureTableLayer(_this.condosTable.fields, features);
                  if (features.length === 1) {
                      features[0].geometry = propertyResult.features[0].geometry;
                      _this.setFeature(features[0], _this.view, [], [features[0].getObjectId()]);
                      _this.toggleContent('feature');
                  }
                  else {
                      _this.toggleContent('table');
                  }
                  _this.featureTable.renderNow();
                  _this.graphics.removeAll();
                  propertyResult.features.forEach(function (feature) {
                      feature.symbol =
                          propertyResult.features.length > 1 ? _this.multiSymbol : _this.singleSymbol;
                      if (propertyResult.features.length === 1) {
                          feature.geometry = propertyResult.features[0].geometry;
                      }
                      _this.graphics.add(feature);
                  });
              });
          });
      };
      PropertySearchViewModel.prototype.setFeature = function (feature, view, mediaInfos, oids) {
          var _this = this;
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
                              sourceURL: 'http://services.wakegov.com/realestate/photos/mvideo/' +
                                  feature.getAttribute('IMAGEDIR') +
                                  '/' +
                                  feature.getAttribute('IMAGENAME')
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
                  csv += field.alias + ',';
              });
              csv += '\r\n';
              result.features.forEach(function (feature) {
                  for (var key in feature.attributes) {
                      if (key.toLowerCase().includes('date')) {
                          csv += '"' + new Date(feature.attributes[key]).toDateString() + '",';
                      }
                      else if (key.toLowerCase().includes('acres')) {
                          csv += '"' + parseFloat(feature.attributes[key]).toFixed(2) + '",';
                      }
                      else {
                          csv += '"' + feature.attributes[key] + '",';
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
                          return _this.addressTable
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
  var serviceChanged = function (graphic, e) {
      if (!e.detail.requestedAccordionItem.hasAttribute('active') &&
          e.detail.requestedAccordionItem.childElementCount === 0) {
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
              });
          }
          else {
              return 'No services found.';
          }
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
                  _this.layerList.container = 'layers';
              }
          };
          return _this;
      }
      Layers.prototype.render = function () {
          return (widget.tsx("div", { class: CSS$5.base },
              widget.tsx("div", { afterCreate: this._createLayers, id: "layers" })));
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
          watchUtils__default.init(view, 'extent', function (extent) {
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
              graphic.geometry = extent;
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
          layers = new Layers({ view: view, container: 'layersDiv' });
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

  var toggleAction = function (action) {
      document.querySelectorAll('.panel').forEach(function (panel) {
          if (panel.title != action) {
              panel.classList.add('hidden');
          }
          else {
              console.log(panel);
              panel.removeAttribute('dismissed');
              console.log(panel);
              console.log(panel.title);
              if (!panel.hasAttribute('dismissed')) {
                  if (window.outerWidth < 500) {
                      panel.setAttribute('style', 'min-width: calc(100% - 50px)');
                  }
                  else {
                      panel.setAttribute('style', 'min-width: 350px');
                  }
                  panel.classList.remove('hidden');
                  if (panel.title != 'Measure') ;
                  else {
                      measurement.measureOpened();
                  }
              }
          }
      });
  };
  var actions = document.querySelectorAll('calcite-action-bar calcite-action');
  actions === null || actions === void 0 ? void 0 : actions.forEach(function (action) {
      action === null || action === void 0 ? void 0 : action.addEventListener('click', function (e) {
          console.log(e.target.text);
          toggleAction(e.target.text);
          initWidget(e.target.text, view);
          actions.forEach(function (a) {
              if (a.text != e.target.text) {
                  a.removeAttribute('active');
              }
          });
          action.setAttribute('active', '');
      });
  });
  var enableActionbar = function () {
      initWidget('Search', view);
      document.querySelectorAll('calcite-action-bar calcite-action').forEach(function (item) {
          item.removeAttribute('disabled');
      });
  };
  //# sourceMappingURL=actionbar.js.map

  var initPanelHeaders = function () {
      document.querySelectorAll('calcite-panel div').forEach(function (panel) {
          if (panel.slot === 'header-trailing-content') {
              panel.setAttribute('style', 'display: flex; flex-direction: row;');
          }
      });
      window.onresize = function () {
          var _a;
          if (((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.outerWidth) >= 500) {
              document.querySelectorAll('calcite-panel').forEach(function (item) {
                  var _a;
                  if (((_a = item.querySelector('.maximize')) === null || _a === void 0 ? void 0 : _a.getAttribute('icon')) === 'minimize') {
                      item.setAttribute('style', 'min-width: calc(100% - 50px)');
                  }
                  else {
                      item.setAttribute('style', 'min-width: 350px');
                  }
              });
          }
          else {
              document.querySelectorAll('calcite-panel').forEach(function (item) {
                  if (item.getAttribute('dismissed')) {
                      item.setAttribute('style', 'min-width: 0px');
                  }
                  else {
                      item.setAttribute('style', 'min-width: calc(100% - 50px)');
                  }
              });
          }
      };
      document.querySelectorAll('calcite-panel').forEach(function (item) {
          item.addEventListener('calcitePanelDismissedChange', function () {
              document.querySelectorAll('calcite-panel').forEach(function (item) {
                  item.setAttribute('style', 'min-width: 0px');
                  document.querySelectorAll('.maximize').forEach(function (item) {
                      item.setAttribute('icon', 'maximize');
                  });
              });
          });
      });
      document.querySelectorAll('.maximize').forEach(function (item) {
          item.addEventListener('click', function () {
              var _a, _b, _c, _d, _e, _f, _g, _h;
              (_b = (_a = item.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.removeAttribute('dismissed');
              (_d = (_c = item.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.classList.remove('hidden');
              if (item.getAttribute('icon') === 'maximize') {
                  item.setAttribute('icon', 'minimize');
                  (_f = (_e = item.parentElement) === null || _e === void 0 ? void 0 : _e.parentElement) === null || _f === void 0 ? void 0 : _f.setAttribute('style', 'min-width: calc(100% - 50px)');
              }
              else if (item.getAttribute('icon') === 'minimize') {
                  item.setAttribute('icon', 'maximize');
                  (_h = (_g = item.parentElement) === null || _g === void 0 ? void 0 : _g.parentElement) === null || _h === void 0 ? void 0 : _h.setAttribute('style', 'min-width:350px');
              }
          });
      });
  };
  var initPanels = function () {
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
                          if (window.outerWidth <= 500) {
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

  var _a, _b, _c;
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
              toggleAction('Search');
          }, 1000);
      });
      view
          .whenLayerView(propertyLayer)
          .then(function () {
          var _a;
          (_a = document.querySelector('#mapLoader')) === null || _a === void 0 ? void 0 : _a.toggleAttribute('active');
          propertySearch.propertyLayer = propertyLayer;
          select.viewModel.sketch.on('create', function (ev) {
              var _a;
              if (ev.state === 'complete') {
                  if (((_a = select.viewModel) === null || _a === void 0 ? void 0 : _a.bufferDistance) > 0) {
                      var g = geometryEngine.geodesicBuffer(ev.graphic.geometry, select.viewModel.bufferDistance, 'feet');
                      propertySearch.geometry = g;
                      ev.graphic.geometry = g;
                      select.viewModel.graphics.add(ev.graphic);
                      ev.graphic.symbol = {
                          type: 'simple-fill',
                          style: 'none',
                          outline: { style: 'short-dash', width: 2.5, color: [221, 221, 221, 1] },
                          color: [255, 243, 13, 0.25]
                      };
                      view.goTo(ev.graphic);
                  }
                  else {
                      propertySearch.geometry = ev.graphic.geometry;
                  }
                  toggleAction('Search');
              }
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
  if (window.outerWidth >= 500) {
      (_a = document.querySelector('calcite-panel')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
      (_b = document.querySelector('calcite-panel')) === null || _b === void 0 ? void 0 : _b.removeAttribute('dismissed');
      (_c = document.querySelector('calcite-action-bar calcite-action')) === null || _c === void 0 ? void 0 : _c.toggleAttribute('active');
  }
  view.when(function () {
      initPanels();
      enableActionbar();
  });
  initPanelHeaders();
  initMenu();
  //# sourceMappingURL=index.js.map

  exports.view = view;

  Object.defineProperty(exports, '__esModule', { value: true });

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FwcC50cyIsIi4uLy4uL3NyYy9tZW51LnRzIiwiLi4vLi4vc3JjL3RpcHMudHMiLCIuLi8uLi9zcmMvYWxlcnQudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaC9Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL1Byb3BlcnR5U2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUvTWVhc3VyZVZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUudHN4IiwiLi4vLi4vc3JjL2RhdGEvc2VhcmNoLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy9EcmF3Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9TZWxlY3QvU2VsZWN0Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvU2VsZWN0LnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL0Jhc2VNYXBzL0Jhc2VNYXBzVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQmFzZU1hcHMudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvTGF5ZXJzL0xheWVyc1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xheWVycy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaC9Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xvY2F0aW9uU2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL092ZXJ2aWV3TWFwL092ZXJ2aWV3TWFwVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvT3ZlcnZpZXdNYXAudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMudHMiLCIuLi8uLi9zcmMvYWN0aW9uYmFyLnRzIiwiLi4vLi4vc3JjL3BhbmVscy50cyIsIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViTWFwIGZyb20gJ2VzcmkvV2ViTWFwJztcbmV4cG9ydCBsZXQgbWFwID0gbmV3IFdlYk1hcCgpO1xubWFwID0gbmV3IFdlYk1hcCh7IHBvcnRhbEl0ZW06IHsgaWQ6ICc5NTA5MjQyODc3NGM0YjFmYjZhM2I2ZjVmZWQ5ZmJjNCcgfSB9KTtcbi8vIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzJykpIHtcbi8vICAgbWFwID0gV2ViTWFwLmZyb21KU09OKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpIGFzIHN0cmluZykpO1xuLy8gfVxuIiwiZXhwb3J0IGxldCB0aGVtZSA9ICdsaWdodCc7XG5jb25zdCBzZXRUaGVtZSA9ICh0aGVtZTogc3RyaW5nKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtY29sb3InKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtdGlwLW1hbmFnZXInKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtZHJvcGRvd24nKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWxlcnQnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcnJvd1BhdGgnKT8uc2V0QXR0cmlidXRlKCdzdHJva2UnLCB0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdibGFjaycgOiAnd2hpdGUnKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rJykuZm9yRWFjaChsaW5rID0+IHtcbiAgICBpZiAobGluay5ocmVmLmluY2x1ZGVzKHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JykpIHtcbiAgICAgIGxpbmsuaHJlZiA9ICdodHRwczovL2pzLmFyY2dpcy5jb20vNC4xNi9lc3JpL3RoZW1lcy8nICsgdGhlbWUgKyAnL21haW4uY3NzJztcbiAgICB9XG4gIH0pO1xufTtcbmV4cG9ydCBjb25zdCBpbml0TWVudSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1kcm9wZG93bicpPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlRHJvcGRvd25TZWxlY3QnLCAoZTogYW55KSA9PiB7XG4gICAgZS50YXJnZXQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpIGFzIHN0cmluZztcbiAgICAgICAgdGhlbWUgPSB2YWx1ZTtcbiAgICAgICAgc2V0VGhlbWUodGhlbWUpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkge1xuICAgIGxldCB0aGVtZU5hbWU6IHN0cmluZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSBhcyBzdHJpbmc7XG4gICAgc2V0VGhlbWUodGhlbWVOYW1lKTtcblxuICAgIHRoZW1lTmFtZSA9IHRoZW1lTmFtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgICAgaWYgKChlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmcpICE9IHRoZW1lTmFtZSkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgc3RyaW5nO1xuICAgICAgICB0aGVtZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKChlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmcpID09PSB0aGVtZU5hbWUpIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vbWVudSc7XG5cbmNvbnN0IHRpcEdyb3VwcyA9IFtcbiAge1xuICAgIHBhbmVsOiB7XG4gICAgICBuYW1lOiAnc2VsZWN0VGlwJyxcbiAgICAgIHRpdGxlOiAnU2VsZWN0aW9uJyxcbiAgICAgIHRpcHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUbyBkcmF3IGEgY29udGludW91cyBsaW5lIG9yIHBvbHlnb24sIGxvbmcgcHJlc3MgYW5kIGRyYWcgeW91ciBjdXJzb3InLFxuICAgICAgICAgIHRpdGxlOiAnRnJlZWhhbmQgRHJhd2luZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUbyBkcmF3IGEgY29udGludW91cyBsaW5lIG9yIHBvbHlnb24sIGxvbmcgcHJlc3MgYW5kIGRyYWcgeW91ciBjdXJzb3InLFxuICAgICAgICAgIHRpdGxlOiAnRnJlZWhhbmQgRHJhd2luZydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIHBhbmVsOiB7XG4gICAgICBuYW1lOiAncHJvcGVydHlTZWFyY2hUaXAnLFxuICAgICAgdGl0bGU6ICdQcm9wZXJ0eSBTZWFyY2gnLFxuICAgICAgdGlwczogW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICdUbyBzZWFyY2ggYnkgYSBwb3J0aW9uIG9mIGFuIG93bmVyIG5hbWUgb3IgYWRkcmVzcywgaGl0IGVudGVyIHdpdGhvdXQgc2VsZWN0aW5nIGZvcm0gdGhlIGxpc3Qgb2Ygc3VnZ2VzdGlvbnMuJyxcbiAgICAgICAgICB0aXRsZTogJ1dpbGRjYXJkIFNlYXJjaCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUbyBxdWlja2x5IHNlbGVjdCBhIHByb3BlcnR5IGZyb20gdGhlIG1hcCwgbG9uZyBwcmVzcyBvbiBhIHByb3BlcnR5IG9uIHRoZSBtYXAuJyxcbiAgICAgICAgICB0aXRsZTogJ0xvbmcgUHJlc3MnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnVG8gc2VsZWN0IGJ5IGEgbG9jYXRpb24gdXNlIHRoZSBwcm9wZXJ0eSBzZWxlY3Rpb24gdG9vbC4nLFxuICAgICAgICAgIHRpdGxlOiAnU2VsZWN0IEJ5IExvY2F0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1ByZXZpb3VzIFwidGFiXCIgbGF5b3V0IGhhcyBiZWVuIGNvbnNvbGlkYXRlZCBpbnRvIGEgc2luZ2xlIHNjcm9sbGFibGUgcGFuZWwuJyxcbiAgICAgICAgICB0aXRsZTogJ1NpbmdsZSBEZXRhaWxzIFBhbmVsJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdiYXNlbWFwVGlwJyxcbiAgICAgIHRpdGxlOiAnQmFzZW1hcHMnLFxuICAgICAgdGlwczogW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICdUaGUgaW1hZ2VyeSBhbmQgaW1hZ2VyeSBoeWJyaWQgYmFzZSBtYXBzIGxpc3RlZCB1bmRlciB0aGUgbWFwcyB0YWIgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgbGF0ZXN0IGltYWdlcnkgZnJvbSBSYWxlaWdoICgyMDE5KSBhbmQgZnJvbSB0aGUgU3RhdGUgb2YgTm9ydGggQ2Fyb2xpbmEgKDIwMTcpLicsXG4gICAgICAgICAgdGl0bGU6ICdJbWFnZXJ5IEJhc2VtYXBzJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG5dO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaXBzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlwJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS10aXAtbWFuYWdlcicpPy5yZW1vdmUoKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBjb25zdCBtYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAtbWFuYWdlcicpO1xuICAgICAgbWFuYWdlci5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgdGhlbWUpO1xuICAgICAgY29uc3QgdGlwR3JvdXAgPSB0aXBHcm91cHMuZmluZChncm91cCA9PiB7XG4gICAgICAgIHJldHVybiBncm91cC5wYW5lbC5uYW1lID09PSBpdGVtLmlkO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAtZ3JvdXAnKTtcbiAgICAgIGdyb3VwLnNldEF0dHJpYnV0ZSgndGV4dC1ncm91cC10aXRsZScsICh0aXBHcm91cCBhcyBhbnkpPy5wYW5lbC50aXRsZSk7XG4gICAgICBtYW5hZ2VyLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICAgIHRpcEdyb3VwPy5wYW5lbC50aXBzLmZvckVhY2godGlwID0+IHtcbiAgICAgICAgY29uc3QgY2FsY2l0ZVRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtdGlwJyk7XG4gICAgICAgIGNhbGNpdGVUaXAuc2V0QXR0cmlidXRlKCdoZWFkaW5nJywgdGlwLnRpdGxlKTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC5pbm5lckhUTUwgPSB0aXAubWVzc2FnZTtcbiAgICAgICAgY2FsY2l0ZVRpcC5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQoY2FsY2l0ZVRpcCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50Py5ib2R5Py5hcHBlbmRDaGlsZChtYW5hZ2VyKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2hvd0FsZXJ0KHRleHQ6IHN0cmluZywgY29sb3I6IHN0cmluZykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLWFsZXJ0Jyk/LnJlbW92ZSgpO1xuICBjb25zdCBhbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYWxlcnQnKTtcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZXNzYWdlLnNldEF0dHJpYnV0ZSgnc2xvdCcsICdhbGVydC1tZXNzYWdlJyk7XG4gIG1lc3NhZ2UuaW5uZXJIVE1MID0gdGV4dDtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdjb2xvcicsIGNvbG9yKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gIGFsZXJ0LnNldEF0dHJpYnV0ZSgnaWNvbicsICcnKTtcblxuICBhbGVydC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbGVydCk7XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaCc7XG5pbXBvcnQgRmVhdHVyZVRhYmxlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlVGFibGUnO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZSc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnO1xuaW1wb3J0IExheWVyU2VhcmNoU291cmNlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gvTGF5ZXJTZWFyY2hTb3VyY2UnO1xuaW1wb3J0IEZpZWxkQ29sdW1uQ29uZmlnIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlVGFibGUvRmllbGRDb2x1bW5Db25maWcnO1xuaW1wb3J0IE1lbnVCdXR0b25JdGVtIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlVGFibGUvR3JpZC9zdXBwb3J0L0J1dHRvbk1lbnVJdGVtJztcbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSwgd2hlbkRlZmluZWQgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgU2VhcmNoU291cmNlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gvU2VhcmNoU291cmNlJztcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuUHJvcGVydHlTZWFyY2guUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBjb25kb3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBwcm9wZXJ0eSgpIGFkZHJlc3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBwcm9wZXJ0eSgpIHByb3BlcnR5TGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuXG4gIEBwcm9wZXJ0eSgpIHNlYXJjaFdpZGdldDogZXNyaS53aWRnZXRzU2VhcmNoO1xuICBAcHJvcGVydHkoKSBmZWF0dXJlVGFibGU6IGVzcmkuRmVhdHVyZVRhYmxlO1xuICBAcHJvcGVydHkoKSBmZWF0dXJlOiBlc3JpLkZlYXR1cmU7XG4gIEBwcm9wZXJ0eSgpIGdlb21ldHJ5OiBlc3JpLkdlb21ldHJ5O1xuXG4gIGNsdXN0ZXJQb2ludHM6IEZlYXR1cmVMYXllcjtcblxuICBncmFwaGljcyA9IG5ldyBHcmFwaGljc0xheWVyKHsgaWQ6ICdwcm9wZXJ0eS1zZWxlY3QnLCBsaXN0TW9kZTogJ2hpZGUnLCBtaW5TY2FsZTogMTkyMDAgfSk7XG4gIHNpbmdsZVN5bWJvbCA9IHtcbiAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgIHN0eWxlOiAnbm9uZScsXG4gICAgb3V0bGluZTogeyB3aWR0aDogMi41LCBjb2xvcjogWzI1NSwgODIsIDgyLCAxXSB9LFxuICAgIGNvbG9yOiBbMjUzLCA0NiwgNjUsIDAuMjVdXG4gIH07XG4gIG11bHRpU3ltYm9sID0ge1xuICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgc3R5bGU6ICdub25lJyxcbiAgICBvdXRsaW5lOiB7IHdpZHRoOiAyLjUsIGNvbG9yOiBbMjQ5LCAyNDMsIDAsIDFdIH0sXG4gICAgY29sb3I6IFsyNTMsIDQ2LCA2NSwgMC4yNV1cbiAgfTtcbiAgc2VsZWN0ZWRQcm9wZXJ0eTogZXNyaS5HcmFwaGljO1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ2NvbmRvc1RhYmxlJywgdGhpcy5pbml0U2VhcmNoLmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkKHRoaXMsICdnZW9tZXRyeScsIHRoaXMuc2VhcmNoQnlHZW9tZXRyeS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHNlYXJjaEJ5R2VvbWV0cnkoZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnkpIHtcbiAgICB0aGlzLnByb3BlcnR5TGF5ZXJcbiAgICAgIC5xdWVyeUZlYXR1cmVzKHsgZ2VvbWV0cnk6IGdlb21ldHJ5LCByZXR1cm5HZW9tZXRyeTogdHJ1ZSwgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSB9KVxuICAgICAgLnRoZW4ocHJvcGVydHlSZXN1bHQgPT4ge1xuICAgICAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLnByb3BlcnR5TGF5ZXIucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdQUk9QRVJUWV9DT05ETyc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUxheWVyXG4gICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBsZXQgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQocmVzdWx0W2tleV0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCBmZWF0dXJlcyk7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGZlYXR1cmVzWzBdLmdlb21ldHJ5ID0gcHJvcGVydHlSZXN1bHQuZmVhdHVyZXNbMF0uZ2VvbWV0cnk7XG5cbiAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKGZlYXR1cmVzWzBdLCB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LCBbXSwgW2ZlYXR1cmVzWzBdLmdldE9iamVjdElkKCldKTtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5yZW5kZXJOb3coKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgZmVhdHVyZS5zeW1ib2wgPVxuICAgICAgICAgICAgICAgIHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA+IDEgPyAodGhpcy5tdWx0aVN5bWJvbCBhcyBhbnkpIDogKHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueSk7XG5cbiAgICAgICAgICAgICAgaWYgKHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2VvbWV0cnkgPSBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlc1swXS5nZW9tZXRyeTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmFkZChmZWF0dXJlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBjcmVhdGVGZWF0dXJlVGFibGVMYXllciA9IChmaWVsZHM6IGVzcmkuRmllbGRbXSwgZmVhdHVyZXM6IGVzcmkuR3JhcGhpY1tdKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBzb3VyY2U6IGZlYXR1cmVzLFxuICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCcsXG4gICAgICBzcGF0aWFsUmVmZXJlbmNlOiB0aGlzLnZpZXcuc3BhdGlhbFJlZmVyZW5jZVxuICAgIH0pO1xuICB9O1xuICBhZGRHcmFwaGljcyA9IChyZXN1bHQ6IGVzcmkuRmVhdHVyZVNldCkgPT4ge1xuICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG4gICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICBmZWF0dXJlLnN5bWJvbCA9IHJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxID8gKHRoaXMubXVsdGlTeW1ib2wgYXMgYW55KSA6ICh0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnkpO1xuICAgICAgdGhpcy5ncmFwaGljcy5hZGQoZmVhdHVyZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0UHJvcGVydHkgPSAob2lkczogYW55W10sIHNvdXJjZT86IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuY29uZG9zVGFibGUucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0NPTkRPX1BST1BFUlRZJztcbiAgICB9KTtcbiAgICB0aGlzLmNvbmRvc1RhYmxlXG4gICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoe1xuICAgICAgICByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwPy5pZCxcbiAgICAgICAgb2JqZWN0SWRzOiBvaWRzLFxuICAgICAgICBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnLCAnUkVJRCddLFxuICAgICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2VcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wZXJ0eUxheWVyXG4gICAgICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgb2JqZWN0SWRzOiBvaWRzLFxuICAgICAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlLFxuICAgICAgICAgICAgb3V0U3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmU/LmdyYXBoaWMpIHtcbiAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMuZ2VvbWV0cnkgPSByZXN1bHQ/LmZlYXR1cmVzWzBdLmdlb21ldHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52aWV3LmdvVG8ocmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkR3JhcGhpY3MocmVzdWx0KTtcbiAgICAgICAgICAgICAgY29uc3QgcG9pbnRzOiBHcmFwaGljW10gPSBbXTtcbiAgICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHQgPSBmZWF0dXJlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgcHQuZ2VvbWV0cnkgPSAocHQuZ2VvbWV0cnkgYXMgZXNyaS5Qb2x5Z29uKS5jZW50cm9pZDtcbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaChwdCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmNsdXN0ZXJQb2ludHNcbiAgICAgICAgICAgICAgICAucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiAnMT0xJywgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLCBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnXSB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNsdXN0ZXJQb2ludHMuYXBwbHlFZGl0cyh7IGRlbGV0ZUZlYXR1cmVzOiByZXN1bHQuZmVhdHVyZXMgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2x1c3RlclBvaW50cy5hcHBseUVkaXRzKHsgYWRkRmVhdHVyZXM6IHBvaW50cyB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsdXN0ZXJQb2ludHMucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgc2VhcmNoQ29tcGxldGUgPSAoZXZlbnQ6IGVzcmkuU2VhcmNoU2VhcmNoQ29tcGxldGVFdmVudCkgPT4ge1xuICAgIGRlYnVnZ2VyO1xuICAgIGlmICghdGhpcy5zZWFyY2hXaWRnZXQudmlld01vZGVsLnNlbGVjdGVkU3VnZ2VzdGlvbikge1xuICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcblxuICAgICAgbGV0IHdoZXJlID0gJyc7XG5cbiAgICAgIGlmICghdGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlKSB7XG4gICAgICAgIHdoZXJlID1cbiAgICAgICAgICBcIk9XTkVSIGxpa2UgJ1wiICtcbiAgICAgICAgICBldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgIFwiJScgT1IgUkVJRCBsaWtlICdcIiArXG4gICAgICAgICAgZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICBcIiUnIE9SIFBJTl9OVU0gbGlrZSAnXCIgK1xuICAgICAgICAgIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgXCIlJ1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCh0aGlzLnNlYXJjaFdpZGdldC5hY3RpdmVTb3VyY2UgYXMgYW55KT8uc2VhcmNoRmllbGRzLmluY2x1ZGVzKCdPV05FUicpKSB7XG4gICAgICAgICAgd2hlcmUgPSBcIk9XTkVSIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ1BJTl9OVU0nKSkge1xuICAgICAgICAgIHdoZXJlID0gXCJQSU5fTlVNIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ1JFSUQnKSkge1xuICAgICAgICAgIHdoZXJlID0gXCJSRUlEIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdGFibGVGZWF0dXJlczogYW55W10gPSBbXTtcblxuICAgICAgdGhpcy5jb25kb3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6IHdoZXJlLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGFibGVGZWF0dXJlcyA9IHJlc3VsdC5mZWF0dXJlcztcbiAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIHx8XG4gICAgICAgICAgKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ0FERFJFU1MnKVxuICAgICAgICApIHtcbiAgICAgICAgICB3aGVyZSA9IFwiQUREUkVTUyBsaWtlICclXCIgKyBldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkgKyBcIiUnXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2hlcmUgPSAnQUREUkVTUyBJUyBOVUxMJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogd2hlcmUsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuYWRkcmVzc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdBRERSRVNTRVNfQ09ORE8nO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGFkZHJPaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgYWRkck9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgJiYgYWRkck9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZVxuICAgICAgICAgICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwLmlkLCBvYmplY3RJZHM6IGFkZHJPaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVGZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgdGFibGVGZWF0dXJlcyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgICAgIGlmICh0YWJsZUZlYXR1cmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gbmV3IEdyYXBoaWMoKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgndGFibGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUucmVuZGVyTm93KCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCB0YWJsZUZlYXR1cmVzKTtcbiAgICAgICAgICAgIGlmICh0YWJsZUZlYXR1cmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBuZXcgR3JhcGhpYygpO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5yZW5kZXJOb3coKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChldmVudC5udW1SZXN1bHRzKSB7XG4gICAgICAgIGxldCBsYXllciA9IChldmVudC5yZXN1bHRzWzBdLnNvdXJjZSBhcyBMYXllclNlYXJjaFNvdXJjZSkubGF5ZXIgYXMgRmVhdHVyZUxheWVyO1xuICAgICAgICBpZiAoIWxheWVyICYmIGV2ZW50LnJlc3VsdHNbMF0uc291cmNlLm5hbWUgPT09ICdPd25lcicpIHtcbiAgICAgICAgICBsYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsYXllciAmJiBbJ1NpdGUgQWRkcmVzcycsICdTdHJlZXQgTmFtZSddLmluY2x1ZGVzKGV2ZW50LnJlc3VsdHNbMF0uc291cmNlLm5hbWUpKSB7XG4gICAgICAgICAgbGF5ZXIgPSB0aGlzLmFkZHJlc3NUYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBldmVudC5yZXN1bHRzWzBdLnJlc3VsdHMuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goci5mZWF0dXJlLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxheWVyLmxheWVySWQgPT09IDQpIHtcbiAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXAgPSBsYXllci5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgICByZXR1cm4gci5uYW1lID09PSAnQUREUkVTU0VTX0NPTkRPJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocmVsYXRpb25zaGlwICYmIG9pZHMpIHtcbiAgICAgICAgICAgIGxheWVyXG4gICAgICAgICAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXAuaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5sYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBuZXcgR3JhcGhpYygpO1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmUoZmVhdHVyZXNbMF0sIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsIFtdLCBvaWRzKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgZmVhdHVyZXMpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb25kb3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gbmV3IEdyYXBoaWMoKTtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKHJlc3VsdC5mZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgcmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc2V0RmVhdHVyZShmZWF0dXJlOiBlc3JpLkdyYXBoaWMsIHZpZXc6IGVzcmkuTWFwVmlldywgbWVkaWFJbmZvczogYW55W10sIG9pZHM6IGFueVtdKSB7XG4gICAgY29uc3QgcmVsYXRpb25zaGlwID0gdGhpcy5jb25kb3NUYWJsZS5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICByZXR1cm4gci5uYW1lID09PSAnQ09ORE9fUEhPVE9TJztcbiAgICB9KTtcbiAgICBjb25zdCBvaWQgPSBmZWF0dXJlLmdldE9iamVjdElkKCk7XG4gICAgbWVkaWFJbmZvcyA9IFtdO1xuICAgIHRoaXMuY29uZG9zVGFibGVcbiAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXA/LmlkLCBvYmplY3RJZHM6IG9pZHMsIG91dEZpZWxkczogWycqJ10gfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgbWVkaWFJbmZvcy5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgICBjYXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBzb3VyY2VVUkw6XG4gICAgICAgICAgICAgICAgICAnaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL3JlYWxlc3RhdGUvcGhvdG9zL212aWRlby8nICtcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdJTUFHRURJUicpICtcbiAgICAgICAgICAgICAgICAgICcvJyArXG4gICAgICAgICAgICAgICAgICBmZWF0dXJlLmdldEF0dHJpYnV0ZSgnSU1BR0VOQU1FJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVkaWEgPSAodGhpcy5jb25kb3NUYWJsZS5wb3B1cFRlbXBsYXRlLmNvbnRlbnQgYXMgZXNyaS5Db250ZW50W10pLmZpbmQoKGNvbnRlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb250ZW50Py50eXBlID09PSAnbWVkaWEnO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgKG1lZGlhIGFzIGVzcmkuTWVkaWFDb250ZW50KS5tZWRpYUluZm9zID0gbWVkaWFJbmZvcztcbiAgICAgICAgfVxuICAgICAgICBmZWF0dXJlLmxheWVyID0gdGhpcy5jb25kb3NUYWJsZTtcbiAgICAgICAgZmVhdHVyZS5wb3B1cFRlbXBsYXRlID0gKGZlYXR1cmUubGF5ZXIgYXMgZXNyaS5GZWF0dXJlTGF5ZXIpLnBvcHVwVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljID0gZmVhdHVyZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mZWF0dXJlLmdyYXBoaWMuYXR0cmlidXRlcyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlRGl2Jyk/LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljLnN5bWJvbCA9IHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueTtcbiAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMuc2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcsIG9pZCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5ncmFwaGljcy5ncmFwaGljcy5maW5kKGdyYXBoaWMgPT4ge1xuICAgICAgICAgIHJldHVybiBncmFwaGljLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSA9PT0gJ3RydWUnO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgc2VsZWN0ZWQuc3ltYm9sID0gdGhpcy5tdWx0aVN5bWJvbCBhcyBhbnk7XG4gICAgICAgICAgc2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWMgPSB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLmZpbmQoZ3JhcGhpYyA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdSRUlEJykgPT09IGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdSRUlEJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZ3JhcGhpYykge1xuICAgICAgICAgIGdyYXBoaWMuc3ltYm9sID0gdGhpcy5zaW5nbGVTeW1ib2wgYXMgYW55O1xuXG4gICAgICAgICAgZ3JhcGhpYy5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgICB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLnJlb3JkZXIoZ3JhcGhpYywgdGhpcy5ncmFwaGljcy5ncmFwaGljcy5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbiAgZXhwb3J0VGFibGUoKSB7XG4gICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIucXVlcnlGZWF0dXJlcyh7IG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgbGV0IGNzdiA9ICcnO1xuICAgICAgcmVzdWx0LmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgY3N2ICs9IGZpZWxkLmFsaWFzICsgJywnO1xuICAgICAgfSk7XG4gICAgICBjc3YgKz0gJ1xcclxcbic7XG4gICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmVhdHVyZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaWYgKGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkYXRlJykpIHtcbiAgICAgICAgICAgIGNzdiArPSAnXCInICsgbmV3IERhdGUoZmVhdHVyZS5hdHRyaWJ1dGVzW2tleV0pLnRvRGF0ZVN0cmluZygpICsgJ1wiLCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChrZXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnYWNyZXMnKSkge1xuICAgICAgICAgICAgY3N2ICs9ICdcIicgKyBwYXJzZUZsb2F0KGZlYXR1cmUuYXR0cmlidXRlc1trZXldKS50b0ZpeGVkKDIpICsgJ1wiLCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzdiArPSAnXCInICsgZmVhdHVyZS5hdHRyaWJ1dGVzW2tleV0gKyAnXCIsJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3N2ICs9ICdcXHJcXG4nO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBleHBvcnRlZEZpbGVubWFlID0gJ2ltYXBzX2V4cG9ydC5jc3YnO1xuXG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2Nzdl0sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBpZiAobGluay5kb3dubG9hZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGZlYXR1cmUgZGV0ZWN0aW9uXG4gICAgICAgIC8vIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCBIVE1MNSBkb3dubG9hZCBhdHRyaWJ1dGVcbiAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBleHBvcnRlZEZpbGVubWFlKTtcbiAgICAgICAgbGluay5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MsIHZpZXcubWFwLmFsbExheWVycy5sZW5ndGggLSAxKTtcbiAgICB0aGlzLmNsdXN0ZXJQb2ludHMgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgIHNvdXJjZTogW10sXG4gICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnLFxuICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgbWF4U2NhbGU6IDE5MjAxLFxuICAgICAgbGlzdE1vZGU6ICdoaWRlJyxcbiAgICAgIGxlZ2VuZEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcmVuZGVyZXI6IHtcbiAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJyxcbiAgICAgICAgICBzaXplOiA0LFxuICAgICAgICAgIGNvbG9yOiAnIzY5ZGNmZicsXG4gICAgICAgICAgb3V0bGluZToge1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDAsIDEzOSwgMTc0LCAwLjUpJyxcbiAgICAgICAgICAgIHdpZHRoOiA1XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGFzIGFueSxcbiAgICAgIGZlYXR1cmVSZWR1Y3Rpb246IHtcbiAgICAgICAgdHlwZTogJ2NsdXN0ZXInLFxuICAgICAgICBsYWJlbGluZ0luZm86IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyB0dXJuIG9mZiBkZWNvbmZsaWN0aW9uIHRvIGVuc3VyZSBhbGwgY2x1c3RlcnMgYXJlIGxhYmVsZWRcbiAgICAgICAgICAgIGRlY29uZmxpY3Rpb25TdHJhdGVneTogJ25vbmUnLFxuICAgICAgICAgICAgbGFiZWxFeHByZXNzaW9uSW5mbzoge1xuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlRleHQoJGZlYXR1cmUuY2x1c3Rlcl9jb3VudCwgJyMsIyMjJylcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwNGE1ZCcsXG4gICAgICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgICAgICBmYW1pbHk6ICdOb3RvIFNhbnMnLFxuICAgICAgICAgICAgICAgIHNpemU6ICcxMnB4J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGFzIGFueSxcbiAgICAgICAgICAgIGxhYmVsUGxhY2VtZW50OiAnY2VudGVyLWNlbnRlcidcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBzcGF0aWFsUmVmZXJlbmNlOiB0aGlzLnZpZXcuc3BhdGlhbFJlZmVyZW5jZVxuICAgIH0pO1xuICAgIHRoaXMudmlldy5tYXAuYWRkKHRoaXMuY2x1c3RlclBvaW50cyk7XG4gIH1cblxuICBnZXRTdWdnZXN0aW9ucyA9IChcbiAgICBwYXJhbXM6IGFueSxcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgbGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyLFxuICAgIG91dEZpZWxkczogc3RyaW5nW10sXG4gICAgb3JkZXJCeUZpZWxkczogc3RyaW5nW10sXG4gICAgc2VhcmNoRmllbGRzOiBzdHJpbmdbXSxcbiAgICBzdGFydHNXaXRoOiBib29sZWFuXG4gICkgPT4ge1xuICAgIGNvbnN0IHdoZXJlQXJyYXk6IHN0cmluZ1tdID0gW107XG4gICAgc2VhcmNoRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgaWYgKHN0YXJ0c1dpdGgpIHtcbiAgICAgICAgd2hlcmVBcnJheS5wdXNoKGAke2ZpZWxkfSBMSUtFICcke3BhcmFtcy5zdWdnZXN0VGVybS50b1VwcGVyQ2FzZSgpfSUnYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGVyZUFycmF5LnB1c2goYCR7ZmllbGR9IExJS0UgJyUke3BhcmFtcy5zdWdnZXN0VGVybS50b1VwcGVyQ2FzZSgpfSUnYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxheWVyXG4gICAgICAucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgIHJldHVybkRpc3RpbmN0VmFsdWVzOiB0cnVlLFxuICAgICAgICBvdXRGaWVsZHM6IG91dEZpZWxkcyxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLFxuICAgICAgICBvcmRlckJ5RmllbGRzOiBvcmRlckJ5RmllbGRzLFxuICAgICAgICB3aGVyZTogd2hlcmVBcnJheS5qb2luKCcgT1IgJylcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMuZmVhdHVyZXNcbiAgICAgICAgICAuZmlsdGVyKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFvdXRGaWVsZHMuaW5jbHVkZXMoJ0FERFJfTElTVCcpIHx8IGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdBRERSX0xJU1QnKSA9PT0gJ1llcyc7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAubWFwKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2V5OiBuYW1lLFxuICAgICAgICAgICAgICB0ZXh0OiBmZWF0dXJlLmdldEF0dHJpYnV0ZShvdXRGaWVsZHNbMF0pLFxuICAgICAgICAgICAgICBzb3VyY2VJbmRleDogcGFyYW1zLnNvdXJjZUluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG4gIGluaXRTZWFyY2goY29uZG9zVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyKSB7XG4gICAgY29uc3QgdGFibGVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgZmllbGRzOiBbXG4gICAgICAgIHsgbmFtZTogJ1NJVEVfQUREUkVTUycsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ0FkZHJlc3MnIH0sXG4gICAgICAgIHsgbmFtZTogJ09XTkVSJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnT3duZXInIH0sXG4gICAgICAgIHsgbmFtZTogJ1BJTl9OVU0nLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdQSU4nIH0sXG4gICAgICAgIHsgbmFtZTogJ1JFSUQnLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdSRUlEJyB9XG4gICAgICBdLFxuICAgICAgc291cmNlOiBbXSxcbiAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnLFxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogdGhpcy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgICB9KTtcbiAgICB0aGlzLmZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7IHZpZXc6IHRoaXMudmlldyB9KTtcblxuICAgIHRoaXMuZmVhdHVyZVRhYmxlID0gbmV3IEZlYXR1cmVUYWJsZSh7XG4gICAgICB2aWV3OiB0aGlzLnZpZXcsXG4gICAgICBsYXllcjogdGFibGVMYXllcixcbiAgICAgIGZpZWxkQ29uZmlnczogW1xuICAgICAgICBuZXcgRmllbGRDb2x1bW5Db25maWcoe1xuICAgICAgICAgIG5hbWU6ICdTSVRFX0FERFJFU1MnLFxuICAgICAgICAgIGxhYmVsOiAnQWRkcmVzcycsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgRmllbGRDb2x1bW5Db25maWcoe1xuICAgICAgICAgIG5hbWU6ICdPV05FUicsXG4gICAgICAgICAgbGFiZWw6ICdPd25lcicsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgRmllbGRDb2x1bW5Db25maWcoe1xuICAgICAgICAgIG5hbWU6ICdQSU5fTlVNJyxcbiAgICAgICAgICBsYWJlbDogJ1BJTicsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgRmllbGRDb2x1bW5Db25maWcoe1xuICAgICAgICAgIG5hbWU6ICdSRUlEJyxcbiAgICAgICAgICBsYWJlbDogJ1JFSUQnLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIG1lbnVDb25maWc6IHtcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAoe1xuICAgICAgICAgICAgbGFiZWw6ICdFeHBvcnQnXG4gICAgICAgICAgfSBhcyB1bmtub3duKSBhcyBNZW51QnV0dG9uSXRlbVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgYnV0dG9uOiBNZW51QnV0dG9uSXRlbSA9IHRoaXMuZmVhdHVyZVRhYmxlPy5tZW51Q29uZmlnPy5pdGVtcz8uZmluZChpdGVtID0+IHtcbiAgICAgIHJldHVybiBpdGVtLmxhYmVsID09PSAnRXhwb3J0JztcbiAgICB9KSBhcyBNZW51QnV0dG9uSXRlbTtcbiAgICBidXR0b24uY2xpY2tGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgIHRoaXMuZXhwb3J0VGFibGUoKTtcbiAgICB9O1xuICAgIGJ1dHRvbi5jbGlja0Z1bmN0aW9uLmJpbmQodGhpcy5mZWF0dXJlVGFibGUpO1xuXG4gICAgdGhpcy5mZWF0dXJlVGFibGUub24oJ3NlbGVjdGlvbi1jaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAodGhpcy5mZWF0dXJlVGFibGUgYXMgYW55KS5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgaWYgKGV2ZW50LmFkZGVkLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmdldFByb3BlcnR5KFtldmVudC5hZGRlZFswXS5mZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKV0sICd0YWJsZScpO1xuICAgICAgICB0aGlzLnNldEZlYXR1cmUoXG4gICAgICAgICAgZXZlbnQuYWRkZWRbMF0uZmVhdHVyZSxcbiAgICAgICAgICB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LFxuICAgICAgICAgIFtdLFxuICAgICAgICAgIFtldmVudC5hZGRlZFswXS5mZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKV1cbiAgICAgICAgKTtcbiAgICAgICAgZXZlbnQuYWRkZWRbMF0uZmVhdHVyZS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hXaWRnZXQgPSBuZXcgU2VhcmNoKHtcbiAgICAgIGFsbFBsYWNlaG9sZGVyOiAnQWRkcmVzcywgb3duZXIsIFBJTiwgb3IgUkVJRCcsXG4gICAgICBpbmNsdWRlRGVmYXVsdFNvdXJjZXM6IGZhbHNlLFxuICAgICAgY29udGFpbmVyOiAnc2VhcmNoJyxcbiAgICAgIHNvdXJjZXM6IFtcbiAgICAgICAgLy8gbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgLy8gICBsYXllcjogdGhpcy5hZGRyZXNzVGFibGUsXG4gICAgICAgIC8vICAgc2VhcmNoRmllbGRzOiBbJ0FERFJFU1MnLCAnQUREUkVTU19OT0RJUiddLFxuICAgICAgICAvLyAgIGRpc3BsYXlGaWVsZDogJ0FERFJFU1MnLFxuICAgICAgICAvLyAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAvLyAgIG91dEZpZWxkczogWydBRERSRVNTJywgJ1JFQV9SRUlEJ10sXG4gICAgICAgIC8vICAgbmFtZTogJ1NpdGUgQWRkcmVzcycsXG4gICAgICAgIC8vICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiAyMjIgVyBIQVJHRVRUJ1xuICAgICAgICAvLyB9KSxcbiAgICAgICAgbmV3IFNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiAyMjIgVyBIQVJHRVRUIFNUJyxcbiAgICAgICAgICBuYW1lOiAnU2l0ZSBBZGRyZXNzJyxcbiAgICAgICAgICBnZXRTdWdnZXN0aW9uczogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWdnZXN0aW9ucyhcbiAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICAnU2l0ZSBBZGRyZXNzJyxcbiAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzVGFibGUsXG4gICAgICAgICAgICAgIFsnQUREUkVTUycsICdBRERSX0xJU1QnXSxcbiAgICAgICAgICAgICAgWydBRERSRVNTJ10sXG4gICAgICAgICAgICAgIFsnQUREUkVTUycsICdBRERSRVNTX05PRElSJ10sXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRSZXN1bHRzOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkcmVzc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogXCJBRERSRVNTID0gJ1wiICsgcGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dC50b1VwcGVyQ2FzZSgpICsgXCInXCIsXG4gICAgICAgICAgICAgICAgb3V0RmllbGRzOiBbJ0FERFJFU1MnLCAnUkVBX1JFSUQnLCAnT0JKRUNUSUQnXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlOiBmZWF0dXJlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQWRkcmVzcydcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pIGFzIGFueTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYXMgYW55KSxcbiAgICAgICAgLy8gbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgLy8gICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgIC8vICAgc2VhcmNoRmllbGRzOiBbJ09XTkVSJ10sXG4gICAgICAgIC8vICAgZGlzcGxheUZpZWxkOiAnT1dORVInLFxuICAgICAgICAvLyAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAvLyAgIG91dEZpZWxkczogWydPV05FUicsICdSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgIC8vICAgbmFtZTogJ093bmVyJyxcbiAgICAgICAgLy8gICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IFNNSVRILCBKT0hOJ1xuICAgICAgICAvLyB9KSxcbiAgICAgICAgbmV3IFNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiBTTUlUSCwgSk9ITicsXG4gICAgICAgICAgbmFtZTogJ093bmVyJyxcbiAgICAgICAgICBnZXRTdWdnZXN0aW9uczogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWdnZXN0aW9ucyhwYXJhbXMsICdPd25lcicsIHRoaXMuY29uZG9zVGFibGUsIFsnT1dORVInXSwgWydPV05FUiddLCBbJ09XTkVSJ10sIGZhbHNlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFJlc3VsdHM6IChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRyZXNzVGFibGVcbiAgICAgICAgICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiBcIk9XTkVSID0gJ1wiICsgcGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dC50b1VwcGVyQ2FzZSgpICsgXCInXCIsXG4gICAgICAgICAgICAgICAgb3V0RmllbGRzOiBbJ09XTkVSJywgJ09CSkVDVElEJ11cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZTogZmVhdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ093bmVyJ1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBhbnkpLFxuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnUElOX05VTSddLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ1BJTl9OVU0nLFxuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgIG91dEZpZWxkczogWydQSU5fTlVNJywgJ1JFSUQnLCAnT0JKRUNUSUQnXSxcbiAgICAgICAgICBuYW1lOiAnUElOJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDA3MTIzNDU2NzgnXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnUkVJRCddLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ1JFSUQnLFxuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgIG91dEZpZWxkczogWydSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgICAgbmFtZTogJ1JFSUQnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMDEyMzQ1NidcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogVyBIQVJHRVRUIFNUJyxcbiAgICAgICAgICBuYW1lOiAnU3RyZWV0IE5hbWUnLFxuICAgICAgICAgIGdldFN1Z2dlc3Rpb25zOiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1Z2dlc3Rpb25zKFxuICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgICdTdHJlZXQgTmFtZScsXG4gICAgICAgICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlLFxuICAgICAgICAgICAgICBbJ1NUUkVFVCcsICdBRERSX0xJU1QnXSxcbiAgICAgICAgICAgICAgWydTVFJFRVQnXSxcbiAgICAgICAgICAgICAgWydTVFJFRVQnLCAnU1RSRUVUX05PRElSJ10sXG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0UmVzdWx0czogKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRyZXNzVGFibGVcbiAgICAgICAgICAgICAgLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiBcIlNUUkVFVCA9ICdcIiArIHBhcmFtcy5zdWdnZXN0UmVzdWx0LnRleHQudG9VcHBlckNhc2UoKSArIFwiJ1wiLFxuICAgICAgICAgICAgICAgIG91dEZpZWxkczogWydTVFJFRVQnLCAnUkVBX1JFSUQnLCAnT0JKRUNUSUQnXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlOiBmZWF0dXJlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU3RyZWV0IE5hbWUnXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KSBhcyBhbnk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIF1cbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldC52aWV3TW9kZWwud2F0Y2goJ3Jlc3VsdHMnLCBldmVudCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hXaWRnZXQub24oJ3NlYXJjaC1jb21wbGV0ZScsIHRoaXMuc2VhcmNoQ29tcGxldGUpO1xuICB9XG4gIHRvZ2dsZUNvbnRlbnQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gJ3RhYmxlJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmUnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmUnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZUl0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCBmcm9tICcuL1Byb3BlcnR5U2VhcmNoL1Byb3BlcnR5U2VhcmNoVmlld01vZGVsJztcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlTZWFyY2hQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBwcm9wZXJ0eUxheWVyPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIGNvbmRvc1RhYmxlPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIGFkZHJlc3NUYWJsZT86IGVzcmkuRmVhdHVyZUxheWVyO1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBwcm9wZXJ0eXNlYXJjaC1iYXNlJ1xufTtcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuUHJvcGVydHlTZWFyY2gnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlTZWFyY2ggZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5jb25kb3NUYWJsZScpXG4gIGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5hZGRyZXNzVGFibGUnKVxuICBhZGRyZXNzVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLnByb3BlcnR5TGF5ZXInKVxuICBwcm9wZXJ0eUxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5zZWFyY2hXaWRnZXQnKVxuICBzZWFyY2hXaWRnZXQ6IGVzcmkud2lkZ2V0c1NlYXJjaDtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5mZWF0dXJlVGFibGUnKVxuICBmZWF0dXJlVGFibGU6IGVzcmkuRmVhdHVyZVRhYmxlO1xuICBAYWxpYXNPZigndmlld01vZGVsLmZlYXR1cmUnKVxuICBmZWF0dXJlOiBlc3JpLkZlYXR1cmU7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZ2VvbWV0cnknKVxuICBnZW9tZXRyeTogZXNyaS5HZW9tZXRyeTtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IFByb3BlcnR5U2VhcmNoVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCA9IG5ldyBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBQcm9wZXJ0eVNlYXJjaFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIF9jcmVhdGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2VhcmNoV2lkZ2V0KSB7XG4gICAgICB0aGlzLnNlYXJjaFdpZGdldC5jb250YWluZXIgPSAnc2VhcmNoJztcbiAgICB9XG4gIH07XG4gIF9jcmVhdGVUYWJsZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5mZWF0dXJlVGFibGUpIHtcbiAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmNvbnRhaW5lciA9ICd0YWJsZSc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlRmVhdHVyZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5mZWF0dXJlKSB7XG4gICAgICB0aGlzLmZlYXR1cmUuY29udGFpbmVyID0gJ2ZlYXR1cmVEaXYnO1xuICAgIH1cbiAgfTtcblxuICBjdXJyZW50UmFkaW9CdXR0b24gPSAnbGlzdCc7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NpZGVEaXYgY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtJyk7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVSYWRpb0dyb3VwSXRlbUNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2FuIEkgZ2V0IGNoZWNrZWQgYW5kIHZhbHVlIGxpa2UgdGhpcz9cbiAgICAgICAgaWYgKGUudGFyZ2V0Py5jaGVja2VkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQ/LnZhbHVlKTtcbiAgICAgICAgICB0aGlzLnZpZXdNb2RlbC50b2dnbGVDb250ZW50KGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGZlYXREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZURpdicpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njcm9sbEFycm93Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmVhdERpdj8uc2Nyb2xsQnkoeyB0b3A6IGZlYXREaXYub2Zmc2V0SGVpZ2h0LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgdGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG4gICAgaWYgKHRoZW1lKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyb3dQYXRoJyk/LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgdGhlbWUgPT09ICdsaWdodCcgPyAnYmxhY2snIDogJ3doaXRlJyk7XG4gICAgfVxuXG4gICAgZmVhdERpdj8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgaWYgKGZlYXREaXYuc2Nyb2xsVG9wID49IGZlYXREaXYuc2Nyb2xsSGVpZ2h0IC0gZmVhdERpdi5vZmZzZXRIZWlnaHQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njcm9sbEFycm93Jyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njcm9sbEFycm93Jyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZVNlYXJjaH0gaWQ9XCJzZWFyY2hcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlVGFibGV9IGlkPVwidGFibGVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImZlYXR1cmVcIiBjbGFzcz1cImhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJmZWF0dXJlRGl2XCIgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUZlYXR1cmV9PjwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGlkPVwic2Nyb2xsQXJyb3dcIlxuICAgICAgICAgICAgY2xhc3M9XCJob21lLXBhZ2VfX3Njcm9sbC1kb3duLWFycm93IGhvbWUtcGFnZV9fc2Nyb2xsLWRvd24tYXJyb3ctLWJsYWNrXCJcbiAgICAgICAgICAgIGRhdGEtZG9qby1hdHRhY2gtcG9pbnQ9XCJhcnJvd0NvbnRhaW5lclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgY2xhc3M9XCJpY29uLWlubGluZSAgXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJhcnJvd1BhdGhcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICBzdHJva2Utb3BhY2l0eT1cIjAuNVwiXG4gICAgICAgICAgICAgICAgZD1cIk0xNi41IDI3LjIwN2wtNC44NTQtNC44NTQuNzA3LS43MDdMMTYgMjUuMjkzVjVoMXYyMC4yOTNsMy42NDYtMy42NDYuNzA3LjcwN3pcIlxuICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwIHdpZHRoPVwiZnVsbFwiPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gY2hlY2tlZCB2YWx1ZT1cInRhYmxlXCIgaWQ9XCJ0YWJsZUl0ZW1cIj5cbiAgICAgICAgICAgIExpc3RcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHZhbHVlPVwiZmVhdHVyZVwiIGlkPVwiZmVhdHVyZUl0ZW1cIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIERldGFpbHNcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgTWVhc3VyZW1lbnQgZnJvbSAnZXNyaS93aWRnZXRzL01lYXN1cmVtZW50JztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5NZWFzdXJlLk1lYXN1cmVWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZVZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cbiAgbWVhc3VyZW1lbnQ6IGVzcmkuTWVhc3VyZW1lbnQ7XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxuICBtZWFzdXJlT3BlbmVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZWFzdXJlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAnKSBhcyBhbnkpLnNlbGVjdGVkSXRlbS50aXRsZTtcbiAgICBpZiAoc2VsZWN0ZWQgIT0gJ2NsZWFyJykge1xuICAgICAgdGhpcy5tZWFzdXJlbWVudC5hY3RpdmVUb29sID0gc2VsZWN0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICB9XG4gIH1cbiAgaW5pdE1lYXN1cmUoKSB7XG4gICAgdGhpcy5tZWFzdXJlbWVudCA9IG5ldyBNZWFzdXJlbWVudCh7IHZpZXc6IHRoaXMudmlldywgY29udGFpbmVyOiAnbWVhc3VyZVdpZGdldCcgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IE1lYXN1cmVWaWV3TW9kZWwgZnJvbSAnLi9NZWFzdXJlL01lYXN1cmVWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lYXN1cmVQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBtZWFzdXJlLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLk1lYXN1cmUnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZSBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLm1lYXN1cmVtZW50JylcbiAgbWVhc3VyZW1lbnQ6IGVzcmkuTWVhc3VyZW1lbnQ7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuaW5pdE1lYXN1cmUnKVxuICBpbml0TWVhc3VyZTogRnVuY3Rpb247XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubWVhc3VyZU9wZW5lZCcpXG4gIG1lYXN1cmVPcGVuZWQ6IEZ1bmN0aW9uO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTWVhc3VyZVZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogTWVhc3VyZVZpZXdNb2RlbCA9IG5ldyBNZWFzdXJlVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IE1lYXN1cmVQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfbWVhc3VyZUNyZWF0ZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5pbml0TWVhc3VyZSgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZWFzdXJlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUmFkaW9Hcm91cEl0ZW1DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldD8uY2hlY2tlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Py50aXRsZSk7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0Py50aXRsZSA9PT0gJ2NsZWFyJykge1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lYXN1cmVtZW50LmFjdGl2ZVRvb2wgPSBlLnRhcmdldD8udGl0bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdGl0bGU9XCJkaXN0YW5jZVwiIHZhbHVlPVwiZGlzdGFuY2VcIiBpZD1cInRhYmxlSXRlbVwiIGljb249XCJtZWFzdXJlXCI+XG4gICAgICAgICAgICBMaW5lXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB0aXRsZT1cImFyZWFcIiB2YWx1ZT1cImFyZWFcIiBpZD1cImZlYXR1cmVJdGVtXCIgaWNvbj1cIm1lYXN1cmUtYXJlYVwiPlxuICAgICAgICAgICAgQXJlYVxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdGl0bGU9XCJjbGVhclwiIHZhbHVlPVwiY2xlYXJcIiBpZD1cImZlYXR1cmVJdGVtXCIgaWNvbj1cInRyYXNoXCI+XG4gICAgICAgICAgICBDbGVhclxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXA+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX21lYXN1cmVDcmVhdGVkfSBpZD1cIm1lYXN1cmVXaWRnZXRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCBQb3B1cFRlbXBsYXRlIGZyb20gJ2VzcmkvUG9wdXBUZW1wbGF0ZSc7XG5pbXBvcnQgRXhwcmVzc2lvbkluZm8gZnJvbSAnZXNyaS9wb3B1cC9FeHByZXNzaW9uSW5mbyc7XG5pbXBvcnQgQ3VzdG9tQ29udGVudCBmcm9tICdlc3JpL3BvcHVwL2NvbnRlbnQvQ3VzdG9tQ29udGVudCc7XG5pbXBvcnQgTG9jYXRvciBmcm9tICdlc3JpL3Rhc2tzL0xvY2F0b3InO1xuaW1wb3J0IGdlb2Rlc2ljVXRpbHMgZnJvbSAnZXNyaS9nZW9tZXRyeS9zdXBwb3J0L2dlb2Rlc2ljVXRpbHMnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmUnO1xuaW1wb3J0IHsgdmlldyB9IGZyb20gJy4uJztcbmNvbnN0IGFyY2FkZUV4cHJlc3Npb25JbmZvcyA9IFtcbiAge1xuICAgIG5hbWU6ICdtYWlsaW5nLWFkZHJlc3MnLFxuICAgIHRpdGxlOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1doZW4oSXNFbXB0eSgkZmVhdHVyZS5BRERSMyksJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIsJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjMpJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ3Byb3BlcnR5LXZhbHVlcycsXG4gICAgdGl0bGU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgIGV4cHJlc3Npb246XG4gICAgICAnXCJCdWlsZGluZyBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuQkxER19WQUwrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkxhbmQgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkxBTkRfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3RhbCBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuVE9UQUxfVkFMVUVfQVNTRCdcbiAgfSxcblxuICB7XG4gICAgbmFtZTogJ3BpbicsXG4gICAgdGl0bGU6ICdQSU4nLFxuICAgIGV4cHJlc3Npb246IFwidmFyIG51bSA9ICRmZWF0dXJlLlBJTl9OVU07dmFyIGV4dCA9ICRmZWF0dXJlLlBJTl9FWFQ7cmV0dXJuIFdoZW4oZXh0ID09ICcwMDAnLG51bSxudW0rJyAnK2V4dCk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdidWlsZF92YWwnLFxuICAgIHRpdGxlOiAnQnVpbGRpbmcgVmFsdWUnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHZhbHVlID0gJGZlYXR1cmUuQkxER19WQUw7V2hlbihJc0VtcHR5KHZhbHVlKSwnLS0nLCAnJCcrVGV4dCh2YWx1ZSwgJyMsIyMjJykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbGFuZF92YWwnLFxuICAgIHRpdGxlOiAnTGFuZCBWYWx1ZScsXG4gICAgZXhwcmVzc2lvbjogXCJ2YXIgdmFsdWUgPSAkZmVhdHVyZS5MQU5EX1ZBTDtXaGVuKElzRW1wdHkodmFsdWUpLCctLScsICckJytUZXh0KHZhbHVlLCAnIywjIyMnKSk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd0b3RhbF92YWwnLFxuICAgIHRpdGxlOiAnVG90YWwgVmFsdWUnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHZhbHVlID0gJGZlYXR1cmUuVE9UQUxfVkFMVUVfQVNTRDtXaGVuKElzRW1wdHkodmFsdWUpLCctLScsICckJytUZXh0KHZhbHVlLCAnIywjIyMnKSk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdzYWxlX3ByaWNlJyxcbiAgICB0aXRsZTogJ1NhbGUgUHJpY2UnLFxuICAgIGV4cHJlc3Npb246IFwidmFyIHZhbHVlID0gJGZlYXR1cmUuVE9UU0FMUFJJQ0U7V2hlbihJc0VtcHR5KHZhbHVlKSwnLS0nLCAnJCcrVGV4dCh2YWx1ZSwgJyMsIyMjJykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnY2l0eScsXG4gICAgdGl0bGU6ICdDaXR5JyxcbiAgICBleHByZXNzaW9uOiBcInZhciBjaXR5ID0gJGZlYXR1cmUuQ0lUWV9ERUNPREU7V2hlbihJc0VtcHR5KGNpdHkpLCdVbmluY29ycG9yYXRlZCcsIFByb3BlcihjaXR5KSk7XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd0b3duc2hpcCcsXG4gICAgdGl0bGU6ICdUb3duc2hpcCcsXG4gICAgZXhwcmVzc2lvbjogXCJ2YXIgdHMgPSAkZmVhdHVyZS5UT1dOU0hJUF9ERUNPREU7V2hlbihJc0VtcHR5KHRzKSwnTm9uZScsIFByb3Blcih0cykpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnanVyaXNkaWN0aW9uJyxcbiAgICB0aXRsZTogJ0p1cmlzZGljdGlvbicsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICd2YXIganVyaXMgPSAkZmVhdHVyZS5QTEFOTklOR19KVVJJU0RJQ1RJT047V2hlbignICtcbiAgICAgIFwianVyaXMgPT0gJ1JBJywgJ1JhbGVpZ2gnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0NBJywgJ0NhcnknLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0FQJywgJ0FwZXgnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0FOJywgJ0FuZ2llcicsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnQ0wnLCAnQ2xheXRvbicsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnRFUnLCAnRHVyaGFtJyxcIiArXG4gICAgICBcImp1cmlzID09ICdGVicsICdGdXF1YXktVmFyaW5hJyxcIiArXG4gICAgICBcImp1cmlzID09ICdHQScsICdHYXJuZXInLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0hTJywgJ0hvbGx5IFNwcmluZ3MnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ0tOJywgJ0tuaWdodGRhbGUnLFwiICtcbiAgICAgIFwianVyaXMgPT0gJ01PJywgJ01vcnJpc3ZpbGxlJyxcIiArXG4gICAgICBcImp1cmlzID09ICdSTycsICdSb2xlc3ZpbGxlJyxcIiArXG4gICAgICBcImp1cmlzID09ICdXRicsICdXYWtlIEZvcmVzdCcsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnV0UnLCAnV2VuZGVsbCcsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnWkInLCAnWmVidWxvbicsXCIgK1xuICAgICAgXCJqdXJpcyA9PSAnV0MnLCAnV2FrZSBDb3VudHknLFwiICtcbiAgICAgIFwiICdXYWtlIENvdW50eScpO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZ2VuZXJhbCcsXG4gICAgdGl0bGU6ICdnZW5lcmFsJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1wiUElOXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5QSU5fTlVNK1wiIFwiKyRmZWF0dXJlLlBJTl9FWFQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICdcIlJFSURcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKyRmZWF0dXJlLlJFSUQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkNpdHlcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgJ1Byb3BlcigkZmVhdHVyZS5DSVRZX0RFQ09ERSkrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkp1cmlzZGljdGlvblwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAnJGZlYXR1cmUuUExBTk5JTkdfSlVSSVNESUNUSU9OK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3duc2hpcFwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrUHJvcGVyKCRmZWF0dXJlLlRPV05TSElQX0RFQ09ERSknXG4gIH1cbl0gYXMgRXhwcmVzc2lvbkluZm9bXTtcbmNvbnN0IHNlcnZpY2VzOiBhbnlbXSA9IFtcbiAge1xuICAgIGdyb3VwOiB7XG4gICAgICB0aXRsZTogJ0VsZWN0b3JhbCcsXG4gICAgICBsYXllcnM6IFtcbiAgICAgICAgJ1ByZWNpbmN0cycsXG4gICAgICAgICdDb25ncmVzc2lvbmFsIERpc3RyaWN0cycsXG4gICAgICAgICdOQyBIb3VzZSBvZiBSZXByZXNlbnRhdGl2ZXMgRGlzdHJpY3RzJyxcbiAgICAgICAgJ05DIFNlbmF0ZSBEaXN0cmljdHMnLFxuICAgICAgICAnU2Nob29sIEJvYXJkIERpc3RyaWN0cycsXG4gICAgICAgICdCb2FyZCBvZiBDb21taXNzaW9uZXJzIERpc3RyaWN0cycsXG4gICAgICAgICdTdXBlcmlvciBDb3VydCBEaXN0cmljdHMnLFxuICAgICAgICAnUmFsZWlnaCBDaXR5IENvdW5jaWwnLFxuICAgICAgICAnTW9ycmlzdmlsbGUgVG93biBDb3VuY2lsIERpc3RyaWN0cydcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBncm91cDoge1xuICAgICAgdGl0bGU6ICdFbnZpcm9ubWVudGFsJyxcbiAgICAgIGxheWVyczogW1xuICAgICAgICAnU3BlY2lhbCBGbG9vZCBIYXphcmQgQXJlYXMgLSBGbG9vZFBsYWluIC0gRmxvb2RwbGFpbicsXG4gICAgICAgICdTb2lscycsXG4gICAgICAgICdDcml0aWNhbCBXYXRlcnNoZWRzJyxcbiAgICAgICAgJ1dhdGVyIFN1cHBseSBXYXRlcnNoZWRzJ1xuICAgICAgXVxuICAgIH1cbiAgfVxuXTtcbmNvbnN0IHNlcnZpY2VDaGFuZ2VkID0gKGdyYXBoaWM6IF9fZXNyaS5HcmFwaGljLCBlOiBhbnkpID0+IHtcbiAgaWYgKFxuICAgICFlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtLmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykgJiZcbiAgICBlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtLmNoaWxkRWxlbWVudENvdW50ID09PSAwXG4gICkge1xuICAgIGNvbnN0IHNlcnZpY2VHcm91cDogYW55ID0gc2VydmljZXMuZmluZChzZXJ2aWNlID0+IHtcbiAgICAgIHJldHVybiBzZXJ2aWNlLmdyb3VwLnRpdGxlID09PSBlLmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtLmdldEF0dHJpYnV0ZSgnaXRlbS10aXRsZScpO1xuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPF9fZXNyaS5GZWF0dXJlU2V0PltdID0gW107XG5cbiAgICBpZiAoc2VydmljZUdyb3VwKSB7XG4gICAgICBjb25zdCBsYXllcnMgPSB2aWV3Lm1hcC5hbGxMYXllcnMuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VHcm91cC5ncm91cC5sYXllcnMuaW5jbHVkZXMobGF5ZXIudGl0bGUpO1xuICAgICAgfSk7XG4gICAgICBsYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIHByb21pc2VzLnB1c2goXG4gICAgICAgICAgKGxheWVyIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXIpLnF1ZXJ5RmVhdHVyZXMoe1xuICAgICAgICAgICAgZ2VvbWV0cnk6IGdyYXBoaWMuZ2VvbWV0cnksXG4gICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKHJlc3VsdCA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5mZWF0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBfX2VzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgZS5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbS5hcHBlbmQoZGl2KTtcbiAgICAgICAgICAgICAgbmV3IEZlYXR1cmUoeyBjb250YWluZXI6IGRpdiwgZ3JhcGhpYzogZmVhdHVyZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdObyBzZXJ2aWNlcyBmb3VuZC4nO1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IGRlZWRDcmVhdG9yID0gKGU6IGFueSkgPT4ge1xuICByZXR1cm4gKGUuZ3JhcGhpYy5sYXllciBhcyBGZWF0dXJlTGF5ZXIpXG4gICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHtcbiAgICAgIHJlbGF0aW9uc2hpcElkOiAoZS5ncmFwaGljLmxheWVyIGFzIEZlYXR1cmVMYXllcikucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgICByZXR1cm4gci5uYW1lID09PSAnQ09ORE9fQk9PS1MnO1xuICAgICAgfSk/LmlkLFxuICAgICAgb2JqZWN0SWRzOiBbZS5ncmFwaGljLmdldE9iamVjdElkKCldLFxuICAgICAgb3V0RmllbGRzOiBbJ0JPTV9ET0NfTlVNJywgJ0RFRURfRE9DX05VTSddXG4gICAgfSlcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgY29uc3QgZGVlZCA9IHJlc3VsdFtlLmdyYXBoaWMuZ2V0T2JqZWN0SWQoKV0uZmVhdHVyZXNbMF0uZ2V0QXR0cmlidXRlKCdERUVEX0RPQ19OVU0nKTtcbiAgICAgIGNvbnN0IGJvbSA9IHJlc3VsdFtlLmdyYXBoaWMuZ2V0T2JqZWN0SWQoKV0uZmVhdHVyZXNbMF0uZ2V0QXR0cmlidXRlKCdCT01fRE9DX05VTScpO1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7Jyk7XG4gICAgICBpZiAoZGVlZCkge1xuICAgICAgICBjb25zdCBkZWVkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1idXR0b24nKTtcbiAgICAgICAgZGVlZEJ0bi5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgJ3MnKTtcbiAgICAgICAgZGVlZEJ0bi5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgICAgZGVlZEJ0bi5zZXRBdHRyaWJ1dGUoJ3JvdW5kJywgJycpO1xuICAgICAgICBkZWVkQnRuLnNldEF0dHJpYnV0ZSgnaWNvbi1zdGFydCcsICdmaWxlLXRleHQnKTtcbiAgICAgICAgZGVlZEJ0bi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICdodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPScgKyBkZWVkICsgJyZSZWNvcmREYXRlPSdcbiAgICAgICAgKTtcblxuICAgICAgICBkZWVkQnRuLnRleHRDb250ZW50ID0gJ0RlZWQnO1xuICAgICAgICBkaXYuYXBwZW5kKGRlZWRCdG4pO1xuICAgICAgfVxuICAgICAgaWYgKGJvbSkge1xuICAgICAgICBjb25zdCBib21idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWJ1dHRvbicpO1xuICAgICAgICBib21idG4uc2V0QXR0cmlidXRlKCdzY2FsZScsICdzJyk7XG4gICAgICAgIGJvbWJ0bi5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgICAgYm9tYnRuLnNldEF0dHJpYnV0ZSgncm91bmQnLCAnJyk7XG4gICAgICAgIGJvbWJ0bi5zZXRBdHRyaWJ1dGUoJ2ljb24tc3RhcnQnLCAnbWFwJyk7XG4gICAgICAgIGJvbWJ0bi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD0nICsgYm9tICsgJyZSZWNvcmREYXRlPScpO1xuICAgICAgICBib21idG4udGV4dENvbnRlbnQgPSAnQm9vayBvZiBNYXBzJztcbiAgICAgICAgZGl2LmFwcGVuZChib21idG4pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGl2O1xuICAgIH0pO1xufTtcbmNvbnN0IHBvcHVwVGVtcGxhdGUgPSBuZXcgUG9wdXBUZW1wbGF0ZSh7XG4gIGV4cHJlc3Npb25JbmZvczogYXJjYWRlRXhwcmVzc2lvbkluZm9zLFxuICAvLyBjb250ZW50OiAoZXZlbnQ6IGFueSkgPT4ge1xuICAvLyAgIGNvbnN0IGdyYXBoaWMgPSBldmVudC5ncmFwaGljO1xuICAvLyAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWdyZWVuJyk7XG4gIC8vICAgY29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAvLyAgIGRpdi50ZXh0Q29udGVudCA9IGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdTSVRFX0FERFJFU1MnKTtcbiAgLy8gICByZXR1cm4gY29udGFpbmVyO1xuICAvLyB9LFxuICBjb250ZW50OiBbXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMT57U0lURV9BRERSRVNTfTwvaDE+J1xuICAgIH0sXG4gICAgbmV3IEN1c3RvbUNvbnRlbnQoe1xuICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgIGNyZWF0b3I6IChlOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBMb2NhdG9yKHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL21hcHMucmFsZWlnaG5jLmdvdi9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9Mb2NhdG9ycy9Db21wb3NpdGVMb2NhdG9yL0dlb2NvZGVTZXJ2ZXInLFxuICAgICAgICAgIG91dFNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9XG4gICAgICAgIH0pXG4gICAgICAgICAgLmFkZHJlc3NUb0xvY2F0aW9ucyh7XG4gICAgICAgICAgICBhZGRyZXNzOiB7IHNpbmdsZUxpbmU6IGUuZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ1NJVEVfQUREUkVTUycpIH0sXG4gICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoY2FuZGlkYXRlczogX19lc3JpLkFkZHJlc3NDYW5kaWRhdGVbXSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXMuZmluZChjYW5kaWRhdGUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGUuYXR0cmlidXRlc1snTG9jX25hbWUnXSA9PT0gJ1dha2VTdHJlZXRzJztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChjYW5kaWRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0ID0gZ2VvZGVzaWNVdGlscy5nZW9kZXNpY0Rpc3RhbmNlKGNhbmRpZGF0ZS5sb2NhdGlvbiwge1xuICAgICAgICAgICAgICAgICAgeDogKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWQubG9uZ2l0dWRlLFxuICAgICAgICAgICAgICAgICAgeTogKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWQubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSBhcyBhbnlcbiAgICAgICAgICAgICAgICB9IGFzIGFueSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGlzdC5kaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGlzdC5hemltdXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYmxsID1cbiAgICAgICAgICAgICAgICAgIChlLmdyYXBoaWMuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlnb24pLmNlbnRyb2lkLmxhdGl0dWRlICtcbiAgICAgICAgICAgICAgICAgICcsJyArXG4gICAgICAgICAgICAgICAgICAoZS5ncmFwaGljLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZC5sb25naXR1ZGU7XG4gICAgICAgICAgICAgICAgLy9jb25zdCBjYmxsID0gY2FuZGlkYXRlc1swXS5sb2NhdGlvbi55LnRvU3RyaW5nKCkgKyAnLCcgKyBjYW5kaWRhdGVzWzBdLmxvY2F0aW9uLngudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICdodHRwczovL21hcHMuZ29vZ2xlLmNvbT9sYXllcj1jJmNibGw9JyArIGNibGwgKyAnJmNicD0wLCcgKyBkaXN0LmF6aW11dGg/LnRvU3RyaW5nKCkgKyAnLDAsMCwwJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93Lm9wZW4oXG4gICAgICAgICAgICAgICAgLy8gICAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20/bGF5ZXI9YyZjYmxsPScgKyBjYmxsICsgJyZjYnA9MCwnICsgZGlzdC5hemltdXRoPy50b1N0cmluZygpICsgJywwLDAsMCdcbiAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdzsnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgJ3MnKTtcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgncm91bmQnLCAnJyk7XG4gICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnaWNvbi1zdGFydCcsICdwZXJzb24nKTtcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vbWFwcy5nb29nbGUuY29tP2xheWVyPWMmY2JsbD0nICsgY2JsbCArICcmY2JwPTAsJyArIGRpc3QuYXppbXV0aD8udG9TdHJpbmcoKSArICcsMCwwLDAnXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICdTdHJlZXQgVmlldyc7XG5cbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKGJ0bik7XG4gICAgICAgICAgICAgICAgY29uc3QgdGF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICB0YXguc2V0QXR0cmlidXRlKCdzY2FsZScsICdzJyk7XG4gICAgICAgICAgICAgICAgdGF4LnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICAgICAgICAgIHRheC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAnaHJlZicsXG4gICAgICAgICAgICAgICAgICAnaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL3JlYWxlc3RhdGUvQWNjb3VudC5hc3A/aWQ9JyArIGUuZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ1JFSUQnKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGF4LnNldEF0dHJpYnV0ZSgncm91bmQnLCAnJyk7XG4gICAgICAgICAgICAgICAgdGF4LnNldEF0dHJpYnV0ZSgnaWNvbi1zdGFydCcsICdsb2NhdG9yJyk7XG4gICAgICAgICAgICAgICAgdGF4LnRleHRDb250ZW50ID0gJ1RheCBQYWdlJztcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kKHRheCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pLFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDI+R2VuZXJhbDwvaDE+J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICBmaWVsZEluZm9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL3BpbicsXG4gICAgICAgICAgbGFiZWw6ICdQSU4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdSRUlEJyxcbiAgICAgICAgICBsYWJlbDogJ1JFSUQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL2NpdHknLFxuICAgICAgICAgIGxhYmVsOiAnQ2l0eSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vanVyaXNkaWN0aW9uJyxcbiAgICAgICAgICBsYWJlbDogJ0p1cmlzZGljdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vdG93bnNoaXAnLFxuICAgICAgICAgIGxhYmVsOiAnVG93bnNoaXAnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAgLy8ge1xuICAgIC8vICAgdHlwZTogJ2N1c3RvbScsXG4gICAgLy8gICB0ZXh0OiAnPGNhbGNpdGUtYnV0dG9uIHNjYWxlPVwic1wiIGhyZWY9XCIjXCIgY2xhc3M9XCJzdHJlZXRWaWV3XCIgdGFyZ2V0PVwiX2JsYW5rXCI+U3RyZWV0IFZpZXc8L2NhbGNpdGUtYnV0dG9uPidcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICc8aDI+T3duZXI8L2gxPidcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6XG4gICAgICAgIC8vICc8aDEgY2xhc3M9XCJ0ZXh0LWdyZWVuXCI+e1NJVEVfQUREUkVTU308L2gxPicgK1xuICAgICAgICAvLyAnPGgyPkdlbmVyYWw8L2gyPntleHByZXNzaW9uL2dlbmVyYWx9JyArXG4gICAgICAgICd7T1dORVJ9PGJyLz57ZXhwcmVzc2lvbi9tYWlsaW5nLWFkZHJlc3N9J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMj5WYWx1YXRpb248L2gxPidcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdmaWVsZHMnLFxuICAgICAgZmllbGRJbmZvczogW1xuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi9idWlsZF92YWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdleHByZXNzaW9uL2xhbmRfdmFsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnZXhwcmVzc2lvbi90b3RhbF92YWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdCSUxMSU5HX0NMQVNTX0RFQ09ERScsXG4gICAgICAgICAgbGFiZWw6ICdCaWxsaW5nIENsYXNzJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPkxhc3QgU2FsZTwvaDE+J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICBmaWVsZEluZm9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdTQUxFX0RBVEUnLFxuICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgZGF0ZUZvcm1hdDogJ3Nob3J0LWRhdGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbDogJ0RhdGUgU29sZCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ2V4cHJlc3Npb24vc2FsZV9wcmljZSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogJzxoMj5EZWVkczwvaDE+J1xuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICBmaWVsZEluZm9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdERUVEX0JPT0snLFxuICAgICAgICAgIGxhYmVsOiAnQm9vaydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ0RFRURfUEFHRScsXG4gICAgICAgICAgbGFiZWw6ICdQYWdlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnREVFRF9EQVRFJyxcbiAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6ICdzaG9ydC1kYXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6ICdEZWVkIERhdGUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdERUVEX0FDUkVTJyxcbiAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgIHBsYWNlczogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6ICdEZWVkIEFjcmVzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnUFJPUERFU0MnLFxuICAgICAgICAgIGxhYmVsOiAnTGVnYWwgRGVzY3JpcHRpb24nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuXG4gICAgbmV3IEN1c3RvbUNvbnRlbnQoe1xuICAgICAgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSxcbiAgICAgIGNyZWF0b3I6IGRlZWRDcmVhdG9yXG4gICAgfSksXG4gICAgLy8ge1xuICAgIC8vICAgdHlwZTogJ3RleHQnLFxuICAgIC8vICAgdGV4dDpcbiAgICAvLyAnPGgxIGNsYXNzPVwidGV4dC1ncmVlblwiPntTSVRFX0FERFJFU1N9PC9oMT4nICtcbiAgICAvLyAnPGgyPkdlbmVyYWw8L2gyPntleHByZXNzaW9uL2dlbmVyYWx9JyArXG4gICAgLy8gJzxoMj5Pd25lcjwvaDI+e09XTkVSfTxici8+e2V4cHJlc3Npb24vbWFpbGluZy1hZGRyZXNzfScgK1xuICAgIC8vICc8aDI+VmFsdWF0aW9uPC9oMj57ZXhwcmVzc2lvbi9wcm9wZXJ0eS12YWx1ZXN9JyArXG4gICAgLy8gJzxoMj5TYWxlIEluZm9ybWF0aW9uPC9oMj57VE9UU0FMUFJJQ0V9PGJyLz57U0FMRV9EQVRFfScgK1xuICAgIC8vICc8aDI+RGVlZHM8L2gyPntleHByZXNzaW9uL2RlZWQtYm9vay1wYWdlfScgK1xuICAgIC8vICc8YnIvPjxzdHJvbmc+RGVlZCBEYXRlPC9zdHJvbmc+PGJyLz57REVFRF9EQVRFfTxici8+JyArXG4gICAgLy8gJzxici8+TGVnYWwgRGVzY3JpcHRpb248YnIvPntQUk9QREVTQ308YnIvPicgK1xuICAgIC8vICc8YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9ib20tZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Cb29rIG9mIE1hcHM8L2E+PGJyLz48YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9kZWVkLWRvYy1udW19JlJlY29yZERhdGU9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGVlZDwvYT4nXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPkJ1aWxkaW5nPC9oMT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnZmllbGRzJyxcbiAgICAgIGZpZWxkSW5mb3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkTmFtZTogJ0hFQVRFREFSRUEnLFxuICAgICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgZGlnaXRTZXBhcmF0b3I6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsOiAnSGVhdGVkIEFyZWEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdZRUFSX0JVSUxUJyxcbiAgICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgIGRpZ2l0U2VwYXJhdG9yOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6ICdZZWFyIEJ1aWx0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmllbGROYW1lOiAnREVTSUdOX1NUWUxFX0RFQ09ERScsXG4gICAgICAgICAgbGFiZWw6ICdEZXNpZ24vU3R5bGUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdUT1RTVFJVQ1RTJyxcbiAgICAgICAgICBsYWJlbDogJ1RvdGFsIFN0cnVjdHVyZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZE5hbWU6ICdUT1RVTklUUycsXG4gICAgICAgICAgbGFiZWw6ICdUb3RhbCBVbml0cydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ21lZGlhJyxcbiAgICAgIG1lZGlhSW5mb3M6IFtdXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnPGgyPlNlcnZpY2VzPC9oMT4nXG4gICAgfSxcbiAgICBuZXcgQ3VzdG9tQ29udGVudCh7XG4gICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgY3JlYXRvcjogKGU6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBhY2NvcmRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWFjY29yZGlvbicpO1xuICAgICAgICBhY2NvcmRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3Rpb24tbW9kZScsICdzaW5nbGUnKTtcblxuICAgICAgICBzZXJ2aWNlcy5mb3JFYWNoKHNlcnZpY2UgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWFjY29yZGlvbi1pdGVtJyk7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2l0ZW0tdGl0bGUnLCBzZXJ2aWNlLmdyb3VwLnRpdGxlKTtcbiAgICAgICAgICBhY2NvcmRpb24uYXBwZW5kKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy9jb25zdCBmID0gc2VydmljZUNoYW5nZWQuYmluZChlLkdyYXBoaWMpO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KGYsIDEwMDApO1xuICAgICAgICBjb25zdCBncmFwaGljID0gZS5ncmFwaGljO1xuICAgICAgICBhY2NvcmRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUFjY29yZGlvbkNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICBzZXJ2aWNlQ2hhbmdlZChncmFwaGljLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2NvcmRpb247XG4gICAgICB9XG4gICAgfSlcbiAgXVxufSk7XG5cbmV4cG9ydCBjb25zdCBmZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnMDgwNTBiZjA2N2JiNGIyMGFkZWE0YjBiNGYwYTM5ZTMnXG4gIH0sXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgY29uZG9zVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnMDgwNTBiZjA2N2JiNGIyMGFkZWE0YjBiNGYwYTM5ZTMnXG4gIH0sXG4gIGxheWVySWQ6IDEsXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH0sXG4gIHBvcHVwVGVtcGxhdGU6IHBvcHVwVGVtcGxhdGVcbn0pO1xuY29uZG9zVGFibGUubG9hZCgpO1xuZXhwb3J0IGNvbnN0IGFkZHJlc3NUYWJsZSA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICBwb3J0YWxJdGVtOiB7XG4gICAgaWQ6ICcwODA1MGJmMDY3YmI0YjIwYWRlYTRiMGI0ZjBhMzllMydcbiAgfSxcbiAgbGF5ZXJJZDogNCxcbiAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfVxufSk7XG5hZGRyZXNzVGFibGUubG9hZCgpO1xuZXhwb3J0ICogZnJvbSAnLi9hcHAnO1xuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuaW1wb3J0IFNrZXRjaCBmcm9tICdlc3JpL3dpZGdldHMvU2tldGNoJztcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcbmltcG9ydCBUZXh0U3ltYm9sIGZyb20gJ2Vzcmkvc3ltYm9scy9UZXh0U3ltYm9sJztcblxuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IHsgbWVhc3VyZW1lbnQgfSBmcm9tICcuLi8uLi93aWRnZXRzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5EcmF3LkRyYXdWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd1ZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICBza2V0Y2g6IFNrZXRjaDtcbiAgZ3JhcGhpY3M6IEdyYXBoaWNzTGF5ZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRleHRDb2xvcjogZXNyaS5Db2xvcjtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0RHJhdygpIHtcbiAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnIH0pO1xuICAgIHRoaXMudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MpO1xuXG4gICAgdGhpcy5za2V0Y2ggPSBuZXcgU2tldGNoKHsgdmlldzogdGhpcy52aWV3LCBjb250YWluZXI6ICdza2V0Y2hEaXYnLCBsYXllcjogdGhpcy5ncmFwaGljcywgY3JlYXRpb25Nb2RlOiAnc2luZ2xlJyB9KTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG4gICAgKHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBhbnkpLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoW1syNTUsIDAsIDAsIDAuNV1dKTtcbiAgICAodGhpcy5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wgYXMgYW55KS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcblxuICAgIHRoaXMuc2tldGNoLndhdGNoKCdhY3RpdmVUb29sJywgdG9vbCA9PiB7XG4gICAgICBpZiAodG9vbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLm9uKCdjcmVhdGUnLCBlID0+IHtcbiAgICAgIGlmIChlLnN0YXRlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICAgIGlmIChlLnN0YXRlID09PSAnY29tcGxldGUnICYmIHRoaXMubGFiZWw/Lmxlbmd0aCkge1xuICAgICAgICBsZXQgbGFiZWxQb2ludDogZXNyaS5HZW9tZXRyeSA9IGUuZ3JhcGhpYy5nZW9tZXRyeTtcbiAgICAgICAgaWYgKGUuZ3JhcGhpYy5nZW9tZXRyeS50eXBlID09PSAncG9seWdvbicpIHtcbiAgICAgICAgICBsYWJlbFBvaW50ID0gKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBlc3JpLlBvbHlnb24pLmNlbnRyb2lkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZyA9IG5ldyBHcmFwaGljKHtcbiAgICAgICAgICBnZW9tZXRyeTogbGFiZWxQb2ludCxcbiAgICAgICAgICBzeW1ib2w6IG5ldyBUZXh0U3ltYm9sKHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMubGFiZWwsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgICAgICBoYWxvQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBoYWxvU2l6ZTogMSxcbiAgICAgICAgICAgIHhvZmZzZXQ6ICc1cHgnLFxuICAgICAgICAgICAgeW9mZnNldDogJzVweCcsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAncmlnaHQnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IERyYXdWaWV3TW9kZWwgZnJvbSAnLi9EcmF3L0RyYXdWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBkcmF3LWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkRyYXcnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxhYmVsJylcbiAgbGFiZWw6IHN0cmluZztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC50ZXh0Q29sb3InKVxuICB0ZXh0Q29sb3I6IENvbG9yO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IERyYXdWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IERyYXdWaWV3TW9kZWwgPSBuZXcgRHJhd1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBEcmF3UHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX2RyYXdVcGRhdGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy52aWV3TW9kZWwuc2tldGNoKSB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5pbml0RHJhdygpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxsJyk7XG4gICAgZmlsbD8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgZmlsbD8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgfSk7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaW5lJyk7XG4gICAgbGluZT8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgbGluZT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWxpbmVTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9wYWNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BhY2l0eScpO1xuICAgIG9wYWNpdHk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IuYSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpZHRoJyk7XG4gICAgd2lkdGg/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbCBhcyBlc3JpLlNpbXBsZUxpbmVTeW1ib2wpLndpZHRoID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS53aWR0aCA9IHBhcnNlRmxvYXQoXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUud2lkdGggPSBwYXJzZUZsb2F0KFxuICAgICAgICBlLnRhcmdldC52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbCcpO1xuICAgIGxhYmVsPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ2xhYmVsJywgZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRleHRDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0Q29sb3InKTtcbiAgICB0ZXh0Q29sb3I/LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnI2ZmMDAwMCcpO1xuICAgIHRleHRDb2xvcj8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ3RleHRDb2xvcicsIENvbG9yLmZyb21IZXgoZS50YXJnZXQudmFsdWUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyVXBkYXRlPXt0aGlzLl9kcmF3VXBkYXRlZH0gaWQ9XCJza2V0Y2hEaXZcIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtYmxvY2sgaGVhZGluZz1cIlNldHRpbmdzXCIgb3BlbiBjb2xsYXBzaWJsZT5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJDb2xvclwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIEZpbGwgQ29sb3IgPGNhbGNpdGUtY29sb3IgaWQ9XCJmaWxsXCIgaGlkZUNoYW5uZWxzIGhpZGVTYXZlZCBhcHBlYXJhbmNlPVwibWluaW1hbFwiIHNjYWxlPVwic1wiPjwvY2FsY2l0ZS1jb2xvcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBMaW5lIENvbG9yIDxjYWxjaXRlLWNvbG9yIGlkPVwibGluZVwiIGhpZGVDaGFubmVscyBoaWRlU2F2ZWQgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBzY2FsZT1cInNcIj48L2NhbGNpdGUtY29sb3I+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiRmlsbCBPcGFjaXR5XCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgT3BhY2l0eTxjYWxjaXRlLXNsaWRlciBzY2FsZT1cInNcIiBpZD1cIm9wYWNpdHlcIiBtYXg9XCIxXCIgbWluPVwiMFwiIHZhbHVlPVwiMC41XCIgc3RlcD1cIjAuMVwiPjwvY2FsY2l0ZS1zbGlkZXI+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiT3V0bGluZVwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIFdpZHRoIDxjYWxjaXRlLXNsaWRlciBpZD1cIndpZHRoXCIgbWF4PVwiMTBcIiBtaW49XCIwXCIgdmFsdWU9XCIxXCIgc3RlcD1cIjAuNVwiPjwvY2FsY2l0ZS1zbGlkZXI+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiTGFiZWxpbmdcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBMYWJlbCA8Y2FsY2l0ZS1pbnB1dCBzY2FsZT1cInNcIiBpZD1cImxhYmVsXCIgdHlwZT1cInRleHRhcmVhXCI+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIFRleHQgQ29sb3JcbiAgICAgICAgICAgICAgPGNhbGNpdGUtY29sb3IgaWQ9XCJ0ZXh0Q29sb3JcIiBoaWRlQ2hhbm5lbHMgaGlkZVNhdmVkIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgc2NhbGU9XCJzXCI+PC9jYWxjaXRlLWNvbG9yPlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgIDwvY2FsY2l0ZS1ibG9jay1zZWN0aW9uPlxuICAgICAgICA8L2NhbGNpdGUtYmxvY2s+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgU2tldGNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gnO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5cbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCB7IG1lYXN1cmVtZW50IH0gZnJvbSAnLi4vLi4vd2lkZ2V0cyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuU2VsZWN0LlNlbGVjdFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBsYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cbiAgc2tldGNoOiBlc3JpLlNrZXRjaDtcbiAgYnVmZmVyRGlzdGFuY2U6IG51bWJlcjtcbiAgZ3JhcGhpY3M6IEdyYXBoaWNzTGF5ZXI7XG5cbiAgaW5pdFNrZXRjaCgpIHtcbiAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnIH0pO1xuICAgIHRoaXMudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MpO1xuICAgIHRoaXMuc2tldGNoID0gbmV3IFNrZXRjaCh7XG4gICAgICB2aWV3OiB0aGlzLnZpZXcsXG4gICAgICBjb250YWluZXI6ICdzZWxlY3RXaWRnZXQnLFxuICAgICAgbGF5ZXI6IHRoaXMuZ3JhcGhpY3MsXG4gICAgICBjcmVhdGlvbk1vZGU6ICdzaW5nbGUnXG4gICAgfSk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnVwZGF0ZU9uR3JhcGhpY0NsaWNrID0gZmFsc2U7XG4gICAgdGhpcy5za2V0Y2gub24oJ2NyZWF0ZScsIGV2ID0+IHtcbiAgICAgIGlmIChldi5zdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB0aGlzLmdyYXBoaWNzLnJlbW92ZUFsbCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2LnN0YXRlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNrZXRjaC53YXRjaCgnYWN0aXZlVG9vbCcsIHRvb2wgPT4ge1xuICAgICAgaWYgKHRvb2wgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gICAgdGhpcy5zZXQoJ2J1ZmZlckRpc3RhbmNlJywgMCk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IFNlbGVjdFZpZXdNb2RlbCBmcm9tICcuL1NlbGVjdC9TZWxlY3RWaWV3TW9kZWwnO1xuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBsYXllcj86IGVzcmkuRmVhdHVyZUxheWVyO1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBzZWxlY3QtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuU2VsZWN0JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxheWVyJylcbiAgbGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLnNrZXRjaCcpXG4gIHNrZXRjaDogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2UnKVxuICBidWZmZXJEaXN0YW5jZTogbnVtYmVyO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IFNlbGVjdFZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogU2VsZWN0Vmlld01vZGVsID0gbmV3IFNlbGVjdFZpZXdNb2RlbCgpO1xuICBfc2tldGNoQ3JlYXRlZCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMudmlld01vZGVsLnNrZXRjaCkge1xuICAgICAgdGhpcy52aWV3TW9kZWwuaW5pdFNrZXRjaCgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IFNlbGVjdFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldjogYW55KSB7XG4gICAgdGhpcy5zZXQoJ2J1ZmZlckRpc3RhbmNlJywgcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3REaXYgY2FsY2l0ZS1pbnB1dCcpPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGV2OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGV2KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJVcGRhdGU9e3RoaXMuX3NrZXRjaENyZWF0ZWR9IGlkPVwic2VsZWN0V2lkZ2V0XCI+PC9kaXY+XG4gICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgIEJ1ZmZlciBEaXN0YW5jZSAoZmVldClcbiAgICAgICAgICA8Y2FsY2l0ZS1pbnB1dFxuICAgICAgICAgICAgc2NhbGU9XCJzXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICBtYXg9XCIyMDAwXCJcbiAgICAgICAgICAgIHN0ZXA9XCI1MFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy52aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2V9XG4gICAgICAgICAgPjwvY2FsY2l0ZS1pbnB1dD5cbiAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInO1xuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbmltcG9ydCBCYXNlTWFwR2FsbGVyeSBmcm9tICdlc3JpL3dpZGdldHMvQmFzZW1hcEdhbGxlcnknO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkJhc2VNYXBzLkJhc2VNYXBzVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNYXBzVmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgYmFzZW1hcHM6IEJhc2VNYXBHYWxsZXJ5O1xuICBpbWFnZXM6IEJhc2VNYXBHYWxsZXJ5O1xuXG4gIGFjdGl2ZUJhc2VtYXA6IGVzcmkuQmFzZW1hcDtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjaGFuZ2VQcm9wZXJ0eUxpbmVzID0gKGJhc2VtYXA6IGVzcmkuQmFzZW1hcCkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5TGF5ZXI6IEZlYXR1cmVMYXllciA9IHRoaXMudmlldy5tYXAuYWxsTGF5ZXJzLmZpbmQobGF5ZXIgPT4ge1xuICAgICAgcmV0dXJuIGxheWVyLnR5cGUgPT09ICdmZWF0dXJlJyAmJiBsYXllci50aXRsZSA9PT0gJ1Byb3BlcnR5JztcbiAgICB9KSBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgY29uc3QgbmV3UmVuZGVyZXI6IGVzcmkuU2ltcGxlUmVuZGVyZXIgPSAocHJvcGVydHlMYXllci5yZW5kZXJlciBhcyBlc3JpLlNpbXBsZVJlbmRlcmVyKS5jbG9uZSgpIGFzIGVzcmkuU2ltcGxlUmVuZGVyZXI7XG4gICAgaWYgKFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkYXJrJykgfHxcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbmlnaHQnKSB8fFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkYXJrJykgfHxcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCcyMCcpIHx8XG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnMTknKVxuICAgICkge1xuICAgICAgKG5ld1JlbmRlcmVyLnN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUuY29sb3IgPSBuZXcgQ29sb3IoWzI1NSwgMjU1LCAyNTUsIDAuNV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAobmV3UmVuZGVyZXIuc3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS5jb2xvciA9IG5ldyBDb2xvcihbMCwgMCwgMCwgMC41XSk7XG4gICAgfVxuICAgIHByb3BlcnR5TGF5ZXIucmVuZGVyZXIgPSBuZXdSZW5kZXJlcjtcbiAgfTtcblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdGhpcy5iYXNlbWFwcyA9IG5ldyBCYXNlTWFwR2FsbGVyeSh7IHZpZXc6IHRoaXMudmlldyB9KTtcbiAgICB0aGlzLnZpZXcud2hlbigoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVByb3BlcnR5TGluZXModGhpcy52aWV3Lm1hcC5iYXNlbWFwKTtcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcubWFwLndhdGNoKCdiYXNlbWFwJywgKGJhc2VtYXA6IGVzcmkuQmFzZW1hcCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VQcm9wZXJ0eUxpbmVzKGJhc2VtYXApO1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXMnKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAgPSB0aGlzLnZpZXcubWFwLmJhc2VtYXA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFN3aXRjaCcpPy5yZW1vdmVBdHRyaWJ1dGUoJ3N3aXRjaGVkJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBibSA9IHRoaXMuaW1hZ2VzLnZpZXdNb2RlbC5pdGVtcy5maW5kKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5iYXNlbWFwLnRpdGxlID09PSB0aGlzLnZpZXcubWFwLmJhc2VtYXAudGl0bGU7XG4gICAgICB9KTtcbiAgICAgIGlmIChibSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTd2l0Y2gnKT8uaGFzQXR0cmlidXRlKCdzd2l0Y2hlZCcpKSB7XG4gICAgICAgIHRoaXMudmlldy5tYXAuYWRkTWFueSh0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy50b0FycmF5KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xuICAgICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFjdGl2ZUJhc2VtYXAgPSB0aGlzLnZpZXcubWFwLmJhc2VtYXA7XG4gICAgdGhpcy5pbWFnZXMgPSBuZXcgQmFzZU1hcEdhbGxlcnkoe1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgc291cmNlOiB7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgaWQ6ICc0OTIzODY3NTlkMjY0ZDQ5OTQ4YmY3ZjgzOTU3ZGRiOSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlaGlkZScsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBqc29uID0gKHZpZXcubWFwIGFzIGFueSkudG9KU09OKCk7XG4gICAgICBqc29uLmluaXRpYWxTdGF0ZS52aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkgPSB2aWV3LmV4dGVudDtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hcHMnLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XG4gICAgfSk7XG4gIH1cbiAgdG9nZ2xlQ29udGVudCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSAnbWFwcycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZCcpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlc0l0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHNJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBCYXNlTWFwc1ZpZXdNb2RlbCBmcm9tICcuL0Jhc2VNYXBzL0Jhc2VNYXBzVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXNlTWFwc1Byb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGJhc2VtYXBzLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkJhc2VNYXBzJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNYXBzIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5iYXNlbWFwcycpXG4gIGJhc2VtYXBzOiBlc3JpLkJhc2VtYXBHYWxsZXJ5O1xuICBAYWxpYXNPZigndmlld01vZGVsLmltYWdlcycpXG4gIGltYWdlczogZXNyaS5CYXNlbWFwR2FsbGVyeTtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBCYXNlTWFwc1ZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogQmFzZU1hcHNWaWV3TW9kZWwgPSBuZXcgQmFzZU1hcHNWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogQmFzZU1hcHNQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgX2NyZWF0ZU1hcHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuYmFzZW1hcHMpIHtcbiAgICAgIHRoaXMuYmFzZW1hcHMuY29udGFpbmVyID0gJ21hcHMnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZUltYWdlcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgIHRoaXMuaW1hZ2VzLmNvbnRhaW5lciA9ICdpbWFnZXMnO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlU3dpdGNoQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3N3aXRjaGVkJykgIT0gJycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGNvbnNvbGUubG9nKCdhZGQnKTtcbiAgICAgIHRoaXMudmlldy5tYXAuYWRkTWFueSh0aGlzLnZpZXdNb2RlbC5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMudG9BcnJheSgpLCAwKTtcbiAgICAgIHRoaXMudmlldy5tYXAuYmFzZW1hcC5yZWZlcmVuY2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIGxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy52aWV3Lm1hcC5sYXllcnNcbiAgICAgICAgLmZpbHRlcihsYXllciA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5pbmNsdWRlcyhsYXllcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBsYXllci5vcGFjaXR5ID0gMC41O1xuICAgICAgICAgIGxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgdGhpcy52aWV3Lm1hcC5iYXNlbWFwLnJlZmVyZW5jZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgbGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xuICAgICAgICB0aGlzLnZpZXcubWFwLnJlbW92ZSh0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlU2xpZGVyQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IGxheWVycyA9IHRoaXMudmlldy5tYXAubGF5ZXJzXG4gICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXA/LmJhc2VMYXllcnMuaW5jbHVkZXMobGF5ZXIpO1xuICAgICAgfSlcbiAgICAgIC50b0FycmF5KCk7XG4gICAgbGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgbGF5ZXIub3BhY2l0eSA9IHBhcnNlRmxvYXQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcbiAgICB9KTtcbiAgfTtcblxuICBfc2xpZGVyQ3JlYXRlZCA9IChlOiBhbnkpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpXG4gICAgICA/LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjYWxjaXRlU2xpZGVyVXBkYXRlJyxcbiAgICAgICAgdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2UuYmluZCh7IGJhc2VtYXA6IHRoaXMuYmFzZW1hcHMsIHZpZXc6IHRoaXMudmlldyB9KVxuICAgICAgKTtcbiAgfTtcbiAgX2JsZW5kQ3JlYXRlZCA9IChlOiBhbnkpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFN3aXRjaCcpXG4gICAgICA/LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjYWxjaXRlU3dpdGNoQ2hhbmdlJyxcbiAgICAgICAgdGhpcy5oYW5kbGVTd2l0Y2hDaGFuZ2UuYmluZCh7IGJhc2VtYXA6IHRoaXMuYmFzZW1hcHMsIHZpZXc6IHRoaXMudmlldyB9KVxuICAgICAgKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZCcpPy5yZW1vdmVBdHRyaWJ1dGUoJ3N3aXRjaGVkJyk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jhc2VtYXBEaXYgY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtJyk7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVSYWRpb0dyb3VwSXRlbUNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2FuIEkgZ2V0IGNoZWNrZWQgYW5kIHZhbHVlIGxpa2UgdGhpcz9cbiAgICAgICAgaWYgKGUudGFyZ2V0Py5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy52aWV3TW9kZWwudG9nZ2xlQ29udGVudChlLnRhcmdldD8udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImhpZGRlblwiIGlkPVwiYmxlbmRcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1zd2l0Y2ggYWZ0ZXJDcmVhdGU9e3RoaXMuX2JsZW5kQ3JlYXRlZH0gaWQ9XCJibGVuZFN3aXRjaFwiPjwvY2FsY2l0ZS1zd2l0Y2g+IEJsZW5kXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxjYWxjaXRlLXNsaWRlclxuICAgICAgICAgIGFmdGVyQ3JlYXRlPXt0aGlzLl9zbGlkZXJDcmVhdGVkfVxuICAgICAgICAgIGNsYXNzPVwiaGlkZGVuXCJcbiAgICAgICAgICBpZD1cImJsZW5kU2xpZGVyXCJcbiAgICAgICAgICB2YWx1ZT1cIjAuNVwiXG4gICAgICAgICAgbWF4PVwiMVwiXG4gICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgc3RlcD1cIjAuMVwiXG4gICAgICAgID48L2NhbGNpdGUtc2xpZGVyPlxuXG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZU1hcHN9IGlkPVwibWFwc1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVJbWFnZXN9IGlkPVwiaW1hZ2VzXCIgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSBjaGVja2VkIHZhbHVlPVwibWFwc1wiIGlkPVwibWFwc0l0ZW1cIj5cbiAgICAgICAgICAgIE1hcHNcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHZhbHVlPVwiaW1hZ2VzXCIgaWQ9XCJpbWFnZXNJdGVtXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICBJbWFnZXJ5XG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IExheWVyTGlzdCBmcm9tICdlc3JpL3dpZGdldHMvTGF5ZXJMaXN0JztcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTGF5ZXJzLkxheWVyc1ZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllcnNWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBsYXllckxpc3Q6IGVzcmkuTGF5ZXJMaXN0O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnNvbGUubG9nKHZpZXcuc2NhbGUpO1xuICAgIHRoaXMubGF5ZXJMaXN0ID0gbmV3IExheWVyTGlzdCh7XG4gICAgICB2aWV3LFxuICAgICAgY29udGFpbmVyOiAnbGF5ZXJEaXYnLFxuICAgICAgbGlzdEl0ZW1DcmVhdGVkRnVuY3Rpb246IGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGV2ZW50Lml0ZW07XG4gICAgICAgIGlmIChpdGVtLmxheWVyLnR5cGUgIT0gJ2dyb3VwJykge1xuICAgICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtc2xpZGVyJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWluJywgJzAnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtYXgnLCAnMTAwJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWluLWxhYmVsJywgJzAlJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWF4LWxhYmVsJywgJzEwMCUnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdsYWJlbC1oYW5kbGVzJywgJycpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgKGl0ZW0/LmxheWVyLm9wYWNpdHkgKiAxMDApLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpdGVtLmxheWVyLmlkKTtcbiAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVNsaWRlclVwZGF0ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHZpZXcubWFwLmZpbmRMYXllckJ5SWQoKGV2ZW50LnRhcmdldCBhcyBhbnkpLmdldEF0dHJpYnV0ZSgnZGF0YScpKS5vcGFjaXR5ID1cbiAgICAgICAgICAgICAgcGFyc2VJbnQoKGV2ZW50Py50YXJnZXQgYXMgYW55KT8uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKSAvIDEwMDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpdGVtLnBhbmVsID0ge1xuICAgICAgICAgICAgY29udGVudDogW3NsaWRlciwgJ2xlZ2VuZCddLFxuICAgICAgICAgICAgb3BlbjogaXRlbS5sYXllci52aXNpYmxlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXRlbS5sYXllci50aXRsZSA9PT0gJ1Byb3BlcnR5Jykge1xuICAgICAgICAgICAgaXRlbS5hY3Rpb25zU2VjdGlvbnMgPSBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ1Nob3cgTGFiZWxzJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICd0b2dnbGUnLFxuICAgICAgICAgICAgICAgICAgaWQ6ICdwcm9wZXJ0eS1sYWJlbHMnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ubGF5ZXIubGFiZWxzVmlzaWJsZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxheWVyTGlzdC5vbigndHJpZ2dlci1hY3Rpb24nLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQuYWN0aW9uLmlkID09PSAncHJvcGVydHktbGFiZWxzJykge1xuICAgICAgICAoZXZlbnQuaXRlbS5sYXllciBhcyBlc3JpLkZlYXR1cmVMYXllcikubGFiZWxzVmlzaWJsZSA9IChldmVudC5hY3Rpb24gYXMgZXNyaS5BY3Rpb25Ub2dnbGUpLnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBMYXllcnNWaWV3TW9kZWwgZnJvbSAnLi9MYXllcnMvTGF5ZXJzVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBMYXllcnNQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBsYXllcnMtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTGF5ZXJzJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVycyBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxheWVyTGlzdCcpXG4gIGxheWVyTGlzdDogZXNyaS5MYXllckxpc3Q7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBMYXllcnNWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IExheWVyc1ZpZXdNb2RlbCA9IG5ldyBMYXllcnNWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogTGF5ZXJzUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG4gIF9jcmVhdGVMYXllcnMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGF5ZXJMaXN0KSB7XG4gICAgICB0aGlzLmxheWVyTGlzdC5jb250YWluZXIgPSAnbGF5ZXJzJztcbiAgICB9XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVMYXllcnN9IGlkPVwibGF5ZXJzXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaCc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTG9jYXRpb25TZWFyY2guTG9jYXRpb25TZWFyY2hWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25TZWFyY2hWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIHNlYXJjaDogU2VhcmNoO1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICB0aGlzLnNlYXJjaCA9IG5ldyBTZWFyY2goeyB2aWV3OiB2aWV3LCBtYXhTdWdnZXN0aW9uczogMzAsIHNlYXJjaEFsbEVuYWJsZWQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuc2VhcmNoLmFsbFNvdXJjZXMub24oJ2FmdGVyLWFkZCcsIGUgPT4ge1xuICAgICAgaWYgKChlLml0ZW0gYXMgYW55KS5sYXllcikge1xuICAgICAgICBlLml0ZW0ubmFtZSA9IChlLml0ZW0gYXMgYW55KS5sYXllci50aXRsZTtcbiAgICAgICAgZS5pdGVtLnBsYWNlaG9sZGVyID0gKGUuaXRlbSBhcyBhbnkpLmxheWVyLnRpdGxlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuXG5pbXBvcnQgTG9jYXRpb25TZWFyY2hWaWV3TW9kZWwgZnJvbSAnLi9Mb2NhdGlvblNlYXJjaC9Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb25TZWFyY2hQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBsb2NhdGlvbnNlYXJjaC1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Mb2NhdGlvblNlYXJjaCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblNlYXJjaCBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuc2VhcmNoJylcbiAgc2VhcmNoOiBlc3JpLndpZGdldHNTZWFyY2g7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogTG9jYXRpb25TZWFyY2hWaWV3TW9kZWwgPSBuZXcgTG9jYXRpb25TZWFyY2hWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogTG9jYXRpb25TZWFyY2hQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfc2VhcmNoQ3JlYXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNlYXJjaCkge1xuICAgICAgdGhpcy5zZWFyY2guY29udGFpbmVyID0gJ2xvY2F0aW9uU2VhcmNoJztcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX3NlYXJjaENyZWF0ZX0gaWQ9XCJsb2NhdGlvblNlYXJjaFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5pbXBvcnQgTWFwVmlldyBmcm9tICdlc3JpL3ZpZXdzL01hcFZpZXcnO1xuaW1wb3J0IE1hcCBmcm9tICdlc3JpL01hcCc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnO1xuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgd2F0Y2hVdGlscyBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuT3ZlcnZpZXdNYXAuT3ZlcnZpZXdNYXBWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcnZpZXdNYXBWaWV3TW9kZWwgZXh0ZW5kcyBkZWNsYXJlZChBY2Nlc3Nvcikge1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBvdmVydmlld01hcFZpZXc6IGVzcmkuTWFwVmlldztcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuICBzdG9wRXZ0UHJvcGFnYXRpb24gPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIGRpc2FibGVab29taW5nID0gKHZpZXc6IGFueSkgPT4ge1xuICAgIHZpZXcucG9wdXAuZG9ja0VuYWJsZWQgPSB0cnVlO1xuXG4gICAgLy8gUmVtb3ZlcyB0aGUgem9vbSBhY3Rpb24gb24gdGhlIHBvcHVwXG4gICAgdmlldy5wb3B1cC5hY3Rpb25zID0gW107XG5cbiAgICAvLyBzdG9wcyBwcm9wYWdhdGlvbiBvZiBkZWZhdWx0IGJlaGF2aW9yIHdoZW4gYW4gZXZlbnQgZmlyZXNcblxuICAgIC8vIGV4bHVkZSB0aGUgem9vbSB3aWRnZXQgZnJvbSB0aGUgZGVmYXVsdCBVSVxuICAgIHZpZXcudWkuY29tcG9uZW50cyA9IFsnYXR0cmlidXRpb24nXTtcblxuICAgIC8vIGRpc2FibGUgbW91c2Ugd2hlZWwgc2Nyb2xsIHpvb21pbmcgb24gdGhlIHZpZXdcbiAgICB2aWV3Lm9uKCdtb3VzZS13aGVlbCcsIHRoaXMuc3RvcEV2dFByb3BhZ2F0aW9uKTtcblxuICAgIC8vIGRpc2FibGUgem9vbWluZyB2aWEgZG91YmxlLWNsaWNrIG9uIHRoZSB2aWV3XG4gICAgdmlldy5vbignZG91YmxlLWNsaWNrJywgdGhpcy5zdG9wRXZ0UHJvcGFnYXRpb24pO1xuXG4gICAgLy8gZGlzYWJsZSB6b29taW5nIG91dCB2aWEgZG91YmxlLWNsaWNrICsgQ29udHJvbCBvbiB0aGUgdmlld1xuICAgIHZpZXcub24oJ2RvdWJsZS1jbGljaycsIFsnQ29udHJvbCddLCB0aGlzLnN0b3BFdnRQcm9wYWdhdGlvbik7XG5cbiAgICAvLyBkaXNhYmxlcyBwaW5jaC16b29tIGFuZCBwYW5uaW5nIG9uIHRoZSB2aWV3XG4gICAgdmlldy5vbignZHJhZycsIHRoaXMuc3RvcEV2dFByb3BhZ2F0aW9uKTtcblxuICAgIC8vIGRpc2FibGUgdGhlIHZpZXcncyB6b29tIGJveCB0byBwcmV2ZW50IHRoZSBTaGlmdCArIGRyYWdcbiAgICAvLyBhbmQgU2hpZnQgKyBDb250cm9sICsgZHJhZyB6b29tIGdlc3R1cmVzLlxuICAgIHZpZXcub24oJ2RyYWcnLCBbJ1NoaWZ0J10sIHRoaXMuc3RvcEV2dFByb3BhZ2F0aW9uKTtcbiAgICB2aWV3Lm9uKCdkcmFnJywgWydTaGlmdCcsICdDb250cm9sJ10sIHRoaXMuc3RvcEV2dFByb3BhZ2F0aW9uKTtcblxuICAgIC8vIHByZXZlbnRzIHpvb21pbmcgd2l0aCB0aGUgKyBhbmQgLSBrZXlzXG4gICAgdmlldy5vbigna2V5LWRvd24nLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcHJvaGliaXRlZEtleXMgPSBbJysnLCAnLScsICdTaGlmdCcsICdfJywgJz0nXTtcbiAgICAgIGNvbnN0IGtleVByZXNzZWQgPSBldmVudC5rZXk7XG4gICAgICBpZiAocHJvaGliaXRlZEtleXMuaW5kZXhPZihrZXlQcmVzc2VkKSAhPT0gLTEpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmlldztcbiAgfTtcblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcCh7IGJhc2VtYXA6ICdzdHJlZXRzLW5hdmlnYXRpb24tdmVjdG9yJyB9KTtcbiAgICB0aGlzLm92ZXJ2aWV3TWFwVmlldyA9IG5ldyBNYXBWaWV3KHsgbWFwOiBtYXAsIGV4dGVudDogdmlldy5leHRlbnQgfSk7XG4gICAgdGhpcy5kaXNhYmxlWm9vbWluZyh0aGlzLm92ZXJ2aWV3TWFwVmlldyk7XG4gICAgdGhpcy5vdmVydmlld01hcFZpZXcudWkucmVtb3ZlKCd6b29tJyk7XG5cbiAgICBjb25zdCBncmFwaGljID0gbmV3IEdyYXBoaWMoe1xuICAgICAgZ2VvbWV0cnk6IG51bGwsXG4gICAgICBzeW1ib2w6IHtcbiAgICAgICAgdHlwZTogJ3NpbXBsZS1maWxsJyxcbiAgICAgICAgY29sb3I6IFswLCAwLCAwLCAwLjVdLFxuICAgICAgICBvdXRsaW5lOiBudWxsXG4gICAgICB9XG4gICAgfSBhcyBhbnkpO1xuICAgIHRoaXMub3ZlcnZpZXdNYXBWaWV3LmdyYXBoaWNzLmFkZChncmFwaGljKTtcbiAgICB3YXRjaFV0aWxzLmluaXQodmlldywgJ2V4dGVudCcsIGV4dGVudCA9PiB7XG4gICAgICAvLyBpZiAodmlldy5zdGF0aW9uYXJ5KSB7XG4gICAgICB0aGlzLm92ZXJ2aWV3TWFwVmlld1xuICAgICAgICAuZ29Ubyh7XG4gICAgICAgICAgY2VudGVyOiB2aWV3LmNlbnRlcixcbiAgICAgICAgICBzY2FsZTpcbiAgICAgICAgICAgIHZpZXcuc2NhbGUgKlxuICAgICAgICAgICAgMiAqXG4gICAgICAgICAgICBNYXRoLm1heCh2aWV3LndpZHRoIC8gdGhpcy5vdmVydmlld01hcFZpZXcud2lkdGgsIHZpZXcuaGVpZ2h0IC8gdGhpcy5vdmVydmlld01hcFZpZXcuaGVpZ2h0KVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBpZ25vcmUgZ290by1pbnRlcnJ1cHRlZCBlcnJvcnNcbiAgICAgICAgICBpZiAoZXJyb3IubmFtZSAhPSAndmlldzpnb3RvLWludGVycnVwdGVkJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIC8vICB9XG5cbiAgICAgIGdyYXBoaWMuZ2VvbWV0cnkgPSBleHRlbnQ7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IE92ZXJ2aWV3TWFwVmlld01vZGVsIGZyb20gJy4vT3ZlcnZpZXdNYXAvT3ZlcnZpZXdNYXBWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJ2aWV3TWFwUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgb3ZlcnZpZXdtYXAtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuT3ZlcnZpZXdNYXAnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcnZpZXdNYXAgZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwub3ZlcnZpZXdNYXBWaWV3JylcbiAgb3ZlcnZpZXdNYXBWaWV3OiBlc3JpLk1hcFZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubmFtZScpXG4gIEByZW5kZXJhYmxlKClcbiAgbmFtZSA9ICcnO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogT3ZlcnZpZXdNYXBWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IE92ZXJ2aWV3TWFwVmlld01vZGVsID0gbmV3IE92ZXJ2aWV3TWFwVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IE92ZXJ2aWV3TWFwUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG4gIG92ZXJ2aWV3Q3JlYXRlZCA9IChkaXY6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgaWYgKHRoaXMub3ZlcnZpZXdNYXBWaWV3KSB7XG4gICAgICB0aGlzLm92ZXJ2aWV3TWFwVmlldy5jb250YWluZXIgPSBkaXY7XG4gICAgfVxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5vdmVydmlld0NyZWF0ZWR9IGlkPVwib3ZlcnZpZXdEaXZcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIFdpZGdldHNcbmltcG9ydCBMZWdlbmQgZnJvbSAnZXNyaS93aWRnZXRzL0xlZ2VuZCc7XG5pbXBvcnQgUHJpbnQgZnJvbSAnZXNyaS93aWRnZXRzL1ByaW50JztcbmltcG9ydCBCb29rbWFya3MgZnJvbSAnZXNyaS93aWRnZXRzL0Jvb2ttYXJrcyc7XG5pbXBvcnQgUHJvcGVydHlTZWFyY2ggZnJvbSAnLi93aWRnZXRzL1Byb3BlcnR5U2VhcmNoJztcbmltcG9ydCBDb29yZGluYXRlQ29udmVyc2lvbiBmcm9tICdlc3JpL3dpZGdldHMvQ29vcmRpbmF0ZUNvbnZlcnNpb24nO1xuaW1wb3J0IEV4cGFuZCBmcm9tICdlc3JpL3dpZGdldHMvRXhwYW5kJztcbmltcG9ydCBNZWFzdXJlIGZyb20gJy4vd2lkZ2V0cy9NZWFzdXJlJztcbmltcG9ydCBDb21wYXNzIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Db21wYXNzJztcbmltcG9ydCBMb2NhdGUgZnJvbSAnZXNyaS93aWRnZXRzL0xvY2F0ZSc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnZXNyaS93aWRnZXRzL1RyYWNrJztcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GdWxsc2NyZWVuJztcblxuaW1wb3J0IHsgY29uZG9zVGFibGUsIGFkZHJlc3NUYWJsZSwgZmVhdHVyZUxheWVyIH0gZnJvbSAnLi9kYXRhL3NlYXJjaCc7XG5pbXBvcnQgZXNyaSA9IF9fZXNyaTtcbmltcG9ydCBEcmF3IGZyb20gJy4vd2lkZ2V0cy9EcmF3JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi93aWRnZXRzL1NlbGVjdCc7XG5pbXBvcnQgQmFzZU1hcHMgZnJvbSAnLi93aWRnZXRzL0Jhc2VNYXBzJztcbmltcG9ydCBMYXllcnMgZnJvbSAnLi93aWRnZXRzL0xheWVycyc7XG5pbXBvcnQgTG9jYXRpb25TZWFyY2ggZnJvbSAnLi93aWRnZXRzL0xvY2F0aW9uU2VhcmNoJztcbmltcG9ydCBPdmVydmlld01hcCBmcm9tICcuL3dpZGdldHMvT3ZlcnZpZXdNYXAnO1xuXG5leHBvcnQgY29uc3QgbWVhc3VyZW1lbnQ6IE1lYXN1cmUgPSBuZXcgTWVhc3VyZSgpO1xuZXhwb3J0IGNvbnN0IHNlbGVjdDogU2VsZWN0ID0gbmV3IFNlbGVjdCgpO1xuZXhwb3J0IGxldCBsYXllcnM6IExheWVycztcbmV4cG9ydCBsZXQgbGVnZW5kOiBMZWdlbmQ7XG5leHBvcnQgbGV0IGJhc2VtYXBzOiBCYXNlTWFwcztcbmV4cG9ydCBsZXQgYm9va21hcmtzOiBCb29rbWFya3M7XG5leHBvcnQgbGV0IGxvY2F0aW9uU2VhcmNoOiBMb2NhdGlvblNlYXJjaDtcblxuZXhwb3J0IGxldCBwcmludFdpZGdldDogUHJpbnQ7XG5leHBvcnQgbGV0IHByb3BlcnR5U2VhcmNoOiBQcm9wZXJ0eVNlYXJjaDtcbmV4cG9ydCBjb25zdCBkcmF3V2lkZ2V0OiBEcmF3ID0gbmV3IERyYXcoKTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0V2lkZ2V0KG5hbWU6IHN0cmluZywgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgaWYgKG5hbWUgPT09ICdTZWFyY2gnICYmICFwcm9wZXJ0eVNlYXJjaCkge1xuICAgIHByb3BlcnR5U2VhcmNoID0gbmV3IFByb3BlcnR5U2VhcmNoKHtcbiAgICAgIHZpZXc6IHZpZXcsXG4gICAgICBjb25kb3NUYWJsZTogY29uZG9zVGFibGUsXG4gICAgICBhZGRyZXNzVGFibGU6IGFkZHJlc3NUYWJsZSxcbiAgICAgIHByb3BlcnR5TGF5ZXI6IGZlYXR1cmVMYXllcixcbiAgICAgIGNvbnRhaW5lcjogJ3NpZGVEaXYnXG4gICAgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdMYXllcnMnICYmICFsYXllcnMpIHtcbiAgICBsYXllcnMgPSBuZXcgTGF5ZXJzKHsgdmlldywgY29udGFpbmVyOiAnbGF5ZXJzRGl2JyB9KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ0xlZ2VuZCcgJiYgIWxlZ2VuZCkge1xuICAgIGxlZ2VuZCA9IG5ldyBMZWdlbmQoeyB2aWV3LCBjb250YWluZXI6ICdsZWdlbmREaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnUHJpbnQnICYmICFwcmludFdpZGdldCkge1xuICAgIHByaW50V2lkZ2V0ID0gbmV3IFByaW50KHtcbiAgICAgIHZpZXcsXG4gICAgICBjb250YWluZXI6ICdwcmludERpdicsXG4gICAgICBwcmludFNlcnZpY2VVcmw6XG4gICAgICAgICdodHRwczovL3V0aWxpdHkuYXJjZ2lzb25saW5lLmNvbS9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9VdGlsaXRpZXMvUHJpbnRpbmdUb29scy9HUFNlcnZlci9FeHBvcnQlMjBXZWIlMjBNYXAlMjBUYXNrJ1xuICAgIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnQm9va21hcmtzJyAmJiAhYm9va21hcmtzKSB7XG4gICAgYm9va21hcmtzID0gbmV3IEJvb2ttYXJrcyh7IHZpZXcsIGNvbnRhaW5lcjogJ2Jvb2ttYXJrRGl2JywgZWRpdGluZ0VuYWJsZWQ6IHRydWUgfSk7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gJ0Jhc2VtYXBzJyAmJiAhYmFzZW1hcHMpIHtcbiAgICBiYXNlbWFwcyA9IG5ldyBCYXNlTWFwcyh7IHZpZXcsIGNvbnRhaW5lcjogJ2Jhc2VtYXBEaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnTG9jYXRpb24nICYmICFsb2NhdGlvblNlYXJjaCkge1xuICAgIGxvY2F0aW9uU2VhcmNoID0gbmV3IExvY2F0aW9uU2VhcmNoKHsgdmlldywgY29udGFpbmVyOiAnbG9jYXRpb25EaXYnIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaW5pdFdpZGdldHModmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgY29uc3QgY29vcmRpbmF0ZXM6IGVzcmkuQ29vcmRpbmF0ZUNvbnZlcnNpb24gPSBuZXcgQ29vcmRpbmF0ZUNvbnZlcnNpb24oeyB2aWV3IH0pO1xuICBjb25zdCBjb29yZGluYXRlc0V4cGFuZDogRXhwYW5kID0gbmV3IEV4cGFuZCh7XG4gICAgY29udGVudDogY29vcmRpbmF0ZXMsXG4gICAgbW9kZTogJ2Zsb2F0aW5nJyxcbiAgICBleHBhbmRJY29uQ2xhc3M6ICdlc3JpLWljb24tcGFuMidcbiAgfSk7XG4gIHZpZXcudWkuYWRkKGNvb3JkaW5hdGVzRXhwYW5kLCAnYm90dG9tLWxlZnQnKTtcblxuICB2aWV3LnVpLmFkZChuZXcgQ29tcGFzcyh7IHZpZXc6IHZpZXcgfSksICd0b3AtbGVmdCcpO1xuICBjb25zdCBsb2NhdGU6IExvY2F0ZSA9IG5ldyBMb2NhdGUoeyB2aWV3OiB2aWV3IH0pO1xuICBsb2NhdGUub24oJ2xvY2F0ZS1lcnJvcicsIChldmVudDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9KTtcbiAgdmlldy51aS5hZGQobG9jYXRlLCAndG9wLWxlZnQnKTtcblxuICBjb25zdCB0cmFjazogVHJhY2sgPSBuZXcgVHJhY2soeyB2aWV3OiB2aWV3IH0pO1xuICB0cmFjay5vbigndHJhY2stZXJyb3InLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfSk7XG4gIHZpZXcudWkuYWRkKHRyYWNrLCAndG9wLWxlZnQnKTtcbiAgdmlldy51aS5hZGQobmV3IEZ1bGxzY3JlZW4oeyB2aWV3IH0pLCAndG9wLWxlZnQnKTtcbiAgbWVhc3VyZW1lbnQudmlldyA9IHZpZXc7XG4gIG1lYXN1cmVtZW50LmNvbnRhaW5lciA9ICdtZWFzdXJlRGl2JztcbiAgZHJhd1dpZGdldC52aWV3ID0gdmlldztcbiAgZHJhd1dpZGdldC5jb250YWluZXIgPSAnZHJhd0Rpdic7XG4gIGNvbnN0IG92ZXJ2aWV3TWFwID0gbmV3IE92ZXJ2aWV3TWFwKHsgdmlldyB9KTtcbiAgY29uc3Qgb3ZlcnZpZXdFeHBhbmQ6IEV4cGFuZCA9IG5ldyBFeHBhbmQoe1xuICAgIGNvbnRlbnQ6IG92ZXJ2aWV3TWFwLFxuICAgIG1vZGU6ICdmbG9hdGluZycsXG4gICAgZXhwYW5kSWNvbkNsYXNzOiAnZXNyaS1pY29uLW92ZXJ2aWV3LWFycm93LXRvcC1sZWZ0J1xuICB9KTtcbiAgb3ZlcnZpZXdFeHBhbmQud2F0Y2goJ2V4cGFuZGVkJywgZXhwYW5kZWQgPT4ge1xuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgb3ZlcnZpZXdNYXAudmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldy5nb1RvKHtcbiAgICAgICAgY2VudGVyOiB2aWV3LmNlbnRlcixcbiAgICAgICAgc2NhbGU6XG4gICAgICAgICAgdmlldy5zY2FsZSAqXG4gICAgICAgICAgMiAqXG4gICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICB2aWV3LndpZHRoIC8gb3ZlcnZpZXdNYXAudmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldy53aWR0aCxcbiAgICAgICAgICAgIHZpZXcuaGVpZ2h0IC8gb3ZlcnZpZXdNYXAudmlld01vZGVsLm92ZXJ2aWV3TWFwVmlldy5oZWlnaHRcbiAgICAgICAgICApXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICB2aWV3LnVpLmFkZChvdmVydmlld0V4cGFuZCwgJ2JvdHRvbS1yaWdodCcpO1xuXG4gIHNlbGVjdC5jb250YWluZXIgPSAnc2VsZWN0RGl2JztcbiAgc2VsZWN0LnZpZXcgPSB2aWV3O1xuICBzZWxlY3QubGF5ZXIgPSBmZWF0dXJlTGF5ZXI7XG4gIHJldHVybiB2aWV3O1xufVxuIiwiaW1wb3J0IHsgbWVhc3VyZW1lbnQsIGluaXRXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMnO1xuaW1wb3J0IHsgdmlldyB9IGZyb20gJy4vaW5kZXgnO1xuLy9oYW5kbGUgYWN0aW9uIGJhciB0b2dnbGVcbmV4cG9ydCBjb25zdCB0b2dnbGVBY3Rpb24gPSAoYWN0aW9uOiBzdHJpbmcpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsJykuZm9yRWFjaCgocGFuZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKHBhbmVsLnRpdGxlICE9IGFjdGlvbikge1xuICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKHBhbmVsKTtcbiAgICAgIHBhbmVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgICBjb25zb2xlLmxvZyhwYW5lbCk7XG4gICAgICBjb25zb2xlLmxvZyhwYW5lbC50aXRsZSk7XG4gICAgICBpZiAoIXBhbmVsLmhhc0F0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDwgNTAwKSB7XG4gICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDM1MHB4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAnTWVhc3VyZScpIHtcbiAgICAgICAgICAvL21lYXN1cmVtZW50Lm1lYXN1cmVtZW50LmNsZWFyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVhc3VyZW1lbnQubWVhc3VyZU9wZW5lZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25zOiBOb2RlTGlzdE9mPEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1hY3Rpb24tYmFyIGNhbGNpdGUtYWN0aW9uJyk7XG5hY3Rpb25zPy5mb3JFYWNoKChhY3Rpb246IEVsZW1lbnQpID0+IHtcbiAgYWN0aW9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC50ZXh0KTtcbiAgICB0b2dnbGVBY3Rpb24oZS50YXJnZXQudGV4dCk7XG4gICAgaW5pdFdpZGdldChlLnRhcmdldC50ZXh0LCB2aWV3KTtcbiAgICBhY3Rpb25zLmZvckVhY2goKGE6IGFueSkgPT4ge1xuICAgICAgaWYgKGEudGV4dCAhPSBlLnRhcmdldC50ZXh0KSB7XG4gICAgICAgIGEucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhY3Rpb24uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBjb25zdCBlbmFibGVBY3Rpb25iYXIgPSAoKSA9PiB7XG4gIGluaXRXaWRnZXQoJ1NlYXJjaCcsIHZpZXcpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFjdGlvbi1iYXIgY2FsY2l0ZS1hY3Rpb24nKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25iYXInO1xuXG5leHBvcnQgY29uc3QgaW5pdFBhbmVsSGVhZGVycyA9ICgpID0+IHtcbiAgLy9vdmVycmlkZSBDU1MgZm9yIGNhbGNpdGUgcGFuZWwgaGVhZGVyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwgZGl2JykuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgaWYgKHBhbmVsLnNsb3QgPT09ICdoZWFkZXItdHJhaWxpbmctY29udGVudCcpIHtcbiAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsnKTtcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4gICAgaWYgKChldmVudD8udGFyZ2V0IGFzIGFueSk/Lm91dGVyV2lkdGggPj0gNTAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucXVlcnlTZWxlY3RvcignLm1heGltaXplJyk/LmdldEF0dHJpYnV0ZSgnaWNvbicpID09PSAnbWluaW1pemUnKSB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiAzNTBweCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiAwcHgnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUGFuZWxEaXNtaXNzZWRDaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXhpbWl6ZScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAnbWF4aW1pemUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIC8vaGFuZGxlIHBhbmVsIG1heGltaXplL21pbmltaXplXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXhpbWl6ZScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21heGltaXplJykge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtaW5pbWl6ZScpO1xuICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KScpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaWNvbicpID09PSAnbWluaW1pemUnKSB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpY29uJywgJ21heGltaXplJyk7XG4gICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6MzUwcHgnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGluaXRQYW5lbHMgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGNvbnN0IGk6IEhUTUxFbGVtZW50ID0gaXRlbT8uc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGkpIHtcbiAgICAgIGkuaW5uZXJIVE1MICs9ICc8c3R5bGU+LmNvbnRlbnQtY29udGFpbmVyIHsgaGVpZ2h0OiAxMDAlOyB9IDwvc3R5bGU+JztcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogZmFsc2UsIHN1YnRyZWU6IGZhbHNlIH07XG4gICAgY29uc3QgY2FsbGJhY2sgPSAobXV0YXRpb25zTGlzdDogYW55W10pID0+IHtcbiAgICAgIC8vIFVzZSB0cmFkaXRpb25hbCAnZm9yIGxvb3BzJyBmb3IgSUUgMTFcbiAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zTGlzdCkge1xuICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNtaXNzZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtdXRhdGlvbik7XG4gICAgICAgICAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhY3Rpb24udGV4dCA9PT0gKG11dGF0aW9uLnRhcmdldCBhcyBhbnkpLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKChtdXRhdGlvbi50YXJnZXQgYXMgYW55KS5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYWN0aW9uLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAod2luZG93Lm91dGVyV2lkdGggPD0gNTAwKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgobXV0YXRpb24udGFyZ2V0IGFzIGFueSkuaGFzQXR0cmlidXRlKCdkaXNtaXNzZWQnKSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKG11dGF0aW9uLnRhcmdldCBhcyBhbnkpLnRpdGxlLCAnZGlzbWlzc2VkJyk7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0RpdicpPy5jbGFzc0xpc3QucmVtb3ZlKCdiZWxvdycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygobXV0YXRpb24udGFyZ2V0IGFzIGFueSkudGl0bGUsICdub3QgZGlzbWlzc2VkJyk7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0RpdicpPy5jbGFzc0xpc3QuYWRkKCdiZWxvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGl0ZW0sIGNvbmZpZyk7XG4gIH0pO1xufTtcbiIsImltcG9ydCAnLi9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9kYXRhL2FwcCc7XG5pbXBvcnQgeyBpbml0VGlwcyB9IGZyb20gJy4vdGlwcyc7XG5pbXBvcnQgeyBzaG93QWxlcnQgfSBmcm9tICcuL2FsZXJ0JztcbmltcG9ydCB7IHRvZ2dsZUFjdGlvbiwgZW5hYmxlQWN0aW9uYmFyIH0gZnJvbSAnLi9hY3Rpb25iYXInO1xuaW1wb3J0IE1hcFZpZXcgZnJvbSAnZXNyaS92aWV3cy9NYXBWaWV3JztcblxuaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSc7XG4vLyB3aWRnZXQgdXRpbHNcbmltcG9ydCB7IGluaXRXaWRnZXRzLCBzZWxlY3QsIHByb3BlcnR5U2VhcmNoLCBsYXllcnMgfSBmcm9tICcuL3dpZGdldHMnO1xuaW1wb3J0IHsgaW5pdFBhbmVscywgaW5pdFBhbmVsSGVhZGVycyB9IGZyb20gJy4vcGFuZWxzJztcbmltcG9ydCB7IGluaXRNZW51IH0gZnJvbSAnLi9tZW51JztcblxuLyoqXG4gKiBJbml0aWFsaXplIGFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB2aWV3ID0gbmV3IE1hcFZpZXcoe1xuICBjb250YWluZXI6ICd2aWV3RGl2JyxcbiAgbWFwXG59KTtcblxuZnVuY3Rpb24gY2hlY2tMb2NhbFN0b3JhZ2UodmlldzogTWFwVmlldykge1xuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpKSB7XG4gICAgY29uc3Qgd2VibWFwOiBXZWJNYXAgPSBXZWJNYXAuZnJvbUpTT04oSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzJykgYXMgc3RyaW5nKSk7XG4gICAgd2VibWFwLmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgIHZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgY29uc3QgbHlyID0gd2VibWFwLmFsbExheWVycy5maW5kKGwgPT4ge1xuICAgICAgICAgIHJldHVybiBsYXllci5pZCA9PT0gbC5pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGxheWVyLnZpc2libGUgPSBseXI/LnZpc2libGU7XG4gICAgICAgIGxheWVyLm9wYWNpdHkgPSBseXI/Lm9wYWNpdHk7XG4gICAgICB9KTtcbiAgICAgIHZpZXcubWFwLmJhc2VtYXAgPSB3ZWJtYXAuYmFzZW1hcDtcbiAgICAgIHZpZXcuZXh0ZW50ID0gd2VibWFwLmluaXRpYWxWaWV3UHJvcGVydGllcy52aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkuZXh0ZW50O1xuICAgIH0pO1xuICB9XG59XG4vL2hhbmRsZSB3aGVuIHZpZXcgaXMgcmVhZHlcbnZpZXcud2hlbigoKSA9PiB7XG4gIGNoZWNrTG9jYWxTdG9yYWdlKHZpZXcpO1xuICB2aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgaWYgKGxheWVyLnR5cGUgIT0gJ2dyb3VwJykge1xuICAgICAgbGF5ZXIud2F0Y2goJ3Zpc2libGUnLCB2aXNpYmxlID0+IHtcbiAgICAgICAgbGF5ZXJzPy5sYXllckxpc3Q/Lm9wZXJhdGlvbmFsSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5sYXllci50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGl0ZW0uY2hpbGRyZW4uZmluZChpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGkubGF5ZXIgPT09IGxheWVyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgY2hpbGQucGFuZWwub3BlbiA9IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXllci53YXRjaCgndmlzaWJsZScsIHZpc2libGUgPT4ge1xuICAgICAgICBjb25zdCBncm91cCA9IGxheWVycz8ubGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMuZmluZChpID0+IHtcbiAgICAgICAgICByZXR1cm4gaS5sYXllciA9PT0gbGF5ZXI7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgICBncm91cC5vcGVuID0gdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgcHJvcGVydHlMYXllciA9IG1hcC5hbGxMYXllcnMuZmluZChsYXllciA9PiB7XG4gICAgcmV0dXJuIGxheWVyLnRpdGxlID09PSAnUHJvcGVydHknICYmIGxheWVyLnR5cGUgPT09ICdmZWF0dXJlJztcbiAgfSk7XG4gIHZpZXcub24oJ2hvbGQnLCBlID0+IHtcbiAgICBwcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGUubWFwUG9pbnQ7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0b2dnbGVBY3Rpb24oJ1NlYXJjaCcpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbiAgdmlld1xuICAgIC53aGVuTGF5ZXJWaWV3KHByb3BlcnR5TGF5ZXIpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcExvYWRlcicpPy50b2dnbGVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgICAgcHJvcGVydHlTZWFyY2gucHJvcGVydHlMYXllciA9IHByb3BlcnR5TGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgICAgIC8vc2VhcmNoIGJ5IGdlb21ldHJ5IGFmdGVyIHNrZXRjaCBjcmVhdGlvbiBpbiBzZWxlY3Qgd2lkZ2V0XG4gICAgICBzZWxlY3Qudmlld01vZGVsLnNrZXRjaC5vbignY3JlYXRlJywgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGV2LnN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgaWYgKHNlbGVjdC52aWV3TW9kZWw/LmJ1ZmZlckRpc3RhbmNlID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljQnVmZmVyKGV2LmdyYXBoaWMuZ2VvbWV0cnksIHNlbGVjdC52aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2UsICdmZWV0Jyk7XG4gICAgICAgICAgICBwcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGcgYXMgX19lc3JpLlBvbHlnb247XG4gICAgICAgICAgICBldi5ncmFwaGljLmdlb21ldHJ5ID0gZztcbiAgICAgICAgICAgIHNlbGVjdC52aWV3TW9kZWwuZ3JhcGhpY3MuYWRkKGV2LmdyYXBoaWMpO1xuICAgICAgICAgICAgZXYuZ3JhcGhpYy5zeW1ib2wgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgICAgICAgICAgIHN0eWxlOiAnbm9uZScsXG4gICAgICAgICAgICAgIG91dGxpbmU6IHsgc3R5bGU6ICdzaG9ydC1kYXNoJywgd2lkdGg6IDIuNSwgY29sb3I6IFsyMjEsIDIyMSwgMjIxLCAxXSB9LFxuICAgICAgICAgICAgICBjb2xvcjogWzI1NSwgMjQzLCAxMywgMC4yNV1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2aWV3LmdvVG8oZXYuZ3JhcGhpYyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BlcnR5U2VhcmNoLmdlb21ldHJ5ID0gZXYuZ3JhcGhpYy5nZW9tZXRyeTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9nZ2xlQWN0aW9uKCdTZWFyY2gnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKHJlYXNvbjogYW55KSA9PiB7XG4gICAgICAvL29uIGVycm9yIGxvYWRpbmcgcHJvcGVydHkgbGF5ZXIsIGRpc3BsYXkgYWxlcnRcbiAgICAgIGNvbnNvbGUubG9nKHJlYXNvbik7XG4gICAgICBzaG93QWxlcnQoJ1Byb3BlcnR5IGxheWVyIGRpZCBub3QgbG9hZC4gUGxlYXNlIGNvbnRhY3QgaU1BUFMgSGVscCBEZXNrLicsICdyZWQnKTtcbiAgICB9KTtcbn0pO1xudmlldy53aGVuKGluaXRXaWRnZXRzKTtcbnZpZXcud2hlbihpbml0VGlwcyk7XG4vL3NhdmUgd2ViIG1hcCB0byBsb2NhbCBzdG9yYWdlIG9uIHBhZ2VoaWRlXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCAoKSA9PiB7XG4gIHZpZXcubWFwLnJlbW92ZU1hbnkoXG4gICAgdmlldy5tYXAuYWxsTGF5ZXJzXG4gICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIGxheWVyLnR5cGUgPT09ICdncm91cCcgJiYgIShsYXllciBhcyBfX2VzcmkuR3JvdXBMYXllcikubGF5ZXJzLmxlbmd0aDtcbiAgICAgIH0pXG4gICAgICAudG9BcnJheSgpXG4gICk7XG4gIGNvbnN0IGpzb24gPSAodmlldy5tYXAgYXMgYW55KS50b0pTT04oKTtcbiAganNvbi5pbml0aWFsU3RhdGUudmlld3BvaW50LnRhcmdldEdlb21ldHJ5ID0gdmlldy5leHRlbnQ7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hcHMnLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XG59KTtcblxuLy9zaG93IGZpcnN0IHBhbmVsIG9uIGRldmljZXMgd2lkZXIgdGhhbiA1MDBweCBieSBkZWZhdWx0XG5pZiAod2luZG93Lm91dGVyV2lkdGggPj0gNTAwKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtcGFuZWwnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtcGFuZWwnKT8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1hY3Rpb24tYmFyIGNhbGNpdGUtYWN0aW9uJyk/LnRvZ2dsZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG59XG5cbi8vbW9kaWZ5IERPTSBhZnRlciBtYXAgdmlldyBsb2Fkc1xudmlldy53aGVuKCgpID0+IHtcbiAgaW5pdFBhbmVscygpO1xuICBlbmFibGVBY3Rpb25iYXIoKTtcbn0pO1xuXG5pbml0UGFuZWxIZWFkZXJzKCk7XG5pbml0TWVudSgpO1xuIl0sIm5hbWVzIjpbIndoZW5EZWZpbmVkT25jZSIsIndoZW5EZWZpbmVkIiwicHJvcGVydHkiLCJzdWJjbGFzcyIsInRzeCIsImFsaWFzT2YiLCJyZW5kZXJhYmxlIiwiQ1NTIiwid2F0Y2hVdGlscyIsImRlY2xhcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ08sSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztFQUM5QixHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsa0NBQWtDLEVBQUUsRUFBRSxDQUFDLENBQUM7OztFQ0Z0RSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUM7RUFDM0IsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFhOztNQUM3QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtVQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztPQUNuQyxDQUFDLENBQUM7TUFDSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtVQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztPQUNuQyxDQUFDLENBQUM7TUFDSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1VBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ25DLENBQUMsQ0FBQztNQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7VUFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7T0FDbkMsQ0FBQyxDQUFDO01BQ0gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7VUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7T0FDbkMsQ0FBQyxDQUFDO01BQ0gsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQywwQ0FBRSxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxPQUFPLEdBQUcsT0FBTyxHQUFHLE9BQU8sRUFBRTtNQUVwRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtVQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxPQUFPLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQyxFQUFFO2NBQzVELElBQUksQ0FBQyxJQUFJLEdBQUcseUNBQXlDLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQztXQUM3RTtPQUNGLENBQUMsQ0FBQztFQUNMLENBQUMsQ0FBQztBQUNGLEVBQU8sSUFBTSxRQUFRLEdBQUc7O01BQ3RCLE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQywwQ0FBRSxnQkFBZ0IsQ0FBQyx1QkFBdUIsRUFBRSxVQUFDLENBQU07VUFDM0YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQW9CO2NBQzlFLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtrQkFDbEMsSUFBTSxLQUFLLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQVcsQ0FBQztrQkFDOUQsS0FBSyxHQUFHLEtBQUssQ0FBQztrQkFDZCxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7a0JBQ2hCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztlQUM3QztXQUNGLENBQUMsQ0FBQztPQUNKLEVBQUU7TUFDSCxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1VBQ3hDLElBQUksV0FBUyxHQUFXLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBVyxDQUFDO1VBQ3ZFLFFBQVEsQ0FBQyxXQUFTLENBQUMsQ0FBQztVQUVwQixXQUFTLEdBQUcsV0FBUyxLQUFLLE9BQU8sR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO1VBQ3JELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQW9CO2NBQzlFLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtrQkFDbEMsSUFBSyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBWSxJQUFJLFdBQVMsRUFBRTtzQkFDMUQsT0FBTyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQzttQkFDbkM7a0JBQ0QsSUFBTSxLQUFLLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQVcsQ0FBQztrQkFDOUQsS0FBSyxHQUFHLEtBQUssQ0FBQztlQUNmO21CQUFNO2tCQUNMLElBQUssT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQVksS0FBSyxXQUFTLEVBQUU7c0JBQzNELE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO21CQUNwQztlQUNGO1dBQ0YsQ0FBQyxDQUFDO09BQ0o7RUFDSCxDQUFDLENBQUM7OztFQ3JERixJQUFNLFNBQVMsR0FBRztNQUNoQjtVQUNFLEtBQUssRUFBRTtjQUNMLElBQUksRUFBRSxXQUFXO2NBQ2pCLEtBQUssRUFBRSxXQUFXO2NBQ2xCLElBQUksRUFBRTtrQkFDSjtzQkFDRSxPQUFPLEVBQUUsdUVBQXVFO3NCQUNoRixLQUFLLEVBQUUsa0JBQWtCO21CQUMxQjtrQkFDRDtzQkFDRSxPQUFPLEVBQUUsdUVBQXVFO3NCQUNoRixLQUFLLEVBQUUsa0JBQWtCO21CQUMxQjtlQUNGO1dBQ0Y7T0FDRjtNQUNEO1VBQ0UsS0FBSyxFQUFFO2NBQ0wsSUFBSSxFQUFFLG1CQUFtQjtjQUN6QixLQUFLLEVBQUUsaUJBQWlCO2NBQ3hCLElBQUksRUFBRTtrQkFDSjtzQkFDRSxPQUFPLEVBQ0wsK0dBQStHO3NCQUNqSCxLQUFLLEVBQUUsaUJBQWlCO21CQUN6QjtrQkFDRDtzQkFDRSxPQUFPLEVBQUUsaUZBQWlGO3NCQUMxRixLQUFLLEVBQUUsWUFBWTttQkFDcEI7a0JBQ0Q7c0JBQ0UsT0FBTyxFQUFFLDBEQUEwRDtzQkFDbkUsS0FBSyxFQUFFLG9CQUFvQjttQkFDNUI7a0JBQ0Q7c0JBQ0UsT0FBTyxFQUFFLDZFQUE2RTtzQkFDdEYsS0FBSyxFQUFFLHNCQUFzQjttQkFDOUI7ZUFDRjtXQUNGO09BQ0Y7TUFDRDtVQUNFLEtBQUssRUFBRTtjQUNMLElBQUksRUFBRSxZQUFZO2NBQ2xCLEtBQUssRUFBRSxVQUFVO2NBQ2pCLElBQUksRUFBRTtrQkFDSjtzQkFDRSxPQUFPLEVBQ0wsNEtBQTRLO3NCQUM5SyxLQUFLLEVBQUUsa0JBQWtCO21CQUMxQjtlQUNGO1dBQ0Y7T0FDRjtHQUNGLENBQUM7QUFDRixXQUFnQixRQUFRO01BQ3RCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1VBQzVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7O2NBQzdCLE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQywwQ0FBRSxNQUFNLEdBQUc7Y0FDeEQsWUFBQSxJQUFJLENBQUMsYUFBYSwwQ0FBRSxhQUFhLDBDQUFFLGVBQWUsQ0FBQyxXQUFXLEVBQUU7Y0FDaEUsWUFBQSxJQUFJLENBQUMsYUFBYSwwQ0FBRSxhQUFhLDBDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2NBQzlELElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztjQUM5RCxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztjQUNyQyxJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSztrQkFDbkMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO2VBQ3JDLENBQUMsQ0FBQztjQUVILElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztjQUMxRCxLQUFLLENBQUMsWUFBWSxDQUFDLGtCQUFrQixRQUFHLFFBQWdCLDBDQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztjQUN2RSxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2NBQzNCLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7a0JBQzlCLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7a0JBQ3pELFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztrQkFDOUMsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztrQkFDdEMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO2tCQUMxQixVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2tCQUMxQixLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2VBQy9CLEVBQUU7Y0FDSCxNQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxJQUFJLDBDQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUU7V0FDdEMsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0VBQ0wsQ0FBQzs7O1dDcEZlLFNBQVMsQ0FBQyxJQUFZLEVBQUUsS0FBYTs7TUFDbkQsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQywwQ0FBRSxNQUFNLEdBQUc7TUFDbEQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztNQUN0RCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQzlDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO01BQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO01BQ3pCLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO01BQ25DLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ2pDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BRS9CLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7TUFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDbkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDR0Q7TUFBcUQsMkNBQVE7TUEyQjNELGlDQUFZLE1BQVk7VUFBeEIsWUFDRSxrQkFBTSxNQUFNLENBQUMsU0FJZDtVQW5CRCxjQUFRLEdBQUcsSUFBSSxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztVQUMzRixrQkFBWSxHQUFHO2NBQ2IsSUFBSSxFQUFFLGFBQWE7Y0FDbkIsS0FBSyxFQUFFLE1BQU07Y0FDYixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO2NBQ2hELEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQztXQUMzQixDQUFDO1VBQ0YsaUJBQVcsR0FBRztjQUNaLElBQUksRUFBRSxhQUFhO2NBQ25CLEtBQUssRUFBRSxNQUFNO2NBQ2IsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtjQUNoRCxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUM7V0FDM0IsQ0FBQztVQW1ERiw2QkFBdUIsR0FBRyxVQUFDLE1BQW9CLEVBQUUsUUFBd0I7Y0FDdkUsT0FBTyxJQUFJLFlBQVksQ0FBQztrQkFDdEIsTUFBTSxFQUFFLE1BQU07a0JBQ2QsTUFBTSxFQUFFLFFBQVE7a0JBQ2hCLEtBQUssRUFBRSxxQkFBcUI7a0JBQzVCLFlBQVksRUFBRSxPQUFPO2tCQUNyQixhQUFhLEVBQUUsVUFBVTtrQkFDekIsZ0JBQWdCLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7ZUFDN0MsQ0FBQyxDQUFDO1dBQ0osQ0FBQztVQUNGLGlCQUFXLEdBQUcsVUFBQyxNQUF1QjtjQUNwQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO2NBQzFCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztrQkFDN0IsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUksS0FBSSxDQUFDLFdBQW1CLEdBQUksS0FBSSxDQUFDLFlBQW9CLENBQUM7a0JBQ3JHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2VBQzVCLENBQUMsQ0FBQztXQUNKLENBQUM7VUFFRixpQkFBVyxHQUFHLFVBQUMsSUFBVyxFQUFFLE1BQWU7Y0FDekMsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztrQkFDeEQsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLGdCQUFnQixDQUFDO2VBQ3BDLENBQUMsQ0FBQztjQUNILEtBQUksQ0FBQyxXQUFXO21CQUNiLG9CQUFvQixDQUFDO2tCQUNwQixjQUFjLEVBQUUsWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLEVBQUU7a0JBQ2hDLFNBQVMsRUFBRSxJQUFJO2tCQUNmLFNBQVMsRUFBRSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUM7a0JBQy9CLGNBQWMsRUFBRSxLQUFLO2VBQ3RCLENBQUM7bUJBQ0QsSUFBSSxDQUFDLFVBQUEsTUFBTTtrQkFDVixJQUFNLElBQUksR0FBVSxFQUFFLENBQUM7a0JBQ3ZCLEtBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO3NCQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQXFCOzBCQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt1QkFDN0MsQ0FBQyxDQUFDO21CQUNKO2tCQUNELEtBQUksQ0FBQyxhQUFhO3VCQUNmLGFBQWEsQ0FBQztzQkFDYixTQUFTLEVBQUUsSUFBSTtzQkFDZixTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUM7c0JBQ2hCLGNBQWMsRUFBRSxJQUFJO3NCQUNwQixtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7bUJBQ3RDLENBQUM7dUJBQ0QsSUFBSSxDQUFDLFVBQUEsTUFBTTs7c0JBQ1YsVUFBSSxLQUFJLENBQUMsT0FBTywwQ0FBRSxPQUFPLEVBQUU7MEJBQ3pCLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUM7dUJBQzlEO3NCQUNELEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztzQkFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRTswQkFDWCxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzBCQUN6QixJQUFNLFFBQU0sR0FBYyxFQUFFLENBQUM7MEJBQzdCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTzs4QkFDN0IsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDOzhCQUMzQixFQUFFLENBQUMsUUFBUSxHQUFJLEVBQUUsQ0FBQyxRQUF5QixDQUFDLFFBQVEsQ0FBQzs4QkFDckQsUUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzsyQkFDakIsQ0FBQyxDQUFDOzBCQUNILEtBQUksQ0FBQyxhQUFhOytCQUNmLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDOytCQUMvRSxJQUFJLENBQUMsVUFBQSxNQUFNOzhCQUNWLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztrQ0FDdEUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxXQUFXLEVBQUUsUUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7c0NBQzFELEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7bUNBQzlCLENBQUMsQ0FBQzsrQkFDSixDQUFDLENBQUM7MkJBQ0osQ0FBQyxDQUFDO3VCQUNOO21CQUNGLENBQUMsQ0FBQztlQUNOLENBQUMsQ0FBQztXQUNOLENBQUM7VUFFRixvQkFBYyxHQUFHLFVBQUMsS0FBcUM7O2NBQ3JELFNBQVM7Y0FDVCxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUU7a0JBQ25ELElBQU0sTUFBSSxHQUFVLEVBQUUsQ0FBQztrQkFFdkIsSUFBSSxPQUFLLEdBQUcsRUFBRSxDQUFDO2tCQUVmLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRTtzQkFDbkMsT0FBSzswQkFDSCxjQUFjOzhCQUNkLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFOzhCQUM5QixtQkFBbUI7OEJBQ25CLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFOzhCQUM5QixzQkFBc0I7OEJBQ3RCLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFOzhCQUM5QixJQUFJLENBQUM7bUJBQ1I7dUJBQU07c0JBQ0wsVUFBSyxLQUFJLENBQUMsWUFBWSxDQUFDLFlBQW9CLDBDQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHOzBCQUMzRSxPQUFLLEdBQUcsZUFBZSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDO3VCQUNqRTtzQkFDRCxVQUFLLEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBb0IsMENBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUc7MEJBQzdFLE9BQUssR0FBRyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQzt1QkFDbkU7c0JBQ0QsVUFBSyxLQUFJLENBQUMsWUFBWSxDQUFDLFlBQW9CLDBDQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHOzBCQUMxRSxPQUFLLEdBQUcsY0FBYyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDO3VCQUNoRTttQkFDRjtrQkFFRCxJQUFJLGVBQWEsR0FBVSxFQUFFLENBQUM7a0JBRTlCLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTs7c0JBQzVFLGVBQWEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO3NCQUNoQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7MEJBQ3ZCLE1BQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7dUJBQzVCLENBQUMsQ0FBQztzQkFFSCxJQUNFLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLFdBQzlCLEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBb0IsMENBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUMsRUFDekU7MEJBQ0EsT0FBSyxHQUFHLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDO3VCQUNuRTsyQkFBTTswQkFDTCxPQUFLLEdBQUcsaUJBQWlCLENBQUM7dUJBQzNCO3NCQUVELEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTswQkFDN0UsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQzs4QkFDekQsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLGlCQUFpQixDQUFDOzJCQUNyQyxDQUFDLENBQUM7MEJBQ0gsSUFBTSxRQUFRLEdBQVUsRUFBRSxDQUFDOzBCQUMzQixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7OEJBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7MkJBQ2hDLENBQUMsQ0FBQzswQkFDSCxJQUFJLFlBQVksSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFOzhCQUNuQyxLQUFJLENBQUMsWUFBWTttQ0FDZCxvQkFBb0IsQ0FBQyxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzttQ0FDaEcsSUFBSSxDQUFDLFVBQUEsTUFBTTtrQ0FDVixLQUFLLElBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtzQ0FDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFxQjswQ0FDakQsTUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7MENBQzVDLGVBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7dUNBQzdCLENBQUMsQ0FBQzttQ0FDSjtrQ0FDRCxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsZUFBYSxDQUFDLENBQUM7a0NBRS9GLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBSSxDQUFDLENBQUM7a0NBQ3ZCLElBQUksZUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7c0NBQzVCLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7c0NBQ3JDLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7bUNBQzdCO2tDQUNELEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7K0JBQy9CLENBQUMsQ0FBQzsyQkFDTjsrQkFBTTs4QkFDTCxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQUksQ0FBQyxDQUFDOzhCQUN2QixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsZUFBYSxDQUFDLENBQUM7OEJBQy9GLElBQUksZUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7a0NBQzVCLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7a0NBQ3JDLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7K0JBQzdCOzhCQUNELEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7MkJBQy9CO3VCQUNGLENBQUMsQ0FBQzttQkFDSixDQUFDLENBQUM7ZUFDSjttQkFBTTtrQkFDTCxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7c0JBQ3BCLElBQUksS0FBSyxHQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBNEIsQ0FBQyxLQUFxQixDQUFDO3NCQUNqRixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7MEJBQ3RELEtBQUssR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO3VCQUMxQjtzQkFDRCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTswQkFDcEYsS0FBSyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUM7dUJBQzNCO3NCQUNELElBQU0sTUFBSSxHQUFVLEVBQUUsQ0FBQztzQkFDdkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzswQkFDaEMsTUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7dUJBQ3BDLENBQUMsQ0FBQztzQkFDSCxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFOzBCQUN2QixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7OEJBQzdDLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQzsyQkFDckMsQ0FBQyxDQUFDOzBCQUNILElBQUksWUFBWSxJQUFJLE1BQUksRUFBRTs4QkFDeEIsS0FBSzttQ0FDRixvQkFBb0IsQ0FBQyxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzttQ0FDNUYsSUFBSSxDQUFDLFVBQUEsTUFBTTtrQ0FDVixJQUFNLElBQUksR0FBVSxFQUFFLENBQUM7a0NBQ3ZCLElBQU0sUUFBUSxHQUFVLEVBQUUsQ0FBQztrQ0FDM0IsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7c0NBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBcUI7MENBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzBDQUM1QyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzBDQUN2QixPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7dUNBQ2xDLENBQUMsQ0FBQzttQ0FDSjtrQ0FDRCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2tDQUN2QixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3NDQUN2QixLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO3NDQUNyQyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO21DQUM3Qjt1Q0FBTTtzQ0FDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsSUFBb0IsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7c0NBQ2xFLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7bUNBQy9CO2tDQUVELEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQzsrQkFDM0YsQ0FBQyxDQUFDOzJCQUNOO3VCQUNGOzJCQUFNOzBCQUNMLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTs4QkFDL0UsSUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDOzhCQUN2QixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQXFCO2tDQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzsrQkFDN0MsQ0FBQyxDQUFDOzhCQUVILEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7OEJBRXZCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2tDQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO2tDQUNyQyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDOytCQUM3QjttQ0FBTTtrQ0FDTCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLElBQW9CLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO2tDQUN6RSxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDOytCQUMvQjs4QkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzJCQUNsRyxDQUFDLENBQUM7dUJBQ0o7bUJBQ0Y7ZUFDRjtXQUNGLENBQUM7VUE2SUYsb0JBQWMsR0FBRyxVQUNmLE1BQVcsRUFDWCxJQUFZLEVBQ1osS0FBd0IsRUFDeEIsU0FBbUIsRUFDbkIsYUFBdUIsRUFDdkIsWUFBc0IsRUFDdEIsVUFBbUI7Y0FFbkIsSUFBTSxVQUFVLEdBQWEsRUFBRSxDQUFDO2NBQ2hDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO2tCQUN4QixJQUFJLFVBQVUsRUFBRTtzQkFDZCxVQUFVLENBQUMsSUFBSSxDQUFJLEtBQUssZUFBVSxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxPQUFJLENBQUMsQ0FBQzttQkFDekU7dUJBQU07c0JBQ0wsVUFBVSxDQUFDLElBQUksQ0FBSSxLQUFLLGdCQUFXLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLE9BQUksQ0FBQyxDQUFDO21CQUMxRTtlQUNGLENBQUMsQ0FBQztjQUNILE9BQU8sS0FBSzttQkFDVCxhQUFhLENBQUM7a0JBQ2Isb0JBQW9CLEVBQUUsSUFBSTtrQkFDMUIsU0FBUyxFQUFFLFNBQVM7a0JBQ3BCLGNBQWMsRUFBRSxLQUFLO2tCQUNyQixhQUFhLEVBQUUsYUFBYTtrQkFDNUIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2VBQy9CLENBQUM7bUJBQ0QsSUFBSSxDQUFDLFVBQUEsT0FBTztrQkFDWCxPQUFPLE9BQU8sQ0FBQyxRQUFRO3VCQUNwQixNQUFNLENBQUMsVUFBQSxPQUFPO3NCQUNiLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxDQUFDO21CQUN4RixDQUFDO3VCQUNELEdBQUcsQ0FBQyxVQUFBLE9BQU87c0JBQ1YsT0FBTzswQkFDTCxHQUFHLEVBQUUsSUFBSTswQkFDVCxJQUFJLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7MEJBQ3hDLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVzt1QkFDaEMsQ0FBQzttQkFDSCxDQUFDLENBQUM7ZUFDTixDQUFDLENBQUM7V0FDTixDQUFDO1VBZ05GLG1CQUFhLEdBQUcsVUFBQyxLQUFhOztjQUM1QixJQUFJLEtBQUssS0FBSyxPQUFPLEVBQUU7a0JBQ3JCLE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsMENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7a0JBQzdELE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsMENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7a0JBQzVELE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsMENBQUUsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUU7a0JBQ2xFLE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsMENBQUUsZUFBZSxDQUFDLFNBQVMsRUFBRTtlQUNwRTttQkFBTTtrQkFDTCxNQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2tCQUMvRCxNQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2tCQUMxRCxNQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLDBDQUFFLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFO2tCQUNwRSxNQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLDBDQUFFLGVBQWUsQ0FBQyxTQUFTLEVBQUU7ZUFDbEU7V0FDRixDQUFDO1VBdHBCQUEsMEJBQWUsQ0FBQyxLQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7VUFDcERBLDBCQUFlLENBQUMsS0FBSSxFQUFFLGFBQWEsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO1VBQ2pFQyxzQkFBVyxDQUFDLEtBQUksRUFBRSxVQUFVLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztPQUNqRTtNQUVELGtEQUFnQixHQUFoQixVQUFpQixRQUF1QjtVQUF4QyxpQkF3Q0M7VUF2Q0MsSUFBSSxDQUFDLGFBQWE7ZUFDZixhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7ZUFDNUYsSUFBSSxDQUFDLFVBQUEsY0FBYztjQUNsQixJQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2tCQUMxRCxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLENBQUM7ZUFDcEMsQ0FBQyxDQUFDO2NBQ0gsSUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDO2NBQ3ZCLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztrQkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztlQUM1QixDQUFDLENBQUM7Y0FDSCxLQUFJLENBQUMsYUFBYTttQkFDZixvQkFBb0IsQ0FBQyxFQUFFLGNBQWMsRUFBRSxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzttQkFDN0YsSUFBSSxDQUFDLFVBQUEsTUFBTTtrQkFDVixJQUFJLFFBQVEsR0FBVSxFQUFFLENBQUM7a0JBQ3pCLEtBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO3NCQUN4QixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7bUJBQ2xEO2tCQUNELEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztrQkFDMUYsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtzQkFDekIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztzQkFFM0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLElBQW9CLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztzQkFDekYsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQzttQkFDL0I7dUJBQU07c0JBQ0wsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzttQkFDN0I7a0JBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztrQkFDOUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztrQkFDMUIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFxQjtzQkFDcEQsT0FBTyxDQUFDLE1BQU07MEJBQ1osY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFJLEtBQUksQ0FBQyxXQUFtQixHQUFJLEtBQUksQ0FBQyxZQUFvQixDQUFDO3NCQUU5RixJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTswQkFDeEMsT0FBTyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQzt1QkFDeEQ7c0JBQ0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7bUJBQzVCLENBQUMsQ0FBQztlQUNKLENBQUMsQ0FBQztXQUNOLENBQUMsQ0FBQztPQUNOO01BMk5ELDRDQUFVLEdBQVYsVUFBVyxPQUFxQixFQUFFLElBQWtCLEVBQUUsVUFBaUIsRUFBRSxJQUFXO1VBQXBGLGlCQXVEQztVQXREQyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2NBQ3hELE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUM7V0FDbEMsQ0FBQyxDQUFDO1VBQ0gsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1VBQ2xDLFVBQVUsR0FBRyxFQUFFLENBQUM7VUFDaEIsSUFBSSxDQUFDLFdBQVc7ZUFDYixvQkFBb0IsQ0FBQyxFQUFFLGNBQWMsRUFBRSxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztlQUM3RixJQUFJLENBQUMsVUFBQSxNQUFNOztjQUNWLEtBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO2tCQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQXFCO3NCQUNqRCxVQUFVLENBQUMsSUFBSSxDQUFDOzBCQUNkLEtBQUssRUFBRSxFQUFFOzBCQUNULElBQUksRUFBRSxPQUFPOzBCQUNiLE9BQU8sRUFBRSxFQUFFOzBCQUNYLEtBQUssRUFBRTs4QkFDTCxTQUFTLEVBQ1AsdURBQXVEO2tDQUN2RCxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztrQ0FDaEMsR0FBRztrQ0FDSCxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQzsyQkFDcEM7dUJBQ0YsQ0FBQyxDQUFDO21CQUNKLENBQUMsQ0FBQztlQUNKO2NBQ0QsSUFBTSxLQUFLLEdBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBMEIsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFZO2tCQUN6RixPQUFPLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLElBQUksTUFBSyxPQUFPLENBQUM7ZUFDbEMsQ0FBQyxDQUFDO2NBQ0gsSUFBSSxLQUFLLEVBQUU7a0JBQ1IsS0FBMkIsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2VBQ3REO2NBQ0QsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO2NBQ2pDLE9BQU8sQ0FBQyxhQUFhLEdBQUksT0FBTyxDQUFDLEtBQTJCLENBQUMsYUFBYSxDQUFDO2NBQzNFLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztjQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2NBQzdDLE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsMENBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUU7Y0FDaEYsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxZQUFtQixDQUFDO2NBQ3ZELEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7Y0FDbkQsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztrQkFDbEQsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLE1BQU0sQ0FBQztlQUNwRCxDQUFDLENBQUM7Y0FDSCxJQUFJLFFBQVEsRUFBRTtrQkFDWixRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxXQUFrQixDQUFDO2tCQUMxQyxRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztlQUM1QztjQUNELElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87a0JBQ2pELE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2VBQ3RFLENBQUMsQ0FBQztjQUNILElBQUksT0FBTyxFQUFFO2tCQUNYLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFlBQW1CLENBQUM7a0JBRTFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2tCQUN6QyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztlQUM1RTtXQUNGLENBQUMsQ0FBQztPQUNOO01BQ0QsNkNBQVcsR0FBWDtVQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO2NBQ3JFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztjQUNiLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztrQkFDekIsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2VBQzFCLENBQUMsQ0FBQztjQUNILEdBQUcsSUFBSSxNQUFNLENBQUM7Y0FDZCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87a0JBQzdCLEtBQUssSUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtzQkFDcEMsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzBCQUN0QyxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUM7dUJBQ3RFOzJCQUFNLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTswQkFDOUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7dUJBQ3BFOzJCQUFNOzBCQUNMLEdBQUcsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7dUJBQzdDO21CQUNGO2tCQUNELEdBQUcsSUFBSSxNQUFNLENBQUM7ZUFDZixDQUFDLENBQUM7Y0FDSCxJQUFNLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO2NBRTVDLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO2NBQ2xFLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Y0FDekMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtrQkFHL0IsSUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztrQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7a0JBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7a0JBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztrQkFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7a0JBQ2hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztrQkFDYixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztlQUNqQztXQUNGLENBQUMsQ0FBQztPQUNKO01BQ0Qsc0NBQUksR0FBSixVQUFLLElBQW1DO1VBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1VBQzNELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLENBQUM7Y0FDcEMsTUFBTSxFQUFFLEVBQUU7Y0FDVixhQUFhLEVBQUUsVUFBVTtjQUN6QixZQUFZLEVBQUUsT0FBTztjQUNyQixRQUFRLEVBQUUsS0FBSztjQUNmLFFBQVEsRUFBRSxNQUFNO2NBQ2hCLGFBQWEsRUFBRSxLQUFLO2NBQ3BCLFFBQVEsRUFBRTtrQkFDUixJQUFJLEVBQUUsUUFBUTtrQkFDZCxNQUFNLEVBQUU7c0JBQ04sSUFBSSxFQUFFLGVBQWU7c0JBQ3JCLElBQUksRUFBRSxDQUFDO3NCQUNQLEtBQUssRUFBRSxTQUFTO3NCQUNoQixPQUFPLEVBQUU7MEJBQ1AsS0FBSyxFQUFFLHdCQUF3QjswQkFDL0IsS0FBSyxFQUFFLENBQUM7dUJBQ1Q7bUJBQ0Y7ZUFDSztjQUNSLGdCQUFnQixFQUFFO2tCQUNoQixJQUFJLEVBQUUsU0FBUztrQkFDZixZQUFZLEVBQUU7c0JBQ1o7MEJBRUUscUJBQXFCLEVBQUUsTUFBTTswQkFDN0IsbUJBQW1CLEVBQUU7OEJBQ25CLFVBQVUsRUFBRSx1Q0FBdUM7MkJBQ3BEOzBCQUNELE1BQU0sRUFBRTs4QkFDTixJQUFJLEVBQUUsTUFBTTs4QkFDWixLQUFLLEVBQUUsU0FBUzs4QkFDaEIsSUFBSSxFQUFFO2tDQUNKLE1BQU0sRUFBRSxNQUFNO2tDQUNkLE1BQU0sRUFBRSxXQUFXO2tDQUNuQixJQUFJLEVBQUUsTUFBTTsrQkFDYjsyQkFDSzswQkFDUixjQUFjLEVBQUUsZUFBZTt1QkFDaEM7bUJBQ0Y7ZUFDRjtjQUNELGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1dBQzdDLENBQUMsQ0FBQztVQUNILElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7T0FDdkM7TUF5Q0QsNENBQVUsR0FBVixVQUFXLFdBQThCO1VBQXpDLGlCQThNQzs7VUE3TUMsSUFBTSxVQUFVLEdBQUcsSUFBSSxZQUFZLENBQUM7Y0FDbEMsTUFBTSxFQUFFO2tCQUNOLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7a0JBQzFELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7a0JBQ2pELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7a0JBQ2pELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7ZUFDaEQ7Y0FDRCxNQUFNLEVBQUUsRUFBRTtjQUNWLEtBQUssRUFBRSxxQkFBcUI7Y0FDNUIsWUFBWSxFQUFFLE9BQU87Y0FDckIsYUFBYSxFQUFFLFVBQVU7Y0FDekIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7V0FDN0MsQ0FBQyxDQUFDO1VBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztVQUVoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDO2NBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtjQUNmLEtBQUssRUFBRSxVQUFVO2NBQ2pCLFlBQVksRUFBRTtrQkFDWixJQUFJLGlCQUFpQixDQUFDO3NCQUNwQixJQUFJLEVBQUUsY0FBYztzQkFDcEIsS0FBSyxFQUFFLFNBQVM7c0JBQ2hCLFFBQVEsRUFBRSxLQUFLO3NCQUNmLFFBQVEsRUFBRSxJQUFJO21CQUNmLENBQUM7a0JBQ0YsSUFBSSxpQkFBaUIsQ0FBQztzQkFDcEIsSUFBSSxFQUFFLE9BQU87c0JBQ2IsS0FBSyxFQUFFLE9BQU87c0JBQ2QsUUFBUSxFQUFFLEtBQUs7c0JBQ2YsUUFBUSxFQUFFLElBQUk7bUJBQ2YsQ0FBQztrQkFDRixJQUFJLGlCQUFpQixDQUFDO3NCQUNwQixJQUFJLEVBQUUsU0FBUztzQkFDZixLQUFLLEVBQUUsS0FBSztzQkFDWixRQUFRLEVBQUUsS0FBSztzQkFDZixRQUFRLEVBQUUsSUFBSTttQkFDZixDQUFDO2tCQUNGLElBQUksaUJBQWlCLENBQUM7c0JBQ3BCLElBQUksRUFBRSxNQUFNO3NCQUNaLEtBQUssRUFBRSxNQUFNO3NCQUNiLFFBQVEsRUFBRSxLQUFLO3NCQUNmLFFBQVEsRUFBRSxJQUFJO21CQUNmLENBQUM7ZUFDSDtjQUNELFVBQVUsRUFBRTtrQkFDVixLQUFLLEVBQUU7c0JBQ0o7MEJBQ0MsS0FBSyxFQUFFLFFBQVE7dUJBQ2M7bUJBQ2hDO2VBQ0Y7V0FDRixDQUFDLENBQUM7VUFDSCxJQUFNLE1BQU0sR0FBbUIsa0JBQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsVUFBVSwwQ0FBRSxLQUFLLDBDQUFFLElBQUksQ0FBQyxVQUFBLElBQUk7Y0FDNUUsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQztXQUNoQyxDQUFtQixDQUFDO1VBQ3JCLE1BQU0sQ0FBQyxhQUFhLEdBQUc7Y0FDckIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1dBQ3BCLENBQUM7VUFDRixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7VUFFN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsVUFBQSxLQUFLO2NBQzNDLEtBQUksQ0FBQyxZQUFvQixDQUFDLGNBQWMsRUFBRSxDQUFDO2NBQzVDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7a0JBQ3RCLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztrQkFDN0UsS0FBSSxDQUFDLFVBQVUsQ0FDYixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFDdEIsS0FBSSxDQUFDLElBQW9CLEVBQ3pCLEVBQUUsRUFDRixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUNsRCxDQUFDO2tCQUNGLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7a0JBQ3hELEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7ZUFDL0I7V0FDRixDQUFDLENBQUM7VUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDO2NBQzdCLGNBQWMsRUFBRSw4QkFBOEI7Y0FDOUMscUJBQXFCLEVBQUUsS0FBSztjQUM1QixTQUFTLEVBQUUsUUFBUTtjQUNuQixPQUFPLEVBQUU7a0JBVVAsSUFBSSxZQUFZLENBQUM7c0JBQ2YsV0FBVyxFQUFFLDJCQUEyQjtzQkFDeEMsSUFBSSxFQUFFLGNBQWM7c0JBQ3BCLGNBQWMsRUFBRSxVQUFDLE1BQVc7MEJBQzFCLE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FDeEIsTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFJLENBQUMsWUFBWSxFQUNqQixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsRUFDeEIsQ0FBQyxTQUFTLENBQUMsRUFDWCxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsRUFDNUIsSUFBSSxDQUNMLENBQUM7dUJBQ0g7c0JBQ0QsVUFBVSxFQUFFLFVBQUMsTUFBVzswQkFDdEIsU0FBUzswQkFDVCxPQUFPLEtBQUksQ0FBQyxZQUFZOytCQUNyQixhQUFhLENBQUM7OEJBQ2IsS0FBSyxFQUFFLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHOzhCQUNwRSxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQzsyQkFDL0MsQ0FBQzsrQkFDRCxJQUFJLENBQUMsVUFBQSxPQUFPOzhCQUNYLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPO2tDQUNqQyxPQUFPO3NDQUNMLE9BQU8sRUFBRSxPQUFPO3NDQUNoQixJQUFJLEVBQUUsU0FBUzttQ0FDaEIsQ0FBQzsrQkFDSCxDQUFDLENBQUM7MkJBQ0osQ0FBUSxDQUFDO3VCQUNiO21CQUNLLENBQUM7a0JBVVQsSUFBSSxZQUFZLENBQUM7c0JBQ2YsV0FBVyxFQUFFLHNCQUFzQjtzQkFDbkMsSUFBSSxFQUFFLE9BQU87c0JBQ2IsY0FBYyxFQUFFLFVBQUMsTUFBVzswQkFDMUIsT0FBTyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzt1QkFDdkc7c0JBQ0QsVUFBVSxFQUFFLFVBQUMsTUFBVzswQkFDdEIsU0FBUzswQkFDVCxPQUFPLEtBQUksQ0FBQyxZQUFZOytCQUNyQixhQUFhLENBQUM7OEJBQ2IsS0FBSyxFQUFFLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHOzhCQUNsRSxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDOzJCQUNqQyxDQUFDOytCQUNELElBQUksQ0FBQyxVQUFBLE9BQU87OEJBQ1gsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU87a0NBQ2pDLE9BQU87c0NBQ0wsT0FBTyxFQUFFLE9BQU87c0NBQ2hCLElBQUksRUFBRSxPQUFPO21DQUNkLENBQUM7K0JBQ0gsQ0FBQyxDQUFDOzJCQUNKLENBQVEsQ0FBQzt1QkFDYjttQkFDSyxDQUFDO2tCQUNULElBQUksaUJBQWlCLENBQUM7c0JBQ3BCLEtBQUssRUFBRSxXQUFXO3NCQUNsQixZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0JBQ3pCLFlBQVksRUFBRSxTQUFTO3NCQUN2QixVQUFVLEVBQUUsS0FBSztzQkFDakIsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUM7c0JBQzFDLElBQUksRUFBRSxLQUFLO3NCQUNYLFdBQVcsRUFBRSxxQkFBcUI7bUJBQ25DLENBQUM7a0JBQ0YsSUFBSSxpQkFBaUIsQ0FBQztzQkFDcEIsS0FBSyxFQUFFLFdBQVc7c0JBQ2xCLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztzQkFDdEIsWUFBWSxFQUFFLE1BQU07c0JBQ3BCLFVBQVUsRUFBRSxLQUFLO3NCQUNqQixTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO3NCQUMvQixJQUFJLEVBQUUsTUFBTTtzQkFDWixXQUFXLEVBQUUsa0JBQWtCO21CQUNoQyxDQUFDO2tCQUNGLElBQUksWUFBWSxDQUFDO3NCQUNmLFdBQVcsRUFBRSx1QkFBdUI7c0JBQ3BDLElBQUksRUFBRSxhQUFhO3NCQUNuQixjQUFjLEVBQUUsVUFBQyxNQUFXOzBCQUMxQixPQUFPLEtBQUksQ0FBQyxjQUFjLENBQ3hCLE1BQU0sRUFDTixhQUFhLEVBQ2IsS0FBSSxDQUFDLFlBQVksRUFDakIsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQ3ZCLENBQUMsUUFBUSxDQUFDLEVBQ1YsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLEVBQzFCLEtBQUssQ0FDTixDQUFDO3VCQUNIO3NCQUNELFVBQVUsRUFBRSxVQUFDLE1BQVc7MEJBQ3RCLE9BQU8sS0FBSSxDQUFDLFlBQVk7K0JBQ3JCLGFBQWEsQ0FBQzs4QkFDYixLQUFLLEVBQUUsWUFBWSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUc7OEJBQ25FLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDOzJCQUM5QyxDQUFDOytCQUNELElBQUksQ0FBQyxVQUFBLE9BQU87OEJBQ1gsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU87a0NBQ2pDLE9BQU87c0NBQ0wsT0FBTyxFQUFFLE9BQU87c0NBQ2hCLElBQUksRUFBRSxhQUFhO21DQUNwQixDQUFDOytCQUNILENBQUMsQ0FBQzsyQkFDSixDQUFRLENBQUM7dUJBQ2I7bUJBQ0ssQ0FBQztlQUNWO1dBQ0YsQ0FBQyxDQUFDO1VBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFBLEtBQUs7Y0FDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztXQUNwQixDQUFDLENBQUM7VUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7T0FDOUQ7TUFycUJXO1VBQVhDLG1CQUFRLEVBQUU7MkRBQXFDO01BQ3BDO1VBQVhBLG1CQUFRLEVBQUU7a0VBQWdDO01BQy9CO1VBQVhBLG1CQUFRLEVBQUU7bUVBQWlDO01BQ2hDO1VBQVhBLG1CQUFRLEVBQUU7b0VBQWtDO01BRWpDO1VBQVhBLG1CQUFRLEVBQUU7bUVBQWtDO01BQ2pDO1VBQVhBLG1CQUFRLEVBQUU7bUVBQWlDO01BQ2hDO1VBQVhBLG1CQUFRLEVBQUU7OERBQXVCO01BQ3RCO1VBQVhBLG1CQUFRLEVBQUU7K0RBQXlCO01BVGpCLHVCQUF1QjtVQUQzQ0MsbUJBQVEsQ0FBQyxvREFBb0QsQ0FBQztTQUMxQyx1QkFBdUIsQ0FvckIzQztNQUFELDhCQUFDO0dBQUEsQ0FwckJvRCxRQUFRLEdBb3JCNUQ7OztFQ2xyQkQsSUFBTSxHQUFHLEdBQUc7TUFDVixJQUFJLEVBQUUsaUNBQWlDO0dBQ3hDLENBQUM7RUFFRjtNQUE0QyxrQ0FBTTtNQXdCaEQsd0JBQVksVUFBcUM7VUFBakQsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7VUFKRCxlQUFTLEdBQTRCLElBQUksdUJBQXVCLEVBQUUsQ0FBQztVQU1uRSxtQkFBYSxHQUFHO2NBQ2QsSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO2tCQUNyQixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7ZUFDeEM7V0FDRixDQUFDO1VBQ0Ysa0JBQVksR0FBRztjQUNiLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTtrQkFDckIsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2VBQ3ZDO1dBQ0YsQ0FBQztVQUNGLG9CQUFjLEdBQUc7Y0FDZixJQUFJLEtBQUksQ0FBQyxPQUFPLEVBQUU7a0JBQ2hCLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztlQUN2QztXQUNGLENBQUM7VUFFRix3QkFBa0IsR0FBRyxNQUFNLENBQUM7O09BbEIzQjtNQW9CRCwrQkFBTSxHQUFOO1VBQUEsaUJBNERDOztVQTNEQyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsbUNBQW1DLENBQUMsQ0FBQztVQUM3RSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtjQUNoQixJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsZ0JBQWdCLENBQUMsNkJBQTZCLEVBQUUsVUFBQyxDQUFNOztrQkFFM0QsVUFBSSxDQUFDLENBQUMsTUFBTSwwQ0FBRSxPQUFPLEVBQUU7c0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLE9BQUMsQ0FBQyxDQUFDLE1BQU0sMENBQUUsS0FBSyxDQUFDLENBQUM7c0JBQzdCLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxPQUFDLENBQUMsQ0FBQyxNQUFNLDBDQUFFLEtBQUssQ0FBQyxDQUFDO21CQUMvQztlQUNGLEVBQUU7V0FDSixDQUFDLENBQUM7VUFDSCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBZ0IsQ0FBQztVQUVyRSxNQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtjQUNoRSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFO1dBQ3RFLEVBQUU7VUFDSCxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztVQUNuRCxJQUFJLEtBQUssRUFBRTtjQUNULE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsMENBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBRyxPQUFPLEVBQUU7V0FDckc7VUFFRCxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsZ0JBQWdCLENBQUMsUUFBUSxFQUFFOztjQUNsQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFO2tCQUNwRSxNQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2VBQ2pFO21CQUFNO2tCQUNMLE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsMENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7ZUFDcEU7V0FDRixFQUFFO1VBQ0gsUUFDRUMsb0JBQUssS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO2NBQ2xCQSxvQkFBSyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUMsUUFBUSxHQUFPO2NBQ3hEQSxvQkFBSyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLEVBQUMsT0FBTyxHQUFPO2NBQ3REQSxvQkFBSyxFQUFFLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxRQUFRO2tCQUM5QkEsb0JBQUssRUFBRSxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsR0FBUTtrQkFDN0RBLG9CQUNFLEVBQUUsRUFBQyxhQUFhLEVBQ2hCLEtBQUssRUFBQyxrRUFBa0UsNEJBQ2pELGdCQUFnQjtzQkFFdkNBLG9CQUFLLE9BQU8sRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxlQUFlOzBCQUNuRUEscUJBQ0UsRUFBRSxFQUFDLFdBQVcsRUFDZCxNQUFNLEVBQUMsT0FBTyxvQkFDQyxLQUFLLEVBQ3BCLENBQUMsRUFBQyw4RUFBOEUsR0FDMUUsQ0FDSixDQUNGLENBQ0Y7Y0FFTkEsb0NBQXFCLEtBQUssRUFBQyxNQUFNO2tCQUMvQkEseUNBQTBCLE9BQU8sUUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxXQUFXLFdBRW5DO2tCQUMzQkEseUNBQTBCLEtBQUssRUFBQyxTQUFTLEVBQUMsRUFBRSxFQUFDLGFBQWEsRUFBQyxRQUFRLG9CQUV4QyxDQUNQLENBQ2xCLEVBQ047T0FDSDtNQXhHRDtVQURDQyxrQkFBTyxDQUFDLGdCQUFnQixDQUFDO2tEQUNVO01BRXBDO1VBRENBLGtCQUFPLENBQUMsdUJBQXVCLENBQUM7eURBQ0Y7TUFFL0I7VUFEQ0Esa0JBQU8sQ0FBQyx3QkFBd0IsQ0FBQzswREFDRjtNQUVoQztVQURDQSxrQkFBTyxDQUFDLHlCQUF5QixDQUFDOzJEQUNGO01BRWpDO1VBRENBLGtCQUFPLENBQUMsd0JBQXdCLENBQUM7MERBQ0Q7TUFFakM7VUFEQ0Esa0JBQU8sQ0FBQyx3QkFBd0IsQ0FBQzswREFDRjtNQUVoQztVQURDQSxrQkFBTyxDQUFDLG1CQUFtQixDQUFDO3FEQUNQO01BRXRCO1VBRENBLGtCQUFPLENBQUMsb0JBQW9CLENBQUM7c0RBQ047TUFNeEI7VUFKQ0gsbUJBQVEsQ0FBQztjQUNSLElBQUksRUFBRSx1QkFBdUI7V0FDOUIsQ0FBQztVQUNESSxpQkFBVSxFQUFFO3VEQUNzRDtNQXRCaEQsY0FBYztVQURsQ0gsbUJBQVEsQ0FBQyw0QkFBNEIsQ0FBQztTQUNsQixjQUFjLENBMkdsQztNQUFELHFCQUFDO0dBQUEsQ0EzRzJDLE1BQU0sR0EyR2pEOzs7RUN0SEQ7TUFBOEMsb0NBQVE7TUFHcEQsMEJBQVksTUFBWTtVQUF4QixZQUNFLGtCQUFNLE1BQU0sQ0FBQyxTQUVkO1VBRENILDBCQUFlLENBQUMsS0FBSSxFQUFFLE1BQU0sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztPQUNyRDtNQUVELCtCQUFJLEdBQUosVUFBSyxJQUFtQztVQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUN6QjtNQUNELHdDQUFhLEdBQWI7VUFDRSxJQUFNLFFBQVEsR0FBSSxRQUFRLENBQUMsYUFBYSxDQUFDLGlDQUFpQyxDQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztVQUN2RyxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7Y0FDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1dBQ3hDO2VBQU07Y0FDTCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1dBQzFCO09BQ0Y7TUFDRCxzQ0FBVyxHQUFYO1VBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO09BQ3JGO01BcEJXO1VBQVhFLG1CQUFRLEVBQUU7b0RBQXFDO01BRDdCLGdCQUFnQjtVQURwQ0MsbUJBQVEsQ0FBQyxzQ0FBc0MsQ0FBQztTQUM1QixnQkFBZ0IsQ0FzQnBDO01BQUQsdUJBQUM7R0FBQSxDQXRCNkMsUUFBUSxHQXNCckQ7OztFQ2pCRCxJQUFNSSxLQUFHLEdBQUc7TUFDVixJQUFJLEVBQUUsMEJBQTBCO0dBQ2pDLENBQUM7RUFHRjtNQUFxQywyQkFBTTtNQWdCekMsaUJBQVksVUFBOEI7VUFBMUMsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7VUFKRCxlQUFTLEdBQXFCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztVQU1yRCxxQkFBZSxHQUFHO2NBQ2hCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztXQUNwQixDQUFDOztPQUpEO01BTUQsd0JBQU0sR0FBTjtVQUFBLGlCQThCQztVQTdCQyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsc0NBQXNDLENBQUMsQ0FBQztVQUNoRixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtjQUNoQixJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsZ0JBQWdCLENBQUMsNkJBQTZCLEVBQUUsVUFBQyxDQUFNOztrQkFDM0QsVUFBSSxDQUFDLENBQUMsTUFBTSwwQ0FBRSxPQUFPLEVBQUU7c0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLE9BQUMsQ0FBQyxDQUFDLE1BQU0sMENBQUUsS0FBSyxDQUFDLENBQUM7c0JBQzdCLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSwwQ0FBRSxLQUFLLE1BQUssT0FBTyxFQUFFOzBCQUMvQixLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO3VCQUMxQjsyQkFBTTswQkFDTCxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsU0FBRyxDQUFDLENBQUMsTUFBTSwwQ0FBRSxLQUFLLENBQUM7dUJBQy9DO21CQUNGO2VBQ0YsRUFBRTtXQUNKLENBQUMsQ0FBQztVQUNILFFBQ0VILG9CQUFLLEtBQUssRUFBRUcsS0FBRyxDQUFDLElBQUk7Y0FDbEJILG9DQUFxQixLQUFLLEVBQUMsTUFBTTtrQkFDL0JBLHlDQUEwQixPQUFPLFFBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLFNBQVMsV0FFdEU7a0JBQzNCQSx5Q0FBMEIsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEVBQUUsRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLGNBQWMsV0FFN0Q7a0JBQzNCQSx5Q0FBMEIsS0FBSyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLE9BQU8sWUFFeEQsQ0FDUDtjQUN0QkEsb0JBQUssV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFDLGVBQWUsR0FBTyxDQUM3RCxFQUNOO09BQ0g7TUFwREQ7VUFEQ0Msa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQzsyQ0FDVTtNQUVwQztVQURDQSxrQkFBTyxDQUFDLHVCQUF1QixDQUFDO2tEQUNIO01BRTlCO1VBRENBLGtCQUFPLENBQUMsdUJBQXVCLENBQUM7a0RBQ1g7TUFFdEI7VUFEQ0Esa0JBQU8sQ0FBQyx5QkFBeUIsQ0FBQztvREFDWDtNQU14QjtVQUpDSCxtQkFBUSxDQUFDO2NBQ1IsSUFBSSxFQUFFLGdCQUFnQjtXQUN2QixDQUFDO1VBQ0RJLGlCQUFVLEVBQUU7Z0RBQ3dDO01BZGxDLE9BQU87VUFEM0JILG1CQUFRLENBQUMscUJBQXFCLENBQUM7U0FDWCxPQUFPLENBdUQzQjtNQUFELGNBQUM7R0FBQSxDQXZEb0MsTUFBTSxHQXVEMUM7OztFQ25FRCxJQUFNLHFCQUFxQixHQUFHO01BQzVCO1VBQ0UsSUFBSSxFQUFFLGlCQUFpQjtVQUN2QixLQUFLLEVBQUUsaUJBQWlCO1VBQ3hCLFVBQVUsRUFDUiwyTEFBMkw7T0FDOUw7TUFDRDtVQUNFLElBQUksRUFBRSxpQkFBaUI7VUFDdkIsS0FBSyxFQUFFLGlCQUFpQjtVQUN4QixVQUFVLEVBQ1IsME9BQTBPO09BQzdPO01BRUQ7VUFDRSxJQUFJLEVBQUUsS0FBSztVQUNYLEtBQUssRUFBRSxLQUFLO1VBQ1osVUFBVSxFQUFFLGtHQUFrRztPQUMvRztNQUNEO1VBQ0UsSUFBSSxFQUFFLFdBQVc7VUFDakIsS0FBSyxFQUFFLGdCQUFnQjtVQUN2QixVQUFVLEVBQUUsb0ZBQW9GO09BQ2pHO01BQ0Q7VUFDRSxJQUFJLEVBQUUsVUFBVTtVQUNoQixLQUFLLEVBQUUsWUFBWTtVQUNuQixVQUFVLEVBQUUsb0ZBQW9GO09BQ2pHO01BQ0Q7VUFDRSxJQUFJLEVBQUUsV0FBVztVQUNqQixLQUFLLEVBQUUsYUFBYTtVQUNwQixVQUFVLEVBQUUsNEZBQTRGO09BQ3pHO01BQ0Q7VUFDRSxJQUFJLEVBQUUsWUFBWTtVQUNsQixLQUFLLEVBQUUsWUFBWTtVQUNuQixVQUFVLEVBQUUsdUZBQXVGO09BQ3BHO01BQ0Q7VUFDRSxJQUFJLEVBQUUsTUFBTTtVQUNaLEtBQUssRUFBRSxNQUFNO1VBQ2IsVUFBVSxFQUFFLHFGQUFxRjtPQUNsRztNQUNEO1VBQ0UsSUFBSSxFQUFFLFVBQVU7VUFDaEIsS0FBSyxFQUFFLFVBQVU7VUFDakIsVUFBVSxFQUFFLHlFQUF5RTtPQUN0RjtNQUNEO1VBQ0UsSUFBSSxFQUFFLGNBQWM7VUFDcEIsS0FBSyxFQUFFLGNBQWM7VUFDckIsVUFBVSxFQUNSLGtEQUFrRDtjQUNsRCwyQkFBMkI7Y0FDM0Isd0JBQXdCO2NBQ3hCLHdCQUF3QjtjQUN4QiwwQkFBMEI7Y0FDMUIsMkJBQTJCO2NBQzNCLDBCQUEwQjtjQUMxQixpQ0FBaUM7Y0FDakMsMEJBQTBCO2NBQzFCLGlDQUFpQztjQUNqQyw4QkFBOEI7Y0FDOUIsK0JBQStCO2NBQy9CLDhCQUE4QjtjQUM5QiwrQkFBK0I7Y0FDL0IsMkJBQTJCO2NBQzNCLDJCQUEyQjtjQUMzQiwrQkFBK0I7Y0FDL0Isa0JBQWtCO09BQ3JCO01BQ0Q7VUFDRSxJQUFJLEVBQUUsU0FBUztVQUNmLEtBQUssRUFBRSxTQUFTO1VBQ2hCLFVBQVUsRUFDUiw0RkFBNEY7Y0FDNUYsbUdBQW1HO2NBQ25HLDRGQUE0RjtjQUM1RiwwSEFBMEg7T0FDN0g7R0FDa0IsQ0FBQztFQUN0QixJQUFNLFFBQVEsR0FBVTtNQUN0QjtVQUNFLEtBQUssRUFBRTtjQUNMLEtBQUssRUFBRSxXQUFXO2NBQ2xCLE1BQU0sRUFBRTtrQkFDTixXQUFXO2tCQUNYLHlCQUF5QjtrQkFDekIsdUNBQXVDO2tCQUN2QyxxQkFBcUI7a0JBQ3JCLHdCQUF3QjtrQkFDeEIsa0NBQWtDO2tCQUNsQywwQkFBMEI7a0JBQzFCLHNCQUFzQjtrQkFDdEIsb0NBQW9DO2VBQ3JDO1dBQ0Y7T0FDRjtNQUNEO1VBQ0UsS0FBSyxFQUFFO2NBQ0wsS0FBSyxFQUFFLGVBQWU7Y0FDdEIsTUFBTSxFQUFFO2tCQUNOLHNEQUFzRDtrQkFDdEQsT0FBTztrQkFDUCxxQkFBcUI7a0JBQ3JCLHlCQUF5QjtlQUMxQjtXQUNGO09BQ0Y7R0FDRixDQUFDO0VBQ0YsSUFBTSxjQUFjLEdBQUcsVUFBQyxPQUF1QixFQUFFLENBQU07TUFDckQsSUFDRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztVQUN2RCxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixLQUFLLENBQUMsRUFDdkQ7VUFDQSxJQUFNLGNBQVksR0FBUSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztjQUM3QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1dBQzNGLENBQUMsQ0FBQztVQUNILElBQU0sVUFBUSxHQUFpQyxFQUFFLENBQUM7VUFFbEQsSUFBSSxjQUFZLEVBQUU7Y0FDaEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSztrQkFDNUMsT0FBTyxjQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2VBQ3hELENBQUMsQ0FBQztjQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO2tCQUNsQixVQUFRLENBQUMsSUFBSSxDQUNWLEtBQTZCLENBQUMsYUFBYSxDQUFDO3NCQUMzQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7c0JBQzFCLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQztzQkFDaEIsY0FBYyxFQUFFLElBQUk7bUJBQ3JCLENBQUMsQ0FDSCxDQUFDO2VBQ0gsQ0FBQyxDQUFDO1dBQ0o7VUFDRCxJQUFJLFVBQVEsQ0FBQyxNQUFNLEVBQUU7Y0FDbkIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87a0JBQ3ZDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO3NCQUNwQixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFOzBCQUMxQixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQXVCOzhCQUM5QyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDOzhCQUMxQyxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzs4QkFDNUMsSUFBSSxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDOzJCQUNuRCxDQUFDLENBQUM7dUJBQ0o7bUJBQ0YsQ0FBQyxDQUFDO2VBQ0osQ0FBQyxDQUFDO1dBQ0o7ZUFBTTtjQUNMLE9BQU8sb0JBQW9CLENBQUM7V0FDN0I7T0FDRjtFQUNILENBQUMsQ0FBQztFQUNGLElBQU0sV0FBVyxHQUFHLFVBQUMsQ0FBTTs7TUFDekIsT0FBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQXNCO1dBQ3JDLG9CQUFvQixDQUFDO1VBQ3BCLGNBQWMsUUFBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQXNCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7Y0FDcEUsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQztXQUNqQyxDQUFDLDBDQUFFLEVBQUU7VUFDTixTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1VBQ3BDLFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7T0FDM0MsQ0FBQztXQUNELElBQUksQ0FBQyxVQUFBLE1BQU07VUFDVixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7VUFDdEYsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1VBQ3BGLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7VUFDMUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztVQUNoRSxJQUFJLElBQUksRUFBRTtjQUNSLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztjQUN6RCxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztjQUNuQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztjQUN6QyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztjQUNsQyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztjQUNoRCxPQUFPLENBQUMsWUFBWSxDQUNsQixNQUFNLEVBQ04sMERBQTBELEdBQUcsSUFBSSxHQUFHLGNBQWMsQ0FDbkYsQ0FBQztjQUVGLE9BQU8sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO2NBQzdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDckI7VUFDRCxJQUFJLEdBQUcsRUFBRTtjQUNQLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztjQUN4RCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztjQUNsQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztjQUN4QyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztjQUNqQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztjQUN6QyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSwwREFBMEQsR0FBRyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUM7Y0FDL0csTUFBTSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7Y0FDcEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztXQUNwQjtVQUVELE9BQU8sR0FBRyxDQUFDO09BQ1osQ0FBQyxDQUFDO0VBQ1AsQ0FBQyxDQUFDO0VBQ0YsSUFBTSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUM7TUFDdEMsZUFBZSxFQUFFLHFCQUFxQjtNQVV0QyxPQUFPLEVBQUU7VUFDUDtjQUNFLElBQUksRUFBRSxNQUFNO2NBQ1osSUFBSSxFQUFFLHlCQUF5QjtXQUNoQztVQUNELElBQUksYUFBYSxDQUFDO2NBQ2hCLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQztjQUNoQixPQUFPLEVBQUUsVUFBQyxDQUFNO2tCQUNkLE9BQU8sSUFBSSxPQUFPLENBQUM7c0JBQ2pCLEdBQUcsRUFBRSx5RkFBeUY7c0JBQzlGLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTttQkFDcEMsQ0FBQzt1QkFDQyxrQkFBa0IsQ0FBQztzQkFDbEIsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFFO3NCQUMvRCxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUM7bUJBQ2pCLENBQUM7dUJBQ0QsSUFBSSxDQUFDLFVBQUMsVUFBcUM7O3NCQUMxQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7MEJBQ3JCLElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQSxTQUFTOzhCQUN6QyxPQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssYUFBYSxDQUFDOzJCQUMzRCxDQUFDLENBQUM7MEJBQ0gsSUFBSSxTQUFTLEVBQUU7OEJBQ2IsSUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7a0NBQzlELENBQUMsRUFBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQTJCLENBQUMsUUFBUSxDQUFDLFNBQVM7a0NBQzVELENBQUMsRUFBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQTJCLENBQUMsUUFBUSxDQUFDLFFBQVE7a0NBQzNELGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBUzsrQkFDakMsQ0FBQyxDQUFDOzhCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzhCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs4QkFDMUIsSUFBTSxJQUFJLEdBQ1AsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUEyQixDQUFDLFFBQVEsQ0FBQyxRQUFRO2tDQUN4RCxHQUFHO2tDQUNGLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBMkIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDOzhCQUU1RCxPQUFPLENBQUMsR0FBRyxDQUNULHVDQUF1QyxHQUFHLElBQUksR0FBRyxTQUFTLFVBQUcsSUFBSSxDQUFDLE9BQU8sMENBQUUsUUFBUSxHQUFFLEdBQUcsUUFBUSxDQUNqRyxDQUFDOzhCQUlGLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7OEJBQzFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG9DQUFvQyxDQUFDLENBQUM7OEJBQ2hFLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs4QkFDckQsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7OEJBQy9CLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzhCQUNyQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzs4QkFDOUIsR0FBRyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7OEJBQ3pDLEdBQUcsQ0FBQyxZQUFZLENBQ2QsTUFBTSxFQUNOLHVDQUF1QyxHQUFHLElBQUksR0FBRyxTQUFTLFVBQUcsSUFBSSxDQUFDLE9BQU8sMENBQUUsUUFBUSxHQUFFLEdBQUcsUUFBUSxDQUNqRyxDQUFDOzhCQUVGLEdBQUcsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDOzhCQUVoQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzhCQUNoQixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7OEJBQ3JELEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzhCQUMvQixHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQzs4QkFDckMsR0FBRyxDQUFDLFlBQVksQ0FDZCxNQUFNLEVBQ04sd0RBQXdELEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQzFGLENBQUM7OEJBQ0YsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7OEJBQzlCLEdBQUcsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDOzhCQUMxQyxHQUFHLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQzs4QkFDN0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzs4QkFDaEIsT0FBTyxHQUFHLENBQUM7MkJBQ1o7dUJBQ0Y7bUJBQ0YsQ0FBQyxDQUFDO2VBQ047V0FDRixDQUFDO1VBQ0Y7Y0FDRSxJQUFJLEVBQUUsTUFBTTtjQUNaLElBQUksRUFBRSxrQkFBa0I7V0FDekI7VUFDRDtjQUNFLElBQUksRUFBRSxRQUFRO2NBQ2QsVUFBVSxFQUFFO2tCQUNWO3NCQUNFLFNBQVMsRUFBRSxnQkFBZ0I7c0JBQzNCLEtBQUssRUFBRSxLQUFLO21CQUNiO2tCQUNEO3NCQUNFLFNBQVMsRUFBRSxNQUFNO3NCQUNqQixLQUFLLEVBQUUsTUFBTTttQkFDZDtrQkFDRDtzQkFDRSxTQUFTLEVBQUUsaUJBQWlCO3NCQUM1QixLQUFLLEVBQUUsTUFBTTttQkFDZDtrQkFDRDtzQkFDRSxTQUFTLEVBQUUseUJBQXlCO3NCQUNwQyxLQUFLLEVBQUUsY0FBYzttQkFDdEI7a0JBQ0Q7c0JBQ0UsU0FBUyxFQUFFLHFCQUFxQjtzQkFDaEMsS0FBSyxFQUFFLFVBQVU7bUJBQ2xCO2VBQ0Y7V0FDRjtVQU1EO2NBQ0UsSUFBSSxFQUFFLE1BQU07Y0FDWixJQUFJLEVBQUUsZ0JBQWdCO1dBQ3ZCO1VBQ0Q7Y0FDRSxJQUFJLEVBQUUsTUFBTTtjQUNaLElBQUksRUFHRiwwQ0FBMEM7V0FDN0M7VUFDRDtjQUNFLElBQUksRUFBRSxNQUFNO2NBQ1osSUFBSSxFQUFFLG9CQUFvQjtXQUMzQjtVQUNEO2NBQ0UsSUFBSSxFQUFFLFFBQVE7Y0FDZCxVQUFVLEVBQUU7a0JBQ1Y7c0JBQ0UsU0FBUyxFQUFFLHNCQUFzQjttQkFDbEM7a0JBQ0Q7c0JBQ0UsU0FBUyxFQUFFLHFCQUFxQjttQkFDakM7a0JBQ0Q7c0JBQ0UsU0FBUyxFQUFFLHNCQUFzQjttQkFDbEM7a0JBQ0Q7c0JBQ0UsU0FBUyxFQUFFLHNCQUFzQjtzQkFDakMsS0FBSyxFQUFFLGVBQWU7bUJBQ3ZCO2VBQ0Y7V0FDRjtVQUNEO2NBQ0UsSUFBSSxFQUFFLE1BQU07Y0FDWixJQUFJLEVBQUUsb0JBQW9CO1dBQzNCO1VBQ0Q7Y0FDRSxJQUFJLEVBQUUsUUFBUTtjQUNkLFVBQVUsRUFBRTtrQkFDVjtzQkFDRSxTQUFTLEVBQUUsV0FBVztzQkFDdEIsTUFBTSxFQUFFOzBCQUNOLFVBQVUsRUFBRSxZQUFZO3VCQUN6QjtzQkFDRCxLQUFLLEVBQUUsV0FBVzttQkFDbkI7a0JBQ0Q7c0JBQ0UsU0FBUyxFQUFFLHVCQUF1QjttQkFDbkM7ZUFDRjtXQUNGO1VBQ0Q7Y0FDRSxJQUFJLEVBQUUsTUFBTTtjQUNaLElBQUksRUFBRSxnQkFBZ0I7V0FDdkI7VUFDRDtjQUNFLElBQUksRUFBRSxRQUFRO2NBQ2QsVUFBVSxFQUFFO2tCQUNWO3NCQUNFLFNBQVMsRUFBRSxXQUFXO3NCQUN0QixLQUFLLEVBQUUsTUFBTTttQkFDZDtrQkFDRDtzQkFDRSxTQUFTLEVBQUUsV0FBVztzQkFDdEIsS0FBSyxFQUFFLE1BQU07bUJBQ2Q7a0JBQ0Q7c0JBQ0UsU0FBUyxFQUFFLFdBQVc7c0JBQ3RCLE1BQU0sRUFBRTswQkFDTixVQUFVLEVBQUUsWUFBWTt1QkFDekI7c0JBQ0QsS0FBSyxFQUFFLFdBQVc7bUJBQ25CO2tCQUNEO3NCQUNFLFNBQVMsRUFBRSxZQUFZO3NCQUN2QixNQUFNLEVBQUU7MEJBQ04sTUFBTSxFQUFFLENBQUM7dUJBQ1Y7c0JBQ0QsS0FBSyxFQUFFLFlBQVk7bUJBQ3BCO2tCQUNEO3NCQUNFLFNBQVMsRUFBRSxVQUFVO3NCQUNyQixLQUFLLEVBQUUsbUJBQW1CO21CQUMzQjtlQUNGO1dBQ0Y7VUFFRCxJQUFJLGFBQWEsQ0FBQztjQUNoQixTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDO2NBQy9CLE9BQU8sRUFBRSxXQUFXO1dBQ3JCLENBQUM7VUFjRjtjQUNFLElBQUksRUFBRSxNQUFNO2NBQ1osSUFBSSxFQUFFLG1CQUFtQjtXQUMxQjtVQUNEO2NBQ0UsSUFBSSxFQUFFLFFBQVE7Y0FDZCxVQUFVLEVBQUU7a0JBQ1Y7c0JBQ0UsU0FBUyxFQUFFLFlBQVk7c0JBQ3ZCLE1BQU0sRUFBRTswQkFDTixjQUFjLEVBQUUsSUFBSTt1QkFDckI7c0JBQ0QsS0FBSyxFQUFFLGFBQWE7bUJBQ3JCO2tCQUNEO3NCQUNFLFNBQVMsRUFBRSxZQUFZO3NCQUN2QixNQUFNLEVBQUU7MEJBQ04sY0FBYyxFQUFFLEtBQUs7dUJBQ3RCO3NCQUNELEtBQUssRUFBRSxZQUFZO21CQUNwQjtrQkFDRDtzQkFDRSxTQUFTLEVBQUUscUJBQXFCO3NCQUNoQyxLQUFLLEVBQUUsY0FBYzttQkFDdEI7a0JBQ0Q7c0JBQ0UsU0FBUyxFQUFFLFlBQVk7c0JBQ3ZCLEtBQUssRUFBRSxrQkFBa0I7bUJBQzFCO2tCQUNEO3NCQUNFLFNBQVMsRUFBRSxVQUFVO3NCQUNyQixLQUFLLEVBQUUsYUFBYTttQkFDckI7ZUFDRjtXQUNGO1VBQ0Q7Y0FDRSxJQUFJLEVBQUUsT0FBTztjQUNiLFVBQVUsRUFBRSxFQUFFO1dBQ2Y7VUFDRDtjQUNFLElBQUksRUFBRSxNQUFNO2NBQ1osSUFBSSxFQUFFLG1CQUFtQjtXQUMxQjtVQUNELElBQUksYUFBYSxDQUFDO2NBQ2hCLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQztjQUNoQixPQUFPLEVBQUUsVUFBQyxDQUFNO2tCQUNkLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztrQkFDOUQsU0FBUyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztrQkFFbkQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87c0JBQ3RCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztzQkFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztzQkFDckQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzttQkFDeEIsQ0FBQyxDQUFDO2tCQUdILElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7a0JBQzFCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyx3QkFBd0IsRUFBRSxVQUFDLENBQU07c0JBQzFELGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7bUJBQzVCLENBQUMsQ0FBQztrQkFDSCxPQUFPLFNBQVMsQ0FBQztlQUNsQjtXQUNGLENBQUM7T0FDSDtHQUNGLENBQUMsQ0FBQztBQUVILEVBQU8sSUFBTSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUM7TUFDM0MsVUFBVSxFQUFFO1VBQ1YsRUFBRSxFQUFFLGtDQUFrQztPQUN2QztNQUNELGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtHQUNuQyxDQUFDLENBQUM7QUFFSCxFQUFPLElBQU0sV0FBVyxHQUFHLElBQUksWUFBWSxDQUFDO01BQzFDLFVBQVUsRUFBRTtVQUNWLEVBQUUsRUFBRSxrQ0FBa0M7T0FDdkM7TUFDRCxPQUFPLEVBQUUsQ0FBQztNQUNWLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtNQUNsQyxhQUFhLEVBQUUsYUFBYTtHQUM3QixDQUFDLENBQUM7RUFDSCxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbkIsRUFBTyxJQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQztNQUMzQyxVQUFVLEVBQUU7VUFDVixFQUFFLEVBQUUsa0NBQWtDO09BQ3ZDO01BQ0QsT0FBTyxFQUFFLENBQUM7TUFDVixnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7R0FDbkMsQ0FBQyxDQUFDO0VBQ0gsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3BCOztFQ25mQTtNQUEyQyxpQ0FBUTtNQU9qRCx1QkFBWSxNQUFZO1VBQXhCLFlBQ0Usa0JBQU0sTUFBTSxDQUFDLFNBRWQ7VUFEQ0gsMEJBQWUsQ0FBQyxLQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O09BQ3JEO01BRUQsZ0NBQVEsR0FBUjtVQUFBLGlCQTBDQztVQXpDQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7VUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztVQUVqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztVQUNwSCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7VUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBbUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7VUFDcEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3pFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQXFCLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1VBQ3RGLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztVQUV0RSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsVUFBQSxJQUFJOztjQUNsQyxJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7a0JBQ3JCLE1BQUEsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLFdBQVcsMENBQUUsS0FBSyxHQUFHO2VBQ25DO1dBQ0YsQ0FBQyxDQUFDO1VBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUEsQ0FBQzs7Y0FDeEIsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTtrQkFDdkIsTUFBQSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsV0FBVywwQ0FBRSxLQUFLLEdBQUc7ZUFDbkM7Y0FDRCxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssVUFBVSxXQUFJLEtBQUksQ0FBQyxLQUFLLDBDQUFFLE1BQU0sQ0FBQSxFQUFFO2tCQUNoRCxJQUFJLFVBQVUsR0FBa0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7a0JBQ25ELElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtzQkFDekMsVUFBVSxHQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBeUIsQ0FBQyxRQUFRLENBQUM7bUJBQzVEO2tCQUVELElBQU0sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDO3NCQUNwQixRQUFRLEVBQUUsVUFBVTtzQkFDcEIsTUFBTSxFQUFFLElBQUksVUFBVSxDQUFDOzBCQUNyQixJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUs7MEJBQ2hCLEtBQUssRUFBRSxLQUFJLENBQUMsU0FBUzswQkFDckIsU0FBUyxFQUFFLE9BQU87MEJBQ2xCLFFBQVEsRUFBRSxDQUFDOzBCQUNYLE9BQU8sRUFBRSxLQUFLOzBCQUNkLE9BQU8sRUFBRSxLQUFLOzBCQUNkLGlCQUFpQixFQUFFLFFBQVE7MEJBQzNCLG1CQUFtQixFQUFFLE9BQU87dUJBQzdCLENBQUM7bUJBQ0gsQ0FBQyxDQUFDO2tCQUNILEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2VBQ3RCO1dBQ0YsQ0FBQyxDQUFDO09BQ0o7TUFDRCw0QkFBSSxHQUFKLFVBQUssSUFBbUM7VUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDekI7TUF4RFc7VUFBWEUsbUJBQVEsRUFBRTtpREFBcUM7TUFDcEM7VUFBWEEsbUJBQVEsRUFBRTtzREFBbUI7TUFGWCxhQUFhO1VBRGpDQyxtQkFBUSxDQUFDLGdDQUFnQyxDQUFDO1NBQ3RCLGFBQWEsQ0EwRGpDO01BQUQsb0JBQUM7R0FBQSxDQTFEMEMsUUFBUSxHQTBEbEQ7OztFQzFERCxJQUFNSSxLQUFHLEdBQUc7TUFDVixJQUFJLEVBQUUsdUJBQXVCO0dBQzlCLENBQUM7RUFHRjtNQUFrQyx3QkFBTTtNQWF0QyxjQUFZLFVBQTJCO1VBQXZDLFlBQ0Usa0JBQU0sVUFBVSxDQUFDLFNBQ2xCO1VBSkQsZUFBUyxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO1VBTS9DLGtCQUFZLEdBQUc7Y0FDYixJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7a0JBQzFCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7ZUFDM0I7V0FDRixDQUFDOztPQU5EO01BUUQscUJBQU0sR0FBTjtVQUFBLGlCQXlFQztVQXhFQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1VBQzdDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRTtVQUN2QyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsVUFBQyxDQUFNO2NBQ2xELElBQU0sR0FBRyxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2NBQ25DLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Y0FDdkUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztXQUMxRSxFQUFFO1VBQ0gsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztVQUM3QyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUU7VUFDdkMsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLFVBQUMsQ0FBTTtjQUNsRCxJQUFNLEdBQUcsR0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztjQUNuQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2NBQ3pFLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUF1QyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztjQUMzRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBdUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7V0FDN0csRUFBRTtVQUNILElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7VUFDbkQsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLFVBQUMsQ0FBTTtjQUN0RCxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7V0FDeEUsRUFBRTtVQUNILElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7VUFDL0MsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLFVBQUMsQ0FBTTtjQUNuRCxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBd0MsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Y0FDNUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQXVDLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQ2pHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUNmLENBQUM7Y0FDRCxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBdUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FDakcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQ2YsQ0FBQztXQUNILEVBQUU7VUFDSCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1VBQy9DLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLENBQU07Y0FDakQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztXQUNuQyxFQUFFO1VBQ0gsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztVQUN2RCxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUU7VUFDNUMsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLFVBQUMsQ0FBTTtjQUN2RCxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztXQUN0RCxFQUFFO1VBQ0gsUUFDRUgsb0JBQUssS0FBSyxFQUFFRyxLQUFHLENBQUMsSUFBSTtjQUNsQkgsb0JBQUssV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFDLFdBQVcsR0FBTztjQUMxREEsOEJBQWUsT0FBTyxFQUFDLFVBQVUsRUFBQyxJQUFJLFFBQUMsV0FBVztrQkFDaERBLHNDQUF1QixJQUFJLEVBQUMsT0FBTztzQkFDakNBLDhCQUFlLEtBQUssRUFBQyxHQUFHOzswQkFDWEEsOEJBQWUsRUFBRSxFQUFDLE1BQU0sRUFBQyxZQUFZLFFBQUMsU0FBUyxRQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLEdBQUcsR0FBaUIsQ0FDNUY7c0JBQ2hCQSw4QkFBZSxLQUFLLEVBQUMsR0FBRzs7MEJBQ1hBLDhCQUFlLEVBQUUsRUFBQyxNQUFNLEVBQUMsWUFBWSxRQUFDLFNBQVMsUUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxHQUFHLEdBQWlCLENBQzVGLENBQ007a0JBQ3hCQSxzQ0FBdUIsSUFBSSxFQUFDLGNBQWM7c0JBQ3hDQSw4QkFBZSxLQUFLLEVBQUMsR0FBRzs7MEJBQ2ZBLCtCQUFnQixLQUFLLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLEtBQUssR0FBa0IsQ0FDeEYsQ0FDTTtrQkFDeEJBLHNDQUF1QixJQUFJLEVBQUMsU0FBUztzQkFDbkNBLDhCQUFlLEtBQUssRUFBQyxHQUFHOzswQkFDaEJBLCtCQUFnQixFQUFFLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxLQUFLLEdBQWtCLENBQzFFLENBQ007a0JBQ3hCQSxzQ0FBdUIsSUFBSSxFQUFDLFVBQVU7c0JBQ3BDQSw4QkFBZSxLQUFLLEVBQUMsR0FBRzs7MEJBQ2hCQSw4QkFBZSxLQUFLLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLFVBQVUsR0FBaUIsQ0FDNUQ7c0JBQ2hCQSw4QkFBZSxLQUFLLEVBQUMsR0FBRzs7MEJBRXRCQSw4QkFBZSxFQUFFLEVBQUMsV0FBVyxFQUFDLFlBQVksUUFBQyxTQUFTLFFBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsR0FBRyxHQUFpQixDQUN0RixDQUNNLENBQ1YsQ0FDWixFQUNOO09BQ0g7TUE5RkQ7VUFEQ0Msa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQzt3Q0FDVTtNQUVwQztVQURDQSxrQkFBTyxDQUFDLGlCQUFpQixDQUFDO3lDQUNiO01BRWQ7VUFEQ0Esa0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQzs2Q0FDZDtNQUtqQjtVQUpDSCxtQkFBUSxDQUFDO2NBQ1IsSUFBSSxFQUFFLGFBQWE7V0FDcEIsQ0FBQztVQUNESSxpQkFBVSxFQUFFOzZDQUNrQztNQVg1QixJQUFJO1VBRHhCSCxtQkFBUSxDQUFDLGtCQUFrQixDQUFDO1NBQ1IsSUFBSSxDQWlHeEI7TUFBRCxXQUFDO0dBQUEsQ0FqR2lDLE1BQU0sR0FpR3ZDOzs7RUN6R0Q7TUFBNkMsbUNBQVE7TUFJbkQseUJBQVksTUFBWTtVQUF4QixZQUNFLGtCQUFNLE1BQU0sQ0FBQyxTQUVkO1VBRENILDBCQUFlLENBQUMsS0FBSSxFQUFFLE1BQU0sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztPQUNyRDtNQUtELG9DQUFVLEdBQVY7VUFBQSxpQkF1QkM7VUF0QkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1VBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7VUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQztjQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Y0FDZixTQUFTLEVBQUUsY0FBYztjQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVE7Y0FDcEIsWUFBWSxFQUFFLFFBQVE7V0FDdkIsQ0FBQyxDQUFDO1VBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1VBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBLEVBQUU7O2NBQ3pCLElBQUksRUFBRSxDQUFDLEtBQUssS0FBSyxVQUFVLEVBQUU7a0JBQzNCLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7ZUFDM0I7Y0FDRCxJQUFJLEVBQUUsQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFO2tCQUN4QixNQUFBLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxXQUFXLDBDQUFFLEtBQUssR0FBRztlQUNuQztXQUNGLENBQUMsQ0FBQztVQUNILElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxVQUFBLElBQUk7O2NBQ2xDLElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRTtrQkFDckIsTUFBQSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsV0FBVywwQ0FBRSxLQUFLLEdBQUc7ZUFDbkM7V0FDRixDQUFDLENBQUM7T0FDSjtNQUNELDhCQUFJLEdBQUosVUFBSyxJQUFtQztVQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztVQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO09BQy9CO01BdENXO1VBQVhFLG1CQUFRLEVBQUU7bURBQXFDO01BQ3BDO1VBQVhBLG1CQUFRLEVBQUU7b0RBQTBCO01BRmxCLGVBQWU7VUFEbkNDLG1CQUFRLENBQUMsb0NBQW9DLENBQUM7U0FDMUIsZUFBZSxDQXdDbkM7TUFBRCxzQkFBQztHQUFBLENBeEM0QyxRQUFRLEdBd0NwRDs7O0VDckNELElBQU1JLEtBQUcsR0FBRztNQUNWLElBQUksRUFBRSx5QkFBeUI7R0FDaEMsQ0FBQztFQUdGO01BQW9DLDBCQUFNO01BbUJ4QyxnQkFBWSxVQUE2QjtVQUF6QyxZQUNFLGtCQUFNLFVBQVUsQ0FBQyxTQUNsQjtVQVJELGVBQVMsR0FBb0IsSUFBSSxlQUFlLEVBQUUsQ0FBQztVQUNuRCxvQkFBYyxHQUFHO2NBQ2YsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2tCQUMxQixLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO2VBQzdCO1dBQ0YsQ0FBQzs7T0FHRDtNQUVELDZCQUFZLEdBQVosVUFBYSxFQUFPO1VBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztPQUN2RDtNQUNELHVCQUFNLEdBQU47VUFBQSxpQkFxQkM7O1VBcEJDLE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQywwQ0FBRSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLEVBQU87Y0FDL0YsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztXQUN2QixFQUFFO1VBRUgsUUFDRUgsb0JBQUssS0FBSyxFQUFFRyxLQUFHLENBQUMsSUFBSTtjQUNsQkgsb0JBQUssV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxFQUFDLGNBQWMsR0FBTztjQUMvREEsOEJBQWUsS0FBSyxFQUFDLEdBQUc7O2tCQUV0QkEsOEJBQ0UsS0FBSyxFQUFDLEdBQUcsRUFDVCxJQUFJLEVBQUMsUUFBUSxFQUNiLEdBQUcsRUFBQyxHQUFHLEVBQ1AsR0FBRyxFQUFDLE1BQU0sRUFDVixJQUFJLEVBQUMsSUFBSSxFQUNULEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FDckIsQ0FDSCxDQUNaLEVBQ047T0FDSDtNQTdDRDtVQURDQyxrQkFBTyxDQUFDLGdCQUFnQixDQUFDOzBDQUNVO01BRXBDO1VBRENBLGtCQUFPLENBQUMsaUJBQWlCLENBQUM7MkNBQ0Y7TUFFekI7VUFEQ0Esa0JBQU8sQ0FBQyxrQkFBa0IsQ0FBQzs0Q0FDRjtNQUUxQjtVQURDQSxrQkFBTyxDQUFDLDBCQUEwQixDQUFDO29EQUNiO01BS3ZCO1VBSkNILG1CQUFRLENBQUM7Y0FDUixJQUFJLEVBQUUsZUFBZTtXQUN0QixDQUFDO1VBQ0RJLGlCQUFVLEVBQUU7K0NBQ3NDO01BYmhDLE1BQU07VUFEMUJILG1CQUFRLENBQUMsb0JBQW9CLENBQUM7U0FDVixNQUFNLENBZ0QxQjtNQUFELGFBQUM7R0FBQSxDQWhEbUMsTUFBTSxHQWdEekM7OztFQzFERDtNQUErQyxxQ0FBUTtNQU1yRCwyQkFBWSxNQUFZO1VBQXhCLFlBQ0Usa0JBQU0sTUFBTSxDQUFDLFNBRWQ7VUFFRCx5QkFBbUIsR0FBRyxVQUFDLE9BQXFCO2NBQzFDLElBQU0sYUFBYSxHQUFpQixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSztrQkFDcEUsT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFVBQVUsQ0FBQztlQUMvRCxDQUFpQixDQUFDO2NBQ25CLElBQU0sV0FBVyxHQUF5QixhQUFhLENBQUMsUUFBZ0MsQ0FBQyxLQUFLLEVBQXlCLENBQUM7Y0FDeEgsSUFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7a0JBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztrQkFDN0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2tCQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7a0JBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUM1QztrQkFDQyxXQUFXLENBQUMsTUFBZ0MsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztlQUMvRjttQkFBTTtrQkFDSixXQUFXLENBQUMsTUFBZ0MsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztlQUN6RjtjQUNELGFBQWEsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1dBQ3RDLENBQUM7VUFnREYsbUJBQWEsR0FBRyxVQUFDLEtBQWE7O2NBQzVCLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtrQkFDcEIsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQywwQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtrQkFDNUQsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQywwQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtrQkFDM0QsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQywwQ0FBRSxZQUFZLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRTtrQkFDakUsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQywwQ0FBRSxlQUFlLENBQUMsU0FBUyxFQUFFO2tCQUNsRSxNQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2tCQUMxRCxNQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2VBQ2pFO21CQUFNO2tCQUNMLE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsMENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7a0JBQzlELE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsMENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7a0JBQ3pELE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsMENBQUUsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUU7a0JBQ25FLE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsMENBQUUsZUFBZSxDQUFDLFNBQVMsRUFBRTtrQkFDaEUsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQywwQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtlQUM5RDtXQUNGLENBQUM7VUFuRkFILDBCQUFlLENBQUMsS0FBSSxFQUFFLE1BQU0sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztPQUNyRDtNQXFCRCxnQ0FBSSxHQUFKLFVBQUssSUFBbUM7VUFBeEMsaUJBNkNDO1VBNUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7VUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Y0FDYixLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDakQsQ0FBQyxDQUFDO1VBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFDLE9BQXFCOztjQUNuRCxLQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7Y0FDbEMsVUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQywwQ0FBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRztrQkFDbkUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztzQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztzQkFDdEIsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzttQkFDN0QsQ0FBQyxDQUFDO2tCQUNILEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2tCQUMzQyxNQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLDBDQUFFLGVBQWUsQ0FBQyxVQUFVLEVBQUU7ZUFDckU7Y0FDRCxJQUFNLEVBQUUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtrQkFDOUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2VBQzNELENBQUMsQ0FBQztjQUNILElBQUksRUFBRSxXQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLDBDQUFFLFlBQVksQ0FBQyxVQUFVLEVBQUMsRUFBRTtrQkFDMUUsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7ZUFDaEU7bUJBQU07a0JBQ0wsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztzQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztzQkFDdEIsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzttQkFDN0QsQ0FBQyxDQUFDO2VBQ0o7V0FDRixDQUFDLENBQUM7VUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztVQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDO2NBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtjQUNmLE1BQU0sRUFBRTtrQkFDTixLQUFLLEVBQUU7c0JBQ0wsRUFBRSxFQUFFLGtDQUFrQzttQkFDdkM7ZUFDRjtXQUNGLENBQUMsQ0FBQztVQUNILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUU7Y0FDbEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztrQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztrQkFDdEIsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztlQUM3RCxDQUFDLENBQUM7Y0FDSCxJQUFNLElBQUksR0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO2NBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2NBQ3pELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7V0FDNUQsQ0FBQyxDQUFDO09BQ0o7TUExRVc7VUFBWEUsbUJBQVEsRUFBRTtxREFBcUM7TUFEN0IsaUJBQWlCO1VBRHJDQyxtQkFBUSxDQUFDLHdDQUF3QyxDQUFDO1NBQzlCLGlCQUFpQixDQTRGckM7TUFBRCx3QkFBQztHQUFBLENBNUY4QyxRQUFRLEdBNEZ0RDs7O0VDdkZELElBQU1JLEtBQUcsR0FBRztNQUNWLElBQUksRUFBRSwyQkFBMkI7R0FDbEMsQ0FBQztFQUdGO01BQXNDLDRCQUFNO01BYzFDLGtCQUFZLFVBQStCO1VBQTNDLFlBQ0Usa0JBQU0sVUFBVSxDQUFDLFNBQ2xCO1VBSkQsZUFBUyxHQUFzQixJQUFJLGlCQUFpQixFQUFFLENBQUM7VUFLdkQsaUJBQVcsR0FBRztjQUNaLElBQUksS0FBSSxDQUFDLFFBQVEsRUFBRTtrQkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO2VBQ2xDO1dBQ0YsQ0FBQztVQUNGLG1CQUFhLEdBQUc7Y0FDZCxJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQUU7a0JBQ2YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2VBQ2xDO1dBQ0YsQ0FBQztVQUNGLHdCQUFrQixHQUFHLFVBQUMsQ0FBTTs7Y0FDMUIsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUU7a0JBQzNDLE1BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsMENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7a0JBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7a0JBQ25CLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7a0JBQzVFLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztzQkFDakQsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7bUJBQ3ZCLENBQUMsQ0FBQztrQkFDSCxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO3VCQUNqQixNQUFNLENBQUMsVUFBQSxLQUFLO3NCQUNYLE9BQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzttQkFDaEUsQ0FBQzt1QkFDRCxPQUFPLENBQUMsVUFBQSxLQUFLO3NCQUNaLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO3NCQUNwQixLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzttQkFDdEIsQ0FBQyxDQUFDO2VBQ047bUJBQU07a0JBQ0wsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQywwQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtrQkFDaEUsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO3NCQUNqRCxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzttQkFDdEIsQ0FBQyxDQUFDO2tCQUNILEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO3NCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3NCQUN0QixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO21CQUM3RCxDQUFDLENBQUM7ZUFDSjtXQUNGLENBQUM7VUFDRix3QkFBa0IsR0FBRyxVQUFDLENBQU07Y0FDMUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTttQkFDaEMsTUFBTSxDQUFDLFVBQUEsS0FBSzs7a0JBQ1gsYUFBTyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsMENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7ZUFDakUsQ0FBQzttQkFDRCxPQUFPLEVBQUUsQ0FBQztjQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO2tCQUNsQixLQUFLLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2VBQzVELENBQUMsQ0FBQztXQUNKLENBQUM7VUFFRixvQkFBYyxHQUFHLFVBQUMsQ0FBTTs7Y0FDdEIsTUFBQSxRQUFRO21CQUNMLGFBQWEsQ0FBQyxjQUFjLENBQUMsMENBQzVCLGdCQUFnQixDQUNoQixxQkFBcUIsRUFDckIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFDekU7V0FDTCxDQUFDO1VBQ0YsbUJBQWEsR0FBRyxVQUFDLENBQU07O2NBQ3JCLE1BQUEsUUFBUTttQkFDTCxhQUFhLENBQUMsY0FBYyxDQUFDLDBDQUM1QixnQkFBZ0IsQ0FDaEIscUJBQXFCLEVBQ3JCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQ3pFO2NBRUosTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQywwQ0FBRSxlQUFlLENBQUMsVUFBVSxFQUFFO1dBQy9ELENBQUM7O09BbEVEO01Bb0VELHlCQUFNLEdBQU47VUFBQSxpQkFzQ0M7VUFyQ0MsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHNDQUFzQyxDQUFDLENBQUM7VUFDaEYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Y0FDaEIsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLGdCQUFnQixDQUFDLDZCQUE2QixFQUFFLFVBQUMsQ0FBTTs7a0JBRTNELFVBQUksQ0FBQyxDQUFDLE1BQU0sMENBQUUsT0FBTyxFQUFFO3NCQUNyQixLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsT0FBQyxDQUFDLENBQUMsTUFBTSwwQ0FBRSxLQUFLLENBQUMsQ0FBQzttQkFDL0M7ZUFDRixFQUFFO1dBQ0osQ0FBQyxDQUFDO1VBRUgsUUFDRUgsb0JBQUssS0FBSyxFQUFFRyxLQUFHLENBQUMsSUFBSTtjQUNsQkgsc0JBQU8sS0FBSyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsT0FBTztrQkFDOUJBLCtCQUFnQixXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUMsYUFBYSxHQUFrQjsyQkFDN0U7Y0FDUkEsK0JBQ0UsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQ2hDLEtBQUssRUFBQyxRQUFRLEVBQ2QsRUFBRSxFQUFDLGFBQWEsRUFDaEIsS0FBSyxFQUFDLEtBQUssRUFDWCxHQUFHLEVBQUMsR0FBRyxFQUNQLEdBQUcsRUFBQyxHQUFHLEVBQ1AsSUFBSSxFQUFDLEtBQUssR0FDTTtjQUVsQkEsb0JBQUssV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFDLE1BQU0sR0FBTztjQUNwREEsb0JBQUssV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsUUFBUSxHQUFPO2NBQ3ZFQSxvQ0FBcUIsS0FBSyxFQUFDLE1BQU07a0JBQy9CQSx5Q0FBMEIsT0FBTyxRQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLFVBQVUsV0FFakM7a0JBQzNCQSx5Q0FBMEIsS0FBSyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsWUFBWSxFQUFDLFFBQVEsb0JBRXRDLENBQ1AsQ0FDbEIsRUFDTjtPQUNIO01BeEhEO1VBRENDLGtCQUFPLENBQUMsZ0JBQWdCLENBQUM7NENBQ1U7TUFHcEM7VUFEQ0Esa0JBQU8sQ0FBQyxvQkFBb0IsQ0FBQztnREFDQTtNQUU5QjtVQURDQSxrQkFBTyxDQUFDLGtCQUFrQixDQUFDOzhDQUNBO01BSzVCO1VBSkNILG1CQUFRLENBQUM7Y0FDUixJQUFJLEVBQUUsaUJBQWlCO1dBQ3hCLENBQUM7VUFDREksaUJBQVUsRUFBRTtpREFDMEM7TUFacEMsUUFBUTtVQUQ1QkgsbUJBQVEsQ0FBQyxzQkFBc0IsQ0FBQztTQUNaLFFBQVEsQ0EySDVCO01BQUQsZUFBQztHQUFBLENBM0hxQyxNQUFNLEdBMkgzQzs7O0VDdElEO01BQTZDLG1DQUFRO01BSW5ELHlCQUFZLE1BQVk7VUFBeEIsWUFDRSxrQkFBTSxNQUFNLENBQUMsU0FFZDtVQURDSCwwQkFBZSxDQUFDLEtBQUksRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7T0FDckQ7TUFFRCw4QkFBSSxHQUFKLFVBQUssSUFBbUM7VUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7VUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQztjQUM3QixJQUFJLE1BQUE7Y0FDSixTQUFTLEVBQUUsVUFBVTtjQUNyQix1QkFBdUIsRUFBRSxVQUFBLEtBQUs7a0JBQzVCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7a0JBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO3NCQUM5QixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7c0JBQ3hELE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3NCQUNoQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztzQkFDbEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7c0JBQ3ZDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO3NCQUN6QyxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztzQkFDekMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxLQUFLLENBQUMsT0FBTyxJQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO3NCQUNyRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3NCQUMzQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsVUFBQSxLQUFLOzswQkFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUUsS0FBSyxDQUFDLE1BQWMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPOzhCQUN4RSxRQUFRLE9BQUUsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLE1BQWMsMENBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQzt1QkFDakUsQ0FBQyxDQUFDO3NCQUNILElBQUksQ0FBQyxLQUFLLEdBQUc7MEJBQ1gsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzswQkFDM0IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzt1QkFDekIsQ0FBQztzQkFDRixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTswQkFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRzs4QkFDckI7a0NBQ0U7c0NBQ0UsS0FBSyxFQUFFLGFBQWE7c0NBQ3BCLElBQUksRUFBRSxRQUFRO3NDQUNkLEVBQUUsRUFBRSxpQkFBaUI7c0NBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7bUNBQ2hDOytCQUNGOzJCQUNGLENBQUM7dUJBQ0g7bUJBQ0Y7ZUFDRjtXQUNGLENBQUMsQ0FBQztVQUNILElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQUEsS0FBSztjQUN2QyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLGlCQUFpQixFQUFFO2tCQUN4QyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQTJCLENBQUMsYUFBYSxHQUFJLEtBQUssQ0FBQyxNQUE0QixDQUFDLEtBQUssQ0FBQztlQUNuRztXQUNGLENBQUMsQ0FBQztPQUNKO01BcERXO1VBQVhFLG1CQUFRLEVBQUU7bURBQXFDO01BRDdCLGVBQWU7VUFEbkNDLG1CQUFRLENBQUMsb0NBQW9DLENBQUM7U0FDMUIsZUFBZSxDQXNEbkM7TUFBRCxzQkFBQztHQUFBLENBdEQ0QyxRQUFRLEdBc0RwRDs7O0VDaERELElBQU1JLEtBQUcsR0FBRztNQUNWLElBQUksRUFBRSx5QkFBeUI7R0FDaEMsQ0FBQztFQUdGO01BQW9DLDBCQUFNO01BWXhDLGdCQUFZLFVBQTZCO1VBQXpDLFlBQ0Usa0JBQU0sVUFBVSxDQUFDLFNBQ2xCO1VBSkQsZUFBUyxHQUFvQixJQUFJLGVBQWUsRUFBRSxDQUFDO1VBS25ELG1CQUFhLEdBQUc7Y0FDZCxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7a0JBQ2xCLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztlQUNyQztXQUNGLENBQUM7O09BTEQ7TUFNRCx1QkFBTSxHQUFOO1VBQ0UsUUFDRUgsb0JBQUssS0FBSyxFQUFFRyxLQUFHLENBQUMsSUFBSTtjQUNsQkgsb0JBQUssV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxFQUFDLFFBQVEsR0FBTyxDQUNwRCxFQUNOO09BQ0g7TUF4QkQ7VUFEQ0Msa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQzswQ0FDVTtNQUVwQztVQURDQSxrQkFBTyxDQUFDLHFCQUFxQixDQUFDOytDQUNMO01BTTFCO1VBSkNILG1CQUFRLENBQUM7Y0FDUixJQUFJLEVBQUUsZUFBZTtXQUN0QixDQUFDO1VBQ0RJLGlCQUFVLEVBQUU7K0NBQ3NDO01BVmhDLE1BQU07VUFEMUJILG1CQUFRLENBQUMsb0JBQW9CLENBQUM7U0FDVixNQUFNLENBMkIxQjtNQUFELGFBQUM7R0FBQSxDQTNCbUMsTUFBTSxHQTJCekM7OztFQ3JDRDtNQUFxRCwyQ0FBUTtNQUkzRCxpQ0FBWSxNQUFZO1VBQXhCLFlBQ0Usa0JBQU0sTUFBTSxDQUFDLFNBRWQ7VUFEQ0gsMEJBQWUsQ0FBQyxLQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O09BQ3JEO01BRUQsc0NBQUksR0FBSixVQUFLLElBQW1DO1VBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztVQUN0RixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUEsQ0FBQztjQUN0QyxJQUFLLENBQUMsQ0FBQyxJQUFZLENBQUMsS0FBSyxFQUFFO2tCQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBSSxDQUFDLENBQUMsSUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7a0JBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFJLENBQUMsQ0FBQyxJQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztlQUNsRDtXQUNGLENBQUMsQ0FBQztPQUNKO01BaEJXO1VBQVhFLG1CQUFRLEVBQUU7MkRBQXFDO01BRDdCLHVCQUF1QjtVQUQzQ0MsbUJBQVEsQ0FBQyxvREFBb0QsQ0FBQztTQUMxQyx1QkFBdUIsQ0FrQjNDO01BQUQsOEJBQUM7R0FBQSxDQWxCb0QsUUFBUSxHQWtCNUQ7OztFQ1pELElBQU1JLEtBQUcsR0FBRztNQUNWLElBQUksRUFBRSxpQ0FBaUM7R0FDeEMsQ0FBQztFQUdGO01BQTRDLGtDQUFNO01BYWhELHdCQUFZLFVBQXFDO1VBQWpELFlBQ0Usa0JBQU0sVUFBVSxDQUFDLFNBQ2xCO1VBSkQsZUFBUyxHQUE0QixJQUFJLHVCQUF1QixFQUFFLENBQUM7VUFNbkUsbUJBQWEsR0FBRztjQUNkLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtrQkFDZixLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztlQUMxQztXQUNGLENBQUM7O09BTkQ7TUFRRCwrQkFBTSxHQUFOO1VBQ0UsUUFDRUgsb0JBQUssS0FBSyxFQUFFRyxLQUFHLENBQUMsSUFBSTtjQUNsQkgsb0JBQUssV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxFQUFDLGdCQUFnQixHQUFPLENBQzVELEVBQ047T0FDSDtNQTNCRDtVQURDQyxrQkFBTyxDQUFDLGdCQUFnQixDQUFDO2tEQUNVO01BR3BDO1VBRENBLGtCQUFPLENBQUMsa0JBQWtCLENBQUM7b0RBQ0Q7TUFNM0I7VUFKQ0gsbUJBQVEsQ0FBQztjQUNSLElBQUksRUFBRSx1QkFBdUI7V0FDOUIsQ0FBQztVQUNESSxpQkFBVSxFQUFFO3VEQUNzRDtNQVhoRCxjQUFjO1VBRGxDSCxtQkFBUSxDQUFDLDRCQUE0QixDQUFDO1NBQ2xCLGNBQWMsQ0E4QmxDO01BQUQscUJBQUM7R0FBQSxDQTlCMkMsTUFBTSxHQThCakQ7OztFQ3ZDRDtNQUFrRCx3Q0FBa0I7TUFLbEUsOEJBQVksTUFBWTtVQUF4QixZQUNFLGtCQUFNLE1BQU0sQ0FBQyxTQUVkO1VBQ0Qsd0JBQWtCLEdBQUcsVUFBQyxLQUFVO2NBQzlCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztXQUN6QixDQUFDO1VBRUYsb0JBQWMsR0FBRyxVQUFDLElBQVM7Y0FDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2NBRzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztjQUt4QixJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2NBR3JDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2NBR2hELElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2NBR2pELElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Y0FHOUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Y0FJekMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztjQUNwRCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztjQUcvRCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFDLEtBQVU7a0JBQzdCLElBQU0sY0FBYyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2tCQUNyRCxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO2tCQUM3QixJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7c0JBQzdDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzttQkFDekI7ZUFDRixDQUFDLENBQUM7Y0FFSCxPQUFPLElBQUksQ0FBQztXQUNiLENBQUM7VUE1Q0FILDBCQUFlLENBQUMsS0FBSSxFQUFFLE1BQU0sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztPQUNyRDtNQTZDRCxtQ0FBSSxHQUFKLFVBQUssSUFBbUM7VUFBeEMsaUJBbUNDO1VBbENDLElBQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLENBQUMsQ0FBQztVQUM5RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7VUFDdEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7VUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1VBRXZDLElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDO2NBQzFCLFFBQVEsRUFBRSxJQUFJO2NBQ2QsTUFBTSxFQUFFO2tCQUNOLElBQUksRUFBRSxhQUFhO2tCQUNuQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7a0JBQ3JCLE9BQU8sRUFBRSxJQUFJO2VBQ2Q7V0FDSyxDQUFDLENBQUM7VUFDVixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7VUFDM0NRLG1CQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBQSxNQUFNO2NBRXBDLEtBQUksQ0FBQyxlQUFlO21CQUNqQixJQUFJLENBQUM7a0JBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2tCQUNuQixLQUFLLEVBQ0gsSUFBSSxDQUFDLEtBQUs7c0JBQ1YsQ0FBQztzQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztlQUMvRixDQUFDO21CQUNELEtBQUssQ0FBQyxVQUFTLEtBQUs7a0JBRW5CLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSx1QkFBdUIsRUFBRTtzQkFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzttQkFDdEI7ZUFDRixDQUFDLENBQUM7Y0FHTCxPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztXQUMzQixDQUFDLENBQUM7T0FDSjtNQXZGVztVQUFYTixtQkFBUSxFQUFFO3dEQUFxQztNQUQ3QixvQkFBb0I7VUFEeENDLG1CQUFRLENBQUMsOENBQThDLENBQUM7U0FDcEMsb0JBQW9CLENBeUZ4QztNQUFELDJCQUFDO0dBekZELENBQWtETSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxHQXlGbkU7O0VDckZELElBQU1GLEtBQUcsR0FBRztNQUNWLElBQUksRUFBRSw4QkFBOEI7R0FDckMsQ0FBQztFQUdGO01BQXlDLCtCQUFnQjtNQWV2RCxxQkFBWSxVQUFrQztVQUE5QyxZQUNFLGtCQUFNLFVBQVUsQ0FBQyxTQUNsQjtVQVZELFVBQUksR0FBRyxFQUFFLENBQUM7VUFNVixlQUFTLEdBQXlCLElBQUksb0JBQW9CLEVBQUUsQ0FBQztVQUs3RCxxQkFBZSxHQUFHLFVBQUMsR0FBbUI7Y0FDcEMsSUFBSSxLQUFJLENBQUMsZUFBZSxFQUFFO2tCQUN4QixLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7ZUFDdEM7V0FDRixDQUFDOztPQUxEO01BTUQsNEJBQU0sR0FBTjtVQUNFLFFBQ0VILG9CQUFLLEtBQUssRUFBRUcsS0FBRyxDQUFDLElBQUk7Y0FDbEJILG9CQUFLLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBQyxhQUFhLEdBQU8sQ0FDM0QsRUFDTjtPQUNIO01BM0JEO1VBRENDLGtCQUFPLENBQUMsZ0JBQWdCLENBQUM7K0NBQ1U7TUFFcEM7VUFEQ0Esa0JBQU8sQ0FBQywyQkFBMkIsQ0FBQzswREFDUDtNQUc5QjtVQUZDQSxrQkFBTyxDQUFDLGdCQUFnQixDQUFDO1VBQ3pCQyxpQkFBVSxFQUFFOytDQUNIO01BTVY7VUFKQ0osbUJBQVEsQ0FBQztjQUNSLElBQUksRUFBRSxvQkFBb0I7V0FDM0IsQ0FBQztVQUNESSxpQkFBVSxFQUFFO29EQUNnRDtNQWIxQyxXQUFXO1VBRC9CSCxtQkFBUSxDQUFDLHlCQUF5QixDQUFDO1NBQ2YsV0FBVyxDQThCL0I7TUFBRCxrQkFBQztHQTlCRCxDQUF5Q00sbUJBQVEsQ0FBQyxNQUFNLENBQUMsR0E4QnhEOzs7RUM3Qk0sSUFBTSxXQUFXLEdBQVksSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNsRCxFQUFPLElBQU0sTUFBTSxHQUFXLElBQUksTUFBTSxFQUFFLENBQUM7QUFDM0MsRUFBTyxJQUFJLE1BQWMsQ0FBQztBQUMxQixFQUFPLElBQUksTUFBYyxDQUFDO0FBQzFCLEVBQU8sSUFBSSxRQUFrQixDQUFDO0FBQzlCLEVBQU8sSUFBSSxTQUFvQixDQUFDO0FBQ2hDLEVBQU8sSUFBSSxjQUE4QixDQUFDO0FBRTFDLEVBQU8sSUFBSSxXQUFrQixDQUFDO0FBQzlCLEVBQU8sSUFBSSxjQUE4QixDQUFDO0FBQzFDLEVBQU8sSUFBTSxVQUFVLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUMzQyxXQUFnQixVQUFVLENBQUMsSUFBWSxFQUFFLElBQW1DO01BQzFFLElBQUksSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLGNBQWMsRUFBRTtVQUN4QyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQUM7Y0FDbEMsSUFBSSxFQUFFLElBQUk7Y0FDVixXQUFXLEVBQUUsV0FBVztjQUN4QixZQUFZLEVBQUUsWUFBWTtjQUMxQixhQUFhLEVBQUUsWUFBWTtjQUMzQixTQUFTLEVBQUUsU0FBUztXQUNyQixDQUFDLENBQUM7T0FDSjtNQUNELElBQUksSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtVQUNoQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztPQUN2RDtNQUNELElBQUksSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtVQUNoQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztPQUN2RDtNQUNELElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRTtVQUNwQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUM7Y0FDdEIsSUFBSSxNQUFBO2NBQ0osU0FBUyxFQUFFLFVBQVU7Y0FDckIsZUFBZSxFQUNiLGtIQUFrSDtXQUNySCxDQUFDLENBQUM7T0FDSjtNQUNELElBQUksSUFBSSxLQUFLLFdBQVcsSUFBSSxDQUFDLFNBQVMsRUFBRTtVQUN0QyxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO09BQ3JGO01BRUQsSUFBSSxJQUFJLEtBQUssVUFBVSxJQUFJLENBQUMsUUFBUSxFQUFFO1VBQ3BDLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO09BQzVEO01BQ0QsSUFBSSxJQUFJLEtBQUssVUFBVSxJQUFJLENBQUMsY0FBYyxFQUFFO1VBQzFDLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO09BQ3pFO0VBQ0gsQ0FBQztBQUNELFdBQWdCLFdBQVcsQ0FBQyxJQUFtQztNQUM3RCxJQUFNLFdBQVcsR0FBOEIsSUFBSSxvQkFBb0IsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQztNQUNsRixJQUFNLGlCQUFpQixHQUFXLElBQUksTUFBTSxDQUFDO1VBQzNDLE9BQU8sRUFBRSxXQUFXO1VBQ3BCLElBQUksRUFBRSxVQUFVO1VBQ2hCLGVBQWUsRUFBRSxnQkFBZ0I7T0FDbEMsQ0FBQyxDQUFDO01BQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLENBQUM7TUFFOUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztNQUNyRCxJQUFNLE1BQU0sR0FBVyxJQUFJLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO01BQ2xELE1BQU0sQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQUMsS0FBVTtVQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ3BCLENBQUMsQ0FBQztNQUNILElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztNQUVoQyxJQUFNLEtBQUssR0FBVSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO01BQy9DLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsS0FBVTtVQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ3BCLENBQUMsQ0FBQztNQUNILElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztNQUMvQixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztNQUNsRCxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztNQUN4QixXQUFXLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztNQUNyQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztNQUN2QixVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztNQUNqQyxJQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQztNQUM5QyxJQUFNLGNBQWMsR0FBVyxJQUFJLE1BQU0sQ0FBQztVQUN4QyxPQUFPLEVBQUUsV0FBVztVQUNwQixJQUFJLEVBQUUsVUFBVTtVQUNoQixlQUFlLEVBQUUsbUNBQW1DO09BQ3JELENBQUMsQ0FBQztNQUNILGNBQWMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFVBQUEsUUFBUTtVQUN2QyxJQUFJLFFBQVEsRUFBRTtjQUNaLFdBQVcsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztrQkFDekMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2tCQUNuQixLQUFLLEVBQ0gsSUFBSSxDQUFDLEtBQUs7c0JBQ1YsQ0FBQztzQkFDRCxJQUFJLENBQUMsR0FBRyxDQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUN4RCxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDM0Q7ZUFDSixDQUFDLENBQUM7V0FDSjtPQUNGLENBQUMsQ0FBQztNQUNILElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztNQUU1QyxNQUFNLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztNQUMvQixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztNQUNuQixNQUFNLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztNQUM1QixPQUFPLElBQUksQ0FBQztFQUNkLENBQUM7OztFQ3JITSxJQUFNLFlBQVksR0FBRyxVQUFDLE1BQWM7TUFDekMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQWtCO1VBQzdELElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxNQUFNLEVBQUU7Y0FDekIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7V0FDL0I7ZUFBTTtjQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Y0FDbkIsS0FBSyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztjQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2NBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2NBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2tCQUNwQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUFFO3NCQUMzQixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO21CQUM3RDt1QkFBTTtzQkFDTCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO21CQUNqRDtrQkFDRCxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztrQkFDakMsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRSxDQUU3Qjt1QkFBTTtzQkFDTCxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7bUJBQzdCO2VBQ0Y7V0FDRjtPQUNGLENBQUMsQ0FBQztFQUNMLENBQUMsQ0FBQztBQUVGLEVBQU8sSUFBTSxPQUFPLEdBQXdCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0VBQzNHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxPQUFPLENBQUMsVUFBQyxNQUFlO01BQy9CLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFNO1VBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztVQUMzQixZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztVQUM1QixVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7VUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQU07Y0FDckIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2tCQUMzQixDQUFDLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2VBQzdCO1dBQ0YsQ0FBQyxDQUFDO1VBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7T0FDbkMsRUFBRTtFQUNMLENBQUMsRUFBRTtBQUVILEVBQU8sSUFBTSxlQUFlLEdBQUc7TUFDN0IsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztNQUMzQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1VBQ3pFLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7T0FDbEMsQ0FBQyxDQUFDO0VBQ0wsQ0FBQyxDQUFDOzs7RUMvQ0ssSUFBTSxnQkFBZ0IsR0FBRztNQUU5QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1VBQzFELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyx5QkFBeUIsRUFBRTtjQUM1QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO1dBQ3BFO09BQ0YsQ0FBQyxDQUFDO01BQ0gsTUFBTSxDQUFDLFFBQVEsR0FBRzs7VUFDaEIsSUFBSSxPQUFDLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxNQUFjLDBDQUFFLFVBQVUsS0FBSSxHQUFHLEVBQUU7Y0FDN0MsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7O2tCQUNyRCxJQUFJLE9BQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsMENBQUUsWUFBWSxDQUFDLE1BQU0sT0FBTSxVQUFVLEVBQUU7c0JBQ3hFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDhCQUE4QixDQUFDLENBQUM7bUJBQzVEO3VCQUFNO3NCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7bUJBQ2hEO2VBQ0YsQ0FBQyxDQUFDO1dBQ0o7ZUFBTTtjQUNMLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2tCQUNyRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUU7c0JBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7bUJBQzlDO3VCQUFNO3NCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDhCQUE4QixDQUFDLENBQUM7bUJBQzVEO2VBQ0YsQ0FBQyxDQUFDO1dBQ0o7T0FDRixDQUFDO01BRUYsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7VUFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixFQUFFO2NBQ25ELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2tCQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2tCQUM3QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtzQkFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7bUJBQ3ZDLENBQUMsQ0FBQztlQUNKLENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQztPQUNKLENBQUMsQ0FBQztNQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1VBQ2pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7O2NBQzdCLFlBQUEsSUFBSSxDQUFDLGFBQWEsMENBQUUsYUFBYSwwQ0FBRSxlQUFlLENBQUMsV0FBVyxFQUFFO2NBQ2hFLFlBQUEsSUFBSSxDQUFDLGFBQWEsMENBQUUsYUFBYSwwQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtjQUM5RCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVSxFQUFFO2tCQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztrQkFDdEMsWUFBQSxJQUFJLENBQUMsYUFBYSwwQ0FBRSxhQUFhLDBDQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsOEJBQThCLEVBQUU7ZUFDMUY7bUJBQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsRUFBRTtrQkFDbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7a0JBQ3RDLFlBQUEsSUFBSSxDQUFDLGFBQWEsMENBQUUsYUFBYSwwQ0FBRSxZQUFZLENBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFO2VBQzdFO1dBQ0YsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0VBQ0wsQ0FBQyxDQUFDO0FBQ0YsRUFBTyxJQUFNLFVBQVUsR0FBRztNQUN4QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTs7VUFDckQsSUFBTSxDQUFDLEdBQWdCLE1BQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFVBQVUsMENBQUUsYUFBYSxDQUFDLG9CQUFvQixDQUFnQixDQUFDO1VBQzVGLElBQUksQ0FBQyxFQUFFO2NBQ0wsQ0FBQyxDQUFDLFNBQVMsSUFBSSxzREFBc0QsQ0FBQztXQUN2RTtVQUVELElBQU0sTUFBTSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztVQUN0RSxJQUFNLFFBQVEsR0FBRyxVQUFDLGFBQW9CO3NDQUV6QixRQUFRO2tCQUNqQixJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO3NCQUNsQyxJQUFJLFFBQVEsQ0FBQyxhQUFhLEtBQUssV0FBVyxFQUFFOzBCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzBCQUN0QixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBVzs4QkFDMUIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFNLFFBQVEsQ0FBQyxNQUFjLENBQUMsS0FBSyxFQUFFO2tDQUNsRCxJQUFLLFFBQVEsQ0FBQyxNQUFjLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFO3NDQUN0RCxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO21DQUNsQzt1Q0FBTTtzQ0FDTCxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzttQ0FDbkM7K0JBQ0Y7MkJBQ0YsQ0FBQyxDQUFDOzBCQUNILElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7OEJBQzVCLFVBQVUsQ0FBQzs7a0NBQ1QsSUFBSyxRQUFRLENBQUMsTUFBYyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRTtzQ0FDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxRQUFRLENBQUMsTUFBYyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztzQ0FDekQsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQywwQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTttQ0FDL0Q7dUNBQU07c0NBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBRSxRQUFRLENBQUMsTUFBYyxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztzQ0FDN0QsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQywwQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTttQ0FDNUQ7K0JBQ0YsQ0FBQyxDQUFDOzJCQUNKO3VCQUNGO21CQUNGOztjQXpCSCxLQUF1QixVQUFhLEVBQWIsK0JBQWEsRUFBYiwyQkFBYSxFQUFiLElBQWE7a0JBQS9CLElBQU0sUUFBUSxzQkFBQTswQkFBUixRQUFRO2VBMEJsQjtXQUNGLENBQUM7VUFDRixJQUFNLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1VBQ2hELFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO09BQ2hDLENBQUMsQ0FBQztFQUNMLENBQUMsQ0FBQzs7OztBQy9GRixNQWlCYSxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUM7TUFDOUIsU0FBUyxFQUFFLFNBQVM7TUFDcEIsR0FBRyxLQUFBO0dBQ0osQ0FBQyxDQUFDO0VBRUgsU0FBUyxpQkFBaUIsQ0FBQyxJQUFhO01BQ3RDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7VUFDeEMsSUFBTSxRQUFNLEdBQVcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBVyxDQUFDLENBQUMsQ0FBQztVQUNuRyxRQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO2NBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7a0JBQzlCLElBQU0sR0FBRyxHQUFHLFFBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztzQkFDakMsT0FBTyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7bUJBQzFCLENBQUMsQ0FBQztrQkFDSCxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxPQUFPLENBQUM7a0JBQzdCLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLE9BQU8sQ0FBQztlQUM5QixDQUFDLENBQUM7Y0FDSCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxRQUFNLENBQUMsT0FBTyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBTSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1dBQzVFLENBQUMsQ0FBQztPQUNKO0VBQ0gsQ0FBQztFQUVELElBQUksQ0FBQyxJQUFJLENBQUM7TUFDUixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1VBQzlCLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUU7Y0FDekIsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsVUFBQSxPQUFPOztrQkFDNUIsTUFBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsU0FBUywwQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO3NCQUM5QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTswQkFDL0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDOzhCQUNoQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDOzJCQUMxQixDQUFDLENBQUM7MEJBQ0gsSUFBSSxLQUFLLEVBQUU7OEJBQ1QsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDOzJCQUM1Qjt1QkFDRjttQkFDRixFQUFFO2VBQ0osQ0FBQyxDQUFDO1dBQ0o7ZUFBTTtjQUNMLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFVBQUEsT0FBTztrQkFDNUIsSUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO3NCQUNyRCxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDO21CQUMxQixDQUFDLENBQUM7a0JBQ0gsSUFBSSxLQUFLLEVBQUU7c0JBQ1QsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7bUJBQ3RCO2VBQ0YsQ0FBQyxDQUFDO1dBQ0o7T0FDRixDQUFDLENBQUM7TUFDSCxJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7VUFDNUMsT0FBTyxLQUFLLENBQUMsS0FBSyxLQUFLLFVBQVUsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztPQUMvRCxDQUFDLENBQUM7TUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFBLENBQUM7VUFDZixjQUFjLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7VUFDckMsVUFBVSxDQUFDO2NBQ1QsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQ3hCLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDVixDQUFDLENBQUM7TUFDSCxJQUFJO1dBQ0QsYUFBYSxDQUFDLGFBQWEsQ0FBQztXQUM1QixJQUFJLENBQUM7O1VBQ0osTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQywwQ0FBRSxlQUFlLENBQUMsUUFBUSxFQUFFO1VBQ2hFLGNBQWMsQ0FBQyxhQUFhLEdBQUcsYUFBb0MsQ0FBQztVQUVwRSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsRUFBTzs7Y0FDM0MsSUFBSSxFQUFFLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTtrQkFDM0IsSUFBSSxPQUFBLE1BQU0sQ0FBQyxTQUFTLDBDQUFFLGNBQWMsSUFBRyxDQUFDLEVBQUU7c0JBQ3hDLElBQU0sQ0FBQyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7c0JBQ3RHLGNBQWMsQ0FBQyxRQUFRLEdBQUcsQ0FBbUIsQ0FBQztzQkFDOUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO3NCQUN4QixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3NCQUMxQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRzswQkFDbEIsSUFBSSxFQUFFLGFBQWE7MEJBQ25CLEtBQUssRUFBRSxNQUFNOzBCQUNiLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTswQkFDdkUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDO3VCQUM1QixDQUFDO3NCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO21CQUN2Qjt1QkFBTTtzQkFDTCxjQUFjLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO21CQUMvQztrQkFDRCxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7ZUFDeEI7V0FDRixDQUFDLENBQUM7T0FDSixDQUFDO1dBQ0QsS0FBSyxDQUFDLFVBQUMsTUFBVztVQUVqQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1VBQ3BCLFNBQVMsQ0FBQyw4REFBOEQsRUFBRSxLQUFLLENBQUMsQ0FBQztPQUNsRixDQUFDLENBQUM7RUFDUCxDQUFDLENBQUMsQ0FBQztFQUNILElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7RUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUVwQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFO01BQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVM7V0FDZixNQUFNLENBQUMsVUFBQSxLQUFLO1VBQ1gsT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFFLEtBQTJCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztPQUM5RSxDQUFDO1dBQ0QsT0FBTyxFQUFFLENBQ2IsQ0FBQztNQUNGLElBQU0sSUFBSSxHQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7TUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7TUFDekQsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUM3RCxDQUFDLENBQUMsQ0FBQztFQUdILElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7TUFDNUIsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQywwQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtNQUNwRSxNQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLDBDQUFFLGVBQWUsQ0FBQyxXQUFXLEVBQUU7TUFDdEUsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLG1DQUFtQyxDQUFDLDBDQUFFLGVBQWUsQ0FBQyxRQUFRLEVBQUU7R0FDeEY7RUFHRCxJQUFJLENBQUMsSUFBSSxDQUFDO01BQ1IsVUFBVSxFQUFFLENBQUM7TUFDYixlQUFlLEVBQUUsQ0FBQztFQUNwQixDQUFDLENBQUMsQ0FBQztFQUVILGdCQUFnQixFQUFFLENBQUM7RUFDbkIsUUFBUSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7In0=
