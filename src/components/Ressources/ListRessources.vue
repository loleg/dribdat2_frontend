<template>
  <div class="ressources">
    <h3>RESSOURCES USED DURING THIS CHALLENGE</h3>
    <!--<div v-if="!editMode">
      <ul>
        <li v-for="ressource in ressources" :key="ressource.id">{{ ressource.name }}</li>
      </ul>
    </div>
    <div v-else>
      <ul>
        <li v-for="ressource in ressources" :key="ressource.id">
          {{ ressource.name }}
          <button
            type="button"
            class="btn btn-danger"
            @click="remove(ressource)"
          >
            <i class="icon-remove"></i>
          </button>
        </li>
      </ul>
      <input type="text" v-model="ressource" placeholder="Insert a new ressources">
      <button type="button" class="btn btn-primary" @click="add">Add</button>
    </div>-->
    <ul>
      <li v-for="ressource in ressources" :key="ressource.key">
        <a :href="ressource.link">{{ ressource.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["ressources"],
  data() {
    return {
      ressource: ""
    };
  },
  methods: {
    remove(ressource) {
      this.ressources.splice(this.ressources.indexOf(ressource), 1);
    },
    add() {
      let idRessource = this.ressources[this.ressources.length - 1]["id"];
      if (idRessource == null) idRessource = 1;
      this.ressources.push({
        id: idRessource + 1,
        name: this.ressource
      });
    }
  }
};
</script>

<style scoped>
.ressources {
  margin-top: 20px;
}

.btn-danger {
  float: right;
  margin-bottom: 0px !important;
}

input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
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
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
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

@media screen and (min-width: 300px) and (max-width: 767px) {
  h3 {
    font-size: 120%;
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
    font-size: 110%;
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
    font-size: 120%;
    color: #f9f9f9;
    font-family: Verdana, Geneva, sans-serif;
    text-align: center;
    margin-bottom: 32px;
  }
}
</style>

