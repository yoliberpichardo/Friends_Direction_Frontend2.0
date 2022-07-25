import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

const token = localStorage.getItem('token')


const router = createRouter({
  routes,
  history: createWebHistory(process.env.VUE_ROUTER_BASE)
})

router.beforeEach(async (to, from) => {
  if (
    // make sure the user is authenticated
    !token && to.name !== 'Register' && to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})

export default router
