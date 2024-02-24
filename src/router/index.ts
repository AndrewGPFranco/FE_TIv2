import { createRouter, createWebHistory } from "vue-router";
import aulasVue from "../pages/aulas.vue";
import homeVue from "../pages/home.vue";
import loginVue from "../pages/login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeVue,
      meta: { requiresAuth: false },
    },
    {
      path: "/login",
      name: "login",
      component: loginVue,
      meta: { requiresAuth: false },
    },
    {
      path: "/aulas",
      name: "aulas",
      component: aulasVue,
      meta: { requiresAuth: true },
    }
  ],
});

router.beforeEach((to, _from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;