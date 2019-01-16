function criaTarefa(lista, titulo){
    const linha = document.createElement('li')
    linha.classList.add('list__task')
    const tarefa =
    `
    <div class="list__task-name">
        <div>
            <input type="checkbox" class="list__task-checkbox" id="checkboxTarefa3" onclick="tarefaConcluida(this)">
            <p class="list__task-title">${titulo}</p>
        </div>
        <img class="list__task-delete" src="../../assets/icone_deletar_tarefa-subtarefa.png" alt="icone deletar tarefa">
    </div>
    <ul class="list__subtasks"></ul>
    <div class="list__add-subtask add-task">
        <label for="adicionarSubtarefa">
            <input class="lists__input-add-subtask" type="text" id="adicionarSubtarefa" placeholder="Adicionar subtarefa">
        </label>
        <img class="list__btn-add-subtask" src="../../assets/botao_adicionar.png" alt="botão adicionar subtarefa">
    </div>
    `
    linha.innerHTML = tarefa
    lista.appendChild(linha)
}