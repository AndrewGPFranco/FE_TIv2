<template>
    <header>
        <Navbar />
    </header>
    <main>
        <div class="container">
            <div class="heading">
                Efetue o login
            </div>
            <form class="form" @submit.prevent="efetuarLogin">
                <input required="true" class="input" type="email" name="login" id="login" placeholder="E-mail" v-model="login">
                <input required="true" class="input" type="password" name="senha" id="senha" placeholder="Senha" v-model="senha">
                <span class="forgot-password"><a href="#">Esqueceu a senha?</a></span>
                <span class="forgot-password"><router-link to="/registro">Crie uma conta</router-link></span>
                <input class="login-button" type="submit" value="Entrar">
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
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

export default {
    setup() {
        const router = useRouter();
        const login = ref("");
        const senha = ref("");
        const authStore = useAuthStore();

        const efetuarLogin = async () => {
          await authStore.auth(login.value, senha.value);
        }

        return {
            login,
            senha,
            router,
            efetuarLogin
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
  justify-content: center;
  align-items: center;
  height: 100%;
}

.container {
  max-width: 350px;
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
  border-radius: 40px;
  padding: 25px 35px;
  border: 5px solid rgb(255, 255, 255);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
  margin: 60px;
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

.form .forgot-password {
  display: block;
  margin-top: 10px;
  margin-left: 10px;
}

.form .forgot-password a {
  font-size: 11px;
  color: #0099ff;
  text-decoration: none;
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

footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
}

</style>