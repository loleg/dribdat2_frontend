<template>
  <div class="tools">
    <h3>TOOLS USED DURING THIS CHALLENGE</h3>
    <!--<div v-if="!editMode">
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
    <ul>
      <li v-for="tool in tools" :key="tool.key">
        <a :href="tool.link">{{ tool.name }}</a>
      </li>
    </ul>
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
  }
};
</script>

<style scoped>
.tools {
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

