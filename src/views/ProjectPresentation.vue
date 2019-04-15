<template>
  <div class="projectPresentation">
    <ProjectTitle :title="project.name"></ProjectTitle>
    <TitleChallenge :title="project.challenge.name"></TitleChallenge>
    <ChallengePitch :pitch="project.pitch"></ChallengePitch>
    <SummaryPitch :summary="project.summary"></SummaryPitch>
    <!-- https://www.dailymotion.com/video/xkq3cr -->
    <!-- https://www.youtube.com/watch?v=zihJTimjdls -->
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
@media screen {
  .projectPresentation {
    height: 75%;
    padding: 0;
    margin: 0;

  }

  .contentLeft {
    text-align: left;
  }
}
</style>
