<template>
  <div class="row justify-content-center">
      <div class="col-md-5">
        <h3 class="text-center mt-5">Product Update</h3>
        <form @submit.prevent="updateProduct">
          <div class="form-group">
            <label>Code</label>
            <input type="number" class="form-control" v-model="producto.idproducto" required/>
          </div>
          <div class="form-group">
            <label>Name</label> 
            <input type="text" class="form-control" v-model="producto.nombrep" required />
          </div>
          <div class="form-group">
            <label>Description</label> 
            <input type="text" class="form-control" v-model="producto.descripcionp" required />
          </div>
          <div class="form-group">
            <label>Precio</label> 
            <input type="number" class="form-control" v-model="producto.preciop" required />
          </div>
          <div class="form-group">
            <label>Stock</label> 
            <input type="number" class="form-control" v-model="producto.stockp" required />
          </div>
          
            <div class="form-group mt-5">
              <button class="btn btn-primary btn-block">Update</button>
            </div>
        </form>
      </div>
  </div>
</template>

<script>

import db from '../../firebaseDb'

export default {
  data(){
    return{
      producto:{},
    };
  },
  created() {
    let dbRef = db.collection("producto").doc(this.$route.params.id);
    dbRef
    .get()
    .then((doc)=>{
      this.producto=doc.data();
    })
    .catch((error)=>{
      console.log(error)
    });
  },
  methods: {
    updateProduct(event){
      event.preventDefault();
      db.collection("producto")
      .doc(this.$route.params.id)
      .update(this.producto)
      .then(()=>{
        console.log("Datos actualizados correctamente!");
        this.$router.push("/products");
      })
      .catch((error)=>{
        console.log(error);
      });
    },
  },
};
</script>
