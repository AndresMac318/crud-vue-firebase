<template>
<div>
    <div class="col-md-12 mt-5">
        <table class="table table-light">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="producto in productos" :key="producto.key">
              <td>{{ producto.idproducto }}</td>
              <td>{{ producto.nombrep }}</td>
              <td>{{ producto.descripcionp }}</td>
              <td>{{ producto.preciop }}</td>
              <td>{{ producto.stockp }}</td>
              <td>
                <router-link :to="{ name: 'edit', params: { id: producto.key }}" class="btn btn-primary me-1">Edit</router-link> |
                <button @click.prevent="deleteProduct(producto.key)" class="btn btn-danger">Delete</button>
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
  name: 'tabProduct',
  data(){
    return{
      productos: [],
    };        
  },
  created(){
    db.collection("producto").onSnapshot((snapshotChange) => {
    this.producto=[];
    snapshotChange.forEach((doc) => {
      this.productos.push({
      key:doc.id,
      idproducto:doc.data().idproducto,
      nombrep:doc.data().nombrep,
      descripcionp:doc.data().descripcionp,
      preciop:doc.data().preciop,
      stockp:doc.data().stockp,
      });
    });
    });
  },
  methods:{
    deleteProduct(id){
      if(window.confirm("Confirme la eliminación del producto!")){
        db.collection("producto")
        .doc(id)
        .delete()
        .then(()=>{
          console.log("Producto borrado!!");
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