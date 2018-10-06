<template>
  <div class="trailer-tabs">
    <div class="tab active">上映中</div>
    <div class="tab">近日公開</div>
    <div class="tab">過去作品</div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/global';

  .trailer-tabs {
    display: flex;
    flex-direction: row;
    box-shadow: 0 4px 4px -5px #ddd;

    @include mq((xs, sm)) {
      padding-top: 8px;
    }

    @include mq(md) {
      padding-top: 10px;
    }

    @include mq((lg, xl)) {
      padding-top: 12px;
    }

    .tab {
      flex-grow: 1;
      box-sizing: border-box;
      width: 80px;
      margin: 0;
      padding: 10px 10px 14px;
      border: none;
      font-size: 1.2rem;
      font-weight: 500;
      text-align: center;
      color: rgba(0, 0, 0, 0.4);

      &.active {
        border-bottom: solid 2px $bright-red;
        color: $bright-red;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
