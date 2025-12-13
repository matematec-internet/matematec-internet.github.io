document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('mobile-menu-btn');
	const menu = document.getElementById('mobile-menu');
	const links = document.querySelectorAll('.mobile-link');

	function toggleMenu() {
		// Toggle visibility classes
		const isOpen = menu.classList.contains('scale-y-100');

		if (isOpen) {
			menu.classList.remove('scale-y-100', 'opacity-100', 'pointer-events-auto');
			menu.classList.add('scale-y-0', 'opacity-0', 'pointer-events-none');
		} else {
			menu.classList.remove('scale-y-0', 'opacity-0', 'pointer-events-none');
			menu.classList.add('scale-y-100', 'opacity-100', 'pointer-events-auto');
		}
	}

	if (btn && menu) {
		btn.addEventListener('click', toggleMenu);

		// Close on link click
		links.forEach(link => {
			link.addEventListener('click', toggleMenu);
		});
	}

	// Active Navigation (Scroll Spy)
	const sections = document.querySelectorAll('#inicio, #catalogo, #servicios, #impresion, #ubicacion');
	const navLinks = document.querySelectorAll('nav a[href^="#"]');

	if (sections.length > 0) {
		const observerOptions = {
			root: null,
			rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
			threshold: 0
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const id = entry.target.getAttribute('id');

					// Reset all links
					navLinks.forEach(link => {
						link.classList.remove('text-brand-600');
						link.classList.add('text-gray-600');
					});

					// Highlight active links (desktop & mobile)
					const activeLinks = document.querySelectorAll(`nav a[href="#${id}"]`);
					activeLinks.forEach(link => {
						link.classList.remove('text-gray-600');
						link.classList.add('text-brand-600');
					});
				}
			});
		}, observerOptions);

		sections.forEach(section => {
			observer.observe(section);
		});
	}


	document.addEventListener('click', (e) => {
		const anchor = e.target.closest('a[href^="#"]');
		if (!anchor) return;

		const href = anchor.getAttribute('href');
		if (!href || href === '#') return;

		const id = decodeURIComponent(href.slice(1));
		const target = document.getElementById(id);
		if (!target) return;

		e.preventDefault();

		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const behavior = reduceMotion ? 'auto' : 'smooth';

		// Si tienes header fijo, usa scroll-margin-top en CSS o calcula offset
		target.scrollIntoView({ behavior, block: 'start' });

		// Opcional: sincronizar hash sin provocar salto
		history.replaceState(null, '', `#${id}`);

		// Accesibilidad
		const hadTabIndex = target.hasAttribute('tabindex');
		if (!hadTabIndex) target.setAttribute('tabindex', '-1');
		target.focus({ preventScroll: true });
		if (!hadTabIndex) target.removeAttribute('tabindex');
	});


	// Map Interaction Logic
	const mapaBloqueo = document.querySelector('.bloqueo-scroll');
	if (mapaBloqueo) {
		mapaBloqueo.addEventListener('click', function () {
			this.style.pointerEvents = 'none';
		});
	}
});
