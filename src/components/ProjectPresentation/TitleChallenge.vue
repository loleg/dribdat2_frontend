<template>
    <div class="challenge-title">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
    export default {
        name: "TitleChallenge",
        props: ['title']
    }
</script>


<style scoped>

    .challenge-title h2 {
        font-size: 35px;
        text-align: center;
        color: whitesmoke;
        font-family: Verdana, Geneva, sans-serif;
        margin-bottom: 25px;
    }
</style>
