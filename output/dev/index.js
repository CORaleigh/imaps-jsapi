
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FwcC50cyIsIi4uLy4uL3NyYy9tZW51LnRzIiwiLi4vLi4vc3JjL3RpcHMudHMiLCIuLi8uLi9zcmMvYWxlcnQudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaC9Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL1Byb3BlcnR5U2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUvTWVhc3VyZVZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUudHN4IiwiLi4vLi4vc3JjL2RhdGEvc2VhcmNoLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy9EcmF3Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9TZWxlY3QvU2VsZWN0Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvU2VsZWN0LnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL0Jhc2VNYXBzL0Jhc2VNYXBzVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQmFzZU1hcHMudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvTGF5ZXJzL0xheWVyc1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xheWVycy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaC9Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xvY2F0aW9uU2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzLnRzIiwiLi4vLi4vc3JjL2FjdGlvbmJhci50cyIsIi4uLy4uL3NyYy9wYW5lbHMudHMiLCIuLi8uLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG5leHBvcnQgbGV0IG1hcCA9IG5ldyBXZWJNYXAoKTtcbm1hcCA9IG5ldyBXZWJNYXAoeyBwb3J0YWxJdGVtOiB7IGlkOiAnOTUwOTI0Mjg3NzRjNGIxZmI2YTNiNmY1ZmVkOWZiYzQnIH0gfSk7XG5pZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpKSB7XG4gIG1hcCA9IFdlYk1hcC5mcm9tSlNPTihKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hcHMnKSBhcyBzdHJpbmcpKTtcbn1cbiIsImV4cG9ydCBsZXQgdGhlbWUgPSAnbGlnaHQnO1xuY29uc3Qgc2V0VGhlbWUgPSAodGhlbWU6IHN0cmluZykgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWNvbG9yJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXRpcC1tYW5hZ2VyJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWRyb3Bkb3duJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rJykuZm9yRWFjaChsaW5rID0+IHtcbiAgICBpZiAobGluay5ocmVmLmluY2x1ZGVzKHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JykpIHtcbiAgICAgIGxpbmsuaHJlZiA9ICdodHRwczovL2pzLmFyY2dpcy5jb20vNC4xNi9lc3JpL3RoZW1lcy8nICsgdGhlbWUgKyAnL21haW4uY3NzJztcbiAgICB9XG4gIH0pO1xufTtcbmV4cG9ydCBjb25zdCBpbml0TWVudSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1kcm9wZG93bicpPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlRHJvcGRvd25TZWxlY3QnLCAoZTogYW55KSA9PiB7XG4gICAgZS50YXJnZXQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpIGFzIHN0cmluZztcbiAgICAgICAgdGhlbWUgPSB2YWx1ZTtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIHNldFRoZW1lKHRoZW1lKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpIHtcbiAgICBsZXQgdGhlbWVOYW1lOiBzdHJpbmcgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgYXMgc3RyaW5nO1xuICAgIHNldFRoZW1lKHRoZW1lTmFtZSk7XG5cbiAgICB0aGVtZU5hbWUgPSB0aGVtZU5hbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtZHJvcGRvd24taXRlbScpLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGlmICgoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgc3RyaW5nKSAhPSB0aGVtZU5hbWUpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpIGFzIHN0cmluZztcbiAgICAgICAgdGhlbWUgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgc3RyaW5nKSA9PT0gdGhlbWVOYW1lKSB7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL21lbnUnO1xuXG5jb25zdCB0aXBHcm91cHMgPSBbXG4gIHtcbiAgICBwYW5lbDoge1xuICAgICAgbmFtZTogJ3NlbGVjdFRpcCcsXG4gICAgICB0aXRsZTogJ1NlbGVjdGlvbicsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnVG8gZHJhdyBhIGNvbnRpbnVvdXMgbGluZSBvciBwb2x5Z29uLCBsb25nIHByZXNzIGFuZCBkcmFnIHlvdXIgY3Vyc29yJyxcbiAgICAgICAgICB0aXRsZTogJ0ZyZWVoYW5kIERyYXdpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnVG8gZHJhdyBhIGNvbnRpbnVvdXMgbGluZSBvciBwb2x5Z29uLCBsb25nIHByZXNzIGFuZCBkcmFnIHlvdXIgY3Vyc29yJyxcbiAgICAgICAgICB0aXRsZTogJ0ZyZWVoYW5kIERyYXdpbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwYW5lbDoge1xuICAgICAgbmFtZTogJ3Byb3BlcnR5U2VhcmNoVGlwJyxcbiAgICAgIHRpdGxlOiAnUHJvcGVydHkgU2VhcmNoJyxcbiAgICAgIHRpcHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAnVG8gc2VhcmNoIGJ5IGEgcG9ydGlvbiBvZiBhbiBvd25lciBuYW1lIG9yIGFkZHJlc3MsIGhpdCBlbnRlciB3aXRob3V0IHNlbGVjdGluZyBmb3JtIHRoZSBsaXN0IG9mIHN1Z2dlc3Rpb25zLicsXG4gICAgICAgICAgdGl0bGU6ICdXaWxkY2FyZCBTZWFyY2gnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnVG8gcXVpY2tseSBzZWxlY3QgYSBwcm9wZXJ0eSBmcm9tIHRoZSBtYXAsIGxvbmcgcHJlc3Mgb24gYSBwcm9wZXJ0eSBvbiB0aGUgbWFwLicsXG4gICAgICAgICAgdGl0bGU6ICdMb25nIFByZXNzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIHNlbGVjdCBieSBhIGxvY2F0aW9uIHVzZSB0aGUgcHJvcGVydHkgc2VsZWN0aW9uIHRvb2wuJyxcbiAgICAgICAgICB0aXRsZTogJ1NlbGVjdCBCeSBMb2NhdGlvbidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIHBhbmVsOiB7XG4gICAgICBuYW1lOiAnYmFzZW1hcFRpcCcsXG4gICAgICB0aXRsZTogJ0Jhc2VtYXBzJyxcbiAgICAgIHRpcHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAnVGhlIGltYWdlcnkgYW5kIGltYWdlcnkgaHlicmlkIGJhc2UgbWFwcyBsaXN0ZWQgdW5kZXIgdGhlIG1hcHMgdGFiIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIGxhdGVzdCBpbWFnZXJ5IGZyb20gUmFsZWlnaCAoMjAxOSkgYW5kIGZyb20gdGhlIFN0YXRlIG9mIE5vcnRoIENhcm9saW5hICgyMDE3KS4nLFxuICAgICAgICAgIHRpdGxlOiAnSW1hZ2VyeSBCYXNlbWFwcydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0VGlwcygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpcCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtdGlwLW1hbmFnZXInKT8ucmVtb3ZlKCk7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgY29uc3QgbWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtdGlwLW1hbmFnZXInKTtcbiAgICAgIG1hbmFnZXIuc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgICAgIGNvbnN0IHRpcEdyb3VwID0gdGlwR3JvdXBzLmZpbmQoZ3JvdXAgPT4ge1xuICAgICAgICByZXR1cm4gZ3JvdXAucGFuZWwubmFtZSA9PT0gaXRlbS5pZDtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtdGlwLWdyb3VwJyk7XG4gICAgICBncm91cC5zZXRBdHRyaWJ1dGUoJ3RleHQtZ3JvdXAtdGl0bGUnLCAodGlwR3JvdXAgYXMgYW55KT8ucGFuZWwudGl0bGUpO1xuICAgICAgbWFuYWdlci5hcHBlbmRDaGlsZChncm91cCk7XG4gICAgICB0aXBHcm91cD8ucGFuZWwudGlwcy5mb3JFYWNoKHRpcCA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGNpdGVUaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcCcpO1xuICAgICAgICBjYWxjaXRlVGlwLnNldEF0dHJpYnV0ZSgnaGVhZGluZycsIHRpcC50aXRsZSk7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAuaW5uZXJIVE1MID0gdGlwLm1lc3NhZ2U7XG4gICAgICAgIGNhbGNpdGVUaXAuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGNhbGNpdGVUaXApO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudD8uYm9keT8uYXBwZW5kQ2hpbGQobWFuYWdlcik7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGVydCh0ZXh0OiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1hbGVydCcpPy5yZW1vdmUoKTtcbiAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWFsZXJ0Jyk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ3Nsb3QnLCAnYWxlcnQtbWVzc2FnZScpO1xuICBtZXNzYWdlLmlubmVySFRNTCA9IHRleHQ7XG4gIGFsZXJ0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBjb2xvcik7XG4gIGFsZXJ0LnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAnJyk7XG5cbiAgYWxlcnQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWxlcnQpO1xufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gnO1xuaW1wb3J0IEZlYXR1cmVUYWJsZSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZVRhYmxlJztcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmUnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcbmltcG9ydCBMYXllclNlYXJjaFNvdXJjZSBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoL0xheWVyU2VhcmNoU291cmNlJztcbmltcG9ydCBGaWVsZENvbHVtbkNvbmZpZyBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZVRhYmxlL0ZpZWxkQ29sdW1uQ29uZmlnJztcbmltcG9ydCBQb3B1cFRlbXBsYXRlIGZyb20gJ2VzcmkvUG9wdXBUZW1wbGF0ZSc7XG5pbXBvcnQgRXhwcmVzc2lvbkluZm8gZnJvbSAnZXNyaS9wb3B1cC9FeHByZXNzaW9uSW5mbyc7XG5pbXBvcnQgTWVudUJ1dHRvbkl0ZW0gZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZS9HcmlkL3N1cHBvcnQvQnV0dG9uTWVudUl0ZW0nO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlLCB3aGVuRGVmaW5lZCB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuUHJvcGVydHlTZWFyY2guUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBjb25kb3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBwcm9wZXJ0eSgpIGFkZHJlc3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBwcm9wZXJ0eSgpIHByb3BlcnR5TGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuXG4gIEBwcm9wZXJ0eSgpIHNlYXJjaFdpZGdldDogZXNyaS53aWRnZXRzU2VhcmNoO1xuICBAcHJvcGVydHkoKSBmZWF0dXJlVGFibGU6IGVzcmkuRmVhdHVyZVRhYmxlO1xuICBAcHJvcGVydHkoKSBmZWF0dXJlOiBlc3JpLkZlYXR1cmU7XG4gIEBwcm9wZXJ0eSgpIGdlb21ldHJ5OiBlc3JpLkdlb21ldHJ5O1xuXG4gIGNsdXN0ZXJQb2ludHM6IEZlYXR1cmVMYXllcjtcblxuICBncmFwaGljcyA9IG5ldyBHcmFwaGljc0xheWVyKHsgaWQ6ICdwcm9wZXJ0eS1zZWxlY3QnLCBsaXN0TW9kZTogJ2hpZGUnLCBtaW5TY2FsZTogMTkyMDAgfSk7XG4gIHNpbmdsZVN5bWJvbCA9IHtcbiAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgIHN0eWxlOiAnbm9uZScsXG4gICAgb3V0bGluZTogeyB3aWR0aDogMi41LCBjb2xvcjogWzI1NSwgODIsIDgyLCAxXSB9LFxuICAgIGNvbG9yOiBbMjUzLCA0NiwgNjUsIDAuMjVdXG4gIH07XG4gIG11bHRpU3ltYm9sID0ge1xuICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgc3R5bGU6ICdub25lJyxcbiAgICBvdXRsaW5lOiB7IHdpZHRoOiAyLjUsIGNvbG9yOiBbMjQ5LCAyNDMsIDAsIDFdIH0sXG4gICAgY29sb3I6IFsyNTMsIDQ2LCA2NSwgMC4yNV1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ2NvbmRvc1RhYmxlJywgdGhpcy5pbml0U2VhcmNoLmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkKHRoaXMsICdnZW9tZXRyeScsIHRoaXMuc2VhcmNoQnlHZW9tZXRyeS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFyY2FkZUV4cHJlc3Npb25JbmZvcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnYm9tLWRvYy1udW0nLFxuICAgICAgdGl0bGU6ICdib20tZG9jLW51bScsXG4gICAgICBleHByZXNzaW9uOlxuICAgICAgICBcInZhciByZXN1bHRzID0gRmVhdHVyZVNldEJ5UmVsYXRpb25zaGlwTmFtZSgkZmVhdHVyZSwgJ0NPTkRPX0JPT0tTJywgWycqJ10sIGZhbHNlKTsgcmV0dXJuIEZpcnN0KHJlc3VsdHMpLkJPTV9ET0NfTlVNO1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGVlZC1kb2MtbnVtJyxcbiAgICAgIHRpdGxlOiAnZGVlZC1kb2MtbnVtJyxcbiAgICAgIGV4cHJlc3Npb246XG4gICAgICAgIFwidmFyIHJlc3VsdHMgPSBGZWF0dXJlU2V0QnlSZWxhdGlvbnNoaXBOYW1lKCRmZWF0dXJlLCAnQ09ORE9fQk9PS1MnLCBbJyonXSwgZmFsc2UpOyByZXR1cm4gRmlyc3QocmVzdWx0cykuREVFRF9ET0NfTlVNO1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICAgIHRpdGxlOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICdXaGVuKElzRW1wdHkoJGZlYXR1cmUuQUREUjMpLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIzKSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgICAgdGl0bGU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgJ1wiQnVpbGRpbmcgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkJMREdfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJMYW5kIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5MQU5EX1ZBTCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG90YWwgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLlRPVEFMX1ZBTFVFX0FTU0QnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGVlZC1ib29rLXBhZ2UnLFxuICAgICAgdGl0bGU6ICdkZWVkLWJvb2stcGFnZScsXG4gICAgICBleHByZXNzaW9uOiAnXCJCb29rIFwiKyRmZWF0dXJlLkRFRURfQk9PSytcIiBQYWdlIFwiKyRmZWF0dXJlLkRFRURfUEFHRSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdnZW5lcmFsJyxcbiAgICAgIHRpdGxlOiAnZ2VuZXJhbCcsXG4gICAgICBleHByZXNzaW9uOlxuICAgICAgICAnXCJQSU5cIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKyRmZWF0dXJlLlBJTl9OVU0rXCIgXCIrJGZlYXR1cmUuUElOX0VYVCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgICAnXCJSRUlEXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5SRUlEK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJDaXR5XCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICAgJ1Byb3BlcigkZmVhdHVyZS5DSVRZX0RFQ09ERSkrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkp1cmlzZGljdGlvblwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAgICckZmVhdHVyZS5QTEFOTklOR19KVVJJU0RJQ1RJT04rVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIlRvd25zaGlwXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStQcm9wZXIoJGZlYXR1cmUuVE9XTlNISVBfREVDT0RFKSdcbiAgICB9XG4gIF0gYXMgRXhwcmVzc2lvbkluZm9bXTtcblxuICBwb3B1cFRlbXBsYXRlID0gbmV3IFBvcHVwVGVtcGxhdGUoe1xuICAgIGV4cHJlc3Npb25JbmZvczogdGhpcy5hcmNhZGVFeHByZXNzaW9uSW5mb3MsXG4gICAgY29udGVudDogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHRleHQ6XG4gICAgICAgICAgJzxoMSBjbGFzcz1cInRleHQtZ3JlZW5cIj57U0lURV9BRERSRVNTfTwvaDE+JyArXG4gICAgICAgICAgJzxoMj5HZW5lcmFsPC9oMj57ZXhwcmVzc2lvbi9nZW5lcmFsfScgK1xuICAgICAgICAgICc8aDI+T3duZXI8L2gyPntPV05FUn08YnIvPntleHByZXNzaW9uL21haWxpbmctYWRkcmVzc30nICtcbiAgICAgICAgICAnPGgyPlZhbHVhdGlvbjwvaDI+e2V4cHJlc3Npb24vcHJvcGVydHktdmFsdWVzfScgK1xuICAgICAgICAgICc8aDI+U2FsZSBJbmZvcm1hdGlvbjwvaDI+e1RPVFNBTFBSSUNFfTxici8+e1NBTEVfREFURX0nICtcbiAgICAgICAgICAnPGgyPkRlZWRzPC9oMj57ZXhwcmVzc2lvbi9kZWVkLWJvb2stcGFnZX0nICtcbiAgICAgICAgICAnPGJyLz48c3Ryb25nPkRlZWQgRGF0ZTwvc3Ryb25nPjxici8+e0RFRURfREFURX08YnIvPicgK1xuICAgICAgICAgICc8YnIvPkxlZ2FsIERlc2NyaXB0aW9uPGJyLz57UFJPUERFU0N9PGJyLz4nICtcbiAgICAgICAgICAnPGEgaHJlZj1cImh0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9ib29rc3dlYi9wZGZ2aWV3LmFzcHg/ZG9jaWQ9e2V4cHJlc3Npb24vYm9tLWRvYy1udW19JlJlY29yZERhdGU9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+Qm9vayBvZiBNYXBzPC9hPjxici8+PGEgaHJlZj1cImh0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9ib29rc3dlYi9wZGZ2aWV3LmFzcHg/ZG9jaWQ9e2V4cHJlc3Npb24vZGVlZC1kb2MtbnVtfSZSZWNvcmREYXRlPVwiIHRhcmdldD1cIl9ibGFua1wiPkRlZWQ8L2E+J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ21lZGlhJyxcbiAgICAgICAgbWVkaWFJbmZvczogW11cbiAgICAgIH1cbiAgICBdXG4gIH0pO1xuXG4gIHNlYXJjaEJ5R2VvbWV0cnkoZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnkpIHtcbiAgICB0aGlzLnByb3BlcnR5TGF5ZXJcbiAgICAgIC5xdWVyeUZlYXR1cmVzKHsgZ2VvbWV0cnk6IGdlb21ldHJ5LCByZXR1cm5HZW9tZXRyeTogdHJ1ZSwgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSB9KVxuICAgICAgLnRoZW4ocHJvcGVydHlSZXN1bHQgPT4ge1xuICAgICAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLnByb3BlcnR5TGF5ZXIucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdQUk9QRVJUWV9DT05ETyc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUxheWVyXG4gICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBsZXQgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQocmVzdWx0W2tleV0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCBmZWF0dXJlcyk7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGlmICghZmVhdHVyZXNbMF0uZ2VvbWV0cnkpIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlc1swXS5nZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZShmZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIFtmZWF0dXJlc1swXS5nZXRPYmplY3RJZCgpXSk7XG4gICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUucmVuZGVyTm93KCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgcHJvcGVydHlSZXN1bHQuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICAgIGZlYXR1cmUuc3ltYm9sID1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxID8gKHRoaXMubXVsdGlTeW1ib2wgYXMgYW55KSA6ICh0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnkpO1xuXG4gICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGZlYXR1cmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyID0gKGZpZWxkczogZXNyaS5GaWVsZFtdLCBmZWF0dXJlczogZXNyaS5HcmFwaGljW10pID0+IHtcbiAgICByZXR1cm4gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICAgIHNvdXJjZTogZmVhdHVyZXMsXG4gICAgICB0aXRsZTogJ1NlbGVjdGVkIHByb3BlcnRpZXMnLFxuICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJyxcbiAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHRoaXMudmlldy5zcGF0aWFsUmVmZXJlbmNlXG4gICAgfSk7XG4gIH07XG4gIGFkZEdyYXBoaWNzID0gKHJlc3VsdDogZXNyaS5GZWF0dXJlU2V0KSA9PiB7XG4gICAgdGhpcy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcbiAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgIGZlYXR1cmUuc3ltYm9sID0gcmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA+IDEgPyAodGhpcy5tdWx0aVN5bWJvbCBhcyBhbnkpIDogKHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueSk7XG4gICAgICB0aGlzLmdyYXBoaWNzLmFkZChmZWF0dXJlKTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRQcm9wZXJ0eSA9IChvaWRzOiBhbnlbXSwgc291cmNlPzogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVsYXRpb25zaGlwID0gdGhpcy5jb25kb3NUYWJsZS5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICByZXR1cm4gci5uYW1lID09PSAnQ09ORE9fUFJPUEVSVFknO1xuICAgIH0pO1xuICAgIHRoaXMuY29uZG9zVGFibGVcbiAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7XG4gICAgICAgIHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXA/LmlkLFxuICAgICAgICBvYmplY3RJZHM6IG9pZHMsXG4gICAgICAgIG91dEZpZWxkczogWydPQkpFQ1RJRCcsICdSRUlEJ10sXG4gICAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BlcnR5TGF5ZXJcbiAgICAgICAgICAucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICBvYmplY3RJZHM6IG9pZHMsXG4gICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWUsXG4gICAgICAgICAgICBvdXRTcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmdvVG8ocmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkR3JhcGhpY3MocmVzdWx0KTtcbiAgICAgICAgICAgICAgY29uc3QgcG9pbnRzOiBHcmFwaGljW10gPSBbXTtcbiAgICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHQgPSBmZWF0dXJlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgcHQuZ2VvbWV0cnkgPSAocHQuZ2VvbWV0cnkgYXMgZXNyaS5Qb2x5Z29uKS5jZW50cm9pZDtcbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaChwdCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmNsdXN0ZXJQb2ludHNcbiAgICAgICAgICAgICAgICAucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiAnMT0xJywgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLCBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnXSB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNsdXN0ZXJQb2ludHMuYXBwbHlFZGl0cyh7IGRlbGV0ZUZlYXR1cmVzOiByZXN1bHQuZmVhdHVyZXMgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2x1c3RlclBvaW50cy5hcHBseUVkaXRzKHsgYWRkRmVhdHVyZXM6IHBvaW50cyB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsdXN0ZXJQb2ludHMucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgc2VhcmNoQ29tcGxldGUgPSAoZXZlbnQ6IGVzcmkuU2VhcmNoU2VhcmNoQ29tcGxldGVFdmVudCkgPT4ge1xuICAgIGlmICghdGhpcy5zZWFyY2hXaWRnZXQudmlld01vZGVsLnNlbGVjdGVkU3VnZ2VzdGlvbikge1xuICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgbGV0IHdoZXJlID0gJyc7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIGlmICghdGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlKSB7XG4gICAgICAgIHdoZXJlID1cbiAgICAgICAgICBcIk9XTkVSIGxpa2UgJ1wiICtcbiAgICAgICAgICBldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgIFwiJScgT1IgUkVJRCBsaWtlICdcIiArXG4gICAgICAgICAgZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICBcIiUnIE9SIFBJTl9OVU0gbGlrZSAnXCIgK1xuICAgICAgICAgIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgXCIlJ1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCh0aGlzLnNlYXJjaFdpZGdldC5hY3RpdmVTb3VyY2UgYXMgYW55KT8uc2VhcmNoRmllbGRzLmluY2x1ZGVzKCdPV05FUicpKSB7XG4gICAgICAgICAgd2hlcmUgPSBcIk9XTkVSIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ1BJTl9OVU0nKSkge1xuICAgICAgICAgIHdoZXJlID0gXCJQSU5fTlVNIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ1JFSUQnKSkge1xuICAgICAgICAgIHdoZXJlID0gXCJSRUlEIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdGFibGVGZWF0dXJlczogYW55W10gPSBbXTtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgdGhpcy5jb25kb3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6IHdoZXJlLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGFibGVGZWF0dXJlcyA9IHJlc3VsdC5mZWF0dXJlcztcbiAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIHx8XG4gICAgICAgICAgKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ0FERFJFU1MnKVxuICAgICAgICApIHtcbiAgICAgICAgICB3aGVyZSA9IFwiQUREUkVTUyBsaWtlICclXCIgKyBldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkgKyBcIiUnXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2hlcmUgPSAnQUREUkVTUyBJUyBOVUxMJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogd2hlcmUsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuYWRkcmVzc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdBRERSRVNTRVNfQ09ORE8nO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGFkZHJPaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgYWRkck9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgJiYgYWRkck9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZVxuICAgICAgICAgICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwLmlkLCBvYmplY3RJZHM6IGFkZHJPaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVGZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgdGFibGVGZWF0dXJlcyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLnJlbmRlck5vdygpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgdGFibGVGZWF0dXJlcyk7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5yZW5kZXJOb3coKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChldmVudC5udW1SZXN1bHRzKSB7XG4gICAgICAgIGNvbnN0IGxheWVyID0gKGV2ZW50LnJlc3VsdHNbMF0uc291cmNlIGFzIExheWVyU2VhcmNoU291cmNlKS5sYXllciBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIGV2ZW50LnJlc3VsdHNbMF0ucmVzdWx0cy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChyLmZlYXR1cmUuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGF5ZXIubGF5ZXJJZCA9PT0gNCkge1xuICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IGxheWVyLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdBRERSRVNTRVNfQ09ORE8nO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgJiYgb2lkcykge1xuICAgICAgICAgICAgbGF5ZXJcbiAgICAgICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcC5pZCwgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlLmxheWVyID0gdGhpcy5jb25kb3NUYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKGZlYXR1cmUsIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsIFtdLCBvaWRzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgW2ZlYXR1cmVdKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29uZG9zVGFibGUucXVlcnlGZWF0dXJlcyh7IG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKHJlc3VsdC5mZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IHRoaXMuY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIodGhpcy5jb25kb3NUYWJsZS5maWVsZHMsIHJlc3VsdC5mZWF0dXJlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHNldEZlYXR1cmUoZmVhdHVyZTogZXNyaS5HcmFwaGljLCB2aWV3OiBlc3JpLk1hcFZpZXcsIG1lZGlhSW5mb3M6IGFueVtdLCBvaWRzOiBhbnlbXSkge1xuICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuY29uZG9zVGFibGUucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0NPTkRPX1BIT1RPUyc7XG4gICAgfSk7XG4gICAgbWVkaWFJbmZvcyA9IFtdO1xuICAgIHRoaXMuY29uZG9zVGFibGVcbiAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXA/LmlkLCBvYmplY3RJZHM6IG9pZHMsIG91dEZpZWxkczogWycqJ10gfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgbWVkaWFJbmZvcy5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgICBjYXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBzb3VyY2VVUkw6XG4gICAgICAgICAgICAgICAgICAnaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL3JlYWxlc3RhdGUvcGhvdG9zL212aWRlby8nICtcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdJTUFHRURJUicpICtcbiAgICAgICAgICAgICAgICAgICcvJyArXG4gICAgICAgICAgICAgICAgICBmZWF0dXJlLmdldEF0dHJpYnV0ZSgnSU1BR0VOQU1FJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25kb3NUYWJsZS5wb3B1cFRlbXBsYXRlLmNvbnRlbnRbMV0ubWVkaWFJbmZvcyA9IG1lZGlhSW5mb3M7XG4gICAgICAgIGZlYXR1cmUubGF5ZXIgPSB0aGlzLmNvbmRvc1RhYmxlO1xuICAgICAgICBmZWF0dXJlLnBvcHVwVGVtcGxhdGUgPSAoZmVhdHVyZS5sYXllciBhcyBlc3JpLkZlYXR1cmVMYXllcikucG9wdXBUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBmZWF0dXJlO1xuICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYy5zeW1ib2wgPSB0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5ncmFwaGljcy5ncmFwaGljcy5maW5kKGdyYXBoaWMgPT4ge1xuICAgICAgICAgIHJldHVybiBncmFwaGljLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSA9PT0gJ3RydWUnO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgc2VsZWN0ZWQuc3ltYm9sID0gdGhpcy5tdWx0aVN5bWJvbCBhcyBhbnk7XG4gICAgICAgICAgc2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWMgPSB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLmZpbmQoZ3JhcGhpYyA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdSRUlEJykgPT09IGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdSRUlEJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZ3JhcGhpYykge1xuICAgICAgICAgIGdyYXBoaWMuc3ltYm9sID0gdGhpcy5zaW5nbGVTeW1ib2wgYXMgYW55O1xuICAgICAgICAgIGdyYXBoaWMuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgICAgdGhpcy5ncmFwaGljcy5ncmFwaGljcy5yZW9yZGVyKGdyYXBoaWMsIHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIGV4cG9ydFRhYmxlKCkge1xuICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyLnF1ZXJ5RmVhdHVyZXMoeyBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGxldCBjc3YgPSAnJztcbiAgICAgIHJlc3VsdC5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGNzdiArPSBmaWVsZC5hbGlhcyArICcsJztcbiAgICAgIH0pO1xuICAgICAgY3N2ICs9ICdcXHJcXG4nO1xuICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZlYXR1cmUuYXR0cmlidXRlcykge1xuICAgICAgICAgIGlmIChrZXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZGF0ZScpKSB7XG4gICAgICAgICAgICBjc3YgKz0gJ1wiJyArIG5ldyBEYXRlKGZlYXR1cmUuYXR0cmlidXRlc1trZXldKS50b0RhdGVTdHJpbmcoKSArICdcIiwnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoa2V5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2FjcmVzJykpIHtcbiAgICAgICAgICAgIGNzdiArPSAnXCInICsgcGFyc2VGbG9hdChmZWF0dXJlLmF0dHJpYnV0ZXNba2V5XSkudG9GaXhlZCgyKSArICdcIiwnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc3YgKz0gJ1wiJyArIGZlYXR1cmUuYXR0cmlidXRlc1trZXldICsgJ1wiLCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNzdiArPSAnXFxyXFxuJztcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZXhwb3J0ZWRGaWxlbm1hZSA9ICdpbWFwc19leHBvcnQuY3N2JztcblxuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjc3ZdLCB7IHR5cGU6ICd0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04OycgfSk7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgaWYgKGxpbmsuZG93bmxvYWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBmZWF0dXJlIGRldGVjdGlvblxuICAgICAgICAvLyBCcm93c2VycyB0aGF0IHN1cHBvcnQgSFRNTDUgZG93bmxvYWQgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZXhwb3J0ZWRGaWxlbm1hZSk7XG4gICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNzLCB2aWV3Lm1hcC5hbGxMYXllcnMubGVuZ3RoIC0gMSk7XG4gICAgdGhpcy5jbHVzdGVyUG9pbnRzID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICBzb3VyY2U6IFtdLFxuICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJyxcbiAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgIG1heFNjYWxlOiAxOTIwMSxcbiAgICAgIGxpc3RNb2RlOiAnaGlkZScsXG4gICAgICByZW5kZXJlcjoge1xuICAgICAgICB0eXBlOiAnc2ltcGxlJyxcbiAgICAgICAgc3ltYm9sOiB7XG4gICAgICAgICAgdHlwZTogJ3NpbXBsZS1tYXJrZXInLFxuICAgICAgICAgIHNpemU6IDQsXG4gICAgICAgICAgY29sb3I6ICcjNjlkY2ZmJyxcbiAgICAgICAgICBvdXRsaW5lOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwgMTM5LCAxNzQsIDAuNSknLFxuICAgICAgICAgICAgd2lkdGg6IDVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gYXMgYW55LFxuICAgICAgZmVhdHVyZVJlZHVjdGlvbjoge1xuICAgICAgICB0eXBlOiAnY2x1c3RlcicsXG4gICAgICAgIGxhYmVsaW5nSW5mbzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIHR1cm4gb2ZmIGRlY29uZmxpY3Rpb24gdG8gZW5zdXJlIGFsbCBjbHVzdGVycyBhcmUgbGFiZWxlZFxuICAgICAgICAgICAgZGVjb25mbGljdGlvblN0cmF0ZWd5OiAnbm9uZScsXG4gICAgICAgICAgICBsYWJlbEV4cHJlc3Npb25JbmZvOiB7XG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiVGV4dCgkZmVhdHVyZS5jbHVzdGVyX2NvdW50LCAnIywjIyMnKVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3ltYm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDA0YTVkJyxcbiAgICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICAgIHdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgICAgIGZhbWlseTogJ05vdG8gU2FucycsXG4gICAgICAgICAgICAgICAgc2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gYXMgYW55LFxuICAgICAgICAgICAgbGFiZWxQbGFjZW1lbnQ6ICdjZW50ZXItY2VudGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHRoaXMudmlldy5zcGF0aWFsUmVmZXJlbmNlXG4gICAgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC5hZGQodGhpcy5jbHVzdGVyUG9pbnRzKTtcbiAgfVxuICBpbml0U2VhcmNoKGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcikge1xuICAgIGNvbnN0IHRhYmxlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgIGZpZWxkczogW1xuICAgICAgICB7IG5hbWU6ICdTSVRFX0FERFJFU1MnLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdBZGRyZXNzJyB9LFxuICAgICAgICB7IG5hbWU6ICdPV05FUicsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ093bmVyJyB9LFxuICAgICAgICB7IG5hbWU6ICdQSU5fTlVNJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnUElOJyB9LFxuICAgICAgICB7IG5hbWU6ICdSRUlEJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnUkVJRCcgfVxuICAgICAgXSxcbiAgICAgIHNvdXJjZTogW10sXG4gICAgICB0aXRsZTogJ1NlbGVjdGVkIHByb3BlcnRpZXMnLFxuICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJyxcbiAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHRoaXMudmlldy5zcGF0aWFsUmVmZXJlbmNlXG4gICAgfSk7XG4gICAgdGhpcy5mZWF0dXJlID0gbmV3IEZlYXR1cmUoeyB2aWV3OiB0aGlzLnZpZXcgfSk7XG4gICAgdGhpcy5mZWF0dXJlVGFibGUgPSBuZXcgRmVhdHVyZVRhYmxlKHtcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIGxheWVyOiB0YWJsZUxheWVyLFxuICAgICAgZmllbGRDb25maWdzOiBbXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1NJVEVfQUREUkVTUycsXG4gICAgICAgICAgbGFiZWw6ICdBZGRyZXNzJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ09XTkVSJyxcbiAgICAgICAgICBsYWJlbDogJ093bmVyJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1BJTl9OVU0nLFxuICAgICAgICAgIGxhYmVsOiAnUElOJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1JFSUQnLFxuICAgICAgICAgIGxhYmVsOiAnUkVJRCcsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgbWVudUNvbmZpZzoge1xuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICh7XG4gICAgICAgICAgICBsYWJlbDogJ0V4cG9ydCdcbiAgICAgICAgICB9IGFzIHVua25vd24pIGFzIE1lbnVCdXR0b25JdGVtXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBidXR0b246IE1lbnVCdXR0b25JdGVtID0gdGhpcy5mZWF0dXJlVGFibGU/Lm1lbnVDb25maWc/Lml0ZW1zPy5maW5kKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0ubGFiZWwgPT09ICdFeHBvcnQnO1xuICAgIH0pIGFzIE1lbnVCdXR0b25JdGVtO1xuICAgIGJ1dHRvbi5jbGlja0Z1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgdGhpcy5leHBvcnRUYWJsZSgpO1xuICAgIH07XG4gICAgYnV0dG9uLmNsaWNrRnVuY3Rpb24uYmluZCh0aGlzLmZlYXR1cmVUYWJsZSk7XG5cbiAgICB0aGlzLmZlYXR1cmVUYWJsZS5vbignc2VsZWN0aW9uLWNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICh0aGlzLmZlYXR1cmVUYWJsZSBhcyBhbnkpLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICBpZiAoZXZlbnQuYWRkZWQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZ2V0UHJvcGVydHkoW2V2ZW50LmFkZGVkWzBdLmZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpXSwgJ3RhYmxlJyk7XG4gICAgICAgIHRoaXMuc2V0RmVhdHVyZShcbiAgICAgICAgICBldmVudC5hZGRlZFswXS5mZWF0dXJlLFxuICAgICAgICAgIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsXG4gICAgICAgICAgW10sXG4gICAgICAgICAgW2V2ZW50LmFkZGVkWzBdLmZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpXVxuICAgICAgICApO1xuICAgICAgICBldmVudC5hZGRlZFswXS5mZWF0dXJlLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xuICAgICAgYWxsUGxhY2Vob2xkZXI6ICdBZGRyZXNzLCBvd25lciwgUElOLCBvciBSRUlEJyxcbiAgICAgIGluY2x1ZGVEZWZhdWx0U291cmNlczogZmFsc2UsXG4gICAgICBjb250YWluZXI6ICdzZWFyY2gnLFxuICAgICAgc291cmNlczogW1xuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiB0aGlzLmFkZHJlc3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnQUREUkVTUyddLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ0FERFJFU1MnLFxuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgIG91dEZpZWxkczogWydBRERSRVNTJywgJ1JFQV9SRUlEJ10sXG4gICAgICAgICAgbmFtZTogJ1NpdGUgQWRkcmVzcycsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiAyMjIgVyBIQVJHRVRUJ1xuICAgICAgICB9KSxcbiAgICAgICAgbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgICAgc2VhcmNoRmllbGRzOiBbJ09XTkVSJ10sXG4gICAgICAgICAgZGlzcGxheUZpZWxkOiAnT1dORVInLFxuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgIG91dEZpZWxkczogWydPV05FUicsICdSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgICAgbmFtZTogJ093bmVyJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IFNNSVRILCBKT0hOJ1xuICAgICAgICB9KSxcbiAgICAgICAgbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgICAgc2VhcmNoRmllbGRzOiBbJ1BJTl9OVU0nXSxcbiAgICAgICAgICBkaXNwbGF5RmllbGQ6ICdQSU5fTlVNJyxcbiAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnUElOX05VTScsICdSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgICAgbmFtZTogJ1BJTicsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiAwNzEyMzQ1Njc4J1xuICAgICAgICB9KSxcbiAgICAgICAgbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgICAgc2VhcmNoRmllbGRzOiBbJ1JFSUQnXSxcbiAgICAgICAgICBkaXNwbGF5RmllbGQ6ICdSRUlEJyxcbiAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnUkVJRCcsICdPQkpFQ1RJRCddLFxuICAgICAgICAgIG5hbWU6ICdSRUlEJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDAxMjM0NTYnXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hXaWRnZXQudmlld01vZGVsLndhdGNoKCdyZXN1bHRzJywgZXZlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VhcmNoV2lkZ2V0Lm9uKCdzZWFyY2gtY29tcGxldGUnLCB0aGlzLnNlYXJjaENvbXBsZXRlKTtcbiAgfVxuICB0b2dnbGVDb250ZW50ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgPT09ICd0YWJsZScpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZUl0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZUl0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5pbXBvcnQgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgZnJvbSAnLi9Qcm9wZXJ0eVNlYXJjaC9Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCc7XG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5U2VhcmNoUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgcHJvcGVydHlMYXllcj86IGVzcmkuRmVhdHVyZUxheWVyO1xuICBjb25kb3NUYWJsZT86IGVzcmkuRmVhdHVyZUxheWVyO1xuICBhZGRyZXNzVGFibGU/OiBlc3JpLkZlYXR1cmVMYXllcjtcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgcHJvcGVydHlzZWFyY2gtYmFzZSdcbn07XG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLlByb3BlcnR5U2VhcmNoJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnR5U2VhcmNoIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuY29uZG9zVGFibGUnKVxuICBjb25kb3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYWRkcmVzc1RhYmxlJylcbiAgYWRkcmVzc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5wcm9wZXJ0eUxheWVyJylcbiAgcHJvcGVydHlMYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuc2VhcmNoV2lkZ2V0JylcbiAgc2VhcmNoV2lkZ2V0OiBlc3JpLndpZGdldHNTZWFyY2g7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZmVhdHVyZVRhYmxlJylcbiAgZmVhdHVyZVRhYmxlOiBlc3JpLkZlYXR1cmVUYWJsZTtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5mZWF0dXJlJylcbiAgZmVhdHVyZTogZXNyaS5GZWF0dXJlO1xuICBAYWxpYXNPZigndmlld01vZGVsLmdlb21ldHJ5JylcbiAgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgPSBuZXcgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogUHJvcGVydHlTZWFyY2hQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfY3JlYXRlU2VhcmNoID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNlYXJjaFdpZGdldCkge1xuICAgICAgdGhpcy5zZWFyY2hXaWRnZXQuY29udGFpbmVyID0gJ3NlYXJjaCc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlVGFibGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZVRhYmxlKSB7XG4gICAgICB0aGlzLmZlYXR1cmVUYWJsZS5jb250YWluZXIgPSAndGFibGUnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZUZlYXR1cmUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZSkge1xuICAgICAgdGhpcy5mZWF0dXJlLmNvbnRhaW5lciA9ICdmZWF0dXJlRGl2JztcbiAgICB9XG4gIH07XG5cbiAgY3VycmVudFJhZGlvQnV0dG9uID0gJ2xpc3QnO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaWRlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUmFkaW9Hcm91cEl0ZW1DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgIC8vIGNhbiBJIGdldCBjaGVja2VkIGFuZCB2YWx1ZSBsaWtlIHRoaXM/XG4gICAgICAgIGlmIChlLnRhcmdldD8uY2hlY2tlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgICAgdGhpcy52aWV3TW9kZWwudG9nZ2xlQ29udGVudChlLnRhcmdldD8udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZVNlYXJjaH0gaWQ9XCJzZWFyY2hcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlVGFibGV9IGlkPVwidGFibGVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImZlYXR1cmVcIiBjbGFzcz1cImhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJmZWF0dXJlRGl2XCIgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUZlYXR1cmV9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdmFsdWU9XCJ0YWJsZVwiIGlkPVwidGFibGVJdGVtXCI+XG4gICAgICAgICAgICBMaXN0XG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB2YWx1ZT1cImZlYXR1cmVcIiBpZD1cImZlYXR1cmVJdGVtXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICBEZXRhaWxzXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IE1lYXN1cmVtZW50IGZyb20gJ2Vzcmkvd2lkZ2V0cy9NZWFzdXJlbWVudCc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTWVhc3VyZS5NZWFzdXJlVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmVWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG4gIG1lYXN1cmVtZW50OiBlc3JpLk1lYXN1cmVtZW50O1xuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gIH1cbiAgbWVhc3VyZU9wZW5lZCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVhc3VyZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwJykgYXMgYW55KS5zZWxlY3RlZEl0ZW0udGl0bGU7XG4gICAgaWYgKHNlbGVjdGVkICE9ICdjbGVhcicpIHtcbiAgICAgIHRoaXMubWVhc3VyZW1lbnQuYWN0aXZlVG9vbCA9IHNlbGVjdGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lYXN1cmVtZW50LmNsZWFyKCk7XG4gICAgfVxuICB9XG4gIGluaXRNZWFzdXJlKCkge1xuICAgIHRoaXMubWVhc3VyZW1lbnQgPSBuZXcgTWVhc3VyZW1lbnQoeyB2aWV3OiB0aGlzLnZpZXcsIGNvbnRhaW5lcjogJ21lYXN1cmVXaWRnZXQnIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBNZWFzdXJlVmlld01vZGVsIGZyb20gJy4vTWVhc3VyZS9NZWFzdXJlVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBNZWFzdXJlUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbWVhc3VyZS1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5NZWFzdXJlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmUgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5tZWFzdXJlbWVudCcpXG4gIG1lYXN1cmVtZW50OiBlc3JpLk1lYXN1cmVtZW50O1xuICBAYWxpYXNPZigndmlld01vZGVsLmluaXRNZWFzdXJlJylcbiAgaW5pdE1lYXN1cmU6IEZ1bmN0aW9uO1xuICBAYWxpYXNPZigndmlld01vZGVsLm1lYXN1cmVPcGVuZWQnKVxuICBtZWFzdXJlT3BlbmVkOiBGdW5jdGlvbjtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IE1lYXN1cmVWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IE1lYXN1cmVWaWV3TW9kZWwgPSBuZXcgTWVhc3VyZVZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBNZWFzdXJlUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX21lYXN1cmVDcmVhdGVkID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdE1lYXN1cmUoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVhc3VyZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQ/LmNoZWNrZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldD8udGl0bGUpO1xuICAgICAgICAgIGlmIChlLnRhcmdldD8udGl0bGUgPT09ICdjbGVhcicpIHtcbiAgICAgICAgICAgIHRoaXMubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudC5hY3RpdmVUb29sID0gZS50YXJnZXQ/LnRpdGxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSBjaGVja2VkIHRpdGxlPVwiZGlzdGFuY2VcIiB2YWx1ZT1cImRpc3RhbmNlXCIgaWQ9XCJ0YWJsZUl0ZW1cIiBpY29uPVwibWVhc3VyZVwiPlxuICAgICAgICAgICAgTGluZVxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdGl0bGU9XCJhcmVhXCIgdmFsdWU9XCJhcmVhXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGljb249XCJtZWFzdXJlLWFyZWFcIj5cbiAgICAgICAgICAgIEFyZWFcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHRpdGxlPVwiY2xlYXJcIiB2YWx1ZT1cImNsZWFyXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGljb249XCJ0cmFzaFwiPlxuICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9tZWFzdXJlQ3JlYXRlZH0gaWQ9XCJtZWFzdXJlV2lkZ2V0XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgUG9wdXBUZW1wbGF0ZSBmcm9tICdlc3JpL1BvcHVwVGVtcGxhdGUnO1xuaW1wb3J0IEV4cHJlc3Npb25JbmZvIGZyb20gJ2VzcmkvcG9wdXAvRXhwcmVzc2lvbkluZm8nO1xuXG5jb25zdCBhcmNhZGVFeHByZXNzaW9uSW5mb3MgPSBbXG4gIHtcbiAgICBuYW1lOiAnYm9tLWRvYy1udW0nLFxuICAgIHRpdGxlOiAnYm9tLWRvYy1udW0nLFxuICAgIGV4cHJlc3Npb246XG4gICAgICBcInZhciByZXN1bHRzID0gRmVhdHVyZVNldEJ5UmVsYXRpb25zaGlwTmFtZSgkZmVhdHVyZSwgJ0NPTkRPX0JPT0tTJywgWycqJ10sIGZhbHNlKTsgcmV0dXJuIEZpcnN0KHJlc3VsdHMpLkJPTV9ET0NfTlVNO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZGVlZC1kb2MtbnVtJyxcbiAgICB0aXRsZTogJ2RlZWQtZG9jLW51bScsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgIFwidmFyIHJlc3VsdHMgPSBGZWF0dXJlU2V0QnlSZWxhdGlvbnNoaXBOYW1lKCRmZWF0dXJlLCAnQ09ORE9fQk9PS1MnLCBbJyonXSwgZmFsc2UpOyByZXR1cm4gRmlyc3QocmVzdWx0cykuREVFRF9ET0NfTlVNO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICB0aXRsZTogJ21haWxpbmctYWRkcmVzcycsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdXaGVuKElzRW1wdHkoJGZlYXR1cmUuQUREUjMpLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIzKSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgIHRpdGxlOiAncHJvcGVydHktdmFsdWVzJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1wiQnVpbGRpbmcgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkJMREdfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJMYW5kIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5MQU5EX1ZBTCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG90YWwgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLlRPVEFMX1ZBTFVFX0FTU0QnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZGVlZC1ib29rLXBhZ2UnLFxuICAgIHRpdGxlOiAnZGVlZC1ib29rLXBhZ2UnLFxuICAgIGV4cHJlc3Npb246ICdcIkJvb2sgXCIrJGZlYXR1cmUuREVFRF9CT09LK1wiIFBhZ2UgXCIrJGZlYXR1cmUuREVFRF9QQUdFJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2dlbmVyYWwnLFxuICAgIHRpdGxlOiAnZ2VuZXJhbCcsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdcIlBJTlwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJGZlYXR1cmUuUElOX05VTStcIiBcIiskZmVhdHVyZS5QSU5fRVhUK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAnXCJSRUlEXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5SRUlEK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJDaXR5XCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICdQcm9wZXIoJGZlYXR1cmUuQ0lUWV9ERUNPREUpK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJKdXJpc2RpY3Rpb25cIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgJyRmZWF0dXJlLlBMQU5OSU5HX0pVUklTRElDVElPTitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG93bnNoaXBcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1Byb3BlcigkZmVhdHVyZS5UT1dOU0hJUF9ERUNPREUpJ1xuICB9XG5dIGFzIEV4cHJlc3Npb25JbmZvW107XG5cbmNvbnN0IHBvcHVwVGVtcGxhdGUgPSBuZXcgUG9wdXBUZW1wbGF0ZSh7XG4gIGV4cHJlc3Npb25JbmZvczogYXJjYWRlRXhwcmVzc2lvbkluZm9zLFxuICAvLyBjb250ZW50OiAoZXZlbnQ6IGFueSkgPT4ge1xuICAvLyAgIGNvbnN0IGdyYXBoaWMgPSBldmVudC5ncmFwaGljO1xuICAvLyAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWdyZWVuJyk7XG4gIC8vICAgY29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAvLyAgIGRpdi50ZXh0Q29udGVudCA9IGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdTSVRFX0FERFJFU1MnKTtcbiAgLy8gICByZXR1cm4gY29udGFpbmVyO1xuICAvLyB9LFxuICBjb250ZW50OiBbXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDpcbiAgICAgICAgJzxoMSBjbGFzcz1cInRleHQtZ3JlZW5cIj57U0lURV9BRERSRVNTfTwvaDE+JyArXG4gICAgICAgICc8aDI+R2VuZXJhbDwvaDI+e2V4cHJlc3Npb24vZ2VuZXJhbH0nICtcbiAgICAgICAgJzxoMj5Pd25lcjwvaDI+e09XTkVSfTxici8+e2V4cHJlc3Npb24vbWFpbGluZy1hZGRyZXNzfScgK1xuICAgICAgICAnPGgyPlZhbHVhdGlvbjwvaDI+e2V4cHJlc3Npb24vcHJvcGVydHktdmFsdWVzfScgK1xuICAgICAgICAnPGgyPlNhbGUgSW5mb3JtYXRpb248L2gyPntUT1RTQUxQUklDRX08YnIvPntTQUxFX0RBVEV9JyArXG4gICAgICAgICc8aDI+RGVlZHM8L2gyPntleHByZXNzaW9uL2RlZWQtYm9vay1wYWdlfScgK1xuICAgICAgICAnPGJyLz48c3Ryb25nPkRlZWQgRGF0ZTwvc3Ryb25nPjxici8+e0RFRURfREFURX08YnIvPicgK1xuICAgICAgICAnPGJyLz5MZWdhbCBEZXNjcmlwdGlvbjxici8+e1BST1BERVNDfTxici8+JyArXG4gICAgICAgICc8YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9ib20tZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Cb29rIG9mIE1hcHM8L2E+PGJyLz48YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9kZWVkLWRvYy1udW19JlJlY29yZERhdGU9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGVlZDwvYT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnbWVkaWEnLFxuICAgICAgbWVkaWFJbmZvczogW11cbiAgICB9XG4gIF1cbn0pO1xuXG5leHBvcnQgY29uc3QgZmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gIHBvcnRhbEl0ZW06IHtcbiAgICBpZDogJzA4MDUwYmYwNjdiYjRiMjBhZGVhNGIwYjRmMGEzOWUzJ1xuICB9LFxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9XG59KTtcblxuZXhwb3J0IGNvbnN0IGNvbmRvc1RhYmxlID0gbmV3IEZlYXR1cmVMYXllcih7XG4gIHBvcnRhbEl0ZW06IHtcbiAgICBpZDogJzA4MDUwYmYwNjdiYjRiMjBhZGVhNGIwYjRmMGEzOWUzJ1xuICB9LFxuICBsYXllcklkOiAxLFxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9LFxuICBwb3B1cFRlbXBsYXRlOiBwb3B1cFRlbXBsYXRlXG59KTtcbmNvbmRvc1RhYmxlLmxvYWQoKTtcbmV4cG9ydCBjb25zdCBhZGRyZXNzVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnMDgwNTBiZjA2N2JiNGIyMGFkZWE0YjBiNGYwYTM5ZTMnXG4gIH0sXG4gIGxheWVySWQ6IDQsXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbn0pO1xuYWRkcmVzc1RhYmxlLmxvYWQoKTtcbmV4cG9ydCAqIGZyb20gJy4vYXBwJztcbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbmltcG9ydCBTa2V0Y2ggZnJvbSAnZXNyaS93aWRnZXRzL1NrZXRjaCc7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJztcbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XG5pbXBvcnQgVGV4dFN5bWJvbCBmcm9tICdlc3JpL3N5bWJvbHMvVGV4dFN5bWJvbCc7XG5cbmltcG9ydCBDb2xvciBmcm9tICdlc3JpL0NvbG9yJztcbmltcG9ydCB7IG1lYXN1cmVtZW50IH0gZnJvbSAnLi4vLi4vd2lkZ2V0cyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuRHJhdy5EcmF3Vmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBjb250YWluZXI6IHN0cmluZztcbiAgc2tldGNoOiBTa2V0Y2g7XG4gIGdyYXBoaWNzOiBHcmFwaGljc0xheWVyO1xuICBsYWJlbDogc3RyaW5nO1xuICB0ZXh0Q29sb3I6IGVzcmkuQ29sb3I7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdERyYXcoKSB7XG4gICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJyB9KTtcbiAgICB0aGlzLnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNzKTtcblxuICAgIHRoaXMuc2tldGNoID0gbmV3IFNrZXRjaCh7IHZpZXc6IHRoaXMudmlldywgY29udGFpbmVyOiAnc2tldGNoRGl2JywgbGF5ZXI6IHRoaXMuZ3JhcGhpY3MsIGNyZWF0aW9uTW9kZTogJ3NpbmdsZScgfSk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuICAgICh0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wgYXMgYW55KS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sLmNvbG9yID0gbmV3IENvbG9yKFtbMjU1LCAwLCAwLCAwLjVdXSk7XG4gICAgKHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sIGFzIGFueSkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9seWxpbmVTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG5cbiAgICB0aGlzLnNrZXRjaC53YXRjaCgnYWN0aXZlVG9vbCcsIHRvb2wgPT4ge1xuICAgICAgaWYgKHRvb2wgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNrZXRjaC5vbignY3JlYXRlJywgZSA9PiB7XG4gICAgICBpZiAoZS5zdGF0ZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICBtZWFzdXJlbWVudD8ubWVhc3VyZW1lbnQ/LmNsZWFyKCk7XG4gICAgICB9XG4gICAgICBpZiAoZS5zdGF0ZSA9PT0gJ2NvbXBsZXRlJyAmJiB0aGlzLmxhYmVsPy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGxhYmVsUG9pbnQ6IGVzcmkuR2VvbWV0cnkgPSBlLmdyYXBoaWMuZ2VvbWV0cnk7XG4gICAgICAgIGlmIChlLmdyYXBoaWMuZ2VvbWV0cnkudHlwZSA9PT0gJ3BvbHlnb24nKSB7XG4gICAgICAgICAgbGFiZWxQb2ludCA9IChlLmdyYXBoaWMuZ2VvbWV0cnkgYXMgZXNyaS5Qb2x5Z29uKS5jZW50cm9pZDtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc3QgZyA9IG5ldyBHcmFwaGljKHtcbiAgICAgICAgICBnZW9tZXRyeTogbGFiZWxQb2ludCxcbiAgICAgICAgICBzeW1ib2w6IG5ldyBUZXh0U3ltYm9sKHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMubGFiZWwsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgICAgICBoYWxvQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBoYWxvU2l6ZTogMSxcbiAgICAgICAgICAgIHhvZmZzZXQ6ICc1cHgnLFxuICAgICAgICAgICAgeW9mZnNldDogJzVweCcsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAncmlnaHQnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IERyYXdWaWV3TW9kZWwgZnJvbSAnLi9EcmF3L0RyYXdWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBkcmF3LWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkRyYXcnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxhYmVsJylcbiAgbGFiZWw6IHN0cmluZztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC50ZXh0Q29sb3InKVxuICB0ZXh0Q29sb3I6IENvbG9yO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IERyYXdWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IERyYXdWaWV3TW9kZWwgPSBuZXcgRHJhd1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBEcmF3UHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX2RyYXdVcGRhdGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy52aWV3TW9kZWwuc2tldGNoKSB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5pbml0RHJhdygpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxsJyk7XG4gICAgZmlsbD8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgZmlsbD8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgfSk7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaW5lJyk7XG4gICAgbGluZT8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgbGluZT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWxpbmVTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9wYWNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BhY2l0eScpO1xuICAgIG9wYWNpdHk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IuYSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpZHRoJyk7XG4gICAgd2lkdGg/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbCBhcyBlc3JpLlNpbXBsZUxpbmVTeW1ib2wpLndpZHRoID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS53aWR0aCA9IHBhcnNlRmxvYXQoXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUud2lkdGggPSBwYXJzZUZsb2F0KFxuICAgICAgICBlLnRhcmdldC52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbCcpO1xuICAgIGxhYmVsPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ2xhYmVsJywgZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRleHRDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0Q29sb3InKTtcbiAgICB0ZXh0Q29sb3I/LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnI2ZmMDAwMCcpO1xuICAgIHRleHRDb2xvcj8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ3RleHRDb2xvcicsIENvbG9yLmZyb21IZXgoZS50YXJnZXQudmFsdWUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyVXBkYXRlPXt0aGlzLl9kcmF3VXBkYXRlZH0gaWQ9XCJza2V0Y2hEaXZcIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtYmxvY2sgaGVhZGluZz1cIlNldHRpbmdzXCIgb3BlbiBjb2xsYXBzaWJsZT5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJDb2xvclwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIEZpbGwgQ29sb3IgPGNhbGNpdGUtY29sb3IgaWQ9XCJmaWxsXCIgaGlkZUNoYW5uZWxzIGhpZGVTYXZlZCBhcHBlYXJhbmNlPVwibWluaW1hbFwiIHNjYWxlPVwic1wiPjwvY2FsY2l0ZS1jb2xvcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBMaW5lIENvbG9yIDxjYWxjaXRlLWNvbG9yIGlkPVwibGluZVwiIGhpZGVDaGFubmVscyBoaWRlU2F2ZWQgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBzY2FsZT1cInNcIj48L2NhbGNpdGUtY29sb3I+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiRmlsbCBPcGFjaXR5XCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgT3BhY2l0eTxjYWxjaXRlLXNsaWRlciBzY2FsZT1cInNcIiBpZD1cIm9wYWNpdHlcIiBtYXg9XCIxXCIgbWluPVwiMFwiIHZhbHVlPVwiMC41XCIgc3RlcD1cIjAuMVwiPjwvY2FsY2l0ZS1zbGlkZXI+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiT3V0bGluZVwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIFdpZHRoIDxjYWxjaXRlLXNsaWRlciBpZD1cIndpZHRoXCIgbWF4PVwiMTBcIiBtaW49XCIwXCIgdmFsdWU9XCIxXCIgc3RlcD1cIjAuNVwiPjwvY2FsY2l0ZS1zbGlkZXI+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiTGFiZWxpbmdcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBMYWJlbCA8Y2FsY2l0ZS1pbnB1dCBzY2FsZT1cInNcIiBpZD1cImxhYmVsXCIgdHlwZT1cInRleHRhcmVhXCI+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIFRleHQgQ29sb3JcbiAgICAgICAgICAgICAgPGNhbGNpdGUtY29sb3IgaWQ9XCJ0ZXh0Q29sb3JcIiBoaWRlQ2hhbm5lbHMgaGlkZVNhdmVkIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgc2NhbGU9XCJzXCI+PC9jYWxjaXRlLWNvbG9yPlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgIDwvY2FsY2l0ZS1ibG9jay1zZWN0aW9uPlxuICAgICAgICA8L2NhbGNpdGUtYmxvY2s+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgU2tldGNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gnO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5cbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCB7IG1lYXN1cmVtZW50IH0gZnJvbSAnLi4vLi4vd2lkZ2V0cyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuU2VsZWN0LlNlbGVjdFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBsYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cbiAgc2tldGNoOiBlc3JpLlNrZXRjaDtcbiAgYnVmZmVyRGlzdGFuY2U6IG51bWJlcjtcbiAgZ3JhcGhpY3M6IEdyYXBoaWNzTGF5ZXI7XG5cbiAgaW5pdFNrZXRjaCgpIHtcbiAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnIH0pO1xuICAgIHRoaXMudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MpO1xuICAgIHRoaXMuc2tldGNoID0gbmV3IFNrZXRjaCh7XG4gICAgICB2aWV3OiB0aGlzLnZpZXcsXG4gICAgICBjb250YWluZXI6ICdzZWxlY3RXaWRnZXQnLFxuICAgICAgbGF5ZXI6IHRoaXMuZ3JhcGhpY3MsXG4gICAgICBjcmVhdGlvbk1vZGU6ICdzaW5nbGUnXG4gICAgfSk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnVwZGF0ZU9uR3JhcGhpY0NsaWNrID0gZmFsc2U7XG4gICAgdGhpcy5za2V0Y2gub24oJ2NyZWF0ZScsIGV2ID0+IHtcbiAgICAgIGlmIChldi5zdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB0aGlzLmdyYXBoaWNzLnJlbW92ZUFsbCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2LnN0YXRlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNrZXRjaC53YXRjaCgnYWN0aXZlVG9vbCcsIHRvb2wgPT4ge1xuICAgICAgaWYgKHRvb2wgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gICAgdGhpcy5zZXQoJ2J1ZmZlckRpc3RhbmNlJywgMCk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IFNlbGVjdFZpZXdNb2RlbCBmcm9tICcuL1NlbGVjdC9TZWxlY3RWaWV3TW9kZWwnO1xuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBsYXllcj86IGVzcmkuRmVhdHVyZUxheWVyO1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBzZWxlY3QtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuU2VsZWN0JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxheWVyJylcbiAgbGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLnNrZXRjaCcpXG4gIHNrZXRjaDogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2UnKVxuICBidWZmZXJEaXN0YW5jZTogbnVtYmVyO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IFNlbGVjdFZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogU2VsZWN0Vmlld01vZGVsID0gbmV3IFNlbGVjdFZpZXdNb2RlbCgpO1xuICBfc2tldGNoQ3JlYXRlZCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMudmlld01vZGVsLnNrZXRjaCkge1xuICAgICAgdGhpcy52aWV3TW9kZWwuaW5pdFNrZXRjaCgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IFNlbGVjdFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldjogYW55KSB7XG4gICAgdGhpcy5zZXQoJ2J1ZmZlckRpc3RhbmNlJywgcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3REaXYgY2FsY2l0ZS1pbnB1dCcpPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGV2OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGV2KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJVcGRhdGU9e3RoaXMuX3NrZXRjaENyZWF0ZWR9IGlkPVwic2VsZWN0V2lkZ2V0XCI+PC9kaXY+XG4gICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgIEJ1ZmZlciBEaXN0YW5jZSAoZmVldClcbiAgICAgICAgICA8Y2FsY2l0ZS1pbnB1dFxuICAgICAgICAgICAgc2NhbGU9XCJzXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICBtYXg9XCIyMDAwXCJcbiAgICAgICAgICAgIHN0ZXA9XCI1MFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy52aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2V9XG4gICAgICAgICAgPjwvY2FsY2l0ZS1pbnB1dD5cbiAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInO1xuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbmltcG9ydCBCYXNlTWFwR2FsbGVyeSBmcm9tICdlc3JpL3dpZGdldHMvQmFzZW1hcEdhbGxlcnknO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkJhc2VNYXBzLkJhc2VNYXBzVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNYXBzVmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgYmFzZW1hcHM6IEJhc2VNYXBHYWxsZXJ5O1xuICBpbWFnZXM6IEJhc2VNYXBHYWxsZXJ5O1xuXG4gIGFjdGl2ZUJhc2VtYXA6IGVzcmkuQmFzZW1hcDtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjaGFuZ2VQcm9wZXJ0eUxpbmVzID0gKGJhc2VtYXA6IGVzcmkuQmFzZW1hcCkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5TGF5ZXI6IEZlYXR1cmVMYXllciA9IHRoaXMudmlldy5tYXAuYWxsTGF5ZXJzLmZpbmQobGF5ZXIgPT4ge1xuICAgICAgcmV0dXJuIGxheWVyLnR5cGUgPT09ICdmZWF0dXJlJyAmJiBsYXllci50aXRsZSA9PT0gJ1Byb3BlcnR5JztcbiAgICB9KSBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgY29uc3QgbmV3UmVuZGVyZXI6IGVzcmkuU2ltcGxlUmVuZGVyZXIgPSAocHJvcGVydHlMYXllci5yZW5kZXJlciBhcyBlc3JpLlNpbXBsZVJlbmRlcmVyKS5jbG9uZSgpIGFzIGVzcmkuU2ltcGxlUmVuZGVyZXI7XG4gICAgaWYgKFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkYXJrJykgfHxcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbmlnaHQnKSB8fFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkYXJrJykgfHxcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCcyMCcpIHx8XG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnMTknKVxuICAgICkge1xuICAgICAgKG5ld1JlbmRlcmVyLnN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUuY29sb3IgPSBuZXcgQ29sb3IoWzI1NSwgMjU1LCAyNTUsIDAuNV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAobmV3UmVuZGVyZXIuc3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS5jb2xvciA9IG5ldyBDb2xvcihbMCwgMCwgMCwgMC41XSk7XG4gICAgfVxuICAgIHByb3BlcnR5TGF5ZXIucmVuZGVyZXIgPSBuZXdSZW5kZXJlcjtcbiAgfTtcblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdGhpcy5iYXNlbWFwcyA9IG5ldyBCYXNlTWFwR2FsbGVyeSh7IHZpZXc6IHRoaXMudmlldyB9KTtcbiAgICB0aGlzLnZpZXcud2hlbigoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVByb3BlcnR5TGluZXModGhpcy52aWV3Lm1hcC5iYXNlbWFwKTtcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcubWFwLndhdGNoKCdiYXNlbWFwJywgKGJhc2VtYXA6IGVzcmkuQmFzZW1hcCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VQcm9wZXJ0eUxpbmVzKGJhc2VtYXApO1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXMnKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAgPSB0aGlzLnZpZXcubWFwLmJhc2VtYXA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFN3aXRjaCcpPy5yZW1vdmVBdHRyaWJ1dGUoJ3N3aXRjaGVkJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBibSA9IHRoaXMuaW1hZ2VzLnZpZXdNb2RlbC5pdGVtcy5maW5kKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5iYXNlbWFwLnRpdGxlID09PSB0aGlzLnZpZXcubWFwLmJhc2VtYXAudGl0bGU7XG4gICAgICB9KTtcbiAgICAgIGlmIChibSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTd2l0Y2gnKT8uaGFzQXR0cmlidXRlKCdzd2l0Y2hlZCcpKSB7XG4gICAgICAgIHRoaXMudmlldy5tYXAuYWRkTWFueSh0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy50b0FycmF5KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xuICAgICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFjdGl2ZUJhc2VtYXAgPSB0aGlzLnZpZXcubWFwLmJhc2VtYXA7XG4gICAgdGhpcy5pbWFnZXMgPSBuZXcgQmFzZU1hcEdhbGxlcnkoe1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgc291cmNlOiB7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgaWQ6ICc0OTIzODY3NTlkMjY0ZDQ5OTQ4YmY3ZjgzOTU3ZGRiOSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlaGlkZScsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBqc29uID0gKHZpZXcubWFwIGFzIGFueSkudG9KU09OKCk7XG4gICAgICBqc29uLmluaXRpYWxTdGF0ZS52aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkgPSB2aWV3LmV4dGVudDtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hcHMnLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XG4gICAgfSk7XG4gIH1cbiAgdG9nZ2xlQ29udGVudCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSAnbWFwcycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZCcpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlc0l0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHNJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBCYXNlTWFwc1ZpZXdNb2RlbCBmcm9tICcuL0Jhc2VNYXBzL0Jhc2VNYXBzVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXNlTWFwc1Byb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGJhc2VtYXBzLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkJhc2VNYXBzJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNYXBzIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5iYXNlbWFwcycpXG4gIGJhc2VtYXBzOiBlc3JpLkJhc2VtYXBHYWxsZXJ5O1xuICBAYWxpYXNPZigndmlld01vZGVsLmltYWdlcycpXG4gIGltYWdlczogZXNyaS5CYXNlbWFwR2FsbGVyeTtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBCYXNlTWFwc1ZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogQmFzZU1hcHNWaWV3TW9kZWwgPSBuZXcgQmFzZU1hcHNWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogQmFzZU1hcHNQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgX2NyZWF0ZU1hcHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuYmFzZW1hcHMpIHtcbiAgICAgIHRoaXMuYmFzZW1hcHMuY29udGFpbmVyID0gJ21hcHMnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZUltYWdlcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgIHRoaXMuaW1hZ2VzLmNvbnRhaW5lciA9ICdpbWFnZXMnO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlU3dpdGNoQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3N3aXRjaGVkJykgIT0gJycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGNvbnNvbGUubG9nKCdhZGQnKTtcbiAgICAgIHRoaXMudmlldy5tYXAuYWRkTWFueSh0aGlzLnZpZXdNb2RlbC5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMudG9BcnJheSgpLCAwKTtcbiAgICAgIHRoaXMudmlldy5tYXAuYmFzZW1hcC5yZWZlcmVuY2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIGxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy52aWV3Lm1hcC5sYXllcnNcbiAgICAgICAgLmZpbHRlcihsYXllciA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5pbmNsdWRlcyhsYXllcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBsYXllci5vcGFjaXR5ID0gMC41O1xuICAgICAgICAgIGxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgdGhpcy52aWV3Lm1hcC5iYXNlbWFwLnJlZmVyZW5jZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgbGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xuICAgICAgICB0aGlzLnZpZXcubWFwLnJlbW92ZSh0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlU2xpZGVyQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IGxheWVycyA9IHRoaXMudmlldy5tYXAubGF5ZXJzXG4gICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXA/LmJhc2VMYXllcnMuaW5jbHVkZXMobGF5ZXIpO1xuICAgICAgfSlcbiAgICAgIC50b0FycmF5KCk7XG4gICAgbGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgbGF5ZXIub3BhY2l0eSA9IHBhcnNlRmxvYXQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcbiAgICB9KTtcbiAgfTtcblxuICBfc2xpZGVyQ3JlYXRlZCA9IChlOiBhbnkpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpXG4gICAgICA/LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjYWxjaXRlU2xpZGVyVXBkYXRlJyxcbiAgICAgICAgdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2UuYmluZCh7IGJhc2VtYXA6IHRoaXMuYmFzZW1hcHMsIHZpZXc6IHRoaXMudmlldyB9KVxuICAgICAgKTtcbiAgfTtcbiAgX2JsZW5kQ3JlYXRlZCA9IChlOiBhbnkpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFN3aXRjaCcpXG4gICAgICA/LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjYWxjaXRlU3dpdGNoQ2hhbmdlJyxcbiAgICAgICAgdGhpcy5oYW5kbGVTd2l0Y2hDaGFuZ2UuYmluZCh7IGJhc2VtYXA6IHRoaXMuYmFzZW1hcHMsIHZpZXc6IHRoaXMudmlldyB9KVxuICAgICAgKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZCcpPy5yZW1vdmVBdHRyaWJ1dGUoJ3N3aXRjaGVkJyk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jhc2VtYXBEaXYgY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtJyk7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVSYWRpb0dyb3VwSXRlbUNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2FuIEkgZ2V0IGNoZWNrZWQgYW5kIHZhbHVlIGxpa2UgdGhpcz9cbiAgICAgICAgaWYgKGUudGFyZ2V0Py5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy52aWV3TW9kZWwudG9nZ2xlQ29udGVudChlLnRhcmdldD8udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImhpZGRlblwiIGlkPVwiYmxlbmRcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1zd2l0Y2ggYWZ0ZXJDcmVhdGU9e3RoaXMuX2JsZW5kQ3JlYXRlZH0gaWQ9XCJibGVuZFN3aXRjaFwiPjwvY2FsY2l0ZS1zd2l0Y2g+IEJsZW5kXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxjYWxjaXRlLXNsaWRlclxuICAgICAgICAgIGFmdGVyQ3JlYXRlPXt0aGlzLl9zbGlkZXJDcmVhdGVkfVxuICAgICAgICAgIGNsYXNzPVwiaGlkZGVuXCJcbiAgICAgICAgICBpZD1cImJsZW5kU2xpZGVyXCJcbiAgICAgICAgICB2YWx1ZT1cIjAuNVwiXG4gICAgICAgICAgbWF4PVwiMVwiXG4gICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgc3RlcD1cIjAuMVwiXG4gICAgICAgID48L2NhbGNpdGUtc2xpZGVyPlxuXG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZU1hcHN9IGlkPVwibWFwc1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVJbWFnZXN9IGlkPVwiaW1hZ2VzXCIgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSBjaGVja2VkIHZhbHVlPVwibWFwc1wiIGlkPVwibWFwc0l0ZW1cIj5cbiAgICAgICAgICAgIE1hcHNcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHZhbHVlPVwiaW1hZ2VzXCIgaWQ9XCJpbWFnZXNJdGVtXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICBJbWFnZXJ5XG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IExheWVyTGlzdCBmcm9tICdlc3JpL3dpZGdldHMvTGF5ZXJMaXN0JztcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTGF5ZXJzLkxheWVyc1ZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllcnNWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBsYXllckxpc3Q6IGVzcmkuTGF5ZXJMaXN0O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnNvbGUubG9nKHZpZXcuc2NhbGUpO1xuICAgIHRoaXMubGF5ZXJMaXN0ID0gbmV3IExheWVyTGlzdCh7XG4gICAgICB2aWV3LFxuICAgICAgY29udGFpbmVyOiAnbGF5ZXJEaXYnLFxuICAgICAgbGlzdEl0ZW1DcmVhdGVkRnVuY3Rpb246IGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGV2ZW50Lml0ZW07XG4gICAgICAgIGlmIChpdGVtLmxheWVyLnR5cGUgIT0gJ2dyb3VwJykge1xuICAgICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtc2xpZGVyJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWluJywgJzAnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtYXgnLCAnMTAwJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWluLWxhYmVsJywgJzAlJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWF4LWxhYmVsJywgJzEwMCUnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdsYWJlbC1oYW5kbGVzJywgJycpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgKGl0ZW0/LmxheWVyLm9wYWNpdHkgKiAxMDApLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpdGVtLmxheWVyLmlkKTtcbiAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVNsaWRlclVwZGF0ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHZpZXcubWFwLmZpbmRMYXllckJ5SWQoKGV2ZW50LnRhcmdldCBhcyBhbnkpLmdldEF0dHJpYnV0ZSgnZGF0YScpKS5vcGFjaXR5ID1cbiAgICAgICAgICAgICAgcGFyc2VJbnQoKGV2ZW50Py50YXJnZXQgYXMgYW55KT8uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKSAvIDEwMDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpdGVtLnBhbmVsID0ge1xuICAgICAgICAgICAgY29udGVudDogW3NsaWRlciwgJ2xlZ2VuZCddLFxuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpdGVtLmxheWVyLnRpdGxlID09PSAnUHJvcGVydHknKSB7XG4gICAgICAgICAgICBpdGVtLmFjdGlvbnNTZWN0aW9ucyA9IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2hvdyBMYWJlbHMnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3RvZ2dsZScsXG4gICAgICAgICAgICAgICAgICBpZDogJ3Byb3BlcnR5LWxhYmVscycsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5sYXllci5sYWJlbHNWaXNpYmxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubGF5ZXJMaXN0Lm9uKCd0cmlnZ2VyLWFjdGlvbicsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5hY3Rpb24uaWQgPT09ICdwcm9wZXJ0eS1sYWJlbHMnKSB7XG4gICAgICAgIChldmVudC5pdGVtLmxheWVyIGFzIGVzcmkuRmVhdHVyZUxheWVyKS5sYWJlbHNWaXNpYmxlID0gKGV2ZW50LmFjdGlvbiBhcyBlc3JpLkFjdGlvblRvZ2dsZSkudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IExheWVyc1ZpZXdNb2RlbCBmcm9tICcuL0xheWVycy9MYXllcnNWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExheWVyc1Byb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGxheWVycy1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5MYXllcnMnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXJzIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubGF5ZXJMaXN0JylcbiAgbGF5ZXJMaXN0OiBlc3JpLkxheWVyTGlzdDtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IExheWVyc1ZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogTGF5ZXJzVmlld01vZGVsID0gbmV3IExheWVyc1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBMYXllcnNQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgX2NyZWF0ZUxheWVycyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5sYXllckxpc3QpIHtcbiAgICAgIHRoaXMubGF5ZXJMaXN0LmNvbnRhaW5lciA9ICdsYXllcnMnO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUxheWVyc30gaWQ9XCJsYXllcnNcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Mb2NhdGlvblNlYXJjaC5Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgc2VhcmNoOiBTZWFyY2g7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHRoaXMuc2VhcmNoID0gbmV3IFNlYXJjaCh7IHZpZXc6IHZpZXcsIG1heFN1Z2dlc3Rpb25zOiAzMCwgc2VhcmNoQWxsRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgdGhpcy5zZWFyY2guYWxsU291cmNlcy5vbignYWZ0ZXItYWRkJywgZSA9PiB7XG4gICAgICBpZiAoKGUuaXRlbSBhcyBhbnkpLmxheWVyKSB7XG4gICAgICAgIGUuaXRlbS5uYW1lID0gKGUuaXRlbSBhcyBhbnkpLmxheWVyLnRpdGxlO1xuICAgICAgICBlLml0ZW0ucGxhY2Vob2xkZXIgPSAoZS5pdGVtIGFzIGFueSkubGF5ZXIudGl0bGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCBmcm9tICcuL0xvY2F0aW9uU2VhcmNoL0xvY2F0aW9uU2VhcmNoVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblNlYXJjaFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGxvY2F0aW9uc2VhcmNoLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxvY2F0aW9uU2VhcmNoJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uU2VhcmNoIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5zZWFyY2gnKVxuICBzZWFyY2g6IGVzcmkud2lkZ2V0c1NlYXJjaDtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IExvY2F0aW9uU2VhcmNoVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCA9IG5ldyBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBMb2NhdGlvblNlYXJjaFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIF9zZWFyY2hDcmVhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2VhcmNoKSB7XG4gICAgICB0aGlzLnNlYXJjaC5jb250YWluZXIgPSAnbG9jYXRpb25TZWFyY2gnO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fc2VhcmNoQ3JlYXRlfSBpZD1cImxvY2F0aW9uU2VhcmNoXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCIvLyBXaWRnZXRzXG5pbXBvcnQgTGVnZW5kIGZyb20gJ2Vzcmkvd2lkZ2V0cy9MZWdlbmQnO1xuaW1wb3J0IFByaW50IGZyb20gJ2Vzcmkvd2lkZ2V0cy9QcmludCc7XG5pbXBvcnQgQm9va21hcmtzIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Cb29rbWFya3MnO1xuaW1wb3J0IFByb3BlcnR5U2VhcmNoIGZyb20gJy4vd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaCc7XG5pbXBvcnQgQ29vcmRpbmF0ZUNvbnZlcnNpb24gZnJvbSAnZXNyaS93aWRnZXRzL0Nvb3JkaW5hdGVDb252ZXJzaW9uJztcbmltcG9ydCBFeHBhbmQgZnJvbSAnZXNyaS93aWRnZXRzL0V4cGFuZCc7XG5pbXBvcnQgTWVhc3VyZSBmcm9tICcuL3dpZGdldHMvTWVhc3VyZSc7XG5pbXBvcnQgQ29tcGFzcyBmcm9tICdlc3JpL3dpZGdldHMvQ29tcGFzcyc7XG5pbXBvcnQgTG9jYXRlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Mb2NhdGUnO1xuaW1wb3J0IFRyYWNrIGZyb20gJ2Vzcmkvd2lkZ2V0cy9UcmFjayc7XG5cbmltcG9ydCB7IGNvbmRvc1RhYmxlLCBhZGRyZXNzVGFibGUsIGZlYXR1cmVMYXllciB9IGZyb20gJy4vZGF0YS9zZWFyY2gnO1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5pbXBvcnQgRHJhdyBmcm9tICcuL3dpZGdldHMvRHJhdyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vd2lkZ2V0cy9TZWxlY3QnO1xuaW1wb3J0IEJhc2VNYXBzIGZyb20gJy4vd2lkZ2V0cy9CYXNlTWFwcyc7XG5pbXBvcnQgTGF5ZXJzIGZyb20gJy4vd2lkZ2V0cy9MYXllcnMnO1xuaW1wb3J0IExvY2F0aW9uU2VhcmNoIGZyb20gJy4vd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaCc7XG5leHBvcnQgY29uc3QgbWVhc3VyZW1lbnQ6IE1lYXN1cmUgPSBuZXcgTWVhc3VyZSgpO1xuZXhwb3J0IGNvbnN0IHNlbGVjdDogU2VsZWN0ID0gbmV3IFNlbGVjdCgpO1xuZXhwb3J0IGxldCBsYXllcnM6IExheWVycztcbmV4cG9ydCBsZXQgbGVnZW5kOiBMZWdlbmQ7XG5leHBvcnQgbGV0IGJhc2VtYXBzOiBCYXNlTWFwcztcbmV4cG9ydCBsZXQgYm9va21hcmtzOiBCb29rbWFya3M7XG5leHBvcnQgbGV0IGxvY2F0aW9uU2VhcmNoOiBMb2NhdGlvblNlYXJjaDtcblxuZXhwb3J0IGxldCBwcmludFdpZGdldDogUHJpbnQ7XG5leHBvcnQgbGV0IHByb3BlcnR5U2VhcmNoOiBQcm9wZXJ0eVNlYXJjaDtcbmV4cG9ydCBjb25zdCBkcmF3V2lkZ2V0OiBEcmF3ID0gbmV3IERyYXcoKTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0V2lkZ2V0KG5hbWU6IHN0cmluZywgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgaWYgKG5hbWUgPT09ICdTZWFyY2gnICYmICFwcm9wZXJ0eVNlYXJjaCkge1xuICAgIHByb3BlcnR5U2VhcmNoID0gbmV3IFByb3BlcnR5U2VhcmNoKHtcbiAgICAgIHZpZXc6IHZpZXcsXG4gICAgICBjb25kb3NUYWJsZTogY29uZG9zVGFibGUsXG4gICAgICBhZGRyZXNzVGFibGU6IGFkZHJlc3NUYWJsZSxcbiAgICAgIHByb3BlcnR5TGF5ZXI6IGZlYXR1cmVMYXllcixcbiAgICAgIGNvbnRhaW5lcjogJ3NpZGVEaXYnXG4gICAgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdMYXllcnMnICYmICFsYXllcnMpIHtcbiAgICBsYXllcnMgPSBuZXcgTGF5ZXJzKHsgdmlldywgY29udGFpbmVyOiAnbGF5ZXJzRGl2JyB9KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ0xlZ2VuZCcgJiYgIWxlZ2VuZCkge1xuICAgIGxlZ2VuZCA9IG5ldyBMZWdlbmQoeyB2aWV3LCBjb250YWluZXI6ICdsZWdlbmREaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnUHJpbnQnICYmICFwcmludFdpZGdldCkge1xuICAgIHByaW50V2lkZ2V0ID0gbmV3IFByaW50KHtcbiAgICAgIHZpZXcsXG4gICAgICBjb250YWluZXI6ICdwcmludERpdicsXG4gICAgICBwcmludFNlcnZpY2VVcmw6XG4gICAgICAgICdodHRwczovL3V0aWxpdHkuYXJjZ2lzb25saW5lLmNvbS9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9VdGlsaXRpZXMvUHJpbnRpbmdUb29scy9HUFNlcnZlci9FeHBvcnQlMjBXZWIlMjBNYXAlMjBUYXNrJ1xuICAgIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnQm9va21hcmtzJyAmJiAhYm9va21hcmtzKSB7XG4gICAgYm9va21hcmtzID0gbmV3IEJvb2ttYXJrcyh7IHZpZXcsIGNvbnRhaW5lcjogJ2Jvb2ttYXJrRGl2JywgZWRpdGluZ0VuYWJsZWQ6IHRydWUgfSk7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gJ0Jhc2VtYXBzJyAmJiAhYmFzZW1hcHMpIHtcbiAgICBiYXNlbWFwcyA9IG5ldyBCYXNlTWFwcyh7IHZpZXcsIGNvbnRhaW5lcjogJ2Jhc2VtYXBEaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnTG9jYXRpb24nICYmICFsb2NhdGlvblNlYXJjaCkge1xuICAgIGxvY2F0aW9uU2VhcmNoID0gbmV3IExvY2F0aW9uU2VhcmNoKHsgdmlldywgY29udGFpbmVyOiAnbG9jYXRpb25EaXYnIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaW5pdFdpZGdldHModmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgY29uc3QgY29vcmRpbmF0ZXM6IGVzcmkuQ29vcmRpbmF0ZUNvbnZlcnNpb24gPSBuZXcgQ29vcmRpbmF0ZUNvbnZlcnNpb24oeyB2aWV3IH0pO1xuICBjb25zdCBjb29yZGluYXRlc0V4cGFuZDogRXhwYW5kID0gbmV3IEV4cGFuZCh7XG4gICAgY29udGVudDogY29vcmRpbmF0ZXMsXG4gICAgbW9kZTogJ2Zsb2F0aW5nJyxcbiAgICBleHBhbmRJY29uQ2xhc3M6ICdlc3JpLWljb24tcGFuMidcbiAgfSk7XG4gIHZpZXcudWkuYWRkKGNvb3JkaW5hdGVzRXhwYW5kLCAnYm90dG9tLWxlZnQnKTtcblxuICB2aWV3LnVpLmFkZChuZXcgQ29tcGFzcyh7IHZpZXc6IHZpZXcgfSksICd0b3AtbGVmdCcpO1xuICBjb25zdCBsb2NhdGU6IExvY2F0ZSA9IG5ldyBMb2NhdGUoeyB2aWV3OiB2aWV3IH0pO1xuICBsb2NhdGUub24oJ2xvY2F0ZS1lcnJvcicsIChldmVudDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9KTtcbiAgdmlldy51aS5hZGQobG9jYXRlLCAndG9wLWxlZnQnKTtcblxuICBjb25zdCB0cmFjazogVHJhY2sgPSBuZXcgVHJhY2soeyB2aWV3OiB2aWV3IH0pO1xuICB0cmFjay5vbigndHJhY2stZXJyb3InLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfSk7XG4gIHZpZXcudWkuYWRkKHRyYWNrLCAndG9wLWxlZnQnKTtcblxuICBtZWFzdXJlbWVudC52aWV3ID0gdmlldztcbiAgbWVhc3VyZW1lbnQuY29udGFpbmVyID0gJ21lYXN1cmVEaXYnO1xuICBkcmF3V2lkZ2V0LnZpZXcgPSB2aWV3O1xuICBkcmF3V2lkZ2V0LmNvbnRhaW5lciA9ICdkcmF3RGl2JztcblxuICBzZWxlY3QuY29udGFpbmVyID0gJ3NlbGVjdERpdic7XG4gIHNlbGVjdC52aWV3ID0gdmlldztcbiAgc2VsZWN0LmxheWVyID0gZmVhdHVyZUxheWVyO1xuICByZXR1cm4gdmlldztcbn1cbiIsImltcG9ydCB7IG1lYXN1cmVtZW50LCBpbml0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzJztcbmltcG9ydCB7IHZpZXcgfSBmcm9tICcuL2luZGV4Jztcbi8vaGFuZGxlIGFjdGlvbiBiYXIgdG9nZ2xlXG5leHBvcnQgY29uc3QgdG9nZ2xlQWN0aW9uID0gKGFjdGlvbjogc3RyaW5nKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYW5lbCcpLmZvckVhY2goKHBhbmVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmIChwYW5lbC50aXRsZSAhPSBhY3Rpb24pIHtcbiAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhwYW5lbCk7XG4gICAgICBwYW5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgY29uc29sZS5sb2cocGFuZWwpO1xuICAgICAgY29uc29sZS5sb2cocGFuZWwudGl0bGUpO1xuICAgICAgaWYgKCFwYW5lbC5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgIGlmICh3aW5kb3cub3V0ZXJXaWR0aCA8IDUwMCkge1xuICAgICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiAzNTBweCcpO1xuICAgICAgICB9XG4gICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBpZiAocGFuZWwudGl0bGUgIT0gJ01lYXN1cmUnKSB7XG4gICAgICAgICAgLy9tZWFzdXJlbWVudC5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lYXN1cmVtZW50Lm1lYXN1cmVPcGVuZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uczogTm9kZUxpc3RPZjxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWN0aW9uLWJhciBjYWxjaXRlLWFjdGlvbicpO1xuYWN0aW9ucz8uZm9yRWFjaCgoYWN0aW9uOiBFbGVtZW50KSA9PiB7XG4gIGFjdGlvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudGV4dCk7XG4gICAgdG9nZ2xlQWN0aW9uKGUudGFyZ2V0LnRleHQpO1xuICAgIGluaXRXaWRnZXQoZS50YXJnZXQudGV4dCwgdmlldyk7XG4gICAgYWN0aW9ucy5mb3JFYWNoKChhOiBhbnkpID0+IHtcbiAgICAgIGlmIChhLnRleHQgIT0gZS50YXJnZXQudGV4dCkge1xuICAgICAgICBhLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYWN0aW9uLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgZW5hYmxlQWN0aW9uYmFyID0gKCkgPT4ge1xuICBpbml0V2lkZ2V0KCdTZWFyY2gnLCB2aWV3KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1hY3Rpb24tYmFyIGNhbGNpdGUtYWN0aW9uJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGluaXRQYW5lbEhlYWRlcnMgPSAoKSA9PiB7XG4gIC8vb3ZlcnJpZGUgQ1NTIGZvciBjYWxjaXRlIHBhbmVsIGhlYWRlclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsIGRpdicpLmZvckVhY2gocGFuZWwgPT4ge1xuICAgIGlmIChwYW5lbC5zbG90ID09PSAnaGVhZGVyLXRyYWlsaW5nLWNvbnRlbnQnKSB7XG4gICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3c7Jyk7XG4gICAgfVxuICB9KTtcbiAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICAgIGlmICgoZXZlbnQ/LnRhcmdldCBhcyBhbnkpPy5vdXRlcldpZHRoID49IDUwMCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5tYXhpbWl6ZScpPy5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21pbmltaXplJykge1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMzUwcHgnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCknKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVBhbmVsRGlzbWlzc2VkQ2hhbmdlJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDBweCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF4aW1pemUnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpY29uJywgJ21heGltaXplJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICAvL2hhbmRsZSBwYW5lbCBtYXhpbWl6ZS9taW5pbWl6ZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF4aW1pemUnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdpY29uJykgPT09ICdtYXhpbWl6ZScpIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAnbWluaW1pemUnKTtcbiAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCknKTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21pbmltaXplJykge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtYXhpbWl6ZScpO1xuICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOjM1MHB4Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbmV4cG9ydCBjb25zdCBpbml0UGFuZWxzID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBjb25zdCBpOiBIVE1MRWxlbWVudCA9IGl0ZW0/LnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChpKSB7XG4gICAgICBpLmlubmVySFRNTCArPSAnPHN0eWxlPi5jb250ZW50LWNvbnRhaW5lciB7IGhlaWdodDogMTAwJTsgfSA8L3N0eWxlPic7XG4gICAgfVxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVBhbmVsRGlzbWlzc2VkQ2hhbmdlJywgZSA9PiB7XG4gICAgICBpZiAod2luZG93Lm91dGVyV2lkdGggPD0gNTAwKSB7XG4gICAgICAgIGlmICgoZS50YXJnZXQgYXMgYW55KS5oYXNBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXdEaXYnKT8uY2xhc3NMaXN0LnJlbW92ZSgnYmVsb3cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0RpdicpPy5jbGFzc0xpc3QuYWRkKCdiZWxvdycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCAnLi9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9kYXRhL2FwcCc7XG5pbXBvcnQgeyBpbml0VGlwcyB9IGZyb20gJy4vdGlwcyc7XG5pbXBvcnQgeyBzaG93QWxlcnQgfSBmcm9tICcuL2FsZXJ0JztcbmltcG9ydCB7IHRvZ2dsZUFjdGlvbiwgZW5hYmxlQWN0aW9uYmFyIH0gZnJvbSAnLi9hY3Rpb25iYXInO1xuaW1wb3J0IE1hcFZpZXcgZnJvbSAnZXNyaS92aWV3cy9NYXBWaWV3JztcbmltcG9ydCBnZW9tZXRyeUVuZ2luZSBmcm9tICdlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lJztcbi8vIHdpZGdldCB1dGlsc1xuaW1wb3J0IHsgaW5pdFdpZGdldHMsIHNlbGVjdCwgcHJvcGVydHlTZWFyY2gsIGxheWVycyB9IGZyb20gJy4vd2lkZ2V0cyc7XG5pbXBvcnQgeyBpbml0UGFuZWxzLCBpbml0UGFuZWxIZWFkZXJzIH0gZnJvbSAnLi9wYW5lbHMnO1xuaW1wb3J0IHsgaW5pdE1lbnUgfSBmcm9tICcuL21lbnUnO1xuLyoqXG4gKiBJbml0aWFsaXplIGFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB2aWV3ID0gbmV3IE1hcFZpZXcoe1xuICBjb250YWluZXI6ICd2aWV3RGl2JyxcbiAgbWFwXG59KTtcblxuLy9oYW5kbGUgd2hlbiB2aWV3IGlzIHJlYWR5XG52aWV3LndoZW4oKCkgPT4ge1xuICB2aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgaWYgKGxheWVyLnR5cGUgIT0gJ2dyb3VwJykge1xuICAgICAgbGF5ZXIud2F0Y2goJ3Zpc2libGUnLCB2aXNpYmxlID0+IHtcbiAgICAgICAgbGF5ZXJzLmxheWVyTGlzdD8ub3BlcmF0aW9uYWxJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmxheWVyLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gaXRlbS5jaGlsZHJlbi5maW5kKGkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaS5sYXllciA9PT0gbGF5ZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICBjaGlsZC5wYW5lbC5vcGVuID0gdmlzaWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxheWVyLndhdGNoKCd2aXNpYmxlJywgdmlzaWJsZSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gbGF5ZXJzLmxheWVyTGlzdC5vcGVyYXRpb25hbEl0ZW1zLmZpbmQoaSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGkubGF5ZXIgPT09IGxheWVyO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgZ3JvdXAub3BlbiA9IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHByb3BlcnR5TGF5ZXIgPSBtYXAuYWxsTGF5ZXJzLmZpbmQobGF5ZXIgPT4ge1xuICAgIHJldHVybiBsYXllci50aXRsZSA9PT0gJ1Byb3BlcnR5JyAmJiBsYXllci50eXBlID09PSAnZmVhdHVyZSc7XG4gIH0pO1xuICB2aWV3Lm9uKCdob2xkJywgZSA9PiB7XG4gICAgcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBlLm1hcFBvaW50O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdG9nZ2xlQWN0aW9uKCdTZWFyY2gnKTtcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG4gIHZpZXdcbiAgICAud2hlbkxheWVyVmlldyhwcm9wZXJ0eUxheWVyKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHByb3BlcnR5U2VhcmNoLnByb3BlcnR5TGF5ZXIgPSBwcm9wZXJ0eUxheWVyIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XG4gICAgICAvL3NlYXJjaCBieSBnZW9tZXRyeSBhZnRlciBza2V0Y2ggY3JlYXRpb24gaW4gc2VsZWN0IHdpZGdldFxuICAgICAgc2VsZWN0LnZpZXdNb2RlbC5za2V0Y2gub24oJ2NyZWF0ZScsIChldjogYW55KSA9PiB7XG4gICAgICAgIGlmIChldi5zdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgIGlmIChzZWxlY3Qudmlld01vZGVsPy5idWZmZXJEaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0J1ZmZlcihldi5ncmFwaGljLmdlb21ldHJ5LCBzZWxlY3Qudmlld01vZGVsLmJ1ZmZlckRpc3RhbmNlLCAnZmVldCcpO1xuICAgICAgICAgICAgcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBnIGFzIF9fZXNyaS5Qb2x5Z29uO1xuICAgICAgICAgICAgZXYuZ3JhcGhpYy5nZW9tZXRyeSA9IGc7XG4gICAgICAgICAgICBzZWxlY3Qudmlld01vZGVsLmdyYXBoaWNzLmFkZChldi5ncmFwaGljKTtcbiAgICAgICAgICAgIGV2LmdyYXBoaWMuc3ltYm9sID0ge1xuICAgICAgICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgICAgICAgICAgICBzdHlsZTogJ25vbmUnLFxuICAgICAgICAgICAgICBvdXRsaW5lOiB7IHN0eWxlOiAnc2hvcnQtZGFzaCcsIHdpZHRoOiAyLjUsIGNvbG9yOiBbMjIxLCAyMjEsIDIyMSwgMV0gfSxcbiAgICAgICAgICAgICAgY29sb3I6IFsyNTUsIDI0MywgMTMsIDAuMjVdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmlldy5nb1RvKGV2LmdyYXBoaWMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGV2LmdyYXBoaWMuZ2VvbWV0cnk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvZ2dsZUFjdGlvbignU2VhcmNoJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4ge1xuICAgICAgLy9vbiBlcnJvciBsb2FkaW5nIHByb3BlcnR5IGxheWVyLCBkaXNwbGF5IGFsZXJ0XG4gICAgICBjb25zb2xlLmxvZyhyZWFzb24pO1xuICAgICAgc2hvd0FsZXJ0KCdQcm9wZXJ0eSBsYXllciBkaWQgbm90IGxvYWQuIFBsZWFzZSBjb250YWN0IGlNQVBTIEhlbHAgRGVzay4nLCAncmVkJyk7XG4gICAgfSk7XG59KTtcbnZpZXcud2hlbihpbml0V2lkZ2V0cyk7XG52aWV3LndoZW4oaW5pdFRpcHMpO1xuLy9zYXZlIHdlYiBtYXAgdG8gbG9jYWwgc3RvcmFnZSBvbiBwYWdlaGlkZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xuICB2aWV3Lm1hcC5yZW1vdmVNYW55KFxuICAgIHZpZXcubWFwLmFsbExheWVyc1xuICAgICAgLmZpbHRlcihsYXllciA9PiB7XG4gICAgICAgIHJldHVybiBsYXllci50eXBlID09PSAnZ3JvdXAnICYmICEobGF5ZXIgYXMgX19lc3JpLkdyb3VwTGF5ZXIpLmxheWVycy5sZW5ndGg7XG4gICAgICB9KVxuICAgICAgLnRvQXJyYXkoKVxuICApO1xuICBjb25zdCBqc29uID0gKHZpZXcubWFwIGFzIGFueSkudG9KU09OKCk7XG4gIGpzb24uaW5pdGlhbFN0YXRlLnZpZXdwb2ludC50YXJnZXRHZW9tZXRyeSA9IHZpZXcuZXh0ZW50O1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ltYXBzJywgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xufSk7XG5cbi8vc2hvdyBmaXJzdCBwYW5lbCBvbiBkZXZpY2VzIHdpZGVyIHRoYW4gNTAwcHggYnkgZGVmYXVsdFxuaWYgKHdpbmRvdy5vdXRlcldpZHRoID49IDUwMCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLXBhbmVsJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLXBhbmVsJyk/LnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtYWN0aW9uLWJhciBjYWxjaXRlLWFjdGlvbicpPy50b2dnbGVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xufVxuXG4vL21vZGlmeSBET00gYWZ0ZXIgbWFwIHZpZXcgbG9hZHNcbnZpZXcud2hlbigoKSA9PiB7XG4gIGluaXRQYW5lbHMoKTtcbiAgZW5hYmxlQWN0aW9uYmFyKCk7XG59KTtcblxuaW5pdFBhbmVsSGVhZGVycygpO1xuaW5pdE1lbnUoKTtcbiJdLCJuYW1lcyI6WyJ3aGVuRGVmaW5lZE9uY2UiLCJ3aGVuRGVmaW5lZCIsInByb3BlcnR5Iiwic3ViY2xhc3MiLCJ0c3giLCJhbGlhc09mIiwicmVuZGVyYWJsZSIsIkNTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ08sSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztFQUM5QixHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFB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
