<template>
    <div class="social-link">

        <p class="title-link"><b>Project link in social network : </b> </p>
        <a v-if="!editMode" class="to-link" v-bind:href="'//' + link">{{link}}</a>
        <input v-if="editMode" type="url" v-model="link" v-bind:href="'//' + link">
    </div>
</template>

<script>

    export default {
        name: "SocialLink",
        props:[ 'link', 'editMode' ]
    }
</script>

<style scoped>

    /*
           Tablets part
           */
    @media screen and (min-width: 767px) and (max-width: 1200px) {

        .social-link{
            font-size: 80%;
            text-align: left;

        }

        .title-link{
            color: #89a7af;
            text-decoration: underline #89a7af;
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
            color:  #89a7af;
            text-decoration: underline #89a7af;
        }
    }

    /*
    Part for the computer
     */
    @media screen and (min-width: 1200px)
    {
        .social-link{
            font-size: 90%;

        }

        .title-link{
            color:  #89a7af;
            text-decoration: underline #89a7af;
        }
    }

</style>
