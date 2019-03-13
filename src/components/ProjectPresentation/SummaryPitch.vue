<template>
    <div class="textSummary">
        <p>{{ summaryText }}</p>
    </div>
</template>

<script>
    export default {
        name: "SummaryPitch",
        props: ['summaryText']
    }
</script>

<style scoped>
@media screen and (min-width: 320px){


    .textSummary{
        text-align: justify;
        color: whitesmoke;
        font-family: Verdana, Geneva, sans-serif;

    }
}
</style>
