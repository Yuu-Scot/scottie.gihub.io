document.addEventListener('DOMContentLoaded', function () {
    // Ocultar todas las secciones al cargar la página
    const sections = document.querySelectorAll('section');
    const imageFondo = document.getElementById('image__fondo');
    const textoFondo = document.getElementById('texto__fondo');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar el primer header automáticamente
    const firstHeader = document.getElementById('header__main');
    firstHeader.style.display = 'block';

    // Ocultar el segundo header al cargar la página
    const secondHeader = document.getElementById('header__main2');
    secondHeader.style.display = 'none';

    // Obtener todos los elementos <a> dentro del primer header
    const menuItems = document.querySelectorAll(' ul li a');

    // Obtener todos los elementos <a> dentro del segundo header
    const secondMenuItems = document.querySelectorAll('#header__main2 ul li a');

    // Agregar un event listener a cada elemento <a> del primer header
    menuItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();  // Prevenir el comportamiento por defecto del enlace

            // Ocultar el div con id="image__fondo"
            imageFondo.style.display = 'none';

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Obtener el ID de la sección a mostrar
            const targetId = this.getAttribute('data-target');

            // Mostrar la sección correspondiente
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });

    // Agregar un event listener a cada elemento <a> del segundo header
    secondMenuItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();  // Prevenir el comportamiento por defecto del enlace

            // Ocultar el primer header
            firstHeader.style.display = 'none';

            // Mostrar el segundo header
            secondHeader.style.display = 'block';
            
            // Ocultar el div con id="texto__fondo"
            textoFondo.style.display = 'none';
            
            // Ocultar todas las secciones
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Obtener el ID de la sección a mostrar
            const targetId = this.getAttribute('data-target');

            // Mostrar la sección correspondiente
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });

    // Agregar un event listener a cada elemento <a> dentro del primer header para mostrar el segundo header
    menuItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();  // Prevenir el comportamiento por defecto del enlace

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Obtener el ID de la sección a mostrar
            const targetId = this.getAttribute('data-target');

            // Mostrar la sección correspondiente
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';

                // Si la sección objetivo contiene el segundo header, mostrarlo
                if (targetSection.contains(secondHeader)) {
                    firstHeader.style.display = 'none';
                    secondHeader.style.display = 'block';
                }
            }
        });
    });
});
