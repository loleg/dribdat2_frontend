<template>
    <div class="developmentStatus">

    <contributions-badge v-bind:contributors="contributors"></contributions-badge>

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import ContributionsBadge from "../components/DevelopementStatus/contributionsBadge";
    export default {
        name: "DevelopmentStatus",
        components: {
            ContributionsBadge

        },
        props: ["project"],
        mounted () {
            this.$store.dispatch('loadContributors')
            this.$store.dispatch('loadIssues')
        },
        computed: mapState([
            'contributors',
            'issues'
        ])
    };
</script>

<style scoped>


    @media screen
    {
    }
</style>