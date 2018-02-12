<template>
  <div class="trailer">
      <div class="thumbnail" :style="{ backgroundImage: `url(${thumbnailURL})` }">
        <div class="overlay">
          <div class="information">
            <div class="top">
              <div class="title text">{{item.title}}</div>
            </div>
            <div class="bottom">
              <div class="release">公開中</div>
              <div class="director text">{{item.casts[0].nameJa}}</div>
              <div class="like">
                <span class="icon"></span>
                <span class="count text">210</span>
              </div>
            </div>
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

    .overlay {
      position: absolute;
      bottom: 0;
      box-sizing: border-box;
      height: 100px;
      width: 100%;
      padding: 0 10px;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .7));

      .information {
        position: absolute;
        bottom: 5px;
        box-sizing: border-box;
        width: calc(100% - 20px); // FIXME: calcを使わずに済む方法がないか調べること

        .text {
          text-shadow: 1px 1px 1px #000;
          text-align: left;
        }

        .top {
          .title {
            color: #fff;
            font-size: 14px;
          }
        }

        .bottom {
          display: flex;
          justify-content: flex-start;
          width: 100%;

          .release {
            font-size: 10px;
            margin-right: 10px;
            padding: 3px;
            background-color: #ce0f0f;
            color: #fff;
          }

          .director {
            color: #ddd;
            font-size: 12px;
          }

          .like {
            margin-left: auto;

            .icon {
              color: #fff;

              &::before {
                content: '\2665'
              }
            }

            .count {
              color: #ddd;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
</style>
