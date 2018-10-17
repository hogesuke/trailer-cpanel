<template>
  <div class="app-loading">
    <logo-film-unit
      v-for="index in 20"
      :key="index"
      :class="'index-' + index"
      class="film-unit"
      main-color="#ff4d4d"
      sub-color="#fff" />
  </div>
</template>

<script>
import LogoFilmUnit from './LogoFilmUnit'

export default {
  name: 'AppLoading',
  components: {
    LogoFilmUnit
  },
  data () {
    return {
      intervalPx: 14
    }
  }
}
</script>

<style scoped lang="scss">
  .app-loading {
    position: relative;
    height: 100%;
    background: #fff;

    .film-unit {
      position: fixed;
      width: 80px;
      height: 40px;
      opacity: 0;

      @for $i from 1 through 20 {
        @keyframes fall-#{$i} {
          from {
            opacity: 0.2;
            bottom: 100%;
          }

          to {
            opacity: 1;
            bottom: 14px * $i;
          }
        }

        &.index-#{$i} {
          animation: 0.8s ease-in #{1 + 0.12 * $i}s fall-#{$i} forwards;
        }
      }
    }
  }
</style>
