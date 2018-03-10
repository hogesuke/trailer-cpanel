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
  a {
    text-decoration: none;
  }
  #root {
    font-family: '-apple-system', 'BlinkMacSystemFont','Hiragino Sans','Hiragino Kaku Gothic ProN',
    "segoe ui",'游ゴシック  Medium','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic',sans-serif;
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

    #main {
      margin: 0 auto;

      @media screen and (min-width: 1401px) {
        width: 1400px;
      }

      @media screen and (max-width: 700px) {
        width: 400px;
      }
    }
  }
</style>
