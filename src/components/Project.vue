<template>
  <div id="project">
    <navigation :id="this.id"></navigation>

    <div class="content">
      <router-view :project="custom_project"></router-view>
      <Footer :project="custom_project"></Footer>
    </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navigation from "./Navigation.vue";
import Footer from "./Footer.vue";

export default {
  name: "Project",
  props: ["id"],
  data: function() {
    return {
      blue: " #89a7af"
    };
  },
  components: { Navigation, Footer },
  mounted() {
    this.$store.dispatch("loadCustomProject", this.id);
  },
  computed: mapState(["custom_project"])
};
</script>

<style scoped>
.content {
  margin-left: 200px;
  padding: 1px 20px;
}

@media screen and (max-width: 700px) {
  .content {
    margin-left: 0px;
    padding: 1px 20px;
  }
}
</style>
