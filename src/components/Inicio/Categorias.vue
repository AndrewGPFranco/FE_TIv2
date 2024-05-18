<template>
    <div class="container">
        <p>
            <router-link to="/aulas/vue">
                VUE
            </router-link>
        </p>
        <p>
            <router-link to="/aulas/java">
                JAVA
            </router-link>
        </p>
        <p>
            <router-link to="/aulas/typescript">
                TYPESCRIPT
            </router-link>
        </p>
        <p>
            <router-link to="/aulas/sql">
                SQL
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
