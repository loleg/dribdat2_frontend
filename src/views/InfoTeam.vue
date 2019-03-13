<template>
  <div class="infoTeam">
    <HeadlineStatus status="Headline Status"></HeadlineStatus>
    <ChallengeListPersons :list="persons"></ChallengeListPersons>
  </div>
</template>

<script>
import HeadlineStatus from "../components/InfoTeam/HeadlineStatus";
import ChallengeListPersons from "../components/InfoTeam/ChallengeListPersons";

export default {
  name: "InfoTeam",
  components: {
    HeadlineStatus,
    ChallengeListPersons
  },
  data() {
    return {
      // need to get persons from API
      persons: [
        {
          firstname: "Mickaël",
          lastname: "Coluccia",
          link: "#"
        },
        {
          firstname: "Jon",
          lastname: "Schnyderche",
          link: "#"
        },
        {
          firstname: "Entrique",
          lastname: "Haziri",
          link: "#"
        },
        {
          firstname: "Entrique",
          lastname: "Haziri",
          link: "#"
        },
        {
          firstname: "Entrique",
          lastname: "Haziri",
          link: "#"
        },
        {
          firstname: "Entrique",
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
