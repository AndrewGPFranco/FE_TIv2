<template>
    <header>
        <Navbar />
    </header>
    <div>
        <Categorias />
        <p>home</p>
        <router-link to="/aulas">
            Aulas
        </router-link>
    </div>
    <footer>
        <Rodape />
    </footer>
</template>
  
<script lang="ts">
import Navbar from "../components/Global/Navbar.vue";
import Rodape from "../components/Global/Rodape.vue";
import Categorias from "../components/Inicio/Categorias.vue";

export default {
    data() {
        return {
            name: "Inicio"
        }
    },
    components: {
        Navbar, Rodape, Categorias
    }
}
</script>