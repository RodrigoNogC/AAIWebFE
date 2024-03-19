// Inicio da Calculadora
function calcularIMC() {

    // criando as variáveis
    var pesoInput = document.getElementById('peso');
    var alturaInput = document.getElementById('altura');
    var resultadoIMC = document.getElementById('resultado_imc');

    var peso = parseFloat(pesoInput.value);
    var altura = parseFloat(alturaInput.value);

    // Tratativa de erro
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores numéricos válidos para peso e altura.');
        return;
    }

    // Inicio da conta
    var imc = peso / (altura * altura);

    // Visualização dos Status do IMC
    var status = '';
    if (imc < 18.5) {
        status = 'Abaixo do peso';
    } else if (imc < 24.9) {
        status = 'Peso normal';
    } else if (imc < 29.9) {
        status = 'Sobrepeso';
    } else if (imc < 34.9) {
        status = 'Obesidade grau 1';
    } else if (imc < 39.9) {
        status = 'Obesidade grau 2';
    } else {
        status = 'Obesidade grau 3';
    }

    // Inserir os dados na tela
    resultadoIMC.innerHTML = '<h2>Resultado</h2>';
    resultadoIMC.innerHTML += `<p>Valor do IMC: ${imc.toFixed(2)}</p>`;
    resultadoIMC.innerHTML += `<p>Status do IMC: ${status}</p>`;
}

// Chamando a função 
document.getElementById('calcular').addEventListener('click', calcularIMC);
