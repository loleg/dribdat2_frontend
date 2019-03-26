<template>
    <div>
    <ul class="list-group-flush">
        <li class="list-group-item d-flex flex-column justify-content-between align-items-center"
            v-bind:key="contributor.id" v-for="contributor in contributors">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{contributor.author.login}}</h5>
                <small>commits <span class="badge badge-primary badge-pill">{{contributor.total}}</span></small>
            </div>
            <div class="d-flex w-100">
                <small class="text-success">added <span class="badge badge-success badge-pill">++ {{sumAddedCodeLines(contributor)}}</span></small>

            </div>
            <div class="d-flex w-100">
                <small class="text-danger">deleted <span class="badge badge-danger badge-pill">-- {{sumDeletedCodeLines(contributor)}}</span></small>

            </div>

        </li>
    </ul>
    </div>
</template>

<script>
    export default {
        name: "contributionsBadge",
        props: ["contributors"],
        methods: {
            sumAddedCodeLines(contributor){
                let sum = 0

                for (let i = 0; i < contributor.weeks.length; i++) {
                    sum += contributor.weeks[i].a
                }
                return sum
            },
            sumDeletedCodeLines(contributor){
                let sum = 0

                for (let i = 0; i < contributor.weeks.length; i++) {
                    sum += contributor.weeks[i].d
                }
                return sum
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