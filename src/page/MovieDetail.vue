<template>
  <div
    :class="{ 'is-mobile': isMobile, 'is-landscape': isLandscape }"
    class="trailer">
    <header
      v-show="!(isMobile && isLandscape)"
      :class="{ 'is-mobile': isMobile }">
      <router-link to="/">
        <exit-button/>
      </router-link>
    </header>
    <div
      v-if="item"
      :class="{ 'is-mobile': isMobile, 'is-landscape': isLandscape }"
      class="wrapper">
      <iframe
        :src="movieURL"
        :class="{ 'hide': isHide }"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'
import * as types from '../store/mutation-types'
import ExitButton from '../components/ExitButton'

export default {
  components: {
    ExitButton
  },
  data () {
    return {
      item: null,
      isHide: true,
      isLandscape: false, // 横向き
      animation: true,
      timeout: []
    }
  },
  computed: {
    ...mapState([
      'isDark'
    ]),
    movieURL () {
      return this.item ? `https://www.youtube.com/embed/${this.item.trailers[0].videoId}?enablejsapi=1&autoplay=1` : ''
    },
    isMobile () {
      const ua = navigator.userAgent.toLowerCase()
      return ['iphone', 'ipad', 'android'].some(a => ua.indexOf(a) > -1)
    }
  },
  created () {
    axios.get(`http://localhost:7777/movies/${this.$route.params.id}?_embed=directors&_embed=casts&_embed=trailers&_embed=genres`)
      .then((res) => {
        // TODO: エラーハンドリング
        this.item = res.data
      })
  },
  mounted () {
    this.timeout.push(window.setTimeout(() => {
      this.setDark(true)
      this.timeout.push(window.setTimeout(() => { this.isHide = false }, 500))
    }, 800))

    this.addOrientationChangeEventListener()
    this.handleOrientationChange()
  },
  beforeDestroy () {
    this.timeout.forEach(a => clearTimeout(a))

    window.onorientationchange = null
    window.onresize = null
    this.setDark(false)
  },
  methods: {
    ...mapMutations({
      setDark: types.SET_DARK
    }),
    addOrientationChangeEventListener () {
      // iOS
      if (typeof window.onorientationchange === 'object') {
        window.onorientationchange = this.handleOrientationChange
        return
      }
      // Android, PC
      if (typeof window.onresize === 'object') {
        window.onresize = this.handleOrientationChange
      }
    },
    handleOrientationChange () {
      const direction = Math.abs(window.orientation)
      this.isLandscape = direction === 90
    }
  }
}
</script>

<style scoped lang="scss">
  .trailer {
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 65px;

    &.is-mobile.is-landscape {
      min-height: 100vh;
      padding: 0;
    }

    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 15px;
    }

    .wrapper {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      width: 100%;

      &.is-mobile.is-landscape {
        // heightを基準にwidthを調整させる
        height: 100vh;
        width: 0;
        margin: 0 auto;
        padding-left: 100vh * 1.77;
        padding-bottom: 0;
      }

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        &.hide {
          opacity: 0;
        }
      }
    }
  }
</style>
