// Tailwind configuration
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: { 600: '#0E9E8A', 700: '#1D9E75' },
                accent: '#5DCAA5',
                'brand-dark': '#0A1628',
            },
            fontFamily: {
                sans: ['JetBrains Mono', 'monospace'],
                display: ['Plus Jakarta Sans', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        }
    }
}

// Traducciones
const translations = {
    es: {
        nav_inicio: "Inicio",
        nav_proyectos: "Proyectos",
        nav_trayectoria: "Trayectoria",
        nav_agenda: "Agendar Cita",
        btn_cv: "Descargar CV",
        cv_es: "Español",
        cv_en: "Inglés",
        hero_badge: "Disponible para trabajar",
        hero_title: "Hola, soy Ramses",
        hero_subtitle: "Python Developer · Data Engineering · Analytics",
        hero_desc: "Transformo datos en decisiones. Diseño pipelines robustos, automatizo procesos complejos y construyo soluciones que impulsan la eficiencia operativa.",
        hero_connect: "Conectar",
        terminal_code: '<div><span class="code-keyword">class</span> <span class="code-func">DataAutomation</span>:</div><div class="pl-4"><span class="code-keyword">def</span> <span class="code-func">__init__</span>(self) -> <span class="code-keyword">None</span>:</div><div class="pl-8">self.mission: <span class="code-keyword">str</span> = <span class="code-string">"Optimizar Eficiencia"</span></div><div class="pl-8">self.tools: <span class="code-keyword">list</span>[<span class="code-keyword">str</span>] = [<span class="code-string">"Python"</span>, <span class="code-string">"IA"</span>, <span class="code-string">"SQL"</span>]</div><div class="mt-4 pl-4"><span class="code-keyword">def</span> <span class="code-func">run</span>(self) -> <span class="code-keyword">list</span>[<span class="code-keyword">str</span>]:</div><div class="pl-8"><span class="code-keyword">print</span>(<span class="code-string">f"Iniciando: {self.mission}"</span>)</div><div class="pl-8">res = [<span class="code-string">f"Procesando con {t}..."</span> <span class="code-keyword">for</span> t <span class="code-keyword">in</span> self.tools]</div><div class="pl-8"><span class="code-keyword">print</span>(res)</div><div class="pl-8"><span class="code-keyword">return</span> res</div><div class="mt-4"><span class="code-comment"># Ejecutando pipeline...</span></div><div>engine = DataAutomation()</div><div>engine.run()</div>',
        projects_title_small: "Portafolio de Proyectos",
        projects_title_big: "Soluciones aplicadas y casos de éxito.",
        project_1_title: "Ingeniería de Datos",
        project_1_desc: "Diseño de arquitecturas de datos, flujos ETL y administración de bases de datos SQL para asegurar la calidad y fluidez de la información.",
        project_2_title: "Análisis de Datos",
        project_2_desc: "Interpretación de tendencias mediante visualización avanzada y modelos estadísticos para una toma de decisiones basada en evidencia.",
        project_3_title: "Automatización con IA",
        project_3_desc: "Implementación de soluciones inteligentes y agentes de IA personalizados que optimizan tareas repetitivas y potencian la eficiencia organizacional.",
        project_4_title: "Business Intelligence",
        project_4_desc: "Creación de tableros interactivos y KPIs estratégicos que permiten monitorear el rendimiento del negocio en tiempo real.",
        project_5_title: "Análisis de Procesos",
        project_5_desc: "Diagramación BPMN 2.0 y reingeniería operativa para maximizar la productividad y reducir errores manuales.",
        project_6_title: "Documentación y Control",
        project_6_desc: "Elaboración de manuales SOP, políticas de control interno y estandarización de procedimientos contables.",
        project_view: "Ver Proyecto",
        project_soon: "En Desarrollo",
        trajectory_title_small: "Trayectoria",
        trajectory_title_big: "Experiencia Profesional",
        trajectory_desc: "+3 años de experiencia como profesional en Información y Control de Gestión con un enfoque práctico en resultados tecnológicos.",
        skills_tech: "Habilidades Técnicas",
        skill_rpa: "Automatización de procesos (RPA)",
        skill_db: "Bases de datos",
        skill_accounting: "Contabilidad",
        skill_bpmn: "Modelamiento de Procesos",
        skill_data_modeling: "Análisis y Modelamiento de Datos",
        skills_soft: "Soft Skills",
        skill_process_improvement: "Mejora de Procesos",
        skill_data_analysis: "Análisis de Datos",
        skill_finance: "Gestión Financiera",
        skill_teamwork: "Trabajo en equipo",
        skill_docs: "Gestión documental",
        skill_problem_solving: "Resolución de problemas",
        skill_assertive_comm: "Comunicación asertiva",
        skill_adaptability: "Adaptabilidad",
        skill_honesty: "Honestidad",
        skill_responsibility: "Responsabilidad",
        skill_effective_comm: "Comunicación efectiva",
        languages: "Idiomas",
        lang_es: "Español",
        lang_es_level: "Nativo",
        lang_en: "Inglés",
        lang_en_level: "Básico (A2)",
        exp_1_title: "Analista Administrativo Financiero",
        exp_1_li_1: "Optimización de bases de datos para control de gastos y clientes.",
        exp_1_li_2: "Gestioné y controlé un sistema contable, garantizando la integridad, actualización y trazabilidad de la información financiera.",
        exp_1_li_3: "Elaboré conciliaciones bancarias y reportes financieros gerenciales.",
        exp_1_li_4: "Estandaricé y documenté procedimientos administrativos para fortalecer el control interno y el cumplimiento normativo.",
        exp_1_li_5: "Analicé, diseñé y desarrollé un sistema de gestión de documentos (expedientes y archivos físicos).",
        exp_1_li_6: "Creé canales de datos (ETL) para el análisis del sistema ERP de la empresa.",
        exp_1_li_7: "Desarrollé dashboards Financieros para la toma de decisiones basadas en datos",
        exp_2_title: "Pasante Administrativo Contable",
        exp_2_desc: "Apoyo en registros contables, conciliación de cuentas y creación de la base de datos inicial para la gestión de la empresa.",
        edu_1_title: "Lic. en Información y Control de Gestión",
        edu_1_inst: "UAGRM - Graduación Directa con Honores",
        edu_1_desc: "Formación técnica superior en contabilidad y diseño de sistemas de información organizacional.",
        agenda_title: "Hablemos de tu próximo proyecto",
        agenda_desc: "Seleccione un horario disponible para una sesión estratégica gratuita.",
        btn_book_call: "Reservar llamada gratis",
        modal_maint_title: "Proyecto en Desarrollo",
        modal_maint_desc: "Estoy trabajando arduamente en esta sección para ofrecerte una experiencia de alta calidad. ¡Pronto estará disponible!",
        btn_understood: "Entendido",
        footer_role: "Información y Control de Gestión",
        footer_made_by: "© 2026 Hecho con ♥️ by FranckVD"
    },
    en: {
        nav_inicio: "Home",
        nav_proyectos: "Projects",
        nav_trayectoria: "Experience",
        nav_agenda: "Book a Call",
        btn_cv: "Download CV",
        cv_es: "Spanish",
        cv_en: "English",
        hero_badge: "Available for work",
        hero_title: "Hi, I'm Ramses",
        hero_subtitle: "Python Developer · Data Engineering · Analytics",
        hero_desc: "I transform data into decisions. I design robust pipelines, automate complex processes, and build solutions that drive operational efficiency.",
        hero_connect: "Connect",
        terminal_code: '<div><span class="code-keyword">class</span> <span class="code-func">DataAutomation</span>:</div><div class="pl-4"><span class="code-keyword">def</span> <span class="code-func">__init__</span>(self) -> <span class="code-keyword">None</span>:</div><div class="pl-8">self.mission: <span class="code-keyword">str</span> = <span class="code-string">"Optimize Efficiency"</span></div><div class="pl-8">self.tools: <span class="code-keyword">list</span>[<span class="code-keyword">str</span>] = [<span class="code-string">"Python"</span>, <span class="code-string">"AI"</span>, <span class="code-string">"SQL"</span>]</div><div class="mt-4 pl-4"><span class="code-keyword">def</span> <span class="code-func">run</span>(self) -> <span class="code-keyword">list</span>[<span class="code-keyword">str</span>]:</div><div class="pl-8"><span class="code-keyword">print</span>(<span class="code-string">f"Starting: {self.mission}"</span>)</div><div class="pl-8">res = [<span class="code-string">f"Processing with {t}..."</span> <span class="code-keyword">for</span> t <span class="code-keyword">in</span> self.tools]</div><div class="pl-8"><span class="code-keyword">print</span>(res)</div><div class="pl-8"><span class="code-keyword">return</span> res</div><div class="mt-4"><span class="code-comment"># Running pipeline...</span></div><div>engine = DataAutomation()</div><div>engine.run()</div>',
        projects_title_small: "Project Portfolio",
        projects_title_big: "Applied solutions and success stories.",
        project_1_title: "Data Engineering",
        project_1_desc: "Design of data architectures, ETL flows and SQL database administration to ensure the quality and fluidity of information.",
        project_2_title: "Data Analysis",
        project_2_desc: "Interpretation of trends through advanced visualization and statistical models for evidence-based decision making.",
        project_3_title: "AI Automation",
        project_3_desc: "Implementation of intelligent solutions and custom AI agents that optimize repetitive tasks and enhance organizational efficiency.",
        project_4_title: "Business Intelligence",
        project_4_desc: "Creation of interactive dashboards and strategic KPIs that allow monitoring business performance in real time.",
        project_5_title: "Process Analysis",
        project_5_desc: "BPMN 2.0 diagramming and operational reengineering to maximize productivity and reduce manual errors.",
        project_6_title: "Documentation and Control",
        project_6_desc: "Development of SOP manuals, internal control policies and standardization of accounting procedures.",
        project_view: "View Project",
        project_soon: "Coming Soon",
        trajectory_title_small: "Trajectory",
        trajectory_title_big: "Professional Experience",
        trajectory_desc: "+3 years of experience as an Information and Management Control professional with a practical focus on technological results.",
        skills_tech: "Technical Skills",
        skill_rpa: "Process Automation (RPA)",
        skill_db: "Databases",
        skill_accounting: "Accounting",
        skill_bpmn: "Process Modeling",
        skill_data_modeling: "Data Analysis and Modeling",
        skills_soft: "Soft Skills",
        skill_process_improvement: "Process Improvement",
        skill_data_analysis: "Data Analysis",
        skill_finance: "Financial Management",
        skill_teamwork: "Teamwork",
        skill_docs: "Document Management",
        skill_problem_solving: "Problem Solving",
        skill_assertive_comm: "Assertive Communication",
        skill_adaptability: "Adaptability",
        skill_honesty: "Honesty",
        skill_responsibility: "Responsibility",
        skill_effective_comm: "Effective Communication",
        languages: "Languages",
        lang_es: "Spanish",
        lang_es_level: "Native",
        lang_en: "English",
        lang_en_level: "Basic (A2)",
        exp_1_title: "Financial Administrative Analyst",
        exp_1_li_1: "Optimization of databases for expense and client control.",
        exp_1_li_2: "Managed and controlled an accounting system, ensuring the integrity, updating and traceability of financial information.",
        exp_1_li_3: "Prepared bank reconciliations and management financial reports.",
        exp_1_li_4: "Standardized and documented administrative procedures to strengthen internal control and regulatory compliance.",
        exp_1_li_5: "Analyzed, designed and developed a document management system (files and physical archives).",
        exp_1_li_6: "Created data channels (ETL) for the analysis of the company's ERP system.",
        exp_1_li_7: "Developed Financial dashboards for data-driven decision making",
        exp_2_title: "Accounting Administrative Intern",
        exp_2_desc: "Support in accounting records, account reconciliation and creation of the initial database for company management.",
        edu_1_title: "Bachelor in Information and Management Control",
        edu_1_inst: "UAGRM - Direct Graduation with Honors",
        edu_1_desc: "Higher technical training in accounting and design of organizational information systems.",
        agenda_title: "Let's talk about your next project",
        agenda_desc: "Select an available time slot for a free strategic session.",
        btn_book_call: "Book a free call",
        modal_maint_title: "Project in Development",
        modal_maint_desc: "I am working hard on this section to offer you a high-quality experience. It will be available soon!",
        btn_understood: "Understood",
        footer_role: "Information and Management Control",
        footer_made_by: "© 2026 Made with ♥️ by FranckVD"
    }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'es';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    updateContent();
    
    // Actualizar visualmente los botones de idioma
    const langLabel = document.getElementById('current-lang');
    if (langLabel) langLabel.textContent = lang.toUpperCase();

    // Reiniciar animación de terminal si ya fue vista
    const terminal = document.getElementById('terminal-content');
    if (terminal) {
        terminal.setAttribute('data-code', translations[lang].terminal_code);
        // Si el observer ya pasó, forzamos el reinicio de la animación
        typeWriter('terminal-content');
    }
}

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    // Actualizar atributos de idioma en el HTML
    document.documentElement.lang = currentLang;
}

