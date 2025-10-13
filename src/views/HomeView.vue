<template>
    <NavBar :isHomePage="true" />
    <main class="home-content">

    <section id="inicio" class="hero-section">
      <div class="hero-container">
        <div class="hero-text">
          <h1>La pieza fundamental para tu proyecto digital.</h1>
          <p>Tu visión, nuestra tecnología.</p>
        </div>
        <div class="hero-graphic">
          <img src="../../public/sphere-removebg-preview.png" alt="Esfera tecnológica abstracta">
        </div>
      </div>
    </section>

    <section id="servicios" class="hero-section">
      <div class="section-container">
        <h2>Nuestros Servicios</h2>
        <div class="services-grid">
          <div v-for="service in services" :key="service.title" class="service-card">
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="hero-section cta-section">
      <div class="section-container">
        <h2>Impulsa tu Presencia Digital</h2>
        <a href="/cotiza" class="cta-button">
          Cotiza tu Proyecto
        </a>
      </div>
    </section>

  </main>

    <Footer />
</template>


<script>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      services: [
        {
          icon: 'bi bi-rocket-takeoff-fill',
          title: 'Desarrollo Web',
          description: 'Soluciones digitales a medida.'
        },
        {
          icon: 'bi bi-bar-chart-fill',
          title: 'Marketing Digital',
          description: 'Estrategias para crecer.'
        },
        {
          icon: 'bi bi-brush-fill',
          title: 'Diseño gráfico',
          description: 'Identidad visual impactante.'
        },
        {
          icon: 'bi bi-cpu-fill',
          title: 'Consultoría Tecnológica',
          description: 'Innovación y optimización.'
        },
      ]
    };
}
};
</script>


<style scoped>
/* Importa la fuente y los íconos si no lo haces globalmente */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css');

.home-content {
  font-family: 'Poppins', sans-serif;
  background-color: #f8f9fa; /* Gris muy claro */
  padding-top: 80px; /* Espacio para el navbar fijo */
}

/* Contenedor general para centrar el contenido */
.section-container, .hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.section-container h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2rem;
}
/* --- 1. Estilos de la Sección HERO --- */
.hero-section {
  background-color: #f8f9fa;
  /* Patrón de puntos sutiles en el fondo */
  background-image: radial-gradient(#d7d7d7 1px, transparent 1px);
  background-size: 20px 20px;
  text-align: left;
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.hero-text h1 {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: #212529;
  max-width: 600px;
}

.hero-text p {
  font-size: 1.25rem;
  color: #6c757d;
  margin-top: 1rem;
}



/* Contenedor de la imagen */
.hero-graphic {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Añadimos un poco de espacio inferior para que la sombra no se corte */
  padding-bottom: 50px; 
}

/* Imagen de la esfera */
.hero-graphic img {
  width: 450px; 
  height: auto;
  animation: float 6s ease-in-out infinite;
  z-index: 2;
}

/* La sombra en el "suelo" */
.hero-graphic::after {
  content: '';
  position: absolute;
  /* CAMBIO: Desplaza la sombra mucho más abajo */
  bottom: 0px; 
  left: 50%;
  width: 60%; 
  height: 30px;
  background: rgba(45, 55, 72, .8); /* Hacemos la sombra más sutil */
  border-radius: 50%;
  filter: blur(20px); /* Aumentamos el desenfoque */
  transform: translateX(-50%);
  z-index: 1;
  
  /* La animación controla el tamaño y la opacidad */
  animation: float-shadow 6s ease-in-out infinite;
}

/* Animación para que la esfera flote */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-30px); } /* Aumentamos la distancia del flote */
  100% { transform: translateY(0px); }
}

/* CAMBIO CLAVE: Animación de la sombra actualizada */
@keyframes float-shadow {
  0% {
    /* Estado inicial: esfera abajo, sombra grande y oscura */
    transform: translateX(-50%) scale(1);
    opacity: 0.6;
  }
  50% {
    /* Mitad: esfera arriba, sombra pequeña y tenue */
    transform: translateX(-50%) scale(0.7);
    opacity: 0.3;
  }
  100% {
    /* Final: vuelve al estado inicial */
    transform: translateX(-50%) scale(1);
    opacity: 0.6;
  }
}


/* --- 2. Estilos de la Sección SERVICIOS --- */
.services-section {
  background-color: #ffffff;
  text-align: center;
}

.services-section h2 {
  font-size: 2.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 3rem;
  text-align: left; /* Como en la imagen */
}

.services-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  /* La propiedad 'grid-template-columns' se elimina porque no tiene efecto en un contenedor flex */
}

.service-card {
  /* Estilos visuales (sin cambios) */
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* --- CAMBIOS CLAVE --- */
  /* 1. Establece un ancho fijo y estricto para todas las tarjetas */
  width: 320px; /* Puedes ajustar este valor si lo necesitas */
  
  /* 2. Se eliminan 'flex-basis' y 'flex-grow' */
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(145deg, #ff70431a, #4a90e21a); /* Fondo sutil */
}

.service-icon::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  padding: 3px; /* Grosor del borde */
  background: conic-gradient(from 150deg, #ff7043, #aa4ce3, #4a90e2, #50E3C2, #ff7043);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.service-icon i {
  font-size: 2.5rem;
  /* Degradado para el ícono */
  background: linear-gradient(145deg, #ff7043, #4a90e2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.service-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.service-card p {
  color: #6c757d;
  line-height: 1.6;
}


/* --- 3. Estilos de la Sección CTA --- */
.cta-section {
  text-align: center;
  background-color: #f8f9fa;
}

.cta-section h2 {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
}

/* Reutilización de los estilos del botón */
@keyframes move-gradient-button { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }

.cta-button {
  padding: 0.85rem 2rem;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: linear-gradient(90deg, #ff7043, #f2a65a, #aa4ce3, #4a90e2);
  background-size: 200% auto;
  animation: move-gradient-button 4s ease infinite;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(170, 76, 227, 0.4);
}

</style>