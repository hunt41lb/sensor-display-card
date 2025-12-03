function e(e,t,o,i){var s,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,o=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&s.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new n(o,e,i)},a=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,m=_.trustedTypes,f=m?m.emptyScript:"",g=_.reactiveElementPolyfillSupport,y=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},$=(e,t)=>!c(e,t),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&l(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:s}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const n=i?.call(this);s?.call(this,t),this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...d(e),...p(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(o)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of i){const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=o.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==o.converter?.toAttribute?o.converter:v).toAttribute(t,o.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=i;const n=s.fromAttribute(t,e.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){const i=this.constructor,s=this[e];if(o??=i.getPropertyOptions(e),!((o.hasChanged??$)(s,t)||o.useDefault&&o.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:s},n){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==s||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,o,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,g?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.1");const A=globalThis,x=A.trustedTypes,S=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,k="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+E,P=`<${C}>`,T=document,O=()=>T.createComment(""),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,z=Array.isArray,D="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,R=/>/g,M=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,j=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,F=T.createTreeWalker(T,129);function G(e,t){if(!z(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const J=(e,t)=>{const o=e.length-1,i=[];let s,n=2===t?"<svg>":3===t?"<math>":"",r=H;for(let t=0;t<o;t++){const o=e[t];let a,c,l=-1,h=0;for(;h<o.length&&(r.lastIndex=h,c=r.exec(o),null!==c);)h=r.lastIndex,r===H?"!--"===c[1]?r=N:void 0!==c[1]?r=R:void 0!==c[2]?(j.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=M):void 0!==c[3]&&(r=M):r===M?">"===c[0]?(r=s??H,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?M:'"'===c[3]?L:I):r===L||r===I?r=M:r===N||r===R?r=H:(r=M,s=void 0);const d=r===M&&e[t+1].startsWith("/>")?" ":"";n+=r===H?o+P:l>=0?(i.push(a),o.slice(0,l)+k+o.slice(l)+E+d):o+E+(-2===l?t:d)}return[G(e,n+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class K{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let s=0,n=0;const r=e.length-1,a=this.parts,[c,l]=J(e,t);if(this.el=K.createElement(c,o),F.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=F.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(k)){const t=l[n++],o=i.getAttribute(e).split(E),r=/([.?@])?(.*)/.exec(t);a.push({type:1,index:s,name:r[2],strings:o,ctor:"."===r[1]?ee:"?"===r[1]?te:"@"===r[1]?oe:X}),i.removeAttribute(e)}else e.startsWith(E)&&(a.push({type:6,index:s}),i.removeAttribute(e));if(j.test(i.tagName)){const e=i.textContent.split(E),t=e.length-1;if(t>0){i.textContent=x?x.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],O()),F.nextNode(),a.push({type:2,index:++s});i.append(e[t],O())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(E,e+1));)a.push({type:7,index:s}),e+=E.length-1}s++}}static createElement(e,t){const o=T.createElement("template");return o.innerHTML=e,o}}function Z(e,t,o=e,i){if(t===W)return t;let s=void 0!==i?o._$Co?.[i]:o._$Cl;const n=U(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(e),s._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=s:o._$Cl=s),void 0!==s&&(t=Z(e,s._$AS(e,t.values),s,i)),t}class Y{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??T).importNode(t,!0);F.currentNode=i;let s=F.nextNode(),n=0,r=0,a=o[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new Q(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new ie(s,this,e)),this._$AV.push(t),a=o[++r]}n!==a?.index&&(s=F.nextNode(),n++)}return F.currentNode=T,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),U(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>z(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=K.createElement(G(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new Y(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new K(e)),t}k(e){z(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const s of e)i===t.length?t.push(o=new Q(this.O(O()),this.O(O()),this,this.options)):o=t[i],o._$AI(s),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=V}_$AI(e,t=this,o,i){const s=this.strings;let n=!1;if(void 0===s)e=Z(this,e,t,0),n=!U(e)||e!==this._$AH&&e!==W,n&&(this._$AH=e);else{const i=e;let r,a;for(e=s[0],r=0;r<s.length-1;r++)a=Z(this,i[o+r],t,r),a===W&&(a=this._$AH[r]),n||=!U(a)||a!==this._$AH[r],a===V?e=V:e!==V&&(e+=(a??"")+s[r+1]),this._$AH[r]=a}n&&!i&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}class te extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}class oe extends X{constructor(e,t,o,i,s){super(e,t,o,i,s),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??V)===W)return;const o=this._$AH,i=e===V&&o!==V||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==V&&(o===V||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const se=A.litHtmlPolyfillSupport;se?.(K,Q),(A.litHtmlVersions??=[]).push("3.3.1");const ne=globalThis;class re extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let s=i._$litPart$;if(void 0===s){const e=o?.renderBefore??null;i._$litPart$=s=new Q(t.insertBefore(O(),e),e,void 0,o??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}re._$litElement$=!0,re.finalized=!0,ne.litElementHydrateSupport?.({LitElement:re});const ae=ne.litElementPolyfillSupport;ae?.({LitElement:re}),(ne.litElementVersions??=[]).push("4.2.1");const ce=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},le={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:$},he=(e=le,t,o)=>{const{kind:i,metadata:s}=o;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),n.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const s=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,s,e)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=o;return function(o){const s=this[i];t.call(this,o),this.requestUpdate(i,s,e)}}throw Error("Unsupported decorator location: "+i)};function de(e){return(t,o)=>"object"==typeof o?he(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function pe(e){return de({...e,state:!0,attribute:!1})}var ue,_e;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ue||(ue={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(_e||(_e={}));var me=function(e,t,o,i){i=i||{},o=null==o?{}:o;var s=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=o,e.dispatchEvent(s),s};function fe(e){return void 0!==e&&"none"!==e.action}console.info("%c SENSOR-DISPLAY-CARD %c v2.2.0 ","color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");const ge=[{name:"name",label:"Card Name",helper:"Display name shown on the card (optional - uses entity name if blank)",selector:{text:{}}},{name:"icon",label:"Icon",helper:"Main icon displayed in the card",selector:{icon:{}}},{name:"entity",label:"Primary Entity",helper:"Main entity for card state (light, switch, etc.)",selector:{entity:{}}},{type:"expandable",title:"Value Sensors",icon:"mdi:thermometer",schema:[{name:"temp_sensor",label:"Temperature",helper:"Displays temperature value with ° symbol",selector:{entity:{domain:"sensor",device_class:"temperature"}}},{name:"humidity_sensor",label:"Humidity",helper:"Displays humidity value with % symbol",selector:{entity:{domain:"sensor",device_class:"humidity"}}},{name:"power_sensor",label:"Power",helper:"Displays power consumption with W symbol",selector:{entity:{domain:"sensor",device_class:"power"}}}]},{type:"expandable",title:"Binary Sensors",icon:"mdi:motion-sensor",schema:[{name:"motion_sensor",label:"Motion Sensor",helper:"Shows motion-sensor icon when motion detected",selector:{entity:{domain:"binary_sensor",device_class:"motion"}}},{name:"person_sensor",label:"Person Sensor",helper:"Shows person icon when person detected",selector:{entity:{domain:"binary_sensor",device_class:"occupancy"}}},{name:"pet_sensor",label:"Pet Sensor",helper:"Shows paw icon when pet detected",selector:{entity:{domain:"binary_sensor"}}},{name:"vehicle_sensor",label:"Vehicle Sensor",helper:"Shows car icon when vehicle detected",selector:{entity:{domain:"binary_sensor"}}},{name:"door_sensor",label:"Door Sensor",helper:"Shows door-open icon when door is open",selector:{entity:{domain:"binary_sensor",device_class:"door"}}},{name:"window_sensor",label:"Window Sensor",helper:"Shows window-open icon when window is open",selector:{entity:{domain:"binary_sensor",device_class:"window"}}}]},{type:"expandable",title:"Lock",icon:"mdi:shield-lock",schema:[{name:"lock_entity",label:"Lock / Deadbolt",helper:"Shows lock status with shield icon (always visible when configured)",selector:{entity:{domain:"lock"}}}]},{type:"expandable",title:"Display Options",icon:"mdi:eye-settings",schema:[{name:"show_name",label:"Show Name",helper:"Display card name in top left",selector:{boolean:{}},default:!0},{name:"show_icon",label:"Show Icon",helper:"Display main icon in top right",selector:{boolean:{}},default:!0},{name:"show_state",label:"Show State Text",helper:"Display On/Off state next to name",selector:{boolean:{}},default:!1}]},{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",schema:[{name:"tap_action",label:"Tap Action",helper:"Action when card is tapped",selector:{"ui-action":{}}},{name:"hold_action",label:"Hold Action",helper:"Action when card is held",selector:{"ui-action":{}}},{name:"double_tap_action",label:"Double Tap Action",helper:"Action when card is double-tapped",selector:{"ui-action":{}}}]},{type:"expandable",title:"Appearance",icon:"mdi:palette",schema:[{type:"grid",name:"",schema:[{name:"card_height",label:"Card Height",helper:"Height of the card",selector:{select:{options:[{value:"compact",label:"Compact (75px)"},{value:"default",label:"Default (97px)"},{value:"tall",label:"Tall (120px)"}],mode:"dropdown",custom_value:!0}}},{name:"card_width",label:"Card Width",helper:"Width of the card",selector:{select:{options:[{value:"auto",label:"Auto (fill container)"},{value:"full",label:"Full width"}],mode:"dropdown",custom_value:!0}}}]},{name:"icon_size",label:"Icon Size",helper:"Size of the main icon",selector:{select:{options:[{value:"small",label:"Small (25px)"},{value:"default",label:"Default (35px)"},{value:"large",label:"Large (45px)"}],mode:"dropdown"}}}]},{type:"expandable",title:"Colors",icon:"mdi:format-color-fill",schema:[{type:"grid",name:"",schema:[{name:"icon_color",label:"Icon Color",helper:"Default: var(--primary-text-color)",selector:{ui_color:{default_color:""}}},{name:"icon_color_active",label:"Icon Color (Active)",helper:"Default: Uses light RGB or theme color",selector:{ui_color:{default_color:""}}}]},{type:"grid",name:"",schema:[{name:"icon_background_color",label:"Icon Background",helper:"Default: var(--secondary-background-color)",selector:{ui_color:{default_color:""}}},{name:"icon_background_color_active",label:"Icon Background (Active)",helper:"Default: Uses light RGB with opacity",selector:{ui_color:{default_color:""}}}]},{type:"grid",name:"",schema:[{name:"name_color",label:"Name Color",helper:"Default: var(--primary-text-color)",selector:{ui_color:{default_color:""}}},{name:"sensor_text_color",label:"Sensor Text Color",helper:"Default: var(--primary-text-color)",selector:{ui_color:{default_color:""}}}]},{type:"grid",name:"",schema:[{name:"active_sensor_color",label:"Active Sensor Icon Color",helper:"Default: var(--state-binary_sensor-active-color)",selector:{ui_color:{default_color:""}}},{name:"card_border_color",label:"Card Border Color (Active)",helper:"Default: var(--primary-text-color)",selector:{ui_color:{default_color:""}}}]},{type:"grid",name:"",schema:[{name:"card_background_color",label:"Card Background",helper:"Default: var(--card-background-color)",selector:{ui_color:{default_color:""}}},{name:"card_background_color_active",label:"Card Background (Active)",helper:"Default: var(--card-background-color)",selector:{ui_color:{default_color:""}}}]}]},{type:"expandable",title:"Advanced",icon:"mdi:cog",schema:[{name:"grid_area",label:"Grid Area",helper:"CSS grid-area for layout positioning (e.g., 'living-room')",selector:{text:{}}}]}];let ye=class extends re{setConfig(e){this._config=e}_computeLabel(e){return e.label||e.name}_computeHelper(e){return e.helper||""}_valueChanged(e){const t=e.detail.value;me(this,"config-changed",{config:t})}render(){return this.hass&&this._config?B`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${ge}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:B``}};ye.styles=r`
    ha-form {
      display: block;
    }
  `,e([de({attribute:!1})],ye.prototype,"hass",void 0),e([pe()],ye.prototype,"_config",void 0),ye=e([ce("sensor-display-card-editor")],ye);let ve=class extends re{constructor(){super(...arguments),this._held=!1}static getConfigElement(){return document.createElement("sensor-display-card-editor")}static getStubConfig(){return{type:"custom:sensor-display-card",name:"New Sensor Card",icon:"mdi:lightbulb"}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={icon:"mdi:lightbulb",show_name:!0,show_icon:!0,show_state:!1,tap_action:{action:"toggle"},hold_action:{action:"more-info"},double_tap_action:{action:"more-info"},...e},this._config.grid_area&&(this.style.gridArea=this._config.grid_area),this._config.view_layout?.["grid-area"]&&(this.style.gridArea=this._config.view_layout["grid-area"])}getLayoutOptions(){return this._config?.grid_area?{grid_area:this._config.grid_area}:{}}_parseValue(e){if(!e||"unavailable"===e||"unknown"===e)return"--";const t=parseFloat(e);return isNaN(t)?"--":t.toFixed(0)}_isEntityActive(e){if(!e)return!1;const t=e.state,o=e.entity_id.split(".")[0];if("unavailable"===t||"unknown"===t)return!1;switch(o){case"light":case"switch":case"fan":case"input_boolean":case"automation":case"script":case"binary_sensor":default:return"on"===t;case"cover":return"open"===t||"opening"===t;case"lock":return"unlocked"===t||"unlocking"===t;case"media_player":return"playing"===t||"paused"===t||"on"===t||"idle"===t;case"climate":return"off"!==t;case"vacuum":return"cleaning"===t||"returning"===t;case"person":case"device_tracker":return"home"===t}}_isDoorOpen(e){if(!e)return!1;const t=e.state;return"on"===t||"Window/door is open"===t}_isWindowOpen(e){if(!e)return!1;const t=e.state;return"on"===t||"Window/door is open"===t}_getLockIcon(e){if(!e)return"mdi:shield-lock";switch(e.state){case"locked":case"locking":return"mdi:shield-lock";case"unlocked":case"unlocking":case"open":case"opening":return"mdi:shield-lock-open";default:return"mdi:shield-alert"}}_getLockColorVar(e){if(!e)return"var(--state-lock-locked-color, var(--primary-text-color))";switch(e.state){case"locked":return"var(--state-lock-locked-color, var(--success-color, #4caf50))";case"locking":return"var(--state-lock-locking-color, var(--info-color, #2196f3))";case"unlocked":return"var(--state-lock-unlocked-color, var(--warning-color, #ff9800))";case"unlocking":return"var(--state-lock-unlocking-color, var(--info-color, #2196f3))";case"open":return"var(--state-lock-open-color, var(--warning-color, #ff9800))";case"opening":return"var(--state-lock-opening-color, var(--info-color, #2196f3))";case"jammed":return"var(--state-lock-jammed-color, var(--error-color, #f44336))";default:return"var(--error-color, #f44336)"}}_getCardHeight(){const e=this._config?.card_height;if(!e||"default"===e)return"97px";if("compact"===e)return"75px";if("tall"===e)return"120px";if("number"==typeof e)return`${e}px`;if("string"==typeof e){const t=parseFloat(e);return isNaN(t)||e!==String(t)?e:`${t}px`}return"97px"}_getCardWidth(){const e=this._config?.card_width;if(!e||"auto"===e)return"auto";if("full"===e)return"100%";if("number"==typeof e)return`${e}px`;if("string"==typeof e){const t=parseFloat(e);return isNaN(t)||e!==String(t)?e:`${t}px`}return"auto"}_getIconSizes(){const e=this._config?.icon_size;switch(e){case"small":return{iconSize:"25px",containerSize:"40px"};case"large":return{iconSize:"45px",containerSize:"60px"};default:return{iconSize:"35px",containerSize:"50px"}}}_getStateText(e){if(!e)return"";const t=e.state,o=e=>e.charAt(0).toUpperCase()+e.slice(1);switch(e.entity_id.split(".")[0]){case"cover":case"lock":case"media_player":case"climate":case"vacuum":case"person":case"device_tracker":return o(t);default:return this._isEntityActive(e)?"On":"Off"}}_handlePointerDown(){this._held=!1,fe(this._config?.hold_action)&&(this._holdTimeout=setTimeout(()=>{this._held=!0,this._executeAction("hold")},500))}_handlePointerUp(){this._holdTimeout&&(clearTimeout(this._holdTimeout),this._holdTimeout=void 0)}_handleClick(){this._held?this._held=!1:fe(this._config?.double_tap_action)?this._dblClickTimeout?(clearTimeout(this._dblClickTimeout),this._dblClickTimeout=void 0,this._executeAction("double_tap")):this._dblClickTimeout=setTimeout(()=>{this._dblClickTimeout=void 0,this._executeAction("tap")},250):this._executeAction("tap")}_executeAction(e){if(!this.hass||!this._config)return;const t=this._config[`${e}_action`];if(t&&"none"!==t.action)switch(t.action){case"toggle":this._config.entity&&this.hass.callService("homeassistant","toggle",{entity_id:this._config.entity});break;case"more-info":if(this._config.entity||t.entity){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t.entity||this._config.entity}});this.dispatchEvent(e)}break;case"navigate":if(t.navigation_path){history.pushState(null,"",t.navigation_path);const e=new Event("location-changed",{bubbles:!0,composed:!0});this.dispatchEvent(e)}break;case"url":t.url_path&&window.open(t.url_path,"_blank");break;case"call-service":if(t.service){const[e,o]=t.service.split(".");this.hass.callService(e,o,t.service_data||{},t.target)}break;case"fire-dom-event":me(this,"ll-custom",t)}}updated(e){super.updated(e),this._config?.grid_area&&(this.style.gridArea=this._config.grid_area)}render(){if(!this._config||!this.hass)return B`<ha-card>Loading...</ha-card>`;const e=this._config.entity?this.hass.states[this._config.entity]:void 0,t=this._config.temp_sensor?this.hass.states[this._config.temp_sensor]:void 0,o=this._config.humidity_sensor?this.hass.states[this._config.humidity_sensor]:void 0,i=this._config.power_sensor?this.hass.states[this._config.power_sensor]:void 0,s=this._config.motion_sensor?this.hass.states[this._config.motion_sensor]:void 0,n=this._config.pet_sensor?this.hass.states[this._config.pet_sensor]:void 0,r=this._config.person_sensor?this.hass.states[this._config.person_sensor]:void 0,a=this._config.vehicle_sensor?this.hass.states[this._config.vehicle_sensor]:void 0,c=this._config.door_sensor?this.hass.states[this._config.door_sensor]:void 0,l=this._config.window_sensor?this.hass.states[this._config.window_sensor]:void 0,h=this._config.lock_entity?this.hass.states[this._config.lock_entity]:void 0,d=this._isEntityActive(e),p="on"===s?.state,u="on"===n?.state,_="on"===r?.state,m="on"===a?.state,f=this._isDoorOpen(c),g=this._isWindowOpen(l),y=this._getLockIcon(h),v=this._getLockColorVar(h),$=e?.attributes?.rgb_color,b=this._config.name||e?.attributes?.friendly_name||this._config.entity||"Sensor Card",w=this._config.icon||"mdi:lightbulb",A=this._getCardHeight(),x=this._getCardWidth(),{iconSize:S,containerSize:k}=this._getIconSizes(),E=this._config.icon_color||"var(--primary-text-color)",C=this._config.icon_color_active||($?`rgb(${$[0]}, ${$[1]}, ${$[2]})`:E),P=this._config.icon_background_color||"var(--secondary-background-color)",T=this._config.icon_background_color_active||($?`rgba(${$[0]}, ${$[1]}, ${$[2]}, 0.2)`:P),O=this._config.name_color||"var(--primary-text-color)",U=this._config.sensor_text_color||"var(--primary-text-color)",z=this._config.active_sensor_color||"var(--state-binary_sensor-active-color, var(--state-active-color, #ffc107))",D=this._config.card_background_color||"color-mix(in srgb, var(--card-background-color) 50%, transparent)",H=this._config.card_background_color_active||"var(--card-background-color)",N=d?`background-color: ${T}`:`background-color: ${P}`,R=d?`color: ${C}`:`color: ${E}`,M=`\n      --card-height: ${A};\n      --card-width: ${x};\n      --icon-size: ${S};\n      --icon-container-size: ${k};\n      --name-color: ${O};\n      --sensor-text-color: ${U};\n      --active-sensor-color: ${z};\n      --card-bg-color: ${d?H:D};\n      --card-border-color: ${this._config.card_border_color||"var(--primary-text-color)"};\n    `.replace(/\s+/g," ").trim(),I=!1!==this._config.show_name,L=!1!==this._config.show_icon,j=!0===this._config.show_state,W=this._getStateText(e);return B`
      <ha-card
        class="${d?"state-on":"state-off"}"
        style="${M}"
        @pointerdown=${this._handlePointerDown}
        @pointerup=${this._handlePointerUp}
        @pointercancel=${this._handlePointerUp}
        @click=${this._handleClick}
      >
        <!-- Name -->
        ${I?B`<div class="name">${b}${j&&W?B` <span class="state-text">${W}</span>`:V}</div>`:B`<div class="name"></div>`}

        <!-- Icon Container (img_cell) -->
        ${L?B`
              <div class="icon-container" style="${N}">
                <ha-icon .icon=${w} style="${R}"></ha-icon>
              </div>
            `:B`<div class="icon-container hidden"></div>`}

        <!-- Sensors (temp area) -->
        <div class="sensors">
          ${t?B`<span class="temp">${this._parseValue(t.state)}°</span>`:V}
          ${o?B`<span class="humidity">${this._parseValue(o.state)}%</span>`:V}
          ${i?B`<span class="power">${this._parseValue(i.state)}W</span>`:V}
          ${t||o||i||e?V:B`<span class="placeholder">Configure entities</span>`}
        </div>

        <!-- Binary Sensors Row -->
        <div class="binary-sensors">
          ${h?B`<ha-icon
                class="lock-icon"
                icon="${y}"
                style="color: ${v};"
              ></ha-icon>`:V}
          ${c?B`<ha-icon
                class="binary-sensor ${f?"active":"inactive"}"
                icon="${f?"mdi:door-open":"mdi:door-closed"}"
              ></ha-icon>`:V}
          ${l?B`<ha-icon
                class="binary-sensor ${g?"active":"inactive"}"
                icon="${g?"mdi:window-open":"mdi:window-closed"}"
              ></ha-icon>`:V}
          ${r?B`<ha-icon
                class="binary-sensor ${_?"active":"inactive"}"
                icon="${_?"mdi:account":"mdi:account-off"}"
              ></ha-icon>`:V}
          ${n?B`<ha-icon
                class="binary-sensor ${u?"active":"inactive"}"
                icon="${u?"mdi:paw":"mdi:paw-off"}"
              ></ha-icon>`:V}
          ${a?B`<ha-icon
                class="binary-sensor ${m?"active":"inactive"}"
                icon="${m?"mdi:car":"mdi:car-off"}"
              ></ha-icon>`:V}
          ${s?B`<ha-icon
                class="binary-sensor ${p?"active":"inactive"}"
                icon="${p?"mdi:motion-sensor":"mdi:motion-sensor-off"}"
              ></ha-icon>`:V}
        </div>
      </ha-card>
    `}getCardSize(){return 2}};ve.styles=r`
    :host {
      display: block;
    }

    /* Card - using CSS custom properties for customization */
    ha-card {
      display: grid;
      grid-template-areas:
        "n n i i"
        "temp temp temp sensors";
      grid-template-rows: 1fr min-content;
      grid-template-columns: min-content 1fr;
      padding: 6px;
      height: var(--card-height, 97px);
      width: var(--card-width, auto);
      box-sizing: border-box;
      cursor: pointer;
      transition: background-color 0.3s ease, border 0.3s ease;
      background-color: var(--card-bg-color);
    }

    ha-card.state-on {
      border: 1px solid var(--card-border-color, var(--primary-text-color));
    }

    ha-card.state-off {
      border: none;
    }

    /* Name - using custom property for color */
    .name {
      grid-area: n;
      justify-self: start;
      align-self: start;
      text-align: left;
      font-size: 16px;
      font-weight: 500;
      color: var(--name-color, var(--primary-text-color));
      padding: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .name .state-text {
      font-weight: 400;
      opacity: 0.7;
      font-size: 14px;
    }

    /* Icon container - using custom properties for size */
    .icon-container {
      grid-area: i;
      justify-self: end;
      align-self: start;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      width: var(--icon-container-size, 50px);
      height: var(--icon-container-size, 50px);
      transition: background-color 0.5s ease;
    }

    .icon-container.hidden {
      visibility: hidden;
    }

    /* Icon - using custom properties for size */
    .icon-container ha-icon {
      width: var(--icon-size, 35px);
      height: var(--icon-size, 35px);
      --mdc-icon-size: var(--icon-size, 35px);
      transition: color 0.3s ease;
    }

    /* Sensors container - using custom property for text color */
    .sensors {
      grid-area: temp;
      justify-self: start;
      display: flex;
      align-items: baseline;
      gap: 8px;
      padding: 0 0 1px 14px;
    }

    /* Temperature - using custom property for color */
    .temp {
      font-size: 16px;
      line-height: 16px;
      font-weight: 300;
      color: var(--sensor-text-color, var(--primary-text-color));
    }

    /* Humidity and Power - using custom property for color */
    .humidity,
    .power {
      font-size: 12px;
      font-weight: 400;
      opacity: 0.7;
      color: var(--sensor-text-color, var(--primary-text-color));
    }

    .placeholder {
      font-size: 12px;
      font-style: italic;
      color: var(--secondary-text-color);
    }

    /* Binary sensors row */
    .binary-sensors {
      grid-area: sensors;
      justify-self: end;
      align-self: end;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0 0 1px 2px;
      margin: 0 3px 0 0;
    }

    .binary-sensors .binary-sensor {
      width: 21px;
      height: 21px;
      --mdc-icon-size: 21px;
      transition: color 0.3s ease, opacity 0.3s ease;
    }

    .binary-sensors .binary-sensor.active {
      color: var(--active-sensor-color, var(--state-binary_sensor-active-color, var(--state-active-color, #ffc107)));
      animation: pulse 1.5s ease-in-out infinite;
    }

    .binary-sensors .binary-sensor.inactive {
      color: transparent;
      opacity: 0;
      width: 0;
      margin: 0;
      overflow: hidden;
    }

    /* Lock icon - always visible, slightly larger */
    .binary-sensors .lock-icon {
      width: 24px;
      height: 24px;
      --mdc-icon-size: 24px;
      transition: color 0.3s ease;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .unavailable {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color);
      font-style: italic;
    }
  `,e([de({attribute:!1})],ve.prototype,"hass",void 0),e([pe()],ve.prototype,"_config",void 0),ve=e([ce("sensor-display-card")],ve),window.customCards=window.customCards||[],window.customCards.push({type:"sensor-display-card",name:"Sensor Display Card",description:"A card displaying RGB lights with temperature, humidity, power, and motion sensors",preview:!0,documentationURL:"https://github.com/hunt41lb/sensor-display-card"});export{ve as SensorDisplayCard,ye as SensorDisplayCardEditor};
