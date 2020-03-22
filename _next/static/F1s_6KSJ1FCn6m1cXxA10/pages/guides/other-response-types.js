(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Qetd:function(e,o,n){"use strict";var s=Object.assign.bind(Object);e.exports=s,e.exports.default=e.exports},bgQO:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/other-response-types",function(){return n("woBH")}])},woBH:function(e,o,n){"use strict";n.r(o);var s=n("q1tI"),t=n.n(s),l=n("10ji"),r=n.n(l),a=t.a.createElement;o.default=function(){return a("div",{className:"page"},a("h1",null,"Other Response Types"),a("div",{className:"advanced"},a("span",{className:"emoji"},"\ud83d\udc81\u200d\u2640\ufe0f")," ",a("b",null,"Heads up!")," This is an advanced API that is not necessary for most apps."),a("p",null,"bestfetch assumes that all requests return JSON responses. If you have an endpoint that returns something other than JSON, then you must use the ",a("code",null,"responseType")," option when calling ",a("code",null,"bestfetch")," ","to configure how it will be parsed."),a("h2",null,"Using ",a("code",null,"responseType")),a("p",null,"The supported values for ",a("code",null,"responseType")," are all of the"," ",a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Body#Methods"},"Body mixin methods"),":"),a("ul",null,a("li",null,a("code",null,'"json"'),": Returns the result of parsing the response text as JSON."),a("li",null,a("code",null,'"text"'),": Returns a string of the response body."),a("li",null,a("code",null,'"formData"'),": Returns a"," ",a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData"},"FormData")," ","object from the response body."),a("li",null,a("code",null,'"blob"'),": Returns a"," ",a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"},"Blob")," ","from the response body."),a("li",null,a("code",null,'"arrayBuffer"'),": Returns an"," ",a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"},"ArrayBuffer")," ","from the response body.")),a("p",null,"For more information on these options, please reference"," ",a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Body#Methods"},"the Body mixin documentation")," ","on MDN."),a("p",null,"You may also pass a function as ",a("code",null,"responseType"),", which will be called with one argument, the ",a("code",null,"response"),". This allows you to inspect the response object before deciding how to parse it."),a("p",null,"The following example would support an endpoint that returns JSON for every request except for when the status code is ",a("code",null,"400"),"."),a(r.a,{language:"js",inline:!1,value:"bestfetch('/api/books/2', {\n  responseType(res) {\n    if (res.status === 400) {\n      return 'text';\n    } else {\n      return 'json';\n    }\n  }\n})\n  .then(handlResponse);"}))}}},[["bgQO",0,1,3]]]);