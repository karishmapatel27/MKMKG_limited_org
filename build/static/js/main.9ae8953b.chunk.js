(this.webpackJsonpmkmkg=this.webpackJsonpmkmkg||[]).push([[0],{127:function(e,a,t){e.exports=t(245)},245:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),m=t.n(l),c=t(72),i=(t(132),t(8)),o=t(252),s=t(253);var u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement(s.a,{size:"huge"},"Meme Generator")),r.a.createElement("h2",{className:"home_subheading"},"REACT to our memes"),r.a.createElement("div",{className:"landing_image"},r.a.createElement("img",{src:"./meme.jpg",alt:"meme"})),r.a.createElement("div",{class:"home-button"},r.a.createElement(o.a,{color:"olive",size:"large",href:"/#/imageList",id:"mainButton"},r.a.createElement(o.a.Content,{visible:!0},"Start"),r.a.createElement(o.a.Content,{hidden:!0},"MEME Time!!!"))))},h=t(255),E=t(118);var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{href:"/",id:"returnToHomeBtn",color:"olive",size:"large"},"Home"))};var d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement(s.a,{size:"huge"},"Meme Generator")),r.a.createElement("h1",{className:"home_subheading"},"Choose your victim:"),r.a.createElement("div",{class:"grid_img"},r.a.createElement(h.a,{columns:3,doubling:!0,stackable:!0,padded:!0},r.a.createElement(h.a.Column,null,r.a.createElement(E.a,{src:"/images/don.png",href:"#/memeBuilder/don"})),r.a.createElement(h.a.Column,null,r.a.createElement(E.a,{src:"/images/karel.png",href:"#/memeBuilder/karel"})),r.a.createElement(h.a.Column,null,r.a.createElement(E.a,{src:"/images/daryl.png",href:"#/memeBuilder/daryl"})),r.a.createElement(h.a.Column,null,r.a.createElement(E.a,{src:"/images/emily.png",href:"#/memeBuilder/emily"})),r.a.createElement(h.a.Column,null,r.a.createElement(E.a,{src:"/images/prue.png",href:"#/memeBuilder/prue"})),r.a.createElement(h.a.Column,null,r.a.createElement(E.a,{src:"/images/nimesh.png",href:"#/memeBuilder/nimesh"})))),r.a.createElement(g,null))},p=t(45),f=t(46),v=t(49),b=t(47),C=function(e){Object(v.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(p.a)(this,t),(n=a.call(this,e)).handleURL=function(){n.props.history.push("/yourMeme/".concat(n.props.match.params.image,"/").concat(n.state.text))},n.handleChange=function(e){n.setState({text:e.target.value})},n.state={text:""},n}return Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{id:"form"},r.a.createElement("input",{id:"input",type:"text",placeholder:"Write your meme text...",value:this.state.text,onChange:this.handleChange}),r.a.createElement("input",{id:"button",type:"submit",onClick:this.handleURL})))}}]),t}(n.Component);var y=function(e){var a=e.match.params.image;return console.log(e.match.params),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:"big_img",src:"/images/".concat(a,".png"),width:"600",height:"400"}))},k=t(27);var x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{href:"/#/imageList",color:"olive",size:"large",id:"returnToImageBtn"},r.a.createElement(o.a.Content,{visible:!0},"Return To Images"),r.a.createElement(o.a.Content,{hidden:!0},r.a.createElement(k.a,{name:"arrow left"}))))};var N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,e),r.a.createElement(y,e),r.a.createElement(x,null))},j=function(e){Object(v.a)(t,e);var a=Object(b.a)(t);function t(e){return Object(p.a)(this,t),a.call(this,e)}return Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.refs.canvas.getContext("2d"),t=this.refs.image;t.onload=function(){a.drawImage(t,0,0),a.font="50px Anton",a.strokeStyle="black",a.lineWidth=8,a.strokeText(e.props.match.params.text.toUpperCase(),320,75),a.fillStyle="white",a.fillText(e.props.match.params.text.toUpperCase(),320,75)}}},{key:"render",value:function(){return r.a.createElement("div",{className:"canvas_img"},r.a.createElement("canvas",{ref:"canvas",width:"1200",height:"620",className:"canvas"}),r.a.createElement("img",{ref:"image",alt:"meme victim",src:"/images/".concat(this.props.match.params.image,".png"),className:"hidden final_img",width:"600",height:"400"}))}}]),t}(r.a.Component);var B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(o.a,{id:"printScreen",onClick:function(){return window.print()}},"Print")))};var w=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement(s.a,{size:"small",id:"enjoy"},"Enjoy Your Meme!")),r.a.createElement(j,e),r.a.createElement("div",{className:"print_return_btn"},r.a.createElement(g,null),r.a.createElement(B,null)))};var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{exact:!0,path:"/",component:u}),r.a.createElement(i.a,{path:"/imageList",component:d}),r.a.createElement(i.a,{path:"/memeBuilder/:image",component:N}),r.a.createElement(i.a,{path:"/yourMeme/:image/:text",component:w})))};m.a.render(r.a.createElement(c.a,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.9ae8953b.chunk.js.map