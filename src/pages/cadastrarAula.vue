<template>
    <section>
        <Navbar />
        <main class="container">
            <div class="containerTitle">
                <span class="title">Cadastre uma Aula Agora</span>
            </div>
            <div class="containerCardForm">
                <img class="imageContainer" src="../assets/image.jpg" alt="ImagemTeste">
                <form @submit.prevent="submit" class="form">
                    <div class="formContainer">
                        <div>
                            <div>
                                <label class="label" for="titulo">Título</label>
                                <input class="input" type="text" name="titulo" v-model="titulo" required
                                    autocomplete="off" placeholder="Digite o título da aula...">
                            </div>
                            <div>
                                <label class="label" for="descricao">Descrição</label>
                                <input class="input" type="text" name="descricao" v-model="descricao" required
                                    autocomplete="off" placeholder="Digite a descrição da aula...">
                            </div>
                            <div>
                                <label class="label" for="cadastro">Data de Cadastro</label>
                                <input class="input" type="date" name="cadastro" v-model="cadastro" required>
                            </div>
                            <div>
                                <label class="label" for="duracao">Duração</label>
                                <input class="input" type="number" name="duracao" v-model="duracao" required
                                    autocomplete="off" placeholder="Digite a duração da aula...">
                            </div>
                        </div>
                        <div>
                            <div>
                                <label class="label" for="status">Status</label>
                                <select class="select" name="status" v-model="status" required>
                                    <option value="true">Ativo</option>
                                    <option value="false">Inativo</option>
                                </select>
                            </div>
                            <div>
                                <label class="label" for="imagem">Imagem</label>
                                <input class="input" type="text" name="imagem" v-model="imagem" required
                                    autocomplete="off" placeholder="Digite o link da imagem da aula...">
                            </div>
                            <div>
                                <label class="label" for="url">URL</label>
                                <input class="input" type="text" name="url" v-model="url" required autocomplete="off"
                                    placeholder="Digite o link da aula...">
                            </div>
                            <div>
                                <label class="label" for="tech">Tecnologia</label>
                                <input class="input" type="text" name="tech" v-model="tech" required autocomplete="off"
                                    placeholder="Digite a tecnologia da aula...">
                            </div>
                        </div>
                    </div>
                    <div class="containerButton">
                        <div>
                            <label class="label" id="labelCategoria" for="categoria">Categoria</label>
                            <input class="input" type="text" name="categoria" v-model="categoria" required
                                autocomplete="off" placeholder="Digite a categoria da aula...">
                        </div>
                        <div>
                            <button class="submit" type="submit">Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
        <footer>
            <Rodape />
        </footer>
    </section>
</template>

<script>
import axios from 'axios';
import Navbar from "@/components/Global/Navbar.vue"
import Rodape from "@/components/Global/Rodape.vue"

export default {
    name: "cadastrarAula",
    data() {
        return {
            titulo: "",
            descricao: "",
            cadastro: "",
            duracao: "",
            status: "",
            imagem: "",
            url: "",
            tech: "",
            categoria: "",
            status: 'true',
        }
    },
    methods: {
        submit() {
            const dados = {
                titulo: this.titulo,
                descricao: this.descricao,
                cadastro: this.cadastro,
                duracao: this.duracao,
                status: this.status,
                imagem: this.imagem,
                url: this.url,
                tech: this.tech,
                categoria: this.categoria
            }

            if (this.titulo === '' || this.descricao === '' || this.cadastro === '' || this.duracao === '' || this.status === '' || this.imagem === '' || this.url === '' || this.tech === '' || this.categoria === '') {
                return;
            }

            const token = localStorage.getItem("Token");
            const headers = {
                'Authorization': `Bearer ${token}`,
            };

            axios.post("http://localhost:8080/api/cadastro/aula", dados, { headers })
                .then((response) => {
                    this.titulo = '';
                    this.descricao = '';
                    this.cadastro = '';
                    this.duracao = '';
                    this.status = '';
                    this.imagem = '';
                    this.url = '';
                    this.tech = '';
                    this.categoria = '';
                })
                .catch((error) => {
                    console.log("Ocorreu um erro", error)
                })
        },
    },
    components: {
        Navbar,
        Rodape
    }
}
</script>

<style scoped>
.form {
    max-width: 650px;
    width: 100%;
    background-color: #f9f9f9;
    padding: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-bottom: 40px;
}

.title {
    font-size: 2rem;
    color: #ffffff;
    text-align: center;
}

.label {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #555;
}

.input,
.select {
    padding: 12px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    outline: none;
    transition: border-color 0.3s ease;
    font-size: 1rem;
    margin-top: 6px;
}


.input:focus {
    background-color: #fff;
    box-shadow: 0 0 0 2px #cbd5e0;
}

.input:valid {
    border: 1px solid green;
}

.input:invalid {
    border: 1px solid rgba(14, 14, 14, 0.205);
}

.submit {
    background-color: #007bff;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
}

.submit:hover {
    background-color: #0056b3;
}

.input:focus,
.select:focus {
    border-color: #007bff;
}

.container {
    padding: 30px;
    background-color: #0B0B0B;
    height: 100vh;
}

.containerTitle {
    text-align: center;
    padding: 20px;
}

.formContainer {
    display: flex;
    gap: 20px;
}

.containerButton {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.containerCardForm {
    display: flex;
    justify-content: center;
}

.imageContainer {
    width: 500px;
    height: 544.4px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

footer {
    position: fixed;
    bottom: 0;
    width: 100vw;
}
</style>