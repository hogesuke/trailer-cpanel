import Vue from 'vue'
import Router from 'vue-router'
import TrailerTop from '@/page/TrailerTop.vue'
import MovieDetail from '@/page/MovieDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
