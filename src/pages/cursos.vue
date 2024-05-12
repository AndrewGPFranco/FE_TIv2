<template>
    <header>
        <Navbar />
    </header>
    <main>
        <Categorias />
        <p>Cursos</p>
    </main>
    <footer>
        <Rodape />
    </footer>
</template>
  
<script lang="ts">
import Navbar from '@/components/Global/Navbar.vue';
import Rodape from '@/components/Global/Rodape.vue';
import Categorias from '@/components/Inicio/Categorias.vue';

export default {
    name: "Cursos",
    components: { Navbar, Rodape, Categorias }
}
</script>