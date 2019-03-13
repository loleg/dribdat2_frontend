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

    @media screen and (min-width: 300px) and (max-width: 768px) {

        .titleChallenge {
            font-size: 20px;
            text-align: center;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 25px;
        }
    }


/*
Part for the computer
 */
    @media screen and (min-width: 768px) {
        .titleChallenge {
            font-size: 35px;
            text-align: center;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 25px;
        }
    }
</style>
