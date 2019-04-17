<template>
  <div >
    <h3>Summary :</h3>
    <!-- USED IF WE NEED TO EDIT THE SUMMARY

    <p v-if="!editMode">{{ summary }}</p>
     <input type="text" v-model="summary" v-if="editMode" placeholder="Description of the challenge">-->
    <p align="left"> {{ summary }}</p>

  </div>
</template>

<script>
export default {
  name: "SummaryPitch",
  props: ["summary"]
};
</script>



<style scoped>
  /* GENERAL CSS FOR EVERY DEVICE */

  h3 {
    margin-top: 15px;
    text-align: left;
  }

  p {
    color: #333333;
    font-family: Verdana, Geneva, sans-serif;
  }

/*  Part for the mobile  */

@media screen and (min-width: 300px) and (max-width: 767px) {

  p {
    font-size: 90%;
  }
}

/*  Tablets part  */
@media screen and (min-width: 767px) and (max-width: 1200px) {
  p {
    font-size: 105%;
  }

}


</style>
