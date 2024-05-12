<template>
    <header>
        <Navbar />
    </header>
    <main>
        <form @submit.prevent="efetuarLogin">
            <label for="login">login</label>
            <input type="text" name="login" id="login" v-model="login">
            <label for="senha">senha</label>
            <input type="password" name="senha" id="senha" v-model="senha">
            <button type="submit">Login</button>
        </form>
    </main>
    <footer>
        <Rodape />
    </footer>
</template>

<script lang="ts">
import axios from "axios"
import Navbar from "@/components/Global/Navbar.vue"
import Rodape from "@/components/Global/Rodape.vue";

export default {
    data() {
        return {
            login: "",
            senha: "",
            name: "Login"
        };
    },
    methods: {
        async efetuarLogin() {
            const dados = {
                login: this.login,
                senha: this.senha
            };
            await axios.post("http://localhost:8080/api/login", dados)
                .then((response) => {
                const Token = response.data.token;
                const email = response.data.login;
                localStorage.setItem('Token', Token);
                localStorage.setItem('email', email);
                this.$router.push({ name: "home" });
            })
                .catch((error) => {
                console.log(error);
            });
        },
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                document.title = to.meta.title || 'TI for All - Login';
            }
        },
    },
    components: { Navbar, Rodape }
}
</script>