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
            margin-top: auto;
            font-size: 100%;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 15px;
            font-weight: bold;
            text-align: center;
        }
    }
    /*
        Tablets part
        */
    @media screen and (min-width: 767px) and (max-width: 1119px) {

        div{
            margin-top: 15px;
            font-size: 120%;
            margin-bottom: 15px;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            font-weight: bold;
            text-align: center;
        }

    }


   /*
   Part for the computer
    */
    @media screen and (min-width: 1119px) and (max-width: 1600px){

            .ProjectTitle h1{
            margin-top: auto;
            font-size: 300%;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            margin-bottom: 15px;
            font-weight: bold;
            text-align: center;
        }
    }
</style>
