// Referência ao campo de entrada do ciclo menstrual
let dataCicloInput = document.getElementById('dataCiclo');

// Preencher automaticamente o campo data com a data de hoje
// let hoje = new Date();
// dataCicloInput.value = hoje.toISOString().split("T")[0];

// Abrir o seletor de data automaticamente ao clicar no campo
dataCicloInput.addEventListener("click", () => {
    if (dataCicloInput.showPicker) {
        dataCicloInput.showPicker();
    } else {
        console.log("O método showPicker() não é suportado neste navegador.");
    }
});

//Função para preencher o select com os ciclos menstruais mais comuns
function preencherSelect() {
    for (let i = 21; i <= 35; i++) {
        duracaoCiclo.innerHTML += `<option value="${i}" ${i === 28 ? 'selected' : ''}>${i}</option>`;
    }
}


//Inicializando Select
preencherSelect();