<template>
  <div id="trailer-top">
    <app-header id="app-header" />
    <div id="top-container">
      <trailer-tabs
        id="trailer-tabs"
        ref="trailerTabs"
        :style="trailerTabsStyles" />
      <trailer-list />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import TrailerTabs from '@/components/TrailerTabs.vue'
import TrailerList from '@/components/TrailerList.vue'

export default {
  components: {
    AppHeader,
    TrailerTabs,
    TrailerList
  },
  data () {
    return {
      startPosition: 0,
      trailerTabsTop: 0
    }
  },
  computed: {
    trailerTabsStyles () {
      return this.trailerTabsTop ? { top: this.trailerTabsTop + 'px' } : {}
    }
  },
  mounted () {
    // todo throttlingする
    // todo 勢いよく上にスクロールした場合に背景色の白が見えてしまう
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentPosition = window.pageYOffset

      // わずかなスクロールには反応させないようにする
      if (Math.abs(currentPosition - this.startPosition) <= 15) {
        return
      }

      if (currentPosition > this.startPosition) {
        if (currentPosition >= 100) {
          this.trailerTabsTop = this.$refs.trailerTabs.$el.clientHeight * -1
        }
      } else {
        this.trailerTabsTop = 0
      }

      this.startPosition = currentPosition
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/global';

  #trailer-top {
    display: grid;
    height: 100%;

    @each $bp in (xs, sm, md, lg, xl) {
      @include mq($bp) {
        grid-template-rows: map-get($header-heights, $bp) 1fr;
      }
    }

    #app-header {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    #top-container {
      grid-column: 1 / 2;
      grid-row: 2 / 3;

      #trailer-tabs {
        position: fixed;
        width: 100vw;
        background-color: #fff;
        z-index: 1000;
        transition: top 0.3s ease-in-out;

        @each $bp in (xs, sm, md, lg, xl) {
          @include mq($bp) {
            top: #{map-get($header-heights, $bp)};
          }
        }
      }
    }
  }
</style>
