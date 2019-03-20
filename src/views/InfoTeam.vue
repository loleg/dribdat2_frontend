<template>
  <div class='infoTeam'>
    <HeadlineStatus status='Headline Status'></HeadlineStatus>
    <ChallengeListPersons :list='persons'></ChallengeListPersons>
    <ChallengeFeedback></ChallengeFeedback>
  </div>
</template>

<script>
import HeadlineStatus from '../components/InfoTeam/HeadlineStatus'
import ChallengeListPersons from '../components/InfoTeam/ChallengeListPersons'
import ChallengeFeedback from '../components/InfoTeam/ChallengeFeedback'

export default {
  name: 'InfoTeam',
  components: {
    HeadlineStatus,
    ChallengeListPersons,
    ChallengeFeedback
  },
  data() {
    return {
      // need to get persons from API
      persons: [
        {
          id: 1,
          firstname: 'Mickaël',
          lastname: 'Coluccia',
          link: '#',
          role: 'dev'
        },
        {
          id: 2,
          firstname: 'Jonathan',
          lastname: 'Schnyder',
          link: '#'
        },
        {
          id: 3,
          firstname: 'Endrit',
          lastname: 'Haziri',
          link: '#'
        },
        {
          id: 4,
          firstname: 'Mickaël',
          lastname: 'Coluccia',
          link: '#'
        },
        {
          id: 5,
          firstname: 'Jonathan',
          lastname: 'Schnyder',
          link: '#'
        },
        {
          id: 6,
          firstname: 'Endrit',
          lastname: 'Haziri',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
