import esri = __esri;

import Accessor from 'esri/core/Accessor';

import { declared, property, subclass } from 'esri/core/accessorSupport/decorators';
import Search from 'esri/widgets/Search';
import FeatureTable from 'esri/widgets/FeatureTable';
import FeatureLayer from 'esri/layers/FeatureLayer';

import GraphicsLayer from 'esri/layers/GraphicsLayer';

import Feature from 'esri/widgets/Feature';
import { whenDefinedOnce, whenDefined } from 'esri/core/watchUtils';
import LayerSearchSource from 'esri/widgets/Search/LayerSearchSource';
import FieldColumnConfig from 'esri/widgets/FeatureTable/FieldColumnConfig';
import PopupTemplate from 'esri/PopupTemplate';
import ExpressionInfo from 'esri/popup/ExpressionInfo';
import MenuButtonItem from 'esri/widgets/FeatureTable/Grid/support/ButtonMenuItem';
@subclass('app.widgets.PropertySearch.PropertySearchViewModel')
export default class PropertySearchViewModel extends declared(Accessor) {
  @property() view: esri.MapView | esri.SceneView;
  @property() condosTable: esri.FeatureLayer;
  @property() addressTable: esri.FeatureLayer;
  @property() propertyLayer: esri.FeatureLayer;

  @property() searchWidget: esri.widgetsSearch;
  @property() featureTable: esri.FeatureTable;
  @property() feature: esri.Feature;
  @property() geometry: esri.Geometry;

  graphics = new GraphicsLayer({ id: 'property-select', listMode: 'hide' });
  singleSymbol = {
    type: 'simple-fill',
    style: 'none',
    outline: { width: 2.5, color: [255, 82, 82, 1] },
    color: [253, 46, 65, 0.25]
  };
  multiSymbol = {
    type: 'simple-fill',
    style: 'none',
    outline: { width: 2.5, color: [249, 243, 0, 1] },
    color: [253, 46, 65, 0.25]
  };

  highlights: any;
  constructor(params?: any) {
    super(params);
    whenDefinedOnce(this, 'view', this.init.bind(this));
    whenDefinedOnce(this, 'condosTable', this.initSearch.bind(this));
    whenDefined(this, 'geometry', this.searchByGeometry.bind(this));
  }

  searchByGeometry(geometry: esri.Geometry) {
    this.propertyLayer
      .queryFeatures({ geometry: geometry, returnGeometry: true, outFields: ['OBJECTID', 'REID'] })
      .then(propertyResult => {
        const relationship = this.propertyLayer.relationships.find(r => {
          return r.name === 'PROPERTY_CONDO';
        });
        const oids: any[] = [];
        propertyResult.features.forEach(f => {
          oids.push(f.getObjectId());
        });
        this.propertyLayer
          .queryRelatedFeatures({ relationshipId: relationship?.id, objectIds: oids, outFields: ['*'] })
          .then(result => {
            let features: any[] = [];
            for (const key in result) {
              features = features.concat(result[key].features);
            }
            this.featureTable.layer = new FeatureLayer({
              fields: this.condosTable.fields,
              source: features,
              title: 'Selected properties',
              geometryType: 'point',
              objectIdField: 'OBJECTID'
            });
            if (features.length === 1) {
              if (!features[0].geometry) {
                features[0].geometry = geometry;
              }
              this.setFeature(features[0], this.view as esri.MapView, [], [features[0].getObjectId()]);
              this.toggleContent('feature');
            } else {
              this.toggleContent('table');
            }
            this.featureTable.renderNow();
            this.graphics.removeAll();
            propertyResult.features.forEach((feature: esri.Graphic) => {
              feature.symbol =
                propertyResult.features.length > 1 ? (this.multiSymbol as any) : (this.singleSymbol as any);

              this.graphics.add(feature);
            });
          });
      });
  }

  init(view: esri.MapView | esri.SceneView) {
    view.map.add(this.graphics, view.map.allLayers.length - 1);
  }

