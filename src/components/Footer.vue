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
#myFooter {
  background-color: #3c3d41;
  color: white;
  padding-top: 30px;
  margin-top: 30px;
}

#myFooter .footer-copyright {
  background-color: #333333;
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: center;
}

#myFooter .row {
  margin-bottom: 40px;
  text-transform: uppercase;
}

#myFooter .navbar-brand {
  margin-top: 45px;
  height: 65px;
}

#myFooter .footer-copyright p {
  margin: 10px;
  color: #ccc;
}

#myFooter ul {
  list-style-type: none;
  padding-left: 0;
  line-height: 1.7;
}

#myFooter h5 {
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin-top: 30px;
  text-transform: uppercase;
}

#myFooter h5:after {
  position: absolute;
  content: '';
  border-bottom: 1px solid #d2d7da;
  width: 70%;
  transform: translateX(-50%);
  bottom: -10px;
  left: 50%;
}

#myFooter h2 a {
  font-size: 50px;
  text-align: center;
  color: #fff;
}

#myFooter a {
  color: #d2d1d1;
  text-decoration: none;
}

#myFooter a:hover,
#myFooter a:focus {
  text-decoration: none;
  color: white;
}

#myFooter .social-networks {
  text-align: center;
  padding-top: 30px;
}

#myFooter .social-networks a {
  font-size: 25px;
  color: #f9f9f9;
  padding: 10px;
  transition: 0.2s;
}

#myFooter .social-networks a:hover {
  text-decoration: none;
}

#myFooter .facebook:hover {
  color: #0077e2;
}

#myFooter .google:hover {
  color: #ef1a1a;
}

#myFooter .twitter:hover {
  color: #00aced;
}

#myFooter .btn {
  color: white;
  background-color: #d84b6b;
  border-radius: 20px;
  border: none;
  width: 150px;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  line-height: 25px;
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

.content {
  flex: 1 0 auto;
  -webkit-flex: 1 0 auto;
  min-height: 200px;
}

#myFooter {
  flex: 0 0 auto;
  -webkit-flex: 0 0 auto;
}
</style>


