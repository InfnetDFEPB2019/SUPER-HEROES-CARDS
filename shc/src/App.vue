<template>
  <div id="app">  
    <Header/>
    <Login/>
    <Footer/>

  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    Header,
    Login,
    Footer
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
