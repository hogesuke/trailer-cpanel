<template>
  <div id="root" :class="{ 'theater-mode': isDark }">
    <header id="header" :class="{ 'theater-mode': isDark }">
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
  @mixin theater-mode {
    transition: background-color .7s linear;

    &.theater-mode {
      background-color: #000;
    }
  }
  html, body {
    height: 100%;
  }
  a {
    text-decoration: none;
  }
  #root {
    @include theater-mode;
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

    #header {
      @include theater-mode;
      position: fixed;
      top: 0;
      overflow: hidden;
      box-sizing: border-box;
      height: 60px;
      width: 100%;
      padding: 15px;
      background-color: #fff;
      font-size: 22px;
      z-index: 1000;

      .container {
        @include mq;
        margin: 0 auto;

        .logo {
          font-family: 'Pacifico', cursive;
          letter-spacing: .02em;
          color: #ef5794;
          background: -webkit-linear-gradient(-45deg, rgb(241, 43, 229) 0%, rgb(239, 120, 27) 100%);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
      }
    }

    #main {
      height: 100%;
      width: 100%;
      margin-top: 50px;

      .container {
        @include mq;
        margin: 0 auto;
      }
    }
  }
</style>
