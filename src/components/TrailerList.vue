<template>
  <div class="trailer-list">
    <trailer-item
      v-for="trailer in trailers"
      :key="trailer.id"
      :trailer="trailer"
      class="trailer-item" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TrailerItem from '@/components/TrailerItem.vue'

export default {
  components: {
    TrailerItem
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'trailers'
    ])
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/global';

  .trailer-list {
    position: relative;
    box-sizing: border-box;
    min-height: 100%; // NOTE: 背景色がスクロールで切れてしまう問題の対処のためmin-heightを使用
    width: 100%; // NOTE: vwはスクロールバーの幅も含んでしまうためここでは%を使う
    margin: 0;
    padding: 0.3rem;
    background: #eaebef;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;

    @each $bp in (xs, sm, md, lg, xl) {
      @include mq($bp) {
        padding-top: 5.3rem;
      }
    }

    .trailer-item {
      @include mq(xs) {
        margin: 0.3rem;
      }

      @include mq((sm, md, lg, xl)) {
        margin: 0.5rem;
      }

      @include mq((xs, sm)) {
        width: 100%;
      }

      @include mq((md, lg)) {
        width: calc(50% - 0.5rem * 2);
      }

      @include mq(xl) {
        width: calc(33% - 0.5rem * 2);
      }
    }
  }
</style>
