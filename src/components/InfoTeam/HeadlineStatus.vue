<template>
  <div class="Headline">
    <h1>
      Phase :
      <!-- <i v-if="!editMode"> {{ status }}</i></h2> -->
      <i>{{ status }}</i>
    </h1>
    <!--<input type="text" v-model="status" v-if="editMode" placeholder="Headline status ">-->
  </div>
</template>

<script>
export default {
  name: "HeadlineStatus",
  props: ["status"]
};
</script>

<style scoped>


</style>
