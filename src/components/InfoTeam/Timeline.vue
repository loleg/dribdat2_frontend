<template>
  <div>
    <ul>
      <li
        v-for="activity in activities"
        :key="activity.id"
      >{{activity.date}} - {{activity.user_name}}</li>
    </ul>
  </div>
</template>

<script>
import { APIService } from "../../APIService";

export default {
  name: "timeline",
  props: ["projectId"],
  data() {
    return {
      activities: []
    };
  },
  methods: {
    getDataActivity() {
      APIService.getActivityList(this.projectId).then(data => {
        this.activities = data;
      });
    }
  },
  created() {
    this.getDataActivity();
  }
};
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