// Inicializar idioma
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    const langLabel = document.getElementById('current-lang');
    if (langLabel) langLabel.textContent = currentLang.toUpperCase();
});

// Event Listeners para cambio de idioma
const langBtn = document.getElementById('lang-switcher');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(nextLang);
    });
}

const mobileLangBtn = document.getElementById('mobile-lang-switcher');
if (mobileLangBtn) {
    mobileLangBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(nextLang);
    });
}

// Animaciones Repetibles (Reveal on scroll)
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            // Quitamos la clase para que se repita la animación al volver a pasar
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Typing Animation para la terminal
let typewriterTimeout;
function typeWriter(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const code = element.getAttribute('data-code');
    element.innerHTML = '<span class="code-cursor"></span>'; // Reset
    
    // Limpiar timeout previo si existe para evitar solapamiento al cambiar idioma
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    
    let i = 0;
    let currentHTML = '';
    const speed = 15; // Velocidad rápida pero visible

    function type() {
        if (i < code.length) {
            // Si detectamos el inicio de una etiqueta HTML, la saltamos para que se aplique de golpe
            if (code[i] === '<') {
                let tag = '';
                while (code[i] !== '>') {
                    tag += code[i];
                    i++;
                }
                tag += '>'; // cerrar etiqueta
                i++;
                currentHTML += tag;
                element.innerHTML = currentHTML + '<span class="code-cursor"></span>';
                type(); // Llamada recursiva inmediata para no pausar en las etiquetas
            } else {
                currentHTML += code[i];
                element.innerHTML = currentHTML + '<span class="code-cursor"></span>';
                i++;
                typewriterTimeout = setTimeout(type, speed);
            }
        }
    }
    
    type();
}

