function criaSubtarefa(lista, titulo){
    const linha = document.createElement('li')
    linha.classList.add('lista__subtarefa')
    const subtarefa =
    `<div>
        <input type="checkbox" class="checkboxSubtarefa" onclick="subtarefaConcluida(this)">
        <p class="lista__subtarefa-nome">${titulo}</p>
    </div>
    <img class="lista__substarefa-deletar" src="../../assets/icone_deletar_tarefa-subtarefa.png" alt="icone deletar substarefa">`
    linha.innerHTML = subtarefa
    lista.appendChild(linha)
}