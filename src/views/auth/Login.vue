<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <h3 class="text-center">Iniciar sesión</h3>
                    <form action="#" @submit.prevent="login">
                        <div class="form-group pt-4">
                            <label class="h5">Correo</label> 
                            <input type="email" class="form-control" placeholder="ej. PeterDink@gmail.com" v-model="correo" required />
                        </div>
                        <div class="form-group pt-4">
                            <label class="h5">Contraseña</label> 
                            <input type="password" class="form-control" v-model="password" required />
                        </div>
                        <div>
                            <button type="submit" class="btn btn-primary mt-4" @click="login">Iniciar sesión</button>
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
            correo: '',
            password: '',
            error: ''
        }
    },
    name: 'Login',
    methods: {
        login(){
            this.error=''
            if(this.correo && this.password){
                firebase.auth().signInWithEmailAndPassword(this.correo, this.password)
                .then((user) => {
                    console.log('se inicio sesion!!')
                    this.$router.push("/list")
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