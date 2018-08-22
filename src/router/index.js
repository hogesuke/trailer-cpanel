import Vue from 'vue'
import Router from 'vue-router'
import TrailerList from '@/page/TrailerList.vue'
import MovieDetail from '@/page/MovieDetail.vue'

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
