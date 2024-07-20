<template>
    <div>
        <h1>Aula renderizada {{ tecnologia }}</h1>
        <iframe :src="aula.url" frameborder="0"></iframe>
        <router-link to="/">Voltar</router-link>
    </div>
</template>

<script>
import axios from 'axios';
import { URL_BASE } from '@/utils/utils';

export default {
    name: "Aula",
    data() {
        return {
            tecnologia: this.$route.params.tech,
            aula: Object
        }
    },
    methods: {  
        aulas() {
            const token = localStorage.getItem("Token");
            const headers = {
                'Authorization': `Bearer ${token}`,
            };
            axios.get(URL_BASE + "dados/aula/5", {headers})
                .then((response) => {
                    this.aula = response.data["Aula Encontrada:"];
                })
                .catch((error) => {
                    console.log(error);
                })
        },
    },
    mounted() {
        this.aulas();
    }
}
</script>