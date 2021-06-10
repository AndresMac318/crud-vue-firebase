<template>
  <div>
    <Navigation/>
    
    <div class="container mt-5">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

//import Navigation  from "@/components/Navigation";


/* import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
//import { db } from '../src/firebaseDb';
import {dbauth} from '../src/firebaseDb'; */

export default {

  components:{
    Navigation
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
}
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
</style>
