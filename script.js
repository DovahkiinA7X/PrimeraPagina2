console.log("primera página")

let currentPage = 1; // Página inicial

function changePage(pageNumber) {    
  // Ocultar todo el contenido
  for (let i = 1; i <= 3; i++) {
    document.getElementById('page' + i).style.display = 'none';
  }
  
  // Mostrar el contenido de la página seleccionada
  document.getElementById('page' + pageNumber).style.display = 'block';
  
  // Actualizar la página actual
  currentPage = pageNumber;

  // Habilitar/Deshabilitar botones
  togglePaginationButtons();
}

function togglePaginationButtons() {
  // Deshabilitar el botón "Previous" si estamos en la página 1
  document.getElementById('prev').classList.toggle('disabled', currentPage === 1);
  
  // Deshabilitar el botón "Next" si estamos en la página 3
  document.getElementById('next').classList.toggle('disabled', currentPage === 3);
}