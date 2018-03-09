<template>
  <div class="trailer">
    <div class="thumbnail" :style="{ backgroundImage: `url(${thumbnailURL})` }">
    </div>
    <div class="information">
      <div class="top">
        <div class="title text">{{item.title}}</div>
      </div>
      <div class="bottom">
        <div class="release">公開中</div>
        <div class="director text">{{item.genres[0].nameJa}}</div>
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
        margin-bottom: 10px;
        color: #333;
        font-size: 16px;
      }
    }

    .bottom {
      display: flex;
      justify-content: flex-start;
      width: 100%;

      .release {
        font-size: 11px;
        margin-right: 10px;
        padding: 5px;
        background-color: #ce0f0f;
        color: #fff;
      }

      .director {
        color: #333;
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
