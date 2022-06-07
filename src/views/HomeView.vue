<template>
<div>
  <NavBar />
  <Cursos />
</div>
</template>

<script>
import NavBar from  '@/components/NavBar.vue'
import Cursos from '@/components/Cursos.vue'
export default {
  components:{
    NavBar,
    Cursos
  },
   created() {
    this.$store.dispatch("charactersRAM/getCharacters");
  },
}
</script>

<style>
</style>