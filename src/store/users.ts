import axios from "axios";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    admin: false,
    isAdminFetched: false,
  }),
  getters: {
    getIsAdmin: (state: any) => state.admin,
  },
  actions: {
    async isAdmin() {
      if (!this.isAdminFetched) {
        const token = localStorage.getItem("Token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        try {
          const response = await axios.get(
            "http://localhost:8080/api/login/user/admin?login=andrew@gpf.com",
            { headers }
          );
          this.admin = response.data.admin;
          this.isAdminFetched = true;
        } catch (error) {
          console.error("Erro ao obter dados:", error);
        }
      }
    },
  },
});
