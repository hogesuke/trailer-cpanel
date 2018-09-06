<template>
  <header>
    <div class="header-container">
      <router-link to="/" class="logo" tag="div">
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
    border-bottom: solid 1px #e8e8e8;
    background-color: #fff;
    background-size: auto 100%;
    box-shadow: 0 1px 9px 0 rgba(193, 193, 193, 0.4);
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
        text-align: center;
        letter-spacing: .02rem;
        color: #c52f2f;
      }
    }
  }
</style>
