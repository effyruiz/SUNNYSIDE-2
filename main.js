// PASOS PARA EL HAMBURGER

// 1. OBTENER EL DOM ELEMENT DEL BOTON CON ICONO Y DEL MENU HAMBURGUESA
const btnHam = document.querySelector('.ham-btn');
const hamMenu = document.querySelector('#menuHam');

// 2. AGREGAR UNA CLASE PARA OCULTAR EL MENU CUANDO CARGA LA PAGINA
hamMenu.classList.add('hide');

// 3. AGREGAR UN EVENTO AL BOTON DOM CADA VEZ QUE SE HACE CLICK A EL
btnHam.addEventListener('click', (e) => toggleMenu(e));

// 4. DESPUES DE HACE CLICK AL BOTON SE DEBERIA MOSTRAR/OCULTAR EL MENU DE HAMBURGUESA
function toggleMenu(e) {
    e.preventDefault();
    hamMenu.classList.toggle('hide');
}
