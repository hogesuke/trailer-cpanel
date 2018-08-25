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
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 5.1rem 0.3rem 0.3rem;
    background: #efefef;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .trailer-item {
      $side-margin: 0.5rem;

      margin: $side-margin;

      @include mq((xs, sm)) {
        width: 100%;
      }
      @include mq((md, lg)) {
        width: calc(50% - #{$side-margin} * 2);
      }
    }
  }
</style>
