<template>

    <div class="projectPresentation">
        <ProjectTitle title="Placeholder Title"></ProjectTitle>
        <TitleChallenge title="Title of the challenge"/>
        <ChallengePitch pitch="https://www.dailymotion.com/video/xkq3cr"></ChallengePitch>
        <SummaryPitch  summary-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu nunc, sollicitudin eget semper eget, lobortis sit amet tellus. Morbi mauris est, tincidunt ut tortor vel, aliquam condimentum risus. Nam molestie viverra ex sit amet tincidunt. Cras nunc quam, sagittis et congue at, ultrices a risus. Vestibulum tincidunt leo vitae auctor posuere. Nullam congue purus at ligula porta gravida. Ut vitae sapien nec nisi varius tempus auctor sed est. Maecenas laoreet aliquet odio tempor blandit. Nam sodales vehicula aliquet. Proin non egestas purus, sit amet feugiat nisi. Sed urna dolor, molestie molestie scelerisque sed, maximus egestas neque. Donec vehicula odio vitae massa hendrerit, dapibus mollis quam cursus. Pellentesque id sollicitudin eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse enim dolor, facilisis a porta in, tempor ac purus. Donec erat eros, lobortis eget dictum sollicitudin, luctus ac tellus."/>
        <!-- https://www.dailymotion.com/video/xkq3cr -->
        <!-- https://www.youtube.com/watch?v=zihJTimjdls -->
        <div class="contentLeft">
            <SocialLink class="LinkSocial" link="www.facebook.com"></SocialLink>
        </div>
    </div>

</template>

<script>
    import TitleChallenge from "../components/ProjectPresentation/TitleChallenge";
    import SummaryPitch from '../components/ProjectPresentation/SummaryPitch'
    import ProjectTitle from '../components/ProjectPresentation/ProjectTitle'
    import ChallengePitch from '../components/ProjectPresentation/ChallengePitch'
    import SocialLink from "../components/ProjectPresentation/SocialLink";

    export default {
        name: 'ProjectPresentation',
        components: {
            SocialLink,
            TitleChallenge,
            SummaryPitch,
            ProjectTitle,
            ChallengePitch,

        },

    }
</script>

<style scoped>


    @media screen and (min-width: 992px)
    {
        .projectPresentation{
            height: 75%;
          padding: 0;
            maring:0;


        }

        .contentLeft{
            text-align: left;
        }

    }

</style>
