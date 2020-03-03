<template>
  <div class="Home">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand id="Logo-titulo" href="#"><img src="../assets/logo.png" id="logo"> Super Hero Cards</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Jogar</b-nav-item>
            <b-nav-item-dropdown center>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
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
  name: 'Header'
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

#logo{
  width:100px;
  margin-left: 0;
  border-radius: 99%;
  align-items:left;
}
.navbar{
  position: sticky

}
ul.navbar-nav {
  display: flex;
  justify-content: space-around;
  width: 80%;
  align-items:center; 
  font-size: 25px
}

a{
  font-size: 25px;
}
#nav-collapse{
  font-family: Beckman-free;
  justify-content: space-around;
}
#Logo-titulo{
  font-family: Conversation;
  font-size: 60px;
  padding: 10px
}

</style>
