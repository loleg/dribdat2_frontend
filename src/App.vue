<template>

    <div id="app">
        <div id="nav">
            <ul>
                <li>
                    <router-link to="/">Project presentation</router-link>
                </li>

                <li>
                    <router-link to="/infoTeam">Info Team</router-link>
                </li>
            </ul>
            <br/>
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




    @media screen and (min-width: 728px){

        body{

            margin-bottom: 20px;
            margin-top:20px;
            background-color: #292929;

        }

        #app {
            font-family: Arial;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;

            margin:0 auto;
            padding:0 auto;
            margin-left: 250px;
            margin-right: 250px;
        }

        #nav {


            border-bottom: whitesmoke 1px solid;
            margin-bottom: 4px;
            ul{
                list-style-type: none;
                margin: 5px;
                padding: 0;
                overflow: hidden;
                background-color: #292929;
            }
            li {
                float: left;
            }
            li a {
                display: block;
                color: white;
                text-align: center;
                padding: 10px 20px;
                text-decoration: none;
                font-weight: bold;
                color: whitesmoke;

                &.router-link-exact-active {
                    color: whitesmoke;
                }
            }

            li a:hover {
                text-decoration: underline;
            }
        }
    }

//CSS part for the mobile to tablet
    @media screen and (min-width: 300px) and (max-width: 768px){
        body{

            margin-bottom: 20px;
            margin-top: 20px;
            background-color: #292929;
            margin-left: 20px;
            margin-right: 20px;

        }

        #app {
            font-family: Arial;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;

        }

        #nav {


            border-bottom: whitesmoke 1px solid;
            margin-bottom: 20px;
            ul{
                list-style-type: none;
                margin: 5px;
                padding: 0;
                overflow: hidden;
                background-color: #292929;
            }
            li {
                float: left;
            }
            li a {
                display: block;
                color: white;
                text-align: center;
                padding: 2px 3px;
                text-decoration: none;
                font-weight: bold;
                color: whitesmoke;

                &.router-link-exact-active {
                    color: whitesmoke;
                }
            }

            li a:hover {
                text-decoration: underline;
            }
        }
    }


</style>
