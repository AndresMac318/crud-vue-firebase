<template>
  <div class="mt-20 w-screen h-screenr">
      <div class="w-full h-full flex flex-col">
        <h3 class="text-xl md:text-2xl font-bold leading-tight m-5">Customer Update</h3>
        <form @submit.prevent="updateCustomer" class="mt-5 mx-10 rounded-lg  pt-4">
          <div class="form-group">
            <label class="text-gray-800 flex justify-center">Id</label>
            <input type="text" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-noner" v-model="cliente.idcliente" required/>
          </div>
          <div class="form-group">
            <label class="text-gray-800 flex justify-center">Name</label> 
            <input type="text" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="cliente.nombrec" required />
          </div>
          <div class="form-group">
            <label class="text-gray-800 flex justify-center">Email Address</label> 
            <input type="email" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="cliente.correoc" required />
          </div>
          <div class="form-group">
            <label class="text-gray-800 flex justify-center">Telephone</label> 
            <input type="number" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-nonel" v-model="cliente.telefonoc" required />
          </div>
          <div class="form-group">
            <label class="text-gray-800 flex justify-center">Address</label> 
            <input type="text" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="cliente.direccionc" required />
          </div>
          
            <div class="form-group mt-5">
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