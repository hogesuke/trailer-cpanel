<template>
  <transition name="dark">
    <div
      v-if="isDark"
      class="overlay" />
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'isDark'
    ])
  }
}
</script>

<style scoped lang="scss">
  .overlay {
    position: fixed;
    top: 0;
    z-index: 99999;
    height: 100%;
    width: 100%;
    background: #000;
  }

  .dark-enter-active {
    transition: opacity 0.6s;
  }

  .dark-enter, .dark-leave-to {
    opacity: 0;
  }
</style>
