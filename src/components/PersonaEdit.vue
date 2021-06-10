<template>
  <div class="row justify-content-center">
      <div class="col-md-5">
        <h3 class="text-center">Actualizar Persona</h3>
        <form @submit.prevent="onUpdateForm">
          <div class="form-group">
            <label>Nombres</label>
            <input type="text" class="form-control" v-model="persona.nombres" required/>
          </div>
          <div class="form-group">
            <label>Correo electrónico</label> 
            <input type="email" class="form-control" v-model="persona.correoElectronico" required />
          </div>
          <div class="form-group">
            <label>Celular</label> 
            <input type="text" class="form-control" v-model="persona.celular" required />
          </div>
          <div class="form-group">
            <label>Edad</label> 
            <input type="number" class="form-control" v-model="persona.edad" required />
          </div>
          <div class="form-group">
            Aficiones<br/>  
            <div class="form-check form-check-inline">
              <input type="checkbox" id="check-1" class="form.check-input" v-model="persona.aficiones" value="Ver TV"/>
              <label for="check-1" class="form-check-label">Ver TV</label>
            </div>
            <div class="form-check form-check-inline">
              <input type="checkbox" id="check-2" class="form.check-input" v-model="persona.aficiones" value="Cocinar"/>
              <label for="check-2" class="form-check-label">Cocinar</label>
            </div>
            <div class="form-check form-check-inline">
              <input type="checkbox" id="check-3" class="form.check-input" v-model="persona.aficiones" value="Programar"/>
              <label for="check-3" class="form-check-label">Programar</label>
            </div>
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-block">Actualizar</button>
            </div>
        </form>
      </div>
  </div>
</template>

<script>

import db from '../firebaseDb'

export default {
  data(){
    return{
      persona:{},
    };
  },
  created() {
    let dbRef = db.collection("personas").doc(this.$route.params.id);
    dbRef
    .get()
    .then((doc)=>{
      this.persona=doc.data();
    })
    .catch((error)=>{
      console.log(error)
    });
  },
  methods: {
    onUpdateForm(event){
      event.preventDefault();
      db.collection("personas")
      .doc(this.$route.params.id)
      .update(this.persona)
      .then(()=>{
        console.log("Datos actualizados correctamente!");
        this.$router.push("/list");
      })
      .catch((error)=>{
        console.log(error);
      });
    },
  },
};
</script>
