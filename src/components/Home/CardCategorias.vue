<template>
    <div class='card'>
        <div class="icone"><i :class=iconeCerto style="font-size: 4rem; color: #0097B2"></i></div>
        <div class="titulo">
            <h1>
                {{ titulo }}
            </h1>
        </div>
        <div class="sinopse">
            <p>
                {{ sinopse }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            iconeCerto: 'pi ' + this.icone
        }
    },
    props: {
        'titulo': {
            required: true,
            type: String
        },
        'icone': {
            required: true,
            type: String
        },
        'sinopse': {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    background-color: #161616;
    width: 30%;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 5px;
}

.icone {
    height: 80px;
    display: flex;
    align-items: center;
}

.titulo {
    display: flex;
    align-items: center;
}

.sinopse {
    display: flex;
    align-items: center;
    height: 90px;
    padding: 15px;
}

.card h1 {
    color: #0097B2;
}

.card p {
    color: white;
}
</style>
