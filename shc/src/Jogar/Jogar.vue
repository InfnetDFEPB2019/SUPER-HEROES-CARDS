<template>
  <div class="backfix">
    <HeaderJogo/>
  <br>
  <br>
  <br>
    
  <section class="Area_cartas">

     
    <div :card="CardsID(a)"   class="Cartas1">
      
   
      <b-card
        :title="CardsID(parseInt(a)).name"
        :img-src="CardsID(parseInt(a)).image.url"
        :img-alt="CardsID(a).name"
        img-top
        tag="article"
        style="max-width: 16rem;"
        class="md-2"

        >
        <b-card-text class="Cartas1Text">
          <div class="formatarStatus">
              Inteligência: {{CardsID(a).powerstats.intelligence}}<button class="botaointel" @click="comparar(CardsID(a).powerstats.intelligence,CardsID(b).powerstats.intelligence)" > escolher </button>
          </div>
          <div class="formatarStatus">
              Força: {{CardsID(a).powerstats.strength}}<button class="botaoforça" @click="comparar(CardsID(a).powerstats.strength,CardsID(b).powerstats.strength)" > escolher </button>
          </div> 
          <div class="formatarStatus">   
              Velocidade: {{CardsID(a).powerstats.speed}}<button class="botaoveloci" @click="comparar(CardsID(a).powerstats.speed,CardsID(b).powerstats.speed)" > escolher </button>
          </div>
          <div class="formatarStatus">    
              Durabilidade: {{CardsID(a).powerstats.durability}}<button @click="comparar(CardsID(a).powerstats.durability,CardsID(b).powerstats.durability)" > escolher </button>
          </div>
          <div class="formatarStatus">    
              Poder: {{CardsID(a).powerstats.power}}<button class="botaopoder" @click="comparar(CardsID(a).powerstats.power,CardsID(b).powerstats.power)" > escolher </button>
          </div>             
          <div class="formatarStatus">    
              Combate: {{CardsID(a).powerstats.combat}}<button class="botaocombate" @click="comparar(CardsID(a).powerstats.combat,CardsID(b).powerstats.combat)" > escolher </button>
          </div>
        </b-card-text>
      </b-card>  
      
    </div>
    <div class="vs">
      <h1> VS </h1>
    </div>
    <div :card="CardsID(b)"   class="Cartas">
      
   
      <b-card 
        :title="CardsID(b).name"
        :img-src="CardsID(b).image.url"
        :img-alt="CardsID(b).name"
        img-top
        tag="article"
        style="max-width: 16rem;"
        class="md-2"

        >
        <b-card-text v-show="hide" >
              Inteligência: {{CardsID(b).powerstats.intelligence}} <br>
              Força: {{CardsID(b).powerstats.strength}}<br>
              Velocidade: {{CardsID(b).powerstats.speed}}<br>
              Durabilidade: {{CardsID(b).powerstats.durability}}<br>
              Poder: {{CardsID(b).powerstats.power}}<br>
              Combate: {{CardsID(b).powerstats.combat}}
            </b-card-text>
      </b-card>  
      
    </div>
    </section>
  </div>
     
</template>

<script>

import HeaderJogo from '../components/HeaderJogo'

import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Cartas',
   methods: {
    ...mapActions(["removeCard"]),
    comparar(status1 ,status2){
      status1= parseInt(status1)
      status2= parseInt(status2)

      console.log(status1)
      if(status1 > status2 ){
        
        alert("Você ganhou")
         window.location.reload()
      }
      else if(status2 > status1){
        alert("Você perdeu")
         window.location.reload()
      }
      if(status2==status1){
        alert("Os atributos tem o mesmo valor. Por favor escolha outro ");
       
      }


      
  }, 

  
      

    
    
  },
  computed: mapGetters(["allCards","CardsID"]),
  
  components: {
    HeaderJogo,
 
    
  },
  data() {
      return {
        modalShow: false,
        hide: false,
        a : parseInt(Math.random() * (52 - 1) + 1),
        b : parseInt(Math.random() * (52 - 1) + 1), 
        
    }
  },
 
  props:{
    card:{type: Object}
   
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
@font-face {
  font-family: "SSF4";
  src: url("../assets/SSF4 ABUKET.ttf");
}
.Area_cartas{
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
  
}
.vs{
  padding: 180px 100px;
}
h1{
  font-family: "SSF4";
  font-size: 90px;
}
#logo{
  width:45px;
  margin-left: 0;
  border-radius: 99%;
  align-items:left;
  transition: 0.5s;
}
.Cartas{
  display: flex;
  margin:5px;
  text-align:center;
  font-family:"Beckman-free";
  height:410px;
}
.Cartas1{
  display: flex;
  margin:5px;
  text-align:center;
  font-family:"Beckman-free";
  height:auto;
  width: auto;
  font-size: 15px;
}
.Cartas1Text{
  width: auto;
  text-align: left;
}
.formatarStatus{
  display: inline-flex;
  padding: 2px;
  width: 100%;
  
}

#info_card{
  justify-content:center;
  font-family:"Conversation" ;
  font-size:1.5EM;
}
#bot_detalhes{
    left: 50%;
    width: 100px;
    margin-left: -90px;
    bottom:0px;
  margin-bottom:10px;  
}
#bot_rem{
    left: 50%;
    width: 70px;
    margin-left:20px;
    bottom:0px;
  margin-bottom:10px; 
  cursor:pointer;
  border-radius: 100%;
}
.backfix{
  height: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2f4f4f;
	background: url("../assets/batman.jpg");
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-position-y: 0;
	opacity: 1;
	color: #010102;
  background-attachment: fixed;
}
button{
  font-size: 13px;
  padding: 0px 0px;
  margin-left: 2px;
}




</style>
