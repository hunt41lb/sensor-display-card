const e="sensor-display-card",t="sensor-display-card-editor",i="Sensor Display Card",o={icon:"mdi:lightbulb",layout:"full",show_name:!0,show_icon:!0,show_state:!1,show_icon_background:!0,icon_activity_animation:!0,icon_color_source:"default",tap_action:{action:"toggle"},hold_action:{action:"more-info"},double_tap_action:{action:"more-info"}},n="auto",s={full:"97px","icon-only":"85px",compact:"80px"},r={small:{iconSize:"25px",containerSize:"40px"},default:{iconSize:"35px",containerSize:"50px"},large:{iconSize:"45px",containerSize:"60px"}},a={small:{iconSize:"35px",containerSize:"50px"},default:{iconSize:"50px",containerSize:"65px"},large:{iconSize:"60px",containerSize:"75px"}},c={locked:"mdi:shield-lock",locking:"mdi:shield-lock",unlocked:"mdi:shield-lock-open",unlocking:"mdi:shield-lock-open",open:"mdi:shield-lock-open",opening:"mdi:shield-lock-open",jammed:"mdi:shield-alert",unavailable:"mdi:shield-alert",unknown:"mdi:shield-alert"},l={locked:"var(--state-lock-locked-color, var(--success-color, #4caf50))",locking:"var(--state-lock-locking-color, var(--info-color, #2196f3))",unlocked:"var(--state-lock-unlocked-color, var(--warning-color, #ff9800))",unlocking:"var(--state-lock-unlocking-color, var(--info-color, #2196f3))",open:"var(--state-lock-open-color, var(--warning-color, #ff9800))",opening:"var(--state-lock-opening-color, var(--info-color, #2196f3))",jammed:"var(--state-lock-jammed-color, var(--error-color, #f44336))",unavailable:"var(--error-color, #f44336)",unknown:"var(--error-color, #f44336)"},h="var(--state-binary_sensor-active-color, var(--state-active-color, #ffc107))",d="var(--primary-text-color)",p="var(--primary-text-color)";function u(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const m=globalThis,f=m.ShadowRoot&&(void 0===m.ShadyCSS||m.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_=Symbol(),g=new WeakMap;let y=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(f&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=g.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&g.set(t,e))}return e}toString(){return this.cssText}};const v=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new y(i,e,_)},b=f?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new y("string"==typeof e?e:e+"",void 0,_))(t)})(e):e,{is:$,defineProperty:w,getOwnPropertyDescriptor:A,getOwnPropertyNames:S,getOwnPropertySymbols:x,getPrototypeOf:k}=Object,E=globalThis,C=E.trustedTypes,P=C?C.emptyScript:"",T=E.reactiveElementPolyfillSupport,O=(e,t)=>e,N={toAttribute(e,t){switch(t){case Boolean:e=e?P:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},z=(e,t)=>!$(e,t),U={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:z};Symbol.metadata??=Symbol("metadata"),E.litPropertyMetadata??=new WeakMap;let M=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=U){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&w(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:n}=A(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const s=o?.call(this);n?.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??U}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=k(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const e=this.properties,t=[...S(e),...x(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(b(e))}else void 0!==e&&t.push(b(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(f)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),o=m.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:N).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:N;this._$Em=o;const s=n.fromAttribute(t,e.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const o=this.constructor,n=this[e];if(i??=o.getPropertyOptions(e),!((i.hasChanged??z)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:n},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==n||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[O("elementProperties")]=new Map,M[O("finalized")]=new Map,T?.({ReactiveElement:M}),(E.reactiveElementVersions??=[]).push("2.1.1");const R=globalThis,H=R.trustedTypes,D=H?H.createPolicy("lit-html",{createHTML:e=>e}):void 0,I="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+L,B=`<${j}>`,W=document,V=()=>W.createComment(""),q=e=>null===e||"object"!=typeof e&&"function"!=typeof e,F=Array.isArray,Y="[ \t\n\f\r]",G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,K=/>/g,Z=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,X=/"/g,ee=/^(?:script|style|textarea|title)$/i,te=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),ie=Symbol.for("lit-noChange"),oe=Symbol.for("lit-nothing"),ne=new WeakMap,se=W.createTreeWalker(W,129);function re(e,t){if(!F(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==D?D.createHTML(t):t}const ae=(e,t)=>{const i=e.length-1,o=[];let n,s=2===t?"<svg>":3===t?"<math>":"",r=G;for(let t=0;t<i;t++){const i=e[t];let a,c,l=-1,h=0;for(;h<i.length&&(r.lastIndex=h,c=r.exec(i),null!==c);)h=r.lastIndex,r===G?"!--"===c[1]?r=J:void 0!==c[1]?r=K:void 0!==c[2]?(ee.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=Z):void 0!==c[3]&&(r=Z):r===Z?">"===c[0]?(r=n??G,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?Z:'"'===c[3]?X:Q):r===X||r===Q?r=Z:r===J||r===K?r=G:(r=Z,n=void 0);const d=r===Z&&e[t+1].startsWith("/>")?" ":"";s+=r===G?i+B:l>=0?(o.push(a),i.slice(0,l)+I+i.slice(l)+L+d):i+L+(-2===l?t:d)}return[re(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class ce{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,s=0;const r=e.length-1,a=this.parts,[c,l]=ae(e,t);if(this.el=ce.createElement(c,i),se.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=se.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(I)){const t=l[s++],i=o.getAttribute(e).split(L),r=/([.?@])?(.*)/.exec(t);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?ue:"?"===r[1]?me:"@"===r[1]?fe:pe}),o.removeAttribute(e)}else e.startsWith(L)&&(a.push({type:6,index:n}),o.removeAttribute(e));if(ee.test(o.tagName)){const e=o.textContent.split(L),t=e.length-1;if(t>0){o.textContent=H?H.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],V()),se.nextNode(),a.push({type:2,index:++n});o.append(e[t],V())}}}else if(8===o.nodeType)if(o.data===j)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(L,e+1));)a.push({type:7,index:n}),e+=L.length-1}n++}}static createElement(e,t){const i=W.createElement("template");return i.innerHTML=e,i}}function le(e,t,i=e,o){if(t===ie)return t;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const s=q(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(e),n._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(t=le(e,n._$AS(e,t.values),n,o)),t}class he{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??W).importNode(t,!0);se.currentNode=o;let n=se.nextNode(),s=0,r=0,a=i[0];for(;void 0!==a;){if(s===a.index){let t;2===a.type?t=new de(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new _e(n,this,e)),this._$AV.push(t),a=i[++r]}s!==a?.index&&(n=se.nextNode(),s++)}return se.currentNode=W,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class de{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=oe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=le(this,e,t),q(e)?e===oe||null==e||""===e?(this._$AH!==oe&&this._$AR(),this._$AH=oe):e!==this._$AH&&e!==ie&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>F(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==oe&&q(this._$AH)?this._$AA.nextSibling.data=e:this.T(W.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=ce.createElement(re(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new he(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=ne.get(e.strings);return void 0===t&&ne.set(e.strings,t=new ce(e)),t}k(e){F(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new de(this.O(V()),this.O(V()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class pe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,n){this.type=1,this._$AH=oe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=oe}_$AI(e,t=this,i,o){const n=this.strings;let s=!1;if(void 0===n)e=le(this,e,t,0),s=!q(e)||e!==this._$AH&&e!==ie,s&&(this._$AH=e);else{const o=e;let r,a;for(e=n[0],r=0;r<n.length-1;r++)a=le(this,o[i+r],t,r),a===ie&&(a=this._$AH[r]),s||=!q(a)||a!==this._$AH[r],a===oe?e=oe:e!==oe&&(e+=(a??"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.j(e)}j(e){e===oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ue extends pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===oe?void 0:e}}class me extends pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==oe)}}class fe extends pe{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){if((e=le(this,e,t,0)??oe)===ie)return;const i=this._$AH,o=e===oe&&i!==oe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==oe&&(i===oe||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class _e{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){le(this,e)}}const ge=R.litHtmlPolyfillSupport;ge?.(ce,de),(R.litHtmlVersions??=[]).push("3.3.1");const ye=globalThis;class ve extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let n=o._$litPart$;if(void 0===n){const e=i?.renderBefore??null;o._$litPart$=n=new de(t.insertBefore(V(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ie}}ve._$litElement$=!0,ve.finalized=!0,ye.litElementHydrateSupport?.({LitElement:ve});const be=ye.litElementPolyfillSupport;be?.({LitElement:ve}),(ye.litElementVersions??=[]).push("4.2.1");const $e=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},we={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:z},Ae=(e=we,t,i)=>{const{kind:o,metadata:n}=i;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,n,e)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];t.call(this,i),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+o)};function Se(e){return(t,i)=>"object"==typeof i?Ae(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function xe(e){return Se({...e,state:!0,attribute:!1})}var ke,Ee;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ke||(ke={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Ee||(Ee={}));var Ce=function(e,t,i,o){o=o||{},i=null==i?{}:i;var n=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return n.detail=i,e.dispatchEvent(n),n};function Pe(e){return void 0!==e&&"none"!==e.action}const Te=[{name:"name",label:"Card Name",helper:"Display name shown on the card (optional - uses entity name if blank)",selector:{text:{}}},{name:"icon",label:"Icon",helper:"Main icon displayed in the card",selector:{icon:{}}},{name:"entity",label:"Primary Entity",helper:"Main entity for card state (light, switch, etc.)",selector:{entity:{}}},{name:"layout",label:"Layout Mode",helper:"Card layout style",selector:{select:{options:[{value:"full",label:"Full (Name + Icon + Sensors)"},{value:"icon-only",label:"Icon Only (Centered icon, no text)"},{value:"compact",label:"Compact (Name + Centered Icon)"}],mode:"dropdown"}}},{type:"expandable",title:"Value Sensors",icon:"mdi:thermometer",schema:[{name:"temp_sensor",label:"Temperature",helper:"Displays temperature value with ° symbol",selector:{entity:{domain:"sensor",device_class:"temperature"}}},{name:"humidity_sensor",label:"Humidity",helper:"Displays humidity value with % symbol",selector:{entity:{domain:"sensor",device_class:"humidity"}}},{name:"power_sensor",label:"Power",helper:"Displays power consumption with W symbol",selector:{entity:{domain:"sensor",device_class:"power"}}}]},{type:"expandable",title:"Binary Sensors",icon:"mdi:motion-sensor",schema:[{name:"motion_sensor",label:"Motion Sensor",helper:"Shows motion-sensor icon when motion detected (also used for icon color)",selector:{entity:{domain:"binary_sensor",device_class:"motion"}}},{name:"person_sensor",label:"Person Sensor",helper:"Shows person icon when person detected",selector:{entity:{domain:"binary_sensor",device_class:"occupancy"}}},{name:"pet_sensor",label:"Pet Sensor",helper:"Shows paw icon when pet detected",selector:{entity:{domain:"binary_sensor"}}},{name:"vehicle_sensor",label:"Vehicle Sensor",helper:"Shows car icon when vehicle detected",selector:{entity:{domain:"binary_sensor"}}},{name:"door_sensor",label:"Door Sensor",helper:"Shows door-open icon when door is open",selector:{entity:{domain:"binary_sensor",device_class:"door"}}},{name:"window_sensor",label:"Window Sensor",helper:"Shows window-open icon when window is open",selector:{entity:{domain:"binary_sensor",device_class:"window"}}}]},{type:"expandable",title:"Lock",icon:"mdi:shield-lock",schema:[{name:"lock_entity",label:"Lock / Deadbolt",helper:"Shows lock status with shield icon (always visible when configured)",selector:{entity:{domain:"lock"}}}]},{type:"expandable",title:"Display Options",icon:"mdi:eye-settings",schema:[{name:"show_name",label:"Show Name",helper:"Display card name (not applicable in icon-only layout)",selector:{boolean:{}},default:!0},{name:"show_icon",label:"Show Icon",helper:"Display main icon",selector:{boolean:{}},default:!0},{name:"show_state",label:"Show State Text",helper:"Display On/Off state next to name",selector:{boolean:{}},default:!1},{name:"show_icon_background",label:"Show Icon Background",helper:"Display circular background behind the icon",selector:{boolean:{}},default:!0},{name:"icon_activity_animation",label:"Animate Icon on Activity",helper:"Pulse icon when motion, person, pet, or vehicle is detected",selector:{boolean:{}},default:!0}]},{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",schema:[{name:"tap_action",label:"Tap Action",helper:"Action when card is tapped",selector:{"ui-action":{}}},{name:"hold_action",label:"Hold Action",helper:"Action when card is held",selector:{"ui-action":{}}},{name:"double_tap_action",label:"Double Tap Action",helper:"Action when card is double-tapped",selector:{"ui-action":{}}}]},{type:"expandable",title:"Appearance",icon:"mdi:palette",schema:[{type:"grid",name:"",schema:[{name:"card_height",label:"Card Height",helper:"e.g., 97px, 70px (default varies by layout)",selector:{text:{}}},{name:"card_width",label:"Card Width",helper:"e.g., auto, 100%, 200px (default: auto)",selector:{text:{}}}]},{name:"icon_size",label:"Icon Size",helper:"Size of the main icon",selector:{select:{options:[{value:"small",label:"Small"},{value:"default",label:"Default"},{value:"large",label:"Large"}],mode:"dropdown"}}},{name:"icon_color_source",label:"Icon Color Source",helper:"What determines the icon color",selector:{select:{options:[{value:"default",label:"Default (RGB from lights)"},{value:"motion",label:"Motion Sensor (active color when motion)"},{value:"entity",label:"Entity State (active color when on)"}],mode:"dropdown"}}}]},{type:"expandable",title:"Advanced",icon:"mdi:cog",schema:[{name:"grid_area",label:"Grid Area",helper:"CSS grid-area for layout positioning (e.g., 'living-room')",selector:{text:{}}}]}],Oe=v`
  :host {
    display: block;
  }

  /* ==========================================================================
   * BASE CARD STYLES
   * ========================================================================== */

  ha-card {
    display: grid;
    padding: 6px;
    height: var(--card-height, 97px);
    width: var(--card-width, auto);
    box-sizing: border-box;
    border-radius: var(--ha-card-border-radius, 12px);
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

  /* ==========================================================================
   * LAYOUT: FULL (Default)
   * Grid with name top-left, icon top-right, sensors bottom
   * ========================================================================== */

  ha-card.layout-full {
    grid-template-areas:
      "n n i i"
      "temp temp temp sensors";
    grid-template-rows: 1fr min-content;
    grid-template-columns: min-content 1fr;
  }

  /* ==========================================================================
   * LAYOUT: ICON-ONLY
   * Centered icon, optimized for small cards like button-card templates
   * Responsive sizing calculated in JS based on card height
   * ========================================================================== */

  ha-card.layout-icon-only {
    grid-template-areas: "i";
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    padding: 10px;
  }

  ha-card.layout-icon-only .icon-container {
    justify-self: center;
    align-self: center;
  }

  ha-card.layout-icon-only .name,
  ha-card.layout-icon-only .sensors,
  ha-card.layout-icon-only .binary-sensors {
    display: none;
  }

  /* ==========================================================================
   * LAYOUT: COMPACT
   * Name on top, centered icon below, no sensors row
   * ========================================================================== */

  ha-card.layout-compact {
    grid-template-areas:
      "n"
      "i";
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    padding: 8px;
  }

  ha-card.layout-compact .name {
    justify-self: center;
    text-align: center;
    padding: 4px 8px;
  }

  ha-card.layout-compact .icon-container {
    justify-self: center;
    align-self: center;
  }

  ha-card.layout-compact .sensors,
  ha-card.layout-compact .binary-sensors {
    display: none;
  }

  /* ==========================================================================
   * NAME ELEMENT
   * ========================================================================== */

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

  /* ==========================================================================
   * ICON CONTAINER
   * ========================================================================== */

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

  /* No background mode - removes circular background */
  .icon-container.no-background {
    background-color: transparent;
  }

  /* Icon element */
  .icon-container ha-icon {
    width: var(--icon-size, 35px);
    height: var(--icon-size, 35px);
    --mdc-icon-size: var(--icon-size, 35px);
    color: var(--primary-text-color);
    transition: color 0.3s ease;
  }

  /* Icon-only layout without background - collapse container to icon size */
  ha-card.layout-icon-only .icon-container.no-background {
    width: auto;
    height: auto;
  }

  ha-card.layout-icon-only .icon-container ha-icon {
    width: var(--icon-size, 50px);
    height: var(--icon-size, 50px);
    --mdc-icon-size: var(--icon-size, 50px);
  }

  /* ==========================================================================
   * SENSORS CONTAINER (Temperature, Humidity, Power)
   * ========================================================================== */

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

  /* ==========================================================================
   * BINARY SENSORS ROW
   * ========================================================================== */

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

  /* ==========================================================================
   * ANIMATIONS
   * ========================================================================== */

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes activity-pulse {
    0%,
    100% {
      transform: scale(1);
      filter: drop-shadow(0 0 0 transparent);
    }
    50% {
      transform: scale(1.1);
      filter: drop-shadow(0 0 8px var(--state-binary_sensor-active-color, var(--state-active-color, #ffc107)));
    }
  }

  /* Activity pulse animation for icon when motion/activity detected */
  .icon-container ha-icon.activity-pulse {
    animation: activity-pulse 1.5s ease-in-out infinite;
  }

  /* Transition for smooth fade-out when animation stops */
  .icon-container ha-icon {
    transition: transform 0.5s ease, filter 0.5s ease;
  }

  /* ==========================================================================
   * UTILITY CLASSES
   * ========================================================================== */

  .unavailable {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--secondary-text-color);
    font-style: italic;
  }
`,Ne=v`
  ha-form {
    display: block;
  }
`;let ze=class extends ve{setConfig(e){this._config=e}_computeLabel(e){return e.label||e.name||""}_computeHelper(e){return e.helper||""}_valueChanged(e){const t=e.detail.value;Ce(this,"config-changed",{config:t})}render(){return this.hass&&this._config?te`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Te}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:te``}};function Ue(e){if(!e||"unavailable"===e||"unknown"===e)return"--";const t=parseFloat(e);return isNaN(t)?"--":t.toFixed(0)}function Me(e){if(!e)return!1;const t=e.state,i=e.entity_id.split(".")[0];if("unavailable"===t||"unknown"===t)return!1;switch(i){case"light":case"switch":case"fan":case"input_boolean":case"automation":case"script":case"binary_sensor":default:return"on"===t;case"cover":return"open"===t||"opening"===t;case"lock":return"unlocked"===t||"unlocking"===t;case"media_player":return"playing"===t||"paused"===t||"on"===t||"idle"===t;case"climate":return"off"!==t;case"vacuum":return"cleaning"===t||"returning"===t;case"person":case"device_tracker":return"home"===t}}function Re(e){if(e.layout)return e.layout;const t=!1!==e.show_name,i=!1!==e.show_icon,o=!!(e.temp_sensor||e.humidity_sensor||e.power_sensor),n=!!(e.door_sensor||e.window_sensor||e.person_sensor||e.pet_sensor||e.vehicle_sensor||e.lock_entity);return t||!i||o||n?"full":"icon-only"}ze.styles=Ne,u([Se({attribute:!1})],ze.prototype,"hass",void 0),u([xe()],ze.prototype,"_config",void 0),ze=u([$e(t)],ze);let He=class extends ve{constructor(){super(...arguments),this._held=!1}static getConfigElement(){return document.createElement(t)}static getStubConfig(){return{type:`custom:${e}`,name:"New Sensor Card",icon:"mdi:lightbulb",layout:"full"}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...o,...e},this._config.grid_area&&(this.style.gridArea=this._config.grid_area),this._config.view_layout?.["grid-area"]&&(this.style.gridArea=this._config.view_layout["grid-area"])}getLayoutOptions(){return this._config?.grid_area?{grid_area:this._config.grid_area}:{}}getCardSize(){switch(Re(this._config)){case"icon-only":case"compact":return 1;default:return 2}}_handlePointerDown(){this._held=!1,Pe(this._config?.hold_action)&&(this._holdTimeout=setTimeout(()=>{this._held=!0,this._executeAction("hold")},500))}_handlePointerUp(){this._holdTimeout&&(clearTimeout(this._holdTimeout),this._holdTimeout=void 0)}_handleClick(){this._held?this._held=!1:Pe(this._config?.double_tap_action)?this._dblClickTimeout?(clearTimeout(this._dblClickTimeout),this._dblClickTimeout=void 0,this._executeAction("double_tap")):this._dblClickTimeout=setTimeout(()=>{this._dblClickTimeout=void 0,this._executeAction("tap")},250):this._executeAction("tap")}_executeAction(e){if(!this.hass||!this._config)return;const t=this._config[`${e}_action`];if(t&&"none"!==t.action)switch(t.action){case"toggle":this._config.entity&&this.hass.callService("homeassistant","toggle",{entity_id:this._config.entity});break;case"more-info":if(this._config.entity||t.entity){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t.entity||this._config.entity}});this.dispatchEvent(e)}break;case"navigate":if(t.navigation_path){history.pushState(null,"",t.navigation_path);const e=new Event("location-changed",{bubbles:!0,composed:!0});this.dispatchEvent(e)}break;case"url":t.url_path&&window.open(t.url_path,"_blank");break;case"call-service":if(t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{},t.target)}break;case"fire-dom-event":Ce(this,"ll-custom",t)}}updated(e){super.updated(e),this._config?.grid_area&&(this.style.gridArea=this._config.grid_area)}render(){if(!this._config||!this.hass)return te`<ha-card>Loading...</ha-card>`;const e=Re(this._config),t=this._config.entity?this.hass.states[this._config.entity]:void 0,i=this._config.temp_sensor?this.hass.states[this._config.temp_sensor]:void 0,o=this._config.humidity_sensor?this.hass.states[this._config.humidity_sensor]:void 0,u=this._config.power_sensor?this.hass.states[this._config.power_sensor]:void 0,m=this._config.motion_sensor?this.hass.states[this._config.motion_sensor]:void 0,f=this._config.pet_sensor?this.hass.states[this._config.pet_sensor]:void 0,_=this._config.person_sensor?this.hass.states[this._config.person_sensor]:void 0,g=this._config.vehicle_sensor?this.hass.states[this._config.vehicle_sensor]:void 0,y=this._config.door_sensor?this.hass.states[this._config.door_sensor]:void 0,v=this._config.window_sensor?this.hass.states[this._config.window_sensor]:void 0,b=this._config.lock_entity?this.hass.states[this._config.lock_entity]:void 0,$=Me(t),w="on"===m?.state,A="on"===f?.state,S="on"===_?.state,x="on"===g?.state,k=function(e){if(!e)return!1;const t=e.state;return"on"===t||"Window/door is open"===t}(y),E=function(e){if(!e)return!1;const t=e.state;return"on"===t||"Window/door is open"===t}(v),C=function(e){if(!e)return c.locked;const t=e.state;return c[t]||c.unknown}(b),P=function(e){if(!e)return"var(--state-lock-locked-color, var(--primary-text-color))";const t=e.state;return l[t]||l.unknown}(b),T=t?.attributes?.rgb_color,O=this._config.name||t?.attributes?.friendly_name||this._config.entity||"Sensor Card",N=this._config.icon||"mdi:lightbulb",z=function(e,t="full"){if(e&&e.length>0){const t=parseFloat(e);return isNaN(t)||e!==String(t)?e:`${t}px`}return s[t]||"97px"}(this._config.card_height,e),U=function(e){if(!e)return n;if("string"==typeof e&&e.length>0){const t=parseFloat(e);return isNaN(t)||e!==String(t)?e:`${t}px`}return n}(this._config.card_width),M=function(e,t="full"){if("icon-only"===t&&!e)return null;const i=e||"default";return"icon-only"===t?a[i]:r[i]}(this._config.icon_size,e),{iconSize:R,containerSize:H}=M||function(e,t=20){let i=parseFloat(e);isNaN(i)&&(i=85);const o=i-t,n=Math.max(40,o);return{iconSize:`${Math.round(.7*n)}px`,containerSize:`${n}px`}}(z),D=function(e,t,i,o,n){switch(e.icon_color_source||"default"){case"motion":return"on"===i?.state?h:d;case"entity":return n?o?`rgb(${o[0]}, ${o[1]}, ${o[2]})`:h:p;default:return o&&n?`rgb(${o[0]}, ${o[1]}, ${o[2]})`:""}}(this._config,0,m,T,$),I=function(e,t,i){return"default"===(e.icon_color_source||"default")&&t&&i?`rgba(${t[0]}, ${t[1]}, ${t[2]}, 0.2)`:""}(this._config,T,$),L=`\n      --card-height: ${z};\n      --card-width: ${U};\n      --icon-size: ${R};\n      --icon-container-size: ${H};\n    `.replace(/\s+/g," ").trim(),j=!1!==this._config.show_name,B=!1!==this._config.show_icon,W=!0===this._config.show_state,V=!1!==this._config.show_icon_background,q=!1!==this._config.icon_activity_animation,F=!!((Y=this._config).motion_sensor||Y.person_sensor||Y.pet_sensor||Y.vehicle_sensor);var Y;const G=function(e,t,i,o){return"on"===e?.state||"on"===t?.state||"on"===i?.state||"on"===o?.state}(m,_,f,g),J=q&&F&&G,K=function(e){if(!e)return"";const t=e.state,i=e=>e.charAt(0).toUpperCase()+e.slice(1);switch(e.entity_id.split(".")[0]){case"cover":case"lock":case"media_player":case"climate":case"vacuum":case"person":case"device_tracker":return i(t);default:return Me(e)?"On":"Off"}}(t),Z=[$?"state-on":"state-off",`layout-${e}`].join(" ");return te`
      <ha-card
        class="${Z}"
        style="${L}"
        @pointerdown=${this._handlePointerDown}
        @pointerup=${this._handlePointerUp}
        @pointercancel=${this._handlePointerUp}
        @click=${this._handleClick}
      >
        <!-- Name (hidden in icon-only layout via CSS) -->
        ${j?te`<div class="name">
              ${O}${W&&K?te` <span class="state-text">${K}</span>`:oe}
            </div>`:te`<div class="name"></div>`}

        <!-- Icon Container -->
        ${B?te`
              <div
                class="icon-container${V?"":" no-background"}"
                style="${V&&I?`background-color: ${I}`:""}"
              >
                <ha-icon
                  class="${J?"activity-pulse":""}"
                  .icon=${N}
                  style="${D?`color: ${D}`:""}"
                ></ha-icon>
              </div>
            `:te`<div class="icon-container hidden"></div>`}

        <!-- Value Sensors (hidden in icon-only and compact layouts via CSS) -->
        <div class="sensors">
          ${i?te`<span class="temp">${Ue(i.state)}°</span>`:oe}
          ${o?te`<span class="humidity">${Ue(o.state)}%</span>`:oe}
          ${u?te`<span class="power">${Ue(u.state)}W</span>`:oe}
          ${i||o||u||t||"full"!==e?oe:te`<span class="placeholder">Configure entities</span>`}
        </div>

        <!-- Binary Sensors Row (hidden in icon-only and compact layouts via CSS) -->
        <div class="binary-sensors">
          ${b?te`<ha-icon
                class="lock-icon"
                icon="${C}"
                style="color: ${P};"
              ></ha-icon>`:oe}
          ${y?te`<ha-icon
                class="binary-sensor ${k?"active":"inactive"}"
                icon="${k?"mdi:door-open":"mdi:door-closed"}"
              ></ha-icon>`:oe}
          ${v?te`<ha-icon
                class="binary-sensor ${E?"active":"inactive"}"
                icon="${E?"mdi:window-open":"mdi:window-closed"}"
              ></ha-icon>`:oe}
          ${_?te`<ha-icon
                class="binary-sensor ${S?"active":"inactive"}"
                icon="${S?"mdi:account":"mdi:account-off"}"
              ></ha-icon>`:oe}
          ${f?te`<ha-icon
                class="binary-sensor ${A?"active":"inactive"}"
                icon="${A?"mdi:paw":"mdi:paw-off"}"
              ></ha-icon>`:oe}
          ${g?te`<ha-icon
                class="binary-sensor ${x?"active":"inactive"}"
                icon="${x?"mdi:car":"mdi:car-off"}"
              ></ha-icon>`:oe}
          ${m&&"full"===e?te`<ha-icon
                class="binary-sensor ${w?"active":"inactive"}"
                icon="${w?"mdi:motion-sensor":"mdi:motion-sensor-off"}"
              ></ha-icon>`:oe}
        </div>
      </ha-card>
    `}};He.styles=Oe,u([Se({attribute:!1})],He.prototype,"hass",void 0),u([xe()],He.prototype,"_config",void 0),He=u([$e(e)],He),console.info(`%c ${i.toUpperCase()} %c v2.5.1 `,"color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:e,name:i,description:"A card displaying RGB lights with temperature, humidity, power, and binary sensors",preview:!0,documentationURL:"https://github.com/hunt41lb/sensor-display-card"});
