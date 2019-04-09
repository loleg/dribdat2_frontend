<template>
  <div class="bs-stepper vertical" id="progress-stepper">
    <div class="bs-stepper-header" role="tablist">
      <div v-for="(item, key) in steps">
        <!--div v-if="key != 0">I</div-->
        <div class="step" data-target="#information-part">
          <button
            type="button"
            class="step-trigger"
            role="tab"
            aria-controls="information-part"
            id="information-part-trigger"
          >
            <span
              class="bs-stepper-circle"
              v-bind:class="[key < currentStep ? activeBackground : '' ]"
            >{{key + 1}}</span>
            <span class="bs-stepper-label">{{item}}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  props: ["steps", "currentStep"],
  data: function() {
    return { activeBackground: "bg-primary" };
  },
  mounted() {}
};
</script>

<style scoped>
</style>
