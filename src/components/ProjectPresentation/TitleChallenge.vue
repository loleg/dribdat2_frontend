<template>
    <div>
    {{ title }}</div>
</template>

<script>
    export default {
        name: "TitleChallenge",
        props: ['title']
    }
</script>


<style scoped>

    div {
        font-size: 35px;
        text-align: center;
        color: whitesmoke;
        font-family: Verdana, Geneva, sans-serif;
        margin-bottom: 25px;
    }
</style>
