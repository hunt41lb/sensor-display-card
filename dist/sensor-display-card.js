function t(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,m=_.trustedTypes,f=m?m.emptyScript:"",g=_.reactiveElementPolyfillSupport,y=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);o?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=i;const n=o.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,o=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??v)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,g?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.1");const A=globalThis,S=A.trustedTypes,x=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,P=`<${C}>`,O=document,T=()=>O.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,N="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,D=/>/g,L=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,z=/"/g,I=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),V=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,F=O.createTreeWalker(O,129);function G(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=M;for(let e=0;e<s;e++){const s=t[e];let a,c,l=-1,h=0;for(;h<s.length&&(r.lastIndex=h,c=r.exec(s),null!==c);)h=r.lastIndex,r===M?"!--"===c[1]?r=R:void 0!==c[1]?r=D:void 0!==c[2]?(I.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=L):void 0!==c[3]&&(r=L):r===L?">"===c[0]?(r=o??M,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?L:'"'===c[3]?z:j):r===z||r===j?r=L:r===R||r===D?r=M:(r=L,o=void 0);const d=r===L&&t[e+1].startsWith("/>")?" ":"";n+=r===M?s+P:l>=0?(i.push(a),s.slice(0,l)+E+s.slice(l)+k+d):s+k+(-2===l?e:d)}return[G(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[c,l]=J(t,e);if(this.el=K.createElement(c,s),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=l[n++],s=i.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?st:X}),i.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),F.nextNode(),a.push({type:2,index:++o});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const s=O.createElement("template");return s.innerHTML=t,s}}function Z(t,e,s=t,i){if(e===V)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const n=U(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??O).importNode(e,!0);F.currentNode=i;let o=F.nextNode(),n=0,r=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new it(o,this,t)),this._$AV.push(e),a=s[++r]}n!==a?.index&&(o=F.nextNode(),n++)}return F.currentNode=O,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),U(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new Q(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=Z(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==V,n&&(this._$AH=t);else{const i=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Z(this,i[s+r],e,r),a===V&&(a=this._$AH[r]),n||=!U(a)||a!==this._$AH[r],a===W?t=W:t!==W&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class st extends X{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===V)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(K,Q),(A.litHtmlVersions??=[]).push("3.3.1");const nt=globalThis;class rt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new Q(e.insertBefore(T(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}rt._$litElement$=!0,rt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:rt});const at=nt.litElementPolyfillSupport;at?.({LitElement:rt}),(nt.litElementVersions??=[]).push("4.2.1");const ct=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:v},ht=(t=lt,e,s)=>{const{kind:i,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};function dt(t){return(e,s)=>"object"==typeof s?ht(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function pt(t){return dt({...t,state:!0,attribute:!1})}var ut,_t;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ut||(ut={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(_t||(_t={}));var mt=function(t,e,s,i){i=i||{},s=null==s?{}:s;var o=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return o.detail=s,t.dispatchEvent(o),o};function ft(t){return void 0!==t&&"none"!==t.action}console.info("%c SENSOR-DISPLAY-CARD %c v2.1.0 ","color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");const gt=[{name:"name",label:"Card Name",helper:"Display name shown on the card (optional - uses entity name if blank)",selector:{text:{}}},{name:"icon",label:"Icon",helper:"Main icon displayed in the card",selector:{icon:{}}},{name:"entity",label:"Primary Entity",helper:"Main entity for card state (light, switch, etc.)",selector:{entity:{}}},{type:"expandable",title:"Value Sensors",icon:"mdi:thermometer",schema:[{name:"temp_sensor",label:"Temperature",helper:"Displays temperature value with ° symbol",selector:{entity:{domain:"sensor",device_class:"temperature"}}},{name:"humidity_sensor",label:"Humidity",helper:"Displays humidity value with % symbol",selector:{entity:{domain:"sensor",device_class:"humidity"}}},{name:"power_sensor",label:"Power",helper:"Displays power consumption with W symbol",selector:{entity:{domain:"sensor",device_class:"power"}}}]},{type:"expandable",title:"Binary Sensors",icon:"mdi:motion-sensor",schema:[{name:"motion_sensor",label:"Motion Sensor",helper:"Shows motion-sensor icon when motion detected",selector:{entity:{domain:"binary_sensor",device_class:"motion"}}},{name:"person_sensor",label:"Person Sensor",helper:"Shows person icon when person detected",selector:{entity:{domain:"binary_sensor",device_class:"occupancy"}}},{name:"pet_sensor",label:"Pet Sensor",helper:"Shows paw icon when pet detected",selector:{entity:{domain:"binary_sensor"}}},{name:"vehicle_sensor",label:"Vehicle Sensor",helper:"Shows car icon when vehicle detected",selector:{entity:{domain:"binary_sensor"}}},{name:"door_sensor",label:"Door Sensor",helper:"Shows door-open icon when door is open",selector:{entity:{domain:"binary_sensor",device_class:"door"}}},{name:"window_sensor",label:"Window Sensor",helper:"Shows window-open icon when window is open",selector:{entity:{domain:"binary_sensor",device_class:"window"}}}]},{type:"expandable",title:"Lock",icon:"mdi:shield-lock",schema:[{name:"lock_entity",label:"Lock / Deadbolt",helper:"Shows lock status with shield icon (always visible when configured)",selector:{entity:{domain:"lock"}}}]},{type:"expandable",title:"Display Options",icon:"mdi:eye-settings",schema:[{name:"show_name",label:"Show Name",helper:"Display card name in top left",selector:{boolean:{}},default:!0},{name:"show_icon",label:"Show Icon",helper:"Display main icon in top right",selector:{boolean:{}},default:!0},{name:"show_state",label:"Show State Text",helper:"Display On/Off state next to name",selector:{boolean:{}},default:!1}]},{type:"expandable",title:"Actions",icon:"mdi:gesture-tap",schema:[{name:"tap_action",label:"Tap Action",helper:"Action when card is tapped",selector:{"ui-action":{}}},{name:"hold_action",label:"Hold Action",helper:"Action when card is held",selector:{"ui-action":{}}},{name:"double_tap_action",label:"Double Tap Action",helper:"Action when card is double-tapped",selector:{"ui-action":{}}}]},{type:"expandable",title:"Advanced",icon:"mdi:cog",schema:[{name:"grid_area",label:"Grid Area",helper:"CSS grid-area for layout positioning (e.g., 'living-room')",selector:{text:{}}}]}];let yt=class extends rt{setConfig(t){this._config=t}_computeLabel(t){return t.label||t.name}_computeHelper(t){return t.helper||""}_valueChanged(t){const e=t.detail.value;mt(this,"config-changed",{config:e})}render(){return this.hass&&this._config?B`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${gt}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:B``}};yt.styles=r`
    ha-form {
      display: block;
    }
  `,t([dt({attribute:!1})],yt.prototype,"hass",void 0),t([pt()],yt.prototype,"_config",void 0),yt=t([ct("sensor-display-card-editor")],yt);let $t=class extends rt{constructor(){super(...arguments),this._held=!1}static getConfigElement(){return document.createElement("sensor-display-card-editor")}static getStubConfig(){return{type:"custom:sensor-display-card",name:"New Sensor Card",icon:"mdi:lightbulb"}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={icon:"mdi:lightbulb",show_name:!0,show_icon:!0,show_state:!1,tap_action:{action:"toggle"},hold_action:{action:"more-info"},double_tap_action:{action:"more-info"},...t},this._config.grid_area&&(this.style.gridArea=this._config.grid_area),this._config.view_layout?.["grid-area"]&&(this.style.gridArea=this._config.view_layout["grid-area"])}getLayoutOptions(){return this._config?.grid_area?{grid_area:this._config.grid_area}:{}}_parseValue(t){if(!t||"unavailable"===t||"unknown"===t)return"--";const e=parseFloat(t);return isNaN(e)?"--":e.toFixed(0)}_isEntityActive(t){if(!t)return!1;const e=t.state,s=t.entity_id.split(".")[0];if("unavailable"===e||"unknown"===e)return!1;switch(s){case"light":case"switch":case"fan":case"input_boolean":case"automation":case"script":case"binary_sensor":default:return"on"===e;case"cover":return"open"===e||"opening"===e;case"lock":return"unlocked"===e||"unlocking"===e;case"media_player":return"playing"===e||"paused"===e||"on"===e||"idle"===e;case"climate":return"off"!==e;case"vacuum":return"cleaning"===e||"returning"===e;case"person":case"device_tracker":return"home"===e}}_isDoorOpen(t){if(!t)return!1;const e=t.state;return"on"===e||"Window/door is open"===e}_isWindowOpen(t){if(!t)return!1;const e=t.state;return"on"===e||"Window/door is open"===e}_getLockIcon(t){if(!t)return"mdi:shield-lock";switch(t.state){case"locked":case"locking":return"mdi:shield-lock";case"unlocked":case"unlocking":case"open":case"opening":return"mdi:shield-lock-open";default:return"mdi:shield-alert"}}_getLockColorVar(t){if(!t)return"var(--state-lock-locked-color, var(--primary-text-color))";switch(t.state){case"locked":return"var(--state-lock-locked-color, var(--success-color, #4caf50))";case"locking":return"var(--state-lock-locking-color, var(--info-color, #2196f3))";case"unlocked":return"var(--state-lock-unlocked-color, var(--warning-color, #ff9800))";case"unlocking":return"var(--state-lock-unlocking-color, var(--info-color, #2196f3))";case"open":return"var(--state-lock-open-color, var(--warning-color, #ff9800))";case"opening":return"var(--state-lock-opening-color, var(--info-color, #2196f3))";case"jammed":return"var(--state-lock-jammed-color, var(--error-color, #f44336))";default:return"var(--error-color, #f44336)"}}_getStateText(t){if(!t)return"";const e=t.state,s=t=>t.charAt(0).toUpperCase()+t.slice(1);switch(t.entity_id.split(".")[0]){case"cover":case"lock":case"media_player":case"climate":case"vacuum":case"person":case"device_tracker":return s(e);default:return this._isEntityActive(t)?"On":"Off"}}_handlePointerDown(){this._held=!1,ft(this._config?.hold_action)&&(this._holdTimeout=setTimeout(()=>{this._held=!0,this._executeAction("hold")},500))}_handlePointerUp(){this._holdTimeout&&(clearTimeout(this._holdTimeout),this._holdTimeout=void 0)}_handleClick(){this._held?this._held=!1:ft(this._config?.double_tap_action)?this._dblClickTimeout?(clearTimeout(this._dblClickTimeout),this._dblClickTimeout=void 0,this._executeAction("double_tap")):this._dblClickTimeout=setTimeout(()=>{this._dblClickTimeout=void 0,this._executeAction("tap")},250):this._executeAction("tap")}_executeAction(t){if(!this.hass||!this._config)return;const e=this._config[`${t}_action`];if(e&&"none"!==e.action)switch(e.action){case"toggle":this._config.entity&&this.hass.callService("homeassistant","toggle",{entity_id:this._config.entity});break;case"more-info":if(this._config.entity||e.entity){const t=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e.entity||this._config.entity}});this.dispatchEvent(t)}break;case"navigate":if(e.navigation_path){history.pushState(null,"",e.navigation_path);const t=new Event("location-changed",{bubbles:!0,composed:!0});this.dispatchEvent(t)}break;case"url":e.url_path&&window.open(e.url_path,"_blank");break;case"call-service":if(e.service){const[t,s]=e.service.split(".");this.hass.callService(t,s,e.service_data||{},e.target)}break;case"fire-dom-event":mt(this,"ll-custom",e)}}updated(t){super.updated(t),this._config?.grid_area&&(this.style.gridArea=this._config.grid_area)}render(){if(!this._config||!this.hass)return B`<ha-card>Loading...</ha-card>`;const t=this._config.entity?this.hass.states[this._config.entity]:void 0,e=this._config.temp_sensor?this.hass.states[this._config.temp_sensor]:void 0,s=this._config.humidity_sensor?this.hass.states[this._config.humidity_sensor]:void 0,i=this._config.power_sensor?this.hass.states[this._config.power_sensor]:void 0,o=this._config.motion_sensor?this.hass.states[this._config.motion_sensor]:void 0,n=this._config.pet_sensor?this.hass.states[this._config.pet_sensor]:void 0,r=this._config.person_sensor?this.hass.states[this._config.person_sensor]:void 0,a=this._config.vehicle_sensor?this.hass.states[this._config.vehicle_sensor]:void 0,c=this._config.door_sensor?this.hass.states[this._config.door_sensor]:void 0,l=this._config.window_sensor?this.hass.states[this._config.window_sensor]:void 0,h=this._config.lock_entity?this.hass.states[this._config.lock_entity]:void 0,d=this._isEntityActive(t),p="on"===o?.state,u="on"===n?.state,_="on"===r?.state,m="on"===a?.state,f=this._isDoorOpen(c),g=this._isWindowOpen(l),y=this._getLockIcon(h),$=this._getLockColorVar(h),v=t?.attributes?.rgb_color,b=this._config.name||t?.attributes?.friendly_name||this._config.entity||"Sensor Card",w=this._config.icon||"mdi:lightbulb",A=v&&d?`background-color: rgba(${v[0]}, ${v[1]}, ${v[2]}, 0.2)`:"",S=v&&d?`color: rgb(${v[0]}, ${v[1]}, ${v[2]})`:"",x=!1!==this._config.show_name,E=!1!==this._config.show_icon,k=!0===this._config.show_state,C=this._getStateText(t);return B`
      <ha-card
        class="${d?"state-on":"state-off"}"
        @pointerdown=${this._handlePointerDown}
        @pointerup=${this._handlePointerUp}
        @pointercancel=${this._handlePointerUp}
        @click=${this._handleClick}
      >
        <!-- Name -->
        ${x?B`<div class="name">${b}${k&&C?B` <span class="state-text">${C}</span>`:W}</div>`:B`<div class="name"></div>`}

        <!-- Icon Container (img_cell) -->
        ${E?B`
              <div class="icon-container" style="${A}">
                <ha-icon .icon=${w} style="${S}"></ha-icon>
              </div>
            `:B`<div class="icon-container hidden"></div>`}

        <!-- Sensors (temp area) -->
        <div class="sensors">
          ${e?B`<span class="temp">${this._parseValue(e.state)}°</span>`:W}
          ${s?B`<span class="humidity">${this._parseValue(s.state)}%</span>`:W}
          ${i?B`<span class="power">${this._parseValue(i.state)}W</span>`:W}
          ${e||s||i||t?W:B`<span class="placeholder">Configure entities</span>`}
        </div>

        <!-- Binary Sensors Row -->
        <div class="binary-sensors">
          ${h?B`<ha-icon
                class="lock-icon"
                icon="${y}"
                style="color: ${$};"
              ></ha-icon>`:W}
          ${c?B`<ha-icon
                class="binary-sensor ${f?"active":"inactive"}"
                icon="${f?"mdi:door-open":"mdi:door-closed"}"
              ></ha-icon>`:W}
          ${l?B`<ha-icon
                class="binary-sensor ${g?"active":"inactive"}"
                icon="${g?"mdi:window-open":"mdi:window-closed"}"
              ></ha-icon>`:W}
          ${r?B`<ha-icon
                class="binary-sensor ${_?"active":"inactive"}"
                icon="${_?"mdi:account":"mdi:account-off"}"
              ></ha-icon>`:W}
          ${n?B`<ha-icon
                class="binary-sensor ${u?"active":"inactive"}"
                icon="${u?"mdi:paw":"mdi:paw-off"}"
              ></ha-icon>`:W}
          ${a?B`<ha-icon
                class="binary-sensor ${m?"active":"inactive"}"
                icon="${m?"mdi:car":"mdi:car-off"}"
              ></ha-icon>`:W}
          ${o?B`<ha-icon
                class="binary-sensor ${p?"active":"inactive"}"
                icon="${p?"mdi:motion-sensor":"mdi:motion-sensor-off"}"
              ></ha-icon>`:W}
        </div>
      </ha-card>
    `}getCardSize(){return 2}};$t.styles=r`
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
      background-color: var(--card-background-color);
      border: 1px solid var(--primary-text-color);
    }

    ha-card.state-off {
      background-color: color-mix(in srgb, var(--card-background-color) 50%, transparent);
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
      background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.1));
      transition: background-color 1.2s ease;
    }

    .icon-container.hidden {
      visibility: hidden;
    }

    /* Icon - matches your styles.icon */
    .icon-container ha-icon {
      width: 35px;
      height: 35px;
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
  `,t([dt({attribute:!1})],$t.prototype,"hass",void 0),t([pt()],$t.prototype,"_config",void 0),$t=t([ct("sensor-display-card")],$t),window.customCards=window.customCards||[],window.customCards.push({type:"sensor-display-card",name:"Sensor Display Card",description:"A card displaying RGB lights with temperature, humidity, power, and motion sensors",preview:!0,documentationURL:"https://github.com/hunt41lb/sensor-display-card"});export{$t as SensorDisplayCard,yt as SensorDisplayCardEditor};
