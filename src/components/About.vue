<template>
    <section  class="home_description">
        <h3>Software Developer</h3>
        <h2>Marckender R. Jean Charles</h2>
        <p>Hi, My name Marckender R. Jean Charles. I am a student in software analyst and development,
           <strong>and work at Compass as a systems programmer ( Javascript ).</strong>
            passionate about technology and always willing to learn more every day.
            I like to work in a team and be very active in the contexts in which I am inserted.
            <strong>Today I work mainly with Javascript and related technologies such as : Typescript,
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
        <button>Hire me</button>

        <div class="divider1"></div>
    </section>
</template>
<script>
export default {
    
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