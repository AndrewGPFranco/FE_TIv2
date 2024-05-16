import axios from "axios";
import { defineStore } from "pinia";
import router from "@/router";

export const useAuthStore = defineStore("users", {
  state: () => ({
    isAuthenticated: false,
    isAdmin: false
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
        .post("http://localhost:8080/api/login", dados)
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
          `http://localhost:8080/api/login/user/admin?login=${email}`,
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
