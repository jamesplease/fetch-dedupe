(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{YFqc:function(e,n,t){e.exports=t("cTJO")},bgQO:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/other-response-types",function(){return t("woBH")}])},cTJO:function(e,n,t){"use strict";var o=t("lwsE"),r=t("W8MJ"),s=t("a1gu"),l=t("Nsbk"),a=t("7W2i"),i=t("TqRt"),u=t("284h");n.__esModule=!0,n.default=void 0;var p,c=u(t("q1tI")),f=t("QmWs"),h=t("g/15"),d=i(t("nOHt"));function v(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var m=new Map,y=window.IntersectionObserver,b={};function g(){return p||(y?p=new y((function(e){e.forEach((function(e){if(m.has(e.target)){var n=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),m.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){function n(e){var t;return o(this,n),(t=s(this,l(n).call(this,e))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,o=null;return function(r,s){if(o&&r===n&&s===t)return o;var l=e(r,s);return n=r,t=s,o=l,l}}((function(e,n){return{href:v(e),as:n?v(n):n}})),t.linkClicked=function(e){var n=e.currentTarget,o=n.nodeName,r=n.target;if("A"!==o||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=t.formatUrls(t.props.href,t.props.as),l=s.href,a=s.as;if(function(e){var n=(0,f.parse)(e,!1,!0),t=(0,f.parse)((0,h.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(l)){var i=window.location.pathname;l=(0,f.resolve)(i,l),a=a?(0,f.resolve)(i,a):l,e.preventDefault();var u=t.props.scroll;null==u&&(u=a.indexOf("#")<0),d.default[t.props.replace?"replace":"push"](l,a,{shallow:t.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return a(n,e),r(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),t=n.href,o=n.as,r=(0,f.resolve)(e,t);return[r,o?(0,f.resolve)(e,o):r]}},{key:"handleRef",value:function(e){var n=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,n){var t=g();return t?(t.observe(e),m.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}m.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var n=this.getPaths();d.default.prefetch(n[0],n[1],e).catch((function(e){0})),b[n.join("%")]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),o=t.href,r=t.as;"string"===typeof n&&(n=c.default.createElement("a",null,n));var s=c.Children.only(n),l={ref:function(n){e.handleRef(n),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(n):"object"===typeof s.ref&&(s.ref.current=n))},onMouseEnter:function(n){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(n),e.prefetch({priority:!0})},onClick:function(n){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(l.href=r||o),c.default.cloneElement(s,l)}}]),n}(c.Component);n.default=w},woBH:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),r=t.n(o),s=t("10ji"),l=t.n(s),a=(t("YFqc"),r.a.createElement);n.default=function(){return a("div",{className:"page"},a("h1",null,"Other Response Types"),a("div",{className:"advanced"},a("span",{className:"emoji"},"\ud83d\udc81\u200d\u2640\ufe0f")," ",a("b",null,"Heads up!")," This is an advanced API that is not necessary for most apps."),a("p",null,"bestfetch assumes that all requests return JSON responses. If you have an endpoint that returns something other than JSON, then you must use the ",a("code",null,"responseType")," option when calling ",a("code",null,"bestfetch")," ","to configure how it will be parsed."),a("h2",null,"Using ",a("code",null,"responseType")),a("p",null,"The supported values for ",a("code",null,"responseType")," are all of the"," ",a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Body#Methods"},"Body mixin methods"),":"),a("ul",null,a("li",null,a("code",null,'"json"'),": Returns the result of parsing the response text as JSON."),a("li",null,a("code",null,'"text"'),": Returns a string of the response body."),a("li",null,a("code",null,'"formData"'),": Returns a"," ",a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData"},"FormData")," ","object from the response body."),a("li",null,a("code",null,'"blob"'),": Returns a"," ",a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"},"Blob")," ","from the response body."),a("li",null,a("code",null,'"arrayBuffer"'),": Returns an"," ",a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"},"ArrayBuffer")," ","from the response body.")),a("p",null,"For more information on these options, please reference"," ",a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Body#Methods"},"the Body mixin documentation")," ","on MDN."),a("p",null,"You may also pass a function as ",a("code",null,"responseType"),", which will be called with one argument, the ",a("code",null,"response"),". This allows you to inspect the response object before deciding how to parse it."),a("p",null,"The following example would support an endpoint that returns JSON for every request except for when the status code is ",a("code",null,"400"),"."),a(l.a,{language:"js",inline:!1,value:"bestfetch('/api/books/2', {\n  responseType(res) {\n    if (res.status === 400) {\n      return 'text';\n    } else {\n      return 'json';\n    }\n  }\n})\n  .then(handlResponse);"}))}}},[["bgQO",0,1,2,3]]]);