<template>
    <div>
    <button v-if="link !==''" class="btn btn-primary" v-on:click="openSourceUrl()">Source code</button>
        <p v-else>
        <button  class="btn btn-primary">Source code</button>
            <br/>
            <i>The source code doesn't exist yet</i>
        </p>
    </div>
</template>

<script>
    export default {
        name: "SourceCode",
        props: ["link"],

        methods:  {
            openSourceUrl() {
                window.location.href = this.link;

            }
        }
    }
</script>

<style scoped>

    i{
        color: #ff9999;
        font-style: italic;
        font-size: 14px;
    }

</style>
