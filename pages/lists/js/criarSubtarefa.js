function criaSubtarefa(lista, titulo){
    const linha = document.createElement('li')
    linha.classList.add('list__subtask')
    const subtarefa =
    `<div>
        <input type="checkbox" class="checkboxSubtask" onclick="subtarefaConcluida(this)">
        <p class="list__subtask-name">${titulo}</p>
    </div>
    <img class="list__subtask-delete" src="../../assets/icone_deletar_tarefa-subtarefa.png" alt="icone deletar substarefa">`
    linha.innerHTML = subtarefa
    lista.appendChild(linha)
}