<template>
    <div class="projectPresentation">
        <ProjectTitle title="Placeholder Title"></ProjectTitle>
        <TitleChallenge title="Titre du challenge"/>
        <SummaryPitch  summary-text="Nihil est enim virtute amabilius"/>
    </div>
</template>

<script>
    import TitleChallenge from "../components/ProjectPresentation/TitleChallenge";
    import SummaryPitch from '../components/SummaryPitch';
    import ProjectTitle from '../components/ProjectPresentation/ProjectTitle';
    export default {
        name: 'ProjectPresentation',
        components: {
            TitleChallenge,
            SummaryPitch,
            ProjectTitle
        },

    }
</script>

<style scoped>

</style>
