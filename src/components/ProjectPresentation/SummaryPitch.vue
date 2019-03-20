<template>
    <div class="summary">
        <p>{{ summary }}</p>
    </div>
</template>

<script>
    export default {
        name: "SummaryPitch",
        props: ['summary']
    }
</script>

<style scoped>





    /*
    Part for the mobile
 */

    @media screen and (min-width: 300px) and (max-width: 767px) {

        .summary{
            text-align: justify;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            font-size: 15px;

        }
    }
    /*
             Tablets part
             */
    @media screen and (min-width: 767px) and (max-width: 1119px) {

        .summary {
            text-align: justify;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            font-size: 15px;
        }
    }
    /*
     Part for the computer
  */

    @media screen and (min-width: 1119px) and (max-width: 1600px) {

        .summary{
            text-align: justify;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;

        }
    }





</style>
