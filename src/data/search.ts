import FeatureLayer from 'esri/layers/FeatureLayer';
import PopupTemplate from 'esri/PopupTemplate';
import ExpressionInfo from 'esri/popup/ExpressionInfo';
import CustomContent from 'esri/popup/content/CustomContent';
import Locator from 'esri/tasks/Locator';
import geodesicUtils from 'esri/geometry/support/geodesicUtils';
import Feature from 'esri/widgets/Feature';

const arcadeExpressionInfos = [
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
    expression:
      'var juris = $feature.PLANNING_JURISDICTION;When(' +
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
    expression:
      '"PIN"+TextFormatting.NewLine+$feature.PIN_NUM+" "+$feature.PIN_EXT+TextFormatting.NewLine+' +
      '"REID"+TextFormatting.NewLine+$feature.REID+TextFormatting.NewLine+"City"+TextFormatting.NewLine+' +
      'Proper($feature.CITY_DECODE)+TextFormatting.NewLine+"Jurisdiction"+TextFormatting.NewLine+' +
      '$feature.PLANNING_JURISDICTION+TextFormatting.NewLine+"Township"+TextFormatting.NewLine+Proper($feature.TOWNSHIP_DECODE)'
  },
  {
    name: 'addresses',
    title: 'Addresses',
    expression:
      "var rel = FeatureSetByRelationshipName($feature, 'PROPERTY', ['*'], true);var test = Array(Count(rel));var cnt = 0;var f = First(rel);var fs = FeatureSetByPortalItem(Portal('https://ral.maps.arcgis.com/'), '318be24592ea4dcba042511b3125fd53', 2, ['ADDRESS','FEATURETYPE']);var containfs = Contains(f, fs);var addresses = Array(Count(containfs));var cnt = 0;for (var i in containfs){        addresses[cnt] = {'ADDRESS': i['ADDRESS'], 'FEATURETYPE': i['FEATURETYPE']};    cnt+=1;}function sortAddresses(a,b) {    return  a['ADDRESS'] > b['ADDRESS'];}var sorted =  Sort(addresses, sortAddresses);var list = '';for (var i in sorted) {    list += sorted[i]['ADDRESS'] + ' (' + sorted[i]['FEATURETYPE'] + ')' + TextFormatting.NewLine;}return list;"
  }
] as ExpressionInfo[];
const services: any[] = [
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

const scrollToService = (e: any) => {
  const rect = (e.detail.requestedAccordionItem as HTMLElement).getBoundingClientRect();
  const div = document.querySelector('#featureDiv');
  setTimeout(() => {
    div?.scrollTo({ top: rect.top + div.scrollTop - 155, behavior: 'smooth' });
  }, 500);
};
const serviceChanged = (graphic: __esri.Graphic, view: __esri.MapView | __esri.SceneView, e: any) => {
  if (
    !e.detail.requestedAccordionItem.hasAttribute('active') &&
    e.detail.requestedAccordionItem.childElementCount === 0
  ) {
    const loader = document.createElement('calcite-loader');
    loader.setAttribute('inline', '');
    const header = e.detail.requestedAccordionItem.shadowRoot.querySelector('.accordion-item-header') as HTMLElement;
    header.insertBefore(loader, header.childNodes[1]);
    const serviceGroup: any = services.find(service => {
      return service.group.title === e.detail.requestedAccordionItem.getAttribute('item-title');
    });
    const promises: Promise<__esri.FeatureSet>[] = [];

    if (serviceGroup) {
      const layers = view.map.allLayers.filter(layer => {
        return serviceGroup.group.layers.includes(layer.title);
      });
      layers.forEach(layer => {
        promises.push(
          (layer as __esri.FeatureLayer).queryFeatures({
            geometry: graphic.geometry,
            outFields: ['*'],
            returnGeometry: true
          })
        );
      });
    }
    if (promises.length) {
      return Promise.all(promises).then(results => {
        results.forEach(result => {
          if (result.features.length) {
            result.features.forEach((feature: __esri.Graphic) => {
              const div = document.createElement('div');
              e.detail.requestedAccordionItem.append(div);
              new Feature({ container: div, graphic: feature });
            });
          }
        });
        scrollToService(e);
        header.removeChild(loader);
      });
    } else {
      header.removeChild(loader);
      return 'No services found.';
    }
  } else {
    scrollToService(e);
  }
};
const deedCreator = (e: any) => {
  return (e.graphic.layer as FeatureLayer)
    .queryRelatedFeatures({
      relationshipId: (e.graphic.layer as FeatureLayer).relationships.find(r => {
        return r.name === 'BOOKS';
      })?.id,
      objectIds: [e.graphic.getObjectId()],
      outFields: ['BOM_DOC_NUM', 'DEED_DOC_NUM']
    })
    .then(result => {
      const deed = result[e.graphic.getObjectId()].features[0].getAttribute('DEED_DOC_NUM');
      const bom = result[e.graphic.getObjectId()].features[0].getAttribute('BOM_DOC_NUM');
      const div = document.createElement('div');
      div.setAttribute('style', 'display: flex;flex-direction: row;');
      if (deed) {
        const deedBtn = document.createElement('calcite-button');
        deedBtn.setAttribute('scale', 's');
        deedBtn.setAttribute('target', '_blank');
        deedBtn.setAttribute('round', '');
        deedBtn.setAttribute('icon-start', 'file-text');
        deedBtn.setAttribute(
          'href',
          'http://services.wakegov.com/booksweb/pdfview.aspx?docid=' + deed + '&RecordDate='
        );

        deedBtn.textContent = 'Deed';
        div.append(deedBtn);
      }
      if (bom) {
        const bombtn = document.createElement('calcite-button');
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

export const featureLayer = new FeatureLayer({
  portalItem: {
    id: 'd3d02d5e35324b769469b99121c0e996'
  },
  spatialReference: { wkid: 102100 }
});

export const condosTable = new FeatureLayer({
  portalItem: {
    id: 'd3d02d5e35324b769469b99121c0e996'
  },
  layerId: 1,
  spatialReference: { wkid: 102100 }
});
condosTable.load();
export const addressTable = new FeatureLayer({
  portalItem: {
    id: 'd3d02d5e35324b769469b99121c0e996'
  },
  layerId: 4,
  spatialReference: { wkid: 102100 }
});
addressTable.load();

export const createTemplate = (view: __esri.MapView | __esri.SceneView) => {
  const popupTemplate = new PopupTemplate({
    expressionInfos: arcadeExpressionInfos,
    content: [
      {
        type: 'text',
        text: '<h1>{SITE_ADDRESS}</h1>'
      },
      new CustomContent({
        outFields: ['*'],
        creator: (e: any) => {
          return new Locator({
            url: 'https://maps.raleighnc.gov/arcgis/rest/services/Locators/CompositeLocator/GeocodeServer',
            outSpatialReference: { wkid: 4326 }
          })
            .addressToLocations({
              address: { singleLine: e.graphic.getAttribute('SITE_ADDRESS') },
              outFields: ['*']
            })
            .then((candidates: __esri.AddressCandidate[]) => {
              if (candidates.length) {
                const candidate = candidates.find(candidate => {
                  return candidate.attributes['Loc_name'] === 'WakeStreets';
                });
                if (candidate) {
                  const dist = geodesicUtils.geodesicDistance(candidate.location, {
                    x: (e.graphic.geometry as __esri.Polygon).centroid.longitude,
                    y: (e.graphic.geometry as __esri.Polygon).centroid.latitude,
                    spatialReference: { wkid: 4326 } as any
                  } as any);
                  const cbll =
                    (e.graphic.geometry as __esri.Polygon).centroid.latitude +
                    ',' +
                    (e.graphic.geometry as __esri.Polygon).centroid.longitude;
                  const div = document.createElement('div');
                  div.setAttribute('style', 'display: flex;flex-direction: row;');
                  const btn = document.createElement('calcite-button');
                  btn.setAttribute('scale', 's');
                  btn.setAttribute('target', '_blank');
                  btn.setAttribute('round', '');
                  btn.setAttribute('icon-start', 'person');
                  btn.setAttribute(
                    'href',
                    'https://maps.google.com?layer=c&cbll=' + cbll + '&cbp=0,' + dist.azimuth?.toString() + ',0,0,0'
                  );

                  btn.textContent = 'Street View';

                  div.append(btn);
                  const tax = document.createElement('calcite-button');
                  tax.setAttribute('scale', 's');
                  tax.setAttribute('target', '_blank');
                  tax.setAttribute(
                    'href',
                    'http://services.wakegov.com/realestate/Account.asp?id=' + e.graphic.getAttribute('REID')
                  );
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

      // {
      //   type: 'custom',
      //   text: '<calcite-button scale="s" href="#" class="streetView" target="_blank">Street View</calcite-button>'
      // },
      {
        type: 'text',
        text: '<h2>Owner</h1>'
      },
      {
        type: 'text',
        text:
          // '<h1 class="text-green">{SITE_ADDRESS}</h1>' +
          // '<h2>General</h2>{expression/general}' +
          '{OWNER}<br/>{expression/mailing-address}'
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
        creator: (e: any) => {
          const accordion = document.createElement('calcite-accordion');
          accordion.setAttribute('selection-mode', 'single');

          services.forEach(service => {
            const item = document.createElement('calcite-accordion-item');
            item.setAttribute('item-title', service.group.title);
            accordion.append(item);
          });
          //const f = serviceChanged.bind(e.Graphic);
          // setTimeout(f, 1000);
          const graphic = e.graphic;
          accordion.addEventListener('calciteAccordionChange', (e: any) => {
            serviceChanged(graphic, view, e);
          });
          return accordion;
        }
      }),
      {
        type: 'text',
        text: '<h2>Addresses</h1>'
      },
      {
        type: 'text',
        text: '{expression/addresses}'
      }
    ]
  });
  condosTable.popupTemplate = popupTemplate;
};

export * from './app';
