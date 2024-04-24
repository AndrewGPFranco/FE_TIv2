<template>
    <nav>
        <div class="container-titulo">
            <h1>
                <router-link to="/">Dev <span>Livre</span></router-link>
            </h1>
        </div>
        <div class="container-links">
            <router-link to="/admin/cadastro/aula" v-if="logado">
                CADASTRAR AULA
            </router-link>
            <router-link to="/roadmap" v-if="logado">
                ROADMAP
            </router-link>
            <router-link to="/cursos" v-if="logado">
                CURSOS
            </router-link>
            <router-link to="/login" v-if="!logado">
                ENTRAR
            </router-link>
            <button v-if="!logado">
                <router-link to="matricula">Matricule-Se</router-link>
            </button>
            <button v-if="logado" @click="sairDaConta">
                SAIR
            </button>
        </div>
    </nav>
</template>

<script lang="ts">
import axios from 'axios';
export default {
    data() {
        return {
            logado: false,
            admin: false
        }
    },
    methods: {
        verificarToken() {
            const token = localStorage.getItem("Token");
            if (token) {
                this.logado = !this.logado;
            }
        },
        sairDaConta() {
            localStorage.removeItem("Token");
            this.$router.push({ name: "login" });
        },
        isAdmin() {
            const token = localStorage.getItem("Token");
            const headers = {
                'Authorization': `Bearer ${token}`,
            };

            axios.get("http://localhost:8080" + "/api/login/user?login=andrew@gmail.com", { headers })
                .then((response) => {
                    if (response.data.admin === true) {
                        this.admin = true;
                    }
                })
                .catch((error) => {
                    console.error('Erro ao obter dados:', error);
                });
        }
    },
    created() {
        this.verificarToken();
        this.isAdmin();
    }
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    background: linear-gradient(to bottom, #01080E, #0B0B0B);
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
    color: rgb(175, 175, 175);
    padding: 10px;
    font-weight: 800;
}

.container-links a:hover {
    color: aqua;
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
    font-weight: 800;
}

.container-links button a:hover {
    background-color: transparent;
}


.container-links button {
    font-weight: 800;
}

.container-links button:hover {
    color: aqua;
    background-color: rgb(0, 80, 53);
}

span {
    color: aqua;
}
</style>