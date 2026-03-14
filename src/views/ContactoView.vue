<template>
    <NavBar />
    <main class="page-content">

        <section class="page-hero">
            <div class="page-hero-container">
                <p class="page-label">Hablemos</p>
                <h1>¿Tienes un proyecto? <span class="gradient-text">Contáctanos</span></h1>
                <p class="page-subtitle">Estamos listos para escucharte. Escríbenos y te responderemos a la brevedad
                    posible.</p>
            </div>
        </section>

        <section class="contact-section">
            <div class="contact-container">

                <div class="contact-info">
                    <h2>Información de <span class="gradient-text">contacto</span></h2>
                    <p class="contact-intro">No dudes en comunicarte con nosotros por el medio que prefieras. Estamos
                        aquí para ayudarte.</p>

                    <div class="info-items">
                        <div class="info-item">
                            <div class="info-icon">
                                <i class="bi bi-envelope-fill"></i>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:olizeth527@gmail.com">olizeth527@gmail.com</a>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="info-icon whatsapp-icon">
                                <i class="bi bi-whatsapp"></i>
                            </div>
                            <div>
                                <h4>WhatsApp</h4>
                                <a href="https://wa.me/526181553344?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios."
                                    target="_blank" rel="noopener noreferrer">
                                    +52 618 155 3344
                                </a>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="info-icon">
                                <i class="bi bi-geo-alt-fill"></i>
                            </div>
                            <div>
                                <h4>Ubicación</h4>
                                <p>Durango, México</p>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="social-links">
                        <h4>Síguenos</h4>
                        <div class="socials-row">
                            <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i
                                    class="bi bi-facebook"></i></a>
                            <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i
                                    class="bi bi-instagram"></i></a>
                            <a href="https://twitter.com" target="_blank" aria-label="Twitter"><i
                                    class="bi bi-twitter-x"></i></a>
                        </div>
                    </div> -->
                </div>

                <div class="contact-form-wrapper">
                    <form v-if="!formSent" @submit.prevent="handleSubmit" class="contact-form">
                        <h2>Envíanos un <span class="gradient-text">mensaje</span></h2>

                        <div class="form-group">
                            <label for="name">Nombre completo</label>
                            <input id="name" v-model="form.name" type="text" placeholder="Tu nombre" required />
                        </div>

                        <div class="form-group">
                            <label for="email">Correo electrónico</label>
                            <input id="email" v-model="form.email" type="email" placeholder="tu@correo.com" required />
                        </div>

                        <div class="form-group">
                            <label for="subject">Asunto</label>
                            <input id="subject" v-model="form.subject" type="text"
                                placeholder="¿En qué podemos ayudarte?" />
                        </div>

                        <div class="form-group">
                            <label for="message">Mensaje</label>
                            <textarea id="message" v-model="form.message" rows="5"
                                placeholder="Cuéntanos sobre tu proyecto..." required></textarea>
                        </div>

                        <button type="submit" class="submit-btn" :class="{ sent: formSent }">
                            <i class="bi bi-send-fill"></i>
                            Enviar mensaje
                        </button>
                    </form>

                    <div v-else class="success-message">
                        <i class="bi bi-check-circle-fill"></i>
                        <h2>¡Gracias por tu mensaje!</h2>
                        <p>Hemos abierto tu aplicación de correo predeterminada para que nos envíes tus dudas o
                            comentarios.</p>
                        <!-- <button class="submit-btn" @click="formSent = false">
                            <i class="bi bi-arrow-left-circle-fill"></i>
                            Enviar nuevo mensaje
                        </button> -->
                    </div>
                </div>

            </div>
        </section>

    </main>
    <Footer />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'ContactoView',
    components: { NavBar, Footer },
    data() {
        return {
            formSent: false,
            form: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            const { name, email, subject, message } = this.form;
            const body = `Nombre: ${name}%0AEmail: ${email}%0AAsunto: ${subject}%0A%0A${message}`;

            const mailtoUrl = `mailto:olizeth527@gmail.com?subject=${encodeURIComponent(subject || 'Contacto desde el sitio web')}&body=${body}`;
            const link = document.createElement('a');
            link.href = mailtoUrl;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            this.formSent = true;

            this.form = {
                name: '', email: '', subject: '', message: ''
            };
        }
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
    padding: 5rem 2rem 3rem;
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

/* Contact Layout */
.contact-section {
    padding: 4rem 2rem 6rem;
}

.contact-container {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 4rem;
    align-items: start;
}

/* Info Side */
.contact-info h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 0.75rem;
}

.contact-intro {
    color: #6c757d;
    line-height: 1.7;
    margin-bottom: 2rem;
    font-size: 0.95rem;
}

.info-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
}

.info-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
}

.info-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #ff70431a, #aa4ce31a);
    border: 1px solid #aa4ce320;
    font-size: 1.3rem;
    flex-shrink: 0;
}

.info-icon i {
    background: linear-gradient(135deg, #ff7043, #aa4ce3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.whatsapp-icon i {
    background: linear-gradient(135deg, #25D366, #128C7E);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.info-item h4 {
    font-size: 0.85rem;
    font-weight: 600;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 0.2rem;
}

.info-item a {
    color: #212529;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.2s;
}

.info-item a:hover {
    color: #aa4ce3;
}

.info-item p {
    color: #212529;
    font-weight: 500;
    font-size: 0.95rem;
    margin: 0;
}

.social-links h4 {
    font-size: 0.85rem;
    font-weight: 600;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 0.75rem;
}

.socials-row {
    display: flex;
    gap: 0.75rem;
}

.socials-row a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555;
    font-size: 1.1rem;
    text-decoration: none;
    transition: all 0.3s ease;
}

.socials-row a:hover {
    background: linear-gradient(135deg, #ff7043, #aa4ce3);
    color: #fff;
    transform: translateY(-3px);
}

/* Form Side */
.contact-form-wrapper {
    background: #fff;
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.07);
}

.contact-form h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 2rem;
}

.form-group {
    margin-bottom: 1.25rem;
}

.form-group label {
    display: block;
    font-size: 0.88rem;
    font-weight: 600;
    color: #444;
    margin-bottom: 0.4rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1.5px solid #e9ecef;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    color: #333;
    background: #fafafa;
    transition: border-color 0.3s, box-shadow 0.3s;
    outline: none;
    box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: #aa4ce3;
    box-shadow: 0 0 0 3px #aa4ce315;
    background: #fff;
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
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

.submit-btn {
    width: 100%;
    padding: 0.9rem;
    border: none;
    border-radius: 10px;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.05rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: linear-gradient(90deg, #ff7043, #f2a65a, #aa4ce3, #4a90e2);
    background-size: 200% auto;
    animation: move-gradient-button 4s ease infinite;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 15px rgba(170, 76, 227, 0.3);
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(170, 76, 227, 0.4);
}

.submit-btn.sent {
    background: linear-gradient(90deg, #25D366, #128C7E);
    animation: none;
}

.success-message {
    text-align: center;
    padding: 3rem 1rem;
}

.success-message i.bi-check-circle-fill {
    font-size: 4rem;
    background: linear-gradient(135deg, #25D366, #128C7E);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    display: inline-block;
}

.success-message h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 1rem;
}

.success-message p {
    font-size: 1rem;
    color: #6c757d;
    margin-bottom: 2rem;
    line-height: 1.6;
}

@media (max-width: 900px) {
    .contact-container {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .page-hero h1 {
        font-size: 2.2rem;
    }
}
</style>
