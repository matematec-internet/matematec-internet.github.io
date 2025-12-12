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
});
