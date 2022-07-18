<template>
    <section  class="home_description">
        <h3>{{title}}</h3>
        <h2>{{subtitle}}</h2>
    </section>
</template>
<script>

export default {
    name:"Title",
    components: {
    },
    props: {
        title : {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: false
        }
    },
    data () {
    return {}
  }
}
</script>
<style>
    .home_description {
        padding: 3% 3%;
        text-align: left;
    }
    .home_description h3 {
        display: block;
        font-family: 'Oswald', sans-serif;
        font-size: 12px;
        text-transform: uppercase;
        color: #F68338;
        font-weight: 400;
        letter-spacing: 5px;
    }

    .home_description h2 {
        color: #fff;
        font-family: 'Oswald', sans-serif;
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 30px;
        letter-spacing: 2px;
        text-transform: uppercase;
        line-height: 1.5em;
        margin-top: -0.5rem;
    }
    
    @media (max-width: 700px) { 
        .home_description .desc_infos{
            display: flex;
            flex-direction: column;
        }
    }
</style>