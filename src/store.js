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
        newTemp : ''
    },
    getters:{

    },
    mutations:{

    },
    actions:{
        getRequest({state}){

            axios.get("https://api.openweathermap.org/data/2.5/weather?q=istanbul,turkiye&appid=0eb69af3ffadfd2a436f6cfb5bf10e75").then((response) => {
                state.data = response.data
                // console.log(state.data)
                state.cityName = response.data.name
                console.log(response.data.main.temp)
                state.temp = response.data.main.temp
                state.newTemp = parseInt(state.temp- 270 )
                console.log(state.newTemp)
            })
        }
    }
});

export default store ;