/* ========================================
   GLOBAL METALS - JavaScript
   ======================================== */

// Translations
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.title': 'We Buy Your Scrap Metal',
        'hero.subtitle': 'Best prices in Miami - Immediate Payment',
        'hero.call': 'Call Now',
        'hero.learn': 'Learn More',
        
        // About
        'about.title': 'About GLOBAL METALS',
        'about.lead': 'GLOBAL METALS is a leading scrap metal recycling company in Miami, dedicated to providing top-quality service and the best prices for your scrap metal.',
        'about.p1': 'We specialize in purchasing all types of ferrous and non-ferrous metals from individuals, businesses, and construction companies. Our commitment to sustainability and environmental responsibility makes us a trusted partner in metal recycling.',
        'about.p2': 'With our professional team and state-of-the-art facilities, we ensure fair weighing, competitive pricing, and immediate payment for all your scrap metal.',
        'about.stat1': '100%',
        'about.stat1Label': 'Recycled',
        'about.stat2': 'Best',
        'about.stat2Label': 'Prices',
        'about.stat3': '24h',
        'about.stat3Label': 'Service',
        
        // Video
        'video.title': 'See Our Process in Action',
        'video.subtitle': 'Professional service you can trust',
        
        // Services
        'services.title': 'Our Services',
        'services.subtitle': 'Comprehensive scrap metal solutions',
        'services.s1.title': 'Scrap Metal Purchase',
        'services.s1.desc': 'We buy all types of metals: iron, steel, aluminum, copper, brass, stainless steel, electric cables, batteries, and old appliances.',
        'services.s2.title': 'Pickup Service',
        'services.s2.desc': 'We offer pickup service for large quantities from factories, workshops, construction sites, and demolition projects.',
        'services.s3.title': 'Industrial Demolition',
        'services.s3.desc': 'Dismantling of machinery, metal structures, factories, and warehouses. We recover metal for recycling.',
        'services.s4.title': 'Waste Management',
        'services.s4.desc': 'Regular contracts with companies for periodic metal waste removal and recycling container placement.',
        'services.s5.title': 'Metal Sorting',
        'services.s5.desc': 'Professional separation, compaction, and preparation of metals for foundries and metallurgical industries.',
        'services.s6.title': 'Vehicle Scrap',
        'services.s6.desc': 'We buy vehicles for scrap, old machinery, electrical equipment, generators, and motors.',
        
        // Process
        'process.title': 'How It Works',
        'process.step1.title': 'Bring Your Scrap',
        'process.step1.desc': 'Bring your unwanted waste materials to our facility',
        'process.step2.title': 'We Weigh It',
        'process.step2.desc': 'Our teams use professional scales for accurate weighing',
        'process.step3.title': 'Get Paid',
        'process.step3.desc': 'Receive immediate payment for your scrap metal',
        
        // Carousel (Hero)
        'carousel.title': 'Our Gallery',
        'carousel.subtitle': 'See our work and facilities',
        'carousel.img1': 'Images that will inspire you to recycle and sell your scrap',
        'carousel.img2': 'In 2019, around 70% of aluminum, 60% of steel and 50% of copper was recycled worldwide',
        'carousel.img3': 'We accept all types of appliances and metal waste',
        'carousel.img4': 'Are you ready to be part of these figures?',
        'carousel.img4b': 'Recycling is the future',
        'carousel.img5': 'We buy all types of metal rims',
        'carousel.img5b': 'Automotive parts welcome',
        'carousel.img7': 'Professional team ready to serve you',
        
        // Gallery (Portfolio Grid)
        'gallery.title': 'Our Work Gallery',
        'gallery.subtitle': 'See our facilities and the materials we handle',
        'gallery.img1': 'Metal recycling achievements worldwide',
        'gallery.img2': 'Metal recycling avoids millions of tons of waste',
        'gallery.img3': 'We buy your scrap - Contact us today',
        'gallery.img4': '$26 billion industry annually in the US',
        'gallery.img5': 'We accept all types of scrap metal',
        'gallery.img6': 'Metal rims and automotive parts',
        
        // Metals
        'metals.title': 'Metals We Buy',
        'metals.iron': 'Iron & Steel',
        'metals.aluminum': 'Aluminum',
        'metals.copper': 'Copper',
        'metals.brass': 'Brass',
        'metals.stainless': 'Stainless Steel',
        'metals.cables': 'Electric Cables',
        'metals.batteries': 'Batteries',
        'metals.appliances': 'Old Appliances',
        
        // Contact
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Get in touch for the best scrap metal prices',
        'contact.address': 'Address',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.hours': 'Hours',
        'contact.hoursValue': 'Monday - Saturday: 8:00 AM - 5:00 PM',
        
        // Footer
        'footer.about': 'GLOBAL METALS - Your trusted partner for scrap metal recycling in Miami. We buy all types of metals at the best prices.',
        'footer.quick': 'Quick Links',
        'footer.services': 'Services',
        'footer.contact': 'Contact',
        'footer.s1': 'Scrap Metal Purchase',
        'footer.s2': 'Pickup Service',
        'footer.s3': 'Industrial Demolition',
        'footer.s4': 'Waste Management',
        'footer.rights': 'All Rights Reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.cookies': 'Cookie Policy',
        'footer.developed': 'Developed by',
        
        // Cookie Banner
        'cookie.message': 'We use cookies to improve your experience on our website. By continuing to browse, you agree to our use of cookies.',
        'cookie.accept': 'Accept',
        'cookie.learn': 'Learn More'
    },
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Somos',
        'nav.services': 'Servicios',
        'nav.contact': 'Contacto',
        
        // Hero
        'hero.title': 'Compramos tu Chatarra',
        'hero.subtitle': 'Mejores precios en Miami - Pago Inmediato',
        'hero.call': 'Llama Ahora',
        'hero.learn': 'Más Información',
        
        // About
        'about.title': 'Sobre GLOBAL METALS',
        'about.lead': 'GLOBAL METALS es una empresa líder en reciclaje de chatarra en Miami, dedicada a proporcionar servicio de alta calidad y los mejores precios por tu chatarra.',
        'about.p1': 'Nos especializamos en comprar todo tipo de metales ferrosos y no ferrosos de particulares, empresas y constructoras. Nuestro compromiso con la sostenibilidad y la responsabilidad ambiental nos convierte en un socio de confianza en el reciclaje de metales.',
        'about.p2': 'Con nuestro equipo profesional e instalaciones de última generación, garantizamos un pesaje justo, precios competitivos y pago inmediato por toda tu chatarra.',
        'about.stat1': '100%',
        'about.stat1Label': 'Reciclado',
        'about.stat2': 'Mejor',
        'about.stat2Label': 'Precios',
        'about.stat3': '24h',
        'about.stat3Label': 'Servicio',
        
        // Video
        'video.title': 'Mira Nuestro Proceso en Acción',
        'video.subtitle': 'Servicio profesional en el que puedes confiar',
        
        // Services
        'services.title': 'Nuestros Servicios',
        'services.subtitle': 'Soluciones integrales en chatarra',
        'services.s1.title': 'Compra de Chatarra',
        'services.s1.desc': 'Compramos todo tipo de metales: hierro, acero, aluminio, cobre, latón, acero inoxidable, cables eléctricos, baterías y electrodomésticos viejos.',
        'services.s2.title': 'Recogida a Domicilio',
        'services.s2.desc': 'Ofrecemos servicio de recogida para grandes cantidades de fábricas, talleres, obras de construcción y proyectos de demolición.',
        'services.s3.title': 'Demolición Industrial',
        'services.s3.desc': 'Desmontaje de maquinaria, estructuras metálicas, fábricas y almacenes. Recuperamos el metal para reciclar.',
        'services.s4.title': 'Gestión de Residuos',
        'services.s4.desc': 'Contratos regulares con empresas para retirada periódica de residuos metálicos y colocación de contenedores de reciclaje.',
        'services.s5.title': 'Clasificación de Metales',
        'services.s5.desc': 'Separación profesional, compactación y preparación de metales para fundiciones e industrias metalúrgicas.',
        'services.s6.title': 'Vehículos para Desguace',
        'services.s6.desc': 'Compramos vehículos para desguace, maquinaria vieja, equipos eléctricos, generadores y motores.',
        
        // Process
        'process.title': 'Cómo Funciona',
        'process.step1.title': 'Trae tu Chatarra',
        'process.step1.desc': 'Trae tus materiales de desecho no deseados a nuestras instalaciones',
        'process.step2.title': 'Pesamos la Chatarra',
        'process.step2.desc': 'Nuestros equipos utilizan básculas profesionales para un pesaje preciso',
        'process.step3.title': 'Recibe tu Pago',
        'process.step3.desc': 'Recibe pago inmediato por tu chatarra',
        
        // Carousel (Hero)
        'carousel.title': 'Nuestra Galería',
        'carousel.subtitle': 'Mira nuestro trabajo e instalaciones',
        'carousel.img1': 'Imágenes que te inspirarán para reciclar y vender tu chatarra',
        'carousel.img2': 'En 2019, se recicló alrededor del 70% del aluminio, 60% del acero y 50% del cobre a nivel mundial',
        'carousel.img3': 'Aceptamos todo tipo de electrodomésticos y residuos metálicos',
        'carousel.img4': '¿Estás listo para ser parte de estas cifras?',
        'carousel.img4b': 'El reciclaje es el futuro',
        'carousel.img5': 'Compramos todo tipo de rines de metal',
        'carousel.img5b': 'Piezas automotrices bienvenidas',
        'carousel.img7': 'Equipo profesional listo para servirte',
        
        // Gallery (Portfolio Grid)
        'gallery.title': 'Galería de Trabajos',
        'gallery.subtitle': 'Mira nuestras instalaciones y los materiales que manejamos',
        'gallery.img1': 'Logros del reciclaje de metales en el mundo',
        'gallery.img2': 'El reciclaje de metales evita millones de toneladas de residuos',
        'gallery.img3': 'Compramos tu chatarra - Contáctanos hoy',
        'gallery.img4': 'Industria de $26 mil millones anuales en EE.UU.',
        'gallery.img5': 'Aceptamos todo tipo de chatarra metálica',
        'gallery.img6': 'Rines y piezas automotrices',
        
        // Metals
        'metals.title': 'Metales que Compramos',
        'metals.iron': 'Hierro y Acero',
        'metals.aluminum': 'Aluminio',
        'metals.copper': 'Cobre',
        'metals.brass': 'Latón',
        'metals.stainless': 'Acero Inoxidable',
        'metals.cables': 'Cables Eléctricos',
        'metals.batteries': 'Baterías',
        'metals.appliances': 'Electrodomésticos',
        
        // Contact
        'contact.title': 'Contáctanos',
        'contact.subtitle': 'Comunícate para obtener los mejores precios de chatarra',
        'contact.address': 'Dirección',
        'contact.phone': 'Teléfono',
        'contact.email': 'Correo',
        'contact.hours': 'Horario',
        'contact.hoursValue': 'Lunes - Sábado: 8:00 AM - 5:00 PM',
        
        // Footer
        'footer.about': 'GLOBAL METALS - Tu socio de confianza para el reciclaje de chatarra en Miami. Compramos todo tipo de metales a los mejores precios.',
        'footer.quick': 'Enlaces Rápidos',
        'footer.services': 'Servicios',
        'footer.contact': 'Contacto',
        'footer.s1': 'Compra de Chatarra',
        'footer.s2': 'Recogida a Domicilio',
        'footer.s3': 'Demolición Industrial',
        'footer.s4': 'Gestión de Residuos',
        'footer.rights': 'Todos los Derechos Reservados.',
        'footer.privacy': 'Política de Privacidad',
        'footer.cookies': 'Política de Cookies',
        'footer.developed': 'Desarrollado por',
        
        // Cookie Banner
        'cookie.message': 'Usamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestro uso de cookies.',
        'cookie.accept': 'Aceptar',
        'cookie.learn': 'Más Información'
    }
};

