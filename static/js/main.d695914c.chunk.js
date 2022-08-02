(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(61)},31:function(e,t,a){},32:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),o=a.n(l),c=(a(31),a(32),a(1)),i=a(4),m="https://example-data.draftbit.com/books?_limit=50",u=a(8),s=a.n(u),d=a(11),v=Object(n.createContext)([]),E=function(){var e=Object(n.useContext)(v);if(void 0===e)throw new Error("Appcontext must be within appContextProvider!");return e},f=function(e){var t=e.children,a=Object(n.useState)([]),l=Object(i.a)(a,2),o=l[0],c=l[1];return r.a.createElement(v.Provider,{value:{favorites:o,addToFavorites:function(e){var t=Object(d.a)(o).concat(e);c(t)},removeFromFavorites:function(e){var t=Object(d.a)(o).filter(function(t){return t.id!==e});c(t)}}},t)};a(55);var b=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],o=E(),u=o.favorites,d=o.addToFavorites,v=o.removeFromFavorites,f=Object(c.f)();return Object(n.useEffect)(function(){s.a.get(m).then(function(e){console.log(e.data),l(e.data)}).catch(function(e){return console.log(e)})},[]),r.a.createElement("div",{className:"booklist"},a.map(function(e){return r.a.createElement("div",{key:e.id,className:"book"},r.a.createElement("div",null,r.a.createElement("h4",null,e.title)),r.a.createElement("div",null,r.a.createElement("img",{src:e.image_url,alt:"#",onClick:function(){return f("/books/".concat(e.id))}})),r.a.createElement("div",null,(t=e.id,u.some(function(e){return e.id===t})?r.a.createElement("button",{onClick:function(){return v(e.id)}},"Remove from Favorites"):r.a.createElement("button",{onClick:function(){return d(e)}},"Add to Favorites"))));var t}))},h=(a(56),a(5)),p=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",null,r.a.createElement("h1",null,"React Books App")),r.a.createElement("div",{className:"navbar-element"},r.a.createElement(h.b,{to:"/favorites"},r.a.createElement("div",null," ",r.a.createElement("h3",null,"Your Favorites")))))},g=(a(57),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Books App 2022\xa9"))});a(58);var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-section"},r.a.createElement("div",{className:"logo-section"},r.a.createElement("h3",null," "),r.a.createElement("img",{src:"https://media.allauthor.com/images/poster/original/1529479637920-a-room-without-books-is-like-a-body-without-a-soul.jpg",alt:"#"})),r.a.createElement("div",{className:"search-section"},r.a.createElement("h2",null," Find books here "),r.a.createElement("img",{src:"https://us.123rf.com/450wm/lenm/lenm1210/lenm121000033/15590717-illustration-of-stick-kids-reading-books-from-piles-of-reading-materials.jpg?ver=6",alt:"#"}))))},F=(a(59),function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(c.g)().id;return Object(n.useEffect)(function(){s.a.get("".concat("https://example-data.draftbit.com/books/","/").concat(o)).then(function(e){l(e.data)}).catch(function(e){return console.log(e)})},[o]),r.a.createElement("div",{className:"book-details"},r.a.createElement("div",{className:"book-image"},r.a.createElement("h2",null,a.title),r.a.createElement("img",{src:a.image_url,alt:"book-img"})),r.a.createElement("div",{className:"book-description"},r.a.createElement("h2",null,"Description"),r.a.createElement("p",null,a.description),r.a.createElement("h2",null,"Authors"),r.a.createElement("p",null,a.authors),r.a.createElement("h2",null,"Genres"),r.a.createElement("p",null,a.genres)))});a(60);var j=function(){var e=E(),t=e.favorites,a=e.addToFavorites,n=e.removeFromFavorites;return console.log("favorites are",t),r.a.createElement("div",{className:"favorites"},t.length>0?t.map(function(e){return r.a.createElement("div",{key:e.id,className:"book"},r.a.createElement("div",null,r.a.createElement("h4",null,e.title)),r.a.createElement("div",null,r.a.createElement("img",{src:e.image_url,alt:"#"})),r.a.createElement("div",null,(l=e.id,t.some(function(e){return e.id===l})?r.a.createElement("button",{onClick:function(){return n(e.id)}},"Remove from Favorites"):r.a.createElement("button",{onClick:function(){return a(e)}},"Add to Favorites"))));var l}):r.a.createElement("h1",null,"You don't have any favorite books yet!"))};var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(k,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",element:r.a.createElement(b,null)}),r.a.createElement(c.a,{path:"/books/:id",element:r.a.createElement(F,null)}),r.a.createElement(c.a,{path:"/favorites",element:r.a.createElement(j,null)})),r.a.createElement(g,null))},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,null,r.a.createElement(f,null,r.a.createElement(N,null))))),O()}},[[23,1,2]]]);
//# sourceMappingURL=main.d695914c.chunk.js.map