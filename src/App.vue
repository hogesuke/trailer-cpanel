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
  @import './assets/scss/global';

  // TODO: 要見直し
  @mixin mq-width {
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
  html {
    @include mq(md) {
      font-size: 62.5%;
    }
    @include mq(sm) {
      font-size: 55%;
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
      width: 100%;
      padding: 15px;
      background-image: url(./assets/header-background.jpg);
      background-size: auto 100%;
      font-size: 2.2rem;
      z-index: 1001;

      @include mq(sm) {
        height: map-get($header-heights, sm);
      }
      @include mq(md) {
        height: map-get($header-heights, md);
      }
      @include mq(lg) {
        height: map-get($header-heights, lg);
      }

      &.theater-mode {
        border-bottom: none;
      }

      .container {
        @include mq-width;
        margin: 0 auto;

        .logo {
          font-family: 'Pacifico', cursive;
          letter-spacing: .02em;
          color: #fff;
        }
      }
    }

    #main {
      height: 100%;
      width: 100%;

      @include mq(sm) {
        margin-top: map-get($header-heights, sm);
      }
      @include mq(md) {
        margin-top: map-get($header-heights, md);
      }
      @include mq(lg) {
        margin-top: map-get($header-heights, lg);
      }

      .container {
        @include mq-width;
        height: 100%;
        margin: 0 auto;
      }
    }
  }
</style>
