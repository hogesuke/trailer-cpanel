<template>
  <div class="app-loading">
    <logo-film-unit
      v-for="index in 5"
      :key="index"
      :main-color="getColor(index - 1)"
      :class="'index-' + index"
      class="film-unit"
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
      randomLeftPx: 0
    }
  },
  methods: {
    getColor (index) {
      const color = [
        '#fdb87d',
        '#fe9e71',
        '#ff8364',
        '#ff6859',
        '#ff4d4d'
      ]
      return color[index % color.length]
    },
    getLeftPx (index) {
      const max = 5
      const min = -5
      const random = Math.floor(Math.random() * (max + 1 - min) + min)
      return random
    }
  }
}
</script>

<style scoped lang="scss">
  .app-loading {
    position: fixed;
    z-index: 10000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;

    .film-unit {
      $film-width: 80px;
      $film-interval: 10px;
      $film-count: 5;

      position: fixed;
      left: calc(50% - #{$film-width / 2});
      width: $film-width;
      height: 40px;
      opacity: 0;

      @for $i from 1 through $film-count {
        @keyframes fadein-fadeout-#{$i} {
          from {
            opacity: 0.2;
            bottom: 100%;
          }

          30%, 80% {
            opacity: 1;
            bottom: calc(50% - #{$film-interval * $film-count} + #{$film-interval * $i});
          }

          to {
            opacity: 0;
            bottom: 0;
          }
        }

        &.index-#{$i} {
          animation: 2s ease-in #{0.3 + 0.1 * $i}s fadein-fadeout-#{$i} forwards infinite;
        }
      }
    }
  }
</style>
