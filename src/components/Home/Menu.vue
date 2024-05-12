<template>
    <menu>
        <div class="logoSite">
            <router-link to="/roadmap">
                <h1>Dev<span class="titulo">FREE</span></h1>
            </router-link>
        </div>
        <div class="menuOpcoes">
            <ul>
                <li>
                    <i class="pi pi-book" style="font-size: 1.5rem; color: #000080"></i>
                    <p>Blog</p>
                </li>
                <li>
                    <i class="pi pi-graduation-cap" style="font-size: 1.5rem; color: #006400"></i>
                    <p>Cursos</p>
                </li>
                <li>
                    <i class="pi pi-map-marker" style="font-size: 1.5rem; color: #FFA500"></i>
                    <p>Roadmap</p>
                </li>
                <li>
                    <i class="pi pi-bell" style="font-size: 1.5rem; color: #FF0000"></i>
                    <p>Novidades</p>
                </li>
                <li>
                    <i class="pi pi-link" style="font-size: 1.5rem; color: #9A653A"></i>
                    <p>Referencias</p>
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
                    <p>Aluno <strong>Gold</strong></p>
                </li>
            </ul>
        </div>
    </menu>
</template>

<script lang="ts">
    export default {
        
    }
</script>

<style scoped>

    .logoSite {
        text-align: center;
        margin-top: 30px;
    }

    .logoSite h1 {
        font-size: 3rem;
    }

    .titulo {
        color: aqua;
    }

    menu {
        height: 100vh;
        background-color: #050017;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 30px;
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
        gap: 10px;
        justify-content: center;
    }

    ul li p {
        font-size: 1.5rem;
    }
    
</style>