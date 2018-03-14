<template>
  <div id="root">
    <header id="header">
      <div class="container">
        <router-link to="/" class="logo">
          TrailerTrailer
        </router-link>
      </div>
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
      margin-bottom: 20px;
      padding: 15px;
      border-bottom: solid 1px #ddd;
      font-size: 22px;

      .container {
        width: 1320px;
        margin: 0 auto;

        .logo {
          font-family: 'Raleway', sans-serif;
          font-weight: 600;
          letter-spacing: .05em;
          color: #ef5757;
        }
      }
    }

    #main {
      margin: 0 auto;

      @media screen and (min-width: 1321px) {
        width: 1320px;
      }

      @media screen and (max-width: 700px) {
        width: 400px;
      }
    }
  }
</style>
