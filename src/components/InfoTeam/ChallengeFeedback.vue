<template>
  <!-- <div class="comments">
  <disqus shortname="your_shortname_disqus" :identifier="page_id" url="http://example.com/path"></disqus>
  </div>-->
  <div id="disqus_thread"></div>
</template>

<script>
// eslint-disable-next-line
var disqus_config = function() {
  this.page.url = "https://dribdat.ch"; // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = this.id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() {
  // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement("script");
  s.src = "https://dribdat.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();

export default {
  props: ["id"],
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
