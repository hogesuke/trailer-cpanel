import Vue from 'vue'
import Router from 'vue-router'
import TrailerTop from '@/page/TrailerTop.vue'
import MovieDetail from '@/page/MovieDetail.vue'
import store from '../store'
import { SET_DARK } from '../store/mutation-types'

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
      component: MovieDetail,
      beforeEnter: (to, from, next) => {
        store.commit(SET_DARK, true)
        setTimeout(() => {
          next()
        }, 600)
      }
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
