<template>
  <table class="table table-dark table-striped">
  <thead>
    <tr>
  
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Descripción</th>
      <th scope="col">Precio</th>
      <th scope="col">Duración</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in cursoAdmin" :key="index">
      <!-- <td>{{item.niveles}}</td> -->
      <td>{{item.nombre}}</td>
      <td>{{item.descripcion}}</td>
      <td>{{item.precio}}</td>
      <td>{{item.duracion}}</td> 
    </tr>
   </tbody>
</table>
  
</template>

<script>
export default {
  data(){
    return{
      cursoAdmin: [],
    }
  },
  created() {
    this.cursoAdmin = this.$route.params.datos;
  },
  // data(){
  //   return{
  //     cursosAdmin:[],
  //   }   
  // },

  // async created(){
  //   try{
  //     const response  = await fetch('/cursos.json')
  //     const datoscurso = await response.json()
  //     this.cursosAdmin = datoscurso.cursos


  //   }catch(error){
  //    console.log(error.message)
  //   }
  // },
  // computed:{
  //   html(){
  //     return this.cursosAdmin.niveles
  //   }
  // }

}
</script>

<style>

</style>