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
      contributors: [],
      issues: []
  },
  mutations: {
      SET_CONTRIBUTORS (state, contributors) {
          state.contributors = contributors
      },
      SET_ISSUES (state, issues) {
          state.issues = issues
      }
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
      loadIssues ({ commit }) {
          axios
              .get(github_apiURL + path + '/issues')
              .then(r => r.data)
              .then(issues => {
                  commit('SET_ISSUES', issues)
              })
      }
  }
})
