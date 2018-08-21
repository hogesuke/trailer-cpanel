<template>
  <div v-if="item" class="movie">
    <div class="trailer">
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
import * as types from '../../store/mutation-types'

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
  // $mq-width-threshold: 1040px;
  //
  // @mixin mq-width {
  //   @media screen and (min-width: $mq-width-threshold) {
  //     width: 1000px;
  //   }
  //   @media screen and (max-width: $mq-width-threshold) {
  //     width: auto;
  //   }
  // }
  // @mixin mq-height {
  //   @media screen and (min-width: $mq-width-threshold) {
  //     height: 562px;
  //   }
  //   @media screen and (max-width: $mq-width-threshold) {
  //     height: auto;
  //   }
  // }

  .movie {
    height: 100%;

    .trailer {
      // todo 参考: https://design.webclips.jp/youtube-movie-size/
      // todo header分幅を狭めるようにする
      position: relative;
      max-width: calc(100% - 10rem);
      height: 0;
      margin-top: 1rem;
      padding-top: 56.25%;
      overflow: hidden;

      iframe {
        //@include mq-width;
        //@include mq-height;
        /*margin: 20px;*/
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 1rem);

        &.hide {
          opacity: 0;
        }
      }
    }
  }
</style>
