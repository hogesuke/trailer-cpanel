<template>
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
</template>

<script lang="ts" src="./movie-detail.ts">
</script>

<style scoped lang="scss">
  .trailer {
    display: flex;
    justify-content: center;
  }
</style>
