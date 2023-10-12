/*! @maps4html/web-map-custom-element 06-11-2023 */

class MapLink extends HTMLElement{static get observedAttributes(){return["type","rel","title","href","hreflang","tref","tms","projection"]}get type(){return this.getAttribute("type")}set type(t){"text/mapml"!==t&&!t.startsWith("image/")||this.setAttribute("type",t)}get rel(){return this.getAttribute("rel")}set rel(t){["license","alternate","self","style","tile","image","features","zoomin","zoomout","legend","query","stylesheet"].includes(t)&&this.setAttribute("type",t)}get title(){return this.getAttribute("title")}set title(t){t&&this.setAttribute("title",t)}get href(){return this.getAttribute("href")}set href(t){t&&this.setAttribute("href",t)}get hreflang(){return this.getAttribute("hreflang")}set hreflang(t){t&&this.setAttribute("hreflang",t)}get tref(){return this.getAttribute("tref")}set tref(t){t&&this.setAttribute("tref",t)}get tms(){return this.hasAttribute("tms")}set tms(t){t&&this.setAttribute("tms","")}get projection(){return this.getAttribute("projection")}set projection(t){["OSMTILE","CBMTILE","WGS84","APSTILE"].includes(t)&&this.setAttribute("projection",t)}attributeChangedCallback(t,e,r){t}constructor(){super()}connectedCallback(){}disconnectedCallback(){}resolve(){if(this.tref){let e={};var r=this.parentElement.querySelectorAll("map-input");if("image"===this.rel){for(let t=0;t<r.length;t++){var i=r[t];e[i.name]=i.value}return console.log(e),L.Util.template(this.tref,e)}if("tile"===this.rel)return e;"query"===this.rel||this.rel}}}export{MapLink};
//# sourceMappingURL=map-link.js.map