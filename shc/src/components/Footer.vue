<template>
  <div class="Footer">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Jogar</b-nav-item>
            <b-nav-item href="#">Cartas</b-nav-item>
            <b-nav-item href="#">Sobre</b-nav-item>
            <b-nav-item href="#">Contatos</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
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


.Footer{
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0px;
  text-align: center; 
  border-radius: 5px
}
ul.navbar-nav {
  display: flex;
  justify-content: space-around;
  width: 80%;
  align-items:center; 
  font-size: 10px
}

a{
  font-size: 15px;
}
#nav-collapse{
  font-family: Beckman-free;
  justify-content: space-around;
}


</style>
