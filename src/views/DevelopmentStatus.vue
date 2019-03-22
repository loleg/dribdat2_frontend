<template>
    <div class="developmentStatus">

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "DevelopmentStatus",
        components: {

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