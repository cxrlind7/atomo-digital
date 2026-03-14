import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProyectosView from "../views/ProyectosView.vue";
import ServiciosView from "../views/ServiciosView.vue";
import NosotrosView from "../views/NosotrosView.vue";
import ContactoView from "../views/ContactoView.vue";
import CotizaView from "../views/CotizaView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/proyectos",
    name: "proyectos",
    component: ProyectosView,
  },
  {
    path: "/servicios",
    name: "servicios",
    component: ServiciosView,
  },
  {
    path: "/nosotros",
    name: "nosotros",
    component: NosotrosView,
  },
  {
    path: "/contacto",
    name: "contacto",
    component: ContactoView,
  },
  {
    path: "/cotiza",
    name: "cotiza",
    component: CotizaView,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
