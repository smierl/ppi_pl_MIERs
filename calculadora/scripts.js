// Selecciona el campo de texto donde se mostrarán los valores y resultados de la calculadora
const display = document.querySelector("#display");

// Selecciona todos los botones de la calculadora (numeros y operadores)
const buttons = document.querySelectorAll("button");

// Agrega un evento 'click' a cada botón
buttons.forEach((btn) => {
    // Cada vez que un botón es presionado, se ejecuta esta función
    btn.addEventListener("click", () => {
        // Si el botón presionado es el "=" (botón de igual)
        if(btn.id === "="){
            // Evalúa la expresión matemática que está en el display y muestra el resultado
            // eval() toma una cadena de texto con una operación matemática y la ejecuta
            display.value = eval(display.value);
        } 
        // Si el botón presionado es "AC" (borrar todo)
        else if (btn.id === "ac"){
            // Limpia completamente el contenido del display
            display.value = "";
        } 
        // Si el botón presionado es "DE" (eliminar el último dígito)
        else if (btn.id == "de"){
            // Elimina el último carácter del contenido del display
            display.value = display.value.slice(0, -1);
        } 
        // Si cualquier otro botón es presionado (números u operadores)
        else {
            // Agrega el valor del botón presionado al final del contenido actual del display
            display.value += btn.id;
        }
    });
});

