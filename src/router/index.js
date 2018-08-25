import Vue from 'vue'
import Router from 'vue-router'
import TrailerTop from '@/page/TrailerTop.vue'
import MovieDetail from '@/page/MovieDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TrailerTop',
      component: TrailerTop
    },
    {
      path: '/movie/:id',
      name: 'MovieDetail',
      component: MovieDetail
    }
  ]
})
