<template>
<div class="resp-container">
  <iframe class="rest-iframe" :src="embedable_pitch"></iframe>
</div> 
</template>

<script>
export default {
  props: {
    pitch: String
  },
  data () {
    return {
      embedable_pitch: ''
    }
  },
  created () {
    if(this.pitch.includes('youtube')) {
      // youtube video
      let yt_video_id = this.pitch.split('=')[1];
      this.embedable_pitch = 'https://www.youtube.com/embed/' + yt_video_id
    } else if (this.pitch.includes('dailymotion')) {
      // dailymotion video
      let dm_video_id = this.pitch.split('video/')[1];
      this.embedable_pitch = 'https://www.dailymotion.com/embed/video/' + dm_video_id
    } else {
      // other
      this.embedable_pitch = this.pitch
    }
  }
}
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
  height: 100%;
  border: 0;
}

@media screen and (min-width: 992px) {
  .resp-container {
    margin: 0 20%;
  }

  .rest-iframe {
    height: 60%;
  }
}

</style>