// Modificar el observer para disparar la animación de la terminal solo una vez inicialmente
const terminalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'terminal-content') {
            typeWriter('terminal-content');
            terminalObserver.unobserve(entry.target); // Solo animar una vez de forma automática
        }
    });
}, { threshold: 0.5 });

if (document.getElementById('terminal-content')) {
    terminalObserver.observe(document.getElementById('terminal-content'));
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 20) {
        nav.classList.add('shadow-md', 'py-1');
    } else {
        nav.classList.remove('shadow-md', 'py-1');
    }
});

// Lógica del Modal de Mantenimiento
const modal = document.getElementById('maintenance-modal');

function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll al estar abierto
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Lógica del Menú Móvil
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

function toggleMobileMenu(e) {
    if (e) e.stopPropagation();
    mobileMenu.classList.toggle('hidden');
}

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Cerrar menú al hacer clic fuera de él
document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
    }
    
    // También cerrar el dropdown de CV si se hace clic fuera
    const cvMenu = document.getElementById('cv-menu');
    const cvWrapper = document.getElementById('cv-dropdown-wrapper');
    if (cvMenu && cvWrapper && !cvWrapper.contains(e.target)) {
        // El dropdown de escritorio funciona por hover (CSS), pero esto es buena práctica
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Cerrar modal o menú con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (modal && modal.classList.contains('active')) closeModal();
        closeMobileMenu();
    }
});

// Asignar eventos a las tarjetas "coming-soon"
document.querySelectorAll('[data-status="coming-soon"]').forEach(card => {
    card.addEventListener('click', openModal);
});
