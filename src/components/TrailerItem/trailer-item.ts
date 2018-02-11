import Vue from 'vue'

export default Vue.extend({
  props: [ 'movie' ],
  data () {
    return {
      item: this.movie
    }
  },
  computed: {
    thumbnailURL (): string {
      return `https://i.ytimg.com/vi/${this.item.trailers[0].videoId}/mqdefault.jpg`
    }
  }
})
