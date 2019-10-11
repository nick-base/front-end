<template>
  <div id="app">
    <AppContainer/>
  </div>
</template>

<script>
import AppContainer from '@/components/AppContainer'

export default {
  name: 'app',
  components: {
    AppContainer
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
