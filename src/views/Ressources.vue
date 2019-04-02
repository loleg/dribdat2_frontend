<template>
  <div class="RT">
    <ListRessources :ressources="ressources" :edit-mode="editMode"></ListRessources>
    <list-tools :tools="tools" :editMode="editMode"></list-tools>
    <div class="contentLeft">
      <InfosLink class="LinkInfos" link="https://sleepy-lalande-c0efaa.netlify.com/" :edit-mode="editMode"></InfosLink>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListRessources from "../components/Ressources/ListRessources.vue";
import ListTools from "../components/Ressources/ListTools.vue";
import InfosLink from "../components/Ressources/InfosLink.vue";


export default {
  name: "Ressources",
  components: { ListRessources, ListTools, InfosLink},
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