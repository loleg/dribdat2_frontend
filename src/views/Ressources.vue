<template>
  <div class="RT">
    <ListRessources :ressources="ressources"></ListRessources>
    <list-tools :tools="tools"></list-tools>
    <div class="contentLeft">
      <InfosLink class="LinkInfos" link="https://sleepy-lalande-c0efaa.netlify.com/"></InfosLink>
      <!--<CommunityLink urlCommunity="https://dataletsch.slack.com/messages"></CommunityLink>-->
      <CommunityLink :urlCommunity="this.project.event.community_url"></CommunityLink>
    </div>
  </div>
</template>

<script>
import ListRessources from "../components/Ressources/ListRessources.vue";
import ListTools from "../components/Ressources/ListTools.vue";
import InfosLink from "../components/Ressources/InfosLink.vue";
import CommunityLink from "../components/Ressources/CommunityLink.vue"

export default {
  name: "Ressources",
  props: ["project"],
  components: { ListRessources, ListTools, InfosLink, CommunityLink},

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
      ],


    };
  },

  //computed: mapState(["editMode"])
};
</script>

<style scoped>
</style>
