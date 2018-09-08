<template>
  <div class="exit-button">
    <div
      :class="{ animation }"
      class="mark">
      <span>EXIT</span>
      <div class="overlay" />
    </div>
    <div
      :class="{ animation }"
      class="mark reflection">
      <span>EXIT</span>
      <div class="overlay" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      animation: true
    }
  },
  mounted () {
    // モバイルで縦横を切り替えた際に何度もアニメーションを繰り返さないようにする
    setTimeout(() => { this.animation = false }, 3000)
  }
}
</script>

<style scoped lang="scss">
  .exit-button {
    .mark {
      $image-size: 25px;

      position: relative;
      height: $image-size;
      width: 35px;
      margin-bottom: 2px;
      padding: 0 3px 0 ($image-size + 3px);
      background: rgba(255, 255, 255, 0.7) url('../assets/back-man.svg') 0 /#{$image-size} no-repeat;
      border-radius: 2px;
      text-align: center;
      line-height: $image-size;
      font-size: 12px;
      font-weight: bold;
      color: #000;

      &.animation {
        animation: lighting 0.8s ease 1.5s 1 normal both;
      }

      @keyframes lighting {
        0% {
          opacity: 0;
        }

        20%, 40%, 60%, 80% {
          opacity: 0.15;
        }

        5%, 30%, 50% {
          opacity: 0.35;
        }

        80% {
          opacity: 0;
        }

        100% {
          opacity: 0.7;
        }
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: radial-gradient(ellipse farthest-corner, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.3));
      }

      &.reflection {
        margin-top: -25px;
        box-shadow: none;
        transform: perspective(60px) rotateX(25deg) rotateY(180deg) rotateZ(180deg);
        transform-origin: center bottom;

        .overlay {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 55%, rgba(0, 0, 0, 0.6));
        }
      }
    }
  }
</style>
