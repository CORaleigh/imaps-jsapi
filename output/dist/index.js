define(["esri/WebMap","esri/views/MapView","esri/geometry/geometryEngine","esri/widgets/LayerList","esri/widgets/Legend","esri/widgets/Print","esri/widgets/Bookmarks","esri/widgets/BasemapGallery","esri/core/accessorSupport/decorators","esri/widgets/support/widget","esri/widgets/Widget","esri/core/Accessor","esri/widgets/Search","esri/widgets/FeatureTable","esri/layers/FeatureLayer","esri/widgets/Feature","esri/core/watchUtils","esri/widgets/Search/LayerSearchSource","esri/widgets/FeatureTable/FieldColumnConfig","esri/PopupTemplate","esri/widgets/CoordinateConversion","esri/widgets/Expand","esri/widgets/Measurement","esri/widgets/Compass","esri/widgets/Locate","esri/widgets/Track","esri/Color","esri/widgets/Sketch","esri/layers/GraphicsLayer","esri/Graphic","esri/symbols/TextSymbol"],(function(e,t,r,i,a,o,n,l,s,d,c,u,p,f,h,v,y,m,w,g,b,O,D,x,T,E,S,I,L,A,F){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c,u=u&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u,p=p&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p,f=f&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f,h=h&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h,v=v&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v,m=m&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m,w=w&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w,g=g&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g,b=b&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b,O=O&&Object.prototype.hasOwnProperty.call(O,"default")?O.default:O,D=D&&Object.prototype.hasOwnProperty.call(D,"default")?D.default:D,x=x&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x,T=T&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T,E=E&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E,S=S&&Object.prototype.hasOwnProperty.call(S,"default")?S.default:S,I=I&&Object.prototype.hasOwnProperty.call(I,"default")?I.default:I,L=L&&Object.prototype.hasOwnProperty.call(L,"default")?L.default:L,A=A&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A,F=F&&Object.prototype.hasOwnProperty.call(F,"default")?F.default:F;var C=new e;C=window.localStorage.getItem("imaps")?e.fromJSON(JSON.parse(window.localStorage.getItem("imaps"))):new e({portalItem:{id:"95092428774c4b1fb6a3b6f5fed9fbc4"}})
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
  ***************************************************************************** */;var N=function(e,t){return(N=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function M(e,t){function r(){this.constructor=e}N(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function R(e,t,r,i){var a,o=arguments.length,n=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(o<3?a(n):o>3?a(t,r,n):a(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n}var P=function(e){function t(t){var r=e.call(this,t)||this;return r.name="Property Search",r.arcadeExpressionInfos=[{name:"bom-doc-num",title:"bom-doc-num",expression:"var results = FeatureSetByRelationshipName($feature, 'CONDO_BOOKS', ['*'], false); return First(results).BOM_DOC_NUM;"},{name:"deed-doc-num",title:"deed-doc-num",expression:"var results = FeatureSetByRelationshipName($feature, 'CONDO_BOOKS', ['*'], false); return First(results).DEED_DOC_NUM;"},{name:"mailing-address",title:"mailing-address",expression:"When(IsEmpty($feature.ADDR3),$feature.ADDR1 + TextFormatting.NewLine + $feature.ADDR2,$feature.ADDR1 + TextFormatting.NewLine + $feature.ADDR2 + TextFormatting.NewLine + $feature.ADDR3)"},{name:"property-values",title:"property-values",expression:'"Building Value"+TextFormatting.NewLine+"$"+$feature.BLDG_VAL+TextFormatting.NewLine+"Land Value"+TextFormatting.NewLine+"$"+$feature.LAND_VAL+TextFormatting.NewLine+"Total Value"+TextFormatting.NewLine+"$"+$feature.TOTAL_VALUE_ASSD'},{name:"deed-book-page",title:"deed-book-page",expression:'"Book "+$feature.DEED_BOOK+" Page "+$feature.DEED_PAGE'},{name:"general",title:"general",expression:'"PIN"+TextFormatting.NewLine+$feature.PIN_NUM+" "+$feature.PIN_EXT+TextFormatting.NewLine+"REID"+TextFormatting.NewLine+$feature.REID+TextFormatting.NewLine+"City"+TextFormatting.NewLine+Proper($feature.CITY_DECODE)+TextFormatting.NewLine+"Jurisdiction"+TextFormatting.NewLine+$feature.PLANNING_JURISDICTION+TextFormatting.NewLine+"Township"+TextFormatting.NewLine+Proper($feature.TOWNSHIP_DECODE)'}],r.popupTemplate=new g({expressionInfos:r.arcadeExpressionInfos,content:[{type:"text",text:'<h1 class="text-green">{SITE_ADDRESS}</h1><h2>General</h2>{expression/general}<h2>Owner</h2>{OWNER}<br/>{expression/mailing-address}<h2>Valuation</h2>{expression/property-values}<h2>Sale Information</h2>{TOTSALPRICE}<br/>{SALE_DATE}<h2>Deeds</h2>{expression/deed-book-page}<br/><strong>Deed Date</strong><br/>{DEED_DATE}<br/><br/>Legal Description<br/>{PROPDESC}<br/><a href="http://services.wakegov.com/booksweb/pdfview.aspx?docid={expression/bom-doc-num}&RecordDate=" target="_blank">Book of Maps</a><br/><a href="http://services.wakegov.com/booksweb/pdfview.aspx?docid={expression/deed-doc-num}&RecordDate=" target="_blank">Deed</a>'},{type:"media",mediaInfos:[]}]}),r.getProperty=function(e){var t=r.condosTable.relationships.find((function(e){return"CONDO_PROPERTY"===e.name}));r.condosTable.queryRelatedFeatures({relationshipId:null==t?void 0:t.id,objectIds:e,outFields:["OBJECTID"],returnGeometry:!1}).then((function(e){var t=[];for(var i in e)e[i].features.forEach((function(e){t.push(e.getAttribute("OBJECTID"))}));r.propertyLayer.queryFeatures({objectIds:t,outFields:["*"],returnGeometry:!0,outSpatialReference:{wkid:102100}}).then((function(e){r.view.goTo(e.features);var t=r.view.layerViews.find((function(e){return e.layer===r.propertyLayer}));t&&(r.highlights&&r.highlights.remove(),r.highlights=t.highlight(e.features))}))}))},r.searchComplete=function(e){if(r.searchWidget.viewModel.selectedSuggestion){if(console.log(e.numResults),e.numResults){var t=e.results[0].source.layer,i=[];if(e.results[0].results.forEach((function(e){i.push(e.feature.getObjectId())})),4===t.layerId){var a=t.relationships.find((function(e){return"ADDRESSES_CONDO"===e.name}));a&&i&&t.queryRelatedFeatures({relationshipId:a.id,objectIds:i,outFields:["*"]}).then((function(e){var t=[];for(var i in e)e[i].features.forEach((function(e){console.log(e),t.push(e.getAttribute("OBJECTID")),r.getProperty(t),e.layer=r.condosTable,r.setFeature(e,r.view,[],t),r.toggleContent("feature"),r.featureTable.layer=new h({fields:r.condosTable.fields,source:[e],title:"Selected properties",geometryType:"point",objectIdField:"OBJECTID"})}))}))}else r.condosTable.queryFeatures({objectIds:i,outFields:["*"]}).then((function(e){var t=[];e.features.forEach((function(e){t.push(e.getAttribute("OBJECTID"))})),r.getProperty(t),r.setFeature(e.features[0],r.view,[],t),r.toggleContent("feature"),r.featureTable.layer=new h({fields:r.condosTable.fields,source:e.features,title:"Selected properties",geometryType:"point",objectIdField:"OBJECTID"})}))}}else{var o=[],n="OWNER like '"+e.searchTerm.toUpperCase()+"%' OR REID like '"+e.searchTerm.toUpperCase()+"%' OR PIN_NUM like '"+e.searchTerm.toUpperCase()+"'",l=[];r.condosTable.queryFeatures({where:n,outFields:["*"]}).then((function(t){console.log(t),l=t.features,t.features.forEach((function(e){o.push(e.getObjectId())})),n="ADDRESS like '%"+e.searchTerm.toUpperCase()+"%'",r.addressTable.queryFeatures({where:n,outFields:["*"]}).then((function(e){var t=r.addressTable.relationships.find((function(e){return"ADDRESSES_CONDO"===e.name}));e.features.forEach((function(e){o.push(e.getObjectId())})),t&&o.length?r.addressTable.queryRelatedFeatures({relationshipId:t.id,objectIds:o,outFields:["*"]}).then((function(e){var t=[];for(var i in e)e[i].features.forEach((function(e){console.log(e),t.push(e.getAttribute("OBJECTID")),l.push(e)}));r.featureTable.layer=new h({fields:r.condosTable.fields,source:l,title:"Selected properties",geometryType:"point",objectIdField:"OBJECTID"}),r.getProperty(t),r.featureTable.renderNow()})):(r.featureTable.layer=new h({fields:r.condosTable.fields,source:l,title:"Selected properties",geometryType:"point",objectIdField:"OBJECTID"}),r.featureTable.renderNow())}))}))}},r.toggleContent=function(e){var t,r,i,a,o,n,l,s;"table"===e?(null===(t=document.querySelector("#table"))||void 0===t||t.classList.remove("hidden"),null===(r=document.querySelector("#feature"))||void 0===r||r.classList.add("hidden"),null===(i=document.querySelector("#tableItem"))||void 0===i||i.setAttribute("checked",""),null===(a=document.querySelector("#featureItem"))||void 0===a||a.removeAttribute("checked")):(null===(o=document.querySelector("#feature"))||void 0===o||o.classList.remove("hidden"),null===(n=document.querySelector("#table"))||void 0===n||n.classList.add("hidden"),null===(l=document.querySelector("#featureItem"))||void 0===l||l.setAttribute("checked",""),null===(s=document.querySelector("#tableItem"))||void 0===s||s.removeAttribute("checked"))},y.whenDefinedOnce(r,"view",r.init.bind(r)),y.whenDefinedOnce(r,"condosTable",r.initSearch.bind(r)),y.whenDefined(r,"geometry",r.searchByGeometry.bind(r)),r}return M(t,e),t.prototype.searchByGeometry=function(e){var t=this;this.propertyLayer.queryFeatures({geometry:e,returnGeometry:!0,outFields:["OBJECTID"]}).then((function(e){var r=t.view.layerViews.find((function(e){return e.layer===t.propertyLayer}));r&&(t.highlights&&t.highlights.remove(),t.highlights=r.highlight(e.features));var i=t.propertyLayer.relationships.find((function(e){return"PROPERTY_CONDO"===e.name})),a=[];e.features.forEach((function(e){a.push(e.getObjectId())})),t.propertyLayer.queryRelatedFeatures({relationshipId:null==i?void 0:i.id,objectIds:a,outFields:["*"]}).then((function(e){var r=[];for(var i in e)r=r.concat(e[i].features);t.featureTable.layer=new h({fields:t.condosTable.fields,source:r,title:"Selected properties",geometryType:"point",objectIdField:"OBJECTID"}),1===r.length&&(t.setFeature(r[0],t.view,[],a),t.toggleContent("feature")),t.featureTable.renderNow()}))}))},t.prototype.init=function(e){console.log(e.scale)},t.prototype.setFeature=function(e,t,r,i){var a=this;console.log("setting feature");var o=this.condosTable.relationships.find((function(e){return"CONDO_PHOTOS"===e.name}));console.log(o),r=[],this.condosTable.queryRelatedFeatures({relationshipId:null==o?void 0:o.id,objectIds:i,outFields:["*"]}).then((function(t){for(var i in t)t[i].features.forEach((function(e){r.push({title:"",type:"image",caption:"",value:{sourceURL:"http://services.wakegov.com/realestate/photos/mvideo/"+e.getAttribute("IMAGEDIR")+"/"+e.getAttribute("IMAGENAME")}})}));a.condosTable.popupTemplate.content[1].mediaInfos=r,e.layer=a.condosTable,e.popupTemplate=e.layer.popupTemplate,a.feature.graphic=e,console.log(e)}))},t.prototype.exportTable=function(){this.featureTable.layer.queryFeatures({outFields:["*"]}).then((function(e){var t="";e.fields.forEach((function(e){t+=e.alias+","})),t+="\r\n",e.features.forEach((function(e){for(var r in e.attributes)r.toLowerCase().includes("date")?t+='"'+new Date(e.attributes[r]).toDateString()+'",':r.toLowerCase().includes("acres")?t+='"'+parseFloat(e.attributes[r]).toFixed(2)+'",':t+='"'+e.attributes[r]+'",';t+="\r\n"}));var r=new Blob([t],{type:"text/csv;charset=utf-8;"}),i=document.createElement("a");if(void 0!==i.download){var a=URL.createObjectURL(r);i.setAttribute("href",a),i.setAttribute("download","imaps_export.csv"),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)}}))},t.prototype.initSearch=function(e){var t,r,i,a=this,o=new h({fields:[{name:"SITE_ADDRESS",type:"string",alias:"Address"},{name:"OWNER",type:"string",alias:"Owner"},{name:"PIN_NUM",type:"string",alias:"PIN"},{name:"REID",type:"string",alias:"REID"}],source:[],title:"Selected properties",geometryType:"point",objectIdField:"OBJECTID"});this.feature=new v({view:this.view}),this.featureTable=new f({view:this.view,layer:o,fieldConfigs:[new w({name:"SITE_ADDRESS",label:"Address",editable:!1,required:!0}),new w({name:"OWNER",label:"Owner",editable:!1,required:!0}),new w({name:"PIN_NUM",label:"PIN",editable:!1,required:!0}),new w({name:"REID",label:"REID",editable:!1,required:!0})],menuConfig:{items:[{label:"Export"}]}});var n=null===(i=null===(r=null===(t=this.featureTable)||void 0===t?void 0:t.menuConfig)||void 0===r?void 0:r.items)||void 0===i?void 0:i.find((function(e){return"Export"===e.label}));n.clickFunction=function(){a.exportTable()},n.clickFunction.bind(this.featureTable),this.featureTable.on("selection-change",(function(e){e.added.length&&(a.getProperty([e.added[0].feature.getAttribute("OBJECTID")]),a.setFeature(e.added[0].feature,a.view,[],[e.added[0].feature.getAttribute("OBJECTID")]),a.toggleContent("feature")),a.featureTable.clearSelection()})),this.searchWidget=new p({allPlaceholder:"Site Address",includeDefaultSources:!1,container:"search",sources:[new m({layer:this.addressTable,searchFields:["ADDRESS"],displayField:"ADDRESS",exactMatch:!1,outFields:["ADDRESS","REA_REID"],name:"Site Address",placeholder:"example: 222 W HARGETT"}),new m({layer:e,searchFields:["OWNER"],displayField:"OWNER",exactMatch:!1,outFields:["OWNER","REID","OBJECTID"],name:"Owner",placeholder:"example: SMITH, JOHN"}),new m({layer:e,searchFields:["PIN_NUM"],displayField:"PIN_NUM",exactMatch:!1,outFields:["PIN_NUM","REID","OBJECTID"],name:"PIN",placeholder:"example: 0712345678"}),new m({layer:e,searchFields:["REID"],displayField:"REID",exactMatch:!1,outFields:["REID","OBJECTID"],name:"REID",placeholder:"example: 0123456"})]}),this.searchWidget.viewModel.watch("results",(function(e){console.log(e)})),this.searchWidget.on("search-complete",this.searchComplete)},R([s.property()],t.prototype,"view",void 0),R([s.property()],t.prototype,"condosTable",void 0),R([s.property()],t.prototype,"addressTable",void 0),R([s.property()],t.prototype,"propertyLayer",void 0),R([s.property()],t.prototype,"searchWidget",void 0),R([s.property()],t.prototype,"featureTable",void 0),R([s.property()],t.prototype,"feature",void 0),R([s.property()],t.prototype,"geometry",void 0),R([s.property()],t.prototype,"name",void 0),t=R([s.subclass("app.widgets.PropertySearch.PropertySearchViewModel")],t)}(s.declared(u)),k="esri-widget propertysearch-base",_=function(e){function t(t){var r=e.call(this,t)||this;return r.name="",r.viewModel=new P,r._createSearch=function(){r.searchWidget&&(r.searchWidget.container="search")},r._createTable=function(){r.featureTable&&(r.featureTable.container="table")},r._createFeature=function(){r.feature&&(r.feature.container="featureDiv")},r.currentRadioButton="list",r}return M(t,e),t.prototype.render=function(){var e=this;return document.querySelectorAll("#sideDiv calcite-radio-group-item").forEach((function(t){null==t||t.addEventListener("calciteRadioGroupItemChange",(function(t){var r,i,a;(null===(r=t.target)||void 0===r?void 0:r.checked)&&(console.log(null===(i=t.target)||void 0===i?void 0:i.value),e.viewModel.toggleContent(null===(a=t.target)||void 0===a?void 0:a.value))}))})),d.tsx("div",{class:k},d.tsx("div",{afterCreate:this._createSearch,id:"search"}),d.tsx("div",{afterCreate:this._createTable,id:"table"}),d.tsx("div",{id:"feature",class:"hidden"},d.tsx("div",{id:"featureDiv",afterCreate:this._createFeature})),d.tsx("calcite-radio-group",{width:"full"},d.tsx("calcite-radio-group-item",{checked:!0,value:"table",id:"tableItem"},"List"),d.tsx("calcite-radio-group-item",{value:"feature",id:"featureItem",disabled:!0},"Details")))},R([s.aliasOf("viewModel.view")],t.prototype,"view",void 0),R([s.aliasOf("viewModel.condosTable")],t.prototype,"condosTable",void 0),R([s.aliasOf("viewModel.addressTable")],t.prototype,"addressTable",void 0),R([s.aliasOf("viewModel.propertyLayer")],t.prototype,"propertyLayer",void 0),R([s.aliasOf("viewModel.searchWidget")],t.prototype,"searchWidget",void 0),R([s.aliasOf("viewModel.featureTable")],t.prototype,"featureTable",void 0),R([s.aliasOf("viewModel.feature")],t.prototype,"feature",void 0),R([s.aliasOf("viewModel.geometry")],t.prototype,"geometry",void 0),R([s.aliasOf("viewModel.name"),d.renderable()],t.prototype,"name",void 0),R([s.property({type:P}),d.renderable()],t.prototype,"viewModel",void 0),t=R([s.subclass("app.widgets.PropertySearch")],t)}(s.declared(c)),j=function(e){function t(t){var r=e.call(this,t)||this;return y.whenDefinedOnce(r,"view",r.init.bind(r)),r}return M(t,e),t.prototype.init=function(e){console.log(e.scale)},t.prototype.measureOpened=function(){var e=document.querySelector("#measureDiv calcite-radio-group").selectedItem.title;"clear"!=e?this.measurement.activeTool=e:this.measurement.clear()},t.prototype.initMeasure=function(){this.measurement=new D({view:this.view,container:"measureWidget"})},R([s.property()],t.prototype,"view",void 0),t=R([s.subclass("app.widgets.Measure.MeasureViewModel")],t)}(s.declared(u)),B="esri-widget measure-base",$=function(e){function t(t){var r=e.call(this,t)||this;return r.name="",r.viewModel=new j,r._measureCreated=function(){r.initMeasure()},r}return M(t,e),t.prototype.render=function(){var e=this;return document.querySelectorAll("#measureDiv calcite-radio-group-item").forEach((function(t){null==t||t.addEventListener("calciteRadioGroupItemChange",(function(t){var r,i,a,o;(null===(r=t.target)||void 0===r?void 0:r.checked)&&(console.log(null===(i=t.target)||void 0===i?void 0:i.title),"clear"===(null===(a=t.target)||void 0===a?void 0:a.title)?e.measurement.clear():e.measurement.activeTool=null===(o=t.target)||void 0===o?void 0:o.title)}))})),d.tsx("div",{class:B},d.tsx("calcite-radio-group",{width:"full"},d.tsx("calcite-radio-group-item",{checked:!0,title:"distance",value:"distance",id:"tableItem",icon:"measure"},"Line"),d.tsx("calcite-radio-group-item",{title:"area",value:"area",id:"featureItem",icon:"measure-area"},"Area"),d.tsx("calcite-radio-group-item",{title:"clear",value:"clear",id:"featureItem",icon:"trash"},"Clear")),d.tsx("div",{afterCreate:this._measureCreated,id:"measureWidget"}))},R([s.aliasOf("viewModel.view")],t.prototype,"view",void 0),R([s.aliasOf("viewModel.measurement")],t.prototype,"measurement",void 0),R([s.aliasOf("viewModel.initMeasure")],t.prototype,"initMeasure",void 0),R([s.aliasOf("viewModel.measureOpened")],t.prototype,"measureOpened",void 0),R([s.aliasOf("viewModel.name"),d.renderable()],t.prototype,"name",void 0),R([s.property({type:j}),d.renderable()],t.prototype,"viewModel",void 0),t=R([s.subclass("app.widgets.Measure")],t)}(s.declared(c)),q=new g({expressionInfos:[{name:"bom-doc-num",title:"bom-doc-num",expression:"var results = FeatureSetByRelationshipName($feature, 'CONDO_BOOKS', ['*'], false); return First(results).BOM_DOC_NUM;"},{name:"deed-doc-num",title:"deed-doc-num",expression:"var results = FeatureSetByRelationshipName($feature, 'CONDO_BOOKS', ['*'], false); return First(results).DEED_DOC_NUM;"},{name:"mailing-address",title:"mailing-address",expression:"When(IsEmpty($feature.ADDR3),$feature.ADDR1 + TextFormatting.NewLine + $feature.ADDR2,$feature.ADDR1 + TextFormatting.NewLine + $feature.ADDR2 + TextFormatting.NewLine + $feature.ADDR3)"},{name:"property-values",title:"property-values",expression:'"Building Value"+TextFormatting.NewLine+"$"+$feature.BLDG_VAL+TextFormatting.NewLine+"Land Value"+TextFormatting.NewLine+"$"+$feature.LAND_VAL+TextFormatting.NewLine+"Total Value"+TextFormatting.NewLine+"$"+$feature.TOTAL_VALUE_ASSD'},{name:"deed-book-page",title:"deed-book-page",expression:'"Book "+$feature.DEED_BOOK+" Page "+$feature.DEED_PAGE'},{name:"general",title:"general",expression:'"PIN"+TextFormatting.NewLine+$feature.PIN_NUM+" "+$feature.PIN_EXT+TextFormatting.NewLine+"REID"+TextFormatting.NewLine+$feature.REID+TextFormatting.NewLine+"City"+TextFormatting.NewLine+Proper($feature.CITY_DECODE)+TextFormatting.NewLine+"Jurisdiction"+TextFormatting.NewLine+$feature.PLANNING_JURISDICTION+TextFormatting.NewLine+"Township"+TextFormatting.NewLine+Proper($feature.TOWNSHIP_DECODE)'}],content:[{type:"text",text:'<h1 class="text-green">{SITE_ADDRESS}</h1><h2>General</h2>{expression/general}<h2>Owner</h2>{OWNER}<br/>{expression/mailing-address}<h2>Valuation</h2>{expression/property-values}<h2>Sale Information</h2>{TOTSALPRICE}<br/>{SALE_DATE}<h2>Deeds</h2>{expression/deed-book-page}<br/><strong>Deed Date</strong><br/>{DEED_DATE}<br/><br/>Legal Description<br/>{PROPDESC}<br/><a href="http://services.wakegov.com/booksweb/pdfview.aspx?docid={expression/bom-doc-num}&RecordDate=" target="_blank">Book of Maps</a><br/><a href="http://services.wakegov.com/booksweb/pdfview.aspx?docid={expression/deed-doc-num}&RecordDate=" target="_blank">Deed</a>'},{type:"media",mediaInfos:[]}]}),W=new h({portalItem:{id:"08050bf067bb4b20adea4b0b4f0a39e3"},spatialReference:{wkid:102100}}),U=new h({portalItem:{id:"08050bf067bb4b20adea4b0b4f0a39e3"},layerId:1,spatialReference:{wkid:102100},popupTemplate:q});U.load();var J=new h({portalItem:{id:"08050bf067bb4b20adea4b0b4f0a39e3"},layerId:4,spatialReference:{wkid:102100}});J.load();var G=function(e){function t(t){var r=e.call(this,t)||this;return r.name="Slagathor",y.whenDefinedOnce(r,"view",r.init.bind(r)),r}return M(t,e),t.prototype.initDraw=function(){var e=this;this.graphics=new L({listMode:"hide"}),this.view.map.add(this.graphics),this.sketch=new I({view:this.view,container:"sketchDiv",layer:this.graphics}),this.sketch.on("create",(function(t){var r;if("complete"===t.state&&(null===(r=e.label)||void 0===r?void 0:r.length)){var i=t.graphic.geometry;"polygon"===t.graphic.geometry.type&&(i=t.graphic.geometry.centroid);var a=new A({geometry:i,symbol:new F({text:e.label,color:e.textColor,haloColor:"white",haloSize:1,verticalAlignment:"top",horizontalAlignment:"right"})});e.graphics.add(a)}}))},t.prototype.init=function(e){console.log(e.scale)},R([s.property()],t.prototype,"view",void 0),R([s.property()],t.prototype,"container",void 0),R([s.property()],t.prototype,"name",void 0),t=R([s.subclass("app.widgets.Draw.DrawViewModel")],t)}(s.declared(u)),V="esri-widget draw-base",H=function(e){function t(t){var r=e.call(this,t)||this;return r.viewModel=new G,r._drawUpdated=function(e){r.viewModel.sketch||r.viewModel.initDraw()},r}return M(t,e),t.prototype.render=function(){var e=this,t=document.querySelector("#fill");null==t||t.addEventListener("calciteColorChange",(function(t){var r=t.target.value;e.viewModel.sketch.viewModel.pointSymbol.color=S.fromHex(r),e.viewModel.sketch.viewModel.polygonSymbol.color=S.fromHex(r)}));var r=document.querySelector("#line");null==r||r.addEventListener("calciteColorChange",(function(t){var r=t.target.value;e.viewModel.sketch.viewModel.polylineSymbol.color=S.fromHex(r),e.viewModel.sketch.viewModel.pointSymbol.outline.color=S.fromHex(r),e.viewModel.sketch.viewModel.polygonSymbol.outline.color=S.fromHex(r)}));var i=document.querySelector("#opacity");null==i||i.addEventListener("calciteInputBlur",(function(t){e.viewModel.graphics.opacity=parseFloat(t.target.value)}));var a=document.querySelector("#width");null==a||a.addEventListener("calciteInputBlur",(function(t){e.viewModel.sketch.viewModel.polylineSymbol.width=parseFloat(t.target.value),e.viewModel.sketch.viewModel.pointSymbol.outline.width=parseFloat(t.target.value),e.viewModel.sketch.viewModel.polygonSymbol.outline.width=parseFloat(t.target.value)}));var o=document.querySelector("#label");null==o||o.addEventListener("calciteInputBlur",(function(t){e.set("label",t.target.value)}));var n=document.querySelector("#textColor");return null==n||n.addEventListener("calciteColorChange",(function(t){e.set("textColor",S.fromHex(t.target.value))})),d.tsx("div",{class:V},d.tsx("div",{afterUpdate:this._drawUpdated,id:"sketchDiv"}),d.tsx("calcite-block",{heading:"Settings",open:!0,collapsible:!0},d.tsx("calcite-block-section",{text:"Color"},d.tsx("calcite-label",{scale:"s"},"Fill Color"),d.tsx("calcite-color",{id:"fill",hideChannels:!0,hideSaved:!0,appearance:"minimal",scale:"s"}),d.tsx("calcite-label",{scale:"s"},"Line Color"),d.tsx("calcite-color",{id:"line",hideChannels:!0,hideSaved:!0,appearance:"minimal",scale:"s"})),d.tsx("calcite-block-section",{text:"Opacity"},d.tsx("calcite-label",{scale:"s"},"Opacity"),d.tsx("calcite-input",{scale:"s",id:"opacity",type:"number",max:"1",min:"0",value:"1",step:"0.1"})),d.tsx("calcite-block-section",{text:"Outline"},d.tsx("calcite-label",{scale:"s"},"Width"),d.tsx("calcite-input",{scale:"s",id:"width",type:"number",max:"10",min:"0",value:"1",step:"0.5"})),d.tsx("calcite-block-section",{text:"Labeling"},d.tsx("calcite-label",{scale:"s"},"Label"),d.tsx("calcite-input",{scale:"s",id:"label",type:"textarea"}),d.tsx("calcite-color",{id:"textColor",hideChannels:!0,hideSaved:!0,appearance:"minimal",scale:"s"}))))},R([s.aliasOf("viewModel.view")],t.prototype,"view",void 0),R([s.aliasOf("viewModel.label")],t.prototype,"label",void 0),R([s.aliasOf("viewModel.textColor")],t.prototype,"textColor",void 0),R([s.property({type:G}),d.renderable()],t.prototype,"viewModel",void 0),t=R([s.subclass("app.widgets.Draw")],t)}(s.declared(c)),z=function(e){function t(t){var r=e.call(this,t)||this;return y.whenDefinedOnce(r,"view",r.init.bind(r)),r}return M(t,e),t.prototype.initSketch=function(){var e=this;this.graphics=new L({listMode:"hide"}),this.view.map.add(this.graphics),this.sketch=new I({view:this.view,container:"selectWidget",layer:this.graphics,creationMode:"single"}),this.sketch.on("create",(function(t){"complete"===t.state&&e.graphics.removeAll()}))},t.prototype.init=function(e){console.log(e.scale),this.bufferDistance=0},R([s.property()],t.prototype,"view",void 0),R([s.property()],t.prototype,"layer",void 0),t=R([s.subclass("app.widgets.Select.SelectViewModel")],t)}(s.declared(u)),K="esri-widget select-base",Y=function(e){function t(t){var r=e.call(this,t)||this;return r.viewModel=new z,r._sketchCreated=function(){r.viewModel.sketch||r.viewModel.initSketch()},r}return M(t,e),t.prototype.handleChange=function(e){this.set("bufferDistance",parseInt(e.target.value))},t.prototype.render=function(){var e,t=this;return null===(e=document.querySelector("#selectDiv calcite-input"))||void 0===e||e.addEventListener("calciteInputBlur",(function(e){t.handleChange(e)})),d.tsx("div",{class:K},d.tsx("div",{afterUpdate:this._sketchCreated,id:"selectWidget"}),d.tsx("calcite-label",{scale:"s"},"Buffer Distance (feet) "),d.tsx("calcite-input",{scale:"s",type:"number",min:"0",max:"2000",step:"50",value:this.bufferDistance}))},R([s.aliasOf("viewModel.view")],t.prototype,"view",void 0),R([s.aliasOf("viewModel.layer")],t.prototype,"layer",void 0),R([s.aliasOf("viewModel.sketch")],t.prototype,"sketch",void 0),R([s.aliasOf("viewModel.bufferDistance")],t.prototype,"bufferDistance",void 0),R([s.property({type:z}),d.renderable()],t.prototype,"viewModel",void 0),t=R([s.subclass("app.widgets.Select")],t)}(s.declared(c)),X=new $,Q=new Y,Z=new _,ee=new H;var te=new t({container:"viewDiv",map:C}),re=function(e){document.querySelectorAll(".panel").forEach((function(t){t.title!=e?t.classList.add("hidden"):(t.removeAttribute("dismissed"),window.outerWidth<500?t.setAttribute("style","min-width: calc(100% - 50px)"):t.setAttribute("style","min-width: 350px"),t.classList.remove("hidden"),"Measure"!=t.title||X.measureOpened())}))},ie=document.querySelectorAll("calcite-action");null==ie||ie.forEach((function(e){null==e||e.addEventListener("click",(function(e){re(e.target.text)}))})),te.when((function(){var e=C.layers.find((function(e){return"Property"===e.title}));te.on("hold",(function(e){Z.geometry=e.mapPoint})),te.whenLayerView(e).then((function(){Z.propertyLayer=e,Q.viewModel.sketch.on("create",(function(e){var t;if("complete"===e.state){if((null===(t=Q.viewModel)||void 0===t?void 0:t.bufferDistance)>0){var i=r.geodesicBuffer(e.graphic.geometry,Q.viewModel.bufferDistance,"meters");Z.geometry=i}else Z.geometry=e.graphic.geometry;re("Search")}}))}))})),document.querySelectorAll("calcite-panel").forEach((function(e){e.addEventListener("calcitePanelDismissedChange",(function(e){document.querySelectorAll("calcite-panel").forEach((function(e){e.setAttribute("style","min-width: 0px"),document.querySelectorAll(".maximize").forEach((function(e){e.setAttribute("icon","maximize")}))}))}))})),document.querySelectorAll(".maximize").forEach((function(e){e.addEventListener("click",(function(t){var r,i,a,o,n,l,s,d;null===(i=null===(r=e.parentElement)||void 0===r?void 0:r.parentElement)||void 0===i||i.removeAttribute("dismissed"),null===(o=null===(a=e.parentElement)||void 0===a?void 0:a.parentElement)||void 0===o||o.classList.remove("hidden"),"maximize"===e.getAttribute("icon")?(e.setAttribute("icon","minimize"),null===(l=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===l||l.setAttribute("style","min-width: calc(100% - 50px)")):"minimize"===e.getAttribute("icon")&&(e.setAttribute("icon","maximize"),null===(d=null===(s=e.parentElement)||void 0===s?void 0:s.parentElement)||void 0===d||d.setAttribute("style","min-width:350px"))}))})),window.onresize=function(e){e.target.outerWidth>=500?document.querySelectorAll("calcite-panel").forEach((function(e){var t;"minimize"===(null===(t=e.querySelector(".maximize"))||void 0===t?void 0:t.getAttribute("icon"))?e.setAttribute("style","min-width: calc(100% - 50px)"):e.setAttribute("style","min-width: 350px")})):document.querySelectorAll("calcite-panel").forEach((function(e){e.getAttribute("dismissed")?e.setAttribute("style","min-width: 0px"):e.setAttribute("style","min-width: calc(100% - 50px)")}))},te.when((function(e){new a({view:e,container:"legendDiv"}),new i({view:e,container:"layerDiv",listItemCreatedFunction:function(e){}}),new o({view:e,container:"printDiv",printServiceUrl:"https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"}),new n({view:e,container:"bookmarkDiv",editingEnabled:!0}),new l({view:e,container:"basemapDiv"});var t=new b({view:e}),r=new O({content:t,mode:"floating"});return e.ui.add(r,"bottom-left"),e.ui.add(new x({view:e}),"top-left"),e.ui.add(new T({view:e}),"top-left"),e.ui.add(new E({view:e}),"top-left"),X.view=e,X.container="measureDiv",ee.view=e,ee.container="drawDiv",Z.view=e,Z.condosTable=U,Z.addressTable=J,Z.propertyLayer=W,Z.container="sideDiv",Q.container="selectDiv",Q.view=e,Q.layer=W,e})),document.querySelectorAll("calcite-panel").forEach((function(e){e.shadowRoot.innerHTML+="<style>.content-container { height: 100%; } </style>"})),window.addEventListener("pagehide",(function(){te.map.removeMany(te.map.allLayers.filter((function(e){return"group"===e.type&&!e.layers.length})).toArray());var e=te.map.toJSON();e.initialState.viewpoint.targetGeometry=te.extent,window.localStorage.setItem("imaps",JSON.stringify(e))}))}));
