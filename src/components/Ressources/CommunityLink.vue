<template>
    <div class="community-link">
        <!-- If we have the link for the community -->
        <p  v-if="urlCommunity !== ''"> You can reach us on slack !

            <br/>
        <a :href="urlCommunity">
            <img src="../../assets/slack.png"/>
        </a>
        </p>
        <!-- If we don't have the link for the community, warning message -->
        <i v-else>there is no community yet</i>



    </div>
</template>

<script>
    export default {
        name: "CommunityLink",
        props: ["urlCommunity"]
    }
</script>

<style scoped>


    i{

        font-size: 12px;
        font-family: Verdana, Geneva, sans-serif;
        color: #ff9999;
    }

    div{
        text-align: left;
    }
    p {

        color: #333333;
        font-family: Verdana, Geneva, sans-serif;
        font-size: 15px;
        margin-top: 45px;
        text-align: left;

    }

    img{
        margin-top: 10px;
        height: 32px;
        width: 32px;

    }

</style>
