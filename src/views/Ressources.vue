<template>
  <div class="RT">
    <ListRessources :ressources="ressources"></ListRessources>
    <list-tools :tools="tools"></list-tools>
  </div>
</template>

<script>
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
  }
};
</script>

<style scoped>
</style>