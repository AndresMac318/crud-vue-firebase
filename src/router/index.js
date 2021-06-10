import { createRouter, createWebHistory } from 'vue-router'
import '../firebaseDb'
import firebase from 'firebase'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login')
  },
  {
    path: '/create',
    name: 'crear',
    component: () => import(/* webpackChunkName: "crear" */ '../components/PersonaCreate'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'register',
    component: () => import(/* webpackChunkName: "registro" */ '../views/auth/Register')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "pLista" */ '../components/PersonaList'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import(/* webpackChunkName: "pEditar" */ '../components/PersonaEdit'),
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(ruta => ruta.meta.requiresAuth)){
    const user = firebase.auth().currentUser;//devuelve el usuario que inicio sesion en el sistema "db del navegador"
  
     if(user){
      next();//sgte middelware si no hay usa la vista dashb..
    }else{
      next({ name:'login'})
    }
  }else{
    next();
  }
}) 

/* router.beforeEach((to, from, next) => {
  if(to.matched.some(ruta => ruta.meta.requiresAuth)){
    const user = firebase.auth().currentUser;
    if(user){
      next({name: 'login'})
    }
  }
}) */

export default router;
