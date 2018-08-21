<template>
  <div class="trailer-tabs">
    <div class="tab active">上映中</div>
    <div class="tab">近日公開</div>
    <div class="tab">過去作品</div>
  </div>
</template>

<script>
export default {
  props: [ 'movie' ],
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
  .trailer-tabs {
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    box-shadow: 0 4px 4px -5px #ddd;

    .tab {
      flex-grow: 1;
      box-sizing: border-box;
      width: 80px;
      margin: 0;
      padding: 12px 10px;
      border: none;
      font-size: 1.3rem;
      font-weight: 300;
      text-align: center;
      color: rgba(0, 0, 0, .25);

      &.active {
        $active-color: #c52f2f;

        border-bottom: solid 3px $active-color;
        font-weight: 600;
        color: $active-color;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
