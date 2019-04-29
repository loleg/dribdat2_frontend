import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

let github_apiURL = 'https://api.github.com/repos'
//let path = '/repos/ChallengeHunt/challengehunt'
const Backend_API_URL = 'https://dribdat2.herokuapp.com/api'

export default new Vuex.Store({
    state: {
        github_BaseURL: '',
        github_repoPath: '/repos/ChallengeHunt/challengehunt',
        project: {
            id: null,
            name: "",
            summary: "",
            pitch: "",
            is_webembed: false,
            phase: null,
            status: "",
            repository : "",
            event: {
                id: null,
                name: "",
                community: ""
            },
            challenge: {
                id: null,
                name: ""
            },
            team: [

            ]
        },
        custom_project: {
            name: "getaround.io",
            summary: "We want to get people to be more concerned about their health. The average person does not exercise enough. With this project we hope to motivate people to be more active.",
            challenge: {
                //name: "Help people be more active"
                name: "Help people be more active"
            },
            id: 1,
            pitch: "'https://www.youtube.com/embed/0lwOmIHcSno'",
            phase: 4,
            status: "Looking for designers",
            event: {

            }


        },
        contributors: [],
        issues: [],
        projectList: [],
        editMode: false
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
        SET_CUSTOM_PROJECT (state, custom_project) {
            state.custom_project = custom_project.project
            state.custom_project.challenge = {name: ''}
            state.custom_project.event = custom_project.event
            state.custom_project.pitch = custom_project.pitch
            state.custom_project.is_webembed = custom_project.is_webembed
            state.custom_project.team = custom_project.team
            state.custom_project.phase = custom_project.phase
        },
        SET_PROJECT_LIST (state, projectList) {
            state.projectList = projectList;
        },
        SET_EDITABLE (state, editMode) {
            state.editMode = editMode;
        },
        SET_PROJECT_PROGRESS (state, progress) {
            state.custom_project.progress = progress
        }
    },
    actions: {
        loadContributors ({ commit, state }) {
            axios
                .get(github_apiURL
                    + state.custom_project.source_url.replace('https://github.com', '')
                    + '/stats/contributors')
                .then(r => r.data)
                .then(contributors => {
                    commit('SET_CONTRIBUTORS', contributors)
                })
        },
        loadIssues ({ commit, state }) {
            axios
                .get(github_apiURL
                    + state.custom_project.source_url.replace('https://github.com', '')
                    + '/issues')
                .then(r => r.data)
                .then(issues => {
                    commit('SET_ISSUES', issues)
                })
        },
        loadProject ({ commit }) {
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
        },
        setProjectProgress ({ commit }, progress) {
            if (progress < -1 || progress > 7) return

            const url = `${Backend_API_URL}/project/push.json`;

            commit('SET_PROJECT_PROGRESS', progress)

            axios
                .put(url, {
                    method: 'PUT',
                    mode: 'no-cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                    data: {
                        project: this.state.custom_project
                    }
                })
                .then(response => {
                    if (response.status === 200) {
                        commit('SET_PROJECT_PROGRESS', progress)
                    }
                })
        }
    },
    getters: {
        projectSourceAPI_Path: state => {
            return state.custom_project.source_url.replace('https://github.com', '')
        },
    }
})
