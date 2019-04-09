<template>
  <div class="RT">
    <ListRessources :ressources="ressources"></ListRessources>
    <list-tools :tools="tools"></list-tools>
    <div class="contentLeft">
      <InfosLink class="LinkInfos" link="https://sleepy-lalande-c0efaa.netlify.com/"></InfosLink>
    </div>
  </div>
</template>

<script>
//import { mapState } from "vuex";
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
          link: "https://github.com/",
          name: "GitHub"
        },
        {
          id: 2,
          link: "https://vuejs.org/",
          name: "VueJS"
        },
        {
          id: 3,
          link: "https://jestjs.io/",
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
  //computed: mapState(["editMode"])
};
</script>

<style scoped>
</style>
