import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const Home = () => import("../views/home/home")
const Categroy = () => import("views/categroy/categroy")
const Cart = () => import("views/cart/cart")
const Profile = () => import("views/profile/profile")

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/categroy",
    component:Categroy
  },
  {
    path:"/cart",
    component:Cart
  },
  {
    path:"/profile",
    component:Profile
  }

]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};