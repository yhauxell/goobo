(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/dead-error.d208d3f9.svg"},,function(e,t,a){e.exports=a(42)},,,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),i=a.n(s),o=(a(19),a(1)),c=a(2),l=a(5),u=a(3),m=a(4),f=(a(20),a(6)),h=a.n(f),d=a(12),p=a(8),v=(a(23),a(24),a(7));a(25);var b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={term:""},a.handleSubmit=function(e,t,a){var n;return function(){var r=this,s=arguments,i=a&&!n;clearTimeout(n),n=setTimeout(function(){n=null,a||e.apply(r,s)},t),i&&e.apply(r,s)}}(a.handleSubmit.bind(Object(v.a)(Object(v.a)(a))),300),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search"},r.a.createElement("form",{role:"search","aria-label":"Search at Google Books",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("span",{className:"search__prepend"},r.a.createElement("i",{className:"fas fa-search"})),r.a.createElement("input",{title:"Type your search term",className:"search__input",type:"text",spellCheck:"false","aria-required":"false",placeholder:"Type your search term..",value:this.state.term,onChange:function(t){e.setState({term:t.target.value}),e.handleSubmit(t)}})))}},{key:"handleSubmit",value:function(e){this.props.searchBooks(this.state.term)}}]),t}(n.Component),k=(a(26),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"searchbar"},r.a.createElement(b,this.props))}}]),t}(n.Component));a(27);function g(){return r.a.createElement("div",{className:"logo"},r.a.createElement("i",{className:"fas fa-book"}),"Goobo")}var E=r.a.createContext({ids:[],books:{},size:0,order:"asc",filters:[],filter:null,term:"",current:null,pageSize:40,currentPage:1,total:0,paging:!1,actions:{searchBooks:function(){},changeCurrent:function(){},filterBooks:function(){},sortBooks:function(){},changePage:function(){}}});function N(){return r.a.createElement("div",{className:"top"},r.a.createElement(g,null),r.a.createElement(E.Consumer,null,function(e){var t=e.actions.searchBooks;return r.a.createElement(k,{searchBooks:t})}))}a(28),a(29),a(30),a(31);function w(e){var t=e.rating,a=t?20*t:0;return r.a.createElement("div",{className:"rating",title:"Book rating: "+(t||"0 ")+" stars"},r.a.createElement("div",{className:"rating-wrap"},r.a.createElement("span",{className:"stars-active",style:{width:"".concat(a,"%")}},r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"})),r.a.createElement("span",{className:"stars-inactive"},r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"}),r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"}))))}function _(e){if(e.current){var t=e.current,a=t.year,n=t.thumbnail,s=t.title,i=t.subtitle,o=t.authors,c=t.description,l=t.rating,u=t.previewLink,m=o&&o.map(function(e,t){return r.a.createElement("div",{className:"book-preview__author",key:t},e)});return r.a.createElement("div",{className:"book-preview",tabIndex:"0"},r.a.createElement("span",{className:"book-preview__year"},a),r.a.createElement("img",{className:"book-preview__preview",src:n||"".concat(window.location.href,"/notfound.png"),alt:s}),r.a.createElement("span",{className:"book-preview__preview-link"},r.a.createElement("a",{href:u,title:"Go to preview at Google Books",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-external-link-alt"}))),r.a.createElement("h1",{className:"book-preview__title","aria-label":"Book Title"},s,r.a.createElement("small",{"arial-level":"2"},i)),r.a.createElement("div",{className:"book-preview__authors"},m),r.a.createElement("div",{className:"book-preview__rating"},r.a.createElement(w,{rating:l})),r.a.createElement("div",{className:"book-preview__description"},c))}return r.a.createElement("p",{className:"no-book-preview"},"No Book Selected")}a(32);var y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={active:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.f,n=t.ami,s=t.filterBooks;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"sidebar__books-filters__filter"+(n?" sidebar__books-filters__filter--active":"")},r.a.createElement("a",{title:n?"Click again to unselect me":"Click to select me",href:"#click",onClick:function(t){var r=!(e.state.active&&n);e.setState({active:r}),t.preventDefault(),s(r?a:null)}},a)))}}]),t}(n.Component);function j(e){return r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-circle-notch fa-spin"})," ",e.message||"Loading...")}function O(e){var t=e.filter,a=e.filters,n=e.filterBooks;return r.a.createElement("div",{className:"sidebar__books-filters-container"},r.a.createElement("h4",{tabIndex:"0","aria-label":"List with years filter, navigate with keyboard and hit neter to select one."},r.a.createElement("i",{className:"fas fa-filter"})," Show only"),r.a.createElement("ul",{className:"sidebar__books-filters"},a&&a.length>0&&a.map(function(e){return r.a.createElement(y,Object.assign({key:e},{f:e,ami:t===e,filterBooks:n}))})||r.a.createElement(j,{message:"Loading filters..."})))}function B(){var e=window.matchMedia&&window.matchMedia("(max-width: 991px)").matches;return r.a.createElement(E.Consumer,null,function(t){var a=t.filter,n=t.filters,s=t.actions.filterBooks,i=t.current;return r.a.createElement("aside",{className:"sidebar"},r.a.createElement("div",{className:"sidebar__books-filters-list"},r.a.createElement(O,{filter:a,filters:n,filterBooks:s})),e?null:r.a.createElement("div",{className:"sidebar__book-preview"},r.a.createElement(_,{current:i})))})}a(33),a(34);function S(e){var t=e.authors,a=null;return t&&t.length>0&&(a=e.authors[0],a+=t.length>=2?" +".concat(e.authors.length-1):""),a?r.a.createElement(r.a.Fragment,null,a):null}function C(e){var t=e.id,a=e.title,n=e.authors,s=e.description,i=e.year,o=e.rating,c=e.thumbnail,l=e.previewLink,u=window.matchMedia&&window.matchMedia("(max-width: 991px)").matches;return r.a.createElement("div",{className:"book",tabIndex:"0"},r.a.createElement("span",{className:"book__year"},i||"----"),r.a.createElement("img",{className:"book__preview",src:c||"".concat(window.location.href,"/notfound.png"),alt:a,onClick:function(){e.onSelect(t)}}),u?r.a.createElement("span",{className:"preview__preview-link"},r.a.createElement("a",{href:l,title:"Go to preview at Google Books",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-external-link-alt"}))):null,r.a.createElement("h2",{className:"book__title"},a),r.a.createElement("div",{className:"book__authors"},r.a.createElement(S,{authors:n})),r.a.createElement("div",{className:"book__rating"},r.a.createElement(w,{rating:o})),u?r.a.createElement("div",{className:"book__description"},s):null)}a(35),a(36);var x=a(11),z=a.n(x);function P(e){return r.a.createElement("section",{className:"error-screen"},r.a.createElement("img",{className:"error-screen__img",src:z.a,alt:e.message}),r.a.createElement("p",null,e.message))}var I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={books:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(E.Consumer,null,function(e){var t=e.error,a=e.ids,n=e.books,s=e.total,i=e.actions.changeCurrent;return t?r.a.createElement(P,{message:t.message}):r.a.createElement("section",{className:"books-list"},s>0?a.map(function(e){return r.a.createElement(C,Object.assign({key:e},n[e],{onSelect:function(e){return i(e)}}))}):r.a.createElement(j,{message:"Searching books..."}))})}}]),t}(n.Component);a(37);function G(e){var t=e.order,a=e.sortBooks;return r.a.createElement("div",{className:"sort-by"},r.a.createElement("button",{"aria-label":"asc"===t?"ordered ascendant, click to order in descendant order.":"ordered descendant, click to order in ascendant order.",className:"sort-by__btn sort-by__btn--"+t,onClick:function(){return a("asc"===t?"desc":"asc")}},r.a.createElement("i",{className:"fas fa-calendar-alt"})," ","asc"===t?r.a.createElement("i",{className:"fas fa-sort-amount-down"}):r.a.createElement("i",{className:"fas fa-sort-amount-up"})))}a(38);function L(e){return r.a.createElement("span",{className:"total"},"Displaying ",e.size," of ",e.total," books for \xa0",r.a.createElement("strong",null,'"',e.term,'"'))}a(39);function M(){return r.a.createElement(E.Consumer,null,function(e){var t=e.total,a=e.size,n=e.order,s=e.term,i=e.actions.sortBooks;return r.a.createElement("section",{className:"books-toolbar"},r.a.createElement(L,{total:t,size:a,term:s}),r.a.createElement(G,{order:n,sortBooks:i}),t>0?r.a.createElement("div",{className:"books-toolbar__disclaimer"},r.a.createElement("i",{className:"fas fa-exclamation-triangle"})," ","Disclaimer: Google Books API may return duplicated books"):null)})}a(40),a(41);function T(e){for(var t=e.currentPage,a=e.pageSize,n=e.total,s=e.paging,i=e.changePage,o=n>a?Math.ceil(n/a):1,c=[],l=function(e){var a=e+1,n=parseInt(t)===a;c.push(r.a.createElement("li",{onClick:function(){i(a)},key:a,className:"pagination__page"+(n?" pagination__page--active":"")},s&&n?r.a.createElement("i",{className:"fas fa-circle-notch fa-spin"}):a))},u=0;u<o;u++)l(u);return r.a.createElement("ul",{className:"pagination"},c)}function D(){return r.a.createElement("section",{className:"books-footer"},r.a.createElement("div",{className:"books-footer__pagination"},r.a.createElement(E.Consumer,null,function(e){var t=e.pageSize,a=e.currentPage,n=e.total,s=e.paging,i=e.actions.changePage;return r.a.createElement(T,{pageSize:t,currentPage:a,total:n,paging:s,changePage:i})})))}function A(){return r.a.createElement("div",{className:"content"},r.a.createElement("aside",{className:"aside"},r.a.createElement(B,null)),r.a.createElement("article",{className:"article"},r.a.createElement(M,null),r.a.createElement(I,null),r.a.createElement(D,null)))}var q=function(){function e(){Object(o.a)(this,e),this.url="https://www.googleapis.com/books/v1/volumes?q="}return Object(c.a)(e,[{key:"getBooks",value:function(){var e=Object(p.a)(h.a.mark(function e(t){var a,n,r,s,i,o,c,l,u,m,f,d,p=arguments;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>1&&void 0!==p[1]?p[1]:0,n=p.length>2&&void 0!==p[2]?p[2]:40,r={method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"},e.next=5,fetch("".concat(this.url).concat(t,"&maxResults=").concat(n,"&orderBy=newest&startIndex=").concat(a),r).then(function(e){return e.json()});case 5:if((s=e.sent).items&&0!==s.items.length){e.next=8;break}throw new Error("No books found, try with another search term.");case 8:for(i={},o=[],c=new Set,l=0;l<s.items.length;l++)u=s.items[l],m=u.id,o.includes(m)&&(f=Math.floor(1e3*Math.random()).toString(16),m+=f,u.id=m),o.push(m),(d=this.createSimpleBook(u)).year&&c.add(d.year),i[m]=d;return e.abrupt("return",{ids:o,books:i,size:o.length,total:s.totalItems,filters:Array.from(c).sort(),current:i[o[0]]});case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"createSimpleBook",value:function(e){var t=e.id,a=e.volumeInfo,n=a.title,r=a.subtitle,s=a.authors,i=a.description,o=a.publishedDate,c=a.averageRating,l=a.imageLinks,u=a.previewLink,m=l?l.smallThumbnail:null;return{id:t,title:n,subtitle:r,authors:s,description:i,year:o&&o.split("-")[0],rating:c,thumbnail:m,previewLink:u}}}]),e}(),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={error:null,errorInfo:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?r.a.createElement(P,{message:this.state.error&&this.state.error.toString()}):this.props.children}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={ids:[],books:{},size:0,order:"asc",filters:[],filter:null,term:"electric vehicles",current:null,pageSize:40,currentPage:1,total:0,paging:!1,actions:{searchBooks:function(e){return a.searchBooks(e)},changeCurrent:function(e){return a.changeCurrent(e)},filterBooks:function(e){return a.filterBooks(e)},sortBooks:function(e){return a.sortBooks(e)},changePage:function(e){return a.changePage(e)}},error:null},a.service=new q,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getBooks(this.state.term)}},{key:"render",value:function(){return r.a.createElement("main",{className:"main-page"},r.a.createElement(E.Provider,{value:this.state},r.a.createElement(N,null),r.a.createElement(F,null,r.a.createElement(A,null))))}},{key:"changeCurrent",value:function(e){this.setState({current:this.state.books[e]})}},{key:"searchBooks",value:function(e){this.setState({currentPage:1}),this.getBooks(e)}},{key:"getBooks",value:function(){var e=Object(p.a)(h.a.mark(function e(t){var a,n,r,s=arguments;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=s.length>1&&void 0!==s[1]?s[1]:0,n=s.length>2&&void 0!==s[2]?s[2]:40,t){e.next=5;break}return this.setState({size:0,error:{message:"Search term can not be empty."}}),e.abrupt("return");case 5:return this.setState({term:t,error:null}),e.prev=6,e.next=9,this.service.getBooks(t,a,n);case 9:return r=e.sent,this.setState(Object(d.a)({},r)),this.original={ids:r.ids},e.abrupt("return",!0);case 15:return e.prev=15,e.t0=e.catch(6),this.setState({size:0,total:0,error:e.t0}),e.abrupt("return",!1);case 19:case"end":return e.stop()}},e,this,[[6,15]])}));return function(t){return e.apply(this,arguments)}}()},{key:"filterBooks",value:function(e){var t=this;if(this.state.size>0){var a=this.original.ids.filter(function(a){var n=t.state.books[a];return n.year&&(n.year===e||null===e)});this.setState({ids:a,size:a.length,current:this.state.books[a[0]],filter:e})}}},{key:"sortBooks",value:function(e){this.setState({order:e});var t=this.state.ids,a=Object.values(this.state.books).filter(function(e){return t.includes(e.id)});a.sort(function(t,a){return"asc"===e?t.year>a.year?-1:1:t.year<a.year?-1:1}),t=a.map(function(e){return e.id}),this.setState({ids:t})}},{key:"changePage",value:function(e){var t=this,a=this.state,n=a.term,r=a.pageSize;this.setState({currentPage:e,paging:!0});var s=(e-1)*r,i=0===s?0:1+s;this.getBooks(n,i,r).then(function(e){t.setState({paging:!1})})}}]),t}(n.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(J,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,1,2]]]);
//# sourceMappingURL=main.c245eca6.chunk.js.map