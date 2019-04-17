<template>
  <div class="pitch">
    <!-- USED IF WE NEED TO EDIT THE COMPNENT IN THE WEB APP

    <div v-if="editMode">
      <input class="input-pitch" type="text" :placeholder="embedLink(this.challenge_pitch)">
      <button type="button" class="btn btn-primary" @click="modify">Modify</button>
    </div>
    <div v-else>
      <div class="resp-container">
        <iframe class="rest-iframe" :src="embedLink(this.pitch)"></iframe>
      </div>
    </div>-->
    <div class="resp-container">
      <iframe
        class="resp-iframe"
        :src="pitch"
        allow="encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pitch: String
  },
  data() {
    return {};
  },
  methods: {
  }
};
</script>

<style scoped>
.resp-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}

.resp-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}


</style>
