<template>
  <div class="modal fade" id="addCourse" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <label for="">Nombre del curso</label>
          <input type="text" placeholder="Ingresa el nombre del curso" v-model="newCourse.nombre">
          <label for="">Descripción</label>
          <input type="text" placeholder="Ingresa la descripción del curso" v-model="newCourse.descripcion">
          <label for="">Precio</label>
          <input type="text" placeholder="Ingresa el precio del curso" v-model="newCourse.precio">
          <label for="">Duración</label>
          <input type="text" placeholder="Ingresa la duración del curso" v-model="newCourse.duracion">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="addCourse">Guardar cambios</button>

        <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#staticBackdrop">
          Guardar cambios
        </button> -->
      </div>
    </div>
  </div>

  <!-- Modal de aceptar cambios-->
<!-- <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ¿Desea guardar cambios?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addCourse">Guardar</button>
      </div>
    </div>
  </div>
</div> -->

</div>
</template>

<script>
export default {
  data(){
    return{
      newCourse:{
        nombre:'',
        descripcion:'',
        precio:'',
        duracion:''
      }
    }
  },
    methods:{
      addCourse(){ 
        this.$emit('agregar', this.newCourse)
      }
    // this.tasks.push({
    //         nombre:this.nombre,
    //         descripcion:this.descripcion,
    //         precio:this.precio,
    //         duracion:this.duracion
    //     })
  }
}
</script>

<style>

</style>