<template>
    <div>
        <p>You can help us by financing our project by clicking on the patreon's logo below  </p>
        <a :href="'//' + link"> <img src="../../assets/Patreon_Mark_Primary.png" /></a>
    </div>
</template>

<script>

    export default {

        name: "patreon",
        props: ["link"]
    }
</script>

<style scoped>



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
