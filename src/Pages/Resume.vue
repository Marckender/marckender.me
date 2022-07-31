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
                  <Education />
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
import Education from '../components/Education.vue'
export default {
   name: 'Resume',
    components: {
    Hero,
    Title,
    Experience,
    Education
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