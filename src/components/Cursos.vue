<template>
<div class="container mb-5 ">
    <h1 class="text-center mb-5">Cursos</h1>
    <div class="row justify-content-center">
      <div
        class="card text-white bg-dark  col-12 col-sm-3 m-4 shadow-lg p-3 mb-5  rounded col-lg-4 "
        v-for="(item, index) in cursos"
        :key="index"
      >
        <img
          class="card-img-top"
          v-bind:src="item.img"
          v-bind:alt="item.nombre"
        />
 
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

export default {
  data(){
     return{
       cursos:[],


     }},

  async created(){
    try{
      const response  = await fetch('/cursos.json')
      const datoscurso = await response.json()
      this.cursos = datoscurso.cursos


    }catch(error){
      console.log(error.message)
    }


}


   

}
</script>

<style scoped>

img{
  width:100%;
  height: 60%;
}
.card-body{
  font-size: 25px;

}
</style>
