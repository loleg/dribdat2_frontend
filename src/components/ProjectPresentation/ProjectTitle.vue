<template>
    <h1>{{ title }}</h1>
</template>

<script>
    export default {
        name: "ProjectTitle",
        props: [
            'title'
        ]
    }
</script>

<style scoped>

    h1{
        font-size: 300%;
        text-decoration: underline;
    }

    @media screen and (min-width: 992px)
    {
        h1{
            margin-top: 0%;
        }
    }
</style>
