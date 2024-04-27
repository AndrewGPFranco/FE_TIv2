<template>
    <main>
        <Menu />
    </main>
</template>

<script lang="ts">
import Menu from '../components/Home/Menu.vue';

export default {
    data() {
        return {
            name: "Inicio"
        }
    },
    components: {
        Menu
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