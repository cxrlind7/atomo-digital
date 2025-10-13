<template>
  <header class="navbar-header">
    <nav class="navbar-container">
      <a href="/" class="logo">
        <div class="logo-icon">
          <span></span>
        </div>
        <span class="logo-text">Átomo Digital</span>
      </a>

      <div class="nav-menu" :class="{ 'is-active': isMenuOpen }">
        <ul class="nav-links">
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.path" @click="closeMenu">{{ link.name }}</a>
          </li>
        </ul>

        <a href="/cotiza" class="cta-button" @click="closeMenu">
          Cotiza tu Proyecto
        </a>
      </div>

      <button class="hamburger" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }" aria-label="Toggle menu">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>

    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

// Define los enlaces de navegación en un array para que sea fácil de mantener
const navLinks = ref([
  { name: 'Servicios', path: '/servicios' },
  { name: 'Proyectos', path: '/proyectos' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Contacto', path: '/contacto' },
]);

// Lógica para abrir/cerrar el menú
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
/* Importa una fuente similar a la del diseño (opcional, pero recomendado) */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

/* Contenedor principal del header */
.navbar-header {
  position: fixed; /* O 'sticky' si prefieres */
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 1rem 2rem;
  z-index: 1000;
  display: flex;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
}

/* Contenedor interno para centrar y alinear los elementos */
.navbar-container {
  width: 100%;
  max-width: 1200px; /* Ancho máximo para el contenido */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.nav-menu {
  display: flex;
  align-items: center;
  gap: 2.5rem; /* Espacio entre la lista de enlaces y el botón CTA */
}
/* NUEVO: Definición de la animación para el anillo exterior */
@keyframes rotate-gradient {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* NUEVO: Definición de la animación para el círculo interior */
@keyframes move-gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.logo {
  display: flex;         /* ¡La magia está aquí! Activa Flexbox */
  align-items: center;   /* Centra verticalmente el ícono y el texto */
  gap: 12px;             /* Añade un espacio de 12px entre el ícono y el texto */
  text-decoration: none; /* Quita el subrayado del enlace */
}
/* Contenedor principal del logo (Anillo Exterior) */
.logo-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Se envuelve el degradado en un pseudo-elemento para poder rotarlo */
  background: white; /* El fondo base ahora es blanco */
  overflow: hidden; /* Oculta lo que se salga del círculo */
}

/* Pseudo-elemento que contiene el degradado giratorio */
.logo-icon::after {
  content: '';
  position: absolute;
  width: 150%; /* Más grande para evitar bordes al rotar */
  height: 150%;
  background: conic-gradient(
    from 150deg,
    #ff7043,
    #aa4ce3,
    #4a90e2,
    #50E3C2,
    #ff7043
  );
  
  /* Aplicación de la animación de rotación */
  animation: rotate-gradient 6s linear infinite;
}


/* Espacio en blanco entre los dos anillos */
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

/* El <span> ahora es el segundo anillo de color */
.logo-icon span {
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  z-index: 2; /* Encima del espacio blanco */
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    145deg,
    #ff7043 20%,
    #4a90e2 80%
  );
  
  /* Se hace el fondo más grande para poder moverlo */
  background-size: 200% 200%;
  
  /* Aplicación de la animación de movimiento */
  animation: move-gradient 4s ease infinite;
}

/* El círculo blanco interior, creado desde el span */
.logo-icon span::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
}


.logo-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
}

/* Estilos de los enlaces de navegación */
.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2.5rem; /* Espacio entre enlaces */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-links a {
  text-decoration: none;
  color: #555;
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 5px;
  position: relative;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #000;
}

/* Línea sutil al pasar el cursor (opcional) */
.nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(to right, #e74c3c, #8e44ad, #3498db);
    transition: width 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%;
}

/* NUEVO: Definición de la animación para mover el degradado */
@keyframes move-gradient-button {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Estilos del botón de Llamada a la Acción (CTA) */
.cta-button {
  padding: 0.75rem 1.75rem;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  /* El mismo degradado */
  background: linear-gradient(
    90deg,
    #ff7043 0%,
    #f2a65a 30%,
    #aa4ce3 65%,
    #4a90e2 100%
  );

  /* NUEVO: Hacemos el fondo más grande que el botón */
  background-size: 200% auto;

  /* NUEVO: Aplicamos la animación */
  animation: move-gradient-button 4s ease infinite;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(170, 76, 227, 0.4);
}


.hamburger {
  display: none; /* Oculto por defecto en escritorio */
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  z-index: 1001; /* Debe estar por encima del menú desplegable */
}

.hamburger .line {
  display: block;
  width: 28px;
  height: 3px;
  background-color: #333;
  margin: 6px 0;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
    background: linear-gradient(
    90deg,
    #ff7043 0%,
    #f2a65a 30%,
    #aa4ce3 65%,
    #4a90e2 100%
  );
}

/* Animación del ícono de hamburguesa a una 'X' cuando está activo */
.hamburger.is-active .line:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
}
.hamburger.is-active .line:nth-child(2) {
  opacity: 0;
}
.hamburger.is-active .line:nth-child(3) {
  transform: translateY(-11px) rotate(-45deg);
}


@media (max-width: 992px) {
  
  /* 1. Mostramos el botón de hamburguesa */
  .hamburger {
    display: block;
  }

  /* 2. Preparamos el menú para que sea un panel desplegable */
  .nav-menu {
    position: fixed;
    top: 0;
    left: -100%; /* Empieza fuera de la pantalla */
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.50); /* Fondo blanco con ligera transparencia */
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: left 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    
  }

  /* 3. Cuando el menú está activo, lo traemos a la pantalla */
  .nav-menu.is-active {
    left: 0;
  }

  /* 4. Ajustamos los estilos de los enlaces para el menú vertical */
  .nav-links {
    flex-direction: column;
    text-align: center;
    gap: 2rem; /* Aumentamos el espacio vertical */
        position: static; 
    /* 2. Reinicia la transformación del centrado */
    transform: none; 
  }

  .nav-links a {
    font-size: 1.5rem; /* Hacemos la fuente más grande para que sea fácil de tocar */
    font-weight: 600;
  }
  
  /* Ocultamos la línea animada del hover en móvil */
  .nav-links a::after {
    display: none;
  }

  /* 5. Posicionamos el botón de CTA debajo de los enlaces */
  .cta-button {
    margin-top: 2.5rem;
    padding: 1rem 2.5rem;
    font-size: 1.2rem;
  }
}
</style>