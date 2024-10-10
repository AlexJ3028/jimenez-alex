// Módulo para gestionar candidatos
const CandidateModule = (() => {
    let candidates = []; // Array para almacenar candidatos

    // Función para agregar candidatos
    const addCandidate = (name, color) => {
        const candidate = { name, color, points: 0 };
        candidates.push(candidate);
        UIModule.updateCandidateList(); // Actualizar la lista visualmente
        UIModule.updateBarChart(); // Actualizar el gráfico de barras
    };

    // Función para eliminar un candidato
    const removeCandidate = (index) => {
        candidates.splice(index, 1);
        UIModule.updateCandidateList();
        UIModule.updateBarChart();
    };

    // Función para agregar puntos a un candidato
    const addPoints = (index) => {
        candidates[index].points += 1;
        UIModule.updateBarChart();
    };

    // Función para obtener la lista de candidatos
    const getCandidates = () => candidates;

    return {
        addCandidate,
        removeCandidate,
        addPoints,
        getCandidates
    };
})();

// Módulo para manejar la interfaz de usuario
const UIModule = (() => {
    const candidateList = document.getElementById('candidate-list');
    const barChart = document.getElementById('bar-chart');

    // Actualizar la lista de candidatos
    const updateCandidateList = () => {
        candidateList.innerHTML = '<h2>Lista de Candidatos</h2>';
        CandidateModule.getCandidates().forEach((candidate, index) => {
            const candidateDiv = document.createElement('div');
            candidateDiv.className = 'candidate';
            candidateDiv.innerHTML = `
                <span style="color: ${candidate.color}">${candidate.name}</span>
                <button onclick="CandidateModule.removeCandidate(${index})">Eliminar</button>
                <button onclick="CandidateModule.addPoints(${index})">Agregar Punto</button>
                <span>Puntos: ${candidate.points}</span>
            `;
            candidateList.appendChild(candidateDiv);
        });
    };

    // Actualizar el gráfico de barras
    const updateBarChart = () => {
        barChart.innerHTML = '<h2>Gráfico de Barras</h2>';
        const totalPoints = CandidateModule.getCandidates().reduce((acc, candidate) => acc + candidate.points, 0);
        CandidateModule.getCandidates().forEach(candidate => {
            const bar = document.createElement('div');
            bar.className = 'bar';
            const percentage = totalPoints === 0 ? 0 : (candidate.points / totalPoints) * 100;
            bar.style.width = `${percentage}%`;
            bar.style.backgroundColor = candidate.color;
            bar.textContent = `${candidate.name} - ${percentage.toFixed(2)}%`;
            barChart.appendChild(bar);
        });
    };

    return {
        updateCandidateList,
        updateBarChart
    };
})();

// Módulo del controlador para manejar eventos
const ControllerModule = (() => {
    const nameInput = document.getElementById('candidate-name');
    const colorSelect = document.getElementById('color-select');
    const addButton = document.getElementById('add-candidate');

    // Inicializar eventos
    const init = () => {
        addButton.addEventListener('click', () => {
            const name = nameInput.value.trim();
            const color = colorSelect.value || getRandomColor();

            if (name) {
                CandidateModule.addCandidate(name, color);
                nameInput.value = '';
                colorSelect.value = '';
            }
        });

        UIModule.updateCandidateList();
        UIModule.updateBarChart();
    };

    // Generar color aleatorio
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return {
        init
    };
})();

// Inicializar el sistema
document.addEventListener('DOMContentLoaded', () => {
    ControllerModule.init();
});
