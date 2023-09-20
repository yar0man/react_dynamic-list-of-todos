(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a,s=c(7),n=c.n(s),l=c(2),o=c(8),d=c(1),i=(c(13),c(14),c(3)),r=c.n(i),j=c(0),u=function(e){var t=e.todo,c=e.selectedTodo,a=e.onSelectedTodo,s=(null===c||void 0===c?void 0:c.id)===t.id;return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":s}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:t.id}),Object(j.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-success":t.completed,"has-text-danger":!t.completed}),children:t.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(t)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()("far",{"fa-eye":!s,"fa-eye-slash":s})})})})})]},t.id)},b=function(e){var t=e.todos,c=e.selectedTodo,a=e.onSelectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(u,{todo:e,selectedTodo:c,onSelectedTodo:a})}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(a||(a={}));c(16);var h=function(e){var t=e.query,c=e.onQueryChange,s=e.selectedFilter,n=e.onSelectedFilter;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsx)("select",{"data-cy":"statusSelect",className:"is-capitalized",value:s,onChange:function(e){n(e.target.value)},children:Object.values(a).map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")},"aria-label":"clearSearchButton"})})]})]})},m=(c(17),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x=function(e){var t=e.todo,c=e.onSelectedTodo,a=Object(d.useState)(null),s=Object(l.a)(a,2),n=s[0],o=s[1],i=Object(d.useState)(!1),u=Object(l.a)(i,2),b=u[0],h=u[1];return Object(d.useEffect)((function(){var e;h(!0),t.userId&&(e=t.userId,O("/users/".concat(e))).then(o).catch((function(e){console.log(e)})).finally((function(){return h(!1)}))}),[t.userId]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),b?Object(j.jsx)(m,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)},"aria-label":"modal-close"})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(j.jsx)("strong",{className:r()({"has-text-danger":!t.completed,"has-text-success":t.completed}),children:t.completed?"Done":"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})},f=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(d.useState)(null),i=Object(l.a)(n,2),r=i[0],u=i[1],f=Object(d.useState)(!1),v=Object(l.a)(f,2),p=v[0],N=v[1],y=Object(d.useState)(""),g=Object(l.a)(y,2),S=g[0],T=g[1],k=Object(d.useState)(a.All),C=Object(l.a)(k,2),w=C[0],F=C[1];Object(d.useEffect)((function(){N(!0),O("/todos").then((function(e){s(e)})).catch((function(e){console.log(e)})).finally((function(){return N(!1)}))}),[]);var I=Object(d.useMemo)((function(){return function(e,t,c){var s=Object(o.a)(e);if(t){var n=t.toLowerCase().trim();s=s.filter((function(e){return e.title.toLowerCase().includes(n)}))}return c&&(s=s.filter((function(e){var t=e.completed;switch(c){case a.Active:return!t;case a.Completed:return t;default:return s}}))),s}(c,S,w)}),[c,S,w]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(h,{query:S,onQueryChange:T,selectedFilter:w,onSelectedFilter:F})}),Object(j.jsx)("div",{className:"block",children:p?Object(j.jsx)(m,{}):Object(j.jsx)(b,{todos:I,selectedTodo:r,onSelectedTodo:u})})]})})}),r&&Object(j.jsx)(x,{todo:r,onSelectedTodo:u})]})};n.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1ca9804f.chunk.js.map