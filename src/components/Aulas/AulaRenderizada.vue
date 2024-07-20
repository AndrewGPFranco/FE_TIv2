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
                    <img :src="aula.imagem ? aula.imagem : 'carregando'" alt="Thumbnail da Aula">
                    <p>{{ aula.titulo }}</p>
                    <router-link :to="`/aula/${tech}/${curso}/${id}`">Assistir</router-link>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <Rodape />
    </footer>
</template>

<script lang="ts">
import axios from "axios";
import Navbar from "@/components/Global/Navbar.vue";
import Rodape from "@/components/Global/Rodape.vue";
import Categorias from "@/components/Inicio/Categorias.vue";
import { URL_BASE } from "@/utils/utils";
import { Aula } from "@/interfaces/IAula";

export default {
    data() {
        return {
            dados: [] as Aula[],
            name: "Aulas",
            tech: this.$route.params.tech,
            curso: "",
            id: ""
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
                        this.curso = response.data[0].curso.replace(/\s+/g, '');
                        this.id = response.data[0].id;
                    }
                    else {
                        console.error('Erro na requisição:', response.status);
                    }
                })
                .catch(() => {
                    console.error('Erro ao obter dados das aulas!');
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
                // @ts-ignore
                document.title = to.meta.title || 'Dev | Livre - Aulas de ' + tech.toUpperCase();
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
    display: flex;
    background-color: #151515;
    color: white;
    padding: 15px;
    margin: 10px;
    max-width: 350px;
    text-align: center;
    border-radius: 30px;
    max-height: 270px;
}

.cardAula p {
    font-weight: bold;
    margin-top: 2px;
    color: rgb(172, 172, 172);
    font-family: 'Courier New', Courier, monospace
}

.cardAula img {
    margin-bottom: 10px;
    width: 320px;
    height: 170px;
    border-radius: 20px;
}

.botoes {
    display: flex;
    justify-content: center;
    gap: 100px;
}

footer {
    margin-bottom: -5px;
}
</style>
