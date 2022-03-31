import { createRouter, createWebHistory } from 'vue-router'
import Cuestionario1 from '../components/Cuestionario1.vue'
import Cuestionario2 from '../components/Cuestionario2.vue'
import Encuesta from '../components/Encuesta.vue'
import CuestionarioNotFound from '../components/CuestionarioNotFound.vue'

const routes = [
  {
    path: '/cuestionario_1/:nombre_alumno',
    name: 'Cuestionario1',
    component: Cuestionario1
  },
  {
    path: '/cuestionario_2/:nombre_alumno',
    name: 'Cuestionario2',
    component: Cuestionario2
  },
  {
    path: '/encuesta/:nombre_alumno',
    name: 'Encuesta',
    component: Encuesta
  },
  {
    path: '/cuestionario_not_found',
    name: 'CuestionarioNotFound',
    component: CuestionarioNotFound
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
