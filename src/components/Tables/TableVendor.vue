<template>
<div>
    <div class="col-md-12 mt-5">
        <table class="table table-light">
          <thead>
            <tr>
              <th>NIT</th>
              <th>Name</th>
              <th>Telephone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="proovedor in proovedores" :key="proovedor.key">
              <td>{{ proovedor.nitproovedor }}</td>
              <td>{{ proovedor.nombrepr }}</td>
              <td>{{ proovedor.telefonopr }}</td>
              <td>{{ proovedor.direccionpr }}</td>
              <td>
                <div class="row">
                  <div class="col">
                  <button class="btn btn-sm"><router-link :to="{ name: 'editVendor', params: { id: proovedor.key }}" class="btn btn-primary me-1">Edit</router-link></button>

                  </div>
                  <div class="col">
                  <button @click.prevent="deleteVendor(proovedor.key)" class="col btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
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
  name: 'tabVendor',
  data(){
    return{
      proovedores: [],
    };        
  },
  created(){
    db.collection("proovedor").onSnapshot((snapshotChange) => {
    this.proveedor=[];
    snapshotChange.forEach((doc) => {
      this.proovedores.push({
      key:doc.id,
      nitproovedor:doc.data().nitpr,
      nombrepr:doc.data().nombrepr,
      telefonopr:doc.data().telefonopr,
      direccionpr:doc.data().direccionpr,
      });
    });
    });
  },
  methods:{
    deleteVendor(id){
      if(window.confirm("Confirme la eliminación del producto!")){
        db.collection("proovedor")
        .doc(id)
        .delete()
        .then(()=>{
          alert("Proovedor borrado!!");
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