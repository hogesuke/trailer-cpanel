<template>
  <header>
    <div class="header-container">
      <app-logo />
      <div class="logo">
        movies.tokyo
      </div>
      <div class="search-button">
        <input
          type="text"
          placeholder="Search">
        <i class="search-icon fas fa-search" />
      </div>
    </div>
  </header>
</template>

<script>
import AppLogo from './AppLogo'

export default {
  components: {
    AppLogo
  },
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
    border-bottom: solid 1px #e8e8e8;
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
      justify-content: flex-start;

      .logo {
        padding: 0 1.5rem;
        font-family: 'Comfortaa', cursive;
        font-size: 1.9rem;
        font-weight: bold;
        letter-spacing: 0.02rem;
        color: rgba(100, 100, 100, 0.9);

        @each $bp in (xs, sm, md, lg, xl) {
          @include mq($bp) {
            height: #{map-get($header-heights, $bp)};
            line-height: #{map-get($header-heights, $bp)};
          }
        }
      }

      .search-button {
        $search-height: 2.3rem;
        $search-font-size: 1.3rem;

        position: relative;

        @include mq((xs, sm)) {
          margin-left: auto;
        }

        @include mq((md, lg, xl)) {
          $search-width: 25rem;

          position: absolute;
          left: calc(50% - (#{$search-width} / 2));
          width: $search-width;
          margin: 0;
        }

        @each $bp in (md, lg, xl) {
          @include mq($bp) {
            top: calc((#{map-get($header-heights, $bp)} / 2) - (#{$search-height} / 2));
          }
        }

        input {
          position: relative;
          box-sizing: border-box;
          // todo いる？
          // height: 2.3rem;
          width: 100%;
          margin: auto 10px auto auto;
          padding: 5px 10px;
          border: none;
          border-radius: 3px;
          background: #f2f3f6;
          font-size: $search-font-size;
          color: #888;
          cursor: pointer;
          outline: none;

          &:hover {
            background: #f8f9fc;
          }
        }

        .fa-search {
          position: absolute;
          top: calc(50% - (#{$search-font-size} / 2));
          right: 8px;
          font-size: $search-font-size;
          color: #888;
        }
      }
    }
  }
</style>
