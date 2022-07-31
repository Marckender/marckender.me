<template>
   <section class="principalHome">
      <Hero>
         <template  v-slot:heroside>
            <div class="first_content">
               <Title title="Resume" subtitle="Experience" />
               <section class="resume_principal">
                    <Experience />
                </section>
               <Title title="Resume" subtitle="Education" />
               <section>
                  Soon ...
               </section>
            </div>
         </template>
      </Hero>
   </section>
</template>

<script>
import Hero from '../components/Hero.vue'
import Title from '../components/Title.vue'
import Experience from '../components/Experience.vue'
export default {
   name: 'Resume',
    components: {
    Hero,
    Title,
    Experience
},
   data(){
      return {
      }
   },
   methods: {
   }
}
</script>
<style lang="css" >
.first_content {
   color: white;
}
   @media (max-width: 700px) { 
  
   }
</style>