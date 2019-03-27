<template>
    <div id="challenge-list">
        <ul v-for="project in projectList" v-bind:key="project.id">
            <li>
                <router-link :to="{ name: 'presentation', params: { id: project.id }}">{{ project.name }}</router-link>
            </li>
        </ul>
    </div>

</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'ProjectList',
        data() {
            return {
                'projects' : []
            }
        },
        created() {
            this.$store.dispatch('loadProjectList')
        },
        computed: mapState([
            'projectList'
        ])
    }
</script>

<style scoped>

</style>
