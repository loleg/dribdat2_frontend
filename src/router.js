import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'projectPresentation',
            component: () => import(/* webpackChunkName: "about" */ './views/ProjectPresentation.vue')
        },
        {
            path: '/infoTeam',
            name: 'infoTeam',
            component: () => import(/* webpackChunkName: "about" */ './views/InfoTeam.vue')
        },
    ]
})
