<template>
   <div class="areasobre">
      <h1 style="color: white"> Sobre </h1>

      <section id='texto'>
          
          <h2 style="color: white"> Um projeto agregador de conhecimentos, experiências e desafios </h2>
          <p style="color: white">
              Esse jogo foi construído com o intuito de integrar todos os conhecimentos obtidos ao longo do bloco de Front-End, para a 
              disciplina Projeto de Bloco - Desenvolvimento Front-End. 
              Durante esse bloco aprendemos a utilizar o JavaScript, HTML, CSS e frameworks que auxiliam na programação e construção de sites reativos e 
              responsíveis. 
              O caminho para a construção do site foi complexo, cheio de pedras e diversos obstáculos, muitas vezes o conhecimento obtido em sala
              não foi o suficiente e o grupo teve que buscar informações além do já ensinado. 
          </p>
          <br>
          <p style="color: white">
              A equipe de desenvolvimento desse projeto foi composta por 4 pessoas: Leonardo Ewbank, Nathan Borges, Marcos Aurelios, Matheus Matos.  
         </p>
          

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
}

#texto{
  margin:0 auto;
  display:block;
  width: 1000px;
}
.p{
  margin-bottom:10px;
}
.areasobre{
  background-color:rgba(133, 12, 12);

}


</style>
