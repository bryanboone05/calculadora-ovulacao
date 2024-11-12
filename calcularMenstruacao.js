function calcularMenstruacao() {

    // Recebendo média dos ciclos menstruais
    let duracaoCiclo = document.getElementById("duracaoCiclo");

    // Transformando em inteiro
    let duracaoCicloConvertido = parseInt(duracaoCiclo.value);

    // Carregando data informada pelo usuário no formulário
    let dataCiclo = new Date(dataCicloInput.value + "T00:00:00");

    dataCiclo.setDate(dataCiclo.getDate() + duracaoCicloConvertido);

    // Definindo dia da menstruação
    let diaMenstruacao = dataCiclo.getDate();

    //Definindo mês da menstruação
    let mesMenstruacao = dataCiclo.getMonth() + 1;

    // Recebendo data de Hoje
    let dataHoje = new Date();
    // Recebendo mês de hoje
    let mesHoje = dataHoje.getMonth() + 1;

    //Mostrar Resultado na tela do usuário
    let resultado = document.getElementById("resultado");
    if (mesHoje == mesMenstruacao) {
        resultado.innerHTML += `<br>Com base no seu ciclo sua proxima menstruação está prevista para o dia <span class = "spanTexto">${diaMenstruacao}</span> desse mês!<span class = "spanIcone">🩸</span>`;
    } else {
        resultado.innerHTML += `<br>Com base no seu ciclo sua proxima menstruação está prevista para o dia <span class = "spanTexto">${diaMenstruacao}</span> do mês que vem!<span class = "spanIcone">🩸</span>`;
    }
}

