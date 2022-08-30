
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('components/Sesion/Login.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('components/Sesion/Register.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('pages/Home.vue'),
    meta: {
      requiresAuth: true
    },
  },

  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('pages/MyPerfil.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
