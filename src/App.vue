<template>
  <div id="app">
    <router-view/>
    <img class="logo" src="../static/imgs/logo.png" alt="">
    <!-- <draw-footer></draw-footer> -->
  </div>
</template>

<script>
import drawFooter from './components/footer'
export default {
  name: 'app',
  components: {
    drawFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: .46rem;
  height: .5rem;
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
