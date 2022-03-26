<template>
   <section class="principal">
      <Navbar />
   </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
   name: 'Home',
   components: {
      Navbar
   }
}
</script>
<style lang="css" >
body {
   background-color: #191919 !important;
}
.principal {
   width: 100%;
   overflow: hidden;
   background-color: #191919 !important;
}
</style>