<template>
   <div class="areajogar">
      <h1>Escolha o seu Herói</h1>
      <div id="texto">
      <p>Super heroes cards é um jogo de 52 onde você irá batalhar contra seus amigos ou o computador e se divertir muito.
        Venha escolher seu heroi e mostrar quem é o melhor. 
      </p>
      </div>
        <div id="wrapper">
        <a href="/jogar" class="my-super-cool-btn">
          <div class="dots-container">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <span>Jogar</span>
        </a>
       </div>
      



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
  padding:5px;
}

#texto{
  margin:0 auto;
  display:block;
  width: 1000px;
}
p{
  color:Black;
   font-family: "Beckman-free";
   font-size:1.1EM;
   text-align:justify;
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
#texto{
  margin:0 auto;
  display:block;
  width: 70%;
  margin-bottom:5px;
  text-align:justify;
}
#b_jogar{
  font-size:1.5EM;
}




@import url('https://fonts.googleapis.com/css?family=Montserrat:900');


#wrapper{
  box-sizing:border-box;
  display:flex;
  justify-content:center;
  
}
.my-super-cool-btn{
  position:relative;
  text-decoration:none;
  color:red;;
  letter-spacing:1px;
  font-size:2rem;
  box-sizing:border-box;
  
}
.my-super-cool-btn span{
  position:relative;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  justify-content:center;
  width:200px;
  height:200px;
  
}
.my-super-cool-btn span:before{
  content:'';
  width:100%;
  height:100%;
  display:block;
  position:absolute;
  border-radius:100%;
  border:7px solid white;
  box-sizing:border-box;
  transition: all .85s cubic-bezier(0.25, 1, 0.33, 1);
  box-shadow: 0 30px 85px rgba(0,0,0,0.14), 0 15px 35px rgba(0,0,0,0.14);
  

}
.my-super-cool-btn:hover span:before{
  transform:scale(0.8);
  box-shadow: 0 20px 55px rgba(0,0,0,0.14), 0 15px 35px rgba(0,0,0,0.14);
}
.my-super-cool-btn .dots-container{
  opacity:0;
  animation: intro 1.6s;
  animation-fill-mode: forwards;
}
.my-super-cool-btn .dot{
  width:8px;
  height:8px;
  display:block;
  background-color:red;
  border-radius:100%;
  position:absolute;
  transition: all .85s cubic-bezier(0.25, 1, 0.33, 1);
  margin-bottom:10px;
}
.my-super-cool-btn .dot:nth-child(1){
  top:50px;
  left:50px;
  transform:rotate(-140deg);
  animation: swag1-out 0.3s;
  animation-fill-mode: forwards;
  opacity:0;
}
.my-super-cool-btn .dot:nth-child(2){
  top:50px;
  right:50px;
  transform:rotate(140deg);
  animation: swag2-out 0.3s;
  animation-fill-mode: forwards;
  opacity:0;
}
.my-super-cool-btn .dot:nth-child(3){
  bottom:50px;
  left:50px;
  transform:rotate(140deg);
  animation: swag3-out 0.3s;
  animation-fill-mode: forwards;
  opacity:0;
}
.my-super-cool-btn .dot:nth-child(4){
  bottom:50px;
  right:50px;
  transform:rotate(-140deg);
  animation: swag4-out 0.3s;
  animation-fill-mode: forwards;
  opacity:0;
}
.my-super-cool-btn:hover .dot:nth-child(1){
  animation: swag1 0.3s;
  animation-fill-mode: forwards;
}
.my-super-cool-btn:hover .dot:nth-child(2){
  animation: swag2 0.3s;
  animation-fill-mode: forwards;
}
.my-super-cool-btn:hover .dot:nth-child(3){
  animation: swag3 0.3s;
  animation-fill-mode: forwards;
}
.my-super-cool-btn:hover .dot:nth-child(4){
  animation: swag4 0.3s;
  animation-fill-mode: forwards;
}
@keyframes intro {
   0% {
     opacity:0;
  }
  100% {
     opacity:1;
  }
}
@keyframes swag1 {
   0% {
     top:50px;
     left:50px;
     width:8px;
  }
  50% {
    width:30px;
    opacity:1;
  }
  100% {
     top:20px;
     left:20px;
     width:8px;
     opacity:1;
  }
}
@keyframes swag1-out {
   0% {
     top:20px;
     left:20px;
     width:8px;
  }
  50% {
     width:30px;
    opacity:1;
  }
  100% {
     top:50px;
     left:50px;
     width:8px;
    opacity:0;
  }
}
@keyframes swag2 {
   0% {
     top:50px;
     right:50px;
     width:8px;
  }
  50% {
    width:30px;
    opacity:1;
  }
  100% {
     top:20px;
     right:20px;
     width:8px;
     opacity:1;
  }
}
@keyframes swag2-out {
   0% {
     top:20px;
     right:20px;
     width:8px;
  }
  50% {
     width:30px;
    opacity:1;
  }
  100% {
     top:50px;
     right:50px;
     width:8px;
    opacity:0;
  }
}
@keyframes swag3 {
   0% {
     bottom:50px;
     left:50px;
     width:8px;
  }
  50% {
    width:30px;
    opacity:1;
  }
  100% {
     bottom:20px;
     left:20px;
     width:8px;
     opacity:1;
  }
}
@keyframes swag3-out {
   0% {
     bottom:20px;
     left:20px;
     width:8px;
  }
  50% {
     width:30px;
    opacity:1;
  }
  100% {
     bottom:50px;
     left:50px;
     width:8px;
    opacity:0;
  }
}
@keyframes swag4 {
   0% {
     bottom:50px;
     right:50px;
     width:8px;
  }
  50% {
    width:30px;
    opacity:1;
  }
  100% {
     bottom:20px;
     right:20px;
     width:8px;
     opacity:1;
  }
}
@keyframes swag4-out {
   0% {
     bottom:20px;
     right:20px;
     width:8px;
  }
  50% {
     width:30px;
    opacity:1;
  }
  100% {
     bottom:50px;
     right:50px;
     width:8px;
    opacity:0;
  }
}
@media only screen and (max-width: 600px) {
   .my-super-cool-btn span{
     width:100px;
     height:100px;
     font-size:1EM;
  }
  h1{
    font-size:1.8EM;
  }
  p{
    font-size: 1EM;
  }
}

</style>
