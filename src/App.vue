<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-width: 300px;
  color: #2c3e50;
}

html {
    height: 100%;
    margin: 0px;
    padding: 0px;
    position: relative;
}
</style>
