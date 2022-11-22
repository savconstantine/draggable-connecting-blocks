(function(){"use strict";var t={3923:function(t,e,o){var i=o(9963),s=o(6252),n=o(3577),r=o.p+"img/delete.aae51811.svg";const l={id:"main"},a={class:"innerElement"},h=["onClick"],c={key:0,class:"remove-area"},g=["onClick"],d={style:{width:"100%",height:"100%"},width:"5000",height:"5000"},p=["onClick","x1","y1","x2","y2"],u=["x1","y1","x2","y2"],f={"data-dial-init":"",class:"fixed left-6 bottom-6 group"},k=(0,s._)("svg",{class:"w-8 h-8 rotate-45",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})],-1),m=[k],b=(0,s._)("svg",{class:"w-8 h-8 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})],-1),v=[b];function y(t,e,o,i,k,b){const y=(0,s.up)("DragBlock");return(0,s.wg)(),(0,s.iD)("div",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(b.blocks,((t,e)=>((0,s.wg)(),(0,s.j4)(y,{"block-prop":t,onEmitDragging:b.updateHostCoordinatesByBlockID,key:"dragBlock"+e},{default:(0,s.w5)((()=>[(0,s._)("div",a,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(k.lineHosts,((t,o)=>((0,s.wg)(),(0,s.iD)("div",{key:"lineHost"+e+"_"+o,class:(0,n.C_)(["host",t+"Host"]),ref_for:!0,ref:t+"Host"+e,onClick:o=>b.setLine(e,t+"Host")},null,10,h)))),128)),!1===k.lineCreating.status?((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("img",{onClick:t=>b.removeBlock(e),src:r},null,8,g)])):(0,s.kq)("",!0)])])),_:2},1032,["block-prop","onEmitDragging"])))),128)),((0,s.wg)(),(0,s.iD)("svg",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(b.lines,((t,e)=>((0,s.wg)(),(0,s.iD)("line",{class:"line",onClick:t=>b.removeLine(e),x1:b.blocks[t.start.blockID][t.start.host]["x"],y1:b.blocks[t.start.blockID][t.start.host]["y"],x2:b.blocks[t.end.blockID][t.end.host]["x"],y2:b.blocks[t.end.blockID][t.end.host]["y"],stroke:"black",key:"line"+e},null,8,p)))),128)),!0===k.lineCreating.status?((0,s.wg)(),(0,s.iD)("line",{key:0,x1:k.lineCreating.x1,y1:k.lineCreating.y1,x2:k.lineCreating.x2,y2:k.lineCreating.y2,stroke:"black"},null,8,u)):(0,s.kq)("",!0)])),(0,s._)("div",f,[!0===k.lineCreating.status?((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:e[0]||(e[0]=t=>b.cancelLineCreating()),type:"button",class:"flex justify-center items-center w-14 h-14 text-white bg-pink-700 rounded-full hover:bg-pink-800 dark:bg-pink-600 dark:hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 focus:outline-none dark:focus:ring-pink-800 transition duration-500 hover:scale-125"},m)):((0,s.wg)(),(0,s.iD)("button",{key:1,onClick:e[1]||(e[1]=t=>b.addBlock()),type:"button",class:"flex justify-center items-center w-14 h-14 text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800 transition duration-500 hover:scale-125"},v))])])}o(2801),o(1295);function x(t,e,o,n,r,l){return(0,s.wg)(),(0,s.iD)("div",{class:"drag-block",onMousedown:e[0]||(e[0]=(0,i.iM)(((...t)=>l.drag&&l.drag(...t)),["stop"])),onMouseup:e[1]||(e[1]=(0,i.iM)(((...t)=>l.drop&&l.drop(...t)),["stop"]))},[(0,s.WI)(t.$slots,"default")],32)}var w={name:"DragBlock",props:{blockProp:{type:Object,default:()=>({})}},data(){return{shiftY:null,shiftX:null,left:0,top:0,element:null,parent:{width:0,height:0}}},methods:{elementMove(t){t.preventDefault();const e=t.pageX,o=t.pageY;let i=e-this.shiftX,s=o-this.shiftY;const n=e-this.shiftX+this.element.offsetWidth,r=o-this.shiftY+this.element.offsetHeight;i=i<0?0:n>this.parent.width?this.parent.width-this.element.offsetWidth:e-this.shiftX,s=s<0?0:r>this.parent.height?this.parent.height-this.element.offsetHeight:o-this.shiftY,this.element.style.left=`${i}px`,this.left=i,this.element.style.top=`${s}px`,this.top=s,this.$emit("emitDragging",this.blockProp.id,this.left,this.top)},drag(t){this.parent.width=this.parentWidth||this.element.parentNode.offsetWidth,this.parent.height=this.parentHeight||this.element.parentNode.offsetHeight,this.shiftX=t.pageX-this.element.offsetLeft,this.shiftY=t.pageY-this.element.offsetTop,t.pageX&&(this.element.addEventListener("mousemove",this.elementMove),this.element.addEventListener("mouseleave",this.drop))},drop(){this.element.removeEventListener("mousemove",this.elementMove,!1),this.element.onmouseup=null}},mounted(){this.element=this.$el,this.element.style.left=`${this.blockProp.leftProp}px`,this.left=this.blockProp.leftProp,this.element.style.top=`${this.blockProp.topProp}px`,this.top=this.blockProp.topProp}},H=o(3744);const C=(0,H.Z)(w,[["render",x]]);var D=C,P={name:"App",components:{DragBlock:D},data(){return{lineHosts:["top","right","bottom","left"],lineCreating:{status:!1,x1:0,y1:0,x2:0,y2:0,prepLine:{start:{blockID:"",host:""},end:{blockID:"",host:""}}}}},computed:{blocks(){return this.$store.getters.getBlocks},lines(){return this.$store.getters.getLines}},beforeMount(){},mounted(){let t=Object.keys(this.blocks);0!==t.length&&t.forEach((t=>this.updateHostCoordinatesByBlockID(t)))},destroyed:function(){window.removeEventListener("mousemove",this.mouseIsMoving)},methods:{removeLine(t){this.$store.commit("deleteLine",t)},removeBlock(t){this.$store.commit("deleteBlock",t)},addBlock(){let t=0,e=700,o=String(Math.random());const i={id:o,topProp:Math.random()*(e-t)+t,leftProp:Math.random()*(e-t)+t,topHost:{x:35,y:-15},rightHost:{x:85,y:35},bottomHost:{x:35,y:85},leftHost:{x:-15,y:35}};this.$store.commit("addBlock",i)},cancelLineCreating(){this.lineCreating={status:!1,x1:0,y1:0,x2:0,y2:0,prepLine:{start:{blockID:"",host:""},end:{blockID:"",host:""}}}},mouseIsMoving(t){this.lineCreating.x2=t.pageX,this.lineCreating.y2=t.pageY},setLine(t,e){if(this.updateHostCoordinatesByBlockID(t),!1===this.lineCreating.status)this.lineCreating.status=!0,this.lineCreating.x1=this.blocks[t][e]["x"],this.lineCreating.y1=this.blocks[t][e]["y"],this.lineCreating.x2=this.blocks[t][e]["x"],this.lineCreating.y2=this.blocks[t][e]["y"],this.lineCreating.prepLine.start={blockID:t,host:e},window.addEventListener("mousemove",this.mouseIsMoving);else{window.removeEventListener("mousemove",this.mouseIsMoving),this.lineCreating.prepLine.end={blockID:t,host:e};const o={id:String(Math.random()),...this.lineCreating.prepLine};this.$store.commit("addLine",o),this.lineCreating.x1=0,this.lineCreating.y1=0,this.lineCreating.x2=0,this.lineCreating.y2=0,this.lineCreating.status=!1}},getPos(t){let e=0,o=0;for(e=0,o=0;null!=t;e+=t.offsetLeft,o+=t.offsetTop,t=t.offsetParent);return{x:e+15,y:o+15}},updateHostCoordinatesByBlockID(t,e=!1,o=!1){const i=structuredClone(this.blocks[t]);i.leftProp=e||i.leftProp,i.topProp=o||i.topProp,i["topHost"]=this.getPos(this.$refs["topHost"+t][0]),i["rightHost"]=this.getPos(this.$refs["rightHost"+t][0]),i["bottomHost"]=this.getPos(this.$refs["bottomHost"+t][0]),i["leftHost"]=this.getPos(this.$refs["leftHost"+t][0]),this.$store.commit("updateBlock",i)},handleDragging(t,e,o){t.leftProp=e,t.topProp=o,this.updateHostCoordinatesByBlockID(t.id)}}};const B=(0,H.Z)(P,[["render",y]]);var I=B,L=o(3907),M={i8:"0.1.0"};const $=(0,L.MT)({state:{version:"1.0.0",blocks:{1:{id:1,topProp:122,leftProp:251,topHost:{x:301,y:122},rightHost:{x:351,y:172},bottomHost:{x:301,y:222},leftHost:{x:251,y:172}},2:{id:2,topProp:315,leftProp:146,topHost:{x:196,y:315},rightHost:{x:246,y:365},bottomHost:{x:196,y:415},leftHost:{x:146,y:365}},3:{id:3,topProp:124,leftProp:44,topHost:{x:94,y:124},rightHost:{x:144,y:174},bottomHost:{x:94,y:224},leftHost:{x:44,y:174}}},lines:{1:{id:1,start:{blockID:3,host:"bottomHost"},end:{blockID:2,host:"leftHost"}},2:{id:2,start:{blockID:1,host:"bottomHost"},end:{blockID:2,host:"topHost"}}}},getters:{getBlocks(t,e){return e.getDataByName("blocks")},getLines(t,e){return e.getDataByName("lines")},getDataByName:t=>e=>t[e]},actions:{},mutations:{initializeStore(t){let e=localStorage.getItem("store");if(e)try{e=JSON.parse(e),e.version==M.i8?this.replaceState(Object.assign(t,e)):t.version=M.i8}catch(o){console.error(o)}else t.version=M.i8},addBlock(t,e){t.blocks={...t.blocks,[e.id]:e}},updateBlock(t,e){t.blocks[e.id]=e},deleteBlock(t,e){let o=t.lines;Object.keys(o).map((t=>o[t])).filter((o=>{o.start.blockID!=e&&o.end.blockID!=e||delete t.lines[o.id]})),delete t.blocks[e]},addLine(t,e){t.lines={...t.lines,[e.id]:e}},deleteLine(t,e){delete t.lines[e]}},modules:{}});let O=0;$.subscribe(((t,e)=>{let o={version:e.version,blocks:e.blocks,lines:e.lines};clearTimeout(O),O=setTimeout((()=>{console.log("Saving store to localStorage"),localStorage.setItem("store",JSON.stringify(o))}),1e3)}));var _=$;(0,i.ri)({extends:I,beforeCreate(){this.$store.commit("initializeStore")}}).use(_).mount("#app")}},e={};function o(i){var s=e[i];if(void 0!==s)return s.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,i,s,n){if(!i){var r=1/0;for(c=0;c<t.length;c++){i=t[c][0],s=t[c][1],n=t[c][2];for(var l=!0,a=0;a<i.length;a++)(!1&n||r>=n)&&Object.keys(o.O).every((function(t){return o.O[t](i[a])}))?i.splice(a--,1):(l=!1,n<r&&(r=n));if(l){t.splice(c--,1);var h=s();void 0!==h&&(e=h)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[i,s,n]}}(),function(){o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/draggable-connecting-blocks/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,n,r=i[0],l=i[1],a=i[2],h=0;if(r.some((function(e){return 0!==t[e]}))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(a)var c=a(o)}for(e&&e(i);h<r.length;h++)n=r[h],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(c)},i=self["webpackChunkkonstantin_draggable_connecting_blocks"]=self["webpackChunkkonstantin_draggable_connecting_blocks"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(3923)}));i=o.O(i)})();
//# sourceMappingURL=app.288830b3.js.map