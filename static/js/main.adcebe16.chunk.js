(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,a,t){},142:function(e,a,t){},145:function(e,a,t){},147:function(e,a,t){},150:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(6),r=t.n(o),l=t(14),c=t(9),s=t(17),m=t(15),u=t(18),d=(t(82),t(83),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"galaxy"},i.a.createElement("div",{className:"stars"},i.a.createElement("div",{className:"stars1"}),i.a.createElement("div",{className:"stars2"}),i.a.createElement("div",{className:"stars3"})))}}]),a}(n.Component)),h=t(23),g=t(49),p=t(25),y=(t(141),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"rocketship"},i.a.createElement("div",{className:"exhaust-fumes"},i.a.createElement("ul",null,i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null))),i.a.createElement("div",{className:"rocket"},i.a.createElement("div",{className:"rocket-body"},i.a.createElement("div",{className:"body"}),i.a.createElement("div",{className:"body-cap"}),i.a.createElement("div",{className:"fin-sides fin-left"}),i.a.createElement("div",{className:"fin-sides fin-right"}),i.a.createElement("div",{className:"fin-middle"}),i.a.createElement("div",{className:"window"}),i.a.createElement("div",{className:"window-tint"})),i.a.createElement("div",{className:"exhaust-flame"})))}}]),a}(n.Component)),f=(t(142),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={instantRedirect:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){h.scroller.scrollTo("home-heading",{duration:0}),(p.osName.includes("iOS")||p.browserName.includes("Safari")||p.browserName.includes("Firefox"))&&this.setState({instantRedirect:!0})}},{key:"launchRocketship",value:function(){var e=document.querySelector(".rocket"),a=document.querySelector(".exhaust-flame");e.className+=" rocket-active",a.className+="-active",setTimeout(function(){e.className=e.className.replace(" rocket-active",""),a.className=a.className.replace("-active","")},2500)}},{key:"launchLink",value:function(e){setTimeout(function(){window.open(e,"_blank")},1500)}},{key:"checkForInstant",value:function(e){var a=this;return"resume"===e?this.instantRedirect?i.a.createElement("a",{href:"../resources/Resume (Ian Yang).pdf",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("img",{src:"../images/resume.svg",alt:"Resume",className:"social-icon"})):i.a.createElement("button",{className:"link-button",onClick:function(){return a.launchLink("../resources/Resume (Ian Yang).pdf")}},i.a.createElement("img",{src:"../images/resume.svg",alt:"Resume",className:"social-icon"})):"github"===e?this.instantRedirect?i.a.createElement("a",{href:"https://github.com/ianyyang",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("img",{src:"../images/github.svg",alt:"GitHub",className:"social-icon"})):i.a.createElement("button",{className:"link-button",onClick:function(){return a.launchLink("https://github.com/ianyyang")}},i.a.createElement("img",{src:"../images/github.svg",alt:"GitHub",className:"social-icon"})):"linkedin"===e?this.instantRedirect?i.a.createElement("a",{href:"https://www.linkedin.com/in/ianyyang/",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("img",{src:"../images/linkedin.svg",alt:"LinkedIn",className:"social-icon"})):i.a.createElement("button",{className:"link-button",onClick:function(){return a.launchLink("https://www.linkedin.com/in/ianyyang/")}},i.a.createElement("img",{src:"../images/linkedin.svg",alt:"LinkedIn",className:"social-icon"})):"email"===e?this.instantRedirect?i.a.createElement("a",{href:"mailto:iany.yang.utoronto.ca",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("img",{src:"../images/email.svg",alt:"Email",className:"social-icon"})):i.a.createElement("button",{className:"link-button",onClick:function(){return a.launchLink("mailto:iany.yang.utoronto.ca")}},i.a.createElement("img",{src:"../images/email.svg",alt:"Email",className:"social-icon"})):void 0}},{key:"render",value:function(){return i.a.createElement("div",{className:"home"},i.a.createElement(g.Grid,null,i.a.createElement(g.Cell,{col:12},i.a.createElement("div",{className:"home-grid"},i.a.createElement(h.Element,{name:"home-heading"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",null,i.a.createElement("span",null,"I'm Ian Yang!")),i.a.createElement("p",null,"Computer Science & Statistics Graduate",i.a.createElement("br",null),"University of Toronto",i.a.createElement("br",null),p.osName," ",p.browserName," ",this.state.instantRedirect))),i.a.createElement("div",{className:"social-links"},i.a.createElement("div",{className:"social-icon"},i.a.createElement("button",{className:"link-button",onClick:this.launchRocketship},this.checkForInstant("resume")),i.a.createElement("p",{className:"social-icon-caption"},"Resume")),i.a.createElement("div",{className:"social-icon"},i.a.createElement(h.Link,{activeClass:"active",to:"projects-grid",smooth:!0,delay:0,offset:-1e3,duration:2500},i.a.createElement("button",{className:"link-button",onClick:this.launchRocketship},i.a.createElement("img",{src:"../images/projects.svg",alt:"Projects",className:"social-icon"}))),i.a.createElement("p",{className:"social-icon-caption"},"Projects")),i.a.createElement("div",{className:"social-icon"},i.a.createElement("button",{className:"link-button",onClick:this.launchRocketship},this.checkForInstant("github")),i.a.createElement("p",{className:"social-icon-caption"},"GitHub")),i.a.createElement("div",{className:"social-icon"},i.a.createElement("button",{className:"link-button",onClick:this.launchRocketship},this.checkForInstant("linkedin")),i.a.createElement("p",{className:"social-icon-caption"},"LinkedIn")),i.a.createElement("div",{className:"social-icon"},i.a.createElement("button",{className:"link-button",onClick:this.launchRocketship},this.checkForInstant("email")),i.a.createElement("p",{className:"social-icon-caption"},"Email")))),i.a.createElement(y,null))))}}]),a}(n.Component)),E=t(50),b=t.n(E),v=t(179),k=t(67),w=t(183),N=t(181),j=t(174),I=t(176),S=t(177),O=t(180),C=t(178),R=t(66),x=t.n(R),T=t(52),U=t.n(T),W=t(53),F=t.n(W),L=t(173),M=t(26),P=t.n(M),K=t(51),_=Object(L.a)(function(e){var a;return{root:(a={minWidth:200,maxWidth:200},Object(K.a)(a,e.breakpoints.up("lg"),{minWidth:275,maxWidth:275}),Object(K.a)(a,e.breakpoints.down("xs"),{minWidth:175,maxWidth:200}),a),header:{height:5}}});function D(e){var a=e.name,t=e.image,n=_();return i.a.createElement(j.a,{className:n.root,variant:"outlined"},i.a.createElement(I.a,{className:n.header,titleTypographyProps:{variant:"h7"},title:a}),i.a.createElement(S.a,{component:"img",src:t}))}t(145);var G=Object(L.a)(function(e){return{root:{minWidth:300,maxWidth:400,overflow:"auto"},header:{height:10,textAlign:"center"}}});function H(e){var a=e.name,t=e.preview,n=e.image,o=e.desc,r=e.tech,l=e.github,c=e.link,s=G(),m=i.a.useState(!1),u=Object(k.a)(m,2),d=u[0],h=u[1],g=o.map(function(e){return i.a.createElement("div",{key:e.id},e,i.a.createElement("br",null),i.a.createElement("br",null))});return i.a.createElement("div",null,i.a.createElement(v.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center"},i.a.createElement(w.a,{underline:"no",onClick:function(){h(!0)}},i.a.createElement(D,{name:a,image:t})),i.a.createElement(N.a,{open:d,onClose:function(){h(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},i.a.createElement(j.a,{className:s.root,variant:"outlined"},i.a.createElement(I.a,{className:s.header,title:a}),i.a.createElement(S.a,{component:"img",src:n}),i.a.createElement(O.a,null,i.a.createElement("div",{className:"tech-stack"},i.a.createElement(x.a,{style:{color:P.a[900]}})," ",r),i.a.createElement("br",null),i.a.createElement("div",null,g)),i.a.createElement("div",{className:"links"},l&&c?i.a.createElement(C.a,null,i.a.createElement("a",{href:l,className:"link-icon",rel:"noopener noreferrer",target:"_blank"},i.a.createElement(U.a,{style:{color:P.a[900]}})),i.a.createElement("a",{href:c,rel:"noopener noreferrer",target:"_blank"},i.a.createElement(F.a,{style:{color:P.a[900]}}))):l?i.a.createElement(C.a,null,i.a.createElement("a",{href:l,className:"link-icon",rel:"noopener noreferrer",target:"_blank"},i.a.createElement(U.a,{style:{color:P.a[900]}}))):c?i.a.createElement(C.a,null,i.a.createElement("a",{href:c,className:"link-icon",rel:"noopener noreferrer",target:"_blank"},i.a.createElement(F.a,{style:{color:P.a[900]}}))):null)))))}t(147);var A=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"projects-grid"},i.a.createElement(h.Element,{name:"projects-grid"},i.a.createElement(b.a,{minDeviceWidth:768},i.a.createElement("div",{className:"grid-container"},i.a.createElement(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},i.a.createElement("div",{className:"project-card"},i.a.createElement(H,{name:"Personal Website",preview:"../images/personal-website-preview.png",image:"../images/personal-website-full.png",desc:["My personal website (this one!) serves as an environment for me to showcase the projects I've made to the world and to document my progress throughout them!"],tech:"React.js, HTML, CSS, Material UI",github:"https://github.com/ianyyang/personal-website-build-2.0",link:""})),i.a.createElement("div",{className:"project-card"},i.a.createElement(H,{name:"Foodiary UI/UX Project",preview:"../images/foodiary-preview.png",image:"../images/foodiary-full.png",desc:["The Foodiary UI/UX Project is a culmination of work done by my amazing group for CSC318: The Design of Interactive Computational Media at the University of Toronto. I opted to individually re-create the high-fidelity model of our project from the ground up to further develop my UI/UX skills.","Foodiary is an app focused on promoting food safety within food handling, storing, and preparation via food expiry notifications, applicable recipe suggestions, and relevant news articles."],tech:"Figma Wireframing and UI Design Tool",github:"",link:"https://ianyyang.github.io/Foodiary"})),i.a.createElement("div",{className:"project-card"},i.a.createElement(H,{name:"SpotifyKaraoke",preview:"../images/spotifykaraoke-preview.png",image:"../images/spotifykaraoke-full.png",desc:["In the good old days of Spotify, lyrics would show up in real-time while listening to a song. Inexplicably, they removed this feature. Now we're here to bring it back.","SpotifyKaraoke is a web application powered by React.js that is meant to be run alongside your daily Spotify jam sessions. With its built-in web player, it gives you the option of kickstarting the music off your way. Music already playing? That works too! SpotifyKaraoke will automatically follow along with whatever enticing melodies you already have blasting in your room.","Once set up, SpotifyKaraoke will generate lyrics to whatever song you are playing in real-time, allowing you to transform a jam session to a mini karaoke session in your own home!"],tech:"React.js, HTML, CSS, Spotify API, Genius API",github:"https://github.com/ianyyang/SpotifyKaraoke",link:""}))))),i.a.createElement(b.a,{maxDeviceWidth:767},i.a.createElement(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2},i.a.createElement(v.a,{item:!0,xs:7},i.a.createElement(H,{name:"Personal Website",preview:"../images/personal-website-preview.png",image:"../images/personal-website-full.png",desc:["My personal website (this one!) serves as an environment for me to showcase the projects I've made to the world and to document my progress throughout them!"],tech:"React.js, HTML, CSS, Material UI",github:"https://github.com/ianyyang/personal-website-build-2.0",link:""})),i.a.createElement(v.a,{item:!0,xs:7},i.a.createElement(H,{name:"Foodiary UI/UX Project",preview:"../images/foodiary-preview.png",image:"../images/foodiary-full.png",desc:["The Foodiary UI/UX Project is a culmination of work done by my amazing group for CSC318: The Design of Interactive Computational Media at the University of Toronto. I opted to individually re-create the high-fidelity model of our project from the ground up to further develop my UI/UX skills.","Foodiary is an app focused on promoting food safety within food handling, storing, and preparation via food expiry notifications, applicable recipe suggestions, and relevant news articles."],tech:"Figma Wireframing and UI Design Tool",github:"",link:"https://ianyyang.github.io/Foodiary"})),i.a.createElement(v.a,{item:!0,xs:7},i.a.createElement(H,{name:"SpotifyKaraoke",preview:"../images/spotifykaraoke-preview.png",image:"../images/spotifykaraoke-full.png",desc:["In the good old days of Spotify, lyrics would show up in real-time while listening to a song. Inexplicably, they removed this feature. Now we're here to bring it back.","SpotifyKaraoke is a web application powered by React.js that is meant to be run alongside your daily Spotify jam sessions. With its built-in web player, it gives you the option of kickstarting the music off your way. Music already playing? That works too! SpotifyKaraoke will automatically follow along with whatever enticing melodies you already have blasting in your room.","Once set up, SpotifyKaraoke will generate lyrics to whatever song you are playing in real-time, allowing you to transform a jam session to a mini karaoke session in your own home!"],tech:"React.js, HTML, CSS, Spotify API, Genius API",github:"https://github.com/ianyyang/SpotifyKaraoke",link:""}))))))}}]),a}(n.Component),X=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,null),i.a.createElement(A,null),i.a.createElement(f,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(148),t(149);r.a.render(i.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,a,t){e.exports=t(150)},82:function(e,a,t){},83:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.adcebe16.chunk.js.map