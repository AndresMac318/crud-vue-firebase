<template>
  <div class="container">
    <div>
      <Navigation />
    </div>
    
    <div class="row">
      <div class="col col-md-3 bg-dark" v-if="user">
        <NavVer class="y-max"/>
      </div>

      <div class="col col-md-9 bg-gray y-max">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import NavVer from "./components/NavVertical/NavVer.vue";

import firebase from 'firebase'
import './firebaseDb'

//import Navigation  from "@/components/Navigation";

/* import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
//import { db } from '../src/firebaseDb';
import {dbauth} from '../src/firebaseDb'; */

export default {
  components: {
    Navigation,
    NavVer,
  },
  data(){
    return{
      user: null,
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

  /* setup(){
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(()=>{
      dbauth.auth().onAuthStateChanged((user)=>{
        if(!user){
          router.replace('/login');
        }else if(route.path == "/login" || route.path == "/registro"){
          router.replace('/');
        }
      })
    });
  }*/
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.y-max{
  height: 100vh;
  
}

.bg-gray{
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
}
</style>
