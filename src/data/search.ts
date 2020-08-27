import FeatureLayer from 'esri/layers/FeatureLayer';
import PopupTemplate from 'esri/PopupTemplate';
import ExpressionInfo from 'esri/popup/ExpressionInfo';

const arcadeExpressionInfos = [
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

const popupTemplate = new PopupTemplate({
  expressionInfos: arcadeExpressionInfos,
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

export const featureLayer = new FeatureLayer({
  portalItem: {
    id: '08050bf067bb4b20adea4b0b4f0a39e3'
  },
  spatialReference: { wkid: 102100 }
});

export const condosTable = new FeatureLayer({
  portalItem: {
    id: '08050bf067bb4b20adea4b0b4f0a39e3'
  },
  layerId: 1,
  spatialReference: { wkid: 102100 },
  popupTemplate: popupTemplate
});
condosTable.load();
export const addressTable = new FeatureLayer({
  portalItem: {
    id: '08050bf067bb4b20adea4b0b4f0a39e3'
  },
  layerId: 4,
  spatialReference: { wkid: 102100 }
});
addressTable.load();
export * from './app';
