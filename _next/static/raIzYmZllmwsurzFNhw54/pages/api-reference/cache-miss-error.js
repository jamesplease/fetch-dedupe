(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1KBa":function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=n("Ff2n"),i=n("q1tI"),s=n.n(i),a=n("YFqc"),c=n.n(a),l=s.a.createElement;t.a=function(e){var t=e.href,n=Object(o.a)(e,["href"]);return l(c.a,r({href:t,as:"".concat("/bestfetch").concat(t)},n))}},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},NjYm:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("10ji"),s=n.n(i),a=n("1KBa"),c=o.a.createElement;t.default=function(){return c("div",{className:"page"},c("h1",null,c("code",null,"CacheMissError")),c("p",null,"An Error that represents a cache miss."),c(s.a,{language:"js",inline:!1,value:"import { CacheMissError } from 'bestfetch';"}),c("h2",null,"Usage"),c("p",null,"One of the options that you can pass to"," ",c(a.a,{href:"/api-reference/bestfetch"},c("a",null,c("code",null,"bestfetch")))," ","is ",c("code",null,"cachePolicy"),". If you specify your policy to be"," ",c("code",null,'"cache-only"')," and no response exists in the cache, then the Promise will reject."),c("p",null,"The error that you are passed will be an instance of"," ",c("code",null,"CacheMissError"),". You can use this export to determine if this is the cause of the rejection."),c(s.a,{language:"js",inline:!1,value:"bestfetch('https://jsonplaceholder.typicode.com/todos/1', {\n  cachePolicy: 'cache-only'\n})\n  .catch(err => {\n    if (typeof err === CacheMissError) {\n      console.log('This request did not having a response in the cache.');\n    }\n  });"}))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),s=n("Nsbk"),a=n("7W2i"),c=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,u=l(n("q1tI")),p=n("QmWs"),h=n("g/15"),v=c(n("nOHt"));function d(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var y=new Map,g=window.IntersectionObserver,m={};function w(){return f||(g?f=new g((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var b=function(e){function t(e){var n;return r(this,t),(n=i(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var s=e(o,i);return t=o,n=i,r=s,s}}((function(e,t){return{href:d(e),as:t?d(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,a=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var c=window.location.pathname;s=(0,p.resolve)(c,s),a=a?(0,p.resolve)(c,a):s,e.preventDefault();var l=n.props.scroll;null==l&&(l=a.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](s,a,{shallow:n.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return a(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,p.resolve)(e,n);return[o,r?(0,p.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),m[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),m[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=u.default.createElement("a",null,t));var i=u.Children.only(t),s={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),u.default.cloneElement(i,s)}}]),t}(u.Component);t.default=b},w9fK:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-reference/cache-miss-error",function(){return n("NjYm")}])}},[["w9fK",0,1,2,3]]]);