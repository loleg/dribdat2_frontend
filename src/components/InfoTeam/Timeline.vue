<template>
    <ul>
        <li v-for="activity in activities" :key="activity.id">
            {{activity.date}} - {{activity.user_name}}
        </li>
    </ul>
</template>

<script>

    export default {

        name: "timeline",
        props: ["activities"]
    }
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 35px;
}

li {
  margin: 20px 0;
  color: #f9f9f9;
}
</style>
