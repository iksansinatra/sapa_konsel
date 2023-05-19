import { createRouter, createWebHistory, createWebHashHistory  } from 'vue-router'



import mainRouter from '../router/routerApp/mainRouter'



var allRoutes = []
allRoutes = allRoutes.concat(mainRouter)



const routes = allRoutes


const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
})

export default router