<template>
  <section id="main" class="hero_container">
    <div class="grid_1">
      <div></div>
      <div class="hero_footer">
        <ul>
            <li><a href="https://twitter.com/Makender103" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/marckender/"  target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.instagram.com/makender103/"  target="_blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://github.com/Marckender"  target="_blank"><i class="fab fa-github"></i></a></li>
        </ul>
      </div>
    </div>
    <div class="grid_2">
      <slot name="heroside"></slot>
    </div>
  </section>
</template>

<script>
  export default {
      name:"Hero",
      components: {
      }
  }
</script>
<style lang="css">
.hero_container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

  .hero_container .grid_1 {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/profil.jpg);
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .hero_container .grid_1 .hero_footer ul {
    display: flex;
    list-style: none;
  }
  .hero_container .grid_1 .hero_footer ul li {
    height: 30px;
    width: 30px;
    border: 1px solid #F68338;
    border-radius: 50px;
    background: #F68338;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
  }
   .hero_container .grid_1 .hero_footer ul li:hover {
      background: #000;
    border: none;

   }
  .hero_container .grid_1 .hero_footer ul li i {
    width: 40%;
    text-align: center;
    letter-spacing: 20px;
    font-size: 15px;
    font-weight: 15px;
    color: #fff;
  }
  .hero_container .grid_2 {
    height: 100%;
    width: 100%;
  }

@media (max-width: 700px) { 
  .hero_container {
    display: flex;
    flex-direction: column;
  }

  .hero_container .grid_1 {
    width: 100%;
    height: 30vh;
  }
  .hero_container .grid_2 {
    height: 100%;
    width: 100%;
  }
}
@media  (min-width: 701px) {

}
</style>