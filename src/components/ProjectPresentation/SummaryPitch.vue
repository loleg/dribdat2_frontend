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

    p{
        text-align: justify;
    }

</style>
