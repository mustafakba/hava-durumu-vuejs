<template>
    <div class="d-flex justify-content-center align-items-center">
        <b-card
            class="bg-light"
            style="max-width: 20rem;"

        >
            <b-card-text>
                <h2>{{this.$store.state.cityName}},  {{this.$store.state.newTemp}}°C</h2>
                <h5>Hava Durumu : {{this.$store.state.data.weather}}</h5>
                <span>Boylam : {{this.$store.state.data.coord.lon}} <br></span>
                <span>Enlem : {{this.$store.state.data.coord.lat}}</span>

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