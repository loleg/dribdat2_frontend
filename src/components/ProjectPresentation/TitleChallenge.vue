<template>
    <h2>{{ title }}</h2>
</template>

<script>
    export default {
        name: "TitleChallenge",
        props: ['title']
    }
</script>


<style scoped>

    h2 {
        font-size: 35px;
        text-align: center;
    }
</style>
