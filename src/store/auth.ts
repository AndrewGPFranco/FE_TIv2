import axios from "axios";
import { defineStore } from "pinia";
import router from "@/router";
import { URL_BASE } from "@/utils/utils";

export const useAuthStore = defineStore("users", {
  state: () => ({
    isAuthenticated: false,
    isAdmin: false,
    login: "",
    nomeCompleto: "",
    nivel: ""
  }),
  getters: {
    getIsAuthenticated(state: any) {
      return state.isAuthenticated;
    },
    getIsAdmin(state: any) {
      return state.isAdmin;
    }
  },
  actions: {
    async auth(login: string, senha: string) {
      const dados = {
        login: login,
        senha: senha,
      };
      await axios
        .post(URL_BASE + "login", dados)
        .then((response) => {
            const Token = response.data.token;
            localStorage.setItem("Token", Token);
            this.isAuthenticated = true;
            this.administrador(login);
            router.push({ name: "dashboard" });
        })
        .catch((error) => {
            this.isAuthenticated = false;
            console.log(error);
        });
    },
    async administrador(email: string) {
      const token = localStorage.getItem("Token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      try {
        const response = await axios.get(
          URL_BASE + `login/user?login=${email}`,
          { headers }
        );
        this.isAdmin = response.data.admin;
        this.login = response.data.login;
        this.nomeCompleto = response.data.nomeCompleto;
        this.nivel = response.data.nivel;
        localStorage.setItem("admin", this.isAdmin);
        localStorage.setItem("nome", this.nomeCompleto);
        localStorage.setItem("login", this.login);
        localStorage.setItem("nivel", this.nivel);
        if(this.isAdmin === true) {
          return true;
        }
      } catch (error) {
        console.error("Erro ao obter dados de administrador");
      }
    }
  },
});
