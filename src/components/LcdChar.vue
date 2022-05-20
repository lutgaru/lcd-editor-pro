<template>
<div style="display: flex" >
    <div >
        <div v-for="(chars, indexchars) in charDatadef" :key="'F2'+indexchars" style="display: flex;">
            <div 
            v-on:mouseover="colorPoint(indexchars ,indexchar)" 
            v-for="(char, indexchar) in chars" 
            :key="'C'+indexchar" 
            v-bind:class="{cuadradopintado:char,cuadrado:!char}"></div>
        </div>
    </div>
 </div>

</template>

<script>
export default {
    name: 'LcdChar',

    data(){
        return{
            isMouseDown: false,
            charData: this.charDatadef
        }
    },
    props: {
        heightChar: Number,
        widthChar: Number,
        charDatadef: Array,
        draworErase: Boolean,
        widthcharstable: Boolean,
    },
    methods: {
        colorPoint: function (k,n) {

            if(!this.isMouseDown){
                return
            }
            if(this.draworErase){
            this.charData[k][n]=1
            }
            else {
            this.charData[k][n]=0
            }
            this.$emit('changeCharacter',this.charData)
        },
    },
    mounted () {
    
    document.addEventListener('mouseup', () => {
        this.isMouseDown = false
    })
    document.addEventListener('mousedown', () => {
        this.isMouseDown = true
    })
    },
    beforeUnmount () {
        
        document.removeEventListener('mouseup', () => ({}))
        document.removeEventListener('mousedown', () => ({}))
    },
    events:{
        'selectdefchar':function(charsel){ 
            this.charData =  charsel;
        }
    }
    
}
</script>

<style>
.cuadrado {
  width:25vh;
  max-width:10px;
  height:25vh;
  max-height:10px;
  position:relative;
  /* background:rgb(45, 199, 83); */
  border: 1px solid black;
}

.cuadradopintado {
  width:25vh;
  max-width:10px;
  height:25vh;
  max-height:10px;
  position:relative;
  background:rgb(15, 98, 36);
  border: 1px solid black;
}

.customselect{
  background: #40c320
}

.customtablebutton{
width: 10pt;
height: 10pt;
min-width: 16pt;
padding: 0pt;
margin: 0pt;
height: 16pt;
min-height: 16pt;
}
</style>
