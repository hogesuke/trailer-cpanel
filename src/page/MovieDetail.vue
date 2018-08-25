<template>
  <div class="trailer">
    <header>
      <router-link to="/" class="logo">
        <div class="img">
          EXIT
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
      }, 500)
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
    padding: 4rem 4rem 0;

    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 1rem 4rem 0;

      .logo {
        position: relative;
        font-size: 1.6rem;
        letter-spacing: .02em;
        color: #444;

        .img {
          $image-size: 3rem;
          position: relative;
          height: $image-size;
          width: 4rem;
          padding: 0 0.5rem 0 ($image-size + 0.5rem);
          background: rgba(255, 255, 255, 0.9) url('../assets/back-man.svg') 0 /#{$image-size} no-repeat;
          text-align: center;
          line-height: $image-size;
          font-weight: bold;
          color: #269463;
          animation: lighting 0.8s ease 1.5s 1 normal both;

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: radial-gradient(ellipse farthest-corner, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.3));
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
      // todo 参考: https://design.webclips.jp/youtube-movie-size/
      // todo header分幅を狭めるようにする
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
