<template>
  <div id="disqus_thread"></div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      disqus_config: function() {
        this.page.url = "http://localhost"; // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = this.id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      }
    };
  },
  methods: {
    showDisqus: function() {
      {
        var d = document,
          s = d.createElement("script");
        s.src = "https://dribdat.disqus.com/embed.js";
        s.setAttribute("data-timestamp", +new Date());
        (d.head || d.body).appendChild(s);
      }
    }
  },
  created: function() {
    this.showDisqus();
  }
};
</script>

<style scoped>
</style>
