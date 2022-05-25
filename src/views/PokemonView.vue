<template>
  <div class="container mb-5 ">
    <h1 class="text-center mb-5">Cursos</h1>
    <div class="row justify-content-center">
      <div
        class="card text-white bg-dark  col-12 col-sm-3 m-4 shadow-lg p-3 mb-5  rounded col-lg-4 "
        v-for="(item, index) in tasks"
        :key="index"
      >
     <!--    <img
          class="card-img-top"
          v-bind:src="item.img"
          v-bind:alt="item.nombre"
        /> -->
 
        <div class="card-body text-center">
          <h5 class="card-title">{{ item.nombre }}</h5>
          <p class="card-text">Descripcion: {{ item.descripcion }}</p>
          <p class="card-text">Valor: {{ item.precio }}</p>
          <p class="card-text">Duracion: {{ item.duracion }}</p>
          <p class="card-text">Cupos: {{ item.cupos }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import Axios from "axios";
const todolistURL = "https://pokeapi.co/api/v2";

export default {
  name: "Pokemonview",
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  async created() {
    await Axios.get(todolistURL).then(
      (respuesta) => (this.tasks = respuesta.data)
    );
  },

};
</script>

<style>

</style>