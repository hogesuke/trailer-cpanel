import Vue from 'vue'
import axios from 'axios'
import { mapMutations } from 'vuex'
import * as types from '../../store/mutation-types'

export default Vue.extend({
  props: [],
  data () {
    return {
      item: null,
      isTheaterMode: false
    }
  },
  methods: {
    ...mapMutations({
      toggleDark: types.TOGGLE_DARK
    })
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
      this.toggleDark()
    }, 2000)
  },
  beforeDestroy () {
    this.toggleDark()
  }
})
