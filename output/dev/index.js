
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
define(['exports', 'esri/WebMap', 'esri/widgets/Legend', 'esri/widgets/Print', 'esri/widgets/Bookmarks', 'esri/core/accessorSupport/decorators', 'esri/widgets/support/widget', 'esri/widgets/Widget', 'esri/core/Accessor', 'esri/widgets/Search', 'esri/widgets/FeatureTable', 'esri/layers/FeatureLayer', 'esri/layers/GraphicsLayer', 'esri/widgets/Feature', 'esri/widgets/Search/LayerSearchSource', 'esri/widgets/FeatureTable/FieldColumnConfig', 'esri/PopupTemplate', 'esri/core/watchUtils', 'esri/widgets/CoordinateConversion', 'esri/widgets/Expand', 'esri/widgets/Measurement', 'esri/widgets/Compass', 'esri/widgets/Locate', 'esri/widgets/Track', 'esri/Color', 'esri/widgets/Sketch', 'esri/Graphic', 'esri/symbols/TextSymbol', 'esri/widgets/BasemapGallery', 'esri/widgets/LayerList', 'esri/views/MapView', 'esri/geometry/geometryEngine'], function (exports, WebMap, Legend, Print, Bookmarks, decorators, widget, Widget, Accessor, Search, FeatureTable, FeatureLayer, GraphicsLayer, Feature, LayerSearchSource, FieldColumnConfig, PopupTemplate, watchUtils, CoordinateConversion, Expand, Measurement, Compass, Locate, Track, Color, Sketch, Graphic, TextSymbol, BaseMapGallery, LayerList, MapView, geometryEngine) { 'use strict';

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
  LayerSearchSource = LayerSearchSource && Object.prototype.hasOwnProperty.call(LayerSearchSource, 'default') ? LayerSearchSource['default'] : LayerSearchSource;
  FieldColumnConfig = FieldColumnConfig && Object.prototype.hasOwnProperty.call(FieldColumnConfig, 'default') ? FieldColumnConfig['default'] : FieldColumnConfig;
  PopupTemplate = PopupTemplate && Object.prototype.hasOwnProperty.call(PopupTemplate, 'default') ? PopupTemplate['default'] : PopupTemplate;
  CoordinateConversion = CoordinateConversion && Object.prototype.hasOwnProperty.call(CoordinateConversion, 'default') ? CoordinateConversion['default'] : CoordinateConversion;
  Expand = Expand && Object.prototype.hasOwnProperty.call(Expand, 'default') ? Expand['default'] : Expand;
  Measurement = Measurement && Object.prototype.hasOwnProperty.call(Measurement, 'default') ? Measurement['default'] : Measurement;
  Compass = Compass && Object.prototype.hasOwnProperty.call(Compass, 'default') ? Compass['default'] : Compass;
  Locate = Locate && Object.prototype.hasOwnProperty.call(Locate, 'default') ? Locate['default'] : Locate;
  Track = Track && Object.prototype.hasOwnProperty.call(Track, 'default') ? Track['default'] : Track;
  Color = Color && Object.prototype.hasOwnProperty.call(Color, 'default') ? Color['default'] : Color;
  Sketch = Sketch && Object.prototype.hasOwnProperty.call(Sketch, 'default') ? Sketch['default'] : Sketch;
  Graphic = Graphic && Object.prototype.hasOwnProperty.call(Graphic, 'default') ? Graphic['default'] : Graphic;
  TextSymbol = TextSymbol && Object.prototype.hasOwnProperty.call(TextSymbol, 'default') ? TextSymbol['default'] : TextSymbol;
  BaseMapGallery = BaseMapGallery && Object.prototype.hasOwnProperty.call(BaseMapGallery, 'default') ? BaseMapGallery['default'] : BaseMapGallery;
  LayerList = LayerList && Object.prototype.hasOwnProperty.call(LayerList, 'default') ? LayerList['default'] : LayerList;
  MapView = MapView && Object.prototype.hasOwnProperty.call(MapView, 'default') ? MapView['default'] : MapView;
  geometryEngine = geometryEngine && Object.prototype.hasOwnProperty.call(geometryEngine, 'default') ? geometryEngine['default'] : geometryEngine;

  var map = new WebMap();
  map = new WebMap({ portalItem: { id: '95092428774c4b1fb6a3b6f5fed9fbc4' } });
  if (window.localStorage.getItem('imaps')) {
      map = WebMap.fromJSON(JSON.parse(window.localStorage.getItem('imaps')));
  }
  //# sourceMappingURL=app.js.map

  var theme = 'light';
  var setTheme = function (theme) {
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
                  debugger;
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
          _this.arcadeExpressionInfos = [
              {
                  name: 'bom-doc-num',
                  title: 'bom-doc-num',
                  expression: "var results = FeatureSetByRelationshipName($feature, 'CONDO_BOOKS', ['*'], false); return First(results).BOM_DOC_NUM;"
              },
              {
                  name: 'deed-doc-num',
                  title: 'deed-doc-num',
                  expression: "var results = FeatureSetByRelationshipName($feature, 'CONDO_BOOKS', ['*'], false); return First(results).DEED_DOC_NUM;"
              },
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
                  name: 'deed-book-page',
                  title: 'deed-book-page',
                  expression: '"Book "+$feature.DEED_BOOK+" Page "+$feature.DEED_PAGE'
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
          _this.popupTemplate = new PopupTemplate({
              expressionInfos: _this.arcadeExpressionInfos,
              content: [
                  {
                      type: 'text',
                      text: '<h1 class="text-green">{SITE_ADDRESS}</h1>' +
                          '<h2>General</h2>{expression/general}' +
                          '<h2>Owner</h2>{OWNER}<br/>{expression/mailing-address}' +
                          '<h2>Valuation</h2>{expression/property-values}' +
                          '<h2>Sale Information</h2>{TOTSALPRICE}<br/>{SALE_DATE}' +
                          '<h2>Deeds</h2>{expression/deed-book-page}' +
                          '<br/><strong>Deed Date</strong><br/>{DEED_DATE}<br/>' +
                          '<br/>Legal Description<br/>{PROPDESC}<br/>' +
                          '<a href="http://services.wakegov.com/booksweb/pdfview.aspx?docid={expression/bom-doc-num}&RecordDate=" target="_blank">Book of Maps</a><br/><a href="http://services.wakegov.com/booksweb/pdfview.aspx?docid={expression/deed-doc-num}&RecordDate=" target="_blank">Deed</a>'
                  },
                  {
                      type: 'media',
                      mediaInfos: []
                  }
              ]
          });
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
              if (!_this.searchWidget.viewModel.selectedSuggestion) {
                  var oids_1 = [];
                  debugger;
                  var where_1 = '';
                  debugger;
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
                  debugger;
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
                                  _this.featureTable.renderNow();
                              });
                          }
                          else {
                              _this.getProperty(oids_1);
                              _this.featureTable.layer = _this.createFeatureTableLayer(_this.condosTable.fields, tableFeatures_1);
                              _this.featureTable.renderNow();
                          }
                      });
                  });
              }
              else {
                  if (event.numResults) {
                      var layer = event.results[0].source.layer;
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
                                  for (var key in result) {
                                      result[key].features.forEach(function (feature) {
                                          oids.push(feature.getAttribute('OBJECTID'));
                                          _this.getProperty(oids);
                                          feature.layer = _this.condosTable;
                                          _this.setFeature(feature, _this.view, [], oids);
                                          _this.toggleContent('feature');
                                          _this.featureTable.layer = _this.createFeatureTableLayer(_this.condosTable.fields, [feature]);
                                      });
                                  }
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
                              _this.setFeature(result.features[0], _this.view, [], oids);
                              _this.toggleContent('feature');
                              _this.featureTable.layer = _this.createFeatureTableLayer(_this.condosTable.fields, result.features);
                          });
                      }
                  }
              }
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
                      if (!features[0].geometry) {
                          features[0].geometry = geometry;
                      }
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
          mediaInfos = [];
          this.condosTable
              .queryRelatedFeatures({ relationshipId: relationship === null || relationship === void 0 ? void 0 : relationship.id, objectIds: oids, outFields: ['*'] })
              .then(function (result) {
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
              _this.condosTable.popupTemplate.content[1].mediaInfos = mediaInfos;
              feature.layer = _this.condosTable;
              feature.popupTemplate = feature.layer.popupTemplate;
              _this.feature.graphic = feature;
              _this.feature.graphic.symbol = _this.singleSymbol;
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
                  new LayerSearchSource({
                      layer: this.addressTable,
                      searchFields: ['ADDRESS'],
                      displayField: 'ADDRESS',
                      exactMatch: false,
                      outFields: ['ADDRESS', 'REA_REID'],
                      name: 'Site Address',
                      placeholder: 'example: 222 W HARGETT'
                  }),
                  new LayerSearchSource({
                      layer: condosTable,
                      searchFields: ['OWNER'],
                      displayField: 'OWNER',
                      exactMatch: false,
                      outFields: ['OWNER', 'REID', 'OBJECTID'],
                      name: 'Owner',
                      placeholder: 'example: SMITH, JOHN'
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
          return (widget.tsx("div", { class: CSS.base },
              widget.tsx("div", { afterCreate: this._createSearch, id: "search" }),
              widget.tsx("div", { afterCreate: this._createTable, id: "table" }),
              widget.tsx("div", { id: "feature", class: "hidden" },
                  widget.tsx("div", { id: "featureDiv", afterCreate: this._createFeature })),
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
          name: 'bom-doc-num',
          title: 'bom-doc-num',
          expression: "var results = FeatureSetByRelationshipName($feature, 'CONDO_BOOKS', ['*'], false); return First(results).BOM_DOC_NUM;"
      },
      {
          name: 'deed-doc-num',
          title: 'deed-doc-num',
          expression: "var results = FeatureSetByRelationshipName($feature, 'CONDO_BOOKS', ['*'], false); return First(results).DEED_DOC_NUM;"
      },
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
          name: 'deed-book-page',
          title: 'deed-book-page',
          expression: '"Book "+$feature.DEED_BOOK+" Page "+$feature.DEED_PAGE'
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
  var popupTemplate = new PopupTemplate({
      expressionInfos: arcadeExpressionInfos,
      content: [
          {
              type: 'text',
              text: '<h1 class="text-green">{SITE_ADDRESS}</h1>' +
                  '<h2>General</h2>{expression/general}' +
                  '<h2>Owner</h2>{OWNER}<br/>{expression/mailing-address}' +
                  '<h2>Valuation</h2>{expression/property-values}' +
                  '<h2>Sale Information</h2>{TOTSALPRICE}<br/>{SALE_DATE}' +
                  '<h2>Deeds</h2>{expression/deed-book-page}' +
                  '<br/><strong>Deed Date</strong><br/>{DEED_DATE}<br/>' +
                  '<br/>Legal Description<br/>{PROPDESC}<br/>' +
                  '<a href="http://services.wakegov.com/booksweb/pdfview.aspx?docid={expression/bom-doc-num}&RecordDate=" target="_blank">Book of Maps</a><br/><a href="http://services.wakegov.com/booksweb/pdfview.aspx?docid={expression/deed-doc-num}&RecordDate=" target="_blank">Deed</a>'
          },
          {
              type: 'media',
              mediaInfos: []
          }
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
                  debugger;
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
                          open: false
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
      measurement.view = view;
      measurement.container = 'measureDiv';
      drawWidget.view = view;
      drawWidget.container = 'drawDiv';
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
          item.addEventListener('calcitePanelDismissedChange', function (e) {
              var _a, _b;
              if (window.outerWidth <= 500) {
                  if (e.target.hasAttribute('dismissed')) {
                      (_a = document.querySelector('#viewDiv')) === null || _a === void 0 ? void 0 : _a.classList.remove('below');
                  }
                  else {
                      (_b = document.querySelector('#viewDiv')) === null || _b === void 0 ? void 0 : _b.classList.add('below');
                  }
              }
          });
      });
  };
  //# sourceMappingURL=panels.js.map

  var _a, _b, _c;
  var view = new MapView({
      container: 'viewDiv',
      map: map
  });
  view.when(function () {
      view.map.allLayers.forEach(function (layer) {
          if (layer.type != 'group') {
              layer.watch('visible', function (visible) {
                  var _a;
                  (_a = layers.layerList) === null || _a === void 0 ? void 0 : _a.operationalItems.forEach(function (item) {
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
                  var group = layers.layerList.operationalItems.find(function (i) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FwcC50cyIsIi4uLy4uL3NyYy9tZW51LnRzIiwiLi4vLi4vc3JjL3RpcHMudHMiLCIuLi8uLi9zcmMvYWxlcnQudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaC9Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL1Byb3BlcnR5U2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUvTWVhc3VyZVZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUudHN4IiwiLi4vLi4vc3JjL2RhdGEvc2VhcmNoLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy9EcmF3Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9TZWxlY3QvU2VsZWN0Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvU2VsZWN0LnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL0Jhc2VNYXBzL0Jhc2VNYXBzVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQmFzZU1hcHMudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvTGF5ZXJzL0xheWVyc1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xheWVycy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaC9Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xvY2F0aW9uU2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzLnRzIiwiLi4vLi4vc3JjL2FjdGlvbmJhci50cyIsIi4uLy4uL3NyYy9wYW5lbHMudHMiLCIuLi8uLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG5leHBvcnQgbGV0IG1hcCA9IG5ldyBXZWJNYXAoKTtcbm1hcCA9IG5ldyBXZWJNYXAoeyBwb3J0YWxJdGVtOiB7IGlkOiAnOTUwOTI0Mjg3NzRjNGIxZmI2YTNiNmY1ZmVkOWZiYzQnIH0gfSk7XG5pZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpKSB7XG4gIG1hcCA9IFdlYk1hcC5mcm9tSlNPTihKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hcHMnKSBhcyBzdHJpbmcpKTtcbn1cbiIsImV4cG9ydCBsZXQgdGhlbWUgPSAnbGlnaHQnO1xuY29uc3Qgc2V0VGhlbWUgPSAodGhlbWU6IHN0cmluZykgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWNvbG9yJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXRpcC1tYW5hZ2VyJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWRyb3Bkb3duJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFsZXJ0JykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmsnKS5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGlmIChsaW5rLmhyZWYuaW5jbHVkZXModGhlbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnKSkge1xuICAgICAgbGluay5ocmVmID0gJ2h0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjE2L2VzcmkvdGhlbWVzLycgKyB0aGVtZSArICcvbWFpbi5jc3MnO1xuICAgIH1cbiAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGluaXRNZW51ID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLWRyb3Bkb3duJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVEcm9wZG93blNlbGVjdCcsIChlOiBhbnkpID0+IHtcbiAgICBlLnRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWRyb3Bkb3duLWl0ZW0nKS5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhY3RpdmUnKSkge1xuICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgc3RyaW5nO1xuICAgICAgICB0aGVtZSA9IHZhbHVlO1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgc2V0VGhlbWUodGhlbWUpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkge1xuICAgIGxldCB0aGVtZU5hbWU6IHN0cmluZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSBhcyBzdHJpbmc7XG4gICAgc2V0VGhlbWUodGhlbWVOYW1lKTtcblxuICAgIHRoZW1lTmFtZSA9IHRoZW1lTmFtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgICAgaWYgKChlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmcpICE9IHRoZW1lTmFtZSkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgc3RyaW5nO1xuICAgICAgICB0aGVtZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKChlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSBhcyBzdHJpbmcpID09PSB0aGVtZU5hbWUpIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vbWVudSc7XG5cbmNvbnN0IHRpcEdyb3VwcyA9IFtcbiAge1xuICAgIHBhbmVsOiB7XG4gICAgICBuYW1lOiAnc2VsZWN0VGlwJyxcbiAgICAgIHRpdGxlOiAnU2VsZWN0aW9uJyxcbiAgICAgIHRpcHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUbyBkcmF3IGEgY29udGludW91cyBsaW5lIG9yIHBvbHlnb24sIGxvbmcgcHJlc3MgYW5kIGRyYWcgeW91ciBjdXJzb3InLFxuICAgICAgICAgIHRpdGxlOiAnRnJlZWhhbmQgRHJhd2luZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUbyBkcmF3IGEgY29udGludW91cyBsaW5lIG9yIHBvbHlnb24sIGxvbmcgcHJlc3MgYW5kIGRyYWcgeW91ciBjdXJzb3InLFxuICAgICAgICAgIHRpdGxlOiAnRnJlZWhhbmQgRHJhd2luZydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIHBhbmVsOiB7XG4gICAgICBuYW1lOiAncHJvcGVydHlTZWFyY2hUaXAnLFxuICAgICAgdGl0bGU6ICdQcm9wZXJ0eSBTZWFyY2gnLFxuICAgICAgdGlwczogW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICdUbyBzZWFyY2ggYnkgYSBwb3J0aW9uIG9mIGFuIG93bmVyIG5hbWUgb3IgYWRkcmVzcywgaGl0IGVudGVyIHdpdGhvdXQgc2VsZWN0aW5nIGZvcm0gdGhlIGxpc3Qgb2Ygc3VnZ2VzdGlvbnMuJyxcbiAgICAgICAgICB0aXRsZTogJ1dpbGRjYXJkIFNlYXJjaCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUbyBxdWlja2x5IHNlbGVjdCBhIHByb3BlcnR5IGZyb20gdGhlIG1hcCwgbG9uZyBwcmVzcyBvbiBhIHByb3BlcnR5IG9uIHRoZSBtYXAuJyxcbiAgICAgICAgICB0aXRsZTogJ0xvbmcgUHJlc3MnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnVG8gc2VsZWN0IGJ5IGEgbG9jYXRpb24gdXNlIHRoZSBwcm9wZXJ0eSBzZWxlY3Rpb24gdG9vbC4nLFxuICAgICAgICAgIHRpdGxlOiAnU2VsZWN0IEJ5IExvY2F0aW9uJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdiYXNlbWFwVGlwJyxcbiAgICAgIHRpdGxlOiAnQmFzZW1hcHMnLFxuICAgICAgdGlwczogW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICdUaGUgaW1hZ2VyeSBhbmQgaW1hZ2VyeSBoeWJyaWQgYmFzZSBtYXBzIGxpc3RlZCB1bmRlciB0aGUgbWFwcyB0YWIgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgbGF0ZXN0IGltYWdlcnkgZnJvbSBSYWxlaWdoICgyMDE5KSBhbmQgZnJvbSB0aGUgU3RhdGUgb2YgTm9ydGggQ2Fyb2xpbmEgKDIwMTcpLicsXG4gICAgICAgICAgdGl0bGU6ICdJbWFnZXJ5IEJhc2VtYXBzJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG5dO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaXBzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlwJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS10aXAtbWFuYWdlcicpPy5yZW1vdmUoKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBjb25zdCBtYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAtbWFuYWdlcicpO1xuICAgICAgbWFuYWdlci5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgdGhlbWUpO1xuICAgICAgY29uc3QgdGlwR3JvdXAgPSB0aXBHcm91cHMuZmluZChncm91cCA9PiB7XG4gICAgICAgIHJldHVybiBncm91cC5wYW5lbC5uYW1lID09PSBpdGVtLmlkO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAtZ3JvdXAnKTtcbiAgICAgIGdyb3VwLnNldEF0dHJpYnV0ZSgndGV4dC1ncm91cC10aXRsZScsICh0aXBHcm91cCBhcyBhbnkpPy5wYW5lbC50aXRsZSk7XG4gICAgICBtYW5hZ2VyLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICAgIHRpcEdyb3VwPy5wYW5lbC50aXBzLmZvckVhY2godGlwID0+IHtcbiAgICAgICAgY29uc3QgY2FsY2l0ZVRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtdGlwJyk7XG4gICAgICAgIGNhbGNpdGVUaXAuc2V0QXR0cmlidXRlKCdoZWFkaW5nJywgdGlwLnRpdGxlKTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC5pbm5lckhUTUwgPSB0aXAubWVzc2FnZTtcbiAgICAgICAgY2FsY2l0ZVRpcC5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQoY2FsY2l0ZVRpcCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50Py5ib2R5Py5hcHBlbmRDaGlsZChtYW5hZ2VyKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2hvd0FsZXJ0KHRleHQ6IHN0cmluZywgY29sb3I6IHN0cmluZykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLWFsZXJ0Jyk/LnJlbW92ZSgpO1xuICBjb25zdCBhbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYWxlcnQnKTtcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZXNzYWdlLnNldEF0dHJpYnV0ZSgnc2xvdCcsICdhbGVydC1tZXNzYWdlJyk7XG4gIG1lc3NhZ2UuaW5uZXJIVE1MID0gdGV4dDtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdjb2xvcicsIGNvbG9yKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gIGFsZXJ0LnNldEF0dHJpYnV0ZSgnaWNvbicsICcnKTtcblxuICBhbGVydC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbGVydCk7XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaCc7XG5pbXBvcnQgRmVhdHVyZVRhYmxlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlVGFibGUnO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZSc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnO1xuaW1wb3J0IExheWVyU2VhcmNoU291cmNlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gvTGF5ZXJTZWFyY2hTb3VyY2UnO1xuaW1wb3J0IEZpZWxkQ29sdW1uQ29uZmlnIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlVGFibGUvRmllbGRDb2x1bW5Db25maWcnO1xuaW1wb3J0IFBvcHVwVGVtcGxhdGUgZnJvbSAnZXNyaS9Qb3B1cFRlbXBsYXRlJztcbmltcG9ydCBFeHByZXNzaW9uSW5mbyBmcm9tICdlc3JpL3BvcHVwL0V4cHJlc3Npb25JbmZvJztcbmltcG9ydCBNZW51QnV0dG9uSXRlbSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZVRhYmxlL0dyaWQvc3VwcG9ydC9CdXR0b25NZW51SXRlbSc7XG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UsIHdoZW5EZWZpbmVkIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Qcm9wZXJ0eVNlYXJjaC5Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQHByb3BlcnR5KCkgYWRkcmVzc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQHByb3BlcnR5KCkgcHJvcGVydHlMYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG5cbiAgQHByb3BlcnR5KCkgc2VhcmNoV2lkZ2V0OiBlc3JpLndpZGdldHNTZWFyY2g7XG4gIEBwcm9wZXJ0eSgpIGZlYXR1cmVUYWJsZTogZXNyaS5GZWF0dXJlVGFibGU7XG4gIEBwcm9wZXJ0eSgpIGZlYXR1cmU6IGVzcmkuRmVhdHVyZTtcbiAgQHByb3BlcnR5KCkgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG5cbiAgY2x1c3RlclBvaW50czogRmVhdHVyZUxheWVyO1xuXG4gIGdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBpZDogJ3Byb3BlcnR5LXNlbGVjdCcsIGxpc3RNb2RlOiAnaGlkZScsIG1pblNjYWxlOiAxOTIwMCB9KTtcbiAgc2luZ2xlU3ltYm9sID0ge1xuICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgc3R5bGU6ICdub25lJyxcbiAgICBvdXRsaW5lOiB7IHdpZHRoOiAyLjUsIGNvbG9yOiBbMjU1LCA4MiwgODIsIDFdIH0sXG4gICAgY29sb3I6IFsyNTMsIDQ2LCA2NSwgMC4yNV1cbiAgfTtcbiAgbXVsdGlTeW1ib2wgPSB7XG4gICAgdHlwZTogJ3NpbXBsZS1maWxsJyxcbiAgICBzdHlsZTogJ25vbmUnLFxuICAgIG91dGxpbmU6IHsgd2lkdGg6IDIuNSwgY29sb3I6IFsyNDksIDI0MywgMCwgMV0gfSxcbiAgICBjb2xvcjogWzI1MywgNDYsIDY1LCAwLjI1XVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAnY29uZG9zVGFibGUnLCB0aGlzLmluaXRTZWFyY2guYmluZCh0aGlzKSk7XG4gICAgd2hlbkRlZmluZWQodGhpcywgJ2dlb21ldHJ5JywgdGhpcy5zZWFyY2hCeUdlb21ldHJ5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXJjYWRlRXhwcmVzc2lvbkluZm9zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdib20tZG9jLW51bScsXG4gICAgICB0aXRsZTogJ2JvbS1kb2MtbnVtJyxcbiAgICAgIGV4cHJlc3Npb246XG4gICAgICAgIFwidmFyIHJlc3VsdHMgPSBGZWF0dXJlU2V0QnlSZWxhdGlvbnNoaXBOYW1lKCRmZWF0dXJlLCAnQ09ORE9fQk9PS1MnLCBbJyonXSwgZmFsc2UpOyByZXR1cm4gRmlyc3QocmVzdWx0cykuQk9NX0RPQ19OVU07XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdkZWVkLWRvYy1udW0nLFxuICAgICAgdGl0bGU6ICdkZWVkLWRvYy1udW0nLFxuICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgXCJ2YXIgcmVzdWx0cyA9IEZlYXR1cmVTZXRCeVJlbGF0aW9uc2hpcE5hbWUoJGZlYXR1cmUsICdDT05ET19CT09LUycsIFsnKiddLCBmYWxzZSk7IHJldHVybiBGaXJzdChyZXN1bHRzKS5ERUVEX0RPQ19OVU07XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdtYWlsaW5nLWFkZHJlc3MnLFxuICAgICAgdGl0bGU6ICdtYWlsaW5nLWFkZHJlc3MnLFxuICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgJ1doZW4oSXNFbXB0eSgkZmVhdHVyZS5BRERSMyksJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIsJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjMpJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3Byb3BlcnR5LXZhbHVlcycsXG4gICAgICB0aXRsZTogJ3Byb3BlcnR5LXZhbHVlcycsXG4gICAgICBleHByZXNzaW9uOlxuICAgICAgICAnXCJCdWlsZGluZyBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuQkxER19WQUwrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkxhbmQgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkxBTkRfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3RhbCBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuVE9UQUxfVkFMVUVfQVNTRCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdkZWVkLWJvb2stcGFnZScsXG4gICAgICB0aXRsZTogJ2RlZWQtYm9vay1wYWdlJyxcbiAgICAgIGV4cHJlc3Npb246ICdcIkJvb2sgXCIrJGZlYXR1cmUuREVFRF9CT09LK1wiIFBhZ2UgXCIrJGZlYXR1cmUuREVFRF9QQUdFJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2dlbmVyYWwnLFxuICAgICAgdGl0bGU6ICdnZW5lcmFsJyxcbiAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICdcIlBJTlwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJGZlYXR1cmUuUElOX05VTStcIiBcIiskZmVhdHVyZS5QSU5fRVhUK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAgICdcIlJFSURcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKyRmZWF0dXJlLlJFSUQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkNpdHlcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgICAnUHJvcGVyKCRmZWF0dXJlLkNJVFlfREVDT0RFKStUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiSnVyaXNkaWN0aW9uXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICAgJyRmZWF0dXJlLlBMQU5OSU5HX0pVUklTRElDVElPTitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG93bnNoaXBcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1Byb3BlcigkZmVhdHVyZS5UT1dOU0hJUF9ERUNPREUpJ1xuICAgIH1cbiAgXSBhcyBFeHByZXNzaW9uSW5mb1tdO1xuXG4gIHBvcHVwVGVtcGxhdGUgPSBuZXcgUG9wdXBUZW1wbGF0ZSh7XG4gICAgZXhwcmVzc2lvbkluZm9zOiB0aGlzLmFyY2FkZUV4cHJlc3Npb25JbmZvcyxcbiAgICBjb250ZW50OiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgdGV4dDpcbiAgICAgICAgICAnPGgxIGNsYXNzPVwidGV4dC1ncmVlblwiPntTSVRFX0FERFJFU1N9PC9oMT4nICtcbiAgICAgICAgICAnPGgyPkdlbmVyYWw8L2gyPntleHByZXNzaW9uL2dlbmVyYWx9JyArXG4gICAgICAgICAgJzxoMj5Pd25lcjwvaDI+e09XTkVSfTxici8+e2V4cHJlc3Npb24vbWFpbGluZy1hZGRyZXNzfScgK1xuICAgICAgICAgICc8aDI+VmFsdWF0aW9uPC9oMj57ZXhwcmVzc2lvbi9wcm9wZXJ0eS12YWx1ZXN9JyArXG4gICAgICAgICAgJzxoMj5TYWxlIEluZm9ybWF0aW9uPC9oMj57VE9UU0FMUFJJQ0V9PGJyLz57U0FMRV9EQVRFfScgK1xuICAgICAgICAgICc8aDI+RGVlZHM8L2gyPntleHByZXNzaW9uL2RlZWQtYm9vay1wYWdlfScgK1xuICAgICAgICAgICc8YnIvPjxzdHJvbmc+RGVlZCBEYXRlPC9zdHJvbmc+PGJyLz57REVFRF9EQVRFfTxici8+JyArXG4gICAgICAgICAgJzxici8+TGVnYWwgRGVzY3JpcHRpb248YnIvPntQUk9QREVTQ308YnIvPicgK1xuICAgICAgICAgICc8YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9ib20tZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Cb29rIG9mIE1hcHM8L2E+PGJyLz48YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9kZWVkLWRvYy1udW19JlJlY29yZERhdGU9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGVlZDwvYT4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbWVkaWEnLFxuICAgICAgICBtZWRpYUluZm9zOiBbXVxuICAgICAgfVxuICAgIF1cbiAgfSk7XG5cbiAgc2VhcmNoQnlHZW9tZXRyeShnZW9tZXRyeTogZXNyaS5HZW9tZXRyeSkge1xuICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgLnF1ZXJ5RmVhdHVyZXMoeyBnZW9tZXRyeTogZ2VvbWV0cnksIHJldHVybkdlb21ldHJ5OiB0cnVlLCBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnLCAnUkVJRCddIH0pXG4gICAgICAudGhlbihwcm9wZXJ0eVJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMucHJvcGVydHlMYXllci5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ1BST1BFUlRZX0NPTkRPJztcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BlcnR5TGF5ZXJcbiAgICAgICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwPy5pZCwgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxldCBmZWF0dXJlczogYW55W10gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzLmNvbmNhdChyZXN1bHRba2V5XS5mZWF0dXJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IHRoaXMuY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIodGhpcy5jb25kb3NUYWJsZS5maWVsZHMsIGZlYXR1cmVzKTtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgaWYgKCFmZWF0dXJlc1swXS5nZW9tZXRyeSkge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVzWzBdLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKGZlYXR1cmVzWzBdLCB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LCBbXSwgW2ZlYXR1cmVzWzBdLmdldE9iamVjdElkKCldKTtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5yZW5kZXJOb3coKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgZmVhdHVyZS5zeW1ib2wgPVxuICAgICAgICAgICAgICAgIHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA+IDEgPyAodGhpcy5tdWx0aVN5bWJvbCBhcyBhbnkpIDogKHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueSk7XG5cbiAgICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5hZGQoZmVhdHVyZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIgPSAoZmllbGRzOiBlc3JpLkZpZWxkW10sIGZlYXR1cmVzOiBlc3JpLkdyYXBoaWNbXSkgPT4ge1xuICAgIHJldHVybiBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgc291cmNlOiBmZWF0dXJlcyxcbiAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnLFxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogdGhpcy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgICB9KTtcbiAgfTtcbiAgYWRkR3JhcGhpY3MgPSAocmVzdWx0OiBlc3JpLkZlYXR1cmVTZXQpID0+IHtcbiAgICB0aGlzLmdyYXBoaWNzLnJlbW92ZUFsbCgpO1xuICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xuICAgICAgZmVhdHVyZS5zeW1ib2wgPSByZXN1bHQuZmVhdHVyZXMubGVuZ3RoID4gMSA/ICh0aGlzLm11bHRpU3ltYm9sIGFzIGFueSkgOiAodGhpcy5zaW5nbGVTeW1ib2wgYXMgYW55KTtcbiAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGZlYXR1cmUpO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldFByb3BlcnR5ID0gKG9pZHM6IGFueVtdLCBzb3VyY2U/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmNvbmRvc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgIHJldHVybiByLm5hbWUgPT09ICdDT05ET19QUk9QRVJUWSc7XG4gICAgfSk7XG4gICAgdGhpcy5jb25kb3NUYWJsZVxuICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHtcbiAgICAgICAgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsXG4gICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZSxcbiAgICAgICAgICAgIG91dFNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ29UbyhyZXN1bHQuZmVhdHVyZXMpO1xuICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5hZGRHcmFwaGljcyhyZXN1bHQpO1xuICAgICAgICAgICAgICBjb25zdCBwb2ludHM6IEdyYXBoaWNbXSA9IFtdO1xuICAgICAgICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwdCA9IGZlYXR1cmUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBwdC5nZW9tZXRyeSA9IChwdC5nZW9tZXRyeSBhcyBlc3JpLlBvbHlnb24pLmNlbnRyb2lkO1xuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHB0KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMuY2x1c3RlclBvaW50c1xuICAgICAgICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6ICcxPTEnLCByZXR1cm5HZW9tZXRyeTogZmFsc2UsIG91dEZpZWxkczogWydPQkpFQ1RJRCddIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2x1c3RlclBvaW50cy5hcHBseUVkaXRzKHsgZGVsZXRlRmVhdHVyZXM6IHJlc3VsdC5mZWF0dXJlcyB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbHVzdGVyUG9pbnRzLmFwcGx5RWRpdHMoeyBhZGRGZWF0dXJlczogcG9pbnRzIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2x1c3RlclBvaW50cy5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBzZWFyY2hDb21wbGV0ZSA9IChldmVudDogZXNyaS5TZWFyY2hTZWFyY2hDb21wbGV0ZUV2ZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaFdpZGdldC52aWV3TW9kZWwuc2VsZWN0ZWRTdWdnZXN0aW9uKSB7XG4gICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgZGVidWdnZXI7XG4gICAgICBsZXQgd2hlcmUgPSAnJztcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgaWYgKCF0aGlzLnNlYXJjaFdpZGdldC5hY3RpdmVTb3VyY2UpIHtcbiAgICAgICAgd2hlcmUgPVxuICAgICAgICAgIFwiT1dORVIgbGlrZSAnXCIgK1xuICAgICAgICAgIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgXCIlJyBPUiBSRUlEIGxpa2UgJ1wiICtcbiAgICAgICAgICBldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgIFwiJScgT1IgUElOX05VTSBsaWtlICdcIiArXG4gICAgICAgICAgZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICBcIiUnXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ09XTkVSJykpIHtcbiAgICAgICAgICB3aGVyZSA9IFwiT1dORVIgbGlrZSAnJVwiICsgZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpICsgXCIlJ1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIGFzIGFueSk/LnNlYXJjaEZpZWxkcy5pbmNsdWRlcygnUElOX05VTScpKSB7XG4gICAgICAgICAgd2hlcmUgPSBcIlBJTl9OVU0gbGlrZSAnJVwiICsgZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpICsgXCIlJ1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIGFzIGFueSk/LnNlYXJjaEZpZWxkcy5pbmNsdWRlcygnUkVJRCcpKSB7XG4gICAgICAgICAgd2hlcmUgPSBcIlJFSUQgbGlrZSAnJVwiICsgZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpICsgXCIlJ1wiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCB0YWJsZUZlYXR1cmVzOiBhbnlbXSA9IFtdO1xuICAgICAgZGVidWdnZXI7XG4gICAgICB0aGlzLmNvbmRvc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogd2hlcmUsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0YWJsZUZlYXR1cmVzID0gcmVzdWx0LmZlYXR1cmVzO1xuICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goZi5nZXRPYmplY3RJZCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICF0aGlzLnNlYXJjaFdpZGdldC5hY3RpdmVTb3VyY2UgfHxcbiAgICAgICAgICAodGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIGFzIGFueSk/LnNlYXJjaEZpZWxkcy5pbmNsdWRlcygnQUREUkVTUycpXG4gICAgICAgICkge1xuICAgICAgICAgIHdoZXJlID0gXCJBRERSRVNTIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aGVyZSA9ICdBRERSRVNTIElTIE5VTEwnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRyZXNzVGFibGUucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiB3aGVyZSwgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwID0gdGhpcy5hZGRyZXNzVGFibGUucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0FERFJFU1NFU19DT05ETyc7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgYWRkck9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICBhZGRyT2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcCAmJiBhZGRyT2lkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXAuaWQsIG9iamVjdElkczogYWRkck9pZHMsIG91dEZpZWxkczogWycqJ10gfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCB0YWJsZUZlYXR1cmVzKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvcGVydHkob2lkcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUucmVuZGVyTm93KCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCB0YWJsZUZlYXR1cmVzKTtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLnJlbmRlck5vdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGV2ZW50Lm51bVJlc3VsdHMpIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSAoZXZlbnQucmVzdWx0c1swXS5zb3VyY2UgYXMgTGF5ZXJTZWFyY2hTb3VyY2UpLmxheWVyIGFzIEZlYXR1cmVMYXllcjtcbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgZXZlbnQucmVzdWx0c1swXS5yZXN1bHRzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKHIuZmVhdHVyZS5nZXRPYmplY3RJZCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsYXllci5sYXllcklkID09PSA0KSB7XG4gICAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwID0gbGF5ZXIucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0FERFJFU1NFU19DT05ETyc7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcCAmJiBvaWRzKSB7XG4gICAgICAgICAgICBsYXllclxuICAgICAgICAgICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwLmlkLCBvYmplY3RJZHM6IG9pZHMsIG91dEZpZWxkczogWycqJ10gfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvcGVydHkob2lkcyk7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmUubGF5ZXIgPSB0aGlzLmNvbmRvc1RhYmxlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmUoZmVhdHVyZSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCBbZmVhdHVyZV0pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb25kb3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJvcGVydHkob2lkcyk7XG4gICAgICAgICAgICB0aGlzLnNldEZlYXR1cmUocmVzdWx0LmZlYXR1cmVzWzBdLCB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LCBbXSwgb2lkcyk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgcmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc2V0RmVhdHVyZShmZWF0dXJlOiBlc3JpLkdyYXBoaWMsIHZpZXc6IGVzcmkuTWFwVmlldywgbWVkaWFJbmZvczogYW55W10sIG9pZHM6IGFueVtdKSB7XG4gICAgY29uc3QgcmVsYXRpb25zaGlwID0gdGhpcy5jb25kb3NUYWJsZS5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICByZXR1cm4gci5uYW1lID09PSAnQ09ORE9fUEhPVE9TJztcbiAgICB9KTtcbiAgICBtZWRpYUluZm9zID0gW107XG4gICAgdGhpcy5jb25kb3NUYWJsZVxuICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICBtZWRpYUluZm9zLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICAgIGNhcHRpb246ICcnLFxuICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHNvdXJjZVVSTDpcbiAgICAgICAgICAgICAgICAgICdodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vcmVhbGVzdGF0ZS9waG90b3MvbXZpZGVvLycgK1xuICAgICAgICAgICAgICAgICAgZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ0lNQUdFRElSJykgK1xuICAgICAgICAgICAgICAgICAgJy8nICtcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdJTUFHRU5BTUUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmRvc1RhYmxlLnBvcHVwVGVtcGxhdGUuY29udGVudFsxXS5tZWRpYUluZm9zID0gbWVkaWFJbmZvcztcbiAgICAgICAgZmVhdHVyZS5sYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgIGZlYXR1cmUucG9wdXBUZW1wbGF0ZSA9IChmZWF0dXJlLmxheWVyIGFzIGVzcmkuRmVhdHVyZUxheWVyKS5wb3B1cFRlbXBsYXRlO1xuICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYyA9IGZlYXR1cmU7XG4gICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljLnN5bWJvbCA9IHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLmZpbmQoZ3JhcGhpYyA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdzZWxlY3RlZCcpID09PSAndHJ1ZSc7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICBzZWxlY3RlZC5zeW1ib2wgPSB0aGlzLm11bHRpU3ltYm9sIGFzIGFueTtcbiAgICAgICAgICBzZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JhcGhpYyA9IHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MuZmluZChncmFwaGljID0+IHtcbiAgICAgICAgICByZXR1cm4gZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ1JFSUQnKSA9PT0gZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ1JFSUQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChncmFwaGljKSB7XG4gICAgICAgICAgZ3JhcGhpYy5zeW1ib2wgPSB0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnk7XG4gICAgICAgICAgZ3JhcGhpYy5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgICB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLnJlb3JkZXIoZ3JhcGhpYywgdGhpcy5ncmFwaGljcy5ncmFwaGljcy5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbiAgZXhwb3J0VGFibGUoKSB7XG4gICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIucXVlcnlGZWF0dXJlcyh7IG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgbGV0IGNzdiA9ICcnO1xuICAgICAgcmVzdWx0LmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgY3N2ICs9IGZpZWxkLmFsaWFzICsgJywnO1xuICAgICAgfSk7XG4gICAgICBjc3YgKz0gJ1xcclxcbic7XG4gICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmVhdHVyZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaWYgKGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkYXRlJykpIHtcbiAgICAgICAgICAgIGNzdiArPSAnXCInICsgbmV3IERhdGUoZmVhdHVyZS5hdHRyaWJ1dGVzW2tleV0pLnRvRGF0ZVN0cmluZygpICsgJ1wiLCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChrZXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnYWNyZXMnKSkge1xuICAgICAgICAgICAgY3N2ICs9ICdcIicgKyBwYXJzZUZsb2F0KGZlYXR1cmUuYXR0cmlidXRlc1trZXldKS50b0ZpeGVkKDIpICsgJ1wiLCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzdiArPSAnXCInICsgZmVhdHVyZS5hdHRyaWJ1dGVzW2tleV0gKyAnXCIsJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3N2ICs9ICdcXHJcXG4nO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBleHBvcnRlZEZpbGVubWFlID0gJ2ltYXBzX2V4cG9ydC5jc3YnO1xuXG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2Nzdl0sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBpZiAobGluay5kb3dubG9hZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGZlYXR1cmUgZGV0ZWN0aW9uXG4gICAgICAgIC8vIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCBIVE1MNSBkb3dubG9hZCBhdHRyaWJ1dGVcbiAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBleHBvcnRlZEZpbGVubWFlKTtcbiAgICAgICAgbGluay5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MsIHZpZXcubWFwLmFsbExheWVycy5sZW5ndGggLSAxKTtcbiAgICB0aGlzLmNsdXN0ZXJQb2ludHMgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgIHNvdXJjZTogW10sXG4gICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnLFxuICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgbWF4U2NhbGU6IDE5MjAxLFxuICAgICAgbGlzdE1vZGU6ICdoaWRlJyxcbiAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgIHR5cGU6ICdzaW1wbGUnLFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsXG4gICAgICAgICAgc2l6ZTogNCxcbiAgICAgICAgICBjb2xvcjogJyM2OWRjZmYnLFxuICAgICAgICAgIG91dGxpbmU6IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCAxMzksIDE3NCwgMC41KScsXG4gICAgICAgICAgICB3aWR0aDogNVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBhcyBhbnksXG4gICAgICBmZWF0dXJlUmVkdWN0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdjbHVzdGVyJyxcbiAgICAgICAgbGFiZWxpbmdJbmZvOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gdHVybiBvZmYgZGVjb25mbGljdGlvbiB0byBlbnN1cmUgYWxsIGNsdXN0ZXJzIGFyZSBsYWJlbGVkXG4gICAgICAgICAgICBkZWNvbmZsaWN0aW9uU3RyYXRlZ3k6ICdub25lJyxcbiAgICAgICAgICAgIGxhYmVsRXhwcmVzc2lvbkluZm86IHtcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJUZXh0KCRmZWF0dXJlLmNsdXN0ZXJfY291bnQsICcjLCMjIycpXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDRhNWQnLFxuICAgICAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICAgICAgd2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICAgICAgZmFtaWx5OiAnTm90byBTYW5zJyxcbiAgICAgICAgICAgICAgICBzaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBhcyBhbnksXG4gICAgICAgICAgICBsYWJlbFBsYWNlbWVudDogJ2NlbnRlci1jZW50ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogdGhpcy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcubWFwLmFkZCh0aGlzLmNsdXN0ZXJQb2ludHMpO1xuICB9XG4gIGluaXRTZWFyY2goY29uZG9zVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyKSB7XG4gICAgY29uc3QgdGFibGVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgZmllbGRzOiBbXG4gICAgICAgIHsgbmFtZTogJ1NJVEVfQUREUkVTUycsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ0FkZHJlc3MnIH0sXG4gICAgICAgIHsgbmFtZTogJ09XTkVSJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnT3duZXInIH0sXG4gICAgICAgIHsgbmFtZTogJ1BJTl9OVU0nLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdQSU4nIH0sXG4gICAgICAgIHsgbmFtZTogJ1JFSUQnLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdSRUlEJyB9XG4gICAgICBdLFxuICAgICAgc291cmNlOiBbXSxcbiAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnLFxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogdGhpcy52aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgICB9KTtcbiAgICB0aGlzLmZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7IHZpZXc6IHRoaXMudmlldyB9KTtcbiAgICB0aGlzLmZlYXR1cmVUYWJsZSA9IG5ldyBGZWF0dXJlVGFibGUoe1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgbGF5ZXI6IHRhYmxlTGF5ZXIsXG4gICAgICBmaWVsZENvbmZpZ3M6IFtcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnU0lURV9BRERSRVNTJyxcbiAgICAgICAgICBsYWJlbDogJ0FkZHJlc3MnLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnT1dORVInLFxuICAgICAgICAgIGxhYmVsOiAnT3duZXInLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnUElOX05VTScsXG4gICAgICAgICAgbGFiZWw6ICdQSU4nLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnUkVJRCcsXG4gICAgICAgICAgbGFiZWw6ICdSRUlEJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICBtZW51Q29uZmlnOiB7XG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgKHtcbiAgICAgICAgICAgIGxhYmVsOiAnRXhwb3J0J1xuICAgICAgICAgIH0gYXMgdW5rbm93bikgYXMgTWVudUJ1dHRvbkl0ZW1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGJ1dHRvbjogTWVudUJ1dHRvbkl0ZW0gPSB0aGlzLmZlYXR1cmVUYWJsZT8ubWVudUNvbmZpZz8uaXRlbXM/LmZpbmQoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5sYWJlbCA9PT0gJ0V4cG9ydCc7XG4gICAgfSkgYXMgTWVudUJ1dHRvbkl0ZW07XG4gICAgYnV0dG9uLmNsaWNrRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICB0aGlzLmV4cG9ydFRhYmxlKCk7XG4gICAgfTtcbiAgICBidXR0b24uY2xpY2tGdW5jdGlvbi5iaW5kKHRoaXMuZmVhdHVyZVRhYmxlKTtcblxuICAgIHRoaXMuZmVhdHVyZVRhYmxlLm9uKCdzZWxlY3Rpb24tY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgKHRoaXMuZmVhdHVyZVRhYmxlIGFzIGFueSkuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIGlmIChldmVudC5hZGRlZC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShbZXZlbnQuYWRkZWRbMF0uZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJyldLCAndGFibGUnKTtcbiAgICAgICAgdGhpcy5zZXRGZWF0dXJlKFxuICAgICAgICAgIGV2ZW50LmFkZGVkWzBdLmZlYXR1cmUsXG4gICAgICAgICAgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldyxcbiAgICAgICAgICBbXSxcbiAgICAgICAgICBbZXZlbnQuYWRkZWRbMF0uZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJyldXG4gICAgICAgICk7XG4gICAgICAgIGV2ZW50LmFkZGVkWzBdLmZlYXR1cmUuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2VhcmNoV2lkZ2V0ID0gbmV3IFNlYXJjaCh7XG4gICAgICBhbGxQbGFjZWhvbGRlcjogJ0FkZHJlc3MsIG93bmVyLCBQSU4sIG9yIFJFSUQnLFxuICAgICAgaW5jbHVkZURlZmF1bHRTb3VyY2VzOiBmYWxzZSxcbiAgICAgIGNvbnRhaW5lcjogJ3NlYXJjaCcsXG4gICAgICBzb3VyY2VzOiBbXG4gICAgICAgIG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgbGF5ZXI6IHRoaXMuYWRkcmVzc1RhYmxlLFxuICAgICAgICAgIHNlYXJjaEZpZWxkczogWydBRERSRVNTJ10sXG4gICAgICAgICAgZGlzcGxheUZpZWxkOiAnQUREUkVTUycsXG4gICAgICAgICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgICAgb3V0RmllbGRzOiBbJ0FERFJFU1MnLCAnUkVBX1JFSUQnXSxcbiAgICAgICAgICBuYW1lOiAnU2l0ZSBBZGRyZXNzJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDIyMiBXIEhBUkdFVFQnXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnT1dORVInXSxcbiAgICAgICAgICBkaXNwbGF5RmllbGQ6ICdPV05FUicsXG4gICAgICAgICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgICAgb3V0RmllbGRzOiBbJ09XTkVSJywgJ1JFSUQnLCAnT0JKRUNUSUQnXSxcbiAgICAgICAgICBuYW1lOiAnT3duZXInLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogU01JVEgsIEpPSE4nXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnUElOX05VTSddLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ1BJTl9OVU0nLFxuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgIG91dEZpZWxkczogWydQSU5fTlVNJywgJ1JFSUQnLCAnT0JKRUNUSUQnXSxcbiAgICAgICAgICBuYW1lOiAnUElOJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDA3MTIzNDU2NzgnXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnUkVJRCddLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ1JFSUQnLFxuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgIG91dEZpZWxkczogWydSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgICAgbmFtZTogJ1JFSUQnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMDEyMzQ1NidcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldC52aWV3TW9kZWwud2F0Y2goJ3Jlc3VsdHMnLCBldmVudCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hXaWRnZXQub24oJ3NlYXJjaC1jb21wbGV0ZScsIHRoaXMuc2VhcmNoQ29tcGxldGUpO1xuICB9XG4gIHRvZ2dsZUNvbnRlbnQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gJ3RhYmxlJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmUnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmUnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZUl0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCBmcm9tICcuL1Byb3BlcnR5U2VhcmNoL1Byb3BlcnR5U2VhcmNoVmlld01vZGVsJztcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlTZWFyY2hQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBwcm9wZXJ0eUxheWVyPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIGNvbmRvc1RhYmxlPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIGFkZHJlc3NUYWJsZT86IGVzcmkuRmVhdHVyZUxheWVyO1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBwcm9wZXJ0eXNlYXJjaC1iYXNlJ1xufTtcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuUHJvcGVydHlTZWFyY2gnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlTZWFyY2ggZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5jb25kb3NUYWJsZScpXG4gIGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5hZGRyZXNzVGFibGUnKVxuICBhZGRyZXNzVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLnByb3BlcnR5TGF5ZXInKVxuICBwcm9wZXJ0eUxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5zZWFyY2hXaWRnZXQnKVxuICBzZWFyY2hXaWRnZXQ6IGVzcmkud2lkZ2V0c1NlYXJjaDtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5mZWF0dXJlVGFibGUnKVxuICBmZWF0dXJlVGFibGU6IGVzcmkuRmVhdHVyZVRhYmxlO1xuICBAYWxpYXNPZigndmlld01vZGVsLmZlYXR1cmUnKVxuICBmZWF0dXJlOiBlc3JpLkZlYXR1cmU7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZ2VvbWV0cnknKVxuICBnZW9tZXRyeTogZXNyaS5HZW9tZXRyeTtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IFByb3BlcnR5U2VhcmNoVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCA9IG5ldyBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBQcm9wZXJ0eVNlYXJjaFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIF9jcmVhdGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2VhcmNoV2lkZ2V0KSB7XG4gICAgICB0aGlzLnNlYXJjaFdpZGdldC5jb250YWluZXIgPSAnc2VhcmNoJztcbiAgICB9XG4gIH07XG4gIF9jcmVhdGVUYWJsZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5mZWF0dXJlVGFibGUpIHtcbiAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmNvbnRhaW5lciA9ICd0YWJsZSc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlRmVhdHVyZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5mZWF0dXJlKSB7XG4gICAgICB0aGlzLmZlYXR1cmUuY29udGFpbmVyID0gJ2ZlYXR1cmVEaXYnO1xuICAgIH1cbiAgfTtcblxuICBjdXJyZW50UmFkaW9CdXR0b24gPSAnbGlzdCc7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NpZGVEaXYgY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtJyk7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVSYWRpb0dyb3VwSXRlbUNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2FuIEkgZ2V0IGNoZWNrZWQgYW5kIHZhbHVlIGxpa2UgdGhpcz9cbiAgICAgICAgaWYgKGUudGFyZ2V0Py5jaGVja2VkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQ/LnZhbHVlKTtcbiAgICAgICAgICB0aGlzLnZpZXdNb2RlbC50b2dnbGVDb250ZW50KGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlU2VhcmNofSBpZD1cInNlYXJjaFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVUYWJsZX0gaWQ9XCJ0YWJsZVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZmVhdHVyZVwiIGNsYXNzPVwiaGlkZGVuXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImZlYXR1cmVEaXZcIiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlRmVhdHVyZX0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwIHdpZHRoPVwiZnVsbFwiPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gY2hlY2tlZCB2YWx1ZT1cInRhYmxlXCIgaWQ9XCJ0YWJsZUl0ZW1cIj5cbiAgICAgICAgICAgIExpc3RcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHZhbHVlPVwiZmVhdHVyZVwiIGlkPVwiZmVhdHVyZUl0ZW1cIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIERldGFpbHNcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgTWVhc3VyZW1lbnQgZnJvbSAnZXNyaS93aWRnZXRzL01lYXN1cmVtZW50JztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5NZWFzdXJlLk1lYXN1cmVWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZVZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cbiAgbWVhc3VyZW1lbnQ6IGVzcmkuTWVhc3VyZW1lbnQ7XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxuICBtZWFzdXJlT3BlbmVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZWFzdXJlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAnKSBhcyBhbnkpLnNlbGVjdGVkSXRlbS50aXRsZTtcbiAgICBpZiAoc2VsZWN0ZWQgIT0gJ2NsZWFyJykge1xuICAgICAgdGhpcy5tZWFzdXJlbWVudC5hY3RpdmVUb29sID0gc2VsZWN0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICB9XG4gIH1cbiAgaW5pdE1lYXN1cmUoKSB7XG4gICAgdGhpcy5tZWFzdXJlbWVudCA9IG5ldyBNZWFzdXJlbWVudCh7IHZpZXc6IHRoaXMudmlldywgY29udGFpbmVyOiAnbWVhc3VyZVdpZGdldCcgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IE1lYXN1cmVWaWV3TW9kZWwgZnJvbSAnLi9NZWFzdXJlL01lYXN1cmVWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lYXN1cmVQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBtZWFzdXJlLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLk1lYXN1cmUnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZSBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLm1lYXN1cmVtZW50JylcbiAgbWVhc3VyZW1lbnQ6IGVzcmkuTWVhc3VyZW1lbnQ7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuaW5pdE1lYXN1cmUnKVxuICBpbml0TWVhc3VyZTogRnVuY3Rpb247XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubWVhc3VyZU9wZW5lZCcpXG4gIG1lYXN1cmVPcGVuZWQ6IEZ1bmN0aW9uO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTWVhc3VyZVZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogTWVhc3VyZVZpZXdNb2RlbCA9IG5ldyBNZWFzdXJlVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IE1lYXN1cmVQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfbWVhc3VyZUNyZWF0ZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5pbml0TWVhc3VyZSgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZWFzdXJlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUmFkaW9Hcm91cEl0ZW1DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldD8uY2hlY2tlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Py50aXRsZSk7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0Py50aXRsZSA9PT0gJ2NsZWFyJykge1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lYXN1cmVtZW50LmFjdGl2ZVRvb2wgPSBlLnRhcmdldD8udGl0bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdGl0bGU9XCJkaXN0YW5jZVwiIHZhbHVlPVwiZGlzdGFuY2VcIiBpZD1cInRhYmxlSXRlbVwiIGljb249XCJtZWFzdXJlXCI+XG4gICAgICAgICAgICBMaW5lXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB0aXRsZT1cImFyZWFcIiB2YWx1ZT1cImFyZWFcIiBpZD1cImZlYXR1cmVJdGVtXCIgaWNvbj1cIm1lYXN1cmUtYXJlYVwiPlxuICAgICAgICAgICAgQXJlYVxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdGl0bGU9XCJjbGVhclwiIHZhbHVlPVwiY2xlYXJcIiBpZD1cImZlYXR1cmVJdGVtXCIgaWNvbj1cInRyYXNoXCI+XG4gICAgICAgICAgICBDbGVhclxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXA+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX21lYXN1cmVDcmVhdGVkfSBpZD1cIm1lYXN1cmVXaWRnZXRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCBQb3B1cFRlbXBsYXRlIGZyb20gJ2VzcmkvUG9wdXBUZW1wbGF0ZSc7XG5pbXBvcnQgRXhwcmVzc2lvbkluZm8gZnJvbSAnZXNyaS9wb3B1cC9FeHByZXNzaW9uSW5mbyc7XG5cbmNvbnN0IGFyY2FkZUV4cHJlc3Npb25JbmZvcyA9IFtcbiAge1xuICAgIG5hbWU6ICdib20tZG9jLW51bScsXG4gICAgdGl0bGU6ICdib20tZG9jLW51bScsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgIFwidmFyIHJlc3VsdHMgPSBGZWF0dXJlU2V0QnlSZWxhdGlvbnNoaXBOYW1lKCRmZWF0dXJlLCAnQ09ORE9fQk9PS1MnLCBbJyonXSwgZmFsc2UpOyByZXR1cm4gRmlyc3QocmVzdWx0cykuQk9NX0RPQ19OVU07XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdkZWVkLWRvYy1udW0nLFxuICAgIHRpdGxlOiAnZGVlZC1kb2MtbnVtJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgXCJ2YXIgcmVzdWx0cyA9IEZlYXR1cmVTZXRCeVJlbGF0aW9uc2hpcE5hbWUoJGZlYXR1cmUsICdDT05ET19CT09LUycsIFsnKiddLCBmYWxzZSk7IHJldHVybiBGaXJzdChyZXN1bHRzKS5ERUVEX0RPQ19OVU07XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdtYWlsaW5nLWFkZHJlc3MnLFxuICAgIHRpdGxlOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1doZW4oSXNFbXB0eSgkZmVhdHVyZS5BRERSMyksJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIsJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjMpJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ3Byb3BlcnR5LXZhbHVlcycsXG4gICAgdGl0bGU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgIGV4cHJlc3Npb246XG4gICAgICAnXCJCdWlsZGluZyBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuQkxER19WQUwrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkxhbmQgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkxBTkRfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3RhbCBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuVE9UQUxfVkFMVUVfQVNTRCdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdkZWVkLWJvb2stcGFnZScsXG4gICAgdGl0bGU6ICdkZWVkLWJvb2stcGFnZScsXG4gICAgZXhwcmVzc2lvbjogJ1wiQm9vayBcIiskZmVhdHVyZS5ERUVEX0JPT0srXCIgUGFnZSBcIiskZmVhdHVyZS5ERUVEX1BBR0UnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZ2VuZXJhbCcsXG4gICAgdGl0bGU6ICdnZW5lcmFsJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1wiUElOXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5QSU5fTlVNK1wiIFwiKyRmZWF0dXJlLlBJTl9FWFQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICdcIlJFSURcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKyRmZWF0dXJlLlJFSUQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkNpdHlcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgJ1Byb3BlcigkZmVhdHVyZS5DSVRZX0RFQ09ERSkrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkp1cmlzZGljdGlvblwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAnJGZlYXR1cmUuUExBTk5JTkdfSlVSSVNESUNUSU9OK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3duc2hpcFwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrUHJvcGVyKCRmZWF0dXJlLlRPV05TSElQX0RFQ09ERSknXG4gIH1cbl0gYXMgRXhwcmVzc2lvbkluZm9bXTtcblxuY29uc3QgcG9wdXBUZW1wbGF0ZSA9IG5ldyBQb3B1cFRlbXBsYXRlKHtcbiAgZXhwcmVzc2lvbkluZm9zOiBhcmNhZGVFeHByZXNzaW9uSW5mb3MsXG4gIC8vIGNvbnRlbnQ6IChldmVudDogYW55KSA9PiB7XG4gIC8vICAgY29uc3QgZ3JhcGhpYyA9IGV2ZW50LmdyYXBoaWM7XG4gIC8vICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RleHQtZ3JlZW4nKTtcbiAgLy8gICBjb250YWluZXIuYXBwZW5kKGRpdik7XG4gIC8vICAgZGl2LnRleHRDb250ZW50ID0gZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ1NJVEVfQUREUkVTUycpO1xuICAvLyAgIHJldHVybiBjb250YWluZXI7XG4gIC8vIH0sXG4gIGNvbnRlbnQ6IFtcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OlxuICAgICAgICAnPGgxIGNsYXNzPVwidGV4dC1ncmVlblwiPntTSVRFX0FERFJFU1N9PC9oMT4nICtcbiAgICAgICAgJzxoMj5HZW5lcmFsPC9oMj57ZXhwcmVzc2lvbi9nZW5lcmFsfScgK1xuICAgICAgICAnPGgyPk93bmVyPC9oMj57T1dORVJ9PGJyLz57ZXhwcmVzc2lvbi9tYWlsaW5nLWFkZHJlc3N9JyArXG4gICAgICAgICc8aDI+VmFsdWF0aW9uPC9oMj57ZXhwcmVzc2lvbi9wcm9wZXJ0eS12YWx1ZXN9JyArXG4gICAgICAgICc8aDI+U2FsZSBJbmZvcm1hdGlvbjwvaDI+e1RPVFNBTFBSSUNFfTxici8+e1NBTEVfREFURX0nICtcbiAgICAgICAgJzxoMj5EZWVkczwvaDI+e2V4cHJlc3Npb24vZGVlZC1ib29rLXBhZ2V9JyArXG4gICAgICAgICc8YnIvPjxzdHJvbmc+RGVlZCBEYXRlPC9zdHJvbmc+PGJyLz57REVFRF9EQVRFfTxici8+JyArXG4gICAgICAgICc8YnIvPkxlZ2FsIERlc2NyaXB0aW9uPGJyLz57UFJPUERFU0N9PGJyLz4nICtcbiAgICAgICAgJzxhIGhyZWY9XCJodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPXtleHByZXNzaW9uL2JvbS1kb2MtbnVtfSZSZWNvcmREYXRlPVwiIHRhcmdldD1cIl9ibGFua1wiPkJvb2sgb2YgTWFwczwvYT48YnIvPjxhIGhyZWY9XCJodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPXtleHByZXNzaW9uL2RlZWQtZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EZWVkPC9hPidcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtZWRpYScsXG4gICAgICBtZWRpYUluZm9zOiBbXVxuICAgIH1cbiAgXVxufSk7XG5cbmV4cG9ydCBjb25zdCBmZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnMDgwNTBiZjA2N2JiNGIyMGFkZWE0YjBiNGYwYTM5ZTMnXG4gIH0sXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgY29uZG9zVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnMDgwNTBiZjA2N2JiNGIyMGFkZWE0YjBiNGYwYTM5ZTMnXG4gIH0sXG4gIGxheWVySWQ6IDEsXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH0sXG4gIHBvcHVwVGVtcGxhdGU6IHBvcHVwVGVtcGxhdGVcbn0pO1xuY29uZG9zVGFibGUubG9hZCgpO1xuZXhwb3J0IGNvbnN0IGFkZHJlc3NUYWJsZSA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICBwb3J0YWxJdGVtOiB7XG4gICAgaWQ6ICcwODA1MGJmMDY3YmI0YjIwYWRlYTRiMGI0ZjBhMzllMydcbiAgfSxcbiAgbGF5ZXJJZDogNCxcbiAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfVxufSk7XG5hZGRyZXNzVGFibGUubG9hZCgpO1xuZXhwb3J0ICogZnJvbSAnLi9hcHAnO1xuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuaW1wb3J0IFNrZXRjaCBmcm9tICdlc3JpL3dpZGdldHMvU2tldGNoJztcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcbmltcG9ydCBUZXh0U3ltYm9sIGZyb20gJ2Vzcmkvc3ltYm9scy9UZXh0U3ltYm9sJztcblxuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IHsgbWVhc3VyZW1lbnQgfSBmcm9tICcuLi8uLi93aWRnZXRzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5EcmF3LkRyYXdWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd1ZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICBza2V0Y2g6IFNrZXRjaDtcbiAgZ3JhcGhpY3M6IEdyYXBoaWNzTGF5ZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRleHRDb2xvcjogZXNyaS5Db2xvcjtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0RHJhdygpIHtcbiAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnIH0pO1xuICAgIHRoaXMudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MpO1xuXG4gICAgdGhpcy5za2V0Y2ggPSBuZXcgU2tldGNoKHsgdmlldzogdGhpcy52aWV3LCBjb250YWluZXI6ICdza2V0Y2hEaXYnLCBsYXllcjogdGhpcy5ncmFwaGljcywgY3JlYXRpb25Nb2RlOiAnc2luZ2xlJyB9KTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG4gICAgKHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBhbnkpLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoW1syNTUsIDAsIDAsIDAuNV1dKTtcbiAgICAodGhpcy5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wgYXMgYW55KS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcblxuICAgIHRoaXMuc2tldGNoLndhdGNoKCdhY3RpdmVUb29sJywgdG9vbCA9PiB7XG4gICAgICBpZiAodG9vbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLm9uKCdjcmVhdGUnLCBlID0+IHtcbiAgICAgIGlmIChlLnN0YXRlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICAgIGlmIChlLnN0YXRlID09PSAnY29tcGxldGUnICYmIHRoaXMubGFiZWw/Lmxlbmd0aCkge1xuICAgICAgICBsZXQgbGFiZWxQb2ludDogZXNyaS5HZW9tZXRyeSA9IGUuZ3JhcGhpYy5nZW9tZXRyeTtcbiAgICAgICAgaWYgKGUuZ3JhcGhpYy5nZW9tZXRyeS50eXBlID09PSAncG9seWdvbicpIHtcbiAgICAgICAgICBsYWJlbFBvaW50ID0gKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBlc3JpLlBvbHlnb24pLmNlbnRyb2lkO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBjb25zdCBnID0gbmV3IEdyYXBoaWMoe1xuICAgICAgICAgIGdlb21ldHJ5OiBsYWJlbFBvaW50LFxuICAgICAgICAgIHN5bWJvbDogbmV3IFRleHRTeW1ib2woe1xuICAgICAgICAgICAgdGV4dDogdGhpcy5sYWJlbCxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnRleHRDb2xvcixcbiAgICAgICAgICAgIGhhbG9Db2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIGhhbG9TaXplOiAxLFxuICAgICAgICAgICAgeG9mZnNldDogJzVweCcsXG4gICAgICAgICAgICB5b2Zmc2V0OiAnNXB4JyxcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiAnYm90dG9tJyxcbiAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdyaWdodCdcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5hZGQoZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnNvbGUubG9nKHZpZXcuc2NhbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5pbXBvcnQgRHJhd1ZpZXdNb2RlbCBmcm9tICcuL0RyYXcvRHJhd1ZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd1Byb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGRyYXctYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuRHJhdycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3IGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubGFiZWwnKVxuICBsYWJlbDogc3RyaW5nO1xuICBAYWxpYXNPZigndmlld01vZGVsLnRleHRDb2xvcicpXG4gIHRleHRDb2xvcjogQ29sb3I7XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogRHJhd1ZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogRHJhd1ZpZXdNb2RlbCA9IG5ldyBEcmF3Vmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IERyYXdQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfZHJhd1VwZGF0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnZpZXdNb2RlbC5za2V0Y2gpIHtcbiAgICAgIHRoaXMudmlld01vZGVsLmluaXREcmF3KCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGwnKTtcbiAgICBmaWxsPy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJyNmZjAwMDAnKTtcbiAgICBmaWxsPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlQ29sb3JDaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCBoZXg6IHN0cmluZyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICB9KTtcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpbmUnKTtcbiAgICBsaW5lPy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJyNmZjAwMDAnKTtcbiAgICBsaW5lPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlQ29sb3JDaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCBoZXg6IHN0cmluZyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sIGFzIGVzcmkuU2ltcGxlTWFya2VyU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgfSk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGFjaXR5Jyk7XG4gICAgb3BhY2l0eT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVNsaWRlclVwZGF0ZScsIChlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbC5jb2xvci5hID0gZS50YXJnZXQudmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3Qgd2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lkdGgnKTtcbiAgICB3aWR0aD8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVNsaWRlclVwZGF0ZScsIChlOiBhbnkpID0+IHtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlsaW5lU3ltYm9sIGFzIGVzcmkuU2ltcGxlTGluZVN5bWJvbCkud2lkdGggPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sIGFzIGVzcmkuU2ltcGxlTWFya2VyU3ltYm9sKS5vdXRsaW5lLndpZHRoID0gcGFyc2VGbG9hdChcbiAgICAgICAgZS50YXJnZXQudmFsdWVcbiAgICAgICk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS53aWR0aCA9IHBhcnNlRmxvYXQoXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsJyk7XG4gICAgbGFiZWw/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVJbnB1dEJsdXInLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldCgnbGFiZWwnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG4gICAgY29uc3QgdGV4dENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRDb2xvcicpO1xuICAgIHRleHRDb2xvcj8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgdGV4dENvbG9yPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlQ29sb3JDaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldCgndGV4dENvbG9yJywgQ29sb3IuZnJvbUhleChlLnRhcmdldC52YWx1ZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJVcGRhdGU9e3RoaXMuX2RyYXdVcGRhdGVkfSBpZD1cInNrZXRjaERpdlwiPjwvZGl2PlxuICAgICAgICA8Y2FsY2l0ZS1ibG9jayBoZWFkaW5nPVwiU2V0dGluZ3NcIiBvcGVuIGNvbGxhcHNpYmxlPlxuICAgICAgICAgIDxjYWxjaXRlLWJsb2NrLXNlY3Rpb24gdGV4dD1cIkNvbG9yXCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgRmlsbCBDb2xvciA8Y2FsY2l0ZS1jb2xvciBpZD1cImZpbGxcIiBoaWRlQ2hhbm5lbHMgaGlkZVNhdmVkIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgc2NhbGU9XCJzXCI+PC9jYWxjaXRlLWNvbG9yPlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIExpbmUgQ29sb3IgPGNhbGNpdGUtY29sb3IgaWQ9XCJsaW5lXCIgaGlkZUNoYW5uZWxzIGhpZGVTYXZlZCBhcHBlYXJhbmNlPVwibWluaW1hbFwiIHNjYWxlPVwic1wiPjwvY2FsY2l0ZS1jb2xvcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJGaWxsIE9wYWNpdHlcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBPcGFjaXR5PGNhbGNpdGUtc2xpZGVyIHNjYWxlPVwic1wiIGlkPVwib3BhY2l0eVwiIG1heD1cIjFcIiBtaW49XCIwXCIgdmFsdWU9XCIwLjVcIiBzdGVwPVwiMC4xXCI+PC9jYWxjaXRlLXNsaWRlcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJPdXRsaW5lXCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgV2lkdGggPGNhbGNpdGUtc2xpZGVyIGlkPVwid2lkdGhcIiBtYXg9XCIxMFwiIG1pbj1cIjBcIiB2YWx1ZT1cIjFcIiBzdGVwPVwiMC41XCI+PC9jYWxjaXRlLXNsaWRlcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJMYWJlbGluZ1wiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIExhYmVsIDxjYWxjaXRlLWlucHV0IHNjYWxlPVwic1wiIGlkPVwibGFiZWxcIiB0eXBlPVwidGV4dGFyZWFcIj48L2NhbGNpdGUtaW5wdXQ+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgVGV4dCBDb2xvclxuICAgICAgICAgICAgICA8Y2FsY2l0ZS1jb2xvciBpZD1cInRleHRDb2xvclwiIGhpZGVDaGFubmVscyBoaWRlU2F2ZWQgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBzY2FsZT1cInNcIj48L2NhbGNpdGUtY29sb3I+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgIDwvY2FsY2l0ZS1ibG9jaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcbmltcG9ydCBTa2V0Y2ggZnJvbSAnZXNyaS93aWRnZXRzL1NrZXRjaCc7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IHsgbWVhc3VyZW1lbnQgfSBmcm9tICcuLi8uLi93aWRnZXRzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5TZWxlY3QuU2VsZWN0Vmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdFZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuICBza2V0Y2g6IGVzcmkuU2tldGNoO1xuICBidWZmZXJEaXN0YW5jZTogbnVtYmVyO1xuICBncmFwaGljczogR3JhcGhpY3NMYXllcjtcblxuICBpbml0U2tldGNoKCkge1xuICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiAnaGlkZScgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljcyk7XG4gICAgdGhpcy5za2V0Y2ggPSBuZXcgU2tldGNoKHtcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIGNvbnRhaW5lcjogJ3NlbGVjdFdpZGdldCcsXG4gICAgICBsYXllcjogdGhpcy5ncmFwaGljcyxcbiAgICAgIGNyZWF0aW9uTW9kZTogJ3NpbmdsZSdcbiAgICB9KTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwudXBkYXRlT25HcmFwaGljQ2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLnNrZXRjaC5vbignY3JlYXRlJywgZXYgPT4ge1xuICAgICAgaWYgKGV2LnN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG4gICAgICB9XG4gICAgICBpZiAoZXYuc3RhdGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLndhdGNoKCdhY3RpdmVUb29sJywgdG9vbCA9PiB7XG4gICAgICBpZiAodG9vbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgICB0aGlzLnNldCgnYnVmZmVyRGlzdGFuY2UnLCAwKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuXG5pbXBvcnQgU2VsZWN0Vmlld01vZGVsIGZyb20gJy4vU2VsZWN0L1NlbGVjdFZpZXdNb2RlbCc7XG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIGxheWVyPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IHNlbGVjdC1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5TZWxlY3QnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubGF5ZXInKVxuICBsYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuc2tldGNoJylcbiAgc2tldGNoOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5idWZmZXJEaXN0YW5jZScpXG4gIGJ1ZmZlckRpc3RhbmNlOiBudW1iZXI7XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogU2VsZWN0Vmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBTZWxlY3RWaWV3TW9kZWwgPSBuZXcgU2VsZWN0Vmlld01vZGVsKCk7XG4gIF9za2V0Y2hDcmVhdGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy52aWV3TW9kZWwuc2tldGNoKSB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5pbml0U2tldGNoKCk7XG4gICAgfVxuICB9O1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogU2VsZWN0UHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2OiBhbnkpIHtcbiAgICB0aGlzLnNldCgnYnVmZmVyRGlzdGFuY2UnLCBwYXJzZUludChldi50YXJnZXQudmFsdWUpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdERpdiBjYWxjaXRlLWlucHV0Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVJbnB1dEJsdXInLCAoZXY6IGFueSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoZXYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlclVwZGF0ZT17dGhpcy5fc2tldGNoQ3JlYXRlZH0gaWQ9XCJzZWxlY3RXaWRnZXRcIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgQnVmZmVyIERpc3RhbmNlIChmZWV0KVxuICAgICAgICAgIDxjYWxjaXRlLWlucHV0XG4gICAgICAgICAgICBzY2FsZT1cInNcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjIwMDBcIlxuICAgICAgICAgICAgc3RlcD1cIjUwXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnZpZXdNb2RlbC5idWZmZXJEaXN0YW5jZX1cbiAgICAgICAgICA+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuaW1wb3J0IEJhc2VNYXBHYWxsZXJ5IGZyb20gJ2Vzcmkvd2lkZ2V0cy9CYXNlbWFwR2FsbGVyeSc7XG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQmFzZU1hcHMuQmFzZU1hcHNWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1hcHNWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBiYXNlbWFwczogQmFzZU1hcEdhbGxlcnk7XG4gIGltYWdlczogQmFzZU1hcEdhbGxlcnk7XG5cbiAgYWN0aXZlQmFzZW1hcDogZXNyaS5CYXNlbWFwO1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNoYW5nZVByb3BlcnR5TGluZXMgPSAoYmFzZW1hcDogZXNyaS5CYXNlbWFwKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHlMYXllcjogRmVhdHVyZUxheWVyID0gdGhpcy52aWV3Lm1hcC5hbGxMYXllcnMuZmluZChsYXllciA9PiB7XG4gICAgICByZXR1cm4gbGF5ZXIudHlwZSA9PT0gJ2ZlYXR1cmUnICYmIGxheWVyLnRpdGxlID09PSAnUHJvcGVydHknO1xuICAgIH0pIGFzIEZlYXR1cmVMYXllcjtcbiAgICBjb25zdCBuZXdSZW5kZXJlcjogZXNyaS5TaW1wbGVSZW5kZXJlciA9IChwcm9wZXJ0eUxheWVyLnJlbmRlcmVyIGFzIGVzcmkuU2ltcGxlUmVuZGVyZXIpLmNsb25lKCkgYXMgZXNyaS5TaW1wbGVSZW5kZXJlcjtcbiAgICBpZiAoXG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2RhcmsnKSB8fFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCduaWdodCcpIHx8XG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2RhcmsnKSB8fFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJzIwJykgfHxcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCcxOScpXG4gICAgKSB7XG4gICAgICAobmV3UmVuZGVyZXIuc3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS5jb2xvciA9IG5ldyBDb2xvcihbMjU1LCAyNTUsIDI1NSwgMC41XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIChuZXdSZW5kZXJlci5zeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gbmV3IENvbG9yKFswLCAwLCAwLCAwLjVdKTtcbiAgICB9XG4gICAgcHJvcGVydHlMYXllci5yZW5kZXJlciA9IG5ld1JlbmRlcmVyO1xuICB9O1xuXG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICB0aGlzLmJhc2VtYXBzID0gbmV3IEJhc2VNYXBHYWxsZXJ5KHsgdmlldzogdGhpcy52aWV3IH0pO1xuICAgIHRoaXMudmlldy53aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlUHJvcGVydHlMaW5lcyh0aGlzLnZpZXcubWFwLmJhc2VtYXApO1xuICAgIH0pO1xuICAgIHRoaXMudmlldy5tYXAud2F0Y2goJ2Jhc2VtYXAnLCAoYmFzZW1hcDogZXNyaS5CYXNlbWFwKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVByb3BlcnR5TGluZXMoYmFzZW1hcCk7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpPy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKTtcbiAgICAgICAgICB0aGlzLnZpZXcubWFwLnJlbW92ZSh0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcCA9IHRoaXMudmlldy5tYXAuYmFzZW1hcDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU3dpdGNoJyk/LnJlbW92ZUF0dHJpYnV0ZSgnc3dpdGNoZWQnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJtID0gdGhpcy5pbWFnZXMudmlld01vZGVsLml0ZW1zLmZpbmQoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLmJhc2VtYXAudGl0bGUgPT09IHRoaXMudmlldy5tYXAuYmFzZW1hcC50aXRsZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGJtICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFN3aXRjaCcpPy5oYXNBdHRyaWJ1dGUoJ3N3aXRjaGVkJykpIHtcbiAgICAgICAgdGhpcy52aWV3Lm1hcC5hZGRNYW55KHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLnRvQXJyYXkoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYWN0aXZlQmFzZW1hcCA9IHRoaXMudmlldy5tYXAuYmFzZW1hcDtcbiAgICB0aGlzLmltYWdlcyA9IG5ldyBCYXNlTWFwR2FsbGVyeSh7XG4gICAgICB2aWV3OiB0aGlzLnZpZXcsXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBpZDogJzQ5MjM4Njc1OWQyNjRkNDk5NDhiZjdmODM5NTdkZGI5J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUnKTtcbiAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGpzb24gPSAodmlldy5tYXAgYXMgYW55KS50b0pTT04oKTtcbiAgICAgIGpzb24uaW5pdGlhbFN0YXRlLnZpZXdwb2ludC50YXJnZXRHZW9tZXRyeSA9IHZpZXcuZXh0ZW50O1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbWFwcycsIEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbiAgICB9KTtcbiAgfVxuICB0b2dnbGVDb250ZW50ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgPT09ICdtYXBzJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHMnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHNJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXNJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHMnKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwc0l0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IEJhc2VNYXBzVmlld01vZGVsIGZyb20gJy4vQmFzZU1hcHMvQmFzZU1hcHNWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VNYXBzUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgYmFzZW1hcHMtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQmFzZU1hcHMnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1hcHMgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBAYWxpYXNPZigndmlld01vZGVsLmJhc2VtYXBzJylcbiAgYmFzZW1hcHM6IGVzcmkuQmFzZW1hcEdhbGxlcnk7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuaW1hZ2VzJylcbiAgaW1hZ2VzOiBlc3JpLkJhc2VtYXBHYWxsZXJ5O1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IEJhc2VNYXBzVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBCYXNlTWFwc1ZpZXdNb2RlbCA9IG5ldyBCYXNlTWFwc1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBCYXNlTWFwc1Byb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuICBfY3JlYXRlTWFwcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5iYXNlbWFwcykge1xuICAgICAgdGhpcy5iYXNlbWFwcy5jb250YWluZXIgPSAnbWFwcyc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlSW1hZ2VzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgdGhpcy5pbWFnZXMuY29udGFpbmVyID0gJ2ltYWdlcyc7XG4gICAgfVxuICB9O1xuICBoYW5kbGVTd2l0Y2hDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnc3dpdGNoZWQnKSAhPSAnJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgY29uc29sZS5sb2coJ2FkZCcpO1xuICAgICAgdGhpcy52aWV3Lm1hcC5hZGRNYW55KHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy50b0FycmF5KCksIDApO1xuICAgICAgdGhpcy52aWV3Lm1hcC5iYXNlbWFwLnJlZmVyZW5jZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgbGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnZpZXcubWFwLmxheWVyc1xuICAgICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy52aWV3TW9kZWwuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmluY2x1ZGVzKGxheWVyKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgIGxheWVyLm9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgbGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTbGlkZXInKT8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB0aGlzLnZpZXcubWFwLmJhc2VtYXAucmVmZXJlbmNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBsYXllci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy52aWV3TW9kZWwuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBoYW5kbGVTbGlkZXJDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgbGF5ZXJzID0gdGhpcy52aWV3Lm1hcC5sYXllcnNcbiAgICAgIC5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3TW9kZWwuYWN0aXZlQmFzZW1hcD8uYmFzZUxheWVycy5pbmNsdWRlcyhsYXllcik7XG4gICAgICB9KVxuICAgICAgLnRvQXJyYXkoKTtcbiAgICBsYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICBsYXllci5vcGFjaXR5ID0gcGFyc2VGbG9hdChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9zbGlkZXJDcmVhdGVkID0gKGU6IGFueSkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJylcbiAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLFxuICAgICAgICB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZS5iaW5kKHsgYmFzZW1hcDogdGhpcy5iYXNlbWFwcywgdmlldzogdGhpcy52aWV3IH0pXG4gICAgICApO1xuICB9O1xuICBfYmxlbmRDcmVhdGVkID0gKGU6IGFueSkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignI2JsZW5kU3dpdGNoJylcbiAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NhbGNpdGVTd2l0Y2hDaGFuZ2UnLFxuICAgICAgICB0aGlzLmhhbmRsZVN3aXRjaENoYW5nZS5iaW5kKHsgYmFzZW1hcDogdGhpcy5iYXNlbWFwcywgdmlldzogdGhpcy52aWV3IH0pXG4gICAgICApO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kJyk/LnJlbW92ZUF0dHJpYnV0ZSgnc3dpdGNoZWQnKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYmFzZW1hcERpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAvLyBjYW4gSSBnZXQgY2hlY2tlZCBhbmQgdmFsdWUgbGlrZSB0aGlzP1xuICAgICAgICBpZiAoZS50YXJnZXQ/LmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLnZpZXdNb2RlbC50b2dnbGVDb250ZW50KGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiaGlkZGVuXCIgaWQ9XCJibGVuZFwiPlxuICAgICAgICAgIDxjYWxjaXRlLXN3aXRjaCBhZnRlckNyZWF0ZT17dGhpcy5fYmxlbmRDcmVhdGVkfSBpZD1cImJsZW5kU3dpdGNoXCI+PC9jYWxjaXRlLXN3aXRjaD4gQmxlbmRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGNhbGNpdGUtc2xpZGVyXG4gICAgICAgICAgYWZ0ZXJDcmVhdGU9e3RoaXMuX3NsaWRlckNyZWF0ZWR9XG4gICAgICAgICAgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgICAgIGlkPVwiYmxlbmRTbGlkZXJcIlxuICAgICAgICAgIHZhbHVlPVwiMC41XCJcbiAgICAgICAgICBtYXg9XCIxXCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBzdGVwPVwiMC4xXCJcbiAgICAgICAgPjwvY2FsY2l0ZS1zbGlkZXI+XG5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlTWFwc30gaWQ9XCJtYXBzXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUltYWdlc30gaWQ9XCJpbWFnZXNcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdmFsdWU9XCJtYXBzXCIgaWQ9XCJtYXBzSXRlbVwiPlxuICAgICAgICAgICAgTWFwc1xuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdmFsdWU9XCJpbWFnZXNcIiBpZD1cImltYWdlc0l0ZW1cIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIEltYWdlcnlcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgTGF5ZXJMaXN0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9MYXllckxpc3QnO1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5MYXllcnMuTGF5ZXJzVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyc1ZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIGxheWVyTGlzdDogZXNyaS5MYXllckxpc3Q7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gICAgdGhpcy5sYXllckxpc3QgPSBuZXcgTGF5ZXJMaXN0KHtcbiAgICAgIHZpZXcsXG4gICAgICBjb250YWluZXI6ICdsYXllckRpdicsXG4gICAgICBsaXN0SXRlbUNyZWF0ZWRGdW5jdGlvbjogZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZXZlbnQuaXRlbTtcbiAgICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSAhPSAnZ3JvdXAnKSB7XG4gICAgICAgICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1zbGlkZXInKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtaW4nLCAnMCcpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21heCcsICcxMDAnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtaW4tbGFiZWwnLCAnMCUnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtYXgtbGFiZWwnLCAnMTAwJScpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2xhYmVsLWhhbmRsZXMnLCAnJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAoaXRlbT8ubGF5ZXIub3BhY2l0eSAqIDEwMCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnZGF0YScsIGl0ZW0ubGF5ZXIuaWQpO1xuICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlU2xpZGVyVXBkYXRlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdmlldy5tYXAuZmluZExheWVyQnlJZCgoZXZlbnQudGFyZ2V0IGFzIGFueSkuZ2V0QXR0cmlidXRlKCdkYXRhJykpLm9wYWNpdHkgPVxuICAgICAgICAgICAgICBwYXJzZUludCgoZXZlbnQ/LnRhcmdldCBhcyBhbnkpPy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpIC8gMTAwO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGl0ZW0ucGFuZWwgPSB7XG4gICAgICAgICAgICBjb250ZW50OiBbc2xpZGVyLCAnbGVnZW5kJ10sXG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGl0ZW0ubGF5ZXIudGl0bGUgPT09ICdQcm9wZXJ0eScpIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aW9uc1NlY3Rpb25zID0gW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTaG93IExhYmVscycsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAndG9nZ2xlJyxcbiAgICAgICAgICAgICAgICAgIGlkOiAncHJvcGVydHktbGFiZWxzJyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLmxheWVyLmxhYmVsc1Zpc2libGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5sYXllckxpc3Qub24oJ3RyaWdnZXItYWN0aW9uJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmFjdGlvbi5pZCA9PT0gJ3Byb3BlcnR5LWxhYmVscycpIHtcbiAgICAgICAgKGV2ZW50Lml0ZW0ubGF5ZXIgYXMgZXNyaS5GZWF0dXJlTGF5ZXIpLmxhYmVsc1Zpc2libGUgPSAoZXZlbnQuYWN0aW9uIGFzIGVzcmkuQWN0aW9uVG9nZ2xlKS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuXG5pbXBvcnQgTGF5ZXJzVmlld01vZGVsIGZyb20gJy4vTGF5ZXJzL0xheWVyc1ZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5ZXJzUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbGF5ZXJzLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxheWVycycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllcnMgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5sYXllckxpc3QnKVxuICBsYXllckxpc3Q6IGVzcmkuTGF5ZXJMaXN0O1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTGF5ZXJzVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBMYXllcnNWaWV3TW9kZWwgPSBuZXcgTGF5ZXJzVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IExheWVyc1Byb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuICBfY3JlYXRlTGF5ZXJzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmxheWVyTGlzdCkge1xuICAgICAgdGhpcy5sYXllckxpc3QuY29udGFpbmVyID0gJ2xheWVycyc7XG4gICAgfVxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlTGF5ZXJzfSBpZD1cImxheWVyc1wiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxvY2F0aW9uU2VhcmNoLkxvY2F0aW9uU2VhcmNoVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uU2VhcmNoVmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBzZWFyY2g6IFNlYXJjaDtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdGhpcy5zZWFyY2ggPSBuZXcgU2VhcmNoKHsgdmlldzogdmlldywgbWF4U3VnZ2VzdGlvbnM6IDMwLCBzZWFyY2hBbGxFbmFibGVkOiBmYWxzZSB9KTtcbiAgICB0aGlzLnNlYXJjaC5hbGxTb3VyY2VzLm9uKCdhZnRlci1hZGQnLCBlID0+IHtcbiAgICAgIGlmICgoZS5pdGVtIGFzIGFueSkubGF5ZXIpIHtcbiAgICAgICAgZS5pdGVtLm5hbWUgPSAoZS5pdGVtIGFzIGFueSkubGF5ZXIudGl0bGU7XG4gICAgICAgIGUuaXRlbS5wbGFjZWhvbGRlciA9IChlLml0ZW0gYXMgYW55KS5sYXllci50aXRsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IExvY2F0aW9uU2VhcmNoVmlld01vZGVsIGZyb20gJy4vTG9jYXRpb25TZWFyY2gvTG9jYXRpb25TZWFyY2hWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uU2VhcmNoUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbG9jYXRpb25zZWFyY2gtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTG9jYXRpb25TZWFyY2gnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25TZWFyY2ggZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBAYWxpYXNPZigndmlld01vZGVsLnNlYXJjaCcpXG4gIHNlYXJjaDogZXNyaS53aWRnZXRzU2VhcmNoO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTG9jYXRpb25TZWFyY2hWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IExvY2F0aW9uU2VhcmNoVmlld01vZGVsID0gbmV3IExvY2F0aW9uU2VhcmNoVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IExvY2F0aW9uU2VhcmNoUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX3NlYXJjaENyZWF0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgIHRoaXMuc2VhcmNoLmNvbnRhaW5lciA9ICdsb2NhdGlvblNlYXJjaCc7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9zZWFyY2hDcmVhdGV9IGlkPVwibG9jYXRpb25TZWFyY2hcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIFdpZGdldHNcbmltcG9ydCBMZWdlbmQgZnJvbSAnZXNyaS93aWRnZXRzL0xlZ2VuZCc7XG5pbXBvcnQgUHJpbnQgZnJvbSAnZXNyaS93aWRnZXRzL1ByaW50JztcbmltcG9ydCBCb29rbWFya3MgZnJvbSAnZXNyaS93aWRnZXRzL0Jvb2ttYXJrcyc7XG5pbXBvcnQgUHJvcGVydHlTZWFyY2ggZnJvbSAnLi93aWRnZXRzL1Byb3BlcnR5U2VhcmNoJztcbmltcG9ydCBDb29yZGluYXRlQ29udmVyc2lvbiBmcm9tICdlc3JpL3dpZGdldHMvQ29vcmRpbmF0ZUNvbnZlcnNpb24nO1xuaW1wb3J0IEV4cGFuZCBmcm9tICdlc3JpL3dpZGdldHMvRXhwYW5kJztcbmltcG9ydCBNZWFzdXJlIGZyb20gJy4vd2lkZ2V0cy9NZWFzdXJlJztcbmltcG9ydCBDb21wYXNzIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Db21wYXNzJztcbmltcG9ydCBMb2NhdGUgZnJvbSAnZXNyaS93aWRnZXRzL0xvY2F0ZSc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnZXNyaS93aWRnZXRzL1RyYWNrJztcblxuaW1wb3J0IHsgY29uZG9zVGFibGUsIGFkZHJlc3NUYWJsZSwgZmVhdHVyZUxheWVyIH0gZnJvbSAnLi9kYXRhL3NlYXJjaCc7XG5pbXBvcnQgZXNyaSA9IF9fZXNyaTtcbmltcG9ydCBEcmF3IGZyb20gJy4vd2lkZ2V0cy9EcmF3JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi93aWRnZXRzL1NlbGVjdCc7XG5pbXBvcnQgQmFzZU1hcHMgZnJvbSAnLi93aWRnZXRzL0Jhc2VNYXBzJztcbmltcG9ydCBMYXllcnMgZnJvbSAnLi93aWRnZXRzL0xheWVycyc7XG5pbXBvcnQgTG9jYXRpb25TZWFyY2ggZnJvbSAnLi93aWRnZXRzL0xvY2F0aW9uU2VhcmNoJztcbmV4cG9ydCBjb25zdCBtZWFzdXJlbWVudDogTWVhc3VyZSA9IG5ldyBNZWFzdXJlKCk7XG5leHBvcnQgY29uc3Qgc2VsZWN0OiBTZWxlY3QgPSBuZXcgU2VsZWN0KCk7XG5leHBvcnQgbGV0IGxheWVyczogTGF5ZXJzO1xuZXhwb3J0IGxldCBsZWdlbmQ6IExlZ2VuZDtcbmV4cG9ydCBsZXQgYmFzZW1hcHM6IEJhc2VNYXBzO1xuZXhwb3J0IGxldCBib29rbWFya3M6IEJvb2ttYXJrcztcbmV4cG9ydCBsZXQgbG9jYXRpb25TZWFyY2g6IExvY2F0aW9uU2VhcmNoO1xuXG5leHBvcnQgbGV0IHByaW50V2lkZ2V0OiBQcmludDtcbmV4cG9ydCBsZXQgcHJvcGVydHlTZWFyY2g6IFByb3BlcnR5U2VhcmNoO1xuZXhwb3J0IGNvbnN0IGRyYXdXaWRnZXQ6IERyYXcgPSBuZXcgRHJhdygpO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRXaWRnZXQobmFtZTogc3RyaW5nLCB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICBpZiAobmFtZSA9PT0gJ1NlYXJjaCcgJiYgIXByb3BlcnR5U2VhcmNoKSB7XG4gICAgcHJvcGVydHlTZWFyY2ggPSBuZXcgUHJvcGVydHlTZWFyY2goe1xuICAgICAgdmlldzogdmlldyxcbiAgICAgIGNvbmRvc1RhYmxlOiBjb25kb3NUYWJsZSxcbiAgICAgIGFkZHJlc3NUYWJsZTogYWRkcmVzc1RhYmxlLFxuICAgICAgcHJvcGVydHlMYXllcjogZmVhdHVyZUxheWVyLFxuICAgICAgY29udGFpbmVyOiAnc2lkZURpdidcbiAgICB9KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ0xheWVycycgJiYgIWxheWVycykge1xuICAgIGxheWVycyA9IG5ldyBMYXllcnMoeyB2aWV3LCBjb250YWluZXI6ICdsYXllcnNEaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnTGVnZW5kJyAmJiAhbGVnZW5kKSB7XG4gICAgbGVnZW5kID0gbmV3IExlZ2VuZCh7IHZpZXcsIGNvbnRhaW5lcjogJ2xlZ2VuZERpdicgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdQcmludCcgJiYgIXByaW50V2lkZ2V0KSB7XG4gICAgcHJpbnRXaWRnZXQgPSBuZXcgUHJpbnQoe1xuICAgICAgdmlldyxcbiAgICAgIGNvbnRhaW5lcjogJ3ByaW50RGl2JyxcbiAgICAgIHByaW50U2VydmljZVVybDpcbiAgICAgICAgJ2h0dHBzOi8vdXRpbGl0eS5hcmNnaXNvbmxpbmUuY29tL2FyY2dpcy9yZXN0L3NlcnZpY2VzL1V0aWxpdGllcy9QcmludGluZ1Rvb2xzL0dQU2VydmVyL0V4cG9ydCUyMFdlYiUyME1hcCUyMFRhc2snXG4gICAgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdCb29rbWFya3MnICYmICFib29rbWFya3MpIHtcbiAgICBib29rbWFya3MgPSBuZXcgQm9va21hcmtzKHsgdmlldywgY29udGFpbmVyOiAnYm9va21hcmtEaXYnLCBlZGl0aW5nRW5hYmxlZDogdHJ1ZSB9KTtcbiAgfVxuXG4gIGlmIChuYW1lID09PSAnQmFzZW1hcHMnICYmICFiYXNlbWFwcykge1xuICAgIGJhc2VtYXBzID0gbmV3IEJhc2VNYXBzKHsgdmlldywgY29udGFpbmVyOiAnYmFzZW1hcERpdicgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdMb2NhdGlvbicgJiYgIWxvY2F0aW9uU2VhcmNoKSB7XG4gICAgbG9jYXRpb25TZWFyY2ggPSBuZXcgTG9jYXRpb25TZWFyY2goeyB2aWV3LCBjb250YWluZXI6ICdsb2NhdGlvbkRpdicgfSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpbml0V2lkZ2V0cyh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICBjb25zdCBjb29yZGluYXRlczogZXNyaS5Db29yZGluYXRlQ29udmVyc2lvbiA9IG5ldyBDb29yZGluYXRlQ29udmVyc2lvbih7IHZpZXcgfSk7XG4gIGNvbnN0IGNvb3JkaW5hdGVzRXhwYW5kOiBFeHBhbmQgPSBuZXcgRXhwYW5kKHtcbiAgICBjb250ZW50OiBjb29yZGluYXRlcyxcbiAgICBtb2RlOiAnZmxvYXRpbmcnLFxuICAgIGV4cGFuZEljb25DbGFzczogJ2VzcmktaWNvbi1wYW4yJ1xuICB9KTtcbiAgdmlldy51aS5hZGQoY29vcmRpbmF0ZXNFeHBhbmQsICdib3R0b20tbGVmdCcpO1xuXG4gIHZpZXcudWkuYWRkKG5ldyBDb21wYXNzKHsgdmlldzogdmlldyB9KSwgJ3RvcC1sZWZ0Jyk7XG4gIGNvbnN0IGxvY2F0ZTogTG9jYXRlID0gbmV3IExvY2F0ZSh7IHZpZXc6IHZpZXcgfSk7XG4gIGxvY2F0ZS5vbignbG9jYXRlLWVycm9yJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gIH0pO1xuICB2aWV3LnVpLmFkZChsb2NhdGUsICd0b3AtbGVmdCcpO1xuXG4gIGNvbnN0IHRyYWNrOiBUcmFjayA9IG5ldyBUcmFjayh7IHZpZXc6IHZpZXcgfSk7XG4gIHRyYWNrLm9uKCd0cmFjay1lcnJvcicsIChldmVudDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9KTtcbiAgdmlldy51aS5hZGQodHJhY2ssICd0b3AtbGVmdCcpO1xuXG4gIG1lYXN1cmVtZW50LnZpZXcgPSB2aWV3O1xuICBtZWFzdXJlbWVudC5jb250YWluZXIgPSAnbWVhc3VyZURpdic7XG4gIGRyYXdXaWRnZXQudmlldyA9IHZpZXc7XG4gIGRyYXdXaWRnZXQuY29udGFpbmVyID0gJ2RyYXdEaXYnO1xuXG4gIHNlbGVjdC5jb250YWluZXIgPSAnc2VsZWN0RGl2JztcbiAgc2VsZWN0LnZpZXcgPSB2aWV3O1xuICBzZWxlY3QubGF5ZXIgPSBmZWF0dXJlTGF5ZXI7XG4gIHJldHVybiB2aWV3O1xufVxuIiwiaW1wb3J0IHsgbWVhc3VyZW1lbnQsIGluaXRXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMnO1xuaW1wb3J0IHsgdmlldyB9IGZyb20gJy4vaW5kZXgnO1xuLy9oYW5kbGUgYWN0aW9uIGJhciB0b2dnbGVcbmV4cG9ydCBjb25zdCB0b2dnbGVBY3Rpb24gPSAoYWN0aW9uOiBzdHJpbmcpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsJykuZm9yRWFjaCgocGFuZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKHBhbmVsLnRpdGxlICE9IGFjdGlvbikge1xuICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKHBhbmVsKTtcbiAgICAgIHBhbmVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgICBjb25zb2xlLmxvZyhwYW5lbCk7XG4gICAgICBjb25zb2xlLmxvZyhwYW5lbC50aXRsZSk7XG4gICAgICBpZiAoIXBhbmVsLmhhc0F0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDwgNTAwKSB7XG4gICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDM1MHB4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAnTWVhc3VyZScpIHtcbiAgICAgICAgICAvL21lYXN1cmVtZW50Lm1lYXN1cmVtZW50LmNsZWFyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVhc3VyZW1lbnQubWVhc3VyZU9wZW5lZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25zOiBOb2RlTGlzdE9mPEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1hY3Rpb24tYmFyIGNhbGNpdGUtYWN0aW9uJyk7XG5hY3Rpb25zPy5mb3JFYWNoKChhY3Rpb246IEVsZW1lbnQpID0+IHtcbiAgYWN0aW9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC50ZXh0KTtcbiAgICB0b2dnbGVBY3Rpb24oZS50YXJnZXQudGV4dCk7XG4gICAgaW5pdFdpZGdldChlLnRhcmdldC50ZXh0LCB2aWV3KTtcbiAgICBhY3Rpb25zLmZvckVhY2goKGE6IGFueSkgPT4ge1xuICAgICAgaWYgKGEudGV4dCAhPSBlLnRhcmdldC50ZXh0KSB7XG4gICAgICAgIGEucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhY3Rpb24uc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBjb25zdCBlbmFibGVBY3Rpb25iYXIgPSAoKSA9PiB7XG4gIGluaXRXaWRnZXQoJ1NlYXJjaCcsIHZpZXcpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFjdGlvbi1iYXIgY2FsY2l0ZS1hY3Rpb24nKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgaW5pdFBhbmVsSGVhZGVycyA9ICgpID0+IHtcbiAgLy9vdmVycmlkZSBDU1MgZm9yIGNhbGNpdGUgcGFuZWwgaGVhZGVyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwgZGl2JykuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgaWYgKHBhbmVsLnNsb3QgPT09ICdoZWFkZXItdHJhaWxpbmctY29udGVudCcpIHtcbiAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsnKTtcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4gICAgaWYgKChldmVudD8udGFyZ2V0IGFzIGFueSk/Lm91dGVyV2lkdGggPj0gNTAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucXVlcnlTZWxlY3RvcignLm1heGltaXplJyk/LmdldEF0dHJpYnV0ZSgnaWNvbicpID09PSAnbWluaW1pemUnKSB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiAzNTBweCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiAwcHgnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUGFuZWxEaXNtaXNzZWRDaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXhpbWl6ZScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAnbWF4aW1pemUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIC8vaGFuZGxlIHBhbmVsIG1heGltaXplL21pbmltaXplXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXhpbWl6ZScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21heGltaXplJykge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtaW5pbWl6ZScpO1xuICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KScpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaWNvbicpID09PSAnbWluaW1pemUnKSB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpY29uJywgJ21heGltaXplJyk7XG4gICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6MzUwcHgnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGluaXRQYW5lbHMgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGNvbnN0IGk6IEhUTUxFbGVtZW50ID0gaXRlbT8uc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGkpIHtcbiAgICAgIGkuaW5uZXJIVE1MICs9ICc8c3R5bGU+LmNvbnRlbnQtY29udGFpbmVyIHsgaGVpZ2h0OiAxMDAlOyB9IDwvc3R5bGU+JztcbiAgICB9XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUGFuZWxEaXNtaXNzZWRDaGFuZ2UnLCBlID0+IHtcbiAgICAgIGlmICh3aW5kb3cub3V0ZXJXaWR0aCA8PSA1MDApIHtcbiAgICAgICAgaWYgKChlLnRhcmdldCBhcyBhbnkpLmhhc0F0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0RpdicpPy5jbGFzc0xpc3QucmVtb3ZlKCdiZWxvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3RGl2Jyk/LmNsYXNzTGlzdC5hZGQoJ2JlbG93Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0ICcuL2Nzcy9tYWluLmNzcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL2RhdGEvYXBwJztcbmltcG9ydCB7IGluaXRUaXBzIH0gZnJvbSAnLi90aXBzJztcbmltcG9ydCB7IHNob3dBbGVydCB9IGZyb20gJy4vYWxlcnQnO1xuaW1wb3J0IHsgdG9nZ2xlQWN0aW9uLCBlbmFibGVBY3Rpb25iYXIgfSBmcm9tICcuL2FjdGlvbmJhcic7XG5pbXBvcnQgTWFwVmlldyBmcm9tICdlc3JpL3ZpZXdzL01hcFZpZXcnO1xuaW1wb3J0IGdlb21ldHJ5RW5naW5lIGZyb20gJ2VzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmUnO1xuLy8gd2lkZ2V0IHV0aWxzXG5pbXBvcnQgeyBpbml0V2lkZ2V0cywgc2VsZWN0LCBwcm9wZXJ0eVNlYXJjaCwgbGF5ZXJzIH0gZnJvbSAnLi93aWRnZXRzJztcbmltcG9ydCB7IGluaXRQYW5lbHMsIGluaXRQYW5lbEhlYWRlcnMgfSBmcm9tICcuL3BhbmVscyc7XG5pbXBvcnQgeyBpbml0TWVudSB9IGZyb20gJy4vbWVudSc7XG4vKipcbiAqIEluaXRpYWxpemUgYXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHZpZXcgPSBuZXcgTWFwVmlldyh7XG4gIGNvbnRhaW5lcjogJ3ZpZXdEaXYnLFxuICBtYXBcbn0pO1xuXG4vL2hhbmRsZSB3aGVuIHZpZXcgaXMgcmVhZHlcbnZpZXcud2hlbigoKSA9PiB7XG4gIHZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICBpZiAobGF5ZXIudHlwZSAhPSAnZ3JvdXAnKSB7XG4gICAgICBsYXllci53YXRjaCgndmlzaWJsZScsIHZpc2libGUgPT4ge1xuICAgICAgICBsYXllcnMubGF5ZXJMaXN0Py5vcGVyYXRpb25hbEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBpdGVtLmNoaWxkcmVuLmZpbmQoaSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBpLmxheWVyID09PSBsYXllcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgIGNoaWxkLnBhbmVsLm9wZW4gPSB2aXNpYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGF5ZXIud2F0Y2goJ3Zpc2libGUnLCB2aXNpYmxlID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBsYXllcnMubGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMuZmluZChpID0+IHtcbiAgICAgICAgICByZXR1cm4gaS5sYXllciA9PT0gbGF5ZXI7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgICBncm91cC5vcGVuID0gdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgcHJvcGVydHlMYXllciA9IG1hcC5hbGxMYXllcnMuZmluZChsYXllciA9PiB7XG4gICAgcmV0dXJuIGxheWVyLnRpdGxlID09PSAnUHJvcGVydHknICYmIGxheWVyLnR5cGUgPT09ICdmZWF0dXJlJztcbiAgfSk7XG4gIHZpZXcub24oJ2hvbGQnLCBlID0+IHtcbiAgICBwcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGUubWFwUG9pbnQ7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0b2dnbGVBY3Rpb24oJ1NlYXJjaCcpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbiAgdmlld1xuICAgIC53aGVuTGF5ZXJWaWV3KHByb3BlcnR5TGF5ZXIpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgcHJvcGVydHlTZWFyY2gucHJvcGVydHlMYXllciA9IHByb3BlcnR5TGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgICAgIC8vc2VhcmNoIGJ5IGdlb21ldHJ5IGFmdGVyIHNrZXRjaCBjcmVhdGlvbiBpbiBzZWxlY3Qgd2lkZ2V0XG4gICAgICBzZWxlY3Qudmlld01vZGVsLnNrZXRjaC5vbignY3JlYXRlJywgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGV2LnN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgaWYgKHNlbGVjdC52aWV3TW9kZWw/LmJ1ZmZlckRpc3RhbmNlID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljQnVmZmVyKGV2LmdyYXBoaWMuZ2VvbWV0cnksIHNlbGVjdC52aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2UsICdmZWV0Jyk7XG4gICAgICAgICAgICBwcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGcgYXMgX19lc3JpLlBvbHlnb247XG4gICAgICAgICAgICBldi5ncmFwaGljLmdlb21ldHJ5ID0gZztcbiAgICAgICAgICAgIHNlbGVjdC52aWV3TW9kZWwuZ3JhcGhpY3MuYWRkKGV2LmdyYXBoaWMpO1xuICAgICAgICAgICAgZXYuZ3JhcGhpYy5zeW1ib2wgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgICAgICAgICAgIHN0eWxlOiAnbm9uZScsXG4gICAgICAgICAgICAgIG91dGxpbmU6IHsgc3R5bGU6ICdzaG9ydC1kYXNoJywgd2lkdGg6IDIuNSwgY29sb3I6IFsyMjEsIDIyMSwgMjIxLCAxXSB9LFxuICAgICAgICAgICAgICBjb2xvcjogWzI1NSwgMjQzLCAxMywgMC4yNV1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2aWV3LmdvVG8oZXYuZ3JhcGhpYyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BlcnR5U2VhcmNoLmdlb21ldHJ5ID0gZXYuZ3JhcGhpYy5nZW9tZXRyeTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9nZ2xlQWN0aW9uKCdTZWFyY2gnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKHJlYXNvbjogYW55KSA9PiB7XG4gICAgICAvL29uIGVycm9yIGxvYWRpbmcgcHJvcGVydHkgbGF5ZXIsIGRpc3BsYXkgYWxlcnRcbiAgICAgIGNvbnNvbGUubG9nKHJlYXNvbik7XG4gICAgICBzaG93QWxlcnQoJ1Byb3BlcnR5IGxheWVyIGRpZCBub3QgbG9hZC4gUGxlYXNlIGNvbnRhY3QgaU1BUFMgSGVscCBEZXNrLicsICdyZWQnKTtcbiAgICB9KTtcbn0pO1xudmlldy53aGVuKGluaXRXaWRnZXRzKTtcbnZpZXcud2hlbihpbml0VGlwcyk7XG4vL3NhdmUgd2ViIG1hcCB0byBsb2NhbCBzdG9yYWdlIG9uIHBhZ2VoaWRlXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCAoKSA9PiB7XG4gIHZpZXcubWFwLnJlbW92ZU1hbnkoXG4gICAgdmlldy5tYXAuYWxsTGF5ZXJzXG4gICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIGxheWVyLnR5cGUgPT09ICdncm91cCcgJiYgIShsYXllciBhcyBfX2VzcmkuR3JvdXBMYXllcikubGF5ZXJzLmxlbmd0aDtcbiAgICAgIH0pXG4gICAgICAudG9BcnJheSgpXG4gICk7XG4gIGNvbnN0IGpzb24gPSAodmlldy5tYXAgYXMgYW55KS50b0pTT04oKTtcbiAganNvbi5pbml0aWFsU3RhdGUudmlld3BvaW50LnRhcmdldEdlb21ldHJ5ID0gdmlldy5leHRlbnQ7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hcHMnLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XG59KTtcblxuLy9zaG93IGZpcnN0IHBhbmVsIG9uIGRldmljZXMgd2lkZXIgdGhhbiA1MDBweCBieSBkZWZhdWx0XG5pZiAod2luZG93Lm91dGVyV2lkdGggPj0gNTAwKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtcGFuZWwnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtcGFuZWwnKT8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1hY3Rpb24tYmFyIGNhbGNpdGUtYWN0aW9uJyk/LnRvZ2dsZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG59XG5cbi8vbW9kaWZ5IERPTSBhZnRlciBtYXAgdmlldyBsb2Fkc1xudmlldy53aGVuKCgpID0+IHtcbiAgaW5pdFBhbmVscygpO1xuICBlbmFibGVBY3Rpb25iYXIoKTtcbn0pO1xuXG5pbml0UGFuZWxIZWFkZXJzKCk7XG5pbml0TWVudSgpO1xuIl0sIm5hbWVzIjpbIndoZW5EZWZpbmVkT25jZSIsIndoZW5EZWZpbmVkIiwicHJvcGVydHkiLCJzdWJjbGFzcyIsInRzeCIsImFsaWFzT2YiLCJyZW5kZXJhYmxlIiwiQ1NTIl0sIm1hcHBp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
