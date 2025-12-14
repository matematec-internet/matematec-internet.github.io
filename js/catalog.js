
// Data Source
// badge: "Bestseller"
// badge: "Destacado"
// badge: "Nuevo"
// badge: "Oferta"
// badge: null
const products = [
    {
        id: 1,
        name: "Bolígrafo Bic o Pin Point",
        category: "Escritura",
        price: 5.00,
        image: "../assets/productos/1.png",
        badge: "Básico"
    },
    {
        id: 2,
        name: "Broche Baco",
        category: "Accesorios",
        price: 2.50,
        image: "../assets/productos/2.png",
        badge: null
    },
    {
        id: 3,
        name: "Calculadora Casio 82ES-Plus",
        category: "Tecnología",
        price: 300.00,
        image: "../assets/productos/3.png",
        badge: "Destacado"
    },
    {
        id: 4,
        name: "Carpeta media pulgada",
        category: "Papel",
        price: 75.00,
        image: "../assets/productos/4.png",
        badge: null
    },
    {
        id: 5,
        name: "Cartulina blanca",
        category: "Papel",
        price: 5.00,
        image: "../assets/productos/5.png",
        badge: null
    },
    {
        id: 6,
        name: "Cartulina ilustración 1/4",
        category: "Papel",
        price: 19.00,
        image: "../assets/productos/6.png",
        badge: null
    },
    {
        id: 7,
        name: "Cartulina negra",
        category: "Papel",
        price: 10.00,
        image: "../assets/productos/7.png",
        badge: null
    },
    {
        id: 8,
        name: "Cartulina opalina carta",
        category: "Papel",
        price: 2.00,
        image: "../assets/productos/8.png",
        badge: null
    },
    {
        id: 9,
        name: "CDs (con sobre)",
        category: "Tecnología",
        price: 11.00,
        image: "../assets/productos/9.png",
        badge: null
    },
    {
        id: 10,
        name: "Cinta adhesiva (18mm)",
        category: "Adhesivos",
        price: 15.00,
        image: "../assets/productos/11.png", // Nota: En tu lista original saltaste del 9 al 11
        badge: null
    },
    {
        id: 11,
        name: "Compás",
        category: "Geometría",
        price: 20.00,
        image: "../assets/productos/12.png",
        badge: null
    },
    {
        id: 12,
        name: "Corrector líquido",
        category: "Escritura",
        price: 12.00,
        image: "../assets/productos/13.png",
        badge: null
    },
    {
        id: 13,
        name: "Cuaderno Scribe profesional",
        category: "Papel",
        price: 36.00,
        image: "../assets/productos/14.png",
        badge: "Bestseller"
    },
    {
        id: 14,
        name: "Cutter mediano",
        category: "Herramientas",
        price: 7.00,
        image: "../assets/productos/15.png",
        badge: null
    },
    {
        id: 15,
        name: "DVD (con sobre)",
        category: "Tecnología",
        price: 13.00,
        image: "../assets/productos/16.png",
        badge: null
    },
    {
        id: 16,
        name: "Escuadra o regla",
        category: "Geometría",
        price: 12.00,
        image: "../assets/productos/17.png",
        badge: null
    },
    {
        id: 17,
        name: "Etiqueta imprimible (1 hoja)",
        category: "Papel",
        price: 5.00,
        image: "../assets/productos/18.png",
        badge: null
    },
    {
        id: 18,
        name: "Folder carta",
        category: "Papel",
        price: 3.00,
        image: "../assets/productos/19.png",
        badge: null
    },
    {
        id: 19,
        name: "Folder de costilla",
        category: "Papel",
        price: 11.00,
        image: "../assets/productos/20.png",
        badge: null
    },
    {
        id: 20,
        name: "Folder oficio",
        category: "Papel",
        price: 4.00,
        image: "../assets/productos/21.png",
        badge: null
    },
    {
        id: 21,
        name: "Goma Pelikan",
        category: "Escritura", // O Accesorios
        price: 5.00,
        image: "../assets/productos/22.png",
        badge: null
    },
    {
        id: 22,
        name: "Hoja milimétrica",
        category: "Papel",
        price: 1.00,
        image: "../assets/productos/23.png",
        badge: null
    },
    {
        id: 23,
        name: "Hojas bond (dos unidades)",
        category: "Papel",
        price: 0.50,
        image: "../assets/productos/24.png",
        badge: "Oferta"
    },
    {
        id: 24,
        name: "Juego de geometría",
        category: "Geometría",
        price: 32.00,
        image: "../assets/productos/25.png",
        badge: null
    },
    {
        id: 25,
        name: "Lápices de colores (caja)",
        category: "Escritura",
        price: 17.00,
        image: "../assets/productos/26.png",
        badge: null
    },
    {
        id: 26,
        name: "Lápiz Adhesivo Dixon",
        category: "Adhesivos",
        price: 11.00,
        image: "../assets/productos/27.png",
        badge: null
    },
    {
        id: 27,
        name: "Lápiz Maped con punta",
        category: "Escritura",
        price: 5.00,
        image: "../assets/productos/28.png",
        badge: null
    },
    {
        id: 28,
        name: "Lápiz Mirado",
        category: "Escritura",
        price: 5.00,
        image: "../assets/productos/29.png",
        badge: null
    },
    {
        id: 29,
        name: "Marcador delgado Tatoo",
        category: "Escritura",
        price: 16.00,
        image: "../assets/productos/30.png",
        badge: null
    },
    {
        id: 30,
        name: "Marcador permanente Baco",
        category: "Escritura",
        price: 30.00,
        image: "../assets/productos/31.png",
        badge: null
    },
    {
        id: 31,
        name: "Marcador pizarrón blanco (1 unidad)",
        category: "Escritura",
        price: 33.00,
        image: "../assets/productos/32.png",
        badge: null
    },
    {
        id: 32,
        name: "Marcadores pizarrón (caja con 4)",
        category: "Escritura",
        price: 110.00,
        image: "../assets/productos/33.png",
        badge: null
    },
    {
        id: 33,
        name: "Marcatextos pelikan",
        category: "Escritura",
        price: 12.00,
        image: "../assets/productos/34.png",
        badge: null
    },
    {
        id: 34,
        name: "Masking tape 24mm",
        category: "Adhesivos",
        price: 35.00,
        image: "../assets/productos/35.png",
        badge: null
    },
    {
        id: 35,
        name: "Memoria USB 32GB",
        category: "Tecnología",
        price: 140.00,
        image: "../assets/productos/36.png",
        badge: null
    },
    {
        id: 36,
        name: "Mini DVD",
        category: "Tecnología",
        price: 30.00,
        image: "../assets/productos/37.png",
        badge: null
    },
    {
        id: 37,
        name: "Papel de colores (1 hoja)",
        category: "Papel",
        price: 1.00,
        image: "../assets/productos/38.png",
        badge: null
    },
    {
        id: 38,
        name: "Papel doble carta (1 hoja)",
        category: "Papel",
        price: 1.00,
        image: "../assets/productos/39.png",
        badge: null
    },
    {
        id: 39,
        name: "Papel fotográfico (1 hoja)",
        category: "Papel",
        price: 5.00,
        image: "../assets/productos/40.png",
        badge: null
    },
    {
        id: 40,
        name: "Papel opalina",
        category: "Papel",
        price: 1.00,
        image: "../assets/productos/41.png",
        badge: null
    },
    {
        id: 41,
        name: "Protectores de hojas carta",
        category: "Papel",
        price: 2.50,
        image: "../assets/productos/42.png",
        badge: null
    },
    {
        id: 42,
        name: "Repuestos para carpeta",
        category: "Papel",
        price: 52.00,
        image: "../assets/productos/43.png",
        badge: null
    },
    {
        id: 43,
        name: "Rotafolio bond",
        category: "Papel",
        price: 4.50,
        image: "../assets/productos/44.png",
        badge: null
    },
    {
        id: 44,
        name: "Sacapuntas",
        category: "Herramientas",
        price: 1.50,
        image: "../assets/productos/45.png",
        badge: null
    },
    {
        id: 45,
        name: "Sobre burbuja",
        category: "Papel",
        price: 18.00,
        image: "../assets/productos/46.png",
        badge: null
    },
    {
        id: 46,
        name: "Sobre de papel tamaño carta",
        category: "Papel",
        price: 9.00,
        image: "../assets/productos/47.png",
        badge: null
    },
    {
        id: 47,
        name: "Sobre de papel tamaño oficio",
        category: "Papel",
        price: 10.00,
        image: "../assets/productos/48.png",
        badge: null
    },
    {
        id: 48,
        name: "Sobre de plástico tamaño carta",
        category: "Papel",
        price: 22.00,
        image: "../assets/productos/49.png",
        badge: null
    },
    {
        id: 49,
        name: "Sobre para CD",
        category: "Tecnología",
        price: 1.50,
        image: "../assets/productos/50.png",
        badge: null
    },
    {
        id: 50,
        name: "Tabla periódica",
        category: "Didáctico",
        price: 2.50,
        image: "../assets/productos/51.png",
        badge: null
    },
    {
        id: 51,
        name: "Tarjeta bibliográfica o de trabajo",
        category: "Papel",
        price: 0.50,
        image: "../assets/productos/52.png",
        badge: null
    },
    {
        id: 52,
        name: "Tijeras barrilito",
        category: "Herramientas",
        price: 24.00,
        image: "../assets/productos/53.png",
        badge: null
    },
    {
        id: 53,
        name: "Transportador",
        category: "Geometría",
        price: 22.00,
        image: "../assets/productos/54.png",
        badge: null
    }
];


