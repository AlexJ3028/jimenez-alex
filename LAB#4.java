<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Campo de Entrada con Texto Invertido</title>
</head>
<body>

    <h3>Escribe algo en el campo de entrada:</h3>
    
    <!-- Campo de entrada -->
    <input type="text" id="inputText" placeholder="Escribe aquí...">
    
    <!-- Span donde se mostrará el texto invertido -->
    <p>Texto invertido: <span id="reversedText"></span></p>

    <script>
        // Seleccionar los elementos
        const inputField = document.getElementById('inputText');
        const spanReversedText = document.getElementById('reversedText');

        // Agregar el evento de entrada en tiempo real
        inputField.addEventListener('input', function() {
            // Obtener el valor del campo de entrada
            const inputValue = inputField.value;
            // Invertir el texto
            const reversedValue = inputValue.split('').reverse().join('');
            // Actualizar el span con el texto invertido
            spanReversedText.textContent = reversedValue;
        });
    </script>

</body>
</html>

