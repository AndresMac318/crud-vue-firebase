<template>
<div>
    <div class="col-md-12 mt-5">
        <table class="table table-light">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Telephone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cliente in clientes" :key="cliente.key">
              <td>{{ cliente.idcliente }}</td>
              <td>{{ cliente.nombrec }}</td>
              <td>{{ cliente.correoc }}</td>
              <td>{{ cliente.telefonoc }}</td>
              <td>{{ cliente.direccionc }}</td>
              <td>
                <router-link :to="{ name: 'edit', params: { id: cliente.key }}" class="btn btn-primary me-1">Edit</router-link> |
                <button @click.prevent="deleteCustomer(cliente.key)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
</div>
  
</template>

<script>

import db from '../../firebaseDb';

export default {
  name: 'tabCustomer',
  data(){
    return{
      clientes: [],
    };        
  },
  created(){
    db.collection("cliente").onSnapshot((snapshotChange) => {
    this.cliente=[];
    snapshotChange.forEach((doc) => {
      this.clientes.push({
      key:doc.id,
      idcliente:doc.data().idcliente,
      nombrec:doc.data().nombrec,
      correoc:doc.data().correoc,
      telefonoc:doc.data().telefonoc,
      direccionc:doc.data().direccionc,
      });
    });
    });
  },
  methods:{
    deleteCustomer(id){
      if(window.confirm("Confirme la eliminación del cliente!")){
        db.collection("cliente")
        .doc(id)
        .delete()
        .then(()=>{
          console.log("Cliente borrado!!");
        })
        .catch((error)=>{
          console.log(error);
        });
      }
    },
  }

}
</script>

<style>

</style>