import Axios from 'axios'
const {WEATHER_URI,WEATHER_KEY} = require('../../config/keys')
export const actions = {
    WEATHERMETER_READ:({commit},payload)=>{
        let url =WEATHER_URI +'q='+payload+'&appid='+WEATHER_KEY
        Axios.get(url)
        .then((res)=>{
            commit('UPDATE_WEATHERMETER',res)
        })
        .catch(err=>{console.log(err)})
    }
}