<template>
  <div class="trailer" :style="trailerStyle">
    <header :style="headerStyle">
      <router-link to="/" class="back-link">
        <div class="exit-button">
          <span>EXIT</span>
          <div class="overlay"></div>
        </div>
        <div class="exit-button reflection">
          <span>EXIT</span>
          <div class="overlay"></div>
        </div>
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

export default {
  props: [],
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

      .back-link {
        position: relative;

        .exit-button {
          $image-size: 3rem;

          position: relative;
          height: $image-size;
          width: 4rem;
          margin-bottom: 2px;
          padding: 0 0.5rem 0 ($image-size + 0.5rem);
          background: rgba(255, 255, 255, 0.9) url('../assets/back-man.svg') 0 /#{$image-size} no-repeat;
          border-radius: 3px;
          text-align: center;
          line-height: $image-size;
          letter-spacing: 0.05em;
          font-size: 1.6rem;
          font-weight: bold;
          color: #000;
          animation: lighting 0.8s ease 1.5s 1 normal both;

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: radial-gradient(ellipse farthest-corner, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.3));
          }

          &.reflection {
            margin-bottom: 10px;
            transform: rotate3d(1, 0, 0, 180deg);
            box-shadow: none;

            .overlay {
              background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 55%, rgba(0, 0, 0, 0.6));
            }
          }
        }
      }

      @keyframes lighting {
        0% {
          opacity: 0;
        }
        20%, 40%, 60%, 80% {
          opacity: 0.15;
        }
        5%, 30%, 50% {
          opacity: 0.6;
        }
        80% {
          opacity: 0;
        }
        100% {
          opacity: 0.9;
        }
      }
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
