<template>
   <nav :class="{change_color: scrollPosition > 20}">
    <a :class="{logo_change: scrollPosition > 20}" href="#welcome" > Marckender</a>
    <div  class="nav_menu">
      <a :class="{logo_change: scrollPosition > 20}" href="#home_functionality"><span>Home</span></a>
      <a href="#home_plans" :class="{logo_change: scrollPosition > 20}"><span>Resume</span></a>
      <a href="#home_contact" :class="{logo_change: scrollPosition > 20}"><span>Portfolio</span></a>
      <a href="#home_contact" :class="{logo_change: scrollPosition > 20}"><span>Blog</span></a>
      <a href="#home_contact" :class="{logo_change: scrollPosition > 20}"><span>Contact</span></a>
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
    background-color: #FFFFFF;
    transition: 0.8s ease-in;
    box-shadow: 3px 3px 6px 3px rgba(144, 144, 146, 0.2);
  }
  .logo_change {
    color: rgba(7, 26, 100, 0.63);
  }
nav {
  /* padding: 0 7% 0 7%; */
  /* position: fixed; */
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  color: #FFFFFF;
  z-index: 1000;
}
nav a {
  font-family: Oregano;
  font-style: italic;
  font-weight: normal;
  font-size: 30px;
  line-height: 39px;
  /* change for viewing, must change later */
  color: #000;
  text-decoration: none;
  /* color: #FFFFFF; */
}
nav span {
  margin-left: 11px;
  text-decoration: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
}
nav img:hover {
  cursor: pointer;
}
nav .menu:hover {
  cursor: pointer;
}
@media (max-width: 700px) { 
  .nav_menu {
    display: none;
  }
}
@media  (min-width: 701px) {
  .drawer {
    display: none;
  }
}
</style>