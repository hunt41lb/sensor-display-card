function e(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new n(i,e,s)},a=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,m=_.trustedTypes,f=m?m.emptyScript:"",g=_.reactiveElementPolyfillSupport,y=(e,t)=>e,$={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},v=(e,t)=>!c(e,t),b={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&l(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const n=s?.call(this);o?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...d(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{if(i)e.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,e.appendChild(s)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:$;this._$Em=s;const n=o.fromAttribute(t,e.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const s=this.constructor,o=this[e];if(i??=s.getPropertyOptions(e),!((i.hasChanged??v)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==o||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,g?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.1");const A=globalThis,S=A.trustedTypes,x=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,P=`<${C}>`,O=document,T=()=>O.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,H="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,R=/>/g,D=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,j=/"/g,I=/^(?:script|style|textarea|title)$/i,W=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,F=O.createTreeWalker(O,129);function G(e,t){if(!U(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,s=[];let o,n=2===t?"<svg>":3===t?"<math>":"",r=N;for(let t=0;t<i;t++){const i=e[t];let a,c,l=-1,h=0;for(;h<i.length&&(r.lastIndex=h,c=r.exec(i),null!==c);)h=r.lastIndex,r===N?"!--"===c[1]?r=M:void 0!==c[1]?r=R:void 0!==c[2]?(I.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=D):void 0!==c[3]&&(r=D):r===D?">"===c[0]?(r=o??N,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?D:'"'===c[3]?j:L):r===j||r===L?r=D:r===M||r===R?r=N:(r=D,o=void 0);const d=r===D&&e[t+1].startsWith("/>")?" ":"";n+=r===N?i+P:l>=0?(s.push(a),i.slice(0,l)+E+i.slice(l)+k+d):i+k+(-2===l?t:d)}return[G(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class K{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0;const r=e.length-1,a=this.parts,[c,l]=J(e,t);if(this.el=K.createElement(c,i),F.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=F.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(E)){const t=l[n++],i=s.getAttribute(e).split(k),r=/([.?@])?(.*)/.exec(t);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?ee:"?"===r[1]?te:"@"===r[1]?ie:X}),s.removeAttribute(e)}else e.startsWith(k)&&(a.push({type:6,index:o}),s.removeAttribute(e));if(I.test(s.tagName)){const e=s.textContent.split(k),t=e.length-1;if(t>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],T()),F.nextNode(),a.push({type:2,index:++o});s.append(e[t],T())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(k,e+1));)a.push({type:7,index:o}),e+=k.length-1}o++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function Z(e,t,i=e,s){if(t===B)return t;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=z(t)?void 0:t._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(e),o._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(t=Z(e,o._$AS(e,t.values),o,s)),t}class Y{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??O).importNode(t,!0);F.currentNode=s;let o=F.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new Q(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new se(o,this,e)),this._$AV.push(t),a=i[++r]}n!==a?.index&&(o=F.nextNode(),n++)}return F.currentNode=O,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),z(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>U(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=K.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new Y(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new K(e)),t}k(e){U(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new Q(this.O(T()),this.O(T()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(e,t=this,i,s){const o=this.strings;let n=!1;if(void 0===o)e=Z(this,e,t,0),n=!z(e)||e!==this._$AH&&e!==B,n&&(this._$AH=e);else{const s=e;let r,a;for(e=o[0],r=0;r<o.length-1;r++)a=Z(this,s[i+r],t,r),a===B&&(a=this._$AH[r]),n||=!z(a)||a!==this._$AH[r],a===V?e=V:e!==V&&(e+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}class te extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}class ie extends X{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??V)===B)return;const i=this._$AH,s=e===V&&i!==V||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const oe=A.litHtmlPolyfillSupport;oe?.(K,Q),(A.litHtmlVersions??=[]).push("3.3.1");const ne=globalThis;class re extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let o=s._$litPart$;if(void 0===o){const e=i?.renderBefore??null;s._$litPart$=o=new Q(t.insertBefore(T(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}re._$litElement$=!0,re.finalized=!0,ne.litElementHydrateSupport?.({LitElement:re});const ae=ne.litElementPolyfillSupport;ae?.({LitElement:re}),(ne.litElementVersions??=[]).push("4.2.1");const ce=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},le={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:v},he=(e=le,t,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,o,e)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];t.call(this,i),this.requestUpdate(s,o,e)}}throw Error("Unsupported decorator location: "+s)};function de(e){return(t,i)=>"object"==typeof i?he(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function pe(e){return de({...e,state:!0,attribute:!1})}var ue,_e;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ue||(ue={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(_e||(_e={}));var me=function(e,t,i,s){s=s||{},i=null==i?{}:i;var o=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,e.dispatchEvent(o),o};function fe(e){return void 0!==e&&"none"!==e.action}console.info("%c SENSOR-DISPLAY-CARD %c v2.3.0 ","color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");const ge=[{name:"name",label:"Card Name",helper:"Display name shown on the card (optional - uses entity name if blank)",selector:{text:{}}},{name:"icon",label:"Icon",helper:"Main icon displayed in the card",selector:{icon:{}}},{name:"entity",label:"Primary Entity",helper:"Main entity for card state (light, switch, etc.)",selector:{entity:{}}},{type:"expandable",title:"Value Sensors",icon:"mdi:thermometer",schema:[{name:"temp_sensor",label:"Temperature",helper:"Displays temperature value with ° symbol",selector:{entity:{domain:"sensor",device_class:"temperature"}}},{name:"humidity_sensor",label:"Humidity",helper:"Displays humidity value with % symbol",selector:{entity:{domain:"sensor",device_class:"humidity"}}},{name:"power_sensor",label:"Power",helper:"Displays power consumption with W symbol",selector:{entity:{domain:"sensor",device_class:"power"}}}]},{type:"expandable",title:"Binary Sensors",icon:"mdi:motion-sensor",schema:[{name:"motion_sensor",label:"Motion Sensor",helper:"Shows motion-sensor icon when motion detected",selector:{entity:{domain:"binary_sensor",device_class:"motion"}}},{name:"person_sensor",label:"Person Sensor",helper:"Shows person icon when person detected",selector:{entity:{domain:"binary_sensor",device_class:"occupancy"}}},{name:"pet_sensor",label:"Pet Sensor",helper:"Shows paw icon when pet detected",selector:{entity:{domain:"binary_sensor"}}},{name:"vehicle_sensor",label:"Vehicle Sensor",helper:"Shows car icon when vehicle detected",selector:{entity:{domain:"binary_sensor"}}},{name:"door_sensor",label:"Door Sensor",helper:"Shows door-open icon when door is open",selector:{entity:{domain:"binary_sensor",device_class:"door"}}},{name:"window_sensor",label:"Window Sensor",helper:"Shows window-open icon when window is open",selector:{entity:{domain:"binary_sensor",device_class:"window"}}}]},{type:"expandable",title:"Lock",icon:"mdi:shield-lock",schema:[{name:"lock_entity",label:"Lock / Deadbolt",helper:"Shows lock status with shield icon (always visible when configured)",selector:{entity:{domain:"lock"}}}]},{type:"expandable",title:"Display Options",icon:"mdi:eye-settings",schema:[{name:"show_name",label:"Show Name",helper:"Display card name in top left",selector:{boolean:{}},default:!0},{name:"show_icon",label:"Show Icon",helper:"Display main icon in top right",selector:{boolean:{}},default:!0},{name:"show_state",label:"Show State Text",helper:"Display On/Off state next to name",selector:{boolean:{}},default:!1}]},{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",schema:[{name:"tap_action",label:"Tap Action",helper:"Action when card is tapped",selector:{"ui-action":{}}},{name:"hold_action",label:"Hold Action",helper:"Action when card is held",selector:{"ui-action":{}}},{name:"double_tap_action",label:"Double Tap Action",helper:"Action when card is double-tapped",selector:{"ui-action":{}}}]},{type:"expandable",title:"Appearance",icon:"mdi:palette",schema:[{type:"grid",name:"",schema:[{name:"card_height",label:"Card Height",helper:"e.g., 97px, 120px, 75px (default: 97px)",selector:{text:{}}},{name:"card_width",label:"Card Width",helper:"e.g., auto, 100%, 200px (default: auto)",selector:{text:{}}}]},{name:"icon_size",label:"Icon Size",helper:"Size of the main icon",selector:{select:{options:[{value:"small",label:"Small (25px)"},{value:"default",label:"Default (35px)"},{value:"large",label:"Large (45px)"}],mode:"dropdown"}}}]},{type:"expandable",title:"Advanced",icon:"mdi:cog",schema:[{name:"grid_area",label:"Grid Area",helper:"CSS grid-area for layout positioning (e.g., 'living-room')",selector:{text:{}}}]}];let ye=class extends re{setConfig(e){this._config=e}_computeLabel(e){return e.label||e.name}_computeHelper(e){return e.helper||""}_valueChanged(e){const t=e.detail.value;me(this,"config-changed",{config:t})}render(){return this.hass&&this._config?W`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${ge}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:W``}};ye.styles=r`
    ha-form {
      display: block;
    }
  `,e([de({attribute:!1})],ye.prototype,"hass",void 0),e([pe()],ye.prototype,"_config",void 0),ye=e([ce("sensor-display-card-editor")],ye);let $e=class extends re{constructor(){super(...arguments),this._held=!1}static getConfigElement(){return document.createElement("sensor-display-card-editor")}static getStubConfig(){return{type:"custom:sensor-display-card",name:"New Sensor Card",icon:"mdi:lightbulb"}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={icon:"mdi:lightbulb",show_name:!0,show_icon:!0,show_state:!1,tap_action:{action:"toggle"},hold_action:{action:"more-info"},double_tap_action:{action:"more-info"},...e},this._config.grid_area&&(this.style.gridArea=this._config.grid_area),this._config.view_layout?.["grid-area"]&&(this.style.gridArea=this._config.view_layout["grid-area"])}getLayoutOptions(){return this._config?.grid_area?{grid_area:this._config.grid_area}:{}}_parseValue(e){if(!e||"unavailable"===e||"unknown"===e)return"--";const t=parseFloat(e);return isNaN(t)?"--":t.toFixed(0)}_isEntityActive(e){if(!e)return!1;const t=e.state,i=e.entity_id.split(".")[0];if("unavailable"===t||"unknown"===t)return!1;switch(i){case"light":case"switch":case"fan":case"input_boolean":case"automation":case"script":case"binary_sensor":default:return"on"===t;case"cover":return"open"===t||"opening"===t;case"lock":return"unlocked"===t||"unlocking"===t;case"media_player":return"playing"===t||"paused"===t||"on"===t||"idle"===t;case"climate":return"off"!==t;case"vacuum":return"cleaning"===t||"returning"===t;case"person":case"device_tracker":return"home"===t}}_isDoorOpen(e){if(!e)return!1;const t=e.state;return"on"===t||"Window/door is open"===t}_isWindowOpen(e){if(!e)return!1;const t=e.state;return"on"===t||"Window/door is open"===t}_getLockIcon(e){if(!e)return"mdi:shield-lock";switch(e.state){case"locked":case"locking":return"mdi:shield-lock";case"unlocked":case"unlocking":case"open":case"opening":return"mdi:shield-lock-open";default:return"mdi:shield-alert"}}_getLockColorVar(e){if(!e)return"var(--state-lock-locked-color, var(--primary-text-color))";switch(e.state){case"locked":return"var(--state-lock-locked-color, var(--success-color, #4caf50))";case"locking":return"var(--state-lock-locking-color, var(--info-color, #2196f3))";case"unlocked":return"var(--state-lock-unlocked-color, var(--warning-color, #ff9800))";case"unlocking":return"var(--state-lock-unlocking-color, var(--info-color, #2196f3))";case"open":return"var(--state-lock-open-color, var(--warning-color, #ff9800))";case"opening":return"var(--state-lock-opening-color, var(--info-color, #2196f3))";case"jammed":return"var(--state-lock-jammed-color, var(--error-color, #f44336))";default:return"var(--error-color, #f44336)"}}_getCardHeight(){const e=this._config?.card_height;if(!e)return"97px";if("string"==typeof e&&e.length>0){const t=parseFloat(e);return isNaN(t)||e!==String(t)?e:`${t}px`}return"97px"}_getCardWidth(){const e=this._config?.card_width;if(!e)return"auto";if("string"==typeof e&&e.length>0){const t=parseFloat(e);return isNaN(t)||e!==String(t)?e:`${t}px`}return"auto"}_getIconSizes(){const e=this._config?.icon_size;switch(e){case"small":return{iconSize:"25px",containerSize:"40px"};case"large":return{iconSize:"45px",containerSize:"60px"};default:return{iconSize:"35px",containerSize:"50px"}}}_getStateText(e){if(!e)return"";const t=e.state,i=e=>e.charAt(0).toUpperCase()+e.slice(1);switch(e.entity_id.split(".")[0]){case"cover":case"lock":case"media_player":case"climate":case"vacuum":case"person":case"device_tracker":return i(t);default:return this._isEntityActive(e)?"On":"Off"}}_handlePointerDown(){this._held=!1,fe(this._config?.hold_action)&&(this._holdTimeout=setTimeout(()=>{this._held=!0,this._executeAction("hold")},500))}_handlePointerUp(){this._holdTimeout&&(clearTimeout(this._holdTimeout),this._holdTimeout=void 0)}_handleClick(){this._held?this._held=!1:fe(this._config?.double_tap_action)?this._dblClickTimeout?(clearTimeout(this._dblClickTimeout),this._dblClickTimeout=void 0,this._executeAction("double_tap")):this._dblClickTimeout=setTimeout(()=>{this._dblClickTimeout=void 0,this._executeAction("tap")},250):this._executeAction("tap")}_executeAction(e){if(!this.hass||!this._config)return;const t=this._config[`${e}_action`];if(t&&"none"!==t.action)switch(t.action){case"toggle":this._config.entity&&this.hass.callService("homeassistant","toggle",{entity_id:this._config.entity});break;case"more-info":if(this._config.entity||t.entity){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t.entity||this._config.entity}});this.dispatchEvent(e)}break;case"navigate":if(t.navigation_path){history.pushState(null,"",t.navigation_path);const e=new Event("location-changed",{bubbles:!0,composed:!0});this.dispatchEvent(e)}break;case"url":t.url_path&&window.open(t.url_path,"_blank");break;case"call-service":if(t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{},t.target)}break;case"fire-dom-event":me(this,"ll-custom",t)}}updated(e){super.updated(e),this._config?.grid_area&&(this.style.gridArea=this._config.grid_area)}render(){if(!this._config||!this.hass)return W`<ha-card>Loading...</ha-card>`;const e=this._config.entity?this.hass.states[this._config.entity]:void 0,t=this._config.temp_sensor?this.hass.states[this._config.temp_sensor]:void 0,i=this._config.humidity_sensor?this.hass.states[this._config.humidity_sensor]:void 0,s=this._config.power_sensor?this.hass.states[this._config.power_sensor]:void 0,o=this._config.motion_sensor?this.hass.states[this._config.motion_sensor]:void 0,n=this._config.pet_sensor?this.hass.states[this._config.pet_sensor]:void 0,r=this._config.person_sensor?this.hass.states[this._config.person_sensor]:void 0,a=this._config.vehicle_sensor?this.hass.states[this._config.vehicle_sensor]:void 0,c=this._config.door_sensor?this.hass.states[this._config.door_sensor]:void 0,l=this._config.window_sensor?this.hass.states[this._config.window_sensor]:void 0,h=this._config.lock_entity?this.hass.states[this._config.lock_entity]:void 0,d=this._isEntityActive(e),p="on"===o?.state,u="on"===n?.state,_="on"===r?.state,m="on"===a?.state,f=this._isDoorOpen(c),g=this._isWindowOpen(l),y=this._getLockIcon(h),$=this._getLockColorVar(h),v=e?.attributes?.rgb_color,b=this._config.name||e?.attributes?.friendly_name||this._config.entity||"Sensor Card",w=this._config.icon||"mdi:lightbulb",A=this._getCardHeight(),S=this._getCardWidth(),{iconSize:x,containerSize:E}=this._getIconSizes(),k=v&&d?`background-color: rgba(${v[0]}, ${v[1]}, ${v[2]}, 0.2)`:"",C=v&&d?`color: rgb(${v[0]}, ${v[1]}, ${v[2]})`:"",P=`\n      --card-height: ${A};\n      --card-width: ${S};\n      --icon-size: ${x};\n      --icon-container-size: ${E};\n    `.replace(/\s+/g," ").trim(),O=!1!==this._config.show_name,T=!1!==this._config.show_icon,z=!0===this._config.show_state,U=this._getStateText(e);return W`
      <ha-card
        class="${d?"state-on":"state-off"}"
        style="${P}"
        @pointerdown=${this._handlePointerDown}
        @pointerup=${this._handlePointerUp}
        @pointercancel=${this._handlePointerUp}
        @click=${this._handleClick}
      >
        <!-- Name -->
        ${O?W`<div class="name">${b}${z&&U?W` <span class="state-text">${U}</span>`:V}</div>`:W`<div class="name"></div>`}

        <!-- Icon Container (img_cell) -->
        ${T?W`
              <div class="icon-container" style="${k}">
                <ha-icon .icon=${w} style="${C}"></ha-icon>
              </div>
            `:W`<div class="icon-container hidden"></div>`}

        <!-- Sensors (temp area) -->
        <div class="sensors">
          ${t?W`<span class="temp">${this._parseValue(t.state)}°</span>`:V}
          ${i?W`<span class="humidity">${this._parseValue(i.state)}%</span>`:V}
          ${s?W`<span class="power">${this._parseValue(s.state)}W</span>`:V}
          ${t||i||s||e?V:W`<span class="placeholder">Configure entities</span>`}
        </div>

        <!-- Binary Sensors Row -->
        <div class="binary-sensors">
          ${h?W`<ha-icon
                class="lock-icon"
                icon="${y}"
                style="color: ${$};"
              ></ha-icon>`:V}
          ${c?W`<ha-icon
                class="binary-sensor ${f?"active":"inactive"}"
                icon="${f?"mdi:door-open":"mdi:door-closed"}"
              ></ha-icon>`:V}
          ${l?W`<ha-icon
                class="binary-sensor ${g?"active":"inactive"}"
                icon="${g?"mdi:window-open":"mdi:window-closed"}"
              ></ha-icon>`:V}
          ${r?W`<ha-icon
                class="binary-sensor ${_?"active":"inactive"}"
                icon="${_?"mdi:account":"mdi:account-off"}"
              ></ha-icon>`:V}
          ${n?W`<ha-icon
                class="binary-sensor ${u?"active":"inactive"}"
                icon="${u?"mdi:paw":"mdi:paw-off"}"
              ></ha-icon>`:V}
          ${a?W`<ha-icon
                class="binary-sensor ${m?"active":"inactive"}"
                icon="${m?"mdi:car":"mdi:car-off"}"
              ></ha-icon>`:V}
          ${o?W`<ha-icon
                class="binary-sensor ${p?"active":"inactive"}"
                icon="${p?"mdi:motion-sensor":"mdi:motion-sensor-off"}"
              ></ha-icon>`:V}
        </div>
      </ha-card>
    `}getCardSize(){return 2}};$e.styles=r`
    :host {
      display: block;
    }

    /* Card - using CSS custom properties for size customization */
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
    }

    ha-card.state-on {
      background-color: var(--card-background-color);
      border: 1px solid var(--primary-text-color);
    }

    ha-card.state-off {
      background-color: color-mix(in srgb, var(--card-background-color) 50%, transparent);
      border: none;
    }

    /* Name */
    .name {
      grid-area: n;
      justify-self: start;
      align-self: start;
      text-align: left;
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
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
      background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.1));
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
      color: var(--primary-text-color);
      transition: color 0.3s ease;
    }

    /* Sensors container */
    .sensors {
      grid-area: temp;
      justify-self: start;
      display: flex;
      align-items: baseline;
      gap: 8px;
      padding: 0 0 1px 14px;
    }

    /* Temperature */
    .temp {
      font-size: 16px;
      line-height: 16px;
      font-weight: 300;
      color: var(--primary-text-color);
    }

    /* Humidity and Power */
    .humidity,
    .power {
      font-size: 12px;
      font-weight: 400;
      opacity: 0.7;
      color: var(--primary-text-color);
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
      color: var(--state-binary_sensor-active-color, var(--state-active-color, #ffc107));
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
  `,e([de({attribute:!1})],$e.prototype,"hass",void 0),e([pe()],$e.prototype,"_config",void 0),$e=e([ce("sensor-display-card")],$e),window.customCards=window.customCards||[],window.customCards.push({type:"sensor-display-card",name:"Sensor Display Card",description:"A card displaying RGB lights with temperature, humidity, power, and motion sensors",preview:!0,documentationURL:"https://github.com/hunt41lb/sensor-display-card"});export{$e as SensorDisplayCard,ye as SensorDisplayCardEditor};
