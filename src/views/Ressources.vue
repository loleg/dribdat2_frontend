<template>
  <div class="content">
    <h1>Resources and tools</h1>
  <div class="RT">
    <ListRessources :ressources="ressources"></ListRessources>
    <list-tools :tools="tools"></list-tools>
    <div class="contentLeft">
      <!-- USED WHEN THE API IS IMPLEMENTED FOR THAT
      <InfosLink class="LinkInfos" link="https://sleepy-lalande-c0efaa.netlify.com/"></InfosLink>-->
      <CommunityLink :urlCommunity="this.project.event.community_url"></CommunityLink>
    </div>
  </div>
  </div>
</template>

<script>
import ListRessources from "../components/Ressources/ListRessources.vue";
import ListTools from "../components/Ressources/ListTools.vue";
//import InfosLink from "../components/Ressources/InfosLink.vue";
import CommunityLink from "../components/Ressources/CommunityLink.vue"

export default {
  name: "Ressources",
  props: ["project"],
  components: { ListRessources, ListTools,// InfosLink,
     CommunityLink},

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

  .content{
    /*background-color: #f4fcfc;
    opacity: 0.87;*/
    background-color: rgba(244,252,252,0.87);
    width: 100%;
    margin: 0;
    border: 1px groove #333333;
    border-radius: 10px;
  }
</style>
