<template>
    <div id="project">
        <div id="nav">
            <ul>
                <li>
                    <router-link :to="{ name: 'presentation', params: { id: custom_project.id }}">Project presentation</router-link>
                </li>

                <li>
                    <router-link :to="{ name: 'team', params: { id: custom_project.id }}">Info Team</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'development', params: { id: custom_project.id }}">Development Status</router-link>
                </li>
            </ul>
            <br>
        </div>
        <router-view :project="custom_project"></router-view>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Project",
        props: ['id'],
        mounted() {
            this.$store.dispatch('loadCustomProject', this.id)
        },
        computed: mapState([
            'custom_project'
        ])
    }
</script>


<style scoped>

</style>
