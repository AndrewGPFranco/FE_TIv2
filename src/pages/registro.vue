<template>
    <header>
        <Navbar />
    </header>
    <main>
        <div class="containerTitle">
          <h1 v-if="sucess" class="sucess">Conta cadastrada com sucesso...</h1>
          <h1 v-if="error" class="error">Erro ao cadastrar conta...</h1>
        </div>
        <div class="container">
            <div class="heading">
                Crie uma conta
            </div>
            <form class="form" @submit.prevent="criarConta">
              <input required="true" class="input" type="text" name="nomeCompleto" id="nomeCompleto" placeholder="Nome completo" v-model="nomeCompleto">
              <select class="select input" name="genero" v-model="genero" required>
                <option value="MASCULINO">MASCULINO</option>
                <option value="FEMININO" selected>FEMININO</option>
              </select>
              <input required="true" class="input" type="tel" name="telefone" id="telefone" placeholder="Telefone" v-model="telefone">
              <input required="true" class="input" type="date" name="dataNascimento" id="dataNascimento" placeholder="Senha" v-model="dataNascimento">
              <input required="true" class="input" type="email" name="login" id="login" placeholder="E-mail" v-model="login">
              <input required="true" class="input" type="password" name="senha" id="senha" placeholder="Senha" v-model="senha">
              <input class="login-button" type="submit" value="Criar">
            </form>
        </div>
    </main>
    <footer>
        <Rodape />
    </footer>
</template>

<script lang="ts">
import Navbar from "@/components/Global/Navbar.vue";
import Rodape from "@/components/Global/Rodape.vue";
import { ref } from "vue";
import { api } from "@/config/instanceAxios";
import { URL_BASE } from "@/utils/utils.ts"
import { useRouter } from "vue-router";

export default {
    setup() {
        const login = ref("");
        const senha = ref("");
        const nomeCompleto = ref("");
        const dataNascimento = ref("");
        const genero = ref("MASCULINO");
        const telefone = ref("");
        const error = ref(false);
        const sucess = ref(false);
        const router = useRouter();

        const criarConta = () => {
            const user = {
                login: login.value,
                senha: senha.value,
                nomeCompleto: nomeCompleto.value,
                dataNascimento: dataNascimento.value,
                genero: genero.value,
                telefone: telefone.value,
                admin: false,
                nivel: 0
            }

            api.post(URL_BASE + "user/register", user)
              .then(() => {
                sucess.value = true;
                setTimeout(() => {
                  router.push('/login');
                }, 5000);
              })
              .catch(() => {
                error.value = true;
              })
        }

        return {
            login,
            senha,
            nomeCompleto,
            dataNascimento,
            genero,
            telefone,
            error,
            sucess,
            criarConta
        };
    },
    components: {
      Navbar,
      Rodape
    }
}
</script>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 350px;
  background: #F8F9FD;
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
  border-radius: 40px;
  padding: 25px 35px;
  border: 5px solid rgb(255, 255, 255);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
  margin: 20px;
}

.heading {
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  color: rgb(16, 137, 211);
  margin-bottom: -20px;
}

.form {
  margin-top: 20px;
}

.form .input {
  width: 100%;
  background: white;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  margin-top: 15px;
  box-shadow: #cff0ff 0px 10px 10px -5px;
  border-inline: 2px solid transparent;
}

.form .input::-moz-placeholder {
  color: rgb(170, 170, 170);
}

.form .input::placeholder {
  color: rgb(170, 170, 170);
}

.form .input:focus {
  outline: none;
  border-inline: 2px solid #12B1D1;
}

.form .login-button {
  display: block;
  width: 100%;
  font-weight: bold;
  background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
  color: white;
  padding-block: 15px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
  border: none;
  transition: all 0.2s ease-in-out;
}

.form .login-button:hover {
  transform: scale(1.03);
  cursor: pointer;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
}

.form .login-button:active {
  transform: scale(0.95);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
}

.social-account-container {
  margin-top: 25px;
}

.social-account-container .title {
  display: block;
  text-align: center;
  font-size: 10px;
  color: rgb(170, 170, 170);
}

.social-account-container .social-accounts {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 5px;
}

.social-account-container .social-accounts .social-button {
  background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
  border: 5px solid white;
  padding: 5px;
  border-radius: 50%;
  width: 40px;
  aspect-ratio: 1;
  display: grid;
  place-content: center;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
  transition: all 0.2s ease-in-out;
}

.social-account-container .social-accounts .social-button .svg {
  fill: white;
  margin: auto;
}

.social-account-container .social-accounts .social-button:hover {
  transform: scale(1.2);
}

.social-account-container .social-accounts .social-button:active {
  transform: scale(0.9);
}

.agreement {
  display: block;
  text-align: center;
  margin-top: 15px;
}

.agreement a {
  text-decoration: none;
  color: #0099ff;
  font-size: 9px;
}

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

.containerTitle {
  width: 100vw;
  text-align: center;
  padding: 20px;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
}

</style>