<template>
  <div class="RT">
    <ListRessources :ressources="ressources"></ListRessources>
    <list-tools :tools="tools"></list-tools>
    <div class="contentLeft">
      <InfosLink class="LinkInfos" link="https://sleepy-lalande-c0efaa.netlify.com/"></InfosLink>
      <CommunityLink urlCommunity="https://dataletsch.slack.com/messages"></CommunityLink>
      <!--<CommunityLink :urlCommunity="urlCommunity"></CommunityLink>-->
    </div>
  </div>
</template>

<script>
//import { mapState } from "vuex";
import ListRessources from "../components/Ressources/ListRessources.vue";
import ListTools from "../components/Ressources/ListTools.vue";
import InfosLink from "../components/Ressources/InfosLink.vue";
import CommunityLink from "../components/Ressources/CommunityLink.vue"
import { APIService} from "../APIService";

export default {
  name: "Ressources",
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

      urlCommunity: []
    };
  },

  methods: {
    getDataCommunityLink()
    {
      APIService.getLinkCommunity(this.event.id).then(data =>{
        this.urlCommunity = data;
      })
    }
  },

  created() {
    this.getDataCommunityLink();
  }

  //computed: mapState(["editMode"])
};
</script>

<style scoped>
</style>
