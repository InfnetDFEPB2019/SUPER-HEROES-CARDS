<template>
   <div>
      <Header/>
        
      <Footer/>
    </div>

</template>

<script>

import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Login
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


</style>
