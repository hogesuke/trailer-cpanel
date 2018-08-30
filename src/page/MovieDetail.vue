<template>
  <div class="trailer" :style="trailerStyle">
    <header :style="headerStyle">
      <router-link to="/">
        <exit-button></exit-button>
      </router-link>
    </header>
    <div class="wrapper" v-if="item">
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
      isVertical: true,
      count: 0
    }
  },
  methods: {
    ...mapMutations({
      setDark: types.SET_DARK
    }),
    addOrientationChangeEventListener () {
      const ua = navigator.userAgent.toLowerCase()
      const isiPhone = (ua.indexOf('iphone') > -1) // iPhone
      const isiPad = (ua.indexOf('ipad') > -1) // iPad
      const isAndroid = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1) // Android
      const isAndroidTablet = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') === -1) // Android Tablet

      // iOS
      if (isiPhone || isiPad) {
        window.onorientationchange = this.handleOrientationChange
      }
      // Android
      if (isAndroid || isAndroidTablet) {
        window.onresize = this.handleOrientationChange
      }
    },
    handleOrientationChange () {
      // todo PCではwindow.orientationを使わない判定方法とするように修正する
      const direction = Math.abs(window.orientation)
      this.isVertical = direction !== 90
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
    trailerStyle () {
      return this.isVertical ? { paddingTop: '6.5rem' } : { padding: '5rem 5rem 0' }
    },
    headerStyle () {
      return this.isVertical ? { paddingLeft: '1.5rem' } : { paddingLeft: '5rem' }
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
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 1.5rem 0;
    }

    .wrapper {
      // 参考: https://design.webclips.jp/youtube-movie-size/
      // todo iPhoneXで横にした際に動画が入りきっていない
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      width: 100%;
      margin: 0 auto;
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
