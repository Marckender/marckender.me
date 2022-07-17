<template>
    <section  class="home_description">
        <h3>Software Developer</h3>
        <h2>Marckender R. Jean Charles</h2>
        <p>Hi, I am a student in Systems analysis and development,
           <strong>and work at Compass as a systems programmer ( Javascript ).</strong>
            Passionate about technology and always willing to learn more every day.
            I like to work in a team to have different perspectives on my work and to learn new things
             and be very active in the contexts in which I am inserted.
            <strong>Today, I work mainly with Javascript and related technologies such as : Typescript,
             NodeJS, ReactJS and React Native, VueJS </strong>.
            I value the organization of codes and projects, using versioning based on Git,
             as well as good practices such as the application of
            Git Flow and Conventional Commits in the maintenance of my codebases.
        </p>

        <div class="desc_infos">
            <div>
                <p><i class="fas fa-envelope"></i> : <span><a href="mailto:makender103@gmail.com">makender103@gmail.com</a></span></p>
                <!-- <p>Degree : <span>Gra</span></p> -->
            </div>
             <div>
                <p><i class="fas fa-birthday-cake"></i> : <span>13 Semptember</span></p>
                <!-- <p>Birhday : <span>13 Semptember</span></p> -->
            </div>
        </div>
        <!-- <button>Hire me</button> <pre/> -->
        <button @click="downloadCV">Download CV</button>


        <div class="divider1"></div>
    </section>
</template>
<script>

export default {
    methods: {
        downloadCV() {
            let url = "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K2451948E7&tokenCaptchar=03ANYolqtM8sa_iX-aeGJ3zxz4OCx1V8FrzzzTZQwSSpKIvdvmPJPUPU1V17jGuxJZ4F6vDzsq1s5_F4hWeU8UgV7nHFRFbnpqg5pUeBya74VFb_5T_y6kUgsOZBYnJrEXHnua657Mj9vwHENeQMQ_QFwgAsw04eU9d1rmjbrKwm0_FzXdxckigJA7CnWJxKkIKhUq-B_k89m8l4agEsfQUXslB-jCoGBQtuwJF5sou1SEMSvFD-5CcsjHLXuQ7at2_g6jz6q8-Bfsg3uOikUp8nRpyhtYosETf_XEGhoJj4AlXTaOeuhPuAg6qvKen7AdHNKjniVzWSqHn8O6pP6tcBO9LUUgAM_iRT_WzDdGmc5YDAoz5zjXYrMaaRS1s6WOnB-0QRss0yA5SIKc6NenqL1QndkKXx08-CvDS4wDQYhB0ExI6cmeLv0OgTBkWUDDzrEkdLnm8fe5dR9WGSv87ilSHxonJphmYw"
            window.open(url, "_blank")
        }
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
    .home_description p {
        font-family: 'Rambla', sans-serif;
        font-size: 15px;
        line-height: 1.75em;
        font-weight: 400;
        color: #888;
        margin: 0 0 20px;
    }

    .home_description .desc_infos {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 31px;
        grid-row-gap: 0px;
    }
    .home_description .desc_infos p{
        color: #fff;
            font-weight: bold;
    }
    .home_description .desc_infos p span {
        color: #888;
        font-family: 'Rambla', sans-serif;
        font-size: 15px;
        line-height: 1.75em;
        font-weight: 400;
        color: #888;
        margin: 0 0 20px;
    }
    .home_description .desc_infos p span a{
        color: #888;
        font-family: 'Rambla', sans-serif;
        font-size: 15px;
        line-height: 1.75em;
        font-weight: 400;
        color: #888;
        margin: 0 0 20px;
        text-decoration: none;
    }
       .home_description .desc_infos p span a:hover{
        color: #888;
        font-family: 'Rambla', sans-serif;
        font-size: 15px;
        line-height: 1.75em;
        font-weight: 400;
        color: #888;
        margin: 0 0 20px;
        text-decoration: underline;
    }

    .home_description .divider1 {
        height: 2px;
        width: 100%;
        background: #222;
        margin: 60px 0;
    }

    .home_description button {
        padding: 8px 20px;
        cursor: pointer;
        background: #F68338;
        -webkit-appearance: none;
        /* position: relative; */
        color: #fff;
        font-size: 15px;
        font-weight: 400;
        display: inline-block;
        border-radius: 0;
        border: 1px solid #F68338;
    }


    @media (max-width: 700px) { 
        .home_description .desc_infos{
            display: flex;
            flex-direction: column;
        }
    }
</style>