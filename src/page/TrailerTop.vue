<template>
  <div>
    <app-header />
    <trailer-tabs ref="trailerTabs" id="trailer-tabs" :style="trailerTabsStyles" />
    <trailer-list id="trailer-list" />
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
  mounted () {
    // todo throttlingする
    // todo 勢いよく上にスクロールした場合に背景色の白が見えてしまう
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    trailerTabsStyles () {
      return this.trailerTabsTop ? { top: this.trailerTabsTop + 'px' } : {}
    }
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

  #trailer-tabs {
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 1000;
    transition: top 0.3s ease-in-out;

    @each $bp in (xs, sm, md, lg) {
      @include mq($bp) {
        top: #{map-get($header-heights, $bp)};
      }
    }
  }

  #trailer-list {
    @each $bp in (xs, sm, md, lg) {
      @include mq($bp) {
        margin-top: #{map-get($header-heights, $bp)};
      }
    }
  }
</style>
