(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n("q1tI"),s=n.n(r),o=(n("YFqc"),s.a.createElement);function i(){return o("div",{className:"page"},o("div",{className:"hero"},o("h1",{className:"indexTitle"},"bestfetch"),o("div",{className:"badgeList"},o("a",{href:"https://travis-ci.org/jamesplease/bestfetch"},o("img",{src:"http://img.shields.io/travis/jamesplease/bestfetch.svg?style=flat",alt:"Travis build status"})),o("a",{href:"https://www.npmjs.com/package/bestfetch"},o("img",{src:"https://img.shields.io/npm/v/bestfetch.svg",alt:"npm version"})),o("a",{href:"https://coveralls.io/github/jamesplease/bestfetch?branch=master"},o("img",{src:"https://coveralls.io/repos/github/jamesplease/bestfetch/badge.svg?branch=master",alt:"Test Coverage"})),o("a",{href:"https://unpkg.com/bestfetch/lib/index.js"},o("img",{src:"http://img.badgesize.io/https://unpkg.com/bestfetch/lib/index.js?compression=gzip",alt:"gzip size"})))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),s=n("W8MJ"),o=n("a1gu"),i=n("Nsbk"),a=n("7W2i"),c=n("TqRt"),f=n("284h");t.__esModule=!0,t.default=void 0;var l,p=f(n("q1tI")),u=n("QmWs"),h=n("g/15"),v=c(n("nOHt"));function d(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var m=new Map,g=window.IntersectionObserver,b={};function w(){return l||(g?l=new g((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var y=function(e){function t(e){var n;return r(this,t),(n=o(this,i(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(s,o){if(r&&s===t&&o===n)return r;var i=e(s,o);return t=s,n=o,r=i,i}}((function(e,t){return{href:d(e),as:t?d(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,s=t.target;if("A"!==r||!(s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),i=o.href,a=o.as;if(function(e){var t=(0,u.parse)(e,!1,!0),n=(0,u.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,u.resolve)(c,i),a=a?(0,u.resolve)(c,a):i,e.preventDefault();var f=n.props.scroll;null==f&&(f=a.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](i,a,{shallow:n.props.shallow}).then((function(e){e&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return a(t,e),s(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,s=(0,u.resolve)(e,n);return[s,r?(0,u.resolve)(e,r):s]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,s=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),i={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=s||r),p.default.cloneElement(o,i)}}]),t}(p.Component);t.default=y},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2]]]);