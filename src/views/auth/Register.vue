<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <h3 class="text-center">Register your account</h3>
                    <form action="#" @submit.prevent="register">
                        <div class="form-group pt-4">
                            <label class="h5">Name</label> 
                            <input type="text" class="form-control" placeholder="Enter your name" v-model="nombreu" required />
                        </div>
                        <div class="form-group pt-4">
                            <label class="h5">Email Address</label> 
                            <input type="email" class="form-control" placeholder="Enter your email address" v-model="correou" required />
                        </div>
                        <div class="form-group pt-4">
                            <label class="h5">Password</label> 
                            <input type="password" class="form-control" placeholder="Enter your password" v-model="passwordu" required />
                        </div>
                        <div>
                            <button type="submit" class="btn btn-primary mt-4" @click="register">Sing in</button>
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