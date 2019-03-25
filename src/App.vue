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
        <li>
          <router-link to="/developmentStatus">Development Status</router-link>
        </li>
      </ul>
      <br>
    </div>
    <router-view :project="project"/>
  </div>
</template>

<script>
    import { APIService } from "./APIService";

export default {
  name: "dribdat",
  data() {
    return {
      project: {
        name: "name",
        summary: "summary",
        challenge: {
          name: "challengeName"
        },
        id: null,
        pitch: "http://example.com"
      },
    };

  },

  methods: {
    getData() {
      APIService.getProject(1).then(data => {
        this.project.id = data.project.id;
        this.project.name = data.project.name;
        this.project.summary = data.project.summary;
        this.project.challenge.name = data.project.category.name;
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss">
    body{

        margin-bottom: 20px;
        margin-top:20px;
        margin-left: 20px;
        margin-right: 20px;
        background-color: #616163;

    }

    .container {

        display: flex;
        width: auto;
        height: auto;
        justify-content: center;
        align-items: center;
    }

    .add-feedback {
        &.open {
            background-color: #FAFAFA;
            padding: 18px 32px;
            border-radius: 5px;
            width: 700px;
            height: auto;
            cursor: default;
            form {
                opacity: 1;
                transition: opacity 0.1s ease;
                transition-delay: 0.3s;
                height: auto;
            }
        }
        transition: all 0.3s ease;
        background-color: #3498DB;
        height: 100px;
        width: 100px;
        border-radius: 72px;
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .07);
        cursor: pointer;
        .button-copy {
            text-align: center;
            line-height: 100px;

            font-weight: normal;
            color: #f7f7f7;
        }
        form {
            transition: none;
            opacity: 0;
            height: 0;
            overflow: hidden;
        }
        .cancel {
            font-size: 12px;
            text-align: right;
            margin-top: 1em;
            span {
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }


    /*
    Part for computer
 */


    @media screen and (min-width: 1200px) {



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


            border-bottom: #f9f9f9 1px solid;
            margin-bottom: 4px;
            ul{
                list-style-type: none;
                margin: 5px;
                padding: 0;
                overflow: hidden;
                background-color: #616163;
                margin-bottom: -5px;
            }
            li {
                float: left;
            }
            li a {
                display: block;
                text-align: center;
                padding: 10px 20px;
                text-decoration: none;
                font-weight: bold;
                color: #f9f9f9;
                font-size: 16px;
                padding-left: 1px;


                //Vertical line
                margin-right: 8px;
                margin-left: 8px;
                border-right: 1px solid #f9f9f9;
                height: 12px;
                margin-top: -8px;

                &.router-link-exact-active {
                    color: #f9f9f9;
                }
            }

            //Used to not have the margin in left in 8px
            li:first-child a {
                margin-left: 0px;
            }
            //Used to not have the border for the last router
            li:last-child a {
                border-right: none;
            }

            li a:hover {
                text-decoration: underline;
            }
        }
    }

    /*
    Tablets part
    */
    @media screen and (min-width: 767px) and (max-width: 1200px){



        #app {
            font-family: Arial;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;


            margin:0 auto;
            padding:0 auto;
            margin-left: 20px;
            margin-right: 20px;
        }

        #nav {


            border-bottom: #f9f9f9 1px solid;

            ul{
                list-style-type: none;
                margin: 5px;
                padding: 0;
                overflow: hidden;
                background-color: #616163;
                margin-bottom: -8px;
            }
            li {
                float: left;

            }
            li a {
                display: block;
                text-align: center;
                padding: 10px 20px;
                padding-left: 1px;
                text-decoration: none;
                font-weight: bold;
                color: #f9f9f9;
                font-size: 15px;



                //Vertical line
                margin-right: 8px;
                margin-left: 8px;
                border-right: 1px solid #f9f9f9;
                height: 12px;
                margin-top: -8px;


                &.router-link-exact-active {
                    color: #f9f9f9;
                }
            }

            //Used to not have the margin in left in 8px
            li:first-child a {
                margin-left: 0px;
            }
            //Used to not have the border for the last router
            li:last-child a {
                border-right: none;
            }
            li a:hover {
                text-decoration: underline;
            }
        }
    }

    /*
    Phone part
     */

    @media screen and (min-width: 300px) and (max-width: 767px) {

        #app {
            font-family: Arial;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;

            margin:0 auto;
            padding:0 auto;


        }

        #nav {


            border-bottom: #f9f9f9 1px solid;
            margin-bottom: 2px;
            ul{
                list-style-type: none;
                margin: 1px;
                padding: 0;
                overflow: hidden;
                background-color: #616163;
            }
            li {
                float: left;
            }
            li a {
                display: block;
                text-align: center;
                padding: 10px 10px;
                padding-left: 1px;
                text-decoration: none;
                font-weight: bold;
                color: #f9f9f9;
                font-size: 13px;
                margin-top: -8px;
                margin-bottom: -8px;

                //Vertical line
                margin-right: 3px;
                margin-left: 3px;
                border-right: 1px solid #f9f9f9;
                height: 12px;



                &.router-link-exact-active {
                    color: #f9f9f9;
                }
            }

            //Used to not have the margin in left in 8px
            li:first-child a {
                margin-left: 0px;
            }
            //Used to not have the border for the last router
            li:last-child a {
                border-right: none;
            }
            li a:hover {
                text-decoration: underline;
            }

        }
    }



</style>
