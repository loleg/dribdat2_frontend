<template>
    <div>
        <!-- If the link isn't empty, we display the patreon link -->
    <div v-if="link !== ''">
        <p>You can help us by financing our project by clicking on the patreon's logo below  </p>
        <a :href="'//' + link"> <img src="../../assets/Patreon_Mark_Primary.png" /></a>
    </div>
        <!-- If the link empty, warning message-->
        <div v-else class="text-error">
            <i>There is no patreon</i>
        </div>
    </div>
</template>

<script>

    export default {

        name: "patreon",
        props: ["link"]
    }
</script>

<style scoped>

    .text-error{

        font-size: 14px;
        font-family: Verdana, Geneva, sans-serif;
        color: #ff9999;
        margin-top: 15px;

    }

    p {

        color: #333333;
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
