// Elementos del DOM para mostrar la fecha
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Contenedor de las tareas
const tasksContainer = document.getElementById('tasksContainer');

/**
 * Función para establecer la fecha actual en los elementos del DOM.
 */
const setDate = () => {
    const date = new Date();
    // Establece el número del día
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    // Establece el nombre del día de la semana (e.g., Lunes)
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    // Establece el mes (e.g., Sep)
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    // Establece el año (e.g., 2024)
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

/**
 * Función para agregar una nueva tarea a la lista.
 * @param {Event} event - El evento de envío del formulario.
 */
const addNewTask = event => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario (recarga de la página)
    const { value } = event.target.taskText; // Obtiene el valor del campo de texto
    if (!value) return; // Si el campo está vacío, no hace nada

    // Crea un nuevo elemento de tarea
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder'); // Añade clases para el estilo
    task.addEventListener('click', changeTaskState); // Añade un evento para cambiar el estado de la tarea
    task.textContent = value; // Establece el texto de la tarea
    tasksContainer.prepend(task); // Añade la tarea al principio del contenedor de tareas
    event.target.reset(); // Limpia el campo de texto del formulario
};

/**
 * Función para cambiar el estado de una tarea (marcar como completada).
 * @param {Event} event - El evento de clic en la tarea.
 */
const changeTaskState = event => {
    event.target.classList.toggle('done'); // Alterna la clase 'done' para marcar/desmarcar la tarea
};

/**
 * Función para ordenar las tareas, moviendo las tareas completadas al final.
 * @returns {Array} - Un array con las tareas ordenadas, primero las no completadas y luego las completadas.
 */
const order = () => {
    const done = []; // Array para tareas completadas
    const toDo = []; // Array para tareas no completadas
    tasksContainer.childNodes.forEach(el => {
        // Clasifica las tareas en completadas y no completadas
        el.classList.contains('done') ? done.push(el) : toDo.push(el);
    });
    return [...toDo, ...done]; // Devuelve un array combinado con las tareas no completadas primero y luego las completadas
};

/**
 * Función para renderizar las tareas ordenadas en el contenedor de tareas.
 */
const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el)); // Añade cada tarea ordenada al contenedor
};

// Establece la fecha actual al cargar el script
setDate();
