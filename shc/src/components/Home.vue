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
            <b-nav-item href="#">Cadastro</b-nav-item>
            <b-nav-item href="#">Cartas</b-nav-item>
            <b-nav-item href="#">Sobre</b-nav-item>
            <b-nav-item href="#">Contatos</b-nav-item>

          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home'
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#logo{
  width:25%;
  margin-left: 0;
  border-radius: 50%;
  align-items:left;
}

.navbar-brand{
  width:15%;
}

a{
  font-size: 22px;
}
#nav-collapse{
  font-family: Beckman-free;
  justify-content: space-around
}
#Logo-titulo{
  font-family: Conversation;
  font-size: 50px;
  margin-right: 5%
}
</style>
