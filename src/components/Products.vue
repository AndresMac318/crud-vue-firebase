<template>

<div class="mt-20 w-screen h-screen">
  <div class="w-full h-full">
      <div class="">
        <div class="flex flex-col">
         
          <div class="h-full w-full bg-white rounded-md flex flex-row">
            <NavVer class="rounded-md"/>
            <h3 class="text-xl md:text-2xl font-bold leading-tight m-5">Product create</h3>
            <form @submit.prevent="createp" class="mt-6 ml-36">
              <div class="">
                <label class="text-gray-800 flex justify-center">Code</label> <input type="number" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="producto.idproducto" required />
              </div>
              <div class="form-group">
                <label class="text-gray-800 flex justify-center">Name</label> <input type="text" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="producto.nombrep" required />
              </div>
              <div class="form-group">
                <label class="text-gray-800 flex justify-center">Description</label> <input type="text" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="producto.descripcionp" required />
              </div>
              <div class="form-group">
                <label class="text-gray-800 flex justify-center">Price</label> <input type="number" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="producto.preciop" required />
              </div>
              <div class="form-group">
                <label class="text-gray-800 flex justify-center">Stock</label> <input type="number" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="producto.stockp" required />
              </div>
              <div class="form-group mt-4">
                <button type="submit" class="bg-indigo-500 hover:bg-indigo-400 
                focus:bg-indigo-400 text-white font-semibold rounded-lg 
                px-4 py-3 mt-6" @click="login">
                    add product
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="row justify-content-center">
          <tabProduct/>
        </div>
      </div>

      
  </div>

</div>
</template>

<script>

import db from '../firebaseDb.js'
import tabProduct from './Tables/TableProduct.vue';
import NavVer from "./NavVertical/NavVer.vue";

export default {
  components:{
    tabProduct,
    NavVer
  },
  data(){
    return{
      producto: {
        idproducto: 0,
        nombrep: "",
        descripcionp: "",
        preciop: 0,
        stockp: 0,
      },
    };
},
methods: {
    createp(event) {
      alert(JSON.stringify(this.producto));
      event.preventDefault();
      db.collection("producto")
        .add(this.producto)
        .then(() => {
          alert("Product successfully created!");
          this.producto.idproducto = 0;
          this.producto.nombrep = "";
          (this.producto.descripcionp = ""),
            (this.producto.preciop = 0),
            (this.producto.stockp = 0);
          this.$router.push("/products");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>