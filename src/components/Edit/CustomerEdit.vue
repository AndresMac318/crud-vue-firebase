<template>
  <div class="row justify-content-center">
      <div class="col-md-5">
        <h3 class="text-center mt-5">Customer Update</h3>
        <form @submit.prevent="updateCustomer">
          <div class="form-group">
            <label>Id</label>
            <input type="text" class="form-control" v-model="cliente.idcliente" required/>
          </div>
          <div class="form-group">
            <label>Name</label> 
            <input type="text" class="form-control" v-model="cliente.nombrec" required />
          </div>
          <div class="form-group">
            <label>Email Address</label> 
            <input type="email" class="form-control" v-model="cliente.correoc" required />
          </div>
          <div class="form-group">
            <label>Telephone</label> 
            <input type="number" class="form-control" v-model="cliente.telefonoc" required />
          </div>
          <div class="form-group">
            <label>Address</label> 
            <input type="text" class="form-control" v-model="cliente.direccionc" required />
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
      cliente:{},
    };
  },
  created() {
    let dbRef = db.collection("cliente").doc(this.$route.params.id);
    dbRef
    .get()
    .then((doc)=>{
      this.cliente=doc.data();
    })
    .catch((error)=>{
      console.log(error)
    });
  },
  methods: {
    updateCustomer(event){
      event.preventDefault();
      db.collection("cliente")
      .doc(this.$route.params.id)
      .update(this.cliente)
      .then(()=>{
        console.log("Datos actualizados correctamente!");
        this.$router.push("/customers");
      })
      .catch((error)=>{
        console.log(error);
      });
    },
  },
};
</script>
