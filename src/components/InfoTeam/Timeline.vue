<template>
    <div>
    <p>Timeline : </p>
    <ul>
        <li v-for="activity in activities" :key="activity.id">
            {{activity.date}} - {{activity.user_name}}
        </li>
    </ul>
    </div>
</template>

<script>

    export default {

        name: "timeline",
        props: ["activities"]
    }
</script>

<style scoped>

    p {
        text-align: left;
        color: #f9f9f9;
        font-family: Verdana, Geneva, sans-serif;
        text-decoration: underline #89a7af;
        font-size: 15px;
        margin-top: 20px;

    }

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 35px;
}

li {
  margin: 5px 0;
  color: #f9f9f9;
    font-family: Verdana, Geneva, sans-serif;
    font-size: 10px;
    text-align: left;
}
</style>
