<template>
  <div>
    <h2>Challenge represented by : </h2>
    <ul>
      <li v-for="person in list"  :key="person.key">
        <a :href="person.link">{{ person.name }}</a>
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

/*  GENERAL CSS FOR EVERY DEVICE  */



ul {
  list-style-type: none;
  padding: 0;
}

li {
  font: 200 18px/1.5 Verdana, Geneva, sans-serif;
  border-bottom: 1px solid #ccc;
  height: 38px;
  vertical-align: middle;
  width: 400px;
  margin-top: 10px;
}

li:last-child {
  border: none;
}

li a {
  text-decoration: none;
  color: #333333;
  display: block;

  -webkit-transition: font-size 0.2s ease, background-color 0.2s ease;
  -moz-transition: font-size 0.2s ease, background-color 0.2s ease;
  -o-transition: font-size 0.2s ease, background-color 0.2s ease;
  -ms-transition: font-size 0.2s ease, background-color 0.2s ease;
  transition: font-size 0.2s ease, background-color 0.2s ease;
}

li a:hover {
  font-size: 21px;
  color: salmon;
}

li {
  width: 100%;
}



/*  part for the mobile  */

@media screen and (min-width: 300px) and (max-width: 767px) {
  h2 {

    margin-bottom: 20px;
  }
}
/*  Tablets part  */
@media screen and (min-width: 767px) and (max-width: 1200px) {
  h2 {

    margin-bottom: 30px;
  }
}

/*   Part for the computer  */
@media screen and (min-width: 1200px) {
  h2 {

    margin-bottom: 32px;
  }
}
</style>













