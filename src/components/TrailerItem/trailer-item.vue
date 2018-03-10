<template>
  <div class="trailer">
    <router-link :to="{ name: 'MovieDetail', params: { id: item.id }}">
      <div class="thumbnail" :style="{ backgroundImage: `url(${thumbnailURL})` }">
      </div>
    </router-link>
    <div class="information">
      <div class="top">
        <router-link :to="{ name: 'MovieDetail', params: { id: item.id }}">
          <div class="title text">{{item.title}}</div>
        </router-link>
      </div>
      <div class="bottom">
        <div class="release">
          <span>公開中</span>
        </div>
        <div class="genre text">
          <span>{{item.genres[0].nameJa}}</span>
        </div>
        <div class="like">
          <i class="far fa-heart"></i>
          <span class="count text">210</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./trailer-item.ts">
</script>

<style scoped lang="scss">
  .thumbnail {
    position: relative;
    height: 180px;
    width: 320px;
  }

  .information {
    box-sizing: border-box;
    margin-top: 5px;
    padding: 5px;
    width: 100%;

    .text {
      text-align: left;
    }

    .top {
      .title {
        margin-bottom: 8px;
        color: #333;
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
      }
    }

    .bottom {
      display: flex;
      justify-content: flex-start;
      width: 100%;

      .release > span {
        font-size: 11px;
        margin-right: 8px;
        padding: 5px;
        background-color: rgba(225, 16, 16, 0.13);
        border-radius: 3px;
        color: #d81d1d;
      }

      .genre > span {
        color: #888;
        font-size: 12px;
      }

      .like {
        margin-left: auto;

        .icon {
          color: #333;
        }

        .count {
          color: #333;
          font-size: 12px;
        }
      }
    }
  }
</style>
