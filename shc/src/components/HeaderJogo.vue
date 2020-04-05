<template>
  <div>
    <div class="headerJogo">
      <b-navbar id="navbar" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand id="Logo-titulo" href="/"><img src="../assets/logo.png" id="logo"> Super Hero Cards</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/jogar">Jogar</b-nav-item>
            <b-nav-item-dropdown center>
              <template v-slot:button-content>
                <em>Usuário</em>
              </template>
              <b-dropdown-item href="/login">Login</b-dropdown-item>
              <b-dropdown-item href="/cadastro">Cadastro</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="/cartas">Cartas</b-nav-item>
        
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HeaderJogo',
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("Logo-titulo").style.fontSize = "26px";
    document.getElementById("logo").style.width = "30px";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("Logo-titulo").style.fontSize = "26px";
    document.getElementById("logo").style.width = "30px";
  }
}


</script>

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
.headerJogo{
  display: flex;
  transition: 0.5s; /* Adds a transition effect when the padding is decreased */
  width: auto;
  height: auto;
}
#logo{
  width:30px;
  margin-left: 0;
  border-radius: 99%;
  align-items:left;
  transition: 0.5s;
}
.navbar{
  background-color: #2f4f4f!important;
  overflow: visible;
  padding: 10px 10px; /* Large padding which will shrink on scroll (using JS) */
  transition: 0.5s; /* Adds a transition effect when the padding is decreased */
  position: fixed; /* Sticky/fixed navbar */
  width: 100%;
  height: auto;
  top: 0; /* At the top */
  z-index: 99;
}
ul.navbar-nav {
  display: flex;
  justify-content: space-around;
  width: 80%;
  align-items:center; 
  font-size: 21px
}

a{
  float: left;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 4px;
}
#nav-collapse{
  font-family: Beckman-free;
  justify-content: space-around;
}
#Logo-titulo{
  font-family: Conversation;
  font-size: 26px;
  padding: 10px;
  transition: 0.5s;
}


</style>
