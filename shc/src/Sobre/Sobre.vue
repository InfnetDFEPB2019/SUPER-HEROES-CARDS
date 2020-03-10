<template>
   <div>
      <Header/>

      <h1> Super Heroes Cards </h1>

      <section id='texto'>
          
            <h2> Um projeto agregador de conhecimentos, experiências e desafios </h2>
          <p>
              Esse jogo foi construído com o intuito de integrar todos os conhecimentos obtidos ao longo do bloco de Front-End.
              Durante esse bloco aprendemos a utilizar o JavaScript, HTML, CSS e frameworks que auxiliam na programação de sites funcionais
              e responsívos. 
              O caminho para a construção do site foi complexo, cheio de pedras e diversos obstáculos, muitas vezes o conhecimento obtido em sala
              não foi o suficiente e o grupo teve que buscar informações além do já ensinado. 
          </p>
     
          <br>
          <p>
              A equipe de desenvolvimento desse projeto foi composta por 4 pessoas: Leonardo Ewbank, Nathan Borges, Marcos Aurelios, Matheus Matos. 
              Esse projeto foi o primeiro da equipe na faculdade. 
         </p>
          

      </section>

    </div>
    
        
    


</template>

<script>

import Header from '../components/Header'


export default {
  name: 'Sobre',
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
h1 {
  font-size:50px;
  margin-top:10px;
  color:green;
}

#texto{
  margin:0 auto;
  display:block;
  width: 1000px;
  background-color:pink;
}


</style>
