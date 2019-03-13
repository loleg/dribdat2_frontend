<template>
    <div class="titleChallenge">
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

    h2 {
        font-size: 35px;
        text-align: center;
    }
</style>
