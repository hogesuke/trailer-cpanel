<template>
  <div id="trailer-list-container">
    <trailer-tabs id="trailer-tabs"></trailer-tabs>
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

        @include mq(sm) {
          width: 100%;
        }
      }
    }
  }
</style>
