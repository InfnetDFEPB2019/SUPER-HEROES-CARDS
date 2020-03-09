<template>
  <div id="app">  
    <Header/>
    
    <Login/>

  </div>
</template>

<script>
import Header from './components/Header'
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    Header,
    Login,
  }
}
</script>

<style>
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	background: url("assets/miranha.png") no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-position-y: 0;
	opacity: 1;
	color: #010102;
  

}
</style>
