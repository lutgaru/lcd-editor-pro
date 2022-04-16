<template>
    <div class="Screen" v-if="screenChars">
        <div v-for="(chars, indexchars) in this.screenChars" :key="this.randomkey+indexchars" style="display: flex;">
        <LcdChar :heightChar=8 :widthChar=5 
        :draworErase="this.draworErase"
        v-for="(char, indexchar) in chars" 
        :key="this.randomkey+indexchar+indexchars" class="Screenchars"
        @changeCharacter="changeCharacter($event,indexchars,indexchar)" />
    </div>
    </div>
</template>

<script>
import LcdChar from './LcdChar.vue'
import random from 'lodash/random';

export default {
    Name: 'LcdScreen',
    components: {
        LcdChar
    },
    data(){
        return{
            randomkey: random(1000) ,
            screenChars:  Array.from(Array(this.heightScreen), () => new Array(this.widthScreen).fill(NaN)),
            //unicChars:[[]]
        }
    },
    props: {
        heightScreen: Number,
        widthScreen: Number,
        draworErase: Boolean,
    },
    methods:{
        changeCharacter(evento,indexchars,indexchar){
            this.screenChars[indexchars][indexchar]=evento
            this.$emit('changeCharacters',this.screenChars)
        }

    },
    watch:{
        widthScreen: function (val){
            this.randomkey= random(1000)
            this.screenChars=Array.from(Array(this.heightScreen), () => new Array(val).fill(NaN))
            //this.$forceUpdate();
        }
    }
}
</script>

<style>
.Screenchars{
    padding: 5px;
}
.Screen{
    border: 1px solid;
    background: rgba(41, 189, 98, 0.89);
    width: fit-content;
    margin: auto;
    border-radius: 10px;
}
</style>