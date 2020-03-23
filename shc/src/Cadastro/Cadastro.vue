<template>
   <div>
      <Header/>

      <FormCadastro/>

    </div>
    
        
    


</template>

<script>

import Header from '../components/Header'
import FormCadastro from '../components/Formulario_Cadastro'

export default {
  name: 'Cadastro',
  components: {
    Header,
    FormCadastro,
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
