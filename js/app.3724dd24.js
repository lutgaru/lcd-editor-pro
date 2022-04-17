(function(){"use strict";var e={4901:function(e,t,r){var n=r(9242),a=r(3396),i=r(7139),s=r(9147),o=r(2405),c=r(4296);const l={class:"menu top"},h={class:"row no-wrap middle-align"},d=(0,a.uE)('<div class="col middle-align"><img src="'+s+'" class="circle small-margin"><a><div style="font-size:30px;">Opentronika</div></a></div><div class="col center-align"><a><div style="font-size:20px;">LCD Editor Pro</div></a></div>',2),u={class:"col right-align"},g=(0,a._)("i",{class:"blue-text"},"brightness_medium",-1),m=[g],w=(0,a._)("i",{class:"blue-text"},"info",-1),f=[w],v=(0,a._)("div",{class:"modal medium no-scroll top"},null,-1),p=(0,a._)("div",{class:"modal top"},null,-1),b={key:0,id:"info",class:"modal right large active"},y={class:"row no-wrap"},_=(0,a._)("div",{class:"col middle-align"},null,-1),k=(0,a._)("div",{class:"col center-align"},null,-1),C={class:"col right-align"},x=(0,a._)("i",{class:"blue-text"},"close",-1),D=[x],E=(0,a.uE)('<article class="flat center-align large"><img src="'+s+'" class="small-margin AboutImage"><h4 class="center-align">Opentronika</h4><h5 class="center-align AboutItem">The most advanced lcd module editor that exist in the web</h5><h6 class="center-align"> Made by lutgaru </h6><a href="https://github.com/lutgaru/lcd-editor-pro" target="_blank"><img class="tiny" src="'+o+'" alt=""><span class="AboutItem">Github</span></a><br><br><a href="https://www.linkedin.com/in/adrian-neftali-sanchez-b027b9b7/" target="_blank"><img class="tiny" src="'+c+'" alt=""><span class="AboutItem">Linkedin</span></a></article>',1),S={class:"MainDiv"},A={class:"Menu medium-margin"},L=["disabled"],O=(0,a._)("i",null,"mode_edit",-1),M=(0,a._)("span",null,"Draw",-1),j=[O,M],z=["disabled"],N=(0,a._)("i",null,"remove_circle",-1),I=(0,a._)("span",null,"Eraser",-1),H=[N,I],T=(0,a._)("i",null,"clear",-1),Z=(0,a._)("span",null,"Clear",-1),K=[T,Z],P={class:"ItemMenu"},Y=(0,a._)("h6",{class:"surface"},"LCD Size",-1),q={class:"field suffix round fill surface"},B=(0,a._)("i",null,"arrow_drop_down",-1),F={key:0,class:"toast orange white-text active"},J=(0,a._)("i",null,"warning",-1),V=(0,a._)("span",null,"More than 8 characters",-1),$=[J,V],G={class:""};function U(e,t,r,n,s,o){const c=(0,a.up)("LcdScreen"),g=(0,a.up)("VueHighlightJS");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",l,[(0,a._)("div",h,[d,(0,a._)("div",u,[(0,a._)("button",{class:"wave light none white-text",onClick:t[0]||(t[0]=e=>o.updateTheme())},m),(0,a._)("button",{class:"wave light none white-text",onClick:t[1]||(t[1]=e=>o.showInfo())},f)])]),v,p]),this.showinfo?((0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("div",y,[_,k,(0,a._)("div",C,[(0,a._)("button",{class:"wave light none white-text",onClick:t[2]||(t[2]=e=>o.showInfo())},D)])]),E])):(0,a.kq)("",!0),(0,a._)("div",S,[((0,a.wg)(),(0,a.j4)(c,{heightScreen:this.selected[1],widthScreen:this.selected[0],onChangeCharacters:t[3]||(t[3]=e=>o.updateCode(e)),draworErase:this.draworErase,key:s.lcdkey},null,8,["heightScreen","widthScreen","draworErase"]))]),(0,a._)("div",A,[(0,a._)("button",{class:"border small",onClick:t[4]||(t[4]=e=>o.toggleEdit()),disabled:this.draworErase},j,8,L),(0,a._)("button",{class:"border small",onClick:t[5]||(t[5]=e=>o.toggleEdit()),disabled:!this.draworErase},H,8,z),(0,a._)("button",{class:"border small",onClick:t[6]||(t[6]=e=>o.clearScreen())},K)]),(0,a._)("div",P,[Y,(0,a._)("div",q,[(0,a._)("select",{onChange:t[7]||(t[7]=e=>o.changeLcdSize(e))},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.lcdsizes,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.text},(0,i.zw)(e.text),1)))),128))],32),B]),this.eightwarnchar?((0,a.wg)(),(0,a.iD)("div",F,$)):(0,a.kq)("",!0)]),(0,a._)("article",G,[(0,a.Wm)(g,{language:"c",code:this.msg,"data-theme":"dark"},null,8,["code"])])])}const W={key:0,class:"Screen"};function Q(e,t,r,n,i,s){const o=(0,a.up)("LcdChar");return i.screenChars?((0,a.wg)(),(0,a.iD)("div",W,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.screenChars,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:this.randomkey+t,style:{display:"flex"}},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e,((e,r)=>((0,a.wg)(),(0,a.j4)(o,{heightChar:8,widthChar:5,draworErase:this.draworErase,key:this.randomkey+r+t,class:"Screenchars",onChangeCharacter:e=>s.changeCharacter(e,t,r)},null,8,["draworErase","onChangeCharacter"])))),128))])))),128))])):(0,a.kq)("",!0)}const R=["onMouseover"];function X(e,t,r,n,s,o){return(0,a.wg)(),(0,a.iD)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.charData,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:"F2"+t,style:{display:"flex"}},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e,((e,r)=>((0,a.wg)(),(0,a.iD)("div",{onMouseover:e=>o.colorPoint(t,r),key:"C"+r,class:(0,i.C_)({cuadradopintado:e,cuadrado:!e})},null,42,R)))),128))])))),128))])}var ee={name:"LcdChar",data(){return{charData:Array.from(Array(this.heightChar),(()=>new Array(this.widthChar).fill(0))),isMouseDown:!1}},props:{heightChar:Number,widthChar:Number,draworErase:Boolean},methods:{colorPoint:function(e,t){this.isMouseDown&&(this.draworErase?this.charData[e][t]=1:this.charData[e][t]=0,this.$emit("changeCharacter",this.charData))}},mounted(){document.addEventListener("mouseup",(()=>{this.isMouseDown=!1})),document.addEventListener("mousedown",(()=>{this.isMouseDown=!0}))},beforeUnmount(){document.removeEventListener("mouseup",(()=>({}))),document.removeEventListener("mousedown",(()=>({})))}},te=r(89);const re=(0,te.Z)(ee,[["render",X]]);var ne=re,ae=r(3687),ie=r.n(ae),se={Name:"LcdScreen",components:{LcdChar:ne},data(){return{randomkey:ie()(1e3),screenChars:Array.from(Array(this.heightScreen),(()=>new Array(this.widthScreen).fill(NaN)))}},props:{heightScreen:Number,widthScreen:Number,draworErase:Boolean},methods:{changeCharacter(e,t,r){this.screenChars[t][r]=e,this.$emit("changeCharacters",this.screenChars)}},watch:{widthScreen:function(e){this.randomkey=ie()(1e3),this.screenChars=Array.from(Array(this.heightScreen),(()=>new Array(e).fill(NaN)))}}};const oe=(0,te.Z)(se,[["render",Q]]);var ce=oe,le=r(9868),he=(r(3117),r(1795)),de=r(1019);r(2811),r(4651);function ue(e){var t="",r={},n=0;for(let a=0;a<e.length;a++)for(let t=0;t<e[a].length;t++)Array.isArray(e[a][t])&&e[a][t].some((e=>0!==e))&&(r[e[a][t].toString()]=e[a][t]);for(let a in r)t=t.concat("byte customChar",n,"[] = {\n"),n++,r[a].forEach((e=>{t=t.concat("B",e.join("")),t=t.concat(",\n")})),t=t.concat("};\n");return[t,Object.keys(r).length]}var ge=ue;he.Z.registerLanguage("c",de.Z);var me={name:"App",data(){return{lcdkey:ie()(10),msg:"",draworErase:!0,showinfo:!1,selected:[2,2],lcdsizes:[{text:"2x2",value:[2,2]},{text:"1x1",value:[1,1]},{text:"16x2",value:[16,2]},{text:"20x4",value:[20,4]}],theme:"is-dark",eightwarnchar:!1}},components:{LcdScreen:ce,VueHighlightJS:le.Z.component},methods:{updateCode(e){var t;[this.msg,t]=ge(e),this.eightwarnchar=t>8},changeLcdSize(e){this.selected=this.lcdsizes[e.target.selectedIndex].value},toggleEdit(){this.draworErase=!this.draworErase},clearScreen(){this.lcdkey=ie()(10),this.msg="",this.eightwarnchar=!1},updateTheme(){"is-dark"!=this.theme?this.theme="is-dark":this.theme="",document.body.className=this.theme},showInfo(){this.showinfo=!this.showinfo}},mounted(){this.updateTheme()}};const we=(0,te.Z)(me,[["render",U]]);var fe=we;(0,n.ri)(fe).mount("#app")},2405:function(e,t,r){e.exports=r.p+"img/github.62a870b8.svg"},4296:function(e,t,r){e.exports=r.p+"img/linkedin.7abc97ae.svg"},9147:function(e,t,r){e.exports=r.p+"img/opentronika.ccc2a448.png"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,i){if(!n){var s=1/0;for(h=0;h<e.length;h++){n=e[h][0],a=e[h][1],i=e[h][2];for(var o=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(o=!1,i<s&&(s=i));if(o){e.splice(h--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var h=e.length;h>0&&e[h-1][2]>i;h--)e[h]=e[h-1];e[h]=[n,a,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,s=n[0],o=n[1],c=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(c)var h=c(r)}for(t&&t(n);l<s.length;l++)i=s[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(h)},n=self["webpackChunklcd_editor"]=self["webpackChunklcd_editor"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(4901)}));n=r.O(n)})();
//# sourceMappingURL=app.3724dd24.js.map