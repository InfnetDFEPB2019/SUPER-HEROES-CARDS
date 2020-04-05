<template>
  <div>

     <div id="addd">
    
      <br>
      <a v-on:click='mostrarArq'> <img id="btn_acesso" src="../assets/logo.png" /> <h1 id='text_add'> Adicionar herói </h1> </a>
      
    </div>

    <b-form @submit.prevent="onSubmit" v-if="mostrarJogos"  id="form">
      <div class="formatarinput">
        <label for="name">Nome:</label>
          
        <input type="text" id="name" name="name" placeholder="Insira o nome do herói" v-model="addCard.name" required />
      </div>
      <div class="formatarinput2">
        <label for="powerstat_intelligence">Inteligencia:</label>
    
        <input type="number" min="0" max="100" id="powerstat_intelligence" name="powerstat_intelligence" v-model="addCard.powerstats.intelligence" required/>
      </div>
      <div class="formatarinput3">
        <label for="powerstat_strength">Força:</label>
        
        <input type="number" min="0" max="100" id="powerstat_strength" name="powerstat_strength" v-model="addCard.powerstats.strength" required/>
      </div>
      <div class="formatarinput4">
        <label for="powerstat_speed">Velocidade:</label>
        
        <input type="number" min="0" max="100" id="powerstat_speed" name="powerstat_speed" v-model="addCard.powerstats.speed" required/>
      </div>  
      <div class="formatarinput5">
        <label for="powerstat_durability">Durabilidade:</label>
       
        <input type="number" min="0" max="100" id="powerstat_durability" name="powerstat_durability" v-model="addCard.powerstats.durability" required/>
      </div> 
      <div class="formatarinput6">
        <label for="powerstat_power">Poder:</label>
        
        <input type="number" min="0" max="100" id="powerstat_power" name="powerstat_power" v-model="addCard.powerstats.power" required/>
      </div>  
      <div class="formatarinput7">
        <label for="powerstat_combat">Combate:</label>
        
        <input type="number" min="0" max="100" id="powerstat_combat" name="powerstat_combat" v-model="addCard.powerstats.combat" required/>
      </div>
      <div class="formatarinput8">
        <label for="img_url">Imagem:</label>
        
        <input type="url"  id="img_url" name="img_url" v-model="addCard.image.url" required/>
      </div>
        

        <button type='submit' id="btn_add">Submit </button>

    </b-form>

  </div>
     
</template>

<script>


import {mapActions } from "vuex";

export default {
  name: 'addCart',
  data(){
    return{
      mostrarJogos:false,
      addCard:{
        name:"",
        powerstats:{
          intelligence:'',
          strength:'',
          speed:'',
          durability:'',
          power:'',
          combat:'',
        },
        image:{
         url:"",
        }

      }
    }
  },
   methods: {
    ...mapActions(["addCartas"]),
    onSubmit() {
      this.addCartas(this.addCard);
    },
     mostrarArq() {
      this.mostrarJogos = this.mostrarJogos ? false : true;
    }

  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family:"Beckman-free";
  src: url("../assets/Beckman-Free.otf");
}
@font-face {
  font-family: "Conversation";
  src: url("../assets/Conversation.otf");
}
@font-face {
  font-family: "theboldfont";
  src: url("../assets/theboldfont.ttf");
}
#addd{
  margin:0 auto;
  text-align:center;
  font-family: 'Revamped',Arial, Helvetica, sans-serif;
}
#form{
 
  align-content: left;
  margin:0 auto;
  text-align:left;
  width:100%;
  color: white;
  margin-top: -10px;


}
#powerstat_intelligence{
  margin-left: 19px;
}
#powerstat_strength{
  margin-left: 62px;
}
#powerstat_speed{
  margin-left: 23px;
}
#powerstat_durability{
  margin-left: 10px;
}
#powerstat_power{
  margin-left: 59px;
}
#powerstat_combat{
  margin-left: 36px;
}
#img_url{
  margin-left: 0px;
}
input{
  border-radius: 8px;
  margin-left: 10px;
  text-align: center!important;
}
.formatarinput{
  display: inline-flex;
  margin: 0;
}
.formatarinput2{
  display: inline-flex;
  margin: 0;
}
.formatarinput3{
  display: inline-flex;
  margin: 0;
}
.formatarinput4{
  display: inline-flex;
  margin: 0;
}
.formatarinput5{
  display: inline-flex;
  margin: 0;
}
.formatarinput6{
  display: inline-flex;
  margin: 0;
}
.formatarinput7{
  display: inline-flex;
  margin: 0;
}
.formatarinput8{
  display: inline-flex;
  margin: 0;
}
.divider{
    width:2px;
    height:auto;
    display:inline-block;
}
#btn_acesso{
  font-size:1.5Em;
  background-color:mediumseagreen; 
  color:black;
  width:90px;
  text-align: center;
  cursor: pointer;
  border-radius: 15px;
  border-radius:50%;
  font-family: 'Life Savers', cursive;
  margin-bottom:5px;
}

#btn_add{
  margin-top:10px;
  margin-left: 40%;
}
#text_add{
  cursor:pointer;
  color:white;
}
form#form{
  width: 20%;
  
}



</style>
