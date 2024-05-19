<template>
    <div class="container">
        <header>
            <Menu></Menu>
        </header>
        <main>
            <div class="cards">
                <CardCategorias titulo="Backend" sinopse="Aprenda a desenvolver API’s, Micro-Services e tudo envolvendo o Backend..." icone="pi-server" />
                <CardCategorias titulo="Frontend" sinopse="Descubra as melhores práticas para criar interfaces atraentes e funcionais..." icone="pi-desktop " />
                <CardCategorias titulo="Fullstack" sinopse="Combine as habilidades de frontend e backend para desenvolver aplicações completas..." icone="pi-sitemap" />
                <CardCategorias titulo="Database" sinopse="Explore conceitos de bancos de dados e aprenda a gerenciar dados de forma eficaz..." icone="pi-database " />
                <CardCategorias titulo="Infra" sinopse="Implantação e gerenciamento de Infraestrutura, Servidores, Docker e Redes ..." icone="pi-cog " />
                <CardCategorias titulo="DevOps" sinopse="Práticas e ferramentas que integram o desenvolvimento de software com operações de TI..." icone="pi-globe" />
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import CardCategorias from '@/components/Home/CardCategorias.vue';
import Menu from '@/components/Home/Menu.vue';

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
    width: 75vw;
    margin-bottom: 15px;
    padding: 50px;
}

main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--fundo-color);
}

</style>