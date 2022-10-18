<template>
  <div id="app">
      <HeaderComp/>
      <CardComp></CardComp>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp'
import CardComp from "@/components/CardComp";
export default {

  name: 'App',
  components: {
      CardComp,
      HeaderComp,
  },
    methods:{

    },
    mounted() {
      this.$store.dispatch("getRequest")
    }

}
</script>


<style>
#app {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    background: url("images/cloud-wp.jpg");
    background-size: cover;
    background-position: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

}
</style>
