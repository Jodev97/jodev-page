import Axios from 'axios'

export const mutations = {
    UPDATE_WEATHERMETER:(state,payload)=>{ 
        console.log(payload.data.main)       
        var temp = payload.data.main.temp-273.15
        temp = Number(temp.toFixed(2)); 
        state.weathermeter.temperature = temp
    }
}