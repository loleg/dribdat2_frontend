import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

let github_apiURL = 'https://api.github.com'
let path = '/repos/ChallengeHunt/challengehunt'
const Backend_API_URL = 'https://dribdat2.herokuapp.com/api'

export default new Vuex.Store({
    state: {
        github_BaseURL: '',
        github_repoPath: '/repos/ChallengeHunt/challengehunt',
        project: {},
        custom_project: {
            name: "name",
            summary: "summary",
            challenge: {
                name: "challengeName"
            },
            id: 1,
            pitch: "https://example.com"
        },
        contributors: [],
        issues: [],
        projectList: [],
        editMode: false
    },
    mutations: {
        SET_CONTRIBUTORS(state, contributors) {
            state.contributors = contributors
        },
        SET_ISSUES(state, issues) {
            state.issues = issues
        },
        SET_PROJECT(state, project) {
            state.project = project
        },
        SET_CUSTOM_PROJECT(state, custom_project) {
            state.custom_project.id = custom_project.project.id;
            state.custom_project.name = custom_project.project.name;
            state.custom_project.summary = custom_project.project.summary;
            state.custom_project.challenge.name = custom_project.project.category.name;
        },
        SET_PROJECT_LIST(state, projectList) {
            state.projectList = projectList;
        },
        SET_EDITABLE(state, editMode) {
            state.editMode = editMode;
        }
    },
    actions: {
        loadContributors({commit}) {
            axios
                .get(github_apiURL + path + '/stats/contributors')
                .then(r => r.data)
                .then(contributors => {
                    commit('SET_CONTRIBUTORS', contributors)
                })
        },
        loadIssues({commit, state}) {
            axios
                .get(github_apiURL + state.github_repoPath + '/issues')
                .then(r => r.data)
                .then(issues => {
                    commit('SET_ISSUES', issues)
                })
        },
        loadProject({commit}) {
            axios
                .get(`${Backend_API_URL}/project/1/info.json`)
                .then(r => r.data)
                .then(project => {
                    commit('SET_PROJECT', project)
                })
        },
        loadCustomProject({commit}, id) {
            axios
                .get( `${Backend_API_URL}/project/${id}/info.json`, {
                    method: 'GET',
                    mode: 'no-cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    }
                })
                .then(r => r.data)
                .then(custom_project => {
                    commit('SET_CUSTOM_PROJECT', custom_project)
                })
        },
        loadProjectList({commit},event) {
            let eventId = event || 'current'

            var url = `${Backend_API_URL}/event/${eventId}/projects.json`

            if(eventId === 'current'){
                url = `${Backend_API_URL}/event/current/projects.json` ;
            }

            axios
                .get(url, {
                    method: 'GET',
                    mode: 'no-cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    }
                })
                .then(response => {
                    commit('SET_PROJECT_LIST', response.data.projects)
                })
        },
        setModeEdit({commit}){
            commit('SET_EDITABLE', true)
        },

        setModeDisplay({commit}){
            commit('SET_EDITABLE', false)
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
