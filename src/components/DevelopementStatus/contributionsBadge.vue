<template>
    <div>
    <ul class="list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-center"
            v-bind:key="contributor.id" v-for="contributor in contributors">
            <div class="text-left">{{contributor.author.login}}</div>
            <span class="badge badge-primary badge-pill">{{contributor.total}}</span>
        </li>
    </ul>
    </div>
</template>

<script>
    export default {
        name: "contributionsBadge",
        props: ["contributors"],
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