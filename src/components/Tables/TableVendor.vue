<template>
  <div class="flex flex-col mt-8 mb-10">
    <div class="my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <table class="min-w-full">
        <thead>
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
              NIT
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
              Telephone
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
              Address
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
        <tbody class="bg-white">
          <tr v-for="proovedor in proovedores" :key="proovedor.key">
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div class="text-sm leading-5 font-medium text-gray-900">
                {{ proovedor.nitproovedor }}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div class="text-sm leading-5 font-medium text-gray-900">
                {{ proovedor.nombrepr }}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div class="text-sm leading-5 font-medium text-gray-900">
                {{ proovedor.telefonopr }}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div class="text-sm leading-5 font-medium text-gray-900">
                {{ proovedor.direccionpr }}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div class="flex">
                <router-link
                  :to="{ name: 'edit', params: { id: proovedor.key } }"
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
                <button
                  @click.prevent="deleteVendor(proovedor.key)"
                  class="
                    text-red-500
                    hover:text-red-600
                    hover:bg-red-200
                    flex
                    items-center
                  "
                >
                  <div class="flex justify-around">
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
              </div>
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
  name: "tabVendor",
  data() {
    return {
      proovedores: [],
    };
  },
  created() {
    db.collection("proovedor").onSnapshot((snapshotChange) => {
      this.proveedor = [];
      snapshotChange.forEach((doc) => {
        this.proovedores.push({
          key: doc.id,
          nitproovedor: doc.data().nitpr,
          nombrepr: doc.data().nombrepr,
          telefonopr: doc.data().telefonopr,
          direccionpr: doc.data().direccionpr,
        });
      });
    });
  },
  methods: {
    deleteVendor(id) {
      if (window.confirm("Confirme la eliminación del producto!")) {
        db.collection("proovedor")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Proovedor borrado!!");
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