<template>
  <table class="table table-dark table-striped">
  <thead>
    <tr>
  
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Duracion</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for ="(item,index) in cursosAdmin" :key="index">
      <td>{{item.niveles.nv1.id}}</td>
      <td>{{item.niveles.nv1.nombre}}</td>
      <td>{{item.niveles.nv1.precio}}</td>
      <td>{{item.niveles.nv1.duracion}}</td>
    </tr>
   </tbody>
</table>
  
</template>

<script>
export default {
  data(){
     return{
       cursosAdmin:[],


     }},

  async created(){
    try{
      const response  = await fetch('/cursos.json')
      const datoscurso = await response.json()
      this.cursosAdmin = datoscurso.cursos


    }catch(error){
      console.log(error.message)
    }
} 

}
</script>

<style>

</style>