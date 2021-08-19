<template>
  <div class="row justify-content-center">
      <div class="col-md-5 mt-5">
        <h3 class="text-center">Vendor Update</h3>
        <form @submit.prevent="updateVendor">
          <div class="form-group">
            <label>NIT</label>
            <input type="number" class="form-control" v-model="proovedor.nitpr" required/>
          </div>
          <div class="form-group">
            <label>Name</label> 
            <input type="text" class="form-control" v-model="proovedor.nombrepr" required />
          </div>
          <div class="form-group">
            <label>Telephone</label> 
            <input type="number" class="form-control" v-model="proovedor.telefonopr" required />
          </div>
          <div class="form-group">
            <label>Address</label> 
            <input type="text" class="form-control" v-model="proovedor.direccionpr" required />
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
      proovedor:{},
    };
  },
  created() {
    let dbRef = db.collection("proovedor").doc(this.$route.params.id);
    dbRef
    .get()
    .then((doc)=>{
      this.proovedor=doc.data();
    })
    .catch((error)=>{
      console.log(error)
    });
  },
  methods: {
    updateVendor(event){
      event.preventDefault();
      db.collection("proovedor")
      .doc(this.$route.params.id)
      .update(this.proovedor)
      .then(()=>{
        console.log("Datos actualizados correctamente!");
        this.$router.push("/vendors");
      })
      .catch((error)=>{
        console.log(error);
      });
    },
  },
};
</script>
