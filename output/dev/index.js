
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
define(['esri/WebMap', 'esri/views/MapView', 'esri/geometry/geometryEngine', 'esri/widgets/LayerList', 'esri/widgets/Legend', 'esri/widgets/Print', 'esri/widgets/Bookmarks', 'esri/widgets/BasemapGallery', 'esri/core/accessorSupport/decorators', 'esri/widgets/support/widget', 'esri/widgets/Widget', 'esri/core/Accessor', 'esri/widgets/Search', 'esri/widgets/FeatureTable', 'esri/layers/FeatureLayer', 'esri/widgets/Feature', 'esri/core/watchUtils', 'esri/widgets/Search/LayerSearchSource', 'esri/widgets/FeatureTable/FieldColumnConfig', 'esri/PopupTemplate', 'esri/widgets/CoordinateConversion', 'esri/widgets/Expand', 'esri/widgets/Measurement', 'esri/widgets/Compass', 'esri/widgets/Locate', 'esri/widgets/Track', 'esri/Color', 'esri/widgets/Sketch', 'esri/layers/GraphicsLayer', 'esri/Graphic', 'esri/symbols/TextSymbol'], function (WebMap, MapView, geometryEngine, LayerList, Legend, Print, Bookmarks, BasemapGallery, decorators, widget, Widget, Accessor, Search, FeatureTable, FeatureLayer, Feature, watchUtils, LayerSearchSource, FieldColumnConfig, PopupTemplate, CoordinateConversion, Expand, Measurement, Compass, Locate, Track, Color, Sketch, GraphicsLayer, Graphic, TextSymbol) { 'use strict';

  WebMap = WebMap && Object.prototype.hasOwnProperty.call(WebMap, 'default') ? WebMap['default'] : WebMap;
  MapView = MapView && Object.prototype.hasOwnProperty.call(MapView, 'default') ? MapView['default'] : MapView;
  geometryEngine = geometryEngine && Object.prototype.hasOwnProperty.call(geometryEngine, 'default') ? geometryEngine['default'] : geometryEngine;
  LayerList = LayerList && Object.prototype.hasOwnProperty.call(LayerList, 'default') ? LayerList['default'] : LayerList;
  Legend = Legend && Object.prototype.hasOwnProperty.call(Legend, 'default') ? Legend['default'] : Legend;
  Print = Print && Object.prototype.hasOwnProperty.call(Print, 'default') ? Print['default'] : Print;
  Bookmarks = Bookmarks && Object.prototype.hasOwnProperty.call(Bookmarks, 'default') ? Bookmarks['default'] : Bookmarks;
  BasemapGallery = BasemapGallery && Object.prototype.hasOwnProperty.call(BasemapGallery, 'default') ? BasemapGallery['default'] : BasemapGallery;
  Widget = Widget && Object.prototype.hasOwnProperty.call(Widget, 'default') ? Widget['default'] : Widget;
  Accessor = Accessor && Object.prototype.hasOwnProperty.call(Accessor, 'default') ? Accessor['default'] : Accessor;
  Search = Search && Object.prototype.hasOwnProperty.call(Search, 'default') ? Search['default'] : Search;
  FeatureTable = FeatureTable && Object.prototype.hasOwnProperty.call(FeatureTable, 'default') ? FeatureTable['default'] : FeatureTable;
  FeatureLayer = FeatureLayer && Object.prototype.hasOwnProperty.call(FeatureLayer, 'default') ? FeatureLayer['default'] : FeatureLayer;
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
  GraphicsLayer = GraphicsLayer && Object.prototype.hasOwnProperty.call(GraphicsLayer, 'default') ? GraphicsLayer['default'] : GraphicsLayer;
  Graphic = Graphic && Object.prototype.hasOwnProperty.call(Graphic, 'default') ? Graphic['default'] : Graphic;
  TextSymbol = TextSymbol && Object.prototype.hasOwnProperty.call(TextSymbol, 'default') ? TextSymbol['default'] : TextSymbol;

  var map = new WebMap();
  map = new WebMap({ portalItem: { id: '95092428774c4b1fb6a3b6f5fed9fbc4' } });
  map.portalItem.load().then(function () {
      if (window.localStorage.getItem('imaps')) {
          var mapcached = WebMap.fromJSON(JSON.parse(window.localStorage.getItem('imaps')));
          mapcached.load().then(function (mapcached) {
              debugger;
          });
      }
  });
  //# sourceMappingURL=app.js.map

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
                  }
              ]
          }
      }
  ];
  function initTips() {
      document.querySelectorAll('.tip').forEach(function (item) {
          item.addEventListener('click', function () {
              var _a, _b, _c, _d, _e, _f;
              (_a = document.querySelector('calcite-tip-manager')) === null || _a === void 0 ? void 0 : _a.remove();
              (_c = (_b = item.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.removeAttribute('dismissed');
              (_e = (_d = item.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.classList.remove('hidden');
              var manager = document.createElement('calcite-tip-manager');
              var tipGroup = tipGroups.find(function (group) {
                  return group.panel.name === item.id;
              });
              var group = document.createElement('calcite-tip-group');
              group.setAttribute('text-group-title', tipGroup === null || tipGroup === void 0 ? void 0 : tipGroup.panel.title);
              manager.appendChild(group);
              tipGroup === null || tipGroup === void 0 ? void 0 : tipGroup.panel.tips.forEach(function (tip) {
                  var calciteTip = document.createElement('calcite-tip');
                  calciteTip.setAttribute('heading', tip.title);
                  var p = document.createElement('p');
                  p.innerHTML = tip.message;
                  calciteTip.appendChild(p);
                  group.appendChild(calciteTip);
              });
              (_f = document === null || document === void 0 ? void 0 : document.body) === null || _f === void 0 ? void 0 : _f.appendChild(manager);
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
          _this.name = 'Property Search';
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
          _this.getProperty = function (oids) {
              var relationship = _this.condosTable.relationships.find(function (r) {
                  return r.name === 'CONDO_PROPERTY';
              });
              _this.condosTable
                  .queryRelatedFeatures({
                  relationshipId: relationship === null || relationship === void 0 ? void 0 : relationship.id,
                  objectIds: oids,
                  outFields: ['OBJECTID'],
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
                      var layerView = _this.view.layerViews.find(function (view) {
                          return view.layer === _this.propertyLayer;
                      });
                      if (layerView) {
                          if (_this.highlights) {
                              _this.highlights.remove();
                          }
                          _this.highlights = layerView.highlight(result.features);
                      }
                  });
              });
          };
          _this.searchComplete = function (event) {
              if (!_this.searchWidget.viewModel.selectedSuggestion) {
                  var oids_1 = [];
                  var where_1 = "OWNER like '" +
                      event.searchTerm.toUpperCase() +
                      "%' OR REID like '" +
                      event.searchTerm.toUpperCase() +
                      "%' OR PIN_NUM like '" +
                      event.searchTerm.toUpperCase() +
                      "'";
                  var tableFeatures_1 = [];
                  _this.condosTable.queryFeatures({ where: where_1, outFields: ['*'] }).then(function (result) {
                      console.log(result);
                      tableFeatures_1 = result.features;
                      result.features.forEach(function (f) {
                          oids_1.push(f.getObjectId());
                      });
                      where_1 = "ADDRESS like '%" + event.searchTerm.toUpperCase() + "%'";
                      _this.addressTable.queryFeatures({ where: where_1, outFields: ['*'] }).then(function (result) {
                          var relationship = _this.addressTable.relationships.find(function (r) {
                              return r.name === 'ADDRESSES_CONDO';
                          });
                          result.features.forEach(function (f) {
                              oids_1.push(f.getObjectId());
                          });
                          if (relationship && oids_1.length) {
                              _this.addressTable
                                  .queryRelatedFeatures({ relationshipId: relationship.id, objectIds: oids_1, outFields: ['*'] })
                                  .then(function (result) {
                                  var oids = [];
                                  for (var key in result) {
                                      result[key].features.forEach(function (feature) {
                                          console.log(feature);
                                          oids.push(feature.getAttribute('OBJECTID'));
                                          tableFeatures_1.push(feature);
                                      });
                                  }
                                  _this.featureTable.layer = new FeatureLayer({
                                      fields: _this.condosTable.fields,
                                      source: tableFeatures_1,
                                      title: 'Selected properties',
                                      geometryType: 'point',
                                      objectIdField: 'OBJECTID'
                                  });
                                  _this.getProperty(oids);
                                  _this.featureTable.renderNow();
                              });
                          }
                          else {
                              _this.featureTable.layer = new FeatureLayer({
                                  fields: _this.condosTable.fields,
                                  source: tableFeatures_1,
                                  title: 'Selected properties',
                                  geometryType: 'point',
                                  objectIdField: 'OBJECTID'
                              });
                              _this.featureTable.renderNow();
                          }
                      });
                  });
              }
              else {
                  console.log(event.numResults);
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
                                          console.log(feature);
                                          oids.push(feature.getAttribute('OBJECTID'));
                                          _this.getProperty(oids);
                                          feature.layer = _this.condosTable;
                                          _this.setFeature(feature, _this.view, [], oids);
                                          _this.toggleContent('feature');
                                          _this.featureTable.layer = new FeatureLayer({
                                              fields: _this.condosTable.fields,
                                              source: [feature],
                                              title: 'Selected properties',
                                              geometryType: 'point',
                                              objectIdField: 'OBJECTID'
                                          });
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
                              _this.featureTable.layer = new FeatureLayer({
                                  fields: _this.condosTable.fields,
                                  source: result.features,
                                  title: 'Selected properties',
                                  geometryType: 'point',
                                  objectIdField: 'OBJECTID'
                              });
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
              .queryFeatures({ geometry: geometry, returnGeometry: true, outFields: ['OBJECTID'] })
              .then(function (result) {
              var layerView = _this.view.layerViews.find(function (view) {
                  return view.layer === _this.propertyLayer;
              });
              if (layerView) {
                  if (_this.highlights) {
                      _this.highlights.remove();
                  }
                  _this.highlights = layerView.highlight(result.features);
              }
              var relationship = _this.propertyLayer.relationships.find(function (r) {
                  return r.name === 'PROPERTY_CONDO';
              });
              var oids = [];
              result.features.forEach(function (f) {
                  oids.push(f.getObjectId());
              });
              _this.propertyLayer
                  .queryRelatedFeatures({ relationshipId: relationship === null || relationship === void 0 ? void 0 : relationship.id, objectIds: oids, outFields: ['*'] })
                  .then(function (result) {
                  var features = [];
                  for (var key in result) {
                      features = features.concat(result[key].features);
                  }
                  _this.featureTable.layer = new FeatureLayer({
                      fields: _this.condosTable.fields,
                      source: features,
                      title: 'Selected properties',
                      geometryType: 'point',
                      objectIdField: 'OBJECTID'
                  });
                  if (features.length === 1) {
                      _this.setFeature(features[0], _this.view, [], [features[0].getObjectId()]);
                      _this.toggleContent('feature');
                  }
                  _this.featureTable.renderNow();
              });
          });
      };
      PropertySearchViewModel.prototype.init = function (view) {
          console.log(view.scale);
      };
      PropertySearchViewModel.prototype.setFeature = function (feature, view, mediaInfos, oids) {
          var _this = this;
          console.log('setting feature');
          var relationship = this.condosTable.relationships.find(function (r) {
              return r.name === 'CONDO_PHOTOS';
          });
          console.log(relationship);
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
              console.log(feature);
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
              objectIdField: 'OBJECTID'
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
              if (event.added.length) {
                  _this.getProperty([event.added[0].feature.getAttribute('OBJECTID')]);
                  _this.setFeature(event.added[0].feature, _this.view, [], [event.added[0].feature.getAttribute('OBJECTID')]);
                  _this.toggleContent('feature');
              }
              _this.featureTable.clearSelection();
          });
          this.searchWidget = new Search({
              allPlaceholder: 'Site Address',
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
      __decorate([
          decorators.property()
      ], PropertySearchViewModel.prototype, "name", void 0);
      PropertySearchViewModel = __decorate([
          decorators.subclass('app.widgets.PropertySearch.PropertySearchViewModel')
      ], PropertySearchViewModel);
      return PropertySearchViewModel;
  }(decorators.declared(Accessor)));
  //# sourceMappingURL=PropertySearchViewModel.js.map

  var CSS = {
      base: 'esri-widget propertysearch-base'
  };
  var PropertySearch = (function (_super) {
      __extends(PropertySearch, _super);
      function PropertySearch(properties) {
          var _this = _super.call(this, properties) || this;
          _this.name = '';
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
          decorators.aliasOf('viewModel.name'),
          widget.renderable()
      ], PropertySearch.prototype, "name", void 0);
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
  }(decorators.declared(Widget)));
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
  }(decorators.declared(Accessor)));
  //# sourceMappingURL=MeasureViewModel.js.map

  var CSS$1 = {
      base: 'esri-widget measure-base'
  };
  var Measure = (function (_super) {
      __extends(Measure, _super);
      function Measure(properties) {
          var _this = _super.call(this, properties) || this;
          _this.name = '';
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
          decorators.aliasOf('viewModel.name'),
          widget.renderable()
      ], Measure.prototype, "name", void 0);
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
  }(decorators.declared(Widget)));
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
          _this.name = 'Slagathor';
          watchUtils.whenDefinedOnce(_this, 'view', _this.init.bind(_this));
          return _this;
      }
      DrawViewModel.prototype.initDraw = function () {
          var _this = this;
          this.graphics = new GraphicsLayer({ listMode: 'hide' });
          this.view.map.add(this.graphics);
          this.sketch = new Sketch({ view: this.view, container: 'sketchDiv', layer: this.graphics });
          this.sketch.on('create', function (e) {
              var _a;
              if (e.state === 'complete' && ((_a = _this.label) === null || _a === void 0 ? void 0 : _a.length)) {
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
                          verticalAlignment: 'top',
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
      __decorate([
          decorators.property()
      ], DrawViewModel.prototype, "name", void 0);
      DrawViewModel = __decorate([
          decorators.subclass('app.widgets.Draw.DrawViewModel')
      ], DrawViewModel);
      return DrawViewModel;
  }(decorators.declared(Accessor)));
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
          fill === null || fill === void 0 ? void 0 : fill.addEventListener('calciteColorChange', function (e) {
              var hex = e.target.value;
              _this.viewModel.sketch.viewModel.pointSymbol.color = Color.fromHex(hex);
              _this.viewModel.sketch.viewModel.polygonSymbol.color = Color.fromHex(hex);
          });
          var line = document.querySelector('#line');
          line === null || line === void 0 ? void 0 : line.addEventListener('calciteColorChange', function (e) {
              var hex = e.target.value;
              _this.viewModel.sketch.viewModel.polylineSymbol.color = Color.fromHex(hex);
              _this.viewModel.sketch.viewModel.pointSymbol.outline.color = Color.fromHex(hex);
              _this.viewModel.sketch.viewModel.polygonSymbol.outline.color = Color.fromHex(hex);
          });
          var opacity = document.querySelector('#opacity');
          opacity === null || opacity === void 0 ? void 0 : opacity.addEventListener('calciteInputBlur', function (e) {
              _this.viewModel.graphics.opacity = parseFloat(e.target.value);
          });
          var width = document.querySelector('#width');
          width === null || width === void 0 ? void 0 : width.addEventListener('calciteInputBlur', function (e) {
              _this.viewModel.sketch.viewModel.polylineSymbol.width = parseFloat(e.target.value);
              _this.viewModel.sketch.viewModel.pointSymbol.outline.width = parseFloat(e.target.value);
              _this.viewModel.sketch.viewModel.polygonSymbol.outline.width = parseFloat(e.target.value);
          });
          var label = document.querySelector('#label');
          label === null || label === void 0 ? void 0 : label.addEventListener('calciteInputBlur', function (e) {
              _this.set('label', e.target.value);
          });
          var textColor = document.querySelector('#textColor');
          textColor === null || textColor === void 0 ? void 0 : textColor.addEventListener('calciteColorChange', function (e) {
              _this.set('textColor', Color.fromHex(e.target.value));
          });
          return (widget.tsx("div", { class: CSS$2.base },
              widget.tsx("div", { afterUpdate: this._drawUpdated, id: "sketchDiv" }),
              widget.tsx("calcite-block", { heading: "Settings", open: true, collapsible: true },
                  widget.tsx("calcite-block-section", { text: "Color" },
                      widget.tsx("calcite-label", { scale: "s" }, "Fill Color"),
                      widget.tsx("calcite-color", { id: "fill", hideChannels: true, hideSaved: true, appearance: "minimal", scale: "s" }),
                      widget.tsx("calcite-label", { scale: "s" }, "Line Color"),
                      widget.tsx("calcite-color", { id: "line", hideChannels: true, hideSaved: true, appearance: "minimal", scale: "s" })),
                  widget.tsx("calcite-block-section", { text: "Opacity" },
                      widget.tsx("calcite-label", { scale: "s" }, "Opacity"),
                      widget.tsx("calcite-input", { scale: "s", id: "opacity", type: "number", max: "1", min: "0", value: "1", step: "0.1" })),
                  widget.tsx("calcite-block-section", { text: "Outline" },
                      widget.tsx("calcite-label", { scale: "s" }, "Width"),
                      widget.tsx("calcite-input", { scale: "s", id: "width", type: "number", max: "10", min: "0", value: "1", step: "0.5" })),
                  widget.tsx("calcite-block-section", { text: "Labeling" },
                      widget.tsx("calcite-label", { scale: "s" }, "Label"),
                      widget.tsx("calcite-input", { scale: "s", id: "label", type: "textarea" }),
                      widget.tsx("calcite-color", { id: "textColor", hideChannels: true, hideSaved: true, appearance: "minimal", scale: "s" })))));
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
  }(decorators.declared(Widget)));
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
          this.sketch.on('create', function (ev) {
              if (ev.state === 'complete') {
                  _this.graphics.removeAll();
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
  }(decorators.declared(Accessor)));
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
              widget.tsx("calcite-label", { scale: "s" }, "Buffer Distance (feet) "),
              widget.tsx("calcite-input", { scale: "s", type: "number", min: "0", max: "2000", step: "50", value: this.viewModel.bufferDistance })));
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
  }(decorators.declared(Widget)));
  //# sourceMappingURL=Select.js.map

  var measurement = new Measure();
  var select = new Select();
  var layerList;
  var propertySearch = new PropertySearch();
  var drawWidget = new Draw();
  function initWidgets(view) {
      new Legend({ view: view, container: 'legendDiv' });
      layerList = new LayerList({
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
                      view.map.findLayerById(event.target.getAttribute('data')).opacity =
                          parseInt(event.target.getAttribute('value')) / 100;
                  });
                  item.panel = {
                      content: [slider, 'legend'],
                      open: false
                  };
              }
          }
      });
      new Print({
          view: view,
          container: 'printDiv',
          printServiceUrl: 'https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task'
      });
      new Bookmarks({ view: view, container: 'bookmarkDiv', editingEnabled: true });
      new BasemapGallery({ view: view, container: 'basemapDiv' });
      var coordinates = new CoordinateConversion({ view: view });
      var coordinatesExpand = new Expand({
          content: coordinates,
          mode: 'floating',
          expandIconClass: 'esri-icon-map-pin'
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
      propertySearch.view = view;
      propertySearch.condosTable = condosTable;
      propertySearch.addressTable = addressTable;
      propertySearch.propertyLayer = featureLayer;
      propertySearch.container = 'sideDiv';
      select.container = 'selectDiv';
      select.view = view;
      select.layer = featureLayer;
      return view;
  }
  //# sourceMappingURL=widgets.js.map

  var _a;
  var view = new MapView({
      container: 'viewDiv',
      map: map
  });
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
      });
  });
  view.when(function () {
      view.map.allLayers.forEach(function (layer) {
          if (layer.type != 'group') {
              layer.watch('visible', function (visible) {
                  layerList.operationalItems.forEach(function (item) {
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
      });
      var propertyLayer = map.allLayers.find(function (layer) {
          return layer.title === 'Property' && layer.type === 'feature';
      });
      view.on('hold', function (e) {
          propertySearch.geometry = e.mapPoint;
      });
      view
          .whenLayerView(propertyLayer)
          .then(function () {
          propertySearch.propertyLayer = propertyLayer;
          select.viewModel.sketch.on('create', function (ev) {
              var _a;
              if (ev.state === 'complete') {
                  if (((_a = select.viewModel) === null || _a === void 0 ? void 0 : _a.bufferDistance) > 0) {
                      var g = geometryEngine.geodesicBuffer(ev.graphic.geometry, select.viewModel.bufferDistance, 'meters');
                      propertySearch.geometry = g;
                  }
                  else {
                      propertySearch.geometry = ev.graphic.geometry;
                  }
                  toggleAction('Search');
              }
          });
      })
          .catch(function () {
          showAlert('Property layer did not load. Please contact iMAPS Help Desk.', 'red');
      });
  });
  if (window.outerWidth >= 500) {
      (_a = document.querySelector('calcite-panel')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
  }
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
          debugger;
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
                  item.setAttribute('style', 'min-width: calc(100% src)');
              }
          });
      }
  };
  view.when(initWidgets);
  view.when(initTips);
  document.querySelectorAll('calcite-panel').forEach(function (item) {
  });
  window.addEventListener('pagehide', function () {
      view.map.removeMany(view.map.allLayers
          .filter(function (layer) {
          return layer.type === 'group' && !layer.layers.length;
      })
          .toArray());
      var json = view.map.toJSON();
      json.initialState.viewpoint.targetGeometry = view.extent;
      window.localStorage.setItem('imaps', JSON.stringify(json));
      window.localStorage.setItem('imaps_created', JSON.stringify(view.map.portalItem.modified));
  });
  document.querySelectorAll('calcite-panel div').forEach(function (panel) {
      if (panel.slot === 'header-trailing-content') {
          panel.setAttribute('style', 'display: flex; flex-direction: row;');
      }
  });

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FwcC50cyIsIi4uLy4uL3NyYy90aXBzLnRzIiwiLi4vLi4vc3JjL2FsZXJ0LnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvUHJvcGVydHlTZWFyY2gvUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaC50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9NZWFzdXJlL01lYXN1cmVWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9NZWFzdXJlLnRzeCIsIi4uLy4uL3NyYy9kYXRhL3NlYXJjaC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0RyYXcvRHJhd1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0RyYXcudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvU2VsZWN0L1NlbGVjdFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL1NlbGVjdC50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy50cyIsIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBUaWxlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvVGlsZUxheWVyJztcbi8vaW1wb3J0IFZlY3RvclRpbGVMYXllciBmcm9tICdlc3JpL2xheWVycy9WZWN0b3JUaWxlTGF5ZXInO1xuLy9pbXBvcnQgQXJjR0lTTWFwIGZyb20gJ2VzcmkvTWFwJztcbi8vaW1wb3J0IHsgZmVhdHVyZUxheWVyIH0gZnJvbSAnLi9zZWFyY2gnO1xuaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG5leHBvcnQgbGV0IG1hcCA9IG5ldyBXZWJNYXAoKTtcbm1hcCA9IG5ldyBXZWJNYXAoeyBwb3J0YWxJdGVtOiB7IGlkOiAnOTUwOTI0Mjg3NzRjNGIxZmI2YTNiNmY1ZmVkOWZiYzQnIH0gfSk7XG5tYXAucG9ydGFsSXRlbS5sb2FkKCkudGhlbigoKSA9PiB7XG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzJykpIHtcbiAgICBjb25zdCBtYXBjYWNoZWQ6IFdlYk1hcCA9IFdlYk1hcC5mcm9tSlNPTihKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hcHMnKSBhcyBzdHJpbmcpKTtcbiAgICBtYXBjYWNoZWQubG9hZCgpLnRoZW4obWFwY2FjaGVkID0+IHtcbiAgICAgIGRlYnVnZ2VyO1xuICAgIH0pO1xuICB9XG59KTtcblxuLy8gZXhwb3J0IGNvbnN0IG1hcCA9IG5ldyBBcmNHSVNNYXAoe1xuLy8gICBiYXNlbWFwOiB7XG4vLyAgICAgYmFzZUxheWVyczogW1xuLy8gICAgICAgbmV3IFRpbGVMYXllcih7XG4vLyAgICAgICAgIHBvcnRhbEl0ZW06IHtcbi8vICAgICAgICAgICAvLyB3b3JsZCBoaWxsc2hhZGVcbi8vICAgICAgICAgICBpZDogJzFiMjQzNTM5ZjQ1MTRiNmJhMzVlN2Q5OTU4OTBkYjFkJ1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9KSxcbi8vICAgICAgIG5ldyBWZWN0b3JUaWxlTGF5ZXIoe1xuLy8gICAgICAgICBwb3J0YWxJdGVtOiB7XG4vLyAgICAgICAgICAgLy8gdG9wb2dyYXBoaWNcbi8vICAgICAgICAgICBpZDogJzdkYzZjZWEwYjE3NjRhMWY5YWYyZTY3OWY2NDJmMGY1J1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9KVxuLy8gICAgIF1cbi8vICAgfSxcbi8vICAgbGF5ZXJzOiBbZmVhdHVyZUxheWVyXVxuLy8gfSk7XG4iLCJjb25zdCB0aXBHcm91cHMgPSBbXG4gIHtcbiAgICBwYW5lbDoge1xuICAgICAgbmFtZTogJ3NlbGVjdFRpcCcsXG4gICAgICB0aXRsZTogJ1NlbGVjdGlvbicsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnVG8gZHJhdyBhIGNvbnRpbnVvdXMgbGluZSBvciBwb2x5Z29uLCBsb25nIHByZXNzIGFuZCBkcmFnIHlvdXIgY3Vyc29yJyxcbiAgICAgICAgICB0aXRsZTogJ0ZyZWVoYW5kIERyYXdpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnVG8gZHJhdyBhIGNvbnRpbnVvdXMgbGluZSBvciBwb2x5Z29uLCBsb25nIHByZXNzIGFuZCBkcmFnIHlvdXIgY3Vyc29yJyxcbiAgICAgICAgICB0aXRsZTogJ0ZyZWVoYW5kIERyYXdpbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwYW5lbDoge1xuICAgICAgbmFtZTogJ3Byb3BlcnR5U2VhcmNoVGlwJyxcbiAgICAgIHRpdGxlOiAnUHJvcGVydHkgU2VhcmNoJyxcbiAgICAgIHRpcHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAnVG8gc2VhcmNoIGJ5IGEgcG9ydGlvbiBvZiBhbiBvd25lciBuYW1lIG9yIGFkZHJlc3MsIGhpdCBlbnRlciB3aXRob3V0IHNlbGVjdGluZyBmb3JtIHRoZSBsaXN0IG9mIHN1Z2dlc3Rpb25zLicsXG4gICAgICAgICAgdGl0bGU6ICdXaWxkY2FyZCBTZWFyY2gnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbl07XG5leHBvcnQgZnVuY3Rpb24gaW5pdFRpcHMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXAnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLXRpcC1tYW5hZ2VyJyk/LnJlbW92ZSgpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGNvbnN0IG1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcC1tYW5hZ2VyJyk7XG4gICAgICBjb25zdCB0aXBHcm91cCA9IHRpcEdyb3Vwcy5maW5kKGdyb3VwID0+IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnBhbmVsLm5hbWUgPT09IGl0ZW0uaWQ7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcC1ncm91cCcpO1xuICAgICAgZ3JvdXAuc2V0QXR0cmlidXRlKCd0ZXh0LWdyb3VwLXRpdGxlJywgdGlwR3JvdXA/LnBhbmVsLnRpdGxlKTtcbiAgICAgIG1hbmFnZXIuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgICAgdGlwR3JvdXA/LnBhbmVsLnRpcHMuZm9yRWFjaCh0aXAgPT4ge1xuICAgICAgICBjb25zdCBjYWxjaXRlVGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAnKTtcbiAgICAgICAgY2FsY2l0ZVRpcC5zZXRBdHRyaWJ1dGUoJ2hlYWRpbmcnLCB0aXAudGl0bGUpO1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLmlubmVySFRNTCA9IHRpcC5tZXNzYWdlO1xuICAgICAgICBjYWxjaXRlVGlwLmFwcGVuZENoaWxkKHApO1xuICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjYWxjaXRlVGlwKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQ/LmJvZHk/LmFwcGVuZENoaWxkKG1hbmFnZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzaG93QWxlcnQodGV4dDogc3RyaW5nLCBjb2xvcjogc3RyaW5nKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtYWxlcnQnKT8ucmVtb3ZlKCk7XG4gIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1hbGVydCcpO1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdzbG90JywgJ2FsZXJ0LW1lc3NhZ2UnKTtcbiAgbWVzc2FnZS5pbm5lckhUTUwgPSB0ZXh0O1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgY29sb3IpO1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdpY29uJywgJycpO1xuXG4gIGFsZXJ0LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFsZXJ0KTtcbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gnO1xuaW1wb3J0IEZlYXR1cmVUYWJsZSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZVRhYmxlJztcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlJztcbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSwgd2hlbkRlZmluZWQgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgTGF5ZXJTZWFyY2hTb3VyY2UgZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaC9MYXllclNlYXJjaFNvdXJjZSc7XG5pbXBvcnQgRmllbGRDb2x1bW5Db25maWcgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZS9GaWVsZENvbHVtbkNvbmZpZyc7XG5pbXBvcnQgUG9wdXBUZW1wbGF0ZSBmcm9tICdlc3JpL1BvcHVwVGVtcGxhdGUnO1xuaW1wb3J0IEV4cHJlc3Npb25JbmZvIGZyb20gJ2VzcmkvcG9wdXAvRXhwcmVzc2lvbkluZm8nO1xuaW1wb3J0IE1lbnVCdXR0b25JdGVtIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlVGFibGUvR3JpZC9zdXBwb3J0L0J1dHRvbk1lbnVJdGVtJztcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuUHJvcGVydHlTZWFyY2guUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgZXh0ZW5kcyBkZWNsYXJlZChBY2Nlc3Nvcikge1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQHByb3BlcnR5KCkgY29uZG9zVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAcHJvcGVydHkoKSBhZGRyZXNzVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAcHJvcGVydHkoKSBwcm9wZXJ0eUxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcblxuICBAcHJvcGVydHkoKSBzZWFyY2hXaWRnZXQ6IGVzcmkud2lkZ2V0c1NlYXJjaDtcbiAgQHByb3BlcnR5KCkgZmVhdHVyZVRhYmxlOiBlc3JpLkZlYXR1cmVUYWJsZTtcbiAgQHByb3BlcnR5KCkgZmVhdHVyZTogZXNyaS5GZWF0dXJlO1xuICBAcHJvcGVydHkoKSBnZW9tZXRyeTogZXNyaS5HZW9tZXRyeTtcblxuICBAcHJvcGVydHkoKSBuYW1lID0gJ1Byb3BlcnR5IFNlYXJjaCc7XG4gIGhpZ2hsaWdodHM6IGFueTtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICdjb25kb3NUYWJsZScsIHRoaXMuaW5pdFNlYXJjaC5iaW5kKHRoaXMpKTtcbiAgICB3aGVuRGVmaW5lZCh0aGlzLCAnZ2VvbWV0cnknLCB0aGlzLnNlYXJjaEJ5R2VvbWV0cnkuYmluZCh0aGlzKSk7XG4gIH1cblxuICBzZWFyY2hCeUdlb21ldHJ5KGdlb21ldHJ5OiBlc3JpLkdlb21ldHJ5KSB7XG4gICAgdGhpcy5wcm9wZXJ0eUxheWVyXG4gICAgICAucXVlcnlGZWF0dXJlcyh7IGdlb21ldHJ5OiBnZW9tZXRyeSwgcmV0dXJuR2VvbWV0cnk6IHRydWUsIG91dEZpZWxkczogWydPQkpFQ1RJRCddIH0pXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBjb25zdCBsYXllclZpZXcgPSB0aGlzLnZpZXcubGF5ZXJWaWV3cy5maW5kKHZpZXcgPT4ge1xuICAgICAgICAgIHJldHVybiB2aWV3LmxheWVyID09PSB0aGlzLnByb3BlcnR5TGF5ZXI7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGF5ZXJWaWV3KSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0cykge1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRzLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmhpZ2hsaWdodHMgPSAobGF5ZXJWaWV3IGFzIGVzcmkuRmVhdHVyZUxheWVyVmlldykuaGlnaGxpZ2h0KHJlc3VsdC5mZWF0dXJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwID0gdGhpcy5wcm9wZXJ0eUxheWVyLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICByZXR1cm4gci5uYW1lID09PSAnUFJPUEVSVFlfQ09ORE8nO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BlcnR5TGF5ZXJcbiAgICAgICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwPy5pZCwgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxldCBmZWF0dXJlczogYW55W10gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzLmNvbmNhdChyZXN1bHRba2V5XS5mZWF0dXJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgICAgICAgICBmaWVsZHM6IHRoaXMuY29uZG9zVGFibGUuZmllbGRzLFxuICAgICAgICAgICAgICBzb3VyY2U6IGZlYXR1cmVzLFxuICAgICAgICAgICAgICB0aXRsZTogJ1NlbGVjdGVkIHByb3BlcnRpZXMnLFxuICAgICAgICAgICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICAgICAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmUoZmVhdHVyZXNbMF0sIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsIFtdLCBbZmVhdHVyZXNbMF0uZ2V0T2JqZWN0SWQoKV0pO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLnJlbmRlck5vdygpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gIH1cblxuICBhcmNhZGVFeHByZXNzaW9uSW5mb3MgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ2JvbS1kb2MtbnVtJyxcbiAgICAgIHRpdGxlOiAnYm9tLWRvYy1udW0nLFxuICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgXCJ2YXIgcmVzdWx0cyA9IEZlYXR1cmVTZXRCeVJlbGF0aW9uc2hpcE5hbWUoJGZlYXR1cmUsICdDT05ET19CT09LUycsIFsnKiddLCBmYWxzZSk7IHJldHVybiBGaXJzdChyZXN1bHRzKS5CT01fRE9DX05VTTtcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2RlZWQtZG9jLW51bScsXG4gICAgICB0aXRsZTogJ2RlZWQtZG9jLW51bScsXG4gICAgICBleHByZXNzaW9uOlxuICAgICAgICBcInZhciByZXN1bHRzID0gRmVhdHVyZVNldEJ5UmVsYXRpb25zaGlwTmFtZSgkZmVhdHVyZSwgJ0NPTkRPX0JPT0tTJywgWycqJ10sIGZhbHNlKTsgcmV0dXJuIEZpcnN0KHJlc3VsdHMpLkRFRURfRE9DX05VTTtcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ21haWxpbmctYWRkcmVzcycsXG4gICAgICB0aXRsZTogJ21haWxpbmctYWRkcmVzcycsXG4gICAgICBleHByZXNzaW9uOlxuICAgICAgICAnV2hlbihJc0VtcHR5KCRmZWF0dXJlLkFERFIzKSwkZmVhdHVyZS5BRERSMSArIFRleHRGb3JtYXR0aW5nLk5ld0xpbmUgKyAkZmVhdHVyZS5BRERSMiwkZmVhdHVyZS5BRERSMSArIFRleHRGb3JtYXR0aW5nLk5ld0xpbmUgKyAkZmVhdHVyZS5BRERSMiArIFRleHRGb3JtYXR0aW5nLk5ld0xpbmUgKyAkZmVhdHVyZS5BRERSMyknXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAncHJvcGVydHktdmFsdWVzJyxcbiAgICAgIHRpdGxlOiAncHJvcGVydHktdmFsdWVzJyxcbiAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICdcIkJ1aWxkaW5nIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5CTERHX1ZBTCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiTGFuZCBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuTEFORF9WQUwrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIlRvdGFsIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5UT1RBTF9WQUxVRV9BU1NEJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2RlZWQtYm9vay1wYWdlJyxcbiAgICAgIHRpdGxlOiAnZGVlZC1ib29rLXBhZ2UnLFxuICAgICAgZXhwcmVzc2lvbjogJ1wiQm9vayBcIiskZmVhdHVyZS5ERUVEX0JPT0srXCIgUGFnZSBcIiskZmVhdHVyZS5ERUVEX1BBR0UnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZ2VuZXJhbCcsXG4gICAgICB0aXRsZTogJ2dlbmVyYWwnLFxuICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgJ1wiUElOXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5QSU5fTlVNK1wiIFwiKyRmZWF0dXJlLlBJTl9FWFQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICAgJ1wiUkVJRFwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJGZlYXR1cmUuUkVJRCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiQ2l0eVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAgICdQcm9wZXIoJGZlYXR1cmUuQ0lUWV9ERUNPREUpK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJKdXJpc2RpY3Rpb25cIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgICAnJGZlYXR1cmUuUExBTk5JTkdfSlVSSVNESUNUSU9OK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3duc2hpcFwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrUHJvcGVyKCRmZWF0dXJlLlRPV05TSElQX0RFQ09ERSknXG4gICAgfVxuICBdIGFzIEV4cHJlc3Npb25JbmZvW107XG5cbiAgcG9wdXBUZW1wbGF0ZSA9IG5ldyBQb3B1cFRlbXBsYXRlKHtcbiAgICBleHByZXNzaW9uSW5mb3M6IHRoaXMuYXJjYWRlRXhwcmVzc2lvbkluZm9zLFxuICAgIGNvbnRlbnQ6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB0ZXh0OlxuICAgICAgICAgICc8aDEgY2xhc3M9XCJ0ZXh0LWdyZWVuXCI+e1NJVEVfQUREUkVTU308L2gxPicgK1xuICAgICAgICAgICc8aDI+R2VuZXJhbDwvaDI+e2V4cHJlc3Npb24vZ2VuZXJhbH0nICtcbiAgICAgICAgICAnPGgyPk93bmVyPC9oMj57T1dORVJ9PGJyLz57ZXhwcmVzc2lvbi9tYWlsaW5nLWFkZHJlc3N9JyArXG4gICAgICAgICAgJzxoMj5WYWx1YXRpb248L2gyPntleHByZXNzaW9uL3Byb3BlcnR5LXZhbHVlc30nICtcbiAgICAgICAgICAnPGgyPlNhbGUgSW5mb3JtYXRpb248L2gyPntUT1RTQUxQUklDRX08YnIvPntTQUxFX0RBVEV9JyArXG4gICAgICAgICAgJzxoMj5EZWVkczwvaDI+e2V4cHJlc3Npb24vZGVlZC1ib29rLXBhZ2V9JyArXG4gICAgICAgICAgJzxici8+PHN0cm9uZz5EZWVkIERhdGU8L3N0cm9uZz48YnIvPntERUVEX0RBVEV9PGJyLz4nICtcbiAgICAgICAgICAnPGJyLz5MZWdhbCBEZXNjcmlwdGlvbjxici8+e1BST1BERVNDfTxici8+JyArXG4gICAgICAgICAgJzxhIGhyZWY9XCJodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPXtleHByZXNzaW9uL2JvbS1kb2MtbnVtfSZSZWNvcmREYXRlPVwiIHRhcmdldD1cIl9ibGFua1wiPkJvb2sgb2YgTWFwczwvYT48YnIvPjxhIGhyZWY9XCJodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPXtleHByZXNzaW9uL2RlZWQtZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EZWVkPC9hPidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdtZWRpYScsXG4gICAgICAgIG1lZGlhSW5mb3M6IFtdXG4gICAgICB9XG4gICAgXVxuICB9KTtcblxuICBnZXRQcm9wZXJ0eSA9IChvaWRzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuY29uZG9zVGFibGUucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0NPTkRPX1BST1BFUlRZJztcbiAgICB9KTtcbiAgICB0aGlzLmNvbmRvc1RhYmxlXG4gICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoe1xuICAgICAgICByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwPy5pZCxcbiAgICAgICAgb2JqZWN0SWRzOiBvaWRzLFxuICAgICAgICBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnXSxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZSxcbiAgICAgICAgICAgIG91dFNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ29UbyhyZXN1bHQuZmVhdHVyZXMpO1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJWaWV3ID0gdGhpcy52aWV3LmxheWVyVmlld3MuZmluZCh2aWV3ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZpZXcubGF5ZXIgPT09IHRoaXMucHJvcGVydHlMYXllcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGxheWVyVmlldykge1xuICAgICAgICAgICAgICBpZiAodGhpcy5oaWdobGlnaHRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRzLnJlbW92ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0cyA9IChsYXllclZpZXcgYXMgZXNyaS5GZWF0dXJlTGF5ZXJWaWV3KS5oaWdobGlnaHQocmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHNlYXJjaENvbXBsZXRlID0gKGV2ZW50OiBlc3JpLlNlYXJjaFNlYXJjaENvbXBsZXRlRXZlbnQpID0+IHtcbiAgICBpZiAoIXRoaXMuc2VhcmNoV2lkZ2V0LnZpZXdNb2RlbC5zZWxlY3RlZFN1Z2dlc3Rpb24pIHtcbiAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICBsZXQgd2hlcmUgPVxuICAgICAgICBcIk9XTkVSIGxpa2UgJ1wiICtcbiAgICAgICAgZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgXCIlJyBPUiBSRUlEIGxpa2UgJ1wiICtcbiAgICAgICAgZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgXCIlJyBPUiBQSU5fTlVNIGxpa2UgJ1wiICtcbiAgICAgICAgZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgXCInXCI7XG4gICAgICBsZXQgdGFibGVGZWF0dXJlczogYW55W10gPSBbXTtcbiAgICAgIHRoaXMuY29uZG9zVGFibGUucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiB3aGVyZSwgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIHRhYmxlRmVhdHVyZXMgPSByZXN1bHQuZmVhdHVyZXM7XG4gICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgd2hlcmUgPSBcIkFERFJFU1MgbGlrZSAnJVwiICsgZXZlbnQuc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpICsgXCIlJ1wiO1xuICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6IHdoZXJlLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmFkZHJlc3NUYWJsZS5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgICByZXR1cm4gci5uYW1lID09PSAnQUREUkVTU0VTX0NPTkRPJztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgb2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcCAmJiBvaWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hZGRyZXNzVGFibGVcbiAgICAgICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcC5pZCwgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVGZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICAgICAgICAgICAgICBmaWVsZHM6IHRoaXMuY29uZG9zVGFibGUuZmllbGRzLFxuICAgICAgICAgICAgICAgICAgc291cmNlOiB0YWJsZUZlYXR1cmVzLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgICAgICAgICAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLnJlbmRlck5vdygpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgICAgICAgICAgZmllbGRzOiB0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcyxcbiAgICAgICAgICAgICAgc291cmNlOiB0YWJsZUZlYXR1cmVzLFxuICAgICAgICAgICAgICB0aXRsZTogJ1NlbGVjdGVkIHByb3BlcnRpZXMnLFxuICAgICAgICAgICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICAgICAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUucmVuZGVyTm93KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudC5udW1SZXN1bHRzKTtcbiAgICAgIGlmIChldmVudC5udW1SZXN1bHRzKSB7XG4gICAgICAgIGNvbnN0IGxheWVyID0gKGV2ZW50LnJlc3VsdHNbMF0uc291cmNlIGFzIExheWVyU2VhcmNoU291cmNlKS5sYXllciBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIGV2ZW50LnJlc3VsdHNbMF0ucmVzdWx0cy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChyLmZlYXR1cmUuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGF5ZXIubGF5ZXJJZCA9PT0gNCkge1xuICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IGxheWVyLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdBRERSRVNTRVNfQ09ORE8nO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgJiYgb2lkcykge1xuICAgICAgICAgICAgbGF5ZXJcbiAgICAgICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcC5pZCwgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5sYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZShmZWF0dXJlLCB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LCBbXSwgb2lkcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogdGhpcy5jb25kb3NUYWJsZS5maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBbZmVhdHVyZV0sXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29uZG9zVGFibGUucXVlcnlGZWF0dXJlcyh7IG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKHJlc3VsdC5mZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgICAgICAgICBmaWVsZHM6IHRoaXMuY29uZG9zVGFibGUuZmllbGRzLFxuICAgICAgICAgICAgICBzb3VyY2U6IHJlc3VsdC5mZWF0dXJlcyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgICAgICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc2V0RmVhdHVyZShmZWF0dXJlOiBlc3JpLkdyYXBoaWMsIHZpZXc6IGVzcmkuTWFwVmlldywgbWVkaWFJbmZvczogYW55W10sIG9pZHM6IGFueVtdKSB7XG4gICAgY29uc29sZS5sb2coJ3NldHRpbmcgZmVhdHVyZScpO1xuICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuY29uZG9zVGFibGUucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0NPTkRPX1BIT1RPUyc7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVsYXRpb25zaGlwKTtcbiAgICBtZWRpYUluZm9zID0gW107XG4gICAgdGhpcy5jb25kb3NUYWJsZVxuICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICBtZWRpYUluZm9zLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICAgIGNhcHRpb246ICcnLFxuICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHNvdXJjZVVSTDpcbiAgICAgICAgICAgICAgICAgICdodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vcmVhbGVzdGF0ZS9waG90b3MvbXZpZGVvLycgK1xuICAgICAgICAgICAgICAgICAgZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ0lNQUdFRElSJykgK1xuICAgICAgICAgICAgICAgICAgJy8nICtcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdJTUFHRU5BTUUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmRvc1RhYmxlLnBvcHVwVGVtcGxhdGUuY29udGVudFsxXS5tZWRpYUluZm9zID0gbWVkaWFJbmZvcztcbiAgICAgICAgZmVhdHVyZS5sYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgIGZlYXR1cmUucG9wdXBUZW1wbGF0ZSA9IChmZWF0dXJlLmxheWVyIGFzIGVzcmkuRmVhdHVyZUxheWVyKS5wb3B1cFRlbXBsYXRlO1xuICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYyA9IGZlYXR1cmU7XG4gICAgICAgIGNvbnNvbGUubG9nKGZlYXR1cmUpO1xuICAgICAgfSk7XG4gIH1cblxuICBleHBvcnRUYWJsZSgpIHtcbiAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllci5xdWVyeUZlYXR1cmVzKHsgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBsZXQgY3N2ID0gJyc7XG4gICAgICByZXN1bHQuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICBjc3YgKz0gZmllbGQuYWxpYXMgKyAnLCc7XG4gICAgICB9KTtcbiAgICAgIGNzdiArPSAnXFxyXFxuJztcbiAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmZWF0dXJlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBpZiAoa2V5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2RhdGUnKSkge1xuICAgICAgICAgICAgY3N2ICs9ICdcIicgKyBuZXcgRGF0ZShmZWF0dXJlLmF0dHJpYnV0ZXNba2V5XSkudG9EYXRlU3RyaW5nKCkgKyAnXCIsJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdhY3JlcycpKSB7XG4gICAgICAgICAgICBjc3YgKz0gJ1wiJyArIHBhcnNlRmxvYXQoZmVhdHVyZS5hdHRyaWJ1dGVzW2tleV0pLnRvRml4ZWQoMikgKyAnXCIsJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3N2ICs9ICdcIicgKyBmZWF0dXJlLmF0dHJpYnV0ZXNba2V5XSArICdcIiwnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjc3YgKz0gJ1xcclxcbic7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGV4cG9ydGVkRmlsZW5tYWUgPSAnaW1hcHNfZXhwb3J0LmNzdic7XG5cbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY3N2XSwgeyB0eXBlOiAndGV4dC9jc3Y7Y2hhcnNldD11dGYtODsnIH0pO1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGlmIChsaW5rLmRvd25sb2FkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gZmVhdHVyZSBkZXRlY3Rpb25cbiAgICAgICAgLy8gQnJvd3NlcnMgdGhhdCBzdXBwb3J0IEhUTUw1IGRvd25sb2FkIGF0dHJpYnV0ZVxuICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGV4cG9ydGVkRmlsZW5tYWUpO1xuICAgICAgICBsaW5rLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdFNlYXJjaChjb25kb3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXIpIHtcbiAgICBjb25zdCB0YWJsZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAgeyBuYW1lOiAnU0lURV9BRERSRVNTJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnQWRkcmVzcycgfSxcbiAgICAgICAgeyBuYW1lOiAnT1dORVInLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdPd25lcicgfSxcbiAgICAgICAgeyBuYW1lOiAnUElOX05VTScsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ1BJTicgfSxcbiAgICAgICAgeyBuYW1lOiAnUkVJRCcsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ1JFSUQnIH1cbiAgICAgIF0sXG4gICAgICBzb3VyY2U6IFtdLFxuICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCdcbiAgICB9KTtcbiAgICB0aGlzLmZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7IHZpZXc6IHRoaXMudmlldyB9KTtcbiAgICB0aGlzLmZlYXR1cmVUYWJsZSA9IG5ldyBGZWF0dXJlVGFibGUoe1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgbGF5ZXI6IHRhYmxlTGF5ZXIsXG4gICAgICBmaWVsZENvbmZpZ3M6IFtcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnU0lURV9BRERSRVNTJyxcbiAgICAgICAgICBsYWJlbDogJ0FkZHJlc3MnLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnT1dORVInLFxuICAgICAgICAgIGxhYmVsOiAnT3duZXInLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnUElOX05VTScsXG4gICAgICAgICAgbGFiZWw6ICdQSU4nLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnUkVJRCcsXG4gICAgICAgICAgbGFiZWw6ICdSRUlEJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICBtZW51Q29uZmlnOiB7XG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgKHtcbiAgICAgICAgICAgIGxhYmVsOiAnRXhwb3J0J1xuICAgICAgICAgIH0gYXMgdW5rbm93bikgYXMgTWVudUJ1dHRvbkl0ZW1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGJ1dHRvbjogTWVudUJ1dHRvbkl0ZW0gPSB0aGlzLmZlYXR1cmVUYWJsZT8ubWVudUNvbmZpZz8uaXRlbXM/LmZpbmQoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5sYWJlbCA9PT0gJ0V4cG9ydCc7XG4gICAgfSkgYXMgTWVudUJ1dHRvbkl0ZW07XG4gICAgYnV0dG9uLmNsaWNrRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICB0aGlzLmV4cG9ydFRhYmxlKCk7XG4gICAgfTtcbiAgICBidXR0b24uY2xpY2tGdW5jdGlvbi5iaW5kKHRoaXMuZmVhdHVyZVRhYmxlKTtcblxuICAgIHRoaXMuZmVhdHVyZVRhYmxlLm9uKCdzZWxlY3Rpb24tY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmFkZGVkLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmdldFByb3BlcnR5KFtldmVudC5hZGRlZFswXS5mZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKV0pO1xuICAgICAgICB0aGlzLnNldEZlYXR1cmUoXG4gICAgICAgICAgZXZlbnQuYWRkZWRbMF0uZmVhdHVyZSxcbiAgICAgICAgICB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LFxuICAgICAgICAgIFtdLFxuICAgICAgICAgIFtldmVudC5hZGRlZFswXS5mZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKV1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICB9XG4gICAgICAodGhpcy5mZWF0dXJlVGFibGUgYXMgYW55KS5jbGVhclNlbGVjdGlvbigpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VhcmNoV2lkZ2V0ID0gbmV3IFNlYXJjaCh7XG4gICAgICBhbGxQbGFjZWhvbGRlcjogJ1NpdGUgQWRkcmVzcycsXG4gICAgICBpbmNsdWRlRGVmYXVsdFNvdXJjZXM6IGZhbHNlLFxuICAgICAgY29udGFpbmVyOiAnc2VhcmNoJyxcbiAgICAgIHNvdXJjZXM6IFtcbiAgICAgICAgbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBsYXllcjogdGhpcy5hZGRyZXNzVGFibGUsXG4gICAgICAgICAgc2VhcmNoRmllbGRzOiBbJ0FERFJFU1MnXSxcbiAgICAgICAgICBkaXNwbGF5RmllbGQ6ICdBRERSRVNTJyxcbiAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnQUREUkVTUycsICdSRUFfUkVJRCddLFxuICAgICAgICAgIG5hbWU6ICdTaXRlIEFkZHJlc3MnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMjIyIFcgSEFSR0VUVCdcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgbGF5ZXI6IGNvbmRvc1RhYmxlLFxuICAgICAgICAgIHNlYXJjaEZpZWxkczogWydPV05FUiddLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ09XTkVSJyxcbiAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnT1dORVInLCAnUkVJRCcsICdPQkpFQ1RJRCddLFxuICAgICAgICAgIG5hbWU6ICdPd25lcicsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiBTTUlUSCwgSk9ITidcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgbGF5ZXI6IGNvbmRvc1RhYmxlLFxuICAgICAgICAgIHNlYXJjaEZpZWxkczogWydQSU5fTlVNJ10sXG4gICAgICAgICAgZGlzcGxheUZpZWxkOiAnUElOX05VTScsXG4gICAgICAgICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgICAgb3V0RmllbGRzOiBbJ1BJTl9OVU0nLCAnUkVJRCcsICdPQkpFQ1RJRCddLFxuICAgICAgICAgIG5hbWU6ICdQSU4nLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMDcxMjM0NTY3OCdcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgbGF5ZXI6IGNvbmRvc1RhYmxlLFxuICAgICAgICAgIHNlYXJjaEZpZWxkczogWydSRUlEJ10sXG4gICAgICAgICAgZGlzcGxheUZpZWxkOiAnUkVJRCcsXG4gICAgICAgICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgICAgb3V0RmllbGRzOiBbJ1JFSUQnLCAnT0JKRUNUSUQnXSxcbiAgICAgICAgICBuYW1lOiAnUkVJRCcsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiAwMTIzNDU2J1xuICAgICAgICB9KVxuICAgICAgXVxuICAgIH0pO1xuICAgIHRoaXMuc2VhcmNoV2lkZ2V0LnZpZXdNb2RlbC53YXRjaCgncmVzdWx0cycsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldC5vbignc2VhcmNoLWNvbXBsZXRlJywgdGhpcy5zZWFyY2hDb21wbGV0ZSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKChyZXN1bHQgYXMgYW55KS50YXJnZXQuc2VsZWN0ZWRTdWdnZXN0aW9uKTtcbiAgfVxuICB0b2dnbGVDb250ZW50ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgPT09ICd0YWJsZScpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZUl0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZUl0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IFByb3BlcnR5U2VhcmNoVmlld01vZGVsIGZyb20gJy4vUHJvcGVydHlTZWFyY2gvUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwnO1xuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eVNlYXJjaFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIHByb3BlcnR5TGF5ZXI/OiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgY29uZG9zVGFibGU/OiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgYWRkcmVzc1RhYmxlPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IHByb3BlcnR5c2VhcmNoLWJhc2UnXG59O1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Qcm9wZXJ0eVNlYXJjaCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eVNlYXJjaCBleHRlbmRzIGRlY2xhcmVkKFdpZGdldCkge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5jb25kb3NUYWJsZScpXG4gIGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5hZGRyZXNzVGFibGUnKVxuICBhZGRyZXNzVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLnByb3BlcnR5TGF5ZXInKVxuICBwcm9wZXJ0eUxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5zZWFyY2hXaWRnZXQnKVxuICBzZWFyY2hXaWRnZXQ6IGVzcmkud2lkZ2V0c1NlYXJjaDtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5mZWF0dXJlVGFibGUnKVxuICBmZWF0dXJlVGFibGU6IGVzcmkuRmVhdHVyZVRhYmxlO1xuICBAYWxpYXNPZigndmlld01vZGVsLmZlYXR1cmUnKVxuICBmZWF0dXJlOiBlc3JpLkZlYXR1cmU7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZ2VvbWV0cnknKVxuICBnZW9tZXRyeTogZXNyaS5HZW9tZXRyeTtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5uYW1lJylcbiAgQHJlbmRlcmFibGUoKVxuICBuYW1lID0gJyc7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgPSBuZXcgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogUHJvcGVydHlTZWFyY2hQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfY3JlYXRlU2VhcmNoID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNlYXJjaFdpZGdldCkge1xuICAgICAgdGhpcy5zZWFyY2hXaWRnZXQuY29udGFpbmVyID0gJ3NlYXJjaCc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlVGFibGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZVRhYmxlKSB7XG4gICAgICB0aGlzLmZlYXR1cmVUYWJsZS5jb250YWluZXIgPSAndGFibGUnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZUZlYXR1cmUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZSkge1xuICAgICAgdGhpcy5mZWF0dXJlLmNvbnRhaW5lciA9ICdmZWF0dXJlRGl2JztcbiAgICB9XG4gIH07XG5cbiAgY3VycmVudFJhZGlvQnV0dG9uID0gJ2xpc3QnO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaWRlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUmFkaW9Hcm91cEl0ZW1DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgIC8vIGNhbiBJIGdldCBjaGVja2VkIGFuZCB2YWx1ZSBsaWtlIHRoaXM/XG4gICAgICAgIGlmIChlLnRhcmdldD8uY2hlY2tlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgICAgdGhpcy52aWV3TW9kZWwudG9nZ2xlQ29udGVudChlLnRhcmdldD8udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZVNlYXJjaH0gaWQ9XCJzZWFyY2hcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlVGFibGV9IGlkPVwidGFibGVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImZlYXR1cmVcIiBjbGFzcz1cImhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJmZWF0dXJlRGl2XCIgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUZlYXR1cmV9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdmFsdWU9XCJ0YWJsZVwiIGlkPVwidGFibGVJdGVtXCI+XG4gICAgICAgICAgICBMaXN0XG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB2YWx1ZT1cImZlYXR1cmVcIiBpZD1cImZlYXR1cmVJdGVtXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICBEZXRhaWxzXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBNZWFzdXJlbWVudCBmcm9tICdlc3JpL3dpZGdldHMvTWVhc3VyZW1lbnQnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLk1lYXN1cmUuTWVhc3VyZVZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWFzdXJlVmlld01vZGVsIGV4dGVuZHMgZGVjbGFyZWQoQWNjZXNzb3IpIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cbiAgbWVhc3VyZW1lbnQ6IGVzcmkuTWVhc3VyZW1lbnQ7XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxuICBtZWFzdXJlT3BlbmVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZWFzdXJlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAnKSBhcyBhbnkpLnNlbGVjdGVkSXRlbS50aXRsZTtcbiAgICBpZiAoc2VsZWN0ZWQgIT0gJ2NsZWFyJykge1xuICAgICAgdGhpcy5tZWFzdXJlbWVudC5hY3RpdmVUb29sID0gc2VsZWN0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICB9XG4gIH1cbiAgaW5pdE1lYXN1cmUoKSB7XG4gICAgdGhpcy5tZWFzdXJlbWVudCA9IG5ldyBNZWFzdXJlbWVudCh7IHZpZXc6IHRoaXMudmlldywgY29udGFpbmVyOiAnbWVhc3VyZVdpZGdldCcgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBNZWFzdXJlVmlld01vZGVsIGZyb20gJy4vTWVhc3VyZS9NZWFzdXJlVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBNZWFzdXJlUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbWVhc3VyZS1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5NZWFzdXJlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmUgZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubWVhc3VyZW1lbnQnKVxuICBtZWFzdXJlbWVudDogZXNyaS5NZWFzdXJlbWVudDtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5pbml0TWVhc3VyZScpXG4gIGluaXRNZWFzdXJlOiBGdW5jdGlvbjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5tZWFzdXJlT3BlbmVkJylcbiAgbWVhc3VyZU9wZW5lZDogRnVuY3Rpb247XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubmFtZScpXG4gIEByZW5kZXJhYmxlKClcbiAgbmFtZSA9ICcnO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTWVhc3VyZVZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogTWVhc3VyZVZpZXdNb2RlbCA9IG5ldyBNZWFzdXJlVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IE1lYXN1cmVQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfbWVhc3VyZUNyZWF0ZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5pbml0TWVhc3VyZSgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZWFzdXJlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUmFkaW9Hcm91cEl0ZW1DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldD8uY2hlY2tlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Py50aXRsZSk7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0Py50aXRsZSA9PT0gJ2NsZWFyJykge1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lYXN1cmVtZW50LmFjdGl2ZVRvb2wgPSBlLnRhcmdldD8udGl0bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdGl0bGU9XCJkaXN0YW5jZVwiIHZhbHVlPVwiZGlzdGFuY2VcIiBpZD1cInRhYmxlSXRlbVwiIGljb249XCJtZWFzdXJlXCI+XG4gICAgICAgICAgICBMaW5lXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB0aXRsZT1cImFyZWFcIiB2YWx1ZT1cImFyZWFcIiBpZD1cImZlYXR1cmVJdGVtXCIgaWNvbj1cIm1lYXN1cmUtYXJlYVwiPlxuICAgICAgICAgICAgQXJlYVxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdGl0bGU9XCJjbGVhclwiIHZhbHVlPVwiY2xlYXJcIiBpZD1cImZlYXR1cmVJdGVtXCIgaWNvbj1cInRyYXNoXCI+XG4gICAgICAgICAgICBDbGVhclxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXA+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX21lYXN1cmVDcmVhdGVkfSBpZD1cIm1lYXN1cmVXaWRnZXRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCBQb3B1cFRlbXBsYXRlIGZyb20gJ2VzcmkvUG9wdXBUZW1wbGF0ZSc7XG5pbXBvcnQgRXhwcmVzc2lvbkluZm8gZnJvbSAnZXNyaS9wb3B1cC9FeHByZXNzaW9uSW5mbyc7XG5cbmNvbnN0IGFyY2FkZUV4cHJlc3Npb25JbmZvcyA9IFtcbiAge1xuICAgIG5hbWU6ICdib20tZG9jLW51bScsXG4gICAgdGl0bGU6ICdib20tZG9jLW51bScsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgIFwidmFyIHJlc3VsdHMgPSBGZWF0dXJlU2V0QnlSZWxhdGlvbnNoaXBOYW1lKCRmZWF0dXJlLCAnQ09ORE9fQk9PS1MnLCBbJyonXSwgZmFsc2UpOyByZXR1cm4gRmlyc3QocmVzdWx0cykuQk9NX0RPQ19OVU07XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdkZWVkLWRvYy1udW0nLFxuICAgIHRpdGxlOiAnZGVlZC1kb2MtbnVtJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgXCJ2YXIgcmVzdWx0cyA9IEZlYXR1cmVTZXRCeVJlbGF0aW9uc2hpcE5hbWUoJGZlYXR1cmUsICdDT05ET19CT09LUycsIFsnKiddLCBmYWxzZSk7IHJldHVybiBGaXJzdChyZXN1bHRzKS5ERUVEX0RPQ19OVU07XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdtYWlsaW5nLWFkZHJlc3MnLFxuICAgIHRpdGxlOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1doZW4oSXNFbXB0eSgkZmVhdHVyZS5BRERSMyksJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIsJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjMpJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ3Byb3BlcnR5LXZhbHVlcycsXG4gICAgdGl0bGU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgIGV4cHJlc3Npb246XG4gICAgICAnXCJCdWlsZGluZyBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuQkxER19WQUwrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkxhbmQgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkxBTkRfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3RhbCBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuVE9UQUxfVkFMVUVfQVNTRCdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdkZWVkLWJvb2stcGFnZScsXG4gICAgdGl0bGU6ICdkZWVkLWJvb2stcGFnZScsXG4gICAgZXhwcmVzc2lvbjogJ1wiQm9vayBcIiskZmVhdHVyZS5ERUVEX0JPT0srXCIgUGFnZSBcIiskZmVhdHVyZS5ERUVEX1BBR0UnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZ2VuZXJhbCcsXG4gICAgdGl0bGU6ICdnZW5lcmFsJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1wiUElOXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5QSU5fTlVNK1wiIFwiKyRmZWF0dXJlLlBJTl9FWFQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICdcIlJFSURcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKyRmZWF0dXJlLlJFSUQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkNpdHlcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgJ1Byb3BlcigkZmVhdHVyZS5DSVRZX0RFQ09ERSkrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkp1cmlzZGljdGlvblwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAnJGZlYXR1cmUuUExBTk5JTkdfSlVSSVNESUNUSU9OK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3duc2hpcFwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrUHJvcGVyKCRmZWF0dXJlLlRPV05TSElQX0RFQ09ERSknXG4gIH1cbl0gYXMgRXhwcmVzc2lvbkluZm9bXTtcblxuY29uc3QgcG9wdXBUZW1wbGF0ZSA9IG5ldyBQb3B1cFRlbXBsYXRlKHtcbiAgZXhwcmVzc2lvbkluZm9zOiBhcmNhZGVFeHByZXNzaW9uSW5mb3MsXG4gIC8vIGNvbnRlbnQ6IChldmVudDogYW55KSA9PiB7XG4gIC8vICAgY29uc3QgZ3JhcGhpYyA9IGV2ZW50LmdyYXBoaWM7XG4gIC8vICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RleHQtZ3JlZW4nKTtcbiAgLy8gICBjb250YWluZXIuYXBwZW5kKGRpdik7XG4gIC8vICAgZGl2LnRleHRDb250ZW50ID0gZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ1NJVEVfQUREUkVTUycpO1xuICAvLyAgIHJldHVybiBjb250YWluZXI7XG4gIC8vIH0sXG4gIGNvbnRlbnQ6IFtcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OlxuICAgICAgICAnPGgxIGNsYXNzPVwidGV4dC1ncmVlblwiPntTSVRFX0FERFJFU1N9PC9oMT4nICtcbiAgICAgICAgJzxoMj5HZW5lcmFsPC9oMj57ZXhwcmVzc2lvbi9nZW5lcmFsfScgK1xuICAgICAgICAnPGgyPk93bmVyPC9oMj57T1dORVJ9PGJyLz57ZXhwcmVzc2lvbi9tYWlsaW5nLWFkZHJlc3N9JyArXG4gICAgICAgICc8aDI+VmFsdWF0aW9uPC9oMj57ZXhwcmVzc2lvbi9wcm9wZXJ0eS12YWx1ZXN9JyArXG4gICAgICAgICc8aDI+U2FsZSBJbmZvcm1hdGlvbjwvaDI+e1RPVFNBTFBSSUNFfTxici8+e1NBTEVfREFURX0nICtcbiAgICAgICAgJzxoMj5EZWVkczwvaDI+e2V4cHJlc3Npb24vZGVlZC1ib29rLXBhZ2V9JyArXG4gICAgICAgICc8YnIvPjxzdHJvbmc+RGVlZCBEYXRlPC9zdHJvbmc+PGJyLz57REVFRF9EQVRFfTxici8+JyArXG4gICAgICAgICc8YnIvPkxlZ2FsIERlc2NyaXB0aW9uPGJyLz57UFJPUERFU0N9PGJyLz4nICtcbiAgICAgICAgJzxhIGhyZWY9XCJodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPXtleHByZXNzaW9uL2JvbS1kb2MtbnVtfSZSZWNvcmREYXRlPVwiIHRhcmdldD1cIl9ibGFua1wiPkJvb2sgb2YgTWFwczwvYT48YnIvPjxhIGhyZWY9XCJodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPXtleHByZXNzaW9uL2RlZWQtZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EZWVkPC9hPidcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtZWRpYScsXG4gICAgICBtZWRpYUluZm9zOiBbXVxuICAgIH1cbiAgXVxufSk7XG5cbmV4cG9ydCBjb25zdCBmZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnMDgwNTBiZjA2N2JiNGIyMGFkZWE0YjBiNGYwYTM5ZTMnXG4gIH0sXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgY29uZG9zVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnMDgwNTBiZjA2N2JiNGIyMGFkZWE0YjBiNGYwYTM5ZTMnXG4gIH0sXG4gIGxheWVySWQ6IDEsXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH0sXG4gIHBvcHVwVGVtcGxhdGU6IHBvcHVwVGVtcGxhdGVcbn0pO1xuY29uZG9zVGFibGUubG9hZCgpO1xuZXhwb3J0IGNvbnN0IGFkZHJlc3NUYWJsZSA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICBwb3J0YWxJdGVtOiB7XG4gICAgaWQ6ICcwODA1MGJmMDY3YmI0YjIwYWRlYTRiMGI0ZjBhMzllMydcbiAgfSxcbiAgbGF5ZXJJZDogNCxcbiAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfVxufSk7XG5hZGRyZXNzVGFibGUubG9hZCgpO1xuZXhwb3J0ICogZnJvbSAnLi9hcHAnO1xuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbmltcG9ydCBTa2V0Y2ggZnJvbSAnZXNyaS93aWRnZXRzL1NrZXRjaCc7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJztcbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XG5pbXBvcnQgVGV4dFN5bWJvbCBmcm9tICdlc3JpL3N5bWJvbHMvVGV4dFN5bWJvbCc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuRHJhdy5EcmF3Vmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdWaWV3TW9kZWwgZXh0ZW5kcyBkZWNsYXJlZChBY2Nlc3Nvcikge1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQHByb3BlcnR5KCkgY29udGFpbmVyOiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIG5hbWUgPSAnU2xhZ2F0aG9yJztcbiAgc2tldGNoOiBTa2V0Y2g7XG4gIGdyYXBoaWNzOiBHcmFwaGljc0xheWVyO1xuICBsYWJlbDogc3RyaW5nO1xuICB0ZXh0Q29sb3I6IGVzcmkuQ29sb3I7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG4gIGluaXREcmF3KCkge1xuICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiAnaGlkZScgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljcyk7XG5cbiAgICAvLyB0aGlzLnZpZXcud2hlbkxheWVyVmlldyh0aGlzLmdyYXBoaWNzKS50aGVuKCgpID0+IHtcbiAgICAvLyAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzX2RyYXcnKSkge1xuICAgIC8vXG4gICAgLy8gICAgIHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MuYWRkTWFueShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hcHNfZHJhdycpIGFzIHN0cmluZykpO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgdGhpcy5za2V0Y2ggPSBuZXcgU2tldGNoKHsgdmlldzogdGhpcy52aWV3LCBjb250YWluZXI6ICdza2V0Y2hEaXYnLCBsYXllcjogdGhpcy5ncmFwaGljcyB9KTtcbiAgICB0aGlzLnNrZXRjaC5vbignY3JlYXRlJywgZSA9PiB7XG4gICAgICBpZiAoZS5zdGF0ZSA9PT0gJ2NvbXBsZXRlJyAmJiB0aGlzLmxhYmVsPy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGxhYmVsUG9pbnQ6IGVzcmkuR2VvbWV0cnkgPSBlLmdyYXBoaWMuZ2VvbWV0cnk7XG4gICAgICAgIGlmIChlLmdyYXBoaWMuZ2VvbWV0cnkudHlwZSA9PT0gJ3BvbHlnb24nKSB7XG4gICAgICAgICAgbGFiZWxQb2ludCA9IChlLmdyYXBoaWMuZ2VvbWV0cnkgYXMgZXNyaS5Qb2x5Z29uKS5jZW50cm9pZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnID0gbmV3IEdyYXBoaWMoe1xuICAgICAgICAgIGdlb21ldHJ5OiBsYWJlbFBvaW50LFxuICAgICAgICAgIHN5bWJvbDogbmV3IFRleHRTeW1ib2woe1xuICAgICAgICAgICAgdGV4dDogdGhpcy5sYWJlbCxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnRleHRDb2xvcixcbiAgICAgICAgICAgIGhhbG9Db2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIGhhbG9TaXplOiAxLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6ICd0b3AnLFxuICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogJ3JpZ2h0J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmFkZChnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5pbXBvcnQgRHJhd1ZpZXdNb2RlbCBmcm9tICcuL0RyYXcvRHJhd1ZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd1Byb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGRyYXctYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuRHJhdycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3IGV4dGVuZHMgZGVjbGFyZWQoV2lkZ2V0KSB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxhYmVsJylcbiAgbGFiZWw6IHN0cmluZztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC50ZXh0Q29sb3InKVxuICB0ZXh0Q29sb3I6IENvbG9yO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IERyYXdWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IERyYXdWaWV3TW9kZWwgPSBuZXcgRHJhd1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBEcmF3UHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX2RyYXdVcGRhdGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy52aWV3TW9kZWwuc2tldGNoKSB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5pbml0RHJhdygpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxsJyk7XG4gICAgZmlsbD8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgfSk7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaW5lJyk7XG4gICAgbGluZT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWxpbmVTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9wYWNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BhY2l0eScpO1xuICAgIG9wYWNpdHk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVJbnB1dEJsdXInLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5ncmFwaGljcy5vcGFjaXR5ID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG4gICAgY29uc3Qgd2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lkdGgnKTtcbiAgICB3aWR0aD8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUlucHV0Qmx1cicsIChlOiBhbnkpID0+IHtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlsaW5lU3ltYm9sIGFzIGVzcmkuU2ltcGxlTGluZVN5bWJvbCkud2lkdGggPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sIGFzIGVzcmkuU2ltcGxlTWFya2VyU3ltYm9sKS5vdXRsaW5lLndpZHRoID0gcGFyc2VGbG9hdChcbiAgICAgICAgZS50YXJnZXQudmFsdWVcbiAgICAgICk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS53aWR0aCA9IHBhcnNlRmxvYXQoXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsJyk7XG4gICAgbGFiZWw/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVJbnB1dEJsdXInLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldCgnbGFiZWwnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG4gICAgY29uc3QgdGV4dENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRDb2xvcicpO1xuICAgIHRleHRDb2xvcj8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ3RleHRDb2xvcicsIENvbG9yLmZyb21IZXgoZS50YXJnZXQudmFsdWUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyVXBkYXRlPXt0aGlzLl9kcmF3VXBkYXRlZH0gaWQ9XCJza2V0Y2hEaXZcIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtYmxvY2sgaGVhZGluZz1cIlNldHRpbmdzXCIgb3BlbiBjb2xsYXBzaWJsZT5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJDb2xvclwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+RmlsbCBDb2xvcjwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICAgIDxjYWxjaXRlLWNvbG9yIGlkPVwiZmlsbFwiIGhpZGVDaGFubmVscyBoaWRlU2F2ZWQgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBzY2FsZT1cInNcIj48L2NhbGNpdGUtY29sb3I+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5MaW5lIENvbG9yPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtY29sb3IgaWQ9XCJsaW5lXCIgaGlkZUNoYW5uZWxzIGhpZGVTYXZlZCBhcHBlYXJhbmNlPVwibWluaW1hbFwiIHNjYWxlPVwic1wiPjwvY2FsY2l0ZS1jb2xvcj5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJPcGFjaXR5XCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5PcGFjaXR5PC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtaW5wdXQgc2NhbGU9XCJzXCIgaWQ9XCJvcGFjaXR5XCIgdHlwZT1cIm51bWJlclwiIG1heD1cIjFcIiBtaW49XCIwXCIgdmFsdWU9XCIxXCIgc3RlcD1cIjAuMVwiPjwvY2FsY2l0ZS1pbnB1dD5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJPdXRsaW5lXCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5XaWR0aDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICAgIDxjYWxjaXRlLWlucHV0IHNjYWxlPVwic1wiIGlkPVwid2lkdGhcIiB0eXBlPVwibnVtYmVyXCIgbWF4PVwiMTBcIiBtaW49XCIwXCIgdmFsdWU9XCIxXCIgc3RlcD1cIjAuNVwiPjwvY2FsY2l0ZS1pbnB1dD5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJMYWJlbGluZ1wiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+TGFiZWw8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1pbnB1dCBzY2FsZT1cInNcIiBpZD1cImxhYmVsXCIgdHlwZT1cInRleHRhcmVhXCI+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICAgICAgPGNhbGNpdGUtY29sb3IgaWQ9XCJ0ZXh0Q29sb3JcIiBoaWRlQ2hhbm5lbHMgaGlkZVNhdmVkIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgc2NhbGU9XCJzXCI+PC9jYWxjaXRlLWNvbG9yPlxuICAgICAgICAgIDwvY2FsY2l0ZS1ibG9jay1zZWN0aW9uPlxuICAgICAgICA8L2NhbGNpdGUtYmxvY2s+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgU2tldGNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gnO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5cbmltcG9ydCB7IGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuU2VsZWN0LlNlbGVjdFZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RWaWV3TW9kZWwgZXh0ZW5kcyBkZWNsYXJlZChBY2Nlc3Nvcikge1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQHByb3BlcnR5KCkgbGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG4gIHNrZXRjaDogZXNyaS5Ta2V0Y2g7XG4gIGJ1ZmZlckRpc3RhbmNlOiBudW1iZXI7XG4gIGdyYXBoaWNzOiBHcmFwaGljc0xheWVyO1xuXG4gIGluaXRTa2V0Y2goKSB7XG4gICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJyB9KTtcbiAgICB0aGlzLnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNzKTtcbiAgICB0aGlzLnNrZXRjaCA9IG5ldyBTa2V0Y2goe1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgY29udGFpbmVyOiAnc2VsZWN0V2lkZ2V0JyxcbiAgICAgIGxheWVyOiB0aGlzLmdyYXBoaWNzLFxuICAgICAgY3JlYXRpb25Nb2RlOiAnc2luZ2xlJ1xuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLm9uKCdjcmVhdGUnLCBldiA9PiB7XG4gICAgICBpZiAoZXYuc3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gICAgdGhpcy5zZXQoJ2J1ZmZlckRpc3RhbmNlJywgMCk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBTZWxlY3RWaWV3TW9kZWwgZnJvbSAnLi9TZWxlY3QvU2VsZWN0Vmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBsYXllcj86IGVzcmkuRmVhdHVyZUxheWVyO1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBzZWxlY3QtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuU2VsZWN0JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIGRlY2xhcmVkKFdpZGdldCkge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5sYXllcicpXG4gIGxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5za2V0Y2gnKVxuICBza2V0Y2g6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLmJ1ZmZlckRpc3RhbmNlJylcbiAgYnVmZmVyRGlzdGFuY2U6IG51bWJlcjtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBTZWxlY3RWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IFNlbGVjdFZpZXdNb2RlbCA9IG5ldyBTZWxlY3RWaWV3TW9kZWwoKTtcbiAgX3NrZXRjaENyZWF0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnZpZXdNb2RlbC5za2V0Y2gpIHtcbiAgICAgIHRoaXMudmlld01vZGVsLmluaXRTa2V0Y2goKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBTZWxlY3RQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXY6IGFueSkge1xuICAgIHRoaXMuc2V0KCdidWZmZXJEaXN0YW5jZScsIHBhcnNlSW50KGV2LnRhcmdldC52YWx1ZSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0RGl2IGNhbGNpdGUtaW5wdXQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUlucHV0Qmx1cicsIChldjogYW55KSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZShldik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyVXBkYXRlPXt0aGlzLl9za2V0Y2hDcmVhdGVkfSBpZD1cInNlbGVjdFdpZGdldFwiPjwvZGl2PlxuICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5CdWZmZXIgRGlzdGFuY2UgKGZlZXQpIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgPGNhbGNpdGUtaW5wdXRcbiAgICAgICAgICBzY2FsZT1cInNcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgIG1heD1cIjIwMDBcIlxuICAgICAgICAgIHN0ZXA9XCI1MFwiXG4gICAgICAgICAgdmFsdWU9e3RoaXMudmlld01vZGVsLmJ1ZmZlckRpc3RhbmNlfVxuICAgICAgICA+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gV2lkZ2V0c1xuaW1wb3J0IExheWVyTGlzdCBmcm9tICdlc3JpL3dpZGdldHMvTGF5ZXJMaXN0JztcbmltcG9ydCBMZWdlbmQgZnJvbSAnZXNyaS93aWRnZXRzL0xlZ2VuZCc7XG5pbXBvcnQgUHJpbnQgZnJvbSAnZXNyaS93aWRnZXRzL1ByaW50JztcbmltcG9ydCBCb29rbWFya3MgZnJvbSAnZXNyaS93aWRnZXRzL0Jvb2ttYXJrcyc7XG5pbXBvcnQgQmFzZW1hcEdhbGxlcnkgZnJvbSAnZXNyaS93aWRnZXRzL0Jhc2VtYXBHYWxsZXJ5Jztcbi8vaW1wb3J0IE1lYXN1cmVtZW50IGZyb20gJ2Vzcmkvd2lkZ2V0cy9NZWFzdXJlbWVudCc7XG5pbXBvcnQgUHJvcGVydHlTZWFyY2ggZnJvbSAnLi93aWRnZXRzL1Byb3BlcnR5U2VhcmNoJztcbmltcG9ydCBDb29yZGluYXRlQ29udmVyc2lvbiBmcm9tICdlc3JpL3dpZGdldHMvQ29vcmRpbmF0ZUNvbnZlcnNpb24nO1xuaW1wb3J0IEV4cGFuZCBmcm9tICdlc3JpL3dpZGdldHMvRXhwYW5kJztcbmltcG9ydCBNZWFzdXJlIGZyb20gJy4vd2lkZ2V0cy9NZWFzdXJlJztcbmltcG9ydCBDb21wYXNzIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Db21wYXNzJztcbmltcG9ydCBMb2NhdGUgZnJvbSAnZXNyaS93aWRnZXRzL0xvY2F0ZSc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnZXNyaS93aWRnZXRzL1RyYWNrJztcblxuaW1wb3J0IHsgY29uZG9zVGFibGUsIGFkZHJlc3NUYWJsZSwgZmVhdHVyZUxheWVyIH0gZnJvbSAnLi9kYXRhL3NlYXJjaCc7XG5pbXBvcnQgZXNyaSA9IF9fZXNyaTtcbmltcG9ydCBEcmF3IGZyb20gJy4vd2lkZ2V0cy9EcmF3JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi93aWRnZXRzL1NlbGVjdCc7XG5leHBvcnQgY29uc3QgbWVhc3VyZW1lbnQ6IE1lYXN1cmUgPSBuZXcgTWVhc3VyZSgpO1xuZXhwb3J0IGNvbnN0IHNlbGVjdDogU2VsZWN0ID0gbmV3IFNlbGVjdCgpO1xuZXhwb3J0IGxldCBsYXllckxpc3Q6IExheWVyTGlzdDtcbmV4cG9ydCBjb25zdCBwcm9wZXJ0eVNlYXJjaDogUHJvcGVydHlTZWFyY2ggPSBuZXcgUHJvcGVydHlTZWFyY2goKTtcbmV4cG9ydCBjb25zdCBkcmF3V2lkZ2V0OiBEcmF3ID0gbmV3IERyYXcoKTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0V2lkZ2V0cyh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICBuZXcgTGVnZW5kKHsgdmlldywgY29udGFpbmVyOiAnbGVnZW5kRGl2JyB9KTtcbiAgbGF5ZXJMaXN0ID0gbmV3IExheWVyTGlzdCh7XG4gICAgdmlldyxcbiAgICBjb250YWluZXI6ICdsYXllckRpdicsXG4gICAgbGlzdEl0ZW1DcmVhdGVkRnVuY3Rpb246IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBldmVudC5pdGVtO1xuICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSAhPSAnZ3JvdXAnKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtc2xpZGVyJyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21heCcsICcxMDAnKTtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWluLWxhYmVsJywgJzAlJyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21heC1sYWJlbCcsICcxMDAlJyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2xhYmVsLWhhbmRsZXMnLCAnJyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgKGl0ZW0/LmxheWVyLm9wYWNpdHkgKiAxMDApLnRvU3RyaW5nKCkpO1xuICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdkYXRhJywgaXRlbS5sYXllci5pZCk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlU2xpZGVyVXBkYXRlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHZpZXcubWFwLmZpbmRMYXllckJ5SWQoKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0QXR0cmlidXRlKCdkYXRhJykpLm9wYWNpdHkgPVxuICAgICAgICAgICAgcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKSkgLyAxMDA7XG4gICAgICAgIH0pO1xuICAgICAgICBpdGVtLnBhbmVsID0ge1xuICAgICAgICAgIGNvbnRlbnQ6IFtzbGlkZXIsICdsZWdlbmQnXSxcbiAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIG5ldyBQcmludCh7XG4gICAgdmlldyxcbiAgICBjb250YWluZXI6ICdwcmludERpdicsXG4gICAgcHJpbnRTZXJ2aWNlVXJsOlxuICAgICAgJ2h0dHBzOi8vdXRpbGl0eS5hcmNnaXNvbmxpbmUuY29tL2FyY2dpcy9yZXN0L3NlcnZpY2VzL1V0aWxpdGllcy9QcmludGluZ1Rvb2xzL0dQU2VydmVyL0V4cG9ydCUyMFdlYiUyME1hcCUyMFRhc2snXG4gIH0pO1xuICBuZXcgQm9va21hcmtzKHsgdmlldywgY29udGFpbmVyOiAnYm9va21hcmtEaXYnLCBlZGl0aW5nRW5hYmxlZDogdHJ1ZSB9KTtcblxuICBuZXcgQmFzZW1hcEdhbGxlcnkoeyB2aWV3LCBjb250YWluZXI6ICdiYXNlbWFwRGl2JyB9KTtcblxuICBjb25zdCBjb29yZGluYXRlczogZXNyaS5Db29yZGluYXRlQ29udmVyc2lvbiA9IG5ldyBDb29yZGluYXRlQ29udmVyc2lvbih7IHZpZXcgfSk7XG4gIGNvbnN0IGNvb3JkaW5hdGVzRXhwYW5kOiBFeHBhbmQgPSBuZXcgRXhwYW5kKHtcbiAgICBjb250ZW50OiBjb29yZGluYXRlcyxcbiAgICBtb2RlOiAnZmxvYXRpbmcnLFxuICAgIGV4cGFuZEljb25DbGFzczogJ2VzcmktaWNvbi1tYXAtcGluJ1xuICB9KTtcblxuICB2aWV3LnVpLmFkZChjb29yZGluYXRlc0V4cGFuZCwgJ2JvdHRvbS1sZWZ0Jyk7XG5cbiAgdmlldy51aS5hZGQobmV3IENvbXBhc3MoeyB2aWV3OiB2aWV3IH0pLCAndG9wLWxlZnQnKTtcbiAgY29uc3QgbG9jYXRlOiBMb2NhdGUgPSBuZXcgTG9jYXRlKHsgdmlldzogdmlldyB9KTtcbiAgbG9jYXRlLm9uKCdsb2NhdGUtZXJyb3InLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfSk7XG4gIHZpZXcudWkuYWRkKGxvY2F0ZSwgJ3RvcC1sZWZ0Jyk7XG5cbiAgY29uc3QgdHJhY2s6IFRyYWNrID0gbmV3IFRyYWNrKHsgdmlldzogdmlldyB9KTtcbiAgdHJhY2sub24oJ3RyYWNrLWVycm9yJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gIH0pO1xuICB2aWV3LnVpLmFkZCh0cmFjaywgJ3RvcC1sZWZ0Jyk7XG5cbiAgbWVhc3VyZW1lbnQudmlldyA9IHZpZXc7XG4gIG1lYXN1cmVtZW50LmNvbnRhaW5lciA9ICdtZWFzdXJlRGl2JztcbiAgZHJhd1dpZGdldC52aWV3ID0gdmlldztcbiAgZHJhd1dpZGdldC5jb250YWluZXIgPSAnZHJhd0Rpdic7XG4gIC8vdmlldy51aS5hZGQobWVhc3VyZW1lbnQsICd0b3AtcmlnaHQnKTtcblxuICAvLyBwcm9wZXJ0eVNlYXJjaCA9IG5ldyBQcm9wZXJ0eVNlYXJjaCh7XG4gIC8vICAgdmlldzogdmlldyxcbiAgLy8gICBjb25kb3NUYWJsZTogY29uZG9zVGFibGUsXG4gIC8vICAgYWRkcmVzc1RhYmxlOiBhZGRyZXNzVGFibGUsXG4gIC8vICAgcHJvcGVydHlMYXllcjogZmVhdHVyZUxheWVyLFxuICAvLyAgIGNvbnRhaW5lcjogJ3NpZGVEaXYnXG4gIC8vIH0pO1xuICBwcm9wZXJ0eVNlYXJjaC52aWV3ID0gdmlldztcbiAgcHJvcGVydHlTZWFyY2guY29uZG9zVGFibGUgPSBjb25kb3NUYWJsZTtcbiAgcHJvcGVydHlTZWFyY2guYWRkcmVzc1RhYmxlID0gYWRkcmVzc1RhYmxlO1xuICBwcm9wZXJ0eVNlYXJjaC5wcm9wZXJ0eUxheWVyID0gZmVhdHVyZUxheWVyO1xuICBwcm9wZXJ0eVNlYXJjaC5jb250YWluZXIgPSAnc2lkZURpdic7XG4gIC8vdmlldy51aS5hZGQobGVnZW5kLCAnYm90dG9tLWxlZnQnKTtcbiAgLy92aWV3LnVpLmFkZChsYXllckxpc3QsICd0b3AtcmlnaHQnKTtcbiAgc2VsZWN0LmNvbnRhaW5lciA9ICdzZWxlY3REaXYnO1xuICBzZWxlY3QudmlldyA9IHZpZXc7XG4gIHNlbGVjdC5sYXllciA9IGZlYXR1cmVMYXllcjtcbiAgcmV0dXJuIHZpZXc7XG59XG4iLCIvLyBzdHlsZXNcbmltcG9ydCAnLi9jc3MvbWFpbi5jc3MnO1xuXG4vLyBNYXAgZGF0YVxuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9kYXRhL2FwcCc7XG5pbXBvcnQgeyBpbml0VGlwcyB9IGZyb20gJy4vdGlwcyc7XG5pbXBvcnQgeyBzaG93QWxlcnQgfSBmcm9tICcuL2FsZXJ0Jztcbi8vIE1hcFZpZXdcbmltcG9ydCBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldyc7XG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSc7XG4vLyB3aWRnZXQgdXRpbHNcbmltcG9ydCB7IGluaXRXaWRnZXRzLCBtZWFzdXJlbWVudCwgc2VsZWN0LCBwcm9wZXJ0eVNlYXJjaCwgbGF5ZXJMaXN0IH0gZnJvbSAnLi93aWRnZXRzJztcbmltcG9ydCBMZWdlbmQgZnJvbSAnLi9fX21vY2tzX18vZXNyaS93aWRnZXRzL0xlZ2VuZCc7XG4vKipcbiAqIEluaXRpYWxpemUgYXBwbGljYXRpb25cbiAqL1xuY29uc3QgdmlldyA9IG5ldyBNYXBWaWV3KHtcbiAgY29udGFpbmVyOiAndmlld0RpdicsXG4gIG1hcFxufSk7XG5cbmNvbnN0IHRvZ2dsZUFjdGlvbiA9IChhY3Rpb246IHN0cmluZykgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWwnKS5mb3JFYWNoKChwYW5lbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAocGFuZWwudGl0bGUgIT0gYWN0aW9uKSB7XG4gICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFuZWwucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgIGlmICh3aW5kb3cub3V0ZXJXaWR0aCA8IDUwMCkge1xuICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiAzNTBweCcpO1xuICAgICAgfVxuICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBpZiAocGFuZWwudGl0bGUgIT0gJ01lYXN1cmUnKSB7XG4gICAgICAgIC8vbWVhc3VyZW1lbnQubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lYXN1cmVtZW50Lm1lYXN1cmVPcGVuZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aW9uczogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1hY3Rpb24nKTtcbmFjdGlvbnM/LmZvckVhY2goKGFjdGlvbjogYW55KSA9PiB7XG4gIGFjdGlvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XG4gICAgdG9nZ2xlQWN0aW9uKGUudGFyZ2V0LnRleHQpO1xuICB9KTtcbn0pO1xuXG52aWV3LndoZW4oKCkgPT4ge1xuICB2aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgaWYgKGxheWVyLnR5cGUgIT0gJ2dyb3VwJykge1xuICAgICAgbGF5ZXIud2F0Y2goJ3Zpc2libGUnLCB2aXNpYmxlID0+IHtcbiAgICAgICAgbGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5sYXllci50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGl0ZW0uY2hpbGRyZW4uZmluZChpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGkubGF5ZXIgPT09IGxheWVyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgY2hpbGQucGFuZWwub3BlbiA9IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHByb3BlcnR5TGF5ZXIgPSBtYXAuYWxsTGF5ZXJzLmZpbmQobGF5ZXIgPT4ge1xuICAgIHJldHVybiBsYXllci50aXRsZSA9PT0gJ1Byb3BlcnR5JyAmJiBsYXllci50eXBlID09PSAnZmVhdHVyZSc7XG4gIH0pO1xuICB2aWV3Lm9uKCdob2xkJywgZSA9PiB7XG4gICAgcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBlLm1hcFBvaW50O1xuICB9KTtcbiAgdmlld1xuICAgIC53aGVuTGF5ZXJWaWV3KHByb3BlcnR5TGF5ZXIpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgcHJvcGVydHlTZWFyY2gucHJvcGVydHlMYXllciA9IHByb3BlcnR5TGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgICAgIHNlbGVjdC52aWV3TW9kZWwuc2tldGNoLm9uKCdjcmVhdGUnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXYuc3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICBpZiAoc2VsZWN0LnZpZXdNb2RlbD8uYnVmZmVyRGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ2VvbWV0cnlFbmdpbmUuZ2VvZGVzaWNCdWZmZXIoZXYuZ3JhcGhpYy5nZW9tZXRyeSwgc2VsZWN0LnZpZXdNb2RlbC5idWZmZXJEaXN0YW5jZSwgJ21ldGVycycpO1xuICAgICAgICAgICAgcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBnIGFzIF9fZXNyaS5Qb2x5Z29uO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGV2LmdyYXBoaWMuZ2VvbWV0cnk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvZ2dsZUFjdGlvbignU2VhcmNoJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIHNob3dBbGVydCgnUHJvcGVydHkgbGF5ZXIgZGlkIG5vdCBsb2FkLiBQbGVhc2UgY29udGFjdCBpTUFQUyBIZWxwIERlc2suJywgJ3JlZCcpO1xuICAgIH0pO1xufSk7XG5cbmlmICh3aW5kb3cub3V0ZXJXaWR0aCA+PSA1MDApIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1wYW5lbCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVBhbmVsRGlzbWlzc2VkQ2hhbmdlJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF4aW1pemUnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtYXhpbWl6ZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF4aW1pemUnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlYnVnZ2VyO1xuICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaWNvbicpID09PSAnbWF4aW1pemUnKSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtaW5pbWl6ZScpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCknKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdpY29uJykgPT09ICdtaW5pbWl6ZScpIHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpY29uJywgJ21heGltaXplJyk7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOjM1MHB4Jyk7XG4gICAgfVxuICB9KTtcbn0pO1xud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICBpZiAoKGV2ZW50Py50YXJnZXQgYXMgYW55KT8ub3V0ZXJXaWR0aCA+PSA1MDApIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5tYXhpbWl6ZScpPy5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21pbmltaXplJykge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMzUwcHgnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgc3JjKScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xudmlldy53aGVuKGluaXRXaWRnZXRzKTtcblxudmlldy53aGVuKGluaXRUaXBzKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gIC8vaXRlbT8uc2hhZG93Um9vdD8uaW5uZXJIVE1MLnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWNvbnRhaW5lcicpPy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2hlaWdodDogMTAwJScpO1xuICAvLyAoaXRlbS5zaGFkb3dSb290IGFzIGFueSkuaW5uZXJIVE1MICs9ICc8c3R5bGU+LmNvbnRlbnQtY29udGFpbmVyIHsgaGVpZ2h0OiAxMDAlOyB9IDwvc3R5bGU+Jztcbn0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xuICB2aWV3Lm1hcC5yZW1vdmVNYW55KFxuICAgIHZpZXcubWFwLmFsbExheWVyc1xuICAgICAgLmZpbHRlcihsYXllciA9PiB7XG4gICAgICAgIHJldHVybiBsYXllci50eXBlID09PSAnZ3JvdXAnICYmICEobGF5ZXIgYXMgX19lc3JpLkdyb3VwTGF5ZXIpLmxheWVycy5sZW5ndGg7XG4gICAgICB9KVxuICAgICAgLnRvQXJyYXkoKVxuICApO1xuICBjb25zdCBqc29uID0gKHZpZXcubWFwIGFzIGFueSkudG9KU09OKCk7XG4gIGpzb24uaW5pdGlhbFN0YXRlLnZpZXdwb2ludC50YXJnZXRHZW9tZXRyeSA9IHZpZXcuZXh0ZW50O1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ltYXBzJywgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ltYXBzX2NyZWF0ZWQnLCBKU09OLnN0cmluZ2lmeSgodmlldy5tYXAgYXMgX19lc3JpLldlYk1hcCkucG9ydGFsSXRlbS5tb2RpZmllZCkpO1xuICAvLyBpZiAoZHJhd1dpZGdldC52aWV3TW9kZWwuZ3JhcGhpY3MuZ3JhcGhpY3MubGVuZ3RoKSB7XG4gIC8vICAgZHJhd1dpZGdldC52aWV3TW9kZWwuZ3JhcGhpY3MuZ3JhcGhpY3MucmVtb3ZlTWFueShcbiAgLy8gICAgIGRyYXdXaWRnZXQudmlld01vZGVsLmdyYXBoaWNzLmdyYXBoaWNzLmZpbHRlcihncmFwaGljID0+IHtcbiAgLy8gICAgICAgcmV0dXJuICFncmFwaGljLmdlb21ldHJ5O1xuICAvLyAgICAgfSlcbiAgLy8gICApO1xuICAvLyAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hcHNfZHJhdycsIEpTT04uc3RyaW5naWZ5KChkcmF3V2lkZ2V0LnZpZXdNb2RlbC5ncmFwaGljcy5ncmFwaGljcyBhcyBhbnkpLnRvSlNPTigpKSk7XG4gIC8vIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsIGRpdicpLmZvckVhY2gocGFuZWwgPT4ge1xuICBpZiAocGFuZWwuc2xvdCA9PT0gJ2hlYWRlci10cmFpbGluZy1jb250ZW50Jykge1xuICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsnKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsid2hlbkRlZmluZWRPbmNlIiwid2hlbkRlZmluZWQiLCJwcm9wZXJ0eSIsInN1YmNsYXNzIiwiZGVjbGFyZWQiLCJ0c3giLCJhbGlhc09mIiwicmVuZGVyYWJsZSIsIkNTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBS08sSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztFQUM5QixHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsa0NBQWtDLEVBQUUsRUFBRSxDQUFDLENBQUM7RUFDN0UsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7TUFDekIsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtVQUN4QyxJQUFNLFNBQVMsR0FBVyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFXLENBQUMsQ0FBQyxDQUFDO1VBQ3RHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxTQUFTO2NBQzdCLFNBQVM7V0FDVixDQUFDLENBQUM7T0FDSjtFQUNILENBQUMsQ0FBQyxDQUFDOzs7RUNkSCxJQUFNLFNBQVMsR0FBRztNQUNoQjtVQUNFLEtBQUssRUFBRTtjQUNMLElBQUksRUFBRSxXQUFXO2NBQ2pCLEtBQUssRUFBRSxXQUFXO2NBQ2xCLElBQUksRUFBRTtrQkFDSjtzQkFDRSxPQUFPLEVB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
