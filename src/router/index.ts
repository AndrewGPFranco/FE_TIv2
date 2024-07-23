import { createRouter, createWebHistory } from "vue-router";
import aulasVue from "@/pages/aulas.vue";
import homeVue from "@/pages/home.vue";
import loginVue from "@/pages/login.vue";
import registroVue from "@/pages/registro.vue";
import roadmapVue from "@/pages/roadmap.vue";
import cursosVue from "@/pages/cursos.vue";
import CadastrarAula from "@/pages/cadastrarAula.vue";
import Aula from "@/pages/aula.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
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
      path: "/registro",
      name: "registrarUsuario",
      component: registroVue,
      meta: { requiresAuth: false },
    },
    {
      path: "/aulas/:tech",
      name: "aulas",
      component: aulasVue,
      meta: { requiresAuth: true },
    },
    {
      path: "/roadmap",
      name: "roadmap",
      component: roadmapVue,
      meta: { requiresAuth: true },
    },
    {
      path: "/cursos",
      name: "cursos",
      component: cursosVue,
      meta: { requiresAuth: true },
    },
    {
      path: "/admin/cadastro/aula",
      name: "cadastrarAula",
      component: CadastrarAula,
      meta: { requiresAuth: true },
    },
    {
      path: "/aula/:tech/:curso/:id",
      name: "visualizarAula",
      component: Aula,
      meta: { requiresAuth: true }
    }
  ],
});

router.beforeEach((to, _from, next) => {
  if (to.path === "/") {
    next("/dashboard");
  }
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem("Token");
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
