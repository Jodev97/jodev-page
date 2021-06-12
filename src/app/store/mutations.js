import Axios from 'axios'

export const mutations = {
    UPDATE_WEATHERMETER:(state,payload)=>{ 
        console.log(payload.data)       
        var temp = payload.data.main.temp-273.15
        temp = Number(temp.toFixed(2)); 

        state.weathermeter.name=payload.data.name
        state.weathermeter.temperature = temp
        state.weathermeter.coord=payload.data.coord
        state.weathermeter.clouds=payload.data.Clouds
        state.weathermeter.wind_speed=payload.data.wind.speed
        state.weathermeter.wind_direction=payload.data.wind.deg
        state.weathermeter.humidity=payload.data.main.humidity
        state.weathermeter.pressure=payload.data.main.pressure
        
    }
}