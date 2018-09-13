<template>
  <div
    :class="statusClassName"
    class="trailer">
    <router-link
      :to="{ name: 'MovieDetail', params: { id: item.id }}"
      :style="{ backgroundImage: `url(${thumbnailURL})` }"
      class="thumbnail"
      tag="div">
      <div class="overlay"/>
    </router-link>
    <div class="information">
      <div class="top">
        <router-link :to="{ name: 'MovieDetail', params: { id: item.id }}">
          <div class="title text">{{ item.title }}</div>
        </router-link>
      </div>
      <div class="bottom">
        <p class="genre text">
          <a>#{{ item.genres[0].nameJa }}</a>
          <a>#{{ item.genres[0].nameJa }}</a>
          <a>#{{ item.genres[0].nameJa }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trailer: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      item: this.trailer
    }
  },
  computed: {
    statusClassName () {
      return 'is-' + this.item.status
    },
    thumbnailURL () {
      return `https://i.ytimg.com/vi/${this.item.trailers[0].videoId}/mqdefault.jpg`
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/global';

  .trailer {
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    border-right: solid 2px;
    box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.07);
    display: flex;

    &.is- {
      &now {
        border-color: #ec524e;
      }

      &before {
        border-color: #18a9ea;
      }

      &closed {
        border-color: #aaaeb3;
      }
    }

    .thumbnail {
      position: relative;

      @include mq(xs) {
        $height: 65px;
        $width: (16 * $height) / 9;
        // todo 繰り返しを解消する
        height: $height;
        min-width: $width;
        background-size: $width $height;
      }

      @include mq(sm) {
        $height: 85px;
        $width: (16 * $height) / 9;
        // todo 繰り返しを解消する
        height: $height;
        min-width: $width;
        background-size: $width $height;
      }

      @include mq(md) {
        $height: 100px;
        $width: (16 * $height) / 9;
        // todo 繰り返しを解消する
        height: $height;
        min-width: $width;
        background-size: $width $height;
      }

      @include mq((lg, xl)) {
        $height: 110px;
        $width: (16 * $height) / 9;
        // todo 繰り返しを解消する
        height: $height;
        min-width: $width;
        background-size: $width $height;
      }

      .overlay {
        height: 100%;
        width: 100%;
        transition: background-color 0.15s linear;

        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }

    .information {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 100%;
      padding: 10px 12px;

      .text {
        text-align: left;
      }

      .top {
        position: relative;

        .title {
          margin-bottom: 6px;
          color: #111;
          font-size: 1.3rem;
          font-weight: 600;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-decoration: none;
        }
      }

      .bottom {
        display: flex;
        justify-content: flex-start;
        width: 100%;

        .genre {
          margin: 0;
          padding: 0;
          font-size: 0;
          list-style: none;

          > a {
            color: rgba(33, 77, 185, 0.9);
            font-size: 1.2rem;
            line-height: 1.4em; // NOTE: remの間違いではない

            &:not(:first-child) {
              @include mq((xs, sm)) {
                margin-left: 3px;
              }

              @include mq(md) {
                margin-left: 4px;
              }

              @include mq((lg, xl)) {
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
</style>
