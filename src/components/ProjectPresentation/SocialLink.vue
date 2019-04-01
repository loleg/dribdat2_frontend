<template>
    <div class="social-link">

        <p class="title-link"><b>Project link in social network : </b> </p>
        <a v-if="!editMode" :href="'//' + link">{{link}}</a>
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

    .title-link{
        color:  #89a7af;
        text-decoration: underline #89a7af;
    }

        .social-link {
            font-size: 100%;
            text-align: left;
        }
</style>
