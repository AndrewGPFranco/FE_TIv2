<template>
    <header>
        <Navbar />
    </header>
    <div class="main">
        <Categorias />
        <AulaRenderizada />
    </div>
    <footer>
        <Rodape />
    </footer>
</template>

<script lang="ts">

import AulaRenderizada from '@/components/Aulas/AulaRenderizada.vue';

export default {
    name: "Aulas",
    components: { AulaRenderizada }
};
</script>