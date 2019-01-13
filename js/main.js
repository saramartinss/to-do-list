const toDoList = document.querySelector('.listas')

function criaSubtarefa(lista, titulo){
    const linha = document.createElement('li')
    linha.classList.add('lista__subtarefa')
    const subtarefa =
    `<div>
        <input type="checkbox" id="checkboxSubtarefa1" onclick="tarefaConcluida()">
        <p>${titulo}</p>
    </div>
    <img class="lista__substarefa-deletar" src="../../assets/icone_deletar_tarefa-subtarefa.png"
        alt="icone deletar substarefa">`
    linha.innerHTML = subtarefa
    lista.appendChild(linha)
}

function criaTarefa(lista, titulo){
    const linha = document.createElement('li')
    linha.classList.add('lista__tarefa')
    const tarefa =
    `
    <div class="lista__tarefa-nome">
        <div>
            <input type="checkbox" id="checkboxTarefa1" onclick="tarefaConcluida()">
            <p>${titulo}</p>
        </div>
        <img class="lista__tarefa-deletar" src="../../assets/icone_deletar_tarefa-subtarefa.png" alt="icone deletar tarefa">
    </div>
    <ul class="lista__subtarefas">
    </ul>
    <div class="lista__adicionar-subtarefa adicionar-item">
        <label for="adicionarSubtarefa">
                                            <input class="listas__input-adicionar-subtarefa" type="text" id="adicionarSubtarefa" placeholder="Adicionar subtarefa">
                                        </label>
                                        <img class="lista__botao-adicionar-subtarefa" src="../../assets/botao_adicionar.png"
                                            alt="botão adicionar subtarefa">
    </div>
    `
    linha.innerHTML = tarefa
    lista.appendChild(linha)
}

function deletar(evento) {
    evento.parentNode.classList.add('fadeOut')
    setTimeout(function () {
        evento.parentNode.remove()
    }, 500)
}

toDoList.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
        if (event.target.classList.contains('lista__substarefa-deletar')) {
            deletar(event.target)
        }
        if (event.target.classList.contains('lista__tarefa-deletar')) {
            deletar(event.target.parentNode)
        }
        if (event.target.classList.contains('lista__botao-adicionar-subtarefa')){
            const div = event.target.parentNode
            const input = div.firstChild.nextSibling.firstChild.nextSibling
            const titulo = input.value
            const lista = div.parentNode.childNodes[3]
            criaSubtarefa(lista, titulo)
            input.value = ''
        }
        if (event.target.classList.contains('listas__botao-adicionar-tarefa')){
            const div = event.target.parentNode
            const input = div.firstChild.nextSibling.firstChild.nextSibling
            const titulo = input.value
            const lista = div.parentNode.childNodes[5]
            criaTarefa(lista, titulo)
            input.value = ''
        }
    }
})



function subtarefaConcluida(input){
    input.nextElementSibling.classList.toggle('checked')
    const listaSubtarefas = input.parentNode.parentNode.parentNode
    const nodeListInputCheckbox = listaSubtarefas.querySelectorAll('.checkboxSubtarefa')
    const inputsCheckbox = Array.prototype.slice.call(nodeListInputCheckbox)






    
}

function tarefaConcluida(input){
    const listaSubtarefas = input.parentNode.parentNode.parentNode
    const nodeListInputCheckbox = listaSubtarefas.querySelectorAll('.checkboxSubtarefa')
    const inputsCheckbox = Array.prototype.slice.call(nodeListInputCheckbox)

    input.nextElementSibling.classList.toggle('checked')

    if(input.nextElementSibling.classList.contains('checked')){
        for(const box of inputsCheckbox){
            if(box.nextElementSibling.classList.contains('lista__subtarefa-nome')){
                box.nextElementSibling.classList.remove('lista__subtarefa-nome')
                box.nextElementSibling.classList.add('checked')
                box.checked = true
            }
        }
    } else {
        for(const box of inputsCheckbox){
            if(box.nextElementSibling.classList.contains('checked')){
                box.nextElementSibling.classList.remove('checked')
                box.nextElementSibling.classList.add('lista__subtarefa-nome')
                box.checked = false
            }
        }
    }    
}