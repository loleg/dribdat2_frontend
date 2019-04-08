import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



library.add(faLightbulb,faUsers,faFileCode,faLink)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false



require('./design/custom.css');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

