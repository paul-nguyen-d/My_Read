(this.webpackJsonpmyreads=this.webpackJsonpmyreads||[]).push([[0],{15:function(e,o,s){},16:function(e,o,s){},21:function(e,o,s){"use strict";s.r(o);var t=s(2),c=s(8),a=s.n(c),n=(s(15),s(16),s(24)),r=s(9);const l="https://reactnd-books-api.udacity.com";let h=localStorage.token;h||(h=localStorage.token=Math.random().toString(36).substr(-8));const j={Accept:"application/json",Authorization:h};var i=s(0);var b=e=>{const[o,s]=Object(t.useState)(e.shelf);return Object(i.jsx)("div",{className:"book-shelf-changer",children:Object(i.jsxs)("select",{value:o,onChange:o=>{o.preventDefault(),s(o.target.value),e.onMove(e.book,o.target.value)},children:[Object(i.jsx)("option",{value:"none",disabled:!0,children:"Move to..."}),Object(i.jsx)("option",{value:"currentlyReading",children:"Currently Reading"}),Object(i.jsx)("option",{value:"wantToRead",children:"Want to Read"}),Object(i.jsx)("option",{value:"read",children:"Read"}),Object(i.jsx)("option",{value:"none",children:"None"})]})})};var d=e=>{const{book:o,shelf:s,onMove:t}=e;return Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:"book",children:[Object(i.jsxs)("div",{className:"book-top",children:[Object(i.jsx)("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:`url(${o.imageLinks.thumbnail})`}}),Object(i.jsx)(b,{book:o,shelf:s,onMove:t})]}),Object(i.jsx)("div",{className:"book-title",children:o.title}),Object(i.jsx)("div",{className:"book-authors",children:o.authors&&o.authors.join(", ")})]})})};var v=e=>{const{shelf:o,books:s,onMove:t}=e,c=s.filter((e=>e.shelf===o.key));return Object(i.jsxs)("div",{className:"bookshelf",children:[Object(i.jsx)("h2",{className:"bookshelf-title",children:o.name}),Object(i.jsx)("div",{className:"bookshelf-books",children:Object(i.jsx)("ol",{className:"books-grid",children:c.map((e=>Object(i.jsx)(d,{book:e,shelf:o.key,onMove:t},e.id)))})})]})};var k=e=>{const{bookshelves:o,books:s,onMove:t}=e;return Object(i.jsx)("div",{className:"list-books-content",children:Object(i.jsx)("div",{children:o.map((e=>Object(i.jsx)(v,{shelf:e,books:s,onMove:t},e.key)))})})},u=s(23);var O=()=>Object(i.jsx)("div",{className:"open-search",children:Object(i.jsx)(u.a,{to:"Search",children:Object(i.jsx)("button",{children:"Add a Book"})})});var x=e=>{const{bookshelves:o,books:s,onMove:t}=e;return Object(i.jsxs)("div",{className:"list-books",children:[Object(i.jsx)("div",{className:"list-books-title",children:Object(i.jsx)("h1",{children:"MyReads"})}),Object(i.jsx)(k,{bookshelves:o,books:s,onMove:t}),Object(i.jsx)(O,{})]})};var m=e=>{const{myBooks:o,searchBooks:s,onMove:t}=e,c=s.map((e=>(o.map((o=>(o.id===e.id&&(e.shelf=o.shelf),o))),e)));return Object(i.jsx)("div",{className:"search-books-results",children:Object(i.jsx)("ol",{className:"books-grid",children:c.map((e=>Object(i.jsx)(d,{book:e,shelf:e.shelf?e.shelf:"none",onMove:t},e.id)))})})};var p=e=>{const{onResetSearch:o}=e;return Object(i.jsx)(u.a,{to:"/",children:Object(i.jsx)("button",{className:"close-search",onClick:o,children:"Close"})})};var f=e=>{const[o,s]=Object(t.useState)("");return Object(i.jsx)("div",{className:"search-books-input-wrapper",children:Object(i.jsx)("input",{type:"text",value:o,placeholder:"Search by title, author, or ISBN",onChange:o=>{o.preventDefault(),s(o.target.value),e.onSearch(o.target.value)},autoFocus:!0})})};var y=e=>{const{onSearch:o,onResetSearch:s}=e;return Object(i.jsxs)("div",{className:"search-books-bar",children:[Object(i.jsx)(p,{onResetSearch:s}),Object(i.jsx)(f,{onSearch:o})]})};var N=e=>{const{searchBooks:o,myBooks:s,onSearch:t,onResetSearch:c,onMove:a}=e;return Object(i.jsxs)("div",{className:"search-books",children:[Object(i.jsx)(y,{onSearch:t,onResetSearch:c}),Object(i.jsx)(m,{searchBooks:o,myBooks:s,onMove:a})]})};var S=()=>{const e=[{key:"currentlyReading",name:"Currently Reading"},{key:"wantToRead",name:"Want to Read"},{key:"read",name:"Have Read"}],[o,s]=Object(t.useState)([]),[c,a]=Object(t.useState)([]);Object(t.useEffect)((()=>{fetch(`${l}/books`,{headers:j}).then((e=>e.json())).then((e=>e.books)).then((e=>{s(e)}))}),[]);const h=(e,t)=>{((e,o)=>{fetch(`${l}/books/${e.id}`,{method:"PUT",headers:{...j,"Content-Type":"application/json"},body:JSON.stringify({shelf:o})}).then((e=>e.json()))})(e,t);let c=[];c=o.filter((o=>o.id!==e.id)),"none"!==t&&(e.shelf=t,c=c.concat(e)),s(c)},b=Object(r.debounce)(300,!1,(e=>{e.length>0?((e,o)=>fetch(`${l}/search`,{method:"POST",headers:{...j,"Content-Type":"application/json"},body:JSON.stringify({query:e,maxResults:o})}).then((e=>e.json())).then((e=>e.books)))(e).then((e=>{e.error?a([]):a(e)})):a([])})),d=()=>{a([])};return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(n.a,{exact:!0,path:"/",render:()=>Object(i.jsx)(x,{bookshelves:e,books:o,onMove:h})}),Object(i.jsx)(n.a,{path:"/search",render:()=>Object(i.jsx)(N,{searchBooks:c,myBooks:o,onSearch:b,onMove:h,onResetSearch:d})})]})},g=s(25);a.a.render(Object(i.jsx)(g.a,{children:Object(i.jsx)(S,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.35192696.chunk.js.map