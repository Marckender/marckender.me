<template>
   <section class="principal">
      <About />
      <!-- <Services /> -->
   </section>
</template>

<script>
import About from '../components/About.vue'
// import Services from '../components/Services.vue'

export default {
   name: 'Home',
   components: {
      About,
      // Services
   }
}
</script>
<style lang="css" >
.principal {
   height: 100%;
   background-color: #191919 !important;
   overflow-x: scroll;
}

</style>