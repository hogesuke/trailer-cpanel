<template>
  <div id="trailer-list-container">
    <trailer-tabs
      id="trailer-tabs"
      :style="{ top: trailerTabsTopPx + 'px' }">
    </trailer-tabs>
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
      trailerTabsTopPx: 0
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
    // todo headerのheightを取得して設定する
    this.trailerTabsTopPx = 60
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/scss/global';

  #trailer-list-container {
    position: relative;

    #trailer-tabs {
      position: fixed;
      top: 60px;
      width: 100%;
      background-color: #fff;
      z-index: 1000;
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
