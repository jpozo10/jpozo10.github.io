// Variables globales
let cart = [];
let currentRegion = null;

// Datos de productos con sus historias
const productData = {
    'sombrero-vueltiao': {
        title: 'Sombrero Vueltiao',
        region: 'Región Caribe',
        origin: 'Córdoba',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iODAiIGZpbGw9IiNGRkY3RUQiIHN0cm9rZT0iIzkyNzI0QSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNDAiIGZpbGw9IiM5MjcyNEEiLz4KPHN2Zz4K',
        history: 'El sombrero vueltiao es símbolo nacional de Colombia. Su técnica de tejido se remonta a la cultura Zenú, que habitó estas tierras hace más de 2.000 años. Cada vuelta representa la sabiduría ancestral transmitida de generación en generación. Las fibras de caña flecha son cuidadosamente seleccionadas y preparadas por artesanas expertas que han perfeccionado esta técnica milenaria.',
        significance: 'Representa la identidad costeña y la resistencia cultural. Los patrones geométricos no son decorativos, sino que narran historias de la cosmovisión Zenú. Cada sombrero es único y cuenta la historia de quien lo teje. Es considerado patrimonio cultural inmaterial de la humanidad por la UNESCO.',
        community: 'Las comunidades de Tuchín, Córdoba, mantienen viva esta tradición. Más de 3.000 familias dependen de esta actividad artesanal. Nuestro programa de comercio justo garantiza que el 70% del precio de venta regrese directamente a las artesanas, permitiendo que sus hijos estudien y perpetúen estas tradiciones.'
    },
    'mochila-wayuu': {
        title: 'Mochila Wayuu',
        region: 'Región Caribe',
        origin: 'La Guajira',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjQwIiB5PSI2MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMDAiIHJ4PSIxMCIgZmlsbD0iI0Y1OUU0MiIvPgo8cmVjdCB4PSI1MCIgeT0iNzAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMjAiIGZpbGw9IiNFRDhBMTkiLz4KPHJlY3QgeD0iNTAiIHk9IjEwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI0VEOEExOSIvPgo8cmVjdCB4PSI1MCIgeT0iMTMwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjRUQ4QTE5Ii8+CjwvdXRnPgo=',
        history: 'La mochila wayuu es el resultado de un conocimiento ancestral transmitido de madres a hijas durante siglos. Según la tradición wayuu, Wale Kerü (la araña) enseñó a las mujeres el arte del tejido. Cada mochila puede tomar hasta un mes en completarse, utilizando técnicas de crochet con algodón o hilo acrílico.',
        significance: 'Los diseños y colores tienen significados profundos en la cultura wayuu. Cada patrón representa elementos de la naturaleza: el mar, el desierto, las montañas. Una mochila no es solo un accesorio, es un mapa simbólico del territorio wayuu y una expresión de la identidad de quien la teje.',
        community: 'Las mujeres wayuu son las guardianas de esta tradición. A través de nuestro programa, apoyamos a más de 500 tejedoras en rancherías remotas de La Guajira, garantizando acceso a materiales de calidad y precios justos que les permiten sostener a sus familias y preservar su cultura.'
    },
    'cafe-organico': {
        title: 'Café Orgánico Premium',
        region: 'Región Andina',
        origin: 'Huila',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjYwIiB5PSI0MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjEyMCIgcng9IjEwIiBmaWxsPSIjOEI0NTEzIi8+CjxyZWN0IHg9IjcwIiB5PSI1MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRkZGN0VEIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjExMCIgcj0iMjAiIGZpbGw9IiM0QTI1MTIiLz4KPHN2Zz4K',
        history: 'El café llegó a Colombia en el siglo XIX y encontró en los suelos volcánicos del Huila su hogar perfecto. Nuestro café proviene de fincas familiares que han perfeccionado su cultivo durante generaciones, utilizando métodos orgánicos que respetan los ciclos naturales y la biodiversidad de la región.',
        significance: 'El café no es solo un producto, es el alma de miles de familias campesinas. Representa la tenacidad del caficultor colombiano y su compromiso con la excelencia. Cada grano cuenta la historia de madrugadas, de manos curtidas por el trabajo, de esperanzas depositadas en cada cosecha.',
        community: 'Trabajamos directamente con 200 familias caficultoras del Huila, garantizando precios por encima del mercado internacional. Les proporcionamos asistencia técnica para mantener certificaciones orgánicas y apoyamos proyectos educativos para que los jóvenes vean en el café una alternativa de vida digna.'
    },
    'hamaca-wayuu': {
        title: 'Hamaca Wayuu',
        region: 'Región Caribe',
        origin: 'La Guajira',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zMCAxMDBRNTAgODAgMTAwIDkwUTE1MCA4MCAxNzAgMTAwUTE1MCAxMjAgMTAwIDExMFE1MCAxMjAgMzAgMTAwWiIgZmlsbD0iI0Y1OUU0MiIvPgo8bGluZSB4MT0iMzAiIHkxPSIxMDAiIHgyPSIyMCIgeTI9IjEwMCIgc3Ryb2tlPSIjOTI3MjRBIiBzdHJva2Utd2lkdGg9IjMiLz4KPGxpbmUgeDE9IjE3MCIgeTE9IjEwMCIgeDI9IjE4MCIgeTI9IjEwMCIgc3Ryb2tlPSIjOTI3MjRBIiBzdHJva2Utd2lkdGg9IjMiLz4KPHN2Zz4K',
        history: 'La hamaca wayuu es mucho más que un lugar de descanso; es el centro de la vida familiar wayuu. Tejida con hilos de algodón o acrílico, cada hamaca requiere de técnicas especializadas que se aprenden desde la infancia. Los diseños varían según el clan familiar y la región específica de La Guajira.',
        significance: 'En la cultura wayuu, la hamaca es donde nacen las historias, donde los abuelos transmiten la sabiduría ancestral a los nietos. Es el lugar de la reflexión, del descanso merecido, de la conversación familiar. Los patrones tejidos narran la historia del territorio y las tradiciones del pueblo wayuu.',
        community: 'Las hamacas son tejidas principalmente por mujeres wayuu que combinan esta actividad con el cuidado de la familia y otras labores. Nuestro programa les permite tener ingresos estables, acceso a materiales de calidad y capacitaciones para perfeccionar sus técnicas, manteniendo vivas estas tradiciones milenarias.'
    },
        'manta-wayuu': {
        title: 'Hamaca Wayuu',
        region: 'Región Caribe',
        origin: 'La Guajira',
        image: 'https://i.pinimg.com/736x/a8/75/39/a8753971af8b1b9884658cdadbc41973.jpg',
        history: 'La manta wayuu, o wsyuushein, es una pieza fundamental de la identidad cultural y el vestuario tradicional de las mujeres wayuu de la Guajira. No solo es una prenda, sino un símbolo de su sabiduría ancestral, su cosmovisión y su papel central en la sociedad',
        significance: 'Identidad y orgullo: La manta wayuu representa la identidad de las mujeres indígenas de la Guajira, siendo un símbolo de orgullo y respeto por sus costumbres. ',
        community: 'la manta wayuu es mucho más que una prenda; es un tesoro cultural que refleja la historia, la sabiduría y la identidad de un pueblo indígena que se ha mantenido firme a pesar de los desafíos. '
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeProductModals();
    initializeRegionCards();
    initializeScrollAnimations();
    initializeHeroButtons();
    initializeCart();
});

