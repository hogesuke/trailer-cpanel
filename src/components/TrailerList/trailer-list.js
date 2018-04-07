import Vue from 'vue'
import axios from 'axios'
import TrailerTabs from '@/components/TrailerTabs/trailer-tabs.vue'
import TrailerItem from '@/components/TrailerItem/trailer-item.vue'

export default Vue.extend({
  components: {
    TrailerItem,
    TrailerTabs
  },
  data () {
    return {
      movies: []
    }
  },
  created () {
    axios.get('http://localhost:3000/movies/?_embed=directors&_embed=casts&_embed=trailers&_embed=genres')
      .then((res) => {
        // TODO: エラーハンドリング
        this.movies = res.data
      })
  }
})
