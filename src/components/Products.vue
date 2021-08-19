<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h3 class="text-center">Product create</h3>
            <form @submit.prevent="createp">
              <div class="form-group">
                <label>Code</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="producto.idproducto"
                  required
                />
              </div>
              <div class="form-group">
                <label>Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="producto.nombrep"
                  required
                />
              </div>
              <div class="form-group">
                <label>Description</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="producto.descripcionp"
                  required
                />
              </div>
              <div class="form-group">
                <label>Price</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="producto.preciop"
                  required
                />
              </div>
              <div class="form-group">
                <label>Stock</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="producto.stockp"
                  required
                />
              </div>
              <div class="form-group mt-4">
                <button class="btn btn-primary btn-black">Add product</button>
              </div>
            </form>
          </div>
        </div>

        <div class="row justify-content-center">
          <tabProduct />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebaseDb.js";
import tabProduct from './Tables/TableProduct.vue';

export default {
  components:{
    tabProduct,
  },
  data() {
    return {
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
