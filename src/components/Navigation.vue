<template>
    <div class="sidebar" >

        <a>
            <font-awesome-icon icon="lightbulb" />
            <router-link class="textHide" :to="{ name: 'presentation', params: { id:id }}">Project </router-link>
        </a>
        <a >
            <font-awesome-icon icon="users" />
            <router-link class="textHide" :to="{ name: 'team', params: { id:id }}">Team</router-link></a>
        <a >
            <font-awesome-icon icon="file-code"/>
            <router-link class="textHide" :to="{ name: 'development', params: { id:id }}">Status</router-link></a>
        <a >
            <font-awesome-icon icon="link"/>
            <router-link class="textHide" :to="{ name: 'ressources', params: { id:id }}">Ressources</router-link></a>
        <a>
            <edit-button :editMode="editMode"></edit-button>
        </a>
    </div>
</template>

<script>
    import EditButton from "./EditButton.vue";
    export default {
        name: "Navigation",
        props: ["id"],
        components: {EditButton}



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
            border: none;


        }
        .sidebar a {float: left;
            margin-bottom: 5px;
        }

        .textHide{
            font-size: 0px;
        }
    }



</style>
