<template>
   <div class="areajogar">
      <h1>Escolha o seu Heroi</h1>
      <p>Super heroes cards é um jogo de 52 onde você irá batalhar contra seus amigos ou o computador e se divertir muito.
        Venha escolher seu heroi e mostrar quem é o melhor. 
      </p>
      <b-button variant="danger" href="/jogar">Jogue Agora</b-button>
    </div>
</template>

<script>
export default {
  name: 'JogarHome',
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
.areajogar{
  margin-top: 117px;
  height: 75vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	background: url("../assets/miranha3.jpg");
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
