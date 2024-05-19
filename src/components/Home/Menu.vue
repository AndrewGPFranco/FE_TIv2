<template>
    <menu>
        <div class="logoSite">
            <router-link to="/cursos">
                <h1>Dev<span class="titulo"> | Livre</span></h1>
            </router-link>
        </div>
        <div class="menuOpcoes">
            <ul>
                <li>
                    <i class="pi pi-book" style="font-size: 1.5rem; color: #000080"></i>
                    <router-link to="/roadmap">Blog</router-link>
                </li>
                <li>
                    <i class="pi pi-graduation-cap" style="font-size: 1.5rem; color: #006400"></i>
                    <router-link to="/cursos">Cursos</router-link>
                </li>
                <li>
                    <i class="pi pi-map-marker" style="font-size: 1.5rem; color: #FFA500"></i>
                    <router-link to="/roadmap">Roadmap</router-link>
                </li>
                <li>
                    <i class="pi pi-bell" style="font-size: 1.5rem; color: #FF0000"></i>
                    <router-link to="/roadmap">Novidades</router-link>
                </li>
                <li>
                    <i class="pi pi-link" style="font-size: 1.5rem; color: #9A653A"></i>
                    <router-link to="/roadmap">Referencias</router-link>
                </li>
            </ul>
        </div>
        <div class="linhaDivisoria"></div>
        <div class="usuarioInfos">
            <ul>
                <li>
                    <i class="pi pi-user" style="font-size: 1.5rem; color: #A9D3D3"></i>
                    <p>Andrew Silva</p>
                </li>
                <li>
                    <i class="pi pi-gauge" style="font-size: 1.5rem; color: #A9D3D3"></i>
                    <p>Aluno <strong class="level">{{ level ? level : "Sem nível" }}</strong></p>
                </li>
            </ul>
        </div>
    </menu>
</template>

<script lang="ts">

import axios from 'axios';
import { onMounted, ref } from 'vue';
import { URL_BASE } from '@/utils/utils';

export default {
    setup() {
        const level = ref("");
        
        const levelStudent = () => {
            const email = localStorage.getItem("email");
            const token = localStorage.getItem("Token");
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            axios.get(URL_BASE + `aluno/findbyemail?email=${email}`, { headers })
                .then((response) => {
                    level.value = response.data["Aluno encontrado:"].nivel;
                })
                .catch((error) => {
                    console.log(error);
                })
        }

        onMounted(() => {
            levelStudent();
        })

        return {
            level,
        }

    }
}
</script>

<style scoped>

    .logoSite {
        text-align: center;
        margin-top: 30px;
    }

    .logoSite h1 {
        font-size: 3rem;
        color: white!important;
    }

    .titulo {
        color: var(--titulo-color);
    }

    menu {
        height: 100vh;
        background-color: var(--fundo-color);
        color: white;
        display: flex;
        flex-direction: column;
        gap: 30px;
        border-right: 1px solid var(--border-color);
    }

    .linhaDivisoria {
        width: 80%;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 30px;
    }

    ul li {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
    }

    ul li p {
        font-size: 1.5rem;
    }

    .menuOpcoes a {
        color: #cfc7c7;
        font-size: 2rem;
        font-weight: bold;
    }

    .level {
        color: var(--titulo-color)
    }

    a:hover {
        color: var(--titulo-color);
        transition: 0.3s;
    }
    
</style>