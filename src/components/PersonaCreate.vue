<template>
<div>
  
  <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="row justify-content-center">
          <div class="col-md-8">
            
            <h3 class="text-center">Agregar personas</h3>
            <form @submit.prevent="onFormSubmit">
              <div class="form-group">
                <label>Nombres</label> <input type="text" class="form-control" v-model="persona.nombres" required />
              </div>
              <div class="form-group">
                <label>Correo electrónico</label> <input type="email" class="form-control" v-model="persona.correoElectronico" required />
              </div>
              <div class="form-group">
                <label>Celular</label> <input type="text" class="form-control" v-model="persona.celular" required />
              </div>
              <div class="form-group">
                <label>Edad</label> <input type="number" class="form-control" v-model="persona.edad" required />
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
                <button class="btn btn-primary btn-black">Agregar Personas</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>

import db from '../firebaseDb.js'

export default {
data(){
  return{
    persona: {
      nombres: "",
      correoElectronico: "",
      celular: "",
      edad: 0,
      aficiones: [],
    },
  };
},
methods: {
  onFormSubmit(event){
    alert(JSON.stringify(this.persona));
    event.preventDefault();
    db.collection("personas")
    .add(this.persona)
    .then(() => {
      alert("User successfully created!");
      this.persona.nombres="";
      this.persona.correoElectronico="";
      (this.persona.celular=""),
      (this.persona.edad=0),
      (this.persona.aficiones=[]);
      this.$router.push({name: 'list'})
    })
    .catch((error)=>{
      console.log(error);
    });
  },
  
},
};
</script>