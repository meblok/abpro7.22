<template>
  <table class="table table-dark table-striped">
  <thead>
    <tr>
  
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Fecha de Nacimiento</th>
      <th scope="col">Edad</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for ="(item,index) in item" :key="index">
      <td>{{item.Nombre}}</td>
      <td>{{item.Apellido}}</td>
      <td>{{item.Fecha}}</td>
      <td>{{item.Edad}}</td>
    </tr>
   </tbody>
</table>
  
</template>

<script>
export default {

}
</script>

<style>

</style>