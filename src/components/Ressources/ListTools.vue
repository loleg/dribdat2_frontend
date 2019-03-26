<template>
  <div class="tools">
    <h3>TOOLS USED DURING THIS CHALLENGE</h3>
    <ul>
      <li v-for="tool in tools" :key="tool.id">{{ tool.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["tools"]
};
</script>

<style scoped>
.tools {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 35px;
}

li {
  font: 200 18px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
  height: 38px;
  width: 100%;
  margin-top: 10px;
  text-decoration: none;
  color: #f9f9f9;
  display: block;

  -webkit-transition: font-size 0.2s ease, background-color 0.2s ease;
  -moz-transition: font-size 0.2s ease, background-color 0.2s ease;
  -o-transition: font-size 0.2s ease, background-color 0.2s ease;
  -ms-transition: font-size 0.2s ease, background-color 0.2s ease;
  transition: font-size 0.2s ease, background-color 0.2s ease;
}

li:last-child {
  border: none;
}

li:hover {
  font-size: 21px;
  color: #019eba;
}

@media screen and (min-width: 300px) and (max-width: 767px) {
  h3 {
    font-size: 120%;
    color: #f9f9f9;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    text-align: center;
    margin-bottom: 20px;
  }
}
/*
    Tablets part
    */
@media screen and (min-width: 767px) and (max-width: 1200px) {
  h3 {
    font-size: 110%;
    color: #f9f9f9;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    text-align: center;
    margin-bottom: 30px;
  }
}

/*
Part for the computer
 */
@media screen and (min-width: 1200px) {
  h3 {
    font-size: 120%;
    color: #f9f9f9;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    text-align: center;
    margin-bottom: 32px;
  }
}
</style>

