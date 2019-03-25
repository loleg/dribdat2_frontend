<template>
    <ul>
        <li v-for="activity in activities" :key="activity.id">
            {{activity.date}} - {{activity.user_name}}
        </li>
    </ul>
</template>

<script>
    import { APIService } from "../../APIService";

    export default {

        name: "timeline",
        props: ["projectId"],
        data() {
            return {
                activities: [],
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
    }
</script>

<style scoped>
    li
    {
        color:#f9f9f9
    }

</style>
