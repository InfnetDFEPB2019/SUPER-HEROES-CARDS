<template>
  <div id="app">  
    <Header/>
    <Form_Login/>

  </div>
</template>

<script>
import Header from './components/Header'
import Form_Login from './components/Form_Login'

export default {
  name: 'App',
  components: {
    Header,
    Form_Login,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
