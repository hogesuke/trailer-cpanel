<template>
  <header>
    <div class="header-container">
      <router-link to="/" class="logo">
        TrailerTrailer
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/global';

  header {
    @include theater-mode;
    position: fixed;
    top: 0;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    padding: 15px;
    background-image: url(../assets/header-background.jpg);
    background-size: auto 100%;
    font-size: 2.2rem;
    z-index: 1001;

    @each $bp in (xs, sm, md, lg) {
      @include mq($bp) {
        height: #{map-get($header-heights, $bp)};
      }
    }

    &.theater-mode {
      border-bottom: none;
    }

    .header-container {
      .logo {
        font-family: 'Pacifico', cursive;
        letter-spacing: .02rem;
        color: #fff;
      }
    }
  }
</style>
