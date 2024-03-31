<template>
    <div class="container">
        <p>
            <router-link to="/aulas/HTML">
                HTML
            </router-link>
        </p>
        <p>
            <router-link to="/aulas/CSS">
                CSS
            </router-link>
        </p>
        <p>
            <router-link to="/aulas/Vue">
                VUE
            </router-link>
        </p>
        <p>
            <router-link to="/aulas/NUXT">
                NUXT
            </router-link>
        </p>
        <p>
            <router-link to="/aulas/REACT">
                REACT
            </router-link>
        </p>
        <p>
            <router-link to="/aulas/JAVA">
                JAVA
            </router-link>
        </p>
        <p>
            <router-link to="/aulas/SPRING">
                SPRING
            </router-link>
        </p>
        <p>
            <router-link to="/aulas/PHP">
                PHP
            </router-link>
        </p>
        <p>
            <router-link to="/aulas/LARAVEL">
                LARAVEL
            </router-link>
        </p>
        <p>
            <router-link to="/aulas/NODE">
                NODE
            </router-link>
        </p>
        <p>
            <router-link to="/aulas/EXPRESS">
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
