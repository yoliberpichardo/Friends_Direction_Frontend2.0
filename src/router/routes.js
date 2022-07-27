
const routes = [
  {
    path:'/login',
    name: 'Login',
    component: () => import('components/Login.vue'),
    meta : { requiresAuth: false },
  },
  {
    path:'/register',
    name: 'Register',
    component: () => import('components/Register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('pages/Home.vue'),
    meta : { requiresAuth: true },
    children:[
      {
        path: 'search',
        name: 'Search',
        component: () => import('layouts/SearchFriends.vue'),
        meta : { requiresAuth: true },

      },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
