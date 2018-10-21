import Vue from 'vue'
import Router from 'vue-router'
import TrailerTop from '@/page/TrailerTop.vue'
import MovieDetail from '@/page/MovieDetail.vue'
import AppLoading from '@/components/AppLoading'
import store from '../store'
import { SET_DARK_STATE, SET_LOADING_STATE } from '../store/mutation-types'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TrailerTop',
      component: TrailerTop,
      async beforeEnter (to, from, next) {
        store.commit(SET_LOADING_STATE, true)
        await store.dispatch('fetchTrailers')
        setTimeout(() => {
          store.commit(SET_LOADING_STATE, false)
          next()
        }, 2500)
      }
    },
    {
      path: '/movie/:id',
      name: 'MovieDetail',
      component: MovieDetail,
      beforeEnter: (to, from, next) => {
        store.commit(SET_DARK_STATE, true)
        setTimeout(() => {
          next()
        }, 600)
      }
    },
    {
      path: '/loading',
      name: 'AppLoading',
      component: AppLoading
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
