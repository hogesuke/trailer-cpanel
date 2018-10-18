<template>
  <div class="app-loading">
    <logo-film-unit
      v-for="index in 50"
      :key="index"
      :main-color="getColor(index)"
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
        '#ff4d4d',
        '#ff6859',
        '#ff8364',
        '#fe9e71',
        '#fdb87d'
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
    position: relative;
    height: 100%;
    background: #fff;

    .film-unit {
      $film-width: 80px;

      position: fixed;
      left: calc(50% - #{$film-width / 2});
      width: $film-width;
      height: 40px;
      opacity: 0;

      @for $i from 1 through 50 {
        @keyframes fall-#{$i} {
          from {
            opacity: 0.2;
            bottom: 100%;
          }

          to {
            opacity: 1;
            bottom: 10px * $i;
          }
        }

        &.index-#{$i} {
          animation: 0.4s ease-in #{1 + 0.05 * $i}s fall-#{$i} forwards;
        }
      }
    }
  }
</style>
