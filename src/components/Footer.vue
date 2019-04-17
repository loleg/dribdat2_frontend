<template>
  <!-- Site footer -->
  <footer id="myFooter">
    <link
      rel="stylesheet"
      href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"
    >
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <h5>Event</h5>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a :href="this.project.event.webpage_url">Event info page</a>
            </li>
            <li>
              <a href="https://www.starticket.ch/fr" target="_blank">Register to the event</a>
            </li>
            <li>
              <a :href="this.project.event.community_url" target="_blank">Contact</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-6">
          <h5>Challenge</h5>
          <ul>
            <li>
              <a href="http://www.patreon.com" target="_blank">Support team</a>
            </li>
            <li>
              <a :href="this.project.contact_url" target="_blank">Contact team</a>
            </li>
            <li>
              <a :href="'https://hack.opendata.ch/project/' + this.project.id" target="_blank">Leave beta version</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-12">
          <div class="social-networks">
            <a href="https://twitter.com" class="twitter">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com" class="facebook">
              <i class="fa fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <p>© 2019 Dribdat</p>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["project"]
};
</script>

<style scoped>

  #myFooter li {
    font-size: 11px;

  }

#myFooter {
  background-color: #f4fcfc;
  opacity: 0.87;
  color: white;
  margin-top: 40px;
  border: 1px groove #333333;
  border-radius: 10px;
  height: 75%;
}

#myFooter .footer-copyright {
  background-color: #3a3838;
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: center;
  font-size: 13px;
  border-radius: 5px;
}

#myFooter .row {
  margin-bottom: 12px;
  text-transform: uppercase;
}


#myFooter .footer-copyright p {
  margin: 8px;
  color: #ccc;
}

#myFooter ul {
  list-style-type: none;
  padding-left: 0;
  line-height: 1.7;
}

#myFooter h5 {
  font-size: 13px;
  color: var(--salmon-color);
  font-weight: bold;
  margin-top: 20px;
  background-color: #f4fcfc;
  text-transform: uppercase;
}

#myFooter h5:after {
  position: absolute;
  content: '';
  border-bottom: 1px solid #333333;
  width: 70%;
  transform: translateX(-50%);
  bottom: -5px;
  left: 50%;
}

#myFooter h2 a {
  font-size: 12px;
  text-align: center;
  color: var(--color-title-text);
}

#myFooter a {
  color: #333333;
  text-decoration: none;

}

#myFooter a:hover,
#myFooter a:focus {
  text-decoration: none;
  color: var(--salmon-color);
}

#myFooter .social-networks {
  text-align: center;
  padding-top: 30px;
}

#myFooter .social-networks a {
  font-size: 30px;
  color: #333333;
  padding: 10px;
  transition: 0.2s;
}

#myFooter .social-networks a:hover {
  text-decoration: none;
}

#myFooter .facebook:hover {
  color: var(--salmon-color);
}



#myFooter .twitter:hover {
  color: var(--salmon-color);

}



@media screen and (max-width: 767px) {
  #myFooter {
    text-align: center;
  }
}

/* CSS used for positioning the footers at the bottom of the page. */
/* You can remove this. */

html {
  height: 100%;
}

body {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  height: 100%;
}


#myFooter {
  flex: 0 0 auto;
  -webkit-flex: 0 0 auto;
}
</style>


