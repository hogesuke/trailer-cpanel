<template>
  <div class="app-logo">
    <logo-film-unit
      class="film-unit film-1"
      main-color="#ff4d4d"
      sub-color="#fff" />
    <logo-film-unit
      class="film-unit film-2"
      main-color="#ff8364"
      sub-color="#ff8364" />
    <logo-film-unit
      class="film-unit film-3"
      main-color="#fdb87d"
      sub-color="#fdb87d" />
  </div>
</template>

<script>
import LogoFilmUnit from './LogoFilmUnit'

export default {
  name: 'AppLogo',
  components: {
    LogoFilmUnit
  }
}
</script>

<style scoped lang="scss">
  .app-logo {
    position: relative;
    width: 40px;

    .film- {
      &unit {
        position: absolute;
        width: 35px;
        height: 30px;
        margin-left: 10px;
        background-size: 35px 30px;
      }

      $top-offset: 8px;
      $top-interval: 6px;

      &1 {
        top: $top-offset;
        z-index: 10;
      }

      &2 {
        top: $top-offset + $top-interval;
        z-index: 9;
      }

      &3 {
        top: $top-offset + $top-interval * 2;
        left: 0;
        z-index: 8;
      }
    }
  }
</style>
