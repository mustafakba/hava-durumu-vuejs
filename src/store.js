import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);


const store = new Vuex.Store({
    state:{
        apiKey : '0eb69af3ffadfd2a436f6cfb5bf10e75',
        data :'',
        cityName:'',
        temp :'',
        newTemp : '',
        feels_like :'',
        new_feels_like :'',
        weather :'',
        coord_lon :'',
        coord_lan :''
    },
    getters:{

    },
    mutations:{

    },
    actions:{
        getRequest({state}){
            if(state.cityName == ""){
                state.cityName = "istanbul"
            }
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state.cityName},turkiye&appid=0eb69af3ffadfd2a436f6cfb5bf10e75`)
                .then((response) => {
                state.data = response.data
                state.coord_lon = response.data.coord.lon
                state.coord_lat = response.data.coord.lat
                state.cityName = response.data.name
                state.temp = response.data.main.temp
                state.newTemp = parseInt(state.temp - 270 )
                state.feels_like = response.data.main.feels_like
                state.new_feels_like = parseInt(state.feels_like - 270 )

                if(state.new_feels_like > 15){
                    console.log('hava baya sıcak')
                }
                console.log(state.data.weather[0].description)

            })
        }
    }
});

export default store ;