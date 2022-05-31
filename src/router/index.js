import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/administracion',
    name: 'administracion',    
    component: () => import('../views/AdministracionView.vue'),
    children: [
      {
        path: ":name",
        name: "routerID",
        component: () => import('../components/Tabla.vue'),
      }, 
    ],
  }

]

const router = new VueRouter({
  routes
})

export default router
