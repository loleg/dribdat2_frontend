<template>
  <div class="ressources">
    <h2>Ressources used during this challenge : </h2>

    <!-- USED IF THE EDIT MODE

    <div v-if="!editMode">
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
    <div class="list">
    <ul>
      <!-- If we don't have resources, warning message -->
      <i class="text-error" v-if="!ressources.length">There are no resources at the moment</i>
      <li v-for="ressource in ressources" :key="ressource.key">
        <a :href="ressource.link">{{ ressource.name }}</a>

      </li>
    </ul>
  </div>
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
  /*
  USED FOR THE EDIT MODE

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
  }*/
};
</script>

<style scoped>

  /* GENERAL CSS FOR EVERY DEVICE */

  h2 {
    color: #ffffff;
    background-color: #6c757d;
    border-radius: 5px;
  }


.ressources {
  margin-top: 20px;
}

/* USED FOR THE EDIT MODE
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
  */



/* Part for the computer */
@media screen and (min-width: 1200px) {
  h3 {
    color: #000000;
    margin-bottom: 32px;
  }
}
</style>

