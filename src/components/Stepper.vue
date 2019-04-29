<template>
  <div>
    <div class="bs-stepper vertical" ref="progressStepper">
      <div class="bs-stepper-header" role="tablist">
        <div v-for="(item, key) in steps" :key="item.key" class="d-flex">
          <!--div v-if="key != 0">I</div-->
          <div class="step" data-target="#information-part">
            <button
                    type="button"
                    class="step-trigger"
                    role="tab"
                    aria-controls="information-part"
                    id="information-part-trigger"
                    v-on:click="$emit('setDisqusStep', key)">
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
    <div class="d-flex justify-content-between">
      <div>
        <button id="previousButton" class=" btn btn-primary m-1"
                v-if="this.isEditMode" v-on:click="setPreviousStep()">Previous Step</button>
        <button id="nextButton" class="btn btn-primary m-1"
                v-if="this.isEditMode" v-on:click="setNextStep()">Next Step</button>
      </div>
      <div>
        <button class="btn btn-primary m-1"
                v-if="this.isEditMode"
                v-on:click="cancelEdit()">Cancel</button>
        <button class="btn btn-primary m-1"
                v-on:click="editSteps()">{{getEditButtonText()}}</button>
      </div>
    </div>
  </div>
</template>
<script>

    export default {
        name: "Stepper",
        props: ["steps", "currentStep"],
        data: function() {
            return {
                activeBackground: "bg-primary",
                isEditMode: false,
                tempProgress: 0
            };
        },
        methods: {
            editSteps() {
                this.tempProgress = this.$store.state.custom_project.progress
                this.isEditMode = !this.isEditMode
            },
            cancelEdit(){
                this.$store.dispatch("setProjectProgress", this.tempProgress)
                this.isEditMode = false
            },
            setNextStep(){
                this.$store.dispatch("setProjectProgress", this.$store.state.custom_project.progress + 1)
            },
            setPreviousStep(){
                this.$store.dispatch("setProjectProgress", this.$store.state.custom_project.progress - 1)
            },
            getEditButtonText() {
                return (this.isEditMode)? 'Save' : 'Set current step'
            },

        },
        mounted() {}
    };
</script>

<style scoped>
</style>
