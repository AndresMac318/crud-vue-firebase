<template>
  <div>
    <nav class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">CRUD Personas</a>
        <ul class="nav navbar-nav flex-row float-right">
          <ul class="nav navbar-nav flex-row float-right" v-if="user">
            <li class="nav-item">
              <router-link class="nav-link pe-3" to="/create">Agregar usuarios</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link pe-3" to="/list">Ver usuarios</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link btn" @click.prevent="logout">Cerrar sesion</a>
            </li>             
          </ul>
          <ul class="nav navbar-nav flex-row float-right" v-else>            
            <li class="nav-item">
              <router-link class="nav-link pe-3" to="/">Registrarme</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link pe-3" to="/login">Iniciar sesion</router-link>
            </li>
          </ul>
        </ul>
      </div>
    </nav> 

    

  </div>
</template>

<script>

import firebase from 'firebase'
import '@/firebaseDb'

export default {
    name: 'Navigation',
    data(){
      return{
        user: null
      }
    },
    methods:{
      logout(){
        firebase.auth().signOut().then((answer)=>{
          console.log(answer+'Sesion cerrada!');
          this.$router.push("/login");
        })
      }
      
    },
    created(){
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          this.user=user
        }else{
          this.user=null
        }
      })
    }
}
</script>

<style>

</style>