<template>
<!-- <div id="header">
  <div id="headerLogo">
    <b-nav>
      <b-nav-item><img class="logo" src="../images/naruto.png"></b-nav-item>
      <b-nav-item>Super Heroes Cards</b-nav-item>
    </b-nav>
  </div>

  <div id="headerMenu">
    <b-nav id="conteudoMenu">
      <b-nav-item>Home</b-nav-item>
      <b-nav-item>Jogar</b-nav-item>
      <b-nav-item>Sobre</b-nav-item>
    </b-nav>
  </div>
</div> -->
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#"><img class="logo" src="../images/naruto.png"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item id="fontLogo" href="#">Super Hero Cards</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav id="fontMenu">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Jogar</b-nav-item>
          <b-nav-item href="#">Sobre</b-nav-item>
        </b-navbar-nav>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@font-face {
  font-family: "Beckman-Free";
  src: url(../fonts/Beckman-Free.otf);
}

@font-face {
  font-family: "Conversation";
  src: url(../fonts/Conversation.otf);
}

#fontLogo{
  font-family: "Conversation";
  font-size: 50px;
}

#fontMenu{
  font-family: "Beckman-Free";
  font-size: 30px;
}

#header{
  display: flex;
  flex-direction: row;
}

#headerLogo{
  padding-right: 15%;
  background-color: aqua;
  display: flex;
  justify-content: left;
}

#headerMenu{
  background-color: blueviolet;
  display: flex;
  flex-grow: 10;
}

#conteudoMenu{
  margin-left: 60%;
}

.logo{
  width: 100px;
}

</style>