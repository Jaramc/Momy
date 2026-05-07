// Mobile menu toggle
const backgroundAudio = document.getElementById('background-audio');
const audioMuteToggle = document.getElementById('audio-mute-toggle');
const audioIconOn = document.getElementById('audio-icon-on');
const audioIconOff = document.getElementById('audio-icon-off');

function updateAudioButtonState() {
    if (!backgroundAudio || !audioMuteToggle || !audioIconOn || !audioIconOff) {
        return;
    }

    const isMuted = backgroundAudio.muted;
    audioMuteToggle.setAttribute('aria-pressed', isMuted ? 'true' : 'false');
    audioMuteToggle.setAttribute('aria-label', isMuted ? 'Activar música' : 'Silenciar música');
    audioIconOn.classList.toggle('hidden', isMuted);
    audioIconOff.classList.toggle('hidden', !isMuted);
}

function tryStartBackgroundAudio() {
    if (!backgroundAudio) {
        return;
    }

    backgroundAudio.play().catch(() => {
        const resumeAudio = () => {
            backgroundAudio.play().catch(() => {});
            document.removeEventListener('click', resumeAudio);
            document.removeEventListener('touchstart', resumeAudio);
            document.removeEventListener('keydown', resumeAudio);
        };

        document.addEventListener('click', resumeAudio, { once: true });
        document.addEventListener('touchstart', resumeAudio, { once: true });
        document.addEventListener('keydown', resumeAudio, { once: true });
    });
}

if (backgroundAudio) {
    backgroundAudio.volume = 0.45;
    backgroundAudio.muted = false;
    updateAudioButtonState();
    tryStartBackgroundAudio();
}

if (audioMuteToggle && backgroundAudio) {
    audioMuteToggle.addEventListener('click', () => {
        backgroundAudio.muted = !backgroundAudio.muted;
        updateAudioButtonState();

        if (!backgroundAudio.muted) {
            tryStartBackgroundAudio();
        }
    });
}

const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenuToggle.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
    });

    // Close mobile menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

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
document.getElementById('btn-back-to-top')?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Botón "Enviar amor" - Easter egg
const setupLoveButton = (buttonId) => {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', () => {
            createHeartAnimation();
            showNotification('¡Tu amor ha sido enviado con éxito! 💕');
        });
    }
};

setupLoveButton('btn-send-love');
setupLoveButton('btn-send-love-mobile');

// Botón "Ver mi mensaje para ti"
document.getElementById('btn-message')?.addEventListener('click', () => {
    const mensajeSection = document.getElementById('mensaje');
    if (mensajeSection) {
        mensajeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

// Navbar home button
document.getElementById('navbar-home')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Descargar como PDF
document.getElementById('btn-download-pdf')?.addEventListener('click', () => {
    window.print();
    showNotification('Usa "Guardar como PDF" en tu navegador 📄');
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

// Active link indicator en navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]:not([id])');

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

// Animación de pétalos (optimizada)
let petalInterval;

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

// Iniciar pétalos (intervalo optimizado)
petalInterval = setInterval(createPetal, 3000);

// Detener pétalos en modo reduce-motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    clearInterval(petalInterval);
}

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

// Doble clic en botones para heart burst
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

// Lazy loading para imágenes
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

// Log de inicialización
console.log('%c💕 Página de Mamá Cargada! 💕', 'color: #E8C5D8; font-size: 16px; font-weight: bold;');
console.log('Gracias por visitar esta página especial dedicada a alguien muy importante.');

// Galería Modal
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const modalClose = document.getElementById('modal-close');

let currentImageIndex = 0;
const galleryImages = [];

// Colectar imágenes de la galería
document.querySelectorAll('#galeria img').forEach((img, index) => {
    galleryImages.push({
        src: img.src,
        alt: img.alt,
        title: img.parentElement.querySelector('h3')?.textContent || 'Foto',
        description: img.parentElement.querySelector('h3')?.textContent || 'Un momento especial'
    });

    img.parentElement.addEventListener('click', (e) => {
        e.preventDefault();
        currentImageIndex = index;
        openImageModal();
    });
});

function openImageModal() {
    if (galleryImages.length === 0) return;

    const image = galleryImages[currentImageIndex];
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalTitle.textContent = image.title;
    modalDescription.textContent = image.description;
    imageModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    imageModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    openImageModal();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    openImageModal();
}

// Event listeners del modal
if (modalClose) modalClose.addEventListener('click', closeImageModal);
if (modalNext) modalNext.addEventListener('click', nextImage);
if (modalPrev) modalPrev.addEventListener('click', prevImage);
if (imageModal) {
    imageModal.addEventListener('click', closeImageModal);
}

// Teclas del teclado para navegar
document.addEventListener('keydown', (e) => {
    if (imageModal.classList.contains('hidden')) return;

    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeImageModal();
});

