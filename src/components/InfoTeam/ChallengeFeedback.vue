<template>
  <div id="disqus_thread"></div>
</template>

<script>
export default {
  props: ["id"],

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
