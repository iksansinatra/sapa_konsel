
import HomeView from '../../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../../views/auth/login.vue')
      },
      {
        path: '/registrasi',
        name: 'registrasi',
        component: () => import('../../views/auth/registrasi.vue')
      },
      {
        path: '/profil',
        name: 'profil',
        component: () => import('../../views/profil/profil')
      },
      {
        path: '/profilEdit',
        name: 'profilEdit',
        component: () => import('../../views/profil/profilEdit')
      },
      {
        path: '/history',
        name: 'history',
        component: () => import('../../views/profil/history')
      },
      {
        path: '/tentang',
        name: 'tentang',
        component: () => import('../../views/profil/tentang')
      },
      {
        path: '/artikel',
        name: 'artikel',
        component: () => import('../../views/profil/artikel')
      }
  ]
  
  
  
  export default routes
  