// State
let currentFilter = 'all';
let isExpanded = false;
const MOBILE_LIMIT = 4;

// DOM Elements
const grid = document.getElementById('product-grid');

// Initial Render
function init() {
    if (grid) {
        renderProducts(products);
        setupLoadMoreButton();
        updateMobileVisibility();
    }
    // Initialize Navbar/Search State based on current width to prevent visual bugs on load
    closeMobileSearch();
}



// Blob and Loading Logic
// Uses window.LOADING_BLOB_URL defined in head

function loadProductImage(img) {
    const src = img.getAttribute('data-src');
    if (!src || src.startsWith('/gen') || src.startsWith('/image')) return; // Handled by injected script

    const temp = new Image();
    temp.src = src;
    temp.onload = () => {
        img.src = src;
        img.removeAttribute('onload'); // Prevent re-triggering
    };
}

// Render Products
function renderProducts(items) {
    grid.innerHTML = '';

    // Add slight stagger effect class
    items.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = `group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col`;
        card.style.animationDelay = `${index * 0.05}s`;

        // Remove animation class after usage to prevent re-triggering on filter
        card.addEventListener('animationend', () => {
            card.classList.remove('animate-fade-in');
            card.style.animationDelay = '';
        }, { once: true });

        // Add data-category for filtering
        card.setAttribute('data-category', product.category);

        card.innerHTML = `
            <div class="relative aspect-square overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
                ${product.badge ? `<span class="absolute top-3 left-3 bg-brand-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">${product.badge}</span>` : ''}
                <img src="${window.LOADING_BLOB_URL}" data-src="${product.image}" onload="loadProductImage(this)" alt="${product.name}" class="w-full h-full object-contain mix-blend-multiply filter group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-4 flex flex-col flex-grow">
                <span class="text-xs text-brand-600 font-semibold uppercase tracking-wide mb-1">${product.category}</span>
                <h3 class="font-bold text-gray-900 text-lg leading-tight mb-2 truncate" title="${product.name}">${product.name}</h3>
                <div class="mt-auto flex items-center justify-between">
                    <span class="text-xl font-bold text-gray-900">$${product.price.toFixed(2)}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Add hidden "no results" message
    const noResults = document.createElement('div');
    noResults.id = 'no-results-msg';
    noResults.className = 'col-span-full text-center py-12 text-gray-500 hidden';
    noResults.innerText = 'No se encontraron productos en esta categoría.';
    grid.appendChild(noResults);

    updateMobileVisibility();
}

// Filtering
function filterProducts(category) {
    currentFilter = category;
    isExpanded = false; // Reset expansion on filter change

    // State classes
    const activeClasses = ['bg-brand-600', 'text-white'];
    const inactiveClasses = ['bg-white', 'border', 'border-gray-200', 'text-gray-600', 'hover:bg-gray-50', 'hover:border-brand-200', 'hover:text-brand-600'];

    document.querySelectorAll('.category-btn').forEach(btn => {
        const btnText = btn.innerText.trim();
        const isActive = (category === 'all' && btnText === 'Todos') || btnText === category;

        if (isActive) {
            btn.classList.add(...activeClasses);
            btn.classList.remove(...inactiveClasses);
        } else {
            btn.classList.remove(...activeClasses);
            btn.classList.add(...inactiveClasses);
        }
    });

    // Filter by toggling visibility
    const cards = grid.querySelectorAll('.group[data-category]');
    let visibleCount = 0;

    cards.forEach(card => {
        // Force remove animation class to prevent re-animation on show
        card.classList.remove('animate-fade-in');
        card.style.animationDelay = '';

        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    // Handle no results message
    const noResults = document.getElementById('no-results-msg');
    if (noResults) {
        if (visibleCount === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
    }

    updateMobileVisibility();
}

// Search Logic
const desktopInput = document.getElementById('desktop-search-input');
const mobileInput = document.getElementById('mobile-search-input');
const mobileToggle = document.getElementById('mobile-search-toggle');
const closeSearchBtn = document.getElementById('close-search-btn');
const mobileSearchBar = document.getElementById('mobile-search-bar');
const logoContainer = document.getElementById('logo-container');

// Mobile Search Toggle
const menuBtn = document.getElementById('mobile-menu-btn');

if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => {
        if (e) e.preventDefault();

        const width = window.innerWidth;
        const isPhone = width < 768;

        if (!isPhone) {
            // TABLET & DESKTOP (> 768px)
            if (width >= 1000) {
                const desktopLinks = document.getElementById('desktop-links');
                if (desktopLinks) desktopLinks.classList.add('hidden');
            }

            if (desktopInput) {
                desktopInput.classList.remove('hidden');
                desktopInput.classList.remove('xl:block');
                desktopInput.classList.add('block');
                desktopInput.classList.add('mr-3');

                const icon = desktopInput.nextElementSibling;
                if (icon && icon.classList.contains('material-symbols-outlined')) {
                    icon.classList.remove('hidden');
                    icon.classList.remove('xl:block');
                }
                setTimeout(() => desktopInput.focus(), 100);
            }

            const mobileSearchLeft = document.getElementById('mobile-search-left');
            if (mobileSearchLeft) {
                mobileSearchLeft.classList.add('hidden');
                mobileSearchLeft.classList.remove('flex');
            }

            mobileToggle.classList.add('hidden');
            if (closeSearchBtn) closeSearchBtn.classList.remove('hidden', 'xl:hidden');

        } else {
            // PHONE (< 768px)
            // PHONE (< 768px)
            const mobileSearchLeft = document.getElementById('mobile-search-left');
            if (mobileSearchLeft) {
                mobileSearchLeft.classList.remove('hidden', 'xl:hidden');
                mobileSearchLeft.classList.add('flex');
            }

            if (logoContainer) logoContainer.classList.add('hidden');
            if (menuBtn) menuBtn.classList.add('hidden');

            const mInput = document.getElementById('mobile-search-input');
            if (mInput) {
                mInput.classList.add('w-full');
                mInput.classList.remove('w-80');
                setTimeout(() => mInput.focus(), 100);
            }

            mobileToggle.classList.add('hidden');
            if (closeSearchBtn) closeSearchBtn.classList.remove('hidden', 'xl:hidden');
        }
    });
}

// Close Mobile Search
if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', closeMobileSearch);
}

function closeMobileSearch() {
    const isDesktopMode = window.matchMedia('(min-width: 1000px)').matches;

    if (isDesktopMode) {
        const desktopLinks = document.getElementById('desktop-links');
        if (desktopLinks) desktopLinks.classList.remove('hidden');
        if (logoContainer) logoContainer.classList.remove('hidden');
    } else {
        if (logoContainer) logoContainer.classList.remove('hidden');
        if (menuBtn) menuBtn.classList.remove('hidden');
    }

    const mobileSearchLeft = document.getElementById('mobile-search-left');
    if (mobileSearchLeft) {
        mobileSearchLeft.classList.add('hidden');
        mobileSearchLeft.classList.remove('flex');
        mobileSearchLeft.classList.add('xl:hidden');
    }

    if (mobileToggle) mobileToggle.classList.remove('hidden');
    if (closeSearchBtn) closeSearchBtn.classList.add('hidden');

    const mInput = document.getElementById('mobile-search-input');
    if (mInput) {
        mInput.classList.add('w-full');
        // mInput.value = ''; // Optional: clear on close?
    }

    if (desktopInput) {
        if (window.innerWidth < 1280) {
            desktopInput.classList.add('hidden');
            desktopInput.classList.remove('block');
            desktopInput.classList.add('xl:block');

            const icon = desktopInput.nextElementSibling;
            if (icon && icon.classList.contains('material-symbols-outlined')) {
                icon.classList.add('hidden');
                icon.classList.add('xl:block');
            }
            desktopInput.classList.remove('mr-3');
        }
    }
}

// Search Inputs Listener
[desktopInput, mobileInput].forEach(input => {
    if (input) {
        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();

            // Sync inputs
            if (e.target === desktopInput && mobileInput) mobileInput.value = query;
            if (e.target === mobileInput && desktopInput) desktopInput.value = query;

            performSearch(query);
        });

    }
});

// Handle Resize Events
window.addEventListener('resize', () => {
    // Note: We use 1000px as our "lg" breakpoint
    // and default xl is 1280px.

    // Force Reset of Logo and Search State when crossing major breakpoints
    // If we cross 1000px, we might be stuck in "Mobile Expanded" or "Desktop Expanded".
    // Best is to close search to avoid conflict.
    if (window.innerWidth >= 1000) {
        // Switch to Desktop state handling
        // If mobile search was open (logo hidden), we need to revert.
        // Calling closeMobileSearch() is safe here.
        closeMobileSearch();
    }

    // Reset Expansion state when switching to mobile view to ensure limit is applied
    if (window.innerWidth < 640) {
        // If we just resized to mobile, maybe we want to reset expansion?
        // User said: "se despliega toda la lista ... en vez de cortarse"
        // This suggests we should enforce the limit.
        // We typically don't reset 'isExpanded' automatically unless desired, 
        // but the user complaint implies they want the "cut" view by default on resize.
        // However, if user *clicked* view more, maybe they want to keep it?
        // The complaint says "se despliega toda la lista", implying the mechanism FAILED.
        // It failed because I removed updateMobileVisibility() call below!
    }

    updateMobileVisibility();
});

function performSearch(query) {
    isExpanded = false; // Reset expansion on search
    const cards = grid.querySelectorAll('.group[data-category]');
    let visibleCount = 0;

    // Deselect category buttons visually to indicate custom search state
    if (query.length > 0) {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('bg-brand-600', 'text-white');
            btn.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200');
        });
    } else {
        // Restore current filter visual state if query is empty
        filterProducts(currentFilter);
        return;
    }

    cards.forEach(card => {
        // Stop animations
        card.classList.remove('animate-fade-in');
        card.style.animationDelay = '';

        const name = card.querySelector('h3').innerText.toLowerCase();
        const category = card.getAttribute('data-category').toLowerCase();

        // Search in Name AND Category
        if (name.includes(query) || category.includes(query)) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    // Update No Results Message
    // Update No Results Message
    const noResults = document.getElementById('no-results-msg');
    if (noResults) {
        if (visibleCount === 0) {
            noResults.classList.remove('hidden');
            noResults.innerText = `No se encontraron resultados para "${query}"`;
        } else {
            noResults.classList.add('hidden');
        }
    }

    // Auto-scroll to catalog results if user is not viewing them
    // Auto-scroll to catalog results if user is not viewing them
    const catalogSection = document.getElementById('catalogo');
    if (query.length > 0 && catalogSection) {
        const rect = catalogSection.getBoundingClientRect();
        // Scroll if top is > 150px (below header) OR if we are way past it (negative top)
        // Actually, logic: if rect.top is NOT near the header (e.g. 64px - 100px range).
        // If we are searching, we want to see results.
        // Simple heuristic: If top is > 120 (we are above it) OR top < -500 (we scrolled way past it)
        if (rect.top > 120 || rect.top < -50) {
            catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    updateMobileVisibility();
}

// Mobile View Limiter Logic
function setupLoadMoreButton() {
    // Check if exists to avoid duplicates
    if (document.getElementById('load-more-container')) return;

    const container = document.createElement('div');
    container.id = 'load-more-container';
    container.className = 'w-full flex justify-center mt-8 hidden md:hidden'; // default hidden
    container.innerHTML = `
        <button id="load-more-trigger" class="group px-8 py-3 bg-brand-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-brand-700 transition-all duration-300 flex items-center gap-2 transform active:scale-95">
            <span>Ver catálogo completo</span>
            <span class="material-symbols-outlined text-xl group-hover:translate-y-0.5 transition-transform">expand_more</span>
        </button>
    `;

    // Insert after the grid
    grid.parentNode.insertBefore(container, grid.nextSibling);

    // Event Listener
    document.getElementById('load-more-trigger').addEventListener('click', () => {
        isExpanded = true;
        updateMobileVisibility();
    });
}

function updateMobileVisibility() {
    const btnContainer = document.getElementById('load-more-container');
    const cards = Array.from(grid.querySelectorAll('.group[data-category]')); // Select only product cards

    // 1. Reset all manual display overrides first (clean slate)
    cards.forEach(card => card.style.display = '');

    // 2. Desktop Check (>= 640px for sm breakpoint)
    if (window.innerWidth >= 640) {
        if (btnContainer) btnContainer.classList.add('hidden');
        return;
    }

    // 3. Mobile Logic
    // Get currently visible matches (those not hidden by filter/search)
    const visibleMatches = cards.filter(card => !card.classList.contains('hidden'));

    if (isExpanded) {
        // Show all matches, hide button
        if (btnContainer) btnContainer.classList.add('hidden');
    } else {
        // Limit to MOBILE_LIMIT
        visibleMatches.forEach((card, index) => {
            if (index >= MOBILE_LIMIT) {
                card.style.display = 'none';
            }
        });

        // Toggle Button Visibility
        if (btnContainer) {
            if (visibleMatches.length > MOBILE_LIMIT) {
                btnContainer.classList.remove('hidden');
            } else {
                btnContainer.classList.add('hidden');
            }
        }
    }
}

// Initialize
init();
