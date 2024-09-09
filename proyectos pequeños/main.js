// Selecciona el elemento con la clase 'icon-filter'
const btnFilter = document.querySelector('.icon-filter');

// Añade un escuchador de eventos al botón 'icon-filter' para detectar clics
btnFilter.addEventListener('click', () => {
    // Selecciona el contenedor de filtros usando la clase 'container-filters'
    const containerFilter = document.querySelector('.container-filters');

    // Alterna la clase 'active' en el contenedor de filtros
    containerFilter.classList.toggle('active');
});
