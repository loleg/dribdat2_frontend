<template>
    <div class="projectPresentation">
        <ProjectTitle title="Placeholder Title"></ProjectTitle>
        <SummaryPitch  summary-text="Nihil est enim virtute amabilius"/>
    </div>
</template>

<script>
    import SummaryPitch from '../components/SummaryPitch';
    import ProjectTitle from '../components/ProjectPresentation/ProjectTitle';
    export default {
        name: 'ProjectPresentation',
        components: {
            SummaryPitch,
            ProjectTitle
        },

    }
</script>

<style scoped>

</style>
