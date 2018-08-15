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

<script src="./trailer-item.js">
</script>

<style scoped lang="scss">
  @import '../../assets/scss/global';

  .trailer {
    overflow: hidden;
    box-sizing: border-box;
    padding: 5px;
    background: #fff;

    @include mq((sm, md)) {
      display: flex;
      width: 100%;
    }

    .thumbnail {
      position: relative;
      flex-grow: 1;

      @include mq(lg) {
        $height: 18rem;
        $width: 32rem;
        // todo 繰り返しを解消する
        height: $height;
        width: $width;
        background-size: $width $height;
      }

      @include mq(md) {
        $height: 8.5rem;
        $width: (16 * $height) / 9;
        // todo 繰り返しを解消する
        height: $height;
        width: $width;
        background-size: $width $height;
      }

      @include mq(sm) {
        $height: 6.5rem;
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

      @include mq(lg) {
        height: 7.5rem;
        width: 100%;
      }

      @include mq((sm, md)) {
        flex-grow: 2;
        align-self: stretch;
        width: calc(100% - 160px);
      }

      .text {
        text-align: left;
      }

      .top {
        position: relative;

        .title {
          margin-bottom: 4px;
          color: #000;
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
          padding: 0;
          list-style: none;

          > a {
            color: rgba(25, 130, 132, 0.9);
            font-size: 1.2rem;
          }
        }
      }
    }
  }
</style>
