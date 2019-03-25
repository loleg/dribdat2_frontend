<template>
    <div >
        <ul class="list-group-flush" style="margin: 0; padding: 0">
            <li class="list-group-item d-flex justify-content-between align-items-center"
                v-bind:key="issue.id" v-for="issue in issues">
                <div class="text-left">{{issue.title}}</div>
                <span v-if="issue.labels.length" class="badge badge-primary badge-pill">{{issue.labels[0].name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "issuesBadge",
        props: ["issues"]
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