// Current language
let currentLang = 'en';

// ========================================
// DOM ELEMENTS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle - Inside Nav
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Cookie Banner
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesBtn = document.getElementById('acceptCookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }

    acceptCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('show');
    });

    // Initialize Carousel
    initCarousel();

    // Scroll Animations
    initScrollAnimations();

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ========================================
// LANGUAGE FUNCTIONALITY
// ========================================
function setLanguage(lang) {
    currentLang = lang;
    
    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            // Preserve HTML content if element has child elements
            if (element.children.length === 0) {
                element.textContent = translations[lang][key];
            } else {
                // For elements with icons, only update text nodes
                element.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = translations[lang][key];
                    }
                });
            }
        }
    });

    // Store preference
    localStorage.setItem('preferredLanguage', lang);
}

// Load saved language preference on page load
const savedLang = localStorage.getItem('preferredLanguage') || 'en';
setLanguage(savedLang);

// ========================================
// CAROUSEL FUNCTIONALITY
// ========================================
function initCarousel() {
    // Initialize Hero Carousel only
    initCarouselInstance('.hero-carousel .carousel', '.hero-carousel .prev-btn', '.hero-carousel .next-btn', '.hero-carousel .carousel-dots');
}

function initCarouselInstance(carouselSelector, prevBtnSelector, nextBtnSelector, dotsSelector) {
    const carousel = document.querySelector(carouselSelector);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector(prevBtnSelector);
    const nextBtn = document.querySelector(nextBtnSelector);
    const dotsContainer = document.querySelector(dotsSelector);

    if (!slides.length || !prevBtn || !nextBtn || !dotsContainer) return;

    let currentIndex = 0;
    let autoPlayInterval;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
        resetAutoPlay();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        if (touchStartX - touchEndX > 50) {
            nextSlide();
        } else if (touchEndX - touchStartX > 50) {
            prevSlide();
        }
        resetAutoPlay();
    }

    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        startAutoPlay();
    });

    // Start autoplay
    startAutoPlay();
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Observe cards
    document.querySelectorAll('.service-card, .metal-item, .stat-item').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
}

// ========================================
// ACTIVE NAV LINK ON SCROLL
// ========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// PARALLAX EFFECT FOR HERO
// ========================================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.scrollY;
    if (scrolled < hero.offsetHeight) {
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
});

// ========================================
// COUNTER ANIMATION FOR STATS
// ========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('%')) {
                    const num = parseInt(text);
                    animateCounter(stat, num);
                    stat.textContent = num + '%';
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// ========================================
// LAZY LOADING FOR IMAGES
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// ========================================
// VIDEO CONTROLS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.video-container video');
    if (video) {
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    }
});

// ========================================
// FORM HANDLING (if needed in future)
// ========================================
function handleFormSubmit(e) {
    e.preventDefault();
    // Form handling logic would go here
    console.log('Form submitted');
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// ERROR HANDLING
// ========================================
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // Could send to error tracking service
});

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%cGLOBAL METALS', 'font-size: 24px; font-weight: bold; color: #0066cc;');
console.log('%cProfessional Scrap Metal Recycling in Miami', 'font-size: 14px; color: #666;');
console.log('%cDeveloped by Christian Herencia', 'font-size: 12px; color: #999;');
