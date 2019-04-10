import axios from 'axios';
const API_URL = 'http://127.0.0.1:5000/api';
export class APIService {

    constructor() {
    }

    /*********************
     * GET
     *********************/
    static getActivityList (idProject) {

        var url = `${API_URL}/project/${idProject}/activity.json`

        return axios.get(url, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }).then(response => response.data.activities);
    }

    static getProject (id) {
        const url = `${API_URL}/project/${id}/info.json`;
        return axios.get(url, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }).then(response => response.data);
    }

    static getLinkCommunity  (idEvent)
    {
        let eventId
        if(idEvent == null)
        {
            eventId = 'current'
        }
        else {
            eventId = idEvent
        }

        const url = `${API_URL}/event/${eventId}/projects.json`;
        return axios.get(url, {

            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }).then(response => response.data.event.community_url);
    }
    static getProjectList (event) {
        let eventId = event || 'current'

        var url = `${API_URL}/event/${eventId}/challenges.json`
        if (eventId === 'current') {
            url = `${API_URL}/event/current/challenges.json`;
        }

        return axios.get(url, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }).then(response => response.data);
    }

    /*********************
     * POST
     *********************/
    static postProject (project) {
        return axios({
            method: 'post',
            url: `${API_URL}/project/push.json`,
            data: { project }
        });
    }
}
