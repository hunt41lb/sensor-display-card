function t(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}};const r=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,_=u.trustedTypes,m=_?_.emptyScript:"",f=u.reactiveElementPolyfillSupport,g=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},$=(t,e)=>!a(t,e),v={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);o?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const n=o.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,o=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??$)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[g("elementProperties")]=new Map,b[g("finalized")]=new Map,f?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.1");const A=globalThis,w=A.trustedTypes,S=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+x,P=`<${C}>`,k=document,T=()=>k.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,N="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,M=/>/g,j=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,D=/"/g,L=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),W=new WeakMap,q=k.createTreeWalker(k,129);function F(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const G=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=H;for(let e=0;e<s;e++){const s=t[e];let a,c,l=-1,h=0;for(;h<s.length&&(r.lastIndex=h,c=r.exec(s),null!==c);)h=r.lastIndex,r===H?"!--"===c[1]?r=R:void 0!==c[1]?r=M:void 0!==c[2]?(L.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=j):void 0!==c[3]&&(r=j):r===j?">"===c[0]?(r=o??H,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?j:'"'===c[3]?D:z):r===D||r===z?r=j:r===R||r===M?r=H:(r=j,o=void 0);const d=r===j&&t[e+1].startsWith("/>")?" ":"";n+=r===H?s+P:l>=0?(i.push(a),s.slice(0,l)+E+s.slice(l)+x+d):s+x+(-2===l?e:d)}return[F(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class J{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[c,l]=G(t,e);if(this.el=J.createElement(c,s),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=q.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=l[n++],s=i.getAttribute(t).split(x),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?X:"?"===r[1]?tt:"@"===r[1]?et:Q}),i.removeAttribute(t)}else t.startsWith(x)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(x),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),q.nextNode(),a.push({type:2,index:++o});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(x,t+1));)a.push({type:7,index:o}),t+=x.length-1}o++}}static createElement(t,e){const s=k.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,i){if(e===B)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const n=O(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=K(t,o._$AS(t,e.values),o,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??k).importNode(e,!0);q.currentNode=i;let o=q.nextNode(),n=0,r=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=s[++r]}n!==a?.index&&(o=q.nextNode(),n++)}return q.currentNode=k,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),O(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(F(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Z(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new J(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new Y(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=K(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const i=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=K(this,i[s+r],e,r),a===B&&(a=this._$AH[r]),n||=!O(a)||a!==this._$AH[r],a===V?t=V:t!==V&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!i&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class et extends Q{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??V)===B)return;const s=this._$AH,i=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==V&&(s===V||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const it=A.litHtmlPolyfillSupport;it?.(J,Y),(A.litHtmlVersions??=[]).push("3.3.1");const ot=globalThis;class nt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new Y(e.insertBefore(T(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const rt=ot.litElementPolyfillSupport;rt?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.1");const at=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ct={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},lt=(t=ct,e,s)=>{const{kind:i,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};function ht(t){return(e,s)=>"object"==typeof s?lt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function dt(t){return ht({...t,state:!0,attribute:!1})}var pt,ut;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(pt||(pt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ut||(ut={}));var _t=function(t,e,s,i){i=i||{},s=null==s?{}:s;var o=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return o.detail=s,t.dispatchEvent(o),o};function mt(t){return void 0!==t&&"none"!==t.action}console.info("%c SENSOR-DISPLAY-CARD %c v1.7.0 ","color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");const ft=[{name:"name",label:"Card Name",selector:{text:{}}},{name:"icon",label:"Icon",selector:{icon:{}}},{name:"entity",label:"Entity",selector:{entity:{}}},{name:"temp_sensor",label:"Temperature Sensor",selector:{entity:{domain:"sensor"}}},{name:"humidity_sensor",label:"Humidity Sensor",selector:{entity:{domain:"sensor"}}},{name:"power_sensor",label:"Power Sensor",selector:{entity:{domain:"sensor"}}},{name:"motion_sensor",label:"Motion Sensor",selector:{entity:{domain:"binary_sensor"}}},{name:"pet_sensor",label:"Pet Sensor",selector:{entity:{domain:"binary_sensor"}}},{name:"person_sensor",label:"Person Sensor",selector:{entity:{domain:"binary_sensor"}}},{name:"vehicle_sensor",label:"Vehicle Sensor",selector:{entity:{domain:"binary_sensor"}}},{name:"grid_area",label:"Grid Area (for layout)",selector:{text:{}}},{name:"show_name",label:"Show Name",selector:{boolean:{}},default:!0},{name:"show_icon",label:"Show Icon",selector:{boolean:{}},default:!0},{name:"show_state",label:"Show State (On/Off)",selector:{boolean:{}},default:!1},{name:"tap_action",label:"Tap Action",selector:{"ui-action":{}}},{name:"hold_action",label:"Hold Action",selector:{"ui-action":{}}},{name:"double_tap_action",label:"Double Tap Action",selector:{"ui-action":{}}}];let gt=class extends nt{setConfig(t){this._config=t}_computeLabel(t){return t.label||t.name}_valueChanged(t){const e=t.detail.value;_t(this,"config-changed",{config:e})}render(){return this.hass&&this._config?I`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${ft}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:I``}};t([ht({attribute:!1})],gt.prototype,"hass",void 0),t([dt()],gt.prototype,"_config",void 0),gt=t([at("sensor-display-card-editor")],gt);let yt=class extends nt{constructor(){super(...arguments),this._held=!1}static getConfigElement(){return document.createElement("sensor-display-card-editor")}static getStubConfig(){return{type:"custom:sensor-display-card",name:"New Sensor Card",icon:"mdi:lightbulb"}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={icon:"mdi:lightbulb",show_name:!0,show_icon:!0,show_state:!1,tap_action:{action:"toggle"},hold_action:{action:"more-info"},double_tap_action:{action:"more-info"},...t},this._config.grid_area&&(this.style.gridArea=this._config.grid_area),this._config.view_layout?.["grid-area"]&&(this.style.gridArea=this._config.view_layout["grid-area"])}getLayoutOptions(){return this._config?.grid_area?{grid_area:this._config.grid_area}:{}}_parseValue(t){if(!t||"unavailable"===t||"unknown"===t)return"--";const e=parseFloat(t);return isNaN(e)?"--":e.toFixed(0)}_isEntityActive(t){if(!t)return!1;const e=t.state,s=t.entity_id.split(".")[0];if("unavailable"===e||"unknown"===e)return!1;switch(s){case"light":case"switch":case"fan":case"input_boolean":case"automation":case"script":case"binary_sensor":default:return"on"===e;case"cover":return"open"===e||"opening"===e;case"lock":return"unlocked"===e||"unlocking"===e;case"media_player":return"playing"===e||"paused"===e||"on"===e||"idle"===e;case"climate":return"off"!==e;case"vacuum":return"cleaning"===e||"returning"===e;case"person":case"device_tracker":return"home"===e}}_getStateText(t){if(!t)return"";const e=t.state,s=t=>t.charAt(0).toUpperCase()+t.slice(1);switch(t.entity_id.split(".")[0]){case"cover":case"lock":case"media_player":case"climate":case"vacuum":case"person":case"device_tracker":return s(e);default:return this._isEntityActive(t)?"On":"Off"}}_handlePointerDown(){this._held=!1,mt(this._config?.hold_action)&&(this._holdTimeout=setTimeout(()=>{this._held=!0,this._executeAction("hold")},500))}_handlePointerUp(){this._holdTimeout&&(clearTimeout(this._holdTimeout),this._holdTimeout=void 0)}_handleClick(){this._held?this._held=!1:mt(this._config?.double_tap_action)?this._dblClickTimeout?(clearTimeout(this._dblClickTimeout),this._dblClickTimeout=void 0,this._executeAction("double_tap")):this._dblClickTimeout=setTimeout(()=>{this._dblClickTimeout=void 0,this._executeAction("tap")},250):this._executeAction("tap")}_executeAction(t){if(!this.hass||!this._config)return;const e=this._config[`${t}_action`];if(e&&"none"!==e.action)switch(e.action){case"toggle":this._config.entity&&this.hass.callService("homeassistant","toggle",{entity_id:this._config.entity});break;case"more-info":if(this._config.entity||e.entity){const t=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e.entity||this._config.entity}});this.dispatchEvent(t)}break;case"navigate":if(e.navigation_path){history.pushState(null,"",e.navigation_path);const t=new Event("location-changed",{bubbles:!0,composed:!0});this.dispatchEvent(t)}break;case"url":e.url_path&&window.open(e.url_path,"_blank");break;case"call-service":if(e.service){const[t,s]=e.service.split(".");this.hass.callService(t,s,e.service_data||{},e.target)}break;case"fire-dom-event":_t(this,"ll-custom",e)}}updated(t){super.updated(t),this._config?.grid_area&&(this.style.gridArea=this._config.grid_area)}render(){if(!this._config||!this.hass)return I`<ha-card>Loading...</ha-card>`;const t=this._config.entity?this.hass.states[this._config.entity]:void 0,e=this._config.temp_sensor?this.hass.states[this._config.temp_sensor]:void 0,s=this._config.humidity_sensor?this.hass.states[this._config.humidity_sensor]:void 0,i=this._config.power_sensor?this.hass.states[this._config.power_sensor]:void 0,o=this._config.motion_sensor?this.hass.states[this._config.motion_sensor]:void 0,n=this._config.pet_sensor?this.hass.states[this._config.pet_sensor]:void 0,r=this._config.person_sensor?this.hass.states[this._config.person_sensor]:void 0,a=this._config.vehicle_sensor?this.hass.states[this._config.vehicle_sensor]:void 0,c=this._isEntityActive(t),l="on"===o?.state,h="on"===n?.state,d="on"===r?.state,p="on"===a?.state,u=t?.attributes?.rgb_color,_=this._config.name||t?.attributes?.friendly_name||this._config.entity||"Sensor Card",m=this._config.icon||"mdi:lightbulb",f=u&&c?`background-color: rgba(${u[0]}, ${u[1]}, ${u[2]}, 0.2)`:"",g=u&&c?`color: rgb(${u[0]}, ${u[1]}, ${u[2]})`:"",y=!1!==this._config.show_name,$=!1!==this._config.show_icon,v=!0===this._config.show_state,b=this._getStateText(t);return I`
      <ha-card
        class="${c?"state-on":"state-off"}"
        @pointerdown=${this._handlePointerDown}
        @pointerup=${this._handlePointerUp}
        @pointercancel=${this._handlePointerUp}
        @click=${this._handleClick}
      >
        <!-- Name -->
        ${y?I`<div class="name">${_}${v&&b?I` <span class="state-text">${b}</span>`:V}</div>`:I`<div class="name"></div>`}

        <!-- Icon Container (img_cell) -->
        ${$?I`
              <div class="icon-container" style="${f}">
                <ha-icon .icon=${m} style="${g}"></ha-icon>
              </div>
            `:I`<div class="icon-container hidden"></div>`}

        <!-- Sensors (temp area) -->
        <div class="sensors">
          ${e?I`<span class="temp">${this._parseValue(e.state)}°</span>`:V}
          ${s?I`<span class="humidity">${this._parseValue(s.state)}%</span>`:V}
          ${i?I`<span class="power">${this._parseValue(i.state)}W</span>`:V}
          ${e||s||i||t?V:I`<span class="placeholder">Configure entities</span>`}
        </div>

        <!-- Binary Sensors Row -->
        <div class="binary-sensors">
          ${r?I`<ha-icon
                class="binary-sensor ${d?"active":"inactive"}"
                icon="${d?"mdi:account":"mdi:account-off"}"
              ></ha-icon>`:V}
          ${n?I`<ha-icon
                class="binary-sensor ${h?"active":"inactive"}"
                icon="${h?"mdi:paw":"mdi:paw-off"}"
              ></ha-icon>`:V}
          ${a?I`<ha-icon
                class="binary-sensor ${p?"active":"inactive"}"
                icon="${p?"mdi:car":"mdi:car-off"}"
              ></ha-icon>`:V}
          ${o?I`<ha-icon
                class="binary-sensor ${l?"active":"inactive"}"
                icon="${l?"mdi:motion-sensor":"mdi:motion-sensor-off"}"
              ></ha-icon>`:V}
        </div>
      </ha-card>
    `}getCardSize(){return 2}};yt.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)})`
    :host {
      display: block;
    }

    /* Card - matches your button_card styles.card */
    ha-card {
      display: grid;
      grid-template-areas:
        "n n i i"
        "temp temp temp sensors";
      grid-template-rows: 1fr min-content;
      grid-template-columns: min-content 1fr;
      padding: 6px;
      height: 97px;
      box-sizing: border-box;
      cursor: pointer;
      transition: background-color 0.3s ease, border 0.3s ease;
    }

    ha-card.state-on {
      background-color: var(--ha-card-background, var(--card-background-color));
      border: 1px solid var(--primary-text-color);
    }

    ha-card.state-off {
      background-color: var(--ha-card-background-inactive, var(--ha-card-background));
    }

    /* Name - matches your styles.name */
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

    /* Icon container - matches your styles.img_cell */
    .icon-container {
      grid-area: i;
      justify-self: end;
      align-self: start;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      width: 50px;
      height: 50px;
      background-color: var(--inactive-img-cell, rgba(0, 0, 0, 0.1));
      transition: background-color 1.2s ease;
    }

    .icon-container.hidden {
      visibility: hidden;
    }

    /* Icon - matches your styles.icon */
    .icon-container ha-icon {
      width: 35px;
      --mdc-icon-size: 35px;
      color: var(--primary-text-color);
      transition: color 0.3s ease;
    }

    /* Sensors container - matches your custom_fields.temp positioning */
    .sensors {
      grid-area: temp;
      justify-self: start;
      display: flex;
      align-items: baseline;
      gap: 8px;
      padding: 0 0 1px 14px;
    }

    /* Temperature - matches your custom_fields.temp styles */
    .temp {
      font-size: 16px;
      line-height: 16px;
      font-weight: 300;
      color: var(--primary-text-color);
    }

    /* Humidity and Power - matches your inline styles in custom_fields.temp */
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

    /* Binary sensors row - replaces single motion sensor */
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
  `,t([ht({attribute:!1})],yt.prototype,"hass",void 0),t([dt()],yt.prototype,"_config",void 0),yt=t([at("sensor-display-card")],yt),window.customCards=window.customCards||[],window.customCards.push({type:"sensor-display-card",name:"Sensor Display Card",description:"A card displaying RGB lights with temperature, humidity, power, and motion sensors",preview:!0,documentationURL:"https://github.com/hunt41lb/sensor-display-card"});export{yt as SensorDisplayCard,gt as SensorDisplayCardEditor};
