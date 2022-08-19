
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('components/Login.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('components/Register.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('pages/Home.vue'),
    meta: {
      requiresAuth: true
    },
  },

  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('components/Perfil/MyPerfil.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
