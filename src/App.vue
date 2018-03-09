<template>
  <div id="root">
    <header id="header">
      <div>moch.love</div>
    </header>
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'normalize.css'

export default Vue.extend({
  name: 'App'
})
</script>

<style lang="scss">
#root {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  #header {
    box-sizing: border-box;
    height: 60px;
    padding: 15px;
    border-bottom: solid 1px #ccc;
    font-size: 22px;
  }
}
</style>
