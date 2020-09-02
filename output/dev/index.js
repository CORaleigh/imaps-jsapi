
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
define(['esri/WebMap', 'esri/views/MapView', 'esri/geometry/geometryEngine', 'esri/widgets/LayerList', 'esri/widgets/Legend', 'esri/widgets/Print', 'esri/widgets/Bookmarks', 'esri/widgets/BasemapGallery', 'esri/core/accessorSupport/decorators', 'esri/widgets/support/widget', 'esri/widgets/Widget', 'esri/core/Accessor', 'esri/widgets/Search', 'esri/widgets/FeatureTable', 'esri/layers/FeatureLayer', 'esri/layers/GraphicsLayer', 'esri/widgets/Feature', 'esri/core/watchUtils', 'esri/widgets/Search/LayerSearchSource', 'esri/widgets/FeatureTable/FieldColumnConfig', 'esri/PopupTemplate', 'esri/widgets/CoordinateConversion', 'esri/widgets/Expand', 'esri/widgets/Measurement', 'esri/widgets/Compass', 'esri/widgets/Locate', 'esri/widgets/Track', 'esri/Color', 'esri/widgets/Sketch', 'esri/Graphic', 'esri/symbols/TextSymbol'], function (WebMap, MapView, geometryEngine, LayerList, Legend, Print, Bookmarks, BasemapGallery, decorators, widget, Widget, Accessor, Search, FeatureTable, FeatureLayer, GraphicsLayer, Feature, watchUtils, LayerSearchSource, FieldColumnConfig, PopupTemplate, CoordinateConversion, Expand, Measurement, Compass, Locate, Track, Color, Sketch, Graphic, TextSymbol) { 'use strict';

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
          _this.graphics = new GraphicsLayer({ id: 'property-select', listMode: 'hide' });
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
                          _this.graphics.removeAll();
                          result.features.forEach(function (feature) {
                              feature.symbol = result.features.length > 1 ? _this.multiSymbol : _this.singleSymbol;
                              _this.graphics.add(feature);
                          });
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
                                  for (var key in result) {
                                      result[key].features.forEach(function (feature) {
                                          console.log(feature);
                                          oids_1.push(feature.getAttribute('OBJECTID'));
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
                                  _this.getProperty(oids_1);
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
              .queryFeatures({ geometry: geometry, returnGeometry: true, outFields: ['OBJECTID', 'REID'] })
              .then(function (result) {
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
          view.map.add(this.graphics, view.map.allLayers.length - 1);
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
              _this.feature.graphic.symbol = _this.singleSymbol;
              var selected = _this.graphics.graphics.find(function (graphic) {
                  return graphic.getAttribute('selected') === 'true';
              });
              if (selected) {
                  selected.symbol = _this.multiSymbol;
                  selected.setAttribute('selected', 'false');
              }
              console.log('REID: ', feature.getAttribute('REID'));
              var graphic = _this.graphics.graphics.find(function (graphic) {
                  console.log(graphic.getAttribute('REID'));
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
                  _this.getProperty([event.added[0].feature.getAttribute('OBJECTID')], 'table');
                  _this.setFeature(event.added[0].feature, _this.view, [], [event.added[0].feature.getAttribute('OBJECTID')]);
                  event.added[0].feature.setAttribute('selected', 'true');
                  _this.toggleContent('feature');
              }
              _this.featureTable.clearSelection();
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
      __decorate([
          decorators.property()
      ], PropertySearchViewModel.prototype, "name", void 0);
      PropertySearchViewModel = __decorate([
          decorators.subclass('app.widgets.PropertySearch.PropertySearchViewModel')
      ], PropertySearchViewModel);
      return PropertySearchViewModel;
  }(decorators.declared(Accessor)));

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
                  widget.tsx("calcite-block-section", { text: "Fill Opacity" },
                      widget.tsx("calcite-label", { scale: "s" }, "Opacity"),
                      widget.tsx("calcite-slider", { scale: "s", id: "opacity", max: "1", min: "0", value: "0.5", step: "0.1" })),
                  widget.tsx("calcite-block-section", { text: "Outline" },
                      widget.tsx("calcite-label", { scale: "s" }, "Width"),
                      widget.tsx("calcite-slider", { id: "width", max: "10", min: "0", value: "1", step: "0.5" })),
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
      layerList.on('trigger-action', function (event) {
          if (event.action.id === 'property-labels') {
              event.item.layer.labelsVisible = event.action.value;
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
          else {
              layer.watch('visible', function (visible) {
                  var group = layerList.operationalItems.find(function (i) {
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
          debugger;
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
      var _a;
      var i = (_a = item === null || item === void 0 ? void 0 : item.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.content-container');
      i.innerHTML += '<style>.content-container { height: 100%; } </style>';
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
  });
  document.querySelectorAll('calcite-panel div').forEach(function (panel) {
      if (panel.slot === 'header-trailing-content') {
          panel.setAttribute('style', 'display: flex; flex-direction: row;');
      }
  });
  //# sourceMappingURL=index.js.map

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FwcC50cyIsIi4uLy4uL3NyYy90aXBzLnRzIiwiLi4vLi4vc3JjL2FsZXJ0LnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvUHJvcGVydHlTZWFyY2gvUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaC50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9NZWFzdXJlL01lYXN1cmVWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9NZWFzdXJlLnRzeCIsIi4uLy4uL3NyYy9kYXRhL3NlYXJjaC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0RyYXcvRHJhd1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0RyYXcudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvU2VsZWN0L1NlbGVjdFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL1NlbGVjdC50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy50cyIsIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBUaWxlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvVGlsZUxheWVyJztcbi8vaW1wb3J0IFZlY3RvclRpbGVMYXllciBmcm9tICdlc3JpL2xheWVycy9WZWN0b3JUaWxlTGF5ZXInO1xuLy9pbXBvcnQgQXJjR0lTTWFwIGZyb20gJ2VzcmkvTWFwJztcbi8vaW1wb3J0IHsgZmVhdHVyZUxheWVyIH0gZnJvbSAnLi9zZWFyY2gnO1xuaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG5leHBvcnQgbGV0IG1hcCA9IG5ldyBXZWJNYXAoKTtcbm1hcCA9IG5ldyBXZWJNYXAoeyBwb3J0YWxJdGVtOiB7IGlkOiAnOTUwOTI0Mjg3NzRjNGIxZmI2YTNiNmY1ZmVkOWZiYzQnIH0gfSk7XG5pZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpKSB7XG4gIG1hcCA9IFdlYk1hcC5mcm9tSlNPTihKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hcHMnKSBhcyBzdHJpbmcpKTtcbn1cbi8vIGV4cG9ydCBjb25zdCBtYXAgPSBuZXcgQXJjR0lTTWFwKHtcbi8vICAgYmFzZW1hcDoge1xuLy8gICAgIGJhc2VMYXllcnM6IFtcbi8vICAgICAgIG5ldyBUaWxlTGF5ZXIoe1xuLy8gICAgICAgICBwb3J0YWxJdGVtOiB7XG4vLyAgICAgICAgICAgLy8gd29ybGQgaGlsbHNoYWRlXG4vLyAgICAgICAgICAgaWQ6ICcxYjI0MzUzOWY0NTE0YjZiYTM1ZTdkOTk1ODkwZGIxZCdcbi8vICAgICAgICAgfVxuLy8gICAgICAgfSksXG4vLyAgICAgICBuZXcgVmVjdG9yVGlsZUxheWVyKHtcbi8vICAgICAgICAgcG9ydGFsSXRlbToge1xuLy8gICAgICAgICAgIC8vIHRvcG9ncmFwaGljXG4vLyAgICAgICAgICAgaWQ6ICc3ZGM2Y2VhMGIxNzY0YTFmOWFmMmU2NzlmNjQyZjBmNSdcbi8vICAgICAgICAgfVxuLy8gICAgICAgfSlcbi8vICAgICBdXG4vLyAgIH0sXG4vLyAgIGxheWVyczogW2ZlYXR1cmVMYXllcl1cbi8vIH0pO1xuIiwiY29uc3QgdGlwR3JvdXBzID0gW1xuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdzZWxlY3RUaXAnLFxuICAgICAgdGl0bGU6ICdTZWxlY3Rpb24nLFxuICAgICAgdGlwczogW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIGRyYXcgYSBjb250aW51b3VzIGxpbmUgb3IgcG9seWdvbiwgbG9uZyBwcmVzcyBhbmQgZHJhZyB5b3VyIGN1cnNvcicsXG4gICAgICAgICAgdGl0bGU6ICdGcmVlaGFuZCBEcmF3aW5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIGRyYXcgYSBjb250aW51b3VzIGxpbmUgb3IgcG9seWdvbiwgbG9uZyBwcmVzcyBhbmQgZHJhZyB5b3VyIGN1cnNvcicsXG4gICAgICAgICAgdGl0bGU6ICdGcmVlaGFuZCBEcmF3aW5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdwcm9wZXJ0eVNlYXJjaFRpcCcsXG4gICAgICB0aXRsZTogJ1Byb3BlcnR5IFNlYXJjaCcsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ1RvIHNlYXJjaCBieSBhIHBvcnRpb24gb2YgYW4gb3duZXIgbmFtZSBvciBhZGRyZXNzLCBoaXQgZW50ZXIgd2l0aG91dCBzZWxlY3RpbmcgZm9ybSB0aGUgbGlzdCBvZiBzdWdnZXN0aW9ucy4nLFxuICAgICAgICAgIHRpdGxlOiAnV2lsZGNhcmQgU2VhcmNoJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG5dO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaXBzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlwJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS10aXAtbWFuYWdlcicpPy5yZW1vdmUoKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBjb25zdCBtYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAtbWFuYWdlcicpO1xuICAgICAgY29uc3QgdGlwR3JvdXAgPSB0aXBHcm91cHMuZmluZChncm91cCA9PiB7XG4gICAgICAgIHJldHVybiBncm91cC5wYW5lbC5uYW1lID09PSBpdGVtLmlkO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAtZ3JvdXAnKTtcbiAgICAgIGdyb3VwLnNldEF0dHJpYnV0ZSgndGV4dC1ncm91cC10aXRsZScsIHRpcEdyb3VwPy5wYW5lbC50aXRsZSk7XG4gICAgICBtYW5hZ2VyLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICAgIHRpcEdyb3VwPy5wYW5lbC50aXBzLmZvckVhY2godGlwID0+IHtcbiAgICAgICAgY29uc3QgY2FsY2l0ZVRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtdGlwJyk7XG4gICAgICAgIGNhbGNpdGVUaXAuc2V0QXR0cmlidXRlKCdoZWFkaW5nJywgdGlwLnRpdGxlKTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC5pbm5lckhUTUwgPSB0aXAubWVzc2FnZTtcbiAgICAgICAgY2FsY2l0ZVRpcC5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQoY2FsY2l0ZVRpcCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50Py5ib2R5Py5hcHBlbmRDaGlsZChtYW5hZ2VyKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2hvd0FsZXJ0KHRleHQ6IHN0cmluZywgY29sb3I6IHN0cmluZykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLWFsZXJ0Jyk/LnJlbW92ZSgpO1xuICBjb25zdCBhbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbGNpdGUtYWxlcnQnKTtcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZXNzYWdlLnNldEF0dHJpYnV0ZSgnc2xvdCcsICdhbGVydC1tZXNzYWdlJyk7XG4gIG1lc3NhZ2UuaW5uZXJIVE1MID0gdGV4dDtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdjb2xvcicsIGNvbG9yKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gIGFsZXJ0LnNldEF0dHJpYnV0ZSgnaWNvbicsICcnKTtcblxuICBhbGVydC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbGVydCk7XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoJztcbmltcG9ydCBGZWF0dXJlVGFibGUgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZSc7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5cbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInO1xuXG5pbXBvcnQgRmVhdHVyZSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZSc7XG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UsIHdoZW5EZWZpbmVkIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IExheWVyU2VhcmNoU291cmNlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gvTGF5ZXJTZWFyY2hTb3VyY2UnO1xuaW1wb3J0IEZpZWxkQ29sdW1uQ29uZmlnIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlVGFibGUvRmllbGRDb2x1bW5Db25maWcnO1xuaW1wb3J0IFBvcHVwVGVtcGxhdGUgZnJvbSAnZXNyaS9Qb3B1cFRlbXBsYXRlJztcbmltcG9ydCBFeHByZXNzaW9uSW5mbyBmcm9tICdlc3JpL3BvcHVwL0V4cHJlc3Npb25JbmZvJztcbmltcG9ydCBNZW51QnV0dG9uSXRlbSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZVRhYmxlL0dyaWQvc3VwcG9ydC9CdXR0b25NZW51SXRlbSc7XG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLlByb3BlcnR5U2VhcmNoLlByb3BlcnR5U2VhcmNoVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnR5U2VhcmNoVmlld01vZGVsIGV4dGVuZHMgZGVjbGFyZWQoQWNjZXNzb3IpIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQHByb3BlcnR5KCkgYWRkcmVzc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQHByb3BlcnR5KCkgcHJvcGVydHlMYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG5cbiAgQHByb3BlcnR5KCkgc2VhcmNoV2lkZ2V0OiBlc3JpLndpZGdldHNTZWFyY2g7XG4gIEBwcm9wZXJ0eSgpIGZlYXR1cmVUYWJsZTogZXNyaS5GZWF0dXJlVGFibGU7XG4gIEBwcm9wZXJ0eSgpIGZlYXR1cmU6IGVzcmkuRmVhdHVyZTtcbiAgQHByb3BlcnR5KCkgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG5cbiAgQHByb3BlcnR5KCkgbmFtZSA9ICdQcm9wZXJ0eSBTZWFyY2gnO1xuICBncmFwaGljcyA9IG5ldyBHcmFwaGljc0xheWVyKHsgaWQ6ICdwcm9wZXJ0eS1zZWxlY3QnLCBsaXN0TW9kZTogJ2hpZGUnIH0pO1xuICBzaW5nbGVTeW1ib2wgPSB7XG4gICAgdHlwZTogJ3NpbXBsZS1maWxsJyxcbiAgICBzdHlsZTogJ25vbmUnLFxuICAgIG91dGxpbmU6IHsgd2lkdGg6IDIuNSwgY29sb3I6IFsyNTUsIDgyLCA4MiwgMV0gfSxcbiAgICBjb2xvcjogWzI1MywgNDYsIDY1LCAwLjI1XVxuICB9O1xuICBtdWx0aVN5bWJvbCA9IHtcbiAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgIHN0eWxlOiAnbm9uZScsXG4gICAgb3V0bGluZTogeyB3aWR0aDogMi41LCBjb2xvcjogWzI0OSwgMjQzLCAwLCAxXSB9LFxuICAgIGNvbG9yOiBbMjUzLCA0NiwgNjUsIDAuMjVdXG4gIH07XG5cbiAgaGlnaGxpZ2h0czogYW55O1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ2NvbmRvc1RhYmxlJywgdGhpcy5pbml0U2VhcmNoLmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkKHRoaXMsICdnZW9tZXRyeScsIHRoaXMuc2VhcmNoQnlHZW9tZXRyeS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHNlYXJjaEJ5R2VvbWV0cnkoZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnkpIHtcbiAgICB0aGlzLnByb3BlcnR5TGF5ZXJcbiAgICAgIC5xdWVyeUZlYXR1cmVzKHsgZ2VvbWV0cnk6IGdlb21ldHJ5LCByZXR1cm5HZW9tZXRyeTogdHJ1ZSwgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgLy8gY29uc3QgbGF5ZXJWaWV3ID0gdGhpcy52aWV3LmxheWVyVmlld3MuZmluZCh2aWV3ID0+IHtcbiAgICAgICAgLy8gICByZXR1cm4gdmlldy5sYXllciA9PT0gdGhpcy5wcm9wZXJ0eUxheWVyO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gaWYgKGxheWVyVmlldykge1xuICAgICAgICAvLyBpZiAodGhpcy5oaWdobGlnaHRzKSB7XG4gICAgICAgIC8vICAgdGhpcy5oaWdobGlnaHRzLnJlbW92ZSgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHRoaXMuaGlnaGxpZ2h0cyA9IChsYXllclZpZXcgYXMgZXNyaS5GZWF0dXJlTGF5ZXJWaWV3KS5oaWdobGlnaHQocmVzdWx0LmZlYXR1cmVzKTtcbiAgICAgICAgLy8gdGhpcy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcbiAgICAgICAgLy8gcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICAgIC8vICAgZmVhdHVyZS5zeW1ib2wgPSB0aGlzLm11bHRpU3ltYm9sIGFzIGFueTtcbiAgICAgICAgLy8gICB0aGlzLmdyYXBoaWNzLmFkZChmZWF0dXJlKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwID0gdGhpcy5wcm9wZXJ0eUxheWVyLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICByZXR1cm4gci5uYW1lID09PSAnUFJPUEVSVFlfQ09ORE8nO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BlcnR5TGF5ZXJcbiAgICAgICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwPy5pZCwgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxldCBmZWF0dXJlczogYW55W10gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzLmNvbmNhdChyZXN1bHRba2V5XS5mZWF0dXJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgICAgICAgICBmaWVsZHM6IHRoaXMuY29uZG9zVGFibGUuZmllbGRzLFxuICAgICAgICAgICAgICBzb3VyY2U6IGZlYXR1cmVzLFxuICAgICAgICAgICAgICB0aXRsZTogJ1NlbGVjdGVkIHByb3BlcnRpZXMnLFxuICAgICAgICAgICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICAgICAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmUoZmVhdHVyZXNbMF0sIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsIFtdLCBbZmVhdHVyZXNbMF0uZ2V0T2JqZWN0SWQoKV0pO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLnJlbmRlck5vdygpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MsIHZpZXcubWFwLmFsbExheWVycy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIGFyY2FkZUV4cHJlc3Npb25JbmZvcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnYm9tLWRvYy1udW0nLFxuICAgICAgdGl0bGU6ICdib20tZG9jLW51bScsXG4gICAgICBleHByZXNzaW9uOlxuICAgICAgICBcInZhciByZXN1bHRzID0gRmVhdHVyZVNldEJ5UmVsYXRpb25zaGlwTmFtZSgkZmVhdHVyZSwgJ0NPTkRPX0JPT0tTJywgWycqJ10sIGZhbHNlKTsgcmV0dXJuIEZpcnN0KHJlc3VsdHMpLkJPTV9ET0NfTlVNO1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGVlZC1kb2MtbnVtJyxcbiAgICAgIHRpdGxlOiAnZGVlZC1kb2MtbnVtJyxcbiAgICAgIGV4cHJlc3Npb246XG4gICAgICAgIFwidmFyIHJlc3VsdHMgPSBGZWF0dXJlU2V0QnlSZWxhdGlvbnNoaXBOYW1lKCRmZWF0dXJlLCAnQ09ORE9fQk9PS1MnLCBbJyonXSwgZmFsc2UpOyByZXR1cm4gRmlyc3QocmVzdWx0cykuREVFRF9ET0NfTlVNO1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICAgIHRpdGxlOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICdXaGVuKElzRW1wdHkoJGZlYXR1cmUuQUREUjMpLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIzKSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgICAgdGl0bGU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgJ1wiQnVpbGRpbmcgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkJMREdfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJMYW5kIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5MQU5EX1ZBTCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG90YWwgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLlRPVEFMX1ZBTFVFX0FTU0QnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGVlZC1ib29rLXBhZ2UnLFxuICAgICAgdGl0bGU6ICdkZWVkLWJvb2stcGFnZScsXG4gICAgICBleHByZXNzaW9uOiAnXCJCb29rIFwiKyRmZWF0dXJlLkRFRURfQk9PSytcIiBQYWdlIFwiKyRmZWF0dXJlLkRFRURfUEFHRSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdnZW5lcmFsJyxcbiAgICAgIHRpdGxlOiAnZ2VuZXJhbCcsXG4gICAgICBleHByZXNzaW9uOlxuICAgICAgICAnXCJQSU5cIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKyRmZWF0dXJlLlBJTl9OVU0rXCIgXCIrJGZlYXR1cmUuUElOX0VYVCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgICAnXCJSRUlEXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5SRUlEK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJDaXR5XCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICAgJ1Byb3BlcigkZmVhdHVyZS5DSVRZX0RFQ09ERSkrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkp1cmlzZGljdGlvblwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAgICckZmVhdHVyZS5QTEFOTklOR19KVVJJU0RJQ1RJT04rVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIlRvd25zaGlwXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStQcm9wZXIoJGZlYXR1cmUuVE9XTlNISVBfREVDT0RFKSdcbiAgICB9XG4gIF0gYXMgRXhwcmVzc2lvbkluZm9bXTtcblxuICBwb3B1cFRlbXBsYXRlID0gbmV3IFBvcHVwVGVtcGxhdGUoe1xuICAgIGV4cHJlc3Npb25JbmZvczogdGhpcy5hcmNhZGVFeHByZXNzaW9uSW5mb3MsXG4gICAgY29udGVudDogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHRleHQ6XG4gICAgICAgICAgJzxoMSBjbGFzcz1cInRleHQtZ3JlZW5cIj57U0lURV9BRERSRVNTfTwvaDE+JyArXG4gICAgICAgICAgJzxoMj5HZW5lcmFsPC9oMj57ZXhwcmVzc2lvbi9nZW5lcmFsfScgK1xuICAgICAgICAgICc8aDI+T3duZXI8L2gyPntPV05FUn08YnIvPntleHByZXNzaW9uL21haWxpbmctYWRkcmVzc30nICtcbiAgICAgICAgICAnPGgyPlZhbHVhdGlvbjwvaDI+e2V4cHJlc3Npb24vcHJvcGVydHktdmFsdWVzfScgK1xuICAgICAgICAgICc8aDI+U2FsZSBJbmZvcm1hdGlvbjwvaDI+e1RPVFNBTFBSSUNFfTxici8+e1NBTEVfREFURX0nICtcbiAgICAgICAgICAnPGgyPkRlZWRzPC9oMj57ZXhwcmVzc2lvbi9kZWVkLWJvb2stcGFnZX0nICtcbiAgICAgICAgICAnPGJyLz48c3Ryb25nPkRlZWQgRGF0ZTwvc3Ryb25nPjxici8+e0RFRURfREFURX08YnIvPicgK1xuICAgICAgICAgICc8YnIvPkxlZ2FsIERlc2NyaXB0aW9uPGJyLz57UFJPUERFU0N9PGJyLz4nICtcbiAgICAgICAgICAnPGEgaHJlZj1cImh0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9ib29rc3dlYi9wZGZ2aWV3LmFzcHg/ZG9jaWQ9e2V4cHJlc3Npb24vYm9tLWRvYy1udW19JlJlY29yZERhdGU9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+Qm9vayBvZiBNYXBzPC9hPjxici8+PGEgaHJlZj1cImh0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9ib29rc3dlYi9wZGZ2aWV3LmFzcHg/ZG9jaWQ9e2V4cHJlc3Npb24vZGVlZC1kb2MtbnVtfSZSZWNvcmREYXRlPVwiIHRhcmdldD1cIl9ibGFua1wiPkRlZWQ8L2E+J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ21lZGlhJyxcbiAgICAgICAgbWVkaWFJbmZvczogW11cbiAgICAgIH1cbiAgICBdXG4gIH0pO1xuXG4gIGdldFByb3BlcnR5ID0gKG9pZHM6IGFueVtdLCBzb3VyY2U/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmNvbmRvc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgIHJldHVybiByLm5hbWUgPT09ICdDT05ET19QUk9QRVJUWSc7XG4gICAgfSk7XG4gICAgdGhpcy5jb25kb3NUYWJsZVxuICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHtcbiAgICAgICAgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsXG4gICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZSxcbiAgICAgICAgICAgIG91dFNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ29UbyhyZXN1bHQuZmVhdHVyZXMpO1xuICAgICAgICAgICAgLy8gY29uc3QgbGF5ZXJWaWV3ID0gdGhpcy52aWV3LmxheWVyVmlld3MuZmluZCh2aWV3ID0+IHtcbiAgICAgICAgICAgIC8vICAgcmV0dXJuIHZpZXcubGF5ZXIgPT09IHRoaXMucHJvcGVydHlMYXllcjtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8gaWYgKGxheWVyVmlldykge1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaGlnaGxpZ2h0cykge1xuICAgICAgICAgICAgLy8gICB0aGlzLmhpZ2hsaWdodHMucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyB0aGlzLmhpZ2hsaWdodHMgPSAobGF5ZXJWaWV3IGFzIGVzcmkuRmVhdHVyZUxheWVyVmlldykuaGlnaGxpZ2h0KHJlc3VsdC5mZWF0dXJlcyk7XG4gICAgICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmZWF0dXJlID0+IHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlLnN5bWJvbCA9IHJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPiAxID8gKHRoaXMubXVsdGlTeW1ib2wgYXMgYW55KSA6ICh0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGZlYXR1cmUpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgc2VhcmNoQ29tcGxldGUgPSAoZXZlbnQ6IGVzcmkuU2VhcmNoU2VhcmNoQ29tcGxldGVFdmVudCkgPT4ge1xuICAgIGlmICghdGhpcy5zZWFyY2hXaWRnZXQudmlld01vZGVsLnNlbGVjdGVkU3VnZ2VzdGlvbikge1xuICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgIGxldCB3aGVyZSA9XG4gICAgICAgIFwiT1dORVIgbGlrZSAnXCIgK1xuICAgICAgICBldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICBcIiUnIE9SIFJFSUQgbGlrZSAnXCIgK1xuICAgICAgICBldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICBcIiUnIE9SIFBJTl9OVU0gbGlrZSAnXCIgK1xuICAgICAgICBldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICBcIidcIjtcbiAgICAgIGxldCB0YWJsZUZlYXR1cmVzOiBhbnlbXSA9IFtdO1xuICAgICAgdGhpcy5jb25kb3NUYWJsZS5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6IHdoZXJlLCBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgdGFibGVGZWF0dXJlcyA9IHJlc3VsdC5mZWF0dXJlcztcbiAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB3aGVyZSA9IFwiQUREUkVTUyBsaWtlICclXCIgKyBldmVudC5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkgKyBcIiUnXCI7XG4gICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogd2hlcmUsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuYWRkcmVzc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdBRERSRVNTRVNfQ09ORE8nO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICBvaWRzLnB1c2goZi5nZXRPYmplY3RJZCgpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocmVsYXRpb25zaGlwICYmIG9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFkZHJlc3NUYWJsZVxuICAgICAgICAgICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwLmlkLCBvYmplY3RJZHM6IG9pZHMsIG91dEZpZWxkczogWycqJ10gfSlcbiAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlRmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgICAgICAgICAgICAgZmllbGRzOiB0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIHNvdXJjZTogdGFibGVGZWF0dXJlcyxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICAgICAgICAgICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICAgICAgICAgICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5yZW5kZXJOb3coKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICAgICAgICAgIGZpZWxkczogdGhpcy5jb25kb3NUYWJsZS5maWVsZHMsXG4gICAgICAgICAgICAgIHNvdXJjZTogdGFibGVGZWF0dXJlcyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgICAgICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLnJlbmRlck5vdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQubnVtUmVzdWx0cyk7XG4gICAgICBpZiAoZXZlbnQubnVtUmVzdWx0cykge1xuICAgICAgICBjb25zdCBsYXllciA9IChldmVudC5yZXN1bHRzWzBdLnNvdXJjZSBhcyBMYXllclNlYXJjaFNvdXJjZSkubGF5ZXIgYXMgRmVhdHVyZUxheWVyO1xuICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICBldmVudC5yZXN1bHRzWzBdLnJlc3VsdHMuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goci5mZWF0dXJlLmdldE9iamVjdElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxheWVyLmxheWVySWQgPT09IDQpIHtcbiAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXAgPSBsYXllci5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgICByZXR1cm4gci5uYW1lID09PSAnQUREUkVTU0VTX0NPTkRPJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocmVsYXRpb25zaGlwICYmIG9pZHMpIHtcbiAgICAgICAgICAgIGxheWVyXG4gICAgICAgICAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXAuaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIG9pZHMucHVzaChmZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvcGVydHkob2lkcyk7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmUubGF5ZXIgPSB0aGlzLmNvbmRvc1RhYmxlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmUoZmVhdHVyZSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IHRoaXMuY29uZG9zVGFibGUuZmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogW2ZlYXR1cmVdLFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvbmRvc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyBvYmplY3RJZHM6IG9pZHMsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlOiBlc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZShyZXN1bHQuZmVhdHVyZXNbMF0sIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsIFtdLCBvaWRzKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgICAgICAgICAgZmllbGRzOiB0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcyxcbiAgICAgICAgICAgICAgc291cmNlOiByZXN1bHQuZmVhdHVyZXMsXG4gICAgICAgICAgICAgIHRpdGxlOiAnU2VsZWN0ZWQgcHJvcGVydGllcycsXG4gICAgICAgICAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgICAgICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHNldEZlYXR1cmUoZmVhdHVyZTogZXNyaS5HcmFwaGljLCB2aWV3OiBlc3JpLk1hcFZpZXcsIG1lZGlhSW5mb3M6IGFueVtdLCBvaWRzOiBhbnlbXSkge1xuICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIGZlYXR1cmUnKTtcbiAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmNvbmRvc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgIHJldHVybiByLm5hbWUgPT09ICdDT05ET19QSE9UT1MnO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlbGF0aW9uc2hpcCk7XG4gICAgbWVkaWFJbmZvcyA9IFtdO1xuICAgIHRoaXMuY29uZG9zVGFibGVcbiAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXA/LmlkLCBvYmplY3RJZHM6IG9pZHMsIG91dEZpZWxkczogWycqJ10gfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgbWVkaWFJbmZvcy5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgICBjYXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBzb3VyY2VVUkw6XG4gICAgICAgICAgICAgICAgICAnaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL3JlYWxlc3RhdGUvcGhvdG9zL212aWRlby8nICtcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdJTUFHRURJUicpICtcbiAgICAgICAgICAgICAgICAgICcvJyArXG4gICAgICAgICAgICAgICAgICBmZWF0dXJlLmdldEF0dHJpYnV0ZSgnSU1BR0VOQU1FJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25kb3NUYWJsZS5wb3B1cFRlbXBsYXRlLmNvbnRlbnRbMV0ubWVkaWFJbmZvcyA9IG1lZGlhSW5mb3M7XG4gICAgICAgIGZlYXR1cmUubGF5ZXIgPSB0aGlzLmNvbmRvc1RhYmxlO1xuICAgICAgICBmZWF0dXJlLnBvcHVwVGVtcGxhdGUgPSAoZmVhdHVyZS5sYXllciBhcyBlc3JpLkZlYXR1cmVMYXllcikucG9wdXBUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5mZWF0dXJlLmdyYXBoaWMgPSBmZWF0dXJlO1xuICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYy5zeW1ib2wgPSB0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5ncmFwaGljcy5ncmFwaGljcy5maW5kKGdyYXBoaWMgPT4ge1xuICAgICAgICAgIHJldHVybiBncmFwaGljLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSA9PT0gJ3RydWUnO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgc2VsZWN0ZWQuc3ltYm9sID0gdGhpcy5tdWx0aVN5bWJvbCBhcyBhbnk7XG4gICAgICAgICAgc2VsZWN0ZWQuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdSRUlEOiAnLCBmZWF0dXJlLmdldEF0dHJpYnV0ZSgnUkVJRCcpKTtcbiAgICAgICAgY29uc3QgZ3JhcGhpYyA9IHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MuZmluZChncmFwaGljID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhncmFwaGljLmdldEF0dHJpYnV0ZSgnUkVJRCcpKTtcbiAgICAgICAgICByZXR1cm4gZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ1JFSUQnKSA9PT0gZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ1JFSUQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChncmFwaGljKSB7XG4gICAgICAgICAgZ3JhcGhpYy5zeW1ib2wgPSB0aGlzLnNpbmdsZVN5bWJvbCBhcyBhbnk7XG4gICAgICAgICAgZ3JhcGhpYy5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgICB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLnJlb3JkZXIoZ3JhcGhpYywgdGhpcy5ncmFwaGljcy5ncmFwaGljcy5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBleHBvcnRUYWJsZSgpIHtcbiAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllci5xdWVyeUZlYXR1cmVzKHsgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBsZXQgY3N2ID0gJyc7XG4gICAgICByZXN1bHQuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICBjc3YgKz0gZmllbGQuYWxpYXMgKyAnLCc7XG4gICAgICB9KTtcbiAgICAgIGNzdiArPSAnXFxyXFxuJztcbiAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmZWF0dXJlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBpZiAoa2V5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2RhdGUnKSkge1xuICAgICAgICAgICAgY3N2ICs9ICdcIicgKyBuZXcgRGF0ZShmZWF0dXJlLmF0dHJpYnV0ZXNba2V5XSkudG9EYXRlU3RyaW5nKCkgKyAnXCIsJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdhY3JlcycpKSB7XG4gICAgICAgICAgICBjc3YgKz0gJ1wiJyArIHBhcnNlRmxvYXQoZmVhdHVyZS5hdHRyaWJ1dGVzW2tleV0pLnRvRml4ZWQoMikgKyAnXCIsJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3N2ICs9ICdcIicgKyBmZWF0dXJlLmF0dHJpYnV0ZXNba2V5XSArICdcIiwnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjc3YgKz0gJ1xcclxcbic7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGV4cG9ydGVkRmlsZW5tYWUgPSAnaW1hcHNfZXhwb3J0LmNzdic7XG5cbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY3N2XSwgeyB0eXBlOiAndGV4dC9jc3Y7Y2hhcnNldD11dGYtODsnIH0pO1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGlmIChsaW5rLmRvd25sb2FkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gZmVhdHVyZSBkZXRlY3Rpb25cbiAgICAgICAgLy8gQnJvd3NlcnMgdGhhdCBzdXBwb3J0IEhUTUw1IGRvd25sb2FkIGF0dHJpYnV0ZVxuICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGV4cG9ydGVkRmlsZW5tYWUpO1xuICAgICAgICBsaW5rLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdFNlYXJjaChjb25kb3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXIpIHtcbiAgICBjb25zdCB0YWJsZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAgeyBuYW1lOiAnU0lURV9BRERSRVNTJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnQWRkcmVzcycgfSxcbiAgICAgICAgeyBuYW1lOiAnT1dORVInLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdPd25lcicgfSxcbiAgICAgICAgeyBuYW1lOiAnUElOX05VTScsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ1BJTicgfSxcbiAgICAgICAgeyBuYW1lOiAnUkVJRCcsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ1JFSUQnIH1cbiAgICAgIF0sXG4gICAgICBzb3VyY2U6IFtdLFxuICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCdcbiAgICB9KTtcbiAgICB0aGlzLmZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7IHZpZXc6IHRoaXMudmlldyB9KTtcbiAgICB0aGlzLmZlYXR1cmVUYWJsZSA9IG5ldyBGZWF0dXJlVGFibGUoe1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgbGF5ZXI6IHRhYmxlTGF5ZXIsXG4gICAgICBmaWVsZENvbmZpZ3M6IFtcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnU0lURV9BRERSRVNTJyxcbiAgICAgICAgICBsYWJlbDogJ0FkZHJlc3MnLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnT1dORVInLFxuICAgICAgICAgIGxhYmVsOiAnT3duZXInLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnUElOX05VTScsXG4gICAgICAgICAgbGFiZWw6ICdQSU4nLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEZpZWxkQ29sdW1uQ29uZmlnKHtcbiAgICAgICAgICBuYW1lOiAnUkVJRCcsXG4gICAgICAgICAgbGFiZWw6ICdSRUlEJyxcbiAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICBtZW51Q29uZmlnOiB7XG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgKHtcbiAgICAgICAgICAgIGxhYmVsOiAnRXhwb3J0J1xuICAgICAgICAgIH0gYXMgdW5rbm93bikgYXMgTWVudUJ1dHRvbkl0ZW1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGJ1dHRvbjogTWVudUJ1dHRvbkl0ZW0gPSB0aGlzLmZlYXR1cmVUYWJsZT8ubWVudUNvbmZpZz8uaXRlbXM/LmZpbmQoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5sYWJlbCA9PT0gJ0V4cG9ydCc7XG4gICAgfSkgYXMgTWVudUJ1dHRvbkl0ZW07XG4gICAgYnV0dG9uLmNsaWNrRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICB0aGlzLmV4cG9ydFRhYmxlKCk7XG4gICAgfTtcbiAgICBidXR0b24uY2xpY2tGdW5jdGlvbi5iaW5kKHRoaXMuZmVhdHVyZVRhYmxlKTtcblxuICAgIHRoaXMuZmVhdHVyZVRhYmxlLm9uKCdzZWxlY3Rpb24tY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmFkZGVkLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmdldFByb3BlcnR5KFtldmVudC5hZGRlZFswXS5mZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKV0sICd0YWJsZScpO1xuICAgICAgICB0aGlzLnNldEZlYXR1cmUoXG4gICAgICAgICAgZXZlbnQuYWRkZWRbMF0uZmVhdHVyZSxcbiAgICAgICAgICB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LFxuICAgICAgICAgIFtdLFxuICAgICAgICAgIFtldmVudC5hZGRlZFswXS5mZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKV1cbiAgICAgICAgKTtcbiAgICAgICAgZXZlbnQuYWRkZWRbMF0uZmVhdHVyZS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICB9XG4gICAgICAodGhpcy5mZWF0dXJlVGFibGUgYXMgYW55KS5jbGVhclNlbGVjdGlvbigpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VhcmNoV2lkZ2V0ID0gbmV3IFNlYXJjaCh7XG4gICAgICBhbGxQbGFjZWhvbGRlcjogJ0FkZHJlc3MsIG93bmVyLCBQSU4sIG9yIFJFSUQnLFxuICAgICAgaW5jbHVkZURlZmF1bHRTb3VyY2VzOiBmYWxzZSxcbiAgICAgIGNvbnRhaW5lcjogJ3NlYXJjaCcsXG4gICAgICBzb3VyY2VzOiBbXG4gICAgICAgIG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgbGF5ZXI6IHRoaXMuYWRkcmVzc1RhYmxlLFxuICAgICAgICAgIHNlYXJjaEZpZWxkczogWydBRERSRVNTJ10sXG4gICAgICAgICAgZGlzcGxheUZpZWxkOiAnQUREUkVTUycsXG4gICAgICAgICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgICAgb3V0RmllbGRzOiBbJ0FERFJFU1MnLCAnUkVBX1JFSUQnXSxcbiAgICAgICAgICBuYW1lOiAnU2l0ZSBBZGRyZXNzJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDIyMiBXIEhBUkdFVFQnXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnT1dORVInXSxcbiAgICAgICAgICBkaXNwbGF5RmllbGQ6ICdPV05FUicsXG4gICAgICAgICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgICAgb3V0RmllbGRzOiBbJ09XTkVSJywgJ1JFSUQnLCAnT0JKRUNUSUQnXSxcbiAgICAgICAgICBuYW1lOiAnT3duZXInLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogU01JVEgsIEpPSE4nXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnUElOX05VTSddLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ1BJTl9OVU0nLFxuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgIG91dEZpZWxkczogWydQSU5fTlVNJywgJ1JFSUQnLCAnT0JKRUNUSUQnXSxcbiAgICAgICAgICBuYW1lOiAnUElOJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4YW1wbGU6IDA3MTIzNDU2NzgnXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTGF5ZXJTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgIGxheWVyOiBjb25kb3NUYWJsZSxcbiAgICAgICAgICBzZWFyY2hGaWVsZHM6IFsnUkVJRCddLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ1JFSUQnLFxuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlLFxuICAgICAgICAgIG91dEZpZWxkczogWydSRUlEJywgJ09CSkVDVElEJ10sXG4gICAgICAgICAgbmFtZTogJ1JFSUQnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMDEyMzQ1NidcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldC52aWV3TW9kZWwud2F0Y2goJ3Jlc3VsdHMnLCBldmVudCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hXaWRnZXQub24oJ3NlYXJjaC1jb21wbGV0ZScsIHRoaXMuc2VhcmNoQ29tcGxldGUpO1xuXG4gICAgLy9jb25zb2xlLmxvZygocmVzdWx0IGFzIGFueSkudGFyZ2V0LnNlbGVjdGVkU3VnZ2VzdGlvbik7XG4gIH1cbiAgdG9nZ2xlQ29udGVudCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSAndGFibGUnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKT8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZScpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZUl0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbCBmcm9tICcuL1Byb3BlcnR5U2VhcmNoL1Byb3BlcnR5U2VhcmNoVmlld01vZGVsJztcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlTZWFyY2hQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBwcm9wZXJ0eUxheWVyPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIGNvbmRvc1RhYmxlPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIGFkZHJlc3NUYWJsZT86IGVzcmkuRmVhdHVyZUxheWVyO1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBwcm9wZXJ0eXNlYXJjaC1iYXNlJ1xufTtcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuUHJvcGVydHlTZWFyY2gnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlTZWFyY2ggZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuY29uZG9zVGFibGUnKVxuICBjb25kb3NUYWJsZTogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYWRkcmVzc1RhYmxlJylcbiAgYWRkcmVzc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5wcm9wZXJ0eUxheWVyJylcbiAgcHJvcGVydHlMYXllcjogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuc2VhcmNoV2lkZ2V0JylcbiAgc2VhcmNoV2lkZ2V0OiBlc3JpLndpZGdldHNTZWFyY2g7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZmVhdHVyZVRhYmxlJylcbiAgZmVhdHVyZVRhYmxlOiBlc3JpLkZlYXR1cmVUYWJsZTtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5mZWF0dXJlJylcbiAgZmVhdHVyZTogZXNyaS5GZWF0dXJlO1xuICBAYWxpYXNPZigndmlld01vZGVsLmdlb21ldHJ5JylcbiAgZ2VvbWV0cnk6IGVzcmkuR2VvbWV0cnk7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubmFtZScpXG4gIEByZW5kZXJhYmxlKClcbiAgbmFtZSA9ICcnO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogUHJvcGVydHlTZWFyY2hWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IFByb3BlcnR5U2VhcmNoVmlld01vZGVsID0gbmV3IFByb3BlcnR5U2VhcmNoVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IFByb3BlcnR5U2VhcmNoUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX2NyZWF0ZVNlYXJjaCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zZWFyY2hXaWRnZXQpIHtcbiAgICAgIHRoaXMuc2VhcmNoV2lkZ2V0LmNvbnRhaW5lciA9ICdzZWFyY2gnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZVRhYmxlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmZlYXR1cmVUYWJsZSkge1xuICAgICAgdGhpcy5mZWF0dXJlVGFibGUuY29udGFpbmVyID0gJ3RhYmxlJztcbiAgICB9XG4gIH07XG4gIF9jcmVhdGVGZWF0dXJlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmZlYXR1cmUpIHtcbiAgICAgIHRoaXMuZmVhdHVyZS5jb250YWluZXIgPSAnZmVhdHVyZURpdic7XG4gICAgfVxuICB9O1xuXG4gIGN1cnJlbnRSYWRpb0J1dHRvbiA9ICdsaXN0JztcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2lkZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAvLyBjYW4gSSBnZXQgY2hlY2tlZCBhbmQgdmFsdWUgbGlrZSB0aGlzP1xuICAgICAgICBpZiAoZS50YXJnZXQ/LmNoZWNrZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldD8udmFsdWUpO1xuICAgICAgICAgIHRoaXMudmlld01vZGVsLnRvZ2dsZUNvbnRlbnQoZS50YXJnZXQ/LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVTZWFyY2h9IGlkPVwic2VhcmNoXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZVRhYmxlfSBpZD1cInRhYmxlXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJmZWF0dXJlXCIgY2xhc3M9XCJoaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiZmVhdHVyZURpdlwiIGFmdGVyQ3JlYXRlPXt0aGlzLl9jcmVhdGVGZWF0dXJlfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSBjaGVja2VkIHZhbHVlPVwidGFibGVcIiBpZD1cInRhYmxlSXRlbVwiPlxuICAgICAgICAgICAgTGlzdFxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdmFsdWU9XCJmZWF0dXJlXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgRGV0YWlsc1xuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmltcG9ydCB7IGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgTWVhc3VyZW1lbnQgZnJvbSAnZXNyaS93aWRnZXRzL01lYXN1cmVtZW50JztcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5NZWFzdXJlLk1lYXN1cmVWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZVZpZXdNb2RlbCBleHRlbmRzIGRlY2xhcmVkKEFjY2Vzc29yKSB7XG4gIEBwcm9wZXJ0eSgpIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG4gIG1lYXN1cmVtZW50OiBlc3JpLk1lYXN1cmVtZW50O1xuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gIH1cbiAgbWVhc3VyZU9wZW5lZCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVhc3VyZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwJykgYXMgYW55KS5zZWxlY3RlZEl0ZW0udGl0bGU7XG4gICAgaWYgKHNlbGVjdGVkICE9ICdjbGVhcicpIHtcbiAgICAgIHRoaXMubWVhc3VyZW1lbnQuYWN0aXZlVG9vbCA9IHNlbGVjdGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lYXN1cmVtZW50LmNsZWFyKCk7XG4gICAgfVxuICB9XG4gIGluaXRNZWFzdXJlKCkge1xuICAgIHRoaXMubWVhc3VyZW1lbnQgPSBuZXcgTWVhc3VyZW1lbnQoeyB2aWV3OiB0aGlzLnZpZXcsIGNvbnRhaW5lcjogJ21lYXN1cmVXaWRnZXQnIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5pbXBvcnQgTWVhc3VyZVZpZXdNb2RlbCBmcm9tICcuL01lYXN1cmUvTWVhc3VyZVZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVhc3VyZVByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IG1lYXN1cmUtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTWVhc3VyZScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWFzdXJlIGV4dGVuZHMgZGVjbGFyZWQoV2lkZ2V0KSB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLm1lYXN1cmVtZW50JylcbiAgbWVhc3VyZW1lbnQ6IGVzcmkuTWVhc3VyZW1lbnQ7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuaW5pdE1lYXN1cmUnKVxuICBpbml0TWVhc3VyZTogRnVuY3Rpb247XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubWVhc3VyZU9wZW5lZCcpXG4gIG1lYXN1cmVPcGVuZWQ6IEZ1bmN0aW9uO1xuICBAYWxpYXNPZigndmlld01vZGVsLm5hbWUnKVxuICBAcmVuZGVyYWJsZSgpXG4gIG5hbWUgPSAnJztcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IE1lYXN1cmVWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IE1lYXN1cmVWaWV3TW9kZWwgPSBuZXcgTWVhc3VyZVZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBNZWFzdXJlUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX21lYXN1cmVDcmVhdGVkID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdE1lYXN1cmUoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVhc3VyZURpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQ/LmNoZWNrZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldD8udGl0bGUpO1xuICAgICAgICAgIGlmIChlLnRhcmdldD8udGl0bGUgPT09ICdjbGVhcicpIHtcbiAgICAgICAgICAgIHRoaXMubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudC5hY3RpdmVUb29sID0gZS50YXJnZXQ/LnRpdGxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAgd2lkdGg9XCJmdWxsXCI+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSBjaGVja2VkIHRpdGxlPVwiZGlzdGFuY2VcIiB2YWx1ZT1cImRpc3RhbmNlXCIgaWQ9XCJ0YWJsZUl0ZW1cIiBpY29uPVwibWVhc3VyZVwiPlxuICAgICAgICAgICAgTGluZVxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdGl0bGU9XCJhcmVhXCIgdmFsdWU9XCJhcmVhXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGljb249XCJtZWFzdXJlLWFyZWFcIj5cbiAgICAgICAgICAgIEFyZWFcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIHRpdGxlPVwiY2xlYXJcIiB2YWx1ZT1cImNsZWFyXCIgaWQ9XCJmZWF0dXJlSXRlbVwiIGljb249XCJ0cmFzaFwiPlxuICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9tZWFzdXJlQ3JlYXRlZH0gaWQ9XCJtZWFzdXJlV2lkZ2V0XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgUG9wdXBUZW1wbGF0ZSBmcm9tICdlc3JpL1BvcHVwVGVtcGxhdGUnO1xuaW1wb3J0IEV4cHJlc3Npb25JbmZvIGZyb20gJ2VzcmkvcG9wdXAvRXhwcmVzc2lvbkluZm8nO1xuXG5jb25zdCBhcmNhZGVFeHByZXNzaW9uSW5mb3MgPSBbXG4gIHtcbiAgICBuYW1lOiAnYm9tLWRvYy1udW0nLFxuICAgIHRpdGxlOiAnYm9tLWRvYy1udW0nLFxuICAgIGV4cHJlc3Npb246XG4gICAgICBcInZhciByZXN1bHRzID0gRmVhdHVyZVNldEJ5UmVsYXRpb25zaGlwTmFtZSgkZmVhdHVyZSwgJ0NPTkRPX0JPT0tTJywgWycqJ10sIGZhbHNlKTsgcmV0dXJuIEZpcnN0KHJlc3VsdHMpLkJPTV9ET0NfTlVNO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZGVlZC1kb2MtbnVtJyxcbiAgICB0aXRsZTogJ2RlZWQtZG9jLW51bScsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgIFwidmFyIHJlc3VsdHMgPSBGZWF0dXJlU2V0QnlSZWxhdGlvbnNoaXBOYW1lKCRmZWF0dXJlLCAnQ09ORE9fQk9PS1MnLCBbJyonXSwgZmFsc2UpOyByZXR1cm4gRmlyc3QocmVzdWx0cykuREVFRF9ET0NfTlVNO1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICB0aXRsZTogJ21haWxpbmctYWRkcmVzcycsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdXaGVuKElzRW1wdHkoJGZlYXR1cmUuQUREUjMpLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIzKSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgIHRpdGxlOiAncHJvcGVydHktdmFsdWVzJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1wiQnVpbGRpbmcgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkJMREdfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJMYW5kIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5MQU5EX1ZBTCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG90YWwgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLlRPVEFMX1ZBTFVFX0FTU0QnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZGVlZC1ib29rLXBhZ2UnLFxuICAgIHRpdGxlOiAnZGVlZC1ib29rLXBhZ2UnLFxuICAgIGV4cHJlc3Npb246ICdcIkJvb2sgXCIrJGZlYXR1cmUuREVFRF9CT09LK1wiIFBhZ2UgXCIrJGZlYXR1cmUuREVFRF9QQUdFJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2dlbmVyYWwnLFxuICAgIHRpdGxlOiAnZ2VuZXJhbCcsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgICdcIlBJTlwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJGZlYXR1cmUuUElOX05VTStcIiBcIiskZmVhdHVyZS5QSU5fRVhUK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAnXCJSRUlEXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5SRUlEK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJDaXR5XCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICdQcm9wZXIoJGZlYXR1cmUuQ0lUWV9ERUNPREUpK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJKdXJpc2RpY3Rpb25cIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgJyRmZWF0dXJlLlBMQU5OSU5HX0pVUklTRElDVElPTitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG93bnNoaXBcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1Byb3BlcigkZmVhdHVyZS5UT1dOU0hJUF9ERUNPREUpJ1xuICB9XG5dIGFzIEV4cHJlc3Npb25JbmZvW107XG5cbmNvbnN0IHBvcHVwVGVtcGxhdGUgPSBuZXcgUG9wdXBUZW1wbGF0ZSh7XG4gIGV4cHJlc3Npb25JbmZvczogYXJjYWRlRXhwcmVzc2lvbkluZm9zLFxuICAvLyBjb250ZW50OiAoZXZlbnQ6IGFueSkgPT4ge1xuICAvLyAgIGNvbnN0IGdyYXBoaWMgPSBldmVudC5ncmFwaGljO1xuICAvLyAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWdyZWVuJyk7XG4gIC8vICAgY29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAvLyAgIGRpdi50ZXh0Q29udGVudCA9IGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdTSVRFX0FERFJFU1MnKTtcbiAgLy8gICByZXR1cm4gY29udGFpbmVyO1xuICAvLyB9LFxuICBjb250ZW50OiBbXG4gICAge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDpcbiAgICAgICAgJzxoMSBjbGFzcz1cInRleHQtZ3JlZW5cIj57U0lURV9BRERSRVNTfTwvaDE+JyArXG4gICAgICAgICc8aDI+R2VuZXJhbDwvaDI+e2V4cHJlc3Npb24vZ2VuZXJhbH0nICtcbiAgICAgICAgJzxoMj5Pd25lcjwvaDI+e09XTkVSfTxici8+e2V4cHJlc3Npb24vbWFpbGluZy1hZGRyZXNzfScgK1xuICAgICAgICAnPGgyPlZhbHVhdGlvbjwvaDI+e2V4cHJlc3Npb24vcHJvcGVydHktdmFsdWVzfScgK1xuICAgICAgICAnPGgyPlNhbGUgSW5mb3JtYXRpb248L2gyPntUT1RTQUxQUklDRX08YnIvPntTQUxFX0RBVEV9JyArXG4gICAgICAgICc8aDI+RGVlZHM8L2gyPntleHByZXNzaW9uL2RlZWQtYm9vay1wYWdlfScgK1xuICAgICAgICAnPGJyLz48c3Ryb25nPkRlZWQgRGF0ZTwvc3Ryb25nPjxici8+e0RFRURfREFURX08YnIvPicgK1xuICAgICAgICAnPGJyLz5MZWdhbCBEZXNjcmlwdGlvbjxici8+e1BST1BERVNDfTxici8+JyArXG4gICAgICAgICc8YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9ib20tZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Cb29rIG9mIE1hcHM8L2E+PGJyLz48YSBocmVmPVwiaHR0cDovL3NlcnZpY2VzLndha2Vnb3YuY29tL2Jvb2tzd2ViL3BkZnZpZXcuYXNweD9kb2NpZD17ZXhwcmVzc2lvbi9kZWVkLWRvYy1udW19JlJlY29yZERhdGU9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGVlZDwvYT4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnbWVkaWEnLFxuICAgICAgbWVkaWFJbmZvczogW11cbiAgICB9XG4gIF1cbn0pO1xuXG5leHBvcnQgY29uc3QgZmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gIHBvcnRhbEl0ZW06IHtcbiAgICBpZDogJzA4MDUwYmYwNjdiYjRiMjBhZGVhNGIwYjRmMGEzOWUzJ1xuICB9LFxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9XG59KTtcblxuZXhwb3J0IGNvbnN0IGNvbmRvc1RhYmxlID0gbmV3IEZlYXR1cmVMYXllcih7XG4gIHBvcnRhbEl0ZW06IHtcbiAgICBpZDogJzA4MDUwYmYwNjdiYjRiMjBhZGVhNGIwYjRmMGEzOWUzJ1xuICB9LFxuICBsYXllcklkOiAxLFxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9LFxuICBwb3B1cFRlbXBsYXRlOiBwb3B1cFRlbXBsYXRlXG59KTtcbmNvbmRvc1RhYmxlLmxvYWQoKTtcbmV4cG9ydCBjb25zdCBhZGRyZXNzVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnMDgwNTBiZjA2N2JiNGIyMGFkZWE0YjBiNGYwYTM5ZTMnXG4gIH0sXG4gIGxheWVySWQ6IDQsXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbn0pO1xuYWRkcmVzc1RhYmxlLmxvYWQoKTtcbmV4cG9ydCAqIGZyb20gJy4vYXBwJztcbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5pbXBvcnQgU2tldGNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gnO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnO1xuaW1wb3J0IFRleHRTeW1ib2wgZnJvbSAnZXNyaS9zeW1ib2xzL1RleHRTeW1ib2wnO1xuXG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5pbXBvcnQgeyBtZWFzdXJlbWVudCB9IGZyb20gJy4uLy4uL3dpZGdldHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkRyYXcuRHJhd1ZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3Vmlld01vZGVsIGV4dGVuZHMgZGVjbGFyZWQoQWNjZXNzb3IpIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBuYW1lID0gJ1NsYWdhdGhvcic7XG4gIHNrZXRjaDogU2tldGNoO1xuICBncmFwaGljczogR3JhcGhpY3NMYXllcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgdGV4dENvbG9yOiBlc3JpLkNvbG9yO1xuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGluaXREcmF3KCkge1xuICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiAnaGlkZScgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljcyk7XG5cbiAgICAvLyB0aGlzLnZpZXcud2hlbkxheWVyVmlldyh0aGlzLmdyYXBoaWNzKS50aGVuKCgpID0+IHtcbiAgICAvLyAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYXBzX2RyYXcnKSkge1xuICAgIC8vXG4gICAgLy8gICAgIHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MuYWRkTWFueShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hcHNfZHJhdycpIGFzIHN0cmluZykpO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgdGhpcy5za2V0Y2ggPSBuZXcgU2tldGNoKHsgdmlldzogdGhpcy52aWV3LCBjb250YWluZXI6ICdza2V0Y2hEaXYnLCBsYXllcjogdGhpcy5ncmFwaGljcywgY3JlYXRpb25Nb2RlOiAnc2luZ2xlJyB9KTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG4gICAgKHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBhbnkpLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IgPSBuZXcgQ29sb3IoW1syNTUsIDAsIDAsIDAuNV1dKTtcbiAgICAodGhpcy5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wgYXMgYW55KS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcblxuICAgIHRoaXMuc2tldGNoLndhdGNoKCdhY3RpdmVUb29sJywgdG9vbCA9PiB7XG4gICAgICBpZiAodG9vbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLm9uKCdjcmVhdGUnLCBlID0+IHtcbiAgICAgIGlmIChlLnN0YXRlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIG1lYXN1cmVtZW50Py5tZWFzdXJlbWVudD8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICAgIGlmIChlLnN0YXRlID09PSAnY29tcGxldGUnICYmIHRoaXMubGFiZWw/Lmxlbmd0aCkge1xuICAgICAgICBsZXQgbGFiZWxQb2ludDogZXNyaS5HZW9tZXRyeSA9IGUuZ3JhcGhpYy5nZW9tZXRyeTtcbiAgICAgICAgaWYgKGUuZ3JhcGhpYy5nZW9tZXRyeS50eXBlID09PSAncG9seWdvbicpIHtcbiAgICAgICAgICBsYWJlbFBvaW50ID0gKGUuZ3JhcGhpYy5nZW9tZXRyeSBhcyBlc3JpLlBvbHlnb24pLmNlbnRyb2lkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGcgPSBuZXcgR3JhcGhpYyh7XG4gICAgICAgICAgZ2VvbWV0cnk6IGxhYmVsUG9pbnQsXG4gICAgICAgICAgc3ltYm9sOiBuZXcgVGV4dFN5bWJvbCh7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLmxhYmVsLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMudGV4dENvbG9yLFxuICAgICAgICAgICAgaGFsb0NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgaGFsb1NpemU6IDEsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ3RvcCcsXG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAncmlnaHQnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYWRkKGcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBDb2xvciBmcm9tICdlc3JpL0NvbG9yJztcbmltcG9ydCBEcmF3Vmlld01vZGVsIGZyb20gJy4vRHJhdy9EcmF3Vmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBEcmF3UHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgZHJhdy1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5EcmF3JylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXcgZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubGFiZWwnKVxuICBsYWJlbDogc3RyaW5nO1xuICBAYWxpYXNPZigndmlld01vZGVsLnRleHRDb2xvcicpXG4gIHRleHRDb2xvcjogQ29sb3I7XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogRHJhd1ZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogRHJhd1ZpZXdNb2RlbCA9IG5ldyBEcmF3Vmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IERyYXdQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfZHJhd1VwZGF0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnZpZXdNb2RlbC5za2V0Y2gpIHtcbiAgICAgIHRoaXMudmlld01vZGVsLmluaXREcmF3KCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGwnKTtcbiAgICBmaWxsPy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJyNmZjAwMDAnKTtcbiAgICBmaWxsPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlQ29sb3JDaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCBoZXg6IHN0cmluZyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICB9KTtcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpbmUnKTtcbiAgICBsaW5lPy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJyNmZjAwMDAnKTtcbiAgICBsaW5lPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlQ29sb3JDaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICBjb25zdCBoZXg6IHN0cmluZyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sIGFzIGVzcmkuU2ltcGxlTWFya2VyU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgfSk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGFjaXR5Jyk7XG4gICAgb3BhY2l0eT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVNsaWRlclVwZGF0ZScsIChlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbC5jb2xvci5hID0gZS50YXJnZXQudmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3Qgd2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lkdGgnKTtcbiAgICB3aWR0aD8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVNsaWRlclVwZGF0ZScsIChlOiBhbnkpID0+IHtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlsaW5lU3ltYm9sIGFzIGVzcmkuU2ltcGxlTGluZVN5bWJvbCkud2lkdGggPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sIGFzIGVzcmkuU2ltcGxlTWFya2VyU3ltYm9sKS5vdXRsaW5lLndpZHRoID0gcGFyc2VGbG9hdChcbiAgICAgICAgZS50YXJnZXQudmFsdWVcbiAgICAgICk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5Z29uU3ltYm9sIGFzIGVzcmkuU2ltcGxlRmlsbFN5bWJvbCkub3V0bGluZS53aWR0aCA9IHBhcnNlRmxvYXQoXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsJyk7XG4gICAgbGFiZWw/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVJbnB1dEJsdXInLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldCgnbGFiZWwnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG4gICAgY29uc3QgdGV4dENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRDb2xvcicpO1xuICAgIHRleHRDb2xvcj8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ3RleHRDb2xvcicsIENvbG9yLmZyb21IZXgoZS50YXJnZXQudmFsdWUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyVXBkYXRlPXt0aGlzLl9kcmF3VXBkYXRlZH0gaWQ9XCJza2V0Y2hEaXZcIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtYmxvY2sgaGVhZGluZz1cIlNldHRpbmdzXCIgb3BlbiBjb2xsYXBzaWJsZT5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJDb2xvclwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+RmlsbCBDb2xvcjwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICAgIDxjYWxjaXRlLWNvbG9yIGlkPVwiZmlsbFwiIGhpZGVDaGFubmVscyBoaWRlU2F2ZWQgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBzY2FsZT1cInNcIj48L2NhbGNpdGUtY29sb3I+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5MaW5lIENvbG9yPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtY29sb3IgaWQ9XCJsaW5lXCIgaGlkZUNoYW5uZWxzIGhpZGVTYXZlZCBhcHBlYXJhbmNlPVwibWluaW1hbFwiIHNjYWxlPVwic1wiPjwvY2FsY2l0ZS1jb2xvcj5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJGaWxsIE9wYWNpdHlcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPk9wYWNpdHk8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1zbGlkZXIgc2NhbGU9XCJzXCIgaWQ9XCJvcGFjaXR5XCIgbWF4PVwiMVwiIG1pbj1cIjBcIiB2YWx1ZT1cIjAuNVwiIHN0ZXA9XCIwLjFcIj48L2NhbGNpdGUtc2xpZGVyPlxuICAgICAgICAgIDwvY2FsY2l0ZS1ibG9jay1zZWN0aW9uPlxuICAgICAgICAgIDxjYWxjaXRlLWJsb2NrLXNlY3Rpb24gdGV4dD1cIk91dGxpbmVcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPldpZHRoPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtc2xpZGVyIGlkPVwid2lkdGhcIiBtYXg9XCIxMFwiIG1pbj1cIjBcIiB2YWx1ZT1cIjFcIiBzdGVwPVwiMC41XCI+PC9jYWxjaXRlLXNsaWRlcj5cbiAgICAgICAgICA8L2NhbGNpdGUtYmxvY2stc2VjdGlvbj5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJMYWJlbGluZ1wiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+TGFiZWw8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1pbnB1dCBzY2FsZT1cInNcIiBpZD1cImxhYmVsXCIgdHlwZT1cInRleHRhcmVhXCI+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICAgICAgPGNhbGNpdGUtY29sb3IgaWQ9XCJ0ZXh0Q29sb3JcIiBoaWRlQ2hhbm5lbHMgaGlkZVNhdmVkIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgc2NhbGU9XCJzXCI+PC9jYWxjaXRlLWNvbG9yPlxuICAgICAgICAgIDwvY2FsY2l0ZS1ibG9jay1zZWN0aW9uPlxuICAgICAgICA8L2NhbGNpdGUtYmxvY2s+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgU2tldGNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gnO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5cbmltcG9ydCB7IGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgeyBtZWFzdXJlbWVudCB9IGZyb20gJy4uLy4uL3dpZGdldHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLlNlbGVjdC5TZWxlY3RWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0Vmlld01vZGVsIGV4dGVuZHMgZGVjbGFyZWQoQWNjZXNzb3IpIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuICBza2V0Y2g6IGVzcmkuU2tldGNoO1xuICBidWZmZXJEaXN0YW5jZTogbnVtYmVyO1xuICBncmFwaGljczogR3JhcGhpY3NMYXllcjtcblxuICBpbml0U2tldGNoKCkge1xuICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiAnaGlkZScgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljcyk7XG4gICAgdGhpcy5za2V0Y2ggPSBuZXcgU2tldGNoKHtcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIGNvbnRhaW5lcjogJ3NlbGVjdFdpZGdldCcsXG4gICAgICBsYXllcjogdGhpcy5ncmFwaGljcyxcbiAgICAgIGNyZWF0aW9uTW9kZTogJ3NpbmdsZSdcbiAgICB9KTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwudXBkYXRlT25HcmFwaGljQ2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLnNrZXRjaC5vbignY3JlYXRlJywgZXYgPT4ge1xuICAgICAgaWYgKGV2LnN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG4gICAgICB9XG4gICAgICBpZiAoZXYuc3RhdGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLndhdGNoKCdhY3RpdmVUb29sJywgdG9vbCA9PiB7XG4gICAgICBpZiAodG9vbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgICB0aGlzLnNldCgnYnVmZmVyRGlzdGFuY2UnLCAwKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IFNlbGVjdFZpZXdNb2RlbCBmcm9tICcuL1NlbGVjdC9TZWxlY3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIGxheWVyPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IHNlbGVjdC1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5TZWxlY3QnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgZGVjbGFyZWQoV2lkZ2V0KSB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxheWVyJylcbiAgbGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLnNrZXRjaCcpXG4gIHNrZXRjaDogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2UnKVxuICBidWZmZXJEaXN0YW5jZTogbnVtYmVyO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IFNlbGVjdFZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogU2VsZWN0Vmlld01vZGVsID0gbmV3IFNlbGVjdFZpZXdNb2RlbCgpO1xuICBfc2tldGNoQ3JlYXRlZCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMudmlld01vZGVsLnNrZXRjaCkge1xuICAgICAgdGhpcy52aWV3TW9kZWwuaW5pdFNrZXRjaCgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IFNlbGVjdFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldjogYW55KSB7XG4gICAgdGhpcy5zZXQoJ2J1ZmZlckRpc3RhbmNlJywgcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3REaXYgY2FsY2l0ZS1pbnB1dCcpPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGV2OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGV2KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJVcGRhdGU9e3RoaXMuX3NrZXRjaENyZWF0ZWR9IGlkPVwic2VsZWN0V2lkZ2V0XCI+PC9kaXY+XG4gICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPkJ1ZmZlciBEaXN0YW5jZSAoZmVldCkgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICA8Y2FsY2l0ZS1pbnB1dFxuICAgICAgICAgIHNjYWxlPVwic1wiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgbWF4PVwiMjAwMFwiXG4gICAgICAgICAgc3RlcD1cIjUwXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy52aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2V9XG4gICAgICAgID48L2NhbGNpdGUtaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCIvLyBXaWRnZXRzXG5pbXBvcnQgTGF5ZXJMaXN0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9MYXllckxpc3QnO1xuaW1wb3J0IExlZ2VuZCBmcm9tICdlc3JpL3dpZGdldHMvTGVnZW5kJztcbmltcG9ydCBQcmludCBmcm9tICdlc3JpL3dpZGdldHMvUHJpbnQnO1xuaW1wb3J0IEJvb2ttYXJrcyBmcm9tICdlc3JpL3dpZGdldHMvQm9va21hcmtzJztcbmltcG9ydCBCYXNlbWFwR2FsbGVyeSBmcm9tICdlc3JpL3dpZGdldHMvQmFzZW1hcEdhbGxlcnknO1xuLy9pbXBvcnQgTWVhc3VyZW1lbnQgZnJvbSAnZXNyaS93aWRnZXRzL01lYXN1cmVtZW50JztcbmltcG9ydCBQcm9wZXJ0eVNlYXJjaCBmcm9tICcuL3dpZGdldHMvUHJvcGVydHlTZWFyY2gnO1xuaW1wb3J0IENvb3JkaW5hdGVDb252ZXJzaW9uIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Db29yZGluYXRlQ29udmVyc2lvbic7XG5pbXBvcnQgRXhwYW5kIGZyb20gJ2Vzcmkvd2lkZ2V0cy9FeHBhbmQnO1xuaW1wb3J0IE1lYXN1cmUgZnJvbSAnLi93aWRnZXRzL01lYXN1cmUnO1xuaW1wb3J0IENvbXBhc3MgZnJvbSAnZXNyaS93aWRnZXRzL0NvbXBhc3MnO1xuaW1wb3J0IExvY2F0ZSBmcm9tICdlc3JpL3dpZGdldHMvTG9jYXRlJztcbmltcG9ydCBUcmFjayBmcm9tICdlc3JpL3dpZGdldHMvVHJhY2snO1xuXG5pbXBvcnQgeyBjb25kb3NUYWJsZSwgYWRkcmVzc1RhYmxlLCBmZWF0dXJlTGF5ZXIgfSBmcm9tICcuL2RhdGEvc2VhcmNoJztcbmltcG9ydCBlc3JpID0gX19lc3JpO1xuaW1wb3J0IERyYXcgZnJvbSAnLi93aWRnZXRzL0RyYXcnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL3dpZGdldHMvU2VsZWN0JztcbmV4cG9ydCBjb25zdCBtZWFzdXJlbWVudDogTWVhc3VyZSA9IG5ldyBNZWFzdXJlKCk7XG5leHBvcnQgY29uc3Qgc2VsZWN0OiBTZWxlY3QgPSBuZXcgU2VsZWN0KCk7XG5leHBvcnQgbGV0IGxheWVyTGlzdDogTGF5ZXJMaXN0O1xuZXhwb3J0IGNvbnN0IHByb3BlcnR5U2VhcmNoOiBQcm9wZXJ0eVNlYXJjaCA9IG5ldyBQcm9wZXJ0eVNlYXJjaCgpO1xuZXhwb3J0IGNvbnN0IGRyYXdXaWRnZXQ6IERyYXcgPSBuZXcgRHJhdygpO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRXaWRnZXRzKHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gIG5ldyBMZWdlbmQoeyB2aWV3LCBjb250YWluZXI6ICdsZWdlbmREaXYnIH0pO1xuICBsYXllckxpc3QgPSBuZXcgTGF5ZXJMaXN0KHtcbiAgICB2aWV3LFxuICAgIGNvbnRhaW5lcjogJ2xheWVyRGl2JyxcbiAgICBsaXN0SXRlbUNyZWF0ZWRGdW5jdGlvbjogZXZlbnQgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGV2ZW50Lml0ZW07XG4gICAgICBpZiAoaXRlbS5sYXllci50eXBlICE9ICdncm91cCcpIHtcbiAgICAgICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1zbGlkZXInKTtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWluJywgJzAnKTtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWF4JywgJzEwMCcpO1xuICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtaW4tbGFiZWwnLCAnMCUnKTtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWF4LWxhYmVsJywgJzEwMCUnKTtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbGFiZWwtaGFuZGxlcycsICcnKTtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAoaXRlbT8ubGF5ZXIub3BhY2l0eSAqIDEwMCkudG9TdHJpbmcoKSk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBpdGVtLmxheWVyLmlkKTtcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCBldmVudCA9PiB7XG4gICAgICAgICAgdmlldy5tYXAuZmluZExheWVyQnlJZCgoZXZlbnQudGFyZ2V0IGFzIGFueSkuZ2V0QXR0cmlidXRlKCdkYXRhJykpLm9wYWNpdHkgPVxuICAgICAgICAgICAgcGFyc2VJbnQoKGV2ZW50Py50YXJnZXQgYXMgYW55KT8uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKSAvIDEwMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0ZW0ucGFuZWwgPSB7XG4gICAgICAgICAgY29udGVudDogW3NsaWRlciwgJ2xlZ2VuZCddLFxuICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpdGVtLmxheWVyLnRpdGxlID09PSAnUHJvcGVydHknKSB7XG4gICAgICAgICAgaXRlbS5hY3Rpb25zU2VjdGlvbnMgPSBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Nob3cgTGFiZWxzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndG9nZ2xlJyxcbiAgICAgICAgICAgICAgICBpZDogJ3Byb3BlcnR5LWxhYmVscycsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ubGF5ZXIubGFiZWxzVmlzaWJsZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGxheWVyTGlzdC5vbigndHJpZ2dlci1hY3Rpb24nLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmFjdGlvbi5pZCA9PT0gJ3Byb3BlcnR5LWxhYmVscycpIHtcbiAgICAgIChldmVudC5pdGVtLmxheWVyIGFzIGVzcmkuRmVhdHVyZUxheWVyKS5sYWJlbHNWaXNpYmxlID0gKGV2ZW50LmFjdGlvbiBhcyBlc3JpLkFjdGlvblRvZ2dsZSkudmFsdWU7XG4gICAgfVxuICB9KTtcbiAgbmV3IFByaW50KHtcbiAgICB2aWV3LFxuICAgIGNvbnRhaW5lcjogJ3ByaW50RGl2JyxcbiAgICBwcmludFNlcnZpY2VVcmw6XG4gICAgICAnaHR0cHM6Ly91dGlsaXR5LmFyY2dpc29ubGluZS5jb20vYXJjZ2lzL3Jlc3Qvc2VydmljZXMvVXRpbGl0aWVzL1ByaW50aW5nVG9vbHMvR1BTZXJ2ZXIvRXhwb3J0JTIwV2ViJTIwTWFwJTIwVGFzaydcbiAgfSk7XG4gIG5ldyBCb29rbWFya3MoeyB2aWV3LCBjb250YWluZXI6ICdib29rbWFya0RpdicsIGVkaXRpbmdFbmFibGVkOiB0cnVlIH0pO1xuXG4gIG5ldyBCYXNlbWFwR2FsbGVyeSh7IHZpZXcsIGNvbnRhaW5lcjogJ2Jhc2VtYXBEaXYnIH0pO1xuXG4gIGNvbnN0IGNvb3JkaW5hdGVzOiBlc3JpLkNvb3JkaW5hdGVDb252ZXJzaW9uID0gbmV3IENvb3JkaW5hdGVDb252ZXJzaW9uKHsgdmlldyB9KTtcbiAgY29uc3QgY29vcmRpbmF0ZXNFeHBhbmQ6IEV4cGFuZCA9IG5ldyBFeHBhbmQoe1xuICAgIGNvbnRlbnQ6IGNvb3JkaW5hdGVzLFxuICAgIG1vZGU6ICdmbG9hdGluZycsXG4gICAgZXhwYW5kSWNvbkNsYXNzOiAnZXNyaS1pY29uLW1hcC1waW4nXG4gIH0pO1xuXG4gIHZpZXcudWkuYWRkKGNvb3JkaW5hdGVzRXhwYW5kLCAnYm90dG9tLWxlZnQnKTtcblxuICB2aWV3LnVpLmFkZChuZXcgQ29tcGFzcyh7IHZpZXc6IHZpZXcgfSksICd0b3AtbGVmdCcpO1xuICBjb25zdCBsb2NhdGU6IExvY2F0ZSA9IG5ldyBMb2NhdGUoeyB2aWV3OiB2aWV3IH0pO1xuICBsb2NhdGUub24oJ2xvY2F0ZS1lcnJvcicsIChldmVudDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9KTtcbiAgdmlldy51aS5hZGQobG9jYXRlLCAndG9wLWxlZnQnKTtcblxuICBjb25zdCB0cmFjazogVHJhY2sgPSBuZXcgVHJhY2soeyB2aWV3OiB2aWV3IH0pO1xuICB0cmFjay5vbigndHJhY2stZXJyb3InLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfSk7XG4gIHZpZXcudWkuYWRkKHRyYWNrLCAndG9wLWxlZnQnKTtcblxuICBtZWFzdXJlbWVudC52aWV3ID0gdmlldztcbiAgbWVhc3VyZW1lbnQuY29udGFpbmVyID0gJ21lYXN1cmVEaXYnO1xuICBkcmF3V2lkZ2V0LnZpZXcgPSB2aWV3O1xuICBkcmF3V2lkZ2V0LmNvbnRhaW5lciA9ICdkcmF3RGl2JztcblxuICAvL3ZpZXcudWkuYWRkKG1lYXN1cmVtZW50LCAndG9wLXJpZ2h0Jyk7XG5cbiAgLy8gcHJvcGVydHlTZWFyY2ggPSBuZXcgUHJvcGVydHlTZWFyY2goe1xuICAvLyAgIHZpZXc6IHZpZXcsXG4gIC8vICAgY29uZG9zVGFibGU6IGNvbmRvc1RhYmxlLFxuICAvLyAgIGFkZHJlc3NUYWJsZTogYWRkcmVzc1RhYmxlLFxuICAvLyAgIHByb3BlcnR5TGF5ZXI6IGZlYXR1cmVMYXllcixcbiAgLy8gICBjb250YWluZXI6ICdzaWRlRGl2J1xuICAvLyB9KTtcbiAgcHJvcGVydHlTZWFyY2gudmlldyA9IHZpZXc7XG4gIHByb3BlcnR5U2VhcmNoLmNvbmRvc1RhYmxlID0gY29uZG9zVGFibGU7XG4gIHByb3BlcnR5U2VhcmNoLmFkZHJlc3NUYWJsZSA9IGFkZHJlc3NUYWJsZTtcbiAgcHJvcGVydHlTZWFyY2gucHJvcGVydHlMYXllciA9IGZlYXR1cmVMYXllcjtcbiAgcHJvcGVydHlTZWFyY2guY29udGFpbmVyID0gJ3NpZGVEaXYnO1xuICAvL3ZpZXcudWkuYWRkKGxlZ2VuZCwgJ2JvdHRvbS1sZWZ0Jyk7XG4gIC8vdmlldy51aS5hZGQobGF5ZXJMaXN0LCAndG9wLXJpZ2h0Jyk7XG4gIHNlbGVjdC5jb250YWluZXIgPSAnc2VsZWN0RGl2JztcbiAgc2VsZWN0LnZpZXcgPSB2aWV3O1xuICBzZWxlY3QubGF5ZXIgPSBmZWF0dXJlTGF5ZXI7XG4gIHJldHVybiB2aWV3O1xufVxuIiwiLy8gc3R5bGVzXG5pbXBvcnQgJy4vY3NzL21haW4uY3NzJztcblxuLy8gTWFwIGRhdGFcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4vZGF0YS9hcHAnO1xuaW1wb3J0IHsgaW5pdFRpcHMgfSBmcm9tICcuL3RpcHMnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0IH0gZnJvbSAnLi9hbGVydCc7XG4vLyBNYXBWaWV3XG5pbXBvcnQgTWFwVmlldyBmcm9tICdlc3JpL3ZpZXdzL01hcFZpZXcnO1xuaW1wb3J0IGdlb21ldHJ5RW5naW5lIGZyb20gJ2VzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmUnO1xuLy8gd2lkZ2V0IHV0aWxzXG5pbXBvcnQgeyBpbml0V2lkZ2V0cywgbWVhc3VyZW1lbnQsIHNlbGVjdCwgcHJvcGVydHlTZWFyY2gsIGxheWVyTGlzdCB9IGZyb20gJy4vd2lkZ2V0cyc7XG4vKipcbiAqIEluaXRpYWxpemUgYXBwbGljYXRpb25cbiAqL1xuY29uc3QgdmlldyA9IG5ldyBNYXBWaWV3KHtcbiAgY29udGFpbmVyOiAndmlld0RpdicsXG4gIG1hcFxufSk7XG5cbmNvbnN0IHRvZ2dsZUFjdGlvbiA9IChhY3Rpb246IHN0cmluZykgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWwnKS5mb3JFYWNoKChwYW5lbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAocGFuZWwudGl0bGUgIT0gYWN0aW9uKSB7XG4gICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFuZWwucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICAgIGlmICh3aW5kb3cub3V0ZXJXaWR0aCA8IDUwMCkge1xuICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiAzNTBweCcpO1xuICAgICAgfVxuICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBpZiAocGFuZWwudGl0bGUgIT0gJ01lYXN1cmUnKSB7XG4gICAgICAgIC8vbWVhc3VyZW1lbnQubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lYXN1cmVtZW50Lm1lYXN1cmVPcGVuZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aW9uczogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1hY3Rpb24nKTtcbmFjdGlvbnM/LmZvckVhY2goKGFjdGlvbjogYW55KSA9PiB7XG4gIGFjdGlvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XG4gICAgdG9nZ2xlQWN0aW9uKGUudGFyZ2V0LnRleHQpO1xuICB9KTtcbn0pO1xuXG52aWV3LndoZW4oKCkgPT4ge1xuICB2aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgaWYgKGxheWVyLnR5cGUgIT0gJ2dyb3VwJykge1xuICAgICAgbGF5ZXIud2F0Y2goJ3Zpc2libGUnLCB2aXNpYmxlID0+IHtcbiAgICAgICAgbGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5sYXllci50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGl0ZW0uY2hpbGRyZW4uZmluZChpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGkubGF5ZXIgPT09IGxheWVyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgY2hpbGQucGFuZWwub3BlbiA9IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXllci53YXRjaCgndmlzaWJsZScsIHZpc2libGUgPT4ge1xuICAgICAgICBjb25zdCBncm91cCA9IGxheWVyTGlzdC5vcGVyYXRpb25hbEl0ZW1zLmZpbmQoaSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGkubGF5ZXIgPT09IGxheWVyO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgZ3JvdXAub3BlbiA9IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHByb3BlcnR5TGF5ZXIgPSBtYXAuYWxsTGF5ZXJzLmZpbmQobGF5ZXIgPT4ge1xuICAgIHJldHVybiBsYXllci50aXRsZSA9PT0gJ1Byb3BlcnR5JyAmJiBsYXllci50eXBlID09PSAnZmVhdHVyZSc7XG4gIH0pO1xuICB2aWV3Lm9uKCdob2xkJywgZSA9PiB7XG4gICAgcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBlLm1hcFBvaW50O1xuICAgIGRlYnVnZ2VyO1xuICB9KTtcbiAgdmlld1xuICAgIC53aGVuTGF5ZXJWaWV3KHByb3BlcnR5TGF5ZXIpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgcHJvcGVydHlTZWFyY2gucHJvcGVydHlMYXllciA9IHByb3BlcnR5TGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgICAgIHNlbGVjdC52aWV3TW9kZWwuc2tldGNoLm9uKCdjcmVhdGUnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXYuc3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICBpZiAoc2VsZWN0LnZpZXdNb2RlbD8uYnVmZmVyRGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ2VvbWV0cnlFbmdpbmUuZ2VvZGVzaWNCdWZmZXIoZXYuZ3JhcGhpYy5nZW9tZXRyeSwgc2VsZWN0LnZpZXdNb2RlbC5idWZmZXJEaXN0YW5jZSwgJ21ldGVycycpO1xuICAgICAgICAgICAgcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBnIGFzIF9fZXNyaS5Qb2x5Z29uO1xuICAgICAgICAgICAgZXYuZ3JhcGhpYy5nZW9tZXRyeSA9IGc7XG4gICAgICAgICAgICBzZWxlY3Qudmlld01vZGVsLmdyYXBoaWNzLmFkZChldi5ncmFwaGljKTtcbiAgICAgICAgICAgIGV2LmdyYXBoaWMuc3ltYm9sID0ge1xuICAgICAgICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgICAgICAgICAgICBzdHlsZTogJ25vbmUnLFxuICAgICAgICAgICAgICBvdXRsaW5lOiB7IHN0eWxlOiAnc2hvcnQtZGFzaCcsIHdpZHRoOiAyLjUsIGNvbG9yOiBbMjIxLCAyMjEsIDIyMSwgMV0gfSxcbiAgICAgICAgICAgICAgY29sb3I6IFsyNTUsIDI0MywgMTMsIDAuMjVdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmlldy5nb1RvKGV2LmdyYXBoaWMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGV2LmdyYXBoaWMuZ2VvbWV0cnk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvZ2dsZUFjdGlvbignU2VhcmNoJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcbiAgICAgIHNob3dBbGVydCgnUHJvcGVydHkgbGF5ZXIgZGlkIG5vdCBsb2FkLiBQbGVhc2UgY29udGFjdCBpTUFQUyBIZWxwIERlc2suJywgJ3JlZCcpO1xuICAgIH0pO1xufSk7XG5cbmlmICh3aW5kb3cub3V0ZXJXaWR0aCA+PSA1MDApIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1wYW5lbCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVBhbmVsRGlzbWlzc2VkQ2hhbmdlJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF4aW1pemUnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtYXhpbWl6ZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF4aW1pemUnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaWNvbicpID09PSAnbWF4aW1pemUnKSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtaW5pbWl6ZScpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCknKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdpY29uJykgPT09ICdtaW5pbWl6ZScpIHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpY29uJywgJ21heGltaXplJyk7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOjM1MHB4Jyk7XG4gICAgfVxuICB9KTtcbn0pO1xud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICBpZiAoKGV2ZW50Py50YXJnZXQgYXMgYW55KT8ub3V0ZXJXaWR0aCA+PSA1MDApIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5tYXhpbWl6ZScpPy5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21pbmltaXplJykge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMzUwcHgnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgc3JjKScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xudmlldy53aGVuKGluaXRXaWRnZXRzKTtcblxudmlldy53aGVuKGluaXRUaXBzKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gIGNvbnN0IGk6IEhUTUxFbGVtZW50ID0gaXRlbT8uc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGkuaW5uZXJIVE1MICs9ICc8c3R5bGU+LmNvbnRlbnQtY29udGFpbmVyIHsgaGVpZ2h0OiAxMDAlOyB9IDwvc3R5bGU+Jztcbn0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xuICB2aWV3Lm1hcC5yZW1vdmVNYW55KFxuICAgIHZpZXcubWFwLmFsbExheWVyc1xuICAgICAgLmZpbHRlcihsYXllciA9PiB7XG4gICAgICAgIHJldHVybiBsYXllci50eXBlID09PSAnZ3JvdXAnICYmICEobGF5ZXIgYXMgX19lc3JpLkdyb3VwTGF5ZXIpLmxheWVycy5sZW5ndGg7XG4gICAgICB9KVxuICAgICAgLnRvQXJyYXkoKVxuICApO1xuICBjb25zdCBqc29uID0gKHZpZXcubWFwIGFzIGFueSkudG9KU09OKCk7XG4gIGpzb24uaW5pdGlhbFN0YXRlLnZpZXdwb2ludC50YXJnZXRHZW9tZXRyeSA9IHZpZXcuZXh0ZW50O1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ltYXBzJywgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuICAvLyBpZiAoZHJhd1dpZGdldC52aWV3TW9kZWwuZ3JhcGhpY3MuZ3JhcGhpY3MubGVuZ3RoKSB7XG4gIC8vICAgZHJhd1dpZGdldC52aWV3TW9kZWwuZ3JhcGhpY3MuZ3JhcGhpY3MucmVtb3ZlTWFueShcbiAgLy8gICAgIGRyYXdXaWRnZXQudmlld01vZGVsLmdyYXBoaWNzLmdyYXBoaWNzLmZpbHRlcihncmFwaGljID0+IHtcbiAgLy8gICAgICAgcmV0dXJuICFncmFwaGljLmdlb21ldHJ5O1xuICAvLyAgICAgfSlcbiAgLy8gICApO1xuICAvLyAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hcHNfZHJhdycsIEpTT04uc3RyaW5naWZ5KChkcmF3V2lkZ2V0LnZpZXdNb2RlbC5ncmFwaGljcy5ncmFwaGljcyBhcyBhbnkpLnRvSlNPTigpKSk7XG4gIC8vIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsIGRpdicpLmZvckVhY2gocGFuZWwgPT4ge1xuICBpZiAocGFuZWwuc2xvdCA9PT0gJ2hlYWRlci10cmFpbGluZy1jb250ZW50Jykge1xuICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsnKTtcbiAgfVxufSk7XG5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuLy8gICBjb25zdCBhcnRpY2xlOiBIVE1MRWxlbWVudCA9IGl0ZW0/LnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUnKSBhcyBIVE1MRWxlbWVudDtcbi8vICAgYXJ0aWNsZS5pbm5lckhUTUwgKz1cbi8vICAgICAnPHN0eWxlPmFydGljbGU6LXdlYmtpdC1kaXJlY3QtZm9jdXMgeyBvdXRsaW5lOiBub25lOyB9IGFydGljbGU6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9IDwvc3R5bGU+JztcblxuLy8gICBjb25zdCBzZWN0aW9uOiBIVE1MRWxlbWVudCA9IGl0ZW0/LnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKSBhcyBIVE1MRWxlbWVudDtcbi8vICAgc2VjdGlvbi5pbm5lckhUTUwgKz1cbi8vICAgICAnPHN0eWxlPnNlY3Rpb246LXdlYmtpdC1kaXJlY3QtZm9jdXMgeyBvdXRsaW5lOiBub25lOyB9IHNlY3Rpb246Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9IDwvc3R5bGU+Jztcbi8vIH0pO1xuIl0sIm5hbWVzIjpbIndoZW5EZWZpbmVkT25jZSIsIndoZW5EZWZpbmVkIiwicHJvcGVydHkiLCJzdWJjbGFzcyIsImRlY2xhcmVkIiwidHN4IiwiYWxpYXNPZiIsInJlbmRlcmFibGUiLCJDU1MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUtPLElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7RUFDOUIsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLGtDQUFrQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQzdFLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7TUFDeEMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQVcsQ0FBQyxDQUFDLENBQUM7R0FDbkY7OztFQ1RELElBQU0sU0FBUyxHQUFHO01BQ2hCO1VBQ0UsS0FBSyxFQUFFO2NBQ0wsSUFBSSxFQUFFLFdBQVc7Y0FDakIsS0FBSyxFQUFFLFdBQVc7Y0FDbEIsSUFBSSxFQUFFO2tCQUNKO3NCQUNFLE9BQU8sRUFBRSx1RUFBdUU7c0JBQ2hGLEtBQUssRUFBRSxrQkFBa0I7bUJBQzFCO2tCQUNEO3NCQUNFLE9BQU8sRUFBRSx1RUFBdUU7c0JBQ2hGLEtBQUssRUFBRSxrQkFBa0I7bUJBQzFCO2VBQ0Y7V0FDRjtPQUNGO01BQ0Q7VUFDRSxLQUFLLEVBQUU7Y0FDTCxJQUFJLEVBQUUsbUJBQW1CO2NBQ3pCLEtBQUssRUFBRSxpQkFBaUI7Y0FDeEIsSUFBSSxFQUFFO2tCQUNKO3NCQUNFLE9BQU8sRUFDTCwrR0FBK0c7c0JBQ2pILEtBQUssRUFBRSxpQkFBaUI7bUJBQ3pCO2VBQ0Y7V0FDRjtPQUNGO0dBQ0YsQ0FBQztBQUNGLFdBQWdCLFFBQVE7TUFDdEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7VUFDNUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTs7Y0FDN0IsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLDBDQUFFLE1BQU0sR0FBRztjQUN4RCxZQUFBLElBQUksQ0FBQyxhQUFhLDBDQUFFLGFBQWEsMENBQUUsZUFBZSxDQUFDLFdBQVcsRUFBRTtjQUNoRSxZQUFBLElBQUksQ0FBQyxhQUFhLDBDQUFFLGFBQWEsMENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Y0FDOUQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2NBQzlELElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLO2tCQUNuQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUM7ZUFDckMsQ0FBQyxDQUFDO2NBRUgsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2NBQzFELEtBQUssQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztjQUM5RCxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2NBQzNCLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7a0JBQzlCLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7a0JBQ3pELFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztrQkFDOUMsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztrQkFDdEMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO2tCQUMxQixVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2tCQUMxQixLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2VBQy9CLEVBQUU7Y0FDSCxNQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxJQUFJLDBDQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUU7V0FDdEMsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0VBQ0wsQ0FBQzs7O1dDeERlLFNBQVMsQ0FBQyxJQUFZLEVBQUUsS0FBYTs7TUFDbkQsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQywwQ0FBRSxNQUFNLEdBQUc7TUFDbEQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztNQUN0RCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQzlDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO01BQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO01BQ3pCLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO01BQ25DLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ2pDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BRS9CLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7TUFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDbkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDT0Q7TUFBcUQsMkNBQWtCO01BMkJyRSxpQ0FBWSxNQUFZO1VBQXhCLFlBQ0Usa0JBQU0sTUFBTSxDQUFDLFNBSWQ7VUFyQlcsVUFBSSxHQUFHLGlCQUFpQixDQUFDO1VBQ3JDLGNBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztVQUMxRSxrQkFBWSxHQUFHO2NBQ2IsSUFBSSxFQUFFLGFBQWE7Y0FDbkIsS0FBSyxFQUFFLE1BQU07Y0FDYixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO2NBQ2hELEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQztXQUMzQixDQUFDO1VBQ0YsaUJBQVcsR0FBRztjQUNaLElBQUksRUFBRSxhQUFhO2NBQ25CLEtBQUssRUFBRSxNQUFNO2NBQ2IsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtjQUNoRCxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUM7V0FDM0IsQ0FBQztVQThERiwyQkFBcUIsR0FBRztjQUN0QjtrQkFDRSxJQUFJLEVBQUUsYUFBYTtrQkFDbkIsS0FBSyxFQUFFLGFBQWE7a0JBQ3BCLFVBQVUsRUFDUix1SEFBdUg7ZUFDMUg7Y0FDRDtrQkFDRSxJQUFJLEVBQUUsY0FBYztrQkFDcEIsS0FBSyxFQUFFLGNBQWM7a0JBQ3JCLFVBQVUsRUFDUix3SEFBd0g7ZUFDM0g7Y0FDRDtrQkFDRSxJQUFJLEVBQUUsaUJBQWlCO2tCQUN2QixLQUFLLEVBQUUsaUJBQWlCO2tCQUN4QixVQUFVLEVBQ1IsMkxBQTJMO2VBQzlMO2NBQ0Q7a0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtrQkFDdkIsS0FBSyxFQUFFLGlCQUFpQjtrQkFDeEIsVUFBVSxFQUNSLDBPQUEwTztlQUM3TztjQUNEO2tCQUNFLElBQUksRUFBRSxnQkFBZ0I7a0JBQ3RCLEtBQUssRUFBRSxnQkFBZ0I7a0JBQ3ZCLFVBQVUsRUFBRSx3REFBd0Q7ZUFDckU7Y0FDRDtrQkFDRSxJQUFJLEVBQUUsU0FBUztrQkFDZixLQUFLLEVBQUUsU0FBUztrQkFDaEIsVUFBVSxFQUNSLDRGQUE0RjtzQkFDNUYsbUdBQW1HO3NCQUNuRyw0RkFBNEY7c0JBQzVGLDBIQUEwSDtlQUM3SDtXQUNrQixDQUFDO1VBRXRCLG1CQUFhLEdBQUcsSUFBSSxhQUFhLENBQUM7Y0FDaEMsZUFBZSxFQUFFLEtBQUksQ0FBQyxxQkFBcUI7Y0FDM0MsT0FBTyxFQUFFO2tCQUNQO3NCQUNFLElBQUksRUFBRSxNQUFNO3NCQUNaLElBQUksRUFDRiw0Q0FBNEM7MEJBQzVDLHNDQUFzQzswQkFDdEMsd0RBQXdEOzBCQUN4RCxnREFBZ0Q7MEJBQ2hELHdEQUF3RDswQkFDeEQsMkNBQTJDOzBCQUMzQyxzREFBc0Q7MEJBQ3RELDRDQUE0QzswQkFDNUMsOFFBQThRO21CQUNqUjtrQkFDRDtzQkFDRSxJQUFJLEVBQUUsT0FBTztzQkFDYixVQUFVLEVBQUUsRUFBRTttQkFDZjtlQUNGO1dBQ0YsQ0FBQyxDQUFDO1VBRUgsaUJBQVcsR0FBRyxVQUFDLElBQVcsRUFBRSxNQUFlO2NBQ3pDLElBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7a0JBQ3hELE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQztlQUNwQyxDQUFDLENBQUM7Y0FDSCxLQUFJLENBQUMsV0FBVzttQkFDYixvQkFBb0IsQ0FBQztrQkFDcEIsY0FBYyxFQUFFLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxFQUFFO2tCQUNoQyxTQUFTLEVBQUUsSUFBSTtrQkFDZixTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDO2tCQUMvQixjQUFjLEVBQUUsS0FBSztlQUN0QixDQUFDO21CQUNELElBQUksQ0FBQyxVQUFBLE1BQU07a0JBQ1YsSUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDO2tCQUN2QixLQUFLLElBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtzQkFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFxQjswQkFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7dUJBQzdDLENBQUMsQ0FBQzttQkFDSjtrQkFDRCxLQUFJLENBQUMsYUFBYTt1QkFDZixhQUFhLENBQUM7c0JBQ2IsU0FBUyxFQUFFLElBQUk7c0JBQ2YsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO3NCQUNoQixjQUFjLEVBQUUsSUFBSTtzQkFDcEIsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO21CQUN0QyxDQUFDO3VCQUNELElBQUksQ0FBQyxVQUFBLE1BQU07c0JBQ1YsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3NCQVNoQyxJQUFJLENBQUMsTUFBTSxFQUFFOzBCQUNYLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7MEJBQzFCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTzs4QkFDN0IsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUksS0FBSSxDQUFDLFdBQW1CLEdBQUksS0FBSSxDQUFDLFlBQW9CLENBQUM7OEJBQ3JHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzJCQUM1QixDQUFDLENBQUM7dUJBQ0o7bUJBR0YsQ0FBQyxDQUFDO2VBQ04sQ0FBQyxDQUFDO1dBQ04sQ0FBQztVQUVGLG9CQUFjLEdBQUcsVUFBQyxLQUFxQztjQUNyRCxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUU7a0JBQ25ELElBQU0sTUFBSSxHQUFVLEVBQUUsQ0FBQztrQkFDdkIsSUFBSSxPQUFLLEdBQ1AsY0FBYztzQkFDZCxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRTtzQkFDOUIsbUJBQW1CO3NCQUNuQixLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRTtzQkFDOUIsc0JBQXNCO3NCQUN0QixLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRTtzQkFDOUIsR0FBRyxDQUFDO2tCQUNOLElBQUksZUFBYSxHQUFVLEVBQUUsQ0FBQztrQkFDOUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO3NCQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3NCQUNwQixlQUFhLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztzQkFDaEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDOzBCQUN2QixNQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3VCQUM1QixDQUFDLENBQUM7c0JBQ0gsT0FBSyxHQUFHLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDO3NCQUNsRSxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07MEJBQzdFLElBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7OEJBQ3pELE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQzsyQkFDckMsQ0FBQyxDQUFDOzBCQUVILE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzs4QkFDdkIsTUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzsyQkFDNUIsQ0FBQyxDQUFDOzBCQUNILElBQUksWUFBWSxJQUFJLE1BQUksQ0FBQyxNQUFNLEVBQUU7OEJBQy9CLEtBQUksQ0FBQyxZQUFZO21DQUNkLG9CQUFvQixDQUFDLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO21DQUM1RixJQUFJLENBQUMsVUFBQSxNQUFNO2tDQUVWLEtBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO3NDQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQXFCOzBDQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzBDQUNyQixNQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzswQ0FDNUMsZUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt1Q0FDN0IsQ0FBQyxDQUFDO21DQUNKO2tDQUNELEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksWUFBWSxDQUFDO3NDQUN6QyxNQUFNLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNO3NDQUMvQixNQUFNLEVBQUUsZUFBYTtzQ0FDckIsS0FBSyxFQUFFLHFCQUFxQjtzQ0FDNUIsWUFBWSxFQUFFLE9BQU87c0NBQ3JCLGFBQWEsRUFBRSxVQUFVO21DQUMxQixDQUFDLENBQUM7a0NBQ0gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFJLENBQUMsQ0FBQztrQ0FDdkIsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQzsrQkFDL0IsQ0FBQyxDQUFDOzJCQUNOOytCQUFNOzhCQUNMLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksWUFBWSxDQUFDO2tDQUN6QyxNQUFNLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNO2tDQUMvQixNQUFNLEVBQUUsZUFBYTtrQ0FDckIsS0FBSyxFQUFFLHFCQUFxQjtrQ0FDNUIsWUFBWSxFQUFFLE9BQU87a0NBQ3JCLGFBQWEsRUFBRSxVQUFVOytCQUMxQixDQUFDLENBQUM7OEJBQ0gsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQzsyQkFDL0I7dUJBQ0YsQ0FBQyxDQUFDO21CQUNKLENBQUMsQ0FBQztlQUNKO21CQUFNO2tCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2tCQUM5QixJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7c0JBQ3BCLElBQU0sS0FBSyxHQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBNEIsQ0FBQyxLQUFxQixDQUFDO3NCQUNuRixJQUFNLE1BQUksR0FBVSxFQUFFLENBQUM7c0JBQ3ZCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7MEJBQ2hDLE1BQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3VCQUNwQyxDQUFDLENBQUM7c0JBQ0gsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLENBQUMsRUFBRTswQkFDdkIsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDOzhCQUM3QyxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssaUJBQWlCLENBQUM7MkJBQ3JDLENBQUMsQ0FBQzswQkFDSCxJQUFJLFlBQVksSUFBSSxNQUFJLEVBQUU7OEJBQ3hCLEtBQUs7bUNBQ0Ysb0JBQW9CLENBQUMsRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7bUNBQzVGLElBQUksQ0FBQyxVQUFBLE1BQU07a0NBQ1YsSUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDO2tDQUN2QixLQUFLLElBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtzQ0FDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFxQjswQ0FDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzswQ0FDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7MENBQzVDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7MENBQ3ZCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQzswQ0FDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLElBQW9CLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDOzBDQUM5RCxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzBDQUM5QixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQzs4Q0FDekMsTUFBTSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTTs4Q0FDL0IsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDOzhDQUNqQixLQUFLLEVBQUUscUJBQXFCOzhDQUM1QixZQUFZLEVBQUUsT0FBTzs4Q0FDckIsYUFBYSxFQUFFLFVBQVU7MkNBQzFCLENBQUMsQ0FBQzt1Q0FDSixDQUFDLENBQUM7bUNBQ0o7K0JBQ0YsQ0FBQyxDQUFDOzJCQUNOO3VCQUNGOzJCQUFNOzBCQUNMLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTs4QkFDL0UsSUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDOzhCQUN2QixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQXFCO2tDQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzsrQkFDN0MsQ0FBQyxDQUFDOzhCQUNILEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7OEJBQ3ZCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsSUFBb0IsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7OEJBQ3pFLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7OEJBQzlCLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksWUFBWSxDQUFDO2tDQUN6QyxNQUFNLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNO2tDQUMvQixNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVE7a0NBQ3ZCLEtBQUssRUFBRSxxQkFBcUI7a0NBQzVCLFlBQVksRUFBRSxPQUFPO2tDQUNyQixhQUFhLEVBQUUsVUFBVTsrQkFDMUIsQ0FBQyxDQUFDOzJCQUNKLENBQUMsQ0FBQzt1QkFDSjttQkFDRjtlQUNGO1dBQ0YsQ0FBQztVQW9ORixtQkFBYSxHQUFHLFVBQUMsS0FBYTs7Y0FDNUIsSUFBSSxLQUFLLEtBQUssT0FBTyxFQUFFO2tCQUNyQixNQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2tCQUM3RCxNQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2tCQUM1RCxNQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLDBDQUFFLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFO2tCQUNsRSxNQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLDBDQUFFLGVBQWUsQ0FBQyxTQUFTLEVBQUU7ZUFDcEU7bUJBQU07a0JBQ0wsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQywwQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtrQkFDL0QsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQywwQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtrQkFDMUQsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQywwQ0FBRSxZQUFZLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRTtrQkFDcEUsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQywwQ0FBRSxlQUFlLENBQUMsU0FBUyxFQUFFO2VBQ2xFO1dBQ0YsQ0FBQztVQTlmQUEsMEJBQWUsQ0FBQyxLQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7VUFDcERBLDBCQUFlLENBQUMsS0FBSSxFQUFFLGFBQWEsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO1VBQ2pFQyxzQkFBVyxDQUFDLEtBQUksRUFBRSxVQUFVLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDOztPQUNqRTtNQUVELGtEQUFnQixHQUFoQixVQUFpQixRQUF1QjtVQUF4QyxpQkE4Q0M7VUE3Q0MsSUFBSSxDQUFDLGFBQWE7ZUFDZixhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7ZUFDNUYsSUFBSSxDQUFDLFVBQUEsTUFBTTtjQWVWLElBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7a0JBQzFELE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQztlQUNwQyxDQUFDLENBQUM7Y0FDSCxJQUFNLElBQUksR0FBVSxFQUFFLENBQUM7Y0FDdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2tCQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2VBQzVCLENBQUMsQ0FBQztjQUNILEtBQUksQ0FBQyxhQUFhO21CQUNmLG9CQUFvQixDQUFDLEVBQUUsY0FBYyxFQUFFLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO21CQUM3RixJQUFJLENBQUMsVUFBQSxNQUFNO2tCQUNWLElBQUksUUFBUSxHQUFVLEVBQUUsQ0FBQztrQkFDekIsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7c0JBQ3hCLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzttQkFDbEQ7a0JBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxZQUFZLENBQUM7c0JBQ3pDLE1BQU0sRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU07c0JBQy9CLE1BQU0sRUFBRSxRQUFRO3NCQUNoQixLQUFLLEVBQUUscUJBQXFCO3NCQUM1QixZQUFZLEVBQUUsT0FBTztzQkFDckIsYUFBYSxFQUFFLFVBQVU7bUJBQzFCLENBQUMsQ0FBQztrQkFDSCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO3NCQUN6QixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsSUFBb0IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO3NCQUN6RixLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO21CQUMvQjtrQkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO2VBQy9CLENBQUMsQ0FBQztXQUNOLENBQUMsQ0FBQztPQUNOO01BRUQsc0NBQUksR0FBSixVQUFLLElBQW1DO1VBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO09BQzVEO01Bd09ELDRDQUFVLEdBQVYsVUFBVyxPQUFxQixFQUFFLElBQWtCLEVBQUUsVUFBaUIsRUFBRSxJQUFXO1VBQXBGLGlCQWlEQztVQWhEQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7VUFDL0IsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztjQUN4RCxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDO1dBQ2xDLENBQUMsQ0FBQztVQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7VUFDMUIsVUFBVSxHQUFHLEVBQUUsQ0FBQztVQUNoQixJQUFJLENBQUMsV0FBVztlQUNiLG9CQUFvQixDQUFDLEVBQUUsY0FBYyxFQUFFLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2VBQzdGLElBQUksQ0FBQyxVQUFBLE1BQU07Y0FDVixLQUFLLElBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtrQkFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFxQjtzQkFDakQsVUFBVSxDQUFDLElBQUksQ0FBQzswQkFDZCxLQUFLLEVBQUUsRUFBRTswQkFDVCxJQUFJLEVBQUUsT0FBTzswQkFDYixPQUFPLEVBQUUsRUFBRTswQkFDWCxLQUFLLEVBQUU7OEJBQ0wsU0FBUyxFQUNQLHVEQUF1RDtrQ0FDdkQsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7a0NBQ2hDLEdBQUc7a0NBQ0gsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7MkJBQ3BDO3VCQUNGLENBQUMsQ0FBQzttQkFDSixDQUFDLENBQUM7ZUFDSjtjQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2NBQ2xFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztjQUNqQyxPQUFPLENBQUMsYUFBYSxHQUFJLE9BQU8sQ0FBQyxLQUEyQixDQUFDLGFBQWEsQ0FBQztjQUMzRSxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Y0FDL0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxZQUFtQixDQUFDO2NBQ3ZELElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87a0JBQ2xELE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxNQUFNLENBQUM7ZUFDcEQsQ0FBQyxDQUFDO2NBQ0gsSUFBSSxRQUFRLEVBQUU7a0JBQ1osUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsV0FBa0IsQ0FBQztrQkFDMUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7ZUFDNUM7Y0FDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Y0FDcEQsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztrQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7a0JBQzFDLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2VBQ3RFLENBQUMsQ0FBQztjQUNILElBQUksT0FBTyxFQUFFO2tCQUNYLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFlBQW1CLENBQUM7a0JBQzFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2tCQUN6QyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztlQUM1RTtXQUNGLENBQUMsQ0FBQztPQUNOO01BRUQsNkNBQVcsR0FBWDtVQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO2NBQ3JFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztjQUNiLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztrQkFDekIsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2VBQzFCLENBQUMsQ0FBQztjQUNILEdBQUcsSUFBSSxNQUFNLENBQUM7Y0FDZCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87a0JBQzdCLEtBQUssSUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtzQkFDcEMsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzBCQUN0QyxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUM7dUJBQ3RFOzJCQUFNLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTswQkFDOUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7dUJBQ3BFOzJCQUFNOzBCQUNMLEdBQUcsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7dUJBQzdDO21CQUNGO2tCQUNELEdBQUcsSUFBSSxNQUFNLENBQUM7ZUFDZixDQUFDLENBQUM7Y0FDSCxJQUFNLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO2NBRTVDLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO2NBQ2xFLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Y0FDekMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtrQkFHL0IsSUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztrQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7a0JBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7a0JBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztrQkFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7a0JBQ2hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztrQkFDYixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztlQUNqQztXQUNGLENBQUMsQ0FBQztPQUNKO01BRUQsNENBQVUsR0FBVixVQUFXLFdBQThCO1VBQXpDLGlCQTBIQzs7VUF6SEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxZQUFZLENBQUM7Y0FDbEMsTUFBTSxFQUFFO2tCQUNOLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7a0JBQzFELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7a0JBQ2pELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7a0JBQ2pELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7ZUFDaEQ7Y0FDRCxNQUFNLEVBQUUsRUFBRTtjQUNWLEtBQUssRUFBRSxxQkFBcUI7Y0FDNUIsWUFBWSxFQUFFLE9BQU87Y0FDckIsYUFBYSxFQUFFLFVBQVU7V0FDMUIsQ0FBQyxDQUFDO1VBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztVQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDO2NBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtjQUNmLEtBQUssRUFBRSxVQUFVO2NBQ2pCLFlBQVksRUFBRTtrQkFDWixJQUFJLGlCQUFpQixDQUFDO3NCQUNwQixJQUFJLEVBQUUsY0FBYztzQkFDcEIsS0FBSyxFQUFFLFNBQVM7c0JBQ2hCLFFBQVEsRUFBRSxLQUFLO3NCQUNmLFFBQVEsRUFBRSxJQUFJO21CQUNmLENBQUM7a0JBQ0YsSUFBSSxpQkFBaUIsQ0FBQztzQkFDcEIsSUFBSSxFQUFFLE9BQU87c0JBQ2IsS0FBSyxFQUFFLE9BQU87c0JBQ2QsUUFBUSxFQUFFLEtBQUs7c0JBQ2YsUUFBUSxFQUFFLElBQUk7bUJBQ2YsQ0FBQztrQkFDRixJQUFJLGlCQUFpQixDQUFDO3NCQUNwQixJQUFJLEVBQUUsU0FBUztzQkFDZixLQUFLLEVBQUUsS0FBSztzQkFDWixRQUFRLEVBQUUsS0FBSztzQkFDZixRQUFRLEVBQUUsSUFBSTttQkFDZixDQUFDO2tCQUNGLElBQUksaUJBQWlCLENBQUM7c0JBQ3BCLElBQUksRUFBRSxNQUFNO3NCQUNaLEtBQUssRUFBRSxNQUFNO3NCQUNiLFFBQVEsRUFBRSxLQUFLO3NCQUNmLFFBQVEsRUFBRSxJQUFJO21CQUNmLENBQUM7ZUFDSDtjQUNELFVBQVUsRUFBRTtrQkFDVixLQUFLLEVBQUU7c0JBQ0o7MEJBQ0MsS0FBSyxFQUFFLFFBQVE7dUJBQ2M7bUJBQ2hDO2VBQ0Y7V0FDRixDQUFDLENBQUM7VUFDSCxJQUFNLE1BQU0sR0FBbUIsa0JBQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsVUFBVSwwQ0FBRSxLQUFLLDBDQUFFLElBQUksQ0FBQyxVQUFBLElBQUk7Y0FDNUUsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQztXQUNoQyxDQUFtQixDQUFDO1VBQ3JCLE1BQU0sQ0FBQyxhQUFhLEdBQUc7Y0FDckIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1dBQ3BCLENBQUM7VUFDRixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7VUFFN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsVUFBQSxLQUFLO2NBQzVDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7a0JBQ3RCLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztrQkFDN0UsS0FBSSxDQUFDLFVBQVUsQ0FDYixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFDdEIsS0FBSSxDQUFDLElBQW9CLEVBQ3pCLEVBQUUsRUFDRixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUNsRCxDQUFDO2tCQUNGLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7a0JBQ3hELEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7ZUFDL0I7Y0FDQSxLQUFJLENBQUMsWUFBb0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQztXQUM3QyxDQUFDLENBQUM7VUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDO2NBQzdCLGNBQWMsRUFBRSw4QkFBOEI7Y0FDOUMscUJBQXFCLEVBQUUsS0FBSztjQUM1QixTQUFTLEVBQUUsUUFBUTtjQUNuQixPQUFPLEVBQUU7a0JBQ1AsSUFBSSxpQkFBaUIsQ0FBQztzQkFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO3NCQUN4QixZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0JBQ3pCLFlBQVksRUFBRSxTQUFTO3NCQUN2QixVQUFVLEVBQUUsS0FBSztzQkFDakIsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQztzQkFDbEMsSUFBSSxFQUFFLGNBQWM7c0JBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7bUJBQ3RDLENBQUM7a0JBQ0YsSUFBSSxpQkFBaUIsQ0FBQztzQkFDcEIsS0FBSyxFQUFFLFdBQVc7c0JBQ2xCLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQztzQkFDdkIsWUFBWSxFQUFFLE9BQU87c0JBQ3JCLFVBQVUsRUFBRSxLQUFLO3NCQUNqQixTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQztzQkFDeEMsSUFBSSxFQUFFLE9BQU87c0JBQ2IsV0FBVyxFQUFFLHNCQUFzQjttQkFDcEMsQ0FBQztrQkFDRixJQUFJLGlCQUFpQixDQUFDO3NCQUNwQixLQUFLLEVBQUUsV0FBVztzQkFDbEIsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO3NCQUN6QixZQUFZLEVBQUUsU0FBUztzQkFDdkIsVUFBVSxFQUFFLEtBQUs7c0JBQ2pCLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO3NCQUMxQyxJQUFJLEVBQUUsS0FBSztzQkFDWCxXQUFXLEVBQUUscUJBQXFCO21CQUNuQyxDQUFDO2tCQUNGLElBQUksaUJBQWlCLENBQUM7c0JBQ3BCLEtBQUssRUFBRSxXQUFXO3NCQUNsQixZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0JBQ3RCLFlBQVksRUFBRSxNQUFNO3NCQUNwQixVQUFVLEVBQUUsS0FBSztzQkFDakIsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQztzQkFDL0IsSUFBSSxFQUFFLE1BQU07c0JBQ1osV0FBVyxFQUFFLGtCQUFrQjttQkFDaEMsQ0FBQztlQUNIO1dBQ0YsQ0FBQyxDQUFDO1VBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFBLEtBQUs7Y0FDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztXQUNwQixDQUFDLENBQUM7VUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7T0FHOUQ7TUE3Z0JXO1VBQVhDLG1CQUFRLEVBQUU7MkRBQXFDO01BQ3BDO1VBQVhBLG1CQUFRLEVBQUU7a0VBQWdDO01BQy9CO1VBQVhBLG1CQUFRLEVBQUU7bUVBQWlDO01BQ2hDO1VBQVhBLG1CQUFRLEVBQUU7b0VBQWtDO01BRWpDO1VBQVhBLG1CQUFRLEVBQUU7bUVBQWtDO01BQ2pDO1VBQVhBLG1CQUFRLEVBQUU7bUVBQWlDO01BQ2hDO1VBQVhBLG1CQUFRLEVBQUU7OERBQXVCO01BQ3RCO1VBQVhBLG1CQUFRLEVBQUU7K0RBQXlCO01BRXhCO1VBQVhBLG1CQUFRLEVBQUU7MkRBQTBCO01BWGxCLHVCQUF1QjtVQUQzQ0MsbUJBQVEsQ0FBQyxvREFBb0QsQ0FBQztTQUMxQyx1QkFBdUIsQ0E0aEIzQztNQUFELDhCQUFDO0dBNWhCRCxDQUFxREMsbUJBQVEsQ0FBQyxRQUFRLENBQUMsR0E0aEJ0RTs7RUM5aEJELElBQU0sR0FBRyxHQUFHO01BQ1YsSUFBSSxFQUFFLGlDQUFpQztHQUN4QyxDQUFDO0VBRUY7TUFBNEMsa0NBQWdCO01BMkIxRCx3QkFBWSxVQUFxQztVQUFqRCxZQUNFLGtCQUFNLFVBQVUsQ0FBQyxTQUNsQjtVQVZELFVBQUksR0FBRyxFQUFFLENBQUM7VUFNVixlQUFTLEdBQTRCLElBQUksdUJBQXVCLEVBQUUsQ0FBQztVQU1uRSxtQkFBYSxHQUFHO2NBQ2QsSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO2tCQUNyQixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7ZUFDeEM7V0FDRixDQUFDO1VBQ0Ysa0JBQVksR0FBRztjQUNiLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTtrQkFDckIsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2VBQ3ZDO1dBQ0YsQ0FBQztVQUNGLG9CQUFjLEdBQUc7Y0FDZixJQUFJLEtBQUksQ0FBQyxPQUFPLEVBQUU7a0JBQ2hCLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztlQUN2QztXQUNGLENBQUM7VUFFRix3QkFBa0IsR0FBRyxNQUFNLENBQUM7O09BbEIzQjtNQW9CRCwrQkFBTSxHQUFOO1VBQUEsaUJBOEJDO1VBN0JDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1VBQzdFLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2NBQ2hCLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxnQkFBZ0IsQ0FBQyw2QkFBNkIsRUFBRSxVQUFDLENBQU07O2tCQUUzRCxVQUFJLENBQUMsQ0FBQyxNQUFNLDBDQUFFLE9BQU8sRUFBRTtzQkFDckIsT0FBTyxDQUFDLEdBQUcsT0FBQyxDQUFDLENBQUMsTUFBTSwwQ0FBRSxLQUFLLENBQUMsQ0FBQztzQkFDN0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLE9BQUMsQ0FBQyxDQUFDLE1BQU0sMENBQUUsS0FBSyxDQUFDLENBQUM7bUJBQy9DO2VBQ0YsRUFBRTtXQUNKLENBQUMsQ0FBQztVQUVILFFBQ0VDLG9CQUFLLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtjQUNsQkEsb0JBQUssV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxFQUFDLFFBQVEsR0FBTztjQUN4REEsb0JBQUssV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFDLE9BQU8sR0FBTztjQUN0REEsb0JBQUssRUFBRSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsUUFBUTtrQkFDOUJBLG9CQUFLLEVBQUUsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLEdBQVEsQ0FDekQ7Y0FFTkEsb0NBQXFCLEtBQUssRUFBQyxNQUFNO2tCQUMvQkEseUNBQTBCLE9BQU8sUUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxXQUFXLFdBRW5DO2tCQUMzQkEseUNBQTBCLEtBQUssRUFBQyxTQUFTLEVBQUMsRUFBRSxFQUFDLGFBQWEsRUFBQyxRQUFRLG9CQUV4QyxDQUNQLENBQ2xCLEVBQ047T0FDSDtNQTdFRDtVQURDQyxrQkFBTyxDQUFDLGdCQUFnQixDQUFDO2tEQUNVO01BRXBDO1VBRENBLGtCQUFPLENBQUMsdUJBQXVCLENBQUM7eURBQ0Y7TUFFL0I7VUFEQ0Esa0JBQU8sQ0FBQyx3QkFBd0IsQ0FBQzswREFDRjtNQUVoQztVQURDQSxrQkFBTyxDQUFDLHlCQUF5QixDQUFDOzJEQUNGO01BRWpDO1VBRENBLGtCQUFPLENBQUMsd0JBQXdCLENBQUM7MERBQ0Q7TUFFakM7VUFEQ0Esa0JBQU8sQ0FBQyx3QkFBd0IsQ0FBQzswREFDRjtNQUVoQztVQURDQSxrQkFBTyxDQUFDLG1CQUFtQixDQUFDO3FEQUNQO01BRXRCO1VBRENBLGtCQUFPLENBQUMsb0JBQW9CLENBQUM7c0RBQ047TUFHeEI7VUFGQ0Esa0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQztVQUN6QkMsaUJBQVUsRUFBRTtrREFDSDtNQU1WO1VBSkNMLG1CQUFRLENBQUM7Y0FDUixJQUFJLEVBQUUsdUJBQXVCO1dBQzlCLENBQUM7VUFDREssaUJBQVUsRUFBRTt1REFDc0Q7TUF6QmhELGNBQWM7VUFEbENKLG1CQUFRLENBQUMsNEJBQTRCLENBQUM7U0FDbEIsY0FBYyxDQWdGbEM7TUFBRCxxQkFBQztHQWhGRCxDQUE0Q0MsbUJBQVEsQ0FBQyxNQUFNLENBQUMsR0FnRjNEOzs7RUMzRkQ7TUFBOEMsb0NBQWtCO01BRzlELDBCQUFZLE1BQVk7VUFBeEIsWUFDRSxrQkFBTSxNQUFNLENBQUMsU0FFZDtVQURDSiwwQkFBZSxDQUFDLEtBQUksRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7T0FDckQ7TUFFRCwrQkFBSSxHQUFKLFVBQUssSUFBbUM7VUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDekI7TUFDRCx3Q0FBYSxHQUFiO1VBQ0UsSUFBTSxRQUFRLEdBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQ0FBaUMsQ0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7VUFDdkcsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFO2NBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztXQUN4QztlQUFNO2NBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztXQUMxQjtPQUNGO01BQ0Qsc0NBQVcsR0FBWDtVQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztPQUNyRjtNQXBCVztVQUFYRSxtQkFBUSxFQUFFO29EQUFxQztNQUQ3QixnQkFBZ0I7VUFEcENDLG1CQUFRLENBQUMsc0NBQXNDLENBQUM7U0FDNUIsZ0JBQWdCLENBc0JwQztNQUFELHVCQUFDO0dBdEJELENBQThDQyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxHQXNCL0Q7OztFQ2pCRCxJQUFNSSxLQUFHLEdBQUc7TUFDVixJQUFJLEVBQUUsMEJBQTBCO0dBQ2pDLENBQUM7RUFHRjtNQUFxQywyQkFBZ0I7TUFtQm5ELGlCQUFZLFVBQThCO1VBQTFDLFlBQ0Usa0JBQU0sVUFBVSxDQUFDLFNBQ2xCO1VBVkQsVUFBSSxHQUFHLEVBQUUsQ0FBQztVQU1WLGVBQVMsR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1VBTXJELHFCQUFlLEdBQUc7Y0FDaEIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1dBQ3BCLENBQUM7O09BSkQ7TUFNRCx3QkFBTSxHQUFOO1VBQUEsaUJBOEJDO1VBN0JDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1VBQ2hGLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2NBQ2hCLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxnQkFBZ0IsQ0FBQyw2QkFBNkIsRUFBRSxVQUFDLENBQU07O2tCQUMzRCxVQUFJLENBQUMsQ0FBQyxNQUFNLDBDQUFFLE9BQU8sRUFBRTtzQkFDckIsT0FBTyxDQUFDLEdBQUcsT0FBQyxDQUFDLENBQUMsTUFBTSwwQ0FBRSxLQUFLLENBQUMsQ0FBQztzQkFDN0IsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLDBDQUFFLEtBQUssTUFBSyxPQUFPLEVBQUU7MEJBQy9CLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7dUJBQzFCOzJCQUFNOzBCQUNMLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxTQUFHLENBQUMsQ0FBQyxNQUFNLDBDQUFFLEtBQUssQ0FBQzt1QkFDL0M7bUJBQ0Y7ZUFDRixFQUFFO1dBQ0osQ0FBQyxDQUFDO1VBQ0gsUUFDRUgsb0JBQUssS0FBSyxFQUFFRyxLQUFHLENBQUMsSUFBSTtjQUNsQkgsb0NBQXFCLEtBQUssRUFBQyxNQUFNO2tCQUMvQkEseUNBQTBCLE9BQU8sUUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsU0FBUyxXQUV0RTtrQkFDM0JBLHlDQUEwQixLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsY0FBYyxXQUU3RDtrQkFDM0JBLHlDQUEwQixLQUFLLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsT0FBTyxZQUV4RCxDQUNQO2NBQ3RCQSxvQkFBSyxXQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUMsZUFBZSxHQUFPLENBQzdELEVBQ047T0FDSDtNQXZERDtVQURDQyxrQkFBTyxDQUFDLGdCQUFnQixDQUFDOzJDQUNVO01BRXBDO1VBRENBLGtCQUFPLENBQUMsdUJBQXVCLENBQUM7a0RBQ0g7TUFFOUI7VUFEQ0Esa0JBQU8sQ0FBQyx1QkFBdUIsQ0FBQztrREFDWDtNQUV0QjtVQURDQSxrQkFBTyxDQUFDLHlCQUF5QixDQUFDO29EQUNYO01BR3hCO1VBRkNBLGtCQUFPLENBQUMsZ0JBQWdCLENBQUM7VUFDekJDLGlCQUFVLEVBQUU7MkNBQ0g7TUFNVjtVQUpDTCxtQkFBUSxDQUFDO2NBQ1IsSUFBSSxFQUFFLGdCQUFnQjtXQUN2QixDQUFDO1VBQ0RLLGlCQUFVLEVBQUU7Z0RBQ3dDO01BakJsQyxPQUFPO1VBRDNCSixtQkFBUSxDQUFDLHFCQUFxQixDQUFDO1NBQ1gsT0FBTyxDQTBEM0I7TUFBRCxjQUFDO0dBMURELENBQXFDQyxtQkFBUSxDQUFDLE1BQU0sQ0FBQyxHQTBEcEQ7OztFQzFFRCxJQUFNLHFCQUFxQixHQUFHO01BQzVCO1VBQ0UsSUFBSSxFQUFFLGFBQWE7VUFDbkIsS0FBSyxFQUFFLGFBQWE7VUFDcEIsVUFBVSxFQUNSLHVIQUF1SDtPQUMxSDtNQUNEO1VBQ0UsSUFBSSxFQUFFLGNBQWM7VUFDcEIsS0FBSyxFQUFFLGNBQWM7VUFDckIsVUFBVSxFQUNSLHdIQUF3SDtPQUMzSDtNQUNEO1VBQ0UsSUFBSSxFQUFFLGlCQUFpQjtVQUN2QixLQUFLLEVBQUUsaUJBQWlCO1VBQ3hCLFVBQVUsRUFDUiwyTEFBMkw7T0FDOUw7TUFDRDtVQUNFLElBQUksRUFBRSxpQkFBaUI7VUFDdkIsS0FBSyxFQUFFLGlCQUFpQjtVQUN4QixVQUFVLEVBQ1IsME9BQTBPO09BQzdPO01BQ0Q7VUFDRSxJQUFJLEVBQUUsZ0JBQWdCO1VBQ3RCLEtBQUssRUFBRSxnQkFBZ0I7VUFDdkIsVUFBVSxFQUFFLHdEQUF3RDtPQUNyRTtNQUNEO1VBQ0UsSUFBSSxFQUFFLFNBQVM7VUFDZixLQUFLLEVBQUUsU0FBUztVQUNoQixVQUFVLEVBQ1IsNEZBQTRGO2NBQzVGLG1HQUFtRztjQUNuRyw0RkFBNEY7Y0FDNUYsMEhBQTBIO09BQzdIO0dBQ2tCLENBQUM7RUFFdEIsSUFBTSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUM7TUFDdEMsZUFBZSxFQUFFLHFCQUFxQjtNQVV0QyxPQUFPLEVBQUU7VUFDUDtjQUNFLElBQUksRUFBRSxNQUFNO2NBQ1osSUFBSSxFQUNGLDRDQUE0QztrQkFDNUMsc0NBQXNDO2tCQUN0Qyx3REFBd0Q7a0JBQ3hELGdEQUFnRDtrQkFDaEQsd0RBQXdEO2tCQUN4RCwyQ0FBMkM7a0JBQzNDLHNEQUFzRDtrQkFDdEQsNENBQTRDO2tCQUM1Qyw4UUFBOFE7V0FDalI7VUFDRDtjQUNFLElBQUksRUFBRSxPQUFPO2NBQ2IsVUFBVSxFQUFFLEVBQUU7V0FDZjtPQUNGO0dBQ0YsQ0FBQyxDQUFDO0FBRUgsRUFBTyxJQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQztNQUMzQyxVQUFVLEVBQUU7VUFDVixFQUFFLEVBQUUsa0NBQWtDO09BQ3ZDO01BQ0QsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0dBQ25DLENBQUMsQ0FBQztBQUVILEVBQU8sSUFBTSxXQUFXLEdBQUcsSUFBSSxZQUFZLENBQUM7TUFDMUMsVUFBVSxFQUFFO1VBQ1YsRUFBRSxFQUFFLGtDQUFrQztPQUN2QztNQUNELE9BQU8sRUFBRSxDQUFDO01BQ1YsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO01BQ2xDLGFBQWEsRUFBRSxhQUFhO0dBQzdCLENBQUMsQ0FBQztFQUNILFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNuQixFQUFPLElBQU0sWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDO01BQzNDLFVBQVUsRUFBRTtVQUNWLEVBQUUsRUFBRSxrQ0FBa0M7T0FDdkM7TUFDRCxPQUFPLEVBQUUsQ0FBQztNQUNWLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtHQUNuQyxDQUFDLENBQUM7RUFDSCxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDcEI7O0VDdEZBO01BQTJDLGlDQUFrQjtNQVEzRCx1QkFBWSxNQUFZO1VBQXhCLFlBQ0Usa0JBQU0sTUFBTSxDQUFDLFNBRWQ7VUFSVyxVQUFJLEdBQUcsV0FBVyxDQUFDO1VBTzdCSiwwQkFBZSxDQUFDLEtBQUksRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7T0FDckQ7TUFFRCxnQ0FBUSxHQUFSO1VBQUEsaUJBOENDO1VBN0NDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztVQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1VBU2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1VBQ3BILElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztVQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFtQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztVQUNwRixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDekUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBcUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7VUFDdEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1VBRXRFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxVQUFBLElBQUk7O2NBQ2xDLElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRTtrQkFDckIsTUFBQSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsV0FBVywwQ0FBRSxLQUFLLEdBQUc7ZUFDbkM7V0FDRixDQUFDLENBQUM7VUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQSxDQUFDOztjQUN4QixJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFO2tCQUN2QixNQUFBLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxXQUFXLDBDQUFFLEtBQUssR0FBRztlQUNuQztjQUNELElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxVQUFVLFdBQUksS0FBSSxDQUFDLEtBQUssMENBQUUsTUFBTSxDQUFBLEVBQUU7a0JBQ2hELElBQUksVUFBVSxHQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztrQkFDbkQsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO3NCQUN6QyxVQUFVLEdBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUF5QixDQUFDLFFBQVEsQ0FBQzttQkFDNUQ7a0JBQ0QsSUFBTSxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUM7c0JBQ3BCLFFBQVEsRUFBRSxVQUFVO3NCQUNwQixNQUFNLEVBQUUsSUFBSSxVQUFVLENBQUM7MEJBQ3JCLElBQUksRUFBRSxLQUFJLENBQUMsS0FBSzswQkFDaEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxTQUFTOzBCQUNyQixTQUFTLEVBQUUsT0FBTzswQkFDbEIsUUFBUSxFQUFFLENBQUM7MEJBQ1gsaUJBQWlCLEVBQUUsS0FBSzswQkFDeEIsbUJBQW1CLEVBQUUsT0FBTzt1QkFDN0IsQ0FBQzttQkFDSCxDQUFDLENBQUM7a0JBQ0gsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7ZUFDdEI7V0FDRixDQUFDLENBQUM7T0FDSjtNQUNELDRCQUFJLEdBQUosVUFBSyxJQUFtQztVQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUN6QjtNQTdEVztVQUFYRSxtQkFBUSxFQUFFO2lEQUFxQztNQUNwQztVQUFYQSxtQkFBUSxFQUFFO3NEQUFtQjtNQUNsQjtVQUFYQSxtQkFBUSxFQUFFO2lEQUFvQjtNQUhaLGFBQWE7VUFEakNDLG1CQUFRLENBQUMsZ0NBQWdDLENBQUM7U0FDdEIsYUFBYSxDQStEakM7TUFBRCxvQkFBQztHQS9ERCxDQUEyQ0MsbUJBQVEsQ0FBQyxRQUFRLENBQUMsR0ErRDVEOzs7RUMvREQsSUFBTUksS0FBRyxHQUFHO01BQ1YsSUFBSSxFQUFFLHVCQUF1QjtHQUM5QixDQUFDO0VBR0Y7TUFBa0Msd0JBQWdCO01BYWhELGNBQVksVUFBMkI7VUFBdkMsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7VUFKRCxlQUFTLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7VUFNL0Msa0JBQVksR0FBRztjQUNiLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtrQkFDMUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztlQUMzQjtXQUNGLENBQUM7O09BTkQ7TUFRRCxxQkFBTSxHQUFOO1VBQUEsaUJBZ0VDO1VBL0RDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7VUFDN0MsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFO1VBQ3ZDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLENBQU07Y0FDbEQsSUFBTSxHQUFHLEdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Y0FDbkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztjQUN2RSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1dBQzFFLEVBQUU7VUFDSCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1VBQzdDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRTtVQUN2QyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsVUFBQyxDQUFNO2NBQ2xELElBQU0sR0FBRyxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2NBQ25DLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Y0FDekUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQXVDLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2NBQzNHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUF1QyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztXQUM3RyxFQUFFO1VBQ0gsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztVQUNuRCxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsVUFBQyxDQUFNO2NBQ3RELEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztXQUN4RSxFQUFFO1VBQ0gsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztVQUMvQyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsVUFBQyxDQUFNO2NBQ25ELEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUF3QyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztjQUM1RyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBdUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FDakcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQ2YsQ0FBQztjQUNELEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUF1QyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUNqRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FDZixDQUFDO1dBQ0gsRUFBRTtVQUNILElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7VUFDL0MsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQUMsQ0FBTTtjQUNqRCxLQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQ25DLEVBQUU7VUFDSCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1VBQ3ZELFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLENBQU07Y0FDdkQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7V0FDdEQsRUFBRTtVQUNILFFBQ0VILG9CQUFLLEtBQUssRUFBRUcsS0FBRyxDQUFDLElBQUk7Y0FDbEJILG9CQUFLLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsRUFBQyxXQUFXLEdBQU87Y0FDMURBLDhCQUFlLE9BQU8sRUFBQyxVQUFVLEVBQUMsSUFBSSxRQUFDLFdBQVc7a0JBQ2hEQSxzQ0FBdUIsSUFBSSxFQUFDLE9BQU87c0JBQ2pDQSw4QkFBZSxLQUFLLEVBQUMsR0FBRyxpQkFBMkI7c0JBQ25EQSw4QkFBZSxFQUFFLEVBQUMsTUFBTSxFQUFDLFlBQVksUUFBQyxTQUFTLFFBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsR0FBRyxHQUFpQjtzQkFDL0ZBLDhCQUFlLEtBQUssRUFBQyxHQUFHLGlCQUEyQjtzQkFDbkRBLDhCQUFlLEVBQUUsRUFBQyxNQUFNLEVBQUMsWUFBWSxRQUFDLFNBQVMsUUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxHQUFHLEdBQWlCLENBQ3pFO2tCQUN4QkEsc0NBQXVCLElBQUksRUFBQyxjQUFjO3NCQUN4Q0EsOEJBQWUsS0FBSyxFQUFDLEdBQUcsY0FBd0I7c0JBQ2hEQSwrQkFBZ0IsS0FBSyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsU0FBUyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxLQUFLLEdBQWtCLENBQ3pFO2tCQUN4QkEsc0NBQXVCLElBQUksRUFBQyxTQUFTO3NCQUNuQ0EsOEJBQWUsS0FBSyxFQUFDLEdBQUcsWUFBc0I7c0JBQzlDQSwrQkFBZ0IsRUFBRSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsS0FBSyxHQUFrQixDQUM1RDtrQkFDeEJBLHNDQUF1QixJQUFJLEVBQUMsVUFBVTtzQkFDcENBLDhCQUFlLEtBQUssRUFBQyxHQUFHLFlBQXNCO3NCQUM5Q0EsOEJBQWUsS0FBSyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxVQUFVLEdBQWlCO3NCQUNwRUEsOEJBQWUsRUFBRSxFQUFDLFdBQVcsRUFBQyxZQUFZLFFBQUMsU0FBUyxRQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLEdBQUcsR0FBaUIsQ0FDOUUsQ0FDVixDQUNaLEVBQ047T0FDSDtNQXJGRDtVQURDQyxrQkFBTyxDQUFDLGdCQUFnQixDQUFDO3dDQUNVO01BRXBDO1VBRENBLGtCQUFPLENBQUMsaUJBQWlCLENBQUM7eUNBQ2I7TUFFZDtVQURDQSxrQkFBTyxDQUFDLHFCQUFxQixDQUFDOzZDQUNkO01BS2pCO1VBSkNKLG1CQUFRLENBQUM7Y0FDUixJQUFJLEVBQUUsYUFBYTtXQUNwQixDQUFDO1VBQ0RLLGlCQUFVLEVBQUU7NkNBQ2tDO01BWDVCLElBQUk7VUFEeEJKLG1CQUFRLENBQUMsa0JBQWtCLENBQUM7U0FDUixJQUFJLENBd0Z4QjtNQUFELFdBQUM7R0F4RkQsQ0FBa0NDLG1CQUFRLENBQUMsTUFBTSxDQUFDLEdBd0ZqRDs7O0VDaEdEO01BQTZDLG1DQUFrQjtNQUk3RCx5QkFBWSxNQUFZO1VBQXhCLFlBQ0Usa0JBQU0sTUFBTSxDQUFDLFNBRWQ7VUFEQ0osMEJBQWUsQ0FBQyxLQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7O09BQ3JEO01BS0Qsb0NBQVUsR0FBVjtVQUFBLGlCQXVCQztVQXRCQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7VUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztVQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDO2NBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtjQUNmLFNBQVMsRUFBRSxjQUFjO2NBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUTtjQUNwQixZQUFZLEVBQUUsUUFBUTtXQUN2QixDQUFDLENBQUM7VUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7VUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUEsRUFBRTs7Y0FDekIsSUFBSSxFQUFFLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTtrQkFDM0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztlQUMzQjtjQUNELElBQUksRUFBRSxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUU7a0JBQ3hCLE1BQUEsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLFdBQVcsMENBQUUsS0FBSyxHQUFHO2VBQ25DO1dBQ0YsQ0FBQyxDQUFDO1VBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLFVBQUEsSUFBSTs7Y0FDbEMsSUFBSSxJQUFJLElBQUksU0FBUyxFQUFFO2tCQUNyQixNQUFBLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxXQUFXLDBDQUFFLEtBQUssR0FBRztlQUNuQztXQUNGLENBQUMsQ0FBQztPQUNKO01BQ0QsOEJBQUksR0FBSixVQUFLLElBQW1DO1VBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7T0FDL0I7TUF0Q1c7VUFBWEUsbUJBQVEsRUFBRTttREFBcUM7TUFDcEM7VUFBWEEsbUJBQVEsRUFBRTtvREFBMEI7TUFGbEIsZUFBZTtVQURuQ0MsbUJBQVEsQ0FBQyxvQ0FBb0MsQ0FBQztTQUMxQixlQUFlLENBd0NuQztNQUFELHNCQUFDO0dBeENELENBQTZDQyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxHQXdDOUQ7OztFQ3BDRCxJQUFNSSxLQUFHLEdBQUc7TUFDVixJQUFJLEVBQUUseUJBQXlCO0dBQ2hDLENBQUM7RUFHRjtNQUFvQywwQkFBZ0I7TUFtQmxELGdCQUFZLFVBQTZCO1VBQXpDLFlBQ0Usa0JBQU0sVUFBVSxDQUFDLFNBQ2xCO1VBUkQsZUFBUyxHQUFvQixJQUFJLGVBQWUsRUFBRSxDQUFDO1VBQ25ELG9CQUFjLEdBQUc7Y0FDZixJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7a0JBQzFCLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7ZUFDN0I7V0FDRixDQUFDOztPQUdEO01BRUQsNkJBQVksR0FBWixVQUFhLEVBQU87VUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO09BQ3ZEO01BQ0QsdUJBQU0sR0FBTjtVQUFBLGlCQW1CQzs7VUFsQkMsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLDBDQUFFLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQUMsRUFBTztjQUMvRixLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1dBQ3ZCLEVBQUU7VUFFSCxRQUNFSCxvQkFBSyxLQUFLLEVBQUVHLEtBQUcsQ0FBQyxJQUFJO2NBQ2xCSCxvQkFBSyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUMsY0FBYyxHQUFPO2NBQy9EQSw4QkFBZSxLQUFLLEVBQUMsR0FBRyw4QkFBd0M7Y0FDaEVBLDhCQUNFLEtBQUssRUFBQyxHQUFHLEVBQ1QsSUFBSSxFQUFDLFFBQVEsRUFDYixHQUFHLEVBQUMsR0FBRyxFQUNQLEdBQUcsRUFBQyxNQUFNLEVBQ1YsSUFBSSxFQUFDLElBQUksRUFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQ3JCLENBQ2IsRUFDTjtPQUNIO01BM0NEO1VBRENDLGtCQUFPLENBQUMsZ0JBQWdCLENBQUM7MENBQ1U7TUFFcEM7VUFEQ0Esa0JBQU8sQ0FBQyxpQkFBaUIsQ0FBQzsyQ0FDRjtNQUV6QjtVQURDQSxrQkFBTyxDQUFDLGtCQUFrQixDQUFDOzRDQUNGO01BRTFCO1VBRENBLGtCQUFPLENBQUMsMEJBQTBCLENBQUM7b0RBQ2I7TUFLdkI7VUFKQ0osbUJBQVEsQ0FBQztjQUNSLElBQUksRUFBRSxlQUFlO1dBQ3RCLENBQUM7VUFDREssaUJBQVUsRUFBRTsrQ0FDc0M7TUFiaEMsTUFBTTtVQUQxQkosbUJBQVEsQ0FBQyxvQkFBb0IsQ0FBQztTQUNWLE1BQU0sQ0E4QzFCO01BQUQsYUFBQztHQTlDRCxDQUFvQ0MsbUJBQVEsQ0FBQyxNQUFNLENBQUMsR0E4Q25EOzs7RUNoRE0sSUFBTSxXQUFXLEdBQVksSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNsRCxFQUFPLElBQU0sTUFBTSxHQUFXLElBQUksTUFBTSxFQUFFLENBQUM7QUFDM0MsRUFBTyxJQUFJLFNBQW9CLENBQUM7QUFDaEMsRUFBTyxJQUFNLGNBQWMsR0FBbUIsSUFBSSxjQUFjLEVBQUUsQ0FBQztBQUNuRSxFQUFPLElBQU0sVUFBVSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7QUFDM0MsV0FBZ0IsV0FBVyxDQUFDLElBQW1DO01BQzdELElBQUksTUFBTSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7TUFDN0MsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDO1VBQ3hCLElBQUksTUFBQTtVQUNKLFNBQVMsRUFBRSxVQUFVO1VBQ3JCLHVCQUF1QixFQUFFLFVBQUEsS0FBSztjQUM1QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO2NBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO2tCQUM5QixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7a0JBQ3hELE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2tCQUNoQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztrQkFDbEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7a0JBQ3ZDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2tCQUN6QyxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztrQkFDekMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxLQUFLLENBQUMsT0FBTyxJQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2tCQUNyRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2tCQUMzQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsVUFBQSxLQUFLOztzQkFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUUsS0FBSyxDQUFDLE1BQWMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPOzBCQUN4RSxRQUFRLE9BQUUsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLE1BQWMsMENBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQzttQkFDakUsQ0FBQyxDQUFDO2tCQUNILElBQUksQ0FBQyxLQUFLLEdBQUc7c0JBQ1gsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztzQkFDM0IsSUFBSSxFQUFFLEtBQUs7bUJBQ1osQ0FBQztrQkFDRixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTtzQkFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRzswQkFDckI7OEJBQ0U7a0NBQ0UsS0FBSyxFQUFFLGFBQWE7a0NBQ3BCLElBQUksRUFBRSxRQUFRO2tDQUNkLEVBQUUsRUFBRSxpQkFBaUI7a0NBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7K0JBQ2hDOzJCQUNGO3VCQUNGLENBQUM7bUJBQ0g7ZUFDRjtXQUNGO09BQ0YsQ0FBQyxDQUFDO01BQ0gsU0FBUyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFBLEtBQUs7VUFDbEMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxpQkFBaUIsRUFBRTtjQUN4QyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQTJCLENBQUMsYUFBYSxHQUFJLEtBQUssQ0FBQyxNQUE0QixDQUFDLEtBQUssQ0FBQztXQUNuRztPQUNGLENBQUMsQ0FBQztNQUNILElBQUksS0FBSyxDQUFDO1VBQ1IsSUFBSSxNQUFBO1VBQ0osU0FBUyxFQUFFLFVBQVU7VUFDckIsZUFBZSxFQUNiLGtIQUFrSDtPQUNySCxDQUFDLENBQUM7TUFDSCxJQUFJLFNBQVMsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7TUFFeEUsSUFBSSxjQUFjLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztNQUV0RCxJQUFNLFdBQVcsR0FBOEIsSUFBSSxvQkFBb0IsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQztNQUNsRixJQUFNLGlCQUFpQixHQUFXLElBQUksTUFBTSxDQUFDO1VBQzNDLE9BQU8sRUFBRSxXQUFXO1VBQ3BCLElBQUksRUFBRSxVQUFVO1VBQ2hCLGVBQWUsRUFBRSxtQkFBbUI7T0FDckMsQ0FBQyxDQUFDO01BRUgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLENBQUM7TUFFOUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztNQUNyRCxJQUFNLE1BQU0sR0FBVyxJQUFJLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO01BQ2xELE1BQU0sQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQUMsS0FBVTtVQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ3BCLENBQUMsQ0FBQztNQUNILElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztNQUVoQyxJQUFNLEtBQUssR0FBVSxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO01BQy9DLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsS0FBVTtVQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ3BCLENBQUMsQ0FBQztNQUNILElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztNQUUvQixXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztNQUN4QixXQUFXLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztNQUNyQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztNQUN2QixVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztNQVdqQyxjQUFjLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztNQUMzQixjQUFjLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztNQUN6QyxjQUFjLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztNQUMzQyxjQUFjLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztNQUM1QyxjQUFjLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztNQUdyQyxNQUFNLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztNQUMvQixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztNQUNuQixNQUFNLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztNQUM1QixPQUFPLElBQUksQ0FBQztFQUNkLENBQUM7Ozs7QUM1SEQsRUFjQSxJQUFNLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQztNQUN2QixTQUFTLEVBQUUsU0FBUztNQUNwQixHQUFHLEtBQUE7R0FDSixDQUFDLENBQUM7RUFFSCxJQUFNLFlBQVksR0FBRyxVQUFDLE1BQWM7TUFDbEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQWtCO1VBQzdELElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxNQUFNLEVBQUU7Y0FDekIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7V0FDL0I7ZUFBTTtjQUNMLEtBQUssQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7Y0FDbkMsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRTtrQkFDM0IsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsOEJBQThCLENBQUMsQ0FBQztlQUM3RDttQkFBTTtrQkFDTCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2VBQ2pEO2NBQ0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Y0FDakMsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRSxDQUU3QjttQkFBTTtrQkFDTCxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7ZUFDN0I7V0FDRjtPQUNGLENBQUMsQ0FBQztFQUNMLENBQUMsQ0FBQztFQUVGLElBQU0sT0FBTyxHQUFRLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ2pFLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxPQUFPLENBQUMsVUFBQyxNQUFXO01BQzNCLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFNO1VBQ3ZDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQzdCLEVBQUU7RUFDTCxDQUFDLEVBQUU7RUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDO01BQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztVQUM5QixJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO2NBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFVBQUEsT0FBTztrQkFDNUIsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7c0JBQ3JDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFOzBCQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7OEJBQ2hDLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7MkJBQzFCLENBQUMsQ0FBQzswQkFDSCxJQUFJLEtBQUssRUFBRTs4QkFDVCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7MkJBQzVCO3VCQUNGO21CQUNGLENBQUMsQ0FBQztlQUNKLENBQUMsQ0FBQztXQUNKO2VBQU07Y0FDTCxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFBLE9BQU87a0JBQzVCLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO3NCQUM3QyxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDO21CQUMxQixDQUFDLENBQUM7a0JBQ0gsSUFBSSxLQUFLLEVBQUU7c0JBQ1QsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7bUJBQ3RCO2VBQ0YsQ0FBQyxDQUFDO1dBQ0o7T0FDRixDQUFDLENBQUM7TUFDSCxJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7VUFDNUMsT0FBTyxLQUFLLENBQUMsS0FBSyxLQUFLLFVBQVUsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztPQUMvRCxDQUFDLENBQUM7TUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFBLENBQUM7VUFDZixjQUFjLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7VUFDckMsU0FBUztPQUNWLENBQUMsQ0FBQztNQUNILElBQUk7V0FDRCxhQUFhLENBQUMsYUFBYSxDQUFDO1dBQzVCLElBQUksQ0FBQztVQUNKLGNBQWMsQ0FBQyxhQUFhLEdBQUcsYUFBb0MsQ0FBQztVQUNwRSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsRUFBTzs7Y0FDM0MsSUFBSSxFQUFFLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTtrQkFDM0IsSUFBSSxPQUFBLE1BQU0sQ0FBQyxTQUFTLDBDQUFFLGNBQWMsSUFBRyxDQUFDLEVBQUU7c0JBQ3hDLElBQU0sQ0FBQyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7c0JBQ3hHLGNBQWMsQ0FBQyxRQUFRLEdBQUcsQ0FBbUIsQ0FBQztzQkFDOUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO3NCQUN4QixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3NCQUMxQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRzswQkFDbEIsSUFBSSxFQUFFLGFBQWE7MEJBQ25CLEtBQUssRUFBRSxNQUFNOzBCQUNiLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTswQkFDdkUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDO3VCQUM1QixDQUFDO3NCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO21CQUN2Qjt1QkFBTTtzQkFDTCxjQUFjLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO21CQUMvQztrQkFDRCxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7ZUFDeEI7V0FDRixDQUFDLENBQUM7T0FDSixDQUFDO1dBQ0QsS0FBSyxDQUFDLFVBQUMsTUFBVztVQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1VBQ3BCLFNBQVMsQ0FBQyw4REFBOEQsRUFBRSxLQUFLLENBQUMsQ0FBQztPQUNsRixDQUFDLENBQUM7RUFDUCxDQUFDLENBQUMsQ0FBQztFQUVILElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7TUFDNUIsTUFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQywwQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtHQUNyRTtFQUVELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO01BQ3JELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBNkIsRUFBRTtVQUNuRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtjQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2NBQzdDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2tCQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztlQUN2QyxDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7T0FDSixDQUFDLENBQUM7RUFDTCxDQUFDLENBQUMsQ0FBQztFQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO01BQ2pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7O1VBQzdCLFlBQUEsSUFBSSxDQUFDLGFBQWEsMENBQUUsYUFBYSwwQ0FBRSxlQUFlLENBQUMsV0FBVyxFQUFFO1VBQ2hFLFlBQUEsSUFBSSxDQUFDLGFBQWEsMENBQUUsYUFBYSwwQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtVQUM5RCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVSxFQUFFO2NBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2NBQ3RDLFlBQUEsSUFBSSxDQUFDLGFBQWEsMENBQUUsYUFBYSwwQ0FBRSxZQUFZLENBQUMsT0FBTyxFQUFFLDhCQUE4QixFQUFFO1dBQzFGO2VBQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsRUFBRTtjQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztjQUN0QyxZQUFBLElBQUksQ0FBQyxhQUFhLDBDQUFFLGFBQWEsMENBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRTtXQUM3RTtPQUNGLENBQUMsQ0FBQztFQUNMLENBQUMsQ0FBQyxDQUFDO0VBQ0gsTUFBTSxDQUFDLFFBQVEsR0FBRzs7TUFDaEIsSUFBSSxPQUFDLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxNQUFjLDBDQUFFLFVBQVUsS0FBSSxHQUFHLEVBQUU7VUFDN0MsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7O2NBQ3JELElBQUksT0FBQSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQywwQ0FBRSxZQUFZLENBQUMsTUFBTSxPQUFNLFVBQVUsRUFBRTtrQkFDeEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsOEJBQThCLENBQUMsQ0FBQztlQUM1RDttQkFBTTtrQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2VBQ2hEO1dBQ0YsQ0FBQyxDQUFDO09BQ0o7V0FBTTtVQUNMLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2NBQ3JELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRTtrQkFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztlQUM5QzttQkFBTTtrQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO2VBQ3pEO1dBQ0YsQ0FBQyxDQUFDO09BQ0o7RUFDSCxDQUFDLENBQUM7RUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0VBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7RUFFcEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7O01BQ3JELElBQU0sQ0FBQyxHQUFnQixNQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxVQUFVLDBDQUFFLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBZ0IsQ0FBQztNQUM1RixDQUFDLENBQUMsU0FBUyxJQUFJLHNEQUFzRCxDQUFDO0VBQ3hFLENBQUMsQ0FBQyxDQUFDO0VBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRTtNQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTO1dBQ2YsTUFBTSxDQUFDLFVBQUEsS0FBSztVQUNYLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksQ0FBRSxLQUEyQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7T0FDOUUsQ0FBQztXQUNELE9BQU8sRUFBRSxDQUNiLENBQUM7TUFDRixJQUFNLElBQUksR0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO01BQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO01BQ3pELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7RUFTN0QsQ0FBQyxDQUFDLENBQUM7RUFFSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO01BQzFELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyx5QkFBeUIsRUFBRTtVQUM1QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO09BQ3BFO0VBQ0gsQ0FBQyxDQUFDLENBQUM7Ozs7OyJ9
