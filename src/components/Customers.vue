<template>
<div class="mt-20 w-screen h-screen">
  
  <div class="w-full h-full">
      <div class="">
        <div class="flex flex-col">
          <div class="h-full w-full bg-white rounded-md flex flex-row">
            <NavVer class="rounded-md"/>
            <h3 class="text-xl md:text-2xl font-bold leading-tight m-5">Customer create</h3>
            <form @submit.prevent="createc" class="items-center mt-6 ml-36">
              <div class="form-group">
                <label class="text-gray-800 flex justify-center">ID</label> <input type="number" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="cliente.idcliente" required />
              </div>
              <div class="form-group">
                <label class="text-gray-800 flex justify-center">Name</label> <input type="text" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="cliente.nombrec" required />
              </div>
              <div class="form-group">
                <label class="text-gray-800 flex justify-center">Email</label> <input type="email" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="cliente.correoc" required />
              </div>
              <div class="form-group">
                <label class="text-gray-800 flex justify-center">Telephone</label> <input type="number" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="cliente.telefonoc" required />
              </div>
              <div class="form-group">
                <label class="text-gray-800 flex justify-center">Address</label> <input type="text" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="cliente.direccionc" required />
              </div>
              <div class="form-group mt-4">
                 <button type="submit" class="bg-indigo-500 hover:bg-indigo-400 
                focus:bg-indigo-400 text-white font-semibold rounded-lg 
                px-4 py-3 mt-6" @click="login">
                    add customer
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="justify-content-center">
          <tabCustomer/>
        </div>

      </div>
  </div>
  </div>
</template>

<script>

import db from '../firebaseDb.js';
import tabCustomer from './Tables/TableCustomers.vue';
import NavVer from "./NavVertical/NavVer.vue";

export default {
    components:{
        tabCustomer,
        NavVer,
    },
    data(){
        return{
            cliente: {
            idcliente: 0,
            nombrec: "",
            correoc: "",
            telefonoc: 0,
            direccionc: "",
            },
        };
    },
    methods: {
      createc(event){
        alert(JSON.stringify(this.cliente));
        event.preventDefault();
        db.collection("cliente")
        .add(this.cliente)
        .then(() => {
          alert("Product successfully created!");
          this.cliente.idcliente=0;
          this.cliente.nombrec="";
          (this.cliente.correoc=""),
          (this.cliente.telefonoc=0),
          (this.cliente.direccionc=0);
          this.$router.push({name: 'customers'})
        })
        .catch((error)=>{
          console.log(error);
        });
      },
  
    },
    };
</script>