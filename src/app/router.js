import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Proyects from './views/Proyects.vue'
import WeatherMeter from './views/WeaterMeter.vue'
Vue.use( Router )

const routes = [
    {path: '/', component: Home,},
    {path: '/about', component: About,},
    {path: '/proyects', component: Proyects ,},
    {path: '/weathermeter', component: WeatherMeter ,}
    
]

export default new Router({
    routes,
})