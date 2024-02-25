<template>
    <div class="container">
        <p>HTML</p>
        <p>CSS</p>
        <p>VUE</p>
        <p>NUXT</p>
        <p>REACT</p>
        <p>JAVA</p>
        <p>SPRING</p>
        <p>PHP</p>
        <p>LARAVEL</p>
        <p>NODE</p>
        <p>EXPRESS</p>
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

.container p {
    padding: 10px;
    cursor: pointer;
}

.container p:hover {
    background-color: rgb(85, 85, 85);
    border-radius: 10px;
}
</style>