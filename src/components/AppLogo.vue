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
    width: 60px;

    .film- {
      &svg {
        position: absolute;
        width: 50px;
        height: 40px;
        margin-left: 10px;
        background-size: 50px 40px;
      }

      &1 {
        top: 0;
        z-index: 10;
        background: url('../assets/film_simple1.svg') no-repeat;
      }

      &2 {
        top: 8px;
        left: 0px;
        z-index: 9;
        background: url('../assets/film_simple2.svg') no-repeat;
      }

      &3 {
        top: 16px;
        left: 0;
        z-index: 8;
        background: url('../assets/film_simple3.svg') no-repeat;
      }
    }
  }
</style>
