<template>

<div class="content">
  <div class="projectPresentation">
    <!-- for every :... we pass the data from the API -->
    <ProjectTitle :title="project.name"></ProjectTitle>
    <TitleChallenge :title="project.challenge.name"></TitleChallenge>
    <ChallengePitch :pitch="project.pitch" :is_webembed="project.is_webembed"></ChallengePitch>
    <SummaryPitch :summary="project.summary"></SummaryPitch>
    <!-- Used if we have a link for the social media but not implemented yet from API
    <div class="contentLeft">
      <SocialLink class="LinkSocial" link="www.facebook.com"></SocialLink>
    </div>-->
  </div>

  </div>

</template>

<script>
//import { mapState } from "vuex";
import TitleChallenge from "../components/ProjectPresentation/TitleChallenge";
import SummaryPitch from "../components/ProjectPresentation/SummaryPitch";
import ProjectTitle from "../components/ProjectPresentation/ProjectTitle";
import ChallengePitch from "../components/ProjectPresentation/ChallengePitch";
//import SocialLink from "../components/ProjectPresentation/SocialLink";

export default {
  name: "ProjectPresentation",
  components: {
    //SocialLink,
    TitleChallenge,
    SummaryPitch,
    ProjectTitle,
    ChallengePitch
  },
  props: ["project"],
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

@media screen {
  .projectPresentation {
      height: 75%;
      padding: 0;
      margin: 0;
  }

}

  /* Used for the social link
  .contentLeft {
    text-align: left;
  }
*/
</style>
