<template>

<div class="sticky-top">
  <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container">
      <a class="navbar-brand" href="#">Cursos de Programación</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href=""><router-link to="/home">Home</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=""><router-link to="/administracion">Administración</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=""><router-link to="/">Logout</router-link></a>
          </li>
          <li class="nav-item">
           <p class="nav-link">User: admin@admin.gmail</p>
          </li>
           
        </ul>
      </div>
    </div>
  </nav>
</div>

</template>

<script>
export default {
    components:{

    }

}
</script>

<style>

</style>