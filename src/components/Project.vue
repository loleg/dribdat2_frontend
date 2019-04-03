<template>
    <div id="project">
        <edit-button :editMode="editMode"></edit-button>
        <navigation :id="this.id"></navigation>


        <div class="content" v-bind:style="{ backgroundColor: blue}">
            <router-view :project="custom_project"></router-view>
        </div>

    </div>
</template>

<script>
    import {mapState} from "vuex";
    import EditButton from "./EditButton.vue";
    import Navigation from "./Navigation.vue"

    export default {
        name: "Project",
        props: ["id"],
        data: function () {
            return {
                backgroundColor: " #89a7af"
            }
        },
        components: {EditButton, Navigation},
        mounted() {
            this.$store.dispatch("loadCustomProject", this.id);
        },
        computed: mapState(["custom_project", "editMode"]),


    };
</script>


<style scoped>


    .content {
        margin-left: 200px;
        padding: 1px 20px;
    }

    @media screen and (max-width: 700px) {
        .content {
            margin-left: 0px;
            padding: 1px 20px;
        }

    }



</style>
