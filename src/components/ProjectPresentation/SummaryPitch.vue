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
            color: #f9f9f9;
            font-family: Verdana, Geneva, sans-serif;
            font-size: 15px;

        }
    }

    /*
             Tablets part
             */
    @media screen and (min-width: 767px) and (max-width: 1200px) {

        .summary {
            text-align: justify;
            color: #f9f9f9;
            font-family: Verdana, Geneva, sans-serif;
            font-size: 15px;
        }
    }
    /*
     Part for the computer
  */

    @media screen and (min-width: 1200px) {

        .summary{
            text-align: justify;
            color: #f9f9f9;
            font-family: Verdana, Geneva, sans-serif;
            margin-top: -130px;

        }
    }





</style>
