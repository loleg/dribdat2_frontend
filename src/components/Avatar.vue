<template>
    <img src="" class="avatar">
</template>

<script>
    export default {
        name: "Avatar",
        props: {url: {}}
    }
</script>

<style scoped>

    .avatar {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

</style>