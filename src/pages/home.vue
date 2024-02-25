<template>
    <header>
        <Navbar />
    </header>
    <div>
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

export default {
    data() {
        return {
            name: "Inicio"
        }
    },
    components: {
        Navbar, Rodape
    }
}
</script>