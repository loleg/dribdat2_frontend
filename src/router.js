import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/event', component: () => import('./views/ProjectList'), alias: '/'
        },

        { path: '/project/:id', component: () => import('./components/Project'),
            props: true,
            children: [
                {
                    // UserProfile will be rendered inside User's <router-view>
                    // when /user/:id/profile is matched
                    path: 'presentation',
                    alias: '/',
                    name: 'presentation',
                    component: () => import(/* webpackChunkName: "about" */ './views/ProjectPresentation.vue')
                },
                {
                    // UserPosts will be rendered inside User's <router-view>
                    // when /user/:id/posts is matched
                    path: 'team',
                    name: 'team',
                    component: () => import(/* webpackChunkName: "about" */ './views/InfoTeam')
                },
                {
                    path: 'development',
                    name: 'development',
                    component: () => import(/* webpackChunkName: "about" */ './views/DevelopmentStatus.vue')
                },
                {
                    path: 'ressources',
                    name: 'ressources',
                    component: () => import(/* webpackChunkName: "about" */ './views/Ressources.vue')
                }
            ]
        }
    ]
})
