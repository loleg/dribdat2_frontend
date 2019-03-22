<template>
    <ul class="list-group">
        <li class="list-group-item active d-flex justify-content-between align-items-center">
           Contributions
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center"
            v-bind:key="contributor.id" v-for="contributor in contributors">
            {{contributor.author.login}}
            <span class="badge badge-primary badge-pill">{{contributor.total}}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "contributionsBadge",
        props: ["contributors"],
    }
</script>

<style scoped>

</style>