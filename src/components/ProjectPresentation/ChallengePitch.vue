<template>
  <div class="pitch">
    <div v-if="editMode">
      <input type="text" v-model="embedable_pitch" placeholder="Insert the URL of the pitch">
      <button type="button" class="btn btn-primary" @click="modify">Modify</button>
    </div>
    <div v-else>
      <div class="resp-container">
        <iframe class="rest-iframe" :src="embedable_pitch"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pitch: String,
    editMode: Boolean
  },
  data() {
    return {
      embedable_pitch: ""
    };
  },
  methods: {
    modify() {
      this.embedable_pitch = this.embedLink(this.embedable_pitch);

      // send the new spitch to the API
      
    },
    embedLink(link) {
      if (link.includes("youtube")) {
        // youtube video
        let yt_video_id = link.split("=")[1];
        return "https://www.youtube.com/embed/" + yt_video_id;
      } else if (link.includes("dailymotion")) {
        // dailymotion video
        let dm_video_id = this.pitch.split("video/")[1];
        return "https://www.dailymotion.com/embed/video/" + dm_video_id;
      } else {
        // other
        return link;
      }
    }
  },
  created() {
    this.embedable_pitch = this.embedLink(this.pitch);
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
