// Agrega un evento de escucha para el evento 'scroll' en la ventana
window.addEventListener('scroll', () => {
    // Verifica si la ventana ha llegado a 100 píxeles antes del final del contenido del documento
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
        // Desplaza la ventana de vuelta al principio de la página
        window.scrollTo(0, 0);
    }
});
