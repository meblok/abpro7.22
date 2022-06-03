<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">¿Deseas borrar este curso?</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="deleteCourse(idCourse)"
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteModal",
  props: ["idCourse"],
  
  methods: {
    deleteCourse(params) {
      this.$emit("delete", params);
    },
  },
};
</script>

<style></style>
