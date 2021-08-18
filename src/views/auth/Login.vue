<template>
        <div class="container">
            <div class="row">

                <div class="col-8">
                    <img src="../../img/programming.svg" alt="" class="w-auto h-auto object-cover"/>
                </div>

                <div class="col-4">
                    <div class="">
                        <h3 class="text-center">Log in to your account</h3>
                        <form action="#" @submit.prevent="login">
                            <div class="form-group pt-4">
                                <label class="h5">Email Address</label> 
                                <input type="email" class="form-control" placeholder="Enter Email Address" v-model="correou" required />
                            </div>
                            <div class="form-group pt-4">
                                <label class="h5">Password</label> 
                                <input type="password" class="form-control" placeholder="Enter Password" v-model="passwordu" required />
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary mt-4" @click="login">Log In</button>
                            </div>
                        </form>
                        <div class="alert alert-danger mt-4" role="alert" v-if="error">
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