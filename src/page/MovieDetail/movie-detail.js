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
      setDark: types.SET_DARK
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
    this.theaterModeTimeout = window.setTimeout(() => {
      this.setDark(true)
    }, 2000)
  },
  beforeDestroy () {
    clearTimeout(this.theaterModeTimeout)
    this.setDark(false)
  }
})
