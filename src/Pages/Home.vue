<template>
   <section class="principal">
      <Hero>
      <template v-slot:heroside>
         <div class="first_content">
            <first />
         </div>
      </template>
      </Hero>
   </section>
</template>

<script>
import Hero from '../components/Hero.vue'
import First from './First.vue'
export default {
   name: 'Home',
   components: {
      Hero,
      First
   }
}
</script>
<style lang="css" >
.principal {
   width: 100%;
   /* overflow: hidden; */
   background-color: #191919 !important;
}

.first_content {
   margin-top: 8%;
}
</style>