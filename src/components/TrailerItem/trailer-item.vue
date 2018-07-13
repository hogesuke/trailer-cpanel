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
        <ul class="genre text">
          <li>#{{item.genres[0].nameJa}}</li>
          <li>#{{item.genres[0].nameJa}}</li>
          <li>#{{item.genres[0].nameJa}}</li>
        </ul>
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
    border-radius: 5px;

    @include mq(sm) {
      display: flex;
      width: 100%;
    }

    .thumbnail {
      position: relative;
      flex-grow: 1;
      border-radius: 5px;

      @include mq() {
        $height: 180px;
        $width: 320px;
        height: $height;
        width: $width;
        background-size: $width $height;
      }

      @include mq(sm) {
        $height: 85px;
        $width: (16 * $height) / 9;
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

      @include mq() {
        height: 75px;
        width: 100%;
      }

      @include mq(sm) {
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
          color: rgba(35, 42, 51, 0.85);
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-decoration: none;
        }

        .source {
          position: absolute;
          top: -10px;
          right: -5px;
          font-size: 10px;
          color: rgba(0, 0, 0, .35);
        }
      }

      .bottom {
        display: flex;
        justify-content: flex-start;
        width: 100%;

        .genre {
          padding: 0;
          list-style: none;

          > li {
            padding: 3px 0;
            color: rgba(52, 154, 187, 0.9);
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
