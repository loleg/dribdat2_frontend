<template>
    <div class="socialLink">
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

</style>
