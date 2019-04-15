<template>
  <div>
    <h3>CHALLENGE REPRESENTED BY :</h3>
    <ul>
      <li class="text-error" v-if="!list.length">There are no members yet</li>
      <li v-for="person in list" :key="person.key">
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

  .text-error{
    color: #ff9999;
    font-style: italic;
    font-size: 14px;
  }

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 35px;
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
  color: #f9f9f9;
  display: block;

  -webkit-transition: font-size 0.2s ease, background-color 0.2s ease;
  -moz-transition: font-size 0.2s ease, background-color 0.2s ease;
  -o-transition: font-size 0.2s ease, background-color 0.2s ease;
  -ms-transition: font-size 0.2s ease, background-color 0.2s ease;
  transition: font-size 0.2s ease, background-color 0.2s ease;
}

li a:hover {
  font-size: 21px;
  color: #019eba;
}

li {
  width: 100%;
}

/*
      Part for the mobile
   */

@media screen and (min-width: 300px) and (max-width: 767px) {
  h3 {
    font-size: 110%;
    color: #f9f9f9;
    font-family: Verdana, Geneva, sans-serif;
    text-align: center;
    margin-bottom: 20px;
  }
}
/*
    Tablets part
    */
@media screen and (min-width: 767px) and (max-width: 1200px) {
  h3 {
    font-size: 100%;
    color: #f9f9f9;
    font-family: Verdana, Geneva, sans-serif;
    text-align: center;
    margin-bottom: 30px;
  }
}

/*
Part for the computer
 */
@media screen and (min-width: 1200px) {
  h3 {
    font-size: 110%;
    color: #f9f9f9;
    font-family: Verdana, Geneva, sans-serif;
    text-align: center;
    margin-bottom: 32px;
  }
}
</style>













