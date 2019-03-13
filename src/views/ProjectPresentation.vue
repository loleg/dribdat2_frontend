<template>
    <div class="projectPresentation">
        <ProjectTitle title="Placeholder Title"></ProjectTitle>
        <TitleChallenge title="Titre du challenge"/>
        <SummaryPitch  summary-text="Nihil est enim virtute amabilius"/>
        <!-- https://www.dailymotion.com/video/xkq3cr -->
        <!-- https://www.youtube.com/watch?v=zihJTimjdls -->
        <ChallengePitch pitch="https://www.youtube.com/watch?v=zihJTimjdls"></ChallengePitch>
    </div>
</template>

<script>
    import TitleChallenge from "../components/ProjectPresentation/TitleChallenge";
    import SummaryPitch from '../components/ProjectPresentation/SummaryPitch'
    import ProjectTitle from '../components/ProjectPresentation/ProjectTitle'
    import ChallengePitch from '../components/ProjectPresentation/ChallengePitch'

    export default {
        name: 'ProjectPresentation',
        components: {
            TitleChallenge,
            SummaryPitch,
            ProjectTitle,
            ChallengePitch
        },

    }
</script>

<style scoped>

</style>
