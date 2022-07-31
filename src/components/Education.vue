<template>
    <section>
        <div class="main-container">
        <!-- event 1st of timeline -->
            <div class="text-wrapper right">
                <!-- all text content of timeline -->
                <div class="content">
                    <h3>Systems Analysis and Development</h3>
                    <p>2020 - Present</p>
                    <p>UCEFF</p>
                </div>
            </div>
            <div class="text-wrapper right">
                <!-- all text content of timeline -->
                <div class="content">
                    <h3>Computer Science</h3>
                    <p>2018 - 2020 (incomplete)</p>
                    <p>Uffs - Universidade Federal Fronteira Sul</p>
                </div>
            </div>
        <div class="text-wrapper right">
            <div class="content">
                <h3>HIGH SCHOOL</h3>
                <p>2007 - 2014</p>
                <p>Lycée Toussaint Louverture</p>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
    export default {
        name: 'Experience'
    }
</script>

<style>
    .main-container{
        position: relative;
        width: 100%;
    }
    /*creating line for timeline*/
    .main-container::after{
        content: '';
        position: absolute;
        width: 3px;
        background-color: #222;
        top:0;
        bottom: 0;
        left: 10%;
    }
    /*Adjusting box of all content*/
    .text-wrapper{
        padding: 5px 20px;
        position: relative;
        width:50%;
        box-sizing: border-box;
        margin: 5px 0;
    }
    .text-wrapper::after{
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -10px;
        background-color: #222;
        top:10px;
        border-radius: 50%;
        z-index: 1;
    }
    .text-wrapper:hover::after {
        background-color: #F68338;
    }
    /*for right events*/
    .right{
        left:10%;
    }
    .right::after{
        left:-10px;
    }
    /*content box colour padding and radius for circular corner*/
    .content{
        text-align: left;
        padding: 8px 15px 8px 17px;
        border-radius: 4px;
    }
    /*setting text property of event heading*/
    .content h3{
        text-transform: uppercase;
        font-size: 14px;
        color: white;
        letter-spacing:1px;
    }
    /*setting text property of event content*/
    .content p{
        color: #616161;
        font-weight: 300;
        font-size: 14px;
        margin-top: 2px;
    }


    @media (max-width: 700px) { 
       .text-wrapper{
        padding: 5px 20px;
        position: relative;
        width:90%;
        box-sizing: border-box;
        margin: 5px 0;
    }
    }
</style>