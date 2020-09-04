
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
              panel.removeAttribute('dismissed');
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
      });
  };
  var actions = document.querySelectorAll('calcite-action');
  actions === null || actions === void 0 ? void 0 : actions.forEach(function (action) {
      action === null || action === void 0 ? void 0 : action.addEventListener('click', function (e) {
          toggleAction(e.target.text);
          initWidget(e.target.text, view);
          actions.forEach(function (action) {
              action.removeAttribute('active');
          });
          action.toggleAttribute('active');
      });
  });
  var enableActionbar = function () {
      initWidget('Search', view);
      document.querySelectorAll('calcite-action').forEach(function (item) {
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
          i.innerHTML += '<style>.content-container { height: 100%; } </style>';
          item.addEventListener('calcitePanelDismissedChange', function (e) {
              var _a, _b;
              if (window.outerWidth <= 500) {
                  if (e.target.dismissed) {
                      (_a = document.querySelector('#viewDiv')) === null || _a === void 0 ? void 0 : _a.classList.remove('below');
                  }
                  else {
                      (_b = document.querySelector('#viewDiv')) === null || _b === void 0 ? void 0 : _b.classList.add('below');
                  }
              }
              if (e.target.dismissed) {
                  actions.forEach(function (action) {
                      action.removeAttribute('active');
                  });
              }
          });
      });
  };
  //# sourceMappingURL=panels.js.map

  var _a, _b;
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
          toggleAction('Search');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FwcC50cyIsIi4uLy4uL3NyYy9tZW51LnRzIiwiLi4vLi4vc3JjL3RpcHMudHMiLCIuLi8uLi9zcmMvYWxlcnQudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaC9Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL1Byb3BlcnR5U2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUvTWVhc3VyZVZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL01lYXN1cmUudHN4IiwiLi4vLi4vc3JjL2RhdGEvc2VhcmNoLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy9EcmF3Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvRHJhdy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9TZWxlY3QvU2VsZWN0Vmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvU2VsZWN0LnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL0Jhc2VNYXBzL0Jhc2VNYXBzVmlld01vZGVsLnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvQmFzZU1hcHMudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvTGF5ZXJzL0xheWVyc1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xheWVycy50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaC9Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0xvY2F0aW9uU2VhcmNoLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzLnRzIiwiLi4vLi4vc3JjL2FjdGlvbmJhci50cyIsIi4uLy4uL3NyYy9wYW5lbHMudHMiLCIuLi8uLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG5leHBvcnQgbGV0IG1hcCA9IG5ldyBXZWJNYXAoKTtcbm1hcCA9IG5ldyBXZWJNYXAoeyBwb3J0YWxJdGVtOiB7IGlkOiAnOTUwOTI0Mjg3NzRjNGIxZmI2YTNiNmY1ZmVkOWZiYzQnIH0gfSk7XG4vLyBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpKSB7XG4vLyAgIG1hcCA9IFdlYk1hcC5mcm9tSlNPTihKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hcHMnKSBhcyBzdHJpbmcpKTtcbi8vIH1cbiIsImV4cG9ydCBsZXQgdGhlbWUgPSAnbGlnaHQnO1xuY29uc3Qgc2V0VGhlbWUgPSAodGhlbWU6IHN0cmluZykgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWNvbG9yJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXRpcC1tYW5hZ2VyJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWRyb3Bkb3duJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGhlbWUnLCB0aGVtZSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rJykuZm9yRWFjaChsaW5rID0+IHtcbiAgICBpZiAobGluay5ocmVmLmluY2x1ZGVzKHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JykpIHtcbiAgICAgIGxpbmsuaHJlZiA9ICdodHRwczovL2pzLmFyY2dpcy5jb20vNC4xNi9lc3JpL3RoZW1lcy8nICsgdGhlbWUgKyAnL21haW4uY3NzJztcbiAgICB9XG4gIH0pO1xufTtcbmV4cG9ydCBjb25zdCBpbml0TWVudSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1kcm9wZG93bicpPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlRHJvcGRvd25TZWxlY3QnLCAoZTogYW55KSA9PiB7XG4gICAgZS50YXJnZXQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1kcm9wZG93bi1pdGVtJykuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpIGFzIHN0cmluZztcbiAgICAgICAgdGhlbWUgPSB2YWx1ZTtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIHNldFRoZW1lKHRoZW1lKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpIHtcbiAgICBsZXQgdGhlbWVOYW1lOiBzdHJpbmcgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgYXMgc3RyaW5nO1xuICAgIHNldFRoZW1lKHRoZW1lTmFtZSk7XG5cbiAgICB0aGVtZU5hbWUgPSB0aGVtZU5hbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtZHJvcGRvd24taXRlbScpLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGlmICgoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgc3RyaW5nKSAhPSB0aGVtZU5hbWUpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpIGFzIHN0cmluZztcbiAgICAgICAgdGhlbWUgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgYXMgc3RyaW5nKSA9PT0gdGhlbWVOYW1lKSB7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL21lbnUnO1xuXG5jb25zdCB0aXBHcm91cHMgPSBbXG4gIHtcbiAgICBwYW5lbDoge1xuICAgICAgbmFtZTogJ3NlbGVjdFRpcCcsXG4gICAgICB0aXRsZTogJ1NlbGVjdGlvbicsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnVG8gZHJhdyBhIGNvbnRpbnVvdXMgbGluZSBvciBwb2x5Z29uLCBsb25nIHByZXNzIGFuZCBkcmFnIHlvdXIgY3Vyc29yJyxcbiAgICAgICAgICB0aXRsZTogJ0ZyZWVoYW5kIERyYXdpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnVG8gZHJhdyBhIGNvbnRpbnVvdXMgbGluZSBvciBwb2x5Z29uLCBsb25nIHByZXNzIGFuZCBkcmFnIHlvdXIgY3Vyc29yJyxcbiAgICAgICAgICB0aXRsZTogJ0ZyZWVoYW5kIERyYXdpbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwYW5lbDoge1xuICAgICAgbmFtZTogJ3Byb3BlcnR5U2VhcmNoVGlwJyxcbiAgICAgIHRpdGxlOiAnUHJvcGVydHkgU2VhcmNoJyxcbiAgICAgIHRpcHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAnVG8gc2VhcmNoIGJ5IGEgcG9ydGlvbiBvZiBhbiBvd25lciBuYW1lIG9yIGFkZHJlc3MsIGhpdCBlbnRlciB3aXRob3V0IHNlbGVjdGluZyBmb3JtIHRoZSBsaXN0IG9mIHN1Z2dlc3Rpb25zLicsXG4gICAgICAgICAgdGl0bGU6ICdXaWxkY2FyZCBTZWFyY2gnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnVG8gcXVpY2tseSBzZWxlY3QgYSBwcm9wZXJ0eSBmcm9tIHRoZSBtYXAsIGxvbmcgcHJlc3Mgb24gYSBwcm9wZXJ0eSBvbiB0aGUgbWFwLicsXG4gICAgICAgICAgdGl0bGU6ICdMb25nIFByZXNzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIHNlbGVjdCBieSBhIGxvY2F0aW9uIHVzZSB0aGUgcHJvcGVydHkgc2VsZWN0aW9uIHRvb2wuJyxcbiAgICAgICAgICB0aXRsZTogJ1NlbGVjdCBCeSBMb2NhdGlvbidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIHBhbmVsOiB7XG4gICAgICBuYW1lOiAnYmFzZW1hcFRpcCcsXG4gICAgICB0aXRsZTogJ0Jhc2VtYXBzJyxcbiAgICAgIHRpcHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAnVGhlIGltYWdlcnkgYW5kIGltYWdlcnkgaHlicmlkIGJhc2UgbWFwcyBsaXN0ZWQgdW5kZXIgdGhlIG1hcHMgdGFiIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIGxhdGVzdCBpbWFnZXJ5IGZyb20gUmFsZWlnaCAoMjAxOSkgYW5kIGZyb20gdGhlIFN0YXRlIG9mIE5vcnRoIENhcm9saW5hICgyMDE3KS4nLFxuICAgICAgICAgIHRpdGxlOiAnSW1hZ2VyeSBCYXNlbWFwcydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0VGlwcygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpcCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtdGlwLW1hbmFnZXInKT8ucmVtb3ZlKCk7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgY29uc3QgbWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtdGlwLW1hbmFnZXInKTtcbiAgICAgIG1hbmFnZXIuc2V0QXR0cmlidXRlKCd0aGVtZScsIHRoZW1lKTtcbiAgICAgIGNvbnN0IHRpcEdyb3VwID0gdGlwR3JvdXBzLmZpbmQoZ3JvdXAgPT4ge1xuICAgICAgICByZXR1cm4gZ3JvdXAucGFuZWwubmFtZSA9PT0gaXRlbS5pZDtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtdGlwLWdyb3VwJyk7XG4gICAgICBncm91cC5zZXRBdHRyaWJ1dGUoJ3RleHQtZ3JvdXAtdGl0bGUnLCAodGlwR3JvdXAgYXMgYW55KT8ucGFuZWwudGl0bGUpO1xuICAgICAgbWFuYWdlci5hcHBlbmRDaGlsZChncm91cCk7XG4gICAgICB0aXBHcm91cD8ucGFuZWwudGlwcy5mb3JFYWNoKHRpcCA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGNpdGVUaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcCcpO1xuICAgICAgICBjYWxjaXRlVGlwLnNldEF0dHJpYnV0ZSgnaGVhZGluZycsIHRpcC50aXRsZSk7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAuaW5uZXJIVE1MID0gdGlwLm1lc3NhZ2U7XG4gICAgICAgIGNhbGNpdGVUaXAuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGNhbGNpdGVUaXApO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudD8uYm9keT8uYXBwZW5kQ2hpbGQobWFuYWdlcik7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGVydCh0ZXh0OiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1hbGVydCcpPy5yZW1vdmUoKTtcbiAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLWFsZXJ0Jyk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ3Nsb3QnLCAnYWxlcnQtbWVzc2FnZScpO1xuICBtZXNzYWdlLmlubmVySFRNTCA9IHRleHQ7XG4gIGFsZXJ0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBjb2xvcik7XG4gIGFsZXJ0LnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAnJyk7XG5cbiAgYWxlcnQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWxlcnQpO1xufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gnO1xuaW1wb3J0IEZlYXR1cmVUYWJsZSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZVRhYmxlJztcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmUnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcbmltcG9ydCBMYXllclNlYXJjaFNvdXJjZSBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoL0xheWVyU2VhcmNoU291cmNlJztcbmltcG9ydCBGaWVsZENvbHVtbkNvbmZpZyBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZVRhYmxlL0ZpZWxkQ29sdW1uQ29uZmlnJztcbmltcG9ydCBQb3B1cFRlbXBsYXRlIGZyb20gJ2VzcmkvUG9wdXBUZW1wbGF0ZSc7XG5pbXBvcnQgRXhwcmVzc2lvbkluZm8gZnJvbSAnZXNyaS9wb3B1cC9FeHByZXNzaW9uSW5mbyc7XG5pbXBvcnQgTWVudUJ1dHRvbkl0ZW0gZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZS9HcmlkL3N1cHBvcnQvQnV0dG9uTWVudUl0ZW0nO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlLCB3aGVuRGVmaW5lZCB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuUHJvcGVydHlTZWFyY2guUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBjb25kb3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBwcm9wZXJ0eSgpIGFkZHJlc3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBwcm9wZXJ0eSgpIHByb3BlcnR5TGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuXG4gIEBwcm9wZXJ0eSgpIHNlYXJjaFdpZGdldDogZXNyaS53aWRnZXRzU2VhcmNoO1xuICBAcHJvcGVydHkoKSBmZWF0dXJlVGFibGU6IGVzcmkuRmVhdHVyZVRhYmxlO1xuICBAcHJvcGVydHkoKSBmZWF0dXJlOiBlc3JpLkZlYXR1cmU7XG4gIEBwcm9wZXJ0eSgpIGdlb21ldHJ5OiBlc3JpLkdlb21ldHJ5O1xuXG4gIGNsdXN0ZXJQb2ludHM6IEZlYXR1cmVMYXllcjtcblxuICBncmFwaGljcyA9IG5ldyBHcmFwaGljc0xheWVyKHsgaWQ6ICdwcm9wZXJ0eS1zZWxlY3QnLCBsaXN0TW9kZTogJ2hpZGUnLCBtaW5TY2FsZTogMTkyMDAgfSk7XG4gIHNpbmdsZVN5bWJvbCA9IHtcbiAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgIHN0eWxlOiAnbm9uZScsXG4gICAgb3V0bGluZTogeyB3aWR0aDogMi41LCBjb2xvcjogWzI1NSwgODIsIDgyLCAxXSB9LFxuICAgIGNvbG9yOiBbMjUzLCA0NiwgNjUsIDAuMjVdXG4gIH07XG4gIG11bHRpU3ltYm9sID0ge1xuICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgc3R5bGU6ICdub25lJyxcbiAgICBvdXRsaW5lOiB7IHdpZHRoOiAyLjUsIGNvbG9yOiBbMjQ5LCAyNDMsIDAsIDFdIH0sXG4gICAgY29sb3I6IFsyNTMsIDQ2LCA2NSwgMC4yNV1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ2NvbmRvc1RhYmxlJywgdGhpcy5pbml0U2VhcmNoLmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkKHRoaXMsICdnZW9tZXRyeScsIHRoaXMuc2VhcmNoQnlHZW9tZXRyeS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFyY2FkZUV4cHJlc3Npb25JbmZvcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnYm9tLWRvYy1udW0nLFxuICAgICAgdGl0bGU6ICdib20tZG9jLW51bScsXG4gICAgICBleHByZXNzaW9uOlxuICAgICAgICBcInZhciByZXN1bHRzID0gRmVhdHVyZVNldEJ5UmVsYXRpb25zaGlwTmFtZSgkZmVhdHVyZSwgJ0NPTkRPX0JPT0tTJywgWycqJ10sIGZhbHNlKTsgcmV0dXJuIEZpcnN0KHJlc3VsdHMpLkJPTV9ET0NfTlVNO1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGVlZC1kb2MtbnVtJyxcbiAgICAgIHRpdGxlOiAnZGVlZC1kb2MtbnVtJyxcbiAgICAgIGV4cHJlc3Npb246XG4gICAgICAgIFwidmFyIHJlc3VsdHMgPSBGZWF0dXJlU2V0QnlSZWxhdGlvbnNoaXBOYW1lKCRmZWF0dXJlLCAnQ09ORE9fQk9PS1MnLCBbJyonXSwgZmFsc2UpOyByZXR1cm4gRmlyc3QocmVzdWx0cykuREVFRF9ET0NfTlVNO1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICAgIHRpdGxlOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICdXaGVuKElzRW1wdHkoJGZlYXR1cmUuQUREUjMpLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIzKSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgICAgdGl0bGU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgJ1wiQnVpbGRpbmcgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkJMREdfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJMYW5kIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5MQU5EX1ZBTCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG90YWwgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLlRPVEFMX1ZBTFVFX0FTU0QnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGVlZC1ib29rLXBhZ2UnLFxuICAgICAgdGl0bGU6ICdkZWVkLWJvb2stcGFnZScsXG4gICAgICBleHByZXNzaW9uOiAnXCJCb29rIFwiKyRmZWF0dXJlLkRFRURfQk9PSytcIiBQYWdlIFwiKyRmZWF0dXJlLkRFRURfUEFHRSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdnZW5lcmFsJyxcbiAgICAgIHRpdGxlOiAnZ2VuZXJhbCcsXG4gICAgICBleHByZXNzaW9uOlxuICAgICAgICAnXCJQSU5cIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKyRmZWF0dXJlLlBJTl9OVU0rXCIgXCIrJGZlYXR1cmUuUElOX0VYVCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgICAnXCJSRUlEXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5SRUlEK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJDaXR5XCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICAgJ1Byb3BlcigkZmVhdHVyZS5DSVRZX0RFQ09ERSkrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkp1cmlzZGljdGlvblwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAgICckZmVhdHVyZS5QTEFOTklOR19KVVJJU0RJQ1RJT04rVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIlRvd25zaGlwXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStQcm9wZXIoJGZlYXR1cmUuVE9XTlNISVBfREVDT0RFKSdcbiAgICB9XG4gIF0gYXMgRXhwcmVzc2lvbkluZm9bXTtcblxuICBwb3B1cFRlbXBsYXRlID0gbmV3IFBvcHVwVGVtcGxhdGUoe1xuICAgIGV4cHJlc3Npb25JbmZvczogdGhpcy5hcmNhZGVFeHByZXNzaW9uSW5mb3MsXG4gICAgY29udGVudDogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHRleHQ6XG4gICAgICAgICAgJzxoMSBjbGFzcz1cInRleHQtZ3JlZW5cIj57U0lURV9BRERSRVNTfTwvaDE+JyArXG4gICAgICAgICAgJzxoMj5HZW5lcmFsPC9oMj57ZXhwcmVzc2lvbi9nZW5lcmFsfScgK1xuICAgICAgICAgICc8aDI+T3duZXI8L2gyPntPV05FUn08YnIvPntleHByZXNzaW9uL21haWxpbmctYWRkcmVzc30nICtcbiAgICAgICAgICAnPGgyPlZhbHVhdGlvbjwvaDI+e2V4cHJlc3Npb24vcHJvcGVydHktdmFsdWVzfScgK1xuICAgICAgICAgICc8aDI+U2FsZSBJbmZvcm1hdGlvbjwvaDI+e1RPVFNBTFBSSUNFfTxici8+e1NBTEVfREFURX0nICtcbiAgICAgICAgICAnPGgyPkRlZWRzPC9oMj57ZXhwcmVzc2lvbi9kZWVkLWJvb2stcGFnZX0nICtcbiAgICAgICAgICAnPGJyLz48c3Ryb25nPkRlZWQgRGF0ZTwvc3Ryb25nPjxici8+e0RFRURfREFURX08YnIvPicgK1xuICAgICAgICAgICc8YnIvPkxlZ2FsIERlc2NyaXB0aW9uPGJyLz57UFJPUERFU0N9PGJyLz4nICtcbiAgICAgICAgICAnPGEgaHJlZj1cImh0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9ib29rc3dlYi9wZGZ2aWV3LmFzcHg/ZG9jaWQ9e2V4cHJlc3Npb24vYm9tLWRvYy1udW19JlJlY29yZERhdGU9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+Qm9vayBvZiBNYXBzPC9hPjxici8+PGEgaHJlZj1cImh0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9ib29rc3dlYi9wZGZ2aWV3LmFzcHg/ZG9jaWQ9e2V4cHJlc3Npb24vZGVlZC1kb2MtbnVtfSZSZWNvcmREYXRlPVwiIHRhcmdldD1cIl9ibGFua1wiPkRlZWQ8L2E+J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ21lZGlhJyxcbiAgICAgICAgbWVkaWFJbmZvczogW11cbiAgICAgIH1cbiAgICBdXG4gIH0pO1xuXG4gIHNlYXJjaEJ5R2VvbWV0cnkoZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnkpIHtcbiAgICB0aGlzLnByb3BlcnR5TGF5ZXJcbiAgICAgIC5xdWVyeUZlYXR1cmVzKHsgZ2VvbWV0cnk6IGdlb21ldHJ5LCByZXR1cm5HZW9tZXRyeTogdHJ1ZSwgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSB9KVxuICAgICAgLnRoZW4ocHJvcGVydHlSZXN1bHQgPT4ge1xuICAgICAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLnByb3BlcnR5TGF5ZXIucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdQUk9QRVJUWV9DT05ETyc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUxheWVyXG4gICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBsZXQgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQocmVzdWx0W2tleV0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSB0aGlzLmNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyKHRoaXMuY29uZG9zVGFibGUuZmllbGRzLCBmZWF0dXJlcyk7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGlmICghZmVhdHVyZXNbMF0uZ2VvbWV0cnkpIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlc1swXS5nZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZShmZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIFtmZWF0dXJlc1swXS5nZXRPYmplY3RJZCgpXSk7XG4gICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUucmVuZGVyTm93KCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgcHJvcGVydHlSZXN1bHQuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICAgIGZlYXR1cmUuc3ltYm9sID1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxID8gKHRoaXMubXVsdGlTeW1ib2wgYXMgYW55KSA6ICh0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnkpO1xuXG4gICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGZlYXR1cmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZlYXR1cmVUYWJsZUxheWVyID0gKGZpZWxkczogZXNyaS5GaWVsZFtdLCBmZWF0dXJlczogZXNyaS5HcmFwaGljW10pID0+IHtcbiAgICByZXR1cm4gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICAgIHNvdXJjZTogZmVhdHVyZXMsXG4gICAgICB0aXRsZTogJ1NlbGVjdGVkIHByb3BlcnRpZXMnLFxuICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJyxcbiAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHRoaXMudmlldy5zcGF0aWFsUmVmZXJlbmNlXG4gICAgfSk7XG4gIH07XG4gIGFkZEdyYXBoaWNzID0gKHJlc3VsdDogZXNyaS5GZWF0dXJlU2V0KSA9PiB7XG4gICAgdGhpcy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcbiAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgIGZlYXR1cmUuc3ltYm9sID0gcmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA+IDEgPyAodGhpcy5tdWx0aVN5bWJvbCBhcyBhbnkpIDogKHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueSk7XG4gICAgICB0aGlzLmdyYXBoaWNzLmFkZChmZWF0dXJlKTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRQcm9wZXJ0eSA9IChvaWRzOiBhbnlbXSwgc291cmNlPzogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVsYXRpb25zaGlwID0gdGhpcy5jb25kb3NUYWJsZS5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICByZXR1cm4gci5uYW1lID09PSAnQ09ORE9fUFJPUEVSVFknO1xuICAgIH0pO1xuICAgIHRoaXMuY29uZG9zVGFibGVcbiAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7XG4gICAgICAgIHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXA/LmlkLFxuICAgICAgICBvYmplY3RJZHM6IG9pZHMsXG4gICAgICAgIG91dEZpZWxkczogWydPQkpFQ1RJRCcsICdSRUlEJ10sXG4gICAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BlcnR5TGF5ZXJcbiAgICAgICAgICAucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICBvYmplY3RJZHM6IG9pZHMsXG4gICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWUsXG4gICAgICAgICAgICBvdXRTcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmdvVG8ocmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkR3JhcGhpY3MocmVzdWx0KTtcbiAgICAgICAgICAgICAgY29uc3QgcG9pbnRzOiBHcmFwaGljW10gPSBbXTtcbiAgICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHQgPSBmZWF0dXJlLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgcHQuZ2VvbWV0cnkgPSAocHQuZ2VvbWV0cnkgYXMgZXNyaS5Qb2x5Z29uKS5jZW50cm9pZDtcbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaChwdCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmNsdXN0ZXJQb2ludHNcbiAgICAgICAgICAgICAgICAucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiAnMT0xJywgcmV0dXJuR2VvbWV0cnk6IGZhbHNlLCBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnXSB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNsdXN0ZXJQb2ludHMuYXBwbHlFZGl0cyh7IGRlbGV0ZUZlYXR1cmVzOiByZXN1bHQuZmVhdHVyZXMgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2x1c3RlclBvaW50cy5hcHBseUVkaXRzKHsgYWRkRmVhdHVyZXM6IHBvaW50cyB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsdXN0ZXJQb2ludHMucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgc2VhcmNoQ29tcGxldGUgPSAoZXZlbnQ6IGVzcmkuU2VhcmNoU2VhcmNoQ29tcGxldGVFdmVudCkgPT4ge1xuICAgIGlmICghdGhpcy5zZWFyY2hXaWRnZXQudmlld01vZGVsLnNlbGVjdGVkU3VnZ2VzdGlvbikge1xuICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgbGV0IHdoZXJlID0gJyc7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICAgIGlmICghdGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlKSB7XG4gICAgICAgIHdoZXJlID1cbiAgICAgICAgICBcIk9XTkVSIGxpa2UgJ1wiICtcbiAgICAgICAgICBldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgIFwiJScgT1IgUkVJRCBsaWtlICdcIiArXG4gICAgICAgICAgZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICBcIiUnIE9SIFBJTl9OVU0gbGlrZSAnXCIgK1xuICAgICAgICAgIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgXCIlJ1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCh0aGlzLnNlYXJjaFdpZGdldC5hY3RpdmVTb3VyY2UgYXMgYW55KT8uc2VhcmNoRmllbGRzLmluY2x1ZGVzKCdPV05FUicpKSB7XG4gICAgICAgICAgd2hlcmUgPSBcIk9XTkVSIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ1BJTl9OVU0nKSkge1xuICAgICAgICAgIHdoZXJlID0gXCJQSU5fTlVNIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ1JFSUQnKSkge1xuICAgICAgICAgIHdoZXJlID0gXCJSRUlEIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdGFibGVGZWF0dXJlczogYW55W10gPSBbXTtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgdGhpcy5jb25kb3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6IHdoZXJlLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGFibGVGZWF0dXJlcyA9IHJlc3VsdC5mZWF0dXJlcztcbiAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhpcy5zZWFyY2hXaWRnZXQuYWN0aXZlU291cmNlIHx8XG4gICAgICAgICAgKHRoaXMuc2VhcmNoV2lkZ2V0LmFjdGl2ZVNvdXJjZSBhcyBhbnkpPy5zZWFyY2hGaWVsZHMuaW5jbHVkZXMoJ0FERFJFU1MnKVxuICAgICAgICApIHtcbiAgICAgICAgICB3aGVyZSA9IFwiQUREUkVTUyBsaWtlICclXCIgKyBldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkgKyBcIiUnXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2hlcmUgPSAnQUREUkVTUyBJUyBOVUxMJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogd2hlcmUsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuYWRkcmVzc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdBRERSRVNTRVNfQ09ORE8nO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGFkZHJPaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgYWRkck9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgJiYgYWRkck9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZVxuICAgICAgICAgICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwLmlkLCBvYmplY3RJZHM6IGFkZHJPaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVGZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgdGFibGVGZWF0dXJlcyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLnJlbmRlck5vdygpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgdGFibGVGZWF0dXJlcyk7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5yZW5kZXJOb3coKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChldmVudC5udW1SZXN1bHRzKSB7XG4gICAgICAgIGNvbnN0IGxheWVyID0gKGV2ZW50LnJlc3VsdHNbMF0uc291cmNlIGFzIExheWVyU2VhcmNoU291cmNlKS5sYXllciBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIGV2ZW50LnJlc3VsdHNbMF0ucmVzdWx0cy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChyLmZlYXR1cmUuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGF5ZXIubGF5ZXJJZCA9PT0gNCkge1xuICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IGxheWVyLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdBRERSRVNTRVNfQ09ORE8nO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgJiYgb2lkcykge1xuICAgICAgICAgICAgbGF5ZXJcbiAgICAgICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcC5pZCwgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlLmxheWVyID0gdGhpcy5jb25kb3NUYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKGZlYXR1cmUsIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsIFtdLCBvaWRzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gdGhpcy5jcmVhdGVGZWF0dXJlVGFibGVMYXllcih0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcywgW2ZlYXR1cmVdKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29uZG9zVGFibGUucXVlcnlGZWF0dXJlcyh7IG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKHJlc3VsdC5mZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IHRoaXMuY3JlYXRlRmVhdHVyZVRhYmxlTGF5ZXIodGhpcy5jb25kb3NUYWJsZS5maWVsZHMsIHJlc3VsdC5mZWF0dXJlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHNldEZlYXR1cmUoZmVhdHVyZTogZXNyaS5HcmFwaGljLCB2aWV3OiBlc3JpLk1hcFZpZXcsIG1lZGlhSW5mb3M6IGFueVtdLCBvaWRzOiBhbnlbXSkge1xuICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuY29uZG9zVGFibGUucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0NPTkRPX1BIT1RPUyc7XG4gICAgfSk7XG4gICAgbWVkaWFJbmZvcyA9IFtdO1xuICAgIHRoaXMuY29uZG9zVGFibGVcbiAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXA/LmlkLCBvYmplY3RJZHM6IG9pZHMsIG91dEZpZWxkczogWycqJ10gfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgbWVkaWFJbmZvcy5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgICBjYXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBzb3VyY2VVUkw6XG4gICAgICAgICAgICAgICAgICAnaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL3JlYWxlc3RhdGUvcGhvdG9zL212aWRlby8nICtcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdJTUFHRURJUicpICtcbiAgICAgICAgICAgICAgICAgICcvJyArXG4gICAgICAgICAgICAgICAgICBmZWF0dXJlLmdldEF0dHJpYnV0ZSgnSU1BR0VOQU1FJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25kb3NUYWJsZS5wb3B1cFRlbXBsYXRlLmNvbnRlbnRbMV0ubWVkaWFJbmZvcyA9IG1lZGlhSW5mb3M7XG4gICAgICAgIGZlYXR1cmUubGF5ZXIgPSB0aGlzLmNvbmRvc1RhYmxlO1xuICAgICAgICBmZWF0dXJlLnBvcHVwVGVtcGxhdGUgPSAoZmVhdHVyZS5sYXllciBhcyBlc3JpLkZlYXR1cmVMYXllcikucG9wdXBUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBmZWF0dXJlO1xuICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYy5zeW1ib2wgPSB0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5ncmFwaGljcy5ncmFwaGljcy5maW5kKGdyYXBoaWMgPT4ge1xuICAgICAgICAgIHJldHVybiBncmFwaGljLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSA9PT0gJ3RydWUnO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgc2VsZWN0ZWQuc3ltYm9sID0gdGhpcy5tdWx0aVN5bWJvbCBhcyBhbnk7XG4gICAgICAgICAgc2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyYXBoaWMgPSB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLmZpbmQoZ3JhcGhpYyA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdSRUlEJykgPT09IGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdSRUlEJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZ3JhcGhpYykge1xuICAgICAgICAgIGdyYXBoaWMuc3ltYm9sID0gdGhpcy5zaW5nbGVTeW1ib2wgYXMgYW55O1xuICAgICAgICAgIGdyYXBoaWMuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgICAgdGhpcy5ncmFwaGljcy5ncmFwaGljcy5yZW9yZGVyKGdyYXBoaWMsIHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIGV4cG9ydFRhYmxlKCkge1xuICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyLnF1ZXJ5RmVhdHVyZXMoeyBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGxldCBjc3YgPSAnJztcbiAgICAgIHJlc3VsdC5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGNzdiArPSBmaWVsZC5hbGlhcyArICcsJztcbiAgICAgIH0pO1xuICAgICAgY3N2ICs9ICdcXHJcXG4nO1xuICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZlYXR1cmUuYXR0cmlidXRlcykge1xuICAgICAgICAgIGlmIChrZXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZGF0ZScpKSB7XG4gICAgICAgICAgICBjc3YgKz0gJ1wiJyArIG5ldyBEYXRlKGZlYXR1cmUuYXR0cmlidXRlc1trZXldKS50b0RhdGVTdHJpbmcoKSArICdcIiwnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoa2V5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2FjcmVzJykpIHtcbiAgICAgICAgICAgIGNzdiArPSAnXCInICsgcGFyc2VGbG9hdChmZWF0dXJlLmF0dHJpYnV0ZXNba2V5XSkudG9GaXhlZCgyKSArICdcIiwnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc3YgKz0gJ1wiJyArIGZlYXR1cmUuYXR0cmlidXRlc1trZXldICsgJ1wiLCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNzdiArPSAnXFxyXFxuJztcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZXhwb3J0ZWRGaWxlbm1hZSA9ICdpbWFwc19leHBvcnQuY3N2JztcblxuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjc3ZdLCB7IHR5cGU6ICd0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04OycgfSk7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgaWYgKGxpbmsuZG93bmxvYWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBmZWF0dXJlIGRldGVjdGlvblxuICAgICAgICAvLyBCcm93c2VycyB0aGF0IHN1cHBvcnQgSFRNTDUgZG93bmxvYWQgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZXhwb3J0ZWRGaWxlbm1hZSk7XG4gICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNzLCB2aWV3Lm1hcC5hbGxMYXllcnMubGVuZ3RoIC0gMSk7XG4gICAgdGhpcy5jbHVzdGVyUG9pbnRzID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICBzb3VyY2U6IFtdLFxuICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJyxcbiAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgIG1heFNjYWxlOiAxOTIwMSxcbiAgICAgIGxpc3RNb2RlOiAnaGlkZScsXG4gICAgICByZW5kZXJlcjoge1xuICAgICAgICB0eXBlOiAnc2ltcGxlJyxcbiAgICAgICAgc3ltYm9sOiB7XG4gICAgICAgICAgdHlwZTogJ3NpbXBsZS1tYXJrZXInLFxuICAgICAgICAgIHNpemU6IDQsXG4gICAgICAgICAgY29sb3I6ICcjNjlkY2ZmJyxcbiAgICAgICAgICBvdXRsaW5lOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwgMTM5LCAxNzQsIDAuNSknLFxuICAgICAgICAgICAgd2lkdGg6IDVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gYXMgYW55LFxuICAgICAgZmVhdHVyZVJlZHVjdGlvbjoge1xuICAgICAgICB0eXBlOiAnY2x1c3RlcicsXG4gICAgICAgIGxhYmVsaW5nSW5mbzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIHR1cm4gb2ZmIGRlY29uZmxpY3Rpb24gdG8gZW5zdXJlIGFsbCBjbHVzdGVycyBhcmUgbGFiZWxlZFxuICAgICAgICAgICAgZGVjb25mbGljdGlvblN0cmF0ZWd5OiAnbm9uZScsXG4gICAgICAgICAgICBsYWJlbEV4cHJlc3Npb25JbmZvOiB7XG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiVGV4dCgkZmVhdHVyZS5jbHVzdGVyX2NvdW50LCAnIywjIyMnKVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3ltYm9sOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDA0YTVkJyxcbiAgICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICAgIHdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgICAgIGZhbWlseTogJ05vdG8gU2FucycsXG4gICAgICAgICAgICAgICAgc2l6ZTogJzEycHgnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gYXMgYW55LFxuICAgICAgICAgICAgbGFiZWxQbGFjZW1lbnQ6ICdjZW50ZXItY2VudGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHRoaXMudmlldy5zcGF0aWFsUmVmZXJlbmNlXG4gICAgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC5hZGQodGhpcy5jbHVzdGVyUG9pbnRzKTtcbiAgfVxuICBpbml0U2VhcmNoKGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcikge1xuICAgIGNvbnN0IHRhYmxlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgIGZpZWxkczogW1xuICAgICAgICB7IG5hbWU6ICdTSVRFX0FERFJFU1MnLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdBZGRyZXNzJyB9LFxuICAgICAgICB7IG5hbWU6ICdPV05FUicsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ093bmVyJyB9LFxuICAgICAgICB7IG5hbWU6ICdQSU5fTlVNJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnUElOJyB9LFxuICAgICAgICB7IG5hbWU6ICdSRUlEJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnUkVJRCcgfVxuICAgICAgXSxcbiAgICAgIHNvdXJjZTogW10sXG4gICAgICB0aXRsZTogJ1NlbGVjdGVkIHByb3BlcnRpZXMnLFxuICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJyxcbiAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHRoaXMudmlldy5zcGF0aWFsUmVmZXJlbmNlXG4gICAgfSk7XG4gICAgdGhpcy5mZWF0dXJlID0gbmV3IEZlYXR1cmUoeyB2aWV3OiB0aGlzLnZpZXcgfSk7XG4gICAgdGhpcy5mZWF0dXJlVGFibGUgPSBuZXcgRmVhdHVyZVRhYmxlKHtcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIGxheWVyOiB0YWJsZUxheWVyLFxuICAgICAgZmllbGRDb25maWdzOiBbXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1NJVEVfQUREUkVTUycsXG4gICAgICAgICAgbGFiZWw6ICdBZGRyZXNzJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ09XTkVSJyxcbiAgICAgICAgICBsYWJlbDogJ093bmVyJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1BJTl9OVU0nLFxuICAgICAgICAgIGxhYmVsOiAnUElOJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1JFSUQnLFxuICAgICAgICAgIGxhYmVsOiAnUkVJRCcsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgbWVudUNvbmZpZzoge1xuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICh7XG4gICAgICAgICAgICBsYWJlbDogJ0V4cG9ydCdcbiAgICAgICAgICB9IGFzIHVua25vd24pIGFzIE1lbnVCdXR0b25JdGVtXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBidXR0b246IE1lbnVCdXR0b25JdGVtID0gdGhpcy5mZWF0dXJlVGFibGU/Lm1lbnVDb25maWc/Lml0ZW1zPy5maW5kKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0ubGFiZWwgPT09ICdFeHBvcnQnO1xuICAgIH0pIGFzIE1lbnVCdXR0b25JdGVtO1xuICAgIGJ1dHRvbi5jbGlja0Z1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgdGhpcy5leHBvcnRUYWJsZSgpO1xuICAgIH07XG4gICAgYnV0dG9uLmNsaWNrRnVuY3Rpb24uYmluZCh0aGlzLmZlYXR1cmVUYWJsZSk7XG5cbiAgICB0aGlzLmZlYXR1cmVUYWJsZS5vbignc2VsZWN0aW9uLWNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICh0aGlzLmZlYXR1cmVUYWJsZSBhcyBhbnkpLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICBpZiAoZXZlbnQuYWRkZWQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZ2V0UHJvcGVydHkoW2V2ZW50LmFkZGVkWzBdLmZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpXSwgJ3RhYmxlJyk7XG4gICAgICAgIHRoaXMuc2V0RmVhdHVyZShcbiAgICAgICAgICBldmVudC5hZGRlZFswXS5mZWF0dXJlLFxuICAgICAgICAgIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsXG4gICAgICAgICAgW10sXG4gICAgICAgICAgW2V2ZW50LmFkZGVkWzBdLmZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpXVxuICAgICAgICApO1xuICAgICAgICBldmVudC5hZGRlZFswXS5mZWF0dXJlLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xuICAgICAgYWxsUGxhY2Vob2xkZXI6ICdBZGRyZXNzLCBvd25lciwgUElOLCBvciBSRUlEJyxcbiAgICAgIGluY2x1ZGVEZWZhdWx0U291cmNlczogZmFsc2UsXG4gICAgICBjb250YWluZXI6ICdzZWFyY2gnLFxuICAgICAgc291cmNlczogW1xuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiB0aGlzLmFkZHJlc3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnQUREUkVTUyddLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ0FERFJFU1MnLFxuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgIG91dEZpZWxkczogWydBRERSRVNTJywgJ1JFQV9SRUlEJ10sXG4gICAgICAgICAgbmFtZTogJ1NpdGUgQWRkcmVzcycsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiAyMjIgVyBIQVJHRVRUJ1xuICAgICAgICB9KSxcbiAgICAgICAgbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgICAgc2VhcmNoRmllbGRzOiBbJ09XTkVSJ10sXG4gICAgICAgICAgZGlzcGxheUZpZWxkOiAnT1dORVInLFxuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgIG91dEZpZWxkczogWydPV05FUicsICdSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgICAgbmFtZTogJ093bmVyJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IFNNSVRILCBKT0hOJ1xuICAgICAgICB9KSxcbiAgICAgICAgbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgICAgc2VhcmNoRmllbGRzOiBbJ1BJTl9OVU0nXSxcbiAgICAgICAgICBkaXNwbGF5RmllbGQ6ICdQSU5fTlVNJyxcbiAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnUElOX05VTScsICdSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgICAgbmFtZTogJ1BJTicsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiAwNzEyMzQ1Njc4J1xuICAgICAgICB9KSxcbiAgICAgICAgbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBsYXllcjogY29uZG9zVGFibGUsXG4gICAgICAgICAgc2VhcmNoRmllbGRzOiBbJ1JFSUQnXSxcbiAgICAgICAgICBkaXNwbGF5RmllbGQ6ICdSRUlEJyxcbiAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnUkVJRCcsICdPQkpFQ1RJRCddLFxuICAgICAgICAgIG5hbWU6ICdSRUlEJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDAxMjM0NTYnXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hXaWRnZXQudmlld01vZGVsLndhdGNoKCdyZXN1bHRzJywgZXZlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VhcmNoV2lkZ2V0Lm9uKCdzZWFyY2gtY29tcGxldGUnLCB0aGlzLnNlYXJjaENvbXBsZXRlKTtcbiAgfVxuICB0b2dnbGVDb250ZW50ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgPT09ICd0YWJsZScpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZUl0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZUl0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5pbXBvcnQgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgZnJvbSAnLi9Qcm9wZXJ0eVNlYXJjaC9Qcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCc7XG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5U2VhcmNoUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgcHJvcGVydHlMYXllcj86IGVzcmkuRmVhdHVyZUxheWVyO1xuICBjb25kb3NUYWJsZT86IGVzcmkuRmVhdHVyZUxheWVyO1xuICBhZGRyZXNzVGFibGU/OiBlc3JpLkZlYXR1cmVMYXllcjtcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgcHJvcGVydHlzZWFyY2gtYmFzZSdcbn07XG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLlByb3BlcnR5U2VhcmNoJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnR5U2VhcmNoIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuY29uZG9zVGFibGUnKVxuICBjb25kb3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYWRkcmVzc1RhYmxlJylcbiAgYWRkcmVzc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5wcm9wZXJ0eUxheWVyJylcbiAgcHJvcGVydHlMYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuc2VhcmNoV2lkZ2V0JylcbiAgc2VhcmNoV2lkZ2V0OiBlc3JpLndpZGdldHNTZWFyY2g7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZmVhdHVyZVRhYmxlJylcbiAgZmVhdHVyZVRhYmxlOiBlc3JpLkZlYXR1cmVUYWJsZTtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5mZWF0dXJlJylcbiAgZmVhdHVyZTogZXNyaS5GZWF0dXJlO1xuICBAYWxpYXNPZigndmlld01vZGVsLmdlb21ldHJ5JylcbiAgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgPSBuZXcgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogUHJvcGVydHlTZWFyY2hQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfY3JlYXRlU2VhcmNoID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNlYXJjaFdpZGdldCkge1xuICAgICAgdGhpcy5zZWFyY2hXaWRnZXQuY29udGFpbmVyID0gJ3NlYXJjaCc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlVGFibGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZVRhYmxlKSB7XG4gICAgICB0aGlzLmZlYXR1cmVUYWJsZS5jb250YWluZXIgPSAndGFibGUnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZUZlYXR1cmUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZSkge1xuICAgICAgdGhpcy5mZWF0dXJlLmNvbnRhaW5lciA9ICdmZWF0dXJlRGl2JztcbiAgICB9XG4gIH07XG5cbiAgY3VycmVudFJhZGlvQnV0dG9uID0gJ2xpc3QnO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaWRlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUmFkaW9Hcm91cEl0ZW1DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgIC8vIGNhbiBJIGdldCBjaGVja2VkIGFuZCB2YWx1ZSBsaWtlIHRoaXM/XG4gICAgICAgIGlmIChlLnRhcmdldD8uY2hlY2tlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgICAgdGhpcy52aWV3TW9kZWwudG9nZ2xlQ29udGVudChlLnRhcmdldD8udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZVNlYXJjaH0gaWQ9XCJzZWFyY2hcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlVGFibGV9IGlkPVwidGFibGVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImZlYXR1cmVcIiBjbGFzcz1cImhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJmZWF0dXJlRGl2XCIgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUZlYXR1cmV9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdmFsdWU9XCJ0YWJsZVwiIGlkPVwidGFibGVJdGVtXCI+XG4gICAgICAgICAgICBMaXN0XG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB2YWx1ZT1cImZlYXR1cmVcIiBpZD1cImZlYXR1cmVJdGVtXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICBEZXRhaWxzXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IE1lYXN1cmVtZW50IGZyb20gJ2Vzcmkvd2lkZ2V0cy9NZWFzdXJlbWVudCc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTWVhc3VyZS5NZWFzdXJlVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmVWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG4gIG1lYXN1cmVtZW50OiBlc3JpLk1lYXN1cmVtZW50O1xuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gIH1cbiAgbWVhc3VyZU9wZW5lZCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVhc3VyZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwJykgYXMgYW55KS5zZWxlY3RlZEl0ZW0udGl0bGU7XG4gICAgaWYgKHNlbGVjdGVkICE9ICdjbGVhcicpIHtcbiAgICAgIHRoaXMubWVhc3VyZW1lbnQuYWN0aXZlVG9vbCA9IHNlbGVjdGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lYXN1cmVtZW50LmNsZWFyKCk7XG4gICAgfVxuICB9XG4gIGluaXRNZWFzdXJlKCkge1xuICAgIHRoaXMubWVhc3VyZW1lbnQgPSBuZXcgTWVhc3VyZW1lbnQoeyB2aWV3OiB0aGlzLnZpZXcsIGNvbnRhaW5lcjogJ21lYXN1cmVXaWRnZXQnIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBNZWFzdXJlVmlld01vZGVsIGZyb20gJy4vTWVhc3VyZS9NZWFzdXJlVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBNZWFzdXJlUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbWVhc3VyZS1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5NZWFzdXJlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmUgZXh0ZW5kcyBXaWRnZXQge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5tZWFzdXJlbWVudCcpXG4gIG1lYXN1cmVtZW50OiBlc3JpLk1lYXN1cmVtZW50O1xuICBAYWxpYXNPZigndmlld01vZGVsLmluaXRNZWFzdXJlJylcbiAgaW5pdE1lYXN1cmU6IEZ1bmN0aW9uO1xuICBAYWxpYXNPZigndmlld01vZGVsLm1lYXN1cmVPcGVuZWQnKVxuICBtZWFzdXJlT3BlbmVkOiBGdW5jdGlvbjtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IE1lYXN1cmVWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IE1lYXN1cmVWaWV3TW9kZWwgPSBuZXcgTWVhc3VyZVZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBNZWFzdXJlUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX21lYXN1cmVDcmVhdGVkID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdE1lYXN1cmUoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVhc3VyZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQ/LmNoZWNrZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldD8udGl0bGUpO1xuICAgICAgICAgIGlmIChlLnRhcmdldD8udGl0bGUgPT09ICdjbGVhcicpIHtcbiAgICAgICAgICAgIHRoaXMubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudC5hY3RpdmVUb29sID0gZS50YXJnZXQ/LnRpdGxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSBjaGVja2VkIHRpdGxlPVwiZGlzdGFuY2VcIiB2YWx1ZT1cImRpc3RhbmNlXCIgaWQ9XCJ0YWJsZUl0ZW1cIiBpY29uPVwibWVhc3VyZVwiPlxuICAgICAgICAgICAgTGluZVxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdGl0bGU9XCJhcmVhXCIgdmFsdWU9XCJhcmVhXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGljb249XCJtZWFzdXJlLWFyZWFcIj5cbiAgICAgICAgICAgIEFyZWFcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHRpdGxlPVwiY2xlYXJcIiB2YWx1ZT1cImNsZWFyXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGljb249XCJ0cmFzaFwiPlxuICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9tZWFzdXJlQ3JlYXRlZH0gaWQ9XCJtZWFzdXJlV2lkZ2V0XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgUG9wdXBUZW1wbGF0ZSBmcm9tICdlc3JpL1BvcHVwVGVtcGxhdGUnO1xuaW1wb3J0IEV4cHJlc3Npb25JbmZvIGZyb20gJ2VzcmkvcG9wdXAvRXhwcmVzc2lvbkluZm8nO1xuXG5jb25zdCBhcmNhZGVFeHByZXNzaW9uSW5mb3MgPSBbXG4gIHtcbiAgICBuYW1lOiAnYm9tLWRvYy1udW0nLFxuICAgIHRpdGxlOiAnYm9tLWRvYy1udW0nLFxuICAgIGV4cHJlc3Npb246XG4gICAgICBcInZhciByZXN1bHRzID0gRmVhdHVyZVNldEJ5UmVsYXRpb25zaGlwTmFtZSgkZmVhdHVyZSwgJ0NPTkRPX0JPT0tTJywgWycqJ10sIGZhbHNlKTsgcmV0dXJuIEZpcnN0KHJlc3VsdHMpLkJPTV9ET0NfTlVNO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZGVlZC1kb2MtbnVtJyxcbiAgICB0aXRsZTogJ2RlZWQtZG9jLW51bScsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgIFwidmFyIHJlc3VsdHMgPSBGZWF0dXJlU2V0QnlSZWxhdGlvbnNoaXBOYW1lKCRmZWF0dXJlLCAnQ09ORE9fQk9PS1MnLCBbJyonXSwgZmFsc2UpOyByZXR1cm4gRmlyc3QocmVzdWx0cykuREVFRF9ET0NfTlVNO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICB0aXRsZTogJ21haWxpbmctYWRkcmVzcycsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdXaGVuKElzRW1wdHkoJGZlYXR1cmUuQUREUjMpLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIzKSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgIHRpdGxlOiAncHJvcGVydHktdmFsdWVzJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1wiQnVpbGRpbmcgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkJMREdfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJMYW5kIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5MQU5EX1ZBTCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG90YWwgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLlRPVEFMX1ZBTFVFX0FTU0QnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZGVlZC1ib29rLXBhZ2UnLFxuICAgIHRpdGxlOiAnZGVlZC1ib29rLXBhZ2UnLFxuICAgIGV4cHJlc3Npb246ICdcIkJvb2sgXCIrJGZlYXR1cmUuREVFRF9CT09LK1wiIFBhZ2UgXCIrJGZlYXR1cmUuREVFRF9QQUdFJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2dlbmVyYWwnLFxuICAgIHRpdGxlOiAnZ2VuZXJhbCcsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdcIlBJTlwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJGZlYXR1cmUuUElOX05VTStcIiBcIiskZmVhdHVyZS5QSU5fRVhUK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAnXCJSRUlEXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5SRUlEK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJDaXR5XCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICdQcm9wZXIoJGZlYXR1cmUuQ0lUWV9ERUNPREUpK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJKdXJpc2RpY3Rpb25cIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgJyRmZWF0dXJlLlBMQU5OSU5HX0pVUklTRElDVElPTitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG93bnNoaXBcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1Byb3BlcigkZmVhdHVyZS5UT1dOU0hJUF9ERUNPREUpJ1xuICB9XG5dIGFzIEV4cHJlc3Npb25JbmZvW107XG5cbmNvbnN0IHBvcHVwVGVtcGxhdGUgPSBuZXcgUG9wdXBUZW1wbGF0ZSh7XG4gIGV4cHJlc3Npb25JbmZvczogYXJjYWRlRXhwcmVzc2lvbkluZm9zLFxuICAvLyBjb250ZW50OiAoZXZlbnQ6IGFueSkgPT4ge1xuICAvLyAgIGNvbnN0IGdyYXBoaWMgPSBldmVudC5ncmFwaGljO1xuICAvLyAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWdyZWVuJyk7XG4gIC8vICAgY29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAvLyAgIGRpdi50ZXh0Q29udGVudCA9IGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdTSVRFX0FERFJFU1MnKTtcbiAgLy8gICByZXR1cm4gY29udGFpbmVyO1xuICAvLyB9LFxuICBjb250ZW50OiBbXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDpcbiAgICAgICAgJzxoMSBjbGFzcz1cInRleHQtZ3JlZW5cIj57U0lURV9BRERSRVNTfTwvaDE+JyArXG4gICAgICAgICc8aDI+R2VuZXJhbDwvaDI+e2V4cHJlc3Npb24vZ2VuZXJhbH0nICtcbiAgICAgICAgJzxoMj5Pd25lcjwvaDI+e09XTkVSfTxici8+e2V4cHJlc3Npb24vbWFpbGluZy1hZGRyZXNzfScgK1xuICAgICAgICAnPGgyPlZhbHVhdGlvbjwvaDI+e2V4cHJlc3Npb24vcHJvcGVydHktdmFsdWVzfScgK1xuICAgICAgICAnPGgyPlNhbGUgSW5mb3JtYXRpb248L2gyPntUT1RTQUxQUklDRX08YnIvPntTQUxFX0RBVEV9JyArXG4gICAgICAgICc8aDI+RGVlZHM8L2gyPntleHByZXNzaW9uL2RlZWQtYm9vay1wYWdlfScgK1xuICAgICAgICAnPGJyLz48c3Ryb25nPkRlZWQgRGF0ZTwvc3Ryb25nPjxici8+e0RFRURfREFURX08YnIvPicgK1xuICAgICAgICAnPGJyLz5MZWdhbCBEZXNjcmlwdGlvbjxici8+e1BST1BERVNDfTxici8+JyArXG4gICAgICAgICc8YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9ib20tZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Cb29rIG9mIE1hcHM8L2E+PGJyLz48YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9kZWVkLWRvYy1udW19JlJlY29yZERhdGU9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGVlZDwvYT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnbWVkaWEnLFxuICAgICAgbWVkaWFJbmZvczogW11cbiAgICB9XG4gIF1cbn0pO1xuXG5leHBvcnQgY29uc3QgZmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gIHBvcnRhbEl0ZW06IHtcbiAgICBpZDogJzA4MDUwYmYwNjdiYjRiMjBhZGVhNGIwYjRmMGEzOWUzJ1xuICB9LFxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9XG59KTtcblxuZXhwb3J0IGNvbnN0IGNvbmRvc1RhYmxlID0gbmV3IEZlYXR1cmVMYXllcih7XG4gIHBvcnRhbEl0ZW06IHtcbiAgICBpZDogJzA4MDUwYmYwNjdiYjRiMjBhZGVhNGIwYjRmMGEzOWUzJ1xuICB9LFxuICBsYXllcklkOiAxLFxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9LFxuICBwb3B1cFRlbXBsYXRlOiBwb3B1cFRlbXBsYXRlXG59KTtcbmNvbmRvc1RhYmxlLmxvYWQoKTtcbmV4cG9ydCBjb25zdCBhZGRyZXNzVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnMDgwNTBiZjA2N2JiNGIyMGFkZWE0YjBiNGYwYTM5ZTMnXG4gIH0sXG4gIGxheWVySWQ6IDQsXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbn0pO1xuYWRkcmVzc1RhYmxlLmxvYWQoKTtcbmV4cG9ydCAqIGZyb20gJy4vYXBwJztcbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbmltcG9ydCBTa2V0Y2ggZnJvbSAnZXNyaS93aWRnZXRzL1NrZXRjaCc7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJztcbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XG5pbXBvcnQgVGV4dFN5bWJvbCBmcm9tICdlc3JpL3N5bWJvbHMvVGV4dFN5bWJvbCc7XG5cbmltcG9ydCBDb2xvciBmcm9tICdlc3JpL0NvbG9yJztcbmltcG9ydCB7IG1lYXN1cmVtZW50IH0gZnJvbSAnLi4vLi4vd2lkZ2V0cyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuRHJhdy5EcmF3Vmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBjb250YWluZXI6IHN0cmluZztcbiAgc2tldGNoOiBTa2V0Y2g7XG4gIGdyYXBoaWNzOiBHcmFwaGljc0xheWVyO1xuICBsYWJlbDogc3RyaW5nO1xuICB0ZXh0Q29sb3I6IGVzcmkuQ29sb3I7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdERyYXcoKSB7XG4gICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJyB9KTtcbiAgICB0aGlzLnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNzKTtcblxuICAgIHRoaXMuc2tldGNoID0gbmV3IFNrZXRjaCh7IHZpZXc6IHRoaXMudmlldywgY29udGFpbmVyOiAnc2tldGNoRGl2JywgbGF5ZXI6IHRoaXMuZ3JhcGhpY3MsIGNyZWF0aW9uTW9kZTogJ3NpbmdsZScgfSk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuICAgICh0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wgYXMgYW55KS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sLmNvbG9yID0gbmV3IENvbG9yKFtbMjU1LCAwLCAwLCAwLjVdXSk7XG4gICAgKHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sIGFzIGFueSkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9seWxpbmVTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG5cbiAgICB0aGlzLnNrZXRjaC53YXRjaCgnYWN0aXZlVG9vbCcsIHRvb2wgPT4ge1xuICAgICAgaWYgKHRvb2wgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNrZXRjaC5vbignY3JlYXRlJywgZSA9PiB7XG4gICAgICBpZiAoZS5zdGF0ZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICBtZWFzdXJlbWVudD8ubWVhc3VyZW1lbnQ/LmNsZWFyKCk7XG4gICAgICB9XG4gICAgICBpZiAoZS5zdGF0ZSA9PT0gJ2NvbXBsZXRlJyAmJiB0aGlzLmxhYmVsPy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGxhYmVsUG9pbnQ6IGVzcmkuR2VvbWV0cnkgPSBlLmdyYXBoaWMuZ2VvbWV0cnk7XG4gICAgICAgIGlmIChlLmdyYXBoaWMuZ2VvbWV0cnkudHlwZSA9PT0gJ3BvbHlnb24nKSB7XG4gICAgICAgICAgbGFiZWxQb2ludCA9IChlLmdyYXBoaWMuZ2VvbWV0cnkgYXMgZXNyaS5Qb2x5Z29uKS5jZW50cm9pZDtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc3QgZyA9IG5ldyBHcmFwaGljKHtcbiAgICAgICAgICBnZW9tZXRyeTogbGFiZWxQb2ludCxcbiAgICAgICAgICBzeW1ib2w6IG5ldyBUZXh0U3ltYm9sKHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMubGFiZWwsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgICAgICBoYWxvQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBoYWxvU2l6ZTogMSxcbiAgICAgICAgICAgIHhvZmZzZXQ6ICc1cHgnLFxuICAgICAgICAgICAgeW9mZnNldDogJzVweCcsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAncmlnaHQnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IERyYXdWaWV3TW9kZWwgZnJvbSAnLi9EcmF3L0RyYXdWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBkcmF3LWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkRyYXcnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxhYmVsJylcbiAgbGFiZWw6IHN0cmluZztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC50ZXh0Q29sb3InKVxuICB0ZXh0Q29sb3I6IENvbG9yO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IERyYXdWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IERyYXdWaWV3TW9kZWwgPSBuZXcgRHJhd1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBEcmF3UHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX2RyYXdVcGRhdGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy52aWV3TW9kZWwuc2tldGNoKSB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5pbml0RHJhdygpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxsJyk7XG4gICAgZmlsbD8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgZmlsbD8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgfSk7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaW5lJyk7XG4gICAgbGluZT8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgbGluZT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWxpbmVTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9wYWNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BhY2l0eScpO1xuICAgIG9wYWNpdHk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IuYSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpZHRoJyk7XG4gICAgd2lkdGg/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbCBhcyBlc3JpLlNpbXBsZUxpbmVTeW1ib2wpLndpZHRoID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS53aWR0aCA9IHBhcnNlRmxvYXQoXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUud2lkdGggPSBwYXJzZUZsb2F0KFxuICAgICAgICBlLnRhcmdldC52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbCcpO1xuICAgIGxhYmVsPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ2xhYmVsJywgZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRleHRDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0Q29sb3InKTtcbiAgICB0ZXh0Q29sb3I/LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnI2ZmMDAwMCcpO1xuICAgIHRleHRDb2xvcj8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ3RleHRDb2xvcicsIENvbG9yLmZyb21IZXgoZS50YXJnZXQudmFsdWUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyVXBkYXRlPXt0aGlzLl9kcmF3VXBkYXRlZH0gaWQ9XCJza2V0Y2hEaXZcIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtYmxvY2sgaGVhZGluZz1cIlNldHRpbmdzXCIgb3BlbiBjb2xsYXBzaWJsZT5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJDb2xvclwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIEZpbGwgQ29sb3IgPGNhbGNpdGUtY29sb3IgaWQ9XCJmaWxsXCIgaGlkZUNoYW5uZWxzIGhpZGVTYXZlZCBhcHBlYXJhbmNlPVwibWluaW1hbFwiIHNjYWxlPVwic1wiPjwvY2FsY2l0ZS1jb2xvcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBMaW5lIENvbG9yIDxjYWxjaXRlLWNvbG9yIGlkPVwibGluZVwiIGhpZGVDaGFubmVscyBoaWRlU2F2ZWQgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBzY2FsZT1cInNcIj48L2NhbGNpdGUtY29sb3I+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiRmlsbCBPcGFjaXR5XCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgT3BhY2l0eTxjYWxjaXRlLXNsaWRlciBzY2FsZT1cInNcIiBpZD1cIm9wYWNpdHlcIiBtYXg9XCIxXCIgbWluPVwiMFwiIHZhbHVlPVwiMC41XCIgc3RlcD1cIjAuMVwiPjwvY2FsY2l0ZS1zbGlkZXI+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiT3V0bGluZVwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIFdpZHRoIDxjYWxjaXRlLXNsaWRlciBpZD1cIndpZHRoXCIgbWF4PVwiMTBcIiBtaW49XCIwXCIgdmFsdWU9XCIxXCIgc3RlcD1cIjAuNVwiPjwvY2FsY2l0ZS1zbGlkZXI+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiTGFiZWxpbmdcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBMYWJlbCA8Y2FsY2l0ZS1pbnB1dCBzY2FsZT1cInNcIiBpZD1cImxhYmVsXCIgdHlwZT1cInRleHRhcmVhXCI+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIFRleHQgQ29sb3JcbiAgICAgICAgICAgICAgPGNhbGNpdGUtY29sb3IgaWQ9XCJ0ZXh0Q29sb3JcIiBoaWRlQ2hhbm5lbHMgaGlkZVNhdmVkIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgc2NhbGU9XCJzXCI+PC9jYWxjaXRlLWNvbG9yPlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgIDwvY2FsY2l0ZS1ibG9jay1zZWN0aW9uPlxuICAgICAgICA8L2NhbGNpdGUtYmxvY2s+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgU2tldGNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gnO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5cbmltcG9ydCB7IHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCB7IG1lYXN1cmVtZW50IH0gZnJvbSAnLi4vLi4vd2lkZ2V0cyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuU2VsZWN0LlNlbGVjdFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBsYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cbiAgc2tldGNoOiBlc3JpLlNrZXRjaDtcbiAgYnVmZmVyRGlzdGFuY2U6IG51bWJlcjtcbiAgZ3JhcGhpY3M6IEdyYXBoaWNzTGF5ZXI7XG5cbiAgaW5pdFNrZXRjaCgpIHtcbiAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnIH0pO1xuICAgIHRoaXMudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MpO1xuICAgIHRoaXMuc2tldGNoID0gbmV3IFNrZXRjaCh7XG4gICAgICB2aWV3OiB0aGlzLnZpZXcsXG4gICAgICBjb250YWluZXI6ICdzZWxlY3RXaWRnZXQnLFxuICAgICAgbGF5ZXI6IHRoaXMuZ3JhcGhpY3MsXG4gICAgICBjcmVhdGlvbk1vZGU6ICdzaW5nbGUnXG4gICAgfSk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnVwZGF0ZU9uR3JhcGhpY0NsaWNrID0gZmFsc2U7XG4gICAgdGhpcy5za2V0Y2gub24oJ2NyZWF0ZScsIGV2ID0+IHtcbiAgICAgIGlmIChldi5zdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB0aGlzLmdyYXBoaWNzLnJlbW92ZUFsbCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2LnN0YXRlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNrZXRjaC53YXRjaCgnYWN0aXZlVG9vbCcsIHRvb2wgPT4ge1xuICAgICAgaWYgKHRvb2wgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gICAgdGhpcy5zZXQoJ2J1ZmZlckRpc3RhbmNlJywgMCk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IFNlbGVjdFZpZXdNb2RlbCBmcm9tICcuL1NlbGVjdC9TZWxlY3RWaWV3TW9kZWwnO1xuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBsYXllcj86IGVzcmkuRmVhdHVyZUxheWVyO1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBzZWxlY3QtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuU2VsZWN0JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIFdpZGdldCB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxheWVyJylcbiAgbGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLnNrZXRjaCcpXG4gIHNrZXRjaDogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2UnKVxuICBidWZmZXJEaXN0YW5jZTogbnVtYmVyO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IFNlbGVjdFZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogU2VsZWN0Vmlld01vZGVsID0gbmV3IFNlbGVjdFZpZXdNb2RlbCgpO1xuICBfc2tldGNoQ3JlYXRlZCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMudmlld01vZGVsLnNrZXRjaCkge1xuICAgICAgdGhpcy52aWV3TW9kZWwuaW5pdFNrZXRjaCgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IFNlbGVjdFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldjogYW55KSB7XG4gICAgdGhpcy5zZXQoJ2J1ZmZlckRpc3RhbmNlJywgcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3REaXYgY2FsY2l0ZS1pbnB1dCcpPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGV2OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGV2KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJVcGRhdGU9e3RoaXMuX3NrZXRjaENyZWF0ZWR9IGlkPVwic2VsZWN0V2lkZ2V0XCI+PC9kaXY+XG4gICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgIEJ1ZmZlciBEaXN0YW5jZSAoZmVldClcbiAgICAgICAgICA8Y2FsY2l0ZS1pbnB1dFxuICAgICAgICAgICAgc2NhbGU9XCJzXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICBtYXg9XCIyMDAwXCJcbiAgICAgICAgICAgIHN0ZXA9XCI1MFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy52aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2V9XG4gICAgICAgICAgPjwvY2FsY2l0ZS1pbnB1dD5cbiAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInO1xuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbmltcG9ydCBCYXNlTWFwR2FsbGVyeSBmcm9tICdlc3JpL3dpZGdldHMvQmFzZW1hcEdhbGxlcnknO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkJhc2VNYXBzLkJhc2VNYXBzVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNYXBzVmlld01vZGVsIGV4dGVuZHMgQWNjZXNzb3Ige1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgYmFzZW1hcHM6IEJhc2VNYXBHYWxsZXJ5O1xuICBpbWFnZXM6IEJhc2VNYXBHYWxsZXJ5O1xuXG4gIGFjdGl2ZUJhc2VtYXA6IGVzcmkuQmFzZW1hcDtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjaGFuZ2VQcm9wZXJ0eUxpbmVzID0gKGJhc2VtYXA6IGVzcmkuQmFzZW1hcCkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5TGF5ZXI6IEZlYXR1cmVMYXllciA9IHRoaXMudmlldy5tYXAuYWxsTGF5ZXJzLmZpbmQobGF5ZXIgPT4ge1xuICAgICAgcmV0dXJuIGxheWVyLnR5cGUgPT09ICdmZWF0dXJlJyAmJiBsYXllci50aXRsZSA9PT0gJ1Byb3BlcnR5JztcbiAgICB9KSBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgY29uc3QgbmV3UmVuZGVyZXI6IGVzcmkuU2ltcGxlUmVuZGVyZXIgPSAocHJvcGVydHlMYXllci5yZW5kZXJlciBhcyBlc3JpLlNpbXBsZVJlbmRlcmVyKS5jbG9uZSgpIGFzIGVzcmkuU2ltcGxlUmVuZGVyZXI7XG4gICAgaWYgKFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkYXJrJykgfHxcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbmlnaHQnKSB8fFxuICAgICAgYmFzZW1hcC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkYXJrJykgfHxcbiAgICAgIGJhc2VtYXAudGl0bGUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCcyMCcpIHx8XG4gICAgICBiYXNlbWFwLnRpdGxlLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnMTknKVxuICAgICkge1xuICAgICAgKG5ld1JlbmRlcmVyLnN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUuY29sb3IgPSBuZXcgQ29sb3IoWzI1NSwgMjU1LCAyNTUsIDAuNV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAobmV3UmVuZGVyZXIuc3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS5jb2xvciA9IG5ldyBDb2xvcihbMCwgMCwgMCwgMC41XSk7XG4gICAgfVxuICAgIHByb3BlcnR5TGF5ZXIucmVuZGVyZXIgPSBuZXdSZW5kZXJlcjtcbiAgfTtcblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdGhpcy5iYXNlbWFwcyA9IG5ldyBCYXNlTWFwR2FsbGVyeSh7IHZpZXc6IHRoaXMudmlldyB9KTtcbiAgICB0aGlzLnZpZXcud2hlbigoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVByb3BlcnR5TGluZXModGhpcy52aWV3Lm1hcC5iYXNlbWFwKTtcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcubWFwLndhdGNoKCdiYXNlbWFwJywgKGJhc2VtYXA6IGVzcmkuQmFzZW1hcCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VQcm9wZXJ0eUxpbmVzKGJhc2VtYXApO1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXMnKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAgPSB0aGlzLnZpZXcubWFwLmJhc2VtYXA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFN3aXRjaCcpPy5yZW1vdmVBdHRyaWJ1dGUoJ3N3aXRjaGVkJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBibSA9IHRoaXMuaW1hZ2VzLnZpZXdNb2RlbC5pdGVtcy5maW5kKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5iYXNlbWFwLnRpdGxlID09PSB0aGlzLnZpZXcubWFwLmJhc2VtYXAudGl0bGU7XG4gICAgICB9KTtcbiAgICAgIGlmIChibSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTd2l0Y2gnKT8uaGFzQXR0cmlidXRlKCdzd2l0Y2hlZCcpKSB7XG4gICAgICAgIHRoaXMudmlldy5tYXAuYWRkTWFueSh0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy50b0FycmF5KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xuICAgICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFjdGl2ZUJhc2VtYXAgPSB0aGlzLnZpZXcubWFwLmJhc2VtYXA7XG4gICAgdGhpcy5pbWFnZXMgPSBuZXcgQmFzZU1hcEdhbGxlcnkoe1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgc291cmNlOiB7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgaWQ6ICc0OTIzODY3NTlkMjY0ZDQ5OTQ4YmY3ZjgzOTU3ZGRiOSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlaGlkZScsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBqc29uID0gKHZpZXcubWFwIGFzIGFueSkudG9KU09OKCk7XG4gICAgICBqc29uLmluaXRpYWxTdGF0ZS52aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkgPSB2aWV3LmV4dGVudDtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hcHMnLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XG4gICAgfSk7XG4gIH1cbiAgdG9nZ2xlQ29udGVudCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSAnbWFwcycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZCcpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlc0l0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHNJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBCYXNlTWFwc1ZpZXdNb2RlbCBmcm9tICcuL0Jhc2VNYXBzL0Jhc2VNYXBzVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXNlTWFwc1Byb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGJhc2VtYXBzLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkJhc2VNYXBzJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNYXBzIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5iYXNlbWFwcycpXG4gIGJhc2VtYXBzOiBlc3JpLkJhc2VtYXBHYWxsZXJ5O1xuICBAYWxpYXNPZigndmlld01vZGVsLmltYWdlcycpXG4gIGltYWdlczogZXNyaS5CYXNlbWFwR2FsbGVyeTtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBCYXNlTWFwc1ZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogQmFzZU1hcHNWaWV3TW9kZWwgPSBuZXcgQmFzZU1hcHNWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogQmFzZU1hcHNQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgX2NyZWF0ZU1hcHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuYmFzZW1hcHMpIHtcbiAgICAgIHRoaXMuYmFzZW1hcHMuY29udGFpbmVyID0gJ21hcHMnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZUltYWdlcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgIHRoaXMuaW1hZ2VzLmNvbnRhaW5lciA9ICdpbWFnZXMnO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlU3dpdGNoQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3N3aXRjaGVkJykgIT0gJycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGNvbnNvbGUubG9nKCdhZGQnKTtcbiAgICAgIHRoaXMudmlldy5tYXAuYWRkTWFueSh0aGlzLnZpZXdNb2RlbC5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMudG9BcnJheSgpLCAwKTtcbiAgICAgIHRoaXMudmlldy5tYXAuYmFzZW1hcC5yZWZlcmVuY2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIGxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy52aWV3Lm1hcC5sYXllcnNcbiAgICAgICAgLmZpbHRlcihsYXllciA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5pbmNsdWRlcyhsYXllcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBsYXllci5vcGFjaXR5ID0gMC41O1xuICAgICAgICAgIGxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgdGhpcy52aWV3Lm1hcC5iYXNlbWFwLnJlZmVyZW5jZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgbGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xuICAgICAgICB0aGlzLnZpZXcubWFwLnJlbW92ZSh0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlU2xpZGVyQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IGxheWVycyA9IHRoaXMudmlldy5tYXAubGF5ZXJzXG4gICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXA/LmJhc2VMYXllcnMuaW5jbHVkZXMobGF5ZXIpO1xuICAgICAgfSlcbiAgICAgIC50b0FycmF5KCk7XG4gICAgbGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgbGF5ZXIub3BhY2l0eSA9IHBhcnNlRmxvYXQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcbiAgICB9KTtcbiAgfTtcblxuICBfc2xpZGVyQ3JlYXRlZCA9IChlOiBhbnkpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpXG4gICAgICA/LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjYWxjaXRlU2xpZGVyVXBkYXRlJyxcbiAgICAgICAgdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2UuYmluZCh7IGJhc2VtYXA6IHRoaXMuYmFzZW1hcHMsIHZpZXc6IHRoaXMudmlldyB9KVxuICAgICAgKTtcbiAgfTtcbiAgX2JsZW5kQ3JlYXRlZCA9IChlOiBhbnkpID0+IHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFN3aXRjaCcpXG4gICAgICA/LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjYWxjaXRlU3dpdGNoQ2hhbmdlJyxcbiAgICAgICAgdGhpcy5oYW5kbGVTd2l0Y2hDaGFuZ2UuYmluZCh7IGJhc2VtYXA6IHRoaXMuYmFzZW1hcHMsIHZpZXc6IHRoaXMudmlldyB9KVxuICAgICAgKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZCcpPy5yZW1vdmVBdHRyaWJ1dGUoJ3N3aXRjaGVkJyk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Jhc2VtYXBEaXYgY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtJyk7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVSYWRpb0dyb3VwSXRlbUNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2FuIEkgZ2V0IGNoZWNrZWQgYW5kIHZhbHVlIGxpa2UgdGhpcz9cbiAgICAgICAgaWYgKGUudGFyZ2V0Py5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy52aWV3TW9kZWwudG9nZ2xlQ29udGVudChlLnRhcmdldD8udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImhpZGRlblwiIGlkPVwiYmxlbmRcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1zd2l0Y2ggYWZ0ZXJDcmVhdGU9e3RoaXMuX2JsZW5kQ3JlYXRlZH0gaWQ9XCJibGVuZFN3aXRjaFwiPjwvY2FsY2l0ZS1zd2l0Y2g+IEJsZW5kXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxjYWxjaXRlLXNsaWRlclxuICAgICAgICAgIGFmdGVyQ3JlYXRlPXt0aGlzLl9zbGlkZXJDcmVhdGVkfVxuICAgICAgICAgIGNsYXNzPVwiaGlkZGVuXCJcbiAgICAgICAgICBpZD1cImJsZW5kU2xpZGVyXCJcbiAgICAgICAgICB2YWx1ZT1cIjAuNVwiXG4gICAgICAgICAgbWF4PVwiMVwiXG4gICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgc3RlcD1cIjAuMVwiXG4gICAgICAgID48L2NhbGNpdGUtc2xpZGVyPlxuXG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZU1hcHN9IGlkPVwibWFwc1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVJbWFnZXN9IGlkPVwiaW1hZ2VzXCIgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSBjaGVja2VkIHZhbHVlPVwibWFwc1wiIGlkPVwibWFwc0l0ZW1cIj5cbiAgICAgICAgICAgIE1hcHNcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHZhbHVlPVwiaW1hZ2VzXCIgaWQ9XCJpbWFnZXNJdGVtXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICBJbWFnZXJ5XG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IExheWVyTGlzdCBmcm9tICdlc3JpL3dpZGdldHMvTGF5ZXJMaXN0JztcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTGF5ZXJzLkxheWVyc1ZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllcnNWaWV3TW9kZWwgZXh0ZW5kcyBBY2Nlc3NvciB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBsYXllckxpc3Q6IGVzcmkuTGF5ZXJMaXN0O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnNvbGUubG9nKHZpZXcuc2NhbGUpO1xuICAgIHRoaXMubGF5ZXJMaXN0ID0gbmV3IExheWVyTGlzdCh7XG4gICAgICB2aWV3LFxuICAgICAgY29udGFpbmVyOiAnbGF5ZXJEaXYnLFxuICAgICAgbGlzdEl0ZW1DcmVhdGVkRnVuY3Rpb246IGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGV2ZW50Lml0ZW07XG4gICAgICAgIGlmIChpdGVtLmxheWVyLnR5cGUgIT0gJ2dyb3VwJykge1xuICAgICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtc2xpZGVyJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWluJywgJzAnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtYXgnLCAnMTAwJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWluLWxhYmVsJywgJzAlJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWF4LWxhYmVsJywgJzEwMCUnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdsYWJlbC1oYW5kbGVzJywgJycpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgKGl0ZW0/LmxheWVyLm9wYWNpdHkgKiAxMDApLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpdGVtLmxheWVyLmlkKTtcbiAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVNsaWRlclVwZGF0ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHZpZXcubWFwLmZpbmRMYXllckJ5SWQoKGV2ZW50LnRhcmdldCBhcyBhbnkpLmdldEF0dHJpYnV0ZSgnZGF0YScpKS5vcGFjaXR5ID1cbiAgICAgICAgICAgICAgcGFyc2VJbnQoKGV2ZW50Py50YXJnZXQgYXMgYW55KT8uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKSAvIDEwMDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpdGVtLnBhbmVsID0ge1xuICAgICAgICAgICAgY29udGVudDogW3NsaWRlciwgJ2xlZ2VuZCddLFxuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpdGVtLmxheWVyLnRpdGxlID09PSAnUHJvcGVydHknKSB7XG4gICAgICAgICAgICBpdGVtLmFjdGlvbnNTZWN0aW9ucyA9IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2hvdyBMYWJlbHMnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3RvZ2dsZScsXG4gICAgICAgICAgICAgICAgICBpZDogJ3Byb3BlcnR5LWxhYmVscycsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5sYXllci5sYWJlbHNWaXNpYmxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubGF5ZXJMaXN0Lm9uKCd0cmlnZ2VyLWFjdGlvbicsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5hY3Rpb24uaWQgPT09ICdwcm9wZXJ0eS1sYWJlbHMnKSB7XG4gICAgICAgIChldmVudC5pdGVtLmxheWVyIGFzIGVzcmkuRmVhdHVyZUxheWVyKS5sYWJlbHNWaXNpYmxlID0gKGV2ZW50LmFjdGlvbiBhcyBlc3JpLkFjdGlvblRvZ2dsZSkudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IExheWVyc1ZpZXdNb2RlbCBmcm9tICcuL0xheWVycy9MYXllcnNWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExheWVyc1Byb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGxheWVycy1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5MYXllcnMnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXJzIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubGF5ZXJMaXN0JylcbiAgbGF5ZXJMaXN0OiBlc3JpLkxheWVyTGlzdDtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IExheWVyc1ZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogTGF5ZXJzVmlld01vZGVsID0gbmV3IExheWVyc1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBMYXllcnNQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgX2NyZWF0ZUxheWVycyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5sYXllckxpc3QpIHtcbiAgICAgIHRoaXMubGF5ZXJMaXN0LmNvbnRhaW5lciA9ICdsYXllcnMnO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUxheWVyc30gaWQ9XCJsYXllcnNcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Mb2NhdGlvblNlYXJjaC5Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCBleHRlbmRzIEFjY2Vzc29yIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgc2VhcmNoOiBTZWFyY2g7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHRoaXMuc2VhcmNoID0gbmV3IFNlYXJjaCh7IHZpZXc6IHZpZXcsIG1heFN1Z2dlc3Rpb25zOiAzMCwgc2VhcmNoQWxsRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgdGhpcy5zZWFyY2guYWxsU291cmNlcy5vbignYWZ0ZXItYWRkJywgZSA9PiB7XG4gICAgICBpZiAoKGUuaXRlbSBhcyBhbnkpLmxheWVyKSB7XG4gICAgICAgIGUuaXRlbS5uYW1lID0gKGUuaXRlbSBhcyBhbnkpLmxheWVyLnRpdGxlO1xuICAgICAgICBlLml0ZW0ucGxhY2Vob2xkZXIgPSAoZS5pdGVtIGFzIGFueSkubGF5ZXIudGl0bGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCBmcm9tICcuL0xvY2F0aW9uU2VhcmNoL0xvY2F0aW9uU2VhcmNoVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblNlYXJjaFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGxvY2F0aW9uc2VhcmNoLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxvY2F0aW9uU2VhcmNoJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uU2VhcmNoIGV4dGVuZHMgV2lkZ2V0IHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5zZWFyY2gnKVxuICBzZWFyY2g6IGVzcmkud2lkZ2V0c1NlYXJjaDtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IExvY2F0aW9uU2VhcmNoVmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCA9IG5ldyBMb2NhdGlvblNlYXJjaFZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBMb2NhdGlvblNlYXJjaFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIF9zZWFyY2hDcmVhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2VhcmNoKSB7XG4gICAgICB0aGlzLnNlYXJjaC5jb250YWluZXIgPSAnbG9jYXRpb25TZWFyY2gnO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fc2VhcmNoQ3JlYXRlfSBpZD1cImxvY2F0aW9uU2VhcmNoXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCIvLyBXaWRnZXRzXG5pbXBvcnQgTGVnZW5kIGZyb20gJ2Vzcmkvd2lkZ2V0cy9MZWdlbmQnO1xuaW1wb3J0IFByaW50IGZyb20gJ2Vzcmkvd2lkZ2V0cy9QcmludCc7XG5pbXBvcnQgQm9va21hcmtzIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Cb29rbWFya3MnO1xuaW1wb3J0IFByb3BlcnR5U2VhcmNoIGZyb20gJy4vd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaCc7XG5pbXBvcnQgQ29vcmRpbmF0ZUNvbnZlcnNpb24gZnJvbSAnZXNyaS93aWRnZXRzL0Nvb3JkaW5hdGVDb252ZXJzaW9uJztcbmltcG9ydCBFeHBhbmQgZnJvbSAnZXNyaS93aWRnZXRzL0V4cGFuZCc7XG5pbXBvcnQgTWVhc3VyZSBmcm9tICcuL3dpZGdldHMvTWVhc3VyZSc7XG5pbXBvcnQgQ29tcGFzcyBmcm9tICdlc3JpL3dpZGdldHMvQ29tcGFzcyc7XG5pbXBvcnQgTG9jYXRlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Mb2NhdGUnO1xuaW1wb3J0IFRyYWNrIGZyb20gJ2Vzcmkvd2lkZ2V0cy9UcmFjayc7XG5cbmltcG9ydCB7IGNvbmRvc1RhYmxlLCBhZGRyZXNzVGFibGUsIGZlYXR1cmVMYXllciB9IGZyb20gJy4vZGF0YS9zZWFyY2gnO1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5pbXBvcnQgRHJhdyBmcm9tICcuL3dpZGdldHMvRHJhdyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vd2lkZ2V0cy9TZWxlY3QnO1xuaW1wb3J0IEJhc2VNYXBzIGZyb20gJy4vd2lkZ2V0cy9CYXNlTWFwcyc7XG5pbXBvcnQgTGF5ZXJzIGZyb20gJy4vd2lkZ2V0cy9MYXllcnMnO1xuaW1wb3J0IExvY2F0aW9uU2VhcmNoIGZyb20gJy4vd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaCc7XG5leHBvcnQgY29uc3QgbWVhc3VyZW1lbnQ6IE1lYXN1cmUgPSBuZXcgTWVhc3VyZSgpO1xuZXhwb3J0IGNvbnN0IHNlbGVjdDogU2VsZWN0ID0gbmV3IFNlbGVjdCgpO1xuZXhwb3J0IGxldCBsYXllcnM6IExheWVycztcbmV4cG9ydCBsZXQgbGVnZW5kOiBMZWdlbmQ7XG5leHBvcnQgbGV0IGJhc2VtYXBzOiBCYXNlTWFwcztcbmV4cG9ydCBsZXQgYm9va21hcmtzOiBCb29rbWFya3M7XG5leHBvcnQgbGV0IGxvY2F0aW9uU2VhcmNoOiBMb2NhdGlvblNlYXJjaDtcblxuZXhwb3J0IGxldCBwcmludFdpZGdldDogUHJpbnQ7XG5leHBvcnQgbGV0IHByb3BlcnR5U2VhcmNoOiBQcm9wZXJ0eVNlYXJjaDtcbmV4cG9ydCBjb25zdCBkcmF3V2lkZ2V0OiBEcmF3ID0gbmV3IERyYXcoKTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0V2lkZ2V0KG5hbWU6IHN0cmluZywgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgaWYgKG5hbWUgPT09ICdTZWFyY2gnICYmICFwcm9wZXJ0eVNlYXJjaCkge1xuICAgIHByb3BlcnR5U2VhcmNoID0gbmV3IFByb3BlcnR5U2VhcmNoKHtcbiAgICAgIHZpZXc6IHZpZXcsXG4gICAgICBjb25kb3NUYWJsZTogY29uZG9zVGFibGUsXG4gICAgICBhZGRyZXNzVGFibGU6IGFkZHJlc3NUYWJsZSxcbiAgICAgIHByb3BlcnR5TGF5ZXI6IGZlYXR1cmVMYXllcixcbiAgICAgIGNvbnRhaW5lcjogJ3NpZGVEaXYnXG4gICAgfSk7XG4gIH1cbiAgaWYgKG5hbWUgPT09ICdMYXllcnMnICYmICFsYXllcnMpIHtcbiAgICBsYXllcnMgPSBuZXcgTGF5ZXJzKHsgdmlldywgY29udGFpbmVyOiAnbGF5ZXJzRGl2JyB9KTtcbiAgfVxuICBpZiAobmFtZSA9PT0gJ0xlZ2VuZCcgJiYgIWxlZ2VuZCkge1xuICAgIGxlZ2VuZCA9IG5ldyBMZWdlbmQoeyB2aWV3LCBjb250YWluZXI6ICdsZWdlbmREaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnUHJpbnQnICYmICFwcmludFdpZGdldCkge1xuICAgIHByaW50V2lkZ2V0ID0gbmV3IFByaW50KHtcbiAgICAgIHZpZXcsXG4gICAgICBjb250YWluZXI6ICdwcmludERpdicsXG4gICAgICBwcmludFNlcnZpY2VVcmw6XG4gICAgICAgICdodHRwczovL3V0aWxpdHkuYXJjZ2lzb25saW5lLmNvbS9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9VdGlsaXRpZXMvUHJpbnRpbmdUb29scy9HUFNlcnZlci9FeHBvcnQlMjBXZWIlMjBNYXAlMjBUYXNrJ1xuICAgIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnQm9va21hcmtzJyAmJiAhYm9va21hcmtzKSB7XG4gICAgYm9va21hcmtzID0gbmV3IEJvb2ttYXJrcyh7IHZpZXcsIGNvbnRhaW5lcjogJ2Jvb2ttYXJrRGl2JywgZWRpdGluZ0VuYWJsZWQ6IHRydWUgfSk7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gJ0Jhc2VtYXBzJyAmJiAhYmFzZW1hcHMpIHtcbiAgICBiYXNlbWFwcyA9IG5ldyBCYXNlTWFwcyh7IHZpZXcsIGNvbnRhaW5lcjogJ2Jhc2VtYXBEaXYnIH0pO1xuICB9XG4gIGlmIChuYW1lID09PSAnTG9jYXRpb24nICYmICFsb2NhdGlvblNlYXJjaCkge1xuICAgIGxvY2F0aW9uU2VhcmNoID0gbmV3IExvY2F0aW9uU2VhcmNoKHsgdmlldywgY29udGFpbmVyOiAnbG9jYXRpb25EaXYnIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaW5pdFdpZGdldHModmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgY29uc3QgY29vcmRpbmF0ZXM6IGVzcmkuQ29vcmRpbmF0ZUNvbnZlcnNpb24gPSBuZXcgQ29vcmRpbmF0ZUNvbnZlcnNpb24oeyB2aWV3IH0pO1xuICBjb25zdCBjb29yZGluYXRlc0V4cGFuZDogRXhwYW5kID0gbmV3IEV4cGFuZCh7XG4gICAgY29udGVudDogY29vcmRpbmF0ZXMsXG4gICAgbW9kZTogJ2Zsb2F0aW5nJyxcbiAgICBleHBhbmRJY29uQ2xhc3M6ICdlc3JpLWljb24tcGFuMidcbiAgfSk7XG4gIHZpZXcudWkuYWRkKGNvb3JkaW5hdGVzRXhwYW5kLCAnYm90dG9tLWxlZnQnKTtcblxuICB2aWV3LnVpLmFkZChuZXcgQ29tcGFzcyh7IHZpZXc6IHZpZXcgfSksICd0b3AtbGVmdCcpO1xuICBjb25zdCBsb2NhdGU6IExvY2F0ZSA9IG5ldyBMb2NhdGUoeyB2aWV3OiB2aWV3IH0pO1xuICBsb2NhdGUub24oJ2xvY2F0ZS1lcnJvcicsIChldmVudDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9KTtcbiAgdmlldy51aS5hZGQobG9jYXRlLCAndG9wLWxlZnQnKTtcblxuICBjb25zdCB0cmFjazogVHJhY2sgPSBuZXcgVHJhY2soeyB2aWV3OiB2aWV3IH0pO1xuICB0cmFjay5vbigndHJhY2stZXJyb3InLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfSk7XG4gIHZpZXcudWkuYWRkKHRyYWNrLCAndG9wLWxlZnQnKTtcblxuICBtZWFzdXJlbWVudC52aWV3ID0gdmlldztcbiAgbWVhc3VyZW1lbnQuY29udGFpbmVyID0gJ21lYXN1cmVEaXYnO1xuICBkcmF3V2lkZ2V0LnZpZXcgPSB2aWV3O1xuICBkcmF3V2lkZ2V0LmNvbnRhaW5lciA9ICdkcmF3RGl2JztcblxuICBzZWxlY3QuY29udGFpbmVyID0gJ3NlbGVjdERpdic7XG4gIHNlbGVjdC52aWV3ID0gdmlldztcbiAgc2VsZWN0LmxheWVyID0gZmVhdHVyZUxheWVyO1xuICByZXR1cm4gdmlldztcbn1cbiIsImltcG9ydCB7IG1lYXN1cmVtZW50LCBpbml0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzJztcbmltcG9ydCB7IHZpZXcgfSBmcm9tICcuL2luZGV4Jztcbi8vaGFuZGxlIGFjdGlvbiBiYXIgdG9nZ2xlXG5leHBvcnQgY29uc3QgdG9nZ2xlQWN0aW9uID0gKGFjdGlvbjogc3RyaW5nKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYW5lbCcpLmZvckVhY2goKHBhbmVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmIChwYW5lbC50aXRsZSAhPSBhY3Rpb24pIHtcbiAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYW5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDwgNTAwKSB7XG4gICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDM1MHB4Jyk7XG4gICAgICB9XG4gICAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAnTWVhc3VyZScpIHtcbiAgICAgICAgLy9tZWFzdXJlbWVudC5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVhc3VyZW1lbnQubWVhc3VyZU9wZW5lZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uczogTm9kZUxpc3RPZjxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWN0aW9uJyk7XG5hY3Rpb25zPy5mb3JFYWNoKChhY3Rpb246IEVsZW1lbnQpID0+IHtcbiAgYWN0aW9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcbiAgICB0b2dnbGVBY3Rpb24oZS50YXJnZXQudGV4dCk7XG4gICAgaW5pdFdpZGdldChlLnRhcmdldC50ZXh0LCB2aWV3KTtcbiAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbjogYW55KSA9PiB7XG4gICAgICBhY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgICBhY3Rpb24udG9nZ2xlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGVuYWJsZUFjdGlvbmJhciA9ICgpID0+IHtcbiAgaW5pdFdpZGdldCgnU2VhcmNoJywgdmlldyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWN0aW9uJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9uYmFyJztcblxuZXhwb3J0IGNvbnN0IGluaXRQYW5lbEhlYWRlcnMgPSAoKSA9PiB7XG4gIC8vb3ZlcnJpZGUgQ1NTIGZvciBjYWxjaXRlIHBhbmVsIGhlYWRlclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsIGRpdicpLmZvckVhY2gocGFuZWwgPT4ge1xuICAgIGlmIChwYW5lbC5zbG90ID09PSAnaGVhZGVyLXRyYWlsaW5nLWNvbnRlbnQnKSB7XG4gICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3c7Jyk7XG4gICAgfVxuICB9KTtcbiAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICAgIGlmICgoZXZlbnQ/LnRhcmdldCBhcyBhbnkpPy5vdXRlcldpZHRoID49IDUwMCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5tYXhpbWl6ZScpPy5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21pbmltaXplJykge1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMzUwcHgnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCknKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVBhbmVsRGlzbWlzc2VkQ2hhbmdlJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDBweCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF4aW1pemUnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpY29uJywgJ21heGltaXplJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICAvL2hhbmRsZSBwYW5lbCBtYXhpbWl6ZS9taW5pbWl6ZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF4aW1pemUnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdpY29uJykgPT09ICdtYXhpbWl6ZScpIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAnbWluaW1pemUnKTtcbiAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCknKTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21pbmltaXplJykge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtYXhpbWl6ZScpO1xuICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOjM1MHB4Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbmV4cG9ydCBjb25zdCBpbml0UGFuZWxzID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBjb25zdCBpOiBIVE1MRWxlbWVudCA9IGl0ZW0/LnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGkuaW5uZXJIVE1MICs9ICc8c3R5bGU+LmNvbnRlbnQtY29udGFpbmVyIHsgaGVpZ2h0OiAxMDAlOyB9IDwvc3R5bGU+JztcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVQYW5lbERpc21pc3NlZENoYW5nZScsIGUgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDw9IDUwMCkge1xuICAgICAgICBpZiAoKGUudGFyZ2V0IGFzIGFueSkuZGlzbWlzc2VkKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXdEaXYnKT8uY2xhc3NMaXN0LnJlbW92ZSgnYmVsb3cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld0RpdicpPy5jbGFzc0xpc3QuYWRkKCdiZWxvdycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoKGUudGFyZ2V0IGFzIGFueSkuZGlzbWlzc2VkKSB7XG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICBhY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCAnLi9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9kYXRhL2FwcCc7XG5pbXBvcnQgeyBpbml0VGlwcyB9IGZyb20gJy4vdGlwcyc7XG5pbXBvcnQgeyBzaG93QWxlcnQgfSBmcm9tICcuL2FsZXJ0JztcbmltcG9ydCB7IHRvZ2dsZUFjdGlvbiwgZW5hYmxlQWN0aW9uYmFyIH0gZnJvbSAnLi9hY3Rpb25iYXInO1xuaW1wb3J0IE1hcFZpZXcgZnJvbSAnZXNyaS92aWV3cy9NYXBWaWV3JztcbmltcG9ydCBnZW9tZXRyeUVuZ2luZSBmcm9tICdlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lJztcbi8vIHdpZGdldCB1dGlsc1xuaW1wb3J0IHsgaW5pdFdpZGdldHMsIHNlbGVjdCwgcHJvcGVydHlTZWFyY2gsIGxheWVycyB9IGZyb20gJy4vd2lkZ2V0cyc7XG5pbXBvcnQgeyBpbml0UGFuZWxzLCBpbml0UGFuZWxIZWFkZXJzIH0gZnJvbSAnLi9wYW5lbHMnO1xuaW1wb3J0IHsgaW5pdE1lbnUgfSBmcm9tICcuL21lbnUnO1xuLyoqXG4gKiBJbml0aWFsaXplIGFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB2aWV3ID0gbmV3IE1hcFZpZXcoe1xuICBjb250YWluZXI6ICd2aWV3RGl2JyxcbiAgbWFwXG59KTtcblxuLy9oYW5kbGUgd2hlbiB2aWV3IGlzIHJlYWR5XG52aWV3LndoZW4oKCkgPT4ge1xuICB2aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgaWYgKGxheWVyLnR5cGUgIT0gJ2dyb3VwJykge1xuICAgICAgbGF5ZXIud2F0Y2goJ3Zpc2libGUnLCB2aXNpYmxlID0+IHtcbiAgICAgICAgbGF5ZXJzLmxheWVyTGlzdD8ub3BlcmF0aW9uYWxJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmxheWVyLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gaXRlbS5jaGlsZHJlbi5maW5kKGkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaS5sYXllciA9PT0gbGF5ZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICBjaGlsZC5wYW5lbC5vcGVuID0gdmlzaWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxheWVyLndhdGNoKCd2aXNpYmxlJywgdmlzaWJsZSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gbGF5ZXJzLmxheWVyTGlzdC5vcGVyYXRpb25hbEl0ZW1zLmZpbmQoaSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGkubGF5ZXIgPT09IGxheWVyO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgZ3JvdXAub3BlbiA9IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHByb3BlcnR5TGF5ZXIgPSBtYXAuYWxsTGF5ZXJzLmZpbmQobGF5ZXIgPT4ge1xuICAgIHJldHVybiBsYXllci50aXRsZSA9PT0gJ1Byb3BlcnR5JyAmJiBsYXllci50eXBlID09PSAnZmVhdHVyZSc7XG4gIH0pO1xuICB2aWV3Lm9uKCdob2xkJywgZSA9PiB7XG4gICAgcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBlLm1hcFBvaW50O1xuICAgIHRvZ2dsZUFjdGlvbignU2VhcmNoJyk7XG4gIH0pO1xuICB2aWV3XG4gICAgLndoZW5MYXllclZpZXcocHJvcGVydHlMYXllcilcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBwcm9wZXJ0eVNlYXJjaC5wcm9wZXJ0eUxheWVyID0gcHJvcGVydHlMYXllciBhcyBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICAgICAgLy9zZWFyY2ggYnkgZ2VvbWV0cnkgYWZ0ZXIgc2tldGNoIGNyZWF0aW9uIGluIHNlbGVjdCB3aWRnZXRcbiAgICAgIHNlbGVjdC52aWV3TW9kZWwuc2tldGNoLm9uKCdjcmVhdGUnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXYuc3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICBpZiAoc2VsZWN0LnZpZXdNb2RlbD8uYnVmZmVyRGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ2VvbWV0cnlFbmdpbmUuZ2VvZGVzaWNCdWZmZXIoZXYuZ3JhcGhpYy5nZW9tZXRyeSwgc2VsZWN0LnZpZXdNb2RlbC5idWZmZXJEaXN0YW5jZSwgJ2ZlZXQnKTtcbiAgICAgICAgICAgIHByb3BlcnR5U2VhcmNoLmdlb21ldHJ5ID0gZyBhcyBfX2VzcmkuUG9seWdvbjtcbiAgICAgICAgICAgIGV2LmdyYXBoaWMuZ2VvbWV0cnkgPSBnO1xuICAgICAgICAgICAgc2VsZWN0LnZpZXdNb2RlbC5ncmFwaGljcy5hZGQoZXYuZ3JhcGhpYyk7XG4gICAgICAgICAgICBldi5ncmFwaGljLnN5bWJvbCA9IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3NpbXBsZS1maWxsJyxcbiAgICAgICAgICAgICAgc3R5bGU6ICdub25lJyxcbiAgICAgICAgICAgICAgb3V0bGluZTogeyBzdHlsZTogJ3Nob3J0LWRhc2gnLCB3aWR0aDogMi41LCBjb2xvcjogWzIyMSwgMjIxLCAyMjEsIDFdIH0sXG4gICAgICAgICAgICAgIGNvbG9yOiBbMjU1LCAyNDMsIDEzLCAwLjI1XVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZpZXcuZ29Ubyhldi5ncmFwaGljKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBldi5ncmFwaGljLmdlb21ldHJ5O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0b2dnbGVBY3Rpb24oJ1NlYXJjaCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgocmVhc29uOiBhbnkpID0+IHtcbiAgICAgIC8vb24gZXJyb3IgbG9hZGluZyBwcm9wZXJ0eSBsYXllciwgZGlzcGxheSBhbGVydFxuICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcbiAgICAgIHNob3dBbGVydCgnUHJvcGVydHkgbGF5ZXIgZGlkIG5vdCBsb2FkLiBQbGVhc2UgY29udGFjdCBpTUFQUyBIZWxwIERlc2suJywgJ3JlZCcpO1xuICAgIH0pO1xufSk7XG52aWV3LndoZW4oaW5pdFdpZGdldHMpO1xudmlldy53aGVuKGluaXRUaXBzKTtcbi8vc2F2ZSB3ZWIgbWFwIHRvIGxvY2FsIHN0b3JhZ2Ugb24gcGFnZWhpZGVcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlaGlkZScsICgpID0+IHtcbiAgdmlldy5tYXAucmVtb3ZlTWFueShcbiAgICB2aWV3Lm1hcC5hbGxMYXllcnNcbiAgICAgIC5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICByZXR1cm4gbGF5ZXIudHlwZSA9PT0gJ2dyb3VwJyAmJiAhKGxheWVyIGFzIF9fZXNyaS5Hcm91cExheWVyKS5sYXllcnMubGVuZ3RoO1xuICAgICAgfSlcbiAgICAgIC50b0FycmF5KClcbiAgKTtcbiAgY29uc3QganNvbiA9ICh2aWV3Lm1hcCBhcyBhbnkpLnRvSlNPTigpO1xuICBqc29uLmluaXRpYWxTdGF0ZS52aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkgPSB2aWV3LmV4dGVudDtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbWFwcycsIEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbn0pO1xuXG4vL3Nob3cgZmlyc3QgcGFuZWwgb24gZGV2aWNlcyB3aWRlciB0aGFuIDUwMHB4IGJ5IGRlZmF1bHRcbmlmICh3aW5kb3cub3V0ZXJXaWR0aCA+PSA1MDApIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1wYW5lbCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1wYW5lbCcpPy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xufVxuXG4vL21vZGlmeSBET00gYWZ0ZXIgbWFwIHZpZXcgbG9hZHNcbnZpZXcud2hlbigoKSA9PiB7XG4gIGluaXRQYW5lbHMoKTtcbiAgZW5hYmxlQWN0aW9uYmFyKCk7XG59KTtcblxuaW5pdFBhbmVsSGVhZGVycygpO1xuaW5pdE1lbnUoKTtcbiJdLCJuYW1lcyI6WyJ3aGVuRGVmaW5lZE9uY2UiLCJ3aGVuRGVmaW5lZCIsInByb3BlcnR5Iiwic3ViY2xhc3MiLCJ0c3giLCJhbGlhc09mIiwicmVuZGVyYWJsZSIsIkNTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ08sSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztFQUM5QixHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsa0NBQWtDLEVBQUUsRUFBRSxDQUFDLENBQUM7OztFQ0Z0RSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUM7RUFDM0IsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFhO01BQzdCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1VBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ25DLENBQUMs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
