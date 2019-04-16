<template>
  <div class="projectPresentation">
    <!-- for every :... we pass the data from the API -->
    <ProjectTitle :title="project.name"></ProjectTitle>
    <TitleChallenge :title="project.challenge.name"></TitleChallenge>
    <ChallengePitch :pitch="project.pitch"></ChallengePitch>
    <SummaryPitch :summary="project.summary"></SummaryPitch>
    <div class="contentLeft">
      <SocialLink class="LinkSocial" link="www.facebook.com"></SocialLink>
    </div>
  </div>
</template>

<script>
//import { mapState } from "vuex";
import TitleChallenge from "../components/ProjectPresentation/TitleChallenge";
import SummaryPitch from "../components/ProjectPresentation/SummaryPitch";
import ProjectTitle from "../components/ProjectPresentation/ProjectTitle";
import ChallengePitch from "../components/ProjectPresentation/ChallengePitch";
import SocialLink from "../components/ProjectPresentation/SocialLink";

export default {
  name: "ProjectPresentation",
  components: {
    SocialLink,
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
  .projectPresentation {
    height: 75%;
    padding: 0;
    margin: 0;

  }

  .contentLeft {
    text-align: left;
  }

</style>
