<template>
    <div class="titleChallenge">
    {{ title }}</div>
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

        .titleChallenge {
            font-size: 23px;
            text-align: center;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 25px;
            margin-top: -10px;
        }
    }
    /*
           Tablets part
           */
    @media screen and (min-width: 767px) and (max-width: 1200px) {

        .titleChallenge {
            font-size: 33px;
            text-align: center;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 25px;
        }
    }

/*
Part for the computer
 */
    @media screen and (min-width: 1200px){
        .titleChallenge {
            font-size: 35px;
            text-align: center;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 25px;
            margin-top: -15px;
        }
    }
</style>
