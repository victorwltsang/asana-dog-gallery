(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(142),i=n.n(o),s=n(0),u=n.n(s),c=n(145),l=n(4),d=n.n(l),g=n(141),p=n(147),m=(n(148),n(144)),h=n(149);function f(){var e=i()(["\n  margin-bottom: auto;\n\n  width: 100%;\n  max-width: 1200px;\n"]);return f=function(){return e},e}function v(){var e=i()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n  padding: 0 10%;\n"]);return v=function(){return e},e}var y=m.a.div(v()),w=m.a.main(f()),x=function(e){var t=e.children;return u.a.createElement(g.StaticQuery,{query:"755544856",render:function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(y,null,u.a.createElement(p.a,null),u.a.createElement(w,null,t),u.a.createElement(h.a,null)))},data:c})};x.propTypes={children:d.a.node.isRequired};var b=x,E=n(150),k=n(151),j=n.n(k);function I(e){var t=e.description,n=e.lang,a=e.meta,r=e.keywords,o=e.title;return u.a.createElement(g.StaticQuery,{query:P,render:function(e){var i=t||e.site.siteMetadata.description;return u.a.createElement(j.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})},data:E})}I.defaultProps={lang:"en",meta:[],keywords:[]},I.propTypes={description:d.a.string,lang:d.a.string,meta:d.a.array,keywords:d.a.arrayOf(d.a.string),title:d.a.string.isRequired};var q=I,P="1025518380";function A(){var e=i()(["\n  width: 100%;\n  height: 300px;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  transition: all 0.3s ease;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]);return A=function(){return e},e}function C(){var e=i()(["\n  overflow: hidden;\n"]);return C=function(){return e},e}function D(){var e=i()(["\n  border-radius: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return D=function(){return e},e}var M=m.a.div(D()),S=m.a.div(C()),G=m.a.div(A(),function(e){return Object(g.withPrefix)(e.dog.image)}),N=function(e){var t=e.dog,n=e.index,a=e.toggleModal;return u.a.createElement(M,{onClick:function(){return a(n)}},u.a.createElement(S,null,u.a.createElement(G,{dog:t})))},R=n(162),z=n(163);function Q(){var e=i()(["\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n  ",": 1rem;\n\n  svg {\n    font-size: 3rem;\n    color: white;\n    cursor: pointer;\n  }\n"]);return Q=function(){return e},e}function T(){var e=i()(["\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  svg {\n    font-size: 2.5rem;\n    color: white;\n    cursor: pointer;\n  }\n"]);return T=function(){return e},e}function Y(){var e=i()(["\n  max-width: 100%;\n  height: auto;\n  max-height: 90vh;\n  border-radius: 4px;\n  user-select: none;\n"]);return Y=function(){return e},e}function O(){var e=i()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return O=function(){return e},e}function U(){var e=i()(["\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  visibility: ",";\n  opacity: ",";\n  transition: all 0.4s ease;\n"]);return U=function(){return e},e}function H(){var e=i()(["\n  height: 100%;\n  width: 100%;\n  z-index: 100;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  visibility: ",";\n  opacity: ",";\n  transition: all 0.4s ease;\n"]);return H=function(){return e},e}var K=m.a.div(H(),function(e){return e.active?"visible":"hidden"},function(e){return e.active?1:0}),F=m.a.div(U(),function(e){return e.active?"visible":"hidden"},function(e){return e.active?1:0}),J=m.a.div(O()),L=m.a.img(Y()),V=m.a.div(T()),B=m.a.div(Q(),function(e){return"left"===e.direction?"left":"right"}),W=function(e){var t=e.active,n=e.toggleModal,a=e.showDog,r=e.totalDogs,o=e.dogPrevIndex,i=e.dogNextIndex,s=e.dogCarousel,c=a?a.image:"null",l=null,d=null;return l=-1===o?{display:"none"}:{display:"block"},d=i===r?{display:"none"}:{display:"block"},u.a.createElement(u.a.Fragment,null,u.a.createElement(K,{active:t},u.a.createElement(B,{onClick:function(){return s("prev")},direction:"left",style:l},u.a.createElement(z.a,null)),u.a.createElement(B,{onClick:function(){return s("next")},direction:"right",style:d},u.a.createElement(z.b,null)),u.a.createElement(V,{onClick:function(){return n(!1)}},u.a.createElement(z.c,null)),u.a.createElement(J,{onClick:function(){return n(!1)}},a?u.a.createElement(L,{src:Object(g.withPrefix)(c)}):null)),u.a.createElement(F,{active:t}))};function _(){var e=i()(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 30px;\n  grid-auto-rows: minmax(100px, auto);\n\n  @media only screen and (max-width: 980px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media only screen and (max-width: 767px) {\n    grid-template-columns: 1fr;\n  }\n"]);return _=function(){return e},e}var X=m.a.div(_()),Z=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={modalActive:!1,showDog:null,dogIndex:null,dogPrevIndex:null,dogNextIndex:null},t.toggleModal=function(e){t.setState({modalActive:!t.state.modalActive,showDog:R.a[e],dogIndex:e,dogPrevIndex:e-1,dogNextIndex:e+1})},t.dogCarousel=function(e){var n=null;switch(e){case"next":n=t.state.dogNextIndex;break;case"prev":n=t.state.dogPrevIndex}t.setState({showDog:R.a[n],dogIndex:n,dogPrevIndex:n-1,dogNextIndex:n+1})},t}return r()(t,e),t.prototype.render=function(){var e=this;return u.a.createElement(b,null,u.a.createElement(q,{title:"Home",keywords:["gatsby","application","react"]}),u.a.createElement(X,null,R.a.map(function(t,n){return u.a.createElement(N,{dog:t,key:n,index:n,toggleModal:e.toggleModal})})),u.a.createElement(W,{active:this.state.modalActive,toggleModal:this.toggleModal,showDog:this.state.showDog,dogCarousel:this.dogCarousel,dogPrevIndex:this.state.dogPrevIndex,dogNextIndex:this.state.dogNextIndex,totalDogs:R.a.length}))},t}(s.Component);t.default=Z},141:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return g}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(140),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(143),l=n.n(c);n.d(t,"PageRenderer",function(){return l.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var g=r.a.createContext({}),p=function(e){return r.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},143:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},146:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(54),u=n(2),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},147:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(){return r.a.createElement("header",{className:"site-header"},r.a.createElement("h1",null,"Puppy image gallery"),r.a.createElement("blockquote",{className:"site-header__quote"},r.a.createElement("p",null,"A dog will teach you unconditional love. If you can have that in your life, things won't be too bad."),r.a.createElement("cite",null,"—Robert Wagner")))}},148:function(e,t,n){},149:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(){return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("p",null,"Built by a wonderful developer for Asana."))}},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},162:function(e){e.exports={a:[{image:"/assets/images/raw/1.jpeg",source:"https://unsplash.com/photos/ybHtKz5He9Y"},{image:"/assets/images/raw/2.jpeg",source:"https://unsplash.com/photos/rY79kwEEyGo"},{image:"/assets/images/raw/3.jpeg",source:"https://unsplash.com/photos/ngqyo2AYYnE"},{image:"/assets/images/raw/4.jpeg",source:"https://unsplash.com/photos/9A64wd1QaAU"},{image:"/assets/images/raw/5.jpeg",source:"https://unsplash.com/photos/915UJQaxtrk"},{image:"/assets/images/raw/6.jpeg",source:"https://unsplash.com/photos/mx0DEnfYxic"},{image:"/assets/images/raw/7.jpeg",source:"https://unsplash.com/photos/OsOQhAzcEKc"},{image:"/assets/images/raw/8.jpeg",source:"https://unsplash.com/photos/6WneSv56YVI"},{image:"/assets/images/raw/9.jpeg",source:"https://unsplash.com/photos/CdVG9f96kyg"},{image:"/assets/images/raw/10.jpeg",source:"https://unsplash.com/photos/bVA2DI7c9e8"},{image:"/assets/images/raw/11.jpeg",source:"https://unsplash.com/photos/GvhSUEN-Lm8"},{image:"/assets/images/raw/12.jpeg",source:"https://unsplash.com/photos/t2XHKIdc4Kw"},{image:"/assets/images/raw/13.jpeg",source:"https://unsplash.com/photos/saRU3vzmgkY"},{image:"/assets/images/raw/14.jpeg",source:"https://unsplash.com/photos/1z-kI6gIEpg"},{image:"/assets/images/raw/15.jpeg",source:"https://unsplash.com/photos/zHZ2nTnBnAQ"}]}}}]);
//# sourceMappingURL=component---src-pages-index-js-0c866b06ac9c96132aef.js.map