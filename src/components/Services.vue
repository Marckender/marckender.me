<template>
    <section class="services_principal">
        <h3>WHAT I DO</h3>
        <h2>SERVICES</h2>

        <div class="box_grid">
            <div>
                <div class="box">
                    <i class="fas fa-envelope"></i>
                    <h3>Title</h3>
                    <p>dvhjhdhdj dhdihidhgidg djdogjodg dojgodgjodg
                        dhidhgidhg djgdjgodg dgjodgjdjgo
                    </p>
                </div>
                <div class="box">
                    <i class="fas fa-envelope"></i>
                    <h3>Title</h3>
                    <p>dvhjhdhdj dhdihidhgidg djdogjodg dojgodgjodg
                        dhidhgidhg djgdjgodg dgjodgjdjgo
                    </p>
                </div>
            </div>

             <div>
                <div class="box">
                    <i class="fas fa-envelope"></i>
                    <h3>Title</h3>
                    <p>dvhjhdhdj dhdihidhgidg djdogjodg dojgodgjodg
                        dhidhgidhg djgdjgodg dgjodgjdjgo
                    </p>
                </div>
                 <div class="box">
                    <i class="fas fa-envelope"></i>
                    <h3>Title</h3>
                    <p> dvhjhdhdj dhdihidhgidg djdogjodg dojgodgjodg
                        dhidhgidhg djgdjgodg dgjodgjdjgo
                    </p>
                </div>
            </div>
            

        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style>
    .services_principal {
        margin: 0 5%;
        max-height: 400px;
        height: 100%;
        text-align: left;
    }
    .services_principal h3 {
        display: block;
        font-family: 'Oswald', sans-serif;
        font-size: 12px;
        text-transform: uppercase;
        color: #F68338;
        font-weight: 400;
        letter-spacing: 5px;
    }

    .services_principal h2 {
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

    .box_grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 31px;
        grid-row-gap: 0px;
         justify-items: center;
    }

    .box_grid .box {
        width: 380px;
        height: 230px;
        border: 1px solid #222;
        margin-bottom: 30px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .box_grid .box i {
        color: #F68338;
        font-size: 40px;
    }
    .box_grid .box h3 {
       font-weight: 700;
        margin-bottom: 10px;
        color: #fff;
        font-size: 18px;
        font-family: 'Rambla', sans-serif;
    }

    .box_grid .box p {
        font-family: 'Rambla', sans-serif;
        font-size: 15px;
        line-height: 1.75em;
        font-weight: 400;
        color: #888;
        margin: 0 0 20px;
        text-align: center;
    }
        

</style>