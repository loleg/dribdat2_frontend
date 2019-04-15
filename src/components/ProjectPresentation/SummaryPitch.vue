<template>
  <div class="summary">
    <h3>Summary :</h3>
    <!--<p v-if="!editMode">{{ summary }}</p>-->
    <p>{{ summary }}</p>
    <!--<input type="text" v-model="summary" v-if="editMode" placeholder="Description of the challenge">-->
  </div>
</template>

<script>
export default {
  name: "SummaryPitch",
  props: ["summary"]
};
</script>

<style scoped>
/*
Part for the mobile
*/

@media screen and (min-width: 300px) and (max-width: 760px) {

  h3{
    font-size: 16px;
  }
  .summary {
    margin-top: 20px;
    text-align: justify;
    color: #f9f9f9;
    font-family: Verdana, Geneva, sans-serif;
    font-size: 12px;
  }
}

/*
Tablets part
*/
@media screen and (min-width: 760px) and (max-width: 1200px) {
  .summary {
    margin-top: 35px;
    text-align: justify;
    color: #f9f9f9;
    font-family: Verdana, Geneva, sans-serif;
    font-size: 15px;
  }

  h3{
    font-size: 20px;
  }



}

/*
Part for the computer
*/

@media screen and (min-width: 1200px) {

  .summary {
    text-align: justify;
    color: #f9f9f9;
    font-family: Verdana, Geneva, sans-serif;
    margin-top: -90px;
  }

}
</style>
