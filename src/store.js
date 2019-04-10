import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

let github_apiURL = 'https://api.github.com/repos'
//let path = '/repos/ChallengeHunt/challengehunt'
const Backend_API_URL = 'http://127.0.0.1:5000/api'

export default new Vuex.Store({
    state: {
        github_BaseURL: '',
        github_repoPath: '/repos/ChallengeHunt/challengehunt',
        project: {},
        custom_project: {
            name: "getaround.io",
            summary: "We want to get people to be more concerned about their health. The average person does not exercise enough. With this project we hope to motivate people to be more active.",
            challenge: {
                name: "Help people be more active"
            },
            id: 1,
            pitch: "'https://www.youtube.com/watch?v=Vh5FW5hSZyI'",
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
        SET_CONTRIBUTORS(state, contributors) {
            state.contributors = contributors
        },
        SET_ISSUES(state, issues) {
            state.issues = issues
        },
        SET_PROJECT(state, project) {
            state.project = project
        },
        SET_COMMUNITY(state, urlCommunity)
        {
            state.urlCommunity = urlCommunity
        },
        SET_CUSTOM_PROJECT(state, custom_project) {

            state.custom_project = custom_project.project
            state.custom_project.challenge = {name: 'Help people create awesome hackathons'} //TODO challenge has to be provided by the API
            state.custom_project.progress = 3
            state.custom_project.event = custom_project.event
            //state.custom_project.pitch = 'http://example.com' //TODO pitch has to be provided by the API
        },
        SET_PROJECT_LIST(state, projectList) {
            state.projectList = projectList;
        },
        SET_EDITABLE(state, editMode) {
            state.editMode = editMode;
        }
    },
    actions: {
        loadContributors({commit, state}) {
            axios
                .get(github_apiURL
                    + state.custom_project.source_url.replace('https://github.com', '')
                    + '/stats/contributors')
                .then(r => r.data)
                .then(contributors => {
                    commit('SET_CONTRIBUTORS', contributors)
                })
        },
        loadIssues({commit, state}) {
            axios
                .get(github_apiURL
                    + state.custom_project.source_url.replace('https://github.com', '')
                    + '/issues')
                .then(r => r.data)
                .then(issues => {
                    commit('SET_ISSUES', issues)
                })
        },
        loadProject({commit}) {
            axios
                .get('http://127.0.0.1:5000/api/project/' + '1' + '/info.json')
                .then(r => r.data)
                .then(project => {
                    commit('SET_PROJECT', project)
                })
        },
        loadCustomProject({commit}, id) {
            axios
                .get('http://127.0.0.1:5000/api/project/' + id + '/info.json')
                .then(r => r.data)
                .then(custom_project => {
                    commit('SET_CUSTOM_PROJECT', custom_project)
                })
        },
        loadProjectList({commit}, event) {
            let eventId = event || 'current'

            var url = `${Backend_API_URL}/event/${eventId}/challenges.json`

            if (eventId === 'current') {
                url = `${Backend_API_URL}/event/current/challenges.json`;
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
                    commit('SET_PROJECT_LIST', response.data.challenges)
                })
        },

        setModeEdit({commit}) {
            commit('SET_EDITABLE', true)
        },

        setModeDisplay({commit}) {
            commit('SET_EDITABLE', false)
        }
    },
    getters: {
        projectSourceAPI_Path: state => {
            return state.custom_project.source_url.replace('https://github.com', '')
        },
    }
})
