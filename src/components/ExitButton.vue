<template>
  <div class="exit-button">
    <div
      :class="{ animation }"
      class="mark">
      <div class="overlay" />
    </div>
    <div
      :class="{ animation }"
      class="mark reflection">
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
    display: inline-block;

    .mark {
      $image-size: 50px;

      position: fixed;
      bottom: 30px;
      right: 30px;
      height: $image-size;
      width: $image-size;
      background: rgba(0, 0, 0, 1) url('../assets/back-man.svg') 0 /#{$image-size} no-repeat;
      text-align: center;
      line-height: $image-size;
      font-size: 12px;
      font-weight: bold;
      color: #000;
      border-radius: 50%;

      &.animation {
        animation: lighting 0.8s ease 1.5s 1 normal both;
      }

      @keyframes lighting {
        0%, 80% {
          opacity: 0;
        }

        20%, 40%, 60% {
          opacity: 0.15;
        }

        5%, 30%, 50% {
          opacity: 0.35;
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
        pointer-events: none;

        .overlay {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 55%, rgba(0, 0, 0, 0.6));
        }
      }
    }
  }
</style>
