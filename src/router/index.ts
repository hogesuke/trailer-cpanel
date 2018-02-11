import Vue from 'vue'
import Router from 'vue-router'
import TrailerList from '@/components/TrailerList/trailer-list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TrailerList',
      component: TrailerList
    }
  ]
})
