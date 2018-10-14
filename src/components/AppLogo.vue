<template>
  <div class="app-logo">
    <div class="logo-wrapper">
      <logo-film-unit
        class="film-unit"
        main-color="#ff4d4d"
        sub-color="#fff"
        style="z-index: 3;" />
      <logo-film-unit
        class="film-unit film-2"
        main-color="#ff8364"
        sub-color="#ff8364"
        style="z-index: 2;" />
      <logo-film-unit
        class="film-unit film-3"
        main-color="#fdb87d"
        sub-color="#fdb87d"
        style="z-index: 1;" />
    </div>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40px;

    .logo-wrapper {
      display: flex;
      flex-direction: column;

      .film- {
        $film-interval: 14px;

        &unit {
          width: 35px;
          height: 20px;
          margin-left: 10px;
          background-size: 35px 30px;

          &:not(:first-child) {
            margin-top: $film-interval * -1;
          }
        }
      }
    }
  }
</style>
