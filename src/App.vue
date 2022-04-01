<template>
  <Navbar />
  <div id="app">
      <router-view></router-view>
  </div>
  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
  export default {
  components: { Navbar, Footer },
    name: 'App'
  }
</script>

<style>
body {
   background-color: #191919 !important;
   /* margin: 0; */
   /* padding: 0; */
   width: 100%;
   height: 100vh;
   overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  width: 100%;
}
</style>
