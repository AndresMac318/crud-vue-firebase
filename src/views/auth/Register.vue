<template>
    <div class="xl:h-screen flex flex-col">
        <div class="bg-white ml-2 h-screen">
            <div class="mt-32">
                <div class="mt-10 py-10  rounded-md">
                    <h3 class="block text-xl text-gray-700 text-center font-semibold">Register your account</h3>
                    <form action="#" @submit.prevent="register" class=" items-center">
                        <div class="form-group pt-4">
                            <label class="block text-gray-700">Name</label> 
                            <input type="text" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" placeholder="Enter your name" v-model="nombreu" required />
                        </div>
                        <div class="form-group pt-4">
                            <label class="block text-gray-700">Email Address</label> 
                            <input type="email" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" placeholder="Enter your email address" v-model="correou" required />
                        </div>
                        <div class="form-group pt-4">
                            <label class="block text-gray-700">Password</label> 
                            <input type="password" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" placeholder="Enter your password" v-model="passwordu" required />
                        </div>
                        <div class="items-center">
                            <button type="submit" class="w-64 bg-indigo-500 hover:bg-indigo-400 
                                focus:bg-indigo-400 text-white font-semibold rounded-lg 
                                px-4 py-3 mt-6" @click="login">
                                    Sign in
                            </button>
                        </div>
                    </form>
                    <!-- <div class="alert alert-danger mt-4" role="alert" v-if="error">
                        {{error}}
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import '@/firebaseDb';
import firebase from 'firebase';

export default {
    data(){
        return {
            nombreu: '',
            correou: '',
            passwordu: '',
            error: ''
        }
    },
    name: 'Register',
    methods: {
        register(){
            this.error=''
            if(this.nombreu && this.correou && this.passwordu){
                firebase.auth().createUserWithEmailAndPassword(this.correou, this.passwordu)
                .then((user) => {
                    this.nombreu=''
                    this.correou= ''
                    this.passwordu= ''
                    console.log(user.nombreu);
                    //console.log('Usuario creado exitosamente!')
                    alert('Usuario creado exitosamente!')
                    this.$router.push("/products")           
                }).catch((err)=>{
                    this.error=err.message
                })
            }else{
                this.error="Todos los campos son requeridos!"
            }
        }
    }
}
</script>

<style>

</style>