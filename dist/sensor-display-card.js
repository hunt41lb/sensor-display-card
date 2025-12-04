// @/dist/sensor-display-card.js

const e="sensor-display-card",t="sensor-display-card-editor",i="Sensor Display Card",s={icon:"mdi:lightbulb",show_name:!0,show_icon:!0,show_state:!1,tap_action:{action:"toggle"},hold_action:{action:"more-info"},double_tap_action:{action:"more-info"}},o={small:{iconSize:"25px",containerSize:"40px"},default:{iconSize:"35px",containerSize:"50px"},large:{iconSize:"45px",containerSize:"60px"}},n={locked:"mdi:shield-lock",locking:"mdi:shield-lock",unlocked:"mdi:shield-lock-open",unlocking:"mdi:shield-lock-open",open:"mdi:shield-lock-open",opening:"mdi:shield-lock-open",jammed:"mdi:shield-alert",unavailable:"mdi:shield-alert",unknown:"mdi:shield-alert"},r={locked:"var(--state-lock-locked-color, var(--success-color, #4caf50))",locking:"var(--state-lock-locking-color, var(--info-color, #2196f3))",unlocked:"var(--state-lock-unlocked-color, var(--warning-color, #ff9800))",unlocking:"var(--state-lock-unlocking-color, var(--info-color, #2196f3))",open:"var(--state-lock-open-color, var(--warning-color, #ff9800))",opening:"var(--state-lock-opening-color, var(--info-color, #2196f3))",jammed:"var(--state-lock-jammed-color, var(--error-color, #f44336))",unavailable:"var(--error-color, #f44336)",unknown:"var(--error-color, #f44336)"};function a(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const c=globalThis,l=c.ShadowRoot&&(void 0===c.ShadyCSS||c.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,h=Symbol(),d=new WeakMap;let p=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==h)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(l&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=d.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&d.set(t,e))}return e}toString(){return this.cssText}};const u=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new p(i,e,h)},m=l?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new p("string"==typeof e?e:e+"",void 0,h))(t)})(e):e,{is:f,defineProperty:_,getOwnPropertyDescriptor:g,getOwnPropertyNames:y,getOwnPropertySymbols:v,getPrototypeOf:$}=Object,b=globalThis,w=b.trustedTypes,A=w?w.emptyScript:"",x=b.reactiveElementPolyfillSupport,S=(e,t)=>e,E={toAttribute(e,t){switch(t){case Boolean:e=e?A:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},k=(e,t)=>!f(e,t),C={attribute:!0,type:String,converter:E,reflect:!1,useDefault:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;let P=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=C){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&_(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=g(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const n=s?.call(this);o?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??C}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const e=$(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,t=[...y(e),...v(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(m(e))}else void 0!==e&&t.push(m(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(l)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),s=c.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:E).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:E;this._$Em=s;const n=o.fromAttribute(t,e.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const s=this.constructor,o=this[e];if(i??=s.getPropertyOptions(e),!((i.hasChanged??k)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==o||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[S("elementProperties")]=new Map,P[S("finalized")]=new Map,x?.({ReactiveElement:P}),(b.reactiveElementVersions??=[]).push("2.1.1");const T=globalThis,z=T.trustedTypes,U=z?z.createPolicy("lit-html",{createHTML:e=>e}):void 0,O="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+H,N=`<${M}>`,R=document,j=()=>R.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,B="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W=/-->/g,G=/>/g,J=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,q=/"/g,F=/^(?:script|style|textarea|title)$/i,K=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),Z=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),X=new WeakMap,Y=R.createTreeWalker(R,129);function ee(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==U?U.createHTML(t):t}const te=(e,t)=>{const i=e.length-1,s=[];let o,n=2===t?"<svg>":3===t?"<math>":"",r=I;for(let t=0;t<i;t++){const i=e[t];let a,c,l=-1,h=0;for(;h<i.length&&(r.lastIndex=h,c=r.exec(i),null!==c);)h=r.lastIndex,r===I?"!--"===c[1]?r=W:void 0!==c[1]?r=G:void 0!==c[2]?(F.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=J):void 0!==c[3]&&(r=J):r===J?">"===c[0]?(r=o??I,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?J:'"'===c[3]?q:V):r===q||r===V?r=J:r===W||r===G?r=I:(r=J,o=void 0);const d=r===J&&e[t+1].startsWith("/>")?" ":"";n+=r===I?i+N:l>=0?(s.push(a),i.slice(0,l)+O+i.slice(l)+H+d):i+H+(-2===l?t:d)}return[ee(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class ie{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0;const r=e.length-1,a=this.parts,[c,l]=te(e,t);if(this.el=ie.createElement(c,i),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=Y.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(O)){const t=l[n++],i=s.getAttribute(e).split(H),r=/([.?@])?(.*)/.exec(t);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?ae:"?"===r[1]?ce:"@"===r[1]?le:re}),s.removeAttribute(e)}else e.startsWith(H)&&(a.push({type:6,index:o}),s.removeAttribute(e));if(F.test(s.tagName)){const e=s.textContent.split(H),t=e.length-1;if(t>0){s.textContent=z?z.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],j()),Y.nextNode(),a.push({type:2,index:++o});s.append(e[t],j())}}}else if(8===s.nodeType)if(s.data===M)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(H,e+1));)a.push({type:7,index:o}),e+=H.length-1}o++}}static createElement(e,t){const i=R.createElement("template");return i.innerHTML=e,i}}function se(e,t,i=e,s){if(t===Z)return t;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=D(t)?void 0:t._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(e),o._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(t=se(e,o._$AS(e,t.values),o,s)),t}class oe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??R).importNode(t,!0);Y.currentNode=s;let o=Y.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new ne(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new he(o,this,e)),this._$AV.push(t),a=i[++r]}n!==a?.index&&(o=Y.nextNode(),n++)}return Y.currentNode=R,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ne{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=se(this,e,t),D(e)?e===Q||null==e||""===e?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==Z&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Q&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(R.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=ie.createElement(ee(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new oe(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=X.get(e.strings);return void 0===t&&X.set(e.strings,t=new ie(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new ne(this.O(j()),this.O(j()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class re{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(e,t=this,i,s){const o=this.strings;let n=!1;if(void 0===o)e=se(this,e,t,0),n=!D(e)||e!==this._$AH&&e!==Z,n&&(this._$AH=e);else{const s=e;let r,a;for(e=o[0],r=0;r<o.length-1;r++)a=se(this,s[i+r],t,r),a===Z&&(a=this._$AH[r]),n||=!D(a)||a!==this._$AH[r],a===Q?e=Q:e!==Q&&(e+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ae extends re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}class ce extends re{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}}class le extends re{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=se(this,e,t,0)??Q)===Z)return;const i=this._$AH,s=e===Q&&i!==Q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Q&&(i===Q||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class he{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){se(this,e)}}const de=T.litHtmlPolyfillSupport;de?.(ie,ne),(T.litHtmlVersions??=[]).push("3.3.1");const pe=globalThis;class ue extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let o=s._$litPart$;if(void 0===o){const e=i?.renderBefore??null;s._$litPart$=o=new ne(t.insertBefore(j(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}}ue._$litElement$=!0,ue.finalized=!0,pe.litElementHydrateSupport?.({LitElement:ue});const me=pe.litElementPolyfillSupport;me?.({LitElement:ue}),(pe.litElementVersions??=[]).push("4.2.1");const fe=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},_e={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:k},ge=(e=_e,t,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,o,e)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];t.call(this,i),this.requestUpdate(s,o,e)}}throw Error("Unsupported decorator location: "+s)};function ye(e){return(t,i)=>"object"==typeof i?ge(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function ve(e){return ye({...e,state:!0,attribute:!1})}var $e,be;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}($e||($e={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(be||(be={}));var we=function(e,t,i,s){s=s||{},i=null==i?{}:i;var o=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,e.dispatchEvent(o),o};const Ae=[{type:"expandable",title:"Basic Settings",icon:"mdi:cog",schema:[{name:"entity",label:"Primary Entity",helper:"Main entity for the card (controls on/off state and icon color)",selector:{entity:{}}},{type:"grid",name:"",schema:[{name:"name",label:"Name",helper:"Override the entity's friendly name",selector:{text:{}}},{name:"icon",label:"Icon",helper:"Override the default icon (e.g., mdi:lightbulb)",selector:{icon:{}}}]}]},{type:"expandable",title:"Value Sensors",icon:"mdi:thermometer",schema:[{name:"temp_sensor",label:"Temperature Sensor",helper:"Displays temperature with ° symbol",selector:{entity:{filter:{domain:"sensor",device_class:"temperature"}}}},{name:"humidity_sensor",label:"Humidity Sensor",helper:"Displays humidity with % symbol",selector:{entity:{filter:{domain:"sensor",device_class:"humidity"}}}},{name:"power_sensor",label:"Power Sensor",helper:"Displays power with W symbol",selector:{entity:{filter:{domain:"sensor",device_class:"power"}}}}]},{type:"expandable",title:"Binary Sensors",icon:"mdi:motion-sensor",schema:[{name:"motion_sensor",label:"Motion Sensor",helper:"Shows motion icon when active (hidden when inactive)",selector:{entity:{filter:{domain:"binary_sensor",device_class:"motion"}}}},{name:"person_sensor",label:"Person Sensor",helper:"Shows person/occupancy icon when detected",selector:{entity:{filter:{domain:"binary_sensor",device_class:"occupancy"}}}},{name:"pet_sensor",label:"Pet Sensor",helper:"Shows pet icon when detected",selector:{entity:{filter:{domain:"binary_sensor"}}}},{name:"vehicle_sensor",label:"Vehicle Sensor",helper:"Shows vehicle icon when detected",selector:{entity:{filter:{domain:"binary_sensor"}}}},{name:"door_sensor",label:"Door Sensor",helper:"Shows door open/closed icon when open",selector:{entity:{filter:{domain:"binary_sensor",device_class:"door"}}}},{name:"window_sensor",label:"Window Sensor",helper:"Shows window open/closed icon when open",selector:{entity:{filter:{domain:"binary_sensor",device_class:"window"}}}}]},{type:"expandable",title:"Lock",icon:"mdi:lock",schema:[{name:"lock_entity",label:"Lock Entity",helper:"Always visible with state-aware icons and colors",selector:{entity:{filter:{domain:"lock"}}}}]},{type:"expandable",title:"Display Options",icon:"mdi:eye",schema:[{type:"grid",name:"",schema:[{name:"show_name",label:"Show Name",helper:"Display the entity name",selector:{boolean:{}}},{name:"show_icon",label:"Show Icon",helper:"Display the entity icon",selector:{boolean:{}}},{name:"show_state",label:"Show State",helper:"Display state text next to name",selector:{boolean:{}}}]}]},{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",schema:[{name:"tap_action",label:"Tap Action",helper:"Action when card is tapped",selector:{"ui-action":{}}},{name:"hold_action",label:"Hold Action",helper:"Action when card is held",selector:{"ui-action":{}}},{name:"double_tap_action",label:"Double Tap Action",helper:"Action when card is double-tapped",selector:{"ui-action":{}}}]},{type:"expandable",title:"Appearance",icon:"mdi:palette",schema:[{type:"grid",name:"",schema:[{name:"icon_position",label:"Icon Position",helper:"Horizontal position of the icon",selector:{select:{options:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],mode:"dropdown"}}},{name:"name_position",label:"Name Position",helper:"Horizontal position of the name",selector:{select:{options:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],mode:"dropdown"}}}]},{type:"grid",name:"",schema:[{name:"card_height",label:"Card Height",helper:"e.g., 97px, 120px, 75px (default: 97px)",selector:{text:{}}},{name:"card_width",label:"Card Width",helper:"e.g., auto, 100%, 200px (default: auto)",selector:{text:{}}}]},{name:"icon_size",label:"Icon Size",helper:"Size of the main icon",selector:{select:{options:[{value:"small",label:"Small (25px)"},{value:"default",label:"Default (35px)"},{value:"large",label:"Large (45px)"}],mode:"dropdown"}}}]},{type:"expandable",title:"Advanced",icon:"mdi:code-braces",schema:[{name:"grid_area",label:"Grid Area",helper:"For use with layout-card (e.g., 'a' or '1 / 1 / 2 / 3')",selector:{text:{}}}]}],xe=u`
  :host {
    display: block;
  }

  /* Card - using CSS custom properties for size and position customization */
  ha-card {
    display: grid;
    grid-template-areas:
      "left center right"
      "bottom-left bottom-center bottom-right";
    grid-template-rows: 1fr min-content;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 6px;
    height: var(--card-height, 97px);
    width: var(--card-width, auto);
    border-radius: var(--ha-card-border-radius, 12px);
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.3s ease, border 0.3s ease;
  }

  ha-card.state-on {
    background-color: var(--card-background-color);
    border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--divider-color));
  }

  ha-card.state-off {
    background-color: color-mix(in srgb, var(--card-background-color) 50%, transparent);
    border: var(--ha-card-border-width, 1px) solid color-mix(in srgb, var(--ha-card-border-color, var(--divider-color)) 50%, transparent);
  }

  /* Name - using custom properties for position */
  .name {
    grid-area: var(--name-grid-area, left);
    justify-self: var(--name-justify, start);
    align-self: start;
    text-align: var(--name-text-align, left);
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

  /* Icon container - using custom properties for size and position */
  .icon-container {
    grid-area: var(--icon-grid-area, right);
    justify-self: var(--icon-justify, end);
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

  /* Sensors container - using custom properties for position */
  .sensors {
    grid-area: var(--sensors-grid-area, bottom-left);
    justify-self: var(--sensors-justify, start);
    display: flex;
    align-items: baseline;
    gap: 8px;
    padding: var(--sensors-padding, 0 0 1px 14px);
  }

  .sensor {
    font-size: 13px;
    color: var(--secondary-text-color);
    display: flex;
    align-items: baseline;
    gap: 2px;
  }

  .sensor ha-icon {
    width: 14px;
    height: 14px;
    --mdc-icon-size: 14px;
    color: var(--secondary-text-color);
  }

  .sensor .value {
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .sensor .unit {
    font-size: 10px;
    opacity: 0.7;
    color: var(--primary-text-color);
  }

  .placeholder {
    font-size: 12px;
    font-style: italic;
    color: var(--secondary-text-color);
  }

  /* Binary sensors row - using custom properties for position */
  .binary-sensors {
    grid-area: var(--binary-sensors-grid-area, bottom-right);
    justify-self: var(--binary-sensors-justify, end);
    align-self: end;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0 0 1px 2px;
    margin: var(--binary-sensors-margin, 0 3px 0 0);
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
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`,Se=u`
  .card-config {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  ha-form {
    display: block;
  }

  /* Fix expandable section styling */
  ha-expansion-panel {
    display: block;
    --expansion-panel-content-padding: 0 16px 16px;
  }
`;let Ee=class extends ue{setConfig(e){this._config=e}_computeLabel(e){return e.label||e.name||""}_computeHelper(e){return e.helper||""}_valueChanged(e){const t=e.detail.value;we(this,"config-changed",{config:t})}render(){return this.hass&&this._config?K`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Ae}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:K``}};Ee.styles=Se,a([ye({attribute:!1})],Ee.prototype,"hass",void 0),a([ve()],Ee.prototype,"_config",void 0),Ee=a([fe(t)],Ee);let ke=class extends ue{constructor(){super(...arguments),this._isHolding=!1,this._lastTap=0}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...s,...e}}getCardSize(){return 2}static getConfigElement(){return document.createElement(t)}static getStubConfig(e){const t=Object.keys(e.states),i=t.find(e=>e.startsWith("light.")),s=t.find(t=>t.startsWith("sensor.")&&"temperature"===e.states[t].attributes.device_class),o=t.find(t=>t.startsWith("sensor.")&&"humidity"===e.states[t].attributes.device_class);return{entity:i||"",name:"My Room",temp_sensor:s||"",humidity_sensor:o||""}}getLayoutOptions(){const e=this._config?.grid_area||this._config?.view_layout?.["grid-area"];return e?{grid_area:e}:{}}_handleClick(e){if(e.stopPropagation(),this._isHolding)return void(this._isHolding=!1);const t=Date.now();if(t-this._lastTap<300)return this._handleAction("double_tap"),void(this._lastTap=0);this._lastTap=t,setTimeout(()=>{0!==this._lastTap&&Date.now()-this._lastTap>=300&&(this._handleAction("tap"),this._lastTap=0)},300)}_handlePointerDown(e){e.stopPropagation(),this._holdTimer=window.setTimeout(()=>{this._isHolding=!0,this._handleAction("hold")},500)}_handlePointerUp(e){e.stopPropagation(),this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_handleAction(e){if(!this.hass||!this._config)return;const t=this._config[`${e}_action`];if(!t||"none"===t.action)return;const i=this._config.entity;if("toggle"===t.action&&i)this.hass.callService("homeassistant","toggle",{entity_id:i});else if("more-info"===t.action&&i)we(this,"hass-more-info",{entityId:i});else if("navigate"===t.action&&t.navigation_path)window.history.pushState(null,"",t.navigation_path),we(window,"location-changed",{replace:!1});else if("url"===t.action&&t.url_path)window.open(t.url_path);else if("call-service"===t.action&&t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{})}}render(){if(!this.hass||!this._config)return K`<ha-card>Loading...</ha-card>`;const e=this._config.entity?this.hass.states[this._config.entity]:void 0,t=this._config.temp_sensor?this.hass.states[this._config.temp_sensor]:void 0,i=this._config.humidity_sensor?this.hass.states[this._config.humidity_sensor]:void 0,s=this._config.power_sensor?this.hass.states[this._config.power_sensor]:void 0,a=this._config.motion_sensor?this.hass.states[this._config.motion_sensor]:void 0,c=this._config.pet_sensor?this.hass.states[this._config.pet_sensor]:void 0,l=this._config.person_sensor?this.hass.states[this._config.person_sensor]:void 0,h=this._config.vehicle_sensor?this.hass.states[this._config.vehicle_sensor]:void 0,d=this._config.door_sensor?this.hass.states[this._config.door_sensor]:void 0,p=this._config.window_sensor?this.hass.states[this._config.window_sensor]:void 0,u=this._config.lock_entity?this.hass.states[this._config.lock_entity]:void 0,m=function(e){if(!e)return!1;const t=e.state.toLowerCase();switch(e.entity_id.split(".")[0]){case"light":case"switch":case"input_boolean":case"fan":case"climate":case"humidifier":case"binary_sensor":return"on"===t;case"lock":return"locked"===t;case"cover":return"closed"!==t;case"media_player":return"playing"===t||"on"===t;case"vacuum":return"cleaning"===t;case"alarm_control_panel":return"disarmed"!==t;default:if("on"===t)return!0;const e=parseFloat(t);return isNaN(e)?"off"!==t&&"unavailable"!==t&&"unknown"!==t:e>0}}(e),f="on"===a?.state,_="on"===c?.state,g="on"===l?.state,y="on"===h?.state,v=!!($=d)&&"on"===$.state;var $;const b=function(e){return!!e&&"on"===e.state}(p),w=function(e){if(!e)return n.unknown;const t=e.state.toLowerCase();return n[t]||n.unknown}(u),A=function(e){if(!e)return r.unknown;const t=e.state.toLowerCase();return r[t]||r.unknown}(u),x=e?.attributes?.rgb_color,S=this._config.name||e?.attributes?.friendly_name||this._config.entity||"Sensor Card",E=this._config.icon||"mdi:lightbulb",k=(C=this._config.card_height)?/^\d+$/.test(C)?`${C}px`:C:"97px";var C;const P=function(e){return e?/^\d+$/.test(e)?`${e}px`:e:"auto"}(this._config.card_width),{iconSize:T,containerSize:z}=(U=this._config.icon_size,o[U||"default"]||o.default);var U;const O=function(e="right",t="left"){const i=e=>{switch(e){case"left":default:return"start";case"center":return"center";case"right":return"end"}},s=`bottom-${t}`,o=`bottom-${e}`;return{nameGridArea:t,nameJustify:i(t),nameTextAlign:(e=>{switch(e){case"left":default:return"left";case"center":return"center";case"right":return"right"}})(t),iconGridArea:e,iconJustify:i(e),sensorsGridArea:s,sensorsJustify:i(t),sensorsPadding:"right"===t?"0 14px 1px 0":"center"===t?"0 0 1px 0":"0 0 1px 14px",binarySensorsGridArea:o,binarySensorsJustify:i(e),binarySensorsMargin:"left"===e?"0 0 0 3px":"center"===e?"0":"0 3px 0 0"}}(this._config.icon_position||"right",this._config.name_position||"left"),H=x&&m?`background-color: rgba(${x[0]}, ${x[1]}, ${x[2]}, 0.2)`:"",M=x&&m?`color: rgb(${x[0]}, ${x[1]}, ${x[2]})`:"",N=`\n      --card-height: ${k};\n      --card-width: ${P};\n      --icon-size: ${T};\n      --icon-container-size: ${z};\n      --name-grid-area: ${O.nameGridArea};\n      --name-justify: ${O.nameJustify};\n      --name-text-align: ${O.nameTextAlign};\n      --icon-grid-area: ${O.iconGridArea};\n      --icon-justify: ${O.iconJustify};\n      --sensors-grid-area: ${O.sensorsGridArea};\n      --sensors-justify: ${O.sensorsJustify};\n      --sensors-padding: ${O.sensorsPadding};\n      --binary-sensors-grid-area: ${O.binarySensorsGridArea};\n      --binary-sensors-justify: ${O.binarySensorsJustify};\n      --binary-sensors-margin: ${O.binarySensorsMargin};\n    `.replace(/\s+/g," ").trim(),R=!1!==this._config.show_name,j=!1!==this._config.show_icon,D=!0===this._config.show_state,L=function(e){if(!e)return"";const t=e.entity_id.split(".")[0],i=e.state;if("light"===t&&void 0!==e.attributes.brightness)return`${Math.round(e.attributes.brightness/255*100)}%`;return i.charAt(0).toUpperCase()+i.slice(1)}(e);return K`
      <ha-card
        class="${m?"state-on":"state-off"}"
        style="${N}"
        @pointerdown=${this._handlePointerDown}
        @pointerup=${this._handlePointerUp}
        @pointercancel=${this._handlePointerUp}
        @click=${this._handleClick}
      >
        <!-- Name -->
        ${R?K`<div class="name">
              ${S}${D&&L?K` <span class="state-text">${L}</span>`:Q}
            </div>`:K`<div class="name"></div>`}

        <!-- Icon Container -->
        ${j?K`
              <div class="icon-container" style="${H}">
                <ha-icon .icon=${E} style="${M}"></ha-icon>
              </div>
            `:K`<div class="icon-container hidden"></div>`}

        <!-- Sensors (Temperature, Humidity, Power) -->
        <div class="sensors">
          ${this._renderSensor(t,"°","mdi:thermometer")}
          ${this._renderSensor(i,"%","mdi:water-percent")}
          ${this._renderSensor(s,"W","mdi:flash")}
          ${t||i||s?Q:K`<span class="placeholder"></span>`}
        </div>

        <!-- Binary Sensors & Lock -->
        <div class="binary-sensors">
          ${this._renderBinarySensor(f,a,"motion")}
          ${this._renderBinarySensor(_,c,"pet")}
          ${this._renderBinarySensor(g,l,"person")}
          ${this._renderBinarySensor(y,h,"vehicle")}
          ${this._renderBinarySensor(v,d,"door")}
          ${this._renderBinarySensor(b,p,"window")}
          ${u?K`
                <ha-icon
                  class="lock-icon"
                  .icon=${w}
                  style="color: ${A}"
                ></ha-icon>
              `:Q}
        </div>
      </ha-card>
    `}_renderSensor(e,t,i){const s=function(e){if(!e)return;const t=parseFloat(e.state);return isNaN(t)?void 0:t}(e);return void 0===s?Q:K`
      <span class="sensor">
        <ha-icon .icon=${i}></ha-icon>
        <span class="value">${Math.round(s)}</span>
        <span class="unit">${t}</span>
      </span>
    `}_renderBinarySensor(e,t,i){if(!t)return Q;const s={motion:{active:"mdi:motion-sensor",inactive:"mdi:motion-sensor-off"},person:{active:"mdi:account",inactive:"mdi:account-off"},pet:{active:"mdi:paw",inactive:"mdi:paw-off"},vehicle:{active:"mdi:car",inactive:"mdi:car-off"},door:{active:"mdi:door-open",inactive:"mdi:door-closed"},window:{active:"mdi:window-open",inactive:"mdi:window-closed"}}[i],o=e?s.active:s.inactive;return K`
      <ha-icon
        class="binary-sensor ${e?"active":"inactive"}"
        .icon=${o}
      ></ha-icon>
    `}};ke.styles=xe,a([ye({attribute:!1})],ke.prototype,"hass",void 0),a([ve()],ke.prototype,"_config",void 0),ke=a([fe(e)],ke),console.info(`%c ${i.toUpperCase()} %c v2.5.0 `,"color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:e,name:i,description:"A card displaying RGB lights with temperature, humidity, power, and binary sensors",preview:!0,documentationURL:"https://github.com/hunt41lb/sensor-display-card"});
