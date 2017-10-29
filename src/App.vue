<template>
  <div id="app">
    <router-view/>
    <draw-footer></draw-footer>
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
</style>
