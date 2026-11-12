// Menú móvil: mostrar/ocultar los enlaces al hacer clic en el ícono
const iconoMenu = document.getElementById('icono-menu');
const enlacesNav = document.getElementById('enlaces-nav');

iconoMenu.addEventListener('click', () => {
    enlacesNav.classList.toggle('activo');
    iconoMenu.classList.toggle('fa-bars');
    iconoMenu.classList.toggle('fa-xmark');
});

// Cierra el menú al hacer clic en un enlace (en móvil)
enlacesNav.querySelectorAll('a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        enlacesNav.classList.remove('activo');
        iconoMenu.classList.add('fa-bars');
        iconoMenu.classList.remove('fa-xmark');
    });
});

// Año dinámico en el pie de página
const elementoAnio = document.getElementById('anio');
if (elementoAnio) elementoAnio.textContent = new Date().getFullYear();
