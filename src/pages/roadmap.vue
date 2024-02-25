<template>
    <header>
        <Navbar />
    </header>
    <main>
        <p>Roadmap</p>
    </main>
    <footer>
        <Rodape />
    </footer>
</template>
  
<script lang="ts">
import Navbar from '../components/Global/Navbar.vue';
import Rodape from '../components/Global/Rodape.vue';

export default {
    name: "Roadmap",
    components: { Navbar, Rodape }
}
</script>