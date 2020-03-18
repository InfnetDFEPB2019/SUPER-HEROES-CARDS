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
        <b-card-text>
          {{card.powerstats}}
        </b-card-text>

        <b-button href="#" variant="primary">Comparar</b-button>
        
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
  padding: 10px;
  margin-top: 117px;
}
.Cartas{
  display: flex;
  margin: 5px
}


</style>
