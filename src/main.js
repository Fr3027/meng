import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import './plugins/vuetify.js'
import Vuetify from 'vuetify' // Import Vuetify to your project
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify) // Add Vuetify as a plugin
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
