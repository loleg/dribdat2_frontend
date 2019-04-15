<template>
  <div class="social-link">
    <p class="title-link">
      <b>Project link in social network :</b>
    </p>
    <!--<a v-if="!editMode" :href="'//' + link">{{link}}</a>-->

    <a :href="'//' + link">
      <img src="../../assets/facebook.png" />
    </a>
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
  color: #89a7af;
  text-decoration: underline #89a7af;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;
}

.social-link {
  font-size: 80%;
  text-align: left;
}

  img{
    margin-left: -10px;
    margin-top: -15px;
    height: 50px;
    width: 50px;
  }
</style>
