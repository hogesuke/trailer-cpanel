<template>
  <div v-if="item" class="movie">
    <div class="trailer">
      <iframe
        :src=movieURL
        :class="{ 'hide': isHide }"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div class="description" :class="{ dark: isDark }">
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script src="./movie-detail.js">
</script>

<style scoped lang="scss">
  $mq-width-threshold: 1040px;

  @mixin mq-width {
    @media screen and (min-width: $mq-width-threshold) {
      width: 1000px;
    }
    @media screen and (max-width: $mq-width-threshold) {
      width: auto;
    }
  }
  @mixin mq-height {
    @media screen and (min-width: $mq-width-threshold) {
      height: 562px;
    }
    @media screen and (max-width: $mq-width-threshold) {
      height: auto;
    }
  }

  .movie {
    height: 100%;

    .trailer {
      display: flex;
      justify-content: center;

      iframe {
        @include mq-width;
        @include mq-height;
        margin: 20px;

        &.hide {
          opacity: 0;
        }
      }
    }

    .description {
      @include mq-width;
      margin: 10px auto;
      transition: color .7s linear;

      &.dark {
        color: #fff;
      }

      .title {
        font-size: 2.2rem;
      }
    }
  }
</style>
