<template>
  <div class="trailer">
    <router-link :to="{ name: 'MovieDetail', params: { id: item.id }}">
      <div class="thumbnail" :style="{ backgroundImage: `url(${thumbnailURL})` }">
        <div class="overlay"></div>
      </div>
    </router-link>
    <div class="information">
      <div class="top">
        <router-link :to="{ name: 'MovieDetail', params: { id: item.id }}">
          <div class="title text">{{item.title}}</div>
        </router-link>
      </div>
      <div class="bottom">
        <p class="genre text">
          <a>#{{item.genres[0].nameJa}}</a>
          <a>#{{item.genres[0].nameJa}}</a>
          <a>#{{item.genres[0].nameJa}}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'movie' ],
  data () {
    return {
      item: this.movie
    }
  },
  computed: {
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
    padding: 5px;
    background: #fff;

    display: flex;
    width: 100%;

    .thumbnail {
      position: relative;
      flex-grow: 1;

      @include mq(xs) {
        $height: 6.5rem;
        $width: (16 * $height) / 9;
        // todo 繰り返しを解消する
        height: $height;
        width: $width;
        background-size: $width $height;
      }
      @include mq(sm) {
        $height: 8.5rem;
        $width: (16 * $height) / 9;
        // todo 繰り返しを解消する
        height: $height;
        width: $width;
        background-size: $width $height;
      }
      @include mq(md) {
        $height: 10rem;
        $width: (16 * $height) / 9;
        // todo 繰り返しを解消する
        height: $height;
        width: $width;
        background-size: $width $height;
      }
      @include mq(lg) {
        $height: 11rem;
        $width: (16 * $height) / 9;
        // todo 繰り返しを解消する
        height: $height;
        width: $width;
        background-size: $width $height;
      }

      .overlay {
        height: 100%;
        width: 100%;
        transition: background-color .15s linear;

        &:hover {
          background-color: rgba(255, 255, 255, .2);
        }
      }
    }

    .information {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 2px 12px;

      @include mq(md) {
        height: 7.5rem;
        width: 100%;
      }

      @include mq((xs, sm)) {
        flex-grow: 2;
        align-self: stretch;
        width: 100%;
      }

      .text {
        text-align: left;
      }

      .top {
        position: relative;

        .title {
          margin-bottom: 4px;
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
          list-style: none;

          > a {
            color: rgba(33, 77, 185, 0.9);
            font-size: 1.2rem;
          }
        }
      }
    }
  }
</style>
