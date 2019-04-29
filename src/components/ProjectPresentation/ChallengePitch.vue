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
    <div v-if="is_webembed" class="resp-container">
      <iframe
        class="resp-iframe"
        :src="sanitized_url"
        allow="encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pitch: String,
    is_webembed: Boolean
  },
  data() {
    return {};
  },
  methods: {
    /*modify() {
      this.pitch = this.embedLink(this.challenge_pitch);
    },*/
    /*embedLink(link = "https://www.youtube.com/watch?v=Vh5FW5hSZyI") {
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
    }*/
  },
  computed: {
    sanitized_url: function() {
        let url = this.pitch;
        let link = "";
        if(this.pitch !== undefined && url.includes("<iframe"))
        {
            url = this.pitch.split("=\"")[1];
            link = url.split("\">")[0];
        }
        return link;
    }
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
    opacity: 1 !important;
}


</style>
