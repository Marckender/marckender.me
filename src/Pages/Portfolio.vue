<template>
   <section class="principalHome">
      <Hero>
         <template  v-slot:heroside>
            <div class="first_content">
               <Title title="take a look at" subtitle="Projects" />
               <section class="portfolio_principal">
                  <div class="box_grid">
                     <div class="box" v-for="po in portfolio" :key="po.id" @mouseover="upHereFunc(po.id)" @mouseleave="upHereFunc()">
                         <a :href="po.link" target="_blank" ><img :src="po.img" alt="" />
                           <h1 v-if="upHere === po.id">{{po.title}}</h1>
                           <small v-if="upHere === po.id">{{po.type}}</small>
                        </a>
                     </div>
                  </div>
    </section>
            </div>
         </template>
      </Hero>
   </section>
</template>

<script>
import Hero from '../components/Hero.vue'
import Title from '../components/Title.vue'
import po1 from '../assets/mjcode1.png'
import po2 from '../assets/sakisss1.png'
import po3 from '../assets/bestOne1.jpeg'
import po4 from '../assets/cashlakayplus1.png'
import po5 from '../assets/cashlakay2.png'
export default {
   name: 'Home',
    components: {
        Hero,
        Title
    },
   data(){
      return {
         upHere: '',
         portfolio : [
            {
               id: 1,
               title: 'MJcode',
               img:`${po1}`,
               type: 'blog',
               link: 'https://mjcode.net/'
            },
             {
               id: 2,
               title: 'Sakisss',
               img:`${po2}`,
               type: 'B2B System',
               link:'https://sakisss.com/'
            },
            {
               id:3,
               title: 'BestOne Lotto',
               img:`${po3}`,
               type: 'Lottery System',
               link: 'https://bestoneloto.com/'
            },
            {
               id:4,
               title:'CashLakay plus',
               img: po4,
               type: 'B2C System',
               link: 'http://cashlakayplus.com/'
            },
            {
               id: 5,
               title: 'CashLakay',
               img: po5,
               type: 'TopUP System',
               link: 'https://cashlakay.com/'
            }
         ]
      }
   },
   methods: {
      upHereFunc(id) {
         this.upHere = id;
      }
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
      margin-top: 6%;
   }

    .portfolio_principal {
        margin: 0 2%;
        height: 100%;
    }

    .box_grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 40px;
        grid-row-gap: 0px;
      justify-items: center;
    }

   .box_grid .box {
      margin-bottom: 22px;
      position: relative;
   }
   .box_grid .box h1,small{
      position: absolute;
       right: 5%;
   }

    .box_grid .box h1 {
      top: 70%;
      color: #fff;
      font-family: 'Oswald', sans-serif;
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 20px;
      letter-spacing: 2px;
      text-transform: uppercase;
      line-height: 1.5em;
      cursor: pointer;
    }
    
    .box_grid .box small{
      top: 75%;
      color: #F68338;
      text-decoration: none;
    }

   .portfolio_principal .box_grid .box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1;
   }

   .portfolio_principal .box_grid .box img:hover {
      opacity:0.2;
      cursor:pointer;
      transition: all 0.5s ease-out;
   }

   @media (max-width: 700px) { 
      .portfolio_principal .box_grid{
         display: flex;
         flex-direction: column;
      }

      .portfolio_principal .box_grid .box {
         width: 100%;
      }
   }
</style>