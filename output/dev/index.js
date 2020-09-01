
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
  if (window.localStorage.getItem('imaps')) {
      map = WebMap.fromJSON(JSON.parse(window.localStorage.getItem('imaps')));
  }
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
          this.sketch = new Sketch({ view: this.view, container: 'sketchDiv', layer: this.graphics, creationMode: 'single' });
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
  }(decorators.declared(Accessor)));

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
          .catch(function (reason) {
          console.log(reason);
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
  document.querySelectorAll('calcite-panel div').forEach(function (panel) {
      if (panel.slot === 'header-trailing-content') {
          panel.setAttribute('style', 'display: flex; flex-direction: row;');
      }
  });
  //# sourceMappingURL=index.js.map

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FwcC50cyIsIi4uLy4uL3NyYy90aXBzLnRzIiwiLi4vLi4vc3JjL2FsZXJ0LnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvUHJvcGVydHlTZWFyY2gvUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaC50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9NZWFzdXJlL01lYXN1cmVWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9NZWFzdXJlLnRzeCIsIi4uLy4uL3NyYy9kYXRhL3NlYXJjaC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0RyYXcvRHJhd1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0RyYXcudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvU2VsZWN0L1NlbGVjdFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL1NlbGVjdC50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy50cyIsIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBUaWxlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvVGlsZUxheWVyJztcbi8vaW1wb3J0IFZlY3RvclRpbGVMYXllciBmcm9tICdlc3JpL2xheWVycy9WZWN0b3JUaWxlTGF5ZXInO1xuLy9pbXBvcnQgQXJjR0lTTWFwIGZyb20gJ2VzcmkvTWFwJztcbi8vaW1wb3J0IHsgZmVhdHVyZUxheWVyIH0gZnJvbSAnLi9zZWFyY2gnO1xuaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG5leHBvcnQgbGV0IG1hcCA9IG5ldyBXZWJNYXAoKTtcbm1hcCA9IG5ldyBXZWJNYXAoeyBwb3J0YWxJdGVtOiB7IGlkOiAnOTUwOTI0Mjg3NzRjNGIxZmI2YTNiNmY1ZmVkOWZiYzQnIH0gfSk7XG5pZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpKSB7XG4gIG1hcCA9IFdlYk1hcC5mcm9tSlNPTihKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hcHMnKSBhcyBzdHJpbmcpKTtcbn1cbi8vIGV4cG9ydCBjb25zdCBtYXAgPSBuZXcgQXJjR0lTTWFwKHtcbi8vICAgYmFzZW1hcDoge1xuLy8gICAgIGJhc2VMYXllcnM6IFtcbi8vICAgICAgIG5ldyBUaWxlTGF5ZXIoe1xuLy8gICAgICAgICBwb3J0YWxJdGVtOiB7XG4vLyAgICAgICAgICAgLy8gd29ybGQgaGlsbHNoYWRlXG4vLyAgICAgICAgICAgaWQ6ICcxYjI0MzUzOWY0NTE0YjZiYTM1ZTdkOTk1ODkwZGIxZCdcbi8vICAgICAgICAgfVxuLy8gICAgICAgfSksXG4vLyAgICAgICBuZXcgVmVjdG9yVGlsZUxheWVyKHtcbi8vICAgICAgICAgcG9ydGFsSXRlbToge1xuLy8gICAgICAgICAgIC8vIHRvcG9ncmFwaGljXG4vLyAgICAgICAgICAgaWQ6ICc3ZGM2Y2VhMGIxNzY0YTFmOWFmMmU2NzlmNjQyZjBmNSdcbi8vICAgICAgICAgfVxuLy8gICAgICAgfSlcbi8vICAgICBdXG4vLyAgIH0sXG4vLyAgIGxheWVyczogW2ZlYXR1cmVMYXllcl1cbi8vIH0pO1xuIiwiY29uc3QgdGlwR3JvdXBzID0gW1xuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdzZWxlY3RUaXAnLFxuICAgICAgdGl0bGU6ICdTZWxlY3Rpb24nLFxuICAgICAgdGlwczogW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIGRyYXcgYSBjb250aW51b3VzIGxpbmUgb3IgcG9seWdvbiwgbG9uZyBwcmVzcyBhbmQgZHJhZyB5b3VyIGN1cnNvcicsXG4gICAgICAgICAgdGl0bGU6ICdGcmVlaGFuZCBEcmF3aW5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIGRyYXcgYSBjb250aW51b3VzIGxpbmUgb3IgcG9seWdvbiwgbG9uZyBwcmVzcyBhbmQgZHJhZyB5b3VyIGN1cnNvcicsXG4gICAgICAgICAgdGl0bGU6ICdGcmVlaGFuZCBEcmF3aW5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdwcm9wZXJ0eVNlYXJjaFRpcCcsXG4gICAgICB0aXRsZTogJ1Byb3BlcnR5IFNlYXJjaCcsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ1RvIHNlYXJjaCBieSBhIHBvcnRpb24gb2YgYW4gb3duZXIgbmFtZSBvciBhZGRyZXNzLCBoaXQgZW50ZXIgd2l0aG91dCBzZWxlY3RpbmcgZm9ybSB0aGUgbGlzdCBvZiBzdWdnZXN0aW9ucy4nLFxuICAgICAgICAgIHRpdGxlOiAnV2lsZGNhcmQgU2VhcmNoJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG5dO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaXBzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlwJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS10aXAtbWFuYWdlcicpPy5yZW1vdmUoKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBjb25zdCBtYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAtbWFuYWdlcicpO1xuICAgICAgY29uc3QgdGlwR3JvdXAgPSB0aXBHcm91cHMuZmluZChncm91cCA9PiB7XG4gICAgICAgIHJldHVybiBncm91cC5wYW5lbC5uYW1lID09PSBpdGVtLmlkO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAtZ3JvdXAnKTtcbiAgICAgIGdyb3VwLnNldEF0dHJpYnV0ZSgndGV4dC1ncm91cC10aXRsZScsIHRpcEdyb3VwPy5wYW5lbC50aXRsZSk7XG4gICAgICBtYW5hZ2VyLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICAgIHRpcEdyb3VwPy5wYW5lbC50aXBzLmZvckVhY2godGlwID0+IHtcbiAgICAgICAgY29uc3QgY2FsY2l0ZVRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtdGlwJyk7XG4gICAgICAgIGNhbGNpdGVUaXAuc2V0QXR0cmlidXRlKCdoZWFkaW5nJywgdGlwLnRpdGxlKTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC5pbm5lckhUTUwgPSB0aXAubWVzc2FnZTtcbiAgICAgICAgY2FsY2l0ZVRpcC5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQoY2FsY2l0ZVRpcCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50Py5ib2R5Py5hcHBlbmRDaGlsZChtYW5hZ2VyKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2hvd0FsZXJ0KHRleHQ6IHN0cmluZywgY29sb3I6IHN0cmluZykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLWFsZXJ0Jyk/LnJlbW92ZSgpO1xuICBjb25zdCBhbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYWxlcnQnKTtcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZXNzYWdlLnNldEF0dHJpYnV0ZSgnc2xvdCcsICdhbGVydC1tZXNzYWdlJyk7XG4gIG1lc3NhZ2UuaW5uZXJIVE1MID0gdGV4dDtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdjb2xvcicsIGNvbG9yKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gIGFsZXJ0LnNldEF0dHJpYnV0ZSgnaWNvbicsICcnKTtcblxuICBhbGVydC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbGVydCk7XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoJztcbmltcG9ydCBGZWF0dXJlVGFibGUgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZSc7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZSc7XG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UsIHdoZW5EZWZpbmVkIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IExheWVyU2VhcmNoU291cmNlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gvTGF5ZXJTZWFyY2hTb3VyY2UnO1xuaW1wb3J0IEZpZWxkQ29sdW1uQ29uZmlnIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlVGFibGUvRmllbGRDb2x1bW5Db25maWcnO1xuaW1wb3J0IFBvcHVwVGVtcGxhdGUgZnJvbSAnZXNyaS9Qb3B1cFRlbXBsYXRlJztcbmltcG9ydCBFeHByZXNzaW9uSW5mbyBmcm9tICdlc3JpL3BvcHVwL0V4cHJlc3Npb25JbmZvJztcbmltcG9ydCBNZW51QnV0dG9uSXRlbSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZVRhYmxlL0dyaWQvc3VwcG9ydC9CdXR0b25NZW51SXRlbSc7XG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLlByb3BlcnR5U2VhcmNoLlByb3BlcnR5U2VhcmNoVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnR5U2VhcmNoVmlld01vZGVsIGV4dGVuZHMgZGVjbGFyZWQoQWNjZXNzb3IpIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQHByb3BlcnR5KCkgYWRkcmVzc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQHByb3BlcnR5KCkgcHJvcGVydHlMYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG5cbiAgQHByb3BlcnR5KCkgc2VhcmNoV2lkZ2V0OiBlc3JpLndpZGdldHNTZWFyY2g7XG4gIEBwcm9wZXJ0eSgpIGZlYXR1cmVUYWJsZTogZXNyaS5GZWF0dXJlVGFibGU7XG4gIEBwcm9wZXJ0eSgpIGZlYXR1cmU6IGVzcmkuRmVhdHVyZTtcbiAgQHByb3BlcnR5KCkgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG5cbiAgQHByb3BlcnR5KCkgbmFtZSA9ICdQcm9wZXJ0eSBTZWFyY2gnO1xuICBoaWdobGlnaHRzOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAnY29uZG9zVGFibGUnLCB0aGlzLmluaXRTZWFyY2guYmluZCh0aGlzKSk7XG4gICAgd2hlbkRlZmluZWQodGhpcywgJ2dlb21ldHJ5JywgdGhpcy5zZWFyY2hCeUdlb21ldHJ5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc2VhcmNoQnlHZW9tZXRyeShnZW9tZXRyeTogZXNyaS5HZW9tZXRyeSkge1xuICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgLnF1ZXJ5RmVhdHVyZXMoeyBnZW9tZXRyeTogZ2VvbWV0cnksIHJldHVybkdlb21ldHJ5OiB0cnVlLCBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnXSB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3QgbGF5ZXJWaWV3ID0gdGhpcy52aWV3LmxheWVyVmlld3MuZmluZCh2aWV3ID0+IHtcbiAgICAgICAgICByZXR1cm4gdmlldy5sYXllciA9PT0gdGhpcy5wcm9wZXJ0eUxheWVyO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxheWVyVmlldykge1xuICAgICAgICAgIGlmICh0aGlzLmhpZ2hsaWdodHMpIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0cy5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5oaWdobGlnaHRzID0gKGxheWVyVmlldyBhcyBlc3JpLkZlYXR1cmVMYXllclZpZXcpLmhpZ2hsaWdodChyZXN1bHQuZmVhdHVyZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMucHJvcGVydHlMYXllci5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ1BST1BFUlRZX0NPTkRPJztcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUxheWVyXG4gICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBsZXQgZmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQocmVzdWx0W2tleV0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgICAgICAgICAgZmllbGRzOiB0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcyxcbiAgICAgICAgICAgICAgc291cmNlOiBmZWF0dXJlcyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgICAgICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKGZlYXR1cmVzWzBdLCB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LCBbXSwgW2ZlYXR1cmVzWzBdLmdldE9iamVjdElkKCldKTtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5yZW5kZXJOb3coKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnNvbGUubG9nKHZpZXcuc2NhbGUpO1xuICB9XG5cbiAgYXJjYWRlRXhwcmVzc2lvbkluZm9zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdib20tZG9jLW51bScsXG4gICAgICB0aXRsZTogJ2JvbS1kb2MtbnVtJyxcbiAgICAgIGV4cHJlc3Npb246XG4gICAgICAgIFwidmFyIHJlc3VsdHMgPSBGZWF0dXJlU2V0QnlSZWxhdGlvbnNoaXBOYW1lKCRmZWF0dXJlLCAnQ09ORE9fQk9PS1MnLCBbJyonXSwgZmFsc2UpOyByZXR1cm4gRmlyc3QocmVzdWx0cykuQk9NX0RPQ19OVU07XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdkZWVkLWRvYy1udW0nLFxuICAgICAgdGl0bGU6ICdkZWVkLWRvYy1udW0nLFxuICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgXCJ2YXIgcmVzdWx0cyA9IEZlYXR1cmVTZXRCeVJlbGF0aW9uc2hpcE5hbWUoJGZlYXR1cmUsICdDT05ET19CT09LUycsIFsnKiddLCBmYWxzZSk7IHJldHVybiBGaXJzdChyZXN1bHRzKS5ERUVEX0RPQ19OVU07XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdtYWlsaW5nLWFkZHJlc3MnLFxuICAgICAgdGl0bGU6ICdtYWlsaW5nLWFkZHJlc3MnLFxuICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgJ1doZW4oSXNFbXB0eSgkZmVhdHVyZS5BRERSMyksJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIsJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjMpJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3Byb3BlcnR5LXZhbHVlcycsXG4gICAgICB0aXRsZTogJ3Byb3BlcnR5LXZhbHVlcycsXG4gICAgICBleHByZXNzaW9uOlxuICAgICAgICAnXCJCdWlsZGluZyBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuQkxER19WQUwrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkxhbmQgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkxBTkRfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3RhbCBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuVE9UQUxfVkFMVUVfQVNTRCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdkZWVkLWJvb2stcGFnZScsXG4gICAgICB0aXRsZTogJ2RlZWQtYm9vay1wYWdlJyxcbiAgICAgIGV4cHJlc3Npb246ICdcIkJvb2sgXCIrJGZlYXR1cmUuREVFRF9CT09LK1wiIFBhZ2UgXCIrJGZlYXR1cmUuREVFRF9QQUdFJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2dlbmVyYWwnLFxuICAgICAgdGl0bGU6ICdnZW5lcmFsJyxcbiAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICdcIlBJTlwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJGZlYXR1cmUuUElOX05VTStcIiBcIiskZmVhdHVyZS5QSU5fRVhUK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAgICdcIlJFSURcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKyRmZWF0dXJlLlJFSUQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkNpdHlcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgICAnUHJvcGVyKCRmZWF0dXJlLkNJVFlfREVDT0RFKStUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiSnVyaXNkaWN0aW9uXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICAgJyRmZWF0dXJlLlBMQU5OSU5HX0pVUklTRElDVElPTitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG93bnNoaXBcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1Byb3BlcigkZmVhdHVyZS5UT1dOU0hJUF9ERUNPREUpJ1xuICAgIH1cbiAgXSBhcyBFeHByZXNzaW9uSW5mb1tdO1xuXG4gIHBvcHVwVGVtcGxhdGUgPSBuZXcgUG9wdXBUZW1wbGF0ZSh7XG4gICAgZXhwcmVzc2lvbkluZm9zOiB0aGlzLmFyY2FkZUV4cHJlc3Npb25JbmZvcyxcbiAgICBjb250ZW50OiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgdGV4dDpcbiAgICAgICAgICAnPGgxIGNsYXNzPVwidGV4dC1ncmVlblwiPntTSVRFX0FERFJFU1N9PC9oMT4nICtcbiAgICAgICAgICAnPGgyPkdlbmVyYWw8L2gyPntleHByZXNzaW9uL2dlbmVyYWx9JyArXG4gICAgICAgICAgJzxoMj5Pd25lcjwvaDI+e09XTkVSfTxici8+e2V4cHJlc3Npb24vbWFpbGluZy1hZGRyZXNzfScgK1xuICAgICAgICAgICc8aDI+VmFsdWF0aW9uPC9oMj57ZXhwcmVzc2lvbi9wcm9wZXJ0eS12YWx1ZXN9JyArXG4gICAgICAgICAgJzxoMj5TYWxlIEluZm9ybWF0aW9uPC9oMj57VE9UU0FMUFJJQ0V9PGJyLz57U0FMRV9EQVRFfScgK1xuICAgICAgICAgICc8aDI+RGVlZHM8L2gyPntleHByZXNzaW9uL2RlZWQtYm9vay1wYWdlfScgK1xuICAgICAgICAgICc8YnIvPjxzdHJvbmc+RGVlZCBEYXRlPC9zdHJvbmc+PGJyLz57REVFRF9EQVRFfTxici8+JyArXG4gICAgICAgICAgJzxici8+TGVnYWwgRGVzY3JpcHRpb248YnIvPntQUk9QREVTQ308YnIvPicgK1xuICAgICAgICAgICc8YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9ib20tZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Cb29rIG9mIE1hcHM8L2E+PGJyLz48YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9kZWVkLWRvYy1udW19JlJlY29yZERhdGU9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGVlZDwvYT4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbWVkaWEnLFxuICAgICAgICBtZWRpYUluZm9zOiBbXVxuICAgICAgfVxuICAgIF1cbiAgfSk7XG5cbiAgZ2V0UHJvcGVydHkgPSAob2lkczogYW55W10pID0+IHtcbiAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmNvbmRvc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgIHJldHVybiByLm5hbWUgPT09ICdDT05ET19QUk9QRVJUWSc7XG4gICAgfSk7XG4gICAgdGhpcy5jb25kb3NUYWJsZVxuICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHtcbiAgICAgICAgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsXG4gICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgb3V0RmllbGRzOiBbJ09CSkVDVElEJ10sXG4gICAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BlcnR5TGF5ZXJcbiAgICAgICAgICAucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgICBvYmplY3RJZHM6IG9pZHMsXG4gICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWUsXG4gICAgICAgICAgICBvdXRTcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmdvVG8ocmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyVmlldyA9IHRoaXMudmlldy5sYXllclZpZXdzLmZpbmQodmlldyA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB2aWV3LmxheWVyID09PSB0aGlzLnByb3BlcnR5TGF5ZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChsYXllclZpZXcpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0cy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodHMgPSAobGF5ZXJWaWV3IGFzIGVzcmkuRmVhdHVyZUxheWVyVmlldykuaGlnaGxpZ2h0KHJlc3VsdC5mZWF0dXJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBzZWFyY2hDb21wbGV0ZSA9IChldmVudDogZXNyaS5TZWFyY2hTZWFyY2hDb21wbGV0ZUV2ZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaFdpZGdldC52aWV3TW9kZWwuc2VsZWN0ZWRTdWdnZXN0aW9uKSB7XG4gICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgbGV0IHdoZXJlID1cbiAgICAgICAgXCJPV05FUiBsaWtlICdcIiArXG4gICAgICAgIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArXG4gICAgICAgIFwiJScgT1IgUkVJRCBsaWtlICdcIiArXG4gICAgICAgIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArXG4gICAgICAgIFwiJScgT1IgUElOX05VTSBsaWtlICdcIiArXG4gICAgICAgIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArXG4gICAgICAgIFwiJ1wiO1xuICAgICAgbGV0IHRhYmxlRmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICB0aGlzLmNvbmRvc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogd2hlcmUsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICB0YWJsZUZlYXR1cmVzID0gcmVzdWx0LmZlYXR1cmVzO1xuICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goZi5nZXRPYmplY3RJZCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdoZXJlID0gXCJBRERSRVNTIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgdGhpcy5hZGRyZXNzVGFibGUucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiB3aGVyZSwgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwID0gdGhpcy5hZGRyZXNzVGFibGUucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0FERFJFU1NFU19DT05ETyc7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgIG9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgJiYgb2lkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXAuaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlRmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgICAgICAgICAgICAgZmllbGRzOiB0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIHNvdXJjZTogdGFibGVGZWF0dXJlcyxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICAgICAgICAgICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICAgICAgICAgICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5yZW5kZXJOb3coKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICAgICAgICAgIGZpZWxkczogdGhpcy5jb25kb3NUYWJsZS5maWVsZHMsXG4gICAgICAgICAgICAgIHNvdXJjZTogdGFibGVGZWF0dXJlcyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgICAgICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLnJlbmRlck5vdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQubnVtUmVzdWx0cyk7XG4gICAgICBpZiAoZXZlbnQubnVtUmVzdWx0cykge1xuICAgICAgICBjb25zdCBsYXllciA9IChldmVudC5yZXN1bHRzWzBdLnNvdXJjZSBhcyBMYXllclNlYXJjaFNvdXJjZSkubGF5ZXIgYXMgRmVhdHVyZUxheWVyO1xuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBldmVudC5yZXN1bHRzWzBdLnJlc3VsdHMuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goci5mZWF0dXJlLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxheWVyLmxheWVySWQgPT09IDQpIHtcbiAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXAgPSBsYXllci5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgICByZXR1cm4gci5uYW1lID09PSAnQUREUkVTU0VTX0NPTkRPJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocmVsYXRpb25zaGlwICYmIG9pZHMpIHtcbiAgICAgICAgICAgIGxheWVyXG4gICAgICAgICAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXAuaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvcGVydHkob2lkcyk7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmUubGF5ZXIgPSB0aGlzLmNvbmRvc1RhYmxlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmUoZmVhdHVyZSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IHRoaXMuY29uZG9zVGFibGUuZmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogW2ZlYXR1cmVdLFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvbmRvc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyBvYmplY3RJZHM6IG9pZHMsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZShyZXN1bHQuZmVhdHVyZXNbMF0sIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsIFtdLCBvaWRzKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgICAgICAgICAgZmllbGRzOiB0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcyxcbiAgICAgICAgICAgICAgc291cmNlOiByZXN1bHQuZmVhdHVyZXMsXG4gICAgICAgICAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICAgICAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgICAgICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHNldEZlYXR1cmUoZmVhdHVyZTogZXNyaS5HcmFwaGljLCB2aWV3OiBlc3JpLk1hcFZpZXcsIG1lZGlhSW5mb3M6IGFueVtdLCBvaWRzOiBhbnlbXSkge1xuICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIGZlYXR1cmUnKTtcbiAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmNvbmRvc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgIHJldHVybiByLm5hbWUgPT09ICdDT05ET19QSE9UT1MnO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlbGF0aW9uc2hpcCk7XG4gICAgbWVkaWFJbmZvcyA9IFtdO1xuICAgIHRoaXMuY29uZG9zVGFibGVcbiAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXA/LmlkLCBvYmplY3RJZHM6IG9pZHMsIG91dEZpZWxkczogWycqJ10gfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgbWVkaWFJbmZvcy5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgICBjYXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBzb3VyY2VVUkw6XG4gICAgICAgICAgICAgICAgICAnaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL3JlYWxlc3RhdGUvcGhvdG9zL212aWRlby8nICtcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdJTUFHRURJUicpICtcbiAgICAgICAgICAgICAgICAgICcvJyArXG4gICAgICAgICAgICAgICAgICBmZWF0dXJlLmdldEF0dHJpYnV0ZSgnSU1BR0VOQU1FJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25kb3NUYWJsZS5wb3B1cFRlbXBsYXRlLmNvbnRlbnRbMV0ubWVkaWFJbmZvcyA9IG1lZGlhSW5mb3M7XG4gICAgICAgIGZlYXR1cmUubGF5ZXIgPSB0aGlzLmNvbmRvc1RhYmxlO1xuICAgICAgICBmZWF0dXJlLnBvcHVwVGVtcGxhdGUgPSAoZmVhdHVyZS5sYXllciBhcyBlc3JpLkZlYXR1cmVMYXllcikucG9wdXBUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBmZWF0dXJlO1xuICAgICAgICBjb25zb2xlLmxvZyhmZWF0dXJlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0VGFibGUoKSB7XG4gICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIucXVlcnlGZWF0dXJlcyh7IG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgbGV0IGNzdiA9ICcnO1xuICAgICAgcmVzdWx0LmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgY3N2ICs9IGZpZWxkLmFsaWFzICsgJywnO1xuICAgICAgfSk7XG4gICAgICBjc3YgKz0gJ1xcclxcbic7XG4gICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmVhdHVyZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaWYgKGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkYXRlJykpIHtcbiAgICAgICAgICAgIGNzdiArPSAnXCInICsgbmV3IERhdGUoZmVhdHVyZS5hdHRyaWJ1dGVzW2tleV0pLnRvRGF0ZVN0cmluZygpICsgJ1wiLCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChrZXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnYWNyZXMnKSkge1xuICAgICAgICAgICAgY3N2ICs9ICdcIicgKyBwYXJzZUZsb2F0KGZlYXR1cmUuYXR0cmlidXRlc1trZXldKS50b0ZpeGVkKDIpICsgJ1wiLCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzdiArPSAnXCInICsgZmVhdHVyZS5hdHRyaWJ1dGVzW2tleV0gKyAnXCIsJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3N2ICs9ICdcXHJcXG4nO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBleHBvcnRlZEZpbGVubWFlID0gJ2ltYXBzX2V4cG9ydC5jc3YnO1xuXG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2Nzdl0sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBpZiAobGluay5kb3dubG9hZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGZlYXR1cmUgZGV0ZWN0aW9uXG4gICAgICAgIC8vIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCBIVE1MNSBkb3dubG9hZCBhdHRyaWJ1dGVcbiAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBleHBvcnRlZEZpbGVubWFlKTtcbiAgICAgICAgbGluay5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRTZWFyY2goY29uZG9zVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyKSB7XG4gICAgY29uc3QgdGFibGVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgZmllbGRzOiBbXG4gICAgICAgIHsgbmFtZTogJ1NJVEVfQUREUkVTUycsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ0FkZHJlc3MnIH0sXG4gICAgICAgIHsgbmFtZTogJ09XTkVSJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnT3duZXInIH0sXG4gICAgICAgIHsgbmFtZTogJ1BJTl9OVU0nLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdQSU4nIH0sXG4gICAgICAgIHsgbmFtZTogJ1JFSUQnLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdSRUlEJyB9XG4gICAgICBdLFxuICAgICAgc291cmNlOiBbXSxcbiAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnXG4gICAgfSk7XG4gICAgdGhpcy5mZWF0dXJlID0gbmV3IEZlYXR1cmUoeyB2aWV3OiB0aGlzLnZpZXcgfSk7XG4gICAgdGhpcy5mZWF0dXJlVGFibGUgPSBuZXcgRmVhdHVyZVRhYmxlKHtcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIGxheWVyOiB0YWJsZUxheWVyLFxuICAgICAgZmllbGRDb25maWdzOiBbXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1NJVEVfQUREUkVTUycsXG4gICAgICAgICAgbGFiZWw6ICdBZGRyZXNzJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ09XTkVSJyxcbiAgICAgICAgICBsYWJlbDogJ093bmVyJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1BJTl9OVU0nLFxuICAgICAgICAgIGxhYmVsOiAnUElOJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBGaWVsZENvbHVtbkNvbmZpZyh7XG4gICAgICAgICAgbmFtZTogJ1JFSUQnLFxuICAgICAgICAgIGxhYmVsOiAnUkVJRCcsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgbWVudUNvbmZpZzoge1xuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICh7XG4gICAgICAgICAgICBsYWJlbDogJ0V4cG9ydCdcbiAgICAgICAgICB9IGFzIHVua25vd24pIGFzIE1lbnVCdXR0b25JdGVtXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBidXR0b246IE1lbnVCdXR0b25JdGVtID0gdGhpcy5mZWF0dXJlVGFibGU/Lm1lbnVDb25maWc/Lml0ZW1zPy5maW5kKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0ubGFiZWwgPT09ICdFeHBvcnQnO1xuICAgIH0pIGFzIE1lbnVCdXR0b25JdGVtO1xuICAgIGJ1dHRvbi5jbGlja0Z1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgdGhpcy5leHBvcnRUYWJsZSgpO1xuICAgIH07XG4gICAgYnV0dG9uLmNsaWNrRnVuY3Rpb24uYmluZCh0aGlzLmZlYXR1cmVUYWJsZSk7XG5cbiAgICB0aGlzLmZlYXR1cmVUYWJsZS5vbignc2VsZWN0aW9uLWNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5hZGRlZC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShbZXZlbnQuYWRkZWRbMF0uZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJyldKTtcbiAgICAgICAgdGhpcy5zZXRGZWF0dXJlKFxuICAgICAgICAgIGV2ZW50LmFkZGVkWzBdLmZlYXR1cmUsXG4gICAgICAgICAgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldyxcbiAgICAgICAgICBbXSxcbiAgICAgICAgICBbZXZlbnQuYWRkZWRbMF0uZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJyldXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgfVxuICAgICAgKHRoaXMuZmVhdHVyZVRhYmxlIGFzIGFueSkuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xuICAgICAgYWxsUGxhY2Vob2xkZXI6ICdTaXRlIEFkZHJlc3MnLFxuICAgICAgaW5jbHVkZURlZmF1bHRTb3VyY2VzOiBmYWxzZSxcbiAgICAgIGNvbnRhaW5lcjogJ3NlYXJjaCcsXG4gICAgICBzb3VyY2VzOiBbXG4gICAgICAgIG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgbGF5ZXI6IHRoaXMuYWRkcmVzc1RhYmxlLFxuICAgICAgICAgIHNlYXJjaEZpZWxkczogWydBRERSRVNTJ10sXG4gICAgICAgICAgZGlzcGxheUZpZWxkOiAnQUREUkVTUycsXG4gICAgICAgICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgICAgb3V0RmllbGRzOiBbJ0FERFJFU1MnLCAnUkVBX1JFSUQnXSxcbiAgICAgICAgICBuYW1lOiAnU2l0ZSBBZGRyZXNzJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDIyMiBXIEhBUkdFVFQnXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnT1dORVInXSxcbiAgICAgICAgICBkaXNwbGF5RmllbGQ6ICdPV05FUicsXG4gICAgICAgICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgICAgb3V0RmllbGRzOiBbJ09XTkVSJywgJ1JFSUQnLCAnT0JKRUNUSUQnXSxcbiAgICAgICAgICBuYW1lOiAnT3duZXInLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogU01JVEgsIEpPSE4nXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnUElOX05VTSddLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ1BJTl9OVU0nLFxuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgIG91dEZpZWxkczogWydQSU5fTlVNJywgJ1JFSUQnLCAnT0JKRUNUSUQnXSxcbiAgICAgICAgICBuYW1lOiAnUElOJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDA3MTIzNDU2NzgnXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnUkVJRCddLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ1JFSUQnLFxuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgIG91dEZpZWxkczogWydSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgICAgbmFtZTogJ1JFSUQnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMDEyMzQ1NidcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldC52aWV3TW9kZWwud2F0Y2goJ3Jlc3VsdHMnLCBldmVudCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hXaWRnZXQub24oJ3NlYXJjaC1jb21wbGV0ZScsIHRoaXMuc2VhcmNoQ29tcGxldGUpO1xuXG4gICAgLy9jb25zb2xlLmxvZygocmVzdWx0IGFzIGFueSkudGFyZ2V0LnNlbGVjdGVkU3VnZ2VzdGlvbik7XG4gIH1cbiAgdG9nZ2xlQ29udGVudCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSAndGFibGUnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZScpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZUl0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCBmcm9tICcuL1Byb3BlcnR5U2VhcmNoL1Byb3BlcnR5U2VhcmNoVmlld01vZGVsJztcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlTZWFyY2hQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBwcm9wZXJ0eUxheWVyPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIGNvbmRvc1RhYmxlPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIGFkZHJlc3NUYWJsZT86IGVzcmkuRmVhdHVyZUxheWVyO1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBwcm9wZXJ0eXNlYXJjaC1iYXNlJ1xufTtcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuUHJvcGVydHlTZWFyY2gnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlTZWFyY2ggZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuY29uZG9zVGFibGUnKVxuICBjb25kb3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYWRkcmVzc1RhYmxlJylcbiAgYWRkcmVzc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5wcm9wZXJ0eUxheWVyJylcbiAgcHJvcGVydHlMYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuc2VhcmNoV2lkZ2V0JylcbiAgc2VhcmNoV2lkZ2V0OiBlc3JpLndpZGdldHNTZWFyY2g7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZmVhdHVyZVRhYmxlJylcbiAgZmVhdHVyZVRhYmxlOiBlc3JpLkZlYXR1cmVUYWJsZTtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5mZWF0dXJlJylcbiAgZmVhdHVyZTogZXNyaS5GZWF0dXJlO1xuICBAYWxpYXNPZigndmlld01vZGVsLmdlb21ldHJ5JylcbiAgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubmFtZScpXG4gIEByZW5kZXJhYmxlKClcbiAgbmFtZSA9ICcnO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogUHJvcGVydHlTZWFyY2hWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IFByb3BlcnR5U2VhcmNoVmlld01vZGVsID0gbmV3IFByb3BlcnR5U2VhcmNoVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IFByb3BlcnR5U2VhcmNoUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX2NyZWF0ZVNlYXJjaCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zZWFyY2hXaWRnZXQpIHtcbiAgICAgIHRoaXMuc2VhcmNoV2lkZ2V0LmNvbnRhaW5lciA9ICdzZWFyY2gnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZVRhYmxlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmZlYXR1cmVUYWJsZSkge1xuICAgICAgdGhpcy5mZWF0dXJlVGFibGUuY29udGFpbmVyID0gJ3RhYmxlJztcbiAgICB9XG4gIH07XG4gIF9jcmVhdGVGZWF0dXJlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmZlYXR1cmUpIHtcbiAgICAgIHRoaXMuZmVhdHVyZS5jb250YWluZXIgPSAnZmVhdHVyZURpdic7XG4gICAgfVxuICB9O1xuXG4gIGN1cnJlbnRSYWRpb0J1dHRvbiA9ICdsaXN0JztcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2lkZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAvLyBjYW4gSSBnZXQgY2hlY2tlZCBhbmQgdmFsdWUgbGlrZSB0aGlzP1xuICAgICAgICBpZiAoZS50YXJnZXQ/LmNoZWNrZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldD8udmFsdWUpO1xuICAgICAgICAgIHRoaXMudmlld01vZGVsLnRvZ2dsZUNvbnRlbnQoZS50YXJnZXQ/LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVTZWFyY2h9IGlkPVwic2VhcmNoXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZVRhYmxlfSBpZD1cInRhYmxlXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJmZWF0dXJlXCIgY2xhc3M9XCJoaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiZmVhdHVyZURpdlwiIGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVGZWF0dXJlfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSBjaGVja2VkIHZhbHVlPVwidGFibGVcIiBpZD1cInRhYmxlSXRlbVwiPlxuICAgICAgICAgICAgTGlzdFxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdmFsdWU9XCJmZWF0dXJlXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgRGV0YWlsc1xuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgTWVhc3VyZW1lbnQgZnJvbSAnZXNyaS93aWRnZXRzL01lYXN1cmVtZW50JztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5NZWFzdXJlLk1lYXN1cmVWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZVZpZXdNb2RlbCBleHRlbmRzIGRlY2xhcmVkKEFjY2Vzc29yKSB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG4gIG1lYXN1cmVtZW50OiBlc3JpLk1lYXN1cmVtZW50O1xuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gIH1cbiAgbWVhc3VyZU9wZW5lZCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVhc3VyZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwJykgYXMgYW55KS5zZWxlY3RlZEl0ZW0udGl0bGU7XG4gICAgaWYgKHNlbGVjdGVkICE9ICdjbGVhcicpIHtcbiAgICAgIHRoaXMubWVhc3VyZW1lbnQuYWN0aXZlVG9vbCA9IHNlbGVjdGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lYXN1cmVtZW50LmNsZWFyKCk7XG4gICAgfVxuICB9XG4gIGluaXRNZWFzdXJlKCkge1xuICAgIHRoaXMubWVhc3VyZW1lbnQgPSBuZXcgTWVhc3VyZW1lbnQoeyB2aWV3OiB0aGlzLnZpZXcsIGNvbnRhaW5lcjogJ21lYXN1cmVXaWRnZXQnIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5pbXBvcnQgTWVhc3VyZVZpZXdNb2RlbCBmcm9tICcuL01lYXN1cmUvTWVhc3VyZVZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVhc3VyZVByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IG1lYXN1cmUtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTWVhc3VyZScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWFzdXJlIGV4dGVuZHMgZGVjbGFyZWQoV2lkZ2V0KSB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLm1lYXN1cmVtZW50JylcbiAgbWVhc3VyZW1lbnQ6IGVzcmkuTWVhc3VyZW1lbnQ7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuaW5pdE1lYXN1cmUnKVxuICBpbml0TWVhc3VyZTogRnVuY3Rpb247XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubWVhc3VyZU9wZW5lZCcpXG4gIG1lYXN1cmVPcGVuZWQ6IEZ1bmN0aW9uO1xuICBAYWxpYXNPZigndmlld01vZGVsLm5hbWUnKVxuICBAcmVuZGVyYWJsZSgpXG4gIG5hbWUgPSAnJztcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IE1lYXN1cmVWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IE1lYXN1cmVWaWV3TW9kZWwgPSBuZXcgTWVhc3VyZVZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBNZWFzdXJlUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX21lYXN1cmVDcmVhdGVkID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdE1lYXN1cmUoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVhc3VyZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQ/LmNoZWNrZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldD8udGl0bGUpO1xuICAgICAgICAgIGlmIChlLnRhcmdldD8udGl0bGUgPT09ICdjbGVhcicpIHtcbiAgICAgICAgICAgIHRoaXMubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudC5hY3RpdmVUb29sID0gZS50YXJnZXQ/LnRpdGxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSBjaGVja2VkIHRpdGxlPVwiZGlzdGFuY2VcIiB2YWx1ZT1cImRpc3RhbmNlXCIgaWQ9XCJ0YWJsZUl0ZW1cIiBpY29uPVwibWVhc3VyZVwiPlxuICAgICAgICAgICAgTGluZVxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdGl0bGU9XCJhcmVhXCIgdmFsdWU9XCJhcmVhXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGljb249XCJtZWFzdXJlLWFyZWFcIj5cbiAgICAgICAgICAgIEFyZWFcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHRpdGxlPVwiY2xlYXJcIiB2YWx1ZT1cImNsZWFyXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGljb249XCJ0cmFzaFwiPlxuICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9tZWFzdXJlQ3JlYXRlZH0gaWQ9XCJtZWFzdXJlV2lkZ2V0XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgUG9wdXBUZW1wbGF0ZSBmcm9tICdlc3JpL1BvcHVwVGVtcGxhdGUnO1xuaW1wb3J0IEV4cHJlc3Npb25JbmZvIGZyb20gJ2VzcmkvcG9wdXAvRXhwcmVzc2lvbkluZm8nO1xuXG5jb25zdCBhcmNhZGVFeHByZXNzaW9uSW5mb3MgPSBbXG4gIHtcbiAgICBuYW1lOiAnYm9tLWRvYy1udW0nLFxuICAgIHRpdGxlOiAnYm9tLWRvYy1udW0nLFxuICAgIGV4cHJlc3Npb246XG4gICAgICBcInZhciByZXN1bHRzID0gRmVhdHVyZVNldEJ5UmVsYXRpb25zaGlwTmFtZSgkZmVhdHVyZSwgJ0NPTkRPX0JPT0tTJywgWycqJ10sIGZhbHNlKTsgcmV0dXJuIEZpcnN0KHJlc3VsdHMpLkJPTV9ET0NfTlVNO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZGVlZC1kb2MtbnVtJyxcbiAgICB0aXRsZTogJ2RlZWQtZG9jLW51bScsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgIFwidmFyIHJlc3VsdHMgPSBGZWF0dXJlU2V0QnlSZWxhdGlvbnNoaXBOYW1lKCRmZWF0dXJlLCAnQ09ORE9fQk9PS1MnLCBbJyonXSwgZmFsc2UpOyByZXR1cm4gRmlyc3QocmVzdWx0cykuREVFRF9ET0NfTlVNO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICB0aXRsZTogJ21haWxpbmctYWRkcmVzcycsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdXaGVuKElzRW1wdHkoJGZlYXR1cmUuQUREUjMpLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIzKSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgIHRpdGxlOiAncHJvcGVydHktdmFsdWVzJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1wiQnVpbGRpbmcgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkJMREdfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJMYW5kIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5MQU5EX1ZBTCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG90YWwgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLlRPVEFMX1ZBTFVFX0FTU0QnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZGVlZC1ib29rLXBhZ2UnLFxuICAgIHRpdGxlOiAnZGVlZC1ib29rLXBhZ2UnLFxuICAgIGV4cHJlc3Npb246ICdcIkJvb2sgXCIrJGZlYXR1cmUuREVFRF9CT09LK1wiIFBhZ2UgXCIrJGZlYXR1cmUuREVFRF9QQUdFJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2dlbmVyYWwnLFxuICAgIHRpdGxlOiAnZ2VuZXJhbCcsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdcIlBJTlwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJGZlYXR1cmUuUElOX05VTStcIiBcIiskZmVhdHVyZS5QSU5fRVhUK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAnXCJSRUlEXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5SRUlEK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJDaXR5XCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICdQcm9wZXIoJGZlYXR1cmUuQ0lUWV9ERUNPREUpK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJKdXJpc2RpY3Rpb25cIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgJyRmZWF0dXJlLlBMQU5OSU5HX0pVUklTRElDVElPTitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG93bnNoaXBcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1Byb3BlcigkZmVhdHVyZS5UT1dOU0hJUF9ERUNPREUpJ1xuICB9XG5dIGFzIEV4cHJlc3Npb25JbmZvW107XG5cbmNvbnN0IHBvcHVwVGVtcGxhdGUgPSBuZXcgUG9wdXBUZW1wbGF0ZSh7XG4gIGV4cHJlc3Npb25JbmZvczogYXJjYWRlRXhwcmVzc2lvbkluZm9zLFxuICAvLyBjb250ZW50OiAoZXZlbnQ6IGFueSkgPT4ge1xuICAvLyAgIGNvbnN0IGdyYXBoaWMgPSBldmVudC5ncmFwaGljO1xuICAvLyAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWdyZWVuJyk7XG4gIC8vICAgY29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAvLyAgIGRpdi50ZXh0Q29udGVudCA9IGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdTSVRFX0FERFJFU1MnKTtcbiAgLy8gICByZXR1cm4gY29udGFpbmVyO1xuICAvLyB9LFxuICBjb250ZW50OiBbXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDpcbiAgICAgICAgJzxoMSBjbGFzcz1cInRleHQtZ3JlZW5cIj57U0lURV9BRERSRVNTfTwvaDE+JyArXG4gICAgICAgICc8aDI+R2VuZXJhbDwvaDI+e2V4cHJlc3Npb24vZ2VuZXJhbH0nICtcbiAgICAgICAgJzxoMj5Pd25lcjwvaDI+e09XTkVSfTxici8+e2V4cHJlc3Npb24vbWFpbGluZy1hZGRyZXNzfScgK1xuICAgICAgICAnPGgyPlZhbHVhdGlvbjwvaDI+e2V4cHJlc3Npb24vcHJvcGVydHktdmFsdWVzfScgK1xuICAgICAgICAnPGgyPlNhbGUgSW5mb3JtYXRpb248L2gyPntUT1RTQUxQUklDRX08YnIvPntTQUxFX0RBVEV9JyArXG4gICAgICAgICc8aDI+RGVlZHM8L2gyPntleHByZXNzaW9uL2RlZWQtYm9vay1wYWdlfScgK1xuICAgICAgICAnPGJyLz48c3Ryb25nPkRlZWQgRGF0ZTwvc3Ryb25nPjxici8+e0RFRURfREFURX08YnIvPicgK1xuICAgICAgICAnPGJyLz5MZWdhbCBEZXNjcmlwdGlvbjxici8+e1BST1BERVNDfTxici8+JyArXG4gICAgICAgICc8YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9ib20tZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Cb29rIG9mIE1hcHM8L2E+PGJyLz48YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9kZWVkLWRvYy1udW19JlJlY29yZERhdGU9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGVlZDwvYT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnbWVkaWEnLFxuICAgICAgbWVkaWFJbmZvczogW11cbiAgICB9XG4gIF1cbn0pO1xuXG5leHBvcnQgY29uc3QgZmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gIHBvcnRhbEl0ZW06IHtcbiAgICBpZDogJzA4MDUwYmYwNjdiYjRiMjBhZGVhNGIwYjRmMGEzOWUzJ1xuICB9LFxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9XG59KTtcblxuZXhwb3J0IGNvbnN0IGNvbmRvc1RhYmxlID0gbmV3IEZlYXR1cmVMYXllcih7XG4gIHBvcnRhbEl0ZW06IHtcbiAgICBpZDogJzA4MDUwYmYwNjdiYjRiMjBhZGVhNGIwYjRmMGEzOWUzJ1xuICB9LFxuICBsYXllcklkOiAxLFxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9LFxuICBwb3B1cFRlbXBsYXRlOiBwb3B1cFRlbXBsYXRlXG59KTtcbmNvbmRvc1RhYmxlLmxvYWQoKTtcbmV4cG9ydCBjb25zdCBhZGRyZXNzVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnMDgwNTBiZjA2N2JiNGIyMGFkZWE0YjBiNGYwYTM5ZTMnXG4gIH0sXG4gIGxheWVySWQ6IDQsXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbn0pO1xuYWRkcmVzc1RhYmxlLmxvYWQoKTtcbmV4cG9ydCAqIGZyb20gJy4vYXBwJztcbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5pbXBvcnQgU2tldGNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gnO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnO1xuaW1wb3J0IFRleHRTeW1ib2wgZnJvbSAnZXNyaS9zeW1ib2xzL1RleHRTeW1ib2wnO1xuaW1wb3J0IHsgbWVhc3VyZW1lbnQgfSBmcm9tICcuLi8uLi93aWRnZXRzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5EcmF3LkRyYXdWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd1ZpZXdNb2RlbCBleHRlbmRzIGRlY2xhcmVkKEFjY2Vzc29yKSB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBjb250YWluZXI6IHN0cmluZztcbiAgQHByb3BlcnR5KCkgbmFtZSA9ICdTbGFnYXRob3InO1xuICBza2V0Y2g6IFNrZXRjaDtcbiAgZ3JhcGhpY3M6IEdyYXBoaWNzTGF5ZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRleHRDb2xvcjogZXNyaS5Db2xvcjtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0RHJhdygpIHtcbiAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnIH0pO1xuICAgIHRoaXMudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MpO1xuXG4gICAgLy8gdGhpcy52aWV3LndoZW5MYXllclZpZXcodGhpcy5ncmFwaGljcykudGhlbigoKSA9PiB7XG4gICAgLy8gICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwc19kcmF3JykpIHtcbiAgICAvL1xuICAgIC8vICAgICB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLmFkZE1hbnkoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzX2RyYXcnKSBhcyBzdHJpbmcpKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcblxuICAgIHRoaXMuc2tldGNoID0gbmV3IFNrZXRjaCh7IHZpZXc6IHRoaXMudmlldywgY29udGFpbmVyOiAnc2tldGNoRGl2JywgbGF5ZXI6IHRoaXMuZ3JhcGhpY3MsIGNyZWF0aW9uTW9kZTogJ3NpbmdsZScgfSk7XG4gICAgdGhpcy5za2V0Y2gud2F0Y2goJ2FjdGl2ZVRvb2wnLCB0b29sID0+IHtcbiAgICAgIGlmICh0b29sICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBtZWFzdXJlbWVudD8ubWVhc3VyZW1lbnQ/LmNsZWFyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5za2V0Y2gub24oJ2NyZWF0ZScsIGUgPT4ge1xuICAgICAgaWYgKGUuc3RhdGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgICAgaWYgKGUuc3RhdGUgPT09ICdjb21wbGV0ZScgJiYgdGhpcy5sYWJlbD8ubGVuZ3RoKSB7XG4gICAgICAgIGxldCBsYWJlbFBvaW50OiBlc3JpLkdlb21ldHJ5ID0gZS5ncmFwaGljLmdlb21ldHJ5O1xuICAgICAgICBpZiAoZS5ncmFwaGljLmdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJykge1xuICAgICAgICAgIGxhYmVsUG9pbnQgPSAoZS5ncmFwaGljLmdlb21ldHJ5IGFzIGVzcmkuUG9seWdvbikuY2VudHJvaWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZyA9IG5ldyBHcmFwaGljKHtcbiAgICAgICAgICBnZW9tZXRyeTogbGFiZWxQb2ludCxcbiAgICAgICAgICBzeW1ib2w6IG5ldyBUZXh0U3ltYm9sKHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMubGFiZWwsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgICAgICBoYWxvQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBoYWxvU2l6ZTogMSxcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiAndG9wJyxcbiAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdyaWdodCdcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5hZGQoZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIGNvbnNvbGUubG9nKHZpZXcuc2NhbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IENvbG9yIGZyb20gJ2VzcmkvQ29sb3InO1xuaW1wb3J0IERyYXdWaWV3TW9kZWwgZnJvbSAnLi9EcmF3L0RyYXdWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBkcmF3LWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkRyYXcnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyBleHRlbmRzIGRlY2xhcmVkKFdpZGdldCkge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5sYWJlbCcpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudGV4dENvbG9yJylcbiAgdGV4dENvbG9yOiBDb2xvcjtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBEcmF3Vmlld01vZGVsXG4gIH0pXG4gIEByZW5kZXJhYmxlKClcbiAgdmlld01vZGVsOiBEcmF3Vmlld01vZGVsID0gbmV3IERyYXdWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogRHJhd1Byb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIF9kcmF3VXBkYXRlZCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMudmlld01vZGVsLnNrZXRjaCkge1xuICAgICAgdGhpcy52aWV3TW9kZWwuaW5pdERyYXcoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGZpbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsbCcpO1xuICAgIGZpbGw/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVDb2xvckNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGhleDogc3RyaW5nID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgICAgdGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgIH0pO1xuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGluZScpO1xuICAgIGxpbmU/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVDb2xvckNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGhleDogc3RyaW5nID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlsaW5lU3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wgYXMgZXNyaS5TaW1wbGVNYXJrZXJTeW1ib2wpLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICB9KTtcbiAgICBjb25zdCBvcGFjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wYWNpdHknKTtcbiAgICBvcGFjaXR5Py5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy52aWV3TW9kZWwuZ3JhcGhpY3Mub3BhY2l0eSA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IHdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpZHRoJyk7XG4gICAgd2lkdGg/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVJbnB1dEJsdXInLCAoZTogYW55KSA9PiB7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbCBhcyBlc3JpLlNpbXBsZUxpbmVTeW1ib2wpLndpZHRoID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS53aWR0aCA9IHBhcnNlRmxvYXQoXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUud2lkdGggPSBwYXJzZUZsb2F0KFxuICAgICAgICBlLnRhcmdldC52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbCcpO1xuICAgIGxhYmVsPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ2xhYmVsJywgZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRleHRDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0Q29sb3InKTtcbiAgICB0ZXh0Q29sb3I/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVDb2xvckNoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0KCd0ZXh0Q29sb3InLCBDb2xvci5mcm9tSGV4KGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGRpdiBhZnRlclVwZGF0ZT17dGhpcy5fZHJhd1VwZGF0ZWR9IGlkPVwic2tldGNoRGl2XCI+PC9kaXY+XG4gICAgICAgIDxjYWxjaXRlLWJsb2NrIGhlYWRpbmc9XCJTZXR0aW5nc1wiIG9wZW4gY29sbGFwc2libGU+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiQ29sb3JcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPkZpbGwgQ29sb3I8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1jb2xvciBpZD1cImZpbGxcIiBoaWRlQ2hhbm5lbHMgaGlkZVNhdmVkIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgc2NhbGU9XCJzXCI+PC9jYWxjaXRlLWNvbG9yPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+TGluZSBDb2xvcjwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICAgIDxjYWxjaXRlLWNvbG9yIGlkPVwibGluZVwiIGhpZGVDaGFubmVscyBoaWRlU2F2ZWQgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBzY2FsZT1cInNcIj48L2NhbGNpdGUtY29sb3I+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiT3BhY2l0eVwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+T3BhY2l0eTwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICAgIDxjYWxjaXRlLWlucHV0IHNjYWxlPVwic1wiIGlkPVwib3BhY2l0eVwiIHR5cGU9XCJudW1iZXJcIiBtYXg9XCIxXCIgbWluPVwiMFwiIHZhbHVlPVwiMVwiIHN0ZXA9XCIwLjFcIj48L2NhbGNpdGUtaW5wdXQ+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiT3V0bGluZVwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+V2lkdGg8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1pbnB1dCBzY2FsZT1cInNcIiBpZD1cIndpZHRoXCIgdHlwZT1cIm51bWJlclwiIG1heD1cIjEwXCIgbWluPVwiMFwiIHZhbHVlPVwiMVwiIHN0ZXA9XCIwLjVcIj48L2NhbGNpdGUtaW5wdXQ+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiTGFiZWxpbmdcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPkxhYmVsPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtaW5wdXQgc2NhbGU9XCJzXCIgaWQ9XCJsYWJlbFwiIHR5cGU9XCJ0ZXh0YXJlYVwiPjwvY2FsY2l0ZS1pbnB1dD5cbiAgICAgICAgICAgIDxjYWxjaXRlLWNvbG9yIGlkPVwidGV4dENvbG9yXCIgaGlkZUNoYW5uZWxzIGhpZGVTYXZlZCBhcHBlYXJhbmNlPVwibWluaW1hbFwiIHNjYWxlPVwic1wiPjwvY2FsY2l0ZS1jb2xvcj5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgPC9jYWxjaXRlLWJsb2NrPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuaW1wb3J0IFNrZXRjaCBmcm9tICdlc3JpL3dpZGdldHMvU2tldGNoJztcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInO1xuXG5pbXBvcnQgeyBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IHsgbWVhc3VyZW1lbnQgfSBmcm9tICcuLi8uLi93aWRnZXRzJztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5TZWxlY3QuU2VsZWN0Vmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdFZpZXdNb2RlbCBleHRlbmRzIGRlY2xhcmVkKEFjY2Vzc29yKSB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAcHJvcGVydHkoKSBsYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cbiAgc2tldGNoOiBlc3JpLlNrZXRjaDtcbiAgYnVmZmVyRGlzdGFuY2U6IG51bWJlcjtcbiAgZ3JhcGhpY3M6IEdyYXBoaWNzTGF5ZXI7XG5cbiAgaW5pdFNrZXRjaCgpIHtcbiAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnIH0pO1xuICAgIHRoaXMudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MpO1xuICAgIHRoaXMuc2tldGNoID0gbmV3IFNrZXRjaCh7XG4gICAgICB2aWV3OiB0aGlzLnZpZXcsXG4gICAgICBjb250YWluZXI6ICdzZWxlY3RXaWRnZXQnLFxuICAgICAgbGF5ZXI6IHRoaXMuZ3JhcGhpY3MsXG4gICAgICBjcmVhdGlvbk1vZGU6ICdzaW5nbGUnXG4gICAgfSk7XG4gICAgdGhpcy5za2V0Y2gub24oJ2NyZWF0ZScsIGV2ID0+IHtcbiAgICAgIGlmIChldi5zdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB0aGlzLmdyYXBoaWNzLnJlbW92ZUFsbCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2LnN0YXRlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNrZXRjaC53YXRjaCgnYWN0aXZlVG9vbCcsIHRvb2wgPT4ge1xuICAgICAgaWYgKHRvb2wgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gICAgdGhpcy5zZXQoJ2J1ZmZlckRpc3RhbmNlJywgMCk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5cbmltcG9ydCBTZWxlY3RWaWV3TW9kZWwgZnJvbSAnLi9TZWxlY3QvU2VsZWN0Vmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBsYXllcj86IGVzcmkuRmVhdHVyZUxheWVyO1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBzZWxlY3QtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuU2VsZWN0JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIGRlY2xhcmVkKFdpZGdldCkge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5sYXllcicpXG4gIGxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5za2V0Y2gnKVxuICBza2V0Y2g6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLmJ1ZmZlckRpc3RhbmNlJylcbiAgYnVmZmVyRGlzdGFuY2U6IG51bWJlcjtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBTZWxlY3RWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IFNlbGVjdFZpZXdNb2RlbCA9IG5ldyBTZWxlY3RWaWV3TW9kZWwoKTtcbiAgX3NrZXRjaENyZWF0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnZpZXdNb2RlbC5za2V0Y2gpIHtcbiAgICAgIHRoaXMudmlld01vZGVsLmluaXRTa2V0Y2goKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBTZWxlY3RQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXY6IGFueSkge1xuICAgIHRoaXMuc2V0KCdidWZmZXJEaXN0YW5jZScsIHBhcnNlSW50KGV2LnRhcmdldC52YWx1ZSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0RGl2IGNhbGNpdGUtaW5wdXQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUlucHV0Qmx1cicsIChldjogYW55KSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZShldik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyVXBkYXRlPXt0aGlzLl9za2V0Y2hDcmVhdGVkfSBpZD1cInNlbGVjdFdpZGdldFwiPjwvZGl2PlxuICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5CdWZmZXIgRGlzdGFuY2UgKGZlZXQpIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgPGNhbGNpdGUtaW5wdXRcbiAgICAgICAgICBzY2FsZT1cInNcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgIG1heD1cIjIwMDBcIlxuICAgICAgICAgIHN0ZXA9XCI1MFwiXG4gICAgICAgICAgdmFsdWU9e3RoaXMudmlld01vZGVsLmJ1ZmZlckRpc3RhbmNlfVxuICAgICAgICA+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gV2lkZ2V0c1xuaW1wb3J0IExheWVyTGlzdCBmcm9tICdlc3JpL3dpZGdldHMvTGF5ZXJMaXN0JztcbmltcG9ydCBMZWdlbmQgZnJvbSAnZXNyaS93aWRnZXRzL0xlZ2VuZCc7XG5pbXBvcnQgUHJpbnQgZnJvbSAnZXNyaS93aWRnZXRzL1ByaW50JztcbmltcG9ydCBCb29rbWFya3MgZnJvbSAnZXNyaS93aWRnZXRzL0Jvb2ttYXJrcyc7XG5pbXBvcnQgQmFzZW1hcEdhbGxlcnkgZnJvbSAnZXNyaS93aWRnZXRzL0Jhc2VtYXBHYWxsZXJ5Jztcbi8vaW1wb3J0IE1lYXN1cmVtZW50IGZyb20gJ2Vzcmkvd2lkZ2V0cy9NZWFzdXJlbWVudCc7XG5pbXBvcnQgUHJvcGVydHlTZWFyY2ggZnJvbSAnLi93aWRnZXRzL1Byb3BlcnR5U2VhcmNoJztcbmltcG9ydCBDb29yZGluYXRlQ29udmVyc2lvbiBmcm9tICdlc3JpL3dpZGdldHMvQ29vcmRpbmF0ZUNvbnZlcnNpb24nO1xuaW1wb3J0IEV4cGFuZCBmcm9tICdlc3JpL3dpZGdldHMvRXhwYW5kJztcbmltcG9ydCBNZWFzdXJlIGZyb20gJy4vd2lkZ2V0cy9NZWFzdXJlJztcbmltcG9ydCBDb21wYXNzIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Db21wYXNzJztcbmltcG9ydCBMb2NhdGUgZnJvbSAnZXNyaS93aWRnZXRzL0xvY2F0ZSc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnZXNyaS93aWRnZXRzL1RyYWNrJztcblxuaW1wb3J0IHsgY29uZG9zVGFibGUsIGFkZHJlc3NUYWJsZSwgZmVhdHVyZUxheWVyIH0gZnJvbSAnLi9kYXRhL3NlYXJjaCc7XG5pbXBvcnQgZXNyaSA9IF9fZXNyaTtcbmltcG9ydCBEcmF3IGZyb20gJy4vd2lkZ2V0cy9EcmF3JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi93aWRnZXRzL1NlbGVjdCc7XG5leHBvcnQgY29uc3QgbWVhc3VyZW1lbnQ6IE1lYXN1cmUgPSBuZXcgTWVhc3VyZSgpO1xuZXhwb3J0IGNvbnN0IHNlbGVjdDogU2VsZWN0ID0gbmV3IFNlbGVjdCgpO1xuZXhwb3J0IGxldCBsYXllckxpc3Q6IExheWVyTGlzdDtcbmV4cG9ydCBjb25zdCBwcm9wZXJ0eVNlYXJjaDogUHJvcGVydHlTZWFyY2ggPSBuZXcgUHJvcGVydHlTZWFyY2goKTtcbmV4cG9ydCBjb25zdCBkcmF3V2lkZ2V0OiBEcmF3ID0gbmV3IERyYXcoKTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0V2lkZ2V0cyh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICBuZXcgTGVnZW5kKHsgdmlldywgY29udGFpbmVyOiAnbGVnZW5kRGl2JyB9KTtcbiAgbGF5ZXJMaXN0ID0gbmV3IExheWVyTGlzdCh7XG4gICAgdmlldyxcbiAgICBjb250YWluZXI6ICdsYXllckRpdicsXG4gICAgbGlzdEl0ZW1DcmVhdGVkRnVuY3Rpb246IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBldmVudC5pdGVtO1xuICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSAhPSAnZ3JvdXAnKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtc2xpZGVyJyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21heCcsICcxMDAnKTtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWluLWxhYmVsJywgJzAlJyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21heC1sYWJlbCcsICcxMDAlJyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2xhYmVsLWhhbmRsZXMnLCAnJyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgKGl0ZW0/LmxheWVyLm9wYWNpdHkgKiAxMDApLnRvU3RyaW5nKCkpO1xuICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdkYXRhJywgaXRlbS5sYXllci5pZCk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlU2xpZGVyVXBkYXRlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHZpZXcubWFwLmZpbmRMYXllckJ5SWQoKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0QXR0cmlidXRlKCdkYXRhJykpLm9wYWNpdHkgPVxuICAgICAgICAgICAgcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKSkgLyAxMDA7XG4gICAgICAgIH0pO1xuICAgICAgICBpdGVtLnBhbmVsID0ge1xuICAgICAgICAgIGNvbnRlbnQ6IFtzbGlkZXIsICdsZWdlbmQnXSxcbiAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIG5ldyBQcmludCh7XG4gICAgdmlldyxcbiAgICBjb250YWluZXI6ICdwcmludERpdicsXG4gICAgcHJpbnRTZXJ2aWNlVXJsOlxuICAgICAgJ2h0dHBzOi8vdXRpbGl0eS5hcmNnaXNvbmxpbmUuY29tL2FyY2dpcy9yZXN0L3NlcnZpY2VzL1V0aWxpdGllcy9QcmludGluZ1Rvb2xzL0dQU2VydmVyL0V4cG9ydCUyMFdlYiUyME1hcCUyMFRhc2snXG4gIH0pO1xuICBuZXcgQm9va21hcmtzKHsgdmlldywgY29udGFpbmVyOiAnYm9va21hcmtEaXYnLCBlZGl0aW5nRW5hYmxlZDogdHJ1ZSB9KTtcblxuICBuZXcgQmFzZW1hcEdhbGxlcnkoeyB2aWV3LCBjb250YWluZXI6ICdiYXNlbWFwRGl2JyB9KTtcblxuICBjb25zdCBjb29yZGluYXRlczogZXNyaS5Db29yZGluYXRlQ29udmVyc2lvbiA9IG5ldyBDb29yZGluYXRlQ29udmVyc2lvbih7IHZpZXcgfSk7XG4gIGNvbnN0IGNvb3JkaW5hdGVzRXhwYW5kOiBFeHBhbmQgPSBuZXcgRXhwYW5kKHtcbiAgICBjb250ZW50OiBjb29yZGluYXRlcyxcbiAgICBtb2RlOiAnZmxvYXRpbmcnLFxuICAgIGV4cGFuZEljb25DbGFzczogJ2VzcmktaWNvbi1tYXAtcGluJ1xuICB9KTtcblxuICB2aWV3LnVpLmFkZChjb29yZGluYXRlc0V4cGFuZCwgJ2JvdHRvbS1sZWZ0Jyk7XG5cbiAgdmlldy51aS5hZGQobmV3IENvbXBhc3MoeyB2aWV3OiB2aWV3IH0pLCAndG9wLWxlZnQnKTtcbiAgY29uc3QgbG9jYXRlOiBMb2NhdGUgPSBuZXcgTG9jYXRlKHsgdmlldzogdmlldyB9KTtcbiAgbG9jYXRlLm9uKCdsb2NhdGUtZXJyb3InLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfSk7XG4gIHZpZXcudWkuYWRkKGxvY2F0ZSwgJ3RvcC1sZWZ0Jyk7XG5cbiAgY29uc3QgdHJhY2s6IFRyYWNrID0gbmV3IFRyYWNrKHsgdmlldzogdmlldyB9KTtcbiAgdHJhY2sub24oJ3RyYWNrLWVycm9yJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gIH0pO1xuICB2aWV3LnVpLmFkZCh0cmFjaywgJ3RvcC1sZWZ0Jyk7XG5cbiAgbWVhc3VyZW1lbnQudmlldyA9IHZpZXc7XG4gIG1lYXN1cmVtZW50LmNvbnRhaW5lciA9ICdtZWFzdXJlRGl2JztcbiAgZHJhd1dpZGdldC52aWV3ID0gdmlldztcbiAgZHJhd1dpZGdldC5jb250YWluZXIgPSAnZHJhd0Rpdic7XG5cbiAgLy92aWV3LnVpLmFkZChtZWFzdXJlbWVudCwgJ3RvcC1yaWdodCcpO1xuXG4gIC8vIHByb3BlcnR5U2VhcmNoID0gbmV3IFByb3BlcnR5U2VhcmNoKHtcbiAgLy8gICB2aWV3OiB2aWV3LFxuICAvLyAgIGNvbmRvc1RhYmxlOiBjb25kb3NUYWJsZSxcbiAgLy8gICBhZGRyZXNzVGFibGU6IGFkZHJlc3NUYWJsZSxcbiAgLy8gICBwcm9wZXJ0eUxheWVyOiBmZWF0dXJlTGF5ZXIsXG4gIC8vICAgY29udGFpbmVyOiAnc2lkZURpdidcbiAgLy8gfSk7XG4gIHByb3BlcnR5U2VhcmNoLnZpZXcgPSB2aWV3O1xuICBwcm9wZXJ0eVNlYXJjaC5jb25kb3NUYWJsZSA9IGNvbmRvc1RhYmxlO1xuICBwcm9wZXJ0eVNlYXJjaC5hZGRyZXNzVGFibGUgPSBhZGRyZXNzVGFibGU7XG4gIHByb3BlcnR5U2VhcmNoLnByb3BlcnR5TGF5ZXIgPSBmZWF0dXJlTGF5ZXI7XG4gIHByb3BlcnR5U2VhcmNoLmNvbnRhaW5lciA9ICdzaWRlRGl2JztcbiAgLy92aWV3LnVpLmFkZChsZWdlbmQsICdib3R0b20tbGVmdCcpO1xuICAvL3ZpZXcudWkuYWRkKGxheWVyTGlzdCwgJ3RvcC1yaWdodCcpO1xuICBzZWxlY3QuY29udGFpbmVyID0gJ3NlbGVjdERpdic7XG4gIHNlbGVjdC52aWV3ID0gdmlldztcbiAgc2VsZWN0LmxheWVyID0gZmVhdHVyZUxheWVyO1xuICByZXR1cm4gdmlldztcbn1cbiIsIi8vIHN0eWxlc1xuaW1wb3J0ICcuL2Nzcy9tYWluLmNzcyc7XG5cbi8vIE1hcCBkYXRhXG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL2RhdGEvYXBwJztcbmltcG9ydCB7IGluaXRUaXBzIH0gZnJvbSAnLi90aXBzJztcbmltcG9ydCB7IHNob3dBbGVydCB9IGZyb20gJy4vYWxlcnQnO1xuLy8gTWFwVmlld1xuaW1wb3J0IE1hcFZpZXcgZnJvbSAnZXNyaS92aWV3cy9NYXBWaWV3JztcbmltcG9ydCBnZW9tZXRyeUVuZ2luZSBmcm9tICdlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lJztcbi8vIHdpZGdldCB1dGlsc1xuaW1wb3J0IHsgaW5pdFdpZGdldHMsIG1lYXN1cmVtZW50LCBzZWxlY3QsIHByb3BlcnR5U2VhcmNoLCBsYXllckxpc3QgfSBmcm9tICcuL3dpZGdldHMnO1xuLyoqXG4gKiBJbml0aWFsaXplIGFwcGxpY2F0aW9uXG4gKi9cbmNvbnN0IHZpZXcgPSBuZXcgTWFwVmlldyh7XG4gIGNvbnRhaW5lcjogJ3ZpZXdEaXYnLFxuICBtYXBcbn0pO1xuXG5jb25zdCB0b2dnbGVBY3Rpb24gPSAoYWN0aW9uOiBzdHJpbmcpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsJykuZm9yRWFjaCgocGFuZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKHBhbmVsLnRpdGxlICE9IGFjdGlvbikge1xuICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhbmVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgICBpZiAod2luZG93Lm91dGVyV2lkdGggPCA1MDApIHtcbiAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMzUwcHgnKTtcbiAgICAgIH1cbiAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgaWYgKHBhbmVsLnRpdGxlICE9ICdNZWFzdXJlJykge1xuICAgICAgICAvL21lYXN1cmVtZW50Lm1lYXN1cmVtZW50LmNsZWFyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZWFzdXJlbWVudC5tZWFzdXJlT3BlbmVkKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGFjdGlvbnM6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtYWN0aW9uJyk7XG5hY3Rpb25zPy5mb3JFYWNoKChhY3Rpb246IGFueSkgPT4ge1xuICBhY3Rpb24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IGFueSkgPT4ge1xuICAgIHRvZ2dsZUFjdGlvbihlLnRhcmdldC50ZXh0KTtcbiAgfSk7XG59KTtcblxudmlldy53aGVuKCgpID0+IHtcbiAgdmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgIGlmIChsYXllci50eXBlICE9ICdncm91cCcpIHtcbiAgICAgIGxheWVyLndhdGNoKCd2aXNpYmxlJywgdmlzaWJsZSA9PiB7XG4gICAgICAgIGxheWVyTGlzdC5vcGVyYXRpb25hbEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ubGF5ZXIudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBpdGVtLmNoaWxkcmVuLmZpbmQoaSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBpLmxheWVyID09PSBsYXllcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgIGNoaWxkLnBhbmVsLm9wZW4gPSB2aXNpYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBwcm9wZXJ0eUxheWVyID0gbWFwLmFsbExheWVycy5maW5kKGxheWVyID0+IHtcbiAgICByZXR1cm4gbGF5ZXIudGl0bGUgPT09ICdQcm9wZXJ0eScgJiYgbGF5ZXIudHlwZSA9PT0gJ2ZlYXR1cmUnO1xuICB9KTtcbiAgdmlldy5vbignaG9sZCcsIGUgPT4ge1xuICAgIHByb3BlcnR5U2VhcmNoLmdlb21ldHJ5ID0gZS5tYXBQb2ludDtcbiAgfSk7XG4gIHZpZXdcbiAgICAud2hlbkxheWVyVmlldyhwcm9wZXJ0eUxheWVyKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHByb3BlcnR5U2VhcmNoLnByb3BlcnR5TGF5ZXIgPSBwcm9wZXJ0eUxheWVyIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XG4gICAgICBzZWxlY3Qudmlld01vZGVsLnNrZXRjaC5vbignY3JlYXRlJywgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGV2LnN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgaWYgKHNlbGVjdC52aWV3TW9kZWw/LmJ1ZmZlckRpc3RhbmNlID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljQnVmZmVyKGV2LmdyYXBoaWMuZ2VvbWV0cnksIHNlbGVjdC52aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2UsICdtZXRlcnMnKTtcbiAgICAgICAgICAgIHByb3BlcnR5U2VhcmNoLmdlb21ldHJ5ID0gZyBhcyBfX2VzcmkuUG9seWdvbjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBldi5ncmFwaGljLmdlb21ldHJ5O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0b2dnbGVBY3Rpb24oJ1NlYXJjaCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgocmVhc29uOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlYXNvbik7XG4gICAgICBzaG93QWxlcnQoJ1Byb3BlcnR5IGxheWVyIGRpZCBub3QgbG9hZC4gUGxlYXNlIGNvbnRhY3QgaU1BUFMgSGVscCBEZXNrLicsICdyZWQnKTtcbiAgICB9KTtcbn0pO1xuXG5pZiAod2luZG93Lm91dGVyV2lkdGggPj0gNTAwKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtcGFuZWwnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVQYW5lbERpc21pc3NlZENoYW5nZScsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDBweCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1heGltaXplJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAnbWF4aW1pemUnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1heGltaXplJykuZm9yRWFjaChpdGVtID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGlzbWlzc2VkJyk7XG4gICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21heGltaXplJykge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2ljb24nLCAnbWluaW1pemUnKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpJyk7XG4gICAgfSBlbHNlIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaWNvbicpID09PSAnbWluaW1pemUnKSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtYXhpbWl6ZScpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDozNTBweCcpO1xuICAgIH1cbiAgfSk7XG59KTtcbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcbiAgaWYgKChldmVudD8udGFyZ2V0IGFzIGFueSk/Lm91dGVyV2lkdGggPj0gNTAwKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5xdWVyeVNlbGVjdG9yKCcubWF4aW1pemUnKT8uZ2V0QXR0cmlidXRlKCdpY29uJykgPT09ICdtaW5pbWl6ZScpIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDM1MHB4Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpKSB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDBweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIHNyYyknKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcbnZpZXcud2hlbihpbml0V2lkZ2V0cyk7XG5cbnZpZXcud2hlbihpbml0VGlwcyk7XG5cbi8vZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4vL2l0ZW0/LnNoYWRvd1Jvb3Q/LmlubmVySFRNTC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1jb250YWluZXInKT8uc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6IDEwMCUnKTtcbi8vIChpdGVtLnNoYWRvd1Jvb3QgYXMgYW55KS5pbm5lckhUTUwgKz0gJzxzdHlsZT4uY29udGVudC1jb250YWluZXIgeyBoZWlnaHQ6IDEwMCU7IH0gPC9zdHlsZT4nO1xuLy99KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlaGlkZScsICgpID0+IHtcbiAgdmlldy5tYXAucmVtb3ZlTWFueShcbiAgICB2aWV3Lm1hcC5hbGxMYXllcnNcbiAgICAgIC5maWx0ZXIobGF5ZXIgPT4ge1xuICAgICAgICByZXR1cm4gbGF5ZXIudHlwZSA9PT0gJ2dyb3VwJyAmJiAhKGxheWVyIGFzIF9fZXNyaS5Hcm91cExheWVyKS5sYXllcnMubGVuZ3RoO1xuICAgICAgfSlcbiAgICAgIC50b0FycmF5KClcbiAgKTtcbiAgY29uc3QganNvbiA9ICh2aWV3Lm1hcCBhcyBhbnkpLnRvSlNPTigpO1xuICBqc29uLmluaXRpYWxTdGF0ZS52aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkgPSB2aWV3LmV4dGVudDtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbWFwcycsIEpTT04uc3RyaW5naWZ5KGpzb24pKTtcbiAgLy8gaWYgKGRyYXdXaWRnZXQudmlld01vZGVsLmdyYXBoaWNzLmdyYXBoaWNzLmxlbmd0aCkge1xuICAvLyAgIGRyYXdXaWRnZXQudmlld01vZGVsLmdyYXBoaWNzLmdyYXBoaWNzLnJlbW92ZU1hbnkoXG4gIC8vICAgICBkcmF3V2lkZ2V0LnZpZXdNb2RlbC5ncmFwaGljcy5ncmFwaGljcy5maWx0ZXIoZ3JhcGhpYyA9PiB7XG4gIC8vICAgICAgIHJldHVybiAhZ3JhcGhpYy5nZW9tZXRyeTtcbiAgLy8gICAgIH0pXG4gIC8vICAgKTtcbiAgLy8gICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ltYXBzX2RyYXcnLCBKU09OLnN0cmluZ2lmeSgoZHJhd1dpZGdldC52aWV3TW9kZWwuZ3JhcGhpY3MuZ3JhcGhpY3MgYXMgYW55KS50b0pTT04oKSkpO1xuICAvLyB9XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCBkaXYnKS5mb3JFYWNoKHBhbmVsID0+IHtcbiAgaWYgKHBhbmVsLnNsb3QgPT09ICdoZWFkZXItdHJhaWxpbmctY29udGVudCcpIHtcbiAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3c7Jyk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIndoZW5EZWZpbmVkT25jZSIsIndoZW5EZWZpbmVkIiwicHJvcGVydHkiLCJzdWJjbGFzcyIsImRlY2xhcmVkIiwidHN4IiwiYWxpYXNPZiIsInJlbmRlcmFibGUiLCJDU1MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUtPLElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7RUFDOUIsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLGtDQUFrQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQzdFLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7TUFDeEMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9B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
