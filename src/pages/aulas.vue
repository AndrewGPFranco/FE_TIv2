<template>
    <header>
        <Navbar />
    </header>
    <div>
        <Categorias />
        <h1>Aulas:</h1>
        <div class="containerAula">
            <ul v-for="aula in dados" :key="aula.id">
                <li>
                    <h2>{{ aula.titulo }}</h2>
                </li>
                <li>
                    <p>{{ aula.descricao }}</p>
                </li>
                <li>
                    <p>Duração: {{ aula.duracao }} minutos</p>
                </li>
                <li>
                    <p>Status: {{ aula.status }}</p>
                </li>
                <li>
                    <img :src="aula.imagem" alt="Imagem da aula">
                </li>
                <li>
                    <iframe :src="aula.url"></iframe>
                </li>
            </ul>
        </div>
    </div>
    <footer>
        <Rodape />
    </footer>
</template>

<script lang="ts">
interface Aula {
    id: number;
    titulo: string;
    descricao: string;
    duracao: number;
    imagem: string,
    status: boolean;
    url: string;
}

import axios from "axios";
import Navbar from "../components/Global/Navbar.vue";
import Rodape from "../components/Global/Rodape.vue";
import Categorias from "../components/Inicio/Categorias.vue";

export default {
    data() {
        return {
            dados: [] as Aula[],
            name: "Aulas"
        };
    },
    methods: {
        aulas() {
            const token = localStorage.getItem("Token");
            const headers = {
                'Authorization': `Bearer ${token}`,
            };
            axios.get("http://localhost:8080/api/dados/aulas", { headers })
                .then((response) => {
                    if (response.status === 200) {
                        this.dados = response.data['Aulas Encontradas: '];
                    }
                    else {
                        console.error('Erro na requisição:', response.status);
                    }
                })
                .catch((error) => {
                    console.error('Erro ao obter dados:', error);
                });
        },
    },
    created() {
        this.aulas();
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                document.title = to.meta.title || 'TI for All - Aulas';
            }
        },
    },
    components: { Navbar, Rodape, Categorias }
};
</script>

<style scoped>
.containerAula ul {
    display: flex;
    flex-direction: column;
}
</style>