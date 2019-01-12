const toDoList = document.querySelector('.listas')
const nodeListaBotaoAdicionarTarefa = document.querySelectorAll('.listas__botao-adicionar-tarefa')
const nodeListInputAdicionarTarefa = document.querySelectorAll('.listas__input-adicionar-tarefa')
const nodeListTarefas = document.querySelectorAll('.listas__item-tarefas')

const botoes = Array.prototype.slice.call(nodeListaBotaoAdicionarTarefa)
const input = Array.prototype.slice.call(nodeListInputAdicionarTarefa)
const listas = Array.prototype.slice.call(nodeListTarefas)

for(let i = 0; i < botoes.length; i++){
    botoes[i].addEventListener('click', function(){
        const lista = listas[i]
        const titulo = input[i].value
        criaTarefa(lista, titulo)
    })
}


toDoList.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
        if (event.target.classList.contains('lista__substarefa-deletar')) {
            deletar(event.target)
        }
        if (event.target.classList.contains('lista__tarefa-deletar')) {
            deletar(event.target.parentNode)
        }
    }
})

function criaTarefa(lista, titulo){
    const linha = document.createElement('li')
        linha.classList.add('lista__tarefa')
        const tarefa =
        `<div class="lista__tarefa-nome">
            <div>
                <input type="checkbox" id="checkboxTarefa1" onclick="tarefaConcluida()">
                <p>${titulo}</p>
            </div>
            <img class="lista__tarefa-deletar" src="../../assets/icone_deletar_tarefa-subtarefa.png" alt="icone deletar tarefa">
        </div>
        <div class="lista__adicionar-subtarefa adicionar-item">
        <label for="adicionarSubtarefa">
            <input type="text" id="adicionarSubtarefa" placeholder="Adicionar subtarefa">
        </label>
        <img class="lista__botao-adicionar-subtarefa" src="../../assets/botao_adicionar.png" alt="botão adicionar subtarefa">
        </div>`
        linha.innerHTML = tarefa
        lista.appendChild(linha)
}

function deletar(evento) {
    evento.parentNode.classList.add('fadeOut')
    setTimeout(function () {
        evento.parentNode.remove()
    }, 500)
}