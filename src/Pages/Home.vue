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
   overflow-y: scroll;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #F68338;
  border-radius: 10px;
}
</style>