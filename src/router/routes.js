
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('src/components/Seccion/Login.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('src/components/Seccion/Register.vue')
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
    component: () => import('src/pages/MyPerfil.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
