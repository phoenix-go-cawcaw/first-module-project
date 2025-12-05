import { createRouter, createWebHistory } from 'vue-router'
import TimeOff from '../components/TimeOff.vue'
import Payroll from '../components/Payroll.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/timeoff',
      name: 'timeoff',
      component: TimeOff,
    },
    {
      path:'/payroll',
      name: 'payroll',
      component: Payroll,
    },
  ],
})

export default router
