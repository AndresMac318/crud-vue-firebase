<template >
        <div class="h-screen items-center mt-20 bg-indigo-300">
            <div class="bg-indigo-100 flex flex-row">

                <div class="flex h-full w-full  ">
                    <img src="../../img/programming.svg" alt="" class="object-cover h-full w-full"/>
                </div>

                <div class=" bg-white w-full md:max-w-md lg:max-w-full 
                md:mx-auto h-screen px-6 lg:px-16 xl:px-12 items-center justify-center flex">
                    <div class="w-full h-100">
                        <h3 class="text-xl md:text-2xl font-bold leading-tight">Log in to your account</h3>
                        <form action="#" class="mt-6" @submit.prevent="login">
                            <div class="">
                                <label class="block text-gray-700">Email Address</label> 
                                <input type="email" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" placeholder="Enter Email Address" v-model="correou" required />
                            </div>
                            <div class="form-group pt-4">
                                <label class="block text-gray-700">Password</label> 
                                <input type="password" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" placeholder="Enter Password" v-model="passwordu" required />
                            </div>
                            <div>
                                <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 
                                focus:bg-indigo-400 text-white font-semibold rounded-lg 
                                px-4 py-3 mt-6" @click="login">
                                    Log In
                                </button>
                            </div>
                        </form>
                        <div class="bg-red-400 text-center mt-4" role="alert" v-if="error">
                            {{error}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
</template>

<script>

//import '../../firebaseDb';
import firebase from 'firebase'

export default {
    data(){
        return {
            correou: '',
            passwordu: '',
            error: ''
        }
    },
    name: 'Login',
    methods: {
        login(){
            this.error=''
            if(this.correou && this.passwordu){
                firebase.auth().signInWithEmailAndPassword(this.correou, this.passwordu)
                .then((user) => {
                    console.log('se inicio sesion!!')
                    this.$router.push("/products")
                    console.log(user);
                }).catch(err => {
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