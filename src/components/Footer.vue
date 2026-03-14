<template>
  <footer class="footer">
    <div class="footer-container">

      <div class="footer-col">
        <router-link to="/" class="logo">
          <div class="logo-icon">
            <span></span>
          </div>
          <span class="logo-text">Átomo Digital</span>
        </router-link>
        <p class="footer-tagline">Tu visión, nuestra tecnología.</p>
        <p class="footer-copy">© 2026 Átomo Digital. Todos los derechos reservados.</p>
      </div>

      <div class="footer-col footer-links">
        <h4>Páginas</h4>
        <nav class="footer-nav">
          <router-link to="/">Inicio</router-link>
          <router-link to="/servicios">Servicios</router-link>
          <router-link to="/proyectos">Proyectos</router-link>
          <router-link to="/nosotros">Nosotros</router-link>
          <router-link to="/contacto">Contacto</router-link>
        </nav>
      </div>

      <div class="footer-col">
        <h4>Contacto</h4>
        <div class="footer-contact-items">
          <a href="mailto:olizeth527@gmail.com" class="footer-contact-link">
            <i class="bi bi-envelope-fill"></i>
            olizeth527@gmail.com
          </a>
          <a href="https://wa.me/526181553344?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios."
            target="_blank" rel="noopener noreferrer" class="footer-contact-link whatsapp-link">
            <i class="bi bi-whatsapp"></i>
            +52 618 155 3344
          </a>
        </div>
        <!-- <div class="footer-socials">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <i class="bi bi-twitter-x"></i>
          </a>
        </div> -->
      </div>
    </div>
  </footer>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const navbar = document.querySelector('.navbar-header'); // Asegúrate que coincida con la clase del navbar
  const navbarHeight = navbar ? navbar.offsetHeight : 80;

  const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
  window.scrollTo({ top: y, behavior: 'smooth' });
};
</script>

<style scoped>
/* --- ESTILOS ACTUALIZADOS --- */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css');

.footer {
  background-color: #ffffff;
  /* Fondo blanco como el navbar */
  color: #333;
  /* Texto oscuro */
  padding: 3rem 2rem;
  font-family: 'Poppins', sans-serif;
  border-top: 1px solid #e7e7e7;
  /* Línea sutil de separación */
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.03);
  /* Sombra superior sutil */
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-col {
  flex: 1;
  min-width: 220px;
}

.footer-col h4 {
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000;
}

.footer-tagline {
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: #555;
  font-style: italic;
}

.footer-copy {
  margin-top: 0.5rem;
  font-size: 0.82rem;
  color: #999;
}

.footer-contact-items {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.footer-contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-contact-link i {
  font-size: 1rem;
  color: #aa4ce3;
}

.footer-contact-link:hover {
  color: #aa4ce3;
}

.footer-contact-link.whatsapp-link i {
  color: #25D366;
}

.footer-contact-link.whatsapp-link:hover {
  color: #25D366;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.footer-nav a {
  color: #555;
  text-decoration: none;
  position: relative;
  padding-bottom: 0px;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: #000;
}

/* Efecto de línea animada al pasar el cursor (igual que el navbar) */
.footer-nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background: linear-gradient(to right, #ff7043, #aa4ce3, #4a90e2);
  transition: width 0.3s ease;
}

.footer-nav a:hover::after {
  width: 30%;
}

.footer-socials {
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
}

.footer-socials a {
  color: #333;
  font-size: 1.5rem;
  transition: color 0.3s, transform 0.3s;
}

.footer-socials a:hover {
  color: #aa4ce3;
  /* Color púrpura del degradado */
  transform: translateY(-3px);
}

p {
  color: #555;
  line-height: 1.6;
}

/* --- CSS DEL LOGO ANIMADO (COPIADO DEL NAVBAR) --- */
@keyframes rotate-gradient {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes move-gradient {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
}

.logo-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  overflow: hidden;
}

.logo-icon::after {
  content: '';
  position: absolute;
  width: 150%;
  height: 150%;
  background: conic-gradient(from 150deg, #ff7043, #aa4ce3, #4a90e2, #50E3C2, #ff7043);
  animation: rotate-gradient 6s linear infinite;
}

.logo-icon::before {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  background: white;
  border-radius: 50%;
  z-index: 1;
}

.logo-icon span {
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(145deg, #ff7043 20%, #4a90e2 80%);
  background-size: 200% 200%;
  animation: move-gradient 4s ease infinite;
}

.logo-icon span::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
}
</style>