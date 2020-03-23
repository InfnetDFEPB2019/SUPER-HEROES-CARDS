<template>
  <div>
    <Header/>
  <section class="Area_cartas">
    
    <div v-for ="card in allCards" :key="card.id" class="Cartas">
     
      <b-card
        :title="card.name"
        :img-src="card.image.url"
        :img-alt="card.name"
        img-top
        tag="article"
        style="max-width: 13rem;"
        class="md-2"
      >
        <b-button  @click="$bvModal.show(card.id)" id='bot_detalhes'>Detalhes</b-button>

        <b-modal  :key="card.id" :id="card.id" :title='card.name' centered ok-only ok-title="Fechar" ok-variant="danger " auto-focus-button="ok">

         <div id='info_card'>        
          <b-card
            :img-src="card.image.url"
            :img-alt="card.name"
            img-top
            tag="article"
            style="max-width: 13rem;"
            class="md-2"
          >
            <b-card-text>
              Inteligência: {{card.powerstats.intelligence}} <br>
              Força: {{card.powerstats.strength}}<br>
              Velocidade: {{card.powerstats.speed}}<br>
              Durabilidade: {{card.powerstats.durability}}<br>
              Poder: {{card.powerstats.power}}<br>
              Combate: {{card.powerstats.combat}}
            </b-card-text>
          </b-card>
          </div>
        </b-modal>
        
        
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
    ...mapActions(["fetchCards"]),

  },
  computed: mapGetters(["allCards"]),
  created() {
    this.fetchCards();
  },
  components: {
    Header,
    
  },
  data() {
      return {
        modalShow: false
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
.Area_cartas{
  display: flex;
  margin-left:5px;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 117px;
  background-color:black;
  
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
    margin-left: -50px;
    bottom:0px;
  margin-bottom:10px;
  
  
  
}





</style>
