<template>
  <div class="app-loading">
    <logo-film-unit
      v-for="index in 10"
      :key="index"
      :style="{ bottom: (index * intervalPx) + 'px' }"
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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    background: #fff;

    .film-unit {
      width: 80px;
      height: 40px;
    }

    @for $i from 1 through 10 {
      @keyframes fall_#{$i} {
        from {
          top: -100px;
        }

        to {
          bottom: 14px * $i;
        }
      }
    }
  }
</style>
