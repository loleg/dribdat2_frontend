<template>
  <div class="content">
  <div class="developmentStatus">

      <edit-button :editMode="editMode"></edit-button>

    <project-progress-bar :current-step="project.progress"></project-progress-bar>
    <div id="accordion">
      <div class="card">
        <div class="card-header" id="headingIssues">
          <h5>
            <a
              class="card-link"
              v-on:click="loadIssues()"
              data-toggle="collapse"
              data-target="#collapse-issues"
              aria-expanded="false"
              aria-controls="collapse-issues"
            >Open Issues</a>
          </h5>
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
          <h5>
            <a
              class="card-link"
              v-on:click="loadContributors()"
              data-toggle="collapse"
              data-target="#collapse-contributors"
              aria-expanded="false"
              aria-controls="collapse-contributors"
            >Contributors</a>
          </h5>
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
import EditButton from "../components/EditButton";

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
    EditButton
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
    background-color: #f4fcfc;
    opacity: 0.87;
    width: 100%;
    margin: 0;
    -webkit-box-shadow: 0px 13px 168px -30px rgba(0,0,0,1);
    -moz-box-shadow: 0px 13px 168px -30px rgba(0,0,0,1);
    box-shadow: 0px 13px 168px -30px rgba(0,0,0,1);
    border: 1px groove #333333;
    border-radius: 10px;
  }

  #headingIssues,
#headingContributors {
  font-family: Verdana, Geneva, sans-serif;
  background-color: #333333;

  color: #f9f9f9;
}


</style>
