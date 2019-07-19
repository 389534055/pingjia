import Vue from 'vue'
import Router from 'vue-router'

import Login from './../components/login'
import Home from './../components/home'

import First from './../components/page/first/first.vue'

import Register from './../components/page/member/register.vue'
import Query from './../components/page/member/query.vue'

import Car_manage from './../components/page/car/car_manage.vue'

import Accept from './../components/page/reserve/accept.vue'
import Y_manage from './../components/page/reserve/y_manage.vue'

import F_manage from './../components/page/expense/f_manage.vue'
import Mess from './../components/page/expense/mess.vue'
import Valildate from './../components/page/expense/valildate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'first',
          name: 'First',
          component: First,
        },
        {
          path: 'register',
          name: 'Register',
          component: Register,
        },
        {
          path: 'query',
          name: 'Query',
          component: Query,
        },
        {
          path: 'car_manage',
          name: 'Car_manage',
          component: Car_manage,
        },
        {
          path: 'accept',
          name: 'Accept',
          component: Accept,
        },
        {
          path: 'y_manage',
          name: 'Y_manage',
          component:Y_manage,
        },
        {
          path: 'f_manage',
          name: 'F_manage',
          component:F_manage,
        },
        {
          path: 'mess',
          name: 'Mess',
          component:Mess,
        },
        {
          path: 'valildate',
          name: 'Valildate',
          component:Valildate,
        },
      ],
      redirect:'/home/first'
    },
  ]
})
