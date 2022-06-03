<template>
<div>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCourse">
  Agregar Cursos
</button>
  <table class="table table-dark table-striped container">
  <thead>
    <tr>
  
      <!-- <th scope="col">Id</th> -->
      <th scope="col">Nombre</th>
      <th scope="col">Descripción</th>
      <th scope="col">Precio</th>
      <th scope="col">Duración</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in cursoAdmin" :key="index">
      <td>{{item.nombre}}</td>
      <td>{{item.descripcion}}</td>
      <td>${{item.precio}}</td>
      <td>{{item.duracion}}</td>
      <td>
        <button >
          <img src="img/edit.svg" />
        </button>
        <button @click="sendId(item.id)"  type="button" class="btn btn-primary svg" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <img src="img/trash.svg" />
        </button>
      </td>
    </tr>
   </tbody>
   <delete-modal :idCourse="idCurso" @delete="deleteCourse($event)"/>
   <add-modal @agregar="addCourse"/>
</table>
</div>

  
</template>

<script>
import DeleteModal from '@/components/DeleteModal.vue'
import AddModal from '@/components/AddModal.vue'
export default {
  components:{
    DeleteModal,
    AddModal,
  },
  data(){
    return{
      cursoAdmin:[],
      idCurso:null,
    }
  },

  methods:{
    sendId(index){
      this.idCurso == index
    },
    deleteCourse(event){
      this.cursoAdmin.splice(event, 1)
    },
    addCourse(){
      this.cursoAdmin.push(this.newCourse)
    }
  },

  created() {
    this.cursoAdmin = this.$route.params.datos;
  }
}
</script>

<style scoped>
.svg{
  background-color: black;
  border-color: white;
}


</style>