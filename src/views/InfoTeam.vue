<template>
  <div class="infoTeam">
    <HeadlineStatus :status="project.phase"></HeadlineStatus>
    <ChallengeListPersons :list="persons"></ChallengeListPersons>

    <div>
      <h3 for="validationSourceCode">Source code</h3>
      <button class="btn btn-primary" v-on:click="openSourceUrl()">{{project.source_url}}</button>
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
     <Patreon link="www.patreon.com/"></Patreon>
  </div>
</template>

<script>
import HeadlineStatus from "../components/InfoTeam/HeadlineStatus";
import ChallengeListPersons from "../components/InfoTeam/ChallengeListPersons";
import ChallengeFeedback from "../components/InfoTeam/ChallengeFeedback";
import Patreon from "../components/InfoTeam/Patreon";
import { APIService } from "../APIService";
//import { mapState } from "vuex";

export default {
  name: "InfoTeam",
  components: {
    Patreon,
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
          firstname: "Mickaël",
          lastname: "Coluccia",
          link: "#",
          role: "dev"
        },
        {
          firstname: "Jonathan",
          lastname: "Schnyder",
          link: "#"
        },
        {
          firstname: "Endrit",
          lastname: "Haziri",
          link: "#"
        },
        {
          firstname: "Mickaël",
          lastname: "Coluccia",
          link: "#"
        },
        {
          firstname: "Jonathan",
          lastname: "Schnyder",
          link: "#"
        },
        {
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
    openSourceUrl() {
      window.location.href = this.project.source_url;
    }
  },
  created() {
    this.getDataActivity();
  }
  //computed: mapState(["editMode"])
};
</script>

<style scoped>
</style>
