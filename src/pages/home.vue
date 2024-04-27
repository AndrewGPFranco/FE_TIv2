<template>
    <div class="container">
        <header>
            <Menu />
        </header>
        <main>
            <div class="cards">
                <CardCategorias titulo="Backend" sinopse="Aprenda a desenvolver API’s, Micro-Services e tudo envolvendo o Backend..." icone="pi-server" />
                <CardCategorias titulo="Frontend" sinopse="Descubra as melhores práticas para criar interfaces atraentes e funcionais..." icone="pi-desktop " />
                <CardCategorias titulo="Fullstack" sinopse="Combine as habilidades de frontend e backend para desenvolver aplicações completas..." icone="pi-sitemap" />
                <CardCategorias titulo="Database" sinopse="Explore conceitos de bancos de dados e aprenda a gerenciar dados de forma eficaz..." icone="pi-database " />
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import CardCategorias from '../components/Home/CardCategorias.vue';
import Menu from '../components/Home/Menu.vue';

export default {
    data() {
        return {
            name: "Inicio"
        }
    },
    components: {
        Menu,
        CardCategorias
    },
    methods: {
        verificaAutenticacao() {
            const token = localStorage.getItem("Token");
            if (!token) {
                this.$router.push('/login');
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

<style scoped>

.container {
    display: grid;
    grid-template-columns: 25% 75%;
}

.cards {
    display: flex;
    justify-content: center; 
    flex-wrap: wrap; 
    gap: 10px;
    position: fixed;
    bottom: 0;
    width: 75vw;
    margin-bottom: 30px;
}

main {
    background-color: #D9D9D9;
}

</style>