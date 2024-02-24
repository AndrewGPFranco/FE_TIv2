import { createRouter, createWebHistory } from "vue-router";
import aulasVue from "../pages/aulas.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/aulas",
      name: "aulas",
      component: aulasVue,
      meta: { requiresAuth: true, title: "Gpf.ev - Aulas" },
    }
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "notFound",
    //   component: NotFound,
    //   meta: { requiresAuth: true },
    // },
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