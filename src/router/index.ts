import { createRouter, createWebHistory } from "vue-router";
import aulasVue from "@/pages/aulas.vue";
import homeVue from "@/pages/home.vue";
import loginVue from "@/pages/login.vue";
import roadmapVue from "@/pages/roadmap.vue";
import cursosVue from "@/pages/cursos.vue";
import matriculaVue from "@/pages/matricula.vue";
import CadastrarAula from "@/pages/cadastrarAula.vue";

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
      path: "/matricula",
      name: "matricula",
      component: matriculaVue,
      meta: { requiresAuth: false },
    },
    {
      path: "/admin/cadastro/aula",
      name: "cadastrarAula",
      component: CadastrarAula,
      meta: { requiresAuth: false },
    }
  ],
});

router.beforeEach((to, _from, next) => {
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