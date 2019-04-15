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
/*import jQuery from 'jquery';

export default {
  props: ["id"],
  data() {
    return {
      disqus_shortname: "dribdat",
      disqus_identifier: '', // made of post id &nbsp; guid
      disqus_url: '' // post permalink
    };
  },
  methods: {
    loadDisqus(source, identifier, url) {
      if (window.DISQUS) {
        jQuery("#disqus_thread").appendTo(source.parent()); // append the HTML to the control parent

        // if Disqus exists, call it's reset method with new parameters
        this.DISQUS.reset({
          reload: true,
          config: function() {
            this.page.identifier = identifier;
            this.page.url = url;
          }
        });
      } else {
        //insert a wrapper in HTML after the relevant "show comments" link
        jQuery('<div id="disqus_thread"></div>').insertAfter(source);
        this.disqus_identifier = identifier; // set the identifier argument
        this.disqus_url = url; // set the permalink argument

        // append the Disqus embed script to HTML
        var dsq = document.createElement("script");
        dsq.type = "text/javascript";
        dsq.async = true;
        dsq.src = "https://" + this.disqus_shortname + ".disqus.com/embed.js";
        jQuery("head").appendChild(dsq);
      }
    }
  },
  created: function () {
    this.loadDisqus(this.disqus_shortname, this.disqus_identifier, this.disqus_url)
  }
};*/
</script>

<style scoped>
</style>
