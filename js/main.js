const toDoList = document.querySelector('.listas')

let inputAddSubtarefa = Array.prototype.slice.call(document.querySelectorAll('.listas__input-adicionar-subtarefa'))
let botaoAddSubtarefa = Array.prototype.slice.call(document.querySelectorAll('.lista__botao-adicionar-subtarefa'))

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
    }
})

