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

    /*
        Part for the mobile
     */

    @media screen and (min-width: 300px) and (max-width: 768px) {

        div{
            margin-top: auto;
            font-size: 180%;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 20px;
            font-weight: bold;
            text-align: center;
        }
    }

   /*
   Part for the computer
    */
    @media screen and (min-width: 728px)
    {
        div{
            margin-top: auto;
            font-size: 300%;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 20px;
            font-weight: bold;
            text-align: center;
        }
    }
</style>
