<template>
    <div class="infoTeam">
        <HeadlineStatus status=project.phase></HeadlineStatus>
        <ChallengeListPersons :list="persons"></ChallengeListPersons>
        <ChallengeFeedback :id="project.id"></ChallengeFeedback>
        <div>
            <b-button v-b-modal.modal-scrollable>Feedback</b-button>

            <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
                <p class="my-4" v-for="i in 20" :key="i">
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
            </b-modal>
        </div>

    </div>







  <div class="infoTeam">
    <HeadlineStatus status="Headline Status"></HeadlineStatus>
    <ChallengeListPersons :list="persons"></ChallengeListPersons>
    <ChallengeFeedback :id="project.id"></ChallengeFeedback>
  </div>
</template>

<script>
import HeadlineStatus from "../components/InfoTeam/HeadlineStatus";
import ChallengeListPersons from "../components/InfoTeam/ChallengeListPersons";
import ChallengeFeedback from "../components/InfoTeam/ChallengeFeedback";

export default {
  name: "InfoTeam",
  components: {
    HeadlineStatus,
    ChallengeListPersons,
    ChallengeFeedback
  },
  props: ["project"],
  data() {
    return {
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
      ]
    };
  }
};
</script>

<style scoped>
</style>