  arcadeExpressionInfos = [
    {
      name: 'bom-doc-num',
      title: 'bom-doc-num',
      expression:
        "var results = FeatureSetByRelationshipName($feature, 'CONDO_BOOKS', ['*'], false); return First(results).BOM_DOC_NUM;"
    },
    {
      name: 'deed-doc-num',
      title: 'deed-doc-num',
      expression:
        "var results = FeatureSetByRelationshipName($feature, 'CONDO_BOOKS', ['*'], false); return First(results).DEED_DOC_NUM;"
    },
    {
      name: 'mailing-address',
      title: 'mailing-address',
      expression:
        'When(IsEmpty($feature.ADDR3),$feature.ADDR1 + TextFormatting.NewLine + $feature.ADDR2,$feature.ADDR1 + TextFormatting.NewLine + $feature.ADDR2 + TextFormatting.NewLine + $feature.ADDR3)'
    },
    {
      name: 'property-values',
      title: 'property-values',
      expression:
        '"Building Value"+TextFormatting.NewLine+"$"+$feature.BLDG_VAL+TextFormatting.NewLine+"Land Value"+TextFormatting.NewLine+"$"+$feature.LAND_VAL+TextFormatting.NewLine+"Total Value"+TextFormatting.NewLine+"$"+$feature.TOTAL_VALUE_ASSD'
    },
    {
      name: 'deed-book-page',
      title: 'deed-book-page',
      expression: '"Book "+$feature.DEED_BOOK+" Page "+$feature.DEED_PAGE'
    },
    {
      name: 'general',
      title: 'general',
      expression:
        '"PIN"+TextFormatting.NewLine+$feature.PIN_NUM+" "+$feature.PIN_EXT+TextFormatting.NewLine+' +
        '"REID"+TextFormatting.NewLine+$feature.REID+TextFormatting.NewLine+"City"+TextFormatting.NewLine+' +
        'Proper($feature.CITY_DECODE)+TextFormatting.NewLine+"Jurisdiction"+TextFormatting.NewLine+' +
        '$feature.PLANNING_JURISDICTION+TextFormatting.NewLine+"Township"+TextFormatting.NewLine+Proper($feature.TOWNSHIP_DECODE)'
    }
  ] as ExpressionInfo[];

