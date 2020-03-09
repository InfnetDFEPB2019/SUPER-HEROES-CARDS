<template>
   <div id="Header_Nav">
      <Header/>

      <Form_Login/>

    </div>
    
        
    


</template>

<script>

import Header from '../components/Header'
import Form_Login from '../components/Form_Login'

export default {
  name: 'Login',
  components: {
    Header,
    Form_Login,
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
