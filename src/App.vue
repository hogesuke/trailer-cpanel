<template>
  <div id="root" :class="{ 'theater-mode': isDark }">
    <header id="header">
      <div class="container">
        <router-link to="/" class="logo">
          TrailerTrailer
        </router-link>
      </div>
    </header>
    <div id="main">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import 'normalize.css'

export default Vue.extend({
  name: 'App',
  computed: {
    ...mapState([
      'isDark'
    ])
  }
})
</script>

<style lang="scss">
  @mixin mq {
    @media screen and (min-width: 1321px) {
      width: 1320px;
    }
  }
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
    background-color: #fff;
    transition: background-color .7s linear;
    font-family: '-apple-system', 'BlinkMacSystemFont','Hiragino Sans','Hiragino Kaku Gothic ProN',
    "segoe ui",'游ゴシック  Medium','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    &.theater-mode {
      background-color: #000;
    }

    #header {
      box-sizing: border-box;
      height: 60px;
      padding: 15px;
      border-bottom: solid 1px #ddd;
      font-size: 22px;

      .container {
        @include mq;
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

      .container {
        @include mq;
        margin: 0 auto;
      }
    }
  }
</style>
