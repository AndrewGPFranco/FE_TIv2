<template>
    <nav>
        <div class="container-titulo">
            <h1>
                <router-link to="/">Dev <span>Livre</span></router-link>
            </h1>
        </div>
        <div class="container-links">
            <router-link to="/admin/cadastro/aula" v-if="admin">
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
import { onMounted, ref } from 'vue';
import { useUsersStore } from '@/store/users';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const usersStore = useUsersStore();
        const logado = ref(false);
        const admin = ref(false);

        onMounted(() => {
            isAdmin();
        })

        const verificarToken = () => {
            const token = localStorage.getItem("Token");
            if (token) {
                logado.value = true;
            }
        };

        const isAdmin = async () => {
            await usersStore.isAdmin();
            admin.value = usersStore.getIsAdmin;
        };

        const sairDaConta = () => {
            localStorage.removeItem("Token");
            localStorage.removeItem("email");
            router.push('/login');
        }

        verificarToken();

        return {
            logado,
            isAdmin,
            sairDaConta,
            admin,
        };
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