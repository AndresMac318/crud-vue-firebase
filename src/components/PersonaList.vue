<template>
  <div class="row justify-content-center">
      <div class="col-md-12">
        <table class="table table-light">
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Correo electrónico</th>
              <th>Celular</th>
              <th>Edad</th>
              <th>Aficiones</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="persona in Personas" :key="persona.key">
              <td>{{ persona.nombres }}</td>
              <td>{{ persona.correoElectronico }}</td>
              <td>{{ persona.celular }}</td>
              <td>{{ persona.edad }}</td>
              <td>
                <span v-for="(aficion, index) in persona.aficiones" :key="index">
                  {{ persona.aficiones.lenght === index + 1 ? aficion : aficion + ", "}}
                </span>
              </td>
              <td>
                <router-link :to="{ name: 'edit', params: { id: persona.key }}" class="btn btn-primary me-1">Editar</router-link>
                <button @click.prevent="deletePersona(persona.key)" class="btn btn-danger">Borrar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>

import db from '../firebaseDb';

export default {
  data(){
    return{
      Personas:[],
    };
  },
  created(){
    db.collection("personas").onSnapshot((snapshotChange) => {
      this.Personas=[];
      snapshotChange.forEach((doc) => {
        this.Personas.push({
          key:doc.id,
          nombres:doc.data().nombres,
          correoElectronico:doc.data().correoElectronico,
          celular:doc.data().celular,
          edad:doc.data().edad,
          aficiones:doc.data().aficiones,
        });
      });
    });
  },
  methods: {
    deletePersona(id){
      if(window.confirm("Realmente desea eliminar esta persona?")){
        db.collection("personas")
        .doc(id)
        .delete()
        .then(()=>{
          console.log("Documento borrado!!");
        })
        .catch((error)=>{
          console.log(error);
        });
      }
    },
  },

};
</script>
