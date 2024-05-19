<template>
    <section>
        <Navbar />
        <main class="container">
            <div class="containerTitle">
                <span class="title">Cadastre uma Aula Agora</span>
                <h1 v-if="sucess" class="sucess">Aula cadastrada com sucesso..</h1>
                <h1 v-if="error" class="error">Erro ao cadastrar aula..</h1>
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
                                <input class="input" min="1" type="number" name="duracao" v-model="duracao" required
                                    autocomplete="off" placeholder="Digite a duração da aula...">
                            </div>
                        </div>
                        <div>
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
                                <select class="select" name="tech" v-model="tech" required>
                                    <option value="JAVA">JAVA</option>
                                    <option value="VUE">VUE</option>
                                    <option value="TYPESCRIPT">TYPESCRIPT</option>
                                    <option value="SQL">SQL</option>
                                    <option value="DIVERSOS">DIVERSOS</option>
                                </select>
                            </div>
                            <div>
                                <label class="label" id="labelCategoria" for="categoria">Categoria</label>
                                <select class="select" name="categoria" v-model="categoria" required>
                                    <option value="FRONTEND">FRONTEND</option>
                                    <option value="BACKEND" selected>BACKEND</option>
                                    <option value="FULLSTACK">FULLSTACK</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="containerButton">
                        
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
import { URL_BASE } from "@/utils/utils";

export default {
    name: "cadastrarAula",
    data() {
        return {
            titulo: "",
            descricao: "",
            cadastro: "",
            duracao: "",
            imagem: "",
            url: "",
            tech: 'JAVA',
            categoria: 'BACKEND',
            sucess: false,
            error: false
        }
    },
    methods: {
        submit() {
            const dados = {
                titulo: this.titulo,
                descricao: this.descricao,
                cadastro: this.cadastro,
                duracao: this.duracao,
                imagem: this.imagem,
                url: this.url,
                tech: this.tech,
                categoria: this.categoria
            }

            if (this.titulo === '' || this.descricao === '' || this.cadastro === '' || this.duracao === '' || this.imagem === '' || this.url === '' || this.tech === '' || this.categoria === '') {
                return;
            }

            const token = localStorage.getItem("Token");
            const headers = {
                'Authorization': `Bearer ${token}`,
            };

            axios.post(URL_BASE + "cadastro/aula", dados, { headers })
                .then((response) => {
                    this.titulo = '';
                    this.descricao = '';
                    this.cadastro = '';
                    this.duracao = '';
                    this.imagem = '';
                    this.url = '';
                    this.tech = 'JAVA';
                    this.categoria = 'BACKEND';
                    this.result(true)
                })
                .catch((error) => {
                    this.result(false)
                    console.log("Ocorreu um erro", error)
                })
        },
        result(value) {
            if (value) {
                this.sucess = true;
                setTimeout(() => {
                    this.sucess = false;
                }, 5000);
            } else {
                this.error = true;
                setTimeout(() => {
                    this.error = false;           
                }, 5000);
            }
        }
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
    background-color: #f9f9f9;
    padding: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-bottom: 40px;
    height: 500px;
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
    padding: 10px;
    background-color: #0B0B0B;
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
    height: 500px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.sucess {
    background-color: green;
    color: white;
    margin: auto;
    max-width: 60%;
    padding: 12px 20px;
    margin-top: 15px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
}

.error {
    background-color: red;
    color: white;
    margin: auto;
    max-width: 60%;
    padding: 12px 20px;
    margin-top: 15px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
}
</style>