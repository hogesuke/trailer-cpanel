<template>
  <div class="trailer-tabs">
    <div class="tab active">上映中</div>
    <div class="tab">近日公開</div>
    <div class="tab">過去作品</div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      item: this.movie
    }
  },
  computed: {
    thumbnailURL () {
      return `https://i.ytimg.com/vi/${this.item.trailers[0].videoId}/mqdefault.jpg`
    }
  }
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
      font-size: 1.3rem;
      font-weight: 300;
      text-align: center;
      color: rgba(0, 0, 0, 0.5);

      &.active {
        $active-color: #e22621;

        border-bottom: solid 2px $active-color;
        font-weight: 600;
        color: $active-color;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
