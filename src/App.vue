<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  #app {

  html {
    font-family: Helvetica;
    color: #222;
  }

  h1 {
    color: steelblue;
    font-size: 24px;
    margin-top: 24px;
  }

  .logLine {
    border-bottom: 1px solid #ccc;
    padding: 4px 2px;
    font-family: courier;
    font-size: 11px;
  }

  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  }
</style>
