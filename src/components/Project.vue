<template>
  <div id="project">
    <div class="content-top">
    <navigation :id="this.id"></navigation>
    </div>

    <div class="content">
      <router-view :project="custom_project"></router-view>

    </div>
    <div class="content-bottom">
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

.content-bottom {

  /*margin-top: 70px;
  margin-left: 210px;*/
  margin-left: 200px;
  padding: 1px 20px;
}

@media screen and (max-width: 700px) {
  .content {
    margin: 0 auto;
    padding: 1px 20px;
  }
  .content-bottom {

    margin-top: 20px;
    margin-left: 1px;
  }
  .content-top{
    margin-top: 20px;
    margin-left: 18px;
    margin-right: 18px;
  }
}
</style>
