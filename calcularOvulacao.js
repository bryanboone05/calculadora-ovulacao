// Recebendo media dos ciclos menstruais
let duracaoCiclo = document.getElementById("duracaoCiclo");

// Transformando em inteiro
let duracaoCicloConvertido = parseInt(duracaoCiclo.value);

//Função para preencher o select com os ciclos menstruais mais comuns
function preencherSelect() {
    for (let i = 21; i <= 35; i++) {
        duracaoCiclo.innerHTML += `<option value="${i}" ${i === 28 ? 'selected' : ''}>${i}</option>`;
    }
}

//Inicializando Select
preencherSelect();


// Referência ao campo de entrada do ciclo menstrual
let dataCicloInput = document.getElementById('dataCiclo');

let hoje = new Date();
dataCicloInput.value = hoje.toISOString().split("T")[0];

// Abrir o seletor de data automaticamente ao clicar no campo
dataCicloInput.addEventListener("click", () => {
    if (dataCicloInput.showPicker) {
        dataCicloInput.showPicker();
    } else {
        console.log("O método showPicker() não é suportado neste navegador.");
    }
});

// Função para calcular o dia da proxima ovulação
function calcularOvulacao(event) {

    // Função para previnir que o formulário recarregue a página ao dar submit
    event.preventDefault();

       // Carregando data informada pelo usuário no formulário
    let dataCiclo = new Date(dataCicloInput.value + "T00:00:00");


    // Incrementado 14 dias à data do ciclo recebida no input
    dataCiclo.setDate(dataCiclo.getDate() + 13);

    // Definindo dia da ovulação
    let diaOvulacao = dataCiclo.getDate();
    //Definindo mês da ovulação
    let mesOvulacao = dataCiclo.getMonth() + 1;

    // Adiciona 1 dia para calcular o próximo dia após a ovulação
    dataCiclo.setDate(dataCiclo.getDate() + 1);

    // Calcula o próximo dia (dia seguinte)
    let diaSeguinte = dataCiclo.getDate();

    // Recebendo data de Hoje
    let dataHoje = new Date();
    // Recebendo mês de hoje
    let mesHoje = dataHoje.getMonth() + 1;

    //Mostrar Resultado na tela do usuário
    let resultado = document.getElementById("resultado");
    if (mesHoje == mesOvulacao) {
        resultado.innerHTML = `A sua próxima ovulação deve acontecer entre os dias <span class = "spanTexto">${diaOvulacao}</span> e <span class = "spanTexto">${diaSeguinte}</span> desse mês! <span class = "spanIcone">💓</span>`;
    } else {
        resultado.innerHTML = `A sua próxima ovulação deve acontecer entre os dias <span class = "spanTexto">${diaOvulacao}</span> e <span class = "spanTexto">${diaSeguinte}</span> do mês que vem! <span class = "spanIcone">💓</span>`;
    }

    console.log(diaOvulacao, diaSeguinte);

    console.log(dataCiclo);

    

    // Adiciona X dias para calcular a próxima menstruação
    dataCiclo.setDate(dataCiclo.getDate() + duracaoCicloConvertido);
    let proximaMenstruacao = dataCiclo.getDate();
    // resultado.innerHTML += `Com base no seu ciclo a próxima menstruação deve ocorrer no dia ${proximaMenstruacao}`;
}