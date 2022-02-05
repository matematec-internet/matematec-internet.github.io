window.addEventListener("scroll", function(){var header = document.querySelector("header"); header.classList.toggle("sticky", window.scrollY > 0);})

function inicio(){
	document.getElementById('inicio').scrollIntoView();
	menu.classList.toggle('active_menu');
}

function servicios(){
	document.getElementById('servicios').scrollIntoView();
	menu.classList.toggle('active_menu');
}

function venta(){
	document.getElementById('venta').scrollIntoView();
	menu.classList.toggle('active_menu');
}

function horarios(){
	document.getElementById('horarios').scrollIntoView();
	menu.classList.toggle('active_menu');
}

function impresiones(){
	document.getElementById('impresiones').scrollIntoView();
	menu.classList.toggle('active_menu');
}