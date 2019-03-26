<template>
    <div class="developmentStatus">

        <project-progress-bar></project-progress-bar>

        <div id="accordion">
            <div class="card">
                <div class="card-header" id="headingIssues" >
                    <h5>
                        <a class="card-link" @click="loadIssues" data-toggle="collapse" data-target="#collapse-issues" aria-expanded="false" aria-controls="collapse-issues">
                            Open Issues
                        </a>
                        <div id="issueSpinner" class="spinner-border ml-auto d-none" role="status" aria-hidden="true"></div>
                    </h5>
                </div>
                <div id="collapse-issues" class="collapse"  aria-labelledby="headingIssues" data-parent="#accordion">
                    <div class="card-body" style="padding: 0">
                        <issues-badge v-bind:issues="issues"></issues-badge>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingContributors" >
                    <h5>
                        <a class="card-link" @click="loadContributors" data-toggle="collapse" data-target="#collapse-contributors" aria-expanded="false" aria-controls="collapse-contributors">
                            Contributors
                        </a>
                        <div id="contributorSpinner" class="spinner-border ml-auto d-none" role="status" aria-hidden="true"></div>
                    </h5>
                </div>
                <div id="collapse-contributors" class="collapse"  aria-labelledby="headingContributors" data-parent="#accordion">
                    <div class="card-body" style="padding: 0">
                        <contributions-badge v-bind:contributors="contributors"></contributions-badge>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import ContributionsBadge from "../components/DevelopementStatus/contributionsBadge";
    import IssuesBadge from "../components/DevelopementStatus/issuesBadge";
    import ProjectProgressBar from "../components/DevelopementStatus/projectProgressBar";

    export default {
        head: {
            script: [
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
            ]
        },
        name: "DevelopmentStatus",
        components: {
            ProjectProgressBar,
            IssuesBadge,
            ContributionsBadge,
        },
        props: ["project"],
        methods: {
            loadIssues() {

                if($('#collapse-issues').is(':hidden')) {
                    $('#issueSpinner').removeClass("d-none");

                    this.$store.dispatch('loadIssues')
                        .then(() => {
                            $('#issueSpinner').addClass("d-none")

                        })
                }
            },
            loadContributors() {

                if($('#collapse-contributors').is(':hidden')) {
                    $('#contributorSpinner').removeClass("d-none");

                    this.$store.dispatch('loadContributors')
                        .then(() => {
                            $('#contributorSpinner').addClass("d-none")
                        })
                }
            }
        },
        created () {
            this.$store.dispatch('loadProject')
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