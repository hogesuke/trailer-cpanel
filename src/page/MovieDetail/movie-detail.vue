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
    <div class="description" :class="{ dark: isDark }">
      <div class="title">{{item.title}}</div>
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
  $mq-width-threshold: 1040px;

  @mixin mq-width {
    @media screen and (min-width: $mq-width-threshold) {
      width: 1000px;
    }
    @media screen and (max-width: $mq-width-threshold) {
      width: auto;
    }
  }
  @mixin mq-height {
    @media screen and (min-width: $mq-width-threshold) {
      height: 562px;
    }
    @media screen and (max-width: $mq-width-threshold) {
      height: auto;
    }
  }

  .movie {
    height: 100%;

    .trailer {
      display: flex;
      justify-content: center;

      iframe {
        @include mq-width;
        @include mq-height;
        margin: 20px;

        &.hide {
          opacity: 0;
        }
      }
    }

    .description {
      @include mq-width;
      margin: 10px auto;
      transition: color .7s linear;

      &.dark {
        color: #fff;
      }

      .title {
        font-size: 2.2rem;
      }
    }
  }
</style>
