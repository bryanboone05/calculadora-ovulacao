// Função para calcular o dia da proxima ovulação
function calcularOvulacao(event) {

    // Função para previnir que o formulário recarregue a página ao dar submit
    event.preventDefault();

    // Carregando data informada pelo usuário no formulário
    let dataCiclo = new Date(document.getElementById('dataCiclo').value + "T00:00:00");

    // Incrementado 14 dias à data do ciclo recebida no input
    dataCiclo.setDate(dataCiclo.getDate() + 14);

    // Definindo dia da ovulação
    let diaOvulacao = dataCiclo.getDate();
    //Definindo mês da ovulação
    let mesOvulacao = dataCiclo.getMonth() + 1 ;

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
    if (mesHoje == mesOvulacao){
        resultado.innerHTML = `A sua próxima ovulação deve acontecer entre os dias <span class = "spanTexto">${diaOvulacao}</span> e <span class = "spanTexto">${diaSeguinte}</span> desse mês! <span class = "spanIcone">💓</span>`;
    } else {
        resultado.innerHTML = `A sua próxima ovulação deve acontecer entre os dias <span class = "spanTexto">${diaOvulacao}</span> e <span class = "spanTexto">${diaSeguinte}</span> do mês que vem! <span class = "spanIcone">💓</span>`;
    }

    console.log(diaOvulacao, diaSeguinte);
}

