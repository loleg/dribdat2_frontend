<template>
    <div class="project-title">
        <h1 v-if="!editMode"> {{ title }}</h1>
        <input type="text" v-model="title" v-if="editMode" placeholder="project title">
    </div>
</template>

<script>
    export default {
        name: "ProjectTitle",
        props: [
            'title', 'editMode'
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
            font-family: Verdana, Geneva, sans-serif;
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
            font-family: Verdana, Geneva, sans-serif;
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
                font-family: Verdana, Geneva, sans-serif;
            text-align: center;
        }
    }
</style>
