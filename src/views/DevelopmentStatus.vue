<template>
  <div class="content">
    <div class="developmentStatus">

      <!-- <edit-button :editMode="editMode"></edit-button> -->
      <h1>Development status </h1>

      <project-progress-bar :current-step="project.progress"></project-progress-bar>
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingIssues">

            <a
                    class="card-link"
                    v-on:click="loadIssues()"
                    data-toggle="collapse"
                    data-target="#collapse-issues"
                    aria-expanded="false"
                    aria-controls="collapse-issues"
            >Open Issues</a>

          </div>
          <div
                  id="collapse-issues"
                  v-show="loadIssues"
                  class="collapse"
                  aria-labelledby="headingIssues"
                  data-parent="#accordion"
          >
            <div class="card-body" style="padding: 0">
              <div v-show="showIssueSpinner" class="spinner-border text-muted"></div>
              <issues-badge v-bind:issues="issues"></issues-badge>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingContributors">
            <a
                    class="card-link"
                    v-on:click="loadContributors()"
                    data-toggle="collapse"
                    data-target="#collapse-contributors"
                    aria-expanded="false"
                    aria-controls="collapse-contributors"
            >Contributors</a>
          </div>
          <div
                  id="collapse-contributors"
                  class="collapse"
                  aria-labelledby="headingContributors"
                  data-parent="#accordion"
          >
            <div class="card-body" style="padding: 0">
              <div v-show="showContributorSpinner" class="spinner-border text-muted"></div>
              <contributions-badge v-bind:contributors="contributors"></contributions-badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    import { mapState } from "vuex";
    import ContributionsBadge from "../components/DevelopementStatus/contributionsBadge";
    import IssuesBadge from "../components/DevelopementStatus/issuesBadge";
    import ProjectProgressBar from "../components/DevelopementStatus/projectProgressBar";
    //import EditButton from "../components/EditButton";

    export default {

        head: {
            script: [
                {
                    src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
                }
            ]
        },
        name: "DevelopmentStatus",
        components: {
            ProjectProgressBar,
            IssuesBadge,
            ContributionsBadge,
            //EditButton
        },
        props: ["project"],
        data: () => {
            return {
                showIssueSpinner: true,
                showContributorSpinner: true
            };
        },
        methods: {
            loadIssues() {
                this.$store.dispatch("loadIssues").then(() => {
                    this.showIssueSpinner = false;
                });
            },
            loadContributors() {
                this.$store.dispatch("loadContributors").then(() => {
                    this.showContributorSpinner = false;
                });
            }
        },
        mounted() {},
        computed: mapState(["custom_project", "issues", "contributors","editMode"])
    };
</script>

<style scoped>
  .content{
    /*background-color: #f4fcfc;
    opacity: 0.87;*/
    background-color: rgba(244,252,252,0.87);
    width: 100%;
    margin: 0;
    border: 1px groove #333333;
    border-radius: 10px;
  }

  #headingIssues,
  #headingContributors {
    font-family: Verdana, Geneva, sans-serif;
    color: #ffffff;
    background-color: #6c757d;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
    font-size: 140%;
    padding: 10px;

  }

  @media screen and (min-width: 300px) and (max-width: 767px) {
    #headingIssues {
      font-size: 100%;
    }
  }

  /*  Tablets part  */
  @media screen and (min-width: 767px) and (max-width: 1200px) {
    #headingIssues {
      font-size: 120%;
    }
  }

  @media screen and (min-width: 300px) and (max-width: 767px) {
    #headingContributors {
      font-size: 100%;
    }
  }

  /*  Tablets part  */
  @media screen and (min-width: 767px) and (max-width: 1200px) {
    #headingContributors{
      font-size: 120%;
    }
  }




</style>
