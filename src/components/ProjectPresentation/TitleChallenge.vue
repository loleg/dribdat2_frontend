<template>

  <!-- If we have the title of the challenge, we can see it. Otherwise, the title isn't display-->
  <div v-show="title !== ''" class="challenge-title">
    <h2>Challenge : {{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "TitleChallenge",
  props: ["title"]
};


</script>

<style scoped>

  /* GENERAL CSS FOR EVERY DEVICE */
  .challenge-title {
    color: #f9f9f9;
    font-family: Verdana, Geneva, sans-serif;
    text-align: center;
  }

/*  Part for the mobile */
@media screen and (min-width: 300px) and (max-width: 767px) {
  .challenge-title {
    font-size: 20px;
    margin-bottom: 25px;
  }
}
/*  Tablets part */
@media screen and (min-width: 767px) and (max-width: 1200px) {
  .challenge-title {

    font-size: 30px;
    margin-bottom: 25px;

  }
}
/*  Part for the computer  */
@media screen and (min-width: 1200px) {
  .challenge-title {
    font-size: 35px;
    margin-bottom: 75px;
  }
}
</style>
