<template>
    <div class="sidebar" >

        <a>
            <router-link :to="{ name: 'presentation', params: { id:id }}">Project presentation</router-link>
        </a>
        <a > <router-link :to="{ name: 'team', params: { id:id }}">Info Team</router-link></a>
        <a >  <router-link :to="{ name: 'development', params: { id:id }}">Development Status</router-link></a>
        <a ><router-link :to="{ name: 'ressources', params: { id:id }}">Ressources</router-link></a>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        props: ["id"],



    }
</script>

<style scoped>

    .sidebar {

        width: 180px;
        background-color: #616163;
        position: fixed;
        height: 100%;
        border: 1px groove  #89a7af;
        border-radius: 5px;
        font-family: Verdana, Geneva, sans-serif;
    }

    .sidebar a  {
        display: block;
        color: #f9f9f9;
        padding : 15px;
        text-decoration: none;
        border-radius: 2px;




    }



    .sidebar a:hover{
        background-color: #89a7af;
        color: #f9f9f9;


    }



    @media screen and (max-width: 700px) {
        .sidebar {

            width: 100%;
            position: relative;
        }
        .sidebar a {float: top;}
    }


</style>
