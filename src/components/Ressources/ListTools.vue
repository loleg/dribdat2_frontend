<template>
  <div class="tools">
    <h2>Tools used during this challenge : </h2>
    <!--
          USED FOR THE EDIT MODE

    <div v-if="!editMode">
      <ul>
        <li v-for="tool in tools" :key="tool.id">
          <a :href="tool.link">{{ tool.name }}</a>
        </li>
      </ul>
    </div>
    <div v-else>
      <ul>
        <li v-for="tool in tools" :key="tool.id">
          <a :href="tool.link">{{ tool.name }}</a>
          <button type="button" class="btn btn-danger" @click="remove(tool)">
            <i class="icon-remove"></i>
          </button>
        </li>
      </ul>
      <input class="input-tools" type="text" v-model="tool" placeholder="Insert a new tool">
      <button type="button" class="btn btn-primary" @click="add">Add</button>
    </div>-->
    <i v-if="!tools.length">There are no tools at the moment</i>
    <div class="list">
    <ul>
      <li v-for="tool in tools" :key="tool.key">
        <a :href="tool.link">{{ tool.name }}</a>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tools"],
  data() {
    return {
      tool: ""
    };
  },
 /*
      USED FOR THE EDIT MODE
  methods: {
    remove(tool) {
      this.tools.splice(this.tools.indexOf(tool), 1);
    },
    add() {
      let idTool = this.tools[this.tools.length - 1]["id"];
      if (idTool == null) idTool = 1;
      this.tools.push({
        id: idTool + 1,
        name: this.tool
      });
    }
  }*/
};
</script>

<style scoped>

  /* GENERAL CSS FOR EVERY DEVICE */

  i{
    font-size: 12px;
    font-family: Verdana, Geneva, sans-serif;
    color: #ff9999;
  }

.tools {
  margin-top: 20px;
}

/* USED FOR EDIT MODE
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

/* Phone part */
@media screen and (min-width: 300px) and (max-width: 767px) {
  h3 {
    font-size: 120%;
    margin-bottom: 20px;
  }
}
/* Tablets part */
@media screen and (min-width: 767px) and (max-width: 1200px) {
  h3 {
    font-size: 110%;
    margin-bottom: 30px;
  }
}

/*  Part for the computer */
@media screen and (min-width: 1200px) {
  h3 {
    font-size: 120%;
    margin-bottom: 32px;
  }
}
</style>

