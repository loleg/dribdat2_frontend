<template>
  <div class="infoTeam">
    <HeadlineStatus :status="project.phase" :editMode="editMode"></HeadlineStatus>
    <ChallengeListPersons :list="persons"></ChallengeListPersons>

    <div>
      <label for="validationSourceCode">Source code</label>
            <input type="text" class="form-control" :class="{'btn btn-primary' : !editMode }"
             id="validationSourceCode" :value="custom_project.source_url"
             placeholder="https://github.com/project/repository"
             v-on:click="openSourceUrl()" required>
      <div class="invalid-feedback">
        Please provide a source code link
      </div>
    </div>
    <div class="container">
      <div class="add-feedback" :class="{'open': formOpen}">
        <div class="button-copy" v-show="!formOpen" @click="formOpen = true">Feedback</div>
        <form @submit="cancel()">
          <ChallengeFeedback :id="project.id"></ChallengeFeedback>
          <div class="cancel">
            <span @click="cancel()">Cancel</span>
          </div>
        </form>
      </div>
    </div>
     <Timeline :activities="activities" ></Timeline>
  </div>
</template>

<script>
import HeadlineStatus from "../components/InfoTeam/HeadlineStatus";
import ChallengeListPersons from "../components/InfoTeam/ChallengeListPersons";
import ChallengeFeedback from "../components/InfoTeam/ChallengeFeedback";
import Timeline from "../components/InfoTeam/Timeline";
import { APIService } from "../APIService";
import { mapState } from "vuex";

export default {
  name: "InfoTeam",
  components: {
    Timeline,
    HeadlineStatus,
    ChallengeListPersons,
    ChallengeFeedback
  },
  props: ["project"],

  data() {
    return {
      formOpen: false,

      // need to get persons from API
      persons: [
        {
          id: 1,
          firstname: "Mickaël",
          lastname: "Coluccia",
          link: "#",
          role: "dev"
        },
        {
          id: 2,
          firstname: "Jonathan",
          lastname: "Schnyder",
          link: "#"
        },
        {
          id: 3,
          firstname: "Endrit",
          lastname: "Haziri",
          link: "#"
        },
        {
          id: 4,
          firstname: "Mickaël",
          lastname: "Coluccia",
          link: "#"
        },
        {
          id: 5,
          firstname: "Jonathan",
          lastname: "Schnyder",
          link: "#"
        },
        {
          id: 6,
          firstname: "Endrit",
          lastname: "Haziri",
          link: "#"
        }
      ],

        activities: [],


        cancel: function() {
            this.formOpen = false;
            this.resetForm();
        }


    };
  },
    methods: {
        getDataActivity() {
            APIService.getActivityList(this.project.id).then(data => {
                this.activities = data;
            });
        },
        openSourceUrl (){
             window.location.href = this.$store.state.custom_project.source_url
        }
    },
    created() {
        this.getDataActivity();
    },
  mounted() {
    this.$store.dispatch("setModeDisplay");
  },
  computed: mapState(['editMode', 'custom_project'])
};
</script>

<style scoped>



</style>
