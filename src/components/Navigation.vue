<template>
  <div class="sidebar d-flex">
    <a>
      <router-link :to="{ name: 'presentation', params: { id:id }}">
        <font-awesome-icon icon="lightbulb"/>
        <p class="textHide">Project</p>
      </router-link>
    </a>
    <a>
      <router-link :to="{ name: 'team', params: { id:id }}">
        <font-awesome-icon icon="users"/>
        <p class="textHide">Team</p>
      </router-link>
    </a>
    <a>
      <router-link :to="{ name: 'development', params: { id:id }}">
        <font-awesome-icon icon="file-code"/>
        <p class="textHide">Status</p>
      </router-link>
    </a>
    <a>
      <router-link :to="{ name: 'ressources', params: { id:id }}">
        <font-awesome-icon icon="link"/>
        <p class="textHide">Ressources</p>
      </router-link>
    </a>
    <a>
      <edit-button :editMode="editMode"></edit-button>
    </a>
  </div>
</template>

<script>
import EditButton from "./EditButton.vue";
import { mapState } from "vuex";

export default {
  name: "Navigation",
  props: ["id"],
  components: { EditButton },
  computed: mapState(["editMode"])
};
</script>

<style scoped>
.sidebar {
  width: 180px;
  background-color: #616163;
  position: fixed;
  height: 100%;
  border: 1px groove #89a7af;
  border-radius: 5px;
  font-family: Verdana, Geneva, sans-serif;
  flex-flow: column;
}

.sidebar a {
  display: block;
  color: #f9f9f9;
  padding: 15px;
  text-decoration: none;
  border-radius: 2px;
}

.sidebar a:hover {
  background-color: #89a7af;
  color: #f9f9f9;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    position: relative;
    border: none;
    flex-flow: row;
    justify-content: space-between;
  }

  .sidebar a {
    float: left;
    padding: 8px;
  }

  .textHide {
    font-size: 0px;
    line-height: 0px;
    display: inline;
  }
}
</style>
