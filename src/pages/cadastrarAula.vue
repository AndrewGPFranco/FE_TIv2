<template>
    <section>
        <h1>Cadastre uma Aula:</h1>
        <form @submit.prevent="submit">
            <div>
                <label for="titulo">Título</label>
                <input type="text" name="titulo" v-model="titulo" required autocomplete="off"
                    placeholder="Digite o título da aula...">
            </div>
            <div>
                <label for="descricao">Descrição</label>
                <input type="text" name="descricao" v-model="descricao" required autocomplete="off"
                    placeholder="Digite a descrição da aula...">
            </div>
            <div>
                <label for="cadastro">Data de Cadastro</label>
                <input type="date" name="cadastro" v-model="cadastro" required>
            </div>
            <div>
                <label for="duracao">Duração</label>
                <input type="number" name="duracao" v-model="duracao" required autocomplete="off"
                    placeholder="Digite a duração da aula...">
            </div>
            <div>
                <label for="status">Status</label>
                <select name="status" v-model="status" required>
                    <option value="true">Ativo</option>
                    <option value="false">Inativo</option>
                </select>
            </div>
            <div>
                <label for="imagem">Imagem</label>
                <input type="text" name="imagem" v-model="imagem" required autocomplete="off"
                    placeholder="Digite o link da imagem da aula...">
            </div>
            <div>
                <label for="url">URL</label>
                <input type="text" name="url" v-model="url" required autocomplete="off"
                    placeholder="Digite o link da aula...">
            </div>
            <div>
                <label for="tech">Tecnologia</label>
                <input type="text" name="tech" v-model="tech" required autocomplete="off"
                    placeholder="Digite a tecnologia da aula...">
            </div>
            <div>
                <label for="categoria">Categoria</label>
                <input type="text" name="categoria" v-model="categoria" required autocomplete="off"
                    placeholder="Digite a categoria da aula...">
            </div>
            <div>
                <button type="submit">Cadastrar</button>
            </div>
        </form>
    </section>
</template>

<script>
import axios from 'axios';

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
            categoria: ""
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
                console.log("Preencha todos os campos antes de enviar o formulário.");
                return;
            }

            const token = localStorage.getItem("Token");
            const headers = {
                'Authorization': `Bearer ${token}`,
            };

            axios.post("http://localhost:8080/api/cadastro/aula", dados,  { headers })
                .then((response) => {
                    console.log("Aula cadastrada com sucesso!", response);
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
        }
    }
}
</script>
