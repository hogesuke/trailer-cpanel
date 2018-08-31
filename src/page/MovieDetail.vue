<template>
  <div
    :class="{ 'is-mobile': isMobile, 'is-landscape': isLandscape }"
    class="trailer">
    <header
      :class="{ 'is-mobile': isMobile }"
      v-show="!(isMobile && isLandscape)">
      <router-link to="/">
        <exit-button></exit-button>
      </router-link>
    </header>
    <div
      v-if="item"
      class="wrapper">
      <iframe
        :src=movieURL
        :class="{ 'hide': isHide }"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'
import * as types from '../store/mutation-types'
import ExitButton from '../components/ExitButton'

export default {
  props: [],
  components: {
    ExitButton
  },
  data () {
    return {
      item: null,
      isHide: true,
      isLandscape: false, // 横向き
      count: 0
    }
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
      this.count++
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
    },
    trailerStyle () {
      return this.isMobile && this.isLandscape ? { padding: 0 } : { paddingTop: '6.5rem' }
    }
  },
  created () {
    axios.get(`http://localhost:3000/movies/${this.$route.params.id}?_embed=directors&_embed=casts&_embed=trailers&_embed=genres`)
      .then((res) => {
        // TODO: エラーハンドリング
        this.item = res.data
      })
  },
  mounted () {
    this.theaterModeTimeout = window.setTimeout(() => {
      this.setDark(true)

      this.theaterModeTimeout = window.setTimeout(() => {
        this.isHide = false
      }, 500)
    }, 800)

    this.addOrientationChangeEventListener()
    this.handleOrientationChange()
  },
  beforeDestroy () {
    clearTimeout(this.theaterModeTimeout)
    window.onorientationchange = null
    window.onresize = null
    this.setDark(false)
  }
}
</script>

<style scoped lang="scss">
  .trailer {
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 6.5rem;

    &.is-mobile.is-landscape {
      padding: 0;
    }

    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 1.5rem;
    }

    .wrapper {
      // 参考: https://design.webclips.jp/youtube-movie-size/
      // todo iPhoneXで横にした際に動画が入りきっていない
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      width: 100%;
      overflow: hidden;

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
