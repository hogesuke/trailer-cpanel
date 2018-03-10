import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  props: [],
  data (): { item: any } {
    return {
      item: null
    }
  },
  computed: {
    movieURL (): string {
      return this.item ? `https://www.youtube.com/embed/${this.item.trailers[0].videoId}` : '';
    }
  },
  created () {
    axios.get(`http://localhost:3000/movies/${this.$route.params.id}?_embed=directors&_embed=casts&_embed=trailers&_embed=genres`)
      .then((res) => {
        // TODO: エラーハンドリング
        this.item = res.data;
      })
  }
})
