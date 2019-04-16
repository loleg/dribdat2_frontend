<template>
  <div class="social-link">
    <p class="title-link">
      <b>Project link in social network :</b>
    </p>
    <!--<a v-if="!editMode" :href="'//' + link">{{link}}</a>-->

    <a v-if="link !== ''" :href="'//' + link">
      <img src="../../assets/facebook.png">
    </a>
    <i class="text-error" v-else>There is no link for social networks yet</i>
    <!--<input v-if="editMode" type="url" v-model="link" v-bind:href="'//' + link">-->
  </div>
</template>

<script>
export default {
  name: "SocialLink",
  props: ["link"]
};
</script>

<style scoped>
.title-link {
  color: #333333;
  text-decoration: underline salmon;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;
  margin-top: 50px;
}

.social-link {
  font-size: 80%;
  text-align: left;
  color: #ff9999;
}

.text-error {
  font-size: 12px;
  font-family: Verdana, Geneva, sans-serif;
}

img {
  margin-left: -10px;
  margin-top: -15px;
  height: 50px;
  width: 50px;
}
</style>
