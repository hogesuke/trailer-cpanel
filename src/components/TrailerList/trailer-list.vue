<template>
  <div id="trailer-list-container">
    <trailer-tabs ref="trailerTabs" id="trailer-tabs" :style="trailerTabsStyles" />
    <ul class="trailer-list">
      <li v-for="movie in movies" :key=movie.id>
        <trailer-item :movie=movie></trailer-item>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import TrailerTabs from '@/components/TrailerTabs/trailer-tabs.vue'
import TrailerItem from '@/components/TrailerItem/trailer-item.vue'

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
    // todo わずかな上下のスクロールは無視するようにする
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
  @import '../../assets/scss/global';

  #trailer-list-container {
    position: relative;

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

    .trailer-list {
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
