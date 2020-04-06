<template>
   <div class="areasobre">
      <h1 style="color: white"> Sobre </h1>
      <h2 style="color: white"> Um projeto agregador de conhecimentos, experiências e desafios </h2>

      <section id='texto'>
          <p>
              Esse jogo foi construído com o intuito de integrar todos os conhecimentos obtidos ao longo do bloco de Front-End, para a 
              disciplina Projeto de Bloco - Desenvolvimento Front-End. 
              Durante esse bloco aprendemos a utilizar o JavaScript, HTML, CSS e frameworks que auxiliam na programação e construção de sites reativos e 
              responsíveis. 
              O caminho para a construção do site foi complexo, cheio de pedras e diversos obstáculos, muitas vezes o conhecimento obtido em sala
              não foi o suficiente e o grupo teve que buscar informações além do já ensinado. 
          </p>
          <p>
              A equipe de desenvolvimento desse projeto foi composta por 4 pessoas: Leonardo Ewbank, Nathan Borges, Marcos Aurelios, Matheus Matos.  
         </p>
         <br>
          

      </section>

    </div>

</template>

<script>


export default {
  name: 'Sobre',
  components: {

    
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
  color:black;
  font-family: "theboldfont";
  text-align:center;
}

h2{
  text-align:center;
   font-family: "theboldfont";
}

p{
  color:white;
   font-family: "Beckman-free";
   font-size:1.1EM;
   text-align:justify;
}

#texto{
  margin:0 auto;
  display:block;
  width: 70%;
  margin-bottom:5px;
  text-align:justify;
}
.areasobre{
  background-color:rgba(133, 12, 12);
}
@media only screen and (max-width: 600px) {
  
  h1{
    font-size:1.8EM;
  }
  h2{
    font-size: 1EM;
  }
  p{
    font-size:0.8EM;
  }
}


</style>
