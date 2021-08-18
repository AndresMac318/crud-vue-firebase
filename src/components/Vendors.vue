<template>
<div class="mt-20 w-screen h-screen">
  
  <div class="w-full h-fullr">
      <div class="">
        <div class="flex flex-colr">
          <div class="h-full w-full bg-white rounded-md flex flex-row">
            <NavVer class="rounded-md"/>
            <h3 class="text-xl md:text-2xl font-bold leading-tight m-5">Vendor create</h3>
            <form @submit.prevent="createp" class="mt-6">
              <div class="form-group">
                <label class="text-gray-800">NIT</label> <input type="number" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="proovedor.nitpr" required />
              </div>
              <div class="form-group">
                <label class="text-gray-800">Name</label> <input type="text" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="proovedor.nombrepr" required />
              </div>
              <div class="form-group">
                <label class="text-gray-800">Telephone</label> <input type="number" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="proovedor.telefonopr" required />
              </div>
              <div class="form-group">
                <label class="text-gray-800">Address</label> <input type="text" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-nonel" v-model="proovedor.direccionpr" required />
              </div>
              <div class="form-group mt-4">
                 <button type="submit" class="bg-indigo-500 hover:bg-indigo-400 
                focus:bg-indigo-400 text-white font-semibold rounded-lg 
                  px-4 py-3 mt-6" @click="login">
                    add vendor
                </button>
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
import NavVer from "./NavVertical/NavVer.vue";

export default {
  components:{
    tabVendor,
    NavVer,
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