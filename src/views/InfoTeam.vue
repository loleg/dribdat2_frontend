<template>
    <div class="content">
    <div class="infoTeam">
        <HeadlineStatus :status="project.phase"></HeadlineStatus>
        <ChallengeListPersons :list="project.team"></ChallengeListPersons>

        <div>
            <SourceCode :link="project.source_url"></SourceCode>
        </div>
        <!-- USED IF YOU WANT THE FEEDBACK BUTTON TO COMMUNICATE IN THE TEAM
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
        </div>-->
        <!-- Used if we have a link for the patreon but not implemented yet from API
        <Patreon link="www.patreon.com/"></Patreon>-->
    </div>
    </div>
</template>

<script>
    import HeadlineStatus from "../components/InfoTeam/HeadlineStatus";
    import ChallengeListPersons from "../components/InfoTeam/ChallengeListPersons";
    //import ChallengeFeedback from "../components/InfoTeam/ChallengeFeedback";
   // import Patreon from "../components/InfoTeam/Patreon";
    import SourceCode from "../components/InfoTeam/SourceCode";

    export default {
        name: "InfoTeam",
        components: {
        //    Patreon,
            HeadlineStatus,
            ChallengeListPersons,
           // ChallengeFeedback,
            SourceCode
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


        },
    };
</script>

<style scoped>

    .content{
        background-color: #f4fcfc;
        opacity: 0.87;
        width: 100%;
        margin: 0;
        border: 1px groove #333333;
        border-radius: 10px;
    }

</style>
