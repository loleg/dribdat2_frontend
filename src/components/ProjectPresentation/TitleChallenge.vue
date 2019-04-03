<template>
    <div class="challenge-title">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
    export default {
        name: "TitleChallenge",
        props: ['title']
    }
</script>


<style scoped>


    /*
      Part for the mobile
   */

    @media screen and (min-width: 300px) and (max-width: 767px) {

        .challenge-title {
            font-size: 20px;
            text-align: center;
            color: #f9f9f9;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 25px;
        }
    }
    /*
           Tablets part
           */
    @media screen and (min-width: 767px) and (max-width: 1200px) {

        .challenge-title {
            font-size: 30px;
            text-align: center;
            color:#f9f9f9;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 25px;
        }
    }

/*
Part for the computer
 */

    @media screen and (min-width: 1200px){
        .challenge-title {
            font-size: 35px;
            text-align: center;
            color: #f9f9f9;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 25px;
            margin-top: -15px;
        }
    }
</style>
