import axios from "axios";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    admin: false,
    isAdminFetched: false,
    token: localStorage.getItem("Token") || "",
    email: localStorage.getItem("email") || "",
  }),
  getters: {
    getIsAdmin: (state: any) => state.admin,
    getToken: (state) => state.token,
    getEmail: (state) => state.email,
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setEmail(email: string) {
      this.email = email;
    },
    setAdmin(admin: boolean) {
      this.admin = admin;
    },
    setIsAdminFetched(isAdminFetched: boolean) {
      this.isAdminFetched = isAdminFetched;
    },
    async isAdmin() {
      if (!this.isAdminFetched) {
        const token = localStorage.getItem("Token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        try {
          const response = await axios.get(
            `http://localhost:8080/api/login/user/admin?login=${this.email}`,
            { headers }
          );
          this.admin = response.data.admin;
          this.isAdminFetched = true;
        } catch (error) {
          this.isAdminFetched = false;
          console.error("Erro ao obter dados:", error);
        }
      }
    }
  },
});
