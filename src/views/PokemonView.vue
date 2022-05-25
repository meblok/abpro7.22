<template>
  <div class="container mb-5">
    <h1 class="text-center mb-5">Pokemones</h1>

    <!-- Buscador -->
      <input type="text" v-model.trim="search" placeholder="Ingresa un pokemon" @keyup="searchData()"/>
      <button class="btn btn-danger">Buscar</button>


    <div class="row justify-content-center">
      <div
        class="card text-white bg-dark  col-12 col-sm-3 m-4 shadow-lg p-3 mb-5  rounded "
        v-for="(item, index) in pokedex"
        :key="index"
      >
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
     
      search: "pikachu",
      pokedex :[]
    }
  },
methods:{
  async getPokemones(pokemon =""){
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

     return response.data  
  }},
 async created() {
  const response = await this.getPokemones(this.search)
  this.pokedex = response.abilities[0].ability
  
  console.log(response)


},
 
 
}
</script>

<style>

</style>
