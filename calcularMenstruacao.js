let duracaoCiclo = document.getElementById("duracaoCiclo");

//Função para preencher o select com os ciclos menstruais mais comuns
function preencherSelect() {
    for (let i = 21; i <= 35; i++) {
        duracaoCiclo.innerHTML += `<option value="${i}" ${i === 28 ? 'selected' : ''}>${i}</option>`;
    }
}

preencherSelect();