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
@media screen and (min-width: 320px){



    /*
    Part for the mobile
 */

    @media screen and (min-width: 300px) and (max-width: 768px) {

        .textSummary{
            text-align: justify;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;
            font-size: 15px;

        }
    }


    /*
    Part for the computer
     */
    @media screen and (min-width: 768px) {

        .textSummary{
            text-align: justify;
            color: whitesmoke;
            font-family: Verdana, Geneva, sans-serif;

        }
        }
    }

</style>
