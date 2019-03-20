<template>
    <div class="infoTeam">
        <HeadlineStatus status=project.phase></HeadlineStatus>
        <ChallengeListPersons :list="persons"></ChallengeListPersons>

        <div>
            <b-button v-b-modal.modal-scrollable>Feedback</b-button>

            <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
                <p class="my-4" v-for="i in 20" :key="i">
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
            </b-modal>
        </div>

    </div>







</template>

<script>
    import HeadlineStatus from "../components/InfoTeam/HeadlineStatus";
    import ChallengeListPersons from "../components/InfoTeam/ChallengeListPersons";



    export default {
        name: "InfoTeam",
        components: {

            HeadlineStatus,
            ChallengeListPersons,
        },

        data() {

            return {

                // need to get persons from API
                persons: [
                    {
                        firstname: "Mickaël",
                        lastname: "Coluccia",
                        link: "#"
                    },
                    {
                        firstname: "Jon",
                        lastname: "Schnyderche",
                        link: "#"
                    },
                    {
                        firstname: "Entrique",
                        lastname: "Haziri",
                        link: "#"
                    },
                    {
                        firstname: "Entrique",
                        lastname: "Haziri",
                        link: "#"
                    },
                    {
                        firstname: "Entrique",
                        lastname: "Haziri",
                        link: "#"
                    },
                    {
                        firstname: "Entrique",
                        lastname: "Haziri",
                        link: "#"
                    }
                ],
                props: [
                    'project'
                ]

            };
        },

    };
</script>

<style scoped>

</style>