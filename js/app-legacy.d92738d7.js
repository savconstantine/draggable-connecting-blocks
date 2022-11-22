(function(){"use strict";var t={7754:function(t,e,o){o(6992),o(8674),o(9601),o(7727);var n=o(9963),i=o(6252),s=o(3577),r=o.p+"img/delete.aae51811.svg",l={id:"main"},a={class:"innerElement"},c=["onClick"],u={key:0,class:"remove-area"},h=["onClick"],f={style:{width:"100%",height:"100%"},width:"5000",height:"5000"},g=["onClick","x1","y1","x2","y2"],d=["x1","y1","x2","y2"],p={"data-dial-init":"",class:"fixed left-6 bottom-6 group"},k=(0,i._)("svg",{class:"w-8 h-8 rotate-45",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})],-1),m=[k],b=(0,i._)("svg",{class:"w-8 h-8 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})],-1),v=[b];function y(t,e,o,n,k,b){var y=(0,i.up)("DragBlock");return(0,i.wg)(),(0,i.iD)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(b.blocks,(function(t,e){return(0,i.wg)(),(0,i.j4)(y,{"block-prop":t,onEmitDragging:b.updateHostCoordinatesByBlockID,key:"dragBlock"+e},{default:(0,i.w5)((function(){return[(0,i._)("div",a,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(k.lineHosts,(function(t,o){return(0,i.wg)(),(0,i.iD)("div",{key:"lineHost"+e+"_"+o,class:(0,s.C_)(["host",t+"Host"]),ref_for:!0,ref:t+"Host"+e,onClick:function(o){return b.setLine(e,t+"Host")}},null,10,c)})),128)),!1===k.lineCreating.status?((0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("img",{onClick:function(t){return b.removeBlock(e)},src:r},null,8,h)])):(0,i.kq)("",!0)])]})),_:2},1032,["block-prop","onEmitDragging"])})),128)),((0,i.wg)(),(0,i.iD)("svg",f,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(b.lines,(function(t,e){return(0,i.wg)(),(0,i.iD)("line",{class:"line",onClick:function(t){return b.removeLine(e)},x1:b.blocks[t.start.blockID][t.start.host]["x"],y1:b.blocks[t.start.blockID][t.start.host]["y"],x2:b.blocks[t.end.blockID][t.end.host]["x"],y2:b.blocks[t.end.blockID][t.end.host]["y"],stroke:"black",key:"line"+e},null,8,g)})),128)),!0===k.lineCreating.status?((0,i.wg)(),(0,i.iD)("line",{key:0,x1:k.lineCreating.x1,y1:k.lineCreating.y1,x2:k.lineCreating.x2,y2:k.lineCreating.y2,stroke:"black"},null,8,d)):(0,i.kq)("",!0)])),(0,i._)("div",p,[!0===k.lineCreating.status?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:e[0]||(e[0]=function(t){return b.cancelLineCreating()}),type:"button",class:"flex justify-center items-center w-14 h-14 text-white bg-pink-700 rounded-full hover:bg-pink-800 dark:bg-pink-600 dark:hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 focus:outline-none dark:focus:ring-pink-800 transition duration-500 hover:scale-125"},m)):((0,i.wg)(),(0,i.iD)("button",{key:1,onClick:e[1]||(e[1]=function(t){return b.addBlock()}),type:"button",class:"flex justify-center items-center w-14 h-14 text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800 transition duration-500 hover:scale-125"},v))])])}var x=o(5082);o(7941),o(1539),o(4747),o(1532),o(189),o(7714),o(2801),o(1174),o(1295);function w(t,e,o,s,r,l){return(0,i.wg)(),(0,i.iD)("div",{class:"drag-block",onMousedown:e[0]||(e[0]=(0,n.iM)((function(){return l.drag&&l.drag.apply(l,arguments)}),["stop"])),onMouseup:e[1]||(e[1]=(0,n.iM)((function(){return l.drop&&l.drop.apply(l,arguments)}),["stop"]))},[(0,i.WI)(t.$slots,"default")],32)}var H={name:"DragBlock",props:{blockProp:{type:Object,default:function(){return{}}}},data:function(){return{shiftY:null,shiftX:null,left:0,top:0,element:null,parent:{width:0,height:0}}},methods:{elementMove:function(t){t.preventDefault();var e=t.pageX,o=t.pageY,n=e-this.shiftX,i=o-this.shiftY,s=e-this.shiftX+this.element.offsetWidth,r=o-this.shiftY+this.element.offsetHeight;n=n<0?0:s>this.parent.width?this.parent.width-this.element.offsetWidth:e-this.shiftX,i=i<0?0:r>this.parent.height?this.parent.height-this.element.offsetHeight:o-this.shiftY,this.element.style.left="".concat(n,"px"),this.left=n,this.element.style.top="".concat(i,"px"),this.top=i,this.$emit("emitDragging",this.blockProp.id,this.left,this.top)},drag:function(t){this.parent.width=this.parentWidth||this.element.parentNode.offsetWidth,this.parent.height=this.parentHeight||this.element.parentNode.offsetHeight,this.shiftX=t.pageX-this.element.offsetLeft,this.shiftY=t.pageY-this.element.offsetTop,t.pageX&&(this.element.addEventListener("mousemove",this.elementMove),this.element.addEventListener("mouseleave",this.drop))},drop:function(){this.element.removeEventListener("mousemove",this.elementMove,!1),this.element.onmouseup=null}},mounted:function(){this.element=this.$el,this.element.style.left="".concat(this.blockProp.leftProp,"px"),this.left=this.blockProp.leftProp,this.element.style.top="".concat(this.blockProp.topProp,"px"),this.top=this.blockProp.topProp}},C=o(3744);const D=(0,C.Z)(H,[["render",w]]);var P=D,B={name:"App",components:{DragBlock:P},data:function(){return{lineHosts:["top","right","bottom","left"],lineCreating:{status:!1,x1:0,y1:0,x2:0,y2:0,prepLine:{start:{blockID:"",host:""},end:{blockID:"",host:""}}}}},computed:{blocks:function(){return this.$store.getters.getBlocks},lines:function(){return this.$store.getters.getLines}},beforeMount:function(){},mounted:function(){var t=this,e=Object.keys(this.blocks);0!==e.length&&e.forEach((function(e){return t.updateHostCoordinatesByBlockID(e)}))},destroyed:function(){window.removeEventListener("mousemove",this.mouseIsMoving)},methods:{removeLine:function(t){this.$store.commit("deleteLine",t)},removeBlock:function(t){this.$store.commit("deleteBlock",t)},addBlock:function(){var t=0,e=700,o=String(Math.random()),n={id:o,topProp:Math.random()*(e-t)+t,leftProp:Math.random()*(e-t)+t,topHost:{x:35,y:-15},rightHost:{x:85,y:35},bottomHost:{x:35,y:85},leftHost:{x:-15,y:35}};this.$store.commit("addBlock",n)},cancelLineCreating:function(){this.lineCreating={status:!1,x1:0,y1:0,x2:0,y2:0,prepLine:{start:{blockID:"",host:""},end:{blockID:"",host:""}}}},mouseIsMoving:function(t){this.lineCreating.x2=t.pageX,this.lineCreating.y2=t.pageY},setLine:function(t,e){if(this.updateHostCoordinatesByBlockID(t),!1===this.lineCreating.status)this.lineCreating.status=!0,this.lineCreating.x1=this.blocks[t][e]["x"],this.lineCreating.y1=this.blocks[t][e]["y"],this.lineCreating.x2=this.blocks[t][e]["x"],this.lineCreating.y2=this.blocks[t][e]["y"],this.lineCreating.prepLine.start={blockID:t,host:e},window.addEventListener("mousemove",this.mouseIsMoving);else{window.removeEventListener("mousemove",this.mouseIsMoving),this.lineCreating.prepLine.end={blockID:t,host:e};var o=(0,x.Z)({id:String(Math.random())},this.lineCreating.prepLine);this.$store.commit("addLine",o),this.lineCreating.x1=0,this.lineCreating.y1=0,this.lineCreating.x2=0,this.lineCreating.y2=0,this.lineCreating.status=!1}},getPos:function(t){var e=0,o=0;for(e=0,o=0;null!=t;e+=t.offsetLeft,o+=t.offsetTop,t=t.offsetParent);return{x:e+15,y:o+15}},updateHostCoordinatesByBlockID:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=structuredClone(this.blocks[t]);n.leftProp=e||n.leftProp,n.topProp=o||n.topProp,n["topHost"]=this.getPos(this.$refs["topHost"+t][0]),n["rightHost"]=this.getPos(this.$refs["rightHost"+t][0]),n["bottomHost"]=this.getPos(this.$refs["bottomHost"+t][0]),n["leftHost"]=this.getPos(this.$refs["leftHost"+t][0]),this.$store.commit("updateBlock",n)},handleDragging:function(t,e,o){t.leftProp=e,t.topProp=o,this.updateHostCoordinatesByBlockID(t.id)}}};const I=(0,C.Z)(B,[["render",y]]);var L=I,M=o(2482),O=(o(7327),o(1249),o(8862),o(3907)),_={i8:"0.1.0"},j=(0,O.MT)({state:{version:"1.0.0",blocks:{1:{id:1,topProp:122,leftProp:251,topHost:{x:301,y:122},rightHost:{x:351,y:172},bottomHost:{x:301,y:222},leftHost:{x:251,y:172}},2:{id:2,topProp:315,leftProp:146,topHost:{x:196,y:315},rightHost:{x:246,y:365},bottomHost:{x:196,y:415},leftHost:{x:146,y:365}},3:{id:3,topProp:124,leftProp:44,topHost:{x:94,y:124},rightHost:{x:144,y:174},bottomHost:{x:94,y:224},leftHost:{x:44,y:174}}},lines:{1:{id:1,start:{blockID:3,host:"bottomHost"},end:{blockID:2,host:"leftHost"}},2:{id:2,start:{blockID:1,host:"bottomHost"},end:{blockID:2,host:"topHost"}}}},getters:{getBlocks:function(t,e){return e.getDataByName("blocks")},getLines:function(t,e){return e.getDataByName("lines")},getDataByName:function(t){return function(e){return t[e]}}},actions:{},mutations:{initializeStore:function(t){var e=localStorage.getItem("store");if(e)try{e=JSON.parse(e),e.version==_.i8?this.replaceState(Object.assign(t,e)):t.version=_.i8}catch(o){console.error(o)}else t.version=_.i8},addBlock:function(t,e){t.blocks=(0,x.Z)((0,x.Z)({},t.blocks),{},(0,M.Z)({},e.id,e))},updateBlock:function(t,e){t.blocks[e.id]=e},deleteBlock:function(t,e){var o=t.lines;Object.keys(o).map((function(t){return o[t]})).filter((function(o){o.start.blockID!=e&&o.end.blockID!=e||delete t.lines[o.id]})),delete t.blocks[e]},addLine:function(t,e){t.lines=(0,x.Z)((0,x.Z)({},t.lines),{},(0,M.Z)({},e.id,e))},deleteLine:function(t,e){delete t.lines[e]}},modules:{}}),$=0;j.subscribe((function(t,e){var o={version:e.version,blocks:e.blocks,lines:e.lines};clearTimeout($),$=setTimeout((function(){console.log("Saving store to localStorage"),localStorage.setItem("store",JSON.stringify(o))}),1e3)}));var E=j;(0,n.ri)({extends:L,beforeCreate:function(){this.$store.commit("initializeStore")}}).use(E).mount("#app")}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,s){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],s=t[u][2];for(var l=!0,a=0;a<n.length;a++)(!1&s||r>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[a])}))?n.splice(a--,1):(l=!1,s<r&&(r=s));if(l){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,i,s]}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/draggable-connecting-blocks/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,r=n[0],l=n[1],a=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(a)var u=a(o)}for(e&&e(n);c<r.length;c++)s=r[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(u)},n=self["webpackChunkkonstantin_draggable_connecting_blocks"]=self["webpackChunkkonstantin_draggable_connecting_blocks"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(7754)}));n=o.O(n)})();
//# sourceMappingURL=app-legacy.d92738d7.js.map