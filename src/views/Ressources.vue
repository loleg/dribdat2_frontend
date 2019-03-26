<template>
  <list-tools :tools="tools"></list-tools>
</template>

<script>
import ListTools from "../components/Ressources/ListTools.vue";

export default {
  name: "Ressources",
  components: { ListTools },
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
      ]
    };
  }
};
</script>

<style scoped>
</style>