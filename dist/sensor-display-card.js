function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:h,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,m=_.trustedTypes,f=m?m.emptyScript:"",g=_.reactiveElementPolyfillSupport,$=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!h(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const n=o.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??v)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[$("elementProperties")]=new Map,A[$("finalized")]=new Map,g?.({ReactiveElement:A}),(_.reactiveElementVersions??=[]).push("2.1.1");const E=globalThis,w=E.trustedTypes,S=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+x,P=`<${T}>`,U=document,k=()=>U.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,H="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,V=/>/g,L=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,D=/"/g,z=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,F=U.createTreeWalker(U,129);function G(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let a,h,l=-1,c=0;for(;c<i.length&&(r.lastIndex=c,h=r.exec(i),null!==h);)c=r.lastIndex,r===N?"!--"===h[1]?r=R:void 0!==h[1]?r=V:void 0!==h[2]?(z.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=L):void 0!==h[3]&&(r=L):r===L?">"===h[0]?(r=o??N,l=-1):void 0===h[1]?l=-2:(l=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?L:'"'===h[3]?D:j):r===D||r===j?r=L:r===R||r===V?r=N:(r=L,o=void 0);const d=r===L&&t[e+1].startsWith("/>")?" ":"";n+=r===N?i+P:l>=0?(s.push(a),i.slice(0,l)+C+i.slice(l)+x+d):i+x+(-2===l?e:d)}return[G(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[h,l]=J(t,e);if(this.el=K.createElement(h,i),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=F.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=l[n++],i=s.getAttribute(t).split(x),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:X}),s.removeAttribute(t)}else t.startsWith(x)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(z.test(s.tagName)){const t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],k()),F.nextNode(),a.push({type:2,index:++o});s.append(t[e],k())}}}else if(8===s.nodeType)if(s.data===T)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)a.push({type:7,index:o}),t+=x.length-1}o++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===B)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=O(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??U).importNode(e,!0);F.currentNode=s;let o=F.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(o=F.nextNode(),n++)}return F.currentNode=U,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),O(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Y(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(k()),this.O(k()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Z(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Z(this,s[i+r],e,r),a===B&&(a=this._$AH[r]),n||=!O(a)||a!==this._$AH[r],a===W?t=W:t!==W&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends X{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===B)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=E.litHtmlPolyfillSupport;ot?.(K,Q),(E.litHtmlVersions??=[]).push("3.3.1");const nt=globalThis;let rt=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Q(e.insertBefore(k(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};rt._$litElement$=!0,rt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:rt});const at=nt.litElementPolyfillSupport;at?.({LitElement:rt}),(nt.litElementVersions??=[]).push("4.2.1");const ht=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},ct=(t=lt,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};function dt(t){return(e,i)=>"object"==typeof i?ct(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function pt(t){return dt({...t,state:!0,attribute:!1})}var ut,_t;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ut||(ut={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(_t||(_t={}));function mt(t){return void 0!==t&&"none"!==t.action}const ft=r`
  :host {
    display: block;
  }

  ha-card {
    display: grid;
    grid-template-areas:
      "name    name    icon    icon"
      "sensors sensors sensors motion";
    grid-template-rows: 1fr min-content;
    grid-template-columns: min-content 1fr 1fr auto;
    padding: 6px;
    height: 97px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  ha-card.state-on {
    background-color: var(--ha-card-background);
    border: 1px solid var(--primary-text-color);
  }

  ha-card.state-off {
    background-color: var(--ha-card-background-inactive, var(--ha-card-background));
  }

  /* Name styling */
  .name {
    grid-area: name;
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

  /* Icon container */
  .icon-container {
    grid-area: icon;
    justify-self: end;
    align-self: start;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    background-color: var(--inactive-img-cell, rgba(0, 0, 0, 0.1));
    transition: background-color 0.3s ease;
  }

  .icon-container.has-color {
    /* Background color set dynamically via style attribute */
  }

  .icon-container ha-icon {
    width: 35px;
    height: 35px;
    --mdc-icon-size: 35px;
    color: var(--primary-text-color);
    transition: color 0.3s ease;
  }

  /* Sensor values area */
  .sensors {
    grid-area: sensors;
    justify-self: start;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 300;
    color: var(--primary-text-color);
    padding: 0 0 1px 14px;
  }

  .sensor-temp {
    font-size: 18px;
  }

  .sensor-humidity,
  .sensor-power {
    font-size: 12px;
    font-weight: 400;
    opacity: 0.7;
  }

  /* Motion sensor area */
  .motion {
    grid-area: motion;
    justify-self: end;
    align-self: end;
    padding: 0 0 1px 2px;
    margin: 0 3px 0 0;
  }

  .motion ha-icon {
    width: 21px;
    height: 21px;
    --mdc-icon-size: 21px;
    transition: color 0.3s ease;
  }

  .motion ha-icon.motion-active {
    color: var(--warning-color, #ffc107);
    animation: pulse 1.5s ease-in-out infinite;
  }

  .motion ha-icon.motion-inactive {
    color: var(--primary-background-color);
  }

  /* Pulse animation for motion detection */
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  /* Unavailable state */
  .unavailable {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--secondary-text-color);
    font-style: italic;
  }

  .no-entities {
    font-size: 12px;
    color: var(--secondary-text-color);
    font-style: italic;
  }
`,gt=6;class $t{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const yt="ontouchstart"in window||navigator.maxTouchPoints>0;const vt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends $t{constructor(t){if(super(t),this.held=!1,t.type!==gt)throw new Error("actionHandler directive can only be used on elements")}render(t){return B}update(t,[e]){return this.element||(this.element=t.element,this.setupListeners()),this.options=e||{},B}setupListeners(){yt?(this.element.addEventListener("touchstart",this.handleTouchStart.bind(this),{passive:!0}),this.element.addEventListener("touchend",this.handleTouchEnd.bind(this)),this.element.addEventListener("touchcancel",this.handleTouchCancel.bind(this))):(this.element.addEventListener("mousedown",this.handleMouseDown.bind(this)),this.element.addEventListener("mouseup",this.handleMouseUp.bind(this)),this.element.addEventListener("click",this.handleClick.bind(this)))}handleTouchStart(t){this.held=!1,this.options.hasHold&&(this.holdTimeout=setTimeout(()=>{this.held=!0,this.fireEvent("hold")},500))}handleTouchEnd(t){this.holdTimeout&&(clearTimeout(this.holdTimeout),this.holdTimeout=void 0),this.held||this.handleClick(t)}handleTouchCancel(){this.held=!1,this.holdTimeout&&(clearTimeout(this.holdTimeout),this.holdTimeout=void 0)}handleMouseDown(t){this.held=!1,this.options.hasHold&&(this.holdTimeout=setTimeout(()=>{this.held=!0,this.fireEvent("hold")},500))}handleMouseUp(){this.holdTimeout&&(clearTimeout(this.holdTimeout),this.holdTimeout=void 0)}handleClick(t){t.stopPropagation(),this.held?this.held=!1:this.options.hasDoubleClick?this.dblClickTimeout?(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,this.fireEvent("double_tap")):this.dblClickTimeout=setTimeout(()=>{this.dblClickTimeout=void 0,this.fireEvent("tap")},250):this.fireEvent("tap")}fireEvent(t){this.options.disabled||this.element.dispatchEvent(new CustomEvent("action",{bubbles:!0,composed:!0,detail:{action:t}}))}}),bt=[{name:"name",label:"Card Name",selector:{text:{}}},{name:"icon",label:"Icon",selector:{icon:{}}},{name:"entity",label:"Light Entity",selector:{entity:{domain:"light"}}},{name:"temp_sensor",label:"Temperature Sensor",selector:{entity:{domain:"sensor"}}},{name:"humidity_sensor",label:"Humidity Sensor",selector:{entity:{domain:"sensor"}}},{name:"power_sensor",label:"Power Sensor",selector:{entity:{domain:"sensor"}}},{name:"motion_sensor",label:"Motion Sensor",selector:{entity:{domain:"binary_sensor"}}}];let At=class extends rt{setConfig(t){this._config=t}_computeLabel(t){return t.label||t.name}_valueChanged(t){!function(t,e,i,s){s=s||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});o.detail=i,t.dispatchEvent(o)}(this,"config-changed",{config:t.detail.value})}render(){return this.hass&&this._config?I`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${bt}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:I``}};At.styles=r`
    ha-form {
      display: block;
    }
  `,t([dt({attribute:!1})],At.prototype,"hass",void 0),t([pt()],At.prototype,"_config",void 0),At=t([ht("sensor-display-card-editor")],At);console.info("%c SENSOR-DISPLAY-CARD %c v1.0.1 ","color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");let Et=class extends rt{constructor(){super(...arguments),this._motionActive=!1}static getConfigElement(){return document.createElement("sensor-display-card-editor")}static getStubConfig(){return{type:"custom:sensor-display-card",name:"New Sensor Card",icon:"mdi:lightbulb"}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={tap_action:{action:"toggle"},hold_action:{action:"more-info"},double_tap_action:{action:"more-info"},icon:"mdi:lightbulb",...t},this._hass&&this._updateStates()}set hass(t){this._hass=t,this._updateStates()}_updateStates(){if(this._hass&&this._config){if(this._config.entity){const t=this._hass.states[this._config.entity];this._lightEntity!==t&&(this._lightEntity=t)}else void 0!==this._lightEntity&&(this._lightEntity=void 0);if(this._config.temp_sensor){const t=this._hass.states[this._config.temp_sensor],e=t?.state;this._tempValue!==e&&(this._tempValue=e)}else void 0!==this._tempValue&&(this._tempValue=void 0);if(this._config.humidity_sensor){const t=this._hass.states[this._config.humidity_sensor],e=t?.state;this._humidityValue!==e&&(this._humidityValue=e)}else void 0!==this._humidityValue&&(this._humidityValue=void 0);if(this._config.power_sensor){const t=this._hass.states[this._config.power_sensor],e=t?.state;this._powerValue!==e&&(this._powerValue=e)}else void 0!==this._powerValue&&(this._powerValue=void 0);if(this._config.motion_sensor){const t=this._hass.states[this._config.motion_sensor],e="on"===t?.state;this._motionActive!==e&&(this._motionActive=e)}else!1!==this._motionActive&&(this._motionActive=!1)}}_handleAction(t){if(!this._hass||!this._config)return;const e=t.detail.action;if(!this._config[`${e}_action`])return;const i=this._config.entity;if(!i)return;const s=new Event("hass-action",{bubbles:!0,composed:!0});s.detail={config:{entity:i,tap_action:this._config.tap_action,hold_action:this._config.hold_action,double_tap_action:this._config.double_tap_action},action:e},this.dispatchEvent(s)}_parseValue(t){if(null==t||"unavailable"===t||"unknown"===t)return"--";const e=parseFloat(t);return isNaN(e)?"--":e.toFixed(0)}render(){if(!this._config||!this._hass)return I`<ha-card><div class="unavailable">Loading...</div></ha-card>`;const t="on"===this._lightEntity?.state,e=this._lightEntity?.attributes?.rgb_color,i=e&&t?`background-color: rgba(${e.join(",")}, 0.2);`:"",s=e&&t?`color: rgb(${e.join(",")});`:"",o=this._config.name||this._lightEntity?.attributes?.friendly_name||this._config.entity||"Sensor Card",n=this._config.icon||"mdi:lightbulb",r=void 0!==this._tempValue||void 0!==this._humidityValue||void 0!==this._powerValue;return I`
      <ha-card
        class="state-${t?"on":"off"}"
        @action=${this._handleAction}
        .actionHandler=${vt({hasHold:mt(this._config.hold_action),hasDoubleClick:mt(this._config.double_tap_action)})}
      >
        <!-- Card Name -->
        <div class="name">${o}</div>

        <!-- Icon Container -->
        <div class="icon-container ${e&&t?"has-color":""}" style="${i}">
          <ha-icon .icon=${n} style="${s}"></ha-icon>
        </div>

        <!-- Sensor Values -->
        <div class="sensors">
          ${void 0!==this._tempValue?I`<span class="sensor-temp">${this._parseValue(this._tempValue)}°</span>`:W}
          ${void 0!==this._humidityValue?I`<span class="sensor-humidity">${this._parseValue(this._humidityValue)}%</span>`:W}
          ${void 0!==this._powerValue?I`<span class="sensor-power">${this._parseValue(this._powerValue)}W</span>`:W}
          ${r||this._lightEntity?W:I`<span class="no-entities">Configure entities</span>`}
        </div>

        <!-- Motion Sensor -->
        ${this._config.motion_sensor?I`
              <div class="motion">
                ${this._motionActive?I`<ha-icon class="motion-active" icon="mdi:motion-sensor"></ha-icon>`:W}
              </div>
            `:W}
      </ha-card>
    `}getCardSize(){return 2}getGridOptions(){return{rows:2,columns:6,min_rows:2,min_columns:3}}getLayoutOptions(){return{grid_rows:2,grid_columns:2,grid_min_rows:2,grid_min_columns:2}}};Et.styles=ft,t([pt()],Et.prototype,"_lightEntity",void 0),t([pt()],Et.prototype,"_tempValue",void 0),t([pt()],Et.prototype,"_humidityValue",void 0),t([pt()],Et.prototype,"_powerValue",void 0),t([pt()],Et.prototype,"_motionActive",void 0),Et=t([ht("sensor-display-card")],Et),window.customCards=window.customCards||[],window.customCards.push({type:"sensor-display-card",name:"Sensor Display Card",description:"A card displaying RGB lights with temperature, humidity, power, and motion sensors",preview:!0,documentationURL:"https://github.com/hunt41lb/sensor-display-card"});export{Et as SensorDisplayCard};
