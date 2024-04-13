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
import Navbar from "../Global/Navbar.vue";
import Rodape from "../Global/Rodape.vue";
import Categorias from "../Inicio/Categorias.vue";

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
            const tech = this.$route.params.tech;
            axios.get("http://localhost:8080/api/aulas/tecnologia/" + tech, { headers })
                .then((response) => {
                    if (response.status === 200) {
                        this.dados = response.data;
                        //this.dados = response.data["Aulas Encontradas: "];
                        //console.log(response.data);
                    }
                    else {
                        console.error('Erro na requisição:', response.status);
                    }
                })
                .catch((error) => {
                    console.error('Erro ao obter dados:', error);
                });
        }
    },
    mounted() {
        this.aulas();
    },
    beforeRouteUpdate(to, from, next) {
        this.aulas()
        next();
    },
    watch: {
        '$route.params.tech': {
            immediate: true,
            handler(newValue, oldValue) {
                if (newValue !== oldValue) {
                    this.aulas();
                }
            }
        },
        $route: {
            immediate: true,
            handler(to) {
                const tech = this.$route.params.tech;
                document.title = to.meta.title || 'TI for All - Aulas de ' + tech;
            }
        }
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