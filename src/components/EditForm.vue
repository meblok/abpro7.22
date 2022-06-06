<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <form @submit.prevent="actualizarCurso()">
        
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Nombre"
              v-model="newInfo.nombre"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Descripción"
              v-model="newInfo.descripcion"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Precio"
              v-model="newInfo.precio"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Duración"
              v-model="newInfo.duracion"
            />
          </div>
          <button type="submit" class="btn btn-primary">Guardar cambios</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrayRandom:[],
      newInfo: {
        nombre: "",
        descripcion: "",
        precio: "",
        duracion: "",
      },
    };
  },
  methods: {
    actualizarCurso(){
      this.$router.push("/home")
    }
    

  },
  created(){
    this.arrayRandom = this.$route.params.datas

  }
};
</script>

<style></style>
