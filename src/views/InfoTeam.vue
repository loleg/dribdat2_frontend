<template>
    <div class="infoTeam">
        <HeadlineStatus :status="project.phase"></HeadlineStatus>
        <ChallengeListPersons :list="getPersons()"></ChallengeListPersons>

        <div>
            <button class="btn btn-primary" v-on:click="openSourceUrl()">Source code</button>
        </div>
        <div class="container">
            <div class="add-feedback" :class="{'open': formOpen}">
                <div class="button-copy" v-show="!formOpen" @click="formOpen = true">Feedback</div>
                <form @submit="cancel()">
                    <ChallengeFeedback :id="project.id"></ChallengeFeedback>
                    <div class="cancel">
                        <span @click="cancel()">Cancel</span>
                    </div>
                </form>
            </div>
        </div>
        <Patreon link="www.patreon.com/"></Patreon>
    </div>
</template>

<script>
    import HeadlineStatus from "../components/InfoTeam/HeadlineStatus";
    import ChallengeListPersons from "../components/InfoTeam/ChallengeListPersons";
    import ChallengeFeedback from "../components/InfoTeam/ChallengeFeedback";
    import Patreon from "../components/InfoTeam/Patreon";
    import { APIService } from "../APIService";
    import { mapState } from "vuex";

    export default {
        name: "InfoTeam",
        components: {
            Patreon,
            HeadlineStatus,
            ChallengeListPersons,
            ChallengeFeedback
        },
        props: ["project"],

        data() {
            return {
                formOpen: false,

                // need to get persons from API
                persons: [   ],

                // To use when we can retrieve the data from the API
                persons_demo: [
                    {
                        firstname: "Mickaël",
                        lastname: "Coluccia",
                        link: "#",
                        role: "dev"
                    },
                    {
                        firstname: "Jonathan",
                        lastname: "Schnyder",
                        link: "#"
                    },
                    {
                        firstname: "Endrit",
                        lastname: "Haziri",
                        link: "#"
                    },
                    {
                        firstname: "Mickaël",
                        lastname: "Coluccia",
                        link: "#"
                    },
                    {
                        firstname: "Jonathan",
                        lastname: "Schnyder",
                        link: "#"
                    },
                    {
                        firstname: "Endrit",
                        lastname: "Haziri",
                        link: "#"
                    }
                ],

                activities: [],

                cancel: function() {
                    this.formOpen = false;
                    this.resetForm();
                }
            };
        },
        methods: {
            getDataActivity() {
                APIService.getActivityList(this.project.id).then(data => {
                    this.activities = data;
                });
            },
            openSourceUrl() {
                window.location.href = this.project.source_url;

            },
            getPersons (){
                return this.$store.state.contributors
                    .map(cont =>
                    {
                        return {
                            name : cont.author.login,
                            link : cont.author.html_url
                        }
                    })
            }
        },
        created() {
            this.$store.dispatch("loadContributors")
            this.getDataActivity();
        },
        computed: mapState(["contributors"])
    };
</script>

<style scoped>
.open {
    width: 100%;
}
</style>
