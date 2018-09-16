<template>
  <div
    :class="{ 'is-mobile': isMobile, 'is-landscape': isLandscape }"
    class="trailer">
    <template v-if="!(isMobile && isLandscape)">
      <router-link to="/">
        <exit-button />
      </router-link>
    </template>
    <div
      v-if="item"
      :style="{ 'padding-right': paddingRight + 'px' }"
      :class="{ 'is-mobile': isMobile, 'is-landscape': isLandscape }"
      class="wrapper">
      <iframe
        :src="movieURL"
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
      isLandscape: false, // 横向き
      animation: true,
      paddingRight: 0,
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
      this.setDark(false)
    }, 500))

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
      setTimeout(() => {
        this.paddingRight = this.isMobile && this.isLandscape ? this.$el.clientHeight * 1.77 : 0
      }, 100)
    }
  }
}
</script>

<style scoped lang="scss">
  .trailer {
    box-sizing: border-box;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 45px;
    background: #000;

    &.is-mobile.is-landscape {
      height: 100%;
      padding: 0;
    }

    .wrapper {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      width: 100%;

      &.is-mobile.is-landscape {
        // heightを基準にwidthを調整させる
        height: 100%;
        width: 0;
        margin: 0 auto;
        padding: 0;
      }

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
