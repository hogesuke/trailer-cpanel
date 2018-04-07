<template>
  <div>
    <trailer-tabs></trailer-tabs>
    <ul class="trailer-list">
      <li v-for="movie in movies" :key=movie.id>
        <trailer-item :movie=movie></trailer-item>
      </li>
    </ul>
  </div>
</template>

<script src="./trailer-list.js">
</script>

<style scoped lang="scss">
  .trailer-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 20px 0;

    li {
      list-style: none;
      margin: 0 4px 10px 4px;
    }
  }
</style>
