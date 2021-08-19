<template>
  <div>
    <nav class="navbar navbar-light bg-light justify-content-between flex-nowrap flex-row">
      <!-- <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" @click="action" data-bs-toggle="dropdown" aria-expanded="{{active}}">
          Actions
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div> -->
      <div class="container">
        <a class="navbar-brand float-left">Dashboard Admin</a>
        <ul class="nav navbar-nav flex-row float-right">
          <ul class="nav navbar-nav flex-row float-right" v-if="user">
            <li class="nav-item">
              <router-link class="nav-link pe-3" to="/products">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link btn" @click.prevent="logout">Log out</a>
            </li>             
          </ul>
          <ul class="nav navbar-nav flex-row float-right" v-else>            
            <li class="nav-item">
              <router-link class="nav-link pe-3" to="/Register">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link pe-3" to="/">Log in</router-link>
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
        user: null,
        //active: false
      }
    },
    methods:{
      logout(){
        firebase.auth().signOut().then((answer)=>{
          console.log(answer+'Sesion cerrada!');
          this.$router.push("/");
        })
      },
      /* action(){
        this.active = true
        console.log(this.active);
      } */
      
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