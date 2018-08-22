<template>
  <div>
    <header>
      <div class="container">
        <router-link to="/" class="logo">
          TrailerTrailer
        </router-link>
      </div>
    </header>
    <trailer-tabs ref="trailerTabs" id="trailer-tabs" :style="trailerTabsStyles" />
    <div id="trailer-list">
      <ul class="item-list">
        <li v-for="movie in movies" :key=movie.id>
          <trailer-item :movie=movie></trailer-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import TrailerTabs from '@/components/TrailerTabs.vue'
import TrailerItem from '@/components/TrailerItem.vue'

export default {
  components: {
    TrailerItem,
    TrailerTabs
  },
  data () {
    return {
      movies: [],
      startPosition: 0,
      trailerTabsTop: 0
    }
  },
  created () {
    axios.get('http://localhost:3000/movies/?_embed=directors&_embed=casts&_embed=trailers&_embed=genres')
      .then((res) => {
        // TODO: エラーハンドリング
        this.movies = res.data
      })
  },
  mounted () {
    // todo throttlingする
    // todo 勢いよく上にスクロールした場合に背景色の白が見えてしまう
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    trailerTabsStyles () {
      return this.trailerTabsTop ? { top: this.trailerTabsTop + 'px' } : {}
    }
  },
  methods: {
    onScroll () {
      const currentPosition = window.pageYOffset

      // わずかなスクロールには反応させないようにする
      if (Math.abs(currentPosition - this.startPosition) <= 15) {
        return
      }

      if (currentPosition > this.startPosition) {
        if (currentPosition >= 100) {
          this.trailerTabsTop = this.$refs.trailerTabs.$el.clientHeight * -1
        }
      } else {
        this.trailerTabsTop = 0
      }

      this.startPosition = currentPosition
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/global';

  header {
    @include theater-mode;
    position: fixed;
    top: 0;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    padding: 15px;
    background-image: url(../assets/header-background.jpg);
    background-size: auto 100%;
    font-size: 2.2rem;
    z-index: 1001;

    @include mq(sm) {
      height: map-get($header-heights, sm);
    }
    @include mq(md) {
      height: map-get($header-heights, md);
    }
    @include mq(lg) {
      height: map-get($header-heights, lg);
    }

    &.theater-mode {
      border-bottom: none;
    }

    .container {
      .logo {
        font-family: 'Pacifico', cursive;
        letter-spacing: .02em;
        color: #fff;
      }
    }
  }

  #trailer-tabs {
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 1000;
    transition: top 0.3s ease-in-out;

    @include mq(sm) {
      top: map-get($header-heights, sm);
    }
    @include mq(md) {
      top: map-get($header-heights, md);
    }
    @include mq(lg) {
      top: map-get($header-heights, lg);
    }
  }

  #trailer-list {
    position: relative;
    height: 100%;
    width: 100%;

    @include mq(sm) {
      margin-top: map-get($header-heights, sm);
    }
    @include mq(md) {
      margin-top: map-get($header-heights, md);
    }
    @include mq(lg) {
      margin-top: map-get($header-heights, lg);
    }

    .item-list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 50px 0 0 0;
      padding: 10px;
      background: #efefef;

      li {
        list-style: none;

        &:not(:last-child) {
          margin-bottom: 10px;
        }

        @include mq((sm, md)) {
          width: 100%;
        }
      }
    }
  }
</style>
