(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1KBa":function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=n("Ff2n"),a=n("q1tI"),i=n.n(a),s=n("YFqc"),l=n.n(s),c=i.a.createElement;t.a=function(e){var t=e.href,n=Object(o.a)(e,["href"]);return c(l.a,r({href:t,as:"".concat("/bestfetch").concat(t)},n))}},"3K19":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("q1tI"),o=n.n(r),a=n("1KBa"),i=o.a.createElement;function s(){return i("div",{className:"page"},i("h1",null,"API"),i("p",null,"This library has a named export that you will use most often:"," ",i("code",null,"bestfetch"),". Most of the time it is all that you will need."),i("ul",null,i("li",null,i(a.a,{href:"/api-reference/bestfetch"},i("a",null,"bestfetch()")))),i("h2",null,"Other APIs"),i("p",null,"These are the other named exports of this library."),i("ul",null,i("li",null,i(a.a,{href:"/api-reference/response-cache"},i("a",null,"responseCache"))),i("li",null,i(a.a,{href:"/api-reference/active-requests"},i("a",null,"activeRequests"))),i("li",null,i(a.a,{href:"/api-reference/cache-miss-error"},i("a",null,"CacheMissError"))),i("li",null,i(a.a,{href:"/api-reference/get-request-key"},i("a",null,"getRequestKey()")))))}},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},Ix9q:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-reference",function(){return n("3K19")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("a1gu"),i=n("Nsbk"),s=n("7W2i"),l=n("TqRt"),c=n("284h");t.__esModule=!0,t.default=void 0;var u,f=c(n("q1tI")),p=n("QmWs"),h=n("g/15"),v=l(n("nOHt"));function d(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var y=new Map,w=window.IntersectionObserver,m={};function b(){return u||(w?u=new w((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var g=function(e){function t(e){var n;return r(this,t),(n=a(this,i(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:d(e),as:t?d(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),i=a.href,s=a.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var l=window.location.pathname;i=(0,p.resolve)(l,i),s=s?(0,p.resolve)(l,s):i,e.preventDefault();var c=n.props.scroll;null==c&&(c=s.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](i,s,{shallow:n.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return s(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,p.resolve)(e,n);return[o,r?(0,p.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),m[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),m[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var a=f.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),f.default.cloneElement(a,i)}}]),t}(f.Component);t.default=g}},[["Ix9q",0,1,2]]]);