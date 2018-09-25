<template>
  <div class="app-logo">
    <div class="film-svg film-1" />
    <div class="film-svg film-2" />
    <div class="film-svg film-3" />
  </div>
</template>

<style scoped lang="scss">
  .app-logo {
    position: relative;
    width: 40px;

    .film- {
      &svg {
        position: absolute;
        width: 35px;
        height: 30px;
        margin-left: 10px;
        background-size: 35px 30px;
      }

      $top-offset: 12px;
      $top-interval: 6px;

      &1 {
        top: $top-offset;
        z-index: 10;
        background: url('../assets/film_simple1.svg') no-repeat;
      }

      &2 {
        top: $top-offset + $top-interval;
        z-index: 9;
        background: url('../assets/film_simple2.svg') no-repeat;
      }

      &3 {
        top: $top-offset + $top-interval * 2;
        left: 0;
        z-index: 8;
        background: url('../assets/film_simple3.svg') no-repeat;
      }
    }
  }
</style>
