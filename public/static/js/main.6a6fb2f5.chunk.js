(this["webpackJsonpmy-bookcase"]=this["webpackJsonpmy-bookcase"]||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/logo.b881b3fc.svg"},36:function(e,t,a){e.exports=a.p+"static/media/home.cb11c0c3.svg"},37:function(e,t,a){e.exports=a.p+"static/media/livro.2042e31c.svg"},38:function(e,t,a){e.exports=a.p+"static/media/delete.39b6b69a.svg"},39:function(e,t,a){e.exports=a.p+"static/media/back.099df60f.svg"},41:function(e,t,a){e.exports=a.p+"static/media/warning.6dfaa2f9.svg"},43:function(e,t,a){e.exports=a(62)},49:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),o=a(33),r=a.n(o),l=a(12),i=a(7),s=a(13),u=a(22);a(16),a(17),a(18);u.a.initializeApp({apiKey:"AIzaSyB9iQFoxg5BAuvZCcmmAgdiqDws42e8vlo",authDomain:"mybookcaseproject.firebaseapp.com",projectId:"mybookcaseproject",storageBucket:"mybookcaseproject.appspot.com",messagingSenderId:"1039419894988",appId:"1:1039419894988:web:b2fb308a804e9d98456669",measurementId:"G-7X5GBH4209"}),u.a.analytics();var m=u.a,p=a(34),d=a.n(p);a(49);var v=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],o=t[1],r="/bookcase/".concat(a);return c.a.createElement("div",{id:"page-landing"},c.a.createElement("div",{id:"page-landing-content",className:"container"},c.a.createElement("div",{className:"logo-container"},c.a.createElement("p",null,"Minha Estante"),c.a.createElement("h2",null,"Todos os seus livros em um s\xf3 lugar")),c.a.createElement("img",{src:d.a,alt:"Hero Img",className:"hero-image"}),c.a.createElement("div",{className:"button-login"},c.a.createElement("button",{id:"button",onClick:function(){console.log("mudan\xe7a de background");var e=new m.auth.GithubAuthProvider;m.auth().signInWithPopup(e).then((function(e){var t=e.credential;console.log(e);t.accessToken;var a=e.user;o(a.uid),console.log(a.uid)})).catch((function(e){e.code,e.message,e.email,e.credential}))}},"Github"),c.a.createElement(l.b,{to:r},a))))},b=a(36),f=a.n(b),g=a(37),E=a.n(g);var h=function(){var e=window.location.href.toString().replace("https://mybookcaseproject.web.app/",""),t="bookcase/".concat(e);return c.a.createElement("div",{id:"page-landing"},c.a.createElement("div",{id:"page-landing-content",className:"container"},c.a.createElement("div",{className:"logo-container"},c.a.createElement("p",null,"Minha Estante"),c.a.createElement("h2",null,"Todos os seus livros em um s\xf3 lugar")),c.a.createElement("img",{src:f.a,alt:"Hero Img",className:"hero-image"}),c.a.createElement("div",{className:"button-login"},c.a.createElement(l.b,{to:t,className:"login"},c.a.createElement("img",{src:E.a,alt:"Livro"}),"Minha estante"))))},k=a(38),j=a.n(k);a(54);a(55);var w=function(e){window.location.href.toString().replace("https://mybookcaseproject.web.app/","");var t=e.title;return c.a.createElement("div",{id:"container"},c.a.createElement("div",{id:"book"},c.a.createElement("div",{id:"book-cover"},c.a.createElement("img",{src:e.cover,alt:"Capa"})),c.a.createElement("div",{id:"book-data"},c.a.createElement("div",null,c.a.createElement("p",null,"T\xedtulo: ",e.title),c.a.createElement("p",null,"Autor: ",e.author),c.a.createElement("p",null,"G\xeanero: ",e.genre),c.a.createElement("p",null,"Nota: ",e.note,"/5")),c.a.createElement("div",null,c.a.createElement("img",{src:j.a,alt:"Delete",onClick:function(){window.confirm("Confirma a exclus\xe3o?")&&console.log("sim"),m.database().ref("bookcase").on("value",(function(e){e.forEach((function(e){e.val().title===t&&(e.ref.path.pieces_[0],e.ref.path.pieces_[1])}))}))}})))))},y=a(39),O=a.n(y);a(56);var N=function(e){return c.a.createElement("header",{className:"page-header"},c.a.createElement("div",{className:"top-bar-container"},c.a.createElement(l.b,{to:e.path},c.a.createElement("img",{src:O.a,alt:"Voltar"})),c.a.createElement("div",{className:"header-content"},c.a.createElement("strong",null,e.title),e.description&&c.a.createElement("p",null,e.description),e.children)))};a(57);var S=function(){var e=Object(i.f)(),t=window.location.href.toString().replace("https://mybookcaseproject.web.app/",""),a="/".concat(t),o=Object(n.useState)([]),r=Object(s.a)(o,2),l=r[0],u=r[1];return Object(n.useEffect)((function(){!function(){var e=[];m.database().ref("bookcase").on("value",(function(a){a.forEach((function(a){console.log(a.val().userId," - ",t);var n={title:a.val().title,author:a.val().author,genre:a.val().genre,cover:a.val().cover,note:a.val().note};e.push(n)})),u(e)}))}()}),[]),c.a.createElement("div",{id:"page-user-form",className:"containerList"},c.a.createElement(N,{path:a,title:"Minha Estante"}),c.a.createElement("div",{id:"title"},c.a.createElement("button",{id:"register",onClick:function(){e.push("/register/".concat(t))}},"Cadastrar Livro")),c.a.createElement("main",null,l.map((function(e){return c.a.createElement(w,Object.assign({key:e.title},e))}))))},C=a(26),x=a.n(C),I=a(40),A=a(42);a(59);var G=function(e){var t=e.label,a=e.type,n=e.name,o=Object(A.a)(e,["label","type","name"]);return c.a.createElement("div",{className:"input-block"},c.a.createElement("label",{htmlFor:n},t," "),c.a.createElement("input",Object.assign({type:a,id:n},o,{required:!0})))},M=a(41),T=a.n(M);a(60);var B=function(){var e=Object(i.f)(),t=window.location.href.toString().replace("https://mybookcaseproject.web.app/",""),a="/bookcase/".concat(t),o=Object(n.useState)(""),r=Object(s.a)(o,2),l=r[0],u=r[1],p=Object(n.useState)(""),d=Object(s.a)(p,2),v=d[0],b=d[1],f=Object(n.useState)(""),g=Object(s.a)(f,2),E=g[0],h=g[1],k=Object(n.useState)(""),j=Object(s.a)(k,2),w=j[0],y=j[1],O=Object(n.useState)(""),S=Object(s.a)(O,2),C=S[0],A=S[1];function M(){return(M=Object(I.a)(x.a.mark((function a(n){var c;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n.preventDefault(),c={userId:t,title:l,author:v,genre:E,cover:w,note:C},m.database().ref("bookcase").push(c).then((function(){alert("livro cadastrado com sucesso")})).then((function(){setTimeout((function(){e.push("/bookcase/".concat(t))}),2e3)})).catch((function(e){console.log(e.code),console.log(e.message),alert("Falha ao cadastrar, verifique o erro no console")}));case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return c.a.createElement("div",{id:"page-user-form",className:"container"},c.a.createElement(N,{path:a,title:"Minha Estante"}),c.a.createElement("main",null,c.a.createElement("form",{onSubmit:function(e){return M.apply(this,arguments)}},c.a.createElement("fieldset",null,c.a.createElement("legend",null,"Dados do livro"),c.a.createElement(G,{name:"title",label:"T\xedtulo",value:l,onChange:function(e){u(e.target.value)}}),c.a.createElement(G,{name:"author",label:"Autor",value:v,onChange:function(e){b(e.target.value)}}),c.a.createElement(G,{name:"genre",label:"G\xeanero",value:E,onChange:function(e){h(e.target.value)}}),c.a.createElement(G,{name:"cover",label:"Capa",value:w,onChange:function(e){y(e.target.value)}}),c.a.createElement(G,{name:"note",label:"Nota",type:"number",value:C,max:"5",min:"0",step:"0.1",onChange:function(e){A(e.target.value)}})),c.a.createElement("footer",null,c.a.createElement("p",null,c.a.createElement("img",{src:T.a,alt:"Aviso"}),"Importante! ",c.a.createElement("br",null),"Preencha todos os dados"),c.a.createElement("button",{type:"submit"},"Cadastrar livro")))))};var D=function(){return c.a.createElement(l.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",component:v,exact:!0}),c.a.createElement(i.a,{path:"/bookcase/*",component:S}),c.a.createElement(i.a,{path:"/register/*",component:B}),c.a.createElement(i.a,{path:"/*",component:h})))};a(61);var q=function(){return c.a.createElement(D,null)};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(q,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.6a6fb2f5.chunk.js.map