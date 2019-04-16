<template>
  <div id="projectProgressBar" >
    <div class="card">
      <h5 class="card-header">Progress</h5>

      <div class="card-body d-flex flex-column justify-content-between">
        <stepper :steps="steps" :current-step="currentStep" v-on:setDisqusStep="onDisqusStep"></stepper>

        <challenge-feedback ref="disqusComponent" :id="disqusStep"></challenge-feedback>
      </div>
    </div>
  </div>
</template>

<script>
import Stepper from "../Stepper";
import ChallengeFeedback from "../InfoTeam/ChallengeFeedback";
export default {
  name: "projectProgressBar",
  components: {ChallengeFeedback, Stepper },
  props: ["currentStep"],
  data: function() {
    return {
        disqusStep: 1,
      steps: [
        "Idea or challenge description",
        "Team has formed and started a project",
        "Research of the scope is done ",
        "Initial designs are sketched and shared",
        "Prototype is deployed",
        "Prototype is presented",
        "Project is live an publicly available"
      ]
    };
  },
  methods: {
      onDisqusStep: function (step){
          console.log(this.$route.fullPath)
          this.disqusStep = step
          this.$refs.disqusComponent.reset('newid' + step, 'http://example.com/unique-path-to-article1/', 'Step ' + step, 'en')
      },
  }
};
</script>

<style scoped>
#projectProgressBar {
  margin-top: 5%;
  margin-bottom: 5%;
  font-family: Verdana, Geneva, sans-serif;
}

h5 {
  font-family: Verdana, Geneva, sans-serif;
  background-color: #89a7af;
  color: #f9f9f9;
}
</style>
