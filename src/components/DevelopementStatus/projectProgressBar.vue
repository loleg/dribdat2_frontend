<template>
  <div id="projectProgressBar">
    <div class="card">
      <h5 class="card-header">Progress</h5>
      <div class="card-body d-flex justify-content-center">
        <stepper :steps="steps" :current-step="currentStep"></stepper>
      </div>
    </div>
  </div>
</template>

<script>
import Stepper from "../Stepper";
export default {
  name: "projectProgressBar",
  components: { Stepper },
  props: ["currentStep"],
  data: function() {
    return {
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
