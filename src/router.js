import Home from './pages/Home'
import Order from './pages/Order'
import {createWebHistory,createRouter} from 'vue-router'

const routes=[
  {
    path:'/',
    name:'root',
    redirect:'/test/home'
  },
  {
    path:'/test/home',
    name:'home',
    component:Home
  },
  {
    path:'/test/order',
    name:'order',
    component:Order
  }
]

const routerHistory=createWebHistory()
const router=createRouter({
  history:routerHistory,
  routes
})

export default router