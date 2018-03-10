import Vue from 'vue'
import Router from 'vue-router'
import TrailerList from '@/components/TrailerList/trailer-list.vue'
import MovieDetail from '@/page/MovieDetail/movie-detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TrailerList',
      component: TrailerList
    },
    {
      path: '/movie/:id',
      name: 'MovieDetail',
      component: MovieDetail
    }
  ]
})
