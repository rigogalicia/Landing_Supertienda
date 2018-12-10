import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import { Scrollspy } from 'bootstrap-vue/es/directives'
import { Modal } from 'bootstrap-vue/es/components'
import { Card } from 'bootstrap-vue/es/components'

Vue.use(BootstrapVue)
Vue.use(Modal);
Vue.use(Card)
Vue.use(Scrollspy)

new Vue({
  el: '#app',
  render: h => h(App)
})
