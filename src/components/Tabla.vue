<template>
<div>
  <button type="button" class="btn btn-outline-success">Agregar cursos</button>
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
        <button  type="button" class="btn btn-primary svg" data-bs-toggle="modal" data-bs-target="#{{item.id}}">
          <img src="img/trash.svg" />
        </button>
      </td>
      <!-- Modal para eliminar -->
<div class="modal fade" :id="item.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ¿Quieres eliminar este curso?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" @click="deleteCourse(index)">Borrar</button>
      </div>
    </div>
  </div>
</div>
    </tr>
   </tbody>
</table>
<!-- Modal para eliminar -->
<!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->
<!-- <DeleteModal /> -->
</div>

  
</template>

<script>
// import DeleteModal from '@/components/DeleteModal.vue'
export default {
  // components:{
  //   DeleteModal,
  // },
  data(){
    return{
      cursoAdmin:[],
    }
  },

  created() {
    this.cursoAdmin = this.$route.params.datos;
  },

  methods:{
    deleteCourse(index){
      this.cursoAdmin.splice(index,1)
    }
  }

}
</script>

<style scoped>
.svg{
  background-color: black;
  border-color: white;
}


</style>