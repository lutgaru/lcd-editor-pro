<template>
<div>
  <div class="menu top">
      <div class="row no-wrap middle-align">
        <div class="col middle-align">
          <img src="./assets/opentronika.png" class="circle small-margin">
          <a>
            <div style="font-size:30px">Opentronika</div>
          </a>
        </div>
        <div class="col center-align">
          <a> 
            <div style="font-size:20px">LCD Editor Pro</div>
          </a>
        </div>
        <div class="col right-align">
          <button class="wave light none white-text" @click="updateTheme()">
            <i class="blue-text">brightness_medium</i>
          </button>
          <button class="wave light none white-text" @click="showInfo()">
            <i class="blue-text">info</i>
          </button>
        </div>
      </div>
      
    <div class="modal medium no-scroll top"></div>
    <div class="modal top"></div>
  </div>
  <div id="info" v-if="this.showinfo" class="modal right large active">
    <div class="row no-wrap">
      <div class="col middle-align">
      </div>
      <div class="col center-align">
      </div>
      <div class="col right-align ">
          <button class="wave light none white-text" @click="showInfo()">
          <i class="blue-text">close</i>
        </button>
      </div>
    </div>
    <article class="flat center-align large">
     <img src="./assets/opentronika.png" class="small-margin AboutImage">
     <h4 class="center-align">Opentronika</h4>
     <h5 class="center-align AboutItem">The most advanced lcd module editor tha exist in the web</h5>
     <h6 class="center-align">
       Made by lutgaru
     </h6>
     <a href="https://github.com/lutgaru/lcd-editor-pro" target="_blank">
       <img class="tiny" src="./assets/github.svg" alt="">
       <span class="AboutItem">Github</span>
     </a>
     <br>
     <br>
    <a href="https://www.linkedin.com/in/adrian-neftali-sanchez-b027b9b7/" target="_blank">
      <img class="tiny" src="./assets/linkedin.svg" alt="">
      <span class="AboutItem">Linkedin</span>
    </a>
      
    </article>
  </div>
  <div  class="MainDiv">
      <LcdScreen :heightScreen=this.selected[1] 
      :widthScreen=this.selected[0] 
      @changeCharacters="updateCode($event)"
      :draworErase="this.draworErase"
      :key="lcdkey" />
    </div>
    <div class="Menu medium-margin">
      <button class="border small" @click="toggleEdit()" :disabled="this.draworErase">
        <i>mode_edit</i>
        <span>Draw</span>
      </button>
      <button class="border small" @click="toggleEdit()" :disabled="!this.draworErase">
        <i>remove_circle</i>
        <span>Eraser</span>
      </button>
      <button class="border small" @click="clearScreen()">
        <i>clear</i>
        <span>Clear</span>
      </button>        
    </div>
    <div class="ItemMenu">
      <h6 class="surface">LCD Size</h6>
      <div class="field suffix round fill surface">
        <select @change="changeLcdSize($event)" >
          <option v-for="size in lcdsizes" :key=size.text>
            {{size.text}}
          </option>
        </select>
        <i>arrow_drop_down</i>
      </div>
      <div v-if="this.eightwarnchar" class="toast orange white-text active">
        <i>warning</i>
        <span>More than 8 characters</span>
      </div>
    </div>
    <article class="">
      <VueHighlightJS
        language="c"
        :code="this.msg"
        data-theme="dark"
    />
    </article>
    
  </div>
  
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import LcdScreen from './components/LcdScreen.vue';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import 'highlight.js/lib/common';
import hljs from 'highlight.js/lib/core';
import c from 'highlight.js/lib/languages/c';
import "beercss";
import "material-dynamic-colors";
hljs.registerLanguage('c', c);
import 'highlight.js/styles/a11y-dark.css';
//import 'highlight.js/styles/stackoverflow-light.css';
import random from 'lodash/random';
import getCodeString from './scripts/getcodestring.js'

export default {
  name: 'App',
  data(){
        return{
            lcdkey:random(10),
            msg: '',
            draworErase: true,
            showinfo:false,
            selected:[2,2],
            lcdsizes:[
              { text: '2x2', value: [2,2] },
              { text: '1x1', value: [1,1] },
              { text: '16x2', value: [16,2] },
              { text: '20x4', value: [20,4] }
            ],
            theme: "is-dark",
            eightwarnchar: false,
        }
    },
  components: {
    LcdScreen,
    VueHighlightJS :hljsVuePlugin.component
  },
  methods:{
      updateCode(characters){
          var charquantity
          [this.msg,charquantity]=getCodeString(characters)
          this.eightwarnchar=(charquantity>8)
          
      },
      changeLcdSize(event){
        this.selected=this.lcdsizes[event.target.selectedIndex].value
      },
      toggleEdit(){
        this.draworErase=!this.draworErase
      },
      clearScreen(){
        this.lcdkey=random(10)
        this.msg=''
        this.eightwarnchar=false
      },
      updateTheme(){
        if(this.theme!="is-dark"){
          this.theme = "is-dark"
        }
        else{
          this.theme = "";
        }
        
        document.body.className = this.theme;

      },
      showInfo(){
        this.showinfo=!this.showinfo
      }

  },
  mounted() {
    this.updateTheme();
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  justify-content: center;
  margin-top: 60px;
}
.Codebox{
  width: 70%;
  margin: auto;
}
.MainDiv{
  width: 100%;
  margin-top: 100px;
}
.CodeDiv{
  width: 100%;
  margin: 100px;
}
.Menu{
  margin: auto;
  text-align: center;
  align-content: center;
  display: flex;
  justify-content: center;
}
.ItemMenu{
  text-align: center;
  padding-left: 10px;
  align-content: center;
  display: flex;
  justify-content: center;
}
.AboutImage{
  height: 120rem;
  width: 120rem;
}
.AboutItem{
  padding: 10pt;
}

</style>
