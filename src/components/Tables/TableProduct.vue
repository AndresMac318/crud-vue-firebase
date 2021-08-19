<template>
  <div class="flex flex-col mt-8 mb-10">
    <div class="my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <table class="min-w-full table-auto">
        <thead class="">
          <tr>
            <th
              class="
                px-6
                py-3
                border-b border-gray-200
                bg-gray-50
                text-center text-xs
                leading-4
                font-medium
                text-gray-500
                uppercase
                tracking-wider
              "
            >
              Code
            </th>
            <th
              class="
                px-6
                py-3
                border-b border-gray-200
                bg-gray-50
                text-center text-xs
                leading-4
                font-medium
                text-gray-500
                uppercase
                tracking-wider
              "
            >
              Name
            </th>
            <th
              class="
                px-6
                py-3
                border-b border-gray-200
                bg-gray-50
                text-center text-xs
                leading-4
                font-medium
                text-gray-500
                uppercase
                tracking-wider
              "
            >
              Description
            </th>
            <th
              class="
                px-6
                py-3
                border-b border-gray-200
                bg-gray-50
                text-center text-xs
                leading-4
                font-medium
                text-gray-500
                uppercase
                tracking-wider
              "
            >
              Price
            </th>
            <th
              class="
                px-6
                py-3
                border-b border-gray-200
                bg-gray-50
                text-center text-xs
                leading-4
                font-medium
                text-gray-500
                uppercase
                tracking-wider
              "
            >
              Stock
            </th>
            <th
              class="
                px-6
                py-3
                border-b border-gray-200
                bg-gray-50
                text-center text-xs
                leading-4
                font-medium
                text-gray-500
                uppercase
                tracking-wider
              "
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white items-center">
          <tr v-for="producto in productos" :key="producto.key">
            <td class="px-2 py-2 whitespace-no-wrap border-b border-gray-200">
              <div class="ext-sm leading-5 font-medium text-gray-900 ml-5">
                {{ producto.idproducto }}
              </div>
            </td>
            <td class="px-2 py-2 whitespace-no-wrap border-b border-gray-200">
              <div class="ext-sm leading-5 font-medium text-gray-900">
                {{ producto.nombrep }}
              </div>
            </td>
            <td class="px-2 py-2whitespace-no-wrap border-b border-gray-200">
              <div class="ext-sm leading-5 font-medium text-gray-900">
                {{ producto.descripcionp }}
              </div>
            </td>
            <td class="px-2 py-2 whitespace-no-wrap border-b border-gray-200">
              <div class="ext-sm leading-5 font-medium text-gray-900">
                {{ producto.preciop }}
              </div>
            </td>
            <td class="px-2 py-2 whitespace-no-wrap border-b border-gray-200">
              <div class="ext-sm leading-5 font-medium text-gray-900">
                {{ producto.stockp }}
              </div>
            </td>
            <td
              class="
                px-2
                py-2
                whitespace-no-wrap
                border-b border-gray-200
                flex flex-row
              "
            >
              <div class="flex">
                <router-link
                :to="{ name: 'editProduct', params: { id: producto.key } }"
                  class="
                    text-indigo-600
                    hover:text-indigo-900
                    flex
                    items-center
                    hover:bg-gray-200
                  "
                >
                  <div class="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </div>
                  <span class="ml-2 mr-10">Edit</span>
                </router-link>
              </div>
              <button
                @click.prevent="deleteProduct(producto.key)"
                class="
                  text-red-500
                  hover:text-red-600
                  hover:bg-red-200
                  flex
                  items-center
                "
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </div>
                <span class="ml-2">delete</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import db from "../../firebaseDb";

export default {
  name: "tabProduct",
  data() {
    return {
      productos: [],
    };
  },
  created() {
    db.collection("producto").onSnapshot((snapshotChange) => {
      this.producto = [];
      snapshotChange.forEach((doc) => {
        this.productos.push({
          key: doc.id,
          idproducto: doc.data().idproducto,
          nombrep: doc.data().nombrep,
          descripcionp: doc.data().descripcionp,
          preciop: doc.data().preciop,
          stockp: doc.data().stockp,
        });
      });
    });
  },
  methods: {
    deleteProduct(id) {
      if (window.confirm("Confirme la eliminación del producto!")) {
        db.collection("producto")
          .doc(id)
          .delete()
          .then(() => {
            this.$router.push({ name: "tabProduct" });
            alert("Producto borrado!!");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
</style>