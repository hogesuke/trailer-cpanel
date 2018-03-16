<template>
  <div class="movie" v-if="item">
    <div class="trailer">
      <iframe
        width="1000"
        height="562"
        :src=movieURL
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div class="description">
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script lang="ts" src="./movie-detail.ts">
</script>

<style scoped lang="scss">
  .movie {
    .trailer {
      display: flex;
      justify-content: center;
    }

    .description {
      font-size: 24px;
    }
  }
</style>
