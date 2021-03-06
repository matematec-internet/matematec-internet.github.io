const iconoMenu = document.querySelector('#icono-menu');
const menu = document.querySelector('#menu');
const logo_final = document.getElementById('logo_final');
const maletin = document.getElementById('maletin');

function menu_f(){
	menu.classList.toggle('active_menu');
}

const cargarImagen = (entradas, observador) => {
	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('inside');
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0.8
});

observador.observe(logo_final);
observador.observe(maletin);