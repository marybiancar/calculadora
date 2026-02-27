const display = document.getElementById('display');
const sciSection = document.getElementById('scientific-section');

// Adiciona números e operadores ao visor
function appendToDisplay(input) {
    display.value += input;
}

// Limpa o visor
function clearDisplay() {
    display.value = "";
}

// Calcula operações básicas usando eval (uso controlado)
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erro";
    }
}

// Cálculo de porcentagem
function calculatePercentage() {
    display.value = display.value / 100;
}

// Alterna a visibilidade da parte científica
function toggleScientific() {
    sciSection.classList.toggle('hidden');
}

// Funções Científicas
function calculateScientific(type) {
    let val = parseFloat(display.value);
    
    if (isNaN(val) && type !== 'fact') return;

    switch(type) {
        case 'sin': display.value = Math.sin(val * Math.PI / 180).toFixed(4); break;
        case 'cos': display.value = Math.cos(val * Math.PI / 180).toFixed(4); break;
        case 'tan': display.value = Math.tan(val * Math.PI / 180).toFixed(4); break;
        case 'sqrt': display.value = Math.sqrt(val); break;
        case 'fact': display.value = factorial(val); break;
    }
}

// Lógica de Fatorial
function factorial(n) {
    if (n < 0) return "Erro";
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}