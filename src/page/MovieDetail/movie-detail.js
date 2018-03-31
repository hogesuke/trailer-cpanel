import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  props: [],
  data () {
    return {
      item: null,
      isTheaterMode: false
    }
  },
  computed: {
    movieURL () {
      return this.item ? `https://www.youtube.com/embed/${this.item.trailers[0].videoId}` : ''
    }
  },
  created () {
    axios.get(`http://localhost:3000/movies/${this.$route.params.id}?_embed=directors&_embed=casts&_embed=trailers&_embed=genres`)
      .then((res) => {
        // TODO: エラーハンドリング
        this.item = res.data
      })
  },
  mounted () {
    window.setTimeout(() => {
      this.isTheaterMode = true
    }, 2000)
  }
})
