<template>
  <div id="projectProgressBar">
    <h2>Progress</h2>
    <div class="card">
      <div class="card-body d-flex flex-column justify-content-between">
        <stepper :steps="steps" :current-step="currentStep" v-on:setDisqusStep="onDisqusStep"></stepper>
        <!-- <challenge-feedback v-show="!isDisqusHidden" ref="disqusComponent" :id="disqusStep" :uniqueUrl="this.$route.fullPath" :title="steps[disqusStep]"></challenge-feedback> -->
        <challenge-feedback ref="disqusComponent" :id="disqusStep" :uniqueUrl="this.$route.fullPath" :title="steps[disqusStep]"></challenge-feedback>
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
        isDisqusHidden: true,
        disqusStep: 0,
      steps: [
        "Idea or challenge description",
        "Team has formed and started a project",
        "Research of the scope is done ",
        "Initial designs are sketched and shared",
        "Prototype is deployed",
        "Prototype is presented",
        "Project is live an publicly available"
      ],
        custom_steps: {
            Challenge:   'This is an idea or challenge description',
            Researching: 'A team has formed and started a project',
            Sketching:   'Research has been done to define the scope',
            Prototyping: 'Initial designs have been sketched and shared',
            Launching:   'A prototype of the idea has been developed',
            Promoting:   'The prototype has been deployed and presented',
            Supporting:  'This project is live and available to the public',
        }
    };
  },
  methods: {
      onDisqusStep: function (step){
          this.disqusStep = step
          console.log('discusStep' + this.disqusStep + ' currentStep' + this.currentStep)
          if(this.disqusStep >= this.currentStep) {
              this.isDisqusHidden = true
          }
          else {
              this.isDisqusHidden = false
              let newIdentifier = this.$route.fullPath + /step/ + step
              let newUrl = 'https ://dribdat' + this.$route.fullPath + /step/ + step;

              this.$refs.disqusComponent.reset(newIdentifier, newUrl, 'Step ' + step, 'en')
          }

      },
  }
};
</script>

<style scoped>
#projectProgressBar {
  margin-top: 5%;
  margin-bottom: 5%;
}



</style>
