import { createRouter, createWebHistory } from "vue-router"


import HomeItem from './components/HomeItem.vue'
import FoodItem from './components/FoodItem.vue'


const routes = [
  { path: '/', component: HomeItem },
  { path: '/food', component: FoodItem }
]


const router = createRouter({

    history: createWebHistory(),
    routes,
})

export default router

