<template>
    <nav>
        <div class="container-titulo">
            <h1>
                <router-link to="/">TI-FREE</router-link>
            </h1>
        </div>
        <div class="container-links">
            <router-link to="/roadmap" v-if="logado">
                Roadmap
            </router-link>
            <router-link to="/cursos" v-if="logado">
                Cursos
            </router-link>
            <router-link to="/login" v-if="!logado">
                Entrar
            </router-link>
            <button v-if="!logado">
                <router-link to="matricula">Matricule-Se</router-link>
            </button>
            <button v-if="logado" @click="sairDaConta">
                Sair
            </button>
        </div>
    </nav>
</template>

<script lang="ts">
export default {
    data() {
        return {
            logado: false
        }
    },
    methods: {
        verificarToken() {
            const token = localStorage.getItem("Token");
            if(token) {
                this.logado = !this.logado;
            }
        },
        sairDaConta() {
            localStorage.removeItem("Token");
            this.$router.push({ name: "login" });
        }
    },
    created() {
        this.verificarToken();
    },
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    background-color: #01080E;
    color: white;
    align-items: center;
}

.container-titulo {
    font-family: "Contrail One", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 25px;
    cursor: pointer;
}

.container-titulo a {
    color: white;
}

.container-links {
    display: flex;
    gap: 20px;
    align-items: center;
}

.container-links a {
    color: white;
    padding: 10px;
}

.container-links a:hover {
    background-color: gray;
    border-radius: 10px;
}

.container-links button {
    background-color: aqua;
    padding: 15px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
}

.container-links button a {
    color: black;
}

.container-links button a:hover {
    background-color: transparent;
}
</style>