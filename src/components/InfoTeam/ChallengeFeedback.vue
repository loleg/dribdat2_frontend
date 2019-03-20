<template>
  <div class="comments">
    <vue-disqus shortname="dribdat"></vue-disqus>
    <!-- <disqus shortname="your_shortname_disqus" :identifier="page_id" url="http://example.com/path"></disqus> -->
  </div>
</template>

<script>
import VueDisqus from 'vue-disqus'

export default {
  props: {

  },
  components: {
    VueDisqus
  },
  data () {
    return {

    }
  }
};
</script>

<style scoped>
</style>
