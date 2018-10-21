<template>
  <div
    id="root"
    :class="{ 'theater-mode': isDark }">
    <transition name="fade">
      <app-loading v-if="isLoading" />
    </transition>
    <router-view/>
    <app-lighting />
  </div>
</template>

<script>
import Vue from 'vue'
import AppLoading from './components/AppLoading'
import AppLighting from './components/AppLighting'
import { mapState, mapActions } from 'vuex'
import '@fortawesome/fontawesome-free'
import 'normalize.css'

export default Vue.extend({
  name: 'App',
  components: {
    AppLoading,
    AppLighting
  },
  computed: {
    ...mapState([
      'isDark',
      'isLoading'
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

    @include mq((lg, xl)) {
      font-size: 70%;
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

    height: 100%;
    background-color: #000;
    font-family:
      '-apple-system', 'BlinkMacSystemFont','Hiragino Sans','Hiragino Kaku Gothic ProN',
      "segoe ui",'游ゴシック  Medium','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-leave-to {
    opacity: 0;
  }
</style>
