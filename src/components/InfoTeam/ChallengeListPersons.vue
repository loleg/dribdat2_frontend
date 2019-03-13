<template>
  <div>
    <h3>TEAM</h3>
    <ul>
      <li v-for="person in list" :key="person">
        <a :href="person.link">{{ person.firstname + ' ' + person.lastname }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
};
</script>

<style scoped>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
 
li {
  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
  height: 32px;
  vertical-align: middle;
  width: 400px;
  margin: 0 auto;
}
 
li:last-child {
  border: none;
}
 
li a {
  text-decoration: none;
  color: #000;
  display: block;
 
  -webkit-transition: font-size 0.2s ease, background-color 0.2s ease;
  -moz-transition: font-size 0.2s ease, background-color 0.2s ease;
  -o-transition: font-size 0.2s ease, background-color 0.2s ease;
  -ms-transition: font-size 0.2s ease, background-color 0.2s ease;
  transition: font-size 0.2s ease, background-color 0.2s ease;
}
 
li a:hover {
  font-size: 21px;
  color: #42b983;
}

@media screen and (max-width: 992px) {
  li {
    width: 100%;
  }
}

</style>
