// Asi se escribe un comentario
console.log("objeto comentario", document);

// Atrapa el elemento del dom (elemento renderizado en la web)
const menuObject = document.getElementById('menuHam');

// Una vez tengamos el objecto dom/html podemos modificarlo, agregar propiedades, clases y alterar su estilo
menuObject.classList.add('hide');

// cambiar el color del elemento
menuObject.style.color = 'green';

// Agregar eventos a elementos html

// capturar el elemento al que se le agrega el evento (accediendo por clases como css)
const headerHam = document.querySelector('.header-ham .hamburguer-menu');

// Al hacer click llama a una funcion
headerHam.addEventListener('click', function(e) {
    console.log("le diste click a este elemento dom", e.target);
});