// Smooth scrolling para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#navbar-home') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Botón "Volver al inicio"
document.getElementById('btn-back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Botón "Enviar amor" - Easter egg
document.getElementById('btn-send-love').addEventListener('click', () => {
    createHeartAnimation();
    showNotification('¡Tu amor ha sido enviado con éxito! 💕');
});

// Botón "Ver mi mensaje para ti"
document.getElementById('btn-message').addEventListener('click', () => {
    const mensajeSection = document.getElementById('mensaje');
    if (mensajeSection) {
        mensajeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

// Navbar home button
document.getElementById('navbar-home').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animación de corazones flotantes
function createHeartAnimation() {
    const colors = ['❤️', '🌹', '💕', '💖', '✨'];
    const heart = document.createElement('div');
    heart.textContent = colors[Math.floor(Math.random() * colors.length)];
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = `heartFloat 3s ease-out forwards`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
}

// Crear múltiples corazones
function createHeartBurst() {
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeartAnimation, i * 100);
    }
}

// Notification toast
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.background = 'linear-gradient(135deg, #F8D4D4 0%, #E8C5D8 100%)';
    notification.style.color = '#8B4A6D';
    notification.style.padding = '1rem 1.5rem';
    notification.style.borderRadius = '10px';
    notification.style.boxShadow = '0 4px 20px rgba(139, 74, 109, 0.2)';
    notification.style.zIndex = '10000';
    notification.style.animation = 'slideIn 0.3s ease-out';
    notification.style.fontWeight = 'bold';
    notification.style.fontFamily = "'Cormorant Garamond', serif";

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Intersection Observer para scroll reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos los elementos con clase scroll-reveal
document.querySelectorAll('.scroll-reveal').forEach(element => {
    observer.observe(element);
});

// Agregar scroll reveal a secciones automáticamente
document.querySelectorAll('section').forEach((section, index) => {
    if (index > 0) {
        section.classList.add('scroll-reveal');
        observer.observe(section);
    }
});

// Efecto hover en las tarjetas de cualidades
document.querySelectorAll('.card-hover').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Active link indicator en navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-rose-600', 'font-bold');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('text-rose-600', 'font-bold');
        }
    });
});

// Animación de pétalos (opcional)
function createPetal() {
    const petal = document.createElement('div');
    petal.textContent = '🌸';
    petal.style.position = 'fixed';
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.top = '-20px';
    petal.style.pointerEvents = 'none';
    petal.style.fontSize = (Math.random() * 20 + 10) + 'px';
    petal.style.opacity = Math.random() * 0.7 + 0.3;
    petal.style.zIndex = '1';
    petal.style.animation = `petalFall ${Math.random() * 3 + 4}s linear forwards`;

    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 4000);
}

// Crear pétalos ocasionalmente
setInterval(createPetal, 2000);

// Agregar estilos para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes heartFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.3);
        }
    }

    @keyframes petalFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Permitir doble clic en los botones principales para confirmar
let lastClickTime = 0;
const primaryButtons = document.querySelectorAll('button[id^="btn-"]');

primaryButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime < 500) {
            createHeartBurst();
        }
        lastClickTime = currentTime;
    });
});

// Mobile menu toggle (si es necesario agregar más tarde)
function handleMobileMenu() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href')?.startsWith('#')) {
            link.addEventListener('click', () => {
                // Cerrar menú si existe
                const mobileMenu = document.querySelector('[data-mobile-menu]');
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                }
            });
        }
    });
}

handleMobileMenu();

// Lazy loading para imágenes (si es necesario)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Función para imprimir la página (permite guardar como PDF)
function printPage() {
    window.print();
}

// Log de inicialización
console.log('%c💕 Página de Mamá Cargada! 💕', 'color: #E8C5D8; font-size: 16px; font-weight: bold;');
console.log('Gracias por visitar esta página especial dedicada a alguien muy importante.');
