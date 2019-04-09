<template>
  <div class="Headline">
    <h2>
      Phase :
      <!-- <i v-if="!editMode"> {{ status }}</i></h2> -->
      <i>{{ status }}</i>
    </h2>
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
/*
        Part for the mobile
     */

@media screen and (min-width: 300px) and (max-width: 767px) {
  h2 {
    font-size: 150%;
    color: #f9f9f9;
    font-family: Verdana, Geneva, sans-serif;
    text-align: center;
  }
}
/*
        Tablets part
        */
@media screen and (min-width: 767px) and (max-width: 1200px) {
  h2 {
    font-size: 180%;
    color: #f9f9f9;
    font-family: Verdana, Geneva, sans-serif;
    text-align: center;
  }
}

/*
    Part for the computer
     */
@media screen and (min-width: 1200px) {
  h2 {
    font-size: 250%;
    color: #f9f9f9;
    font-family: Verdana, Geneva, sans-serif;
    text-align: center;
  }
}
</style>
