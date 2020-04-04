<template>
  <div>

     <div id="addd">
    
      <br>
      <a v-on:click='mostrarArq'> <img id="btn_acesso" src="../assets/logo.png" /> <h1 id='text_add'> Adicionar herói </h1> </a>
      
    </div>

    <b-form @submit.prevent="onSubmit" v-if="mostrarJogos"  id="form">

        <label for="name">Nome:</label>
        <br/>
        <input type="text" id="name" name="name" placeholder="Insira o nome do herói" v-model="addCard.name" required />
        <br/>
        <label for="powerstat_intelligence">Inteligencia:</label>
        <br/>
        <input type="number" min="0" max="100" id="powerstat_intelligence" name="powerstat_intelligence" v-model="addCard.powerstats.intelligence" required/>
        <br/>
        <label for="powerstat_strength">Força:</label>
        <br/>
        <input type="number" min="0" max="100" id="powerstat_strength" name="powerstat_strength" v-model="addCard.powerstats.strength" required/>
        <br/>
        <label for="powerstat_speed">Velocidade:</label>
        <br/>
        <input type="number" min="0" max="100" id="powerstat_speed" name="powerstat_speed" v-model="addCard.powerstats.speed" required/>
        <br/>
        <label for="powerstat_durability">Durabilidade:</label>
        <br/>
        <input type="number" min="0" max="100" id="powerstat_durability" name="powerstat_durability" v-model="addCard.powerstats.durability" required/>
        <br/>
        <label for="powerstat_power">Poder:</label>
        <br/>
        <input type="number" min="0" max="100" id="powerstat_power" name="powerstat_power" v-model="addCard.powerstats.power" required/>
        <br/>
        <label for="powerstat_combat">Combate:</label>
        <br/>
        <input type="number" min="0" max="100" id="powerstat_combat" name="powerstat_combat" v-model="addCard.powerstats.combat" required/>
        <br/>
         <label for="img_url">Imagem:</label>
        <br/>
        <input type="url"  id="img_url" name="img_url" v-model="addCard.image.url" required/>
        <br/>
        

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
 
  align-content: center;
  margin:0 auto;
  text-align:center;
  width:100%;
  color: white;
  margin-top: -10px;


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
}
#text_add{
  cursor:pointer;
  color:white;
}



</style>
