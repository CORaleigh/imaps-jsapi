import esri = __esri;

import Accessor from 'esri/core/Accessor';

import { declared, property, subclass } from 'esri/core/accessorSupport/decorators';
import Search from 'esri/widgets/Search';
import FeatureTable from 'esri/widgets/FeatureTable';
import FeatureLayer from 'esri/layers/FeatureLayer';
import Feature from 'esri/widgets/Feature';
import { whenDefinedOnce, whenDefined } from 'esri/core/watchUtils';
import LayerSearchSource from 'esri/widgets/Search/LayerSearchSource';
import FieldColumnConfig from 'esri/widgets/FeatureTable/FieldColumnConfig';
import PopupTemplate from 'esri/PopupTemplate';
import ExpressionInfo from 'esri/popup/ExpressionInfo';

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

  @property() name = 'Property Search';
  highlights: any;
  constructor(params?: any) {
    super(params);
    whenDefinedOnce(this, 'view', this.init.bind(this));
    whenDefinedOnce(this, 'condosTable', this.initSearch.bind(this));
    whenDefined(this, 'geometry', this.searchByGeometry.bind(this));
  }

  searchByGeometry(geometry: esri.Geometry) {
    this.propertyLayer
      .queryFeatures({ geometry: geometry, returnGeometry: true, outFields: ['OBJECTID'] })
      .then(result => {
        const layerView = this.view.layerViews.find(view => {
          return view.layer === this.propertyLayer;
        });
        if (layerView) {
          if (this.highlights) {
            this.highlights.remove();
          }
          this.highlights = (layerView as esri.FeatureLayerView).highlight(result.features);
        }
        const relationship = this.propertyLayer.relationships.find(r => {
          return r.name === 'PROPERTY_CONDO';
        });
        const oids: any[] = [];
        result.features.forEach(f => {
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
              this.setFeature(features[0], this.view as esri.MapView, [], oids);
              this.toggleContent('feature');
            }
            this.featureTable.renderNow();
          });
      });
  }

  init(view: esri.MapView | esri.SceneView) {
    console.log(view.scale);
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
    // content: (event: any) => {
    //   const graphic = event.graphic;
    //   const container = document.createElement('div');
    //   const div = document.createElement('div');
    //   div.classList.add('text-green');
    //   container.append(div);
    //   div.textContent = graphic.getAttribute('SITE_ADDRESS');
    //   return container;
    // },
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

  getProperty = (oids: any[]) => {
    const relationship = this.condosTable.relationships.find(r => {
      return r.name === 'CONDO_PROPERTY';
    });
    this.condosTable
      .queryRelatedFeatures({
        relationshipId: relationship?.id,
        objectIds: oids,
        outFields: ['OBJECTID'],
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
            const layerView = this.view.layerViews.find(view => {
              return view.layer === this.propertyLayer;
            });
            if (layerView) {
              if (this.highlights) {
                this.highlights.remove();
              }
              this.highlights = (layerView as esri.FeatureLayerView).highlight(result.features);
            }
          });
      });
  };

  searchComplete = (event: esri.SearchSearchCompleteEvent) => {
    if (!this.searchWidget.viewModel.selectedSuggestion) {
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

        where = "ADDRESS like '%" + event.searchTerm.toUpperCase() + "%'";
        this.addressTable.queryFeatures({ where: where, outFields: ['*'] }).then(() => {
          const relationship = this.addressTable.relationships.find(r => {
            return r.name === 'ADDRESSES_CONDO';
          });
          const oids: any[] = [];
          event.results[0].results.forEach(r => {
            oids.push(r.feature.getObjectId());
          });
          if (relationship && oids.length) {
            this.addressTable
              .queryRelatedFeatures({ relationshipId: relationship.id, objectIds: oids, outFields: ['*'] })
              .then(result => {
                const oids: any[] = [];
                for (const key in result) {
                  result[key].features.forEach((feature: esri.Graphic) => {
                    console.log(feature);
                    oids.push(feature.getAttribute('OBJECTID'));
                    tableFeatures.push(feature);
                    //this.getProperty(oids);
                    //feature.layer = this.condosTable;
                    this.setFeature(feature, this.view as esri.MapView, [], oids);
                    this.toggleContent('feature');
                  });
                }
                this.featureTable.layer = new FeatureLayer({
                  fields: this.condosTable.fields,
                  source: tableFeatures,
                  title: 'Selected properties',
                  geometryType: 'point',
                  objectIdField: 'OBJECTID'
                });
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
        console.log(feature);
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
      ]
    });
    this.featureTable.on('selection-change', event => {
      if (event.added.length) {
        this.getProperty([event.added[0].feature.getAttribute('OBJECTID')]);
        this.setFeature(
          event.added[0].feature,
          this.view as esri.MapView,
          [],
          [event.added[0].feature.getAttribute('OBJECTID')]
        );
        this.toggleContent('feature');
      }
      (this.featureTable as any).clearSelection();
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
