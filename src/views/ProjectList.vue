<template>
  <div class="content">
  <div id="challenge-list">
    <ul v-for="project in projectList" v-bind:key="project.id">
      <li>
        <router-link :to="{ name: 'presentation', params: { id: project.id }}">{{ project.name }}</router-link>
      </li>
    </ul>
  </div>
  </div>

</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProjectList",
  data() {
    return {
      projects: []
    };
  },
  created() {
    this.$store.dispatch("loadProjectList");
  },
  computed: mapState(["projectList"])
};
</script>

<style scoped>

  .content{
    background-color: #f4fcfc;
    opacity: 0.87;
    width: 100%;
    margin: 0;
    -webkit-box-shadow: 0px 13px 168px -30px rgba(0,0,0,1);
    -moz-box-shadow: 0px 13px 168px -30px rgba(0,0,0,1);
    box-shadow: 0px 13px 168px -30px rgba(0,0,0,1);
    border: 1px groove #333333;
    border-radius: 10px;
  }
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 35px;
}

li {
  font: 200 18px/1.5 Verdana, Geneva, sans-serif;
  border-bottom: 1px solid #ccc;
  height: 38px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  color: #f9f9f9;
  display: block;

  -webkit-transition: font-size 0.2s ease, background-color 0.2s ease;
  -moz-transition: font-size 0.2s ease, background-color 0.2s ease;
  -o-transition: font-size 0.2s ease, background-color 0.2s ease;
  -ms-transition: font-size 0.2s ease, background-color 0.2s ease;
  transition: font-size 0.2s ease, background-color 0.2s ease;
}

li:last-child {
  border: none;
}

li:hover {
  font-size: 21px;
  color: #019eba;
}

li a {
  text-decoration: none;
  color: #333333;
  display: block;

  -webkit-transition: font-size 0.2s ease, background-color 0.2s ease;
  -moz-transition: font-size 0.2s ease, background-color 0.2s ease;
  -o-transition: font-size 0.2s ease, background-color 0.2s ease;
  -ms-transition: font-size 0.2s ease, background-color 0.2s ease;
  transition: font-size 0.2s ease, background-color 0.2s ease;
}

li a:hover {
  font-size: 21px;
  color: #019eba;
}
</style>
