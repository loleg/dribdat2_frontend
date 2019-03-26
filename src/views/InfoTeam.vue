<template>
  <div class="infoTeam">
    <HeadlineStatus :status="project.phase"></HeadlineStatus>
    <ChallengeListPersons :list="persons"></ChallengeListPersons>
    <a href="https://github.com/ChallengeHunt/challengehunt" class="btn btn-primary">Source Code</a>
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
    <Timeline :projectId="project.id"></Timeline>
  </div>
</template>

<script>
import HeadlineStatus from "../components/InfoTeam/HeadlineStatus";
import ChallengeListPersons from "../components/InfoTeam/ChallengeListPersons";
import ChallengeFeedback from "../components/InfoTeam/ChallengeFeedback";
import Timeline from "../components/InfoTeam/Timeline";

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

      cancel: function() {
        this.formOpen = false;
        this.resetForm();
      }
    };
  }
};
</script>

<style scoped>
</style>
