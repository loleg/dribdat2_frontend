<template>
    <div>{{ title }}</div>
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


    @media screen and (min-width: 320px)
    {
        div{
            margin-top: auto;
            font-size: 300%;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 25px;
            font-weight: bold;
        }
    }
</style>
