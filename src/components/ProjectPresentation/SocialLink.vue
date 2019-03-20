<template>
    <div class="social-link">

        <p class="title-link"><b>Project link in social network : </b> </p>
        <a class="to-link" v-bind:href="'//' + link">{{link}}</a>
    </div>
</template>

<script>

    export default {
        name: "SocialLink",
        props:[ 'link' ]
    }
</script>

<style scoped>

    /*
           Tablets part
           */
    @media screen and (min-width: 767px) and (max-width: 1119px) {

        .social-link{
            font-size: 80%;
            text-align: left;

        }

        .title-link{
            color: whitesmoke;
            text-decoration: underline whitesmoke;
        }
    }

    /*
        Part for the mobile
     */

    @media screen and (min-width: 300px) and (max-width: 767px) {

        .social-link{
            font-size: 70%;

        }

        .title-link{
            color: whitesmoke;
            text-decoration: underline whitesmoke;
        }
    }

    /*
    Part for the computer
     */
    @media screen and (min-width: 1119px) and (max-width: 1600px)
    {
        .social-link{
            font-size: 90%;

        }

        .title-link{
            color: whitesmoke;
            text-decoration: underline whitesmoke;
        }
    }

</style>
