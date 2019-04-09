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
          link: "https://github.com/",
          name: "GitHub"
        },
        {
          link: "https://vuejs.org/",
          name: "VueJS"
        },
        {
          link: "https://jestjs.io/",
          name: "Jest"
        }
      ],
      ressources: [
        {
          link: "https://github.com/",
          name: "GitHub"
        },
        {
          link: "https://vuejs.org/",
          name: "VueJS"
        },
        {
          link: "https://jestjs.io/",
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
