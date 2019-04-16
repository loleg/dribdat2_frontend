import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

//Libray to use the different icon in the web app
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb, faUsers, faFileCode, faLink, faMoneyBillAlt,faDollarSign} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faLightbulb,faUsers,faFileCode,faLink, faMoneyBillAlt,faDollarSign)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false



require('./design/custom.css');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

