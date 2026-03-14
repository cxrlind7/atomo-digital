<template>
    <NavBar />
    <main class="page-content">

        <section class="page-hero">
            <div class="page-hero-container">
                <p class="page-label">Empieza hoy</p>
                <h1>Cotiza tu <span class="gradient-text">Proyecto Digital</span></h1>
                <p class="page-subtitle">Cuéntanos sobre tu idea y te haremos llegar una propuesta personalizada sin
                    costo.</p>
            </div>
        </section>

        <section class="quote-section">
            <div class="quote-container">

                <div class="quote-sidebar">
                    <div class="sidebar-card">
                        <h3>¿Por qué elegirnos?</h3>
                        <ul class="benefits-list">
                            <li v-for="benefit in benefits" :key="benefit.text">
                                <div class="benefit-icon">
                                    <i :class="benefit.icon"></i>
                                </div>
                                <div>
                                    <strong>{{ benefit.title }}</strong>
                                    <p>{{ benefit.text }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="whatsapp-card">
                        <div class="wa-icon-wrap">
                            <i class="bi bi-whatsapp"></i>
                        </div>
                        <h3>¿Prefieres hablar directamente?</h3>
                        <p>Escríbenos por WhatsApp y respondemos de inmediato.</p>
                        <a href="https://wa.me/526181890928?text=Hola%2C%20quisiera%20cotizar%20mi%20proyecto%20digital."
                            target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
                            <i class="bi bi-whatsapp"></i>
                            Cotiza por WhatsApp
                        </a>
                    </div>
                </div>

                <div class="quote-form-wrapper">
                    <form v-if="!formSent" @submit.prevent="handleSubmit" class="quote-form">
                        <h2>Cuéntanos sobre tu <span class="gradient-text">proyecto</span></h2>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Nombre completo *</label>
                                <input id="name" v-model="form.name" type="text" placeholder="Tu nombre" required />
                            </div>
                            <div class="form-group">
                                <label for="email">Correo electrónico *</label>
                                <input id="email" v-model="form.email" type="email" placeholder="tu@correo.com"
                                    required />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone">Teléfono / WhatsApp</label>
                                <input id="phone" v-model="form.phone" type="tel" placeholder="+52 618 000 0000" />
                            </div>
                            <div class="form-group">
                                <label for="company">Empresa / Negocio</label>
                                <input id="company" v-model="form.company" type="text"
                                    placeholder="Tu empresa (opcional)" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Tipo de servicio *</label>
                            <div class="services-chips">
                                <button type="button" v-for="s in serviceOptions" :key="s" class="chip"
                                    :class="{ active: form.service === s }" @click="form.service = s">
                                    {{ s }}
                                </button>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Presupuesto estimado</label>
                            <div class="budget-options">
                                <label v-for="b in budgets" :key="b" class="budget-label">
                                    <input type="radio" :value="b" v-model="form.budget" />
                                    {{ b }}
                                </label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="details">Describe tu proyecto *</label>
                            <textarea id="details" v-model="form.details" rows="5"
                                placeholder="¿Qué necesitas? ¿Tienes alguna referencia o plazo de entrega?"
                                required></textarea>
                        </div>

                        <button type="submit" class="submit-btn" :class="{ sent: formSent }">
                            <i class="bi bi-send-fill"></i>
                            Enviar solicitud
                        </button>
                    </form>

                    <div v-else class="success-message">
                        <i class="bi bi-check-circle-fill"></i>
                        <h2>¡Gracias por tu solicitud!</h2>
                        <p>Hemos abierto tu aplicación de correo predeterminada para que nos envíes los detalles de tu
                            proyecto.</p>
                        <!-- <button class="submit-btn" @click="formSent = false">
                            <i class="bi bi-arrow-left-circle-fill"></i>
                            Enviar nueva solicitud
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
    name: 'CotizaView',
    components: { NavBar, Footer },
    data() {
        return {
            formSent: false,
            form: {
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                budget: '',
                details: ''
            },
            serviceOptions: ['Desarrollo Web', 'Marketing Digital', 'Diseño Gráfico', 'Consultoría', 'Otro'],
            budgets: ['Menos de $5,000 MXN', '$5,000 – $15,000 MXN', '$15,000 – $30,000 MXN', 'Más de $30,000 MXN'],
            benefits: [
                { icon: 'bi bi-lightning-charge-fill', title: 'Respuesta en 24h', text: 'Te contactamos en menos de un día hábil.' },
                { icon: 'bi bi-shield-fill-check', title: 'Sin compromiso', text: 'La cotización es 100% gratuita y sin ataduras.' },
                { icon: 'bi bi-people-fill', title: 'Equipo dedicado', text: 'Un experto para cada área de tu proyecto.' },
                { icon: 'bi bi-award-fill', title: 'Calidad garantizada', text: 'Entregamos resultados que superan expectativas.' }
            ]
        };
    },
    methods: {
        handleSubmit() {
            const { name, email, phone, company, service, budget, details } = this.form;
            const subject = `Solicitud de cotización – ${service || 'Proyecto digital'}`;
            const body = `Nombre: ${name}%0AEmail: ${email}%0ATel%C3%A9fono: ${phone}%0AEmpresa: ${company}%0AServicio: ${service}%0APresupuesto: ${budget}%0A%0ADescripci%C3%B3n:%0A${details}`;

            const mailtoUrl = `mailto:olizeth527@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            const link = document.createElement('a');
            link.href = mailtoUrl;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            this.formSent = true;

            // Clean up form values (optional, so if they go back it's fresh)
            this.form = {
                name: '', email: '', phone: '', company: '', service: '', budget: '', details: ''
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

/* Layout */
.quote-section {
    padding: 3rem 2rem 6rem;
}

.quote-container {
    max-width: 1150px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 340px 1fr;
    gap: 3rem;
    align-items: start;
}

/* Sidebar */
.sidebar-card {
    background: #fff;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
    margin-bottom: 1.5rem;
}

.sidebar-card h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 1.5rem;
}

.benefits-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.benefits-list li {
    display: flex;
    gap: 0.85rem;
    align-items: flex-start;
}

.benefit-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #ff70431a, #aa4ce31a);
    border: 1px solid #aa4ce315;
    flex-shrink: 0;
    font-size: 1.1rem;
}

.benefit-icon i {
    background: linear-gradient(135deg, #ff7043, #aa4ce3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.benefits-list strong {
    display: block;
    font-size: 0.88rem;
    font-weight: 600;
    color: #212529;
    margin-bottom: 0.15rem;
}

.benefits-list p {
    font-size: 0.82rem;
    color: #6c757d;
    margin: 0;
    line-height: 1.5;
}

/* WhatsApp Card */
.whatsapp-card {
    background: #fff;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
    text-align: center;
    border: 1px solid #25D36620;
}

.wa-icon-wrap {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #25D366, #128C7E);
    margin: 0 auto 1rem;
    font-size: 1.8rem;
    color: #fff;
}

.whatsapp-card h3 {
    font-size: 1rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 0.5rem;
}

.whatsapp-card p {
    font-size: 0.88rem;
    color: #6c757d;
    margin-bottom: 1.25rem;
    line-height: 1.5;
}

.whatsapp-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #25D366, #128C7E);
    color: white;
    font-weight: 600;
    font-size: 0.95rem;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.35);
}

.whatsapp-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.45);
}

/* Form */
.quote-form-wrapper {
    background: #fff;
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.07);
}

.quote-form h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 2rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
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

/* Chips */
.services-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
}

.chip {
    padding: 0.45rem 1rem;
    border-radius: 50px;
    border: 1.5px solid #e0e0e0;
    background: #f8f9fa;
    color: #555;
    font-family: 'Poppins', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.chip:hover {
    border-color: #aa4ce3;
    color: #aa4ce3;
}

.chip.active {
    background: linear-gradient(135deg, #ff7043, #aa4ce3);
    border-color: transparent;
    color: white;
}

/* Budget */
.budget-options {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.budget-label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.88rem;
    color: #555;
    cursor: pointer;
}

.budget-label input[type="radio"] {
    accent-color: #aa4ce3;
    width: auto;
    cursor: pointer;
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
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 4px 15px rgba(170, 76, 227, 0.3);
    margin-top: 0.5rem;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(170, 76, 227, 0.4);
}

.submit-btn.sent {
    background: linear-gradient(90deg, #25D366, #128C7E);
    animation: none;
}

@media (max-width: 900px) {
    .quote-container {
        grid-template-columns: 1fr;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .page-hero h1 {
        font-size: 2.2rem;
    }
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
</style>
