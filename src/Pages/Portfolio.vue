<template>
   <section class="principalHome">
      <Hero>
         <template v-slot:heroside>
            <div class="first_content">
               
            </div>
         </template>
      </Hero>
   </section>
</template>

<script>
import Hero from '../components/Hero.vue'
export default {
   name: 'Home',
   components: {
      Hero
   }
}
</script>
<style lang="css" >
.principalHome {
   width: 100vw;
   background-color: #191919 !important;
   height: 100vh;
}

.first_content {
   margin-top: 8%;
}
</style>