<template>
    <div>
        <p>Patreon links : </p>
        <a :href="'//' + link"> <font-awesome-icon class="iconMoney" icon="dollar-sign"/></a>
    </div>
</template>

<script>

    export default {

        name: "patreon",
        props: ["link"]
    }
</script>

<style scoped>

    div{
        text-align: left;
    }

    p {

        color: #f9f9f9;
        font-family: Verdana, Geneva, sans-serif;
        text-decoration: underline #89a7af;
        font-size: 15px;
        margin-top: 20px;

    }

    .iconMoney{
        color: greenyellow;
        font-size: 25px;
        text-align: left;
    }
</style>
