<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <h3 class="text-center">Crear una cuenta</h3>
                    <form action="#" @submit.prevent="register">
                        <div class="form-group pt-4">
                            <label class="h5">Nombre</label> 
                            <input type="text" class="form-control" placeholder="ej. Peter Dinklage" v-model="nombre" required />
                        </div>
                        <div class="form-group pt-4">
                            <label class="h5">Correo</label> 
                            <input type="email" class="form-control" placeholder="ej. PeterDink@gmail.com" v-model="correo" required />
                        </div>
                        <div class="form-group pt-4">
                            <label class="h5">Contraseña</label> 
                            <input type="password" class="form-control" v-model="password" required />
                        </div>
                        <div>
                            <button type="submit" class="btn btn-primary mt-4" @click="register">Regístrarme</button>
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

import '@/firebaseDb';
import firebase from 'firebase';

export default {
    data(){
        return {
            nombre: '',
            correo: '',
            password: '',
            error: ''
        }
    },
    name: 'Register',
    methods: {
        register(){
            this.error=''
            if(this.nombre && this.correo && this.password){
                firebase.auth().createUserWithEmailAndPassword(this.correo, this.password)
                .then((user) => {
                    this.nombre=''
                    this.correo= ''
                    this.password= ''
                    console.log(user)
                    console.log('Usuario creado exitosamente!')
                    alert('Usuario creado exitosamente!')
                    this.$router.push("/list")           
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