(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{40:function(e,t,c){"use strict";var s=c(41),n=c.n(s),i=c(11),o=c(1);t.a=function(){return Object(o.jsxs)("div",{className:n.a.noquotes,children:[Object(o.jsx)("p",{children:"No quotes found!"}),Object(o.jsx)(i.a,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})}},41:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},47:function(e,t,c){e.exports={item:"QuoteItem_item__2dOvb"}},48:function(e,t,c){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},57:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(14),i=c(47),o=c.n(i),r=c(11),a=c(1),u=function(e){return Object(a.jsxs)("li",{className:o.a.item,children:[Object(a.jsxs)("figure",{children:[Object(a.jsx)("blockquote",{children:Object(a.jsx)("p",{children:e.text})}),Object(a.jsx)("figcaption",{children:e.author})]}),Object(a.jsx)(r.a,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},d=c(48),j=c.n(d),l=function(e){var t,c,i=Object(n.useHistory)(),o=Object(n.useLocation)(),r="asc"===new URLSearchParams(o.search).get("sort"),d=(t=e.quotes,c=r,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id>t.id?-1:1})));return Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("div",{onClick:function(){i.push({pathname:o.pathname,search:"?sort=".concat(r?"desc":"asc")})},className:j.a.sorting,children:Object(a.jsxs)("button",{children:["Sort ",r?"Descending":"Ascending"]})}),Object(a.jsx)("ul",{className:j.a.list,children:d.map((function(e){return Object(a.jsx)(u,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},b=c(37),h=c(36),x=c(15),O=c(40);t.default=function(){var e=Object(h.a)(b.d,!0),t=e.sendRequest,c=e.status,n=e.data,i=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===c?Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(x.a,{})}):i?Object(a.jsx)("p",{className:"centered focused",children:i}):"completed"!==c||n&&0!==n.length?Object(a.jsx)(s.Fragment,{children:Object(a.jsx)(l,{quotes:n})}):Object(a.jsx)(O.a,{})}}}]);
//# sourceMappingURL=5.8934d7fc.chunk.js.map