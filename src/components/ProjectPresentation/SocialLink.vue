<template>
    <div class="socialLink">

        <p class="titleLink"><b>Project link in social network : </b> </p>
        <a class="toLink" v-bind:href="'//' + link">{{link}}</a>
    </div>
</template>

<script>

    export default {
        name: "SocialLink",
        props:[ 'link' ]
    }
</script>

<style scoped>

    @media  screen and (min-width: 320px) {



    }

    /*
        Part for the mobile
     */

    @media screen and (min-width: 300px) and (max-width: 768px) {

        .socialLink{
            font-size: 90%;

        }

        .titleLink{
            color: whitesmoke;
            text-decoration: underline whitesmoke;
        }
    }

    /*
    Part for the computer
     */
    @media screen and (min-width: 728px)
    {
        .socialLink{
            font-size: 90%;

        }

        .titleLink{
            color: whitesmoke;
            text-decoration: underline whitesmoke;
        }
    }

</style>
