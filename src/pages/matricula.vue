<template>
    <header>
        <Navbar />
    </header>
    <main>
        <p>Matricula</p>
    </main>
    <footer>
        <Rodape />
    </footer>
</template>
  
<script lang="ts">
import Navbar from '@/components/Global/Navbar.vue';
import Rodape from '@/components/Global/Rodape.vue';

export default {
    name: "Matricula",
    components: { Navbar, Rodape }
}
</script>