<template>
  <div id="project">
    <edit-button :editMode="editMode"></edit-button>

    <div class="sidebar" >
      <a class="active" >
        <router-link :to="{ name: 'presentation', params: { id: custom_project.id }}">Project presentation</router-link>
      </a>
      <a > <router-link :to="{ name: 'team', params: { id: custom_project.id }}">Info Team</router-link></a>
      <a >  <router-link :to="{ name: 'development', params: { id: custom_project.id }}">Development Status</router-link></a>
      <a ><router-link :to="{ name: 'ressources', params: { id: custom_project.id }}">Ressources</router-link></a>
    </div>

<div class="content">
  <router-view :project="custom_project"></router-view>
</div>

  </div>
</template>

<script>
import { mapState } from "vuex";
import EditButton from "./EditButton.vue";

export default {
  name: "Project",
  props: ["id"],
  components: { EditButton },
  mounted() {
    this.$store.dispatch("loadCustomProject", this.id);
  },
  computed: mapState(["custom_project", "editMode"]),





};
</script>


<style scoped>


  .sidebar {

    width: 180px;
    background-color: #616163;
    position: fixed;
    height: 100%;
    border: 1px groove  #89a7af;
    border-radius: 5px;
  }

  .sidebar a  {
    display: block;
    color: #f9f9f9;
   padding : 15px;
    text-decoration: none;
    border-radius: 2px;
    



  }

  .sidebar a.active {
    background-color: #89a7af;
    color: white;
    padding : 15px;
  }


.sidebar a:hover{
  background-color: #89a7af;
  color: white;

}

  .sidebar a:hover:not(.active) {
    background-color: #555;
    color: white;

  }

  .content {
    margin-left: 200px;
    padding: 1px 20px;
  }

  @media screen and (max-width: 700px) {
    .sidebar {
      width: 100%;
      height: auto;
      position: relative;
    }
    .sidebar a {float: left;}
    div.content {margin-left: 0;}
  }



</style>
