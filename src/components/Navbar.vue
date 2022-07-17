<template>
   <nav :class="{change_color: scrollPosition > 20}">
     <div class="__logo">
        <a :class="{logo_change: scrollPosition > 20}" href="#welcome" > Marckender.me</a>
     </div>
    <div  class="nav_menu">
      <router-link :to="{name: 'Home'}" :class="{logo_change: scrollPosition > 20}">Home</router-link>
      <!-- <a :class="{logo_change: scrollPosition > 20}" href="#home_functionality"><span>Home</span></a> -->
      <!-- <a href="#home_plans" :class="{logo_change: scrollPosition > 20}"><span>Resume</span></a> -->
      <router-link :to="{name: 'Portfolio'}">Portfolio</router-link>
      <!-- <a href="/portfolio" :class="{logo_change: scrollPosition > 20}"><span>Portfolio</span></a> -->
      <!-- <a href="#home_contact" :class="{logo_change: scrollPosition > 20}"><span>Blog</span></a>
      <a href="#home_contact" :class="{logo_change: scrollPosition > 20}"><span>Contact</span></a> -->
    </div>
    <!-- <div class="drawer">
    <i v-if="!drawer" class="fas fa-align-justify" @click="drawer =  true"></i>
      <el-drawer size="960"
        :visible.sync="drawer"
        :close="!drawer"
      >
      dkhdfhdfkdfkdfhkd
        <span>Hi there!</span>
      </el-drawer>
    </div> -->
  </nav>
</template>

<script>
  export default {
    name:"Navbar",
    components: {
    },
    data() {
      return {
        scrollPosition: null,
        drawer: false
      }
    },
    computed: {
    },
    methods: {
      updateScroll() {
        this.scrollPosition = window.scrollY
      },
      showDrawer () {
        this.drawer = true;
      }
  },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }
  }
</script>
<style lang="css" scoped>
 .change_color {
   width: 100%;
    color: rgba(7, 26, 100, 0.63);
    /* background-color: #FFFFFF; */
    transition: 0.8s ease-in;
    /* box-shadow: 3px 3px 6px 3px rgba(144, 144, 146, 0.2); */
  }
  .logo_change {
    color: rgba(7, 26, 100, 0.63);
  }
nav {
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  color: #FFFFFF;
  z-index: 1000;
}

nav .__logo a{
  color: #F68338;
  padding-left: 8px ;
}
nav a {
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #888;
  text-decoration: none;
  /* position: relative; */
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  margin-right: 16px;
}
nav a:hover {
  border-bottom: 2px solid #F68338;
}
nav img:hover {
  cursor: pointer;
}
nav .menu:hover {
  cursor: pointer;
}
@media (max-width: 700px) { 
  .nav_menu {
    
  }
}
@media  (min-width: 701px) {
  .drawer {
    display: none;
  }
}
</style>