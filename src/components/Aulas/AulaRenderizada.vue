<template>
    <header>
        <Navbar />
        <Categorias />
    </header>
    <div class="container">
        <div class="titulo">
            <h1>Aulas disponiveis</h1>
        </div>
        <div class="containerAula">
            <div class="cardAula" v-for="aula in dados" :key="aula.id">
                <div>
                    <p>{{ aula.titulo }}</p>
                    <img :src="aula.imagem" alt="Thumbnail da Aula">
                </div>
            </div>
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
    url: string;
    tecnologia: string;
    categoria: string;
}

import axios from "axios";
import Navbar from "@/components/Global/Navbar.vue";
import Rodape from "@/components/Global/Rodape.vue";
import Categorias from "@/components/Inicio/Categorias.vue";
import { URL_BASE } from "@/utils/utils";

export default {
    data() {
        return {
            dados: [] as Aula[],
            name: "Aulas",
        };
    },
    methods: {
        aulas() {
            const token = localStorage.getItem("Token");
            const headers = {
                'Authorization': `Bearer ${token}`,
            };
            // @ts-ignore
            const tech = this.$route.params.tech.toUpperCase();

            axios.get(URL_BASE + "aulas/tecnologia/" + tech, { headers })
                .then((response) => {
                    if (response.status === 200) {
                        this.dados = response.data;
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
.titulo {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 20px;
    color: white;
}

.container {
    background-color: #0B0B0B;
}

.containerAula {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.cardAula {
    background-color: #BDFDFC;
    padding: 20px;
    border: 3px solid rgb(255, 2, 44);
    margin: 10px;
    width: 400px;
    text-align: center;
    border-radius: 30px;
}

.cardAula p {
    font-weight: bold;
    margin-bottom: 10px;
    font-family: 'Courier New', Courier, monospace
}

.cardAula img {
    margin-bottom: 10px;
    width: 320px;
    height: 170px;
}

.botoes {
    display: flex;
    justify-content: center;
    gap: 100px;
}
</style>
