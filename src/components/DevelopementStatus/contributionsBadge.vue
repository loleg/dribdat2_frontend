<template>
    <div>
    <ul class="list-group-flush">
        <li class="list-group-item d-flex flex-column justify-content-between align-items-center"
            v-bind:key="contributor.id" v-for="contributor in contributors">
            <div class="d-flex flex-row w-100">
                <avatar class="m-2" v-bind:url="contributor.author.avatar_url"></avatar>
                <h5 class="align-self-center"> {{contributor.author.login}}</h5>
                <small class="ml-auto">commits <span class="badge badge-primary badge-pill">{{contributor.total}}</span></small>
            </div>
            <!--
            <div class="d-flex w-100">
                <small class="text-success">added <span class="badge badge-success badge-pill">++ {{sumAddedCodeLines(contributor)}}</span></small>

            </div>
            <div class="d-flex w-100">
                <small class="text-danger">deleted <span class="badge badge-danger badge-pill">-- {{sumDeletedCodeLines(contributor)}}</span></small>
            </div>
            -->
            <div class="d-flex w-100">
                <contribution-chart v-bind:chartData="createChartData(contributor)"></contribution-chart>
            </div>

        </li>
    </ul>
    </div>
</template>

<script>
    import ContributionChart from "./contributionChart";
    import Avatar from "../Avatar";
    export default {
        name: "contributionsBadge",
        components: {Avatar, ContributionChart},
        props: ["contributors"],
        methods: {
            createChartData(contributor){
                let chartData = {labels: [], datasets: [{data: []}]}

                for (let i = 0; i < contributor.weeks.length; i++) {
                    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                    let date = new Date(contributor.weeks[i].w * 1000)

                    chartData.labels.push(months[date.getMonth()])
                    chartData.datasets[0].data.push(contributor.weeks[i].a)

                }
                return chartData
            }
        }
    }
</script>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
    }
    span {
        margin-left: 10px;
    }

</style>