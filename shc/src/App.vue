<template>
   <div id="app">
      
     <router-view/>


    </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style>
#app {
  height: 100vh;
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