  popupTemplate = new PopupTemplate({
    expressionInfos: this.arcadeExpressionInfos,
    content: [
      {
        type: 'text',
        text:
          '<h1 class="text-green">{SITE_ADDRESS}</h1>' +
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

  getProperty = (oids: any[], source?: string) => {
    const relationship = this.condosTable.relationships.find(r => {
      return r.name === 'CONDO_PROPERTY';
    });
    this.condosTable
      .queryRelatedFeatures({
        relationshipId: relationship?.id,
        objectIds: oids,
        outFields: ['OBJECTID', 'REID'],
        returnGeometry: false
      })
      .then(result => {
        const oids: any[] = [];
        for (const key in result) {
          result[key].features.forEach((feature: esri.Graphic) => {
            oids.push(feature.getAttribute('OBJECTID'));
          });
        }
        this.propertyLayer
          .queryFeatures({
            objectIds: oids,
            outFields: ['*'],
            returnGeometry: true,
            outSpatialReference: { wkid: 102100 }
          })
          .then(result => {
            this.view.goTo(result.features);
            if (!source) {
              this.graphics.removeAll();
              result.features.forEach(feature => {
                feature.symbol = result.features.length > 1 ? (this.multiSymbol as any) : (this.singleSymbol as any);
                this.graphics.add(feature);
              });
            }
          });
      });
  };

  searchComplete = (event: esri.SearchSearchCompleteEvent) => {
    if (!this.searchWidget.viewModel.selectedSuggestion) {
      const oids: any[] = [];
      let where =
        "OWNER like '" +
        event.searchTerm.toUpperCase() +
        "%' OR REID like '" +
        event.searchTerm.toUpperCase() +
        "%' OR PIN_NUM like '" +
        event.searchTerm.toUpperCase() +
        "'";
      let tableFeatures: any[] = [];
      this.condosTable.queryFeatures({ where: where, outFields: ['*'] }).then(result => {
        console.log(result);
        tableFeatures = result.features;
        result.features.forEach(f => {
          oids.push(f.getObjectId());
        });
        where = "ADDRESS like '%" + event.searchTerm.toUpperCase() + "%'";
        this.addressTable.queryFeatures({ where: where, outFields: ['*'] }).then(result => {
          const relationship = this.addressTable.relationships.find(r => {
            return r.name === 'ADDRESSES_CONDO';
          });

          result.features.forEach(f => {
            oids.push(f.getObjectId());
          });
          if (relationship && oids.length) {
            this.addressTable
              .queryRelatedFeatures({ relationshipId: relationship.id, objectIds: oids, outFields: ['*'] })
              .then(result => {
                //const oids: any[] = [];
                for (const key in result) {
                  result[key].features.forEach((feature: esri.Graphic) => {
                    console.log(feature);
                    oids.push(feature.getAttribute('OBJECTID'));
                    tableFeatures.push(feature);
                  });
                }
                this.featureTable.layer = new FeatureLayer({
                  fields: this.condosTable.fields,
                  source: tableFeatures,
                  title: 'Selected properties',
                  geometryType: 'point',
                  objectIdField: 'OBJECTID'
                });
                this.getProperty(oids);
                this.featureTable.renderNow();
              });
          } else {
            this.featureTable.layer = new FeatureLayer({
              fields: this.condosTable.fields,
              source: tableFeatures,
              title: 'Selected properties',
              geometryType: 'point',
              objectIdField: 'OBJECTID'
            });
            this.featureTable.renderNow();
          }
        });
      });
    } else {
      console.log(event.numResults);
      if (event.numResults) {
        const layer = (event.results[0].source as LayerSearchSource).layer as FeatureLayer;
        const oids: any[] = [];
        event.results[0].results.forEach(r => {
          oids.push(r.feature.getObjectId());
        });
        if (layer.layerId === 4) {
          const relationship = layer.relationships.find(r => {
            return r.name === 'ADDRESSES_CONDO';
          });
          if (relationship && oids) {
            layer
              .queryRelatedFeatures({ relationshipId: relationship.id, objectIds: oids, outFields: ['*'] })
              .then(result => {
                const oids: any[] = [];
                for (const key in result) {
                  result[key].features.forEach((feature: esri.Graphic) => {
                    console.log(feature);
                    oids.push(feature.getAttribute('OBJECTID'));
                    this.getProperty(oids);
                    feature.layer = this.condosTable;
                    this.setFeature(feature, this.view as esri.MapView, [], oids);
                    this.toggleContent('feature');
                    this.featureTable.layer = new FeatureLayer({
                      fields: this.condosTable.fields,
                      source: [feature],
                      title: 'Selected properties',
                      geometryType: 'point',
                      objectIdField: 'OBJECTID'
                    });
                  });
                }
              });
          }
        } else {
          this.condosTable.queryFeatures({ objectIds: oids, outFields: ['*'] }).then(result => {
            const oids: any[] = [];
            result.features.forEach((feature: esri.Graphic) => {
              oids.push(feature.getAttribute('OBJECTID'));
            });
            this.getProperty(oids);
            this.setFeature(result.features[0], this.view as esri.MapView, [], oids);
            this.toggleContent('feature');
            this.featureTable.layer = new FeatureLayer({
              fields: this.condosTable.fields,
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
  setFeature(feature: esri.Graphic, view: esri.MapView, mediaInfos: any[], oids: any[]) {
    console.log('setting feature');
    const relationship = this.condosTable.relationships.find(r => {
      return r.name === 'CONDO_PHOTOS';
    });
    console.log(relationship);
    mediaInfos = [];
    this.condosTable
      .queryRelatedFeatures({ relationshipId: relationship?.id, objectIds: oids, outFields: ['*'] })
      .then(result => {
        for (const key in result) {
          result[key].features.forEach((feature: esri.Graphic) => {
            mediaInfos.push({
              title: '',
              type: 'image',
              caption: '',
              value: {
                sourceURL:
                  'http://services.wakegov.com/realestate/photos/mvideo/' +
                  feature.getAttribute('IMAGEDIR') +
                  '/' +
                  feature.getAttribute('IMAGENAME')
              }
            });
          });
        }
        this.condosTable.popupTemplate.content[1].mediaInfos = mediaInfos;
        feature.layer = this.condosTable;
        feature.popupTemplate = (feature.layer as esri.FeatureLayer).popupTemplate;
        this.feature.graphic = feature;
        this.feature.graphic.symbol = this.singleSymbol as any;
        const selected = this.graphics.graphics.find(graphic => {
          return graphic.getAttribute('selected') === 'true';
        });
        if (selected) {
          selected.symbol = this.multiSymbol as any;
          selected.setAttribute('selected', 'false');
        }
        console.log('REID: ', feature.getAttribute('REID'));
        const graphic = this.graphics.graphics.find(graphic => {
          console.log(graphic.getAttribute('REID'));
          return graphic.getAttribute('REID') === feature.getAttribute('REID');
        });
        if (graphic) {
          graphic.symbol = this.singleSymbol as any;
          graphic.setAttribute('selected', 'true');
          this.graphics.graphics.reorder(graphic, this.graphics.graphics.length - 1);
        }
      });
  }

  exportTable() {
    this.featureTable.layer.queryFeatures({ outFields: ['*'] }).then(result => {
      let csv = '';
      result.fields.forEach(field => {
        csv += field.alias + ',';
      });
      csv += '\r\n';
      result.features.forEach(feature => {
        for (const key in feature.attributes) {
          if (key.toLowerCase().includes('date')) {
            csv += '"' + new Date(feature.attributes[key]).toDateString() + '",';
          } else if (key.toLowerCase().includes('acres')) {
            csv += '"' + parseFloat(feature.attributes[key]).toFixed(2) + '",';
          } else {
            csv += '"' + feature.attributes[key] + '",';
          }
        }
        csv += '\r\n';
      });
      const exportedFilenmae = 'imaps_export.csv';

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      if (link.download !== undefined) {
        // feature detection
        // Browsers that support HTML5 download attribute
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', exportedFilenmae);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  }

  initSearch(condosTable: esri.FeatureLayer) {
    const tableLayer = new FeatureLayer({
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
          ({
            label: 'Export'
          } as unknown) as MenuButtonItem
        ]
      }
    });
    const button: MenuButtonItem = this.featureTable?.menuConfig?.items?.find(item => {
      return item.label === 'Export';
    }) as MenuButtonItem;
    button.clickFunction = () => {
      this.exportTable();
    };
    button.clickFunction.bind(this.featureTable);

    this.featureTable.on('selection-change', event => {
      (this.featureTable as any).clearSelection();
      if (event.added.length) {
        this.getProperty([event.added[0].feature.getAttribute('OBJECTID')], 'table');
        this.setFeature(
          event.added[0].feature,
          this.view as esri.MapView,
          [],
          [event.added[0].feature.getAttribute('OBJECTID')]
        );
        event.added[0].feature.setAttribute('selected', 'true');
        this.toggleContent('feature');
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
    this.searchWidget.viewModel.watch('results', event => {
      console.log(event);
    });
    this.searchWidget.on('search-complete', this.searchComplete);

    //console.log((result as any).target.selectedSuggestion);
  }
  toggleContent = (value: string) => {
    if (value === 'table') {
      document.querySelector('#table')?.classList.remove('hidden');
      document.querySelector('#feature')?.classList.add('hidden');
      document.querySelector('#tableItem')?.setAttribute('checked', '');
      document.querySelector('#featureItem')?.removeAttribute('checked');
    } else {
      document.querySelector('#feature')?.classList.remove('hidden');
      document.querySelector('#table')?.classList.add('hidden');
      document.querySelector('#featureItem')?.setAttribute('checked', '');
      document.querySelector('#tableItem')?.removeAttribute('checked');
    }
  };
}