// Navegación móvil
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Navegación suave
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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

    // Header transparente en scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Modales de productos
function initializeProductModals() {
    const modal = document.getElementById('productModal');
    const modalClose = document.querySelector('.close');
    const viewHistoryButtons = document.querySelectorAll('.btn-view-history');

    // Abrir modal
    viewHistoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productCard = this.closest('.product-card');
            const productId = productCard.getAttribute('data-product');
            openProductModal(productId);
        });
    });

    // Cerrar modal
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cerrar con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openProductModal(productId) {
    const modal = document.getElementById('productModal');
    const product = productData[productId];

    if (product && modal) {
        // Llenar contenido del modal
        document.getElementById('modalImage').src = product.image;
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalRegion').textContent = product.region;
        document.getElementById('modalOrigin').textContent = product.origin;
        document.getElementById('modalHistory').textContent = product.history;
        document.getElementById('modalSignificance').textContent = product.significance;
        document.getElementById('modalCommunity').textContent = product.community;

        // Mostrar modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Animación de entrada
        setTimeout(() => {
            modal.querySelector('.modal-content').classList.add('animate');
        }, 10);
    }
}

function closeModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        modal.querySelector('.modal-content').classList.remove('animate');
        document.body.style.overflow = '';
    }
}

// Tarjetas de regiones
function initializeRegionCards() {
    const regionCards = document.querySelectorAll('.region-card');

    regionCards.forEach(card => {
        card.addEventListener('click', function() {
            const region = this.getAttribute('data-region');
            highlightRegion(region);
        });

        // Efecto hover
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function highlightRegion(region) {
    currentRegion = region;
    
    // Filtrar productos por región si es necesario
    console.log(`Región seleccionada: ${region}`);
    
    // Aquí podrías agregar lógica para filtrar productos
    // o mostrar información específica de la región
}

// Animaciones de scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Elementos a animar
    const animatedElements = document.querySelectorAll('.region-card, .product-card, .feature, .map-point');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Botones del hero
function initializeHeroButtons() {
    const exploreBtn = document.querySelector('.btn-primary');
    const storiesBtn = document.querySelector('.btn-secondary');

    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            document.querySelector('#productos').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    if (storiesBtn) {
        storiesBtn.addEventListener('click', function() {
            document.querySelector('#historia').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// Sistema de carrito
function initializeCart() {
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            const productOrigin = productCard.querySelector('.product-origin').textContent;

            addToCart({
                name: productName,
                price: productPrice,
                origin: productOrigin
            });

            // Feedback visual
            this.textContent = '¡Agregado!';
            this.style.backgroundColor = '#10B981';
            
            setTimeout(() => {
                this.textContent = 'Agregar al Carrito';
                this.style.backgroundColor = '';
            }, 2000);
        });
    });
}

function addToCart(product) {
    cart.push(product);
    updateCartUI();
    
    // Aquí podrías agregar lógica para persistir el carrito
    console.log('Producto agregado al carrito:', product);
    console.log('Carrito actual:', cart);
}

function updateCartUI() {
    // Actualizar contador del carrito si existe
    const cartCounter = document.querySelector('.cart-counter');
    if (cartCounter) {
        cartCounter.textContent = cart.length;
        cartCounter.style.display = cart.length > 0 ? 'block' : 'none';
    }
}

// Utilidades
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

// Lazy loading para imágenes
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLazyLoading);
} else {
    initializeLazyLoading();
}
