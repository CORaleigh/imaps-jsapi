
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
define(['esri/WebMap', 'esri/views/MapView', 'esri/geometry/geometryEngine', 'esri/widgets/Legend', 'esri/widgets/Print', 'esri/widgets/Bookmarks', 'esri/core/accessorSupport/decorators', 'esri/widgets/support/widget', 'esri/widgets/Widget', 'esri/core/Accessor', 'esri/widgets/Search', 'esri/widgets/FeatureTable', 'esri/layers/FeatureLayer', 'esri/layers/GraphicsLayer', 'esri/widgets/Feature', 'esri/core/watchUtils', 'esri/widgets/Search/LayerSearchSource', 'esri/widgets/FeatureTable/FieldColumnConfig', 'esri/PopupTemplate', 'esri/widgets/CoordinateConversion', 'esri/widgets/Expand', 'esri/widgets/Measurement', 'esri/widgets/Compass', 'esri/widgets/Locate', 'esri/widgets/Track', 'esri/Color', 'esri/widgets/Sketch', 'esri/Graphic', 'esri/symbols/TextSymbol', 'esri/widgets/BasemapGallery', 'esri/widgets/LayerList'], function (WebMap, MapView, geometryEngine, Legend, Print, Bookmarks, decorators, widget, Widget, Accessor, Search, FeatureTable, FeatureLayer, GraphicsLayer, Feature, watchUtils, LayerSearchSource, FieldColumnConfig, PopupTemplate, CoordinateConversion, Expand, Measurement, Compass, Locate, Track, Color, Sketch, Graphic, TextSymbol, BaseMapGallery, LayerList) { 'use strict';

  WebMap = WebMap && Object.prototype.hasOwnProperty.call(WebMap, 'default') ? WebMap['default'] : WebMap;
  MapView = MapView && Object.prototype.hasOwnProperty.call(MapView, 'default') ? MapView['default'] : MapView;
  geometryEngine = geometryEngine && Object.prototype.hasOwnProperty.call(geometryEngine, 'default') ? geometryEngine['default'] : geometryEngine;
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
                  _this.featureTable.layer = new FeatureLayer({
                      fields: _this.condosTable.fields,
                      source: features,
                      title: 'Selected properties',
                      geometryType: 'point',
                      objectIdField: 'OBJECTID'
                  });
                  if (features.length === 1) {
                      if (!features[0].geometry) {
                          features[0].geometry = geometry;
                      }
                      _this.setFeature(features[0], _this.view, [], [features[0].getObjectId()]);
                      _this.toggleContent('feature');
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
  }(decorators.declared(Widget)));
  //# sourceMappingURL=Select.js.map

  var BaseMapsViewModel = (function (_super) {
      __extends(BaseMapsViewModel, _super);
      function BaseMapsViewModel(params) {
          var _this = _super.call(this, params) || this;
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
          this.view.map.watch('basemap', function (basemap) {
              var _a, _b, _c;
              console.log(basemap.title);
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
  }(decorators.declared(Accessor)));

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
                  return _this.viewModel.activeBasemap.baseLayers.includes(layer);
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
  }(decorators.declared(Widget)));
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
  }(decorators.declared(Accessor)));
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
  }(decorators.declared(Widget)));
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
  }(decorators.declared(Accessor)));
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
  }(decorators.declared(Widget)));
  //# sourceMappingURL=LocationSearch.js.map

  var measurement = new Measure();
  var select = new Select();
  var layerList;
  var propertySearch = new PropertySearch();
  var drawWidget = new Draw();
  function initWidgets(view) {
      new Legend({ view: view, container: 'legendDiv' });
      new Layers({ view: view, container: 'layersDiv' });
      new Print({
          view: view,
          container: 'printDiv',
          printServiceUrl: 'https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task'
      });
      new Bookmarks({ view: view, container: 'bookmarkDiv', editingEnabled: true });
      new BaseMaps({ view: view, container: 'basemapDiv' });
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
      new LocationSearch({ view: view, container: 'locationDiv' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FwcC50cyIsIi4uLy4uL3NyYy90aXBzLnRzIiwiLi4vLi4vc3JjL2FsZXJ0LnRzIiwiLi4vLi4vc3JjL3dpZGdldHMvUHJvcGVydHlTZWFyY2gvUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaC50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9NZWFzdXJlL01lYXN1cmVWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9NZWFzdXJlLnRzeCIsIi4uLy4uL3NyYy9kYXRhL3NlYXJjaC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0RyYXcvRHJhd1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0RyYXcudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvU2VsZWN0L1NlbGVjdFZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL1NlbGVjdC50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy9CYXNlTWFwcy9CYXNlTWFwc1ZpZXdNb2RlbC50cyIsIi4uLy4uL3NyYy93aWRnZXRzL0Jhc2VNYXBzLnRzeCIsIi4uLy4uL3NyYy93aWRnZXRzL0xheWVycy9MYXllcnNWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9MYXllcnMudHN4IiwiLi4vLi4vc3JjL3dpZGdldHMvTG9jYXRpb25TZWFyY2gvTG9jYXRpb25TZWFyY2hWaWV3TW9kZWwudHMiLCIuLi8uLi9zcmMvd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaC50c3giLCIuLi8uLi9zcmMvd2lkZ2V0cy50cyIsIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBUaWxlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvVGlsZUxheWVyJztcbi8vaW1wb3J0IFZlY3RvclRpbGVMYXllciBmcm9tICdlc3JpL2xheWVycy9WZWN0b3JUaWxlTGF5ZXInO1xuLy9pbXBvcnQgQXJjR0lTTWFwIGZyb20gJ2VzcmkvTWFwJztcbi8vaW1wb3J0IHsgZmVhdHVyZUxheWVyIH0gZnJvbSAnLi9zZWFyY2gnO1xuaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG5leHBvcnQgbGV0IG1hcCA9IG5ldyBXZWJNYXAoKTtcbm1hcCA9IG5ldyBXZWJNYXAoeyBwb3J0YWxJdGVtOiB7IGlkOiAnOTUwOTI0Mjg3NzRjNGIxZmI2YTNiNmY1ZmVkOWZiYzQnIH0gfSk7XG5pZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwcycpKSB7XG4gIG1hcCA9IFdlYk1hcC5mcm9tSlNPTihKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hcHMnKSBhcyBzdHJpbmcpKTtcbn1cbi8vIGV4cG9ydCBjb25zdCBtYXAgPSBuZXcgQXJjR0lTTWFwKHtcbi8vICAgYmFzZW1hcDoge1xuLy8gICAgIGJhc2VMYXllcnM6IFtcbi8vICAgICAgIG5ldyBUaWxlTGF5ZXIoe1xuLy8gICAgICAgICBwb3J0YWxJdGVtOiB7XG4vLyAgICAgICAgICAgLy8gd29ybGQgaGlsbHNoYWRlXG4vLyAgICAgICAgICAgaWQ6ICcxYjI0MzUzOWY0NTE0YjZiYTM1ZTdkOTk1ODkwZGIxZCdcbi8vICAgICAgICAgfVxuLy8gICAgICAgfSksXG4vLyAgICAgICBuZXcgVmVjdG9yVGlsZUxheWVyKHtcbi8vICAgICAgICAgcG9ydGFsSXRlbToge1xuLy8gICAgICAgICAgIC8vIHRvcG9ncmFwaGljXG4vLyAgICAgICAgICAgaWQ6ICc3ZGM2Y2VhMGIxNzY0YTFmOWFmMmU2NzlmNjQyZjBmNSdcbi8vICAgICAgICAgfVxuLy8gICAgICAgfSlcbi8vICAgICBdXG4vLyAgIH0sXG4vLyAgIGxheWVyczogW2ZlYXR1cmVMYXllcl1cbi8vIH0pO1xuIiwiY29uc3QgdGlwR3JvdXBzID0gW1xuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdzZWxlY3RUaXAnLFxuICAgICAgdGl0bGU6ICdTZWxlY3Rpb24nLFxuICAgICAgdGlwczogW1xuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIGRyYXcgYSBjb250aW51b3VzIGxpbmUgb3IgcG9seWdvbiwgbG9uZyBwcmVzcyBhbmQgZHJhZyB5b3VyIGN1cnNvcicsXG4gICAgICAgICAgdGl0bGU6ICdGcmVlaGFuZCBEcmF3aW5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIGRyYXcgYSBjb250aW51b3VzIGxpbmUgb3IgcG9seWdvbiwgbG9uZyBwcmVzcyBhbmQgZHJhZyB5b3VyIGN1cnNvcicsXG4gICAgICAgICAgdGl0bGU6ICdGcmVlaGFuZCBEcmF3aW5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgcGFuZWw6IHtcbiAgICAgIG5hbWU6ICdwcm9wZXJ0eVNlYXJjaFRpcCcsXG4gICAgICB0aXRsZTogJ1Byb3BlcnR5IFNlYXJjaCcsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ1RvIHNlYXJjaCBieSBhIHBvcnRpb24gb2YgYW4gb3duZXIgbmFtZSBvciBhZGRyZXNzLCBoaXQgZW50ZXIgd2l0aG91dCBzZWxlY3RpbmcgZm9ybSB0aGUgbGlzdCBvZiBzdWdnZXN0aW9ucy4nLFxuICAgICAgICAgIHRpdGxlOiAnV2lsZGNhcmQgU2VhcmNoJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogJ1RvIHF1aWNrbHkgc2VsZWN0IGEgcHJvcGVydHkgZnJvbSB0aGUgbWFwLCBsb25nIHByZXNzIG9uIGEgcHJvcGVydHkgb24gdGhlIG1hcC4nLFxuICAgICAgICAgIHRpdGxlOiAnTG9uZyBQcmVzcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUbyBzZWxlY3QgYnkgYSBsb2NhdGlvbiB1c2UgdGhlIHByb3BlcnR5IHNlbGVjdGlvbiB0b29sLicsXG4gICAgICAgICAgdGl0bGU6ICdTZWxlY3QgQnkgTG9jYXRpb24nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwYW5lbDoge1xuICAgICAgbmFtZTogJ2Jhc2VtYXBUaXAnLFxuICAgICAgdGl0bGU6ICdCYXNlbWFwcycsXG4gICAgICB0aXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgJ1RoZSBpbWFnZXJ5IGFuZCBpbWFnZXJ5IGh5YnJpZCBiYXNlIG1hcHMgbGlzdGVkIHVuZGVyIHRoZSBtYXBzIHRhYiBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBsYXRlc3QgaW1hZ2VyeSBmcm9tIFJhbGVpZ2ggKDIwMTkpIGFuZCBmcm9tIHRoZSBTdGF0ZSBvZiBOb3J0aCBDYXJvbGluYSAoMjAxNykuJyxcbiAgICAgICAgICB0aXRsZTogJ0ltYWdlcnkgQmFzZW1hcHMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbl07XG5leHBvcnQgZnVuY3Rpb24gaW5pdFRpcHMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXAnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYWxjaXRlLXRpcC1tYW5hZ2VyJyk/LnJlbW92ZSgpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGNvbnN0IG1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcC1tYW5hZ2VyJyk7XG4gICAgICBjb25zdCB0aXBHcm91cCA9IHRpcEdyb3Vwcy5maW5kKGdyb3VwID0+IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnBhbmVsLm5hbWUgPT09IGl0ZW0uaWQ7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXRpcC1ncm91cCcpO1xuICAgICAgZ3JvdXAuc2V0QXR0cmlidXRlKCd0ZXh0LWdyb3VwLXRpdGxlJywgdGlwR3JvdXA/LnBhbmVsLnRpdGxlKTtcbiAgICAgIG1hbmFnZXIuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgICAgdGlwR3JvdXA/LnBhbmVsLnRpcHMuZm9yRWFjaCh0aXAgPT4ge1xuICAgICAgICBjb25zdCBjYWxjaXRlVGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS10aXAnKTtcbiAgICAgICAgY2FsY2l0ZVRpcC5zZXRBdHRyaWJ1dGUoJ2hlYWRpbmcnLCB0aXAudGl0bGUpO1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLmlubmVySFRNTCA9IHRpcC5tZXNzYWdlO1xuICAgICAgICBjYWxjaXRlVGlwLmFwcGVuZENoaWxkKHApO1xuICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjYWxjaXRlVGlwKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQ/LmJvZHk/LmFwcGVuZENoaWxkKG1hbmFnZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzaG93QWxlcnQodGV4dDogc3RyaW5nLCBjb2xvcjogc3RyaW5nKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbGNpdGUtYWxlcnQnKT8ucmVtb3ZlKCk7XG4gIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FsY2l0ZS1hbGVydCcpO1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdzbG90JywgJ2FsZXJ0LW1lc3NhZ2UnKTtcbiAgbWVzc2FnZS5pbm5lckhUTUwgPSB0ZXh0O1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgY29sb3IpO1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdpY29uJywgJycpO1xuXG4gIGFsZXJ0LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFsZXJ0KTtcbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gnO1xuaW1wb3J0IEZlYXR1cmVUYWJsZSBmcm9tICdlc3JpL3dpZGdldHMvRmVhdHVyZVRhYmxlJztcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcblxuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5cbmltcG9ydCBGZWF0dXJlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlJztcbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSwgd2hlbkRlZmluZWQgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgTGF5ZXJTZWFyY2hTb3VyY2UgZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaC9MYXllclNlYXJjaFNvdXJjZSc7XG5pbXBvcnQgRmllbGRDb2x1bW5Db25maWcgZnJvbSAnZXNyaS93aWRnZXRzL0ZlYXR1cmVUYWJsZS9GaWVsZENvbHVtbkNvbmZpZyc7XG5pbXBvcnQgUG9wdXBUZW1wbGF0ZSBmcm9tICdlc3JpL1BvcHVwVGVtcGxhdGUnO1xuaW1wb3J0IEV4cHJlc3Npb25JbmZvIGZyb20gJ2VzcmkvcG9wdXAvRXhwcmVzc2lvbkluZm8nO1xuaW1wb3J0IE1lbnVCdXR0b25JdGVtIGZyb20gJ2Vzcmkvd2lkZ2V0cy9GZWF0dXJlVGFibGUvR3JpZC9zdXBwb3J0L0J1dHRvbk1lbnVJdGVtJztcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuUHJvcGVydHlTZWFyY2guUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgZXh0ZW5kcyBkZWNsYXJlZChBY2Nlc3Nvcikge1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQHByb3BlcnR5KCkgY29uZG9zVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAcHJvcGVydHkoKSBhZGRyZXNzVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAcHJvcGVydHkoKSBwcm9wZXJ0eUxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcblxuICBAcHJvcGVydHkoKSBzZWFyY2hXaWRnZXQ6IGVzcmkud2lkZ2V0c1NlYXJjaDtcbiAgQHByb3BlcnR5KCkgZmVhdHVyZVRhYmxlOiBlc3JpLkZlYXR1cmVUYWJsZTtcbiAgQHByb3BlcnR5KCkgZmVhdHVyZTogZXNyaS5GZWF0dXJlO1xuICBAcHJvcGVydHkoKSBnZW9tZXRyeTogZXNyaS5HZW9tZXRyeTtcblxuICBAcHJvcGVydHkoKSBuYW1lID0gJ1Byb3BlcnR5IFNlYXJjaCc7XG4gIGdyYXBoaWNzID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBpZDogJ3Byb3BlcnR5LXNlbGVjdCcsIGxpc3RNb2RlOiAnaGlkZScgfSk7XG4gIHNpbmdsZVN5bWJvbCA9IHtcbiAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgIHN0eWxlOiAnbm9uZScsXG4gICAgb3V0bGluZTogeyB3aWR0aDogMi41LCBjb2xvcjogWzI1NSwgODIsIDgyLCAxXSB9LFxuICAgIGNvbG9yOiBbMjUzLCA0NiwgNjUsIDAuMjVdXG4gIH07XG4gIG11bHRpU3ltYm9sID0ge1xuICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXG4gICAgc3R5bGU6ICdub25lJyxcbiAgICBvdXRsaW5lOiB7IHdpZHRoOiAyLjUsIGNvbG9yOiBbMjQ5LCAyNDMsIDAsIDFdIH0sXG4gICAgY29sb3I6IFsyNTMsIDQ2LCA2NSwgMC4yNV1cbiAgfTtcblxuICBoaWdobGlnaHRzOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAnY29uZG9zVGFibGUnLCB0aGlzLmluaXRTZWFyY2guYmluZCh0aGlzKSk7XG4gICAgd2hlbkRlZmluZWQodGhpcywgJ2dlb21ldHJ5JywgdGhpcy5zZWFyY2hCeUdlb21ldHJ5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc2VhcmNoQnlHZW9tZXRyeShnZW9tZXRyeTogZXNyaS5HZW9tZXRyeSkge1xuICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgLnF1ZXJ5RmVhdHVyZXMoeyBnZW9tZXRyeTogZ2VvbWV0cnksIHJldHVybkdlb21ldHJ5OiB0cnVlLCBvdXRGaWVsZHM6IFsnT0JKRUNUSUQnLCAnUkVJRCddIH0pXG4gICAgICAudGhlbihwcm9wZXJ0eVJlc3VsdCA9PiB7XG4gICAgICAgIC8vIGNvbnN0IGxheWVyVmlldyA9IHRoaXMudmlldy5sYXllclZpZXdzLmZpbmQodmlldyA9PiB7XG4gICAgICAgIC8vICAgcmV0dXJuIHZpZXcubGF5ZXIgPT09IHRoaXMucHJvcGVydHlMYXllcjtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIGlmIChsYXllclZpZXcpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuaGlnaGxpZ2h0cykge1xuICAgICAgICAvLyAgIHRoaXMuaGlnaGxpZ2h0cy5yZW1vdmUoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLmhpZ2hsaWdodHMgPSAobGF5ZXJWaWV3IGFzIGVzcmkuRmVhdHVyZUxheWVyVmlldykuaGlnaGxpZ2h0KHJlc3VsdC5mZWF0dXJlcyk7XG4gICAgICAgIC8vIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG4gICAgICAgIC8vIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKGZlYXR1cmUgPT4ge1xuICAgICAgICAvLyAgIGZlYXR1cmUuc3ltYm9sID0gdGhpcy5tdWx0aVN5bWJvbCBhcyBhbnk7XG4gICAgICAgIC8vICAgdGhpcy5ncmFwaGljcy5hZGQoZmVhdHVyZSk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMucHJvcGVydHlMYXllci5yZWxhdGlvbnNoaXBzLmZpbmQociA9PiB7XG4gICAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ1BST1BFUlRZX0NPTkRPJztcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgb2lkcy5wdXNoKGYuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BlcnR5TGF5ZXJcbiAgICAgICAgICAucXVlcnlSZWxhdGVkRmVhdHVyZXMoeyByZWxhdGlvbnNoaXBJZDogcmVsYXRpb25zaGlwPy5pZCwgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxldCBmZWF0dXJlczogYW55W10gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzLmNvbmNhdChyZXN1bHRba2V5XS5mZWF0dXJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgICAgICAgICBmaWVsZHM6IHRoaXMuY29uZG9zVGFibGUuZmllbGRzLFxuICAgICAgICAgICAgICBzb3VyY2U6IGZlYXR1cmVzLFxuICAgICAgICAgICAgICB0aXRsZTogJ1NlbGVjdGVkIHByb3BlcnRpZXMnLFxuICAgICAgICAgICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICAgICAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBpZiAoIWZlYXR1cmVzWzBdLmdlb21ldHJ5KSB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZXNbMF0uZ2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmUoZmVhdHVyZXNbMF0sIHRoaXMudmlldyBhcyBlc3JpLk1hcFZpZXcsIFtdLCBbZmVhdHVyZXNbMF0uZ2V0T2JqZWN0SWQoKV0pO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnQoJ2ZlYXR1cmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLnJlbmRlck5vdygpO1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgIHByb3BlcnR5UmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICBmZWF0dXJlLnN5bWJvbCA9XG4gICAgICAgICAgICAgICAgcHJvcGVydHlSZXN1bHQuZmVhdHVyZXMubGVuZ3RoID4gMSA/ICh0aGlzLm11bHRpU3ltYm9sIGFzIGFueSkgOiAodGhpcy5zaW5nbGVTeW1ib2wgYXMgYW55KTtcblxuICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmFkZChmZWF0dXJlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY3MsIHZpZXcubWFwLmFsbExheWVycy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIGFyY2FkZUV4cHJlc3Npb25JbmZvcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnYm9tLWRvYy1udW0nLFxuICAgICAgdGl0bGU6ICdib20tZG9jLW51bScsXG4gICAgICBleHByZXNzaW9uOlxuICAgICAgICBcInZhciByZXN1bHRzID0gRmVhdHVyZVNldEJ5UmVsYXRpb25zaGlwTmFtZSgkZmVhdHVyZSwgJ0NPTkRPX0JPT0tTJywgWycqJ10sIGZhbHNlKTsgcmV0dXJuIEZpcnN0KHJlc3VsdHMpLkJPTV9ET0NfTlVNO1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGVlZC1kb2MtbnVtJyxcbiAgICAgIHRpdGxlOiAnZGVlZC1kb2MtbnVtJyxcbiAgICAgIGV4cHJlc3Npb246XG4gICAgICAgIFwidmFyIHJlc3VsdHMgPSBGZWF0dXJlU2V0QnlSZWxhdGlvbnNoaXBOYW1lKCRmZWF0dXJlLCAnQ09ORE9fQk9PS1MnLCBbJyonXSwgZmFsc2UpOyByZXR1cm4gRmlyc3QocmVzdWx0cykuREVFRF9ET0NfTlVNO1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICAgIHRpdGxlOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICdXaGVuKElzRW1wdHkoJGZlYXR1cmUuQUREUjMpLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyLCRmZWF0dXJlLkFERFIxICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIyICsgVGV4dEZvcm1hdHRpbmcuTmV3TGluZSArICRmZWF0dXJlLkFERFIzKSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgICAgdGl0bGU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgJ1wiQnVpbGRpbmcgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkJMREdfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJMYW5kIFZhbHVlXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIiRcIiskZmVhdHVyZS5MQU5EX1ZBTCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiVG90YWwgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLlRPVEFMX1ZBTFVFX0FTU0QnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGVlZC1ib29rLXBhZ2UnLFxuICAgICAgdGl0bGU6ICdkZWVkLWJvb2stcGFnZScsXG4gICAgICBleHByZXNzaW9uOiAnXCJCb29rIFwiKyRmZWF0dXJlLkRFRURfQk9PSytcIiBQYWdlIFwiKyRmZWF0dXJlLkRFRURfUEFHRSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdnZW5lcmFsJyxcbiAgICAgIHRpdGxlOiAnZ2VuZXJhbCcsXG4gICAgICBleHByZXNzaW9uOlxuICAgICAgICAnXCJQSU5cIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKyRmZWF0dXJlLlBJTl9OVU0rXCIgXCIrJGZlYXR1cmUuUElOX0VYVCtUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgICAnXCJSRUlEXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5SRUlEK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJDaXR5XCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICAgJ1Byb3BlcigkZmVhdHVyZS5DSVRZX0RFQ09ERSkrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkp1cmlzZGljdGlvblwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAgICckZmVhdHVyZS5QTEFOTklOR19KVVJJU0RJQ1RJT04rVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIlRvd25zaGlwXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStQcm9wZXIoJGZlYXR1cmUuVE9XTlNISVBfREVDT0RFKSdcbiAgICB9XG4gIF0gYXMgRXhwcmVzc2lvbkluZm9bXTtcblxuICBwb3B1cFRlbXBsYXRlID0gbmV3IFBvcHVwVGVtcGxhdGUoe1xuICAgIGV4cHJlc3Npb25JbmZvczogdGhpcy5hcmNhZGVFeHByZXNzaW9uSW5mb3MsXG4gICAgY29udGVudDogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHRleHQ6XG4gICAgICAgICAgJzxoMSBjbGFzcz1cInRleHQtZ3JlZW5cIj57U0lURV9BRERSRVNTfTwvaDE+JyArXG4gICAgICAgICAgJzxoMj5HZW5lcmFsPC9oMj57ZXhwcmVzc2lvbi9nZW5lcmFsfScgK1xuICAgICAgICAgICc8aDI+T3duZXI8L2gyPntPV05FUn08YnIvPntleHByZXNzaW9uL21haWxpbmctYWRkcmVzc30nICtcbiAgICAgICAgICAnPGgyPlZhbHVhdGlvbjwvaDI+e2V4cHJlc3Npb24vcHJvcGVydHktdmFsdWVzfScgK1xuICAgICAgICAgICc8aDI+U2FsZSBJbmZvcm1hdGlvbjwvaDI+e1RPVFNBTFBSSUNFfTxici8+e1NBTEVfREFURX0nICtcbiAgICAgICAgICAnPGgyPkRlZWRzPC9oMj57ZXhwcmVzc2lvbi9kZWVkLWJvb2stcGFnZX0nICtcbiAgICAgICAgICAnPGJyLz48c3Ryb25nPkRlZWQgRGF0ZTwvc3Ryb25nPjxici8+e0RFRURfREFURX08YnIvPicgK1xuICAgICAgICAgICc8YnIvPkxlZ2FsIERlc2NyaXB0aW9uPGJyLz57UFJPUERFU0N9PGJyLz4nICtcbiAgICAgICAgICAnPGEgaHJlZj1cImh0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9ib29rc3dlYi9wZGZ2aWV3LmFzcHg/ZG9jaWQ9e2V4cHJlc3Npb24vYm9tLWRvYy1udW19JlJlY29yZERhdGU9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+Qm9vayBvZiBNYXBzPC9hPjxici8+PGEgaHJlZj1cImh0dHA6Ly9zZXJ2aWNlcy53YWtlZ292LmNvbS9ib29rc3dlYi9wZGZ2aWV3LmFzcHg/ZG9jaWQ9e2V4cHJlc3Npb24vZGVlZC1kb2MtbnVtfSZSZWNvcmREYXRlPVwiIHRhcmdldD1cIl9ibGFua1wiPkRlZWQ8L2E+J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ21lZGlhJyxcbiAgICAgICAgbWVkaWFJbmZvczogW11cbiAgICAgIH1cbiAgICBdXG4gIH0pO1xuXG4gIGdldFByb3BlcnR5ID0gKG9pZHM6IGFueVtdLCBzb3VyY2U/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB0aGlzLmNvbmRvc1RhYmxlLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgIHJldHVybiByLm5hbWUgPT09ICdDT05ET19QUk9QRVJUWSc7XG4gICAgfSk7XG4gICAgdGhpcy5jb25kb3NUYWJsZVxuICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHtcbiAgICAgICAgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsXG4gICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgb3V0RmllbGRzOiBbJ09CSkVDVElEJywgJ1JFSUQnXSxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IGZhbHNlXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcGVydHlMYXllclxuICAgICAgICAgIC5xdWVyeUZlYXR1cmVzKHtcbiAgICAgICAgICAgIG9iamVjdElkczogb2lkcyxcbiAgICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZSxcbiAgICAgICAgICAgIG91dFNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ29UbyhyZXN1bHQuZmVhdHVyZXMpO1xuICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5zeW1ib2wgPSByZXN1bHQuZmVhdHVyZXMubGVuZ3RoID4gMSA/ICh0aGlzLm11bHRpU3ltYm9sIGFzIGFueSkgOiAodGhpcy5zaW5nbGVTeW1ib2wgYXMgYW55KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmFkZChmZWF0dXJlKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBzZWFyY2hDb21wbGV0ZSA9IChldmVudDogZXNyaS5TZWFyY2hTZWFyY2hDb21wbGV0ZUV2ZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaFdpZGdldC52aWV3TW9kZWwuc2VsZWN0ZWRTdWdnZXN0aW9uKSB7XG4gICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgbGV0IHdoZXJlID1cbiAgICAgICAgXCJPV05FUiBsaWtlICdcIiArXG4gICAgICAgIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArXG4gICAgICAgIFwiJScgT1IgUkVJRCBsaWtlICdcIiArXG4gICAgICAgIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArXG4gICAgICAgIFwiJScgT1IgUElOX05VTSBsaWtlICdcIiArXG4gICAgICAgIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArXG4gICAgICAgIFwiJ1wiO1xuICAgICAgbGV0IHRhYmxlRmVhdHVyZXM6IGFueVtdID0gW107XG4gICAgICB0aGlzLmNvbmRvc1RhYmxlLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogd2hlcmUsIG91dEZpZWxkczogWycqJ10gfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICB0YWJsZUZlYXR1cmVzID0gcmVzdWx0LmZlYXR1cmVzO1xuICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICBvaWRzLnB1c2goZi5nZXRPYmplY3RJZCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdoZXJlID0gXCJBRERSRVNTIGxpa2UgJyVcIiArIGV2ZW50LnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSArIFwiJSdcIjtcbiAgICAgICAgdGhpcy5hZGRyZXNzVGFibGUucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiB3aGVyZSwgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwID0gdGhpcy5hZGRyZXNzVGFibGUucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0FERFJFU1NFU19DT05ETyc7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgIG9pZHMucHVzaChmLmdldE9iamVjdElkKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgJiYgb2lkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkcmVzc1RhYmxlXG4gICAgICAgICAgICAgIC5xdWVyeVJlbGF0ZWRGZWF0dXJlcyh7IHJlbGF0aW9uc2hpcElkOiByZWxhdGlvbnNoaXAuaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVGZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICAgICAgICAgICAgICBmaWVsZHM6IHRoaXMuY29uZG9zVGFibGUuZmllbGRzLFxuICAgICAgICAgICAgICAgICAgc291cmNlOiB0YWJsZUZlYXR1cmVzLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgICAgIGdlb21ldHJ5VHlwZTogJ3BvaW50JyxcbiAgICAgICAgICAgICAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZVRhYmxlLnJlbmRlck5vdygpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUubGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgICAgICAgICAgZmllbGRzOiB0aGlzLmNvbmRvc1RhYmxlLmZpZWxkcyxcbiAgICAgICAgICAgICAgc291cmNlOiB0YWJsZUZlYXR1cmVzLFxuICAgICAgICAgICAgICB0aXRsZTogJ1NlbGVjdGVkIHByb3BlcnRpZXMnLFxuICAgICAgICAgICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICAgICAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlVGFibGUucmVuZGVyTm93KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudC5udW1SZXN1bHRzKTtcbiAgICAgIGlmIChldmVudC5udW1SZXN1bHRzKSB7XG4gICAgICAgIGNvbnN0IGxheWVyID0gKGV2ZW50LnJlc3VsdHNbMF0uc291cmNlIGFzIExheWVyU2VhcmNoU291cmNlKS5sYXllciBhcyBGZWF0dXJlTGF5ZXI7XG4gICAgICAgIGNvbnN0IG9pZHM6IGFueVtdID0gW107XG4gICAgICAgIGV2ZW50LnJlc3VsdHNbMF0ucmVzdWx0cy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgIG9pZHMucHVzaChyLmZlYXR1cmUuZ2V0T2JqZWN0SWQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGF5ZXIubGF5ZXJJZCA9PT0gNCkge1xuICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IGxheWVyLnJlbGF0aW9uc2hpcHMuZmluZChyID0+IHtcbiAgICAgICAgICAgIHJldHVybiByLm5hbWUgPT09ICdBRERSRVNTRVNfQ09ORE8nO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgJiYgb2lkcykge1xuICAgICAgICAgICAgbGF5ZXJcbiAgICAgICAgICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcC5pZCwgb2JqZWN0SWRzOiBvaWRzLCBvdXRGaWVsZHM6IFsnKiddIH0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2lkczogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgb2lkcy5wdXNoKGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdPQkpFQ1RJRCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9wZXJ0eShvaWRzKTtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5sYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZShmZWF0dXJlLCB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LCBbXSwgb2lkcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29udGVudCgnZmVhdHVyZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogdGhpcy5jb25kb3NUYWJsZS5maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBbZmVhdHVyZV0sXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeVR5cGU6ICdwb2ludCcsXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29uZG9zVGFibGUucXVlcnlGZWF0dXJlcyh7IG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBvaWRzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmU6IGVzcmkuR3JhcGhpYykgPT4ge1xuICAgICAgICAgICAgICBvaWRzLnB1c2goZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ09CSkVDVElEJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KG9pZHMpO1xuICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlKHJlc3VsdC5mZWF0dXJlc1swXSwgdGhpcy52aWV3IGFzIGVzcmkuTWFwVmlldywgW10sIG9pZHMpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVUYWJsZS5sYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgICAgICAgICBmaWVsZHM6IHRoaXMuY29uZG9zVGFibGUuZmllbGRzLFxuICAgICAgICAgICAgICBzb3VyY2U6IHJlc3VsdC5mZWF0dXJlcyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdTZWxlY3RlZCBwcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgICAgICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc2V0RmVhdHVyZShmZWF0dXJlOiBlc3JpLkdyYXBoaWMsIHZpZXc6IGVzcmkuTWFwVmlldywgbWVkaWFJbmZvczogYW55W10sIG9pZHM6IGFueVtdKSB7XG4gICAgY29uc29sZS5sb2coJ3NldHRpbmcgZmVhdHVyZScpO1xuICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHRoaXMuY29uZG9zVGFibGUucmVsYXRpb25zaGlwcy5maW5kKHIgPT4ge1xuICAgICAgcmV0dXJuIHIubmFtZSA9PT0gJ0NPTkRPX1BIT1RPUyc7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVsYXRpb25zaGlwKTtcbiAgICBtZWRpYUluZm9zID0gW107XG4gICAgdGhpcy5jb25kb3NUYWJsZVxuICAgICAgLnF1ZXJ5UmVsYXRlZEZlYXR1cmVzKHsgcmVsYXRpb25zaGlwSWQ6IHJlbGF0aW9uc2hpcD8uaWQsIG9iamVjdElkczogb2lkcywgb3V0RmllbGRzOiBbJyonXSB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZTogZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICAgICAgICBtZWRpYUluZm9zLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICAgIGNhcHRpb246ICcnLFxuICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHNvdXJjZVVSTDpcbiAgICAgICAgICAgICAgICAgICdodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vcmVhbGVzdGF0ZS9waG90b3MvbXZpZGVvLycgK1xuICAgICAgICAgICAgICAgICAgZmVhdHVyZS5nZXRBdHRyaWJ1dGUoJ0lNQUdFRElSJykgK1xuICAgICAgICAgICAgICAgICAgJy8nICtcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdJTUFHRU5BTUUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmRvc1RhYmxlLnBvcHVwVGVtcGxhdGUuY29udGVudFsxXS5tZWRpYUluZm9zID0gbWVkaWFJbmZvcztcbiAgICAgICAgZmVhdHVyZS5sYXllciA9IHRoaXMuY29uZG9zVGFibGU7XG4gICAgICAgIGZlYXR1cmUucG9wdXBUZW1wbGF0ZSA9IChmZWF0dXJlLmxheWVyIGFzIGVzcmkuRmVhdHVyZUxheWVyKS5wb3B1cFRlbXBsYXRlO1xuICAgICAgICB0aGlzLmZlYXR1cmUuZ3JhcGhpYyA9IGZlYXR1cmU7XG4gICAgICAgIHRoaXMuZmVhdHVyZS5ncmFwaGljLnN5bWJvbCA9IHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLmZpbmQoZ3JhcGhpYyA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdzZWxlY3RlZCcpID09PSAndHJ1ZSc7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICBzZWxlY3RlZC5zeW1ib2wgPSB0aGlzLm11bHRpU3ltYm9sIGFzIGFueTtcbiAgICAgICAgICBzZWxlY3RlZC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ1JFSUQ6ICcsIGZlYXR1cmUuZ2V0QXR0cmlidXRlKCdSRUlEJykpO1xuICAgICAgICBjb25zdCBncmFwaGljID0gdGhpcy5ncmFwaGljcy5ncmFwaGljcy5maW5kKGdyYXBoaWMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGdyYXBoaWMuZ2V0QXR0cmlidXRlKCdSRUlEJykpO1xuICAgICAgICAgIHJldHVybiBncmFwaGljLmdldEF0dHJpYnV0ZSgnUkVJRCcpID09PSBmZWF0dXJlLmdldEF0dHJpYnV0ZSgnUkVJRCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGdyYXBoaWMpIHtcbiAgICAgICAgICBncmFwaGljLnN5bWJvbCA9IHRoaXMuc2luZ2xlU3ltYm9sIGFzIGFueTtcbiAgICAgICAgICBncmFwaGljLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuZ3JhcGhpY3MucmVvcmRlcihncmFwaGljLCB0aGlzLmdyYXBoaWNzLmdyYXBoaWNzLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydFRhYmxlKCkge1xuICAgIHRoaXMuZmVhdHVyZVRhYmxlLmxheWVyLnF1ZXJ5RmVhdHVyZXMoeyBvdXRGaWVsZHM6IFsnKiddIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGxldCBjc3YgPSAnJztcbiAgICAgIHJlc3VsdC5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGNzdiArPSBmaWVsZC5hbGlhcyArICcsJztcbiAgICAgIH0pO1xuICAgICAgY3N2ICs9ICdcXHJcXG4nO1xuICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goZmVhdHVyZSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZlYXR1cmUuYXR0cmlidXRlcykge1xuICAgICAgICAgIGlmIChrZXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZGF0ZScpKSB7XG4gICAgICAgICAgICBjc3YgKz0gJ1wiJyArIG5ldyBEYXRlKGZlYXR1cmUuYXR0cmlidXRlc1trZXldKS50b0RhdGVTdHJpbmcoKSArICdcIiwnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoa2V5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2FjcmVzJykpIHtcbiAgICAgICAgICAgIGNzdiArPSAnXCInICsgcGFyc2VGbG9hdChmZWF0dXJlLmF0dHJpYnV0ZXNba2V5XSkudG9GaXhlZCgyKSArICdcIiwnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc3YgKz0gJ1wiJyArIGZlYXR1cmUuYXR0cmlidXRlc1trZXldICsgJ1wiLCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNzdiArPSAnXFxyXFxuJztcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZXhwb3J0ZWRGaWxlbm1hZSA9ICdpbWFwc19leHBvcnQuY3N2JztcblxuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjc3ZdLCB7IHR5cGU6ICd0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04OycgfSk7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgaWYgKGxpbmsuZG93bmxvYWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBmZWF0dXJlIGRldGVjdGlvblxuICAgICAgICAvLyBCcm93c2VycyB0aGF0IHN1cHBvcnQgSFRNTDUgZG93bmxvYWQgYXR0cmlidXRlXG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZXhwb3J0ZWRGaWxlbm1hZSk7XG4gICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0U2VhcmNoKGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcikge1xuICAgIGNvbnN0IHRhYmxlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgIGZpZWxkczogW1xuICAgICAgICB7IG5hbWU6ICdTSVRFX0FERFJFU1MnLCB0eXBlOiAnc3RyaW5nJywgYWxpYXM6ICdBZGRyZXNzJyB9LFxuICAgICAgICB7IG5hbWU6ICdPV05FUicsIHR5cGU6ICdzdHJpbmcnLCBhbGlhczogJ093bmVyJyB9LFxuICAgICAgICB7IG5hbWU6ICdQSU5fTlVNJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnUElOJyB9LFxuICAgICAgICB7IG5hbWU6ICdSRUlEJywgdHlwZTogJ3N0cmluZycsIGFsaWFzOiAnUkVJRCcgfVxuICAgICAgXSxcbiAgICAgIHNvdXJjZTogW10sXG4gICAgICB0aXRsZTogJ1NlbGVjdGVkIHByb3BlcnRpZXMnLFxuICAgICAgZ2VvbWV0cnlUeXBlOiAncG9pbnQnLFxuICAgICAgb2JqZWN0SWRGaWVsZDogJ09CSkVDVElEJ1xuICAgIH0pO1xuICAgIHRoaXMuZmVhdHVyZSA9IG5ldyBGZWF0dXJlKHsgdmlldzogdGhpcy52aWV3IH0pO1xuICAgIHRoaXMuZmVhdHVyZVRhYmxlID0gbmV3IEZlYXR1cmVUYWJsZSh7XG4gICAgICB2aWV3OiB0aGlzLnZpZXcsXG4gICAgICBsYXllcjogdGFibGVMYXllcixcbiAgICAgIGZpZWxkQ29uZmlnczogW1xuICAgICAgICBuZXcgRmllbGRDb2x1bW5Db25maWcoe1xuICAgICAgICAgIG5hbWU6ICdTSVRFX0FERFJFU1MnLFxuICAgICAgICAgIGxhYmVsOiAnQWRkcmVzcycsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgRmllbGRDb2x1bW5Db25maWcoe1xuICAgICAgICAgIG5hbWU6ICdPV05FUicsXG4gICAgICAgICAgbGFiZWw6ICdPd25lcicsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgRmllbGRDb2x1bW5Db25maWcoe1xuICAgICAgICAgIG5hbWU6ICdQSU5fTlVNJyxcbiAgICAgICAgICBsYWJlbDogJ1BJTicsXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgRmllbGRDb2x1bW5Db25maWcoe1xuICAgICAgICAgIG5hbWU6ICdSRUlEJyxcbiAgICAgICAgICBsYWJlbDogJ1JFSUQnLFxuICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIG1lbnVDb25maWc6IHtcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAoe1xuICAgICAgICAgICAgbGFiZWw6ICdFeHBvcnQnXG4gICAgICAgICAgfSBhcyB1bmtub3duKSBhcyBNZW51QnV0dG9uSXRlbVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgYnV0dG9uOiBNZW51QnV0dG9uSXRlbSA9IHRoaXMuZmVhdHVyZVRhYmxlPy5tZW51Q29uZmlnPy5pdGVtcz8uZmluZChpdGVtID0+IHtcbiAgICAgIHJldHVybiBpdGVtLmxhYmVsID09PSAnRXhwb3J0JztcbiAgICB9KSBhcyBNZW51QnV0dG9uSXRlbTtcbiAgICBidXR0b24uY2xpY2tGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgIHRoaXMuZXhwb3J0VGFibGUoKTtcbiAgICB9O1xuICAgIGJ1dHRvbi5jbGlja0Z1bmN0aW9uLmJpbmQodGhpcy5mZWF0dXJlVGFibGUpO1xuXG4gICAgdGhpcy5mZWF0dXJlVGFibGUub24oJ3NlbGVjdGlvbi1jaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAodGhpcy5mZWF0dXJlVGFibGUgYXMgYW55KS5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgaWYgKGV2ZW50LmFkZGVkLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmdldFByb3BlcnR5KFtldmVudC5hZGRlZFswXS5mZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKV0sICd0YWJsZScpO1xuICAgICAgICB0aGlzLnNldEZlYXR1cmUoXG4gICAgICAgICAgZXZlbnQuYWRkZWRbMF0uZmVhdHVyZSxcbiAgICAgICAgICB0aGlzLnZpZXcgYXMgZXNyaS5NYXBWaWV3LFxuICAgICAgICAgIFtdLFxuICAgICAgICAgIFtldmVudC5hZGRlZFswXS5mZWF0dXJlLmdldEF0dHJpYnV0ZSgnT0JKRUNUSUQnKV1cbiAgICAgICAgKTtcbiAgICAgICAgZXZlbnQuYWRkZWRbMF0uZmVhdHVyZS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy50b2dnbGVDb250ZW50KCdmZWF0dXJlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hXaWRnZXQgPSBuZXcgU2VhcmNoKHtcbiAgICAgIGFsbFBsYWNlaG9sZGVyOiAnQWRkcmVzcywgb3duZXIsIFBJTiwgb3IgUkVJRCcsXG4gICAgICBpbmNsdWRlRGVmYXVsdFNvdXJjZXM6IGZhbHNlLFxuICAgICAgY29udGFpbmVyOiAnc2VhcmNoJyxcbiAgICAgIHNvdXJjZXM6IFtcbiAgICAgICAgbmV3IExheWVyU2VhcmNoU291cmNlKHtcbiAgICAgICAgICBsYXllcjogdGhpcy5hZGRyZXNzVGFibGUsXG4gICAgICAgICAgc2VhcmNoRmllbGRzOiBbJ0FERFJFU1MnXSxcbiAgICAgICAgICBkaXNwbGF5RmllbGQ6ICdBRERSRVNTJyxcbiAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnQUREUkVTUycsICdSRUFfUkVJRCddLFxuICAgICAgICAgIG5hbWU6ICdTaXRlIEFkZHJlc3MnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMjIyIFcgSEFSR0VUVCdcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgbGF5ZXI6IGNvbmRvc1RhYmxlLFxuICAgICAgICAgIHNlYXJjaEZpZWxkczogWydPV05FUiddLFxuICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ09XTkVSJyxcbiAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZSxcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnT1dORVInLCAnUkVJRCcsICdPQkpFQ1RJRCddLFxuICAgICAgICAgIG5hbWU6ICdPd25lcicsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiBTTUlUSCwgSk9ITidcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgbGF5ZXI6IGNvbmRvc1RhYmxlLFxuICAgICAgICAgIHNlYXJjaEZpZWxkczogWydQSU5fTlVNJ10sXG4gICAgICAgICAgZGlzcGxheUZpZWxkOiAnUElOX05VTScsXG4gICAgICAgICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgICAgb3V0RmllbGRzOiBbJ1BJTl9OVU0nLCAnUkVJRCcsICdPQkpFQ1RJRCddLFxuICAgICAgICAgIG5hbWU6ICdQSU4nLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXhhbXBsZTogMDcxMjM0NTY3OCdcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBMYXllclNlYXJjaFNvdXJjZSh7XG4gICAgICAgICAgbGF5ZXI6IGNvbmRvc1RhYmxlLFxuICAgICAgICAgIHNlYXJjaEZpZWxkczogWydSRUlEJ10sXG4gICAgICAgICAgZGlzcGxheUZpZWxkOiAnUkVJRCcsXG4gICAgICAgICAgZXhhY3RNYXRjaDogZmFsc2UsXG4gICAgICAgICAgb3V0RmllbGRzOiBbJ1JFSUQnLCAnT0JKRUNUSUQnXSxcbiAgICAgICAgICBuYW1lOiAnUkVJRCcsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdleGFtcGxlOiAwMTIzNDU2J1xuICAgICAgICB9KVxuICAgICAgXVxuICAgIH0pO1xuICAgIHRoaXMuc2VhcmNoV2lkZ2V0LnZpZXdNb2RlbC53YXRjaCgncmVzdWx0cycsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFdpZGdldC5vbignc2VhcmNoLWNvbXBsZXRlJywgdGhpcy5zZWFyY2hDb21wbGV0ZSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKChyZXN1bHQgYXMgYW55KS50YXJnZXQuc2VsZWN0ZWRTdWdnZXN0aW9uKTtcbiAgfVxuICB0b2dnbGVDb250ZW50ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgPT09ICd0YWJsZScpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVhdHVyZUl0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWF0dXJlJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlYXR1cmVJdGVtJyk/LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZUl0ZW0nKT8ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuaW1wb3J0IFByb3BlcnR5U2VhcmNoVmlld01vZGVsIGZyb20gJy4vUHJvcGVydHlTZWFyY2gvUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwnO1xuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eVNlYXJjaFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIHByb3BlcnR5TGF5ZXI/OiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgY29uZG9zVGFibGU/OiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgYWRkcmVzc1RhYmxlPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IHByb3BlcnR5c2VhcmNoLWJhc2UnXG59O1xuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Qcm9wZXJ0eVNlYXJjaCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eVNlYXJjaCBleHRlbmRzIGRlY2xhcmVkKFdpZGdldCkge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5jb25kb3NUYWJsZScpXG4gIGNvbmRvc1RhYmxlOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5hZGRyZXNzVGFibGUnKVxuICBhZGRyZXNzVGFibGU6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLnByb3BlcnR5TGF5ZXInKVxuICBwcm9wZXJ0eUxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5zZWFyY2hXaWRnZXQnKVxuICBzZWFyY2hXaWRnZXQ6IGVzcmkud2lkZ2V0c1NlYXJjaDtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5mZWF0dXJlVGFibGUnKVxuICBmZWF0dXJlVGFibGU6IGVzcmkuRmVhdHVyZVRhYmxlO1xuICBAYWxpYXNPZigndmlld01vZGVsLmZlYXR1cmUnKVxuICBmZWF0dXJlOiBlc3JpLkZlYXR1cmU7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuZ2VvbWV0cnknKVxuICBnZW9tZXRyeTogZXNyaS5HZW9tZXRyeTtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5uYW1lJylcbiAgQHJlbmRlcmFibGUoKVxuICBuYW1lID0gJyc7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBQcm9wZXJ0eVNlYXJjaFZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwgPSBuZXcgUHJvcGVydHlTZWFyY2hWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogUHJvcGVydHlTZWFyY2hQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfY3JlYXRlU2VhcmNoID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNlYXJjaFdpZGdldCkge1xuICAgICAgdGhpcy5zZWFyY2hXaWRnZXQuY29udGFpbmVyID0gJ3NlYXJjaCc7XG4gICAgfVxuICB9O1xuICBfY3JlYXRlVGFibGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZVRhYmxlKSB7XG4gICAgICB0aGlzLmZlYXR1cmVUYWJsZS5jb250YWluZXIgPSAndGFibGUnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZUZlYXR1cmUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZSkge1xuICAgICAgdGhpcy5mZWF0dXJlLmNvbnRhaW5lciA9ICdmZWF0dXJlRGl2JztcbiAgICB9XG4gIH07XG5cbiAgY3VycmVudFJhZGlvQnV0dG9uID0gJ2xpc3QnO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaWRlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUmFkaW9Hcm91cEl0ZW1DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgIC8vIGNhbiBJIGdldCBjaGVja2VkIGFuZCB2YWx1ZSBsaWtlIHRoaXM/XG4gICAgICAgIGlmIChlLnRhcmdldD8uY2hlY2tlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgICAgdGhpcy52aWV3TW9kZWwudG9nZ2xlQ29udGVudChlLnRhcmdldD8udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZVNlYXJjaH0gaWQ9XCJzZWFyY2hcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlVGFibGV9IGlkPVwidGFibGVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImZlYXR1cmVcIiBjbGFzcz1cImhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJmZWF0dXJlRGl2XCIgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUZlYXR1cmV9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdmFsdWU9XCJ0YWJsZVwiIGlkPVwidGFibGVJdGVtXCI+XG4gICAgICAgICAgICBMaXN0XG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB2YWx1ZT1cImZlYXR1cmVcIiBpZD1cImZlYXR1cmVJdGVtXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICBEZXRhaWxzXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBNZWFzdXJlbWVudCBmcm9tICdlc3JpL3dpZGdldHMvTWVhc3VyZW1lbnQnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLk1lYXN1cmUuTWVhc3VyZVZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWFzdXJlVmlld01vZGVsIGV4dGVuZHMgZGVjbGFyZWQoQWNjZXNzb3IpIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cbiAgbWVhc3VyZW1lbnQ6IGVzcmkuTWVhc3VyZW1lbnQ7XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgfVxuICBtZWFzdXJlT3BlbmVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZWFzdXJlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAnKSBhcyBhbnkpLnNlbGVjdGVkSXRlbS50aXRsZTtcbiAgICBpZiAoc2VsZWN0ZWQgIT0gJ2NsZWFyJykge1xuICAgICAgdGhpcy5tZWFzdXJlbWVudC5hY3RpdmVUb29sID0gc2VsZWN0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWVhc3VyZW1lbnQuY2xlYXIoKTtcbiAgICB9XG4gIH1cbiAgaW5pdE1lYXN1cmUoKSB7XG4gICAgdGhpcy5tZWFzdXJlbWVudCA9IG5ldyBNZWFzdXJlbWVudCh7IHZpZXc6IHRoaXMudmlldywgY29udGFpbmVyOiAnbWVhc3VyZVdpZGdldCcgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcbmltcG9ydCBNZWFzdXJlVmlld01vZGVsIGZyb20gJy4vTWVhc3VyZS9NZWFzdXJlVmlld01vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBNZWFzdXJlUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbWVhc3VyZS1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5NZWFzdXJlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmUgZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubWVhc3VyZW1lbnQnKVxuICBtZWFzdXJlbWVudDogZXNyaS5NZWFzdXJlbWVudDtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5pbml0TWVhc3VyZScpXG4gIGluaXRNZWFzdXJlOiBGdW5jdGlvbjtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5tZWFzdXJlT3BlbmVkJylcbiAgbWVhc3VyZU9wZW5lZDogRnVuY3Rpb247XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubmFtZScpXG4gIEByZW5kZXJhYmxlKClcbiAgbmFtZSA9ICcnO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTWVhc3VyZVZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogTWVhc3VyZVZpZXdNb2RlbCA9IG5ldyBNZWFzdXJlVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IE1lYXN1cmVQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cblxuICBfbWVhc3VyZUNyZWF0ZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5pbml0TWVhc3VyZSgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZWFzdXJlRGl2IGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbScpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlUmFkaW9Hcm91cEl0ZW1DaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldD8uY2hlY2tlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Py50aXRsZSk7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0Py50aXRsZSA9PT0gJ2NsZWFyJykge1xuICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lYXN1cmVtZW50LmFjdGl2ZVRvb2wgPSBlLnRhcmdldD8udGl0bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdGl0bGU9XCJkaXN0YW5jZVwiIHZhbHVlPVwiZGlzdGFuY2VcIiBpZD1cInRhYmxlSXRlbVwiIGljb249XCJtZWFzdXJlXCI+XG4gICAgICAgICAgICBMaW5lXG4gICAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0+XG4gICAgICAgICAgPGNhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbSB0aXRsZT1cImFyZWFcIiB2YWx1ZT1cImFyZWFcIiBpZD1cImZlYXR1cmVJdGVtXCIgaWNvbj1cIm1lYXN1cmUtYXJlYVwiPlxuICAgICAgICAgICAgQXJlYVxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdGl0bGU9XCJjbGVhclwiIHZhbHVlPVwiY2xlYXJcIiBpZD1cImZlYXR1cmVJdGVtXCIgaWNvbj1cInRyYXNoXCI+XG4gICAgICAgICAgICBDbGVhclxuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXA+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX21lYXN1cmVDcmVhdGVkfSBpZD1cIm1lYXN1cmVXaWRnZXRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCBQb3B1cFRlbXBsYXRlIGZyb20gJ2VzcmkvUG9wdXBUZW1wbGF0ZSc7XG5pbXBvcnQgRXhwcmVzc2lvbkluZm8gZnJvbSAnZXNyaS9wb3B1cC9FeHByZXNzaW9uSW5mbyc7XG5cbmNvbnN0IGFyY2FkZUV4cHJlc3Npb25JbmZvcyA9IFtcbiAge1xuICAgIG5hbWU6ICdib20tZG9jLW51bScsXG4gICAgdGl0bGU6ICdib20tZG9jLW51bScsXG4gICAgZXhwcmVzc2lvbjpcbiAgICAgIFwidmFyIHJlc3VsdHMgPSBGZWF0dXJlU2V0QnlSZWxhdGlvbnNoaXBOYW1lKCRmZWF0dXJlLCAnQ09ORE9fQk9PS1MnLCBbJyonXSwgZmFsc2UpOyByZXR1cm4gRmlyc3QocmVzdWx0cykuQk9NX0RPQ19OVU07XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdkZWVkLWRvYy1udW0nLFxuICAgIHRpdGxlOiAnZGVlZC1kb2MtbnVtJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgXCJ2YXIgcmVzdWx0cyA9IEZlYXR1cmVTZXRCeVJlbGF0aW9uc2hpcE5hbWUoJGZlYXR1cmUsICdDT05ET19CT09LUycsIFsnKiddLCBmYWxzZSk7IHJldHVybiBGaXJzdChyZXN1bHRzKS5ERUVEX0RPQ19OVU07XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdtYWlsaW5nLWFkZHJlc3MnLFxuICAgIHRpdGxlOiAnbWFpbGluZy1hZGRyZXNzJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1doZW4oSXNFbXB0eSgkZmVhdHVyZS5BRERSMyksJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIsJGZlYXR1cmUuQUREUjEgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjIgKyBUZXh0Rm9ybWF0dGluZy5OZXdMaW5lICsgJGZlYXR1cmUuQUREUjMpJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ3Byb3BlcnR5LXZhbHVlcycsXG4gICAgdGl0bGU6ICdwcm9wZXJ0eS12YWx1ZXMnLFxuICAgIGV4cHJlc3Npb246XG4gICAgICAnXCJCdWlsZGluZyBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuQkxER19WQUwrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkxhbmQgVmFsdWVcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lK1wiJFwiKyRmZWF0dXJlLkxBTkRfVkFMK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3RhbCBWYWx1ZVwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCIkXCIrJGZlYXR1cmUuVE9UQUxfVkFMVUVfQVNTRCdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdkZWVkLWJvb2stcGFnZScsXG4gICAgdGl0bGU6ICdkZWVkLWJvb2stcGFnZScsXG4gICAgZXhwcmVzc2lvbjogJ1wiQm9vayBcIiskZmVhdHVyZS5ERUVEX0JPT0srXCIgUGFnZSBcIiskZmVhdHVyZS5ERUVEX1BBR0UnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZ2VuZXJhbCcsXG4gICAgdGl0bGU6ICdnZW5lcmFsJyxcbiAgICBleHByZXNzaW9uOlxuICAgICAgJ1wiUElOXCIrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSskZmVhdHVyZS5QSU5fTlVNK1wiIFwiKyRmZWF0dXJlLlBJTl9FWFQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZSsnICtcbiAgICAgICdcIlJFSURcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKyRmZWF0dXJlLlJFSUQrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkNpdHlcIitUZXh0Rm9ybWF0dGluZy5OZXdMaW5lKycgK1xuICAgICAgJ1Byb3BlcigkZmVhdHVyZS5DSVRZX0RFQ09ERSkrVGV4dEZvcm1hdHRpbmcuTmV3TGluZStcIkp1cmlzZGljdGlvblwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrJyArXG4gICAgICAnJGZlYXR1cmUuUExBTk5JTkdfSlVSSVNESUNUSU9OK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrXCJUb3duc2hpcFwiK1RleHRGb3JtYXR0aW5nLk5ld0xpbmUrUHJvcGVyKCRmZWF0dXJlLlRPV05TSElQX0RFQ09ERSknXG4gIH1cbl0gYXMgRXhwcmVzc2lvbkluZm9bXTtcblxuY29uc3QgcG9wdXBUZW1wbGF0ZSA9IG5ldyBQb3B1cFRlbXBsYXRlKHtcbiAgZXhwcmVzc2lvbkluZm9zOiBhcmNhZGVFeHByZXNzaW9uSW5mb3MsXG4gIC8vIGNvbnRlbnQ6IChldmVudDogYW55KSA9PiB7XG4gIC8vICAgY29uc3QgZ3JhcGhpYyA9IGV2ZW50LmdyYXBoaWM7XG4gIC8vICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RleHQtZ3JlZW4nKTtcbiAgLy8gICBjb250YWluZXIuYXBwZW5kKGRpdik7XG4gIC8vICAgZGl2LnRleHRDb250ZW50ID0gZ3JhcGhpYy5nZXRBdHRyaWJ1dGUoJ1NJVEVfQUREUkVTUycpO1xuICAvLyAgIHJldHVybiBjb250YWluZXI7XG4gIC8vIH0sXG4gIGNvbnRlbnQ6IFtcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OlxuICAgICAgICAnPGgxIGNsYXNzPVwidGV4dC1ncmVlblwiPntTSVRFX0FERFJFU1N9PC9oMT4nICtcbiAgICAgICAgJzxoMj5HZW5lcmFsPC9oMj57ZXhwcmVzc2lvbi9nZW5lcmFsfScgK1xuICAgICAgICAnPGgyPk93bmVyPC9oMj57T1dORVJ9PGJyLz57ZXhwcmVzc2lvbi9tYWlsaW5nLWFkZHJlc3N9JyArXG4gICAgICAgICc8aDI+VmFsdWF0aW9uPC9oMj57ZXhwcmVzc2lvbi9wcm9wZXJ0eS12YWx1ZXN9JyArXG4gICAgICAgICc8aDI+U2FsZSBJbmZvcm1hdGlvbjwvaDI+e1RPVFNBTFBSSUNFfTxici8+e1NBTEVfREFURX0nICtcbiAgICAgICAgJzxoMj5EZWVkczwvaDI+e2V4cHJlc3Npb24vZGVlZC1ib29rLXBhZ2V9JyArXG4gICAgICAgICc8YnIvPjxzdHJvbmc+RGVlZCBEYXRlPC9zdHJvbmc+PGJyLz57REVFRF9EQVRFfTxici8+JyArXG4gICAgICAgICc8YnIvPkxlZ2FsIERlc2NyaXB0aW9uPGJyLz57UFJPUERFU0N9PGJyLz4nICtcbiAgICAgICAgJzxhIGhyZWY9XCJodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPXtleHByZXNzaW9uL2JvbS1kb2MtbnVtfSZSZWNvcmREYXRlPVwiIHRhcmdldD1cIl9ibGFua1wiPkJvb2sgb2YgTWFwczwvYT48YnIvPjxhIGhyZWY9XCJodHRwOi8vc2VydmljZXMud2FrZWdvdi5jb20vYm9va3N3ZWIvcGRmdmlldy5hc3B4P2RvY2lkPXtleHByZXNzaW9uL2RlZWQtZG9jLW51bX0mUmVjb3JkRGF0ZT1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EZWVkPC9hPidcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICdtZWRpYScsXG4gICAgICBtZWRpYUluZm9zOiBbXVxuICAgIH1cbiAgXVxufSk7XG5cbmV4cG9ydCBjb25zdCBmZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnMDgwNTBiZjA2N2JiNGIyMGFkZWE0YjBiNGYwYTM5ZTMnXG4gIH0sXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgY29uZG9zVGFibGUgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgcG9ydGFsSXRlbToge1xuICAgIGlkOiAnMDgwNTBiZjA2N2JiNGIyMGFkZWE0YjBiNGYwYTM5ZTMnXG4gIH0sXG4gIGxheWVySWQ6IDEsXG4gIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH0sXG4gIHBvcHVwVGVtcGxhdGU6IHBvcHVwVGVtcGxhdGVcbn0pO1xuY29uZG9zVGFibGUubG9hZCgpO1xuZXhwb3J0IGNvbnN0IGFkZHJlc3NUYWJsZSA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICBwb3J0YWxJdGVtOiB7XG4gICAgaWQ6ICcwODA1MGJmMDY3YmI0YjIwYWRlYTRiMGI0ZjBhMzllMydcbiAgfSxcbiAgbGF5ZXJJZDogNCxcbiAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfVxufSk7XG5hZGRyZXNzVGFibGUubG9hZCgpO1xuZXhwb3J0ICogZnJvbSAnLi9hcHAnO1xuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbmltcG9ydCBTa2V0Y2ggZnJvbSAnZXNyaS93aWRnZXRzL1NrZXRjaCc7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJztcbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XG5pbXBvcnQgVGV4dFN5bWJvbCBmcm9tICdlc3JpL3N5bWJvbHMvVGV4dFN5bWJvbCc7XG5cbmltcG9ydCBDb2xvciBmcm9tICdlc3JpL0NvbG9yJztcbmltcG9ydCB7IG1lYXN1cmVtZW50IH0gZnJvbSAnLi4vLi4vd2lkZ2V0cyc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuRHJhdy5EcmF3Vmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdWaWV3TW9kZWwgZXh0ZW5kcyBkZWNsYXJlZChBY2Nlc3Nvcikge1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgQHByb3BlcnR5KCkgY29udGFpbmVyOiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIG5hbWUgPSAnU2xhZ2F0aG9yJztcbiAgc2tldGNoOiBTa2V0Y2g7XG4gIGdyYXBoaWNzOiBHcmFwaGljc0xheWVyO1xuICBsYWJlbDogc3RyaW5nO1xuICB0ZXh0Q29sb3I6IGVzcmkuQ29sb3I7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdERyYXcoKSB7XG4gICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJyB9KTtcbiAgICB0aGlzLnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNzKTtcblxuICAgIC8vIHRoaXMudmlldy53aGVuTGF5ZXJWaWV3KHRoaXMuZ3JhcGhpY3MpLnRoZW4oKCkgPT4ge1xuICAgIC8vICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hcHNfZHJhdycpKSB7XG4gICAgLy9cbiAgICAvLyAgICAgdGhpcy5ncmFwaGljcy5ncmFwaGljcy5hZGRNYW55KEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFwc19kcmF3JykgYXMgc3RyaW5nKSk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICB0aGlzLnNrZXRjaCA9IG5ldyBTa2V0Y2goeyB2aWV3OiB0aGlzLnZpZXcsIGNvbnRhaW5lcjogJ3NrZXRjaERpdicsIGxheWVyOiB0aGlzLmdyYXBoaWNzLCBjcmVhdGlvbk1vZGU6ICdzaW5nbGUnIH0pO1xuICAgIHRoaXMuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbC5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcbiAgICAodGhpcy5za2V0Y2gudmlld01vZGVsLnBvaW50U3ltYm9sIGFzIGFueSkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoJyNGRjAwMDAnKTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbC5jb2xvciA9IG5ldyBDb2xvcihbWzI1NSwgMCwgMCwgMC41XV0pO1xuICAgICh0aGlzLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBhbnkpLm91dGxpbmUuY29sb3IgPSBDb2xvci5mcm9tSGV4KCcjRkYwMDAwJyk7XG4gICAgdGhpcy5za2V0Y2gudmlld01vZGVsLnBvbHlsaW5lU3ltYm9sLmNvbG9yID0gQ29sb3IuZnJvbUhleCgnI0ZGMDAwMCcpO1xuXG4gICAgdGhpcy5za2V0Y2gud2F0Y2goJ2FjdGl2ZVRvb2wnLCB0b29sID0+IHtcbiAgICAgIGlmICh0b29sICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBtZWFzdXJlbWVudD8ubWVhc3VyZW1lbnQ/LmNsZWFyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5za2V0Y2gub24oJ2NyZWF0ZScsIGUgPT4ge1xuICAgICAgaWYgKGUuc3RhdGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgICAgaWYgKGUuc3RhdGUgPT09ICdjb21wbGV0ZScgJiYgdGhpcy5sYWJlbD8ubGVuZ3RoKSB7XG4gICAgICAgIGxldCBsYWJlbFBvaW50OiBlc3JpLkdlb21ldHJ5ID0gZS5ncmFwaGljLmdlb21ldHJ5O1xuICAgICAgICBpZiAoZS5ncmFwaGljLmdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJykge1xuICAgICAgICAgIGxhYmVsUG9pbnQgPSAoZS5ncmFwaGljLmdlb21ldHJ5IGFzIGVzcmkuUG9seWdvbikuY2VudHJvaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGNvbnN0IGcgPSBuZXcgR3JhcGhpYyh7XG4gICAgICAgICAgZ2VvbWV0cnk6IGxhYmVsUG9pbnQsXG4gICAgICAgICAgc3ltYm9sOiBuZXcgVGV4dFN5bWJvbCh7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLmxhYmVsLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMudGV4dENvbG9yLFxuICAgICAgICAgICAgaGFsb0NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgaGFsb1NpemU6IDEsXG4gICAgICAgICAgICB4b2Zmc2V0OiAnNXB4JyxcbiAgICAgICAgICAgIHlvZmZzZXQ6ICc1cHgnLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogJ3JpZ2h0J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmFkZChnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldy5zY2FsZSk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IHJlbmRlcmFibGUsIHRzeCB9IGZyb20gJ2Vzcmkvd2lkZ2V0cy9zdXBwb3J0L3dpZGdldCc7XG5cbmltcG9ydCBXaWRnZXQgZnJvbSAnZXNyaS93aWRnZXRzL1dpZGdldCc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnZXNyaS9Db2xvcic7XG5pbXBvcnQgRHJhd1ZpZXdNb2RlbCBmcm9tICcuL0RyYXcvRHJhd1ZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd1Byb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IGRyYXctYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuRHJhdycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3IGV4dGVuZHMgZGVjbGFyZWQoV2lkZ2V0KSB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxhYmVsJylcbiAgbGFiZWw6IHN0cmluZztcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC50ZXh0Q29sb3InKVxuICB0ZXh0Q29sb3I6IENvbG9yO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IERyYXdWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IERyYXdWaWV3TW9kZWwgPSBuZXcgRHJhd1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBEcmF3UHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX2RyYXdVcGRhdGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy52aWV3TW9kZWwuc2tldGNoKSB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5pbml0RHJhdygpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxsJyk7XG4gICAgZmlsbD8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgZmlsbD8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9pbnRTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgfSk7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaW5lJyk7XG4gICAgbGluZT8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcjZmYwMDAwJyk7XG4gICAgbGluZT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWxpbmVTeW1ib2wuY29sb3IgPSBDb2xvci5mcm9tSGV4KGhleCk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS5jb2xvciA9IENvbG9yLmZyb21IZXgoaGV4KTtcbiAgICAgICh0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wgYXMgZXNyaS5TaW1wbGVGaWxsU3ltYm9sKS5vdXRsaW5lLmNvbG9yID0gQ29sb3IuZnJvbUhleChoZXgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9wYWNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BhY2l0eScpO1xuICAgIG9wYWNpdHk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnZpZXdNb2RlbC5za2V0Y2gudmlld01vZGVsLnBvbHlnb25TeW1ib2wuY29sb3IuYSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpZHRoJyk7XG4gICAgd2lkdGg/LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCAoZTogYW55KSA9PiB7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2x5bGluZVN5bWJvbCBhcyBlc3JpLlNpbXBsZUxpbmVTeW1ib2wpLndpZHRoID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAodGhpcy52aWV3TW9kZWwuc2tldGNoLnZpZXdNb2RlbC5wb2ludFN5bWJvbCBhcyBlc3JpLlNpbXBsZU1hcmtlclN5bWJvbCkub3V0bGluZS53aWR0aCA9IHBhcnNlRmxvYXQoXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuICAgICAgKHRoaXMudmlld01vZGVsLnNrZXRjaC52aWV3TW9kZWwucG9seWdvblN5bWJvbCBhcyBlc3JpLlNpbXBsZUZpbGxTeW1ib2wpLm91dGxpbmUud2lkdGggPSBwYXJzZUZsb2F0KFxuICAgICAgICBlLnRhcmdldC52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYWJlbCcpO1xuICAgIGxhYmVsPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ2xhYmVsJywgZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRleHRDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0Q29sb3InKTtcbiAgICB0ZXh0Q29sb3I/LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnI2ZmMDAwMCcpO1xuICAgIHRleHRDb2xvcj8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZUNvbG9yQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXQoJ3RleHRDb2xvcicsIENvbG9yLmZyb21IZXgoZS50YXJnZXQudmFsdWUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyVXBkYXRlPXt0aGlzLl9kcmF3VXBkYXRlZH0gaWQ9XCJza2V0Y2hEaXZcIj48L2Rpdj5cbiAgICAgICAgPGNhbGNpdGUtYmxvY2sgaGVhZGluZz1cIlNldHRpbmdzXCIgb3BlbiBjb2xsYXBzaWJsZT5cbiAgICAgICAgICA8Y2FsY2l0ZS1ibG9jay1zZWN0aW9uIHRleHQ9XCJDb2xvclwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIEZpbGwgQ29sb3IgPGNhbGNpdGUtY29sb3IgaWQ9XCJmaWxsXCIgaGlkZUNoYW5uZWxzIGhpZGVTYXZlZCBhcHBlYXJhbmNlPVwibWluaW1hbFwiIHNjYWxlPVwic1wiPjwvY2FsY2l0ZS1jb2xvcj5cbiAgICAgICAgICAgIDwvY2FsY2l0ZS1sYWJlbD5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBMaW5lIENvbG9yIDxjYWxjaXRlLWNvbG9yIGlkPVwibGluZVwiIGhpZGVDaGFubmVscyBoaWRlU2F2ZWQgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBzY2FsZT1cInNcIj48L2NhbGNpdGUtY29sb3I+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiRmlsbCBPcGFjaXR5XCI+XG4gICAgICAgICAgICA8Y2FsY2l0ZS1sYWJlbCBzY2FsZT1cInNcIj5cbiAgICAgICAgICAgICAgT3BhY2l0eTxjYWxjaXRlLXNsaWRlciBzY2FsZT1cInNcIiBpZD1cIm9wYWNpdHlcIiBtYXg9XCIxXCIgbWluPVwiMFwiIHZhbHVlPVwiMC41XCIgc3RlcD1cIjAuMVwiPjwvY2FsY2l0ZS1zbGlkZXI+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiT3V0bGluZVwiPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIFdpZHRoIDxjYWxjaXRlLXNsaWRlciBpZD1cIndpZHRoXCIgbWF4PVwiMTBcIiBtaW49XCIwXCIgdmFsdWU9XCIxXCIgc3RlcD1cIjAuNVwiPjwvY2FsY2l0ZS1zbGlkZXI+XG4gICAgICAgICAgICA8L2NhbGNpdGUtbGFiZWw+XG4gICAgICAgICAgPC9jYWxjaXRlLWJsb2NrLXNlY3Rpb24+XG4gICAgICAgICAgPGNhbGNpdGUtYmxvY2stc2VjdGlvbiB0ZXh0PVwiTGFiZWxpbmdcIj5cbiAgICAgICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgICAgICBMYWJlbCA8Y2FsY2l0ZS1pbnB1dCBzY2FsZT1cInNcIiBpZD1cImxhYmVsXCIgdHlwZT1cInRleHRhcmVhXCI+PC9jYWxjaXRlLWlucHV0PlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgICAgPGNhbGNpdGUtbGFiZWwgc2NhbGU9XCJzXCI+XG4gICAgICAgICAgICAgIFRleHQgQ29sb3JcbiAgICAgICAgICAgICAgPGNhbGNpdGUtY29sb3IgaWQ9XCJ0ZXh0Q29sb3JcIiBoaWRlQ2hhbm5lbHMgaGlkZVNhdmVkIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgc2NhbGU9XCJzXCI+PC9jYWxjaXRlLWNvbG9yPlxuICAgICAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgICAgIDwvY2FsY2l0ZS1ibG9jay1zZWN0aW9uPlxuICAgICAgICA8L2NhbGNpdGUtYmxvY2s+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5pbXBvcnQgU2tldGNoIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gnO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcic7XG5cbmltcG9ydCB7IGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyB3aGVuRGVmaW5lZE9uY2UgfSBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgeyBtZWFzdXJlbWVudCB9IGZyb20gJy4uLy4uL3dpZGdldHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLlNlbGVjdC5TZWxlY3RWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0Vmlld01vZGVsIGV4dGVuZHMgZGVjbGFyZWQoQWNjZXNzb3IpIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBwcm9wZXJ0eSgpIGxheWVyOiBlc3JpLkZlYXR1cmVMYXllcjtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuICBza2V0Y2g6IGVzcmkuU2tldGNoO1xuICBidWZmZXJEaXN0YW5jZTogbnVtYmVyO1xuICBncmFwaGljczogR3JhcGhpY3NMYXllcjtcblxuICBpbml0U2tldGNoKCkge1xuICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiAnaGlkZScgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljcyk7XG4gICAgdGhpcy5za2V0Y2ggPSBuZXcgU2tldGNoKHtcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIGNvbnRhaW5lcjogJ3NlbGVjdFdpZGdldCcsXG4gICAgICBsYXllcjogdGhpcy5ncmFwaGljcyxcbiAgICAgIGNyZWF0aW9uTW9kZTogJ3NpbmdsZSdcbiAgICB9KTtcbiAgICB0aGlzLnNrZXRjaC52aWV3TW9kZWwudXBkYXRlT25HcmFwaGljQ2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLnNrZXRjaC5vbignY3JlYXRlJywgZXYgPT4ge1xuICAgICAgaWYgKGV2LnN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XG4gICAgICB9XG4gICAgICBpZiAoZXYuc3RhdGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2tldGNoLndhdGNoKCdhY3RpdmVUb29sJywgdG9vbCA9PiB7XG4gICAgICBpZiAodG9vbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQ/Lm1lYXN1cmVtZW50Py5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgICB0aGlzLnNldCgnYnVmZmVyRGlzdGFuY2UnLCAwKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IFNlbGVjdFZpZXdNb2RlbCBmcm9tICcuL1NlbGVjdC9TZWxlY3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFByb3BlcnRpZXMgZXh0ZW5kcyBlc3JpLldpZGdldFByb3BlcnRpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICB2aWV3PzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIGxheWVyPzogZXNyaS5GZWF0dXJlTGF5ZXI7XG59XG5cbmNvbnN0IENTUyA9IHtcbiAgYmFzZTogJ2Vzcmktd2lkZ2V0IHNlbGVjdC1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5TZWxlY3QnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgZGVjbGFyZWQoV2lkZ2V0KSB7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwudmlldycpXG4gIHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xuICBAYWxpYXNPZigndmlld01vZGVsLmxheWVyJylcbiAgbGF5ZXI6IGVzcmkuRmVhdHVyZUxheWVyO1xuICBAYWxpYXNPZigndmlld01vZGVsLnNrZXRjaCcpXG4gIHNrZXRjaDogZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2UnKVxuICBidWZmZXJEaXN0YW5jZTogbnVtYmVyO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IFNlbGVjdFZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogU2VsZWN0Vmlld01vZGVsID0gbmV3IFNlbGVjdFZpZXdNb2RlbCgpO1xuICBfc2tldGNoQ3JlYXRlZCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMudmlld01vZGVsLnNrZXRjaCkge1xuICAgICAgdGhpcy52aWV3TW9kZWwuaW5pdFNrZXRjaCgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IFNlbGVjdFByb3BlcnRpZXMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldjogYW55KSB7XG4gICAgdGhpcy5zZXQoJ2J1ZmZlckRpc3RhbmNlJywgcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3REaXYgY2FsY2l0ZS1pbnB1dCcpPy5hZGRFdmVudExpc3RlbmVyKCdjYWxjaXRlSW5wdXRCbHVyJywgKGV2OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGV2KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJVcGRhdGU9e3RoaXMuX3NrZXRjaENyZWF0ZWR9IGlkPVwic2VsZWN0V2lkZ2V0XCI+PC9kaXY+XG4gICAgICAgIDxjYWxjaXRlLWxhYmVsIHNjYWxlPVwic1wiPlxuICAgICAgICAgIEJ1ZmZlciBEaXN0YW5jZSAoZmVldClcbiAgICAgICAgICA8Y2FsY2l0ZS1pbnB1dFxuICAgICAgICAgICAgc2NhbGU9XCJzXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICBtYXg9XCIyMDAwXCJcbiAgICAgICAgICAgIHN0ZXA9XCI1MFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy52aWV3TW9kZWwuYnVmZmVyRGlzdGFuY2V9XG4gICAgICAgICAgPjwvY2FsY2l0ZS1pbnB1dD5cbiAgICAgICAgPC9jYWxjaXRlLWxhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcbmltcG9ydCBCYXNlTWFwR2FsbGVyeSBmcm9tICdlc3JpL3dpZGdldHMvQmFzZW1hcEdhbGxlcnknO1xuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkJhc2VNYXBzLkJhc2VNYXBzVmlld01vZGVsJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNYXBzVmlld01vZGVsIGV4dGVuZHMgZGVjbGFyZWQoQWNjZXNzb3IpIHtcbiAgQHByb3BlcnR5KCkgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIGJhc2VtYXBzOiBCYXNlTWFwR2FsbGVyeTtcbiAgaW1hZ2VzOiBCYXNlTWFwR2FsbGVyeTtcblxuICBhY3RpdmVCYXNlbWFwOiBlc3JpLkJhc2VtYXA7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgd2hlbkRlZmluZWRPbmNlKHRoaXMsICd2aWV3JywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdCh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICAgIHRoaXMuYmFzZW1hcHMgPSBuZXcgQmFzZU1hcEdhbGxlcnkoeyB2aWV3OiB0aGlzLnZpZXcgfSk7XG4gICAgdGhpcy52aWV3Lm1hcC53YXRjaCgnYmFzZW1hcCcsIChiYXNlbWFwOiBlc3JpLkJhc2VtYXApID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGJhc2VtYXAudGl0bGUpO1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZXMnKT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgICAgdGhpcy52aWV3Lm1hcC5yZW1vdmUodGhpcy52aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVyLmlkKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjdGl2ZUJhc2VtYXAgPSB0aGlzLnZpZXcubWFwLmJhc2VtYXA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFN3aXRjaCcpPy5yZW1vdmVBdHRyaWJ1dGUoJ3N3aXRjaGVkJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBibSA9IHRoaXMuaW1hZ2VzLnZpZXdNb2RlbC5pdGVtcy5maW5kKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5iYXNlbWFwLnRpdGxlID09PSB0aGlzLnZpZXcubWFwLmJhc2VtYXAudGl0bGU7XG4gICAgICB9KTtcbiAgICAgIGlmIChibSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmxlbmRTd2l0Y2gnKT8uaGFzQXR0cmlidXRlKCdzd2l0Y2hlZCcpKSB7XG4gICAgICAgIHRoaXMudmlldy5tYXAuYWRkTWFueSh0aGlzLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy50b0FycmF5KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xuICAgICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFjdGl2ZUJhc2VtYXAgPSB0aGlzLnZpZXcubWFwLmJhc2VtYXA7XG4gICAgdGhpcy5pbWFnZXMgPSBuZXcgQmFzZU1hcEdhbGxlcnkoe1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgc291cmNlOiB7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgaWQ6ICc0OTIzODY3NTlkMjY0ZDQ5OTQ4YmY3ZjgzOTU3ZGRiOSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlaGlkZScsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlQmFzZW1hcC5iYXNlTGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlJyk7XG4gICAgICAgIHRoaXMudmlldy5tYXAucmVtb3ZlKHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZChsYXllci5pZCkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBqc29uID0gKHZpZXcubWFwIGFzIGFueSkudG9KU09OKCk7XG4gICAgICBqc29uLmluaXRpYWxTdGF0ZS52aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkgPSB2aWV3LmV4dGVudDtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hcHMnLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XG4gICAgfSk7XG4gIH1cbiAgdG9nZ2xlQ29udGVudCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSAnbWFwcycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzSXRlbScpPy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VzSXRlbScpPy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZCcpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBzJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlc0l0ZW0nKT8uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcHNJdGVtJyk/LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgeyBhbGlhc09mLCBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgcmVuZGVyYWJsZSwgdHN4IH0gZnJvbSAnZXNyaS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0JztcblxuaW1wb3J0IFdpZGdldCBmcm9tICdlc3JpL3dpZGdldHMvV2lkZ2V0JztcblxuaW1wb3J0IEJhc2VNYXBzVmlld01vZGVsIGZyb20gJy4vQmFzZU1hcHMvQmFzZU1hcHNWaWV3TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VNYXBzUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgYmFzZW1hcHMtYmFzZSdcbn07XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuQmFzZU1hcHMnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1hcHMgZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG5cbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC5iYXNlbWFwcycpXG4gIGJhc2VtYXBzOiBlc3JpLkJhc2VtYXBHYWxsZXJ5O1xuICBAYWxpYXNPZigndmlld01vZGVsLmltYWdlcycpXG4gIGltYWdlczogZXNyaS5CYXNlbWFwR2FsbGVyeTtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBCYXNlTWFwc1ZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogQmFzZU1hcHNWaWV3TW9kZWwgPSBuZXcgQmFzZU1hcHNWaWV3TW9kZWwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzPzogQmFzZU1hcHNQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgX2NyZWF0ZU1hcHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuYmFzZW1hcHMpIHtcbiAgICAgIHRoaXMuYmFzZW1hcHMuY29udGFpbmVyID0gJ21hcHMnO1xuICAgIH1cbiAgfTtcbiAgX2NyZWF0ZUltYWdlcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgIHRoaXMuaW1hZ2VzLmNvbnRhaW5lciA9ICdpbWFnZXMnO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlU3dpdGNoQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3N3aXRjaGVkJykgIT0gJycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZFNsaWRlcicpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGNvbnNvbGUubG9nKCdhZGQnKTtcbiAgICAgIHRoaXMudmlldy5tYXAuYWRkTWFueSh0aGlzLnZpZXdNb2RlbC5hY3RpdmVCYXNlbWFwLmJhc2VMYXllcnMudG9BcnJheSgpLCAwKTtcbiAgICAgIHRoaXMudmlldy5tYXAuYmFzZW1hcC5yZWZlcmVuY2VMYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIGxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy52aWV3Lm1hcC5sYXllcnNcbiAgICAgICAgLmZpbHRlcihsYXllciA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5pbmNsdWRlcyhsYXllcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICBsYXllci5vcGFjaXR5ID0gMC41O1xuICAgICAgICAgIGxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJyk/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgdGhpcy52aWV3Lm1hcC5iYXNlbWFwLnJlZmVyZW5jZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgbGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZScpO1xuICAgICAgICB0aGlzLnZpZXcubWFwLnJlbW92ZSh0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXIuaWQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlU2xpZGVyQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IGxheWVycyA9IHRoaXMudmlldy5tYXAubGF5ZXJzXG4gICAgICAuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld01vZGVsLmFjdGl2ZUJhc2VtYXAuYmFzZUxheWVycy5pbmNsdWRlcyhsYXllcik7XG4gICAgICB9KVxuICAgICAgLnRvQXJyYXkoKTtcbiAgICBsYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICBsYXllci5vcGFjaXR5ID0gcGFyc2VGbG9hdChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9zbGlkZXJDcmVhdGVkID0gKGU6IGFueSkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignI2JsZW5kU2xpZGVyJylcbiAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLFxuICAgICAgICB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZS5iaW5kKHsgYmFzZW1hcDogdGhpcy5iYXNlbWFwcywgdmlldzogdGhpcy52aWV3IH0pXG4gICAgICApO1xuICB9O1xuICBfYmxlbmRDcmVhdGVkID0gKGU6IGFueSkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignI2JsZW5kU3dpdGNoJylcbiAgICAgID8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NhbGNpdGVTd2l0Y2hDaGFuZ2UnLFxuICAgICAgICB0aGlzLmhhbmRsZVN3aXRjaENoYW5nZS5iaW5kKHsgYmFzZW1hcDogdGhpcy5iYXNlbWFwcywgdmlldzogdGhpcy52aWV3IH0pXG4gICAgICApO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kJyk/LnJlbW92ZUF0dHJpYnV0ZSgnc3dpdGNoZWQnKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYmFzZW1hcERpdiBjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0nKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbT8uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVJhZGlvR3JvdXBJdGVtQ2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAvLyBjYW4gSSBnZXQgY2hlY2tlZCBhbmQgdmFsdWUgbGlrZSB0aGlzP1xuICAgICAgICBpZiAoZS50YXJnZXQ/LmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLnZpZXdNb2RlbC50b2dnbGVDb250ZW50KGUudGFyZ2V0Py52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9e0NTUy5iYXNlfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiaGlkZGVuXCIgaWQ9XCJibGVuZFwiPlxuICAgICAgICAgIDxjYWxjaXRlLXN3aXRjaCBhZnRlckNyZWF0ZT17dGhpcy5fYmxlbmRDcmVhdGVkfSBpZD1cImJsZW5kU3dpdGNoXCI+PC9jYWxjaXRlLXN3aXRjaD4gQmxlbmRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGNhbGNpdGUtc2xpZGVyXG4gICAgICAgICAgYWZ0ZXJDcmVhdGU9e3RoaXMuX3NsaWRlckNyZWF0ZWR9XG4gICAgICAgICAgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgICAgIGlkPVwiYmxlbmRTbGlkZXJcIlxuICAgICAgICAgIHZhbHVlPVwiMC41XCJcbiAgICAgICAgICBtYXg9XCIxXCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBzdGVwPVwiMC4xXCJcbiAgICAgICAgPjwvY2FsY2l0ZS1zbGlkZXI+XG5cbiAgICAgICAgPGRpdiBhZnRlckNyZWF0ZT17dGhpcy5fY3JlYXRlTWFwc30gaWQ9XCJtYXBzXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUltYWdlc30gaWQ9XCJpbWFnZXNcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxuICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cCB3aWR0aD1cImZ1bGxcIj5cbiAgICAgICAgICA8Y2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtIGNoZWNrZWQgdmFsdWU9XCJtYXBzXCIgaWQ9XCJtYXBzSXRlbVwiPlxuICAgICAgICAgICAgTWFwc1xuICAgICAgICAgIDwvY2FsY2l0ZS1yYWRpby1ncm91cC1pdGVtPlxuICAgICAgICAgIDxjYWxjaXRlLXJhZGlvLWdyb3VwLWl0ZW0gdmFsdWU9XCJpbWFnZXNcIiBpZD1cImltYWdlc0l0ZW1cIiBkaXNhYmxlZD5cbiAgICAgICAgICAgIEltYWdlcnlcbiAgICAgICAgICA8L2NhbGNpdGUtcmFkaW8tZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9jYWxjaXRlLXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5pbXBvcnQgeyBkZWNsYXJlZCwgcHJvcGVydHksIHN1YmNsYXNzIH0gZnJvbSAnZXNyaS9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgd2hlbkRlZmluZWRPbmNlIH0gZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IExheWVyTGlzdCBmcm9tICdlc3JpL3dpZGdldHMvTGF5ZXJMaXN0JztcbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTGF5ZXJzLkxheWVyc1ZpZXdNb2RlbCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllcnNWaWV3TW9kZWwgZXh0ZW5kcyBkZWNsYXJlZChBY2Nlc3Nvcikge1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbiAgbGF5ZXJMaXN0OiBlc3JpLkxheWVyTGlzdDtcblxuICBjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHdoZW5EZWZpbmVkT25jZSh0aGlzLCAndmlldycsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGluaXQodmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3LnNjYWxlKTtcbiAgICB0aGlzLmxheWVyTGlzdCA9IG5ldyBMYXllckxpc3Qoe1xuICAgICAgdmlldyxcbiAgICAgIGNvbnRhaW5lcjogJ2xheWVyRGl2JyxcbiAgICAgIGxpc3RJdGVtQ3JlYXRlZEZ1bmN0aW9uOiBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBldmVudC5pdGVtO1xuICAgICAgICBpZiAoaXRlbS5sYXllci50eXBlICE9ICdncm91cCcpIHtcbiAgICAgICAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYWxjaXRlLXNsaWRlcicpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWF4JywgJzEwMCcpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21pbi1sYWJlbCcsICcwJScpO1xuICAgICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21heC1sYWJlbCcsICcxMDAlJyk7XG4gICAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbGFiZWwtaGFuZGxlcycsICcnKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIChpdGVtPy5sYXllci5vcGFjaXR5ICogMTAwKS50b1N0cmluZygpKTtcbiAgICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdkYXRhJywgaXRlbS5sYXllci5pZCk7XG4gICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbGNpdGVTbGlkZXJVcGRhdGUnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB2aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKChldmVudC50YXJnZXQgYXMgYW55KS5nZXRBdHRyaWJ1dGUoJ2RhdGEnKSkub3BhY2l0eSA9XG4gICAgICAgICAgICAgIHBhcnNlSW50KChldmVudD8udGFyZ2V0IGFzIGFueSk/LmdldEF0dHJpYnV0ZSgndmFsdWUnKSkgLyAxMDA7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaXRlbS5wYW5lbCA9IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtzbGlkZXIsICdsZWdlbmQnXSxcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXRlbS5sYXllci50aXRsZSA9PT0gJ1Byb3BlcnR5Jykge1xuICAgICAgICAgICAgaXRlbS5hY3Rpb25zU2VjdGlvbnMgPSBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ1Nob3cgTGFiZWxzJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICd0b2dnbGUnLFxuICAgICAgICAgICAgICAgICAgaWQ6ICdwcm9wZXJ0eS1sYWJlbHMnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ubGF5ZXIubGFiZWxzVmlzaWJsZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxheWVyTGlzdC5vbigndHJpZ2dlci1hY3Rpb24nLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQuYWN0aW9uLmlkID09PSAncHJvcGVydHktbGFiZWxzJykge1xuICAgICAgICAoZXZlbnQuaXRlbS5sYXllciBhcyBlc3JpLkZlYXR1cmVMYXllcikubGFiZWxzVmlzaWJsZSA9IChldmVudC5hY3Rpb24gYXMgZXNyaS5BY3Rpb25Ub2dnbGUpLnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZXNyaSA9IF9fZXNyaTtcblxuaW1wb3J0IHsgYWxpYXNPZiwgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuXG5pbXBvcnQgTGF5ZXJzVmlld01vZGVsIGZyb20gJy4vTGF5ZXJzL0xheWVyc1ZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5ZXJzUHJvcGVydGllcyBleHRlbmRzIGVzcmkuV2lkZ2V0UHJvcGVydGllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZpZXc/OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcbn1cblxuY29uc3QgQ1NTID0ge1xuICBiYXNlOiAnZXNyaS13aWRnZXQgbGF5ZXJzLWJhc2UnXG59O1xuXG5Ac3ViY2xhc3MoJ2FwcC53aWRnZXRzLkxheWVycycpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllcnMgZXh0ZW5kcyBkZWNsYXJlZChXaWRnZXQpIHtcbiAgQGFsaWFzT2YoJ3ZpZXdNb2RlbC52aWV3JylcbiAgdmlldzogZXNyaS5NYXBWaWV3IHwgZXNyaS5TY2VuZVZpZXc7XG4gIEBhbGlhc09mKCd2aWV3TW9kZWwubGF5ZXJMaXN0JylcbiAgbGF5ZXJMaXN0OiBlc3JpLkxheWVyTGlzdDtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IExheWVyc1ZpZXdNb2RlbFxuICB9KVxuICBAcmVuZGVyYWJsZSgpXG4gIHZpZXdNb2RlbDogTGF5ZXJzVmlld01vZGVsID0gbmV3IExheWVyc1ZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM/OiBMYXllcnNQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcyk7XG4gIH1cbiAgX2NyZWF0ZUxheWVycyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5sYXllckxpc3QpIHtcbiAgICAgIHRoaXMubGF5ZXJMaXN0LmNvbnRhaW5lciA9ICdsYXllcnMnO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPXtDU1MuYmFzZX0+XG4gICAgICAgIDxkaXYgYWZ0ZXJDcmVhdGU9e3RoaXMuX2NyZWF0ZUxheWVyc30gaWQ9XCJsYXllcnNcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBlc3JpID0gX19lc3JpO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnZXNyaS9jb3JlL0FjY2Vzc29yJztcblxuaW1wb3J0IHsgZGVjbGFyZWQsIHByb3BlcnR5LCBzdWJjbGFzcyB9IGZyb20gJ2VzcmkvY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IHdoZW5EZWZpbmVkT25jZSB9IGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaCc7XG5cbkBzdWJjbGFzcygnYXBwLndpZGdldHMuTG9jYXRpb25TZWFyY2guTG9jYXRpb25TZWFyY2hWaWV3TW9kZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25TZWFyY2hWaWV3TW9kZWwgZXh0ZW5kcyBkZWNsYXJlZChBY2Nlc3Nvcikge1xuICBAcHJvcGVydHkoKSB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBzZWFyY2g6IFNlYXJjaDtcbiAgY29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB3aGVuRGVmaW5lZE9uY2UodGhpcywgJ3ZpZXcnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0KHZpZXc6IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3KSB7XG4gICAgdGhpcy5zZWFyY2ggPSBuZXcgU2VhcmNoKHsgdmlldzogdmlldywgbWF4U3VnZ2VzdGlvbnM6IDMwLCBzZWFyY2hBbGxFbmFibGVkOiBmYWxzZSB9KTtcbiAgICB0aGlzLnNlYXJjaC5hbGxTb3VyY2VzLm9uKCdhZnRlci1hZGQnLCBlID0+IHtcbiAgICAgIGlmICgoZS5pdGVtIGFzIGFueSkubGF5ZXIpIHtcbiAgICAgICAgZS5pdGVtLm5hbWUgPSAoZS5pdGVtIGFzIGFueSkubGF5ZXIudGl0bGU7XG4gICAgICAgIGUuaXRlbS5wbGFjZWhvbGRlciA9IChlLml0ZW0gYXMgYW55KS5sYXllci50aXRsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5cbmltcG9ydCB7IGFsaWFzT2YsIGRlY2xhcmVkLCBwcm9wZXJ0eSwgc3ViY2xhc3MgfSBmcm9tICdlc3JpL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyByZW5kZXJhYmxlLCB0c3ggfSBmcm9tICdlc3JpL3dpZGdldHMvc3VwcG9ydC93aWRnZXQnO1xuXG5pbXBvcnQgV2lkZ2V0IGZyb20gJ2Vzcmkvd2lkZ2V0cy9XaWRnZXQnO1xuXG5pbXBvcnQgTG9jYXRpb25TZWFyY2hWaWV3TW9kZWwgZnJvbSAnLi9Mb2NhdGlvblNlYXJjaC9Mb2NhdGlvblNlYXJjaFZpZXdNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb25TZWFyY2hQcm9wZXJ0aWVzIGV4dGVuZHMgZXNyaS5XaWRnZXRQcm9wZXJ0aWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgdmlldz86IGVzcmkuTWFwVmlldyB8IGVzcmkuU2NlbmVWaWV3O1xufVxuXG5jb25zdCBDU1MgPSB7XG4gIGJhc2U6ICdlc3JpLXdpZGdldCBsb2NhdGlvbnNlYXJjaC1iYXNlJ1xufTtcblxuQHN1YmNsYXNzKCdhcHAud2lkZ2V0cy5Mb2NhdGlvblNlYXJjaCcpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblNlYXJjaCBleHRlbmRzIGRlY2xhcmVkKFdpZGdldCkge1xuICBAYWxpYXNPZigndmlld01vZGVsLnZpZXcnKVxuICB2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldztcblxuICBAYWxpYXNPZigndmlld01vZGVsLnNlYXJjaCcpXG4gIHNlYXJjaDogZXNyaS53aWRnZXRzU2VhcmNoO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogTG9jYXRpb25TZWFyY2hWaWV3TW9kZWxcbiAgfSlcbiAgQHJlbmRlcmFibGUoKVxuICB2aWV3TW9kZWw6IExvY2F0aW9uU2VhcmNoVmlld01vZGVsID0gbmV3IExvY2F0aW9uU2VhcmNoVmlld01vZGVsKCk7XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcz86IExvY2F0aW9uU2VhcmNoUHJvcGVydGllcykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgX3NlYXJjaENyZWF0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgIHRoaXMuc2VhcmNoLmNvbnRhaW5lciA9ICdsb2NhdGlvblNlYXJjaCc7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz17Q1NTLmJhc2V9PlxuICAgICAgICA8ZGl2IGFmdGVyQ3JlYXRlPXt0aGlzLl9zZWFyY2hDcmVhdGV9IGlkPVwibG9jYXRpb25TZWFyY2hcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIFdpZGdldHNcbmltcG9ydCBMYXllckxpc3QgZnJvbSAnZXNyaS93aWRnZXRzL0xheWVyTGlzdCc7XG5pbXBvcnQgTGVnZW5kIGZyb20gJ2Vzcmkvd2lkZ2V0cy9MZWdlbmQnO1xuaW1wb3J0IFByaW50IGZyb20gJ2Vzcmkvd2lkZ2V0cy9QcmludCc7XG5pbXBvcnQgQm9va21hcmtzIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Cb29rbWFya3MnO1xuaW1wb3J0IEJhc2VtYXBHYWxsZXJ5IGZyb20gJ2Vzcmkvd2lkZ2V0cy9CYXNlbWFwR2FsbGVyeSc7XG4vL2ltcG9ydCBNZWFzdXJlbWVudCBmcm9tICdlc3JpL3dpZGdldHMvTWVhc3VyZW1lbnQnO1xuaW1wb3J0IFByb3BlcnR5U2VhcmNoIGZyb20gJy4vd2lkZ2V0cy9Qcm9wZXJ0eVNlYXJjaCc7XG5pbXBvcnQgQ29vcmRpbmF0ZUNvbnZlcnNpb24gZnJvbSAnZXNyaS93aWRnZXRzL0Nvb3JkaW5hdGVDb252ZXJzaW9uJztcbmltcG9ydCBFeHBhbmQgZnJvbSAnZXNyaS93aWRnZXRzL0V4cGFuZCc7XG5pbXBvcnQgTWVhc3VyZSBmcm9tICcuL3dpZGdldHMvTWVhc3VyZSc7XG5pbXBvcnQgQ29tcGFzcyBmcm9tICdlc3JpL3dpZGdldHMvQ29tcGFzcyc7XG5pbXBvcnQgTG9jYXRlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Mb2NhdGUnO1xuaW1wb3J0IFRyYWNrIGZyb20gJ2Vzcmkvd2lkZ2V0cy9UcmFjayc7XG5cbmltcG9ydCB7IGNvbmRvc1RhYmxlLCBhZGRyZXNzVGFibGUsIGZlYXR1cmVMYXllciB9IGZyb20gJy4vZGF0YS9zZWFyY2gnO1xuaW1wb3J0IGVzcmkgPSBfX2Vzcmk7XG5pbXBvcnQgRHJhdyBmcm9tICcuL3dpZGdldHMvRHJhdyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vd2lkZ2V0cy9TZWxlY3QnO1xuaW1wb3J0IEJhc2VNYXBzIGZyb20gJy4vd2lkZ2V0cy9CYXNlTWFwcyc7XG5pbXBvcnQgTGF5ZXJzIGZyb20gJy4vd2lkZ2V0cy9MYXllcnMnO1xuaW1wb3J0IExvY2F0aW9uU2VhcmNoIGZyb20gJy4vd2lkZ2V0cy9Mb2NhdGlvblNlYXJjaCc7XG5leHBvcnQgY29uc3QgbWVhc3VyZW1lbnQ6IE1lYXN1cmUgPSBuZXcgTWVhc3VyZSgpO1xuZXhwb3J0IGNvbnN0IHNlbGVjdDogU2VsZWN0ID0gbmV3IFNlbGVjdCgpO1xuZXhwb3J0IGxldCBsYXllckxpc3Q6IExheWVyTGlzdDtcbmV4cG9ydCBjb25zdCBwcm9wZXJ0eVNlYXJjaDogUHJvcGVydHlTZWFyY2ggPSBuZXcgUHJvcGVydHlTZWFyY2goKTtcbmV4cG9ydCBjb25zdCBkcmF3V2lkZ2V0OiBEcmF3ID0gbmV3IERyYXcoKTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0V2lkZ2V0cyh2aWV3OiBlc3JpLk1hcFZpZXcgfCBlc3JpLlNjZW5lVmlldykge1xuICBuZXcgTGVnZW5kKHsgdmlldywgY29udGFpbmVyOiAnbGVnZW5kRGl2JyB9KTtcbiAgbmV3IExheWVycyh7IHZpZXcsIGNvbnRhaW5lcjogJ2xheWVyc0RpdicgfSk7XG4gIG5ldyBQcmludCh7XG4gICAgdmlldyxcbiAgICBjb250YWluZXI6ICdwcmludERpdicsXG4gICAgcHJpbnRTZXJ2aWNlVXJsOlxuICAgICAgJ2h0dHBzOi8vdXRpbGl0eS5hcmNnaXNvbmxpbmUuY29tL2FyY2dpcy9yZXN0L3NlcnZpY2VzL1V0aWxpdGllcy9QcmludGluZ1Rvb2xzL0dQU2VydmVyL0V4cG9ydCUyMFdlYiUyME1hcCUyMFRhc2snXG4gIH0pO1xuICBuZXcgQm9va21hcmtzKHsgdmlldywgY29udGFpbmVyOiAnYm9va21hcmtEaXYnLCBlZGl0aW5nRW5hYmxlZDogdHJ1ZSB9KTtcblxuICAvL25ldyBCYXNlbWFwR2FsbGVyeSh7IHZpZXcsIGNvbnRhaW5lcjogJ2Jhc2VtYXBEaXYnIH0pO1xuICBuZXcgQmFzZU1hcHMoeyB2aWV3LCBjb250YWluZXI6ICdiYXNlbWFwRGl2JyB9KTtcblxuICBjb25zdCBjb29yZGluYXRlczogZXNyaS5Db29yZGluYXRlQ29udmVyc2lvbiA9IG5ldyBDb29yZGluYXRlQ29udmVyc2lvbih7IHZpZXcgfSk7XG4gIGNvbnN0IGNvb3JkaW5hdGVzRXhwYW5kOiBFeHBhbmQgPSBuZXcgRXhwYW5kKHtcbiAgICBjb250ZW50OiBjb29yZGluYXRlcyxcbiAgICBtb2RlOiAnZmxvYXRpbmcnLFxuICAgIGV4cGFuZEljb25DbGFzczogJ2VzcmktaWNvbi1wYW4yJ1xuICB9KTtcblxuICB2aWV3LnVpLmFkZChjb29yZGluYXRlc0V4cGFuZCwgJ2JvdHRvbS1sZWZ0Jyk7XG5cbiAgdmlldy51aS5hZGQobmV3IENvbXBhc3MoeyB2aWV3OiB2aWV3IH0pLCAndG9wLWxlZnQnKTtcbiAgY29uc3QgbG9jYXRlOiBMb2NhdGUgPSBuZXcgTG9jYXRlKHsgdmlldzogdmlldyB9KTtcbiAgbG9jYXRlLm9uKCdsb2NhdGUtZXJyb3InLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfSk7XG4gIHZpZXcudWkuYWRkKGxvY2F0ZSwgJ3RvcC1sZWZ0Jyk7XG5cbiAgY29uc3QgdHJhY2s6IFRyYWNrID0gbmV3IFRyYWNrKHsgdmlldzogdmlldyB9KTtcbiAgdHJhY2sub24oJ3RyYWNrLWVycm9yJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gIH0pO1xuICB2aWV3LnVpLmFkZCh0cmFjaywgJ3RvcC1sZWZ0Jyk7XG5cbiAgbWVhc3VyZW1lbnQudmlldyA9IHZpZXc7XG4gIG1lYXN1cmVtZW50LmNvbnRhaW5lciA9ICdtZWFzdXJlRGl2JztcbiAgZHJhd1dpZGdldC52aWV3ID0gdmlldztcbiAgZHJhd1dpZGdldC5jb250YWluZXIgPSAnZHJhd0Rpdic7XG5cbiAgbmV3IExvY2F0aW9uU2VhcmNoKHsgdmlldywgY29udGFpbmVyOiAnbG9jYXRpb25EaXYnIH0pO1xuXG4gIC8vdmlldy51aS5hZGQobWVhc3VyZW1lbnQsICd0b3AtcmlnaHQnKTtcblxuICAvLyBwcm9wZXJ0eVNlYXJjaCA9IG5ldyBQcm9wZXJ0eVNlYXJjaCh7XG4gIC8vICAgdmlldzogdmlldyxcbiAgLy8gICBjb25kb3NUYWJsZTogY29uZG9zVGFibGUsXG4gIC8vICAgYWRkcmVzc1RhYmxlOiBhZGRyZXNzVGFibGUsXG4gIC8vICAgcHJvcGVydHlMYXllcjogZmVhdHVyZUxheWVyLFxuICAvLyAgIGNvbnRhaW5lcjogJ3NpZGVEaXYnXG4gIC8vIH0pO1xuICBwcm9wZXJ0eVNlYXJjaC52aWV3ID0gdmlldztcbiAgcHJvcGVydHlTZWFyY2guY29uZG9zVGFibGUgPSBjb25kb3NUYWJsZTtcbiAgcHJvcGVydHlTZWFyY2guYWRkcmVzc1RhYmxlID0gYWRkcmVzc1RhYmxlO1xuICBwcm9wZXJ0eVNlYXJjaC5wcm9wZXJ0eUxheWVyID0gZmVhdHVyZUxheWVyO1xuICBwcm9wZXJ0eVNlYXJjaC5jb250YWluZXIgPSAnc2lkZURpdic7XG4gIC8vdmlldy51aS5hZGQobGVnZW5kLCAnYm90dG9tLWxlZnQnKTtcbiAgLy92aWV3LnVpLmFkZChsYXllckxpc3QsICd0b3AtcmlnaHQnKTtcbiAgc2VsZWN0LmNvbnRhaW5lciA9ICdzZWxlY3REaXYnO1xuICBzZWxlY3QudmlldyA9IHZpZXc7XG4gIHNlbGVjdC5sYXllciA9IGZlYXR1cmVMYXllcjtcbiAgcmV0dXJuIHZpZXc7XG59XG4iLCIvLyBzdHlsZXNcbmltcG9ydCAnLi9jc3MvbWFpbi5jc3MnO1xuXG4vLyBNYXAgZGF0YVxuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9kYXRhL2FwcCc7XG5pbXBvcnQgeyBpbml0VGlwcyB9IGZyb20gJy4vdGlwcyc7XG5pbXBvcnQgeyBzaG93QWxlcnQgfSBmcm9tICcuL2FsZXJ0Jztcbi8vIE1hcFZpZXdcbmltcG9ydCBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldyc7XG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSc7XG4vLyB3aWRnZXQgdXRpbHNcbmltcG9ydCB7IGluaXRXaWRnZXRzLCBtZWFzdXJlbWVudCwgc2VsZWN0LCBwcm9wZXJ0eVNlYXJjaCwgbGF5ZXJMaXN0IH0gZnJvbSAnLi93aWRnZXRzJztcbi8qKlxuICogSW5pdGlhbGl6ZSBhcHBsaWNhdGlvblxuICovXG5jb25zdCB2aWV3ID0gbmV3IE1hcFZpZXcoe1xuICBjb250YWluZXI6ICd2aWV3RGl2JyxcbiAgbWFwXG59KTtcblxuY29uc3QgdG9nZ2xlQWN0aW9uID0gKGFjdGlvbjogc3RyaW5nKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYW5lbCcpLmZvckVhY2goKHBhbmVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmIChwYW5lbC50aXRsZSAhPSBhY3Rpb24pIHtcbiAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYW5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc21pc3NlZCcpO1xuICAgICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDwgNTAwKSB7XG4gICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtaW4td2lkdGg6IDM1MHB4Jyk7XG4gICAgICB9XG4gICAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGlmIChwYW5lbC50aXRsZSAhPSAnTWVhc3VyZScpIHtcbiAgICAgICAgLy9tZWFzdXJlbWVudC5tZWFzdXJlbWVudC5jbGVhcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVhc3VyZW1lbnQubWVhc3VyZU9wZW5lZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhY3Rpb25zOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLWFjdGlvbicpO1xuYWN0aW9ucz8uZm9yRWFjaCgoYWN0aW9uOiBhbnkpID0+IHtcbiAgYWN0aW9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcbiAgICB0b2dnbGVBY3Rpb24oZS50YXJnZXQudGV4dCk7XG4gIH0pO1xufSk7XG5cbnZpZXcud2hlbigoKSA9PiB7XG4gIHZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICBpZiAobGF5ZXIudHlwZSAhPSAnZ3JvdXAnKSB7XG4gICAgICBsYXllci53YXRjaCgndmlzaWJsZScsIHZpc2libGUgPT4ge1xuICAgICAgICBsYXllckxpc3Qub3BlcmF0aW9uYWxJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmxheWVyLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gaXRlbS5jaGlsZHJlbi5maW5kKGkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaS5sYXllciA9PT0gbGF5ZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICBjaGlsZC5wYW5lbC5vcGVuID0gdmlzaWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxheWVyLndhdGNoKCd2aXNpYmxlJywgdmlzaWJsZSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gbGF5ZXJMaXN0Lm9wZXJhdGlvbmFsSXRlbXMuZmluZChpID0+IHtcbiAgICAgICAgICByZXR1cm4gaS5sYXllciA9PT0gbGF5ZXI7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgICBncm91cC5vcGVuID0gdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgcHJvcGVydHlMYXllciA9IG1hcC5hbGxMYXllcnMuZmluZChsYXllciA9PiB7XG4gICAgcmV0dXJuIGxheWVyLnRpdGxlID09PSAnUHJvcGVydHknICYmIGxheWVyLnR5cGUgPT09ICdmZWF0dXJlJztcbiAgfSk7XG4gIHZpZXcub24oJ2hvbGQnLCBlID0+IHtcbiAgICBwcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGUubWFwUG9pbnQ7XG4gICAgZGVidWdnZXI7XG4gIH0pO1xuICB2aWV3XG4gICAgLndoZW5MYXllclZpZXcocHJvcGVydHlMYXllcilcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBwcm9wZXJ0eVNlYXJjaC5wcm9wZXJ0eUxheWVyID0gcHJvcGVydHlMYXllciBhcyBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICAgICAgc2VsZWN0LnZpZXdNb2RlbC5za2V0Y2gub24oJ2NyZWF0ZScsIChldjogYW55KSA9PiB7XG4gICAgICAgIGlmIChldi5zdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgIGlmIChzZWxlY3Qudmlld01vZGVsPy5idWZmZXJEaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBnZW9tZXRyeUVuZ2luZS5nZW9kZXNpY0J1ZmZlcihldi5ncmFwaGljLmdlb21ldHJ5LCBzZWxlY3Qudmlld01vZGVsLmJ1ZmZlckRpc3RhbmNlLCAnZmVldCcpO1xuICAgICAgICAgICAgcHJvcGVydHlTZWFyY2guZ2VvbWV0cnkgPSBnIGFzIF9fZXNyaS5Qb2x5Z29uO1xuICAgICAgICAgICAgZXYuZ3JhcGhpYy5nZW9tZXRyeSA9IGc7XG4gICAgICAgICAgICBzZWxlY3Qudmlld01vZGVsLmdyYXBoaWNzLmFkZChldi5ncmFwaGljKTtcbiAgICAgICAgICAgIGV2LmdyYXBoaWMuc3ltYm9sID0ge1xuICAgICAgICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxuICAgICAgICAgICAgICBzdHlsZTogJ25vbmUnLFxuICAgICAgICAgICAgICBvdXRsaW5lOiB7IHN0eWxlOiAnc2hvcnQtZGFzaCcsIHdpZHRoOiAyLjUsIGNvbG9yOiBbMjIxLCAyMjEsIDIyMSwgMV0gfSxcbiAgICAgICAgICAgICAgY29sb3I6IFsyNTUsIDI0MywgMTMsIDAuMjVdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmlldy5nb1RvKGV2LmdyYXBoaWMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVNlYXJjaC5nZW9tZXRyeSA9IGV2LmdyYXBoaWMuZ2VvbWV0cnk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvZ2dsZUFjdGlvbignU2VhcmNoJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcbiAgICAgIHNob3dBbGVydCgnUHJvcGVydHkgbGF5ZXIgZGlkIG5vdCBsb2FkLiBQbGVhc2UgY29udGFjdCBpTUFQUyBIZWxwIERlc2suJywgJ3JlZCcpO1xuICAgIH0pO1xufSk7XG5cbmlmICh3aW5kb3cub3V0ZXJXaWR0aCA+PSA1MDApIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FsY2l0ZS1wYW5lbCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2FsY2l0ZVBhbmVsRGlzbWlzc2VkQ2hhbmdlJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF4aW1pemUnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtYXhpbWl6ZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF4aW1pemUnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGl0ZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkaXNtaXNzZWQnKTtcbiAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaWNvbicpID09PSAnbWF4aW1pemUnKSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWNvbicsICdtaW5pbWl6ZScpO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogY2FsYygxMDAlIC0gNTBweCknKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdpY29uJykgPT09ICdtaW5pbWl6ZScpIHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpY29uJywgJ21heGltaXplJyk7XG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOjM1MHB4Jyk7XG4gICAgfVxuICB9KTtcbn0pO1xud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICBpZiAoKGV2ZW50Py50YXJnZXQgYXMgYW55KT8ub3V0ZXJXaWR0aCA+PSA1MDApIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5tYXhpbWl6ZScpPy5nZXRBdHRyaWJ1dGUoJ2ljb24nKSA9PT0gJ21pbmltaXplJykge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMzUwcHgnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnZGlzbWlzc2VkJykpIHtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21pbi13aWR0aDogMHB4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWluLXdpZHRoOiBjYWxjKDEwMCUgc3JjKScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xudmlldy53aGVuKGluaXRXaWRnZXRzKTtcblxudmlldy53aGVuKGluaXRUaXBzKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FsY2l0ZS1wYW5lbCcpLmZvckVhY2goaXRlbSA9PiB7XG4gIGNvbnN0IGk6IEhUTUxFbGVtZW50ID0gaXRlbT8uc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGkuaW5uZXJIVE1MICs9ICc8c3R5bGU+LmNvbnRlbnQtY29udGFpbmVyIHsgaGVpZ2h0OiAxMDAlOyB9IDwvc3R5bGU+Jztcbn0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xuICB2aWV3Lm1hcC5yZW1vdmVNYW55KFxuICAgIHZpZXcubWFwLmFsbExheWVyc1xuICAgICAgLmZpbHRlcihsYXllciA9PiB7XG4gICAgICAgIHJldHVybiBsYXllci50eXBlID09PSAnZ3JvdXAnICYmICEobGF5ZXIgYXMgX19lc3JpLkdyb3VwTGF5ZXIpLmxheWVycy5sZW5ndGg7XG4gICAgICB9KVxuICAgICAgLnRvQXJyYXkoKVxuICApO1xuICBjb25zdCBqc29uID0gKHZpZXcubWFwIGFzIGFueSkudG9KU09OKCk7XG4gIGpzb24uaW5pdGlhbFN0YXRlLnZpZXdwb2ludC50YXJnZXRHZW9tZXRyeSA9IHZpZXcuZXh0ZW50O1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ltYXBzJywgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xuICAvLyBpZiAoZHJhd1dpZGdldC52aWV3TW9kZWwuZ3JhcGhpY3MuZ3JhcGhpY3MubGVuZ3RoKSB7XG4gIC8vICAgZHJhd1dpZGdldC52aWV3TW9kZWwuZ3JhcGhpY3MuZ3JhcGhpY3MucmVtb3ZlTWFueShcbiAgLy8gICAgIGRyYXdXaWRnZXQudmlld01vZGVsLmdyYXBoaWNzLmdyYXBoaWNzLmZpbHRlcihncmFwaGljID0+IHtcbiAgLy8gICAgICAgcmV0dXJuICFncmFwaGljLmdlb21ldHJ5O1xuICAvLyAgICAgfSlcbiAgLy8gICApO1xuICAvLyAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hcHNfZHJhdycsIEpTT04uc3RyaW5naWZ5KChkcmF3V2lkZ2V0LnZpZXdNb2RlbC5ncmFwaGljcy5ncmFwaGljcyBhcyBhbnkpLnRvSlNPTigpKSk7XG4gIC8vIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYWxjaXRlLXBhbmVsIGRpdicpLmZvckVhY2gocGFuZWwgPT4ge1xuICBpZiAocGFuZWwuc2xvdCA9PT0gJ2hlYWRlci10cmFpbGluZy1jb250ZW50Jykge1xuICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsnKTtcbiAgfVxufSk7XG5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbGNpdGUtcGFuZWwnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuLy8gICBjb25zdCBhcnRpY2xlOiBIVE1MRWxlbWVudCA9IGl0ZW0/LnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUnKSBhcyBIVE1MRWxlbWVudDtcbi8vICAgYXJ0aWNsZS5pbm5lckhUTUwgKz1cbi8vICAgICAnPHN0eWxlPmFydGljbGU6LXdlYmtpdC1kaXJlY3QtZm9jdXMgeyBvdXRsaW5lOiBub25lOyB9IGFydGljbGU6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9IDwvc3R5bGU+JztcblxuLy8gICBjb25zdCBzZWN0aW9uOiBIVE1MRWxlbWVudCA9IGl0ZW0/LnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKSBhcyBIVE1MRWxlbWVudDtcbi8vICAgc2VjdGlvbi5pbm5lckhUTUwgKz1cbi8vICAgICAnPHN0eWxlPnNlY3Rpb246LXdlYmtpdC1kaXJlY3QtZm9jdXMgeyBvdXRsaW5lOiBub25lOyB9IHNlY3Rpb246Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9IDwvc3R5bGU+Jztcbi8vIH0pO1xuIl0sIm5hbWVzIjpbIndoZW5EZWZpbmVkT25jZSIsIndoZW5EZWZpbmVkIiwicHJvcGVydHkiLCJzdWJjbGFzcyIsImRlY2xhcmVkIiwidHN4IiwiYWxpYXNPZiIsInJlbmRlcmFibGUiLCJDU1MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUtPLElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7RUFDOUIsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLGtDQUFrQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQzdFLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7TUFDeEMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQVcsQ0FBQyxDQUFDLENBQUM7R0FDbkY7OztFQ1RELElBQU0sU0FBUyxHQUFHO01BQ2hCO1VBQ0UsS0FBSyxFQUFFO2NBQ0wsSUFBSSxFQUFFLFdBQVc7Y0FDakIsS0FBSyxFQUFFLFdBQVc7Y0FDbEIsSUFBSSxFQUFFO2tCQUNKO3NC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
