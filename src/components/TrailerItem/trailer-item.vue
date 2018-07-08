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
        <!--<div class="source">出典 YouTube</div>-->
      </div>
      <div class="bottom">
        <!--<div class="release">-->
          <!--<span>公開中</span>-->
        <!--</div>-->
        <ul class="genre text">
          <li>#{{item.genres[0].nameJa}}</li>
          <li>#{{item.genres[0].nameJa}}</li>
          <li>#{{item.genres[0].nameJa}}</li>
        </ul>
        <!--<div class="like">-->
          <!--<i class="far fa-star icon"></i>-->
          <!--<span class="count text">210</span>-->
        <!--</div>-->
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
    background: #fff;

    @include mq(sm) {
      display: flex;
      width: 100%;
    }

    .thumbnail {
      position: relative;
      flex-grow: 1;

      @include mq() {
        $height: 180px;
        $width: 320px;
        height: $height;
        width: $width;
        background-size: $width $height;
      }

      @include mq(sm) {
        $height: 90px;
        $width: 160px;
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
      padding: 4px 12px;

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
        display: flex;

        .title {
          margin: 4px 0 6px 0;
          color: rgba(222, 64, 120, 0.85);
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

        .release > span {
          font-size: 11px;
          margin-right: 8px;
          border-radius: 3px;
          color: rgba(47, 144, 251, 0.95);
          font-weight: 600;
        }

        .genre {
          padding: 0;
          list-style: none;

          > li {
            padding: 2px 0;
            color: rgba(64, 153, 208, 0.8);
            font-size: 12px;
          }
        }

        .like {
          margin-left: auto;

          [data-icon="star"] {
            color: rgba(0, 0, 0, .3);

            &:hover {
              cursor: pointer;
              color: #ffde03;
              transition: color .15s linear;
            }
          }

          .count {
            color: #333;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
