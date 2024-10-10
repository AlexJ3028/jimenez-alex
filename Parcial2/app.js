document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('number-container'); // Referencia correcta
    const generateButton = document.getElementById('generate-btn');
    const sortAscButton = document.getElementById('sort-asc');
    const sortDescButton = document.getElementById('sort-desc');

    let numbers = []; // Array para almacenar los números generados

    // Función para generar un número aleatorio único entre 1 y 99
    function generateUniqueNumber() {
        if (numbers.length >= 99) {
            alert("Ya se han generado todos los números posibles.");
            return;
        }

        let newNumber;
        do {
            newNumber = Math.floor(Math.random() * 99) + 1;
        } while (numbers.includes(newNumber)); // Asegúrate de que el número sea único

        numbers.push(newNumber); // Agregar el nuevo número al array
        displayNumbers(); // Mostrar los números en el contenedor
    }

    // Función para mostrar los números en la ventana en cuadros
    function displayNumbers() {
        container.innerHTML = ''; // Limpiar el contenedor
        numbers.forEach(number => {
            const box = document.createElement('div');
            box.className = 'number-box'; // Clase para el estilo
            box.innerText = number; // Texto del número
            container.appendChild(box); // Agregar el cuadro al contenedor
        });
    }

    // Funciones para ordenar los números
    function sortAscending() {
        numbers.sort((a, b) => a - b);
        displayNumbers();
    }

    function sortDescending() {
        numbers.sort((a, b) => b - a);
        displayNumbers();
    }

    // Asignar eventos a los botones
    generateButton.addEventListener('click', generateUniqueNumber);
    sortAscButton.addEventListener('click', sortAscending);
    sortDescButton.addEventListener('click', sortDescending);
});
