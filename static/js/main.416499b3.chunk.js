(this.webpackJsonpflex=this.webpackJsonpflex||[]).push([[0],{1:function(e,a,t){e.exports={navBarWrapper:"MyNavBar_navBarWrapper__3y52N",navbar:"MyNavBar_navbar__2uMmC",buttonWrapper:"MyNavBar_buttonWrapper__tasQ0",a:"MyNavBar_a__Sz8WJ",navBarRow:"MyNavBar_navBarRow__3CoJP",menuButton:"MyNavBar_menuButton__24Vi9",bar1:"MyNavBar_bar1__1FhwD",bar2:"MyNavBar_bar2__18_ln",bar3:"MyNavBar_bar3__1Wz0P",contentDiv:"MyNavBar_contentDiv__3LZKA",contentRow:"MyNavBar_contentRow__2wuFh",contentHeader:"MyNavBar_contentHeader__3v6Iq",ul:"MyNavBar_ul__Ji68o",li:"MyNavBar_li__2c4uc",perspectiveWrapper:"MyNavBar_perspectiveWrapper__1D5En",perspectiveText:"MyNavBar_perspectiveText__2hNC_",perspectiveLine:"MyNavBar_perspectiveLine__2O3NP",options:"MyNavBar_options__2x-bK"}},166:function(e,a,t){},167:function(e,a,t){"use strict";t.r(a);var n,r,o,s,c,l=t(0),i=t.n(l),m=t(21),p=t.n(m),d=(t(67),t(8)),u=t(15),h=t(11),v=t(10),_=t(57),N=t.n(_),M=t(20),b=t(7),E=t(5),g=t(61),f=t(60),y=t(1),C=t.n(y),w=function(e){Object(h.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={show:!0,scrollPos:0,open:!1,changeNavBar:!1},e.onscroll=function(){e.setState({scrollPos:document.body.getBoundingClientRect().top,show:document.body.getBoundingClientRect().top>e.state.scrollPos,open:!1,changeNavBar:!1})},e.toggleCollapse=function(a){a.preventDefault(),e.setState({changeNavBar:!e.state.changeNavBar}),!1===e.state.open?e.setState({open:!0}):(e.state.open,e.setState({open:!1}))},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onscroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onscroll)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e={width:"35px",height:"5px",backgroundColor:"#fff",margin:"4px 0",transition:"0.4s"};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:C.a.navBarWrapper,style:this.state.show?{zIndex:"1001 !important",backgroundColor:"#575f68ec",color:"#fff",position:"fixed",height:"50px",width:"100%",visibility:"visible",transition:"all 200ms ease-in"}:{zIndex:"1001 !important",backgroundColor:"#5e6f819a",color:"#fff",position:"fixed",height:"50px",width:"100%",visibility:"hidden",transition:"all 200ms ease-out",transform:"translate(0, -100%)"}},i.a.createElement("div",{className:C.a.navbar},i.a.createElement("div",{className:C.a.buttonWrapper},i.a.createElement(b.a,{className:C.a.navBarRow},i.a.createElement(E.a,null,i.a.createElement(g.a,{className:C.a.menuButton,"aria-controls":"example-collapse-text","aria-expanded":this.state.open,onClick:this.toggleCollapse},i.a.createElement("div",{className:C.a.menuIconContainer},i.a.createElement("div",{className:C.a.bar1,style:this.state.changeNavBar?{transform:"rotate(-45deg) translate(-8px, 6px)"}:e}),i.a.createElement("div",{className:C.a.bar2,style:this.state.changeNavBar?{opacity:"0"}:e}),i.a.createElement("div",{className:C.a.bar3,style:this.state.changeNavBar?{transform:"rotate(45deg) translate(-7px, -6px)"}:e}))))),i.a.createElement(f.a,{in:this.state.open},i.a.createElement("div",{id:"example-collapse-text",className:C.a.collapsingContent},i.a.createElement("div",{className:C.a.contentDiv},i.a.createElement(M.a,{className:C.a.contentContainer},i.a.createElement(b.a,{className:C.a.contentHeader},i.a.createElement("h3",{className:C.a.h3},i.a.createElement("a",{href:"#top-of-page",className:C.a.a,style:{color:"#fff"}},"Jesse McKinney"))),i.a.createElement(b.a,{className:C.a.contentRow},i.a.createElement(E.a,{className:C.a.contentCol},i.a.createElement("div",{className:C.a.perspectiveWrapper},i.a.createElement("div",{className:C.a.perspectiveText},i.a.createElement("div",{className:C.a.perspectiveLine},i.a.createElement("p",{className:C.a.options}),i.a.createElement("p",{className:C.a.options},i.a.createElement("a",{href:"#top-of-page",className:C.a.a,style:{color:"#61dafb"}},"About Me"))),i.a.createElement("div",{className:C.a.perspectiveLine},i.a.createElement("p",{className:C.a.options},"About Me"),i.a.createElement("p",{className:C.a.options}))),i.a.createElement("br",null),i.a.createElement("div",{className:C.a.perspectiveText},i.a.createElement("div",{className:C.a.perspectiveLine},i.a.createElement("p",{className:C.a.options}),i.a.createElement("p",{className:C.a.options},i.a.createElement("a",{href:"#top-of-page",className:C.a.a,style:{color:"#61dafb"}},"Portfolio"))),i.a.createElement("div",{className:C.a.perspectiveLine},i.a.createElement("p",{className:C.a.options},"Portfolio"),i.a.createElement("p",{className:C.a.options}))),i.a.createElement("br",null),i.a.createElement("div",{className:C.a.perspectiveText},i.a.createElement("div",{className:C.a.perspectiveLine},i.a.createElement("p",{className:C.a.options}),i.a.createElement("p",{className:C.a.options},i.a.createElement("a",{href:"#top-of-page",className:C.a.a,style:{color:"#61dafb"}},"Contact Me"))),i.a.createElement("div",{className:C.a.perspectiveLine},i.a.createElement("p",{className:C.a.options},"Contact Me"),i.a.createElement("p",{className:C.a.options}))))))))))))))}}]),t}(l.Component),A=t(14),x=t(58),B=t.n(x),W=t(19),k=t.n(W),j=function(e){Object(h.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(d.a)(this,t);for(var l=arguments.length,i=new Array(l),m=0;m<l;m++)i[m]=arguments[m];return(e=a.call.apply(a,[this].concat(i))).init=function(){n=new A.e,(r=new A.b(1e3,window.innerWidth/window.innerHeight,.1,1e3)).position.z=1,r.position.x=Math.PI/2,(o=new A.h).setSize(window.innerWidth,window.innerHeight),document.body.appendChild(o.domElement),c=new A.a;for(var a=0;a<6e3;a++){var t=new A.g(600*Math.random()-300,600*Math.random()-300,600*Math.random()-300);t.velocity=0,t.acceleration=.001,c.vertices.push(t)}var l=(new A.f).load(B.a),i=new A.d({color:11184810,size:.7,map:l});s=new A.c(c,i),n.add(s),window.addEventListener("resize",e.onWindowResize,!1),e.animate()},e.onWindowResize=function(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)},e.animate=function(){c.vertices.forEach((function(e){e.velocity+=e.acceleration,e.y-=e.velocity,e.y<-200&&(e.y=200,e.velocity=0)})),c.verticesNeedUpdate=!0,s.rotation.y+=.001,s.rotation.x=-1.5,s.rotation.z=-44,o.render(n,r),requestAnimationFrame(e.animate)},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:k.a.starWrapper},i.a.createElement("div",{className:k.a.content,ref:function(a){return e.mount=a}},i.a.createElement("div",{className:k.a.textBox},i.a.createElement("div",{className:k.a.heading1},"Hello, I'm\xa0",i.a.createElement("span",{className:k.a.highlight},"Jesse McKinney.")),i.a.createElement("div",{className:k.a.heading2},"I'm a full-stack web developer.")))))}}]),t}(l.Component),R=t(3),L=t.n(R),P=function(e){Object(h.a)(t,e);var a=Object(v.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(M.a,{className:L.a.slider,id:"contact-section"},i.a.createElement(b.a,{className:L.a.footerName},i.a.createElement(E.a,null,i.a.createElement("h3",{className:L.a.h3},"Contact Me"))),i.a.createElement("hr",{className:L.a.hr}),i.a.createElement(b.a,null,i.a.createElement(E.a,{className:L.a.Col},i.a.createElement("a",{className:L.a.a,href:"https://mail.google.com/mail/?view=cm&fs=1&to=JesseMcKinney513&#64gmail.com&su=ContactingYouOnPortfolioEmail"},i.a.createElement("i",{id:L.a.envelope,className:"far fa-envelope"})))),i.a.createElement("br",null),i.a.createElement(b.a,{className:L.a.iconRow},i.a.createElement(E.a,{className:L.a.Col},i.a.createElement("a",{className:L.a.a,href:"https://www.linkedin.com/in/jesse-mckinney-4a3b10185?trk=people-guest_profile-result-card_result-card_full-click"},i.a.createElement("i",{id:L.a.linkedin,className:"fab fa-linkedin"}))),i.a.createElement(E.a,{className:L.a.Col},i.a.createElement("a",{className:L.a.a,href:"https://github.com/J-McKinney"},i.a.createElement("i",{id:L.a.github,className:"fab fa-github"}))),i.a.createElement(E.a,{className:L.a.Col},i.a.createElement("a",{className:L.a.a,href:"https://www.pinterest.com/jesse6446/"},i.a.createElement("i",{id:L.a.pinterest,className:"fab fa-pinterest"}))),i.a.createElement(E.a,{className:L.a.Col},i.a.createElement("a",{className:L.a.a,href:"https://instagram.com/jessman51386?igshid=sfn5fawa2ea2"},i.a.createElement("i",{id:L.a.instagram,className:"fab fa-instagram"}))))),i.a.createElement("div",{className:L.a.bottomName},"Jesse McKinney"))}}]),t}(l.Component),I=t(59),J=t(2),O=t.n(J),z={labels:["HTML   ","CSS   ","BootStrap   ","JavaScript   ","React   ","Angular   ","Node.js   ","Mongoose   ","MySQL   ","Three.js   "],datasets:[{label:"My Favorite Languages To Code In",backgroundColor:"#61dafb",borderColor:"#61dafb",borderWidth:1,hoverBackgroundColor:"#61dafb",hoverBorderColor:"#61dafb",data:[65,59,80,100,56,55,40,62,22,80]},{backgroundColor:"#555555",data:[35,41,20,0,44,45,60,38,78,20]}]},H=function(e){Object(h.a)(t,e);var a=Object(v.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:O.a.siteWrapper},i.a.createElement(w,null),i.a.createElement("div",{className:O.a.starWrapper},i.a.createElement(j,null)),i.a.createElement("div",{className:O.a.aboutMeWrapper},i.a.createElement(M.a,{className:O.a.aboutMeContainer},i.a.createElement(b.a,{className:O.a.aboutMeHeader},i.a.createElement("h2",{className:O.a.aboutHeader},"About")),i.a.createElement("hr",{className:O.a.hr1Main}),i.a.createElement(b.a,{className:O.a.aboutMeRow},i.a.createElement(E.a,{className:O.a.aboutMeCol},i.a.createElement("i",{id:O.a.aboutMeIcon,className:"fas fa-fighter-jet"}),i.a.createElement("h3",{className:O.a.aboutMeh3},"Fast/Clean Code"),i.a.createElement("p",{className:O.a.aboutMePTags},"Fast load times and lag free interaction, my highest priority.")),i.a.createElement(E.a,{className:O.a.aboutMeCol},i.a.createElement("i",{id:O.a.aboutMeIcon,className:"fas fa-mobile-alt"}),i.a.createElement("h3",{className:O.a.aboutMeh3},"Responsive"),i.a.createElement("p",{className:O.a.aboutMePTags},"My layouts will work on any device, big or small.")),i.a.createElement(E.a,{className:O.a.aboutMeCol},i.a.createElement("i",{id:O.a.aboutMeIcon,className:"fas fa-code"}),i.a.createElement("h3",{className:O.a.aboutMeh3},"Intuitive"),i.a.createElement("p",{className:O.a.aboutMePTags},"Strong preference for easy to use, intuitive UX/UI.")),i.a.createElement(E.a,{className:O.a.aboutMeCol},i.a.createElement("i",{id:O.a.aboutMeIcon,className:"fas fa-meteor"}),i.a.createElement("h3",{className:O.a.aboutMeh3},"Dynamic"),i.a.createElement("p",{className:O.a.aboutMePTags},"Websites don't have to be static, I love making pages come to life."))),i.a.createElement("div",{className:O.a.barChartContainer},i.a.createElement(b.a,{className:O.a.barChartRow},i.a.createElement("div",{className:"col-md-6",id:O.a.MyPicCol},i.a.createElement("img",{className:O.a.barChartMyPic,src:N.a,alt:"Me"})),i.a.createElement("div",{className:"col-md-6",id:O.a.barChartCol},i.a.createElement(I.HorizontalBar,{className:O.a.barChart,data:z,height:400,width:400,options:{events:["null"],responsive:!0,maintainAspectRatio:!0,title:{display:!1},legend:{display:!1},tooltips:{enabled:!1},scales:{yAxes:[{stacked:!0,ticks:{suggestedMin:0,suggestedMax:100,fontSize:17,beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{stacked:!0,ticks:{suggestedMin:0,suggestedMax:100,fontSize:17,beginAtZero:!0},display:0}]}}}))))))),i.a.createElement("svg",{className:O.a.svg,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},i.a.createElement("path",{fill:"#282c34",fillOpacity:"1",d:"M0,256L48,261.3C96,267,192,277,288,256C384,235,480,181,576,181.3C672,181,768,235,864,256C960,277,1056,267,1152,266.7C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"})),i.a.createElement(P,null))}}]),t}(l.Component);t(166);var F=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,a,t){e.exports={starWrapper:"StarsContainer_starWrapper__2Pol_",textBox:"StarsContainer_textBox__1cQVA",heading1:"StarsContainer_heading1__2-Xkd",heading2:"StarsContainer_heading2__3Xxk4",highlight:"StarsContainer_highlight__3nLFo"}},2:function(e,a,t){e.exports={siteWrapper:"Main_siteWrapper__1y-nu",starWrapper:"Main_starWrapper__3h-jG",svg:"Main_svg__1HZYq",aboutMeWrapper:"Main_aboutMeWrapper__gIM5a",aboutMeContainer:"Main_aboutMeContainer__36cUd",aboutMeHeader:"Main_aboutMeHeader__2OPZ7",hr1Main:"Main_hr1Main__EbA5M",aboutMeRow:"Main_aboutMeRow__1U_tv",aboutMeIcon:"Main_aboutMeIcon__2JFgM",aboutMeh3:"Main_aboutMeh3__XhBmx",aboutMePTags:"Main_aboutMePTags__2pHjY",barChartContainer:"Main_barChartContainer__1tJru",barChartRow:"Main_barChartRow__3a-9h",MyPicCol:"Main_MyPicCol__2ipDF",barChartCol:"Main_barChartCol__2vJ5I",barChartMyPic:"Main_barChartMyPic__7r9aG",barChart:"Main_barChart__1bD82"}},3:function(e,a,t){e.exports={slider:"MyFooter_slider__3dyVR",footerName:"MyFooter_footerName__13SsV",h3:"MyFooter_h3__1L92I",hr:"MyFooter_hr__1Fdwx",Col:"MyFooter_Col__3w71W",a:"MyFooter_a__1YImE",iconRow:"MyFooter_iconRow__Ce1tV",bottomName:"MyFooter_bottomName__1EuMz",envelope:"MyFooter_envelope__2uju-",linkedin:"MyFooter_linkedin__1QVWr",github:"MyFooter_github__2R9f-",pinterest:"MyFooter_pinterest__17GT3",instagram:"MyFooter_instagram__2-skY"}},57:function(e,a,t){e.exports=t.p+"static/media/Me.56a7c0ec.JPG"},58:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN0SURBVGhD3ZpPT+JAGMYLJAgsu+GPgUCiV70YNRpR48UbJnwj44cwJsYYvofevBi9aDx4MZHVXQQWCQirpQUSYOcZB7A4TcGt0PGXvM4f087z+LZ1ph2bJEltEsJjqhG3212ZnZ0tr6+vNzc3N11zc3PecDjsxu8eHx/V6+tr+eTkpHZ2dua4ubnxq6rqoweaBIx8OEKhUG53d/eu2Wy22kOCY3AszsE795DB7TSM+fn5u3w+X2Wa/ptCoaCsrKz85I01YHA7dSMSiWRyuZzMxjcdnBtj8MY2CG4nNw4ODu7ZeJ/O4eHhLzJmq1+DXgx0szudzpdUKiVNTU19Z12jQna5XK16vf6DtXUxNOLz+QrlcjlIqo7XnpHT9Pv9pUqlEmJtXTQpehvkBHmW6bEDLTyNndDNCC4nklIPqY4rE/00JyYmlEajwb287azsp01MwKRVTAAH08T9w3ONJJPJNCm8ry1L4WXauGiuNTzD2WVpWaLR6Lv/M+8ycnl5aer85zO4uLh4p1FjJBaL3ZGMfGNNywKNq6urmM500dw8xWKxFgwGXaxpaUqlUm1ycrKrtZsRMgP9I4oJAK3QzJo9Izs7O3VWFYbt7e0aq/YuLbI2aNvtdrSFodVqtR0OB9VMM0JWdmXRTABo9ng8T7SOH2R5WkEpIjMzM39RUiNYY6MUkbW1NaqdGonH45gcCsnW1hbVTo0sLi4aLlysSkc7fWoRUBcWm832mhGRkWW5gZIayWazMkoRyWQyCkpq5Orq6hmliKRSqZ6R4+Nj2hCRo6OjnhG8i0UpIufn51Q7fWphiqIoih8douH1ep+q1WqAGkHHl5g0gv39/d+sKgz9muniHa/26cpeIMLhcLajv3tpgS+x1AWJRAIOhYCnlaamE5/57cMsoLFftyYjYGlpyfKLrOXlZa5GjTPEKD/oDAu08TST4Ha20+n0MzvWMpAJ4gtPK0Lz1HrLV/msIOGAQCBQZM2xAy16JoBuRjqI8unN0AggKX2+vb21WfljKOjeMEYxyqdZMpkc6vM0CW6nbpCsPJCpjMrGMx2ce3p6+oE3tkFwOw1jYWHB9C0csVhsdFs4+gOz5r29vfuPbqrBsWZsqhnoZh8UrDTxHnljYwPbnNzY5hSNRumbQDI/Utg2J/X09BTbnHyqqpq2KjXVyPiQpH+9Bnzxcb2fEgAAAABJRU5ErkJggg=="},62:function(e,a,t){e.exports=t(167)},67:function(e,a,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.416499b3.chunk.js.map