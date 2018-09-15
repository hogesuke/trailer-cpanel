<template>
  <header>
    <div class="header-container">
      <div class="logo">
        movies.tokyo
      </div>
      <button class="search-button">
        <i class="fas fa-search" />
      </button>
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
    background-color: #fff;
    background-size: auto 100%;
    font-size: 2.2rem;
    z-index: 1001;

    @each $bp in (xs, sm, md, lg, xl) {
      @include mq($bp) {
        height: #{map-get($header-heights, $bp)};
      }
    }

    &.theater-mode {
      border-bottom: none;
    }

    .header-container {
      display: flex;
      justify-content: flex-end;

      .logo {
        margin-right: auto;
        padding: 0 1.5rem;
        font-family: 'Comfortaa', cursive;
        font-size: 1.9rem;
        letter-spacing: 0.02rem;
        color: #cb1d20;

        @each $bp in (xs, sm, md, lg, xl) {
          @include mq($bp) {
            height: #{map-get($header-heights, $bp)};
            line-height: #{map-get($header-heights, $bp)};
          }
        }
      }

      .search-button {
        height: 25px;
        margin: auto 10px auto 0;
        padding: 0 10px 0 120px;
        border: none;
        border-radius: 3px;
        background: #f2f3f6;
        font-size: 1.5rem;
        color: #888;
        outline: none;
      }
    }
  }
</style>
