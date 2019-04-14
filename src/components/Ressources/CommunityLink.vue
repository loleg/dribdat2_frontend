<template>
    <div class="community-link">
        <p > You can reach us on slack ! </p>

        <a :href="urlCommunity">
            <img src="../../assets/slack.png"/>
        </a>

    </div>
</template>

<script>
    export default {
        name: "CommunityLink",
        props: ["urlCommunity"]
    }
</script>

<style scoped>
    div{
        text-align: left;
    }
    p {

        color: #f9f9f9;
        font-family: Verdana, Geneva, sans-serif;
        font-size: 15px;
        margin-top: 45px;
        text-align: left;

    }

    img{
        height: 32px;
        width: 32px;

    }

</style>
