<template>
   <b-container>
      
      <Header/>
      <Form_Login/>

    </b-container>
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
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	background: url("assets/miranha3.jpg") no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-position-y: 0;
	opacity: 1;
	color: #010102;
  

}
</style>
