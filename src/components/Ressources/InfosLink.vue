<template>
    <div class="infos-link">

        <p class="title-link"><b>Event homepage : </b> </p>
        <a v-if="!editMode" :href="'//' + link">{{link}}</a>
        <input v-if="editMode" type="url" v-model="link" v-bind:href="'//' + link">
    </div>
</template>

<script>

    export default {
        name: "InfosLink",
        props:[ 'link', 'editMode' ]
    }
</script>

<style scoped>

    .title-link{
        color:  #89a7af;
        text-decoration: underline #89a7af;
    }

    .infos-link {
        font-size: 100%;
        text-align: left;
    }
</style>
