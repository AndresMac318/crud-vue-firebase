<template>
  <div class="mt-20 w-screen h-screen">
      <div class="w-full h-full flex flex-col">
        <h3 class="text-xl md:text-2xl font-bold leading-tight m-5">Vendor Update</h3>
        <form @submit.prevent="updateVendor">
          <div class="form-group">
            <label class="text-gray-800 flex justify-center">NIT</label>
            <input type="number" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none mb-3" v-model="proovedor.nitpr" required/>
          </div>
          <div class="form-group">
            <label class="text-gray-800 flex justify-center">Name</label> 
            <input type="text" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none mb-3" v-model="proovedor.nombrepr" required />
          </div>
          <div class="form-group">
            <label class="text-gray-800 flex justify-center">Telephone</label> 
            <input type="number" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none mb-3" v-model="proovedor.telefonopr" required />
          </div>
          <div class="form-group">
            <label class="text-gray-800 flex justify-center">Address</label> 
            <input type="text" class="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none mb-3" v-model="proovedor.direccionpr" required />
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
