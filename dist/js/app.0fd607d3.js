(function(e){function t(t){for(var r,l,c=t[0],s=t[1],o=t[2],p=0,d=[];p<c.length;p++)l=c[p],i[l]&&d.push(i[l][0]),i[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},i={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"231b":function(e,t,n){},"2d96":function(e,t,n){"use strict";var r=n("c303"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Home")],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",[n("ruleHeader",{on:{addrule:e.addRule}}),n("div",{staticClass:"nav-info"},[n("div",{staticClass:"info-name"},[n("label",[e._v("DOCUMENT NAME")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.draftname,expression:"draftname"}],domProps:{value:e.draftname},on:{input:function(t){t.target.composing||(e.draftname=t.target.value)}}})]),n("button",{staticClass:"preview-btn",on:{click:function(t){e.previewResult=!0}}},[e._v("预览")]),n("button",{on:{click:e.exportResult}},[e._v("导出")])])],1),n("div",{staticClass:"content"},[n("section",{staticClass:"draft"},[n("p",{staticClass:"pre-title"},[e._v("MARKDOWN")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],ref:"inputSelect",attrs:{spellcheck:"false"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),n("section",{staticClass:"draft-preview"},[n("p",{staticClass:"pre-title"},[e._v("PREVIEW")]),n("article",{staticClass:"preview-content",domProps:{innerHTML:e._s(e.output)}})])]),e.previewResult?n("previewPage",{attrs:{msg:e.output},on:{closepreview:function(t){e.previewResult=!1}}}):e._e()],1)},c=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.rules,function(t,r){return n("navBtn",e._g({key:r,attrs:{type:r,title:t.title,id:t.id}},e.$listeners))}),1)},o=[],u=n("2f62");r["a"].use(u["a"]);var p={namespaced:!0,state:{lines:[],blocks:[]},mutations:{addline:function(e,t){e.lines.push(t)},addblock:function(e,t){e.blocks.push(t)},clearline:function(e){e.lines=[]},clearblock:function(e){e.blocks=[]}}},d={namespaced:!0,state:{lines:[]},mutations:{addline:function(e,t){e.lines.push(t)},clearline:function(e){e.lines=[]}}},m={namespaced:!0,state:{lines:[]},mutations:{addline:function(e,t){e.lines.push(t)},clearline:function(e){e.lines=[]}}},f={namespaced:!0,state:{words:[]},mutations:{addword:function(e,t){e.words.push(t)},clearword:function(e){e.words=[]}}},g={namespaced:!0,state:{links:[]},mutations:{addlink:function(e,t){e.links.push(t)},clearlink:function(e){e.links=[]}}},v={namespaced:!0,state:{paras:[]},mutations:{addpara:function(e,t){e.paras.push(t)},clearpara:function(e){e.paras=[]}}},h={bold:{id:0,mark:"**",bg:"B",title:"加粗",type:0},em:{id:1,mark:"*",bg:"I",title:"斜体",type:0},del:{id:2,mark:"~~",bg:"del",title:"删除线",type:0},underline:{id:3,mark:"++",bg:"underline",title:"下划线",type:0},inlinecode:{id:4,mark:"`",bg:"mark",title:"标记",type:0},h1:{id:5,mark:"#",bg:"h1",title:"一级标题",type:1},h2:{id:6,mark:"##",bg:"h2",title:"二级标题",type:1},h3:{id:7,mark:"###",bg:"h3",title:"三级标题",type:1},quote:{id:8,mark:">",bg:"Q",title:"引用",type:1},ul:{id:9,mark:"+ ",bg:"ul",title:"无序标题",type:1},ol:{id:10,mark:"1. ",bg:"ol",title:"有序标题",type:1},code:{id:11,mark:"```",bg:"code",title:"代码块",type:2},hr:{id:12,mark:"\n\n***\n",bg:"hr",title:"分割线",type:3},link:{id:13,mark:'[text](href "title")',bg:"link",title:"链接",type:3},img:{id:14,mark:'![description](src "imgtitle")',bg:"img",title:"图片",type:3}},b=new u["a"].Store({state:{rules:h},modules:{codelines:p,referlines:d,listlines:m,paralines:v,codetype:f,linktype:g}}),k={props:["type","title","id"],render:function(e){var t=e("li",{style:{backgroundPositionX:50*-this.id+"px"},domProps:{title:this.title},on:{click:this.clickHandler}});return t},methods:{clickHandler:function(){this.$emit("addrule",this.type)}}},y={name:"ruleHeader",components:{navBtn:k},data:function(){return{}},computed:{rules:function(){var e=b.state.rules;return e}},methods:{}},_=y,w=(n("2d96"),n("2877")),S=Object(w["a"])(_,s,o,!1,null,"5740e460",null),x=S.exports,$=(n("a481"),n("e814")),C=n.n($);n("28a5"),n("b54a");function O(e){return e.replace(/\*\*(?![ *])([\s\S]*?[^* ])\*\*|__(?![ _])([\s\S]*?[^_ ])__/g,"<strong>$1$2</strong>")}function P(e){return e.replace(/\*(?![ *])([\s\S]*?[^* ])\*|_(?![ _])([\s\S]*?[^_ ])_/g,"<em>$1$2</em>")}function j(e){return e.replace(/(~~)(?![ ~])([\s\S]*?[^~ ])(~~)/g,"<del>$2</del>")}function q(e){return e.replace(/(\+\+)(?![ +])([\s\S]*?[^+ ])(\+\+)/g,"<ins>$2</ins>")}function E(e){return e=H(e),e=N(e),e=R(e),e=T(e),e=I(e),e}function R(e){return e=O(e),e=P(e),e=j(e),e=q(e),e}function M(e){return e.replace(/ {2,}[\r\n]/gm,"<br>")}function H(e){return e.replace(/`([^`]+)`/g,function(e,t){return b.commit("codetype/addword",t),'<code class="inline-code"></code>'})}function I(e){var t=b.state.codetype.words;if(t.length>0){var n=0;e=e.replace(/<code class="inline-code"><\/code>/g,function(){var e='<code class="inline-code">'+t[n]+"</code>";return n++,b.commit("codetype/clearword"),e})}return e}function N(e){return e.replace(/(!)?\[([^[\]]*)\]\((\S*?)(?:\s+"(.*?)"|\s+'(.*?)')*\)/g,function(e,t,n,r,i,a){var l=i||a,c=encodeURI(r),s={isImg:Boolean(t),text:n,link:c,title:l};return b.commit("linktype/addlink",s),'<a class="inline-link"></a>'})}function T(e){var t=b.state.linktype.links;if(t.length>0){var n=0;e=e.replace(/<a class="inline-link"><\/a>/g,function(){var e="",r="",i=R(t[n].text);return t[n].title&&(e='title = "'+t[n].title+'"'),r=t[n].isImg?'<img src="'+t[n].link+'" alt="'+i+'"'+e+">":'<a class="inline-link" target="_blank"'+e+'href="'+t[n].link+'">'+i+"</a>",n++,b.commit("linktype/clearlink"),r})}return e}function B(e){return e=e.replace(/^( *)(#{1,6})([^#].*)/gm,function(e,t,n,r){var i=n.length;return"<h"+i+">"+E(r)+"</h"+i+">"}),e=e.replace(/([^#\s]?.*)[\n\r]+ *(=+)/g,"<h1>$1</h1>"),e=e.replace(/([^#\s]?.*)[\n\r]+ *(-+)/g,"<h2>$1</h2>"),e}function L(e){return e=B(e),e=H(e),e=N(e),e=R(e),e=M(e),e=T(e),e=I(e),e}function U(e){return e=e.replace(/(^[*+][ \t]+[\s\S]+?)(^(\s*)[\r\n](?!^[+*1-9][ \t]))/gm,function(e,t,n){return b.commit("listlines/addline",t),'<ul class="pre-list"></ul>'+n}),e=e.replace(/(^[1-9]\.[ \t]+[\s\S]+?)(^(\s*)[\r\n](?!^[+*1-9][ \t]))/gm,function(e,t,n){return b.commit("listlines/addline",t),'<ul class="pre-list"></ul>'+n}),e=e.replace(/^([*+]|[1-9]\.)[ \t]+[\s\S]+/gm,function(e){if(e)return b.commit("listlines/addline",e),'<ul class="pre-list"></ul>'}),e}function A(e){var t=b.state.listlines.lines;if(t.length>0){var n=0;e=e.replace(/<ul class="pre-list"><\/ul>/gm,function(){var e=W(t[n]);return n++,e}),b.commit("listlines/clearline")}return e}function W(e){var t=e,n=t.split(/(^[*+]|[1-9]\.)[ \t]+/gm);if(n.length>0){var r=n[1],i=!isNaN(C()(r)),a=n.map(function(e,t){var a="";if(0==t)a=i?"<ol>":"<ul>";else if(t%2!=0){var l=!isNaN(C()(e));l?i!=l&&(a="</ul><ol>"):i!=l?(r=e,a="</ol><ul>"):e!=r&&(r=e,a="</ul><ul>"),i=l}else if(e=L(e),t==n.length-1){var c=i?"</ol>":"</ul>";a="<li>"+e+"</li>"+c}else a="<li>"+e+"</li>";return a});t=a.join("")}return t}function D(e){return e=e.replace(/^`{3,}[\s\S]*?[\r\n]([\s\S]*?)^`{3,}/gm,function(e,t){return b.commit("codelines/addblock",t),"<pre class='code-block'></pre>"}),e=e.replace(/(^ {4}|\t)(.*)/gm,function(e,t,n){return b.commit("codelines/addline",n),"<pre><code></code></pre>"}),e}function J(e){var t=0,n=0,r=e,i=b.state.codelines.lines;i.length>0&&(r=r.replace(/<pre><code><\/code><\/pre>/gm,function(){var e="<pre><code>"+i[t]+"</code></pre>";return t++,e}),b.commit("codelines/clearline"),r=r.replace(/<\/code>\s*<\/pre>(\s*[\r\n])*<pre>\s*<code>/gm,"$1"));var a=b.state.codelines.blocks;return a.length>0&&(r=r.replace(/<pre class='code-block'><\/pre>/gm,function(){var e="<pre><code>"+a[n]+"</code></pre>";return n++,e}),b.commit("codelines/clearblock")),r}n("14b9"),n("4917");function V(e){return e=e.replace(/(^>[\S\s]*?)(^\s*[\r\n]^[^>])/gm,function(e,t,n){return b.commit("referlines/addline",t),t="<blockquote><p></p></blockquote>",n=n||"",t+n}),e=e.replace(/^>[\S\s]*/gm,function(e){if(e)return b.commit("referlines/addline",e),"<blockquote><p></p></blockquote>"}),e}function K(e){var t=b.state.referlines.lines;if(t.length>0){var n=0;e=e.replace(/<blockquote><p><\/p><\/blockquote>/gm,function(){var e="<blockquote><p>"+Q(t[n])+"</p></blockquote>";return n++,e}),b.commit("referlines/clearline")}return e}function Q(e){if(!e.match(/^>+/gm))return e;for(var t=e.match(/^>+/gm).map(function(e){return e.length}),n=t[0],r="<blockquote><p>",i="</p></blockquote>",a=e,l=function(e){a=a.replace(/(^\s*[\r\n])?(^>+)/m,function(a,l){var c=t[e];if(0==e)return r.repeat(c-1);if(l&&c<n){var s=n-c;return n=c,i.repeat(s)}var o=c-n;return o>0?(n=c,r.repeat(o)):""})},c=0;c<t.length;c++)l(c);return a=L(a),a+i.repeat(n-1)}function X(e){return e.replace(/^([\s*_]+)$/gm,function(e,t){return t.match(/_/gm)&&!t.match(/\*/gm)&&t.match(/_/gm).length>2?"<hr>":t.match(/\*/gm)&&!t.match(/_/gm)&&t.match(/\*/gm).length>2?"<hr>":e})}function z(e){return e=e.replace(/^(?!\s*<(?:h[1-6]|ul|pre|blockquote|ol))([\s\S]+?)([\r\n]^<(?:h[1-6]|ul|pre|blockquote|ol))/gim,function(e,t,n){return b.commit("paralines/addpara",t),'<p class="paralines"></p>'+n}),e=e.replace(/^(?!\s*<(?:h[1-6]|ul|pre|blockquote|ol|p))([\s\S]+)/gim,function(e,t){return b.commit("paralines/addpara",t),'<p class="paralines"></p>'}),e}function F(e,t){return e.replace(/(\S[\s\r\n]*)(^\s*[\r\n]+)(\S)/gm,function(e,n,r,i){return t&&t(r),n+"</p><p>"+i})}function G(e){return e=L(e),e=F(e),e}function Y(e){return e=B(e),e=X(e),e=z(e),e}function Z(e){var t=b.state.paralines.paras;if(t.length>0){var n=0;e=e.replace(/<p class="paralines"><\/p>/gi,function(){var e="<p>"+G(t[n])+"</p>";return n++,b.commit("paralines/clearpara"),e})}return e}function ee(e){return e.replace(/[<&]/g,function(e){return{"<":"&lt;","&":"&amp;"}[e]})}function te(e){return e.replace(/\\([#*=\->.+~`_[\]!\\()])/g,function(e,t){return"&#"+t.charCodeAt()+";"})}var ne=function(e){return e?(e=ee(e),e=te(e),e=D(e),e=V(e),e=U(e),e=Y(e),e=J(e),e=K(e),e=A(e),e=Z(e),e):""};function re(e,t,n,r){var i=t.substring(n,r),a=b.state.rules;if(a&&a[e]){var l=a[e].mark;switch(n==r&&(i="text"),a[e].type){case 0:i=l+i+l;break;case 1:i="\n"+l+i;break;case 2:i="\n"+l+"\ntext\n"+l;break;case 3:i=l;break;default:i=l}}return t=t.substring(0,n)+i+t.substring(r),t}function ie(e,t,n){var r=n.selectionStart,i=n.selectionEnd,a=re(e,t,r,i);return n.dispatchEvent(new Event("input")),n.focus(),n.select(),a}var ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview"},[n("div",{staticClass:"preview-title"},[n("label",[e._v("PREVIEW")]),n("button",{on:{click:function(t){return e.$emit("closepreview")}}},[e._v("close")])]),n("div",{staticClass:"preview-content",domProps:{innerHTML:e._s(e.msg)}})])},le=[],ce={props:["msg"]},se=ce,oe=(n("9054"),Object(w["a"])(se,ae,le,!1,null,"35cdbfb4",null)),ue=oe.exports,pe=(n("947c"),{name:"Home",data:function(){return{message:localStorage.getItem("message")||"",draftname:"draft",previewResult:!1}},components:{ruleHeader:x,previewPage:ue},computed:{output:function(){return this.saveMsg(),ne(this.message)}},methods:{saveMsg:function(){localStorage.setItem("message",this.message)},addRule:function(e){this.message=ie(e,this.message,this.$refs.inputSelect)},exportResult:function(){if(this.message&&localStorage.getItem("message")){var e=this.message,t=document.createElement("a");t.download=(this.draftname||"draft")+".md",t.style.display="none";var n=new Blob([e],{type:"text/plain"});t.href=URL.createObjectURL(n),document.body.appendChild(t),t.click(),document.body.removeChild(t)}else alert("你的草稿中没有内容")}}}),de=pe,me=(n("d7e0"),Object(w["a"])(de,l,c,!1,null,"3bfe567a",null)),fe=me.exports,ge={name:"app",components:{Home:fe}},ve=ge,he=Object(w["a"])(ve,i,a,!1,null,null,null),be=he.exports;n("bdad");r["a"].config.productionTip=!1,new r["a"]({store:b,render:function(e){return e(be)}}).$mount("#app")},9054:function(e,t,n){"use strict";var r=n("99e3"),i=n.n(r);i.a},"947c":function(e,t,n){},"99e3":function(e,t,n){},bdad:function(e,t,n){},c303:function(e,t,n){},d7e0:function(e,t,n){"use strict";var r=n("231b"),i=n.n(r);i.a}});
//# sourceMappingURL=app.0fd607d3.js.map