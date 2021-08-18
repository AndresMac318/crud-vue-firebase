<template>
<div>
  
  <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="row justify-content-center">
          <div class="col-md-8">
            
            <h3 class="text-center">Vendor create</h3>
            <form @submit.prevent="createp">
              <div class="form-group">
                <label>NIT</label> <input type="number" class="form-control" v-model="proovedor.nitpr" required />
              </div>
              <div class="form-group">
                <label>Name</label> <input type="text" class="form-control" v-model="proovedor.nombrepr" required />
              </div>
              <div class="form-group">
                <label>Telephone</label> <input type="number" class="form-control" v-model="proovedor.telefonopr" required />
              </div>
              <div class="form-group">
                <label>Address</label> <input type="text" class="form-control" v-model="proovedor.direccionpr" required />
              </div>
              <div class="form-group mt-4">
                <button class="btn btn-primary btn-black">Add Vendor</button>
              </div>
            </form>
          </div>
        </div>

        <div class="row justify-content-center">
          <tabVendor/>
        </div>
      </div>
  </div>
  </div>
</template>

<script>

import db from '../firebaseDb.js';
import tabVendor from './Tables/TableVendor.vue';

export default {
  components:{
    tabVendor,
  },
  data(){
    return{
      proovedor: {
        nitpr: 0,
        nombrepr: "",
        telefonopr: "",
        direccionpr: 0,
      },
    };
  },
  methods: {
    createp(event){
      alert(JSON.stringify(this.proovedor));
      event.preventDefault();
      db.collection("proovedor")
      .add(this.proovedor)
      .then(() => {
        alert("Vendor successfully created!");
        this.proovedor.nitpr=0;
        this.proovedor.nombrepr="";
        (this.proovedor.telefonopr=0),
        (this.proovedor.direccionpr="");
         //this.$router.push({name: 'products'})
      })
      .catch((error)=>{
      console.log(error);
      });
    },  
  },
};
</script>