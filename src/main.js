import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import '@/firebaseDb'


import 'bootstrap/dist/css/bootstrap.min.css'

let app = null

firebase.auth().onAuthStateChanged(()=>{
    if(!app){
        app=createApp(App).use(router).mount('#app')
    }
})


