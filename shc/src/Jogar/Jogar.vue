<template>
  <div class="backfix">
    <Header/>
  <br>
  <br>
  <br>
    
  <section class="Area_cartas">

     
    <div :card="CardsID(2)"   class="Cartas">
      
   
      <b-card
        :title="CardsID(2).name"
        :img-src="CardsID(2).image.url"
        :img-alt="CardsID(2).name"
        img-top
        tag="article"
        style="max-width: 13rem;"
        class="md-2"

        >
        <b-card-text>
              Inteligência: {{CardsID(2).powerstats.intelligence}} <br><button @click="comparar(CardsID(2).powerstats.intelligence,CardsID(3).powerstats.intelligence)" > escolher </button>
              Força: {{CardsID(2).powerstats.strength}}<br><button @click="comparar(CardsID(2).powerstats.strength,CardsID(3).powerstats.strength)" > escolher </button>
              Velocidade: {{CardsID(2).powerstats.speed}}<br><button @click="comparar(CardsID(2).powerstats.speed,CardsID(3).powerstats.speed)" > escolher </button>
              Durabilidade: {{CardsID(2).powerstats.durability}}<br><button @click="comparar(CardsID(2).powerstats.durability,CardsID(3).powerstats.durability)" > escolher </button>
              Poder: {{CardsID(2).powerstats.power}}<br><button @click="comparar(CardsID(2).powerstats.power,CardsID(3).powerstats.power)" > escolher </button>
              Combate: {{CardsID(2).powerstats.combat}}<button @click="comparar(CardsID(2).powerstats.combat,CardsID(3).powerstats.combat)" > escolher </button>
            </b-card-text>
      </b-card>  
      
    </div>
      <div :card="CardsID(3)"   class="Cartas">
      
   
      <b-card 
        :title="CardsID(3).name"
        :img-src="CardsID(3).image.url"
        :img-alt="CardsID(3).name"
        img-top
        tag="article"
        style="max-width: 13rem;"
        class="md-2"

        >
        <b-card-text v-show="hide" >
              Inteligência: {{CardsID(3).powerstats.intelligence}} <br>
              Força: {{CardsID(3).powerstats.strength}}<br>
              Velocidade: {{CardsID(3).powerstats.speed}}<br>
              Durabilidade: {{CardsID(3).powerstats.durability}}<br>
              Poder: {{CardsID(3).powerstats.power}}<br>
              Combate: {{CardsID(3).powerstats.combat}}
            </b-card-text>
      </b-card>  
      
    </div>
    </section>
  </div>
     
</template>

<script>

import Header from '../components/Header'

import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Cartas',
   methods: {
    ...mapActions(["fetchCards","removeCard"]),
    comparar(status1 ,status2){
      status1= parseInt(status1)
      status2= parseInt(status2)

      console.log(status1)
      if(status1 > status2 ){
        
        alert("voce ganhou")
      }
      else if(status2 > status1){
        alert("voce perdeu")
      }
      else{
        alert("os atributos tem o mesmo valor. Por favor escolha outro ")
      }
     
      
    }

  },
  computed: mapGetters(["allCards","CardsID"]),
  created() {
    this.fetchCards();
  },
  components: {
    Header,
 
    
  },
  data() {
      return {
        modalShow: false,
        hide: false,
        
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
.Area_cartas{
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 117px;
  
}
.Cartas{
  display: flex;
  margin:5px;
  text-align:center;
  font-family:"Beckman-free";
  height:410px;
}

#info_card{
  display:flex;
  justify-content:center;
  font-family:"Conversation" ;
  font-size:1.5EM;
}
#bot_detalhes{
  position: absolute;
    left: 50%;
    width: 100px;
    margin-left: -90px;
    bottom:0px;
  margin-bottom:10px;  
}
#bot_rem{

   position: absolute;
    left: 50%;
    width: 70px;
    margin-left:20px;
    bottom:0px;
  margin-bottom:10px; 
  cursor:pointer;
  border-radius: 100%;
}
.backfix{
  height: 140vh;
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




</style>
