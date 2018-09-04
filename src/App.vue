<template>
  <div id="root" :class="{ 'theater-mode': isDark }">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import 'normalize.css'

export default Vue.extend({
  name: 'App',
  computed: {
    ...mapState([
      'isDark'
    ])
  },
  async created () {
    await this.fetchTrailers()
  },
  methods: {
    ...mapActions([
      'fetchTrailers'
    ])
  }
})
</script>

<style lang="scss">
  @import './assets/scss/global';

  html {
    @include mq(xs) {
      font-size: 55%;
    }
    @include mq(sm) {
      font-size: 62.5%;
    }
    @include mq(md) {
      font-size: 62.5%;
    }
    @include mq(lg) {
      font-size: 70%;
    }
  }

  html, body {
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }

  #root {
    @include theater-mode;
    min-height: 100vh;
    background-color: #fff;
    font-family: '-apple-system', 'BlinkMacSystemFont','Hiragino Sans','Hiragino Kaku Gothic ProN',
    "segoe ui",'游ゴシック  Medium','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
