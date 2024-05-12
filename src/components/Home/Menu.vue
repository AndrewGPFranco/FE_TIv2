<template>
    <menu>
        <div class="logoSite">
            <router-link to="/cursos">
                <h1>Dev<span class="titulo">LIVRE</span></h1>
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
                    <p>Aluno <strong>Gold</strong></p>
                </li>
            </ul>
        </div>
    </menu>
</template>

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
        align-items: center;
        gap: 10px;
        justify-content: center;
    }

    ul li p {
        font-size: 1.5rem;
    }

    .menuOpcoes a {
        color: #0097B2;
        font-size: 2rem;
    }
    
</style>