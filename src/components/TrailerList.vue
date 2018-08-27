<template>
  <div class="trailer-list">
    <trailer-item v-for="movie in movies" :key=movie.id :movie=movie class="trailer-item" />
  </div>
</template>

<script>
import axios from 'axios'
import TrailerItem from '@/components/TrailerItem.vue'

export default {
  components: {
    TrailerItem
  },
  data () {
    return {
      movies: []
    }
  },
  created () {
    axios.get('http://localhost:3000/movies/?_embed=directors&_embed=casts&_embed=trailers&_embed=genres')
      .then((res) => {
        // TODO: エラーハンドリング
        this.movies = res.data
      })
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/global';

  .trailer-list {
    position: relative;
    box-sizing: border-box;
    min-height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0.3rem;
    background: #efefef;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;

    @each $bp in (xs, sm, md, lg) {
      @include mq($bp) {
        padding-top: calc(5.3rem + #{map-get($header-heights, $bp)});
      }
    }

    .trailer-item {
      @include mq(xs) {
        margin: 0.3rem;
      }
      @include mq((sm, md, lg)) {
        margin: 0.5rem;
      }

      @include mq((xs, sm)) {
        width: 100%;
      }
      @include mq((md, lg)) {
        width: calc(50% - 0.5rem * 2);
      }
    }
  }
</style>
