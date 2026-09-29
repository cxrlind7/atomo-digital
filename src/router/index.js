import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// El resto de páginas se cargan bajo demanda para que la primera visita sea más ligera
const ProyectosView = () => import("../views/ProyectosView.vue");
const ServiciosView = () => import("../views/ServiciosView.vue");
const NosotrosView = () => import("../views/NosotrosView.vue");
const ContactoView = () => import("../views/ContactoView.vue");
const CotizaView = () => import("../views/CotizaView.vue");

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
