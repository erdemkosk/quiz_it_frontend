import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "login" */ '../views/Home.vue'),
    meta: {title:'QI | Ana Sayfa'}
  },
  {
    path: '/hakkinda',
    name: 'About',
    component: () => import(/* webpackChunkName: "login" */ '../views/About.vue'),
    meta: {title:'QI | Hakkında'}

  },
  {
    path: '/giris',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: {title:'QI | Giriş Yap'}
  },
  {
    path: '/uye-ol',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    meta: {title:'QI | Kayıt Ol'}
  },
  {
    path: '/token/:token',
    name: 'ChangePassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChangePassword.vue'),
    meta: {title:'QI | Şifre Sıfırlama'}
  },
  {
    path: '/sifremi-unuttum',
    name: 'ForgetPassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForgetPassword.vue'),
    meta: {title:'QI | Şifre Sıfırlama'}
  },
  {
    path: '/top10',
    name: 'Rate',
    component: () => import(/* webpackChunkName: "about" */ '../views/Rate.vue'),
    meta: {title:'QI | Top 10'}
  },
  {
    path: '/profil',
    name: 'Profile',
    meta: { 
      requiresAuth: true,
      title:'QI | Profil'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
  },
  { path: "*", 
  component: () => import(/* webpackChunkName: "about" */ '../views/404.vue') }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  routes
})

router.beforeEach((to, from, next) => {
   document.title = to.meta.title
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/giris') 
  } else {
    next() 
  }
  
})


export default router
