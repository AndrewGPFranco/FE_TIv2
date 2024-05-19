import axios from "axios";
import { defineStore } from "pinia";
import router from "@/router";
import { URL_BASE } from "@/utils/utils";

export const useAuthStore = defineStore("users", {
  state: () => ({
    isAuthenticated: false,
    isAdmin: false,
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
            const email = response.data.login;
            localStorage.setItem("Token", Token);
            localStorage.setItem("email", email);
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
          URL_BASE + `login/user/admin?login=${email}`,
          { headers }
        );
        this.isAdmin = response.data.admin;
        localStorage.setItem("admin", this.isAdmin);
        if(this.isAdmin === true) {
          return true;
        }
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    }
  },
});
