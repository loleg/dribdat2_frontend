<template>
  <div>
    <ul v-for="person in persons" :key="person">
      <li>{{ person.firstname + ' ' + person.lastname }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    persons: []
  },
  data () {
    return {
      persons: [
        {
          firstname: 'Mickaël',
          lastname: 'Coluccia'
        },
        {
          firstname: 'Jon',
          lastname: 'Schnyderche'
        }
      ]
    }
  }
}
</script>

<style>

</style>
