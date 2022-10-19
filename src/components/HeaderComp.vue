<template>
<div class="py-5 d-flex flex-column justify-content-center align-items-center text-white">
    <h3>Hava Durumu</h3>
    <b-form-input class=" w-25" @keyup.enter="searchWeather" placeholder="Enter city name"></b-form-input>
</div>
</template>

<script>
export default {
    name: "HeaderComp",
    methods:{
        searchWeather(e){
            this.$store.state.cityName = e.target.value
            e.target.value = ''
            this.$store.dispatch("getRequest")
        }
    }
}

</script>

<style scoped>
.background{
}
</style>