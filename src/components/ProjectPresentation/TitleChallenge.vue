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
h2{
  margin-top: -25px;
}
</style>
