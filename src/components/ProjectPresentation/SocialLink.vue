<template>
    <div class="social-link">

        <p class="link-label"><b>Project link in social network : </b> </p>
        <a v-bind:href="'//' + link">{{link}}</a>
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

        .social-link{
            font-size: 90%;

        }

        .link-label{
            color: whitesmoke;
            text-decoration: underline whitesmoke;
        }

    }

</style>
