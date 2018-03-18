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
        <div class="source">出典 YouTube</div>
      </div>
      <div class="bottom">
        <div class="release">
          <span>公開中</span>
        </div>
        <div class="genre text">
          <span>#{{item.genres[0].nameJa}}</span>
        </div>
        <div class="like">
          <i class="far fa-star icon"></i>
          <span class="count text">210</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./trailer-item.ts">
</script>

<style scoped lang="scss">
  .trailer {
    background-color: rgba(210, 217, 220, 0.2);

    .thumbnail {
      position: relative;
      height: 180px;
      width: 320px;

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
      box-sizing: border-box;
      padding: 14px 9px;
      width: 100%;

      .text {
        text-align: left;
      }

      .top {
        position: relative;
        display: flex;

        .title {
          margin-bottom: 8px;
          color: rgba(0, 0, 0, 0.78);
          font-size: 14px;
          font-weight: 600;
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

        .genre > span {
          color: #888;
          font-size: 12px;
        }

        .like {
          margin-left: auto;

          [data-icon="star"] {
            color: rgba(0, 0, 0, .3);

            &:hover {
              cursor: pointer;
              color: #e6c800;
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
