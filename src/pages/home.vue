<template>
    <header>
        <Navbar />
    </header>
    <div>
        <Categorias />
        <p>home</p>
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
    },
    methods: {
        verificaAutenticacao() {
            const token = localStorage.getItem("Token");
            if (!token) {
                this.$router.push('/login')
            }
        }
    },
    created() {
        this.verificaAutenticacao();
    },
    watch: {
        $route: {
            immediate: true,
            handler() {
                this.verificaAutenticacao();
            },
        },
    },
}
</script>