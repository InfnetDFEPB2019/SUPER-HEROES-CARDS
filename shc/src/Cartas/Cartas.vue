<template>
  <div >
    <Header/>
    <div>
      <b-card
        title="Homem Aranha"
        img-src="https://upload.wikimedia.org/wikipedia/pt/7/78/Spider-Man_jogo_2018_capa.png"
        img-alt="Spoder"
        img-top
        tag="article"
        style="max-width: 15rem;"
        class="mb-2"
      >
        <b-card-text>
          Descrição do heroi
        </b-card-text>

        <b-button href="#" variant="primary">Comparar</b-button>
      </b-card>
      <b-card
        title="Homem Aranha"
        img-src="https://upload.wikimedia.org/wikipedia/pt/7/78/Spider-Man_jogo_2018_capa.png"
        img-alt="Spoder"
        img-top
        tag="article"
        style="max-width: 15rem;"
        class="mb-2"
      >
        <b-card-text>
          Descrição do heroi
        </b-card-text>

        <b-button href="#" variant="primary">Comparar</b-button>
      </b-card>
    </div>
  </div>
  
    
</template>

<script>

import Header from '../components/Header'


export default {
  name: 'Cartas',
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


</style>
