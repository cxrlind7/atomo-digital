<template>
    <NavBar />
    <main class="page-content">

        <section class="page-hero">
            <div class="page-hero-container">
                <p class="page-label">Nuestro Trabajo</p>
                <h1>Proyectos que <span class="gradient-text">hablan por sí solos</span></h1>
                <p class="page-subtitle">Aquí te mostramos algunos de los proyectos digitales que hemos creado con
                    pasión y tecnología.</p>
            </div>
        </section>

        <section class="projects-section">
            <div class="projects-container">
                <div class="projects-grid">

                    <div v-for="project in projects" :key="project.title" class="project-card">
                        <div class="project-image-wrapper">
                            <img :src="project.preview" :alt="'Vista previa de ' + project.title"
                                class="project-preview" />
                            <div class="project-overlay">
                                <a :href="project.url" target="_blank" rel="noopener noreferrer" class="overlay-btn">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                    Ver sitio
                                </a>
                            </div>
                        </div>
                        <div class="project-info">
                            <div class="project-tags">
                                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                            </div>
                            <h3>{{ project.title }}</h3>
                            <p>{{ project.description }}</p>
                            <a :href="project.url" target="_blank" rel="noopener noreferrer" class="project-link">
                                Visitar sitio <i class="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="cta-container">
                <h2>¿Tienes un proyecto en mente?</h2>
                <p>Cuéntanos tu idea y la convertimos en realidad.</p>
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
    name: 'ProyectosView',
    components: { NavBar, Footer },
    data() {
        return {
            projects: [
                {
                    title: 'Crianza Sana by DKids',
                    description: 'Plataforma web para padres y educadores enfocada en crianza consciente y desarrollo infantil saludable.',
                    url: 'https://crianzasanabydkids.mx/',
                    preview: 'https://api.microlink.io/?url=https://crianzasanabydkids.mx/&screenshot=true&meta=false&embed=screenshot.url',
                    tags: ['Desarrollo Web', 'Diseño UI/UX']
                },
                {
                    title: 'Bravo y Asociados',
                    description: 'Sitio web corporativo para despacho de asesoría y consultoría empresarial con presencia profesional en línea.',
                    url: 'https://www.bravoyasociados.com/',
                    preview: 'https://api.microlink.io/?url=https://www.bravoyasociados.com/&screenshot=true&meta=false&embed=screenshot.url',
                    tags: ['Sitio Corporativo', 'Consultoría']
                }
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

/* Hero */
.page-hero {
    background-color: #f8f9fa;
    background-image: radial-gradient(#d7d7d7 1px, transparent 1px);
    background-size: 20px 20px;
    padding: 5rem 2rem 4rem;
    text-align: center;
}

.page-hero-container {
    max-width: 700px;
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

/* Projects */
.projects-section {
    padding: 4rem 2rem;
}

.projects-container {
    max-width: 1200px;
    margin: 0 auto;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));
    gap: 2.5rem;
}

.project-card {
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.project-image-wrapper {
    position: relative;
    overflow: hidden;
    height: 280px;
    background: #e9ecef;
}

.project-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.4s ease;
}

.project-card:hover .project-preview {
    transform: scale(1.04);
}

.project-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 112, 67, 0.85), rgba(74, 144, 226, 0.85));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.overlay-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #fff;
    color: #333;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    text-decoration: none;
    font-size: 1rem;
    transition: transform 0.2s ease;
}

.overlay-btn:hover {
    transform: scale(1.05);
}

.project-info {
    padding: 1.75rem;
}

.project-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 0.75rem;
}

.tag {
    font-size: 0.78rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    background: linear-gradient(135deg, #ff70431a, #4a90e21a);
    color: #aa4ce3;
    border: 1px solid #aa4ce330;
}

.project-info h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 0.5rem;
}

.project-info p {
    color: #6c757d;
    line-height: 1.6;
    margin-bottom: 1.25rem;
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    background: linear-gradient(90deg, #ff7043, #aa4ce3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: gap 0.2s ease;
}

.project-link:hover {
    gap: 0.7rem;
}

/* CTA */
.cta-section {
    background-color: #f8f9fa;
    background-image: radial-gradient(#d7d7d7 1px, transparent 1px);
    background-size: 20px 20px;
    padding: 5rem 2rem;
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

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .project-image-wrapper {
        height: 220px;
    }
}
</style>
