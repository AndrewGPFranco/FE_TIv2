<template>
    <div class="container">
        <p>
            <router-link to="/aulas">
                HTML
            </router-link>
        </p>
        <p>
            <router-link to="/aulas">
                CSS
            </router-link>
        </p>
        <p>
            <router-link to="/aulas">
                VUE
            </router-link>
        </p>
        <p>
            <router-link to="/aulas">
                NUXT
            </router-link>
        </p>
        <p>
            <router-link to="/aulas">
                REACT
            </router-link>
        </p>
        <p>
            <router-link to="/aulas">
                JAVA
            </router-link>
        </p>
        <p>
            <router-link to="/aulas">
                SPRING
            </router-link>
        </p>
        <p>
            <router-link to="/aulas">
                PHP
            </router-link>
        </p>
        <p>
            <router-link to="/aulas">
                LARAVEL
            </router-link>
        </p>
        <p>
            <router-link to="/aulas">
                NODE
            </router-link>
        </p>
        <p>
            <router-link to="/aulas">
                EXPRESS
            </router-link>
        </p>
    </div>
</template>

<script lang="ts">
export default {
    name: "Categorias"
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    background-color: #01080E;
    padding: 10px;
    color: white;
    font-weight: 400;
}

.container a {
    padding: 10px;
    cursor: pointer;
    font-weight: 800;
    font-family: 'Roboto', sans-serif;
    color: rgb(175, 175, 175);
}

.container a:hover {
    color: aqua;
}
</style>
