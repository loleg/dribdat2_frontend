<template>
    <div class="developmentStatus">

        <project-progress-bar></project-progress-bar>

        <div id="accordion">
            <div class="card">
                <div class="card-header" id="headingIssues" >
                    <h5 class="mb-0">
                        <a class="card-link" data-toggle="collapse" data-target="#collapse-issues" aria-expanded="false" aria-controls="collapse-issues">
                            Open Issues
                        </a>
                    </h5>
                </div>
                <div id="collapse-issues" class="collapse show"  aria-labelledby="headingIssues" data-parent="#accordion">
                    <div class="card-body" style="padding: 0">
                        <issues-badge v-bind:issues="issues"></issues-badge>
                    </div>
                </div>
            </div>
            <!--
            <div class="card">
                <div class="card-header" id="headingContributors" >
                    <h5 class="mb-0">
                        <a class="card-link" data-toggle="collapse" data-target="#collapse-contributors" aria-expanded="true" aria-controls="collapse-contributors">
                            Contributors
                        </a>
                    </h5>
                </div>
                <div id="collapse-contributors" class="collapse show"  aria-labelledby="headingContributors" data-parent="#accordion">
                    <div class="card-body" style="padding: 0">
                        <contributions-badge v-bind:contributors="contributors"></contributions-badge>
                    </div>
                </div>
                -->
            </div>
        </div>
</template>

<script>
    import { mapState } from 'vuex'
    //import ContributionsBadge from "../components/DevelopementStatus/contributionsBadge";
    import IssuesBadge from "../components/DevelopementStatus/issuesBadge";
    import ProjectProgressBar from "../components/DevelopementStatus/projectProgressBar";
    export default {
        name: "DevelopmentStatus",
        components: {
            ProjectProgressBar,
            IssuesBadge,
            //ContributionsBadge,
        },
        props: ["project"],
        mounted () {
            this.$store.dispatch('loadProject')
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