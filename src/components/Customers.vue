<template>
<div>
  
  <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="row justify-content-center">
          <div class="col-md-8">
            
            <h3 class="text-center">Customer create</h3>
            <form @submit.prevent="createc">
              <div class="form-group">
                <label>Id</label> <input type="number" class="form-control" v-model="cliente.idcliente" required />
              </div>
              <div class="form-group">
                <label>Name</label> <input type="text" class="form-control" v-model="cliente.nombrec" required />
              </div>
              <div class="form-group">
                <label>Email</label> <input type="email" class="form-control" v-model="cliente.correoc" required />
              </div>
              <div class="form-group">
                <label>Telephone</label> <input type="number" class="form-control" v-model="cliente.telefonoc" required />
              </div>
              <div class="form-group">
                <label>Address</label> <input type="text" class="form-control" v-model="cliente.direccionc" required />
              </div>
              <div class="form-group mt-4">
                <button class="btn btn-primary btn-black">Add customer</button>
              </div>
            </form>
          </div>
        </div>

        <div class="row justify-content-center">
          <tabCustomer/>
        </div>

      </div>
  </div>
  </div>
</template>

<script>

import db from '../firebaseDb.js';
import tabCustomer from './Tables/TableCustomers.vue';

export default {
    components:{
        tabCustomer,
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