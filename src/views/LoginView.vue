<template>
<div class="fondo">
  <Login/>
</div>
</template>

<script>
import Login from '@/components/Login.vue'
export default {
    components:{
        Login,
    }

}
</script>

<style>
.fondo {
  margin: 0;
  padding: 0;
  background-color: #17a2b8;
  height: 100vh;
}

</style>