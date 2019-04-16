<template>
  <div class="infos-link">
    <p class="title-link">
      <b>Event homepage :</b>
    </p>
    <!--<a v-if="!editMode" :href="'//' + link">{{link}}</a>-->
    <a :href="'//' + link">{{link}}</a>
    <!--<input v-if="editMode" type="url" v-model="link" v-bind:href="'//' + link">-->
  </div>
</template>

<script>
export default {
  name: "InfosLink",
  props: ["link"]
};
</script>

<style scoped>
.title-link {
  color: #000000;
  text-decoration: underline #89a7af;
  font-family: Verdana, Geneva, sans-serif;
}

.infos-link {
  font-size: 80%;
  text-align: left;
  font-family: Verdana, Geneva, sans-serif;
}
</style>
