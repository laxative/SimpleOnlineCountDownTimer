import Vue from 'vue'
import Router from 'vue-router'
import CountDownTimer from '@/view/CountDownTimer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: CountDownTimer
    }
  ]
})
