import Vue from 'vue'
import Vuex from 'vuex'

import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

Vue.use( Vuex )

export default new Vuex.Store({
    state: {
        weathermeter:{
            name:'',
            temperature:0,
            coord:'',
            clouds:'',
            humidity:'',
            pressure:'',
            wind_direction:'',
            wind_speed:'',
            contry:''
        }
    },
    actions,
    getters,
    mutations
})