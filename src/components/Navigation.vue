<template>
  <div class="sidebar d-flex">
    <a>
      <router-link :to="{ name: 'presentation', params: { id:id }}">
        <font-awesome-icon icon="lightbulb"/>
        <p class="textHide">Project</p>
      </router-link>
    </a>
    <a>
      <router-link :to="{ name: 'team', params: { id:id }}">
        <font-awesome-icon icon="users"/>
        <p class="textHide">Team</p>
      </router-link>
    </a>
    <a>
      <router-link :to="{ name: 'development', params: { id:id }}">
        <font-awesome-icon icon="file-code"/>
        <p class="textHide">Status</p>
      </router-link>
    </a>
    <a>
      <router-link :to="{ name: 'ressources', params: { id:id }}">
        <font-awesome-icon icon="link"/>
        <p class="textHide">Resources</p>
      </router-link>
    </a>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: ["id"]
};
</script>

<style scoped>

  :root{
    --salmon-color: salmon;
    --color-title-text:33333 ;
    --font-family: Verdana, Geneva, sans-serif ;
    --black-color: black;
  }

.sidebar {
  width: 180px;
  background-color: #f4fcfc;
  position: fixed;
  height: 100%;
  border: 1px groove #333333;
  border-radius: 10px;
  font-family: var(--font-family);
  flex-flow: column;
  opacity: 0.87;

}

.sidebar a {
  display: block;
  color: var(--black-color);
  padding: 15px;
  text-decoration: none;
  border-radius: 2px;

}

.sidebar a:hover {
  background-color: var(--salmon-color);
  color: #f9f9f9;
  border-radius: 10px;

}

.sidebar a:focus{
  background-color: var(--salmon-color);
  color: #f9f9f9;
  border-radius: 10px;

}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    position: relative;
    border: none;
    flex-flow: row;
    justify-content: space-between;
    margin-bottom: 20px;
    border: 1px groove #333333;
    border-radius: 10px;

  }

  .sidebar a {
    float: left;
    padding: 8px;
  }



  .textHide {
    font-size: 0px;
    line-height: 0px;
    display: inline;
  }
}
</style>
