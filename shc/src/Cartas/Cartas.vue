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
          {{ card.powerstats | formatarCardInf()}}
        </b-card-text>

        <b-modal  :key="card.id" :id="card.id" :title='card.name' centered>

<<<<<<< HEAD
<<<<<<< HEAD
        <b-modal id="modal-1" title="BootstrapVue">
=======
        <b-modal  id="modal-1" centered title="BootstrapVue">
>>>>>>> parent of 43dd167... Merge branch 'master' of https://github.com/InfnetDFEPB2019/SUPER-HEROES-CARDS
          <p class="my-4">Hello from modal!</p>
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
              {{ card.powerstats | formatarCardInf()}}
            </b-card-text>
          </b-card>
          
        </b-modal>
<<<<<<< HEAD
=======
        
>>>>>>> parent of 598b511... Revert "Merge branch 'master' of https://github.com/InfnetDFEPB2019/SUPER-HEROES-CARDS"
        
=======
>>>>>>> parent of 43dd167... Merge branch 'master' of https://github.com/InfnetDFEPB2019/SUPER-HEROES-CARDS
        
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
}

#info_card{
  display:flex;
  justify-content:center;
  font-family:"Conversation" ;
  font-size:1.5EM;
}





</style>
