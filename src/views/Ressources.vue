<template>
  <div class="RT">
    <ListRessources :ressources="ressources" :edit-mode="editMode"></ListRessources>
    <list-tools :tools="tools" :editMode="editMode"></list-tools>
    <a href="https://sleepy-lalande-c0efaa.netlify.com/" class="btn btn-primary">Infos</a>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListRessources from "../components/Ressources/ListRessources.vue";
import ListTools from "../components/Ressources/ListTools.vue";

export default {
  name: "Ressources",
  components: { ListRessources, ListTools },
  data() {
    return {
      tools: [
        {
          id: 1,
          name: "GitHub"
        },
        {
          id: 2,
          name: "VueJS"
        },
        {
          id: 3,
          name: "Jest"
        }
      ],
      ressources: [
        {
          id: 1,
          name: "GitHub"
        },
        {
          id: 2,
          name: "VueJS"
        },
        {
          id: 3,
          name: "Jest"
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("setModeDisplay");
  },
  computed: mapState(["editMode"])
};
</script>

<style scoped>
</style>