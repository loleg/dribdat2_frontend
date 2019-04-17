<template>
    <div>
        <!-- IF EDIT MODE
        <button v-if="link !=='' && !editMode" class="btn btn-primary" v-on:click="openSourceUrl()">Source code</button>-->
        <!-- If the link isn't empty, we can lick on the button -->
    <button v-if="link !=='' && !editMode" class="btn btn-primary" v-on:click="openSourceUrl()">Source code</button>
        <!-- If the link empty, warning message and the button didn't work-->
        <p v-else>
        <button  class="btn btn-primary">Source code</button>
            <br/>
            <i>The source code doesn't exist yet.</i>
        </p>
        <!-- IF EDIT MODE
        <input v-if="editMode" type="url" v-model="link" v-bind:href="'//' + link">-->
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
