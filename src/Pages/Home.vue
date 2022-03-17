<template>
   <div>
       <h3>dvjdvj</h3>
      <Navbar />
      <!-- <Hero />
      <About />
      <Price />
      <Team/>
      <Contact />
      <Footer/> -->
   </div>
</template>

<script>
export default {
   name: 'Home',
   components: {
      Navbar: () => import('../components/Navbar.vue'),
    //   Hero: () => import('../components/Hero.vue'),
    //   About: () => import('../components/About.vue'),
    //   Work: () => import('../components/Work.vue'),
    //   Price: () => import('../components/Price.vue'),
    //   Team: () => import('../components/Team.vue'),
    //   Contact: () => import('../components/Contact.vue'),
    //   Footer: () => import('../components/Footer.vue')
   }
}
</script>
<style scoped>
</style>