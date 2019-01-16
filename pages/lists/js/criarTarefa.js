function criaTarefa(lista, titulo){
    const linha = document.createElement('li')
    linha.classList.add('lista__tarefa')
    const tarefa =
    `
    <div class="lista__tarefa-nome">
        <div>
            <input type="checkbox" class="lista__tarefa-checkbox" id="checkboxTarefa3" onclick="tarefaConcluida(this)">
            <p class="lista__tarefa-titulo">${titulo}</p>
        </div>
        <img class="lista__tarefa-deletar" src="../../assets/icone_deletar_tarefa-subtarefa.png" alt="icone deletar tarefa">
    </div>
    <ul class="lista__subtarefas"></ul>
    <div class="lista__adicionar-subtarefa add-task">
        <label for="adicionarSubtarefa">
            <input class="listas__input-adicionar-subtarefa" type="text" id="adicionarSubtarefa" placeholder="Adicionar subtarefa">
        </label>
        <img class="lista__botao-adicionar-subtarefa" src="../../assets/botao_adicionar.png" alt="botão adicionar subtarefa">
    </div>
    `
    linha.innerHTML = tarefa
    lista.appendChild(linha)
}