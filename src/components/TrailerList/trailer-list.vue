<template>
  <ul class="trailer-list">
    <li v-for="movie in movies" :key=movie.id>
      <trailer-item :movie=movie></trailer-item>
    </li>
  </ul>
</template>

<script lang="ts" src="./trailer-list.ts">
</script>

<style scoped lang="scss">
  .trailer-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0;

    @media screen and (min-width: 1321px) {
      width: 1320px;
    }

    @media screen and (max-width: 700px) {
      width: 320px;
    }

    li {
      list-style: none;
      margin: 0 5px 10px 5px;
    }
  }
</style>
