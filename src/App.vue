<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Project presentation</router-link> |
      <router-link to="/infoTeam">Info Team</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import {APIService} from './APIService';
  export default {
      name: 'HelloWorld',
      data () {
          return {
              info: null
          }
      },
      methods: {

          getData() {
              APIService.getProject(1).then((data) => {

                  this.info = data
              })
          }
      },
      mounted() {
          this.getData()
      }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
