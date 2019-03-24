import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

let github_apiURL = 'https://api.github.com'
let path = '/repos/ChallengeHunt/challengehunt'

export default new Vuex.Store({
  state: {
      github_BaseURL: '',
      github_repoPath: '/repos/ChallengeHunt/challengehunt',
      project: {},
      contributors: [],
      issues: []
  },
  mutations: {
      SET_CONTRIBUTORS (state, contributors) {
          state.contributors = contributors
      },
      SET_ISSUES (state, issues) {
          state.issues = issues
      },
      SET_PROJECT (state, project) {
          state.project = project
      },
  },
  actions: {
      loadContributors ({ commit }) {
          axios
              .get(github_apiURL + path + '/stats/contributors')
              .then(r => r.data)
              .then(contributors => {
                  commit('SET_CONTRIBUTORS', contributors)
              })
      },
      loadIssues ({ commit, state }) {
          axios
              .get(github_apiURL + state.github_repoPath + '/issues')
              .then(r => r.data)
              .then(issues => {
                  commit('SET_ISSUES', issues)
              })
      },
      loadProject ({ commit }) {
          axios
              .get('http://127.0.0.1:5000/api/project/' + '1' + '/info.json')
              .then(r => r.data)
              .then(project => {
                  commit('SET_PROJECT', project)
              })
      }
  },
    getters: {
        projectSourceUrl: state => {
            return state.project.project.source_url
        },
        projectSourceAPI_Path: state => {
            return state.project.project.source_url.replace('https://github.com', '')
        },
    }
})
