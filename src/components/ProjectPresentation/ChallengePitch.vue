<template>
  <div class="pitch">
    <!--<div v-if="editMode">
      <input class="input-pitch" type="text" :placeholder="embedLink(this.challenge_pitch)">
      <button type="button" class="btn btn-primary" @click="modify">Modify</button>
    </div>
    <div v-else>
      <div class="resp-container">
        <iframe class="rest-iframe" :src="embedLink(this.pitch)"></iframe>
      </div>
    </div>-->
    <div  class="resp-container">
      <iframe class="rest-iframe" :src="challenge_pitch"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pitch: String
  },
  data() {
    return {
      challenge_pitch: this.embedLink(this.pitch)
    };
  },
  methods: {
    /*modify() {
      this.pitch = this.embedLink(this.challenge_pitch);
    },*/
    embedLink(link = "https://www.youtube.com/watch?v=Vh5FW5hSZyI") {
      if (link.includes("youtube.com/watch")) {
        // youtube video
        let yt_video_id = link.split("=")[1];
        return "https://www.youtube.com/embed/" + yt_video_id;
      } else if (link.includes("dailymotion.com/video")) {
        // dailymotion video
        let dm_video_id = this.pitch.split("video/")[1];
        return "https://www.dailymotion.com/embed/video/" + dm_video_id;
      } else {
        // other
        return link;
      }
    }
  },
  mounted: function () {
    this.challenge_pitch = this.embedLink(this.pitch);
  }
};
</script>

<style scoped>
.resp-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}

.rest-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  border: 0;
}

input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

@media screen and (min-width: 1200px) {
  .rest-iframe {
    height: 75%;
  }
}

@media screen and (max-width: 1200px) {
  .rest-iframe {
    height: 100%;
  }
}
</style>
