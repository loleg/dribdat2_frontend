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
            font-size: 20px;
            text-align: center;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 25px;
        }
    }
    /*
           Tablets part
           */
    @media screen and (min-width: 767px) and (max-width: 1119px) {

        .titleChallenge {
            font-size: 30px;
            text-align: center;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 25px;
        }
    }

/*
Part for the computer
 */
    @media screen and (min-width: 1119px) and (max-width: 1600px){
        .titleChallenge {
            font-size: 35px;
            text-align: center;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 25px;
        }
    }
</style>
