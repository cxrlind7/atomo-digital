<template>
    <NavBar />
    <main class="page-content">

        <section class="page-hero">
            <div class="page-hero-container">
                <p class="page-label">Quiénes Somos</p>
                <h1>El equipo detrás de tu <span class="gradient-text">éxito digital</span></h1>
                <p class="page-subtitle">
                    Somos Átomo Digital, una agencia apasionada por la tecnología y el diseño. Nuestro propósito es
                    simple: convertir tus ideas en soluciones digitales que impulsen tu negocio. Trabajamos de cerca con
                    cada cliente porque creemos que la confianza y la comunicación son la base de cualquier proyecto
                    exitoso.
                </p>
            </div>
        </section>

        <section class="values-section">
            <div class="values-container">
                <div class="values-grid">
                    <div v-for="value in values" :key="value.title" class="value-card">
                        <div class="value-icon">
                            <i :class="value.icon"></i>
                        </div>
                        <h3>{{ value.title }}</h3>
                        <p>{{ value.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="team-section">
            <div class="team-container">
                <p class="page-label">Nuestro Equipo</p>
                <h2>Personas <span class="gradient-text">apasionadas</span>, resultados extraordinarios</h2>
                <div class="team-grid">
                    <div v-for="member in team" :key="member.name" class="team-card">
                        <div class="member-image-wrapper">
                            <img :src="member.photo" :alt="member.name" class="member-photo" />
                            <div class="member-glow"></div>
                        </div>
                        <div class="member-info">
                            <h3>{{ member.name }}</h3>
                            <span class="member-role">{{ member.role }}</span>
                            <p>{{ member.bio }}</p>
                            <div class="member-socials">
                                <a v-if="member.linkedin" :href="member.linkedin" target="_blank" aria-label="LinkedIn">
                                    <i class="bi bi-linkedin"></i>
                                </a>
                                <a v-if="member.twitter" :href="member.twitter" target="_blank" aria-label="Twitter">
                                    <i class="bi bi-twitter-x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="cta-container">
                <h2>¿Quieres trabajar con nosotros?</h2>
                <p>Cuéntanos tu proyecto y construyamos algo increíble juntos.</p>
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
    name: 'NosotrosView',
    components: { NavBar, Footer },
    data() {
        return {
            values: [
                {
                    icon: 'bi bi-stars',
                    title: 'Excelencia',
                    description: 'Nos exigimos al máximo en cada proyecto, sin importar su tamaño. La calidad no es opcional para nosotros.'
                },
                {
                    icon: 'bi bi-people-fill',
                    title: 'Colaboración',
                    description: 'Trabajamos de la mano con nuestros clientes. Tu retroalimentación guía cada decisión del proceso.'
                },
                {
                    icon: 'bi bi-lightbulb-fill',
                    title: 'Innovación',
                    description: 'Adoptamos las tecnologías más recientes para ofrecerte soluciones modernas y competitivas.'
                },
                {
                    icon: 'bi bi-patch-check-fill',
                    title: 'Confianza',
                    description: 'Cumplimos lo que prometemos. La transparencia y la honestidad son los pilares de cada relación.'
                },
            ],
            team: [
                {
                    name: 'Lizeth Ortiz',
                    role: 'Directora de Marketing Digital',
                    bio: 'Estratega digital especializada en publicidad de rendimiento (performance marketing) y generación de leads. Su enfoque combina análisis de datos, estrategia de negocio y ejecución operativa en plataformas como Meta Ads, Google Ads y Optimizaciones web.',
                    photo: "liz-bio.jpeg",
                    linkedin: 'https://www.linkedin.com/in/lizeth-carolina-ortiz-ruiz-378659174/',
                    // twitter: null
                },
                {
                    name: 'Carlos Aldaba Estrada',
                    role: 'Desarrollador Full-Stack',
                    bio: 'Ingeniero en Tecnologías de la Información y Comunicaciones con más de 4 años de experiencia en el desarrollo de software. Apasionado por la arquitectura de software y las experiencias de usuario fluidas.',
                    photo: 'carlos-bio.png',
                    linkedin: 'https://www.linkedin.com/in/carlos-thsd0111/',
                    // twitter: '#'
                },

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
    margin-bottom: 1.25rem;
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
    line-height: 1.8;
}

/* Values */
.values-section {
    background: #fff;
    padding: 5rem 2rem;
}

.values-container {
    max-width: 1100px;
    margin: 0 auto;
}

.values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
}

.value-card {
    padding: 2rem;
    border-radius: 16px;
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
}

.value-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.07);
    border-color: #aa4ce330;
}

.value-icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.25rem;
    background: linear-gradient(145deg, #ff70431a, #4a90e21a);
    position: relative;
}

.value-icon::before {
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

.value-icon i {
    font-size: 1.8rem;
    background: linear-gradient(145deg, #ff7043, #aa4ce3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.value-card h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 0.5rem;
}

.value-card p {
    color: #6c757d;
    font-size: 0.95rem;
    line-height: 1.6;
}

/* Team */
.team-section {
    padding: 5rem 2rem;
    background-color: #f8f9fa;
    background-image: radial-gradient(#d7d7d7 1px, transparent 1px);
    background-size: 20px 20px;
    text-align: center;
}

.team-container {
    max-width: 1000px;
    margin: 0 auto;
}

.team-container h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 3rem;
}

.team-grid {
    display: flex;
    gap: 2.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.team-card {
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    width: 340px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
}

.member-image-wrapper {
    position: relative;
    height: 280px;
    overflow: hidden;
}

.member-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.4s ease;
}

.team-card:hover .member-photo {
    transform: scale(1.05);
}

.member-glow {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(to top, #fff, transparent);
}

.member-info {
    padding: 1.75rem;
    text-align: left;
}

.member-info h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 0.25rem;
}

.member-role {
    font-size: 0.85rem;
    font-weight: 600;
    background: linear-gradient(90deg, #ff7043, #aa4ce3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: block;
    margin-bottom: 0.85rem;
}

.member-info p {
    color: #6c757d;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
}

.member-socials {
    display: flex;
    gap: 0.75rem;
}

.member-socials a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #f8f9fa;
    color: #555;
    font-size: 1rem;
    text-decoration: none;
    transition: background 0.3s, color 0.3s, transform 0.2s;
}

.member-socials a:hover {
    background: linear-gradient(135deg, #ff7043, #aa4ce3);
    color: #fff;
    transform: translateY(-2px);
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
    border-radius: 10px;
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    text-decoration: none;
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

    .team-container h2 {
        font-size: 2rem;
    }

    .team-card {
        width: 100%;
    }

    .member-image-wrapper {
        height: 240px;
    }
}
</style>
