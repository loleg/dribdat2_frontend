<template>
    <div class="ProjectTitle">
        <h1>{{ title }}</h1>
    </div>
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

    @media screen and (min-width: 300px) and (max-width: 767px) {

        div{
            font-size: 100%;
            color: #f9f9f9;
            font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            text-align: center;
        }
    }
    /*
        Tablets part
        */
    @media screen and (min-width: 767px) and (max-width: 1200px) {

        div{
            font-size: 150%;
            color: #f9f9f9;
            font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            text-align: center;
        }

    }


   /*
   Part for the computer
    */
    @media screen and (min-width: 1200px){

            div{
            font-size: 150%;
            color: #f9f9f9;
            font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            text-align: center;
        }
    }
</style>
