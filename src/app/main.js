import Vue from 'vue';
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'
import store from './store/index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import VueMdb from "vue-mdbootstrap"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import './assets/styles.css'

//Vue.use(VueMdb);
Vue.use( Vuex )
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    store,
    router,
    render:h=>h(App)
}).$mount('#app')