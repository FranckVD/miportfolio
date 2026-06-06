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
function typeWriter(elementId) {
    const element = document.getElementById(elementId);
    const code = element.getAttribute('data-code');
    element.innerHTML = '<span class="code-cursor"></span>'; // Reset
    
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
                setTimeout(type, speed);
            }
        }
    }
    
    type();
}

// Modificar el observer para disparar la animación de la terminal solo una vez
const terminalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'terminal-content') {
            typeWriter('terminal-content');
            terminalObserver.unobserve(entry.target); // Solo animar una vez
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
});

mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Cerrar modal o menú con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (modal.classList.contains('active')) closeModal();
        closeMobileMenu();
    }
});

// Asignar eventos a las tarjetas "coming-soon"
document.querySelectorAll('[data-status="coming-soon"]').forEach(card => {
    card.addEventListener('click', openModal);
});
