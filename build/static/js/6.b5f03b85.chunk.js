(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{44:function(e,t,c){e.exports={card:"Card_card__1m44e"}},45:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},56:function(e,t,c){"use strict";c.r(t);var o=c(42),n=c(0),r=c(14),s=c(44),a=c.n(s),i=c(1),u=function(e){return Object(i.jsx)("div",{className:a.a.card,children:e.children})},l=c(15),d=c(45),j=c.n(d),b=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),s=c[0],a=c[1],d=Object(n.useRef)(),b=Object(n.useRef)();return Object(i.jsxs)(u,{children:[Object(i.jsx)(r.Prompt,{when:s,message:function(e){return"Are you sure to leave? All your entered data will be lost!"}}),Object(i.jsxs)("form",{onFocus:function(){a(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,o=b.current.value;e.onAddQuote({author:c,text:o})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})]})},f=c(36),m=c(37);t.default=function(){var e=Object(r.useHistory)(),t=Object(f.a)(m.b),c=t.sendRequest,o=t.status;console.log(o),Object(n.useEffect)((function(){"completed"===o&&e.push("/quotes")}),[o,e]);return Object(i.jsx)(b,{isLoading:"pending"===o,onAddQuote:function(e){c(e)}})}}}]);
//# sourceMappingURL=6.b5f03b85.chunk.js.map