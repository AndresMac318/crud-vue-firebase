<template>
  <div class="mt-20 w-screen h-screen">
      <div class="w-full h-full flex flex-col">
        <h3 class="text-xl md:text-2xl font-bold leading-tight m-5">Product Update</h3>
        <form @submit.prevent="updateProduct" class="mt-6">
          <div class="">
                <label class="text-gray-800 flex justify-center">Code</label> <input type="number" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="producto.idproducto" required />
              </div>
          <div class="">
                <label class="text-gray-800 flex justify-center">Name</label> <input type="text" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="producto.nombrep" required />
              </div>
         <div class="">
                <label class="text-gray-800 flex justify-center">Description</label> <input type="text" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="producto.descripcionp" required />
              </div>
          <div class="">
                <label class="text-gray-800 flex justify-center">Price</label> <input type="number" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="producto.preciop" required />
              </div>
         <div class="">
                <label class="text-gray-800 flex justify-center">Stock</label> <input type="number" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="producto.stockp" required />
              </div>
          
            <div class="">
              <button class="bg-indigo-500 hover:bg-indigo-400 
                focus:bg-indigo-400 text-white font-semibold rounded-lg 
                px-4 py-3 mt-6">Update</button>
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