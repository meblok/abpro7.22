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
    <tr v-for="item in cursoAdmin" :key="item.id">
      <td>{{ item.nombre }}</td>
      <td>{{ item.descripcion }}</td>
      <td>${{ item.precio }}</td>
      <td>{{ item.duracion }}</td>
      <td>
        <!-- <router-link :to="{ name: 'edicion' }">  -->
          <button @click="editCurso(item)"><img src="img/edit.svg" /></button>
        <!-- </router-link>  -->

        <!-- <router-link :to="{ path: `/ciudades/${item.id}` }" class="btn btn-primary mx-2">
        Editar
        </router-link> -->
        
        <button @click="sendId(item.id)"  type="button" class="btn btn-primary svg" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <img src="img/trash.svg" />
        </button>
      </td>
    </tr>
   </tbody>
   <delete-modal :idCourse="idCurso" @delete="deleteCourse($event)"/>
   <add-modal @agregar="addCourse($event)" />
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
    addCourse(event){
      console.log(event)
      this.cursoAdmin.push(event)
    },
    editCurso(curso){
      this.$router.push({
        name: "edicion",
        params: { datas: curso, id: curso.nombre }
      })

    }
    
    // save(){
    //   if(confirm('¿Deseas guardar los cambios?') == true){
    //     this.addCourse()
    //   }
    // }
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