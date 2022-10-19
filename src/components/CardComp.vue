<template>
    <div class="d-flex justify-content-center align-items-center">
        <b-card
            class="bg-light"
            style="max-width: 20rem;"

        >
            <b-card-text>
                <h2>{{this.$store.state.cityName}},  {{this.$store.state.newTemp}}°C</h2>
                <h5>Hava Durumu : {{this.$store.state.data.weather ? this.$store.state.data.weather[0].main : this.$store.state.data.weather}}</h5>
                <div>Hissedilen Sıcaklık : {{this.$store.state.new_feels_like}}°C</div>
                <span>Boylam : {{this.$store.state.coord_lon}} <br></span>
                <span>Enlem : {{this.$store.state.coord_lat}}</span>
                <div>Max Görünürlük : {{this.$store.state.data.visibility}}m /10km</div>

<!--                <h5>Sıcaklık: {{}}</h5>-->
<!--                <h5>Hissedilen Sıcaklık: {{}}</h5>-->
<!--                <h5>Max Sıcaklık: {{}}</h5>-->
<!--                <h5>Min Sıcaklık: {{}}</h5>-->
<!--                <h5>Görünürlük: {{}}</h5>-->
<!--                <h5>Bulut Oranı: {{}}</h5>-->

            </b-card-text>

        </b-card>
    </div>
</template>

<script>
export default {
    name: "CardComp"
}
</script>

<style scoped>

</style>