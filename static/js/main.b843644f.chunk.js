(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,a,t){},35:function(e,a,t){e.exports=t(98)},40:function(e,a,t){},41:function(e,a,t){},95:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(5),c=t.n(o),l=t(7),s=t(8),i=t(10),m=t(9),u=t(11),d=t(22),h=t.n(d),g=(t(40),t(41),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"galaxy"},n.a.createElement("div",{className:"stars"}),n.a.createElement("div",{className:"stars2"}),n.a.createElement("div",{className:"stars3"}))}}]),a}(r.Component)),p=t(6),E=t.n(p),b=t(3),y=(t(95),["Hello","Hallo","Jambo","Barev dzez","Mingalarba","Chum reap suor","Ni hao","Namast\xe9","Halo","Konnichiwa","Annyeonghaseyo","Sabaidee","Sain baina uu","Kumusta","Vanakkam","S\xe0w\xe0tdee","Xin ch\xe0o","Tungjatjeta","Zdravejte","Bok","Ahoj","Terve","Bonjour","Dia duit","Guten tag","Yasass","Szervusz","Hall\xf3","Salve","God dag","Cze\u015b\u0107","Ol\xe1","Salut","Priv\xe9t","Zdravo","Hola","Hej","Vitayu","As-sal\u0101m \u2018alaykum","Shal\xf3m","Sal\xe2m","Merhaba","Aloha","Asalaam alaikum","Hei","Geia","Hai"]),f=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={greeting:"Hello"},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"updateGreeting",value:function(){this.setState({greeting:y[Math.floor(Math.random()*y.length)]})}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){return e.updateGreeting()},1500),Object(p.configureAnchors)({offset:0,scrollDuration:0}),Object(p.goToAnchor)("home",!1)}},{key:"componentWillUpdate",value:function(){Object(p.removeHash)()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"scrollToProjects",value:function(){Object(p.configureAnchors)({offset:-50,scrollDuration:400}),Object(p.goToAnchor)("projects",!1)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"home"},n.a.createElement(b.Grid,{className:"home-grid"},n.a.createElement(b.Cell,{col:12},n.a.createElement(E.a,{id:"home"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",null,this.state.greeting,"! ",n.a.createElement("span",null,"I'm Ian Yang!")),n.a.createElement("p",null,"Computer Science & Statistics Student",n.a.createElement("br",null),"University of Toronto"),n.a.createElement("hr",null))),n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"../resources/Resume (Ian Yang).pdf",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("img",{src:"../images/resume.svg",alt:"Resume",className:"social-icon"})),n.a.createElement("a",{onClick:function(){return e.scrollToProjects()}},n.a.createElement("img",{src:"../images/projects.svg",alt:"Projects",className:"social-icon"})),n.a.createElement("a",{href:"https://github.com/ianyyang/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("img",{src:"../images/github.svg",alt:"GitHub",className:"social-icon"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/ianyyang/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("img",{src:"../images/linkedin.svg",alt:"LinkedIn",className:"social-icon"})),n.a.createElement("a",{href:"mailto:iany.yang.utoronto.ca",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("img",{src:"../images/email.svg",alt:"Email",className:"social-icon"}))))))}}]),a}(r.Component),j=(t(34),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(b.Grid,{className:"projects-grid"},n.a.createElement(b.Cell,{col:12},n.a.createElement(E.a,{id:"projects"},n.a.createElement("div",{className:"projects-header"},n.a.createElement("h1",null,"Projects"))),n.a.createElement("div",{className:"projects-mobile"},n.a.createElement(b.Card,{shadow:4,style:{width:"325px",margin:"auto"}},n.a.createElement(b.CardActions,{style:{background:"#B0D7FF"}},n.a.createElement("a",{href:"https://github.com/ianyyang/ianyyang.github.io/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("h1",{className:"projects-title"},"Personal Website"))),n.a.createElement("a",{href:"https://github.com/ianyyang/ianyyang.github.io/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement(b.CardTitle,{style:{color:"#92C1F0",height:"300px",background:"url(../images/personal-website.gif) center / cover"}})),n.a.createElement(b.CardText,{style:{background:"#B0D7FF"}},n.a.createElement("p",{className:"projects-desc"},"My personal website (this one!) serves as an environment for me to showcase the projects I've made to the world and to document my progress throughout them!")),n.a.createElement(b.CardActions,{style:{background:"#C9E4FF"}},n.a.createElement("h1",{className:"projects-tech"},"React.js HTML CSS"))),n.a.createElement("br",{className:"projects-divider"}),n.a.createElement(b.Card,{shadow:4,style:{width:"325px",margin:"auto"}},n.a.createElement(b.CardActions,{style:{background:"#B0D7FF"}},n.a.createElement("a",{href:"https://ianyyang.github.io/Foodiary/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("h1",{className:"projects-title"},"Foodiary UX/UI Project"))),n.a.createElement("a",{href:"https://ianyyang.github.io/Foodiary/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement(b.CardTitle,{style:{color:"#92C1F0",height:"300px",background:"url(../images/Foodiary.png) center / cover"}})),n.a.createElement(b.CardText,{style:{background:"#B0D7FF"}},n.a.createElement("p",{className:"projects-desc"},"Foodiary is an app focused on promoting food safety within food handling, storing, and preparation via food expiry notifications, applicable recipe suggestions, and relevant news articles.")),n.a.createElement(b.CardActions,{style:{background:"#C9E4FF"}},n.a.createElement("h1",{className:"projects-tech"},"Figma Wireframing & UI Design Tool"))),n.a.createElement("br",{className:"projects-divider"})))))}}]),a}(r.Component)),v=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"projects"},n.a.createElement(b.Grid,{className:"projects-grid"},n.a.createElement(b.Cell,{col:12},n.a.createElement(E.a,{id:"projects"},n.a.createElement("div",{className:"projects-header"},n.a.createElement("h1",null,"Projects"))),n.a.createElement("div",{className:"projects-desktop"},n.a.createElement(b.Grid,null,n.a.createElement(b.Cell,{col:6},n.a.createElement(b.Card,{shadow:4,style:{width:"325px",margin:"auto"}},n.a.createElement(b.CardActions,{style:{background:"#B0D7FF"}},n.a.createElement("a",{href:"https://github.com/ianyyang/ianyyang.github.io/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("h1",{className:"projects-title"},"Personal Website"))),n.a.createElement("a",{href:"https://github.com/ianyyang/ianyyang.github.io/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement(b.CardTitle,{style:{color:"#92C1F0",height:"300px",background:"url(../images/personal-website.gif) center / cover"}})),n.a.createElement(b.CardText,{style:{background:"#B0D7FF"}},n.a.createElement("p",{className:"projects-desc"},"My personal website (this one!) serves as an environment for me to showcase the projects I've made to the world and to document my progress throughout them!")),n.a.createElement(b.CardActions,{style:{background:"#C9E4FF"}},n.a.createElement("h1",{className:"projects-tech"},"React.js HTML CSS")))),n.a.createElement("br",{className:"projects-divider"}),n.a.createElement(b.Cell,{col:6},n.a.createElement(b.Card,{shadow:4,style:{width:"325px",margin:"auto"}},n.a.createElement(b.CardActions,{style:{background:"#B0D7FF"}},n.a.createElement("a",{href:"https://ianyyang.github.io/Foodiary/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("h1",{className:"projects-title"},"Foodiary UX/UI Project"))),n.a.createElement("a",{href:"https://ianyyang.github.io/Foodiary/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement(b.CardTitle,{style:{color:"#92C1F0",height:"300px",background:"url(../images/Foodiary.png) center / cover"}})),n.a.createElement(b.CardText,{style:{background:"#B0D7FF"}},n.a.createElement("p",{className:"projects-desc"},"Foodiary is an app focused on promoting food safety within food handling, storing, and preparation via food expiry notifications, applicable recipe suggestions, and relevant news articles.")),n.a.createElement(b.CardActions,{style:{background:"#C9E4FF"}},n.a.createElement("h1",{className:"projects-tech"},"Figma Wireframing & UI Design Tool")))),n.a.createElement("br",{className:"projects-divider"}))),n.a.createElement("div",{className:"projects-desktop"},n.a.createElement(b.Grid,null)),n.a.createElement("div",{className:"projects-endpage"},n.a.createElement("br",null)))))}}]),a}(r.Component),k=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,null),n.a.createElement(h.a,{className:"media_query",query:"(min-device-width: 1080px)"},n.a.createElement(v,null)),n.a.createElement(h.a,{className:"media_query",query:"(max-device-width: 1080px)"},n.a.createElement(j,null)),n.a.createElement(f,null))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(96),t(97);c.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.b843644f.chunk.js.map