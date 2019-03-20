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


    .textSummary{
        text-align: justify;
        color: whitesmoke;
        font-family: Verdana, Geneva, sans-serif;

    }
}
</style>
