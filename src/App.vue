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
  html, body {
    height: 100%;
  }
  a {
    text-decoration: none;
  }
  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: '-apple-system', 'BlinkMacSystemFont','Hiragino Sans','Hiragino Kaku Gothic ProN',
    "segoe ui",'游ゴシック  Medium','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    #header {
      box-sizing: border-box;
      height: 60px;
      padding: 15px;
      border-bottom: solid 1px #ddd;
      font-size: 22px;

      .container {
        @media screen and (min-width: 1321px) {
          width: 1320px;
        }

        margin: 0 auto;

        .logo {
          font-family: 'Pacifico', cursive;
          letter-spacing: .02em;
          color: #ef5794;
        }
      }
    }

    #main {
      overflow-y: scroll;
      height: 100%;
      width: 100%;
      padding: 20px 0;
    }
  }
</style>
