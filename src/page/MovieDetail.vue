<template>
  <div class="trailer" v-if="item">
    <iframe
      :src=movieURL
      :class="{ 'hide': isHide }"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen>
    </iframe>
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
      isHide: true
    }
  },
  methods: {
    ...mapMutations({
      setDark: types.SET_DARK
    })
  },
  computed: {
    ...mapState([
      'isDark'
    ]),
    movieURL () {
      return this.item ? `https://www.youtube.com/embed/${this.item.trailers[0].videoId}?enablejsapi=1&autoplay=1` : ''
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
      }, 800)
    }, 800)
  },
  beforeDestroy () {
    clearTimeout(this.theaterModeTimeout)
    this.setDark(false)
  }
}
</script>

<style scoped lang="scss">
  .trailer {
    // todo 参考: https://design.webclips.jp/youtube-movie-size/
    // todo header分幅を狭めるようにする
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
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
</style>
