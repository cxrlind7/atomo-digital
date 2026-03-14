<template>
    <NavBar />
    <main class="page-content">

        <section class="page-hero">
            <div class="page-hero-container">
                <p class="page-label">Lo que hacemos</p>
                <h1>Servicios diseñados para <span class="gradient-text">tu éxito digital</span></h1>
                <p class="page-subtitle">Ofrecemos soluciones integrales para impulsar tu negocio en el mundo digital,
                    desde la estrategia hasta el resultado.</p>
            </div>
        </section>

        <section class="services-section">
            <div class="services-container">
                <div class="services-grid">
                    <div v-for="service in services" :key="service.title" class="service-card">
                        <div class="service-icon">
                            <i :class="service.icon"></i>
                        </div>
                        <h3>{{ service.title }}</h3>
                        <p>{{ service.description }}</p>
                        <ul class="service-features">
                            <li v-for="feature in service.features" :key="feature">
                                <i class="bi bi-check2-circle"></i>
                                {{ feature }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="process-section">
            <div class="process-container">
                <p class="page-label">Cómo trabajamos</p>
                <h2>Nuestro <span class="gradient-text">Proceso</span></h2>
                <div class="process-steps">
                    <div v-for="(step, index) in steps" :key="step.title" class="process-step">
                        <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div>
                        <h3>{{ step.title }}</h3>
                        <p>{{ step.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="cta-container">
                <h2>¿Listo para empezar?</h2>
                <p>Agenda una consulta gratuita y descubre cómo podemos ayudarte.</p>
                <router-link to="/cotiza" class="cta-button">Cotiza tu Proyecto</router-link>
            </div>
        </section>

    </main>
    <Footer />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'ServiciosView',
    components: { NavBar, Footer },
    data() {
        return {
            services: [
                {
                    icon: 'bi bi-rocket-takeoff-fill',
                    title: 'Desarrollo Web',
                    description: 'Construimos sitios y aplicaciones web a medida, rápidos, seguros y optimizados para convertir visitantes en clientes.',
                    features: ['Sitios corporativos y landing pages', 'Aplicaciones web a medida', 'E-commerce y tiendas en línea', 'Optimización de rendimiento (Core Web Vitals)']
                },
                {
                    icon: 'bi bi-bar-chart-fill',
                    title: 'Marketing Digital',
                    description: 'Estrategias inteligentes para posicionar tu marca, atraer tráfico cualificado y aumentar tus ventas.',
                    features: ['SEO y posicionamiento en buscadores', 'Publicidad en Google y Meta Ads', 'Email marketing y automatización', 'Analítica y reportes mensuales']
                },
                {
                    icon: 'bi bi-brush-fill',
                    title: 'Diseño Gráfico & UI/UX',
                    description: 'Creamos identidades visuales impactantes y experiencias de usuario intuitivas que enamoran a tu audiencia.',
                    features: ['Diseño de logotipo e identidad de marca', 'Diseño de interfaces (UI/UX)', 'Material gráfico para redes sociales', 'Diseño de presentaciones corporativas']
                },
                {
                    icon: 'bi bi-cpu-fill',
                    title: 'Consultoría Tecnológica',
                    description: 'Te asesoramos en la transformación digital de tu negocio, eligiendo las herramientas y procesos correctos.',
                    features: ['Auditoría tecnológica', 'Selección de herramientas y software', 'Automatización de procesos', 'Formación y capacitación de equipos']
                },
            ],
            steps: [
                { title: 'Descubrimiento', description: 'Escuchamos tus objetivos, analizamos tu mercado y definimos juntos la estrategia ideal para tu proyecto.' },
                { title: 'Diseño y Prototipo', description: 'Creamos mockups y prototipos interactivos para validar la experiencia antes de escribir una sola línea de código.' },
                { title: 'Desarrollo', description: 'Nuestro equipo construye tu solución con las tecnologías más actuales, asegurando calidad en cada etapa.' },
                { title: 'Lanzamiento y Soporte', description: 'Acompañamos el lanzamiento y ofrecemos soporte continuo para que tu proyecto siempre opere al máximo.' }
            ]
        };
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css');

.page-content {
    font-family: 'Poppins', sans-serif;
    background-color: #f8f9fa;
    padding-top: 80px;
}

.page-hero {
    background-color: #f8f9fa;
    background-image: radial-gradient(#d7d7d7 1px, transparent 1px);
    background-size: 20px 20px;
    padding: 5rem 2rem 4rem;
    text-align: center;
}

.page-hero-container {
    max-width: 750px;
    margin: 0 auto;
}

.page-label {
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    background: linear-gradient(90deg, #ff7043, #aa4ce3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
}

.page-hero h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #212529;
    line-height: 1.2;
    margin-bottom: 1rem;
}

.gradient-text {
    background: linear-gradient(90deg, #ff7043, #aa4ce3, #4a90e2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.page-subtitle {
    font-size: 1.1rem;
    color: #6c757d;
    line-height: 1.7;
}

/* Services Grid */
.services-section {
    padding: 4rem 2rem;
    background: #fff;
}

.services-container {
    max-width: 1200px;
    margin: 0 auto;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.service-card {
    background: #f8f9fa;
    padding: 2.5rem 2rem;
    border-radius: 16px;
    border: 1px solid #e9ecef;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
    border-color: #aa4ce330;
}

.service-icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(145deg, #ff70431a, #4a90e21a);
    margin-bottom: 1.5rem;
}

.service-icon::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 2px;
    background: conic-gradient(from 150deg, #ff7043, #aa4ce3, #4a90e2, #50E3C2, #ff7043);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
}

.service-icon i {
    font-size: 2rem;
    background: linear-gradient(145deg, #ff7043, #4a90e2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.service-card h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 0.75rem;
}

.service-card>p {
    color: #6c757d;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.service-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.service-features li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #555;
}

.service-features li i {
    color: #aa4ce3;
    font-size: 1rem;
    flex-shrink: 0;
}

/* Process */
.process-section {
    padding: 5rem 2rem;
    background-color: #f8f9fa;
    background-image: radial-gradient(#d7d7d7 1px, transparent 1px);
    background-size: 20px 20px;
    text-align: center;
}

.process-container {
    max-width: 1100px;
    margin: 0 auto;
}

.process-container h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 3rem;
}

.process-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
    text-align: left;
}

.process-step {
    background: #fff;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    position: relative;
}

.step-number {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1;
    background: linear-gradient(135deg, #ff7043, #aa4ce3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
}

.process-step h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 0.5rem;
}

.process-step p {
    color: #6c757d;
    line-height: 1.6;
    font-size: 0.95rem;
}

/* CTA */
.cta-section {
    padding: 5rem 2rem;
    background: #fff;
    text-align: center;
}

.cta-container {
    max-width: 600px;
    margin: 0 auto;
}

.cta-container h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 1rem;
}

.cta-container p {
    font-size: 1.1rem;
    color: #6c757d;
    margin-bottom: 2rem;
}

@keyframes move-gradient-button {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}

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

@media (max-width: 768px) {
    .page-hero h1 {
        font-size: 2.2rem;
    }

    .process-container h2 {
        font-size: 2rem;
    }
}
</style>
