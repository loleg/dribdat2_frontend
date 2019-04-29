<template>
    <img :src="url"
         onerror="this.onerror=null
                  this.src='/img/icons/avatar-default.png'"
         class="avatar">
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