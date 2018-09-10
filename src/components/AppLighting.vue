<template>
  <transition name="router">
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
  }
</style>
