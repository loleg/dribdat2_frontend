<template>
  <div id="disqus_thread"></div>
</template>

<script>
export default {
  props: ["id", "uniqueUrl", 'title'],
  data() {
    return {
      disqus_config: function() {
        this.page.url = "http://localhost"; // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = this.id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      }
    };
  },
  methods: {
      reset: function (newIdentifier, newUrl, newTitle, newLanguage) {
          console.log(newIdentifier)
          console.log(newUrl)
          console.log(newTitle)
          DISQUS.reset({
              reload: true,
              config: function () {
                  this.page.identifier = newIdentifier;
                  this.page.url = newUrl
                  this.page.title = newTitle;
                  this.language = newLanguage;
              }
          });
      },
    showDisqus: function() {
        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
        var disqus_shortname = 'dribdat';
        var disqus_identifier = this.uniqueUrl + /step/ + this.id;
        var disqus_url = 'http://dribdat' + this.uniqueUrl + /step/ + this.id;
        var disqus_config = function () {
            this.language = "en";
        };
        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
        /* * * Disqus Reset Function * * */
        var reset = this.reset
    },


  },
  created: function() {
    this.showDisqus();

  }
};
</script>

<style scoped>
</style>
